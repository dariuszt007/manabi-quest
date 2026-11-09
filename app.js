const SAMPLE_MISSIONS = [
  {
    id: "g1-math-01",
    grade: 1,
    subject: "math",
    correct: 1,
    answers: ["4", "5", "6"],
    translations: {
      ja: { title: "りんごを数えよう", question: "りんごが3個あります。2個もらいました。全部で何個ですか？" },
      en: { title: "Count the apples", question: "There are 3 apples. You get 2 more. How many apples are there now?" },
      pl: { title: "Policz jabłka", question: "Masz 3 jabłka i dostajesz jeszcze 2. Ile masz ich razem?" },
      fr: { title: "Compte les pommes", question: "Tu as 3 pommes et tu en reçois 2 autres. Combien en as-tu ?" },
      de: { title: "Äpfel zählen", question: "Du hast 3 Äpfel und bekommst 2 dazu. Wie viele Äpfel hast du jetzt?" },
      es: { title: "Cuenta las manzanas", question: "Tienes 3 manzanas y recibes 2 más. ¿Cuántas tienes en total?" }
    }
  },
  {
    id: "g1-life-01",
    grade: 1,
    subject: "life",
    correct: 2,
    answers: ["3", "4", "5"],
    translations: {
      ja: { title: "学校の花だん", question: "花だんに花が2本あります。3本植えました。花は全部で何本ですか？" },
      en: { title: "The school flower bed", question: "There are 2 flowers in the school garden. You plant 3 more. How many are there?" },
      pl: { title: "Kwiaty w szkolnym ogrodzie", question: "W szkolnym ogrodzie rosną 2 kwiaty. Posadzono jeszcze 3. Ile jest ich razem?" },
      fr: { title: "Le jardin de l’école", question: "Il y a 2 fleurs dans le jardin de l’école. On en plante 3 autres. Combien y en a-t-il ?" },
      de: { title: "Der Schulgarten", question: "Im Schulgarten wachsen 2 Blumen. 3 weitere werden gepflanzt. Wie viele sind es jetzt?" },
      es: { title: "El jardín de la escuela", question: "Hay 2 flores en el jardín. Plantas 3 más. ¿Cuántas flores hay en total?" }
    }
  },
  {
    id: "g2-math-01",
    grade: 2,
    subject: "math",
    correct: 1,
    answers: ["18", "20", "22"],
    translations: {
      ja: { title: "お店でお買い物", question: "えんぴつは12円です。けしゴムは8円です。合わせて何円ですか？" },
      en: { title: "Shopping at the store", question: "A pencil costs 12 yen and an eraser costs 8 yen. How much do they cost together?" },
      pl: { title: "Zakupy w sklepie", question: "Ołówek kosztuje 12 jenów, a gumka 8 jenów. Ile kosztują razem?" },
      fr: { title: "Au magasin", question: "Un crayon coûte 12 yens et une gomme 8 yens. Combien coûtent-ils ensemble ?" },
      de: { title: "Im Laden", question: "Ein Bleistift kostet 12 Yen und ein Radiergummi 8 Yen. Wie viel kosten beide zusammen?" },
      es: { title: "En la tienda", question: "Un lápiz cuesta 12 yenes y una goma 8 yenes. ¿Cuánto cuestan juntos?" }
    }
  },
  {
    id: "g2-life-01",
    grade: 2,
    subject: "life",
    correct: 0,
    answers: ["4", "5", "6"],
    translations: {
      ja: { title: "季節の観察", question: "木に鳥が6羽いました。2羽が飛んでいきました。何羽残りましたか？" },
      en: { title: "Observing nature", question: "There were 6 birds in a tree. 2 flew away. How many birds are left?" },
      pl: { title: "Obserwujemy przyrodę", question: "Na drzewie siedziało 6 ptaków. Odleciały 2. Ile ptaków zostało?" },
      fr: { title: "Observer la nature", question: "Il y avait 6 oiseaux dans un arbre. 2 se sont envolés. Combien en reste-t-il ?" },
      de: { title: "Die Natur beobachten", question: "Auf einem Baum saßen 6 Vögel. 2 flogen weg. Wie viele sind noch da?" },
      es: { title: "Observamos la naturaleza", question: "Había 6 pájaros en un árbol. 2 se fueron volando. ¿Cuántos quedan?" }
    }
  },
  {
    id: "g3-social-01",
    grade: 3,
    subject: "social",
    correct: 1,
    answers: ["3", "4", "5"],
    translations: {
      ja: { title: "日本の島々", question: "日本の主な島は4つです。北海道、本州、四国と、もう1つは何ですか？（答えの数を選びましょう）" },
      en: { title: "The islands of Japan", question: "Japan has four main islands. How many main islands are there?" },
      pl: { title: "Wyspy Japonii", question: "Japonia ma cztery główne wyspy. Ile jest głównych wysp Japonii?" },
      fr: { title: "Les îles du Japon", question: "Le Japon compte quatre îles principales. Combien y a-t-il d’îles principales ?" },
      de: { title: "Die Inseln Japans", question: "Japan hat vier Hauptinseln. Wie viele Hauptinseln gibt es?" },
      es: { title: "Las islas de Japón", question: "Japón tiene cuatro islas principales. ¿Cuántas islas principales hay?" }
    }
  },
  {
    id: "g3-science-01",
    grade: 3,
    subject: "science",
    correct: 2,
    answers: ["5", "6", "7"],
    translations: {
      ja: { title: "たねをまこう", question: "植木ばちが2つあります。それぞれにたねを3つまきます。たねは全部でいくつですか？" },
      en: { title: "Planting seeds", question: "There are 2 pots. You plant 3 seeds in each pot. How many seeds do you plant?" },
      pl: { title: "Siejemy nasiona", question: "Są 2 doniczki. Do każdej wsadzono po 3 nasiona. Ile nasion wsadzono razem?" },
      fr: { title: "Planter des graines", question: "Il y a 2 pots. Tu plantes 3 graines dans chaque pot. Combien de graines as-tu plantées ?" },
      de: { title: "Samen pflanzen", question: "Es gibt 2 Blumentöpfe. In jeden kommen 3 Samen. Wie viele Samen sind es insgesamt?" },
      es: { title: "Plantamos semillas", question: "Hay 2 macetas. Plantas 3 semillas en cada una. ¿Cuántas semillas plantas en total?" }
    }
  },
  {
    id: "g4-math-01",
    grade: 4,
    subject: "math",
    correct: 1,
    answers: ["36", "42", "48"],
    translations: {
      ja: { title: "九九チャレンジ", question: "6 × 7 はいくつですか？" },
      en: { title: "Multiplication challenge", question: "What is 6 × 7?" },
      pl: { title: "Wyzwanie z mnożenia", question: "Ile wynosi 6 × 7?" },
      fr: { title: "Défi de multiplication", question: "Combien font 6 × 7 ?" },
      de: { title: "Malaufgabe", question: "Was ist 6 × 7?" },
      es: { title: "Reto de multiplicación", question: "¿Cuánto es 6 × 7?" }
    }
  },
  {
    id: "g4-science-01",
    grade: 4,
    subject: "science",
    correct: 0,
    answers: ["24", "30", "36"],
    translations: {
      ja: { title: "水の温度を調べよう", question: "水の温度は18°Cでした。6°C上がりました。今は何°Cですか？" },
      en: { title: "Measuring water temperature", question: "The water was 18°C. Its temperature rose by 6°C. What is it now?" },
      pl: { title: "Mierzymy temperaturę wody", question: "Woda miała 18°C. Jej temperatura wzrosła o 6°C. Ile wynosi teraz?" },
      fr: { title: "Mesurer la température de l’eau", question: "L’eau était à 18°C. Sa température a augmenté de 6°C. Quelle est sa température maintenant ?" },
      de: { title: "Die Wassertemperatur messen", question: "Das Wasser hatte 18°C. Die Temperatur stieg um 6°C. Wie warm ist es jetzt?" },
      es: { title: "Medimos la temperatura del agua", question: "El agua estaba a 18°C. La temperatura subió 6°C. ¿Cuál es ahora?" }
    }
  },
  {
    id: "g5-home-01",
    grade: 5,
    subject: "home",
    correct: 1,
    answers: ["180", "200", "220"],
    translations: {
      ja: { title: "おこづかいの計画", question: "500円あります。180円のノートと120円のペンを買いました。何円残りますか？" },
      en: { title: "Planning your allowance", question: "You have 500 yen. You buy a notebook for 180 yen and a pen for 120 yen. How much is left?" },
      pl: { title: "Planujemy kieszonkowe", question: "Masz 500 jenów. Kupujesz zeszyt za 180 i długopis za 120 jenów. Ile zostaje?" },
      fr: { title: "Gérer son argent de poche", question: "Tu as 500 yens. Tu achètes un cahier à 180 yens et un stylo à 120 yens. Combien te reste-t-il ?" },
      de: { title: "Das Taschengeld planen", question: "Du hast 500 Yen. Du kaufst ein Heft für 180 Yen und einen Stift für 120 Yen. Wie viel bleibt übrig?" },
      es: { title: "Planificamos la paga", question: "Tienes 500 yenes. Compras un cuaderno por 180 y un bolígrafo por 120 yenes. ¿Cuánto te queda?" }
    }
  },
  {
    id: "g5-english-01",
    grade: 5,
    subject: "foreign",
    correct: 2,
    answers: ["2", "3", "4"],
    translations: {
      ja: { title: "英単語を数えよう", question: "英単語「BOOK」は何文字ですか？" },
      en: { title: "Count the letters", question: "How many letters are in the English word BOOK?" },
      pl: { title: "Policz litery", question: "Ile liter ma angielskie słowo BOOK?" },
      fr: { title: "Compte les lettres", question: "Combien de lettres y a-t-il dans le mot anglais BOOK ?" },
      de: { title: "Buchstaben zählen", question: "Wie viele Buchstaben hat das englische Wort BOOK?" },
      es: { title: "Cuenta las letras", question: "¿Cuántas letras tiene la palabra inglesa BOOK?" }
    }
  },
  {
    id: "g6-math-01",
    grade: 6,
    subject: "math",
    correct: 1,
    answers: ["30", "40", "50"],
    translations: {
      ja: { title: "分数のチャレンジ", question: "80の半分はいくつですか？" },
      en: { title: "Fraction challenge", question: "What is one half of 80?" },
      pl: { title: "Wyzwanie z ułamków", question: "Ile wynosi połowa z 80?" },
      fr: { title: "Défi sur les fractions", question: "Combien vaut la moitié de 80 ?" },
      de: { title: "Bruchrechnen", question: "Wie viel ist die Hälfte von 80?" },
      es: { title: "Reto de fracciones", question: "¿Cuánto es la mitad de 80?" }
    }
  },
  {
    id: "g6-science-01",
    grade: 6,
    subject: "science",
    correct: 0,
    answers: ["24", "12", "60"],
    translations: {
      ja: { title: "地球の一日", question: "地球は約何時間で一回転しますか？" },
      en: { title: "A day on Earth", question: "About how many hours does Earth take to rotate once?" },
      pl: { title: "Doba na Ziemi", question: "Ile godzin zajmuje Ziemi wykonanie jednego obrotu?" },
      fr: { title: "Une journée sur Terre", question: "Environ combien d’heures la Terre met-elle pour faire un tour sur elle-même ?" },
      de: { title: "Ein Tag auf der Erde", question: "Wie viele Stunden braucht die Erde ungefähr für eine Drehung?" },
      es: { title: "Un día en la Tierra", question: "¿Cuántas horas tarda aproximadamente la Tierra en girar una vez?" }
    }
  }
];

