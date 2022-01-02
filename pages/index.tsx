import type { NextPage } from "next";
import Head from "next/head";
import { Loader } from "../components/Loader";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbav";
import { useDapp } from "../contexts/DappContext";

const Home: NextPage = () => {
  const { isLoading } = useDapp();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-gray-800 text-center">
        <div className="mx-auto max-w-7xl">
          <Navbar />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
