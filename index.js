import { input } from './input.js';
import { mapper } from './mapper.js'
import fs from 'fs'

const mapeado = mapper(input)
fs.writeFile('output.json', JSON.stringify(mapeado), () => console.log('success'))
// console.log(`Respuesta mapeada: ${mapeado}`);
