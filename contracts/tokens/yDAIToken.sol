// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../libraries/Authorizable.sol";

contract yDAIToken is ERC20, Authorizable {
  constructor() ERC20("yield DAI", "yDAI") {
    _mint(msg.sender, 1000 * 10 ** 18);
  }

  /// @notice Creates `_amount` token to `_to`. Must only be called by the authorizer.
  function mint(address _to, uint256 _amount) public onlyAuthorized {
    _mint(_to, _amount);
  }

  /// @notice Destroys `_amount` tokens from `_from`, Must only be called by the authorizer.
  function burn(address _from, uint256 _amount) public onlyAuthorized {
    _burn(_from, _amount);
  }
}
