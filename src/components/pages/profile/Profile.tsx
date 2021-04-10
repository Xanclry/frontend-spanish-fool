import React from 'react'
import { useAuth } from '../../../context/auth-context'
import { Link } from 'react-router-dom'
import styles from '../menu/main-menu.module.scss'

export const Profile = () => {
  const { currentUser } = useAuth()

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <Link to={'/'}>
          <div className={styles.item}>Back to main menu</div>
        </Link>
      </div>
      <div>Email: {currentUser?.email}</div>
      <div>UID: {currentUser?.uid}</div>
      <br />
      <div>{JSON.stringify(currentUser)}</div>
    </div>
  )
}
