export interface BoldPageTitleProps {
  title: string;
  subtitle?: string;
}

const BoldPageTitle: React.SFC<BoldPageTitleProps> = ({ title, subtitle }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-8 mx-auto pt-12 lg:px-4">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
            {title}
          </h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BoldPageTitle;
