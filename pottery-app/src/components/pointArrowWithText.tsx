export interface PointyArrowWithTextProps {
  text: string;
  clicked: () => void;
}

const PointyArrowWithText: React.SFC<PointyArrowWithTextProps> = ({
  text,
  clicked,
}) => {
  return (
    <div onClick={clicked} className="hover:text-indigo-200 cursor-pointer">
      <a className="mt-3 text-indigo-500 inline-flex items-center hover:text-indigo-700">
        {text}
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2 "
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
};

export default PointyArrowWithText;
