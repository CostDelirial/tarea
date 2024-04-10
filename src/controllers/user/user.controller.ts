import logger from '../../../lib/logger.lib'
import conifg from 'config'
import IResponse from '../../interfaces/response.interface'
import UserService from '../../services/user.service'

import Validators from '../../utils/validation'
import IUser from '../../interfaces/user.interface'
import mongoose, { Mongoose } from 'mongoose'

export default class UserController {
    private userService: UserService
    private validations: Validators

    constructor() {
        this.userService = new UserService()
        this.validations = new Validators()
    }

//////////////////////////POSTS////////////////////////////////////////////////////
    async createUser(user: IUser):Promise<IResponse>{
        try{
            if(!this.validations.EmailRegex(user.email)){
                return { ok: false, message: "Bad Format email value", response: null, code: 400}
            }
            const response = await this.userService.creatUser(user)
            return {ok: true, message: 'User created', response: response, code: 200}
        }catch(err: any){
            return {ok: false, message: 'Server Error', response: err.errorResponse.errmsg, code: 500}
        }
    }
    async findUserEmail(email: any):Promise<IResponse>{
        try{

            if(!this.validations.EmailRegex(email)){
                return { ok: false, message: "Bad Format email value", response: null, code: 400}
            }
            const userFind = await this.userService.findUser(email)
            return { ok: true, message: "User Found", response: userFind, code: 200}
        }catch(err){
            return { ok: false, message: "Server Error", response: err, code: 500}
        }
    }
////////////////////////// END POSTS////////////////////////////////////////////////////
//////////////////////////PUTS////////////////////////////////////////////////////
    async updateUser(uid: string, user: IUser):Promise<IResponse>{
        try{
            if(!uid || !mongoose.Types.ObjectId.isValid(uid)){
                return {ok: true, message:"The id value is not  valid", response: null, code: 200 }
            }
            const userUpdate = await this.userService.updateUser(uid, user)
            return {ok: true, message:"Updated data", response: userUpdate, code: 200 }
        }catch(err){
            return {ok: false, message: "Server Error", response: err, code: 500}
        }
    }
//////////////////////////END PUTS////////////////////////////////////////////////////

/////////////////////////////////DELETE//////////////////////////////////////////////////
async deleteUser(uid: any):Promise<IResponse>{
    try{}catch(err){}
}
/////////////////////////////////END DELETE//////////////////////////////////////////////////
    
}