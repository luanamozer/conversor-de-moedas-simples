var insereValor = document.querySelector("#campo");
var btnConverte = document.querySelector(".btnConverte");
var resultado = document.querySelector(".resultado");



btnConverte.addEventListener("click", function converteValor(){
   
     var valorInserido = insereValor.value;
     var total = valorInserido * 5.78;
     var valorConvertido = total.toFixed(2);

     if(valorInserido == 0 || "" ){
          resultado.style.color = 'red';
          return resultado.innerHTML = "Favor inserir um valor válido !";
     } 
    else {
         resultado.style.color = '#3E00A4';
         return  resultado.innerHTML = `O valor convertido para real é : R$ ${valorConvertido}`;
    }

});


        
       
