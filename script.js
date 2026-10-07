/* =========================================================
   KANJIS N5
========================================================= */

const kanjis = [

    { kanji: "一", hiragana: "いち", francais: "Un" },
    { kanji: "二", hiragana: "に", francais: "Deux" },
    { kanji: "三", hiragana: "さん", francais: "Trois" },
    { kanji: "四", hiragana: "よん", francais: "Quatre" },
    { kanji: "五", hiragana: "ご", francais: "Cinq" },

    { kanji: "六", hiragana: "ろく", francais: "Six" },
    { kanji: "七", hiragana: "なな", francais: "Sept" },
    { kanji: "八", hiragana: "はち", francais: "Huit" },
    { kanji: "九", hiragana: "きゅう", francais: "Neuf" },
    { kanji: "十", hiragana: "じゅう", francais: "Dix" },

    { kanji: "百", hiragana: "ひゃく", francais: "Cent" },
    { kanji: "千", hiragana: "せん", francais: "Mille" },
    { kanji: "万", hiragana: "まん", francais: "Dix mille" },
    { kanji: "円", hiragana: "えん", francais: "Yen" },
    { kanji: "日", hiragana: "ひ", francais: "Jour / soleil" },

    { kanji: "月", hiragana: "つき", francais: "Lune / mois" },
    { kanji: "火", hiragana: "ひ", francais: "Feu" },
    { kanji: "水", hiragana: "みず", francais: "Eau" },
    { kanji: "木", hiragana: "き", francais: "Arbre" },
    { kanji: "金", hiragana: "かね", francais: "Argent / or" },

    { kanji: "土", hiragana: "つち", francais: "Terre" },
    { kanji: "年", hiragana: "とし", francais: "Année" },
    { kanji: "今", hiragana: "いま", francais: "Maintenant" },
    { kanji: "前", hiragana: "まえ", francais: "Avant / devant" },
    { kanji: "後", hiragana: "あと", francais: "Après / derrière" },

    { kanji: "間", hiragana: "あいだ", francais: "Entre / intervalle" },
    { kanji: "毎", hiragana: "まい", francais: "Chaque" },
    { kanji: "午", hiragana: "ご", francais: "Midi" },
    { kanji: "半", hiragana: "はん", francais: "Moitié" },
    { kanji: "時", hiragana: "とき", francais: "Temps / heure" },

    { kanji: "分", hiragana: "ぶん", francais: "Minute / partie" },
    { kanji: "上", hiragana: "うえ", francais: "Dessus" },
    { kanji: "下", hiragana: "した", francais: "Dessous" },
    { kanji: "中", hiragana: "なか", francais: "Milieu / intérieur" },
    { kanji: "外", hiragana: "そと", francais: "Extérieur" },

    { kanji: "左", hiragana: "ひだり", francais: "Gauche" },
    { kanji: "右", hiragana: "みぎ", francais: "Droite" },
    { kanji: "北", hiragana: "きた", francais: "Nord" },
    { kanji: "南", hiragana: "みなみ", francais: "Sud" },
    { kanji: "東", hiragana: "ひがし", francais: "Est" },

    { kanji: "西", hiragana: "にし", francais: "Ouest" },
    { kanji: "大", hiragana: "おおきい", francais: "Grand" },
    { kanji: "小", hiragana: "ちいさい", francais: "Petit" },
    { kanji: "高", hiragana: "たかい", francais: "Haut / cher" },
    { kanji: "安", hiragana: "やすい", francais: "Bon marché" },

    { kanji: "新", hiragana: "あたらしい", francais: "Nouveau" },
    { kanji: "古", hiragana: "ふるい", francais: "Vieux / ancien" },
    { kanji: "長", hiragana: "ながい", francais: "Long" },
    { kanji: "多", hiragana: "おおい", francais: "Nombreux / beaucoup" },
    { kanji: "少", hiragana: "すくない", francais: "Peu" },

    { kanji: "白", hiragana: "しろ", francais: "Blanc" },
    { kanji: "黒", hiragana: "くろ", francais: "Noir" },
    { kanji: "赤", hiragana: "あか", francais: "Rouge" },
    { kanji: "青", hiragana: "あお", francais: "Bleu" },
    { kanji: "天", hiragana: "てん", francais: "Ciel" },

    { kanji: "気", hiragana: "き", francais: "Esprit / énergie" },
    { kanji: "雨", hiragana: "あめ", francais: "Pluie" },
    { kanji: "電", hiragana: "でん", francais: "Électricité" },
    { kanji: "車", hiragana: "くるま", francais: "Voiture" },
    { kanji: "駅", hiragana: "えき", francais: "Gare" },

    { kanji: "山", hiragana: "やま", francais: "Montagne" },
    { kanji: "川", hiragana: "かわ", francais: "Rivière" },
    { kanji: "田", hiragana: "た", francais: "Rizière" },
    { kanji: "人", hiragana: "ひと", francais: "Personne" },
    { kanji: "女", hiragana: "おんな", francais: "Femme" },

    { kanji: "男", hiragana: "おとこ", francais: "Homme" },
    { kanji: "子", hiragana: "こ", francais: "Enfant" },
    { kanji: "父", hiragana: "ちち", francais: "Père" },
    { kanji: "母", hiragana: "はは", francais: "Mère" },
    { kanji: "友", hiragana: "とも", francais: "Ami" },

    { kanji: "先", hiragana: "さき", francais: "Avant / précédent" },
    { kanji: "生", hiragana: "せい", francais: "Vie / naissance" },
    { kanji: "学", hiragana: "がく", francais: "Étude / apprendre" },
    { kanji: "校", hiragana: "こう", francais: "École" },
    { kanji: "本", hiragana: "ほん", francais: "Livre / origine" },

    { kanji: "名", hiragana: "な", francais: "Nom" },
    { kanji: "語", hiragana: "ご", francais: "Langue / mot" },
    { kanji: "文", hiragana: "ぶん", francais: "Phrase / texte" },
    { kanji: "字", hiragana: "じ", francais: "Caractère / lettre" },
    { kanji: "国", hiragana: "くに", francais: "Pays" },

    { kanji: "店", hiragana: "みせ", francais: "Magasin" },
    { kanji: "何", hiragana: "なに", francais: "Quoi" },
    { kanji: "行", hiragana: "いく", francais: "Aller" },
    { kanji: "来", hiragana: "くる", francais: "Venir" },
    { kanji: "帰", hiragana: "かえる", francais: "Retourner" },

    { kanji: "見", hiragana: "みる", francais: "Voir" },
    { kanji: "聞", hiragana: "きく", francais: "Écouter / entendre" },
    { kanji: "話", hiragana: "はなす", francais: "Parler" },
    { kanji: "読", hiragana: "よむ", francais: "Lire" },
    { kanji: "書", hiragana: "かく", francais: "Écrire" },

    { kanji: "食", hiragana: "たべる", francais: "Manger" },
    { kanji: "飲", hiragana: "のむ", francais: "Boire" },
    { kanji: "買", hiragana: "かう", francais: "Acheter" },
    { kanji: "会", hiragana: "あう", francais: "Rencontrer" },
    { kanji: "休", hiragana: "やすむ", francais: "Se reposer" },

    { kanji: "入", hiragana: "はいる", francais: "Entrer" },
    { kanji: "出", hiragana: "でる", francais: "Sortir" },
    { kanji: "立", hiragana: "たつ", francais: "Se lever" },
    { kanji: "開", hiragana: "あける", francais: "Ouvrir" },
    { kanji: "閉", hiragana: "しめる", francais: "Fermer" },

    { kanji: "作", hiragana: "つくる", francais: "Faire / fabriquer" },
    { kanji: "使", hiragana: "つかう", francais: "Utiliser" },
    { kanji: "住", hiragana: "すむ", francais: "Habiter" },
    { kanji: "思", hiragana: "おもう", francais: "Penser" },
    { kanji: "知", hiragana: "しる", francais: "Savoir / connaître" },

    { kanji: "言", hiragana: "いう", francais: "Dire" }
];


