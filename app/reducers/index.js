import { combineReducers } from 'redux'

import {ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE, QUOTES_AVAILABLE} from '../actions/';

let dataStore = {
    quotes: [],
    loading: true
}

const dataReducer = (state = dataState, action) => {
    switch(action.type){
        case ADD_QUOTE:
            let quotes = cloneObject(state.quotes);
            quotes.unshift(action.quote);
            state = Object.assign({}, state, {quotes: quotes});
            return state;
    }
}


function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

function getIndex(data, id){
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}


// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;