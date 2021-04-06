import React from 'react'
import { CardComponent } from '../../../card-component/cardComponent'
import styles from './opponentHand.module.scss'

interface Props {
  cardAmount: number
}

export const OpponentHand = ({ cardAmount }: Props) => {
  const cards = Array(cardAmount).fill(<CardComponent card={null} />)
  return (
    <div className={styles.mainWrap}>
      <div className={styles.handWrap}>{cards}</div>
    </div>
  )
}
