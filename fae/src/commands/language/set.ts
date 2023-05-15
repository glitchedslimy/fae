import { ISpectrumSubCommand } from '@spectrumcommands'
import { setServerLanguage } from '@spectrumcommands'
import { EmbedBuilder } from 'discord.js'
import { getLanguageFile } from '../../internal/lang/getLanguageFile'

const setLanguage: ISpectrumSubCommand = {
  subCommand: 'lang.set',
  run: async ({ client, interaction, args }) => {
    const file = await getLanguageFile(interaction.guildId as string)
    const language = args?.getString('language')
    await setServerLanguage(interaction.guildId as string, language as string)
    const embed = new EmbedBuilder()
      .setThumbnail(client.user?.displayAvatarURL() as string)
      .setTitle('Language')
      .addFields({
        name: file.command.lang.set.text,
        value: language!,
      } as const)
      .setColor(0x2b2d31)

    await interaction.reply({ embeds: [embed], ephemeral: true })
  },
}

module.exports = setLanguage
