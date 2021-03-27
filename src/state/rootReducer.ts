import { combineReducers } from '@reduxjs/toolkit'
import { playerDeckSlice } from './table/player-deck/playerDeckSlice'
import { opponentsDecksSlice } from './table/opponents-deck/opponentsDecksSlice'

const rootReducer = combineReducers({
  player: playerDeckSlice.reducer,
  opponents: opponentsDecksSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
