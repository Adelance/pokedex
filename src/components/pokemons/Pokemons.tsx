import { useEffect } from 'react';
import Logo from '../../resources/Logo.png';
import PokemonItem from './PokemonItem';
import Preloader from '../layout/Preloader';
import { getPokemons, getNextPokemons } from '../../actions/pokemonActions';
import { useDispatch, useSelector } from 'react-redux';

const Pokemons = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getPokemons()(dispatch);
        //eslint-disable-next-line
    }, []);

    const loadMore = () => {
        getNextPokemons(loadLink)(dispatch);
    };

    const allPokemons: any = useSelector((state) => state);
    let pokemonList: object[] = allPokemons.pokemon.allLoaded;
    const loadLink: string = allPokemons.pokemon.loadLink;
    const filtered: string = allPokemons.pokemon.filtered;
    pokemonList = pokemonList.filter(
        (pokemon: any) =>
            pokemon.name.includes(filtered) ||
            pokemon.types
                .map((object: { type: { name: any } }) => object.type.name) // eslint-disable-next-line
                .findIndex((type: string | string[]) => {
                    if (type.includes(filtered)) {
                        return true;
                    }
                }) + 1
    );

    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <div className="center">
                        {' '}
                        <img src={Logo} alt="PokéDex" />{' '}
                    </div>
                </li>
                {pokemonList.length === 0 ? (
                    <li className="center">
                        {allPokemons.pokemon.allLoaded.length === 0 ? (
                            <Preloader />
                        ) : (
                            <span>Pokemons not found </span>
                        )}
                    </li>
                ) : (
                    pokemonList.map((pokemon, index) => (
                        <li key={index}>{<PokemonItem pokemon={pokemon} />}</li>
                    ))
                )}
            </ul>
            <div className="center">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a className="waves-effect waves-light btn" onClick={loadMore}>
                    Load more
                </a>
            </div>
        </div>
    );
};

export default Pokemons;
