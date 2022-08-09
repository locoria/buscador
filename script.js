const promociones = [
    {nombre: 'gastronomia'},
    {nombre: 'espectaculos'},
    {nombre: 'supermiercoles'},
    {nombre: 'viajes'},
    {nombre: 'sorpresa'},
    {nombre: 'women'},
    {nombre: 'visa'},
    {nombre: 'amex'},
    {nombre: 'mastercard'},
    {nombre: 'superclub'},
    {nombre: 'nova'},
]

localStorage.setItem('promociones', JSON.stringify(promociones))

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = ()=>{
    resultado.innerHTML = ''; 

const texto = formulario.value.toLowerCase();

for(let promocion of promociones){
    let nombre = promocion.nombre.toLocaleLowerCase(); 
    if(nombre.indexOf(texto) !== -1){
    resultado.innerHTML += `
    <li>${promocion.nombre} </li>
    `
 
}
}

if(resultado.innerHTML === ''){
    resultado.innerHTML += `
    <li>Promocion no encontrada... </li>
    `

}

}

if(localStorage.getItem('buscar')) {
    boton = localStorage.getItem(buscar)
} else {
    localStorage.setItem(buscar)
}

boton.addEventListener('click' , filtrar , () => {
    localStorage.setItem(buscar)


}
)

const boton = document.getElementById("boton")

boton.addEventListener('click' , () => {
    Toastify({
        text: "Promociones encontradas",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
        
    }
})

