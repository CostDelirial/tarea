import { Router, Request, Response } from 'express'

import UserController from '../../controllers/user/user.controller'

const userRouter = Router()
const userController = new UserController()


/////////////////////////////////POSTS//////////////////////////////////////////////////
userRouter.post('/findUser', async (req: Request, res: Response) => {
    try{
        const {email} = req.body
        const response = await userController.findUserEmail(email)
        return res.status(response.code).json(response)
    }catch(err: any){
        return res.status(err.code ?  err.code: 500).json(err)
    }
})

userRouter.post('/create', async (req: Request, res: Response ) => {
    try{    
        const user = req.body
        const response = await userController.createUser(user)
        return res.status(response.code).json(response)
    }catch(err: any){
        return res.status(err.code ? err.code: 500).json(err)
    }
})
///////////////////////////////////END POST////////////////////////////////////////////////
/////////////////////////////////////PUT//////////////////////////////////////////////

userRouter.put('/update/:uid', async (req: Request, res: Response ) => {
    try{
        const userData = req.body
        const uid = req.params.uid
        const response = await userController.updateUser(uid, userData)
        return res.status(response.code).json(response)
    }catch(err: any){
        return res.status(err.code ? err.code: 500).json(err)
    }
})
/////////////////////////////////////END PUTS//////////////////////////////////////////////

/////////////////////////////////DELETE//////////////////////////////////////////////////
/////////////////////////////////END DELETE//////////////////////////////////////////////////


export default userRouter