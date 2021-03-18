import React from 'react'
import { Link } from 'react-router-dom'

export const LobbyPage = () => {
  return (
    <div>
      <h1>Lobby</h1>
      <div>
        <br />
        <p>Start game?</p>
        <Link to={'/game/table'}>
          <p>Go</p>
        </Link>
      </div>
    </div>
  )
}
