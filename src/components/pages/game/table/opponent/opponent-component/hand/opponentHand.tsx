import React from 'react'
import { CardComponent } from '../../../card-component/cardComponent'
import styles from './opponentHand.module.scss'
import { v4 as uuid } from 'uuid'

interface Props {
  cardAmount: number
}

export const OpponentHand = ({ cardAmount }: Props) => {
  const cardsElementArray: JSX.Element[] = []
  for (let i = 0; i < cardAmount; i++) {
    cardsElementArray.push(<CardComponent key={uuid()} card={null} />)
  }
  return (
    <div className={styles.mainWrap}>
      <div className={styles.handWrap}>{cardsElementArray}</div>
    </div>
  )
}
