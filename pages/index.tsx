import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Epic NFT Game</title>
        <meta name="description" content="Epic NFT Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full px-3 antialiased bg-indigo-600 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <Navbar />
          <div className="container py-32 mx-auto text-center sm:px-4">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
              <span className="block">Epic NFT Based Game</span>{" "}
              <span className="relative inline-block mt-3 text-white">
                Build on Ethereum
              </span>
            </h1>
            <div className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
              If you are ready to enter Marvel Universe and Fight Thanos, then
              you are in the right place. Buckle up and get ready to fight.
            </div>
          </div>
        </div>
      </section>

      <section className="px-2 pt-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
            <span className="block">
              Use our{" "}
              <span className="block mt-1 text-purple-500 lg:inline lg:mt-0">
                Market Place
              </span>{" "}
              to buy <br />
              Special Sttacks
            </span>
          </h1>
          <p className="w-full mx-auto text-base text-left text-gray-500 sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
            Team up with your friends and conquer the enemy. Each character in
            Epic NFT Game has unique abilities and skills.
          </p>
          <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
            <a
              href="#_"
              className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto"
            >
              Start Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a
              href="#_"
              className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
            >
              Market Place
            </a>
          </div>
        </div>
        <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center rounded-3xl">
          <img src="/images/game-play.png" className="rounded-3xl" />
        </div>
      </section>

      {/* <!-- Section 5 --> */}
      <section className="bg-white pt-20 pb-14">
        <div className="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1 className="text-sm font-bold tracking-wide text-center text-gray-800 uppercase mb-7">
            Build Using...
          </h1>
          <div className="grid items-center justify-center grid-cols-12 gap-y-8">
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://api.typedream.com/v0/document/public/f71c1437-09d6-45e9-a6e8-3f18592cc3ef_image-removebg-preview_1_png.png"
                alt="_buildspace"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDsj_ROyt3ijnnbts2wT28goPEGJdD2-iXn24zGa3AFStmG_uPE6mDdzqJVZXeLT4og&usqp=CAU"
                alt="Ethereum"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://hardhat.org/assets/img/Hardhat-logo.652a7049.svg"
                alt="Hardhat"
                className="block object-contain h-9"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://cdn-images-1.medium.com/fit/t/1600/480/0*01aujYOEhSeWmzHd.png"
                alt="Solidity"
                className="block object-contain h-9"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="data:image/png;base64,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"
                alt="NextJs"
                className="block object-contain h-7 lg:h-8"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
              <img
                src="https://i0.wp.com/kindalame.com/wp-content/uploads/2021/05/metamask-fox-wordmark-horizontal.png?resize=1280%2C480&ssl=1"
                alt="Metamask"
                className="block object-contain h-9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 6 --> */}
      <section className="text-gray-700 bg-white body-font">
        <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
          <a
            href="#_"
            className="text-xl font-black leading-none text-gray-900 select-none logo"
          >
            <span className="p-1 text-xl font-black leading-none select-none">
              <span>Epic NFT Game</span>
              <span className="text-indigo-300">.</span>
            </span>
          </a>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://twitter.com/viral_sangani_"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>

            <a
              href="https://github.com/viral_sangani_"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
