import React from 'react';
import './ImageCard.css';

const ImageCard = () => {
  const events = [
    { image: '/event1.png', title: 'Event 1', description: 'This is event 1 description.' },
    { image: '/event2.png', title: 'Event 2', description: 'This is event 2 description.' },
    { image: '/event3.png', title: 'Event 3', description: 'This is event 3 description.' },

  ];

  return (
    <div className="card-container">
      {events.map((event, index) => (
        <div key={index} className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={event.image} alt={`Event ${index}`} />
            </div>
            <div className="card-back">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
