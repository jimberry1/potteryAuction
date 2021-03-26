import {
  updateMaterial,
  updatePrice,
  updateSize,
} from '../store/actions/searchActions';
import { DropDownMenuType } from '../types';
import { CLAY, PORCLEAN, WOOD } from './staticVariableNames/artVariableNames';

export const materialSelection: DropDownMenuType = {
  id: '980239843929804890423890',

  filterCategoryName: 'Material',
  dispatchUpdateFunction: updateMaterial,
  getDesiredStateFromSearchSelector: (searchState) =>
    searchState.materialSelection,
  menuOptions: [
    {
      id: '234234242342',
      label: 'No filter',
      value: '',
    },
    {
      id: '123128123230',
      label: CLAY,
      value: 'C',
    },
    {
      id: '234234253252',
      label: PORCLEAN,
      value: 'P',
    },
    {
      id: '3453453534',
      label: WOOD,
      value: 'W',
    },
  ],
};

export const priceSelection: DropDownMenuType = {
  id: '23424232453534',
  filterCategoryName: 'Price',
  dispatchUpdateFunction: updatePrice,
  getDesiredStateFromSearchSelector: (searchState) =>
    searchState.priceSelection,
  menuOptions: [
    {
      id: '8998897897789',
      label: 'No filter',
      value: '',
    },
    {
      id: '779878998090',
      label: '£10',
      value: '10',
    },
    {
      id: '890890980',
      label: '£20',
      value: '20',
    },
    {
      id: 'iouo7890978',
      label: '£30+',
      value: '30+',
    },
  ],
};

export const sizeSelection: DropDownMenuType = {
  id: '980354890894389',
  filterCategoryName: 'Size',
  dispatchUpdateFunction: updateSize,
  getDesiredStateFromSearchSelector: (searchState) => searchState.sizeSelection,
  menuOptions: [
    {
      id: '578667867889',
      label: 'No filter',
      value: '',
    },
    {
      id: '8953489589',
      label: 'Small',
      value: 'S',
    },
    {
      id: '34534535446',
      label: 'Medium',
      value: 'M',
    },
    {
      id: '575egbrgr4',
      label: 'Large',
      value: 'L',
    },
  ],
};

export const artSearchFilterFields: DropDownMenuType[] = [
  materialSelection,
  priceSelection,
  sizeSelection,
];
