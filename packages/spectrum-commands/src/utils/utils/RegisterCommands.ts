import { SlimedClient } from '../../structures'
import { LoggerServices } from '../enums/LoggerServices'
import { Logger } from './InternalLogger'

export async function registerCommands(
  client: SlimedClient,
  slashCommands: any[]
) {
  Logger.info('📦 Registering commands...', {
    service: LoggerServices.Commands,
  })
  if (client.application) {
    try {
      await client.application.commands.set(slashCommands)
      Logger.info('📦 Registered commands!', {
        service: LoggerServices.Commands,
      })
    } catch (err) {
      Logger.error('❌ Error registering commands.', {
        service: LoggerServices.Commands,
      })
    }
  }
}
