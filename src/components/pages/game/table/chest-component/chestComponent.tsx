import { ChestPair } from '../../../../../model/chest/chest-pair'
import styles from './chestComponent.module.scss'

interface ChestComponentProps {
  chestItems: ChestPair[]
}

export const ChestComponent = ({ chestItems }: ChestComponentProps) => {
  return (
    <div className={styles.chestWrap}>
      <h3>Chest</h3>
      {chestItems.length ? (
        chestItems.map(item => (
          <div className={styles.chestItemWrap}>
            {item.topCard ? (
              <p>{`Top card: ${item.topCard.rank.name} ${item.topCard.suit.logo}`}</p>
            ) : (
              <p>{`Top card: unknown`}</p>
            )}

            {item.bottomCard ? (
              <p>{`Bottom card: ${item.bottomCard.rank.name} ${item.bottomCard.suit.logo}`}</p>
            ) : (
              <p>{`Bottom card: unknown`}</p>
            )}
          </div>
        ))
      ) : (
        <p>No chest items</p>
      )}
    </div>
  )
}
