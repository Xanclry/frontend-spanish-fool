import styles from './chestComponent.module.scss'
import { CardComponent } from '../card-component/cardComponent'
import { v4 } from 'uuid'
import { ChestPair } from '../../../../../model/game/chest/chest-pair'

interface ChestComponentProps {
  chestItems: ChestPair[]
}

export const ChestComponent = ({ chestItems }: ChestComponentProps) => {
  return (
    <div className={styles.chestWrap}>
      {chestItems.length
        ? chestItems.map(item => (
            <div key={v4()} className={styles.chestItemWrap}>
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
