
import React,{Fragment} from 'react';
import Header from './header';
const HotelList = () => {
  const hotels = [
    { id: 1, name: 'Hotel Sunshine', location: 'New York', rating: 4.5 },
    { id: 2, name: 'Blue Lagoon Resort', location: 'Miami', rating: 4.7 },
    { id: 3, name: 'Mountain Retreat', location: 'Denver', rating: 4.3 },
  ];

  return (
    <Fragment>
    <div className="hotel-list">
      <h2>Hotel Information</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <h3>{hotel.name}</h3>
            <p>Location: {hotel.location}</p>
            <p>Rating: {hotel.rating} ⭐</p>
          </li>
        ))}
      </ul>
    </div>
    </Fragment>
  );
};

export default HotelList;
