import { ApplicationCommandData } from 'discord.js'
import { SpectrumClient } from '../../structures'
import { LoggerServices } from '../enums/LoggerServices'
import { logger } from './InternalLogger'

export async function registerCommands(
  client: SpectrumClient,
  slashCommands: ApplicationCommandData[]
) {
  console.time('Command registration')
  logger.info('📦 Registering commands...', {
    service: LoggerServices.Commands,
  })
  const { application } = client
  if (!application) {
    logger.error('🚨 Application not found', {
      service: LoggerServices.Commands,
      error: 'Application context not found in register commands.',
    })
    return
  }
  try {
    await application.commands.set(slashCommands)
    logger.info('📦 Registered commands!', {
      service: LoggerServices.Commands,
    })
  } catch (err) {
    console.error('Error registering commands:', err)
    logger.error('❌ Error registering commands.', {
      service: LoggerServices.Commands,
      error: err,
    })
    throw err
  }
  console.timeEnd('Command registration')
}
