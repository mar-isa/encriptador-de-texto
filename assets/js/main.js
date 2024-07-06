const campoUsuario = document.getElementById("txt-usuario"),
    campoResultado = document.getElementById("txt-resultado");

let aceptarTexto = false;
let textoUsuario;

const validarTexto = () => {
    campoResultado.value = "";
    textoUsuario = campoUsuario.value;
    if (/^[a-z ]+$/.test(textoUsuario)) {
        aceptarTexto = true;
        return (textoUsuario = textoUsuario.split(" "));
    } else {
        aceptarTexto = false;
        let textoAdvertencia = document.querySelector(".alert");
        textoAdvertencia.classList.add("error");
        setTimeout(() => {
            campoUsuario.value = "";
            textoAdvertencia.classList.remove("error");
        }, 1800);
    }
};

const modificarInterfaz = (num) => {
    document.querySelector(".wrapper-img").style.display = "none";
    campoResultado.style.display = "block";
    document.querySelector(".wrapper-text").textContent =
        num === 1 ? "Texto encriptado" : "Texto desencriptado";
};

const encriptarTexto = () => {
    validarTexto();
    if (aceptarTexto) {
        let palabrasEncriptadas = [];
        for (let palabra of textoUsuario) {
            palabra = palabra.replace("e", "enter");
            palabra = palabra.replace("i", "imes");
            palabra = palabra.replace("a", "ai");
            palabra = palabra.replace("o", "ober");
            palabra = palabra.replace("u", "ufat");
            palabrasEncriptadas.push(palabra);
        }
        campoUsuario.value = "";
        campoResultado.value = palabrasEncriptadas.join(" ");
        modificarInterfaz(1);
    }
};

const desencriptarTexto = () => {
    validarTexto();
    if (aceptarTexto) {
        console.log(textoUsuario);
        let palabrasDesencriptadas = [];
        for (let palabra of textoUsuario) {
            palabra = palabra.replaceAll("enter", "e");
            palabra = palabra.replaceAll("imes", "i");
            palabra = palabra.replaceAll("ai", "a");
            palabra = palabra.replaceAll("ober", "o");
            palabra = palabra.replaceAll("ufat", "u");
            palabrasDesencriptadas.push(palabra);
        }
        campoUsuario.value = "";
        campoResultado.value = palabrasDesencriptadas.join(" ");
        modificarInterfaz(0);
    }
};

document
    .querySelector(".btn_encriptar")
    .addEventListener("click", encriptarTexto);
document
    .querySelector(".btn_desencriptar")
    .addEventListener("click", desencriptarTexto);
document.querySelector(".btn_copiar").addEventListener("click", () => {
    navigator.clipboard.writeText(campoResultado.value);
});
