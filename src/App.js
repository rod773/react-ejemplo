import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const getData = () => {
    axios
      .get("https://randomuser.me/api/")

      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Application - This is My App</h1>
        <button onClick={getData}>Get Data</button>
      </header>
    </div>
  );
}

export default App;
