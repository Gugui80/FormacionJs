manejadorExterno = ( evento ) => {
    console.log(evento)//Al invocar el método desde HTML con el objeto event, vemos que se almacena: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
}

document.querySelector('#boton3').onmouseover = () => {
    console.log('eeeeeeeeee')
}