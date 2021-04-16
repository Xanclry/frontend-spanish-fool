import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SessionApi } from '../../../../api/session-api'
import { GameSession } from '../../../../model/session/game-session'
import { v4 as uuid } from 'uuid'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../../../../context/auth-context'

const sessionApi = new SessionApi()

export const LobbySelectPage = () => {
  const [openSessions, setOpenSessions] = useState<GameSession[]>([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [newSessionName, setNewSessionName] = useState<string>('')
  const { currentUser } = useAuth()

  const getOpenSessions = () => {
    sessionApi
      .getOpenSessions()
      .then(result => {
        setOpenSessions(result)
      })
      .catch(error => {
        console.error(error)
        setErrorMessage('An error occupied')
      })
  }

  useEffect(() => {
    getOpenSessions()
  }, [])

  const createNewGameSession = () => {
    setErrorMessage('')
    if (newSessionName) {
      sessionApi
        .createNewGameSession({
          owner: { email: currentUser?.email || '', uid: currentUser?.uid || '' },
          name: newSessionName,
        })
        .then(getOpenSessions)
        .catch(errorMessage => {
          console.error(errorMessage)
          setErrorMessage('An error occupied')
        })
    } else {
      setErrorMessage('Session name can not be blank')
    }
  }

  return (
    <div>
      <h1>Select lobby</h1>
      <Link to={'/'}>
        <p>Main menu</p>
      </Link>
      <br />
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <div>
        <p>Create new session</p>
        <input value={newSessionName} onChange={event => setNewSessionName(event.target.value)} />
        <button onClick={createNewGameSession}>Create</button>
      </div>
      <li>
        {openSessions.map(session => (
          <ul key={uuid()}>
            <Link to={{ pathname: '/game/table', state: session }}>
              <p>
                {session.sessionStatus}: {session.name} - {session.playerCount} players
              </p>
            </Link>
          </ul>
        )) || <p>No active sessions</p>}
      </li>
    </div>
  )
}
