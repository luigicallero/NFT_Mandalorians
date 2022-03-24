const NFT = artifacts.require("NFT");
const TokenName = 'MANDOS';
const TokenSymbol = 'MANDOS';
const TokenBaseURI = 'ipfs://QmW3PSae2pZMUBwpvj57bLnUoPs6ASGEzjFdZULypYwuqq/';

module.exports = function (deployer) {
  deployer.deploy( NFT, TokenName, TokenSymbol, TokenBaseURI);
};