/* =========================================================
   VARIABLES
========================================================= */

let learned =
    JSON.parse(
        localStorage.getItem("kanjiLearned")
    ) || [];

let seriesSuccess =
    JSON.parse(
        localStorage.getItem("seriesSuccess")
    ) || {};

let currentSeries = 0;

let exerciseKanjis = [];

let currentKanjiIndex = 0;

let step = "lecture";

let score = 0;

let currentQuestion;


/* =========================================================
   MELANGER UN TABLEAU
========================================================= */

function shuffle(array) {

    let result = [...array];

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            result[i],
            result[j]
        ] =
        [
            result[j],
            result[i]
        ];
    }

    return result;
}


/* =========================================================
   MENU
========================================================= */

function showMenu() {

    document.getElementById(
        "menu"
    ).style.display = "block";

    document.getElementById(
        "exercise"
    ).style.display = "none";

    displayKanjiList();

    updateProgress();
}


/* =========================================================
   LISTE DES KANJIS
========================================================= */

function displayKanjiList() {

    const list =
        document.getElementById(
            "kanjiList"
        );

    list.innerHTML = "";


    for (
        let i = 0;
        i < kanjis.length;
        i += 5
    ) {

        const row =
            document.createElement(
                "div"
            );

        row.classList.add(
            "kanjiRow"
        );


        for (
            let j = i;
            j < i + 5 &&
            j < kanjis.length;
            j++
        ) {

            const button =
                document.createElement(
                    "button"
                );

            button.textContent =
                kanjis[j].kanji;

            button.classList.add(
                "kanjiBox"
            );


            if (
                learned.includes(j)
            ) {

                button.classList.add(
                    "kanjiLearned"
                );

            } else {

                button.classList.add(
                    "kanjiNotLearned"
                );

            }


            row.appendChild(button);
        }


        list.appendChild(row);
    }
}


