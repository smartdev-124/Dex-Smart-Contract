const TOMO = artifacts.require('./contracts/tokens/TOMO.sol')

module.exports = function (deployer, network, accounts) {
  // const admin = network === 'development' ? accounts[0] : accounts[1];
  // web3.personal.unlockAccount(admin, '123456789', 10000);
  deployer.deploy(TOMO)
};