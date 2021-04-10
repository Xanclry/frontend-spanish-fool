import React from 'react'
import { Card } from '../../../../../../model/card/card'
import { ChestPair } from '../../../../../../model/chest/chest-pair'
import { ChestComponent } from '../../chest-component/chestComponent'
import styles from './playerHand.module.scss'
import { CardComponent } from '../../card-component/cardComponent'
import { Ranks } from '../../../../../../model/card/ranks'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { getCardId } from '../../../../../../utils/card-utils'

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
        <Droppable droppableId="player-hand">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {sortedCards.length
                ? sortedCards.map((card, index) => (
                    <Draggable key={getCardId(card)} draggableId={getCardId(card)} index={index}>
                      {provided => (
                        <span {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <CardComponent key={getCardId(card)} card={card} />
                        </span>
                      )}
                    </Draggable>
                  ))
                : null}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}
