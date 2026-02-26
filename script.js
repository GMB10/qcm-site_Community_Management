// --- Tableau des questions ---
const questions = [
  { question: "La gestion des communautés permet d'améliorer :", options: ["La documentation", "La résilience", "Les informations spécifiques", "Le ressenti émotionnel"], answer: 3, justification: "Les communautés créent un lien émotionnel fort." },
  { question: "Les communautés en ligne permettent une facilité :", options: ["De concentration", "De définition", "De qualification", "D'intégration"], answer: 3, justification: "Facilité de participer sans contrainte géographique." },
  { question: "Le marketing sur les médias sociaux se résume à :", options: ["Donnez aux gens ce qu'ils veulent", "Créez un contenu simple", "Proposer des offres spéciales", "Valorisez votre produit"], answer: 0, justification: "Donner aux gens ce qu'ils veulent est la clé du social media marketing." },
  { question: "Une communauté de transaction est centrée sur :", options: ["L'amitié", "Un produit ou service", "Une passion", "Un avatar virtuel"], answer: 1, justification: "Focalisée sur les produits ou services, ex: forums d'achat." },
  { question: "Un community manager doit :", options: ["Ignorer sa communauté", "Écouter, apprendre, répondre", "Se concentrer sur le marketing offline", "Publier sans stratégie"], answer: 1, justification: "Écouter, apprendre et répondre est essentiel pour animer une communauté." },
  { question: "Quelle qualité est essentielle pour éviter les bad buzz ?", options: ["Créativité", "Orthographe irréprochable", "Sens de l'organisation", "Polyvalence"], answer: 1, justification: "Une orthographe correcte réduit les risques de bad buzz." },
  { question: "Le community manager incarne la marque sur Internet en :", options: ["Répondant aux messages et personnalisant ses publications", "Ignorant les clients", "Automatisant toutes les publications", "Se concentrant uniquement sur le chiffre d'affaires"], answer: 0, justification: "Personnaliser les messages et répondre aux clients représente la marque." },
  { question: "Le storytelling permet de :", options: ["Vendre sans stratégie", "Créer une connexion émotionnelle", "Ignorer la cible", "Réduire l'engagement"], answer: 1, justification: "Le storytelling engage émotionnellement la communauté." },
  { question: "Quels formats le community manager doit-il varier ?", options: ["Texte uniquement", "Photo uniquement", "Vidéo uniquement", "Texte, photo et vidéo"], answer: 3, justification: "Varier les formats permet d’atteindre différents utilisateurs et d’augmenter l’engagement." },
  { question: "Pourquoi faire du social listening ?", options: ["Pour écouter les conversations en ligne et comprendre la communauté", "Pour créer des newsletters", "Pour supprimer les commentaires", "Pour ignorer les trolls"], answer: 0, justification: "Le social listening permet de suivre et comprendre les discussions en ligne." },
  { question: "Le taux d’engagement se calcule avec :", options: ["Interactions / audience totale", "Nombre de followers", "Nombre de posts", "Nombre de stories"], answer: 0, justification: "Mesure le niveau d'interaction par rapport à la taille de la communauté." },
  { question: "Que signifie ROI dans le marketing digital ?", options: ["Retour sur investissement", "Réseau optimal interne", "Rapport officiel internet", "Réduction opérationnelle"], answer: 0, justification: "ROI = Return On Investment, mesure la rentabilité des actions marketing." },
  { question: "Les contenus UGC sont :", options: ["Créés par les utilisateurs", "Publicités payantes", "Posts sponsorisés", "Emails marketing"], answer: 0, justification: "Les UGC sont des contenus authentiques créés par les utilisateurs." },
  { question: "Un bon community manager doit être :", options: ["Polyvalent et créatif", "Uniquement créatif", "Uniquement technique", "Uniquement administratif"], answer: 0, justification: "Polyvalence et créativité permettent de mieux animer la communauté." },
  { question: "Pourquoi utiliser l’A/B testing ?", options: ["Pour comparer deux versions de contenu et choisir la plus performante", "Pour supprimer un post", "Pour publier automatiquement", "Pour analyser uniquement les likes"], answer: 0, justification: "L’A/B testing teste deux contenus et choisit celui qui performe le mieux." },
  { question: "Pourquoi répondre aux trolls avec précision ?", options: ["Pour générer de l'engagement intelligent", "Pour ignorer complètement les trolls", "Pour supprimer leur compte", "Pour créer un bad buzz"], answer: 0, justification: "Une réponse précise transforme une attaque en opportunité positive." },
  { question: "Le community manager doit connaître :", options: ["Les produits, tendances et actualités", "Seulement les produits", "Seulement les tendances", "Seulement les statistiques"], answer: 0, justification: "Connaître l’entreprise, les tendances et l'actualité est essentiel." },
  { question: "La vidéo représente quel pourcentage du trafic Internet (étude Cisco 2018) ?", options: ["79%", "50%", "30%", "90%"], answer: 0, justification: "La vidéo représente 79% du trafic Internet, donc très importante." },
  { question: "Le community manager peut évoluer vers :", options: ["Social Media Manager, Traffic Manager, Content Manager", "Agent commercial uniquement", "Technicien informatique", "Livreur"], answer: 0, justification: "Évolution possible vers ces postes après 3-5 ans d’expérience." },
  { question: "Une publication humoristique sert à :", options: ["Divertir et stimuler l'engagement", "Réduire l'audience", "Ignorer la communauté", "Vendre immédiatement"], answer: 0, justification: "L’humour fidélise et engage la communauté." },
  { question: "Les hashtags permettent de :", options: ["Améliorer la visibilité", "Cacher le contenu", "Réduire l’engagement", "Ignorer les followers"], answer: 0, justification: "Les hashtags aident les utilisateurs à trouver le contenu et augmentent la portée." },
  { question: "Un calendrier éditorial sert à :", options: ["Planifier les publications", "Supprimer du contenu", "Créer des conflits", "Éviter la stratégie"], answer: 0, justification: "Il organise les publications et assure une stratégie cohérente." },
  { question: "Les KPI servent à :", options: ["Mesurer la performance", "Ignorer les résultats", "Créer du contenu", "Faire la comptabilité"], answer: 0, justification: "Ils permettent de suivre les indicateurs de performance et ajuster la stratégie." },
  { question: "Une crise digitale doit être :", options: ["Ignorée", "Gérée rapidement", "Supprimée sans réponse", "Reportée"], answer: 1, justification: "Gérer rapidement une crise limite les dégâts." },
  { question: "L’engagement se mesure par :", options: ["Likes, partages, commentaires", "Le silence", "Le stock", "Les emails internes"], answer: 0, justification: "Likes, partages et commentaires montrent le niveau d’engagement." },
  { question: "Une communauté engagée génère :", options: ["Plus d’interactions", "Moins de visibilité", "Moins de ventes", "Silence"], answer: 0, justification: "Une communauté engagée interagit davantage et augmente la visibilité." },
  { question: "Le branding vise à :", options: ["Construire une image de marque", "Vendre un produit seul", "Réduire la visibilité", "Ignorer le client"], answer: 0, justification: "Le branding développe l’image et la perception de la marque." },
  { question: "Le persona marketing est :", options: ["Un profil type de client", "Un produit", "Un influenceur", "Un KPI"], answer: 0, justification: "Le persona représente le client idéal pour mieux adapter la communication." },
  { question: "Une FAQ aide à :", options: ["Répondre aux questions fréquentes", "Supprimer les commentaires", "Créer des conflits", "Envoyer des emails"], answer: 0, justification: "Une FAQ centralise les réponses aux questions récurrentes et améliore l’expérience." },
  { question: "Le community manager doit être proche des clients en :", options: ["Personnalisant messages et emojis", "Ignorant les avis", "Automatisant tout", "Se concentrant sur les ventes"], answer: 0, justification: "Proximité = personnalisation + réactivité pour représenter la marque." },
  { question: "Quels sont les 3 piliers de l’animation communautaire ?", options: ["Écouter, apprendre, répondre", "Publier, supprimer, ignorer", "Vendre, poster, liker", "Analyser, créer, ignorer"], answer: 0, justification: "Ces 3 actions permettent d’animer efficacement la communauté." },
  { question: "Pourquoi utiliser des outils visuels ?", options: ["Pour créer du contenu attractif", "Pour supprimer les messages", "Pour spammer", "Pour ignorer les abonnés"], answer: 0, justification: "Les outils visuels aident à rendre le contenu plus attractif et engageant." },
  { question: "Pourquoi analyser le marketing ?", options: ["Pour adapter la communication et mesurer la performance", "Pour ignorer la communauté", "Pour publier automatiquement", "Pour augmenter le stock"], answer: 0, justification: "Analyser permet de collecter des données et d’ajuster la stratégie." },
  { question: "Pourquoi récompenser la communauté ?", options: ["Pour fidéliser et encourager l’engagement", "Pour ignorer les abonnés", "Pour augmenter le spam", "Pour réduire le contenu"], answer: 0, justification: "Récompenser crée de la motivation et de la fidélité." },
  { question: "Le webmarketeur se concentre sur :", options: ["Concurrence, tendances et stratégie web", "Les emails uniquement", "Les produits physiques", "La livraison"], answer: 0, justification: "Le webmarketeur analyse la concurrence et adapte la stratégie marketing." }
];

