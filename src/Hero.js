import React from "react";

function Hero() {
  return (
    <div class="bg-right bg-no-repeat min-h-small md:h-screen md:pt-14 bg-primary-light md:flex bg-star-pattern-small md:bg-cover md:bg-half md:bg-star-pattern-big">
      <div class="px-3 py-5 mx-4 text-center md:text-left place-self-center">
        <div>
          <h1 class="pt-5 text-2xl font-medium smMd:text-3xl md:leading-8 md:text-3xl">
            FREE COFFEE
          </h1>
          <h1 class="text-2xl font-medium leading-9 smMd:text-3xl md:text-3xl">
            IS A TAP AWAY
          </h1>
        </div>
        <h3 class="mt-4 text-sm md:text-xl md:text-gray-700">
          Join now to start earning rewards
        </h3>
        <div class="mt-8 max-w-max mx-auto md:ml-0">
          <a
            className="bg-green-700 px-4 py-2 flex-shrink-0 text-white text-sm font-medium text-center border-2 rounded-full lg:hidden md:hidden"
            href="https://starbucks.com/rewards/"
          >
            Join in the app
          </a>
          <a
            className="hidden bg-green-700 px-4 py-2 flex-shrink-0 text-white text-sm font-medium text-center border-2 rounded-full lg:block md:block"
            href="https://starbucks.com/rewards/"
          >
            Join now
          </a>
        </div>

        <p class="mt-3 underline md:hidden">
          <a href="#">or join online</a>
        </p>
        <p class="hidden mt-3 text-xl md:block">
          or{" "}
          <a class="underline" href="#">
            join in the app{" "}
          </a>
          for the best experience
        </p>
      </div>
    </div>
  );
}

export default Hero;
