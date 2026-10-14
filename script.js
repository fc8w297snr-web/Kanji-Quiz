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



/* Exemples de phrases propres à chaque kanji : japonais, lecture complète en hiragana, traduction française. */
const exemplesKanji = {
    "一": [
        "りんごを一つください。",
        "りんごをひとつください。",
        "Un pomme, s’il vous plaît."
    ],
    "二": [
        "二時に会いましょう。",
        "にじにあいましょう。",
        "Retrouvons-nous à deux heures."
    ],
    "三": [
        "三人で行きます。",
        "さんにんでいきます。",
        "Nous y allons à trois."
    ],
    "四": [
        "四時に帰ります。",
        "よじにかえります。",
        "Je rentre à quatre heures."
    ],
    "五": [
        "五分待ってください。",
        "ごふんまってください。",
        "Attendez cinq minutes, s’il vous plaît."
    ],
    "六": [
        "六時に起きます。",
        "ろくじにおきます。",
        "Je me lève à six heures."
    ],
    "七": [
        "七月に日本へ行きます。",
        "しちがつににほんへいきます。",
        "Je vais au Japon en juillet."
    ],
    "八": [
        "八時から勉強します。",
        "はちじからべんきょうします。",
        "J’étudie à partir de huit heures."
    ],
    "九": [
        "九時に学校が始まります。",
        "くじにがっこうがはじまります。",
        "L’école commence à neuf heures."
    ],
    "十": [
        "十人の学生がいます。",
        "じゅうにんのがくせいがいます。",
        "Il y a dix étudiants."
    ],
    "百": [
        "この本は百円です。",
        "このほんはひゃくえんです。",
        "Ce livre coûte 100 yens."
    ],
    "千": [
        "駅まで千メートルです。",
        "えきまでせんめーとるです。",
        "Il y a mille mètres jusqu’à la gare."
    ],
    "万": [
        "一万円を持っています。",
        "いちまんえんをもっています。",
        "J’ai dix mille yens."
    ],
    "円": [
        "水は百円です。",
        "みずはひゃくえんです。",
        "L’eau coûte 100 yens."
    ],
    "日": [
        "今日はいい日です。",
        "きょうはいいひです。",
        "Aujourd’hui est une bonne journée."
    ],
    "月": [
        "月がきれいです。",
        "つきがきれいです。",
        "La lune est belle."
    ],
    "火": [
        "火を使わないでください。",
        "ひをつかわないでください。",
        "Veuillez ne pas utiliser de feu."
    ],
    "水": [
        "毎日、水を飲みます。",
        "まいにち、みずをのみます。",
        "Je bois de l’eau tous les jours."
    ],
    "木": [
        "庭に木があります。",
        "にわにきがあります。",
        "Il y a un arbre dans le jardin."
    ],
    "金": [
        "お金がありません。",
        "おかねがありません。",
        "Je n’ai pas d’argent."
    ],
    "土": [
        "土がぬれています。",
        "つちがぬれています。",
        "La terre est mouillée."
    ],
    "年": [
        "今年、日本へ行きます。",
        "ことし、にほんへいきます。",
        "Cette année, je vais au Japon."
    ],
    "今": [
        "今、勉強しています。",
        "いま、べんきょうしています。",
        "J’étudie en ce moment."
    ],
    "前": [
        "駅の前で会いましょう。",
        "えきのまえであいましょう。",
        "Retrouvons-nous devant la gare."
    ],
    "後": [
        "学校の後で帰ります。",
        "がっこうのあとでかえります。",
        "Je rentre après l’école."
    ],
    "間": [
        "一時間、日本語を勉強します。",
        "いちじかん、にほんごをべんきょうします。",
        "J’étudie le japonais pendant une heure."
    ],
    "毎": [
        "毎朝、コーヒーを飲みます。",
        "まいあさ、こーひーをのみます。",
        "Je bois du café chaque matin."
    ],
    "午": [
        "午前八時に起きます。",
        "ごぜんはちじにおきます。",
        "Je me lève à huit heures du matin."
    ],
    "半": [
        "三時半に来てください。",
        "さんじはんにきてください。",
        "Venez à trois heures et demie, s’il vous plaît."
    ],
    "時": [
        "今、何時ですか。",
        "いま、なんじですか。",
        "Quelle heure est-il ?"
    ],
    "分": [
        "あと五分です。",
        "あとごふんです。",
        "Encore cinq minutes."
    ],
    "上": [
        "本は机の上にあります。",
        "ほんはつくえのうえにあります。",
        "Le livre est sur le bureau."
    ],
    "下": [
        "猫は机の下にいます。",
        "ねこはつくえのしたにいます。",
        "Le chat est sous le bureau."
    ],
    "中": [
        "箱の中に何がありますか。",
        "はこのなかになにがありますか。",
        "Qu’y a-t-il dans la boîte ?"
    ],
    "外": [
        "外は寒いです。",
        "そとはさむいです。",
        "Il fait froid dehors."
    ],
    "左": [
        "左に曲がってください。",
        "ひだりにまがってください。",
        "Tournez à gauche, s’il vous plaît."
    ],
    "右": [
        "右に銀行があります。",
        "みぎにぎんこうがあります。",
        "Il y a une banque à droite."
    ],
    "北": [
        "北の町に住んでいます。",
        "きたのまちにすんでいます。",
        "J’habite dans une ville du nord."
    ],
    "南": [
        "南の国へ行きたいです。",
        "みなみのくにへいきたいです。",
        "Je veux aller dans un pays du sud."
    ],
    "東": [
        "東の空が明るいです。",
        "ひがしのそらがあかるいです。",
        "Le ciel à l’est est lumineux."
    ],
    "西": [
        "西の山が見えます。",
        "にしのやまがみえます。",
        "On voit les montagnes à l’ouest."
    ],
    "大": [
        "大きい犬がいます。",
        "おおきいいぬがいます。",
        "Il y a un grand chien."
    ],
    "小": [
        "小さい店に入りました。",
        "ちいさいみせにはいりました。",
        "Je suis entré dans une petite boutique."
    ],
    "高": [
        "この山はとても高いです。",
        "このやまはとてもたかいです。",
        "Cette montagne est très haute."
    ],
    "安": [
        "この店は安いです。",
        "このみせはやすいです。",
        "Ce magasin est bon marché."
    ],
    "新": [
        "新しい車を買いました。",
        "あたらしいくるまをかいました。",
        "J’ai acheté une nouvelle voiture."
    ],
    "古": [
        "古い本を読みます。",
        "ふるいほんをよみます。",
        "Je lis un vieux livre."
    ],
    "長": [
        "長い道を歩きました。",
        "ながいみちをあるきました。",
        "J’ai marché sur une longue route."
    ],
    "多": [
        "この町は人が多いです。",
        "このまちはひとがおおいです。",
        "Il y a beaucoup de monde dans cette ville."
    ],
    "少": [
        "今日は時間が少ないです。",
        "きょうはじかんがすくないです。",
        "Aujourd’hui, j’ai peu de temps."
    ],
    "白": [
        "白い猫がいます。",
        "しろいねこがいます。",
        "Il y a un chat blanc."
    ],
    "黒": [
        "黒いかばんを使います。",
        "くろいかばんをつかいます。",
        "J’utilise un sac noir."
    ],
    "赤": [
        "赤い花が好きです。",
        "あかいはながすきです。",
        "J’aime les fleurs rouges."
    ],
    "青": [
        "青い空を見ました。",
        "あおいそらをみました。",
        "J’ai regardé le ciel bleu."
    ],
    "天": [
        "天気がいいですね。",
        "てんきがいいですね。",
        "Il fait beau, n’est-ce pas ?"
    ],
    "気": [
        "元気ですか。",
        "げんきですか。",
        "Comment allez-vous ?"
    ],
    "雨": [
        "今日は雨が降っています。",
        "きょうはあめがふっています。",
        "Il pleut aujourd’hui."
    ],
    "電": [
        "電気を消してください。",
        "でんきをけしてください。",
        "Éteignez la lumière, s’il vous plaît."
    ],
    "車": [
        "車で学校へ行きます。",
        "くるまでがっこうへいきます。",
        "Je vais à l’école en voiture."
    ],
    "駅": [
        "駅で友だちを待ちます。",
        "えきでともだちをまちます。",
        "J’attends un ami à la gare."
    ],
    "山": [
        "日曜日に山へ行きます。",
        "にちようびにやまへいきます。",
        "Je vais à la montagne dimanche."
    ],
    "川": [
        "川で泳ぎません。",
        "かわでおよぎません。",
        "Je ne nage pas dans la rivière."
    ],
    "田": [
        "田んぼに水があります。",
        "たんぼにみずがあります。",
        "Il y a de l’eau dans la rizière."
    ],
    "人": [
        "あの人は先生です。",
        "あのひとはせんせいです。",
        "Cette personne est professeur."
    ],
    "女": [
        "あの女の人は友だちです。",
        "あのおんなのひとはともだちです。",
        "Cette femme est une amie."
    ],
    "男": [
        "男の子が走っています。",
        "おとこのこがはしっています。",
        "Un garçon court."
    ],
    "子": [
        "子どもが公園で遊んでいます。",
        "こどもがこうえんであそんでいます。",
        "Un enfant joue dans le parc."
    ],
    "父": [
        "父は毎朝コーヒーを飲みます。",
        "ちちはまいあさこーひーをのみます。",
        "Mon père boit du café chaque matin."
    ],
    "母": [
        "母は料理が上手です。",
        "はははりょうりがじょうずです。",
        "Ma mère cuisine bien."
    ],
    "友": [
        "友だちと映画を見ます。",
        "ともだちとえいがをみます。",
        "Je regarde un film avec un ami."
    ],
    "先": [
        "先生に質問します。",
        "せんせいにしつもんします。",
        "Je pose une question au professeur."
    ],
    "生": [
        "学生です。",
        "がくせいです。",
        "Je suis étudiant."
    ],
    "学": [
        "毎日、日本語を学びます。",
        "まいにち、にほんごをまなびます。",
        "J’apprends le japonais tous les jours."
    ],
    "校": [
        "学校は八時に始まります。",
        "がっこうははちじにはじまります。",
        "L’école commence à huit heures."
    ],
    "本": [
        "日本語の本を読みます。",
        "にほんごのほんをよみます。",
        "Je lis un livre de japonais."
    ],
    "名": [
        "お名前は何ですか。",
        "おなまえはなんですか。",
        "Quel est votre nom ?"
    ],
    "語": [
        "日本語を話します。",
        "にほんごをはなします。",
        "Je parle japonais."
    ],
    "文": [
        "短い文を書きます。",
        "みじかいぶんをかきます。",
        "J’écris une phrase courte."
    ],
    "字": [
        "この字を読めますか。",
        "このじをよめますか。",
        "Pouvez-vous lire ce caractère ?"
    ],
    "国": [
        "日本は好きな国です。",
        "にほんはすきなくにです。",
        "Le Japon est un pays que j’aime."
    ],
    "店": [
        "あの店でパンを買います。",
        "あのみせでぱんをかいます。",
        "J’achète du pain dans cette boutique."
    ],
    "何": [
        "何を食べますか。",
        "なにをたべますか。",
        "Qu’allez-vous manger ?"
    ],
    "行": [
        "明日、学校へ行きます。",
        "あした、がっこうへいきます。",
        "Demain, je vais à l’école."
    ],
    "来": [
        "友だちが家に来ます。",
        "ともだちがいえにきます。",
        "Un ami vient chez moi."
    ],
    "帰": [
        "六時に家へ帰ります。",
        "ろくじにいえへかえります。",
        "Je rentre chez moi à six heures."
    ],
    "見": [
        "テレビを見ます。",
        "てれびをみます。",
        "Je regarde la télévision."
    ],
    "聞": [
        "音楽を聞きます。",
        "おんがくをききます。",
        "J’écoute de la musique."
    ],
    "話": [
        "先生と日本語で話します。",
        "せんせいとにほんごではなします。",
        "Je parle japonais avec le professeur."
    ],
    "読": [
        "毎晩、本を読みます。",
        "まいばん、ほんをよみます。",
        "Je lis un livre chaque soir."
    ],
    "書": [
        "ノートに名前を書きます。",
        "のーとになまえをかきます。",
        "J’écris mon nom dans le cahier."
    ],
    "食": [
        "朝ご飯を食べます。",
        "あさごはんをたべます。",
        "Je prends mon petit-déjeuner."
    ],
    "飲": [
        "水を飲んでください。",
        "みずをのんでください。",
        "Buvez de l’eau, s’il vous plaît."
    ],
    "買": [
        "スーパーで野菜を買います。",
        "すーぱーでやさいをかいます。",
        "J’achète des légumes au supermarché."
    ],
    "会": [
        "駅で友だちに会います。",
        "えきでともだちにあいます。",
        "Je retrouve un ami à la gare."
    ],
    "休": [
        "日曜日は家で休みます。",
        "にちようびはいえでやすみます。",
        "Je me repose à la maison le dimanche."
    ],
    "入": [
        "部屋に入ってください。",
        "へやにはいってください。",
        "Entrez dans la pièce, s’il vous plaît."
    ],
    "出": [
        "家を七時に出ます。",
        "いえをしちじにでます。",
        "Je pars de chez moi à sept heures."
    ],
    "立": [
        "ここに立ってください。",
        "ここにたってください。",
        "Tenez-vous debout ici, s’il vous plaît."
    ],
    "開": [
        "窓を開けます。",
        "まどをあけます。",
        "J’ouvre la fenêtre."
    ],
    "閉": [
        "ドアを閉めてください。",
        "どあをしめてください。",
        "Fermez la porte, s’il vous plaît."
    ],
    "作": [
        "母とケーキを作ります。",
        "ははとけーきをつくります。",
        "Je prépare un gâteau avec ma mère."
    ],
    "使": [
        "このペンを使います。",
        "このぺんをつかいます。",
        "J’utilise ce stylo."
    ],
    "住": [
        "東京に住んでいます。",
        "とうきょうにすんでいます。",
        "J’habite à Tokyo."
    ],
    "思": [
        "そう思います。",
        "そうおもいます。",
        "C’est ce que je pense."
    ],
    "知": [
        "その人を知っています。",
        "そのひとをしっています。",
        "Je connais cette personne."
    ],
    "言": [
        "もう一度言ってください。",
        "もういちどいってください。",
        "Répétez encore une fois, s’il vous plaît."
    ]
};

