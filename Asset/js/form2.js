function getFormData2() {
    var config = {};
    $('input').each(function () {
        config[this.id] = this.value;
    });
    alert("Muchas Gracias " + config.nombre+"hemos residivo su reserva y \n enviaremos una pronta respuesta de confirmacion \nal correo "+ config.exampleInputEmail1);
}