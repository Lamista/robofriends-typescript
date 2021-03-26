import * as React from 'react';
import Card from './Card';

import { IRobot } from '../containers/App';

interface ICardListProps {
  robots: Array<IRobot>
}

// const CardList = ({ robots }: { robots: Array<IRobot> }) => {
const CardList = ({ robots }: ICardListProps) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;