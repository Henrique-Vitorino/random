import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  const url = ['colors','typing']

  const getRandomGame = () =>{
    return Math.random()*10>5?url[0]:url[1]
  }
  return (
    <div class="layout">
      <div class="flex-container">
          <Link to={getRandomGame()} className="btn btn-primary">Random game</Link>
      </div>
    </div>
  )
}
