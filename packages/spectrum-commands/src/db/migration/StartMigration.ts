import mongoose from 'mongoose'
import { logger } from '../../utils'
import { MongoConn } from '../conn/MongoConn'
import languageModel from '../models/languageModel'
import { LoggerServices } from '../../utils/enums/LoggerServices'

export async function startMigration() {
  try {
    logger.info('🎉 MongoDB connected!', { service: LoggerServices.Mongo })
    logger.info('🚀 Starting migration...', { service: 'Migration' })
    await MongoConn()
    await languageModel.createCollection()
  } catch (error: any) {
    logger.error(error, { service: 'Migration' })
  }
}
