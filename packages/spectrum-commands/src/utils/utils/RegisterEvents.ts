import { IEvent } from '../../interfaces/interfaces/IEvent'
import { SpectrumClient } from '../../structures'
import { LoggerServices } from '../enums/LoggerServices'
import { logger } from './InternalLogger'

export function registerEvent(
  client: SpectrumClient,
  event: IEvent,
  run: (...args: any) => void
) {
  logger.info(`🎭 Registering events...`, { service: LoggerServices.Events })
  if (event.rest) {
    const handler = event.once ? client.rest.once : client.rest.on
    handler.call(client.rest, event.event, run)
  } else {
    const handler = event.once ? client.once : client.on
    handler.call(client, event.event, run)
  }
  logger.info(`🎭 Registered events!`, { service: LoggerServices.Events })
}
