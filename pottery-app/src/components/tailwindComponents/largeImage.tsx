export interface LargeImageProps {}

const LargeImage: React.SFC<LargeImageProps> = () => {
  return (
    <section className="overflow-hidden text-gray-700 body-font">
      <div className="container px-5 py-2 mx-auto lg:px-10">
        <div className="flex flex-wrap py-8 md:flex-no-wrap">
          <div className="w-full ">
            <img
              alt="image"
              style={{ height: 400 }}
              className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
              src="https://images.unsplash.com/photo-1497048679117-1a29644559e3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JhZnQlMjBhcnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeImage;
