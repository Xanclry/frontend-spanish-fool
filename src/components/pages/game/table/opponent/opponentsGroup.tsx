import React from 'react'
import { Opponent } from '../../../../../model/opponent/opponent'
import { OpponentComponent } from './opponent-component/opponentComponent'
import styles from './opponentsGroup.module.scss'

interface Props {
  opponents: Opponent[]
}

export const OpponentsGroup = ({ opponents }: Props) => {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.opponentsWrap}>
        {opponents.map(opp => (
          <OpponentComponent opponent={opp} />
        ))}
      </div>
    </div>
  )
}
