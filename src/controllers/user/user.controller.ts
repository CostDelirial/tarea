import logger from '../../../lib/logger.lib'
import conifg from 'config'
import IResponse from '../../interfaces/response.interface'
import UserService from '../../services/user.service'

import Validators from '../../utils/validation'
import IUser from '../../interfaces/user.interface'

export default class UserController {
    private userService: UserService
    private validations: Validators

    constructor() {
        this.userService = new UserService()
        this.validations = new Validators()
    }


    async createUser(user: IUser):Promise<IResponse>{
        try{
            if(!this.validations.EmailRegex(user.email)){
                return { ok: false, message: "Bad Format email value", response: null, code: 400}
            }
            const response = await this.userService.creatUser(user)
            return {ok: true, message: 'User created', response: response, code: 200}
        }catch(err){
            return {ok: false, message: 'Server Error', response: err, code: 500}
        }
    }

    async findUserEmail(email: any):Promise<IResponse>{
        try{

            if(!this.validations.EmailRegex(email)){
                return { ok: false, message: "Bad Format email value", response: null, code: 400}
            }
            const user = await this.userService.findUser(email)
            return { ok: true, message: "User Found", response: user, code: 200}
        }catch(err){
            return { ok: false, message: "Server Error", response: err, code: 500}
        }
    }
}