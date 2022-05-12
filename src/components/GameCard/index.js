import './style.css';
import { CardSticker } from '../CardSticker';
export const GameCard = ({ game }) => {
  return (
    <article className="gameCard">
      <figure>
        <img src={game.image} alt={game.title} />
      </figure>
      <h2>
        {game.title} ({game.date}) ({game.platform})
      </h2>
      <p>{game.text}</p>
      <CardSticker condition={game.goty} className="goty goldText">
        GOTY
      </CardSticker>
    </article>
  );
};
