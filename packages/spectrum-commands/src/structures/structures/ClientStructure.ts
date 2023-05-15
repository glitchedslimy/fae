import { ActivityType, Client, ClientOptions, Collection } from 'discord.js'
import { TCommand } from '../../types'
import { IBotActivity } from '../../interfaces'
import { logger, loadCommands, loadEvents } from '../../utils'
import { startMigration } from '../../db/migration/StartMigration'
import { getServerLanguage, setServerLanguage } from '../../db'

export class SpectrumClient extends Client {
  readonly botToken: string
  readonly botName: string
  readonly commands: Collection<string, TCommand> = new Collection()
  readonly subCommands: Collection<string, any> = new Collection()
  readonly events = new Collection()
  readonly guildId?: string
  readonly dbEngine?: string
  readonly activity?: IBotActivity

  constructor(config: {
    token: string
    botOptions: ClientOptions
    guildId?: string
    dbEngine?: string
    activity?: IBotActivity
    botName: string
  }) {
    super(config.botOptions)
    this.botToken = config.token
    this.guildId = config.guildId
    this.dbEngine = config.dbEngine
    this.activity = config.activity
    this.botName = config.botName
  }

  async start() {
    await startMigration()
    this.on('ready', async () => {
      logger.info(`🤖 Starting ${this.botName}...`, {
        service: 'Client Structure',
      })
      this.user?.setActivity({
        name: this.activity?.name ?? `${this.botName} - /help`,
        type: this.activity?.type ?? ActivityType.Playing,
      })
      await Promise.all([this.loadCommands(), this.loadEvents()])
      logger.info(`🎉 ${this.botName} is up and ready!`, {
        service: 'Client Structure',
      })
    })
    await this.login(this.botToken)

    // Set default language for all guilds if doesn't exists
    this.guilds.cache.map(async (guild) => {
      const languageExists = await getServerLanguage(guild.id)
      if (languageExists) return
      await setServerLanguage(guild.id, 'en', guild.name)
    })
  }

  private async loadCommands() {
    await loadCommands(this)
  }

  private async loadEvents() {
    await loadEvents(this)
  }
}
