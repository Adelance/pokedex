import { useSelector } from 'react-redux';

const ViewPokemonModal = () => {
    const allPokemons: any = useSelector((state) => state);
    const params = allPokemons.pokemon.current;
    let name = ' ',
        sprite = '';
    if (params.name) {
        name = params.name;
        sprite = params.sprites.other.home.front_default;
    }
    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return (
        <div
            id="view-pokemon-modal"
            className="modal collection-header"
            style={modalStyle}
        >
            <div className="modal-content flex-container-modal">
                <div>
                    <h3>{capitalize(name)}</h3>
                    <h5>Weight: {params.weight} kg</h5>
                    <h5>Height: {params.height}'</h5>
                </div>
                <div>
                    <img src={sprite} alt="sprite" width="300" height="300" />
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
