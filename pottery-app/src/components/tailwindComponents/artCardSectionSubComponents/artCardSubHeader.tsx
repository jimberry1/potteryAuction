export interface ArtCardSubHeaderProps {
  subtitle: string;
  selected: boolean;
  clicked: () => void;
}

const ArtCardSubHeader: React.SFC<ArtCardSubHeaderProps> = ({
  subtitle,
  selected,
  clicked,
}) => {
  return (
    <div
      className={
        selected
          ? 'flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1'
          : 'flex-grow border-b-2 border-gray-300 py-2 text-lg px-1'
      }
      onClick={clicked}
    >
      <div className="transition duration-500 text-center transform hover:-translate-y-1 cursor-pointer">
        {subtitle}
      </div>
    </div>
  );
};

export default ArtCardSubHeader;
