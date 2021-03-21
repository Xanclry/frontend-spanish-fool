import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../state/rootReducer'
import { AppDispatch } from '../../../../state'
import { playerDeckActions } from '../../../../state/table/player-deck/playerDeckSlice'
import { Card } from '../../../../model/card/card'
import { getRandomCard } from '../../../../utils/card-utils'
import { ChestPair } from '../../../../model/chest/chest-pair'

export const GameTable = () => {
  const playerHand = useSelector((state: RootState) => state.player.hand)
  const playerChestItems = useSelector((state: RootState) => state.player.chest)
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

  return (
    <>
      <h1>Game Table</h1>
      <button onClick={addRandomCardToHand}>Add random card</button>
      <button onClick={addRandomChestItem}>Add random chest item</button>
      <button onClick={deleteAllCards}>Delete all cards</button>
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
          <h3>Chest</h3>
          {playerChestItems.length ? (
            playerChestItems.map(chestItem => (
              <div>
                <p>{`Top card: ${chestItem.topCard.rank.name} ${chestItem.topCard.suit.logo}`}</p>
                {chestItem.bottomCard ? (
                  <p>{`Bottom card: ${chestItem.bottomCard.rank.name} ${chestItem.bottomCard.suit.logo}`}</p>
                ) : (
                  <p>{`Bottom card: unknown`}</p>
                )}
              </div>
            ))
          ) : (
            <p>you have no chest items</p>
          )}
        </div>
      </div>
    </>
  )
}
