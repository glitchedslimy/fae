import { CommandInteractionOptionResolver } from 'discord.js'
import { IExtendedInteraction } from './IExtendedInteraction'
import { ISpectrumClient } from './ISpectrumClient'

export interface IRunOptions {
  client: ISpectrumClient
  interaction: IExtendedInteraction
  args: CommandInteractionOptionResolver
}
