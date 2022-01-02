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
      [0, 4, 5],
      [1, 6, 7],
      [0, 2, 3],
      [0, 1, 8],
    ],
    "Thanos",
    "https://res.cloudinary.com/viral-sangani/image/upload/v1640668788/epic-nft-game/boss.webp",
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
    [
      "Punch",
      "Kick",
      "Spider Attack",
      "Web Shooter",
      "Missile Attack",
      "Lazer Attack",
      "Mjollnir Attack",
      "Thunder Attack",
      "KO Attack",
    ],
    // attackImages
    [
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099280/epic-nft-game/attacks/attack-1.png",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099281/epic-nft-game/attacks/attack-2.png",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099281/epic-nft-game/attacks/attack-3.png",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099281/epic-nft-game/attacks/attack-4.png",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099280/epic-nft-game/attacks/attack-5.png",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099280/epic-nft-game/attacks/attack-6.png",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099280/epic-nft-game/attacks/attack-7.png",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099280/epic-nft-game/attacks/attack-8.png",
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099281/epic-nft-game/attacks/attack-9.png",
    ],
    // attackDamages
    [50, 60, 55, 65, 65, 50, 60, 65, 70],
    // attackIndexes
    [0, 1, 2, 3, 4, 5, 6, 7, 8]
  );
  await txn.wait();

  txn = await gameContract.addSpecialAttacks(
    // specialAttackNames
    ["Nuke Attack"],
    // specialAttackImages
    [
      "https://res.cloudinary.com/viral-sangani/image/upload/v1641099742/epic-nft-game/special-attacks/special-attack-1.png",
    ],
    // specialAttackDamages
    [110],
    // specialAttackPrices
    [ethers.utils.parseEther("4.5")],
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
