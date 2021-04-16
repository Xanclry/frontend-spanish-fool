import { GameSessionStatus } from './game-session-status'
import { GameState } from '../game/state/game-state'

export interface GameSession {
  id: number
  name: string
  sessionStatus: GameSessionStatus
  playerCount: number
  gameState: GameState | null
}
