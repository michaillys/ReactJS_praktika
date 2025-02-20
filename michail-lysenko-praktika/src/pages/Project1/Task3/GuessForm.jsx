import { useState } from "react";

const GuessForm = ({ onGuess }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const guess = parseInt(inputValue);
    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
      onGuess(guess);
      setInputValue("");
    } else {
      alert("Įveskite skaičių nuo 1 iki 100");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <div className="form-group mb-2 text-center custom-input">
        <input
          type="number"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Įveskite skaičių (1-100)"
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2 ml-2">Spėti</button>
    </form>
  );
};

export default GuessForm;
