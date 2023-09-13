// Type assertion
// Sirve para cuando no sabemos el tipo de dato de un valor y podemos hacer un cast para convertir ese tipo de dato al que necesitemos (Cast)
let channel: any = 'Leon';
let channelStr = <string>channel; //Cast metodo 1
//or
let channelStr2 = channel as String; //Cast metodo 2

const myCanvas = document.getElementById('main') as HTMLCanvasElement; //Para cuando usas HTML se pueda convertir el elemento en un diferente dato
//or
const myCanvas2 = <HTMLCanvasElement>document.getElementById('main'); //Para cuando usas HTML se pueda convertir el elemento en un diferente dato