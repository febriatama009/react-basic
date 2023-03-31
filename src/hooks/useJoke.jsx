import axios from "axios";
import { useState, useEffect } from "react";

export default function useJoke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const getJoke = async () => {
      const { data } = await axios(`https://api.chucknorris.io/jokes/random/`);
      setJoke(data);
    };
    getJoke().then((r) => r);
  }, [name]);

  return joke;
}
