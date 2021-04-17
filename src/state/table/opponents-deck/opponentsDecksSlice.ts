import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../../../model/card/card'
import { Opponent } from '../../../model/game/opponent/opponent'
import { ChestPair } from '../../../model/game/chest/chest-pair'

interface OpponentsDecksState {
  opponentsCount: number
  opponents: Opponent[]
}

export interface AddChestPayload {
  playerUid: string
  topCard: Card
}

const initialState = { opponentsCount: 0, opponents: [] } as OpponentsDecksState

export const opponentsDecksSlice = createSlice({
  name: 'opponentsDecks',
  initialState,
  reducers: {
    addOpponent: (state, action: PayloadAction<string>) => {
      state.opponentsCount += 1
      const index = state.opponents.findIndex(opponent => opponent.playerUid === action.payload)
      if (index !== -1) return
      const opponentHand: Opponent = {
        playerUid: action.payload,
        hand: {
          handCardCount: 0,
          chest: [],
        },
      }
      state.opponents.push(opponentHand)
    },
    deleteOpponent: (state, action: PayloadAction<string>) => {
      if (state.opponents.find(opp => opp.playerUid === action.payload)) {
        state.opponentsCount -= 1
        state.opponents = state.opponents.filter(opp => opp.playerUid !== action.payload)
      }
    },
    deleteAllOpponents: state => {
      state.opponentsCount = 0
      state.opponents = []
    },
    addCard: (state, action: PayloadAction<string>) => {
      const playerId = action.payload
      const oldOpponentStateIndex = state.opponents.findIndex(opp => opp.playerUid === playerId)
      if (oldOpponentStateIndex !== -1) {
        state.opponents[oldOpponentStateIndex].hand.handCardCount += 1
      }
    },
    addChestItem: (state, action: PayloadAction<AddChestPayload>) => {
      const { playerUid, topCard } = action.payload
      const oldOpponentStateIndex = state.opponents.findIndex(opp => opp.playerUid === playerUid)
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