/* =========================================================
   PROGRESSION
========================================================= */

function updateProgress() {

    const number =
        learned.length;

    document.getElementById(
        "progressText"
    ).textContent =
        number +
        " / " +
        kanjis.length +
        " kanjis acquis";


    const percentage =
        (number / kanjis.length) * 100;


    document.getElementById(
        "progressFill"
    ).style.width =
        percentage + "%";
}


/* =========================================================
   KANJIS D'UNE SERIE
========================================================= */

function getSeriesKanjis(
    seriesNumber
) {

    const start =
        seriesNumber * 5;

    const end =
        Math.min(
            start + 5,
            kanjis.length
        );


    let result = [];


    for (
        let i = start;
        i < end;
        i++
    ) {

        result.push(i);

    }


    return result;
}


/* =========================================================
   KANJI DE REVISION
========================================================= */

function getReviewKanji(
    seriesNumber,
    currentIndexes
) {

    if (
        seriesNumber === 0
    ) {

        return null;

    }


    let previousIndexes = [];


    for (
        let i = 0;
        i < seriesNumber;
        i++
    ) {

        const previous =
            getSeriesKanjis(i);


        previous.forEach(index => {

            if (
                learned.includes(index)
            ) {

                previousIndexes.push(
                    index
                );

            }

        });

    }


    previousIndexes =
        previousIndexes.filter(
            index =>
                !currentIndexes.includes(
                    index
                )
        );


    if (
        previousIndexes.length === 0
    ) {

        return null;

    }


    return previousIndexes[
        Math.floor(
            Math.random() *
            previousIndexes.length
        )
    ];
}


/* =========================================================
   COMMENCER EXERCICE
========================================================= */

function startExercise() {

    currentSeries =
        getFirstUnlearnedSeries();


    if (
        currentSeries === -1
    ) {

        alert(
            "🎉 Tous les kanjis sont acquis !"
        );

        return;
    }


    document.getElementById(
        "menu"
    ).style.display = "none";

    document.getElementById(
        "exercise"
    ).style.display = "block";


    prepareSeries();
}


/* =========================================================
   PREMIERE SERIE NON VALIDEE
========================================================= */

function getFirstUnlearnedSeries() {

    const totalSeries =
        Math.ceil(
            kanjis.length / 5
        );


    for (
        let i = 0;
        i < totalSeries;
        i++
    ) {

        const success =
            seriesSuccess[i] || 0;


        if (
            success < 3
        ) {

            return i;

        }

    }


    return -1;
}


