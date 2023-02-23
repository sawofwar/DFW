import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {
      const dfwJSON = await fetch("./src/dfw.json");
      const data = await dfwJSON.json();
      const numRandom = Math.floor(Math.random() * data.length);
      const wordRandom = data[numRandom].word.slice(0, -1);
      const descriptionRandom = data[numRandom].description;
      setWord(wordRandom);
      setDescription(descriptionRandom);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Random rare word from Infinite Jest by DFW</h1>

      <Card word={word} definition={description} />
      <img
        src="./src/images/infinite_jest.webp"
        alt="A white cloud against a red sky."
        className="image-jest"
      />
    </div>
  );
}

export default App;
