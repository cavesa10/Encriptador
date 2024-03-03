const containerSuccess = document.querySelector(".container_output_success")
const containerFail = document.querySelector(".container_output_fail")
const textoArea = document.querySelector('#text')
const parrafo = document.querySelector('#parrafoSuccess')



// textoArea.addEventListener("input", function() {
//   containerFail.style.display = 'none'
//   containerSuccess.style.display = 'inline-block'
//   setTimeout(function() {
//     parrafo.textContent = textoArea.value;
//     parrafo.innerHTML = textoArea.value.replace(/\n/g, "<br>");
//   }, 1000); // 1000 milisegundos = 1 segundo
// });

textoArea.addEventListener("input", function() {
  var text = textoArea.value;
  var newText = text.replace(/[^a-z\s\n]/g, "");
  if (newText !== text) {
    textoArea.value = newText;
  }
});

function borrar() {
  textoArea.value = ''
}

 function encriptar() {
   containerFail.style.display = 'none'
   containerSuccess.style.display = 'inline-block'
   parrafo.innerHTML = textoArea.value.replace(/\n/g, "<br>");
 }

 function desencriptar(){
  
 }