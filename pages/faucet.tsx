import { BigNumber, ethers } from "ethers";
import React from "react";
import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbav";
import { useDapp } from "../contexts/DappContext";

function Play() {
  const {
    currentAccount,
    currentBalance,
    isLoading,
    connectWalletAction,
    faucet,
  } = useDapp();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-screen bg-gray-800 text-center">
      <div className="mx-auto max-w-7xl">
        {!currentAccount ? (
          <div className="h-screen flex justify-center items-center">
            <button
              className="font-game text-6xl text-pink-600 hover:text-yellow-600"
              onClick={() => {
                connectWalletAction();
              }}
            >
              Connect wallet to Claim Tokens
            </button>
          </div>
        ) : (
          <>
            <Navbar />
            <div className="mt-40 flex justify-center items-center">
              <div className="border-2 border-white rounded-3xl py-12 max-w-6xl flex flex-col px-10 items-start">
                <span className="text-white text-3xl font-bold">
                  Claim Free 20 EPIC token
                </span>
                <span className="text-white text-2xl pt-4">
                  Address : {currentAccount}
                </span>
                <span className="text-white text-2xl py-2">
                  Balance :{" "}
                  {currentBalance &&
                    ethers.utils.formatEther(BigNumber.from(currentBalance))}
                  {" EPIC"}
                </span>
                <button
                  className="bg-yellow-400 hover:bg-pink-600 px-3 py-2 rounded-full font-game text-5xl text-pink-600 hover:text-yellow-400 mx-auto"
                  onClick={() => {
                    faucet();
                  }}
                >
                  Claim
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Play;
