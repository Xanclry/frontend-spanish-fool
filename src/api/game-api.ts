import SockJS from 'sockjs-client'
import { debugMode, serverHost } from '../config'
import StompJs, { Subscription } from 'stompjs'
import { Move } from '../dto/messaging/move/move'
import { Player } from '../model/player/player'

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

  subscribeOnSession = (
    sessionId: number,
    moveCallback: (moveResponse: any) => void,
    metaCallback: (metaMessage: any) => void
  ) => {
    this.subscription = this.client.subscribe(`/out/move/${sessionId}`, moveCallback)
    this.subscription = this.client.subscribe(`/out/meta/${sessionId}`, metaCallback)
  }

  unsubscribeFromSession = async (sessionId: number, player: Player) => {
    this.client.send(`/ws/in/meta/${sessionId}`, {}, JSON.stringify(player))
    this.subscription?.unsubscribe()
  }

  sendMove = (sessionId: number, body: Move) => {
    this.client.send(`/ws/in/move/${sessionId}`, {}, JSON.stringify(body))
  }
}
