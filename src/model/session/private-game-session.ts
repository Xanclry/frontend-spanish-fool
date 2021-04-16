import { GameSession } from './game-session'
import { GameState } from '../game/state/game-state'

export interface PrivateGameSession extends GameSession {
  gameState: GameState
  gameOwnerUid: string | null
}
