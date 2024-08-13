import { useState } from 'react';
import ChessBoard from '../components/ChessBoard';
import GameInfo from '../components/GameInfo';

const Index = () => {
  const [currentPlayer, setCurrentPlayer] = useState('white');
  const [gameStatus, setGameStatus] = useState('ongoing');

  const handleTurnChange = () => {
    setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
      <h1 className="text-6xl font-bold mb-12 text-primary glow">Futuristic Chess 3030</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <ChessBoard currentPlayer={currentPlayer} onTurnChange={handleTurnChange} setGameStatus={setGameStatus} />
        <GameInfo currentPlayer={currentPlayer} gameStatus={gameStatus} />
      </div>
    </div>
  );
};

export default Index;
