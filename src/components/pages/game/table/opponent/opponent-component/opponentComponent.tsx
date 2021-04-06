import React from 'react'
import { Opponent } from '../../../../../../model/opponent/opponent'
import { ChestComponent } from '../../chest-component/chestComponent'
import styles from './opponentComponent.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../../../state'
import { opponentsDecksActions } from '../../../../../../state/table/opponents-deck/opponentsDecksSlice'
import { getRandomCard } from '../../../../../../utils/card-utils'
import { OpponentHand } from './hand/opponentHand'
import { debugMode } from '../../../../../../config'

interface OpponentProps {
  opponent: Opponent
}

export const OpponentComponent = ({ opponent }: OpponentProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { playerId } = opponent

  const deleteOpponent = () => {
    dispatch(opponentsDecksActions.deleteOpponent(playerId))
  }

  const addCard = () => {
    dispatch(opponentsDecksActions.addCard(playerId))
  }

  const addChestItem = () => {
    const payload = {
      playerId,
      topCard: getRandomCard(),
    }
    dispatch(opponentsDecksActions.addChestItem(payload))
  }

  return (
    <div className={styles.opponentWrap}>
      {debugMode && (
        <div>
          <button onClick={deleteOpponent}>Delete the opponent</button>
          <button onClick={addCard}>Add a card</button>
          <button onClick={addChestItem}>Add a random chest item</button>
        </div>
      )}

      <div>
        <OpponentHand cardAmount={opponent.hand.handCardCount} />
      </div>
      <div>
        <ChestComponent chestItems={opponent.hand.chest} />
      </div>
    </div>
  )
}
