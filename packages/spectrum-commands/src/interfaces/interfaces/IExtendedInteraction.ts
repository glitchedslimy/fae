import { CommandInteraction, GuildMember } from 'discord.js'

export interface IExtendedInteraction extends CommandInteraction {
  member: GuildMember
}
