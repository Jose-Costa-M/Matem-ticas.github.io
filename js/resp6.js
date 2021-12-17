function verificarRespuestas(){
 
    
    var total = 10;
    var puntos = 0;
    var myForm = document.forms["quizForm"];
    var respuestas = ["c", "d", "a", "a", "d", "a", "c","a","d","d"];  
    var error = []; 

  for(var i = 1 ; i <= total; i++)
  {
        if(myForm["p" + i].value === null || myForm["p" + i].value === "")
        {
            Swal.fire({
              title : 'Por favor responde la pregunta '+i,
              icon : 'warning',
              footer: '<span class ="title">Verifica si todas las preguntas tienen respuesta :)</span>',
              allowOutsideClick: true,
              allowEscapeKey: true,
              allowEnterKey: true,
              stopKeydownPropagation: false,
          });
            return false; 
        }
        else
        {
            if(myForm["p" + i].value === respuestas[i - 1] )
            {
                  puntos ++;
            }
            else
            {
                error.push(i); 
            }
        
        }
  }
    
    if(error.length === 0)
    {
    error.push(0); 
    }

  document.getElementById('submit').disabled=true;
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = '<h3>Obtuviste <span>' + puntos + '</span> de <span>' + total + 'puntos</span></br>Preguntas erroneas: <span>'+error+', '+'</span> </h3>';
  

  return false; 

}

$("#submit").click(function(){

  Swal.fire(
      {
          title : 'Examen completado, verifica tus respuestas.',
          icon : 'success',
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          stopKeydownPropagation: false,
         
      }
  ); 

} ); 