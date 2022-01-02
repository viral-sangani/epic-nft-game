import { BigNumber, ethers } from "ethers";
export interface DappContextProps {
  currentAccount: String | null;
  isLoading: boolean;
  currentBalance: String;
  currentCharacter: CharacterProps;
  defaultCharactersList: CharacterProps[];
  hasCharacter: boolean;
  gameContract: ethers.Contract | null;
  allAttacks: AttackProps[];
  bigBoss: BigBoss;
  connectWalletAction: () => Promise<void>;
  faucet: () => Promise<void>;
  mintCharacterNFT: (characterIndex: BigNumber) => Promise<void>;
}

export interface AttackProps {
  attackIndex: BigNumber;
  attackName: string;
  attackDamage: BigNumber;
  attackImage: string;
}

export interface SpecialAttackProps {
  price: BigNumber;
  specialAttackIndex: BigNumber;
  specialAttackName: String;
  specialAttackDamage: BigNumber;
  specialAttackImage: String;
}

export interface CharacterProps {
  characterIndex: BigNumber;
  name: String;
  imageURI: String;
  hp: BigNumber;
  maxHp: BigNumber;
  attacks: BigNumber[];
  specialAttacks: BigNumber[];
}

export interface BigBoss {
  name: String;
  imageURI: String;
  hp: BigNumber;
  maxHp: BigNumber;
  attackDamage: BigNumber;
}
