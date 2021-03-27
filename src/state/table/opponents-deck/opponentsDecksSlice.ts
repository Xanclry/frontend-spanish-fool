import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Opponent } from '../../../model/opponent/opponent'
import { Card } from '../../../model/card/card'
import { ChestPair } from '../../../model/chest/chest-pair'

interface OpponentsDecksState {
  opponentsCount: number
  opponents: Opponent[]
}

export interface AddChestPayload {
  playerId: number
  topCard: Card
}

const initialState = { opponentsCount: 0, opponents: [] } as OpponentsDecksState

export const opponentsDecksSlice = createSlice({
  name: 'opponentsDecks',
  initialState,
  reducers: {
    addOpponent: state => {
      state.opponentsCount += 1
      const opponentHand: Opponent = {
        // todo get player id
        playerId: Date.now(),
        hand: {
          handCardCount: 0,
          chest: [],
        },
      }
      state.opponents.push(opponentHand)
    },
    deleteOpponent: (state, action: PayloadAction<number>) => {
      if (state.opponents.find(opp => opp.playerId === action.payload)) {
        state.opponentsCount -= 1
        state.opponents = state.opponents.filter(opp => opp.playerId !== action.payload)
      }
    },
    deleteAllOpponents: state => {
      state.opponentsCount = 0
      state.opponents = []
    },
    addCard: (state, action: PayloadAction<number>) => {
      const playerId = action.payload
      const oldOpponentStateIndex = state.opponents.findIndex(opp => opp.playerId === playerId)
      if (oldOpponentStateIndex !== -1) {
        state.opponents[oldOpponentStateIndex].hand.handCardCount += 1
      }
    },
    addChestItem: (state, action: PayloadAction<AddChestPayload>) => {
      const { playerId, topCard } = action.payload
      const oldOpponentStateIndex = state.opponents.findIndex(opp => opp.playerId === playerId)
      if (oldOpponentStateIndex !== -1) {
        const newChestItem: ChestPair = {
          topCard,
          bottomCard: null,
        }
        state.opponents[oldOpponentStateIndex].hand.chest.push(newChestItem)
      }
    },
  },
})

export default opponentsDecksSlice.reducer
export const opponentsDecksActions = opponentsDecksSlice.actions
