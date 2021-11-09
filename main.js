const r_meses = document.getElementById("rMeses");
const r_interes = document.getElementById("rInteres");
const v_meses = document.getElementById("mesesValue");
const v_interes = document.getElementById("interesValue");
const prestamo = document.getElementById("prestamo");
const cuota = document.getElementById("cuota");

 v_meses.value= r_meses.value;
 v_interes.value = r_interes.value;


r_meses.oninput = function() {
    v_meses.value = this.value;
  }

r_interes.oninput = function() {
v_interes.value = this.value;
}

function calcularCuota() {
    if (prestamo.value <= 0){
        cuota.innerText="El valor del préstamo tiene que ser mayor a 0";
    }else if(v_meses.value <= 0){
        cuota.innerText="El número de meses tiene que ser mayor a 0";
    }else if(v_interes.value <= 0){
        cuota.innerText="El valor del interes tiene que ser mayor a 0";
    }else{
        let cuotam = ecuacionCuota();
        cuota.innerText=`${cuotam.toFixed(2)} €`;
    }

}

function ecuacionCuota(){
    // P/((1-(1+i)^-n)/i) ecuación para calcular la cuota.
    const i_men = (v_interes.value/100)/12;
    let part_exp = (1+i_men);
    part_exp = Math.pow(part_exp,-v_meses.value);
    return prestamo.value/((1-part_exp)/i_men);
}
