//ESTRUCUTRAS DE CONTROL IF
document.getElementById('edadUsuario').onkeyup = 
     (teclaPulsada) => {
        console.log(teclaPulsada)
        if(teclaPulsada.keyCode > 57 || teclaPulsada.keyCode < 48) {
            alert('Debes pulsar un número, que la edad no se mide en letras')
        }
    }

document.getElementById('edadUsuario').onkeyup = 
    function(teclaPulsada) {
        console.log(teclaPulsada)
        if(teclaPulsada.keyCode > 57 || teclaPulsada.keyCode < 48) {
            alert('Debes pulsar un número, que la edad no se mide en letras')
        }
    };