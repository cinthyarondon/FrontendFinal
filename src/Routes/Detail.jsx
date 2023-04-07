import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const [dentist, setDentist] = useState([])
    const paramsForDentist = useParams()
    const getDentist= async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/`+paramsForDentist.id).then((response)=>{
            return response.json()
        })
        setDentist(data)
    }

    useEffect(()=>{
        getDentist()
    }, )
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

        <h4>{dentist.name}</h4>
        <h4>{dentist.email}</h4>
        <h4>{dentist.phone}</h4>
        <h4>{dentist.website}</h4>
    </>
  )
}

export default Detail