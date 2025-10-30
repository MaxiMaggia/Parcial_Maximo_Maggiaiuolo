import express from 'express'
import RouterNumeros from './router/numeros.js'

class Server {
  #port = null
  #routerNumeros = null

  constructor(port) {
    this.#port = port
    this.#routerNumeros = new RouterNumeros().config()
  }

  start() {
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: true })) 

    app.use(express.static('public'))

    app.use('/numeros', this.#routerNumeros)

    const server = app.listen(this.#port, () =>
      console.log(`Servidor escuchando en http://localhost:${this.#port}`)
    )
    server.on('error', (err) => console.log(`Error en servidor: ${err.message}`))
  }
}

export default Server
