import { combineReducers } from '@reduxjs/toolkit'
import { playerDeckSlice } from './table/player-deck/playerDeckSlice'
import { opponentsDecksSlice } from './table/opponents-deck/opponentsDecksSlice'
import { cardStackSlice } from './table/card-stack/cardStackSlice'
import { discardPileSlice } from './table/discard-pile/discardPileSlice'
import { deckSlice } from './table/deck/deckState'

const rootReducer = combineReducers({
  player: playerDeckSlice.reducer,
  opponents: opponentsDecksSlice.reducer,
  stack: cardStackSlice.reducer,
  discardPile: discardPileSlice.reducer,
  deck: deckSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
