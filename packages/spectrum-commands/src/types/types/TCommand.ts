import {
  ChatInputApplicationCommandData,
  PermissionResolvable,
} from 'discord.js'
import { TRunFunction } from './TRunFunction'

export type TCommand = {
  permissions?: PermissionResolvable[]
  cooldown?: number
  run: TRunFunction
  developer: boolean
} & ChatInputApplicationCommandData
