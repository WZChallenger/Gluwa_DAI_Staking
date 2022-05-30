import { task } from "hardhat/config";
import { 
  YDAIToken__factory,
} from "../../typechain-types";
import sleep from "../../utils/sleep";

const VERIFY_DELAY = 100000;

task("deploy-ydai")
  .addFlag("verify")
  .setAction(async (taskArgs, { ethers, run }) => {
    const signers = await ethers.getSigners();

    console.log("Deploying yDAI:");
    const yDAI = await new YDAIToken__factory(signers[0]).deploy();
    console.log(`yDAI deployed at: ${yDAI.address}`);
    if (taskArgs.verify) {
      console.log("Verifying yDAI, can take some time");
      await yDAI.deployed();
      await sleep(VERIFY_DELAY);
      await run("verify:verify", {
        address: yDAI.address,
        constructorArguments: [],
      });
    }
    return yDAI.address;
  });
