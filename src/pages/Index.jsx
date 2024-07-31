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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Two-Player Chess</h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <ChessBoard currentPlayer={currentPlayer} onTurnChange={handleTurnChange} setGameStatus={setGameStatus} />
        <GameInfo currentPlayer={currentPlayer} gameStatus={gameStatus} />
      </div>
    </div>
  );
};

export default Index;
