import { useEffect, useState } from "react";
import Search from "./views/Search";
import "./App.css"
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect (() => {
    setTimeout(() => {
      setIsLoading(false);
    },4000);
  }, [])
  const renderData = () => {
    if (isLoading) {
      return(
        <div>
          <div className="mensaje-inicial">
          <h1>Mi primer buscador de clientes</h1>
          <h2>Created by Ector Rivadeneyra</h2>
          </div>
          <div className="loading-image">
          <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0" alt="Loading" width="500" height="500"></img>
          </div>
        </div>
      )
    }
    return (
      <div>
        <Search/>
      </div>
    )
  };
  return (
    <div>
      {renderData()}
    </div>
  );
}

export default App;

