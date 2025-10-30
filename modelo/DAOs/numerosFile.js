import fs from 'fs'
import path from 'path'

class NumerosFile {
    #archivo = ''

    constructor() {
        this.#archivo = path.resolve(process.cwd(), 'datos', 'numeros.json')
    }

    #asegurarArchivo = async () => {
        const dir = path.dirname(this.#archivo)
        await fs.promises.mkdir(dir, { recursive: true })
        try {
          await fs.promises.access(this.#archivo)
        } catch {
          await fs.promises.writeFile(this.#archivo, '[]', 'utf-8')
        }
      }

    #leer = async () => {
        await this.#asegurarArchivo()
        try {
            const txt = await fs.promises.readFile(this.#archivo, 'utf-8')
            const arr = JSON.parse(txt)
            return Array.isArray(arr) ? arr : []
            } catch {
            return []
        }
    }

    #escribir = async (arr) => {
        await this.#asegurarArchivo()
        await fs.promises.writeFile(this.#archivo, JSON.stringify(arr, null, '\t'), 'utf-8')
    }

    obtenerNumeros = async () => {
        return await this.#leer()
    }

    agregarNumero = async (n) => {
        const arr = await this.#leer()
        arr.push(n)
        await this.#escribir(arr)
    }
}

export default NumerosFile
