import { CharacterProps } from "./contracts";

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
