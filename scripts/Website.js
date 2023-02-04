// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const websitecontract= require("../artifacts/contracts/websitecontract.sol/websitecontract.json");
const abi = websitecontract.abi;//interface of the website contract

async function main() 
{
  const alchemy = new hre.ethers.providers.AlchemyProvider('maticmum',process.env.ALCHEMY_API_KEY);
  const userWallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY,alchemy);
  const Website= new hre.ethers.Contract(process.env.CONTRACT_ADDRESS,abi,userWallet);
  const Cert1= await Website.mintCert("https://ipfs.filebase.io/ipfs/QmaeEyBn35j9zzd7q2L9KMVuKR8dsrtxdriphZzgPGF961");
  await Cert1.wait();
  let count= await Website.balance(userWallet.address); 
  console.log(`Account ${userWallet.address} has now ${count}`);

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
