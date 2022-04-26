import { useDispatch } from 'react-redux';
import { setCurrent } from '../../actions/pokemonActions';

const PokemonItem = ({ pokemon }: any) => {
    const dispatch = useDispatch();
    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="collection-item row">
            <a
                href="#view-pokemon-modal"
                className="modal-trigger texting"
                onClick={() => setCurrent(pokemon)(dispatch)}
            >
                <div className="column sprite">
                    <img
                        src={pokemon.sprites.other.home.front_default}
                        width="150"
                        height="150"
                        alt="PokeDex"
                    />
                </div>
                <span>
                    <h6>Name:</h6>
                    <h3>{capitalize(pokemon.name)}</h3>
                </span>
                <span>Types: </span>
                {pokemon.types.map((element: any, index: any) => (
                    <span className="" key={index}>
                        {capitalize(element.type.name)}{' '}
                    </span>
                ))}
            </a>
        </div>
    );
};

export default PokemonItem;
