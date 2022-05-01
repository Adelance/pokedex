import {
    GET_POKEMONS,
    GET_NEXT_POKEMONS,
    POKEMONS_ERROR,
    SET_CURRENT,
    SEARCH_POKEMONS,
} from '../types/types';

import { Dispatch } from 'redux';

export const getPokemons = () => async (dispatch: Dispatch) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const data = await res.json();
        const promises: object[] = [];

        data.results.forEach((item: any) => {
            promises.push(fetch(item.url).then((res) => res.json()));
        });

        Promise.all(promises).then((results) => {
            dispatch({
                type: GET_POKEMONS,
                payload: {
                    results: results,
                    next: data.next,
                },
            });
        });
    } catch (err) {
        dispatch({
            type: POKEMONS_ERROR,
            payload: err.response.data,
        });
    }
};

export const getNextPokemons = (link: string) => async (dispatch: Dispatch) => {
    try {
        const res = await fetch(link);
        const data = await res.json();
        const promises: object[] = [];
        data.results.forEach((item: any) => {
            promises.push(fetch(item.url).then((res) => res.json()));
        });

        Promise.all(promises).then((results) => {
            dispatch({
                type: GET_NEXT_POKEMONS,
                payload: {
                    results: results,
                    next: data.next,
                },
            });
        });
    } catch (err) {
        dispatch({
            type: POKEMONS_ERROR,
            payload: err.response.data,
        });
    }
};

export const searchPokemons =
    (searchText: string) => async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: SEARCH_POKEMONS,
                payload: searchText,
            });
        } catch (err) {
            dispatch({
                type: POKEMONS_ERROR,
                payload: err.response.data,
            });
        }
    };

export const setCurrent = (pokemon: any) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_CURRENT,
        payload: pokemon,
    });
};
