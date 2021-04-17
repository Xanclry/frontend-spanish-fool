import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../state/rootReducer'
import { AppDispatch } from '../../../../state'
import { playerDeckActions } from '../../../../state/table/player-deck/playerDeckSlice'
import { Card } from '../../../../model/card/card'
import { getRandomCard } from '../../../../utils/card-utils'
import { opponentsDecksActions } from '../../../../state/table/opponents-deck/opponentsDecksSlice'
import { CardStackComponent } from './card-stack-component/cardStackComponent'
import { cardStackActions } from '../../../../state/table/card-stack/cardStackSlice'
import { DiscardPileComponent } from './discard-pile-component/discardPileComponent'
import { discardPileActions } from '../../../../state/table/discard-pile/discardPileSlice'
import { OpponentsGroup } from './opponent/opponentsGroup'
import { PlayerHand } from './player/hand/playerHand'
import styles from './game-table.module.scss'
import { debugMode } from '../../../../config'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { ChestPair } from '../../../../model/game/chest/chest-pair'
import { GameSession } from '../../../../model/session/game-session'
import { useEffect } from 'react'
import { SessionApi } from '../../../../api/session-api'
import { useAuth } from '../../../../context/auth-context'
import { Player } from '../../../../model/player/player'
import { GameApi } from '../../../../api/game-api'
import { MoveController } from '../../../../controller/move-controller'
import { MoveResponseController } from '../../../../controller/move-response-controller'
import { MetaMessageController } from '../../../../controller/meta-message-controller'

const sessionApi = new SessionApi()
const gameApi = new GameApi()
const moveController = new MoveController(gameApi)
const moveResponseController = new MoveResponseController()
const metaMessageController = new MetaMessageController()

export const GameTable = (props: any) => {
  const currentGameSession: GameSession = props.location.state
  const playerHand = useSelector((state: RootState) => state.player.hand)
  const playerChestItems = useSelector((state: RootState) => state.player.chest)
  const cardStack = useSelector((state: RootState) => state.stack.cards)
  const discardPileCardsAmount = useSelector((state: RootState) => state.discardPile.cardAmount)
  const { currentUser, getPlayer } = useAuth()

  const opponents = useSelector((state: RootState) => state.opponents.opponents)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const player: Player = {
      // @ts-ignore
      uid: currentUser.uid,
      // @ts-ignore
      email: currentUser.email,
    }
    if (gameApi.isConnected()) {
      sessionApi
        .joinGameSession(player, currentGameSession.id)
        .then(result => {
          dispatch(opponentsDecksActions.deleteAllOpponents())
          result.gameState.playerStates.forEach(playerState => {
            if (playerState.player.uid === currentUser?.uid) return
            dispatch(opponentsDecksActions.addOpponent(playerState.player.uid))
          })
          console.log('gameSession', result)
        })
        .then(() => {
          gameApi.subscribeOnSession(
            currentGameSession.id,
            data => moveResponseController.processMoveResponse(JSON.parse(data.body), getPlayer()),
            meta => metaMessageController.processMetaMessage(JSON.parse(meta.body), getPlayer(), dispatch)
          )
        })
    }

    return () => {
      const player = getPlayer()
      if (!player) return
      dispatch(opponentsDecksActions.deleteAllOpponents())
      // gameApi.unsubscribeFromSession(currentGameSession.id, player).then(gameApi.disconnect)
      gameApi.unsubscribeFromSession(currentGameSession.id, player).catch(error => {
        console.error(error)
      })
    }
  }, [])

  const addRandomCardToHand = () => {
    const newCard: Card = getRandomCard()
    dispatch(playerDeckActions.addCardToHand(newCard))
  }

  const addRandomChestItem = () => {
    const newChestPair: ChestPair = { topCard: getRandomCard(), bottomCard: null }
    dispatch(playerDeckActions.addCardToChest(newChestPair))
  }
  const addRandomEmptyChestItem = () => {
    const newChestPair: ChestPair = { topCard: null, bottomCard: getRandomCard() }
    dispatch(playerDeckActions.addCardToChest(newChestPair))
  }

  const deleteAllCards = () => {
    dispatch(playerDeckActions.removeAllCards())
  }

  const addOpponent = () => {
    dispatch(opponentsDecksActions.addOpponent(Date.now().toString()))
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

  const onDragEnd = (result: DropResult) => {
    // todo: implement
    const droppedCard = JSON.parse(result.draggableId)
    const { source, destination } = result

    moveController.processMove(dispatch, source, destination, droppedCard, currentGameSession.id, getPlayer())
  }

  return (
    <>
      {debugMode && (
        <div className={styles.debugPanel}>
          <button onClick={addRandomCardToHand}>Add random card</button>
          <button onClick={addRandomChestItem}>Add random chest item</button>
          <br />
          <button onClick={addRandomEmptyChestItem}>Add empty chest item</button>
          <button onClick={deleteAllCards}>Delete all cards</button>
          <br />
          <button onClick={addOpponent}>Add opponent</button>
          <br />
          <button onClick={addRandomCardToStack}>Add card to stack</button>
          <button onClick={clearCardStack}>Clear card stack</button>
          <br />
          <button onClick={() => addCardsToDiscardPile(1)}>Add one card to discard pile</button>
          <button onClick={clearDiscardPile}>Clear discard pile</button>

          <br />
          {/*<button onClick={gameApi.unsubscribeFromSession}>Leave</button>*/}
          {/*<br />*/}
        </div>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <PlayerHand cards={playerHand} chestItems={playerChestItems} />
        <OpponentsGroup opponents={opponents} />
        <CardStackComponent cards={cardStack} />
        <DiscardPileComponent cardsAmount={discardPileCardsAmount} />
      </DragDropContext>
    </>
  )
}
