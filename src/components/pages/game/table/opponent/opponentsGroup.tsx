import React from 'react'
import { Opponent } from '../../../../../model/opponent/opponent'
import { OpponentComponent } from './opponent-component/opponentComponent'
import styles from './opponentsGroup.module.scss'
import { v4 } from 'uuid'

interface Props {
  opponents: Opponent[]
}

export const OpponentsGroup = ({ opponents }: Props) => {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.opponentsWrap}>
        {opponents.map(opp => (
          <OpponentComponent key={v4()} opponent={opp} />
        ))}
      </div>
    </div>
  )
}
