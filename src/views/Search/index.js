import { useState } from "react";
import "./style.css";
import SearchBox from "./components/SearchBox";
import data from "../../data/users.json"
import SearchResults from "./components/SearchResults";
import ClientsList from "./components/ClientsList";



export default function Search () {
const [searchText, setSearchText] = useState ("");
    const [isAtTop,setIsAtTop] = useState (false);
    const [results,setResults] = useState ([]);
// Lo cambio para poder optimizarlo 
    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);
    };
    // length es de longitud (arreglo)
    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if (data?.length) {
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = data.filter((value) => {
                return (
                value.name.toLowerCase().includes(searchTextMinus) ||
                value.name.toLowerCase().includes(searchTextMinus) ||
                value.email.toLowerCase().includes(searchTextMinus) ||
                value.username.toLowerCase().includes(searchTextMinus)
                )
            })
            setResults(filteredData);
        }
    };
    return (
        <div className={`search ${isAtTop? "search--top": "search--center" }`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} isSearching={isAtTop}/>
            <br/>
            <SearchResults results={results} isSearching={isAtTop}/>
            <br/>
        </div>
    );
}

 //toLowerCase es un método de java que me permite hacer todo en minúscula
// USAREMOS COMPONENTES FUNCIONALES 
// onSearch & onClicks son propiedades  
// TOMEMOS NOTA DE LOS INPUTS CON ONCHANGE Y TARGET 
// "" en useState es para que no bote WARNING en la consola
/*    const handleSearchClick = () => {
        setIsAtTop(!isAtTop);
    };
    const handleCloseClick = () => {
        setIsAtTop(!isAtTop);
    };
    //clases condicionales
    //onSearch & onClose son eventos
    return (
        <div className={`search ${isAtTop? "search--top": "search--center" }`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick}/>
        </div>
    );
}*/