export interface PurpleButtonProps {
  buttonText: string;
  clicked: () => void;
}

const PurpleButton: React.SFC<PurpleButtonProps> = ({
  buttonText,
  clicked,
}) => {
  return (
    <button
      className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
      onClick={clicked}
    >
      {buttonText}
    </button>
  );
};

export default PurpleButton;
