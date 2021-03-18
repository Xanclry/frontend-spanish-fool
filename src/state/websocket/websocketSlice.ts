import { createSlice } from '@reduxjs/toolkit'
import SockJS from 'sockjs-client'

interface WebsocketState {
  value: WebSocket
}

const initialState = { value: new SockJS('http://localhost:8080/websocket') } as WebsocketState

export const websocketSlice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {},
})
