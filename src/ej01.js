let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); // Borra la pantalla en la consola.
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);
function concatInvert(texto1, texto2) {
    let texto = texto1 + texto2;
    let invertirCadena = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertirCadena += texto[i];
    }
    console.log(invertirCadena);
    return invertirCadena;
}
