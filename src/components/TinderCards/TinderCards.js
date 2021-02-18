import React, { useState } from "react";
import "./TinderCards.css";

import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
    },
    {
      name: "Jeff Bezoz",
      url:
        "https://image.cnbcfm.com/api/v1/image/105815446-1553624918736gettyimages-1078542150.jpeg?v=1612303414",
    },
    {
      name: "Mark Cuban",
      url:
        "https://observer.com/wp-content/uploads/sites/2/2020/06/GettyImages-1208654397-e1592402367158.jpg?quality=80",
    },
  ]);

  const swiped = (directon, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person?.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person?.name)}
            onCardLeftScreen={() => outOfFrame(person?.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person?.url})` }}
            >
              <h3>{person?.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
