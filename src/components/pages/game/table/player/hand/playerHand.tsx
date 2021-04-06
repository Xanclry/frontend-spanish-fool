import React from 'react'
import { Card } from '../../../../../../model/card/card'
import { ChestPair } from '../../../../../../model/chest/chest-pair'
import { ChestComponent } from '../../chest-component/chestComponent'
import styles from './playerHand.module.scss'
import { CardComponent } from '../../card-component/cardComponent'

interface Props {
  cards: Card[]
  chestItems: ChestPair[]
}

export const PlayerHand = ({ cards, chestItems }: Props) => {
  return (
    <div className={styles.mainWrap}>
      <div>
        <ChestComponent chestItems={chestItems} />
      </div>
      <div>
        <h3>Hand</h3>
        {cards.length ? cards.map(card => <CardComponent card={card} />) : <p>you have no cards</p>}
      </div>
    </div>
  )
}
