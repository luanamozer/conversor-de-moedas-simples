var insereValor = document.querySelector("#campo");
var converter = document.querySelector(".btnConvert");
var resultado = document.querySelector(".resultado");

converter.addEventListener("click", function converte(){
         var valorInserido = insereValor.value;
         var total = valorInserido * 5.50.toFixed(2);    
        resultado = document.write(`O valor convertido para real é : ${total}`);
   }); 