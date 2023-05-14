import { SpectrumClient } from '../../structures'
import { LoggerServices } from '../enums/LoggerServices'
import { logger } from './InternalLogger'

export async function registerCommands(
  client: SpectrumClient,
  slashCommands: any[]
) {
  logger.info('📦 Registering commands...', {
    service: LoggerServices.Commands,
  })
  if (client.application) {
    try {
      await client.application.commands.set(slashCommands)
      logger.info('📦 Registered commands!', {
        service: LoggerServices.Commands,
      })
    } catch (err) {
      logger.error('❌ Error registering commands.', {
        service: LoggerServices.Commands,
      })
    }
  }
}
