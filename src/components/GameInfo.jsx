const GameInfo = ({ currentPlayer, gameStatus }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Game Info</h2>
      <p className="mb-2">
        Current Turn: <span className="font-semibold capitalize">{currentPlayer}</span>
      </p>
      <p className="mb-2">
        Game Status: <span className="font-semibold capitalize">{gameStatus}</span>
      </p>
      {gameStatus !== 'ongoing' && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          New Game
        </button>
      )}
    </div>
  );
};

export default GameInfo;
