import { ISpectrumCommand } from '@spectrumcommands'
import { ApplicationCommandOptionType, PermissionFlagsBits } from 'discord.js'

const reload: ISpectrumCommand = {
  name: 'reload',
  description: 'Reloads a command',
  defaultMemberPermissions: [PermissionFlagsBits.Administrator],
  options: [
    {
      name: 'commands',
      description: 'The command(s) to reload',
      type: ApplicationCommandOptionType.Subcommand,
    },
  ],
}

module.exports = reload
