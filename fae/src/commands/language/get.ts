import { ISpectrumSubCommand, getServerLanguage } from '@spectrumcommands'
import { getLanguageFile } from '../../internal/lang/getLanguageFile'
import { EmbedBuilder } from 'discord.js'

const getLanguage: ISpectrumSubCommand = {
  subCommand: 'lang.get',
  run: async ({ client, interaction }) => {
    const lang = await getServerLanguage(interaction.guildId as string)
    const file = await getLanguageFile(interaction.guildId as string)
    const embed = new EmbedBuilder()
      .setThumbnail(client.user?.displayAvatarURL() as string)
      .setTitle('Language')
      .addFields({
        name: file.command.lang.get.text,
        value: lang?.language || 'Not set',
      } as const)
      .setColor(0x2b2d31)
    await interaction.reply({ embeds: [embed], ephemeral: true })
  },
}

module.exports = getLanguage
