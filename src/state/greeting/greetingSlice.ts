import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface Greeting {
  message: string
}

interface GreetingState {
  value: Greeting[]
}

const initialState = { value: [] } as GreetingState

const fetchMessage = createAsyncThunk('greeting/fetchMessage', async (text: string) => {})

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.value.push(action.payload)
    },
    // fetchMessage: (state, action) => {
    //   return dispatch => {}
    // },
  },
})

export default greetingSlice.actions
