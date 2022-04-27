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
    }, []);

    const loadMore = () => {
        getNextPokemons(loadLink)(dispatch);
    };

    const allPokemons: any = useSelector((state) => state);

    const pokemonList: object[] = allPokemons.pokemon.pokemons;

    const loadLink: string = allPokemons.pokemon.loadLink;

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
                        <Preloader />
                        Pokemons not found{' '}
                    </li>
                ) : (
                    pokemonList.map((pokemon, index) => (
                        <li key={index}>{<PokemonItem pokemon={pokemon} />}</li>
                    ))
                )}
            </ul>
            <div className="center">
                <a className="waves-effect waves-light btn" onClick={loadMore}>
                    Load more
                </a>
            </div>
        </div>
    );
};

export default Pokemons;
