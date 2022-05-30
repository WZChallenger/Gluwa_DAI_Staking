// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./tokens/yDAIToken.sol";
import "hardhat/console.sol";

contract DAIStaking {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    using SafeERC20 for yDAIToken;

    struct UserInfo {
        uint256 amount;
        uint256 rewardDebt;
    }

    yDAIToken govToken;
    IERC20 lpToken;

    uint256 public START_TIMESTAMP;
    uint256 public END_TIMESTAMP;

    mapping(address => UserInfo) public userInfo;

    event Deposit(address indexed user, uint256 amount);

    constructor(yDAIToken _govToken, address _lpToken) {
        govToken = _govToken;
        lpToken = IERC20(_lpToken);
    }

    function harvestRewards(address _holder, uint256 _amount) internal {
        uint256 GovTokenForFarmer = getReward(_amount);

        govToken.mint(address(_holder), GovTokenForFarmer);

        UserInfo storage user = userInfo[_holder];
        user.rewardDebt = user.rewardDebt.add(GovTokenForFarmer);
    }

    function getReward(uint256 _amount) public view returns (uint256) {
        uint256 amount = 0;

        if (
            block.timestamp >= START_TIMESTAMP &&
            block.timestamp <= END_TIMESTAMP
        ) {
            amount = END_TIMESTAMP
                .sub(block.timestamp)
                .mul(1e12)
                .div(365 days)
                .mul(135)
                .mul(_amount)
                .div(1e14);
        } else {
            amount = _amount.mul(112).div(100);
        }

        return amount;
    }

    // View function to see pending yDAI on frontend.
    function getUserRewards(address _user) external view returns (uint256) {
        UserInfo storage user = userInfo[_user];

        return user.rewardDebt;
    }

    function deposit(uint256 _amount) public {
        require(
            _amount > 0,
            "DAIStaking::deposit: amount must be greater than 0"
        );

        UserInfo storage user = userInfo[msg.sender];
        user.amount = user.amount.add(_amount);

        emit Deposit(msg.sender, _amount);

        harvestRewards(msg.sender, _amount);
    }

    function lock(uint256 _newStartTimestamp, uint256 period) public {
        require(
            _newStartTimestamp > END_TIMESTAMP,
            "DAIStaking::lock: lock period cannot be overlapped"
        );

        require(period > 0, "DAIStaking::lock: period must be greater than 0");

        START_TIMESTAMP = _newStartTimestamp;
        END_TIMESTAMP = START_TIMESTAMP.add(period);
    }

    // claim govtoken
    function exchange() public {
        UserInfo storage user = userInfo[msg.sender];

        require(
            user.rewardDebt > 0,
            "DAIStaking::lock: no supplied any amount"
        );

        govToken.burn(msg.sender, user.rewardDebt);
    }
}
