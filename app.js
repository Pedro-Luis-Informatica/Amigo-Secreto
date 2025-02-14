let amigos = [];
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const amigoSorteado = document.getElementById("resultado");

function agregarAmigo() {
  const amigo = inputAmigo.value.trim().toUpperCase();

  if (!amigo) {
    listaAmigos.textContent = "Debe ingresar un nombre";
    return;
  }

  if (amigos.includes(amigo)) {
    listaAmigos.textContent = "Amigo ya registrado.";
  } else {
    amigos.push(amigo);
    mostrarAmigos();
  }

  inputAmigo.value = "";
}

function mostrarAmigos() {
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  amigoSorteado.textContent = amigos.length
    ? `Amigo secreto es: ${amigos[Math.floor(Math.random() * amigos.length)]}`
    : "Lista vacía, no hay amigos.";
}
