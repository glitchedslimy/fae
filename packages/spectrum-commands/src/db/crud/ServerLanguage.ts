import { logger } from '../../utils'
import languageModel from '../models/languageModel'

export async function setServerLanguage(
  serverId: string,
  language: string,
  serverName?: string
) {
  try {
    const filter = { serverId }
    const update = { serverName, language }
    const options = { upsert: true, new: true }
    await languageModel.findOneAndUpdate(filter, update, options)
  } catch (err) {
    logger.error('🚨 Something went wrong in the SET query', {
      service: 'Language SET',
      error: err,
    })
    throw err
  }
}

export async function getServerLanguage(serverId: string) {
  try {
    const modelLanguage = await languageModel.findOne({ serverId }).exec()
    return modelLanguage
  } catch (err) {
    logger.error('🚨 Something went wrong in the GET query', {
      service: 'Language SET',
      error: err,
    })
    throw err
  }
}
