import SockJS from 'sockjs-client'
import { debugMode, serverHost } from '../config'
import StompJs, { Subscription } from 'stompjs'

export class GameApi {
  socket = new SockJS(`${serverHost}/in`)
  client: StompJs.Client = StompJs.over(this.socket)
  subscription: Subscription | null = null

  constructor() {
    this.client.debug = debugMode ? console.log : () => {}
    this.connect()
  }

  isConnected = (): boolean => {
    return this.client.connected
  }

  connect = () => {
    this.client.connect(
      {},
      () => {},
      error => {
        console.log(error)
      }
    )
  }

  disconnect = () => {
    this.client.disconnect(() => {
      console.log('disconnected from websocket')
    })
  }

  subscribeOnSession = (sessionId: number, callback: (param: any) => any) => {
    this.subscription = this.client.subscribe(`/out/${sessionId}`, callback)
  }

  unsubscribeFromSession = async () => {
    this.subscription?.unsubscribe()
  }

  sendData = (sessionId: number, body: any) => {
    console.log()
    this.client.send(`/ws/in/${sessionId}`, {}, body)
  }
}
