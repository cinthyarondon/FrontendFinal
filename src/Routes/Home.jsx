import React, {useContext, useEffect, useState} from 'react'
import Card from '../Components/Card'
import {response} from "msw";
import {ContextGlobal} from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

    const { state, dispatch } = useContext(ContextGlobal);
  const getDentists= async () => {
      state.data = await fetch(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
          return response.json()
      })
      dispatch({ type: "DATA", payload: state.data });
  }

  useEffect(()=>{
      getDentists()
  }, )

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
          {state.data.map((dentist) => {
          return (<Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username}/>)})
          }
      </div>
    </main>
  )
}

export default Home