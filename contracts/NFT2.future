// Alternative to hashlips contract from Moralis(already tested on remix): https://moralis.io/how-to-mint-10000-nfts-full-walkthrough/
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import 1155 token contract from Openzeppelin
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

// Example contract to be deployed via https://remix.ethereum.org/ for testing purposes.

contract NFT is ERC1155, Ownable {
    using SafeMath for uint256;

    constructor()
        ERC1155(
            "ipfs://QmW3PSae2pZMUBwpvj57bLnUoPs6ASGEzjFdZULypYwuqq/{id}.json" // You can get this saved in dashboard of your Moralis server instance.
        )
    {
        // account, token_id, number
        _mint(msg.sender, 1, 1, "");
        _mint(msg.sender, 2, 1, "");
        _mint(msg.sender, 3, 1, "");
    }
}