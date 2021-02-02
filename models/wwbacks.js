import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    users: {
      type: String,
      required: [true, '缺少使用者欄位']
    },
    description: {
      type: String,
      maxlength: [200, '說明必須200字以下']
    },
    file: {
      type: String,
      required: [true, '缺少檔案名稱']
    }
  },
  {
    versionKey: false
  }
)

const wwbacks = mongoose.model('wwbacks', userSchema)

export default wwbacks
