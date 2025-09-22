//CSS
import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//Data
import { wordsList } from "./data/words";

//Componentes
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 5;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //Categories
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //Words
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  //Start Game
  const startGame = useCallback(() => {
    //Clear all Letters
    clearLetterStates();

    //pick word and pick category
    const { word, category } = pickWordAndCategory();

    //Create an array of Letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //fill States
    setPickedWord(word);
    setpickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // adicionara a letra correta ou remover uma chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, //pega todos os elementos atuais e junta com o novo
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, //pega todos os elementos atuais e junta com o novo
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  //monitora as tentativas para acabar o jogo quando guesses for menor ou igual a 0
  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //Monitorar win Condition

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]; //set só deixa itens unicos em um array

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => actualScore + 100);

      //restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  // restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && (
          <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === "end" && <GameOver retry={retry} score={score} />}
      </div>
    </>
  );
}

export default App;
