function promedioSistema() {

    let num1 = parseFloat(document.getElementById('MediaLlegada').value);
    let num2 = parseFloat(document.getElementById('MediaServicio').value);
    let resul = num1 / num2;

    document.getElementById('result').value = resul.toFixed(3);

    let por = `${resul.toFixed(4) * 100} %`
    document.getElementById('por').value = por;

}
let vacio = "";

function refresh() {

    document.getElementById('MediaLlegada').value = vacio;
    document.getElementById('MediaServicio').value = vacio;
    document.getElementById('result').value = vacio;
    document.getElementById('por').value = vacio;

}
//////////////////////////
//////////////////////////
//////////////////////////

function probabilidad() {

    let pro = parseFloat(document.getElementById('pSistema').value);
    let cli = parseFloat(document.getElementById('nCliente').value);
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