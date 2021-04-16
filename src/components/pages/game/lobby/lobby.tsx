import React from 'react'
import { Link } from 'react-router-dom'
import { GameSession } from '../../../../model/session/game-session'
import { GameSessionStatus } from '../../../../model/session/game-session-status'
import { Redirect } from 'react-router'

export const LobbyPage = (props: any) => {
  const currentGameSession: GameSession = props.location.state
  return (
    <div>
      {currentGameSession.sessionStatus.toString() !== GameSessionStatus[GameSessionStatus.OPEN] ? (
        <Redirect to={'/'} />
      ) : (
        <>
          <h1>Lobby</h1>
          <ul>
            <li>Session id - {currentGameSession.id}</li>
            <li>
              {currentGameSession.name} - {currentGameSession.sessionStatus.toString()}
            </li>
            <li>Current playing - {currentGameSession.playerCount}</li>
          </ul>
          <p>{JSON.stringify(props.location.state)}</p>
          <div>
            <br />
            <p>Start game?</p>
            <Link to={{ pathname: '/game/table', state: currentGameSession }}>
              <p>Go</p>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
