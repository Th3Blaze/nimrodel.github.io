function getFormData() {
    var config = {};
    var first_select = document.getElementById('inputState').value;
    $('input').each(function () {
        config[this.id] = this.value;
    });
    alert("Muchas Gracias " + config.nombre+ " hemos residivo su " + first_select + " y \n enviaremos una pronta respuesta al correo " + config.exampleInputEmail1);
}