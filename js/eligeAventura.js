


let nombre = prompt("Ingresa el nombre de tu personaje")
alert("Hola, " + nombre + ". ¿Estás list@ para comenzar con la aventura?");


alert(nombre + ", Te encuentras en el puesto del pescadero. Trabajas allí durante el día a cambio de unas monedas. De pronto, escuchas gritos; ves gente, desesperada, corriendo. No entiendes qué está sucediendo.");
alert("No sabes de qué escapan. ¿Sería lo sensato correr con ellos? De pronto, un rugido amorfo, inhumano, te sobresalta. Ese ruido, sin dudas, no es de este mundo. Te escondes detrás del puesto y ves cómo una lluvia de sangre anticipa la entrada de una siniestra criatura, que mastica los restos de un cuerpo sin vida. Comienza a olfatear y, como si detectara el miedo, clava sus profundos y ovalados ojos negros en ti. Corre en tu dirección, impulsándose con sus garras." );

let accion1 = prompt("Si crees que lo mejor es correr, ingresa 1. Si eliges tomar la cuchilla del pescadero y hacerle frente, ingresa 2")





while ((accion1 != 1) || (accion1 != 2) ) {
    if (accion1 == 1) {
        alert("Corres como si no hubiera un mañana justo cuando la criatura se lanza sobre el puesto. Miras hacia atrás mientras huyes y ves cómo, furiosa, se quita los restos de madera y tripas marinas de encima, al tiempo que reproduce otro fuerte rugido. Te sumerges en la profundidad del bosque, teniendo la esperanza de encontrar a alguien más. De poder respirar y comprender qué es lo que está sucediendo.");
        break;

    } else if (accion1 == 2) {
        alert("Tomas la cuchilla rápidamente, pero la criatura vuela de un golpe a ti y al puesto. Caes al suelo y sientes un fuerte dolor en el estómago. Ves que la criatura se acerca lentamente. Piensas en tomar la cuchilla para defenderte... ¿En dónde está? El dolor en el estómago es más punzante. Te tocas. Ahí está la cuchilla. Apenas puedes moverte y la criatura ya está olfateando la herida. Sientes sus garras expandiéndola y cómo la carne cede por completo a la brutalidad, mientras encomiendas tu alma a los dioses. " );
        break;

    } else {
        alert("No ingresaste una opción válida. ¡No es momento de dudar!");
        accion1 = prompt("Si crees que lo mejor es correr, ingresa 1. Si eliges tomar la cuchilla del pescadero y hacerle frente, ingresa 2");

    }
}