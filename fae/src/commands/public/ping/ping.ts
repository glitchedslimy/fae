import { ISpectrumCommand } from '@spectrumcommands'
import { getLanguageFile } from 'fae/src/internal/lang/getLanguageFile'

const ping: ISpectrumCommand = {
  name: 'ping',
  description: 'Pings the bot',
  run: async ({ client, interaction, args }) => {
    const file = await getLanguageFile(interaction.guildId as string)
    await interaction.reply({ content: file.command.ping.response })
  },
}

module.exports = ping
