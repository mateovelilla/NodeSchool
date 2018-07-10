/*
  Los pasos del bebé 
  ________________________________________________________

  A cada ejercicio aumenta la intensidad y conocimiento respecto a javascript
  o en su defecto node, en el ejercicio usaremos un metodo de node para manipular los paramentro de entrada
  desde la consola, es decir, al momento de ejecutar una aplicacion en node o un script, dejaremos un espacio para ingresar los parametros.
  Ej: node BABYSTEP.js 1 2 hola
  - "node": para invocar la ejecucion del script node
  - "BABYSTEP.js": es el nombre del archivo
  -"1 2 hola" : estos hacen parte los parametros de entrada estan separados por espacios. 
  Si la aplicación no recibe los parametros de entrada, no proyectara ningun tipo de error.
  Los parametros por consola se obtiene atravez de la funcion process.argv que retorna un arreglo parecido al siguiente:
  
  ['Node', '/path/to/your/BABYSTEPS.js "," 1 "," 2 "," hola "]

  Apartir de la segunda posición del array estan los parametros de entrada insertados desde la consola, el proposito del
  ejercicio es que ingrese cierta cantidad de numero y el aplicativo devuelva la suma,apartir de la teoria anteriormente
  explicada se realiza el ejercicio, y tambien teniendo en cuenta que la respuesta de la funcion process.argv se devuelve
  un array con valores tipo STRING por que que utilizare la función Number() para convertir los STRING a NUMBER

*/
var SumaValores = 0;
for (var i = 2; i < process.argv.length; i++) {
	SumaValores = SumaValores + Number(process.argv[i]);
};

console.log(SumaValores);
