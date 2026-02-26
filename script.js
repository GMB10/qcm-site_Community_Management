const questions = [
  {
    question: "La gestion des communautés permet d'améliorer :",
    options: ["La documentation", "La résilience", "Les informations spécifiques", "Le ressenti émotionnel"],
    answer: 3,
    justification: "Les communautés permettent aux marques de créer un lien émotionnel fort avec leurs membres, renforçant le ressenti émotionnel."
  },
  {
    question: "Les communautés en ligne permettent une facilité :",
    options: ["De concentration", "De définition", "De qualification", "D'intégration"],
    answer: 3,
    justification: "Les communautés en ligne permettent de participer facilement sans contraintes géographiques ni révéler sa véritable identité, facilitant l'intégration."
  },
  {
    question: "Le marketing sur les médias sociaux se résume à :",
    options: ["Donnez aux gens ce qu'ils veulent", "Créez un contenu simple", "Proposer des offres spéciales", "Valorisez votre produit"],
    answer: 0,
    justification: "La formule clé du marketing social media est 'Donnez aux gens ce qu'ils veulent', pour satisfaire directement les besoins de la communauté."
  },
  {
    question: "Une communauté de transaction est centrée sur :",
    options: ["L'amitié", "Un produit ou service", "Une passion", "Un avatar virtuel"],
    answer: 1,
    justification: "Les communautés de transaction sont centrées sur les produits ou services, par exemple des forums d'achat."
  },
  {
    question: "Un community manager doit :",
    options: ["Ignorer sa communauté", "Écouter, apprendre, répondre", "Se concentrer sur le marketing offline", "Publier sans stratégie"],
    answer: 1,
    justification: "Pour animer efficacement une communauté, il doit écouter, apprendre et répondre aux besoins des membres."
  },
  {
    question: "Quelle qualité est essentielle pour éviter les bad buzz ?",
    options: ["Créativité", "Orthographe irréprochable", "Sens de l'organisation", "Polyvalence"],
    answer: 1,
    justification: "Une orthographe irréprochable évite les mauvaises interprétations et réduit les risques de bad buzz."
  },
  {
    question: "Le community manager incarne la marque sur Internet en :",
    options: ["Répondant aux messages et personnalisant ses publications", "Ignorant les clients", "Automatisant toutes les publications", "Se concentrant uniquement sur le chiffre d'affaires"],
    answer: 0,
    justification: "Il doit être proche des clients : personnaliser les messages, utiliser des emojis et répondre aux messages pour représenter la marque."
  },
  {
    question: "Le storytelling permet de :",
    options: ["Vendre sans stratégie", "Créer une connexion émotionnelle", "Ignorer la cible", "Réduire l'engagement"],
    answer: 1,
    justification: "Le storytelling sert à raconter une histoire qui engage émotionnellement la communauté."
  },
  {
    question: "Quels formats le community manager doit-il varier ?",
    options: ["Texte uniquement", "Photo uniquement", "Vidéo uniquement", "Texte, photo et vidéo"],
    answer: 3,
    justification: "Varier les formats (texte, photo, vidéo) permet de toucher différents types d'utilisateurs et maximiser l'engagement."
  },
  {
    question: "Pourquoi faire du social listening ?",
    options: ["Pour écouter les conversations en ligne et comprendre la communauté", "Pour créer des newsletters", "Pour supprimer les commentaires", "Pour ignorer les trolls"],
    answer: 0,
    justification: "Le social listening permet de suivre les discussions, comprendre les besoins et adapter la communication."
  },
  {
    question: "Le taux d’engagement se calcule avec :",
    options: ["Interactions / audience totale", "Nombre de followers", "Nombre de posts", "Nombre de stories"],
    answer: 0,
    justification: "Le taux d'engagement mesure le niveau d'interaction par rapport à la taille totale de la communauté."
  },
  {
    question: "Que signifie ROI dans le marketing digital ?",
    options: ["Retour sur investissement", "Réseau optimal interne", "Rapport officiel internet", "Réduction opérationnelle"],
    answer: 0,
    justification: "ROI signifie 'Return On Investment' et permet d’évaluer la rentabilité des actions marketing."
  },
  {
    question: "Les contenus UGC sont :",
    options: ["Créés par les utilisateurs", "Publicités payantes", "Posts sponsorisés", "Emails marketing"],
    answer: 0,
    justification: "Les User Generated Content (UGC) sont des contenus authentiques créés par les utilisateurs, renforçant la confiance et l'engagement."
  },
  {
    question: "Un bon community manager doit être :",
    options: ["Polyvalent et créatif", "Uniquement créatif", "Uniquement technique", "Uniquement administratif"],
    answer: 0,
    justification: "Il doit connaître toutes les plateformes et tendances (polyvalence) et se distinguer dans le flux d’actualités (créativité)."
  },
  {
    question: "Pourquoi utiliser l’A/B testing ?",
    options: ["Pour comparer deux versions de contenu et choisir la plus performante", "Pour supprimer un post", "Pour publier automatiquement", "Pour analyser uniquement les likes"],
    answer: 0,
    justification: "L’A/B testing permet de tester deux contenus et choisir celui qui génère le plus d'engagement."
  },
  {
    question: "Pourquoi répondre aux trolls avec précision ?",
    options: ["Pour générer de l'engagement intelligent", "Pour ignorer complètement les trolls", "Pour supprimer leur compte", "Pour créer un bad buzz"],
    answer: 0,
    justification: "Répondre avec preuves et précision transforme une attaque en opportunité d’engagement positif."
  },
  {
    question: "Le community manager doit connaître :",
    options: ["Les produits, tendances et actualités", "Seulement les produits", "Seulement les tendances", "Seulement les statistiques"],
    answer: 0,
    justification: "Connaître son entreprise, les tendances et l'actualité est essentiel pour se démarquer et réagir rapidement."
  },
  {
    question: "La vidéo représente quel pourcentage du trafic Internet (étude Cisco 2018) ?",
    options: ["79%", "50%", "30%", "90%"],
    answer: 0,
    justification: "Selon Cisco 2018, la vidéo représente 79% du trafic Internet, d’où l’importance de ce format."
  },
  {
    question: "Le community manager peut évoluer vers :",
    options: ["Social Media Manager, Traffic Manager, Content Manager", "Agent commercial uniquement", "Technicien informatique", "Livreur"],
    answer: 0,
    justification: "Après 3-5 ans, les postes possibles incluent Social Media Manager, Traffic Manager, Content Manager, etc."
  },
  {
    question: "Une publication humoristique sert à :",
    options: ["Divertir et stimuler l'engagement", "Réduire l'audience", "Ignorer la communauté", "Vendre immédiatement"],
    answer: 0,
    justification: "L’humour attire et fidélise la communauté, augmentant l'engagement sur les publications."
  },
  {
    question: "Les hashtags permettent de :",
    options: ["Améliorer la visibilité", "Cacher le contenu", "Réduire l’engagement", "Ignorer les followers"],
    answer: 0,
    justification: "Ils aident les utilisateurs à trouver le contenu et augmentent la portée des publications."
  },
  {
    question: "Un calendrier éditorial sert à :",
    options: ["Planifier les publications", "Supprimer du contenu", "Créer des conflits", "Éviter la stratégie"],
    answer: 0,
    justification: "Le calendrier éditorial permet d’organiser les publications et d’assurer une stratégie cohérente."
  },
  {
    question: "Les KPI servent à :",
    options: ["Mesurer la performance", "Ignorer les résultats", "Créer du contenu", "Faire la comptabilité"],
    answer: 0,
    justification: "Les KPI permettent de suivre les indicateurs clés de performance et d’adapter la stratégie."
  },
  {
    question: "Une crise digitale doit être :",
    options: ["Ignorée", "Gérée rapidement", "Supprimée sans réponse", "Reportée"],
    answer: 1,
    justification: "Gérer rapidement une crise digitale permet de limiter les dégâts et protéger la réputation de la marque."
  },
  {
    question: "L’engagement se mesure par :",
    options: ["Likes, partages, commentaires", "Le silence", "Le stock", "Les emails internes"],
    answer: 0,
    justification: "Les interactions telles que likes, partages et commentaires sont des indicateurs d’engagement."
  },
  {
    question: "Une communauté engagée génère :",
    options: ["Plus d’interactions", "Moins de visibilité", "Moins de ventes", "Silence"],
    answer: 0,
    justification: "Une communauté engagée interagit davantage, augmente la visibilité et peut stimuler les ventes."
  },
  {
    question: "Le branding vise à :",
    options: ["Construire une image de marque", "Vendre un produit seul", "Réduire la visibilité", "Ignorer le client"],
    answer: 0,
    justification: "Le branding consiste à développer l’image de marque et sa perception auprès de la communauté."
  },
  {
    question: "Le persona marketing est :",
    options: ["Un profil type de client", "Un produit", "Un influenceur", "Un KPI"],
    answer: 0,
    justification: "Le persona est un profil type qui représente le client idéal pour adapter la communication."
  },
  {
    question: "Une FAQ aide à :",
    options: ["Répondre aux questions fréquentes", "Supprimer les commentaires", "Créer des conflits", "Envoyer des emails"],
    answer: 0,
    justification: "Une FAQ centralise les réponses aux questions récurrentes et améliore l'expérience utilisateur."
  }
];

