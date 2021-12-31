import { BigNumber, ethers } from "ethers";
import Link from "next/link";
import { useDapp } from "../contexts/DappContext";

export const Navbar = () => {
  const { currentAccount, currentBalance } = useDapp();
  return (
    <>
      <section className="font-heading font-medium relative bg-blueGray-100">
        <nav className="flex justify-between px-6 lg:px-12 py-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <Link href={"/"}>
                <a className="navbar-burger hidden lg:block focus:outline-none text-white text-xl font-bold">
                  NFT Epic Game
                </a>
              </Link>
              <div className="hidden lg:block w-px h-8 bg-gray-500 bg-opacity-50 mx-4 md:ml-6 md:mr-6"></div>
              <Link href="/faucet">
                <a className="navbar-burger hidden lg:block focus:outline-none text-white text-xl hover:font-semibold">
                  Faucet
                </a>
              </Link>
            </div>

            <div className="hidden xl:flex items-center">
              {currentBalance && currentAccount && (
                <div className="flex flex-col items-start mr-12 text-white bg-gray-700 px-3 py-1 rounded-xl">
                  <span>
                    Address :{" "}
                    {currentAccount.substring(0, 5) +
                      "....." +
                      currentAccount.substring(
                        currentAccount.length - 5,
                        currentAccount.length
                      )}
                  </span>
                  <span>
                    Balance :{" "}
                    {ethers.utils.formatEther(BigNumber.from(currentBalance))}{" "}
                    EPIC
                  </span>
                </div>
              )}
              <Link href="/play">
                <a className="uppercase text-sm font-bold font-body border-2 border-gray-700 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-600">
                  <span className="block mt-px text-white">Enter App</span>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
