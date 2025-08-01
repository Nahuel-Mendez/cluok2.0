document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.reservation-form')
    .addEventListener('submit', function (e) {
      e.preventDefault();

      const nombre = document.getElementById('name').value;
      const servicio = document.getElementById('service').value;
      const fecha = document.getElementById('date').value;
      const mensaje = document.getElementById('message').value;

      const numero = '59891340661';
      const texto = `Hola! Soy ${nombre}. Quiero reservar un turno para ${servicio} el día ${fecha}.%0AMensaje: ${mensaje}`;

      const url = `https://wa.me/${numero}?text=${texto}`;
      window.open(url, '_blank');
    });
});
