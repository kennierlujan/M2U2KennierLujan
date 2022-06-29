const
    materias = document.getElementById('input-form'),
    button = document.getElementById('button')
    buttonv = document.getElementById('button2')
    valorBruto = document.getElementById('sumaMaterias')

    button.addEventListener('click', ()=>{  
    if ((materias.value < 1) || (materias.value > 8)){
        alert("El número ingresado debe estar entre 1 y 8")
    } else{      
        consultar(); // Llamo la función consultar  
     }});

function generateInputs(form, input) {
    x = input.value;
    if ((x < 1) || (x > 8)){
        alert("El número ingresado debe estar entre 1 y 8");{return;}
    }
    for (y = 0; x > y; y++) {
        var element = document.createElement('input');
        element.type = "number";
        element.placeholder = "Valor de la materia";
        element.className = "clasematerias"; // Creo la clasematerias para cada input creado
        form.appendChild(element);
    }
}

//Creo esta función llamada consultar que se va a encargar de leertodos los objetos que tienen la clase
//llamada clase materias
function consultar(event) {
    let e = event || window.event;
    e.preventDefault();
    const items = document.getElementsByClassName("clasematerias")
    
    //console.log("Se han registrado: " + items.length);
    let valortotal = 0; // Esta variable me va a servir para sumar los valores

    // Creo un for para recorrer todos los items con esa clase
    for (let x = 0; x < items.length; x++) {        
        valortotal = valortotal + parseInt(items[x].value) // Uso parseInt para convertir el valor a numérico
    }
    alert( "La suma de valores de las materias es: " + valortotal)
} //Fin de la función consultar

