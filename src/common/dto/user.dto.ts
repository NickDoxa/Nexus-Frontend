import { CardDto } from '@/common/dto/card.dto'

export type UserDto = {
  authId: string
  username?: string
  email?: string
  picture?: string
  card: CardDto
}
