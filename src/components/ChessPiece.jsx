import { Pawn, Rook, Knight, Queen } from 'lucide-react';

const ChessPiece = ({ piece }) => {
  const color = piece === piece.toUpperCase() ? 'white' : 'black';
  const size = 40;

  const getPieceComponent = () => {
    switch (piece.toLowerCase()) {
      case 'p':
        return <Pawn size={size} />;
      case 'r':
        return <Rook size={size} />;
      case 'n':
        return <Knight size={size} />;
      case 'b':
      case 'q':
        return <Queen size={size} />;
      case 'k':
        return <Queen size={size} />; // Using Queen icon for King as well
      default:
        return null;
    }
  };

  return <div className={`text-${color}`}>{getPieceComponent()}</div>;
};

export default ChessPiece;
