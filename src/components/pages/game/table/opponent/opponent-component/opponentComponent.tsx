import React from 'react'
import { ChestComponent } from '../../chest-component/chestComponent'
import styles from './opponentComponent.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../../../state'
import { opponentsDecksActions } from '../../../../../../state/table/opponents-deck/opponentsDecksSlice'
import { getRandomCard } from '../../../../../../utils/card-utils'
import { OpponentHand } from './hand/opponentHand'
import { debugMode } from '../../../../../../config'
import { Opponent } from '../../../../../../model/game/opponent/opponent'

interface OpponentProps {
  opponent: Opponent
}

export const OpponentComponent = ({ opponent }: OpponentProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { playerUid } = opponent

  const deleteOpponent = () => {
    dispatch(opponentsDecksActions.deleteOpponent(playerUid))
  }

  const addCard = () => {
    dispatch(opponentsDecksActions.addCard(playerUid))
  }

  const addChestItem = () => {
    const payload = {
      playerUid,
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
          <p>Uid: {opponent.playerUid}</p>
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
