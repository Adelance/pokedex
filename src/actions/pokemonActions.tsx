import {
    GET_POKEMONS,
    POKEMONS_ERROR,
    SET_CURRENT
} from "../types/types"

import { Dispatch } from "redux";

export const getPokemons = (offset: number) => async (dispatch: Dispatch) => {
    try{

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
        const data = await res.json();
        const promises: any = [];
        
        data.results.map((item: any) => {
            promises.push(fetch(item.url).then(res => res.json()));
        })

        Promise.all(promises).then(results => {
            dispatch({
                type: GET_POKEMONS,
                payload: results
            })
        });
    } catch(err) {
        dispatch({
            type: POKEMONS_ERROR,
            payload: err.response.data
        })
    }
}

export const searchPokemons = (type: string) => async (dispatch: Dispatch) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await res.json();
        const promises: any = [];
        data.pokemon.map((item: any) => {
            promises.push(fetch(item.pokemon.url).then(res => res.json()));
        })
        
        Promise.all(promises).then(results => {
            dispatch({
                type: GET_POKEMONS,
                payload: results
            })
        });
    } catch(err) {
        dispatch({
            type: POKEMONS_ERROR,
            payload: err.response.data
        })
    }
}
export const searchNamePokemons = (type: string) => async (dispatch: Dispatch) => {
    try{

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${type}`)
    
        const data = await res.json();
       
    
        dispatch({
            type: GET_POKEMONS,
            payload: [data]
        })
    } catch(err) {
        dispatch({
            type: GET_POKEMONS,
            payload: []
        })
    }
}
export const setCurrent = (pokemon: any) => (dispatch: Dispatch)=>{
    dispatch({
        type: SET_CURRENT,
        payload: pokemon
    })

}