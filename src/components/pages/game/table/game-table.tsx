import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../state/rootReducer'
import { AppDispatch } from '../../../../state'
import { playerDeckActions } from '../../../../state/table/player-deck/playerDeckSlice'
import { Card } from '../../../../model/card/card'
import { getRandomCard } from '../../../../utils/card-utils'
import { ChestPair } from '../../../../model/chest/chest-pair'
import { ChestComponent } from './chest-component/chestComponent'
import { opponentsDecksActions } from '../../../../state/table/opponents-deck/opponentsDecksSlice'
import { OpponentComponent } from './opponent/opponentComponent'

export const GameTable = () => {
  const playerHand = useSelector((state: RootState) => state.player.hand)
  const playerChestItems = useSelector((state: RootState) => state.player.chest)

  const opponents = useSelector((state: RootState) => state.opponents.opponents)

  const dispatch = useDispatch<AppDispatch>()

  const addRandomCardToHand = () => {
    const newCard: Card = getRandomCard()
    dispatch(playerDeckActions.addCardToHand(newCard))
  }

  const addRandomChestItem = () => {
    const newChestPair: ChestPair = { topCard: getRandomCard(), bottomCard: getRandomCard() }
    dispatch(playerDeckActions.addCardToChest(newChestPair))
  }

  const deleteAllCards = () => {
    dispatch(playerDeckActions.removeAllCards())
  }

  const addOpponent = () => {
    dispatch(opponentsDecksActions.addOpponent())
  }

  return (
    <>
      <h1>Game Table</h1>
      <button onClick={addRandomCardToHand}>Add random card</button>
      <button onClick={addRandomChestItem}>Add random chest item</button>
      <button onClick={deleteAllCards}>Delete all cards</button>
      <br />
      <button onClick={addOpponent}>Add opponent</button>

      <div>
        <div>
          <h3>Hand</h3>
          {playerHand.length ? (
            playerHand.map(card => (
              <div>
                <p>{`${card.rank.name} ${card.suit.logo}`}</p>
              </div>
            ))
          ) : (
            <p>you have no cards</p>
          )}
        </div>
        <div>
          <ChestComponent chestItems={playerChestItems} />
        </div>
      </div>

      <div>
        <h3>Opponents</h3>
        {opponents.map(opp => (
          // <div>
          //   <p>`${opp.hand.handCardCount} in the hand`</p>
          //   <ChestComponent chestItems={opp.hand.chest} />
          // </div>
          <OpponentComponent opponent={opp} />
        ))}
      </div>
    </>
  )
}
