import { ChestPair } from '../../../../../model/chest/chest-pair'
import styles from './chestComponent.module.scss'
import { CardComponent } from '../card-component/cardComponent'

interface ChestComponentProps {
  chestItems: ChestPair[]
}

export const ChestComponent = ({ chestItems }: ChestComponentProps) => {
  return (
    <div className={styles.chestWrap}>
      {chestItems.length
        ? chestItems.map(item => (
            <div className={styles.chestItemWrap}>
              <span className={styles.topCard}>
                <CardComponent card={item.topCard} />
              </span>
              <span className={styles.bottomCard}>
                <CardComponent card={item.bottomCard} />
              </span>
            </div>
          ))
        : null}
    </div>
  )
}
