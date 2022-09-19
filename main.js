(function () {
    calculoLineas();
    setInterval(() => {
        calHoraGrado();
        calMinuGrado();
        calSegGrado();
    },1000); 
})();

function calculoGrados(valor, min, max, nMin, nMax) {
    return nMin + (nMax - nMin) * (valor - min) / (max - min);
}

function calHoraGrado() {
    var horaActual = new Date();
    var horaA = horaActual.getHours()-12;
    var angulo = calculoGrados(horaA, 0, 12, 0, 360);
    document.querySelector(".horas").style.transform = `rotate(${angulo}deg)`;
}

function calMinuGrado() {
    const minutoActual = new Date().getMinutes();
    const angulo = calculoGrados(minutoActual, 0, 60, 0, 360);
    document.querySelector(".minutos").style.transform = `rotate(${angulo}deg)`;
}
function calSegGrado() {
    const segundoActual = new Date().getSeconds();
    const angulo = calculoGrados(segundoActual, 0, 60, 0, 360);
    document.querySelector(".segundos").style.transform = `rotate(${angulo}deg)`;
}

function calculoLineas(){
    const lineas = document.querySelectorAll(".linea");
    const nuLineas = lineas.length;
    for (let i = 0; i < nuLineas; i++) {
      const linea = lineas[i];
      const angulo = calculoGrados(i, 0, nuLineas, 0, 360);
      linea.style.transform = `rotate(${angulo}deg)`;
    } 
}