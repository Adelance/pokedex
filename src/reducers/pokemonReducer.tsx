import { appState } from '../types/State'
import {
    POKEMONS_ERROR,
    GET_POKEMONS,
    GET_NEXT_POKEMONS,
    SET_CURRENT
} from '../types/types'

const initialState = {
    pokemons: [],
    loadLink: '',
    current: {},
    error: null
}

export default (state: appState = initialState, action: { type: string, payload: {results: object[], next: string} }) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload.results,
                loadLink: action.payload.next
            }
        case GET_NEXT_POKEMONS:
            return{
                ...state,
                pokemons: [...state.pokemons, ...action.payload.results],
                loadLink: action.payload.next
            }
        case POKEMONS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        default:
            return state;

    }
}
