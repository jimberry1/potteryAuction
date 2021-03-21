export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
            </svg>
            <span className="relative">Craft</span>
          </span>{' '}
          Art Charity Auction Application
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          It's never been easier to buy the art you love knowing that the
          proceeds are for a charity of your choice
        </p>
      </div>
      <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
        <input
          placeholder="Email"
          type="text"
          className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none"
        >
          Subscribe
        </button>
      </form>
      <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
        Sign up to hear the latest news from our site
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2g0YveWq0zIrIz5z_pFU-S6_2oRs5gam475d7zfFb0MBgKAXu2SiEQaf1YWDx-K6KevS-J4&usqp=CAc"
        className="w-full mx-auto md:w-auto md:max-w-xs"
        alt=""
      />
    </div>
  );
};
