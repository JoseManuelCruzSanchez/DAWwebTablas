var botonesMenu = document.getElementsByClassName('btnMenus');
for(var i = 0; i < botonesMenu.length; i++){
    botonesMenu[i].addEventListener("click", irAPagina);
}

function irAPagina(){
    var idBtnMenu = event.target.id;
    var url = window.location.href;
    var nombreArchivoYExtension = url.substring(url.lastIndexOf('/')+1);
    var idiomaActual = nombreArchivoYExtension.substring(nombreArchivoYExtension.indexOf('-')+1, nombreArchivoYExtension.indexOf('.'));
    var extensionArchivo = nombreArchivoYExtension.substring(nombreArchivoYExtension.lastIndexOf('.'));

    if(idBtnMenu === "btnInicio"){
        if(idiomaActual === "es"){
            window.location.assign("index-" + idiomaActual + extensionArchivo);
        }
        else if(idiomaActual === 'uk'){
            window.location.assign("index-" + idiomaActual + extensionArchivo);
        }
    }
    else if(idBtnMenu === 'btnOrdenadores'){
        if(idiomaActual === 'es'){
            window.location.assign("ordenadores-" + idiomaActual + extensionArchivo);
        }
        else if(idiomaActual === 'uk'){
            window.location.assign("ordenadores-" + idiomaActual + extensionArchivo);
        }
    }
    else if(idBtnMenu === 'btnCableado'){
        if(idiomaActual === 'es'){
            window.location.assign("cableado-" + idiomaActual + extensionArchivo);
        }
        else if(idiomaActual === 'uk'){
            window.location.assign("cableado-" + idiomaActual + extensionArchivo);
        }
    }
    else if(idBtnMenu === 'btnSoftware'){
        if(idiomaActual === 'es'){
            window.location.assign("software-" + idiomaActual + extensionArchivo);
        }
        else if(idiomaActual === 'uk'){
            window.location.assign("software-" + idiomaActual + extensionArchivo);
        }
    }
    else if(idBtnMenu === 'btnContacto'){
        if(idiomaActual === 'es'){
            window.location.assign("contacto-" + idiomaActual + extensionArchivo);
        }
        else if(idiomaActual === 'uk'){
            window.location.assign("contacto-" + idiomaActual + extensionArchivo);
        }
    }
}
