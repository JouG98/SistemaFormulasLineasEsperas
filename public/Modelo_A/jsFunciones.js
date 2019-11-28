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

    let num1 = parseFloat(document.getElementById('MediaLlegada').value);
    let num2 = parseFloat(document.getElementById('MediaServicio').value);

    if (num1 == "" && num2 == "") {
        alert("Datos exitosos");
    } else {
        alert("Todos los campos son requeridos");
    }

    let resul = num1 / num2;

    let por = `${resul.toFixed(4) * 100} %`
    let pos = `${resul.toFixed(3)} o ${por}`

    document.getElementById('result').value = pos;

    // Probabilidad de n clientes

    pros1 = 1 - resul;
    pros2 = Math.pow(resul, 1);
    // Promedio Cliente-Servicio  Fórmula: L = λ/µ-λ

    pros3 = num1 / (num2 - num1);

    let ClienteServicio =
        `Promedio Cliente-Servicio: L = ${pros3}`;

    document.getElementById('por').value = ClienteServicio;
    // Promedio Cliente-Espera Fórmula: Lq = ρ*L

    pros4 = resul * pros3;
    let ClienteEspera =
        `Promedio Cliente-Espera: Lq = ${pros4.toFixed(3)} Clientes`;
    document.getElementById('por1').value = ClienteEspera;

    // Promedio tiempo-Servicio Fórmula: W = 1/µ-λ

    pros5 = 1 / (num2 - num1);
    let tiempoServicio =
        `Promedio tiempo-Servicio: W = ${pros5} (horas)`;
    document.getElementById('por2').value = tiempoServicio;

    // Promedio tiempo-Espera Fórmula: Wq = ρ*W
    pros6 = resul * pros5;
    let tiempoEspera =
        `Promedio tiempo-Espera: Wq = ${pros6.toFixed(3)} (horas)`;
    document.getElementById('por3').value = tiempoEspera;



}
let vacio = "";

function refresh() {

    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaServicio').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;
    document.getElementById('por1').value = vacio;
    document.getElementById('por2').value = vacio;
    document.getElementById('por3').value = vacio;

}
//////////////////////////
//////////////////////////
//////////////////////////

function probabilidad() {

    let pro = parseFloat(document.getElementById('pSistema').value);
    let cli = parseFloat(document.getElementById('nCliente').value);

    if (pro == "" && cli == "") {
        alert("Datos exitosos");
    } else {
        alert("Todos los campos son requeridos");
    }

    let r = 1 - pro;
    let c = Math.pow(pro, cli);
    let re = r * c;

    document.getElementById('result').value = re.toFixed(3);
    let por1 = `${re.toFixed(2) * 100} %`
    document.getElementById('por').value = por1;
}

function refresh1() {

    document.getElementById('pSistema').value = vacio;
    document.getElementById('nCliente').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

function promedioCServi() {

    let ML = parseFloat(document.getElementById('MediaLlegada').value);
    let MS = parseFloat(document.getElementById('MediaServi').value);

    if (ML == "" && MS == "") {
        alert("Datos exitosos");
    } else {
        alert("Todos los campos son requeridos");
    }
    let di = MS - ML;
    let re2 = ML / di;

    document.getElementById('result').value = re2;
    // let por2 = `${re2.toFixed( } %`
    // document.getElementById('por').value = por2;
}

function refresh2() {

    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaServi').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

function promedioEspera() {

    let PS = parseFloat(document.getElementById('proSis').value);
    let PC = parseFloat(document.getElementById('proCli').value);

    if (PS == "" && PC) {
        alert("Datos exitosos");
    } else {
        alert("Todos los campos son requeridos");
    }

    let re3 = PS * PC;

    document.getElementById('result').value = re3.toFixed(3);
    let por3 = `${re3.toFixed(2) } %`
    document.getElementById('por').value = por3;

}

function refresh3() {

    document.getElementById('proSis').value = vacio;
    document.getElementById('proCli').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

function promedioTiempoEspera1() {
    let TS = parseFloat(document.getElementById('MedSe').value);
    let TE = parseFloat(document.getElementById('MeLle').value);

    if (TS == "" && TE == "") {
        alert("Datos exitosos");
    } else {
        alert("Todos los campos son requeridos");
    }

    let a = TS - TE;
    let re4 = 1 / a;
    document.getElementById('result').value = re4.toFixed(3);
    // let por3 = `${re4.toFixed(2) } %`
    // document.getElementById('por').value = por3;
}

function refresh4() {

    document.getElementById('MedSe').value = vacio;
    document.getElementById('MeLle').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}

function promedioTiempoEspera() {
    let TEs = parseFloat(document.getElementById('PSistemas').value);
    let TSs = parseFloat(document.getElementById('PTSer').value);

    if (TEs == "" && TSs == "") {
        alert("Datos exitosos");
    } else {
        alert("Todos los campos son requeridos");
    }

    let re5 = TEs * TSs;

    document.getElementById('result').value = re5.toFixed(3);
    // let por3 = `${re5.toFixed(2) } %`
    // document.getElementById('por').value = por3;
}

function refresh5() {

    document.getElementById('PSistemas').value = vacio;
    document.getElementById('PTSer').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}