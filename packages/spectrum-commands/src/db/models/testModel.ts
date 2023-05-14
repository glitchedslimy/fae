import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TestSchema = new Schema({
  name: String,
})

export default mongoose.model('Test', TestSchema)
