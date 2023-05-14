import {
  ApplicationCommandOption,
  CommandInteraction,
  CommandInteractionOptionResolver,
  PermissionResolvable,
} from 'discord.js'
import { SpectrumClient } from '../../structures'

export interface ISpectrumCommand {
  name: string
  description: string
  permissions?: PermissionResolvable[]
  defaultMemberPermissions?: PermissionResolvable[]
  options?: ApplicationCommandOption[]
  cooldown?: number
  developer?: boolean
  run?: ({
    client,
    interaction,
    args,
  }: {
    client: SpectrumClient
    interaction: CommandInteraction
    args?: CommandInteractionOptionResolver
  }) => Promise<void>
}
