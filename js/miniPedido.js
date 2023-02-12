const tabla = document.getElementById("contenido-tabla");

const getCookie = (name) => {
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.startsWith(`${name}=`));
  return cookie ? cookie.split("=")[1] : "";
};

const pedidos = getCookie("pedido")
  .split("+")
  .map((v) => Number(v));

let total = 0;
pedidos.forEach((num, i) => {
  if (num !== 0) {
    articulos[i].cantidad = num;
    let precio = num * articulos[i].precio;
    tabla.innerHTML += `<tr>
      <td>${articulos[i].mostrar()} = ${precio.toFixed(2)} €</td>
    </tr>`;
    total += precio;
  }
});

tabla.innerHTML += `<tr><th>Total = ${total.toFixed(2)} €</th></tr>`;
