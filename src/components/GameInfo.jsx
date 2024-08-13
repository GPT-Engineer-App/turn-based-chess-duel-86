import { RefreshCw } from 'lucide-react';

const GameInfo = ({ currentPlayer, gameStatus }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-primary glow">
      <h2 className="text-3xl font-bold mb-6 text-primary glow">Game Info</h2>
      <p className="mb-4 text-foreground text-lg">
        Current Turn: <span className={`font-semibold capitalize ${currentPlayer === 'white' ? 'text-primary glow' : 'text-secondary glow-secondary'}`}>{currentPlayer}</span>
      </p>
      <p className="mb-4 text-foreground text-lg">
        Game Status: <span className="font-semibold capitalize text-accent glow-accent">{gameStatus}</span>
      </p>
      {gameStatus !== 'ongoing' && (
        <button
          className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-accent transition-colors duration-300 flex items-center justify-center glow"
          onClick={() => window.location.reload()}
        >
          <RefreshCw className="mr-2" /> New Game
        </button>
      )}
    </div>
  );
};

export default GameInfo;
