import { ARTIST_BUTTON, ARTWORK_BUTTON } from '../../utilities/buttonIndexes';

export interface TwoWindowPictureProps {
  buttonClickedHandler: (buttonId: string) => void;
}

const TwoWindowPicture: React.SFC<TwoWindowPictureProps> = ({
  buttonClickedHandler,
}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden ">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNyYWZ0JTIwYXJ0fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Art work
            </h2>
            <p className="leading-relaxed text-base">
              Explore the pieces of art up for auction
            </p>
            <button
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              onClick={() => buttonClickedHandler(ARTWORK_BUTTON)}
            >
              Explore
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1441471349424-351990746ff4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aXN0fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Artists
            </h2>
            <p className="leading-relaxed text-base">
              Explore the artists who have contributed to our auction
            </p>
            <button
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              onClick={() => buttonClickedHandler(ARTIST_BUTTON)}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWindowPicture;
