function cambiarTraje(nuevaImagen, nuevoColor) {
  const personaje = document.getElementById("personaje");
  personaje.src = nuevaImagen;
  document.body.style.backgroundColor = nuevoColor;
}
