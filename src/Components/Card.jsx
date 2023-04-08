import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {favorite, addFav, deleteFav, getFav} from "../Components/utils/crudFavorites"
import {ContextGlobal} from "./utils/global.context";


const Card = ({name, username, id}) => {

        const {state, dispatch} = useContext(ContextGlobal);
        const addFavLocal = () => {
            if (favorite(id)) {
                alert("Dentists already exists!!");
                return
            }
            const cardInfo = {name, username, id};
            addFav(cardInfo)
            state.favorites = getFav()
            dispatch({ type: "FAV", payload: state.favorites });
        }

        const deleteFavLocal = () => {
            deleteFav(id)
            state.favorites = getFav()
            dispatch({ type: "FAV", payload: state.favorites });
        };

        return (
            <div className="card">
                <Link to={`/detail/${id}`}>
                    <img src={'img/doctor.jpg'} width={'100%'} alt={"doctor"}/>
                    <p>{name} <br/>
                        {username}<br/>
                        {id}
                    </p>
                </Link>
                {!favorite(id) ? <button onClick={addFavLocal} className="favButton">☆</button> :
                    <button onClick={deleteFavLocal} className="favButton">⭐</button>}
            </div>
        );
    }
;

export default Card;
