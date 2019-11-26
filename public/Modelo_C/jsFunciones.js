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


function promedioSistema() {

    variable1 = parseFloat(document.getElementById('MediaLlegada').value);

    pros1 = 1 - variable1;

    console.log(`${variable1}; ${pros1}`);
    document.getElementById('result').value = pros1.toFixed(3);

    let por = `${pros1 * 100} %`
    document.getElementById('por').value = por;

}
let vacio = "";

function refresh() {

    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}
//////////////////////////

function promedioEspera() {

    variable1 = parseFloat(document.getElementById('nCliente').value);
    variable2 = parseFloat(document.getElementById('MediaLlegada').value);
    variable3 = parseFloat(document.getElementById('MediaServicio').value);
    variable4 = parseFloat(document.getElementById('nPo').value);

    console.log(`${variable1}; ${variable2}; ${variable3}; ${variable4}`);

    //Proceso
    pros1 = variable2 + variable3;
    // pros2 = pros1 / variable2;
    // Proceso 2
    pros3 = 1 - variable4;
    pros4 = (pros1 * pros3) / variable2;
    pros5 = variable1 - pros4;

    document.getElementById('result').value = pros5.toFixed(2);
    // let por3 = `${re3.toFixed(2) } %`
    // document.getElementById('por').value = por3;

}

function refresh3() {

    document.getElementById('nCliente').value = vacio;
    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaServicio').value = vacio;
    document.getElementById('nPo').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}
//////////////////////////
function promedioCServi() {

    variable1 = parseFloat(document.getElementById('nCliente').value);
    variable2 = parseFloat(document.getElementById('MediaServicio').value);
    variable3 = parseFloat(document.getElementById('MediaLlegada').value);
    variable4 = parseFloat(document.getElementById('nPo').value);

    console.log(`${variable1}; ${variable2}; ${variable3}; ${variable4}`);
    // Proceso
    pros1 = 1 - variable4;
    console.log(pros1);
    pros2 = variable2 * pros1;
    pros3 = pros2 / variable3;
    pros4 = variable1 - pros3;
    console.log(pros4);


    document.getElementById('result').value = pros4.toFixed(2);
    // let por2 = `${re2.toFixed(2) } %`
    // document.getElementById('por').value = por2;
}

function refresh2() {

    document.getElementById('nCliente').value = vacio;
    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaServicio').value = vacio;
    document.getElementById('nPo').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

//////////////////////////
function promedioTiempoEspera() {
    variable1 = parseFloat(document.getElementById('pClientes').value);
    variable2 = parseFloat(document.getElementById('nCliente').value);
    variable3 = parseFloat(document.getElementById('pServicio').value);
    variable4 = parseFloat(document.getElementById('MediaLlegada').value);
    console.log(`${variable1}; ${variable2}; ${variable3}; ${variable4}`);
    //Procesos
    pros1 = variable2 - variable3;
    pros2 = pros1 * variable4;
    pros3 = 1 / pros2;
    pros4 = variable1 * pros3;

    document.getElementById('result').value = pros4.toFixed(3);
    // let por3 = `${re5.toFixed(2) } %`
    // document.getElementById('por').value = por3;
}

function refresh5() {

    document.getElementById('pClientes').value = vacio;
    document.getElementById('nCliente').value = vacio;
    document.getElementById('pServicio').value = vacio;
    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}
//////////////////////////



function promedioTiempoEspera1() {
    variable1 = parseFloat(document.getElementById('pClientes').value);
    variable2 = parseFloat(document.getElementById('nCliente').value);
    variable3 = parseFloat(document.getElementById('MediaLlegada').value);
    console.log(`${variable1}; ${variable2}; ${variable3}`);

    //Procesos
    pros1 = variable2 - variable1;
    pros2 = pros1 * variable3;

    pros3 = 1 / pros2;
    pros4 = variable1 * pros3;


    document.getElementById('result').value = pros4.toFixed(3);
    // let por3 = `${re4.toFixed(2) } %`
    // document.getElementById('por').value = por3;
}

function refresh4() {

    document.getElementById('pClientes').value = vacio;
    document.getElementById('nCliente').value = vacio;
    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

/////////////////////

function probabilidad() {

    variable1 = parseFloat(document.getElementById('nCli').value);
    variable2 = parseFloat(document.getElementById('MediaLlegada').value);
    variable3 = parseFloat(document.getElementById('MediaServicio').value);
    variable4 = parseFloat(document.getElementById('nCliente').value);

    console.log(`${variable1}; ${variable2}; ${variable3}; ${variable4}`);

    pros1 = variable2 / variable3;

    //Factorial de N
    var da = 1;
    var siguiente = 0;
    for (let y = 0; y <= variable1; y++) {
        if (y == 0) {
            y = 1;
        }
        da = da * y;
        // console.log(`Factorial de ${variable1} es: ${da} `);
        var FactorialdeN = da;
    }


    var to = 1;
    for (let a = 0; a <= variable1; a++) {
        console.log(a);
        pros2 = Math.pow(pros1, a);
        // let cal = pros5;
        // console.log(`una ${pros2}`);
        console.log(pros2);
        pros3 = variable1 - a;
        //  console.log(`Resta de N-n= ${pros3}`);

        var t = a + 9;
        //Factorial
        if (pros3 == 0) {
            pros3 = 1;
        }

        //Multiplicacion del factorial de N-n
        var mul = 1;
        for (let u = 0; u <= pros3; u++) {
            if (u == 0) {
                u = 1;
            }
            console.log(`El valor de u: ${u}`);
            mul = mul * u;
            //  console.log(`El valor de multiplicar: ${mul}`);
            var valorM = mul;
            console.log(`(N - n)! = ${valorM}`);
        }
        //La division de N! / (N-n)!
        pros4 = FactorialdeN / valorM;
        console.log(`La division de N! / (N-n)! es = ${pros4}`);

        //Multiplicar 
        pros5 = pros2 * pros4;
        console.log(`El valor de la sumatoria es: ${pros5}`);

        siguiente = siguiente + pros5;
        console.log(siguiente);
        var tu = siguiente;

    }

    pros6 = 1 / tu;
    console.log(pros6);


    document.getElementById('result').value = pros6.toFixed(3);

    // let por1 = `${re.toFixed(2) * 100} %`
    // document.getElementById('por').value = por1;
}

function refresh1() {

    document.getElementById('nCli').value = vacio;
    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaServicio').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;
    // document.getElementById('nCliente').value = vacio;

}