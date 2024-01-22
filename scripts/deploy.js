const hre = require("hardhat");

async function main() {
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffee = await BuyMeACoffee.deploy();
  await buyMeACoffee.waitForDeployment()
  console.log("BuyMeACoffee deployed to:", buyMeACoffee.target);    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });