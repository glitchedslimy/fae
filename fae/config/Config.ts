import convict from 'convict'
import { IConfig } from './IConfig'

const convictConfig: convict.Config<IConfig> = convict({
  token: {
    doc: 'The token of the bot',
    format: String,
    default: '',
    env: 'BOT_TOKEN',
  },
  guildId: {
    doc: 'The GuildId of the discord server for testing',
    format: String,
    default: '',
    env: 'GUILD_ID',
  },
})

convictConfig.validate({ allowed: 'strict' })
const config: IConfig = convictConfig.getProperties()

export default config
