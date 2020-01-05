import {ADJUST_CBX_SEARCH, ADJUST_TEXT_SEARCH} from './Types';

export const searchTextCreator = (event) => {
    let fieldText = event.target.value;
    return {
    type: ADJUST_TEXT_SEARCH,
    payload: fieldText
    }
};

export const changeCbxCreator = (event ) => {
    let isCbxChecked = event.target.checked;
    return {
    type: ADJUST_CBX_SEARCH,
    payload: isCbxChecked
    }
};