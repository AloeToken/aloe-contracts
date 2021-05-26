const AloeToken = artifacts.require("AloeToken");
const MasterChef = artifacts.require("MasterChef");

module.exports = async function(deployer) {
  await deployer.deploy(AloeToken);
  const aloeToken = await AloeToken.deployed();
  await deployer.link(AloeToken, MasterChef);
  const devAddress = "0x650E5c6071f31065d7d5Bf6CaD5173819cA72c41";
  const feeAddress = "0x650E5c6071f31065d7d5Bf6CaD5173819cA72c41";
  const aloePerBlocks = 20;
  const startBlock = 1;
  await deployer.deploy(MasterChef, aloeToken.address, devAddress, feeAddress, aloePerBlocks, startBlock);
};
