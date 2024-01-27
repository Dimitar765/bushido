// import React from 'react'
import Btn from '../button/Btn'
import './card.css'
import data from '../../data/treneri.json'

function Card() {

  // const name = data.treneri[0].name
  // console.log(name)
  return (
    <>
    {data.treneri.map((trener) => {
      return (<div className="card">
        <h1 className="cardTitle">{trener.name}</h1>
        <img src="cardPhoto.jpg" alt="" className="cardImg" />
        <p className="cardDesc">{trener.description}</p>
        <Btn/>
    </div>)
// console.log(trener.name)
})}
   
    </>
  )
}

export default Card