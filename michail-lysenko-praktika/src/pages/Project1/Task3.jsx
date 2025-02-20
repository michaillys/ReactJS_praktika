import { useState, useEffect } from "react";
import GuessForm from "./Task3/GuessForm";
import Message from "./Task3/Message";

const Task3 = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [message, setMessage] = useState("Atspėkite skaičių nuo 1 iki 100");
  const [guesses, setGuesses] = useState([]);

  // Generate random number on component mount
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);

    if (guess === randomNumber) {
      setMessage("Teisingai! Atspėjai skaičių!");
    } else if (guess > randomNumber) {
      setMessage("Bandyk mažesnį skaičių");
    } else {
      setMessage("Bandyk didesnį skaičių");
    }
  };

  return (
    <div className="container text-center border p-3 my-3 bg-light border rounded" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Skaičių Spėjimo Žaidimas</h1>
      <GuessForm onGuess={handleGuess} />
      <Message message={message} guesses={guesses} />
    </div>
  );
};

export default Task3;