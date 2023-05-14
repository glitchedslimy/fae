import { ISpectrumCommand } from '@spectrumcommands'

const ping: ISpectrumCommand = {
  name: 'ping',
  description: 'Pings the bot',
  run: async ({ client, interaction, args }) => {
    await interaction.reply('Pong!')
  },
}

module.exports = ping
