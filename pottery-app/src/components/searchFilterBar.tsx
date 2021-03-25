import DropDown from './tailwindComponents/dropdown';
import { useState } from 'react';
import { DropdownMenuOptionType } from '../types';
export interface SearchFilterBarProps {}

const SearchFilterBar: React.SFC<SearchFilterBarProps> = () => {
  const [testMenuOptions, setTestMenuOptions]: any = useState([
    {
      id: '234234242342',
      index: '0',
      label: 'no filter',
      value: '',
      selected: true,
    },
    {
      id: '123128123230',
      index: '1',
      label: 'clay',
      value: 'C',
      selected: false,
    },
    {
      id: '234234253252',
      index: '2',
      label: 'porclean',
      value: 'P',
      selected: false,
    },
    {
      id: '3453453534',
      index: '3',
      label: 'wood',
      value: 'W',
      selected: false,
    },
  ]);

  const MenuOptionSelectedHandler = (menuOptionValue: string) => {
    setTestMenuOptions((currentState: DropdownMenuOptionType[]) =>
      currentState.map((tuple) => ({
        ...tuple,
        selected: tuple.value === menuOptionValue,
      }))
    );
  };
  return (
    <div>
      <DropDown
        filterTitle="Material"
        menuOptions={testMenuOptions}
        menuOptionSelected={(menuOptionValue: string) =>
          MenuOptionSelectedHandler(menuOptionValue)
        }
      />
    </div>
  );
};

export default SearchFilterBar;
