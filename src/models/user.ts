import mongoose, { Schema } from 'mongoose'

import { AccountRoles } from '@constants/constants'
import { IMongoUserModel } from '@interfaces'

const UserSchema: Schema = new Schema(
  {
    uuid: { type: String, required: [true, 'Missing uuid'] },
    username: { type: String, required: [true, 'Missing username'] },
    email: { type: String, required: [true, 'Missing email'] },
    password: { type: String, required: [true, 'Missing password'] },
    signed_up: { type: Number, required: [true, 'Missing signed_up'] },
    last_signin: { type: Number, required: [true, 'Missing last_signin'] },
    permissions: {
      type: String,
      enum: Object.values(AccountRoles),
      default: AccountRoles.USER,
      required: [true, 'Missing account role']
    },
    images: {
      profile_picture: { type: String, default: '' }
    }
  },
  { versionKey: false }
)

export default mongoose.models.User ||
  mongoose.model<IMongoUserModel>('User', UserSchema)
