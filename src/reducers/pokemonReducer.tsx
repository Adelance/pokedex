import { appState } from '../types/State'
import {
    POKEMONS_ERROR,
    GET_POKEMONS,
    SET_CURRENT
} from '../types/types'

const initialState = {
    pokemons: [],
    current: {},
    error: null
}

export default (state: appState = initialState, action: { type: string, payload: object }) => {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
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
