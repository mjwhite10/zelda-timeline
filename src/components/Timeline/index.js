import { GameCard } from '../GameCard';
import { List } from '../List';
import './style.css';
export const Timeline = ({ items }) => {
  return (
    <section className="timeline">
      <List
        data={items.sort((a, b) => a.date - b.date)}
        render={(g, i) => {
          return (
            <li key={i}>
              <GameCard game={g} />
            </li>
          );
        }}
      />
    </section>
  );
};
