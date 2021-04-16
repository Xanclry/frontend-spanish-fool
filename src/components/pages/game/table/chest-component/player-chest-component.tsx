import styles from './chestComponent.module.scss'
import { CardComponent } from '../card-component/cardComponent'
import { Draggable, DraggableProvided, Droppable } from 'react-beautiful-dnd'
import { getCardId } from '../../../../../utils/card-utils'
import React from 'react'
import { v4 } from 'uuid'
import { ChestPair } from '../../../../../model/game/chest/chest-pair'

interface ChestComponentProps {
  chestItems: ChestPair[]
}

export const PlayerChestComponent = ({ chestItems }: ChestComponentProps) => {
  const bottomCardComponent = (item: ChestPair, provided?: DraggableProvided) => {
    return provided ? (
      <span
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={styles.bottomCard}
      >
        <CardComponent card={item?.bottomCard} />
      </span>
    ) : (
      <span className={styles.bottomCard}>
        <CardComponent card={item?.bottomCard} />
      </span>
    )
  }

  const topCardComponent = (item: ChestPair, provided: DraggableProvided) => (
    <span {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={styles.topCard}>
      <CardComponent card={item.topCard} />
    </span>
  )

  return (
    <div className={styles.chestWrap}>
      {chestItems.length
        ? chestItems.map((item, index) => (
            <Droppable key={v4()} isDropDisabled={true} droppableId={index.toString(10)}>
              {provided => (
                <>
                  <div
                    className={styles.chestItemWrap}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{ maxWidth: '100px' }}
                  >
                    {item.topCard && (
                      <Draggable draggableId={getCardId(item.topCard)} index={2}>
                        {provided => topCardComponent(item, provided)}
                      </Draggable>
                    )}
                    {item.bottomCard ? (
                      <Draggable
                        isDragDisabled={item.topCard !== null}
                        draggableId={getCardId(item.bottomCard)}
                        index={1}
                      >
                        {provided => bottomCardComponent(item, provided)}
                      </Draggable>
                    ) : (
                      bottomCardComponent(item)
                    )}
                  </div>
                  {/*{provided.placeholder}*/}
                </>
              )}
            </Droppable>
          ))
        : null}
    </div>
  )
}
