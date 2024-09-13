import { GameDto } from '@/common/dto/game.dto'

export type CardDto = {
  bio: string
  backgroundColorHex: string
  textColorHex: string
  favoriteGame: string
  platform: string
  games: GameDto[]
}
