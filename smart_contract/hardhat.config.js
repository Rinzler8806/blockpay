require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9mdvTzhrakImSG6pE58mFpaWin11vLSs',
      accounts: [ '52b0c3c27ff5ce1a152a338daaa44115e05d059ff404090e86985b125ab31485' ]
    }
  }
}