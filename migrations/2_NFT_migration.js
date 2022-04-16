const NFT = artifacts.require("NFT");
const TokenName = 'MANDOS';
const TokenSymbol = 'MANDOS';
const TokenBaseURI = 'ipfs://QmbHGyLUomEp1BNUx5bukL3fW7JCi3fkbxJdYNgkHL2Hmk/';
const InitialMint = 50;

module.exports = function (deployer) {
  deployer.deploy( NFT, TokenName, TokenSymbol, TokenBaseURI, InitialMint);
};
