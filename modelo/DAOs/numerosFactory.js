import DaoMem from './numerosMem.js'
import DaoFile from './numerosFile.js'

class NumerosFactory {
    static get(modo) {
        switch (modo) {
            case 'FILE': 
            console.log('*** Persistencia: File System ***')
            return new DaoFile()
        case 'MEM':
        default:
            console.log('*** Persistencia: Memoria ***')
            return new DaoMem()
        }
    }
}

export default NumerosFactory
