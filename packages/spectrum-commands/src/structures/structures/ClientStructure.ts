import { ActivityType, Client, ClientOptions, Collection } from 'discord.js'
import { TCommand } from '../../types'
import { IBotActivity } from '../../interfaces'
import { Logger, loadCommands, loadEvents } from '../../utils'

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
    this.on('ready', async () => {
      Logger.info(`🤖 Starting ${this.botName}...`, {
        service: 'Client Structure',
      })
      this.user?.setActivity({
        name: this.activity?.name ?? `${this.botName} - /help`,
        type: this.activity?.type ?? ActivityType.Playing,
      })
      await this.loadCommands()
      Logger.info(`🤓☝️ ${this.botName} is up and ready!`, {
        service: 'Client Structure',
      })
    })
    await this.loadEvents()
    await this.login(this.botToken)
  }

  private async loadCommands() {
    await loadCommands(this)
  }

  private async loadEvents() {
    await loadEvents(this)
  }
}
