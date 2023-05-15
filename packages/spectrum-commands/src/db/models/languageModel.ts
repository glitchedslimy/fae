import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LanguageSchema = new Schema({
  serverId: {
    type: String,
    required: true,
  },
  serverName: {
    type: String,
  },
  language: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Language', LanguageSchema)
