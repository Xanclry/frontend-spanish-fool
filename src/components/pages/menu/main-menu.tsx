import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './main-menu.module.scss'
import { useAuth } from '../../../context/auth-context'
import { Alert, Button } from 'react-bootstrap'

export const MainMenu = () => {
  const [error, setError] = useState<string>('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch (error) {
      setError('Failed to log out')
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Main Menu</h1>
      <h2>Hello!</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className={styles.panelWrap}>
        <Link to={'/game/lobby-select'}>
          <div className={styles.item}>Play</div>
        </Link>
        <div className={styles.panelWrap}>
          <Link to={'/settings'}>
            <div className={styles.item}>Settings</div>
          </Link>
        </div>
        {currentUser ? (
          <>
            <Link to={'/profile'}>
              <div className={styles.item}>Profile</div>
            </Link>
            <div className={styles.panelItemWrap}>
              <Button onClick={handleLogout}>Log Out</Button>
            </div>
          </>
        ) : (
          <Link to={'/login'}>
            <div className={styles.item}>Log in</div>
          </Link>
        )}
      </div>
    </div>
  )
}
