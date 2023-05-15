import { ISpectrumCommand } from '@spectrumcommands'
import { EmbedBuilder } from 'discord.js'
import { getLanguageFile } from 'fae/src/internal/lang/getLanguageFile'

const ping: ISpectrumCommand = {
  name: 'ping',
  description: 'Pings the bot',
  run: async ({ client, interaction, args }) => {
    const file = await getLanguageFile(interaction.guildId as string)
    const embed = new EmbedBuilder()
      .setThumbnail(client.user?.displayAvatarURL() as string)
      .setColor(0x2b2d31)
      .setTitle(`🏓 ${file.command.ping.pong}`)
      .addFields([
        {
          name: `${file.command.ping.latency}`,
          value: `${Date.now() - (interaction.createdTimestamp as number)}ms`,
        },
        {
          name: `${file.command.ping.apiLatency}`,
          value: `${Math.round(client.ws.ping)}ms`,
        },
      ])
    await interaction.reply({ embeds: [embed], ephemeral: true })
  },
}

module.exports = ping
