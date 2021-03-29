import DropDown from './tailwindComponents/dropdown';
import { DropDownMenuType } from '../types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { artSearchFilterFields } from '../configuration/potFilterFields';
import styled from 'styled-components';
export interface SearchFilterBarProps {}

const StyledDropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  z-index: 1;
  border-bottom: 10px solid black;
`;

const SearchFilterBar: React.SFC<SearchFilterBarProps> = () => {
  const dispatch = useDispatch();
  const priceFilter = useSelector((state: RootStateOrAny) => state.search);

  return (
    <StyledDropdownContainer>
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
    </StyledDropdownContainer>
  );
};

export default SearchFilterBar;
