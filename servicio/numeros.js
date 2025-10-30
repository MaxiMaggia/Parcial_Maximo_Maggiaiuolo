import config from '../config.js'
import Factory from '../modelo/DAOs/numerosFactory.js'

class Servicio {
  #dao = null
  constructor() { this.#dao = Factory.get(config.MODO_PERSISTENCIA) }

  agregarNumero = async (n) => {
    if (!Number.isFinite(n)) throw new Error('El numero es invalido')
    await this.#dao.agregarNumero(n)
    return { numero: n }
  }

  obtenerNumeros = async () => await this.#dao.obtenerNumeros()

  obtenerPromedio = async () => {
    const arr = await this.#dao.obtenerNumeros()
    if (arr.length === 0) return 0
    const suma = arr.reduce((acc, v) => acc + v, 0)
    return suma / arr.length
  }

  obtenerMinMax = async () => {
    const arr = await this.#dao.obtenerNumeros()
    if (arr.length === 0) return { min: null, max: null }
    let min = arr[0], max = arr[0]
    for (const v of arr) { if (v < min) min = v; if (v > max) max = v }
    return { min, max }
  }

  obtenerCantidad = async () => {
    const arr = await this.#dao.obtenerNumeros()
    return arr.length
  }
}

export default Servicio
