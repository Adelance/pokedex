import { appState } from '../types/State';
import {
    POKEMONS_ERROR,
    GET_POKEMONS,
    GET_NEXT_POKEMONS,
    SET_CURRENT,
    SEARCH_POKEMONS,
} from '../types/types';

const initialState = {
    allLoaded: [],
    filtered: '',
    loadLink: '',
    current: {},
    error: null,
};

const Reducer = (
    state: appState = initialState,
    action: { type: string; payload: { results: object[]; next: string } }
) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allLoaded: action.payload.results,
                loadLink: action.payload.next,
            };
        case GET_NEXT_POKEMONS:
            return {
                ...state,
                allLoaded: [...state.allLoaded, ...action.payload.results],
                loadLink: action.payload.next,
            };
        case SEARCH_POKEMONS:
            return {
                ...state,
                filtered: action.payload,
            };
        case POKEMONS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            };
        default:
            return state;
    }
};
export default Reducer;
