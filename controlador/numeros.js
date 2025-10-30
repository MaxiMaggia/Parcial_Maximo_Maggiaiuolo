import Servicio from '../servicio/numeros.js'

class Controlador {
  #servicio = null
  constructor() { this.#servicio = new Servicio() }

  agregarNumero = async (req, res) => {
    try {
      const raw = req.body?.numero
      const numero = Number(raw)

      const agregado = await this.#servicio.agregarNumero(numero)
      res.json(agregado)
    } catch (error) {
      res.status(500).json({ url: req.url, method: req.method, error: error.message })
    }
  }

  obtenerTodos = async (req, res) => {
    try {
      const numeros = await this.#servicio.obtenerNumeros()
      res.json({ numeros })
    } catch (error) {
      res.status(500).json({ url: req.url, method: req.method, error: error.message })
    }
  }

  obtenerPromedio = async (req, res) => {
    try {
      const promedio = await this.#servicio.obtenerPromedio()
      res.json({ promedio })
    } catch (error) {
      res.status(500).json({ url: req.url, method: req.method, error: error.message })
    }
  }

  obtenerMinMax = async (req, res) => {
    try {
      const { min, max } = await this.#servicio.obtenerMinMax()
      res.json({ min, max })
    } catch (error) {
      res.status(500).json({ url: req.url, method: req.method, error: error.message })
    }
  }

  obtenerCantidad = async (req, res) => {
    try {
      const cantidad = await this.#servicio.obtenerCantidad()
      res.json({ cantidad })
    } catch (error) {
      res.status(500).json({ url: req.url, method: req.method, error: error.message })
    }
  }
}

export default Controlador