/* =========================================================
   PREPARER UNE SERIE
========================================================= */

function prepareSeries() {

    let baseIndexes =
        getSeriesKanjis(
            currentSeries
        );


    /*
       On mélange les 5 kanjis
    */

    baseIndexes =
        shuffle(baseIndexes);


    /*
       À partir de la série 2,
       on ajoute 1 ancien kanji
    */

    const reviewKanji =
        getReviewKanji(
            currentSeries,
            baseIndexes
        );


    if (
        reviewKanji !== null
    ) {

        baseIndexes.push(
            reviewKanji
        );

    }


    /*
       On remélange tout
    */

    exerciseKanjis =
        shuffle(baseIndexes);


    currentKanjiIndex = 0;

    score = 0;


    updateSeriesDisplay();

    startKanji();
}


/* =========================================================
   AFFICHAGE SERIE
========================================================= */

function updateSeriesDisplay() {

    const success =
        seriesSuccess[
            currentSeries
        ] || 0;


    document.getElementById(
        "seriesTitle"
    ).textContent =
        "Série " +
        (currentSeries + 1);


    document.getElementById(
        "seriesSuccess"
    ).textContent =
        success +
        " / 3";
}


/* =========================================================
   DEMARRER UN KANJI
========================================================= */

function startKanji() {

    currentQuestion =
        kanjis[
            exerciseKanjis[
                currentKanjiIndex
            ]
        ];


    step = "lecture";


    document.getElementById(
        "stepTitle"
    ).textContent =
        "Étape 1 : Lecture en hiragana";


    document.getElementById(
        "question"
    ).textContent =
        currentQuestion.kanji;


    document.getElementById(
        "result"
    ).innerHTML = "";


    document.getElementById(
        "nextButton"
    ).style.display =
        "none";


    createAnswers();
}


/* =========================================================
   CREER REPONSES
========================================================= */

function createAnswers() {

    const container =
        document.getElementById(
            "answers"
        );


    container.innerHTML = "";


    let answers = [];


    const correctAnswer =
        step === "lecture"
            ? currentQuestion.hiragana
            : currentQuestion.francais;


    answers.push(
        correctAnswer
    );


    /*
       On prend des réponses aléatoires
       qui ne sont pas la bonne réponse.
    */

    while (
        answers.length < 4
    ) {

        const random =
            kanjis[
                Math.floor(
                    Math.random() *
                    kanjis.length
                )
            ];


        const value =
            step === "lecture"
                ? random.hiragana
                : random.francais;


        if (
            !answers.includes(value)
        ) {

            answers.push(value);

        }
    }


    answers =
        shuffle(answers);


    answers.forEach(answer => {

        const button =
            document.createElement(
                "button"
            );


        button.textContent =
            answer;


        button.classList.add(
            "answer"
        );


        button.onclick =
            function () {

                checkAnswer(
                    answer,
                    button
                );

            };


        container.appendChild(
            button
        );
    });
}


/* =========================================================
   VERIFIER REPONSE
========================================================= */

function checkAnswer(
    answer,
    button
) {

    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        b => b.disabled = true
    );


    const correctAnswer =
        step === "lecture"
            ? currentQuestion.hiragana
            : currentQuestion.francais;


    if (
        answer === correctAnswer
    ) {

        button.classList.add(
            "correct"
        );


        document.getElementById(
            "result"
        ).innerHTML =
            "🟢 <strong>Bonne réponse !</strong>";


        score++;

    } else {

        button.classList.add(
            "wrong"
        );


        buttons.forEach(b => {

            if (
                b.textContent ===
                correctAnswer
            ) {

                b.classList.add(
                    "correct"
                );
            }

        });


        document.getElementById(
            "result"
        ).innerHTML =
            "🔴 Ta réponse : <strong>" +
            answer +
            "</strong><br>" +

            "🟢 Bonne réponse : <strong>" +
            correctAnswer +
            "</strong>";
    }


    document.getElementById(
        "score"
    ).textContent =
        "Score : " +
        score +
        " / " +
        (
            currentKanjiIndex + 1
        );


    /*
       On affiche le bouton.
    */

    document.getElementById(
        "nextButton"
    ).textContent =
        step === "lecture"
            ? "Voir la traduction"
            : "Kanji suivant";


    document.getElementById(
        "nextButton"
    ).style.display =
        "inline-block";
}


