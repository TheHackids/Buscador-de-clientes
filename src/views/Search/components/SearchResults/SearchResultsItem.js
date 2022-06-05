export default function SearchResultItem ({name, email, phone}) {
    return (
            <div style={{ 
                backgroundColor: "rgb(248, 178, 47)", 
                marginTop: 5, 
                marginBottom:5, 
                paddingTop: "10px",
                paddingBottom: "10px", 
                paddingLeft: "200px", 
                paddingRight:"200px"}}>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                    </div>
    );
}