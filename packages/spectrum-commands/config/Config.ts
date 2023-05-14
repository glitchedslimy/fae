import convict from 'convict'
import { IConfig } from './IConfig'

const convictConfig: convict.Config<IConfig> = convict({
  mongoURI: {
    doc: 'MongoDB URI',
    format: String,
    default: '',
    env: 'MONGO_URI',
  },
})

convictConfig.validate({ allowed: 'strict' })
const config: IConfig = convictConfig.getProperties()

export default config
