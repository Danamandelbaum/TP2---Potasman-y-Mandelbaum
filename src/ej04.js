import fs from 'fs';

const archivoEntrada = './archivo-entrada.txt';
const archivoSalida = './archivo-salida.txt';

console.clear();
copiar(archivoEntrada, archivoSalida);

function copiar(archivoEntrada, archivoSalida) {
  fs.readFile(archivoEntrada, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error al leer el archivo de entrada: ${err.message}`);
      return;
    }

    fs.writeFile(archivoSalida, data, 'utf8', (err) => {
      if (err) {
        console.error(`Error al escribir el archivo de salida: ${err.message}`);
        return;
      }

      console.log(`Archivo copiado exitosamente: ${archivoEntrada} a ${archivoSalida}`);
    });
  });
}

copiar(archivoEntrada, archivoSalida);
