// Index
function actividad() {
  let ejer = document.getElementById("actividad").value;
  window.location.href = "./actividades/" + ejer + ".html";
}

// General
const descripcion = document.getElementById("descripcion");
if (descripcion) {
  descripcion.addEventListener("click", () => {
    if (!modal.open) window.modal.showModal();
  });
}

const cerrar = document.getElementById("cerrar");
if (cerrar) {
  cerrar.addEventListener("click", () => {
    window.modal.close();
  });
}
