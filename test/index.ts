import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";
import { resolve } from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: resolve(__dirname, "../../.env") });

describe("DAIStaking", function () {
  let yDAI: Contract;
  let pool: Contract;

  beforeEach(async function () {
    const YDAI = await ethers.getContractFactory("yDAIToken");
    const Pool = await ethers.getContractFactory("DAIStaking");

    yDAI = await YDAI.deploy();
    await yDAI.deployed();

    pool = await Pool.deploy(yDAI.address, process.env.YDAI_ADDRESS as string);
    await pool.deployed();

    await yDAI.addAuthorized(pool.address);
  });

  it("Should fail if rewards is not correct 1)", async function () {
    const [user] = await ethers.getSigners();

    await pool.connect(user).deposit(100);

    const rewards = await pool.getUserRewards(user.address);

    expect(rewards).to.equal(BigNumber.from("112"));
    console.log('Rewards for 100: ', rewards.toString());

  });

  it("Should fail if rewards is not correct 2)", async function () {
    const [user] = await ethers.getSigners();

    pool.lock(1653919888, 31536000);
    console.log('Lock for 1 year from 2022-05-30 02:10:57 PM');

    await pool.connect(user).deposit(100);

    const rewards = await pool.getUserRewards(user.address);

    expect(parseInt(rewards)).to.greaterThanOrEqual(130);
    expect(parseInt(rewards)).to.lessThanOrEqual(135);

    console.log('Rewards for 100: ', rewards.toString());
  });
});
