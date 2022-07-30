


let nombre = prompt("Ingresá tu nombre")
alert("Hola, " + nombre + ". ¿Estás list@ para comenzar con la ventura?");


alert(nombre + ", estás en la ruta. Siempre pensaste en la idea de escapar de la gran ciudad, instalarte en un pueblo y vivir una vida más relajada. ¿Cuál es ese nuevo Edén? Chascomús. Un sitio que, si bien está a unos pocos kilómetros de Capital Federal, conserva sus costumbres pueblerinas. Una de ellas y la que más te llama la atención: la siesta.");
alert("Estacionas, te bajas y observas. La casa de dos plantas que alquilaste para pasar los próximos meses parece más confortable que en las fotos. Pero el paisaje es solitario. Apenas unas casas a la vista; la laguna al frente y la brisa cálida de noviembre que anuncia la proximidad del verano. Perfección absoluta. Pero recuerdas la frase que tu madre solía decir antes del accidente: No todo lo que brilla es oro." );
alert("Comienzas a bajar las cajas, limpiar la casa, ubicar el escritorio con la computadora frente a la ventana que capta la laguna. Será una gran inspiración para escribir. Ya ha pasado más de un año desde la publicación de tu último libro y, gracias a su éxito, la editorial se muestra muy interesada en una nueva obra. El celular suena: es Ana, tu terapeuta.")

let accion1 = prompt("Si quieres atender el llamado, ingresa el número 1. Si quieres ignorar la llamada y salir a recorrer el lugar, ingresa el número 2.")



if (accion1 == 1) {
    alert("«- Hola, " + nombre + ". ¿Cómo estás? ¿Ya te instalaste?». Le dices que sí. Le cuentas un poco del viaje, de lo poco que captaste del lugar. « No quería molestarte mucho hoy, pero recuerda que debemos tener la sesión en estos días ». Programan fecha para mañana y se despiden. Te sientas en la cama y piensas. La mirada perdida, de pronto, se encuentra en la foto familiar. Papá, mamá, Clara y tú. Piensas que el universo es un patético bufón, de esos que creen que son elocuentes, pero que en el fondo son siniestros. Se ríe de tí, seguramente, con una carcajada grave y sonora. Y te sonríes al pensar que tú también te reirías de ti: le pagas a alguien para revolver toda la porquería que llevas adentro.");
    
} else if (accion1 == 2) { 
    alert("Hoy, no. Ya has hablado suficiente sobre la muerte de mamá y papá. El cambio de aire es positivo ,y si decidiste venir hasta aquí para dejar todo atrás, no vas a ocapar este primer día con la oscuridad del pasado. Decides dejar el celular sonando en el escritorio y sales. Aún hay sol, faltarán unas horas para que empiece a oscurecer. Caminas hacia la ruta que rodea a la laguna. Escuchas a los pájaros cantar y observas unas sutiles olas en el agua. La brisa se volvió un poco más densa. Algunas personas en bicicleta o corriendo cruzan el camino. A lo lejos ves movimiento en el agua. Observas mejor. Parece una persona agitando los brazos. Comienzas a correr con desesperación hacia la orilla... " );
    
} else {
     while (accion1 != 1 && accion1 != 2) {
        alert("No ingresaste una opción válida.");
        accion1 = prompt("Si quieres atender el llamado, ingresa el número 1. Si quieres ignorar la llamada y salir a recorrer el lugar, ingresa el número 2.");
        
     }
}







