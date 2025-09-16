//Paramètres connexion Websocket, merci Nutty le Goat

let ws;

function connectToStreamerBotWebSocket() {
  if ("WebSocket" in window) {
    ws = new WebSocket("ws://127.0.0.1:8080/");

    ws.onopen = () => {
      console.log("✅ Connecté à Streamer.bot");

      showCard(); // Affiche la carte dès la connexion
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Message reçu:", data);
    };

    ws.onclose = () => {
      console.log("❌ Déconnecté, nouvelle tentative dans 5 secondes...");
      setTimeout(connectToStreamerBotWebSocket, 5000); // Reconnexion automatique
    };

    ws.onerror = (error) => {
      console.error("Erreur WebSocket:", error);
    };
  } else {
    console.error("WebSocket non supporté par le navigateur.");
  }
}
connectToStreamerBotWebSocket();


const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardQuestions = {
  'A♠': "Qu'est-ce que tu as fait pour prendre soin de toi dernièrement?",
  '2♠': "Quel a été une de tes dernières bonnes actions et pourquoi?",
  '3♠': "Qui est ton meilleur ami que tu connais que en ligne et comment vous vous connaissez?",
  '4♠': "Quel a été ton dernier succès et l'as tu célébré?",
  '5♠': "Quel est la dernière personne dont tu es reconnaissant(e) et pourquoi?",
  '6♠': "Quel est ton objet préféré et c'est quoi l'histoire entre vous deux?",
  '7♠': "Raconte nous la meilleure publication en ligne que tu as vu d'un de tes potes?",
  '8♠': "En dehors de ton anniversaire, quel est ton jour préféré de l'année et pourquoi?",
  '9♠': "Qu'est-ce que t'as préféré le plus pendant ton premier job?",
  '10♠': "Quel jeu vidéo tu achèterais maintenant si on te donnait la thune pour?",
  'J♠': "Quel est ton meilleur conseil si quelqu'un veut faire un bon snap ou une bonne story insta?",
  'Q♠': "Décris-nous l'endroit qui te donne le plus d'inspiration?",
  'K♠': "Quel a été ta création la plus originale?",

  'A♥': "Quel est le buzz ou la trend que tu espères ne plus jamais revoir de ta vie?",
  '2♥': "Si tu avais tout le temps, l'énergie ou l'argent, sur quel projet tu te lancerais?",
  '3♥': "Est-ce que tu connais un défaut physique chez les gens que toi tu trouves attirant?",
  '4♥': "Qu'est-ce qui te permet d'être la meilleure version de toi-même?",
  '5♥': "Quelle est l'expression que tu écris le plus quand tu texte quelqu'un?",
  '6♥': "Quel est le meilleur conseil qu'on t'ait donné pour avancer dans ta vie?",
  '7♥': "Tu as un jour de vacance. Qu'est-ce que tu en fais?",
  '8♥': "Quel est le plat que tu cuisinerais si tu voulais impressionner quelqu'un?",
  '9♥': "Comment tu résumerais ta personnalité en une phrase?",
  '10♥': "Quel est l'évènement régulier que tu préfères le plus?",
  'J♥': "Un génie t'offre le voeu d'avoir un objet en illimité. Tu choisis lequel?",
  'Q♥': "Quelle est la valeur la plus importante à tes yeux?",
  'K♥': "Quel est la première chose pour laquelle tes amis te connaissent en premier?",

  'A♦': "Comment tu expliquerais la vie que tu as vécu en une phrase?",
  '2♦': "Raconte-nous la première fois que tu t'es senti intégré dans un groupe?",
  '3♦': "Qu'est-ce que t'as été capable de faire dont t'es le plus fier?",
  '4♦': "Quel est la chanson qui te donne le plus d'émotions et pourquoi?",
  '5♦': "Quelle est la dernière chose intéressante pour toi que tu as appris(e)?",
  '6♦': "Partage-nous la dernière chose qui t'as rendu heureux?",
  '7♦': "Quel est ton talent le plus inutile?",
  '8♦': "Quelle est la chose qui vous fait sourire le plus?",
  '9♦': "C'est quoi le surnom le plus atypique qu'on vous ai donné et pourquoi?",
  '10♦': "Quelle est la tradition #1 que tu respectes encore?",
  'J♦': "Finis la phrase : \"Je me sens le plus en phase quand…\"?",
  'Q♦': "Quelle est le snack qui te fait automatiquement aller mieux?",
  'K♦': "Quelle est la chanson qui te donne le plus d'énergie?",

  'A♣': "Quelle est la dernière chose pour laquelle tu as dépensé du temps et de l'énergie?",
  '2♣': "Quelle est la chose la plus drôle de toi?",
  '3♣': "Quelle est la chose la plus importante que tu dois toujours avoir dans ton frigo?",
  '4♣': "Quel objet de ton enfance tu ne jettera jamais de ta vie?",
  '5♣': "C'est quoi pour toi quelqu'un qui a réussi dans sa vie?",
  '6♣': "Quel est le passe-temps que t'as mais que personne ne sait?",
  '7♣': "Si t'avais un conseil à donner à ton toi plus jeune, ça serait lequel?",
  '8♣': "Si tu pouvais être un expert dans n'importe quel domaine, ça serait lequel?",
  '9♣': "Quel est le divertissement qui t'amuses le plus?",
  '10♣': "Quel est la chanson qui te donne le plus d'émotions et pourquoi?",
  'J♣': "Quel est la chose la plus importante pour toi?",
  'Q♣': "C'est quoi le commerce local où tu dépenses le plus ta thune?",
  'K♣': "C'était quoi ton rêve quand tu étais petit ?"
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
  sendQuestionToStreamerBot(question);
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

  // Disparition après 15s
  setTimeout(() => {
    card.classList.remove('show');
    card.classList.add('hide');
    setTimeout(() => {
      card.classList.add('hidden');
      card.classList.remove('hide');
    }, 1000);
  }, 15000);
}

function sendQuestionToStreamerBot(question) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({
      request: "DoAction",
      id: "send-question",
      action: {
        name: "Send Question"
      },
      args: {
        question: question
      }
    }));
  } else {
    console.error("WebSocket non prêt, impossible d’envoyer la question");
  }
}
