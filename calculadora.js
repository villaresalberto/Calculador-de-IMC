window.onload = iniciar;

function iniciar(){
    let btnCalcular = document.getElementById('btnCalcular');

    btnCalcular.addEventListener('click', clickBtnCalcular);

}

function clickBtnCalcular(){
    let txtPeso = document.getElementById('txtPeso');
    let peso = txtPeso.value;

    let txtAltura = document.getElementById('txtAltura');
    let altura = txtAltura.value;

    let imc = peso / (altura*altura);
    alert ("El IMC es: " + Math.round(imc)); 
}

/*
document.getElementById('btnCalcular').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores de los campos de texto
    let peso = parseFloat(document.getElementById('textPeso').value);
    let altura = parseFloat(document.getElementById('textAltura').value);

    // Verifica que los valores ingresados sean números válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingresa valores válidos para peso y altura.");
        return;
    }

    // Calcula el IMC
    let imc = peso / (altura * altura);

    // Redondea el resultado a dos decimales
    imc = imc.toFixed(2);

    // Muestra el resultado en una alerta o lo puedes agregar al DOM
    alert("Tu IMC es " + imc);

    // También puedes mostrar el resultado en la página en lugar de una alerta
    // Descomenta las siguientes líneas si prefieres esta opción:
    
    let resultado = document.createElement('p');
    resultado.textContent = "Tu IMC es " + imc;
    document.body.appendChild(resultado);
    
});
*/