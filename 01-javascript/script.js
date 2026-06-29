// Ejercicio: Filtrado de resultados con evento change
// Punto de partida: HTML estático + delegación de botones "Aplicar"

const jobsListingSection = document.querySelector(".jobs-listings");

// --- YA EXISTE: Delegación botones "Aplicar" ---
jobsListingSection.addEventListener("click", function (event) {
  const btn = event.target;
  if (btn.classList.contains("button-apply-job")) {
    btn.textContent = "¡Aplicado!";
    btn.classList.add("is-applied");
    btn.disabled = true;
  }
});

// --- TU EJERCICIO: Filtrar por tecnología ---
const filterTecnologia = document.querySelector("#filter-technology");

filterTecnologia.addEventListener("change", function () {
  const tecnologia = this.value.toLowerCase();
  const tarjetas = jobsListingSection.querySelectorAll(".job-listing-card");

  tarjetas.forEach(function (tarjeta) {
    const texto = tarjeta.textContent.toLowerCase();

    if (tecnologia === "" || texto.includes(tecnologia)) {
      tarjeta.classList.remove("is-hidden");
    } else {
      tarjeta.classList.add("is-hidden");
    }
  });
});

// --- BONUS: Filtros combinados (ubicacion + experiencia) ---
// const filterUbicacion = document.querySelector('#location')
// const filterExperiencia = document.querySelector('#experience-level')

// function filtrarTodo() {
//   const tech = filterTecnologia.value.toLowerCase()
//   const ubic = filterUbicacion.value.toLowerCase()
//   const exp = filterExperiencia.value.toLowerCase()

//   const tarjetas = jobsListingSection.querySelectorAll('.job-listing-card')
//   tarjetas.forEach(function (tarjeta) u
//     const texto = tarjeta.textContent.toLowerCase()
//     const matchTech = tech === '' || texto.includes(tech)
//     const matchUbic = ubic === '' || texto.includes(ubic)
//     const matchExp = exp === '' || texto.includes(exp)
//     tarjeta.classList.toggle('is-hidden', !(matchTech && matchUbic && matchExp))
//   })
// }

// filterUbicacion.addEventListener('change', filtrarTodo)
// filterExperiencia.addEventListener('change', filtrarTodo)
