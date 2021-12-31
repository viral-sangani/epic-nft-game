import React from "react";
import { useDapp } from "../contexts/DappContext";

function GameArena() {
  const { currentCharacter } = useDapp();
  return (
    <>
      <div
        className="h-screen w-full bg-gray-800 p-52"
        style={{
          backgroundImage: "url('/images/game-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
}

export default GameArena;
