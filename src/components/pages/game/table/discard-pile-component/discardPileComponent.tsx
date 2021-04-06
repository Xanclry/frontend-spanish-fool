import React from 'react'
import styles from './discardPileComponent.module.scss'
import { CardComponent } from '../card-component/cardComponent'

interface DiscardPileProps {
  cardsAmount: number
}

export const DiscardPileComponent = ({ cardsAmount }: DiscardPileProps) => {
  const cards = Array(cardsAmount).fill(<CardComponent card={null} />)
  return (
    <div className={styles.mainWrap}>
      <div className={styles.pile}>{cards}</div>
    </div>
  )
}
