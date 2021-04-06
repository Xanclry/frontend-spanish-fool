import React from 'react'
import { Card } from '../../../../../model/card/card'
import styles from './cardStackComponent.module.scss'

interface CardStackProps {
  cards: Card[]
}

export const CardStackComponent = ({ cards }: CardStackProps) => {
  return (
    <div className={styles.mainWrap}>
      <h2>Card stack</h2>
      {cards.map(card => (
        <p>
          {card.rank.name} {card.suit.logo}
        </p>
      ))}
    </div>
  )
}
