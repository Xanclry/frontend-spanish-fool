import React from 'react'
import { Card } from '../../../../../model/card/card'
import styles from './cardStackComponent.module.scss'
import { CardComponent } from '../card-component/cardComponent'

interface CardStackProps {
  cards: Card[]
}

export const CardStackComponent = ({ cards }: CardStackProps) => {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.cardPile}>
        {cards.map(card => (
          <CardComponent card={card} />
        ))}
      </div>
    </div>
  )
}
