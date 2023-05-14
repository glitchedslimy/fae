import mongoose from 'mongoose'
import config from '../../../config/Config'
import { logger } from '../../utils'
import { LoggerServices } from '../../utils/enums/LoggerServices'

export async function MongoConn() {
  try {
    await mongoose.connect(config.mongoURI)
    logger.info('🎉 MongoDB connected!', { service: LoggerServices.Mongo })
  } catch (err: any) {
    logger.error(`Something went wrong: ${err}`, {
      service: LoggerServices.Mongo,
    })
  }
}
