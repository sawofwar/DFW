import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        word="Matriculation"
        definition="Formal process of entering a university"
      />
      <img
        src="./src/images/infinite_jest.webp"
        alt="A white cloud against a red sky."
        className="image-jest"
      />
    </div>
  );
}

export default App;
