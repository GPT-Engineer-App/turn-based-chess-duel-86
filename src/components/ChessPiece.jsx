import { CircleDot, Hexagon, Triangle, Star, Crown } from 'lucide-react';

const ChessPiece = ({ piece }) => {
  const color = piece === piece.toUpperCase() ? 'white' : 'black';
  const size = 40;

  const getPieceComponent = () => {
    switch (piece.toLowerCase()) {
      case 'p':
        return <CircleDot size={size} />;
      case 'r':
        return <Hexagon size={size} />;
      case 'n':
        return <Triangle size={size} />;
      case 'b':
        return <Star size={size} />;
      case 'q':
        return <Crown size={size} />;
      case 'k':
        return <Crown size={size} strokeWidth={3} />; // Thicker stroke for the king
      default:
        return null;
    }
  };

  return <div className={`text-${color}`}>{getPieceComponent()}</div>;
};

export default ChessPiece;
