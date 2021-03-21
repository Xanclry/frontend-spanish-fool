import { combineReducers } from '@reduxjs/toolkit'
import { playerDeckSlice } from './table/player-deck/playerDeckSlice'

const rootReducer = combineReducers({
  player: playerDeckSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
