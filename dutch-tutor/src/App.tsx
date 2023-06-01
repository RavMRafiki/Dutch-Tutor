import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Level from "./Level";
import LevelEnd from "./LevelEnd";
import LevelChoose from "./LevelChoose";
interface IQuestion {
  typeofquest: string;
  question: string;
  sentence: string;
  words: string[];
  correct: string[];
}
interface IQuiz {
  quizname: string;
  questions: IQuestion[];
}

const Questions: IQuiz[] = [
  {
    quizname: "First Quiz",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Ik heb een koe",
        words: ["I", "have", "am", "tomato", "cow", "a"],
        correct: ["I", "have", "a", "cow"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "They throw cabbage",
        words: ["Ze", "ga", "aardappel", "gooien", "kool"],
        correct: ["Ze", "gooien", "kool"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to english",
        sentence: "Ik ben geen tomaat",
        words: ["friend", "I", "am", "coconut", "a", "tomato", "not"],
        correct: ["I", "am", "not", "a", "tomato"],
      },
    ],
  },
  {
    quizname: "Quiz A1",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Ik ben een student",
        words: ["I", "have", "am", "tomato", "student", "a"],
        correct: ["I", "am", "a", "student"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "I like pizza",
        words: ["van", "Ik", "am", "houd", "a", "tomato", "woon", "pizza"],
        correct: ["Ik", "houd", "van", "pizza"],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Mijn naam is Anna",
        words: ["Anna", "My", "am", "name", "good", "student", "is"],
        correct: ["My", "name", "is", "Anna"],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Ik woon in Nederland",
        words: [
          "in",
          "live",
          "the",
          "name",
          "good",
          "work",
          "come",
          "from",
          "I",
          "is",
          "Netherlands",
        ],
        correct: ["I", "live", "in", "the", "Netherlands"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "I speak a little Dutch",
        words: [
          "van",
          "Ik",
          "spreek",
          "beetje",
          "a",
          "tomato",
          "een",
          "woon",
          "Nederlands",
        ],
        correct: ["Ik", "spreek", "een", "beetje", "Nederlands"],
      },
    ],
  },
  {
    quizname: "Quiz A2",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Ik werk als een receptionist in een hotel",
        words: [
          "hotel",
          "like",
          "as",
          "in",
          "sleep",
          "receptionist",
          "a",
          "I",
          "You",
          "a",
          "work",
        ],
        correct: ["I", "work", "as", "a", "receptionist", "in", "a", "hotel"],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "In mijn vrije tijd ga ik graag naar de bioscoop",
        words: [
          "I",
          "free",
          "my",
          "going",
          "receptionist",
          "In",
          "koekjes",
          "time",
          "the",
          "You",
          "to",
          "hotel",
          "enjoy",
          "cinema",
        ],
        correct: [
          "In",
          "my",
          "free",
          "time",
          "I",
          "enjoy",
          "going",
          "to",
          "the",
          "cinema",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "My favorite holiday destination is Spain",
        words: [
          "favoriete",
          "graag",
          "Mijn",
          "tijd",
          "Spanje",
          "vakantiebestemming",
          "is",
        ],
        correct: ["Mijn", "favoriete", "vakantiebestemming", "is", "Spanje"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "I have a cat as a pet. Her name is Mimi",
        words: [
          "vakantiebestemming",
          "huisdier",
          "kat",
          "naam",
          "heb",
          "werk",
          "Mimi",
          "is",
          "Haar",
          "graag",
          "een",
          "als",
          "Ik",
        ],
        correct: [
          "Ik",
          "heb",
          "een",
          "kat",
          "als",
          "huisdier",
          "Haar",
          "naam",
          "is",
          "Mimi",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "Today, I'm going grocery shopping and then cooking for dinner",
        words: [
          "huisdier",
          "voor",
          "daarna",
          "ik",
          "ga",
          "het",
          "boodschappen",
          "Vandaag",
          "avondeten",
          "een",
          "en",
          "koken",
          "Mimi",
          "doen",
        ],
        correct: [
          "Vandaag",
          "ga",
          "ik",
          "boodschappen",
          "doen",
          "en",
          "daarna",
          "koken",
          "voor",
          "het",
          "avondeten",
        ],
      },
    ],
  },
];
const quiznames: string[] = Questions.map((el) => el.quizname);
enum IGameState {
  Started,
  Finished,
  StartMenu,
}
function App() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [gameState, setGameState] = useState<IGameState>(IGameState.StartMenu);
  function handleBackToMenu() {
    setGameState(IGameState.StartMenu);
  }
  function handleGameEnd() {
    setGameState(IGameState.Finished);
  }
  function handleGameStart(index: number): void {
    setCurrentQuestion(index);
    setGameState(IGameState.Started);
  }
  return (
    <div className="h-screen">
      <Navbar />
      {gameState == IGameState.Started ? (
        <Level
          handleLevelEnd={() => handleGameEnd()}
          currentQuiz={Questions[currentQuestion]}
        />
      ) : gameState === IGameState.Finished ? (
        <LevelEnd handleGoToMenu={() => handleBackToMenu()} />
      ) : (
        <LevelChoose levelNames={quiznames} handleChoose={handleGameStart} />
      )}
    </div>
  );
}

export default App;
