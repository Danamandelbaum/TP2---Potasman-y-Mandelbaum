import { getCountry, getCurrencyAbbreviation } from 'currency-map-country';
import { getCurrency } from 'currency-map-country'

function obtenerMoneda(codigoPais)
{
    return getCurrencyAbbreviation(codigoPais);
    
}

let codigoPais, monedaDelPais;
codigoPais = 'ARG';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(monedaDelPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

