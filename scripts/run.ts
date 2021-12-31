import { Signer } from "ethers";
import { ethers } from "hardhat";

const main = async () => {
  let accounts: Signer[];
  accounts = await ethers.getSigners();

  const userAddress = await accounts[0].getAddress();

  const epicTokenFactory = await ethers.getContractFactory("EPICToken");
  const epicToken = await epicTokenFactory.deploy("EPIC Token", "EPIC");

  const gameContractFactory = await ethers.getContractFactory("NFTEpicGame");
  const gameContract = await gameContractFactory.deploy(
    // characterName
    ["Iron Man", "Thor", "Spider Man", "Captain America"],
    // characterImageURI
    [
      "https://res.cloudinary.com/viral-sangani/image/upload/v1640668788/epic-nft-game/iron-man.png.webp",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1640668788/epic-nft-game/thor.png.webp",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1640668788/epic-nft-game/spidernam.webp",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1640668788/epic-nft-game/captain-america.webp",
    ],
    // characterMaxHp
    [200, 250, 300, 250],
    // characterAttacks
    [
      [0, 1],
      [0, 1],
      [2, 3],
      [0, 1, 5],
    ],
    "Elon Musk",
    "https://i.imgur.com/AksR0tt.png",
    1000,
    50,
    epicToken.address
  );
  await gameContract.deployed();
  console.log("Game Contract deployed to : ", gameContract.address);
  console.log("Epic Token deployed to : ", epicToken.address);

  let txn;
  txn = await gameContract.addAttacks(
    // attackNames
    ["Punch", "Kick", "Web Shooter", "Splash", "Freeze", "Shield"],
    // attackImages
    [
      "https://google.com",
      "https://google.com",
      "https://google.com",
      "https://google.com",
      "https://google.com",
      "https://google.com",
    ],
    // attackDamages
    [50, 60, 40, 65, 60, 70],
    // attackIndexes
    [0, 1, 2, 3, 4, 5]
  );
  await txn.wait();

  txn = await gameContract.addSpecialAttacks(
    // specialAttackNames
    ["Reactor Shock"],
    // specialAttackImages
    ["https://google.com"],
    // specialAttackDamages
    [100],
    // specialAttackPrices
    [2],
    // specialAttackIndexes
    [0]
  );
  await txn.wait();

  console.log(`userAddress`, userAddress);

  txn = await epicToken.faucet(userAddress, ethers.utils.parseEther("20"));
  await txn.wait();

  txn = await epicToken.approve(
    gameContract.address,
    ethers.utils.parseEther("10")
  );
  await txn.wait();

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(`err`, err);
    process.exit(1);
  }
};

runMain();
