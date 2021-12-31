import Img from "next/image";
import React, { useEffect } from "react";
import { useDapp } from "../contexts/DappContext";
import { CharacterProps } from "../utils/contracts";
import { MintConfirmationModal } from "./modals/MintConfirmationModal";

const urls = [
  "https://res.cloudinary.com/viral-sangani/image/upload/v1640668788/epic-nft-game/iron-man.png.webp",
  "https://res.cloudinary.com/viral-sangani/image/upload/v1640668788/epic-nft-game/thor.png.webp",
  "https://res.cloudinary.com/viral-sangani/image/upload/v1640668788/epic-nft-game/spidernam.webp",
  "https://res.cloudinary.com/viral-sangani/image/upload/v1640668788/epic-nft-game/captain-america.webp",
];

const MintCharacter = () => {
  const { defaultCharactersList, mintCharacterNFT, gameContract } = useDapp();

  useEffect(() => {
    const onCharacterMint = async (sender, tokenId, characterIndex) => {
      console.log(
        `CharacterNFTMinted - sender: ${sender} tokenId: ${tokenId.toNumber()} characterIndex: ${characterIndex.toNumber()}`
      );
      // alert(
      //   `Your NFT is all done -- see it here: https://testnets.opensea.io/assets/${gameContract}/${tokenId.toNumber()}`
      // );
    };
    if (gameContract) {
      gameContract.on("CharacterNFTMinted", onCharacterMint);
    }
  }, [gameContract]);

  return (
    <div
      className="h-screen w-screen bg-gray-800 px-52"
      style={{
        backgroundImage: "url('/images/game-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="p-2 bg-white flex justify-center my-10 pt-8 px-10 rounded-3xl border-red-500 border-4">
          <span className="font-avengers text-red-500 text-6xl text-center">
            Choose your character
          </span>
        </div>
        <div className="grid grid-cols-4 gap-14">
          {defaultCharactersList.map((item, index) => {
            return <CharacterItem index={index} item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MintCharacter;

const CharacterItem = ({
  item,
  index,
}: {
  item: CharacterProps;
  index: number;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <MintConfirmationModal
        isOpen={isOpen}
        item={item}
        closeModal={() => {
          setIsOpen(false);
        }}
      />
      <div
        className="flex flex-col items-center scale-100 hover:scale-105 transition-all duration-100	ease-in"
        key={index}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Img
          className="cursor-pointer"
          src={item.imageURI}
          height={400}
          width={200}
        />
        <div className="p-2 bg-white flex justify-center my-10 pt-1 rounded-3xl border-red-500 border-[3px] w-full">
          <span className="font-avengers text-red-500 text-3xl text-center mt-5">
            {item.name}
          </span>
        </div>
      </div>
    </>
  );
};