const UI = {
  ja: {
    title: "マナビ・クエスト", subtitle: "日本を旅しながら学ぼう！",
    languageLabel: "言語", gradeLabel: "学年", subjectLabel: "教科",
    allSubjects: "すべての教科", grade: "年生", missionsTitle: "ミッション",
    welcomeTitle: "冒険を始めよう！", welcomeText: "左からミッションを選んでください。",
    rewardsTitle: "ごほうび", pointsLabel: "ポイント", completedLabel: "クリアしたミッション",
    resetProgress: "進捗をリセット", teacherTitle: "先生のパネル",
    teacherHelp: "JSON形式のミッションを編集、インポート、エクスポートできます。",
    importButton: "JSONを読み込む", exportButton: "JSONをダウンロード",
    restoreButton: "初期ミッションに戻す", footerText: "学びながら日本を冒険しよう！",
    correct: "正解！ミッションをクリアしました。", wrong: "もう一度考えてみましょう。",
    chooseAnswer: "答えを選んでください。", noMissions: "この条件のミッションはありません。",
    badge1: "はじめの一歩", badge2: "チャレンジャー", badge3: "クエストマスター",
    imported: "ミッションを読み込みました。", invalid: "JSONを確認してください。"
  },
  en: {
    title: "Manabi Quest", subtitle: "Learn as you travel across Japan!",
    languageLabel: "Language", gradeLabel: "Grade", subjectLabel: "Subject",
    allSubjects: "All subjects", grade: "Grade", missionsTitle: "Missions",
    welcomeTitle: "Start your adventure!", welcomeText: "Choose a mission from the list.",
    rewardsTitle: "Rewards", pointsLabel: "Points", completedLabel: "Missions completed",
    resetProgress: "Reset progress", teacherTitle: "Teacher panel",
    teacherHelp: "Edit, import, or export missions in JSON format.",
    importButton: "Import JSON", exportButton: "Download JSON",
    restoreButton: "Restore sample missions", footerText: "Explore Japan while you learn!",
    correct: "Correct! Mission completed.", wrong: "Try thinking about it again.",
    chooseAnswer: "Choose an answer.", noMissions: "No missions match these filters.",
    badge1: "First steps", badge2: "Challenger", badge3: "Quest master",
    imported: "Missions imported.", invalid: "Please check the JSON."
  },
  pl: {
    title: "Manabi Quest", subtitle: "Ucz się, podróżując po Japonii!",
    languageLabel: "Język", gradeLabel: "Klasa", subjectLabel: "Przedmiot",
    allSubjects: "Wszystkie przedmioty", grade: "klasa", missionsTitle: "Misje",
    welcomeTitle: "Rozpocznij przygodę!", welcomeText: "Wybierz misję z listy.",
    rewardsTitle: "Nagrody", pointsLabel: "Punkty", completedLabel: "Ukończone misje",
    resetProgress: "Zresetuj postępy", teacherTitle: "Panel nauczyciela",
    teacherHelp: "Edytuj, importuj lub eksportuj misje w formacie JSON.",
    importButton: "Wczytaj JSON", exportButton: "Pobierz JSON",
    restoreButton: "Przywróć przykładowe misje", footerText: "Ucz się i odkrywaj Japonię!",
    correct: "Dobrze! Misja ukończona.", wrong: "Spróbuj jeszcze raz.",
    chooseAnswer: "Wybierz odpowiedź.", noMissions: "Brak misji dla wybranych filtrów.",
    badge1: "Pierwsze kroki", badge2: "Wyzwanie", badge3: "Mistrz misji",
    imported: "Wczytano misje.", invalid: "Sprawdź poprawność JSON."
  },
  fr: {
    title: "Manabi Quest", subtitle: "Apprends en voyageant à travers le Japon !",
    languageLabel: "Langue", gradeLabel: "Classe", subjectLabel: "Matière",
    allSubjects: "Toutes les matières", grade: "e année", missionsTitle: "Missions",
    welcomeTitle: "Commence l’aventure !", welcomeText: "Choisis une mission dans la liste.",
    rewardsTitle: "Récompenses", pointsLabel: "Points", completedLabel: "Missions terminées",
    resetProgress: "Réinitialiser la progression", teacherTitle: "Espace enseignant",
    teacherHelp: "Modifie, importe ou exporte des missions au format JSON.",
    importButton: "Importer JSON", exportButton: "Télécharger JSON",
    restoreButton: "Restaurer les missions exemples", footerText: "Apprends en explorant le Japon !",
    correct: "Bonne réponse ! Mission terminée.", wrong: "Essaie encore.",
    chooseAnswer: "Choisis une réponse.", noMissions: "Aucune mission ne correspond.",
    badge1: "Premiers pas", badge2: "Défi relevé", badge3: "Maître des quêtes",
    imported: "Missions importées.", invalid: "Vérifie le JSON."
  },
  de: {
    title: "Manabi Quest", subtitle: "Lerne auf deiner Reise durch Japan!",
    languageLabel: "Sprache", gradeLabel: "Klasse", subjectLabel: "Fach",
    allSubjects: "Alle Fächer", grade: "Klasse", missionsTitle: "Missionen",
    welcomeTitle: "Starte dein Abenteuer!", welcomeText: "Wähle eine Mission aus der Liste.",
    rewardsTitle: "Belohnungen", pointsLabel: "Punkte", completedLabel: "Abgeschlossene Missionen",
    resetProgress: "Fortschritt zurücksetzen", teacherTitle: "Lehrkräftebereich",
    teacherHelp: "Missionen im JSON-Format bearbeiten, importieren oder exportieren.",
    importButton: "JSON importieren", exportButton: "JSON herunterladen",
    restoreButton: "Beispielmissionen wiederherstellen", footerText: "Lerne und entdecke Japan!",
    correct: "Richtig! Mission abgeschlossen.", wrong: "Versuche es noch einmal.",
    chooseAnswer: "Wähle eine Antwort.", noMissions: "Keine Missionen für diese Auswahl.",
    badge1: "Erste Schritte", badge2: "Herausforderung", badge3: "Quest-Meister",
    imported: "Missionen importiert.", invalid: "Bitte überprüfe das JSON."
  },
  es: {
    title: "Manabi Quest", subtitle: "¡Aprende mientras viajas por Japón!",
    languageLabel: "Idioma", gradeLabel: "Curso", subjectLabel: "Asignatura",
    allSubjects: "Todas las asignaturas", grade: ".º curso", missionsTitle: "Misiones",
    welcomeTitle: "¡Empieza la aventura!", welcomeText: "Elige una misión de la lista.",
    rewardsTitle: "Recompensas", pointsLabel: "Puntos", completedLabel: "Misiones completadas",
    resetProgress: "Reiniciar progreso", teacherTitle: "Panel del profesor",
    teacherHelp: "Edita, importa o exporta misiones en formato JSON.",
    importButton: "Importar JSON", exportButton: "Descargar JSON",
    restoreButton: "Restaurar misiones de ejemplo", footerText: "¡Aprende explorando Japón!",
    correct: "¡Correcto! Misión completada.", wrong: "Inténtalo de nuevo.",
    chooseAnswer: "Elige una respuesta.", noMissions: "No hay misiones para estos filtros.",
    badge1: "Primeros pasos", badge2: "Desafío superado", badge3: "Maestro de misiones",
    imported: "Misiones importadas.", invalid: "Comprueba el JSON."
  }
};

