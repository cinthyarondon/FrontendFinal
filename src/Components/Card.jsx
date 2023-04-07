import React from "react";
import {Link} from "react-router-dom";


const Card = ({ name, username, id, isFav }) => {

  const addFav = () => {
    const cardInfo = { name, username, id };
    localStorage.setItem(`card_${id}`, JSON.stringify(cardInfo));
    alert('Agregado a favoritos')
  };

  return (
    <div className="card">

      <Link to={`detail/${id}`}>
      <img src={'img/doctor.jpg'} width={'80%'}/>
      <h3>{name}</h3>
      <h3>{username}</h3>
      <h3>{id}</h3>
      </Link>
        { !isFav ?<button onClick={addFav} className="favButton">Add fav</button> : ''}
    </div>
  );
};

export default Card;
