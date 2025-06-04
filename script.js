function criarCoracoes() {
  const fundo = document.querySelector('.background-animation');

  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';

    const size = 10 + Math.random() * 20;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 5 + Math.random() * 5 + 's';

    fundo.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }, 300);
}

function mostrarSegundaTela() {
  document.getElementById("screen1").classList.add("hidden");
  document.getElementById("screen2").classList.remove("hidden");

  criarCoracoes(); 
}