const SUBJECTS = {
  ja: { math: "算数", life: "生活", social: "社会", science: "理科", home: "家庭科", foreign: "外国語" },
  en: { math: "Mathematics", life: "Life studies", social: "Social studies", science: "Science", home: "Home economics", foreign: "Foreign language" },
  pl: { math: "Matematyka", life: "Życie codzienne", social: "Nauki społeczne", science: "Przyroda", home: "Gospodarstwo domowe", foreign: "Język obcy" },
  fr: { math: "Mathématiques", life: "Vie quotidienne", social: "Sciences sociales", science: "Sciences", home: "Éducation familiale", foreign: "Langue étrangère" },
  de: { math: "Mathematik", life: "Lebenskunde", social: "Gesellschaftskunde", science: "Naturwissenschaften", home: "Hauswirtschaft", foreign: "Fremdsprache" },
  es: { math: "Matemáticas", life: "Vida cotidiana", social: "Ciencias sociales", science: "Ciencias naturales", home: "Educación doméstica", foreign: "Lengua extranjera" }
};

const KEYS = {
  missions: "manabi-missions-v1",
  progress: "manabi-progress-v1",
  language: "manabi-language-v1"
};

let language = detectLanguage();
let missions = loadMissions();
let progress = loadProgress();
let selectedMissionId = null;

