import MongoConn from "../../lib/mongoose.lib"
import IResponse from "../interfaces/response.interface"
import IUser from "../interfaces/user.interface"
import userModel from "../models/user.model"


export default class UserService {
    private database: MongoConn
    
    constructor(){
        this.database = new MongoConn()
    }
/////////////////////////////////POSTS//////////////////////////////////////////////////

    async findUser(email: string):Promise<IUser>{
        try{
            await this.database.connectDB()
            const user = await userModel.findOne({email: email}) as any
            return user
        }catch(err){
            throw err
        }finally{
            await this.database.disconnectDB()
        }
    }
    async creatUser(user: IUser):Promise<IUser>{
        try{
            await this.database.connectDB()
            const createUser = await userModel.create(user) as any
            return createUser
        }catch(err){
            throw err
        }finally{
            await this.database.disconnectDB()
        }
    }
/////////////////////////////////END POSTS//////////////////////////////////////////////////
/////////////////////////////////PUTS//////////////////////////////////////////////////

    async updateUser(uid: any, user: IUser):Promise<IUser>{
        try{
            await this.database.connectDB()
            const userUpdate = await userModel.updateOne({_id: uid},{ $set: user}) as any
            return userUpdate
        }catch(err){
            throw err
        }finally{
            this.database.disconnectDB
        }
    }

/////////////////////////////////END PUSTS//////////////////////////////////////////////////
/////////////////////////////////DELETE//////////////////////////////////////////////////
/////////////////////////////////END DELETE//////////////////////////////////////////////////


}