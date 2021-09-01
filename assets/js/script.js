const relogio = document.querySelector(".relogio");
const butaoIniciar = document.querySelector(".iniciar");
const butaoParar = document.querySelector(".parar");
const butaoZerar = document.querySelector(".reset");

let contador = 0;
let timer;

function iniciarRelogio() {
   timer = setInterval(function () {
      contador++;
      relogio.innerHTML = criarHoraDosSegundos(contador);
   }, 1000);
}

function criarHoraDosSegundos(segundos) {
   const data = new Date(segundos * 1000);
   return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
   });
}

butaoIniciar.addEventListener("click", function () {
   clearInterval(timer);
   iniciarRelogio();
});

butaoParar.addEventListener("click", function () {
   clearInterval(timer);
   relogio.classList.add("pausar");
   relogio.classList.remove("relogio");
});

butaoZerar.addEventListener("click", function () {
   clearInterval(timer);
   contador = 0
   relogio.innerHTML = "00:00:00";
   relogio.classList.remove("pausar");
   relogio.classList.add("relogio");
});