const $ = selector => document.querySelector(selector);

function detectLanguage() {
  const saved = localStorage.getItem(KEYS.language);
  if (saved && UI[saved]) return saved;

  const browserLanguages = navigator.languages || [navigator.language || "ja"];
  for (const browserLanguage of browserLanguages) {
    const code = browserLanguage.toLowerCase().split("-")[0];
    if (UI[code]) return code;
  }
  return "ja";
}

function loadMissions() {
  try {
    const saved = localStorage.getItem(KEYS.missions);
    return saved ? JSON.parse(saved) : SAMPLE_MISSIONS;
  } catch {
    return SAMPLE_MISSIONS;
  }
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(KEYS.progress)) || { points: 0, completed: [] };
  } catch {
    return { points: 0, completed: [] };
  }
}

function saveProgress() {
  localStorage.setItem(KEYS.progress, JSON.stringify(progress));
}

function t(key) {
  return UI[language][key] || UI.ja[key] || key;
}

function applyTranslations() {
  document.documentElement.lang = language;
  $("#languageSelect").value = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  buildFilters();
  renderAll();
}

function buildFilters() {
  const gradeSelect = $("#gradeSelect");
  const oldGrade = gradeSelect.value || "1";
  gradeSelect.innerHTML = "";

  for (let grade = 1; grade <= 6; grade++) {
    const option = document.createElement("option");
    option.value = String(grade);
    option.textContent = `${grade} ${t("grade")}`;
    gradeSelect.appendChild(option);
  }
  gradeSelect.value = oldGrade;

  const subjectSelect = $("#subjectSelect");
  const oldSubject = subjectSelect.value || "all";
  subjectSelect.innerHTML = "";

  const all = document.createElement("option");
  all.value = "all";
  all.textContent = t("allSubjects");
  subjectSelect.appendChild(all);

  const usedSubjects = [...new Set(missions.map(mission => mission.subject))];
  for (const subject of usedSubjects) {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = SUBJECTS[language][subject] || subject;
    subjectSelect.appendChild(option);
  }

  subjectSelect.value = usedSubjects.includes(oldSubject) ? oldSubject : "all";
}

