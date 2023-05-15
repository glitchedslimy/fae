import { ISpectrumSubCommand } from '@spectrumcommands'
import { setServerLanguage } from '@spectrumcommands'

const setLanguage: ISpectrumSubCommand = {
  subCommand: 'lang.set',
  run: async ({ client, interaction, args }) => {
    const language = args?.getString('language')
    await setServerLanguage(interaction.guildId as string, language as string)
    await interaction.reply(`Language set to ${language}`)
  },
}

module.exports = setLanguage
