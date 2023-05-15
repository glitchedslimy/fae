import { IEvent } from '../../interfaces/interfaces/IEvent'
import { SpectrumClient } from '../../structures'
import { registerCommands } from './RegisterCommands'
import { registerEvent } from './RegisterEvents'
import { loadAllFiles } from './LoadFiles'
import { logger } from './InternalLogger'
import { LoggerServices } from '../enums/LoggerServices'

export async function loadEvents(client: SpectrumClient) {
  await client.events.clear()
  logger.info('🎭 Loading events...', { service: LoggerServices.Events })
  const eventFiles = await loadAllFiles('events')

  await Promise.all(
    eventFiles.map(async (file) => {
      const event: IEvent = require(file)

      const run = (...args: any) => event.run(...args, client)

      client.events.set(event.event, event.run)

      await registerEvent(client, event, run)
    })
  )

  logger.info(`🎭 Loaded ${eventFiles.length} events!`, {
    service: LoggerServices.Events,
  })
}

export async function loadCommands(client: SpectrumClient) {
  logger.info('📦 Loading commands...', { service: LoggerServices.Commands })
  await client.commands.clear()
  await client.subCommands.clear()

  const slashCommands: any[] = []
  const commandFiles = await loadAllFiles('commands')

  await Promise.all(
    commandFiles.map(async (file) => {
      const command = require(file)

      if (command.subCommand) {
        return client.subCommands.set(command.subCommand, command)
      }

      if (!command.name) {
        return
      }

      client.commands.set(command.name, command)
      slashCommands.push(command)
    })
  )

  logger.info(`📦 Loaded ${commandFiles.length} commands!`, {
    service: LoggerServices.Commands,
  })

  await registerCommands(client, slashCommands)
}
