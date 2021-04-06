import React from 'react'
import styles from './discardPileComponent.module.scss'

interface DiscardPileProps {
  cardsAmount: number
}

export const DiscardPileComponent = ({ cardsAmount }: DiscardPileProps) => {
  return (
    <div className={styles.mainWrap}>
      <h2>Discard pile</h2>
      <p>{cardsAmount} in discard pile</p>
    </div>
  )
}
