
function calcular(){
    var vara = document.getElementById("var-1").value;
    var var2 = document.getElementById("var-2").value;
    
    if((vara=="")||(var2=="")){
        alert("Debe ingresar valores")
    } else { 
        if(vara<var2){
            var mensaje = var2 + " es mayor que " + vara;
            document.getElementById("respuesta").textContent = mensaje;
        } else if (var2<vara){
            var mensaje = vara + " es mayor que " + var2;
            document.getElementById("respuesta").textContent = mensaje;
        } else {
            document.getElementById("respuesta").textContent = "Ambos numeros son iguales";
        }
    }

}

function limpiar(){
    document.getElementById("var-1").value ="";
    document.getElementById("var-2").value ="";
    document.getElementById("respuesta").textContent = "";
}