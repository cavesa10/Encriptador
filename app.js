const containerSuccess = document.querySelector(".container_output_success");
const containerFail = document.querySelector(".container_output_fail");
const textoArea = document.querySelector("#text");
const parrafo = document.querySelector("#parrafoSuccess");

textoArea.addEventListener("input", function () {
  let text = textoArea.value;
  let newText = text.replace(/[^a-z\s\n]/g, "");
  if (newText !== text) {
    textoArea.value = newText;
  }
});

function borrar() {
  textoArea.value = "";
  textoArea.focus();
}

function encriptar() {
  if (textoArea.value === "") {
    alert('Ningún mensaje fue encontrado, ingrese el texto que desees encriptar o desencriptar')
    return
  }
  containerFail.style.display = "none";
  if (window.innerWidth > 768) {
    containerSuccess.style.display = "inline-block";
  } else {
    containerSuccess.style.display = " block";
  }

  let cadenaEncriptar = textoArea.value;

  let resultado = "";
  for (let i = 0; i < cadenaEncriptar.length; i++) {
    let char = cadenaEncriptar[i];
    if (char === "e") {
      resultado +=  "enter";
    } else if (char === "i") {
      resultado +=  "imes";
    } else if (char === "a") {
      resultado +=  "ai";
    } else if (char === "o") {
      resultado +=  "ober";
    } else if (char === "u") {
      resultado +=  "ufat";
    } else {
      resultado = resultado + char;
    }
  }
  parrafo.innerHTML = resultado.replace(/\n/g, "<br>");
}

function desencriptar() {
  if (textoArea.value === "") {
    alert('Ningún mensaje fue encontrado, ingrese el texto que desees encriptar o desencriptar')
    return
  }
  containerFail.style.display = "none";
  if (window.innerWidth > 768) {
    containerSuccess.style.display = "inline-block";
  } else {
    containerSuccess.style.display = "block";
  }
  let cadenaDesencriptar = textoArea.value;

  let resultado = "";
  for (let i = 0; i < cadenaDesencriptar.length; i++) {
    let char = cadenaDesencriptar[i];
    if (char === "e") {
      let nter =
        cadenaDesencriptar[i + 1] +
        cadenaDesencriptar[i + 2] +
        cadenaDesencriptar[i + 3] +
        cadenaDesencriptar[i + 4];
      if (nter === "nter") {
        i += 4;
      }
      resultado += char;
    } else if (char === "i") {
      let mes =
        cadenaDesencriptar[i + 1] +
        cadenaDesencriptar[i + 2] +
        cadenaDesencriptar[i + 3];
      if (mes === "mes") {
        i += 3;
      }
      resultado += char;
    } else if (char === "a") {
      let ai = cadenaDesencriptar[i + 1];
      if (ai === "i") {
        i++;
      }
      resultado += char;
    } else if (char === "o") {
      let ber =
        cadenaDesencriptar[i + 1] +
        cadenaDesencriptar[i + 2] +
        cadenaDesencriptar[i + 3];
      if (ber === "ber") {
        i += 3;
      }
      resultado += char;
    } else if (char === "u") {
      let fat =
        cadenaDesencriptar[i + 1] +
        cadenaDesencriptar[i + 2] +
        cadenaDesencriptar[i + 3];
      if (fat === "fat") {
        i += 3;
      }
      resultado += char;
    } else {
      resultado += char;
    }
  }
  parrafo.innerHTML = resultado.replace(/\n/g, "<br>");

}


  function copiarAlPortapapeles() {
    let texto = parrafo.innerText;
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert("El texto ha sido copiado al portapapeles.");
        textoArea.focus();
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
      });
  }


