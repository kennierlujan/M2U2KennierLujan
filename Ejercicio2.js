const
    a = document.getElementById('numerouno'), 
    b = document.getElementById('numerodos'), 
    c = document.getElementById('numerotres'), 
    d = document.getElementById('numerocuatro'), 
    boton = documen.getElementById('boton'),
    parrafoMayor = document.getElementById('resultadoMayor'),
    parrafoMenor = document.getElementById('resultadoMenor'),
    

        
        boton.addEventListerner('click', ()=>{
            if((a.value == b.value) || (a.value == c.value) || (a.value == d.value)){
                alert('No se pueden ingresar números repetidos')
        }else if((b.value == c.value) || (b.value == d.value)){
            alert('No se pueden ingresar números repetidos')
        }else if(c.value == d.value){
            alert('No se pueden ingresar números repetidos')
        }else{
            let valorMayor = Math.max(a.value, b.value, c.value, d.value)
            if (valorMayor == a.value) {
                parrafoMayor.innerHTML = 'El número mayor es: ' + valorMayor
            }else if(valorMayor == b.value) {
                parrafoMayor.innerHTML = 'El número mayor es: ' + valorMayor
            }else if(valorMayor == c.value) {
                parrafoMayor.innerHTML = 'El número mayor es: ' + valorMayor
            }else if(valorMayor == d.value) {
                parrafoMayor.innerHTML = 'El número mayor es: ' + valorMayor
            }

            let valorMenor = Math.min(a.value, b.value, c.value, d.value)
            if (valorMenor == a.value) {
                parrafoMenor.innerHTML = 'El número mayor es: ' + valorMenor
            }else if(valorMenor == b.value) {
                parrafoMenor.innerHTML = 'El número mayor es: ' + valorMenor
            }else if(valorMenor == c.value) {
                parrafoMayor.innerHTML = 'El número mayor es: ' + valorMenor
            }else if(valorMenor == d.value) {
                parrafoMenor.innerHTML = 'El número mayor es: ' + valorMenor
            }
    }
}
        )
