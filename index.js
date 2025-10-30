import Server from './server.js'
import config from './config.js'

const appServer = new Server(config.PORT)
appServer.start()