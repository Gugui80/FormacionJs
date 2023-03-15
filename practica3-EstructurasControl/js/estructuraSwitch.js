//ESTRUCTURA DE CONTROL SWITCH
document.getElementById("diaSemana").onkeyup = 
    (teclaPulsada) => {
        switch (teclaPulsada.key) { 
            case '1': 
            alert("Es Lunes");
            break;
            case '2': 
            alert("Es Martes");
            break;
            case '3': 
            alert("Es Miércoles");
            break;
            case '4': 
            alert("Es Jueves"); 
            break;
            case '5': 
            alert("Es viernes");
            break;
            case '6': 
            case '7': 
            alert("Es fin de semana");
            break;
            default: 
            alert("Ese día no existe"); 
        }
    }