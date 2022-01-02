import { BigNumber } from "ethers";
import Img from "next/image";
import React from "react";
import Lottie from "react-lottie";
import ReactTooltip from "react-tooltip";
import { useDapp } from "../contexts/DappContext";
import { AttackProps } from "../utils/contracts";
import { getAttackAnimation } from "../utils/helper";

function GameArena() {
  const { currentCharacter, bigBoss, attackBoss } = useDapp();
  const [attack, setAttack] = React.useState<boolean>(false);
  const [attackIndex, setAttackIndex] = React.useState<BigNumber | null>(
    BigNumber.from(0)
  );

  const startAttack = async (attackType: AttackProps) => {
    await attackBoss(attackType.attackIndex);
    setAttack(true);
    setAttackIndex(attackType.attackIndex);
    setTimeout(() => {
      setAttack(false);
      setAttackIndex(null);
    }, 3000);
  };

  return (
    <>
      <div
        className="h-screen w-full bg-gray-800 pb-20 px-36"
        style={{
          backgroundImage: "url('/images/game-arena-bg-1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Title */}
          <div className="flex justify-center w-full flex-none">
            <div className="p-2 bg-white my-10 pt-8 w-full text-center px-10 rounded-3xl border-red-500 border-4">
              <span className="font-avengers text-red-500 text-5xl text-center">
                Fight Arena
              </span>
            </div>
          </div>
          {/* Character Section */}
          <div className="flex flex-row justify-between grow">
            <div className="flex flex-col justify-end items-center">
              <div>
                <Img height={500} width={250} src={currentCharacter.imageURI} />
              </div>
              <div className="flex flex-row space-x-3">
                {currentCharacter.attacks.map((item, i) => {
                  return (
                    <AttackItem
                      key={i}
                      index={item}
                      startAttack={startAttack}
                    />
                  );
                })}
              </div>
            </div>
            <div className="relative top-0 left-0">
              <div className="flex items-end justify-end h-full">
                <Img
                  className="relative top-0 left-0 z-10 pt-8"
                  height={660}
                  width={340}
                  src={bigBoss.imageURI}
                />
              </div>
              {attack && <AttackAnimation attackIndex={attackIndex} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const AttackAnimation = ({ attackIndex }: { attackIndex: BigNumber }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: getAttackAnimation(attackIndex),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="absolute z-30 top-0 left-0">
      <Lottie options={defaultOptions} height={800} width={350} />;
    </div>
  );
};

const AttackItem = ({
  index,
  startAttack,
}: {
  index: BigNumber;
  startAttack: (attackType: AttackProps) => void;
}) => {
  const { allAttacks } = useDapp();
  var attack = allAttacks.find((item) => item.attackIndex.eq(index));

  return (
    <>
      <ReactTooltip id={attack.attackName} place="bottom" type="dark">
        <span className="text-white font-bold text-xl">
          {attack.attackName}
        </span>
      </ReactTooltip>
      <div
        className="rounded-full bg-white flex justify-center items-center border-[3px] border-red-500 scale-100 hover:scale-105 transition-all duration-100	ease-in cursor-pointer"
        style={{ height: "75px", width: "75px" }}
        data-tip
        data-for={attack.attackName}
        onClick={() => {
          startAttack(attack);
        }}
      >
        <Img height={50} width={50} src={attack.attackImage} />
      </div>
    </>
  );
};

export default GameArena;
