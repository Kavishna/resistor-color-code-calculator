import "./App.css";
import Bands from "./components/Bands/Bands";
import Resistor from "./components/Resistor/Resistor";

function App() {
  return (
    <div className="App">
      <h1>Resistor Color Code Calculator</h1>
      <Bands />
      <Resistor />
    </div>
  );
}

export default App;