/* =========================================================
   ETAPE SUIVANTE
========================================================= */

function nextStep() {

    /*
       LECTURE → TRADUCTION
    */

    if (
        step === "lecture"
    ) {

        step = "traduction";


        document.getElementById(
            "stepTitle"
        ).textContent =
            "Étape 2 : Traduction en français";


        document.getElementById(
            "result"
        ).innerHTML = "";


        document.getElementById(
            "nextButton"
        ).style.display =
            "none";


        createAnswers();


        return;
    }


    /*
       TRADUCTION → KANJI SUIVANT
    */

    currentKanjiIndex++;


    if (
        currentKanjiIndex >=
        exerciseKanjis.length
    ) {

        finishSeries();

    } else {

        startKanji();

    }
}


/* =========================================================
   FIN DE SERIE
========================================================= */

function finishSeries() {

    const totalQuestions =
        exerciseKanjis.length * 2;


    const perfect =
        score === totalQuestions;


    /*
       100 %
    */

    if (perfect) {

        seriesSuccess[
            currentSeries
        ] =
            (
                seriesSuccess[
                    currentSeries
                ] || 0
            ) + 1;


        localStorage.setItem(
            "seriesSuccess",
            JSON.stringify(
                seriesSuccess
            )
        );


        if (
            seriesSuccess[
                currentSeries
            ] >= 3
        ) {

            validateSeries();

        } else {

            showPerfectResult();

        }


    } else {

        /*
           Une seule erreur =
           retour à 0
        */

        seriesSuccess[
            currentSeries
        ] = 0;


        localStorage.setItem(
            "seriesSuccess",
            JSON.stringify(
                seriesSuccess
            )
        );


        showFailedResult();
    }
}function finishSeries() {

    const totalQuestions =
        exerciseKanjis.length * 2;

    const perfect =
        score === totalQuestions;


    if (perfect) {

        seriesSuccess[currentSeries] =
            (seriesSuccess[currentSeries] || 0) + 1;

    } else {

        seriesSuccess[currentSeries] = 0;
    }


    localStorage.setItem(
        "seriesSuccess",
        JSON.stringify(seriesSuccess)
    );


    if (
        perfect &&
        seriesSuccess[currentSeries] >= 3
    ) {

        validateSeries();

    } else {

        showSeriesResult(perfect);
    }
}

function showSeriesResult(perfect) {

    updateSeriesDisplay();


    const totalQuestions =
        exerciseKanjis.length * 2;

    const percentage =
        Math.round(
            (score / totalQuestions) * 100
        );


    document.getElementById(
        "question"
    ).textContent = "📊";


    document.getElementById(
        "answers"
    ).innerHTML = "";


    let message = "";


    if (perfect) {

        message = `
            <div class="successMessage">

                🎉 <strong>Série parfaite !</strong>

                <br><br>

                <div style="font-size: 24px;">
                    ${score} / ${totalQuestions}
                </div>

                <br>

                Score :
                <strong>${percentage} %</strong>

                <br><br>

                🔥 Séries parfaites :
                <strong>
                    ${seriesSuccess[currentSeries]} / 3
                </strong>

            </div>
        `;

    } else {

        message = `
            <div class="successMessage">

                🔄 <strong>Série terminée</strong>

                <br><br>

                <div style="font-size: 24px;">
                    ${score} / ${totalQuestions}
                </div>

                <br>

                Score :
                <strong>${percentage} %</strong>

                <br><br>

                ❌ Il faut obtenir 100 %.

                <br>

                Progression de la série :
                <strong>0 / 3</strong>

            </div>
        `;
    }


    document.getElementById(
        "result"
    ).innerHTML = message;


    document.getElementById(
        "nextButton"
    ).textContent =
        "🏠 Retour au menu";


    document.getElementById(
        "nextButton"
    ).style.display =
        "inline-block";


    document.getElementById(
        "nextButton"
    ).onclick =
        function () {

            showMenu();

            // On remet le bouton dans son état normal
            document.getElementById(
                "nextButton"
            ).onclick = nextStep;
        };
}

