window.addEventListener('DOMContentLoaded', () => {
  showCard();
});

const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardQuestions = {
  'A♠': "Quel est ton plus grand rêve ?",
  '2♠': "Si tu pouvais changer une chose dans ta vie, ce serait quoi ?",
  '3♠': "Quelle est ta chanson préférée ?",
  '4♠': "Quelle est ta plus grande peur ?",
  '5♠': "Quel est ton film préféré ?",
  '6♠': "Plutôt chien ou chat ?",
  '7♠': "Quel est ton talent caché ?",
  '8♠': "Quelle est ta plus grande fierté ?",
  '9♠': "As-tu un porte-bonheur ?",
  '10♠': "Quel est ton plat préféré ?",
  'J♠': "Si tu étais un super-héros, ce serait lequel ?",
  'Q♠': "Si tu gagnais 1 million, tu ferais quoi en premier ?",
  'K♠': "Quelle est la personne qui t’inspire le plus ?",

  'A♥': "Quel est ton souvenir d’enfance préféré ?",
  '2♥': "Si tu pouvais vivre dans un autre pays, lequel ?",
  '3♥': "Quel est ton plus gros fou rire ?",
  '4♥': "Qu’est-ce qui te rend heureux à coup sûr ?",
  '5♥': "Si tu devais écrire un livre, ce serait sur quoi ?",
  '6♥': "As-tu un rêve que tu n’as jamais osé dire ?",
  '7♥': "Plutôt introverti ou extraverti ?",
  '8♥': "Qu’est-ce qui te rend unique ?",
  '9♥': "Quel est le moment le plus gênant de ta vie ?",
  '10♥': "Si tu pouvais maîtriser une compétence, ce serait laquelle ?",
  'J♥': "Quelle est ta citation préférée ?",
  'Q♥': "Quel est ton plus grand regret ?",
  'K♥': "Qu’est-ce que l’amour pour toi ?",

  'A♦': "Quelle est la dernière fois que tu as ri aux larmes ?",
  '2♦': "Qu’est-ce qui te motive au quotidien ?",
  '3♦': "Si tu pouvais inviter quelqu’un (vivant ou mort) à dîner ?",
  '4♦': "Quelle est ta plus grande qualité ?",
  '5♦': "Quelle est ta destination de rêve ?",
  '6♦': "Qu’aimes-tu faire quand tu es seul ?",
  '7♦': "Quel est ton plus beau souvenir ?",
  '8♦': "Quel métier rêvais-tu de faire enfant ?",
  '9♦': "Si tu pouvais avoir un super-pouvoir ?",
  '10♦': "Qu’est-ce qui te fait pleurer facilement ?",
  'J♦': "Quel est ton plus grand défi à venir ?",
  'Q♦': "Quelle est ta relation avec ta famille ?",
  'K♦': "Qu’est-ce que tu changerais dans le monde ?",

  'A♣': "Qu’est-ce qui te rend fier de toi ?",
  '2♣': "Décris-toi en 3 mots.",
  '3♣': "Quel est ton plus grand rêve oublié ?",
  '4♣': "As-tu une phobie étrange ?",
  '5♣': "Qu’est-ce qui te rend nostalgique ?",
  '6♣': "As-tu un rituel bizarre ?",
  '7♣': "Plutôt travail ou plaisir ?",
  '8♣': "Quelle est la chose la plus folle que tu aies faite ?",
  '9♣': "As-tu déjà eu le cœur brisé ?",
  '10♣': "Quel est ton plus gros coup de chance ?",
  'J♣': "À quoi ressemble ton dimanche parfait ?",
  'Q♣': "Quelle est la personne que tu admires le plus ?",
  'K♣': "Qu’aimerais-tu que les gens retiennent de toi ?"
};


function getRandomCard() {
const suit = suits[Math.floor(Math.random() * suits.length)];
const value = values[Math.floor(Math.random() * values.length)];
return { value, suit };
}

function showCard() {
  const card = document.getElementById('question-card');
  const questionEl = document.getElementById('card-question');
  const cornerTop = document.getElementById('corner-top');
  const cornerBottom = document.getElementById('corner-bottom');

  const { value, suit } = getRandomCard();
  const isRed = suit === '♥' || suit === '♦';
  const fullSymbol = `${value}${suit}`;
  const question = cardQuestions[fullSymbol] || "Pas de question associée.";
  document.getElementById('card-symbol-center').textContent = suit;
  const symbolEl = document.getElementById('card-symbol-center');
      symbolEl.textContent = suit;
      symbolEl.style.color = isRed ? 'red' : 'black';

  document.querySelector('.card-front').style.border = isRed
      ? '8px solid red'
      : '8px solid black';


  cornerTop.textContent = fullSymbol;
  cornerBottom.textContent = fullSymbol;
  [cornerTop, cornerBottom, questionEl].forEach(el => {
    el.style.color = isRed ? 'red' : 'black';
  });
  questionEl.textContent = question;
  questionEl.style.fontSize = `clamp(3.5em, ${Math.max(2 - question.length / 45, 0.7)}em, 6em)`;

  // Reset les classes
  card.classList.remove('hidden', 'hide', 'show');
  void card.offsetWidth;

  // Lance l'animation avec rotation multiple
  card.classList.add('show');

  // Disparition après 10s
  setTimeout(() => {
    card.classList.remove('show');
    card.classList.add('hide');
    setTimeout(() => {
      card.classList.add('hidden');
      card.classList.remove('hide');
    }, 1000);
  }, 10000);
}
 
