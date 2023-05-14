import { SpectrumClient } from '@spectrumcommands'
import config from '../config/Config'
import { ActivityType, Partials } from 'discord.js'

const client = new SpectrumClient({
  token: config.token,
  guildId: config.guildId,
  botName: 'Fae',
  botOptions: {
    partials: [
      Partials.Channel,
      Partials.GuildMember,
      Partials.GuildScheduledEvent,
      Partials.Message,
      Partials.Reaction,
      Partials.User,
      Partials.ThreadMember,
    ],
    intents: [3276799],
  },
  activity: {
    name: 'with Spectrum',
    type: ActivityType.Watching,
  },
})

client.start()
