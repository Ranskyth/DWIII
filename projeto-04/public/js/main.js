// Fetch trails and render
async function loadTrilhas() {
  try {
    const res = await fetch('/api/trilhas');
    const trilhas = await res.json();
    const container = document.getElementById('trilhas-list');
    if (!container) return;
    container.innerHTML = trilhas.map(trilha => `
      <div class="trail-card" data-reveal>
        <div>
          <h3>${trilha.titulo}</h3>
          <p>${trilha.descricao}</p>
        </div>
        <a href="/trilha/${trilha.slug}">Ver detalhes →</a>
      </div>
    `).join('');
  } catch (err) {
    console.error('Erro ao carregar trilhas:', err);
  }
}

// Fetch schedule and render
async function loadProgramacao() {
  try {
    const res = await fetch('/api/programacao');
    const prog = await res.json();
    const container = document.getElementById('programacao-list');
    if (!container) return;
    const mostra = prog.slice(0, 6);
    container.innerHTML = mostra.map(item => `
      <div class="prog-item" data-reveal>
        <strong>${item.hora}</strong>
        <p>${item.titulo} <span class="muted">· ${item.trilha}</span></p>
        <small>${item.palestrante}</small>
      </div>
    `).join('');
  } catch (err) {
    console.error('Erro ao carregar programação:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadTrilhas();
  loadProgramacao();
  
  // Reveal on scroll
  const reveals = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
});