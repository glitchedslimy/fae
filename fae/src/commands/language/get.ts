import { ISpectrumSubCommand, getServerLanguage } from '@spectrumcommands'

const getLanguage: ISpectrumSubCommand = {
  subCommand: 'lang.get',
  run: async ({ client, interaction, args }) => {
    const lang = await getServerLanguage(interaction.guildId as string)
    await interaction.reply(`Language set to ${lang?.language}`)
  },
}

module.exports = getLanguage
