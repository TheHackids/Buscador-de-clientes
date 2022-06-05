import { useState } from "react";
import ClientsList from "../ClientsList";
import "./style.css"
// En REACT.JS se nombra className, en lugar de class
export default function SearchBox ({ onSearch, onClose, isSearching }) {
    const [searchText, setSearchText] = useState ("");
    const handleCloseSearch = () => {
        setSearchText("");
        onClose(); 
    };
    
//onClose y setSearchText son propiedades
    return (
        <div>
            <div className="search-box"> 
            <h1 className="search-box-title">Buscador de clientes</h1>
            <div className="search-box-buttons">
            <label>
                <input value={searchText} 
                onChange = {({ target: { value }}) => setSearchText(value)}
                className="search-box-input"/>
            </label>
            <button onClick={() => onSearch(searchText)}
                    disabled={!searchText.length}>
                Buscar
            </button>
            {isSearching && <button onClick={handleCloseSearch}
                    disabled={!searchText.length}>
                Cerrar
            </button>}
            </div>
            <div>
            {!isSearching && <ClientsList/>}
            </div>
            </div>
        </div>
    );
}