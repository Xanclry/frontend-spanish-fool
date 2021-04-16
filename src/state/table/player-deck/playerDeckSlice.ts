import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../../../model/card/card'
import { ChestPair } from '../../../model/game/chest/chest-pair'

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
    deleteTopCard: (state, action: PayloadAction<number>) => {
      state.chest[action.payload].topCard = null
    },
    deleteChest: (state, action: PayloadAction<number>) => {
      state.chest.splice(action.payload, 1)
    },
    removeAllCards: state => {
      state.hand = []
      state.chest = []
    },
    removeCard: (state, action: PayloadAction<Card>) => {
      const cardToRemove = action.payload
      const index = state.hand.findIndex(
        card => card.rank.name === cardToRemove.rank.name && card.suit.name === cardToRemove.suit.name
      )
      if (index !== -1) state.hand.splice(index, 1)
    },
  },
})

export default playerDeckSlice.reducer
export const playerDeckActions = playerDeckSlice.actions
