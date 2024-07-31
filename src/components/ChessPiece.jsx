import { Pawn, Rook, Knight, Bishop, Queen, King } from 'lucide-react';

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
        return <Bishop size={size} />;
      case 'q':
        return <Queen size={size} />;
      case 'k':
        return <King size={size} />;
      default:
        return null;
    }
  };

  return <div className={`text-${color}`}>{getPieceComponent()}</div>;
};

export default ChessPiece;
