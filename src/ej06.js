let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

  function parsearUrl(laURL){
    try
    {
        const url = new URL (laURL);
        const host = url.host;
        const pathname = url.pathname;
        const searchParams = url.searchParams;
        const parametros = {};
        for (const [key, value] of searchParams.entries()) {
          parametros[key] = value;
        }
        return {
        host: host,
        pathname: pathname,
        parametros: parametros,
    };
    }
    catch(error)
    {
        console.error(`Error al parsear la URL: ${error.message}`);
        miObjeto = { host: null, pathname: null, parametros: {} };
    }
  
    
  }  

