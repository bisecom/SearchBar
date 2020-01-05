import {ADJUST_CBX_SEARCH, ADJUST_TEXT_SEARCH} from '../actions/Types';

export function searchReducer(state = initialData, action) {
    switch (action.type) {
        case ADJUST_TEXT_SEARCH: {
            return {...state, ...state.inputText = action.payload};
        }
        case ADJUST_CBX_SEARCH: {
            return {...state, ...state.checkBoxData = action.payload};
        }
        default:
            return state;
    }
}

let initialData = {
    inputText: '',
    checkBoxData: false
};



