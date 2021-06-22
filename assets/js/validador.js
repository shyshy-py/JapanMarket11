$("#formulario").validate({
    rules: {
        txtNombre: {
            required: true,
            minlength: "4",
        },
        txtEmail: {
            required: true,
            email: true,
        },
        txtAsunto: {
            required: true,
            minlength: "8",
        },
        txtMensaje: {
            required: true,
            minlength: "4",
            maxlength: "100",
        },
        terminos: {
            required: true,
        },
    },
    messages: {
        txtNombre:{
            required: "El nombre es un campo obligatorio",
            minlength: "Minimo 4 caracteres",
            
        },
        txtEmail: {
            required: "El email es un campo obligatorio",
            email: "No cumple con el formato de email",
        },
        txtAsunto: {
            required: "El asunto es un campo obligatorio",
            minlength: "Minimo 8 caracteres",
        },
        txtMensaje: {
            required: "el mensaje es un campo obligatorio",
            minlength: "El minimo de caracteres es 4",
            maxlength: "Maximo 100 caracteres",
        },
        terminos: {
            required: "Debe aceptar los terminos",
        },
    },
});