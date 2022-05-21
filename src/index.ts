//resultadoSuma: number[] = function()
let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let sumaArreglo: number[] = new Array(6);
for (let i: number = 0; i <= 5; i++) {
  arreglo1[i] = Number(
    prompt(`ingrese valor para posicion ${i + 1} del Primer Arreglo`)
  );
  arreglo2[i] = Number(
    prompt(`ingrese valor para posicion ${i + 1} del segundo Arreglo`)
  );
  sumaArreglo[i] = arreglo1[i] + arreglo2[i];
}
console.log("El resultado de la suma de los vecores es: ", sumaArreglo);

function sumaVectores(vectorA: number[], vectorB: number[]): number[] {
  let sumaVec: number[] = new Array(6);
  for (let i: number = 0; i <= 5; i++) {
    sumaVec[i] = vectorA[i] + vectorB[i];
  }
  return sumaVec;
}
console.log(
  "El resultado de la suma de los vecores es: ",
  sumaVectores(arreglo1, arreglo2)
);
