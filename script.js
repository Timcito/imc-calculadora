document.getElementById("imc-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);

  if (!peso || !alturaCm || peso <= 0 || alturaCm <= 0) {
    alert("Por favor, ingresa valores válidos.");
    return;
  }

  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);
  const imcRedondeado = imc.toFixed(2);

  let clasificacion = "";

  if (imc < 16) {
    clasificacion = "Delgadez severa";
  } else if (imc < 17) {
    clasificacion = "Delgadez moderada";
  } else if (imc < 18.5) {
    clasificacion = "Delgadez aceptable";
  } else if (imc < 25) {
    clasificacion = "Peso normal";
  } else if (imc < 30) {
    clasificacion = "Sobrepeso";
  } else if (imc < 35) {
    clasificacion = "Obesidad tipo I";
  } else if (imc <= 40) {
    clasificacion = "Obesidad tipo II";
  } else {
    clasificacion = "Obesidad tipo III";
  }

  document.getElementById("imc-valor").textContent = imcRedondeado;
  document.getElementById("imc-clasificacion").textContent = clasificacion;

  const resultado = document.getElementById("resultado-container");
  resultado.classList.remove("oculto");
  resultado.scrollIntoView({ behavior: "smooth" });
});
