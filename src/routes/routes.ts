import express from 'express'

import authRouter from './auth/auth.route'
import userRouter from './user/user.router'


const routers = express()

routers.use("/api/auth", authRouter)
routers.use("/api/user", userRouter)

export default routers