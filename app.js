
arreglo = ["adios","marcos","lizeth","caballo","generation","tres","uno"];
cadena = "hola";
 
function Ej1(cadena, arreglo) {
    respuesta = [];
    tamañoCadena = cadena.length;
    arreglo.forEach(element => {
        if (element.length>tamañoCadena) {
            respuesta.push(element);
        }
    });
    return respuesta;
}
console.log(Ej1(cadena,arreglo));


//let myArray=['insecto', 'bootcamp', 'escritorio'];
let myArray=Ej1(cadena,arreglo);
let lista=document.getElementById("lista");

function arreglos(myArray){
    myArray.forEach(element => {
        lista.insertAdjacentHTML("beforeend",`
        <li>${element}</li>
        `)
    });

}
arreglos(myArray);