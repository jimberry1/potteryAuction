import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { DropdownMenuOptionType } from '../../types';
export interface DropDownProps {
  menuOptions: DropdownMenuOptionType[];
  menuOptionSelected: (menuOption: string) => void;
  filterTitle: string;
  selectedOption: string;
}

const toggleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const DropDown: React.FunctionComponent<DropDownProps> = ({
  menuOptions,
  menuOptionSelected,
  filterTitle,
  selectedOption,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative inline-block text-left focus:outline-none w-36 m-2 z-30"
      onClick={() => setShow((curVal) => !curVal)}
    >
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {menuOptions.find(
            (menuOption) =>
              menuOption.value && menuOption.value == selectedOption
          )?.label || filterTitle}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            variants={toggleVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div
              className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                {menuOptions
                  .filter((menuItem) => menuItem.value !== selectedOption)
                  .map((menuOption) => {
                    return (
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={() => menuOptionSelected(menuOption.value)}
                        key={menuOption.id}
                      >
                        {menuOption.label}
                      </div>
                    );
                  })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
