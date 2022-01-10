import Head from "next/head";
import React from "react";
import "react-step-progress-bar/styles.css";
import GameArena from "../components/GameArena";
import { Loader } from "../components/Loader";
import MintCharacter from "../components/MintCharacter";
import { useDapp } from "../contexts/DappContext";

function Play() {
  const { currentAccount, hasCharacter, connectWalletAction, isLoading } =
    useDapp();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Epic NFT Game</title>
        <meta name="description" content="Epic NFT Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentAccount ? (
        <div className="h-screen bg-gray-800 text-center overflow-auto">
          <div className="mx-auto max-w-7xl">
            <div className="h-screen flex justify-center items-center">
              <button
                className="font-game text-6xl text-pink-600 hover:text-yellow-600"
                onClick={() => {
                  connectWalletAction();
                }}
              >
                Connect wallet to play
              </button>
            </div>
          </div>
        </div>
      ) : hasCharacter ? (
        <GameArena />
      ) : (
        <MintCharacter />
      )}
    </>
  );
}

export default Play;