// --- Shuffle tableau questions ---
function shuffleArray(array){
  for(let i=array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
  return array;
}

// --- Mélange des questions et options ---
shuffleArray(questions);

let currentQuestion=0, score=0;
let wrongAnswers=[];

const questionEl=document.getElementById('question');
const optionsEl=document.getElementById('options');
const nextBtn=document.getElementById('nextBtn');
const progressText=document.getElementById('progressText');
const progressFill=document.getElementById('progressFill');
const quizContainer=document.getElementById('quiz');
const resultContainer=document.getElementById('result');
const scoreEl=document.getElementById('score');

function showQuestion(){
  const q=questions[currentQuestion];
  questionEl.textContent=q.question;
  optionsEl.innerHTML='';

  // Mélange des options
  const opts=q.options.map((opt,idx)=>({opt, idx}));
  shuffleArray(opts);

  opts.forEach(({opt, idx})=>{
    const btn=document.createElement('button');
    btn.classList.add('option');
    btn.textContent=opt;
    btn.addEventListener('click',()=>selectAnswer(btn, idx));
    optionsEl.appendChild(btn);
  });

  progressText.textContent=`Question ${currentQuestion+1} / ${questions.length}`;
  progressFill.style.width=`${((currentQuestion+1)/questions.length)*100}%`;
  nextBtn.classList.add('hidden');
}

function selectAnswer(selectedBtn,index){
  const correctIndex=questions[currentQuestion].answer;
  const optionButtons=document.querySelectorAll('.option');

  optionButtons.forEach(btn=>btn.disabled=true);

  if(index===correctIndex){
    selectedBtn.classList.add('correct');
    score++;
  }else{
    selectedBtn.classList.add('wrong');
    optionButtons[correctIndex].classList.add('correct');
    wrongAnswers.push({
      question:questions[currentQuestion].question,
      correct:questions[currentQuestion].options[correctIndex],
      yourAnswer:questions[currentQuestion].options[index],
      justification:questions[currentQuestion].justification
    });
  }

  nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click',()=>{
  currentQuestion++;
  if(currentQuestion<questions.length){
    showQuestion();
  }else{
    showResult();
  }
});

function showResult(){
  quizContainer.classList.add('hidden');
  resultContainer.classList.add('show');

  const percentage=((score/questions.length)*100).toFixed(2);
  let resultText=`Score : ${score} / ${questions.length} (${percentage}%)`;

  if(wrongAnswers.length>0){
    resultText+=`<br><br>Questions ratées :<br>`;
    wrongAnswers.forEach((item,i)=>{
      resultText+=`${i+1}. ${item.question}<br>`;
      resultText+=`Votre réponse : ${item.yourAnswer}<br>`;
      resultText+=`Bonne réponse : ${item.correct}<br>`;
      resultText+=`Justification : ${item.justification}<br><br>`;
    });
  }

  scoreEl.innerHTML=resultText;
}

showQuestion();