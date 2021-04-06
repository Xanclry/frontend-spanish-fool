import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../state/rootReducer'
import { AppDispatch } from '../../../../state'
import { playerDeckActions } from '../../../../state/table/player-deck/playerDeckSlice'
import { Card } from '../../../../model/card/card'
import { getRandomCard } from '../../../../utils/card-utils'
import { ChestPair } from '../../../../model/chest/chest-pair'
import { opponentsDecksActions } from '../../../../state/table/opponents-deck/opponentsDecksSlice'
import { CardStackComponent } from './card-stack-component/cardStackComponent'
import { cardStackActions } from '../../../../state/table/card-stack/cardStackSlice'
import { DiscardPileComponent } from './discard-pile-component/discardPileComponent'
import { discardPileActions } from '../../../../state/table/discard-pile/discardPileSlice'
import { OpponentsGroup } from './opponent/opponentsGroup'
import { PlayerHand } from './player/hand/playerHand'

export const GameTable = () => {
  const playerHand = useSelector((state: RootState) => state.player.hand)
  const playerChestItems = useSelector((state: RootState) => state.player.chest)
  const cardStack = useSelector((state: RootState) => state.stack.cards)
  const discardPileCardsAmount = useSelector((state: RootState) => state.discardPile.cardAmount)

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

  const addRandomCardToStack = () => {
    dispatch(cardStackActions.addCardsToStack([getRandomCard()]))
  }

  const clearCardStack = () => {
    dispatch(cardStackActions.clearStack())
  }

  const addCardsToDiscardPile = (amount: number) => {
    dispatch(discardPileActions.addCards(amount))
  }

  const clearDiscardPile = () => {
    dispatch(discardPileActions.clearPile())
  }

  return (
    <>
      <h1>Game Table</h1>
      <button onClick={addRandomCardToHand}>Add random card</button>
      <button onClick={addRandomChestItem}>Add random chest item</button>
      <button onClick={deleteAllCards}>Delete all cards</button>
      <br />
      <button onClick={addOpponent}>Add opponent</button>
      <br />
      <button onClick={addRandomCardToStack}>Add card to stack</button>
      <button onClick={clearCardStack}>Clear card stack</button>
      <br />
      <button onClick={() => addCardsToDiscardPile(1)}>Add one card to discard pile</button>
      <button onClick={clearDiscardPile}>Clear discard pile</button>

      <PlayerHand cards={playerHand} chestItems={playerChestItems} />

      <OpponentsGroup opponents={opponents} />
      <div>
        <CardStackComponent cards={cardStack} />
      </div>
      <div>
        <DiscardPileComponent cardsAmount={discardPileCardsAmount} />
      </div>
    </>
  )
}
