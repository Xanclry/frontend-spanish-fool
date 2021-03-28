import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DiscardPileState {
  cardAmount: number
}

const initialState = { cardAmount: 0 } as DiscardPileState

export const discardPileSlice = createSlice({
  name: 'discardPile',
  initialState,
  reducers: {
    addOneCard: state => {
      state.cardAmount += 1
    },
    addCards: (state, action: PayloadAction<number>) => {
      state.cardAmount += action.payload
    },
    clearPile: state => {
      state.cardAmount = 0
    },
  },
})

export default discardPileSlice.reducer
export const discardPileActions = discardPileSlice.actions