function missionText(mission) {
  return mission.translations?.[language] || mission.translations?.ja || {
    title: mission.id,
    question: ""
  };
}

function getFilteredMissions() {
  const grade = Number($("#gradeSelect").value || 1);
  const subject = $("#subjectSelect").value || "all";
  return missions.filter(mission =>
    mission.grade === grade && (subject === "all" || mission.subject === subject)
  );
}

function renderMissionList() {
  const list = $("#missionList");
  const filtered = getFilteredMissions();
  list.innerHTML = "";
  $("#missionCount").textContent = `${filtered.length}`;

  if (!filtered.length) {
    list.textContent = t("noMissions");
    return;
  }

  filtered.forEach(mission => {
    const button = document.createElement("button");
    const done = progress.completed.includes(mission.id);
    button.className = "mission-item" +
      (mission.id === selectedMissionId ? " active" : "") +
      (done ? " done" : "");
    button.textContent = missionText(mission).title;
    button.addEventListener("click", () => {
      selectedMissionId = mission.id;
      renderAll();
    });
    list.appendChild(button);
  });

  if (!filtered.some(mission => mission.id === selectedMissionId)) {
    selectedMissionId = null;
    $("#missionArea").innerHTML =
      `<h2>${escapeHtml(t("welcomeTitle"))}</h2><p>${escapeHtml(t("welcomeText"))}</p>`;
  }
}

