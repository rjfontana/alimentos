// Firebase App (the core Firebase SDK) is always required and must be listed first
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmIFOOiaZJW8cQEvxuFijEm9qeLqvrFNs",
  authDomain: "alimentos-29ade.firebaseapp.com",
  projectId: "alimentos-29ade",
  storageBucket: "alimentos-29ade.appspot.com",
  messagingSenderId: "28130326094",
  appId: "1:28130326094:web:74007187301efb3af1751f",
  measurementId: "G-HBWJS0HEHK"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
// Para salvar no banco, use:
firebase.database().ref('participantes').push({
  nome: "Exemplo",
  acertos: 10,
  data: new Date().toISOString()
});

const alimentosData = [
  { src: "maca.png", categoria: "in-natura", nome: "Maçã" },
  { src: "arroz.png", categoria: "minimamente", nome: "Arroz" },
  { src: "refrigerante.png", categoria: "ultraprocessado", nome: "Refrigerante" },
  { src: "cenoura.png", categoria: "in-natura", nome: "Cenoura" },
  { src: "pao.png", categoria: "minimamente", nome: "Pão" },
  { src: "batatafrita.png", categoria: "ultraprocessado", nome: "Batata Frita" },
  { src: "iogurte.png", categoria: "minimamente", nome: "Iogurte" },
  { src: "pizza.png", categoria: "ultraprocessado", nome: "Pizza" },
  { src: "leite.png", categoria: "minimamente", nome: "Leite" },
  { src: "biscoito.png", categoria: "ultraprocessado", nome: "Biscoito" },
  { src: "banana.png", categoria: "in-natura", nome: "Banana" },
  { src: "alface.png", categoria: "in-natura", nome: "Alface" },
  { src: "salsicha.png", categoria: "ultraprocessado", nome: "Salsicha" },
  { src: "queijo.png", categoria: "minimamente", nome: "Queijo" },
  { src: "biscoito_recheado.png", categoria: "ultraprocessado", nome: "Biscoito Recheado" },
  { src: "pera.png", categoria: "in-natura", nome: "Pera" },
  { src: "uva.png", categoria: "in-natura", nome: "Uva" },
  { src: "laranja.png", categoria: "in-natura", nome: "Laranja" },
  { src: "abacaxi.png", categoria: "in-natura", nome: "Abacaxi" },
  { src: "manga.png", categoria: "in-natura", nome: "Manga" },
  { src: "beterraba.png", categoria: "in-natura", nome: "Beterraba" },
  { src: "tomate.png", categoria: "in-natura", nome: "Tomate" },
  { src: "batata.png", categoria: "in-natura", nome: "Batata" },
  { src: "abobrinha.png", categoria: "in-natura", nome: "Abobrinha" },
  { src: "morango.png", categoria: "in-natura", nome: "Morango" },
  { src: "feijao.png", categoria: "minimamente", nome: "Feijão" },
  { src: "aveia.png", categoria: "minimamente", nome: "Aveia" },
  { src: "farinha_trigo.png", categoria: "minimamente", nome: "Farinha de Trigo" },
  { src: "milho.png", categoria: "minimamente", nome: "Milho" },
  { src: "azeite.png", categoria: "minimamente", nome: "Azeite" },
  { src: "frango.png", categoria: "minimamente", nome: "Frango" },
  { src: "carne_bovina.png", categoria: "minimamente", nome: "Carne Bovina" },
  { src: "peixe.png", categoria: "minimamente", nome: "Peixe" },
  { src: "presunto.png", categoria: "ultraprocessado", nome: "Presunto" },
  { src: "mortadela.png", categoria: "ultraprocessado", nome: "Mortadela" },
  { src: "achocolatado.png", categoria: "ultraprocessado", nome: "Achocolatado" },
  { src: "sorvete.png", categoria: "ultraprocessado", nome: "Sorvete" },
  { src: "cereal_matinal.png", categoria: "ultraprocessado", nome: "Cereal Matinal" },
  { src: "bala.png", categoria: "ultraprocessado", nome: "Bala" },
  { src: "chocolate.png", categoria: "ultraprocessado", nome: "Chocolate" },
  { src: "energetico.png", categoria: "ultraprocessado", nome: "Energético" },
  { src: "macarrao_instantaneo.png", categoria: "ultraprocessado", nome: "Macarrão Instantâneo" },
  { src: "hamburguer.png", categoria: "ultraprocessado", nome: "Hambúrguer" },
  { src: "nuggets.png", categoria: "ultraprocessado", nome: "Nuggets" },
  { src: "pipoca_micro.png", categoria: "ultraprocessado", nome: "Pipoca de Micro-ondas" },
  { src: "suco_caixinha.png", categoria: "ultraprocessado", nome: "Suco de Caixinha" },
  { src: "maionese.png", categoria: "ultraprocessado", nome: "Maionese" },
  { src: "ketchup.png", categoria: "ultraprocessado", nome: "Ketchup" },
  { src: "batata_palha.png", categoria: "ultraprocessado", nome: "Batata Palha" },
  { src: "wafer.png", categoria: "ultraprocessado", nome: "Wafer" },
  { src: "bolo_industrializado.png", categoria: "ultraprocessado", nome: "Bolo Industrializado" },
  { src: "salgadinho.png", categoria: "ultraprocessado", nome: "Salgadinho" },
  { src: "iogurte_saborizado.png", categoria: "ultraprocessado", nome: "Iogurte Saborizado" }
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let acertos = 0;
let total = alimentosData.length; // Mostra todos os alimentos
let rodada = alimentosData; // Todos aparecem

function renderAlimentos() {
  const alimentosDiv = document.getElementById('alimentos');
  alimentosDiv.innerHTML = '';
  shuffle(alimentosData);
  rodada = alimentosData;
  rodada.forEach((item, idx) => {
    const img = document.createElement('img');
    img.src = item.src;
    img.className = 'draggable';
    img.setAttribute('data-category', item.categoria);
    img.setAttribute('data-id', idx);
    img.setAttribute('draggable', true);
    img.setAttribute('alt', item.nome);
    img.title = item.nome;
    alimentosDiv.appendChild(img);
  });
}

function atualizarScore() {
  document.getElementById('score').innerHTML = `<span style='color:#007bff'>Acertos: ${acertos} de ${total}</span>`;
}

function resetGame() {
  acertos = 0;
  renderAlimentos();
  atualizarScore();
  document.getElementById('feedback').innerHTML = '';
  document.getElementById('restartBtn').style.display = 'none';
  enableDragAndDrop();
}

function enableDragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const dropZones = document.querySelectorAll('.drop-zone');

  draggables.forEach(item => {
    item.addEventListener('dragstart', e => {
      item.classList.add('dragging');
      e.dataTransfer.setData('category', item.dataset.category);
      e.dataTransfer.setData('id', item.dataset.id);
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
    });
  });

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('hovered');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('hovered');
    });

    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('hovered');
      const expectedCategory = zone.dataset.accept;
      const draggedCategory = e.dataTransfer.getData('category');
      const draggedId = e.dataTransfer.getData('id');
      const draggedElement = document.querySelector(`.draggable[data-id="${draggedId}"]`);

      if (!draggedElement) return;

      if (expectedCategory === draggedCategory) {
        zone.classList.add('correct');
        zone.classList.remove('wrong');
        zone.appendChild(draggedElement);
        draggedElement.setAttribute("draggable", false);
        draggedElement.style.cursor = "default";
        acertos++;
        atualizarScore();
        document.getElementById('feedback').innerHTML = "<span style='color:#2ecc40'>Acertou! 🎉</span>";
        setTimeout(() => {
          zone.classList.remove('correct');
          document.getElementById('feedback').innerHTML = '';
        }, 800);
        if (acertos === total) {
          document.getElementById('feedback').innerHTML = "<span style='color:#007bff'>Parabéns! Você acertou todos! 🏆</span>";
          document.getElementById('restartBtn').style.display = 'block';

          const nomeDoJogador = localStorage.getItem('playerName') || 'Anônimo';
          firebase.database().ref('participantes').push({
            nome: nomeDoJogador,
            acertos: acertos,
            data: new Date().toISOString()
          });
        }
      } else {
        zone.classList.add('wrong');
        document.getElementById('feedback').innerHTML = "<span style='color:#e74c3c'>Tente novamente! ❌</span>";
        setTimeout(() => {
          zone.classList.remove('wrong');
          document.getElementById('feedback').innerHTML = '';
        }, 1000);
      }
    });
  });
}

// Login simples para registrar o nome do jogador
document.addEventListener('DOMContentLoaded', function() {
  const loginArea = document.getElementById('login-area');
  const gameArea = document.getElementById('game-area');
  const startBtn = document.getElementById('startBtn');
  const playerNameInput = document.getElementById('playerName');
  const scoreDiv = document.getElementById('score');

  // Se já tem nome salvo, pula direto para o jogo
  if (localStorage.getItem('playerName')) {
    loginArea.style.display = 'none';
    gameArea.style.display = '';
    showPlayerName();
  }

  startBtn.onclick = function() {
    const name = playerNameInput.value.trim();
    if (name.length < 2) {
      alert('Digite um nome válido!');
      return;
    }
    localStorage.setItem('playerName', name);
    loginArea.style.display = 'none';
    gameArea.style.display = '';
    showPlayerName();
  };

  function showPlayerName() {
    const name = localStorage.getItem('playerName');
    if (name) {
      scoreDiv.innerHTML = `<b>Jogador:</b> ${name}<br>` + scoreDiv.innerHTML;
    }
  }
});

document.getElementById('restartBtn').onclick = resetGame;

// Inicialização
renderAlimentos();
atualizarScore();
enableDragAndDrop();
