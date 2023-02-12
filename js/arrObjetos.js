const listados = {
  listado: "Listado de coches",
  otro: "Otro listado de coches",
  mas: "Otro listado de coches más",
  cuantos: "No se cuantos listados de coches",
};

const tablas = document.getElementById("tablas");
for (const l in listados) {
  tablas.innerHTML += `
  <div class="table-responsive">
    <span class="fs-5 font-monospace">${listados[l]}</span>
    <table class="table table-striped table-dark align-middle">
      <tbody id="${l}"></tbody>
    </table>
  </div>`;
}

const listado = document.getElementById("listado");
coches.forEach((c) => {
  listado.innerHTML += `<tr>
    <td>
      ${c.matricula} ${c.marca} ${c.modelo}<br>
      <b>propietario: </b>${c.propietario.toString()}
    </td>
  </tr>`;
});

const otro = document.getElementById("otro");
coches.forEach((c) => {
  otro.innerHTML += `<tr>
    <td>${c.matricula}</td>
    <td>${c.marca}</td>
    <td>${c.modelo}</td>
    <td>${c.propietario.toString()}</td>
  </tr>`;
});

const mas = document.getElementById("mas");
coches.forEach((c) => {
  mas.innerHTML += `<tr>
    <td>${c.matricula}</td>
    <td>${c.marca}</td>
    <td>${c.modelo}</td>
    <td>${c.propietario.nombreCompleto()} ${c.propietario.nombre}</td>
  </tr>`;
});

const cuantos = document.getElementById("cuantos");
coches.forEach((c) => {
  cuantos.innerHTML += `<tr>
    <td>${c.matricula}</td>
    <td>${c.marca}</td>
    <td>${c.modelo}</td>
    <td>${c.propietario.nombre}</td>
    <td>${c.propietario.apellidos}</td>
    <td>${c.propietario.direccion}</td>
  </tr>`;
});