function renderCurrentMission() {
  const mission = missions.find(item => item.id === selectedMissionId);
  if (!mission) return;

  const text = missionText(mission);
  const subjectName = SUBJECTS[language][mission.subject] || mission.subject;
  const area = $("#missionArea");

  area.innerHTML = `
    <p class="muted">${escapeHtml(subjectName)} · ${mission.grade} ${escapeHtml(t("grade"))}</p>
    <h2>${escapeHtml(text.title || mission.id)}</h2>
    <p>${escapeHtml(text.question || "")}</p>
    <p class="muted">${escapeHtml(t("chooseAnswer"))}</p>
    <div class="answer-list">
      ${mission.answers.map((answer, index) =>
        `<button class="answer-button" data-answer="${index}">${escapeHtml(String(answer))}</button>`
      ).join("")}
    </div>
    <p id="feedback" class="feedback" aria-live="polite"></p>
  `;

  area.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", () => checkAnswer(mission, Number(button.dataset.answer)));
  });
}

function checkAnswer(mission, answerIndex) {
  const feedback = $("#feedback");
  const buttons = document.querySelectorAll(".answer-button");

  if (answerIndex === mission.correct) {
    feedback.textContent = t("correct");
    feedback.className = "feedback success";
    buttons.forEach(button => button.disabled = true);

    if (!progress.completed.includes(mission.id)) {
      progress.completed.push(mission.id);
      progress.points += 10;
      saveProgress();
    }
    renderAll();
    renderCurrentMission();
    $("#feedback").textContent = t("correct");
    $("#feedback").className = "feedback success";
    document.querySelectorAll(".answer-button").forEach(button => button.disabled = true);
  } else {
    feedback.textContent = t("wrong");
    feedback.className = "feedback error";
  }
}

