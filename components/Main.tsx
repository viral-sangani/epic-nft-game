import Img from "next/image";
import Link from "next/link";

export const Main = () => {
  return (
    <div className="block-container">
      <div className="bg-white flex bg-top bg-cover flex-col items-center mr-auto ml-auto psx-4 relative lg:flex-row md:px-8 py-10 rounded-2xl">
        <div
          className="flex w-full h-full bg-top bg-cover justify-center items-center 
    overflow-hidden lg:w-1/2"
        >
          <Img
            src="https://9to5mac.com/2015/04/30/marvel-future-fight-action-rpg-avengers-age-ultron/mff_promo2/"
            height={"300"}
            width={"500"}
            className="w-full rounded-2xl"
          />
        </div>
        <div className="flex bg-top bg-cover justify-end mr-auto ml-auto  relative max-w-xl xl:pr-32 lg:max-w-screen-xl">
          <div className="bg-top bg-cover mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="bg-top bg-cover mb-6 max-w-xl">
              <div className="text-gray-900 bg-top bg-cover mb-6  max-w-lg sm:text-4xl sm:leading-none">
                <p className="font-bold text-3xl tracking-tight  text-gray-900 sm:text-4xl sm:leading-none">
                  Epic NFT Game
                </p>
                <p className="inline-block font-bold text-3xl tracking-tight mr-2  text-gray-900 sm:text-4xl sm:leading-none">
                  Build on
                </p>
                <p className="inline-block font-bold text-3xl tracking-tight text-blue-700 sm:text-4xl sm:leading-none">
                  Avalanche
                </p>
              </div>
              <p className="text-3xl text-gray-700">
                Team up to protect the Metaverse against the Boss.
              </p>
            </div>
            <div className="flex justify-center items-center mt-8">
              <Link href="/play">
                <a
                  className="h-12 rounded-2xl mr-6 pr-6 pl-6 text-medium font-semibold tracking-wide shadow-md inline-flex items-center justify-center bg-blue-700 text-white transition duration-200 hover:bg-blue-900 focus:shadow-outline focus:outline-none"
                  style={{ fontFamily: "Arial" }}
                >
                  Start the Game
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
