const NFT = artifacts.require("NFT");
const TokenName = 'MANDOS';
const TokenSymbol = 'MANDOS';
const TokenBaseURI = 'ipfs://QmcZ3rmu2WTwdSkXQbShU3AcCsezJtSosP7SHTiCq9RryX/';

module.exports = function (deployer) {
  deployer.deploy( NFT, TokenName, TokenSymbol, TokenBaseURI);
};
