const form = document.getElementById('formulario');
form.addEventListener("submit", agregarFormulario );

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const documento = document.getElementById('documento');
const mail = document.getElementById('email');
const textarea = document.getElementById('textarea')


function agregarFormulario (e) {
    e.preventDefault();

    if(nombre.value == "" || apellido.value == "" || documento.value == "" || mail.value == ""){
        Swal.fire({
            icon: 'error',
            title: 'No se pudo enviar el formulario',
            text: 'Por favor, complete todos los datos',
            timer: 2000
          })
    } else {
        Swal.fire({            
            icon: 'success',
            title: 'El formulario ha sido enviado',
            text: 'Te estaremos respondiendo cuanto antes!!'            
        })
}

};