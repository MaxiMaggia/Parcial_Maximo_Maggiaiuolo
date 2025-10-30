import express from 'express'
import Controlador from '../controlador/numeros.js'

class RouterNumeros {
  #controlador = null
  constructor() { this.#controlador = new Controlador() }

  config() {
    const router = express.Router()

    router.post('/entrada', this.#controlador.agregarNumero)

    router.get('/entrada', this.#controlador.obtenerTodos)

    router.get('/promedio', this.#controlador.obtenerPromedio)

    router.get('/minmax', this.#controlador.obtenerMinMax)

    router.get('/cantidad', this.#controlador.obtenerCantidad)
    
    return router
  }
}
export default RouterNumeros