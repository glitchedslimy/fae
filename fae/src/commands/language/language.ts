import { ISpectrumCommand } from '@spectrumcommands'
import { ApplicationCommandOptionType } from 'discord.js'

const lang: ISpectrumCommand = {
  name: 'lang',
  defaultMemberPermissions: ['Administrator'],
  description: 'Change the language of the bot',
  options: [
    {
      name: 'get',
      description: 'Get the current language of the bot',
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: 'set',
      description: 'Set the language of the bot',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'language',
          description: 'The language to set',
          required: true,
          type: ApplicationCommandOptionType.String,
          choices: [
            {
              name: 'English (Inglés)',
              value: 'en',
            },
            {
              name: 'Spanish (Español)',
              value: 'es',
            },
          ],
        },
      ],
    },
  ],
}

module.exports = lang
