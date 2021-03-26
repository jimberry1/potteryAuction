import DropDown from './tailwindComponents/dropdown';
import { DropDownMenuType } from '../types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { artSearchFilterFields } from '../configuration/potFilterFields';
export interface SearchFilterBarProps {}

const SearchFilterBar: React.SFC<SearchFilterBarProps> = () => {
  const dispatch = useDispatch();
  const priceFilter = useSelector((state: RootStateOrAny) => state.search);

  return (
    <div>
      {artSearchFilterFields.map((dropDownMenu: DropDownMenuType) => {
        return (
          <DropDown
            key={dropDownMenu.id}
            filterTitle={dropDownMenu.filterCategoryName}
            menuOptions={dropDownMenu.menuOptions}
            menuOptionSelected={(menuOptionValue: string) =>
              dispatch(dropDownMenu.dispatchUpdateFunction(menuOptionValue))
            }
            selectedOption={dropDownMenu.getDesiredStateFromSearchSelector(
              priceFilter
            )}
          />
        );
      })}
    </div>
  );
};

export default SearchFilterBar;
