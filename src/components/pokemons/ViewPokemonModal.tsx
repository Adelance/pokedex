import { useSelector } from 'react-redux';

const ViewPokemonModal = () => {
    const allPokemons: any = useSelector((state) => state);
    const params = allPokemons.pokemon.current;
    let sprite = '';
    if (params.name) {
        sprite = params.sprites.other.home.front_default;
    }
    return (
        <div
            id="view-pokemon-modal"
            className="modal collection-header"
            style={modalStyle}
        >
            <div className="modal-content flex-container-modal">
                <div>
                    <h3 className="capitalize">{params.name}</h3>
                    <h5>Weight: {params.weight} kg</h5>
                    <h5>Height: {params.height}'</h5>
                </div>
                <div>
                    <img
                        src={sprite}
                        alt="Alternative Sprite"
                        width="300"
                        height="300"
                    />
                </div>
            </div>
        </div>
    );
};

const modalStyle = {
    width: '75%',
    height: '75%',
};

export default ViewPokemonModal;