function renderRewards() {
  $("#points").textContent = progress.points;
  $("#completedCount").textContent = progress.completed.length;

  const badges = [
    { threshold: 1, key: "badge1" },
    { threshold: 5, key: "badge2" },
    { threshold: 10, key: "badge3" }
  ];

  $("#badges").innerHTML = badges.map(badge => {
    const unlocked = progress.completed.length >= badge.threshold;
    return `<div class="badge ${unlocked ? "" : "locked"}">
      ${unlocked ? "★" : "☆"} ${escapeHtml(t(badge.key))}
    </div>`;
  }).join("");
}

function renderAll() {
  renderMissionList();
  renderRewards();
  if (selectedMissionId) renderCurrentMission();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showTeacherJson() {
  $("#missionJson").value = JSON.stringify(missions, null, 2);
}

$("#languageSelect").addEventListener("change", event => {
  language = UI[event.target.value] ? event.target.value : "ja";
  localStorage.setItem(KEYS.language, language);
  applyTranslations();
});

$("#gradeSelect").addEventListener("change", () => {
  selectedMissionId = null;
  renderAll();
});

$("#subjectSelect").addEventListener("change", () => {
  selectedMissionId = null;
  renderAll();
});

$("#importMissions").addEventListener("click", () => {
  try {
    const imported = JSON.parse($("#missionJson").value);
    if (!Array.isArray(imported)) throw new Error("Expected an array");

    for (const mission of imported) {
      if (!mission.id || !Number.isInteger(mission.grade) ||
          mission.grade < 1 || mission.grade > 6 ||
          !mission.subject || !Array.isArray(mission.answers) ||
          !Number.isInteger(mission.correct) ||
          mission.correct < 0 || mission.correct >= mission.answers.length ||
          !mission.translations) {
        throw new Error("Invalid mission");
      }
    }

    missions = imported;
    localStorage.setItem(KEYS.missions, JSON.stringify(missions));
    selectedMissionId = null;
    $("#teacherMessage").textContent = t("imported");
    applyTranslations();
    showTeacherJson();
  } catch {
    $("#teacherMessage").textContent = t("invalid");
  }
});

$("#exportMissions").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(missions, null, 2)], {
    type: "application/json"
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "manabi-missions.json";
  link.click();
  URL.revokeObjectURL(link.href);
});

$("#resetMissions").addEventListener("click", () => {
  missions = SAMPLE_MISSIONS;
  localStorage.removeItem(KEYS.missions);
  selectedMissionId = null;
  $("#teacherMessage").textContent = t("restoreButton");
  applyTranslations();
  showTeacherJson();
});

$("#resetProgress").addEventListener("click", () => {
  if (!confirm(t("resetProgress") + "?")) return;
  progress = { points: 0, completed: [] };
  saveProgress();
  renderAll();
});

document.querySelector(".teacher-panel").addEventListener("toggle", event => {
  if (event.target.open) showTeacherJson();
});

applyTranslations();
