import React from 'react'
import { Card } from '../../../../../../model/card/card'
import { ChestPair } from '../../../../../../model/chest/chest-pair'
import { ChestComponent } from '../../chest-component/chestComponent'
import styles from './playerHand.module.scss'
import { CardComponent } from '../../card-component/cardComponent'
import { Ranks } from '../../../../../../model/card/ranks'

interface Props {
  cards: Card[]
  chestItems: ChestPair[]
}

// eslint-disable-next-line id-length
const cardCompareFunction = (a: Card, b: Card): number => {
  return Ranks.indexOf(a.rank) - Ranks.indexOf(b.rank)
}

export const PlayerHand = ({ cards, chestItems }: Props) => {
  const sortedCards = [...cards]
  sortedCards.sort(cardCompareFunction)
  return (
    <div className={styles.mainWrap}>
      <div>
        <ChestComponent chestItems={chestItems} />
      </div>
      <div className={styles.cardsWrap}>
        {sortedCards.length ? sortedCards.map(card => <CardComponent card={card} />) : null}
      </div>
    </div>
  )
}
