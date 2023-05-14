import {
  CommandInteraction,
  CommandInteractionOptionResolver,
} from 'discord.js'
import { SpectrumClient } from '../../structures'

export interface ISpectrumSubCommand {
  subCommand: string
  run: ({
    client,
    interaction,
    args,
  }: {
    client: SpectrumClient
    interaction: CommandInteraction
    args?: CommandInteractionOptionResolver
  }) => Promise<void>
}
