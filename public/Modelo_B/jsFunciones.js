// import { factorial } from 'Factorial';

// console.log(`Factorial es ${factorial(dato)}`);

let variable1 = "";
let variable2 = "";
let variable3 = "";
let variable4 = "";
let variable5 = "";

let pros1 = "";
let pros2 = "";
let pros3 = "";
let pros4 = "";
let pros5 = "";
let pros6 = "";
let pros7 = "";
let pros8 = "";
let pros9 = "";
let pros10 = "";

let resultado1 = "";
let resultadoF = "";

// var num = 0;

// if (num <= 1) {
//     num = 1;
// } else {
//     num = 1
// }
// console.log(`Debe tener uno ==== ${num}`);


function promedioSistema() {

    variable1 = parseFloat(document.getElementById('MediaLlegada').value);
    variable2 = parseFloat(document.getElementById('MediaS').value);
    variable3 = parseFloat(document.getElementById('MediaServicio').value);

    pros1 = variable2 * variable3;

    resultado1 = variable1 / pros1;

    document.getElementById('result').value = resultado1.toFixed(3);

    // resultadoF = `${resultado1.toFixed(2) * 100} %`;
    // document.getElementById('por').value = resultadoF;



}
let vacio = "";

function refresh() {

    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaServicio').value = vacio;
    document.getElementById('MediaS').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}
//////////////////////////
//////////////////////////
//////////////////////////
function factorialNumero(variable2) {
    variable2 = parseFloat(document.getElementById('MediaS').value);
    if (variable2 <= 1) {
        return 1;
    } else {
        return variable2 * factorialNumero(variable2 - 1);
    }
}

function probabilidad() {

    variable1 = parseFloat(document.getElementById('MediaLlegada').value);
    variable2 = parseFloat(document.getElementById('MediaS').value);
    variable3 = parseFloat(document.getElementById('MediaServicio').value);
    variable4 = parseFloat(document.getElementById('pSistema').value);
    variable5 = parseFloat(document.getElementById('nCliente').value);

    //División
    pros1 = variable1 / variable3;
    //Proceso sumatoria
    var t = 1;
    var sigue = 0;
    for (let i = 0; i <= variable2 - 1; i++) {
        pros2 = Math.pow(pros1, i);
        console.log(`Valor: ${pros1}^${i}=${pros2}`);
        t = t * i;
        if (t == 0) {
            t = 1;
        }
        pros3 = t;
        console.log(`Acumulador: t=${t}* ${i} = ${pros3}`);
        pros4 = pros2 / pros3;
        console.log(`Division: (λ/µ)^n =${pros2} y esto dividido para el factorial: ${pros3} = ${pros4}`);
        sigue = sigue + pros4;
        console.log(`La suma de: ((λ/µ)^n) / n!= ${sigue} `);
    }
    //resultado de la sumatoria
    pros5 = sigue;
    //Proceso 2
    pros6 = Math.pow(pros1, variable2);
    //Factorial de s
    var totalS = 1;
    for (let i = 1; i <= variable2; i++) {
        totalS = totalS * i;
    }
    var fac3 = totalS;
    //Divison de ((λ/µ)^n) / n!---- Resultado
    pros7 = pros6 / fac3;
    console.log(`Proceso de S= ${pros7}`);

    // Proceso 3
    pros8 = 1 / (1 - variable4);
    console.log(`División: ${pros8}`);

    pros9 = pros7 * pros8;
    //Suma de Resultados de procesos
    resultado1 = pros5 + pros9;
    resultadoF = 1 / resultado1;
    console.log(`El resultado de la sumatoria es: ${resultado1} y la division entre 1 es: ${resultadoF}`);

    document.getElementById('result').value = resultadoF.toFixed(4);

    // //Factorial de n
    // var totalN = 1;
    // for (let i = 1; i <= variable5; i++) {
    //     totalN = totalN * i;
    // }
    // var fac2 = totalN;

    // // Proceso1
    // pros1 = variable1 / variable3;
    // pros2 = Math.pow(pros1, variable5)
    // pros3 = pros2 / fac2;

    // // Factorial Sigma -1
    // var tol = 1;
    // for (let h = 1; h <= variable2 - 1; h++) {
    //     tol = tol * h;
    //     console.log(tol);
    // }
    // let par = tol;

    // //Factorial Sigma
    // var cel = 1;
    // var ti = 1;
    // let c = 0;

    // var conta = 0;
    // var ciclo = 1;
    // var acu = 1;
    // var fal = 1;
    // var cero = 1;
    // var vas = 0;


    // while (ciclo < variable2 && conta <= variable2 - 1) {
    //     var basexPotencia = Math.pow(pros1, ciclo);
    //     console.log(`Potencia de: ${pros1} ^ ${conta} = ${basexPotencia}`);


    //     acu = acu * ciclo;
    //     // var contenerdor = contenerdor + ciclo;
    //     console.log(`El factorial de ${ciclo}! es: ${acu}`);

    //     var entre = basexPotencia / acu;
    //     console.log(`La division de: ${basexPotencia} / ${acu} es: ${entre}`);

    //     vas = vas + entre;

    //     console.log(`Debe darme algo ${vas +1}`);
    //     conta++;
    //     ciclo++;

    //     var zig = vas + 1;
    // }
    // var fin = zig;

    // //Factorial de s
    // var totalS = 1;
    // for (let i = 1; i <= variable2; i++) {
    //     totalS = totalS * i;
    // }
    // var fac3 = totalS;

    // //Factorial de s + s
    // // var siguiente = 0;
    // // var Total = 1;
    // // for (let i = 1; i <= variable2; i++) {
    // //     var proc = Math.pow(pros1, i) / (Total = Total * i);
    // //     console.log(proc);

    // // }
    // // var fac1 = proc;

    // //Proceso2
    // pros4 = Math.pow(pros1, variable2);
    // pros5 = pros4 / fac3;

    // //Proceso3
    // pros6 = 1;
    // pros7 = pros6 - variable4;
    // pros8 = pros6 / pros7;

    // //ProcesoSuma
    // pros9 = pros5 * pros8;
    // pros10 = pros3 + fin + pros9;


    // //Final
    // resultado1 = 1 / pros10;
    // document.getElementById('result').value = resultado1.toFixed(4);

}

