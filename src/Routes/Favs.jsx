import React, {useEffect, useState} from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const [favs, setFavs] = useState([]);

    const getFavs = () => {
        const favs = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('card_')) {
                const cardInfo = JSON.parse(localStorage.getItem(key));
                favs.push(cardInfo);
            }
        }
        return favs;
    };

    useEffect(() => {
        const favs = getFavs();
        setFavs(favs);
    }, []);



  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
              {favs.map((dentist) => {
                  return (
                      <Card
                          key={dentist.id}
                          name={dentist.name}
                          username={dentist.username}
                          id={dentist.id}
                          isFav={1}
                      />
                  );
              })}
      </div>
    </>
  );
};

export default Favs;
