import React, {useContext, useEffect, useState} from "react";
import Card from "../Components/Card";
import {ContextGlobal} from "../Components/utils/global.context";
import {getFav} from "../Components/utils/crudFavorites";


const Favs = () => {

    const {state, dispatch} = useContext(ContextGlobal);

    useEffect(() => {
        state.favorites = getFav()
        dispatch({ type: "FAV", payload: state.favorites });
    }, []);



  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
              {state.favorites.map((dentist) => {
                  return (
                      <Card
                          key={dentist.id}
                          name={dentist.name}
                          username={dentist.username}
                          id={dentist.id}
                      />
                  );
              })}
      </div>
    </>
  );
};

export default Favs;
