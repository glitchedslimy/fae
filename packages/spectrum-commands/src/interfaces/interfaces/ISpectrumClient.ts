import { Collection } from 'discord.js'
import { TCommand } from '../../types'
import { IBotActivity } from './IBotActivity'

export interface ISpectrumClient {
  botToken: string
  commands: Collection<string, TCommand>
  subCommands: Collection<string, any>
  events: Collection<string, any>
  guildId?: string
  dbEngine?: string
  activity?: IBotActivity
}
