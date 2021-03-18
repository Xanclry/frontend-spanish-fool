import React from 'react'
import { Link } from 'react-router-dom'

export const LobbySelectPage = () => {
  return (
    <div>
      <h1>Select lobby</h1>
      <li>
        <ul>
          <Link to={'/game/lobby'}>
            <p>lobby 1</p>
          </Link>
        </ul>
        <ul>
          <Link to={'/game/lobby'}>
            <p>lobby 2</p>
          </Link>
        </ul>
        <ul>
          <Link to={'/game/lobby'}>
            <p>lobby 3</p>
          </Link>
        </ul>
      </li>
    </div>
  )
}
