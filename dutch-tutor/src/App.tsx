import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Level from "./Level";
import LevelEnd from "./LevelEnd";
enum IGameState {
  Started,
  Finished,
  StartMenu,
}
function App() {
  const [gameState, setGameState] = useState<IGameState>(IGameState.Finished);
  function handleBackToMenu() {
    console.log("State Changed");
    setGameState(IGameState.Started);
  }
  function handleGameEnd() {
    setGameState(IGameState.Finished);
  }
  function handleGameStart() {
    setGameState(IGameState.Started);
  }
  return (
    <div className="h-screen">
      <Navbar />
      {gameState == IGameState.Started ? (
        <Level handleLevelEnd={() => handleGameEnd()} />
      ) : gameState === IGameState.Finished ? (
        <LevelEnd handleGoToMenu={() => handleBackToMenu()} />
      ) : (
        <Level handleLevelEnd={() => handleGameEnd()} />
      )}
    </div>
  );
}

export default App;
