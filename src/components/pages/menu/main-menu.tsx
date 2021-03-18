import React from 'react'
import { Link } from 'react-router-dom'
import styles from './main-menu.module.scss'

export const MainMenu = () => {
  return (
    <div>
      <h1>Main Menu</h1>
      <h2>Hello!</h2>
      <div className={styles.panelWrap}>
        <div className={styles.panelItemWrap}>
          <Link to={'/game/lobby-select'}>
            <div className={styles.item}>Play</div>
          </Link>
        </div>
        <div className={styles.panelItemWrap}>
          <Link to={'/settings'}>
            <div className={styles.item}>Settings</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
