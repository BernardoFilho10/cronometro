let horas = 0;
let minutos = 0;
let segundos = 0;
let contador = 0;
let tempo = 1000;
let cron;

function iniciar() {
    if (contador === 0) cron = setInterval(() => { timer()},tempo);
    contador++
  
}

function pausar(){
    clearInterval(cron);
    contador = 0;
   
}

 function limpar(){
     clearInterval(cron)
     horas = 0;
     minutos = 0;
     segundos = 0;

     document.getElementById("cronometro").innerHTML= "00:00:00";
     
     contador = 0;
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


     let formato = (horas < 10 ? '0'+ horas : horas) + ':' + (minutos < 10 ? '0'+ minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos)
     document.getElementById("cronometro").innerText = formato
    }

      