///////////PASO 3 
//Nombre del arreglo en donde se guardarán todos los nombres ingresados
var nombre_alumno_array = [];
var nombre_alumno
    
//Función del botón enviar
function submit()
{
    //////PASO 4 
    //arreglo donde se guardaran los nombres del for
    var ver_alumno_array = [];

    //bucle para obtener el valor de cada uno de los recuadros de texto
    //y poder guardarlos en el array
    for (var j = 1; j <= 4; j++) 
    {
        //creamos una variable local donde iremos guardando los nombres temporalmente
        nombre_alumno = document.getElementById("nombre_alumno_"+j).value;
        //mostraremos los nombres en la consola
        console.log(nombre_alumno);
        //agregaremos los nombres al array creado en la funcion
        nombre_alumno_array.push(nombre_alumno);
    }

    //imprimimos en la consola el array completo
    console.log(nombre_alumno_array);

    //PASO 5 (diapositiva 11)
    //guardamos en una variable la longitud del arreglo
    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    //Mostramos en la consola esta longitud
    console.log(longitud_nombre_alumnos_array);


    //PASO 6 (diapositiva 14)
    // creamos otro bucle for para ir mostrando los nombres en la pantallaa
    for (var k = 0; k < longitud_nombre_alumnos_array; k++) 
    {
        //Iremos agregando cada uno de los nombres agregados anteriormente
        //en la variable global con un poco de estilo de HTML
        //Le agregaremos al inciio la palabra "NOMBRE"
        ver_alumno_array.push("<h4>NOMBRE - "+ nombre_alumno_array[k] + "</h4>");
        //Mostraremos en la consola este otro array con NOMBRE
        console.log(ver_alumno_array);
    }

    //Mostraremos el arreglo final
    console.log(ver_alumno_array);

    //imprimimos el arreglo en el div "con comas"
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumno_array;


    //Podemos copiar y pegar este codigo en la función "ORDENAR"
    ////////////////////////////////////////////
    //PASO 7 (diapositiva 15)
    //para que no aparezcan las comas después de cada nombre,
    //usamos JOIN y le decimos que queremos que ponga para separar cada valor
    var remover_comas = ver_alumno_array.join(" ");
    //imprimimos en la consola la nueva variable sin comas
    console.log("Sin comas")
    console.log(remover_comas);
    //mostramos en la pagina la variable sin comas
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;
    //////////////////////////////////////////
    


    //PASO 8, al agregar los nombres, se ocultará el botón de ENVIAR
    document.getElementById("enviar").style.display = "none";
    //para mostrar el boton ordenar
    document.getElementById("ordenar").style.display = "inline-block";

}
//PASO 9 (diapositiva 20 ) muestra código completo para la función ordenar
function sorting()
{
    //ordenaremos los nombres del array global
    nombre_alumno_array.sort();
    //lo mostramos en la consola
    console.log(nombre_alumno_array);

    //creamos otro array local
    var ver_alumno_array_ordenar = [];

    //obtenemos la longitud del array ordenado
    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    //imprimimos la longitud del array
    console.log(longitud_nombre_alumnos_array);

    //podemos copiar el for de la función ordenar
    //////////////////////////////////////
    //Usamos un bucle for para poder guardar el arreglo con NOMBRE
    for (var k = 0; k < longitud_nombre_alumnos_array; k++) 
    {
        ver_alumno_array_ordenar.push("<h4>NOMBRE - " + nombre_alumno_array[k] + "</h4>");
        console.log(ver_alumno_array_ordenar);
    }
    /////////////////////////////////////////


    //podemos pegar la parte de la función de
    ////////////////////////////////////////////////////
    //para mostrar este nuevo array pero sin las comas
    var remover_comas = ver_alumno_array_ordenar.join(" ");
    console.log(remover_comas);

    //para mostrar este array sin comas en la etiqueta dive SIN COMAS
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;
    //////////////////////////////////////////////////////
}


//Actividad adicional
function new_update()
{
    document.getElementById("ver_nombre_sin_comas").innerHTML = "<h1>" + nombre_alumno_array +"</h1>";
}





