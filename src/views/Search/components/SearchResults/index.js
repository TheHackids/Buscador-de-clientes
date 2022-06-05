import SearchResultItem from "./SearchResultsItem";
export default function SearchResults ({results, isSearching}) {
    // !results?.length && -> Si results.length es cero o no existe, muestra "No existen resultados"
    return (
        <div>
            {!results?.length && isSearching && <p>No existen resultados</p>}
            {results?.map((value) => {
                return (
                    <div>
                        <SearchResultItem key={value.id} {...value}/>
                    </div>
                );
            })}
        </div>
    )
}

/*name={value.name} email={value.email} 
con {...value} le estoy pasando todas las propiedades*/