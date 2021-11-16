// deploy/00_deploy_your_contract.js

const {ethers} = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  // const {getNamedAccounts, deployments, getChainId, ContractFactory} = args

  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
  // const chainId = await getChainId();

  let deployed = await deploy("DOG20", {
    from: deployer,
    // args: [[deployer,]],
    log: true,
  });
  const DOG20Address = deployed.address
  const DOG20 = await ethers.getContractAt("DOG20", deployed.address);
  deployed = await deploy("PX", {
    from: deployer,
    // args: [
    //   "LONG LIVE D O G", "PX", DOG20.address
    // ],
    log: true,
  });
  const PX = await ethers.getContractAt("PX", deployed.address);
  await PX.__PX_init("LONG LIVE D O G", "PX", DOG20Address)
  // const initMock = await DOG20.initMock([])
  // console.log(initMock)
};
module.exports.tags = ["YourContract"];
