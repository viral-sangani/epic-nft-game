export const Navbar = () => {
  return (
    <>
      <section className="font-heading font-medium relative bg-blueGray-100">
        <nav className="flex justify-between px-6 lg:px-12 py-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <button className="navbar-burger hidden lg:block focus:outline-none text-white text-xl font-bold">
                NFT Epic Game
              </button>
              <div className="hidden lg:block w-px h-8 bg-gray-500 bg-opacity-50 mx-4 md:ml-6 md:mr-6"></div>
              <button className="navbar-burger hidden lg:block focus:outline-none text-white text-xl hover:font-semibold">
                Faucet
              </button>
            </div>
            <div className="hidden xl:flex items-center">
              <div className="w-px h-12 bg-blueGray-200 ml-9 mr-11"></div>
              <a className="flex items-center mr-12 text-white" href="#">
                <span>0x00</span>
              </a>
              <button className="uppercase text-sm font-bold font-body border-2 border-gray-700 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-600">
                <span className="block mt-px text-white">Enter App</span>
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
