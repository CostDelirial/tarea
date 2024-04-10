import express from 'express'
import cors from 'cors'

import Server from './classes/server.class'
import routers from './routes/routes'


const server = Server.instance

server.app.enable('trust proxy')

server.app.use(express.urlencoded({extended: true, limit: '50mb'}))

server.app.use(express.json({ limit: '50mb'}))
server.app.use(cors({origin: true, credentials: true}))

server.app.use(routers)

server.start()