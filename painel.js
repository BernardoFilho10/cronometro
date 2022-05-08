var horas = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000;
var cron;

function iniciar() {
    cron = setInterval(() => { timer()},tempo);
}

function pausar(){
    clearInterval(cron);
}

 function limpar(){
     clearInterval(cron)
     horas = 0;
     minutos = 0;
     segundos = 0;

     document.getElementById("cronometro").innerHTML= "00:00:00";
 }

 function timer(){
     segundos++; 
     if(segundos == 60){
         segundos = 0;
         minutos++;
     }
     if(minutos == 60){
         minutos = 0;
         horas++
     }
     var formato = (horas < 10 ? '0'+ horas : horas) + ':' + (minutos < 10 ? '0'+ minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos)
     document.getElementById("cronometro").innerText = formato
    }

      