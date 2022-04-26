import { appState } from '../types/State';
import {
    POKEMONS_ERROR,
    GET_POKEMONS,
    GET_NEXT_POKEMONS,
    SET_CURRENT,
    SEARCH_POKEMONS,
    REMOVE_SEARCH,
} from '../types/types';

const initialState = {
    pokemons: [],
    allLoaded: [],
    loadLink: '',
    current: {},
    error: null,
};

export default (
    state: appState = initialState,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allLoaded: action.payload.results,
                pokemons: action.payload.results,
                loadLink: action.payload.next,
            };
        case GET_NEXT_POKEMONS:
            return {
                ...state,
                allLoaded: [...state.pokemons, ...action.payload.results],
                pokemons: [...state.pokemons, ...action.payload.results],
                loadLink: action.payload.next,
            };
        case SEARCH_POKEMONS:
            return {
                ...state,
                pokemons: state.allLoaded.filter(
                    (pokemon) =>
                        pokemon.name.includes(action.payload) ||
                        pokemon.types
                            .map(
                                (object: { type: { name: any } }) =>
                                    object.type.name
                            )
                            .findIndex((type: string | string[]) => {
                                if (type.includes(action.payload)) {
                                    return true;
                                }
                            }) + 1
                ),
            };
        case REMOVE_SEARCH:
            return {
                ...state,
                pokemons: state.allLoaded,
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