/* =========================================================
   SERIE PARFAITE MAIS PAS ENCORE 3/3
========================================================= */

function showPerfectResult() {

    updateSeriesDisplay();


    document.getElementById(
        "question"
    ).textContent =
        "🎉";


    document.getElementById(
        "answers"
    ).innerHTML = "";


    document.getElementById(
        "result"
    ).innerHTML =
        `<div class="successMessage">
            🟢 Série parfaite !<br><br>
            Progression : 
            ${
                seriesSuccess[currentSeries]
            } / 3
        </div>`;


    const button =
        document.getElementById(
            "nextButton"
        );


    button.textContent =
        "Recommencer la série";


    button.style.display =
        "inline-block";


    /*
       IMPORTANT :
       On ne change PAS de série ici.
       Il faut refaire la même série.
    */

    button.onclick =
        function () {

            prepareSeries();

        };
}


/* =========================================================
   SERIE RATEE
========================================================= */

function showFailedResult() {

    updateSeriesDisplay();


    document.getElementById(
        "question"
    ).textContent =
        "🔄";


    document.getElementById(
        "answers"
    ).innerHTML = "";


    document.getElementById(
        "result"
    ).innerHTML =
        `<div class="successMessage">
            🔴 Série non réussie.<br><br>
            Tu dois obtenir 100 %.<br>
            La progression revient à 0 / 3.
        </div>`;


    const button =
        document.getElementById(
            "nextButton"
        );


    button.textContent =
        "Recommencer la série";


    button.style.display =
        "inline-block";


    button.onclick =
        function () {

            prepareSeries();

        };
}


/* =========================================================
   VALIDER LA SERIE
========================================================= */

function validateSeries() {

    const indexes =
        getSeriesKanjis(
            currentSeries
        );


    indexes.forEach(index => {

        if (
            !learned.includes(index)
        ) {

            learned.push(index);
        }
    });


    localStorage.setItem(
        "kanjiLearned",
        JSON.stringify(learned)
    );


    updateSeriesDisplay();


    document.getElementById(
        "question"
    ).textContent =
        "🏆";


    document.getElementById(
        "answers"
    ).innerHTML = "";


    document.getElementById(
        "result"
    ).innerHTML =
        `
        <div class="successMessage">

            🏆 <strong>Série validée !</strong>

            <br><br>

            Score :
            <strong>
                ${score} / ${exerciseKanjis.length * 2}
            </strong>

            <br>

            100 % 🎉

            <br><br>

            Tu as réussi cette série
            <strong>3 fois de suite</strong>.

            <br><br>

            Les 5 kanjis sont maintenant acquis !

        </div>
        `;


    document.getElementById(
        "nextButton"
    ).textContent =
        "🏠 Retour au menu";


    document.getElementById(
        "nextButton"
    ).style.display =
        "inline-block";


    document.getElementById(
        "nextButton"
    ).onclick =
        function () {

            showMenu();

            document.getElementById(
                "nextButton"
            ).onclick = nextStep;
        };
}


/* =========================================================
   TOUS LES KANJIS
========================================================= */

function showAllFinished() {

    document.getElementById(
        "question"
    ).textContent =
        "🏆";


    document.getElementById(
        "answers"
    ).innerHTML = "";


    document.getElementById(
        "result"
    ).innerHTML =
        `<div class="successMessage">
            🎉 Félicitations !<br><br>
            Tu as acquis tous les kanjis N5 !
        </div>`;


    document.getElementById(
        "nextButton"
    ).style.display =
        "none";
}


/* =========================================================
   RETOUR MENU
========================================================= */

function backToMenu() {

    showMenu();

}


/* =========================================================
   REINITIALISER
========================================================= */

function resetProgress() {

    const confirmation =
        confirm(
            "Es-tu sûr de vouloir effacer toute ta progression ?"
        );


    if (!confirmation) {

        return;
    }


    learned = [];

    seriesSuccess = {};


    localStorage.removeItem(
        "kanjiLearned"
    );


    localStorage.removeItem(
        "seriesSuccess"
    );


    showMenu();
}


/* =========================================================
   DEMARRAGE
========================================================= */

showMenu();