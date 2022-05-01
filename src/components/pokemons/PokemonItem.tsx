import { useDispatch } from 'react-redux';
import { setCurrent } from '../../actions/pokemonActions';

const PokemonItem = ({ pokemon }: any) => {
    const dispatch = useDispatch();
    return (
        <div className="collection-item">
            <a
                href="#view-pokemon-modal"
                className="modal-trigger texting"
                onClick={() => setCurrent(pokemon)(dispatch)}
            >
                <div className="flex-container capitalize">
                    <div>
                        <img
                            src={
                                pokemon.sprites.other.dream_world.front_default
                            }
                            width="150"
                            height="150"
                            alt="PokeDex"
                        />
                    </div>
                    <div>
                        Name:
                        <div>
                            <h3 className="name">{pokemon.name}</h3>
                        </div>
                    </div>
                    <div>
                        Types:
                        {pokemon.types.map((element: any, index: any) => (
                            <div key={index} className="types">
                                {element.type.name}
                            </div>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PokemonItem;
