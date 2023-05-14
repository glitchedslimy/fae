import { ISpectrumSubCommand, loadCommands } from '@spectrumcommands'

const commands: ISpectrumSubCommand = {
  subCommand: 'reload.commands',
  run: async ({ client, interaction, args }) => {
    await loadCommands(client)
    await interaction.reply('Reloaded commands!')
  },
}

module.exports = commands
