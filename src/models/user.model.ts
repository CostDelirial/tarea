import mongoose, { Schema } from 'mongoose'

export const validRole = {
    values:["ADMIN","PARNER"],
    message: '{VALUE} not is  a valid role'
}
const UserSchema = new Schema({
    name: {type: String, require: true},
    firstlastName: {type: String, require: true},
    secondLasName: {type: String, require: true},
    email: {type: String, unique: true},
    password: {type: String, require: true},
    status: {type: String, default: 'INACTIVE'},
    role: {type: String, default: 'PARNER'}
}, {collection: 'users'})

export default mongoose.model('User', UserSchema)