// --- Variables de quiz ---
let currentQuestion = 0;
let score = 0;
let wrongAnswers = [];

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const scoreEl = document.getElementById('score');

// --- Affichage d'une question ---
function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';

  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.textContent = option;
    btn.addEventListener('click', () => selectAnswer(btn, index));
    optionsEl.appendChild(btn);
  });

  progressText.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  nextBtn.classList.add('hidden');
}

// --- Sélection d'une réponse ---
function selectAnswer(selectedBtn, index) {
  const correctIndex = questions[currentQuestion].answer;
  const optionButtons = document.querySelectorAll('.option');

  optionButtons.forEach(btn => btn.disabled = true);

  if(index === correctIndex) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('wrong');
    optionButtons[correctIndex].classList.add('correct');
    wrongAnswers.push({
      question: questions[currentQuestion].question,
      correct: questions[currentQuestion].options[correctIndex],
      yourAnswer: questions[currentQuestion].options[index],
      justification: questions[currentQuestion].justification
    });
  }

  nextBtn.classList.remove('hidden');
}

// --- Bouton suivant ---
nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if(currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// --- Affichage des résultats ---
function showResult() {
  quizContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');

  const percentage = ((score / questions.length) * 100).toFixed(2);
  let resultText = `Score : ${score} / ${questions.length} (${percentage}%)`;

  if(wrongAnswers.length > 0){
    resultText += `<br><br>Questions ratées :<br>`;
    wrongAnswers.forEach((item, i) => {
      resultText += `${i+1}. ${item.question}<br>`;
      resultText += `Votre réponse : ${item.yourAnswer}<br>`;
      resultText += `Bonne réponse : ${item.correct}<br>`;
      resultText += `Justification : ${item.justification}<br><br>`;
    });
  }

  scoreEl.innerHTML = resultText;
}

// --- Démarrage du quiz ---
showQuestion();