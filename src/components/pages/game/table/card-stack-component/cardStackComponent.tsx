import React from 'react'
import { Card } from '../../../../../model/card/card'
import styles from './cardStackComponent.module.scss'
import { CardComponent } from '../card-component/cardComponent'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { getCardId } from '../../../../../utils/card-utils'

interface CardStackProps {
  cards: Card[]
}

export const CardStackComponent = ({ cards }: CardStackProps) => {
  const cardComponents = cards.map((card, index) => (
    <Draggable key={getCardId(card)} draggableId={getCardId(card)} index={index}>
      {provided => (
        <CardComponent
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
          card={card}
        />
      )}
    </Draggable>
  ))
  return (
    <div className={styles.mainWrap}>
      <Droppable droppableId="card-stack">
        {provided => (
          <div className={styles.cardPile} ref={provided.innerRef} {...provided.droppableProps}>
            {cardComponents}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
