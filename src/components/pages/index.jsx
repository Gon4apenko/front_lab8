import React from "react";
import "../../assets/css/style.css";
import travelids from '../database/travelids.json';

function Index () { 
  const [foundTravels] = React.useState(travelids);

  return (
  <main>
  <h1 className="visually-hidden">Travel App</h1>
  <section className="trips-filter">
    <h2 className="visually-hidden">Trips filter</h2>
    <form className="trips-filter__form">
      <label className="trips-filter__search input">
        <span className="visually-hidden">Search by name</span>
        <input  
        type="search" 
        placeholder="search by title" />
        </label>
      
      <label className="select">
        <span className="visually-hidden">Search by duration</span>
        <select 
        name="duration"
       >
          <option value="">duration</option>
          <option value="0_x_5">&lt; 5 days</option>
          <option value="5_x_10">&lt; 10 days</option>
          <option value="10_x">&ge; 10 days</option>
        </select>
      </label>
      <label className="select">
        <span className="visually-hidden">Search by level</span>
        <select name="level">
          <option value="">level</option>
          <option value="easy">easy</option>
          <option value="moderate">moderate</option>
          <option value="difficult">difficult</option>
        </select>
      </label>
    </form>
  </section>
            {foundTravels && foundTravels.length > 0 ? (
                foundTravels.map((travel) => (
                  <section className="trips">
                      <h2 className="visually-hidden">Trips List</h2>
                    <ul className="trip-list">
                        <li className="trip-card" key={travel.id}>
                        <img src={travel.image} alt="" />
                        <div className="trip-card__content">
                         <div className="trip-info">
                          <h3 className="trip-info__title">{travel.title}</h3>
                          <div className="trip-info__content">
                        <span className="trip-info__duration"><strong>{travel.duration}</strong></span>
                        <span className="trip-info__level">{travel.level}</span>
                        </div>
                        </div>
                        <div className="trip-price">
                        <span className="trip-price__value"> <strong className="trip-price__value">{travel.price} $ </strong></span>
                        </div>
                        </div>
                        <a href="/trip/:tripId" className="button">Discover a trip</a>
                        </li>
                    </ul>
                    </section>
                ))
            ) : (
                <h1 style={{textAlign: "center"}}> No results found!</h1>
            )}
  </main>
);
}
export default Index;