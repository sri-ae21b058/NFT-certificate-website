// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "./NFTCertificate.sol";
contract websitecontract is NFTCertificate  
{
  address _owner;
  constructor()
  {
    _owner=msg.sender;
  }
  function mintCert(string memory uri) public 
  {
    super.safeMint(_owner,uri);
  }
  

}
