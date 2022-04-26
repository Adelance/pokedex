import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemons } from '../../actions/pokemonActions';

const NavBar = () => {
    const dispatch = useDispatch();
    const text: any = useRef('');

    const onChange = () => {
        searchPokemons(text.current.value.toLowerCase())(dispatch);
    };

    return (
        <nav style={{ marginBottom: '30px' }}>
            <div className="nav-wrapper">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="input-field">
                        <input
                            id="search"
                            type="search"
                            placeholder="Filter Pokémon by name of type..."
                            ref={text}
                            onChange={onChange}
                        />
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons">search</i>
                        </label>
                    </div>
                </form>
            </div>
        </nav>
    );
};
export default NavBar;
