function Header() {
  return (
    <div className="sticky flex justify-between p-2 font-medium text-white bg-green-900 full:top-18 -top-0 place-items-center">
      <p className="my-auto tracking-widest max-w-sm text-sm md:font-bold  md:text-base md:ml-16 md:align-middle">
        STARBUCKS<sup>&reg;</sup> <span>REWARDS</span>
      </p>
      <a
        className="px-4 py-2 flex-shrink-0 text-white text-sm font-medium text-center border-2 rounded-full lg:hidden md:hidden"
        href="https://starbucks.com/rewards/"
      >
        Join in the app
      </a>
    </div>
  );
}

export default Header;
