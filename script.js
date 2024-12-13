// Función para cambiar al modo oscuro
const modoOscuroBtn = document.getElementById('modoOscuroBtn');

modoOscuroBtn.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
  if (document.body.classList.contains('modo-oscuro')) {
    modoOscuroBtn.textContent = '🌞';
  } else {
    modoOscuroBtn.textContent = '🌙';
  }
});

// Animaciones de Scroll: cuando se hace scroll hacia abajo
window.addEventListener('scroll', () => {
  const elementos = document.querySelectorAll('.animate__animated');
  const alturaPantalla = window.innerHeight;

  elementos.forEach((elemento) => {
    const posicionElemento = elemento.getBoundingClientRect().top;

    if (posicionElemento < alturaPantalla) {
      elemento.classList.add('animate__fadeInUp');
    }
  });
});
