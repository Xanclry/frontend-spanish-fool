import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../../../model/card/card'
import { ChestPair } from '../../../model/chest/chest-pair'

interface PlayerDeckState {
  hand: Card[]
  chest: ChestPair[]
}

const initialState = { hand: [], chest: [] } as PlayerDeckState

export const playerDeckSlice = createSlice({
  name: 'playerDeck',
  initialState,
  reducers: {
    addCardToHand: (state, action: PayloadAction<Card>) => {
      state.hand.push(action.payload)
    },
    addCardToChest: (state, action: PayloadAction<ChestPair>) => {
      state.chest.push(action.payload)
    },
    removeAllCards: state => {
      state.hand = []
      state.chest = []
    },
  },
})

export default playerDeckSlice.reducer
export const playerDeckActions = playerDeckSlice.actions