function refresh1() {

    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaS').value = vacio;
    document.getElementById('MediaServicio').value = vacio;
    document.getElementById('pSistema').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;
    //document.getElementById('nCliente').value = vacio;

}

function probabilidadNcliente() {
    variable1 = parseFloat(document.getElementById('MediaLlegada').value);
    variable2 = parseFloat(document.getElementById('MediaServicio').value);
    variable3 = parseFloat(document.getElementById('nCliente').value);
    variable4 = parseFloat(document.getElementById('0Cliente').value);


    //Factorial de n
    var totalN = 1;
    for (let i = 1; i <= variable3; i++) {
        totalN = totalN * i;
    }
    var fac2 = totalN;

    // Proceso1
    pros1 = variable1 / variable2;
    pros2 = Math.pow(pros1, variable3)
    pros3 = pros2 / fac2;
    pros4 = pros3 * variable4;

    document.getElementById('result').value = pros4.toFixed(3);
    console.log(`${variable1}; ${variable2}; ${variable3}; ${pros1};`);

}

function probabilidadNcliente2() {
    variable1 = parseFloat(document.getElementById('MediaLlegada').value);
    variable2 = parseFloat(document.getElementById('MediaServicio').value);
    variable3 = parseFloat(document.getElementById('nCliente').value);
    variable4 = parseFloat(document.getElementById('0Cliente').value);
    variable5 = parseFloat(document.getElementById('MediaS').value);
    //Factorial de s
    var totalS = 1;
    for (let i = 1; i <= variable5; i++) {
        totalS = totalS * i;
    }
    var facS = totalS;

    // Proceso1
    pros1 = variable1 / variable2;
    pros2 = Math.pow(pros1, variable3);

    pros3 = variable3 - variable5;
    pros4 = Math.pow(variable5, pros3);
    pros5 = facS * pros4;

    pros6 = pros2 / pros5;
    document.getElementById('result').value = pros6.toFixed(3);

    console.log(`${variable1}; ${variable2}; ${variable3}; ${pros1};`);

}

function refreshPN() {

    document.getElementById('nCliente').value = vacio;
    document.getElementById('0Cliente').value = vacio;
    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaS').value = vacio;
    document.getElementById('MediaServicio').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

function promedioCServi() {
    variable1 = parseFloat(document.getElementById('Probabilidad').value);
    variable2 = parseFloat(document.getElementById('MediaLlegada').value);
    variable3 = parseFloat(document.getElementById('MediaServi').value);
    variable4 = parseFloat(document.getElementById('MediaS').value);
    variable5 = parseFloat(document.getElementById('PromedioS').value);

    //Operacion del Numerador
    pros1 = variable2 / variable3;
    pros2 = Math.pow(pros1, variable4);
    pros3 = variable1 * pros2 * variable5;

    //Operacion del Denominador
    pros4 = 1 - variable5;
    pros5 = Math.pow(pros4, 2);

    //Factorial de s
    var totalS = 1;
    for (let i = 1; i <= variable4; i++) {
        totalS = totalS * i;
    }
    var facS = totalS;

    pros6 = facS * pros5;

    //división 

    resultado1 = pros3 / pros6;

    console.log(`${variable1}; ${variable2}; ${variable3}; ${variable4}; ${variable5}`);

    document.getElementById('result').value = resultado1.toFixed(3);
    // let por2 = `${re2.toFixed(2) } %`
    // document.getElementById('por').value = por2;
}

function refresh2() {
    document.getElementById('Probabilidad').value = vacio;
    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaServi').value = vacio;
    document.getElementById('MediaS').value = vacio;
    document.getElementById('PromedioS').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

function promedioEspera() {

    variable1 = parseFloat(document.getElementById('proCli').value);
    variable2 = parseFloat(document.getElementById('MediaLlegada').value);

    //División
    pros1 = variable1 / variable2;

    document.getElementById('result').value = pros1;
    // let por3 = `${re3.toFixed(2) } %`
    // document.getElementById('por').value = por3;

}

function refresh3() {

    document.getElementById('proCli').value = vacio;
    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

function promedioTiempoEspera() {

    variable1 = parseFloat(document.getElementById('MeLle').value);
    variable2 = parseFloat(document.getElementById('MedSe').value);
    console.log(`${variable1}; ${variable2}`);
    //Proceso
    pors1 = 1 / variable2;
    resultado1 = variable1 + pros1;
    console.log(`${pros1}; ${resultado1}`);
    document.getElementById('result').value = resultado1;
    // let por3 = `${re4.toFixed(2) } %`
    // document.getElementById('por').value = por3;
}

function refresh4() {

    document.getElementById('MedSe').value = vacio;
    document.getElementById('MeLle').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

function promedioTiempoEspera1() {
    variable1 = parseFloat(document.getElementById('MediaLlegada').value);
    variable2 = parseFloat(document.getElementById('PTSer').value);
    console.log(`${variable1}; ${variable2}`);

    pros1 = variable1 * variable2;


    document.getElementById('result').value = pros1.toFixed(3);
    // let por3 = `${re5.toFixed(2) } %`
    // document.getElementById('por').value = por3;
}

function refresh5() {

    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('PTSer').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}