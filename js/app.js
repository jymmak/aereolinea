// DECLARANDO ARRAY
var airlineSeats = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
];

// CONTADOR DE ASIENTOS

var busySeats = 0; //VALOR CERO POR TENER ASIENTOS LIBRES AL INICIO

var paintSeats = function(array) { 
    var containerSeats = document.getElementById('seats');

    for (var i = 0; i < array.length; i++) {
        var seat = document.createElement('div'); 
        seat.className = "seats";

        // PRIMERA CLASE
        if (i < 4) {
            seat.style.background = 'purple';
        } else {
            seat.style.background = 'yellow';
        }
        containerSeats.appendChild(seat); 
    }
};

// FUNCION PARA  RESERVAR
var reserve = function() {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', chooseZone);
};

var chooseZone = function() {
    var choice = prompt('¿En qué zona prefieres reservar? \n 1. Primera Clase. \n 2. Económica. \n \n Por favor, ingresa el número de tu preferencia.');
    if (choice == 1) {
        checkFirstClassZone();
    } else if (choice == 2) {
        checkEconomicZone();
    } else {
        alert('Por favor, ingresa un número válido.');
    }
};

var checkFirstClassZone = function() {
    var zone = 'Primera Clase';
    //RECORRIENDO ELEMENTOS DE 0 AL 3
    for (var index = 0; index < 4; index++) {
        if (airlineSeats[index] == false) {
            airlineSeats[index] = true;
            reservedSeat(index);
            paintTicket(index, zone);
            busySeats++;
            break;
            //SI NO HAY PRIMERA CLASE SE ESCOGE ECONOMICA
        } else if (index == 3 && airlineSeats[index] == true) {
            reasignEconomicZone(zone);
        }
    }
};

var checkEconomicZone = function() {
    var zone = 'Economica';

    for (var index = 4; index < 10; index++) {
        if (airlineSeats[index] == false) { 
            airlineSeats[index] = true; 
            reservedSeat(index);
            paintTicket(index, zone);
            busySeats++;
            break;
        
        } else if (index == 9 && airlineSeats[index] == true) {
            reasignFirstClassZone(zone);
        }
    }
};


var reservedSeat = function(indexToPaint) {
    var seat = document.getElementsByClassName('seats');
    seat[indexToPaint].textContent = 'Ocupado';
};

var reasignEconomicZone = function(zone) {
    if (busySeats == 10) {
        noSeats();
        nextFlight();
    } else {
        var reasign = confirm(
            'Ya no quedan asientos disponibles en ' + zone + ' :( \n ¿Quieres reservar en zona Económica? '
        );
        if (reasign == true) { 
            checkEconomicZone(); 
        } else { 
            nextFlight();
        }
    }
};

var reasignFirstClassZone = function(zone) {
    if (busySeats == 10) {
        noSeats();
        nextFlight();
    } else {
        var reasign = confirm(
            'Ya no quedan asientos disponibles en ' + zone + ' :( \n ¿Quieres reservar en zona de Primera Clase? '
        );
        if (reasign == true) { 
            checkFirstClassZone(); 
        } else { 
            nextFlight();
        }
    }
};

var paintTickect = function(index, zone) {
    var containerTickets = document.getElementById('tickets');
    var ticket = document.createElement('div');
    ticket.className = 'seats';
    var title = document.createElement('p');
    var reservedSeating = document.createElement('p');
    var zoneClass = document.createElement('p');
    title.textContent = 'PASE DE ABORDAR';
    reservedSeating.textContent = 'Nro. de Asiento: ' + (index + 1);
    zoneClass.textContent = zone;
    ticket.appendChild(title);
    ticket.appendChild(reservedSeating);
    ticket.appendChild(zoneClass);
    containerTickets.appendChild(ticket);
};

var nextFlight = function() {
    alert('Nuestro Próximo vuelo sale en 3 horas.')
};

var noSeats = function() {
    alert('Lo sentimos :( \n Ya no quedan asientos disponibles en este avión.')
};

paintSeats(airlineSeats); 
reserve(); 