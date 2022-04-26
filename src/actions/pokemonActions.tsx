import {
    GET_POKEMONS,
    GET_NEXT_POKEMONS,
    POKEMONS_ERROR,
    SET_CURRENT,
    SEARCH_POKEMONS,
    REMOVE_SEARCH,
} from '../types/types';

import { Dispatch } from 'redux';

export const getPokemons = () => async (dispatch: Dispatch) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const data = await res.json();
        const promises: object[] = [];

        data.results.map((item: any) => {
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

        data.results.map((item: any) => {
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
        if (searchText.length === 0) {
            searchEnd()(dispatch);
        } else {
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
        }
    };

const searchEnd = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: REMOVE_SEARCH,
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
