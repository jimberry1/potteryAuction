export interface TailwindInputComponentProps {
  inputValue: string | number;
  inputChanged: (newValue: string | number) => void;
  inputPlaceholder: string;
}

const TailwindInputComponent: React.SFC<TailwindInputComponentProps> = ({
  inputValue,
  inputChanged,
  inputPlaceholder,
}) => {
  return (
    <div className="relative h-10 input-component mb-5">
      <input
        id="email"
        type="text"
        name="email"
        className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
        value={inputValue}
        onChange={(e) => inputChanged(e.target.value)}
      />
      <label className="absolute left-2 transition-all bg-white px-1">
        {inputPlaceholder}
      </label>
    </div>
  );
};

export default TailwindInputComponent;
