import { logger } from '../../utils'
import languageModel from '../models/languageModel'

// Setter
export async function setServerLanguage(
  serverId: string,
  language: string,
  serverName?: string
) {
  try {
    const filter = { serverId: serverId }
    const update = { serverName: serverName, language: language }
    const options = { upsert: true, new: true }
    await languageModel.findOneAndUpdate(filter, update, options).exec()
  } catch (error: any) {
    logger.error(error, { service: 'Language SET' })
  }
}

export async function getServerLanguage(serverId: String) {
  try {
    const modelLanguage = await languageModel
      .findOne({
        serverId: serverId,
      })
      .exec()
    return modelLanguage
  } catch (error: any) {
    logger.error(error, { service: 'Language GET' })
  }
}
