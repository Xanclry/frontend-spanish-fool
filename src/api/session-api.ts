import { serverHost } from '../config'
import axios from 'axios'
import { GameSession } from '../model/session/game-session'
import { PrivateGameSession } from '../model/session/private-game-session'
import { Player } from '../model/player/player'
import { NewSessionDto } from '../dto/NewSessionDto'

export class SessionApi {
  sourceURL

  constructor() {
    this.sourceURL = `${serverHost}/api/session`
  }

  createNewGameSession = (newSessionDto: NewSessionDto) => {
    return axios.post(this.sourceURL, newSessionDto).then(result => {
      return result.data
    })
  }

  getOpenSessions = (): Promise<GameSession[]> => {
    return axios.get(`${this.sourceURL}/open`).then(result => {
      return result.data
    })
  }

  joinGameSession = (player: Player, sessionId: number) => {
    return axios.post(`${this.sourceURL}/${sessionId}`, player).then(result => {
      return result.data
    })
  }

  subscribeAndGetPrivateGameSession = (uid: string): Promise<PrivateGameSession> => {
    return axios.post(`${this.sourceURL}/subscribe`, uid).then(result => {
      return result.data
    })
  }
}
