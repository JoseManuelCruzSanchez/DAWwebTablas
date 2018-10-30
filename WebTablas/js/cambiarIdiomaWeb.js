function cambiarIdiomaWeb(idBandera){
    var url = window.location.href;
    var nombreArchivoYExtension = url.substring(url.lastIndexOf('/')+1);

    if(idBandera === 'btnBanderaEspanola'){
        var nombreArchivo = nombreArchivoYExtension.substring(0, nombreArchivoYExtension.indexOf('-'));
        var extensionArchivo = nombreArchivoYExtension.substring(nombreArchivoYExtension.lastIndexOf('.'));
        window.location.assign(nombreArchivo + "-es" + extensionArchivo);
    }
    else if(idBandera === 'btnBanderaInglesa'){
        var nombreArchivo = nombreArchivoYExtension.substring(0, nombreArchivoYExtension.indexOf('-'));
        var extensionArchivo = nombreArchivoYExtension.substring(nombreArchivoYExtension.lastIndexOf('.'));
        window.location.assign(nombreArchivo + "-uk" + extensionArchivo);
    }
}

