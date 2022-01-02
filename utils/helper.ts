import { BigNumber } from "ethers";
import attackAnimationOne from "../utils/attack-animation-1.json";
import { AttackProps, BigBoss, CharacterProps } from "./contracts";

export const parseDefaultCharacter = (data: any): CharacterProps => {
  var res: CharacterProps = {
    attacks: data.attacks,
    characterIndex: data.characterIndex,
    hp: data.hp,
    imageURI: data.imageURI,
    maxHp: data.maxHp,
    name: data.name,
    specialAttacks: data.specialAttacks,
  };
  return res;
};

export const parseAttacks = (data: any): AttackProps => {
  var res: AttackProps = {
    attackDamage: data.attackDamage,
    attackIndex: data.attackIndex,
    attackImage: data.attackImage,
    attackName: data.attackName,
  };
  return res;
};

export const parseBigBoss = (data: any): BigBoss => {
  var res: BigBoss = {
    attackDamage: data.attackDamage,
    imageURI: data.imageURI,
    hp: data.hp,
    maxHp: data.maxHp,
    name: data.name,
  };
  return res;
};

export const getAttackAnimation = (attackIndex: BigNumber) => {
  console.log(`attackIndex.toNumber()`, attackIndex.toNumber());
  if (attackIndex.toNumber() == 0) {
    return attackAnimationOne;
  } else if (attackIndex.toNumber() == 1) {
    return attackAnimationOne;
  } else if (attackIndex.toNumber() == 2) {
    return attackAnimationOne;
  }
};
