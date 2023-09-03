//console.log('todo en orden!')

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log('me diste un click')

    var datos = new FormData(formulario);

    //console.log(datos.get('email')) //Obtengo del campo inputo el atributo name del formulario

    fetch('post.php', {
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            var lowercase = data.toLowerCase();
            console.log(lowercase)
            if(data === "error"){
                respuesta.innerHTML = `
                <div class="alert alert-danger role="alert">
                    Llena todos los campos
                </div>`
            }else{

                respuesta.innerHTML = `
                <div class="alert alert-primary role="alert">
                    ${lowercase}
                </div>`
            }
        })
})