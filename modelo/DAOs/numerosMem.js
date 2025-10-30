class NumerosMem {
    #numeros = []

    constructor() {
        this.#numeros = []
    }

    obtenerNumeros = async () => this.#numeros.slice()

    agregarNumero = async (n) => {
        this.#numeros.push(n)
    }
}

export default NumerosMem