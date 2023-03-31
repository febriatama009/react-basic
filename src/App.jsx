import PlaceContent from "./components/PlaceContent";
import useJoke from "./hooks/useJoke";
import Card from "./components/Card";
import Button from "./components/Button";
import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("");
  const joke = useJoke(name);

  function generateJokes(e) {
    e.preventDefault();
  }

  return (
    <PlaceContent>
      <Card>
        <Card.Title>Chuck Norris Jokes</Card.Title>
        <Card.Body>
          <p>{joke.value}</p>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Card.Body>
        <Card.Footer>
          <Button className="bg-black" onClick={generateJokes}>
            Generate Jokes
          </Button>
        </Card.Footer>
      </Card>
    </PlaceContent>
  );
}

export default App;
