export interface ExplorePageHeaderProps {}

const ExplorePageHeader: React.SFC<ExplorePageHeaderProps> = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-8 mx-auto pt-12 lg:px-4">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
            Find the art that's right for you.
          </h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">
            Search for a piece by exploring art, or looking through the artists
            that have contributed to the collection. If have something in mind
            try searching for it.
          </p>
          <div className="flex items-end justify-center w-full mx-auto mt-12 lg:w-1/2">
            <div className="relative w-2/4 mr-4 text-left lg:w-full xl:w-1/2 md:w-full">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="flex-grow w-full px-4 py-2  mr-4 text-base text-black transition duration-1000 ease-in-out transform rounded-lg bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              />
            </div>
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePageHeader;
