import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../../../model/card/card'

interface CardStackState {
  cards: Card[]
}

const initialState = { cards: [] } as CardStackState

export const cardStackSlice = createSlice({
  name: 'cardStack',
  initialState,
  reducers: {
    addCardsToStack: (state, action: PayloadAction<Card[]>) => {
      state.cards.push(...action.payload)
    },
    clearStack: state => {
      state.cards = []
    },
  },
})

export default cardStackSlice.reducer
export const cardStackActions = cardStackSlice.actions
