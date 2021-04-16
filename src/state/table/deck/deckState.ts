import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DeckState {
  cardAmount: number
}

const initialState = { cardAmount: 0 } as DeckState

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    setCardAmount: (state, action: PayloadAction<number>) => {
      state.cardAmount = action.payload
    },
    decrementBy: (state, action: PayloadAction<number>) => {
      state.cardAmount = action.payload
      if (state.cardAmount < 0) state.cardAmount = 0
    },
  },
})

export default deckSlice.reducer
export const deckActions = deckSlice.actions