/* =========================================================
   APERCU D'UN KANJI
========================================================= */
function ensureKanjiPreview() {
    if (document.getElementById("kanjiPreviewOverlay")) return;

    const style = document.createElement("style");
    style.textContent = `
        #kanjiPreviewOverlay {
            position: fixed; inset: 0; z-index: 9999; display: none;
            align-items: center; justify-content: center; padding: 18px;
            background: rgba(0,0,0,.55);
        }
        #kanjiPreviewCard {
            position: relative; box-sizing: border-box; width: min(100%, 440px);
            max-height: 90vh; overflow-y: auto; padding: 26px 22px;
            border-radius: 20px; background: #fff; color: #243326;
            text-align: center; box-shadow: 0 12px 40px rgba(0,0,0,.25);
        }
        #kanjiPreviewClose {
            position: absolute; top: 10px; right: 12px; border: 0;
            border-radius: 50%; width: 36px; height: 36px; font-size: 23px;
            cursor: pointer; background: #edf4ed;
        }
        #kanjiPreviewCharacter { font-size: 76px; line-height: 1.25; color: #236b3a; margin: 12px 0; }
        #kanjiPreviewCard h3 { margin: 18px 0 6px; font-size: 16px; }
        #kanjiPreviewReading { font-size: 23px; }
        #kanjiPreviewMeaning { font-size: 18px; }
        #kanjiPreviewJapanese { font-size: 23px; margin: 10px 0; }
        #kanjiPreviewHiragana { color: #59665b; margin-bottom: 8px; }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement("div");
    overlay.id = "kanjiPreviewOverlay";
    overlay.innerHTML = `
        <div id="kanjiPreviewCard" role="dialog" aria-modal="true">
            <button id="kanjiPreviewClose" type="button" aria-label="Fermer">×</button>
            <div id="kanjiPreviewCharacter"></div>
            <h3>Lecture en hiragana</h3>
            <div id="kanjiPreviewReading"></div>
            <h3>Traduction</h3>
            <div id="kanjiPreviewMeaning"></div>
            <hr style="border:0;border-top:1px solid #e2e9e2;margin:20px 0">
            <h3>Exemple de phrase</h3>
            <div id="kanjiPreviewJapanese"></div>
            <div id="kanjiPreviewHiragana"></div>
            <div id="kanjiPreviewFrench"></div>
        </div>`;
    document.body.appendChild(overlay);

    document.getElementById("kanjiPreviewClose").addEventListener("click", closeKanjiPreview);
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) closeKanjiPreview();
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeKanjiPreview();
    });
}

function showKanjiPreview(index) {
    const item = kanjis[index];
    if (!item) return;
    ensureKanjiPreview();

    document.getElementById("kanjiPreviewCharacter").textContent = item.kanji;
    document.getElementById("kanjiPreviewReading").textContent = item.hiragana;
    document.getElementById("kanjiPreviewMeaning").textContent = item.francais;

    // Affiche une vraie phrase d'exemple adaptée au kanji sélectionné.
    const exemple = exemplesKanji[item.kanji];
    document.getElementById("kanjiPreviewJapanese").textContent =
        exemple ? exemple[0] : "例文はまだありません。";
    document.getElementById("kanjiPreviewHiragana").textContent =
        exemple ? exemple[1] : "れいぶんはまだありません。";
    document.getElementById("kanjiPreviewFrench").textContent =
        exemple ? exemple[2] : "Exemple à ajouter.";

    document.getElementById("kanjiPreviewOverlay").style.display = "flex";
}

function closeKanjiPreview() {
    const overlay = document.getElementById("kanjiPreviewOverlay");
    if (overlay) overlay.style.display = "none";
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

            button.type = "button";
            button.title = "Cliquer pour voir les informations du kanji";
            button.addEventListener("click", function () {
                showKanjiPreview(j);
            });


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

function getReviewKanjis(
    seriesNumber,
    currentIndexes
) {

    if (seriesNumber === 0) {
        return [];
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

                previousIndexes.push(index);
            }

        });
    }

    previousIndexes =
        previousIndexes.filter(
            index =>
                !currentIndexes.includes(index)
        );

    if (
        previousIndexes.length === 0
    ) {

        return [];
    }

    previousIndexes =
        shuffle(previousIndexes);

    return previousIndexes.slice(0, 2);
}

function startReviewTest() {

    // Récupérer uniquement les kanjis validés
    const available = [...learned];

    if (available.length === 0) {
        alert(
            "Tu dois d'abord valider une série pour faire ce test !"
        );
        return;
    }

    // Choisir 10 kanjis au maximum
    exerciseKanjis = shuffle(available).slice(0, 10);

    currentSeries = -1;
    currentKanjiIndex = 0;
    score = 0;

    document.getElementById("menu").style.display = "none";
    document.getElementById("exercise").style.display = "block";

    document.getElementById("seriesTitle").textContent =
        "Test de révision";

    document.getElementById("seriesSuccess").textContent =
        "Test libre";

    prepareReviewTest();
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

// Ajouter 2 kanjis de révision
const reviewKanjis =
    getReviewKanjis(
        currentSeries,
        baseIndexes
    );

reviewKanjis.forEach(index => {

    baseIndexes.push(index);

});


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
    currentKanjiIndex >= exerciseKanjis.length
) {

    if (currentSeries === -1) {
        finishReviewTest();
    } else {
        finishSeries();
    }

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


    const sentence =
    getSeriesSentence(
        currentSeries
    );


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

        <hr style="margin: 20px 0; border: none; border-top: 1px solid #c8e5cc;">

        📖 <strong>Exemple de phrase</strong>

        <div style="
            font-size: 28px;
            margin: 15px 0;
        ">
            ${sentence.japonais}
        </div>

        <div style="
            font-size: 18px;
            color: #555;
        ">
            ${sentence.hiragana}
        </div>

        <br>

        🇫🇷 ${sentence.francais}

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

function getSeriesSentence(seriesNumber) {

    const sentences = [

        {
            japonais: "一から五です。",
            hiragana: "いちから ごです。",
            francais: "De un à cinq."
        },

        {
            japonais: "六から十です。",
            hiragana: "ろくから じゅうです。",
            francais: "De six à dix."
        },

        {
            japonais: "百円です。",
            hiragana: "ひゃくえんです。",
            francais: "C'est 100 yens."
        },

        {
            japonais: "火です。",
            hiragana: "ひです。",
            francais: "C'est du feu."
        },

        {
            japonais: "今月です。",
            hiragana: "こんげつです。",
            francais: "C'est ce mois-ci."
        },

        {
            japonais: "毎日です。",
            hiragana: "まいにちです。",
            francais: "C'est tous les jours."
        },

        {
            japonais: "上です。",
            hiragana: "うえです。",
            francais: "C'est au-dessus."
        },

        {
            japonais: "左と右です。",
            hiragana: "ひだりと みぎです。",
            francais: "C'est la gauche et la droite."
        },

        {
            japonais: "大きくて安いです。",
            hiragana: "おおきくて やすいです。",
            francais: "C'est grand et bon marché."
        },

        {
            japonais: "古くないです。",
            hiragana: "ふるくないです。",
            francais: "Ce n'est pas vieux."
        },

        {
            japonais: "白いです。",
            hiragana: "しろいです。",
            francais: "C'est blanc."
        },

        {
            japonais: "雨の日です。",
            hiragana: "あめの ひです。",
            francais: "C'est un jour de pluie."
        },

        {
            japonais: "山に人がいます。",
            hiragana: "やまに ひとが います。",
            francais: "Il y a une personne à la montagne."
        },

        {
            japonais: "男の子です。",
            hiragana: "おとこのこです。",
            francais: "C'est un garçon."
        },

        {
            japonais: "学校です。",
            hiragana: "がっこうです。",
            francais: "C'est une école."
        },

        {
            japonais: "日本語です。",
            hiragana: "にほんごです。",
            francais: "C'est du japonais."
        },

        {
            japonais: "店へ行きます。",
            hiragana: "みせへ いきます。",
            francais: "Je vais au magasin."
        },

        {
            japonais: "本を読みます。",
            hiragana: "ほんを よみます。",
            francais: "Je lis un livre."
        },

        {
            japonais: "水を飲みます。",
            hiragana: "みずを のみます。",
            francais: "Je bois de l'eau."
        },

        {
            japonais: "日本語を使います。",
            hiragana: "にほんごを つかいます。",
            francais: "J'utilise le japonais."
        }

    ];

    return sentences[seriesNumber];
}

function prepareReviewTest() {

    currentKanjiIndex = 0;
    score = 0;

    document.getElementById("score").textContent = "";

    startKanji();
}

function finishReviewTest() {

    const totalQuestions = exerciseKanjis.length * 2;
    const percentage = Math.round(
        (score / totalQuestions) * 100
    );

    document.getElementById("question").textContent = "🧠";
    document.getElementById("answers").innerHTML = "";

    document.getElementById("stepTitle").textContent =
        "Test de révision terminé";

    document.getElementById("result").innerHTML = `
        <div class="successMessage">
            <strong>Test terminé !</strong>

            <div style="font-size: 30px; margin: 15px 0;">
                ${score} / ${totalQuestions}
            </div>

            Score : <strong>${percentage} %</strong>

            <br><br>
            Tu as révisé ${exerciseKanjis.length} kanji(s).
        </div>
    `;

    document.getElementById("score").textContent = "";

    const button = document.getElementById("nextButton");

    button.textContent = "🏠 Retour au menu";
    button.style.display = "inline-block";
    button.onclick = function () {
        showMenu();
        button.onclick = nextStep;
    };
}