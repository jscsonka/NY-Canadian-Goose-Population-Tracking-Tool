import "../src/App.css";
import { useState, useEffect, refreshPage } from "react";
import axios from "axios";
import imageLogo from "../src/images/cn2.png";
import imageLogo2 from "../src/images/cn3.png";
import reportWebVitals from "./reportWebVitals";


let url = "https://ny-goose-tracker-api-production.up.railway.app/api/geese";

function App() {
  const [goose, setGoose] = useState();
  const [howMany, setHowMany] = useState();

  useEffect(() => {
    const getGoose = async () => {
      const res = await axios.get(url, {
        headers: { Accept: "application/json" },
      });
      // console.log(res)
      setGoose(res.data);
    };
    getGoose();
    console.log(goose);
  }, []);

  if (!goose) return <h1>Loading</h1>;

  return (
    <div className="background">
      <img src={imageLogo} />
      Please select a location to display local Goose Population
      <div className="geesenumberdiv" >
      <h2 className="geesenumber">Number Of Geese = {howMany}</h2>
      </div>
      <div className="locationsbox">
        {goose.map((location) => (
          <div onClick={() => setHowMany(location.howMany)} > 
            <button className="location">
              {location.location}, {location.county}
            </button>
           
            </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;

// const Goose = joke.map((joke, index, { geese: { commonName, county } }) => {
//   return (
//     <div key="index">
//       <h1>{joke}</h1>
//       <h1>{commonName}</h1>
//       <small>{county}</small>
//     </div>
//   )
// })

// function refreshPage() {
//   window.location.reload(false);
// }

// useEffect(() => {
//   getGoose()
// }, [])
