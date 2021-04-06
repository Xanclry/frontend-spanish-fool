import { ChestPair } from '../../../../../model/chest/chest-pair'
import styles from './chestComponent.module.scss'
import { CardComponent } from '../card-component/cardComponent'

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
            <CardComponent card={item.topCard} />
            <CardComponent card={item.bottomCard} />
          </div>
        ))
      ) : (
        <p>No chest items</p>
      )}
    </div>
  )
}
