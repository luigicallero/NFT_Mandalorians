const NFT = artifacts.require("NFT");
const TokenName = 'HASH_LIPS100 V2';
const TokenSymbol = 'HASH_LIPS100_V2';
const TokenBaseURI = 'ipfs://QmWaoYbicV7te5W7JraD6kVnrF6jbmdpAZBmE9f9Fco3cV/';

module.exports = function (deployer) {
  deployer.deploy( NFT, TokenName, TokenSymbol, TokenBaseURI);
};
