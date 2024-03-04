const containerSuccess = document.querySelector(".container_output_success");
const containerFail = document.querySelector(".container_output_fail");
const textoArea = document.querySelector("#text");
const parrafo = document.querySelector("#parrafoSuccess");

// textoArea.addEventListener("input", function() {
//   containerFail.style.display = 'none'
//   containerSuccess.style.display = 'inline-block'
//   setTimeout(function() {
//     parrafo.textContent = textoArea.value;
//     parrafo.innerHTML = textoArea.value.replace(/\n/g, "<br>");
//   }, 1000); // 1000 milisegundos = 1 segundo
// });

textoArea.addEventListener("input", function () {
  let text = textoArea.value;
  let newText = text.replace(/[^a-z\s\n]/g, "");
  if (newText !== text) {
    textoArea.value = newText;
  }
});

function borrar() {
  textoArea.value = "";
}

function encriptar() {
  containerFail.style.display = "none";
  containerSuccess.style.display = "inline-block";

  let cadenaEncriptar = textoArea.value;

  let resultado = '';
  for (let i = 0; i < cadenaEncriptar.length; i++) {
    let char = cadenaEncriptar[i];
    if (char === 'e') {
      resultado = resultado + 'enter';
    } else if (char === 'i') {
      resultado = resultado + 'imes';
    } else if (char === 'a') {
      resultado = resultado + 'ai';
    } else if (char === 'o') {
      resultado = resultado + 'ober';
    } else if (char === 'u') {
      resultado = resultado + 'ufat';
    } else {
      resultado = resultado + char;
    }
  }
  parrafo.innerHTML = resultado.replace(/\n/g, "<br>");
}

function desencriptar() {
  containerFail.style.display = "none";
  containerSuccess.style.display = "inline-block";
/*   let cadenaDesencriptar = textoArea.value;
  cadenaDesencriptar = cadenaDesencriptar.replaceAll("ai", "a");
  cadenaDesencriptar = cadenaDesencriptar.replaceAll("enter", "e");
  cadenaDesencriptar = cadenaDesencriptar.replaceAll("imes", "i");
  cadenaDesencriptar = cadenaDesencriptar.replaceAll("ober", "o");
  cadenaDesencriptar = cadenaDesencriptar.replaceAll("ufat", "u");
  parrafo.innerHTML = cadenaDesencriptar.replace(/\n/g, "<br>"); */
}

