import mongoose from 'mongoose'
import config from 'config'
import logger from './logger.lib'

export default class MongoConn {

    public async connectDB(){
        mongoose.set('strictQuery', false)
        mongoose.set('bufferCommands', true)
        try{
            await mongoose.connect(`${config.get('mongodb.url')}/${config.get('mongodb.database')}`)
            logger.info(`Connected to DB ${config.get('mongodb.database')}`)
        }catch(err){
            logger.error(`Error connection to DB: ${err}`)
        }
    }
    public async disconnectDB() {
        try{
            await mongoose.connection.close()
            logger.info(`Disconnected to DB ${config.get('mongodb.database')}`)
        }catch(err){
            logger.error(`Error connection to DB: ${err}`)
        }
    }
}