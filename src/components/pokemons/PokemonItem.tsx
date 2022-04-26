import { useDispatch } from 'react-redux';
import { setCurrent } from '../../actions/pokemonActions';

const PokemonItem = ({ pokemon }: any) => {
    const dispatch = useDispatch();
    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="collection-item">
            <a
                href="#view-pokemon-modal"
                className="modal-trigger texting"
                onClick={() => setCurrent(pokemon)(dispatch)}
            >
                <div className="flex-container">
                    <div>
                        <img
                            src={pokemon.sprites.other.home.front_default}
                            width="150"
                            height="150"
                            alt="PokeDex"
                        />
                    </div>
                    <div>
                        Name:
                        <div>
                            <h3>{capitalize(pokemon.name)}</h3>
                        </div>
                    </div>
                    <div>
                        Types:
                        {pokemon.types.map((element: any, index: any) => (
                            <div key={index}>
                                {capitalize(element.type.name)}
                            </div>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PokemonItem;
