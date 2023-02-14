let dataQuestions = [
  {
    type: "qcm",
    question: "Comment on déclare une constante dans le langage C++ ?",
    propositions: [
      'const',
      'Type const',
      'Type const valeur',
      'define',
    ],
    answer: 2,
    description: "A la déclaration d'une constante, on lui assigne une valeur.",
    alreadyAsked : false
  },
  {
    type: "qcm multiple",
    question: "Comment on déclare une constante en C++ ?",
    propositions: [
      'const',
      'Type const',
      'Type const valeur',
      '#define valeur',
    ], 
    answers: [2, 3],
    description: "La directive de préprocesseur #define sert aussi à déclarer des constantes (et des macros).",
    alreadyAsked: false,
  },
  {
    question : "La programmation est difficile ?",
    type: 'true-false',
    answer: true,
    description: "La programmation peut sembler difficile pour les débutants, mais avec la pratique, elle peut devenir une compétence très précieuse et amusante. La clé pour réussir est la persévérance et la détermination à comprendre les concepts fondamentaux.",
    alreadyAsked: false,
  },
  {
    question : "La programmation est difficile ?",
    type: 'true-false',
    answer: false,
    description: "La programmation peut sembler difficile pour les débutants, mais avec la pratique, elle peut devenir une compétence très précieuse et amusante. La clé pour réussir est la persévérance et la détermination à comprendre les concepts fondamentaux.",
    alreadyAsked: false,
  },
  {
    type: "unique-answer",
    question: "Quel est l'année de création du C++ ?",
    answer: 1983,
    description: "Le langage C++ a été développé en 1983 par Bjarne Stroustrup. Il est souvent utilisé pour les projet de développement de systèmes d'exploitations, de jeux, de logiciels scientifiques.",
    alreadyAsked: false,
  },
  {
    type: "qcm",
    question: "Qu'est-ce qu'un programme ?",
    propositions: [
      "Une instruction destinée à exécuter une tâche.",
      "Un ensemble d'instructions destinées à exécuter une tâche."
    ],
    answer: 1,
    description: "Un programme résulte toujours de l'implémentation d'un algorithme qui n'est rien d'autre qu'une suite d'instructions. Et un algorithme existe toujours pour un but spécifique.",
    alreadyAsked: false,
  },
  {
    type: "true-false",
    question: "Tous les programmes sont visibles.",
    answer : false,
    description: "Il existe des programmes qui s'exécutent en arrière plan. On les appelle des processus démons (daemon).",
    alreadyAsked: false,
  },
  {
    type: "qcm",
    question: "Le résultat de l’écriture d’un programme dans un langage de programmation est : ",
    propositions : [
      "Un code source",
      "Un binaire"
    ],
    answer: 0,
    description: "Un programme (algorithme) implémenté dans un langage de programme donne ce qu'on appelle le code source. C'est le cod source qui est compilé et par la suite exécuté par l'ordinateur.",
    alreadyAsked: false,
  },
  {
    type: "qcm",
    question: "Le résultat de la compilation d’un programme est :",
    propositions: [
      "Un code source",
      "Un binaire"
    ],
    answer: 1,
    description: "La compilation d'un programme conduit à exécutable binaire directement compréhensible pour l'ordinateur.",
    alreadyAsked: false
  },
  {
    type: "qcm",
    question: "Qu’est-ce qu’il faut pour qu’un code écrit dans un langage d’implémentation soit exécuté par un ordinateur ?",
    propositions : [
      "Une programmation",
      "Une implémentation",
      "Une traduction en binaire"
    ],
    answer: 2,
    description: "Après avoir implémenté un algorithme dans un langage de programmation, on doit le compiler pour qu'il soit compréhensible par l'ordinateur.",
    alreadyAsked: false,
  },

  {type: "qcm",
    question: "En fonction de l’affinité d’un langage par rapport à la machine, on peut classer les langages en :",
    propositions : [
      "Haut niveau et bas niveau",
      "Haut niveau, niveau intermediaire et bas niveau"
    ],
    answer:0,
    description: "Les expressions haut niveau et bas niveau sont relatives. Cela depend des langages que l'on compare.",
    alreadyAsked: false,
  },
  {type: "unique-answer",
    question: "Un langage est dit _____ quand le programme source sous forme de texte est tout d’abord lu intégralement puis traité par un autre programme qui le convertit en langage machine directement compréhensible par l’ordinateur.",
    answer: "Compilé",
    description: "Un programme qui est tout d'abord lu intégralement puis traité par un autre programme qui le convertit en langage machine directement compréhensible par l'ordinateur est appelé un programme compilé.",
    alreadyAsked: false
  },

  {type: "qcm multiple",
    question: "Trouver les intrus ou l'intru! Le C++ est un langage",
    propositions : [ 
      "Populaire",
      "Rapide",
      "Portable",
      "Avec peu de bibliothèque externe",
      "Multiparadigme",
    ],
    answers: [3],
    description: "Le C++ à une grande communauté qui travaille et dispose de beaucoup de bibliothèques externes.",
    alreadyAsked: false,
  },
  {type: "qcm multiple",
      question: "Le C++ est un langage :",
      propositions : [
        "Procédural",
        "Orienté objet",
        "Multiparadigme"
      ],
      answers: [2],
      description: "Mutiparadigme signie procedule et Orienté Objet ",
      alreadyAsked: false,
    },
    {type: "qcm",
      question: "Le créateur de C++ s'appelle:",
      propositions : [
        "Ken Thompson",
        "Dennis Ritchie",
        "Bjarne Stroustrup"
      ],
      answer:2,
      description: "Le nom du créateur du C++ est Bjarne Stroustrup. Ce langage a été développé en 1983.",
      alreadyAsked: false,
    },
    {type: "unique-answer",
    question: "Le créateur du C++ s’appelle :",
    answer: "Bjarne Stroustrup",
    description: "Le nom du créateur du C++ est Bjarne Stroustrup. Ce langage a été développé en 1983.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
  question: "Quels sont les trois logiciels nécessaires pour programmer :",
  propositions : [
    "Un éditeur",
    "Un navigateur",
    "Un interprétreur",
    "Un compilateur",
    "Un débogueur",
    "Un programme",
    "Un logiciel"
  ],
  answers: [0,3,4],
  description: "Nous avons besoin d'un éditeur pour écrire le programme, un débogueur qui permet de tracer le programme et un compilateur qui va compiler le programme  et identifier les erreurs de syntaxe avant de donner un résultat.",
  alreadyAsked: false,
  },

  {type: "qcm multiple",
  question: "Un logiciel qui renferme tous les outils (compilateur, débogueur éditeur de texté) de programmation est un:",
  propositions : [
    "IDE (Environnement de Dévoloppement Intégré)",
    "IDE (Identity Data Entreprize)",
    "IDE (Identity Develeppement Entreprize)",
  ],
  answers: [0],
  description: "Un IDE étant un environnement de développement integré il renferme tous les outils de développement: l'éditeur de texte, le compilateur , le débogueur.",
  alreadyAsked: false,
  },
  {type: "qcm multiple",
  question: "Selon l’interface, nous pouvons classer les programmes en programmes :",
  propositions : [
    "A interface Graphique",
    "Console",
    "Informatique",
    "Compilé",
    "Procéduraux"
  ],
  answers: [0,1],
  description: "Les programmes sont classés en deux types : interface graphique (GUI) et en console.",
  alreadyAsked: false,
  },
  {type: "qcm",
    question: "Le #include &lt;iostream&gt; est :",
    propositions : [
      "Une inclusion de l'espace de nom",
      "Une directive du préprocesseur"
    ],
    answer:1,
    description: "Le #include &lt;iostream&gt; est une directive du préprocesseur, c'est une ligne en fait qui permet d'inclure l'ensemble des fonctions et constantes d'une bibliothèque.",
    alreadyAsked: false,
  },
  {type: "true-false",
    question: "Le #include &lt;iostream&gt; permet de charger la bibliothèque des fonctions d’entrée et de sortie standard, donc une interaction entre le programme et l’utilisateur ?:",
    answer: true,
    description: "Le #include &lt;iostream&gt; permet l'interaction entre l'utilisateur et le programme comme la saisie au clavier ainsi que l'affichage à la console.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
  question: "Une bibliothèque est constituée:",
  propositions : [
    "De fonctions",
    "D'instructions",
    "De sous programmes",
    "D'autres bibliothèques",
    "Aucune de ses reponses"
  ],
  answers: [2],
  description: "Une biblothèque est constituée de sous-programmes (procédures et fonctions). Cependant, une bibliothèque peut utiliser les fonctionnalités d'autres bibliothèques; et une fonction est un ensemble d'instructions.",
  alreadyAsked: false,
},
{type: "qcm",
    question: "Le véritable point de démarrage d’un programme est :",
    propositions : [
      "Le #include &lt;iostream&gt;",
      "La fonction main()",
      "Les directives du préprocesseur",
      "La première fonction en partant du haut du programme"
    ],
    answer:1,
    description: "Le véritable point de démarage d'un programme est la fonction main() parce que c'est la première fonction exécutée et où le programme s'exécute et où le code utilisateur est généralement écrit.",
    alreadyAsked: false,
  },
  {type: "qcm multiple",
    question: "Les differents types de commentaires dans un programme sont",
    propositions : [
      "Les courts, sur une ligne",
      "Les semi-courts, sur deux lignes",
      "Les longs, sur plusieurs lignes",
    ],
    answers: [0,2],
    description: "On utilise les commentaires pour spécifier votre programme pour qu'il soit lisible par d'autres programmeurs. Mais aussi à des fins de débogage.",
    alreadyAsked: false,
  },
  {type: "unique-answer",
    question: "Qu'est-ce qu'on utilise dans un programme pour garder de l'information ?",
    answer: 'variable',
    description: "Les variables représentent des contenants où les programmes peuvent stocker des données pour une réutilisation ultérieure. Elles lui permettent de retenir des informations.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
    question: "Une variable est caractérisée par :",
    propositions: [
      "Son adresse",
      "Son identificateur",
      "Sa valeur",
      "Sa référence",
      "Son type",
      "Son pointeur"
    ], 
    answers: [0, 1, 2, 4],
    description: "La référence d'une variable et son pointeur en C++ représentent d'autres types de variables qui servent à autre chose. Retenez qu'une variable est caractérisée par son adresse, son type, son nom, sa valeur.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
    question: "Quels noms de variables suivants sont valides en respectant les règles obligatoires et les recommandations ?",
    propositions: [
      "12345",
      "2ageUtilisateur",
      "ageUtilisateur",
      "age utilisateur",
      "AgeUtlisateur",
      "ageutilisateur",
      "âgeUtilisateur",
      "age_utilisateur"
    ], 
    answers:[2,7],
    description: "Les caractères autorisés dans le nom d'une variables sont : les lettres de l'alphabet (a-z, A-Z), les chiffres (0-9) et l'underscore (_). Le nom commence par soit une lettre ou un underscore (jamais par un chiffre). Les recommandation sont : le camelCase et le snake_case.",
    alreadyAsked: false
  },
  {type: "unique-answer",
    question: "Le C++ étant un langage qui fait la distinction entre les majuscules et les miniscules, on dit qu'il est ______.",
    answer: "sensible à la casse",
    description: "Le C++ est un langage qui est sensible à la casse, cela signifie que les variables <i>variable</i>, <i>Variable</i>, et <i>variaBle</i> sont toutes différentes.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
    question: "Pour déclarer un réel, un programme C++ peut  utiliser :",
    propositions: [
      "string",
      "int",
      "long double",
      "bool",
      "double",
      "Float"
    ], 
    answers: [2,4],
    description: "Un mot clé pour déclarer un réel est float et non Float ! On peut utiliser aussi double et long double qui apportent beaucoup plus de précision (nombre de décimales).",
    alreadyAsked: false
  },
  {type: "qcm multiple",
    question: "Quelles sont les syntaxes pour déclarer une variable en C++ ?",
    propositions: [
      "Type nom()",
      "Type nom(valeur)",
      "Nom type(valeur)",
      "Type nom",
      "Nom type",
    ], 
    answers: [1, 3],
    description: "La syntaxe Type nom(valeur) est acceptable pour une itilialisation (déclaration + affectation) en C++. Mais lorsqu'on utilise cette syntaxe, la valeur entre les parenthèses est obligatoire !",
    alreadyAsked: false
  },
  {type: "qcm",
    question: "Quelle valeur contient une variable entière à sa déclaration si cette dernière n'est pas initialisée ?",
    propositions: [
      "0", 
      "Aucun des deux",
      "Une valeur inconnue",
    ], 
    answer: 2,
    description: "Lorsqu'une variable n'est pas initialisée lors de sa création, elle contient une valeur arbitraire laissée par le dernier programme qui est passé par là !",
    alreadyAsked: false
  },
  {type: 'true-false',
    question : "Il est possible d'accéder à une variable autant à travers son identificateur qu'à travers sa référence.",
    answer: true,
    description: "La référence d'une variable est une autre alternative d'accès au contenu d'une variable. Cela peut servir lorsqu'on passe des arguments à une fonctions. Cela permet d'économiser l'espace mémoire.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
    question: "Choisissez la(les) bonne(s) syntaxe(s) de déclaration d’une référence (NB : la variable à référencer est de type type1",
    propositions: [
      "type1 &amp;nom (variable)",
      "type2 &amp;nom (variable)",
      "type2 &amp;nom",
      "type1&amp; nom (variable)",
      "type1&amp; nom",
    ], 
    answers: [0, 3],
    description: "Lors de la déclaration d'une réference, nous devons toujours indiquer la variable référencée. Et la référence doit être du même type que la variable référencée.",
    alreadyAsked: false
  },
  {type: "qcm",
    question: "La bibliothèque mathématique du C++ s'appelle : ",
    propositions: [
      "math.h",
      "cmath.h",
      "cmath",
      "math",
    ], 
    answer: 2,
    description: "La bibliothèque cmath du C++ est héritée de la bibliothèque math.h du langage C.",
    alreadyAsked: false
  },
  {type: "qcm",
    question: "Les fonctions sin( ), cos( ) et tan( ) prennent en paramètre un angle en :",
    propositions: [
      "radians",
      "dégrés"
    ], 
    answer: 0,
    description: "Il est important de toujours se référer à la documentation officielle du langage C++ pour connaître les paramètres à envoyer à une fonction du langage.",
    alreadyAsked: false
  },
  {type: "qcm",
    question: "Quelle fonction permet de calculer le logarithme népérien d'une valeur en C++ ?",
    propositions: [
      "log()",
      "log10()",
      "ln()",
    ], 
    answer: 0,
    description: "Contrairement au sens commun, en C++, la fonction log() de la librairie cmath est utilisée pour calculer le logarithme népérien (de base e) d'un nombre.",
    alreadyAsked: false
  },
  {type: "unique-answer",
    question: "Quel est le nom de la fonction qu'on utilise pour calculer le logarithme décimal d'une valeur en C++ ?",
    answer: "log10",
    description: "La fonction log10 de la librairie cmath est utilisée pour calculer le logarithme décimal (de base 10) d'un nombre.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
    question: "Les structures de contrôle comprennent (ne cochez pas simultanément des synonymes) :",
    propositions: [
      "Les structures conditionnelles",
      "Les structures itératives",
      "Les conditions",
      "Les fonctions"
    ], 
    answers: [0, 1],
    description: "Ni les conditions, ni les fonctions ne représentent des structures de contrôles en C++. Il est à noter qu'on utilise interchangeablement les mots boucle, itération et répétition.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
    question: "Les structures de contrôle comprennent (ne cochez pas simultanément des synonymes) :",
    propositions: [
      "Les structures conditionnelles",
      "Les structures répétitives",
      "Les conditions",
      "Les fonctions"
    ], 
    answers: [0, 1],
    description: "Ni les conditions, ni les fonctions ne représentent des structures de contrôles en C++. Il est à noter qu'on utilise interchangeablement les mots boucle, itération et répétition.",
    alreadyAsked: false
  },
  {type: "qcm",
    question: "Une condition renvoie ... ",
    propositions: [
      "Un entier", 
      "Un booléen",
      "Un réel"
    ], 
    answer: 1,
    description: "Etant donné qu'une condition renvoie un booléen, c'est une pratique courante de stocker le résultat d'une condition dans un booléen pour soit réutililser plus tard, soit simplifier vos conditions qui peuvent parfois être complexes.",
    alreadyAsked: false
  },
  {type: "qcm",
    question: "Dans une structure conditionnelle Si..Sinon Si (if..else if), en supposant que la première condition est vraie, la prochaine à tester est:",
    propositions: [
      "La suivante",
      "Aucune",
      "Le sinon s'il existe",
      "Aucune de ces réponses"
    ], 
    answer: 1,
    description: "Retenez que dans une alternative multiple, les instructions de la première condition à être avérée sont exécutées puis on passe aux instructions après le dernier bloc. En résumé, un seul des bloc d'instructions est exécuté.",
    alreadyAsked: false
  },
  {type: "qcm",
    question: "La structure conditionnelle switch est utilisée lorsque :",
    propositions: [
      "La variable à tester est réelle",
      "L'on ne teste que l'égalité"
    ], 
    answer: 1,
    description: "La structure conditionnelle switch est utilisée lorsque nous pouvons à l'avance prédire les valeurs que peuvent prendre notre variable. Donc, on ne teste que l'égalité avec elle.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
    question: "Une structure itérative for comprend 3 parties :",
    propositions: [
      "Une initialisation",
      "Une condition",
      "Une incrémentation",
      "Une décrémentation",
      "Une mise à jour du compteur"
    ], 
    answers: [0, 1, 4],
    description: "La mise à jour du compteur inclut l'incrémentation, la décrémentation mais aussi un pas différent de 1.",
    alreadyAsked: false
  },
  {type: "qcm multiple",
    question: "Si A et B sont des variables booléennes, A || B vaut :",
    propositions: [
      "true si A = true",
      "true si B = false",
      "false si A = false et B = false"
    ], 
    answers: [0, 2],
    description: "Si au moins l'une des opérandes vaut true, alors toute l'expression vaut true. Ainsi est la table de vérité de l'opérateur || qui symbolise le OU en C++.",
    alreadyAsked: false
  }, 
  {type: "qcm multiple",
    question: "Découper un programme en sous-programmes (fonctions et/ou procédures) présente les avantages suivants :",
    propositions: [
      "Une meilleure lisibilité du code, dont une maintenance facilité", 
      "Une facilité de partage du travail dans un projet de groupe",
      "Un partage de code source facilité"
    ], 
    answers: [0, 1, 2],
    description: "Découper son code en des sous-programmes présente beaucoup d'avantages. Il faut toujours penser à modulariser votre code pour la réutilisabilité et aussi facilité la maintenance et le partage du code.",
    alreadyAsked: false
  },
  {type: "qcm",
    question: "Pour fonctionner, un sous-programme peut avoir besoin de données appelées à l’appel du sous-programme :",
    propositions: [
      "Paramètres",
      "Arguments"
    ], 
    answer: 0,
    description: "On passe bien des <i>paramètres</i> à une fonction mais la fonction travaille avec des <i>arguments</i>!!!",
    alreadyAsked: false
  },
  {type: "qcm",
    question: "A la définition d'un sous-programme, les données envoyées par le sous-programme appelant sont des :",
    propositions: [
      "Paramètres",
      "Arguments"
    ],
    answer: 1,
    description: "On passe bien des <i>paramètres</i> à une fonction mais la fonction(ou la procédure) travaille avec des <i>arguments</i>!!!",
    alreadyAsked: false
  },
  {
    type : "qcm",
    question : " Soit nombre1 (valant 5) et nombre2 (valant 2) deux variables entières,(double)nombre1 / nombre2 est égal à : ",
    propositions:["2.5","2","2,5"],
    answer : 0,
    description : " L'opération effectuée dans ce bout de code est appelée Transtypage , elle permet de forcer le résultat d'une opération.",
    alreadyAsked : false,
  },
  {
    type : "qcm",
    question : "Soit deux variables entières nombre1 valant 5 et nombre2, que valent  respectivement nombre1 et nombre2 après l’exécution de l’instruction nombre2 = nombre1++ + 7 ",
    propositions : ["6 et 12","5 et 12","6 et 13", "5 et 13"],
    answer : 0,
    description : " Dans cette instruction on a ulisé une Post-incrémentation , elle n'est pas prioritaire sur l'affectation , donc la varible s'incrémente aprés l'affectation",
    alreadyAsked : false,
  },
  {
    type : "qcm",
    question : " Soit deux variables entière nombre1 valant 5 et nombre2, que valent nombre1 et nombre2 après l’exécution de l’instruction nombre2 = ++ nombre1 + 7 ",
    propositions : ["6 et 12","5 et 12","6 et 13", "5 et 13"],
    answer : 2,
    description : " Dans cette instruction on a ulisé une Pré-incrémentation , elle est prioritaire sur l'affectation , donc la varible s'incrémente avant l'affectation",
    alreadyAsked : false,
  },
  {
    type :"qcm multiple",
    question : "Quelles sont les quatres façon d'écrire la décrémentation d'une variable nombre ?",
    propositions : [ "nombre ++ ", "nombre --","--nombre"," nombre += 1","nombre -= 1","nombre = nombre - 1"],
    answers : [1,2,4,5],
    description : " Décrémenter une variable revient à lui soustraire un et cela se fait de plusieurs manières ",
    alreadyAsked : false,
  },
  {
    type :"qcm multiple",
    question : "Quelles sont les quatres façon d'écrire  l'incrémentation d'une variable nombre ?",
    propositions : [ "nombre ++ ", "nombre --","--nombre"," nombre += 1","nombre -= 1","nombre = nombre + 1", "++ nombre"],
    description : " Incrémenter une variable revient à lui ajouter plus un et cela se fait de plusieurs manières!",
    answers : [0,3,5,6],
    alreadyAsked : false,
  },
  {
    type : "qcm",
    question : "Retrancher un à une variable, c’est un(e): ",
    propositions : ["Affectation","Décrémentation","Incrémentation","Initialisation "],
    answer : 1,
    description : "La décrémentation est une opération tellement courante en programmation au point qu'elle a diverses manières d'être représentée. En tout quatre!",
    alreadyAsked : false,
  },
  {
    type : "qcm",
    question : "Augmenter un à une variable, c’est un(e): ",
    propositions : ["Affectation","Décrémentation","Incrémentation","Initialisation "],
    description : "L'incrémentation  est une opération tellement courante en programmation au point qu'elle a diverses manières d'être représentée. En tout quatre!",
    answer : 2,
    alreadyAsked : false,
  },
  {
    type : "qcm multiple",
    question : "Un entier étant codé sur 4 octets, quelles sont les valeurs minimales et maximales pour un entier signé:",
    propositions : ["[-6 540 457 449] - [6 540 457 449]","[-2 147 483 647] - [2 147 483 648]","[-4 340 477 879] - [4 340 477 879]"],
    answers : [1],
    description : "Un entier étant codé sur 4 octets a une valeur comprise entre [-2 147 483 648] - [2 147 483 648] s'agissant biensûr d'un entier signé ",
    alreadyAsked : false,
  },
  {
    type : "qcm",
    question : "La fonction getline() permet de lire :",
    propositions : [" Les entiers et les chaînes de caractères","Les réels et les chaines de charactères","Les chaines de caractères avec ou sans espace(s) ", " Les entiers et les réels "],
    answer : 2,
    description : "La fonction getline() permet de lire les chaines de caractéres avant ou sans espaces , elle permet de palier aux problémes rencontrés lors de la saisie d'un espace avec la lecture des chaines avec cin ",
    alreadyAsked : false,
  },
  {
    type : "true-false",
    question : "La fonction cin lit-elle les espaces et les tabulations ?",
    answer : false ,
    description : "La fonction cin permet pas de lire les espaces et tabulations , pour stocker une variable chainée contenant des espaces ou tabulations on peut utilisr la fonction getline().",
    alreadyAsked : false,

  },
  {
    type :"qcm multiple",
    question : "Choisissez la (les) bonnes syntaxes(s) :",
    propositions : ["cin &gt;&gt; variable","cout &gt;&gt; variable",'cout &lt;&lt; "variable"','cin  &lt;&lt; "variable"',"cin  &lt;&lt; variable"],
    answers : [0,2],
    description : "En matière de syntaxe il est important de connaître le sens des chevrons ,ce premier signifie '<<' : que les données sont à afficher et '>>' signifie que les données doivent provenir du clavier donc à saisir.",
    alreadyAsked : false,
  },
  {
    type: "qcm multiple",
    question: "Quels sont les éléments de base de la programmation orientée objet en C++ ?",
    propositions: [ 'Héritage', 'Encapsulation', 'Polymorphisme', 'Abstraction' ],
    answers: [0,1,2],
    description: "L'héritage, l'encapsulation et le polymorphisme sont les éléments fondamentaux de la programmation orientée objet en C++, tandis que l'abstraction est souvent considérée comme un concept plus avancé.",
    alreadyAsked: false
  },
  {
    type: "qcm",
    question: "Quel est le nom de la boucle utilisée pour répéter une séquence de code un nombre déterminé de fois ?",
    propositions: [ 'for', 'while', 'do-while', 'repeat' ],
    answer: 0,
    description: "La boucle 'for' est utilisée pour répéter une séquence de code un nombre déterminé de fois.",
    alreadyAsked: false
  },
  {
    type: "true-false",
    question: "Les pointeurs sont obligatoires pour la programmation en C++ ?",
    answer: false,
    description: "Les pointeurs sont un concept avancé en programmation en C++ et il n'est pas nécessaire de les utiliser dans tous les programmes.",
    alreadyAsked: false
  },
  {
    type: "qcm multiple",
    question: "Quelles sont les différences entre les structures et les classes en C++ ?",
    propositions: [
      "Les structures n'ont pas de méthodes et les classes en ont",
      "Les structures n'ont pas de constructeurs et les classes en ont",
      "Les structures sont publiques par défaut et les classes sont privées par défaut",
      "Les structures ne peuvent pas hériter et les classes peuvent"
    ],
    answers: [2,3],
    description: "Les structures en C++ sont publiques par défaut et ne peuvent pas hériter, tandis que les classes sont privées par défaut et peuvent hériter.",
    alreadyAsked: false
  },
  {
    type: "unique-answer",
    question: "Quel est le nom de la fonction utilisée pour accepter une entrée de l'utilisateur en C++ ?",
    answer: "cin",
    description: "La fonction 'cin' (acronyme de console input) est utilisée pour accepter une entrée de l'utilisateur en C++.",
    alreadyAsked: false
  },
  {
    type: "qcm",
    question: "Dans une condition en C++, le symbole pour représenter 'ET' logique est :",
    propositions: [ '&amp;&amp;', '||', '!', '^' ],
    answer: 0,
    description: "Le symbole '&&' représente l'opération 'ET' logique en C++.",
    alreadyAsked : false
  },
  {
    type: "unique-answer",
    question: "Quel est le résultat de l'expression suivante en C++ : (1 + 2) * (4 - 2) / 2",
    answer: "3",
    description: "Le résultat de l'expression est 5, car (1 + 2) = 3, (4 - 2) = 2, et (3 * 2) / 2 = 3.<br />Vous devez très souvant faire attention à l'ordre des opérateurs en performant des calculs mathématiques !",
    alreadyAsked: false,
  },
  {
    type: "qcm",
    question: "Quel est le résultat de l'expression logique suivante en C++ : !(true && false) || (true || false) ?",
    propositions: ['Vrai', 'Faux',],
    answer: 0,
    description: "Le résultat de l'expression logique est Vrai, car !(true && false) = Vrai et (true || false) = Vrai, donc (Vrai || Vrai) = Vrai.<br />Quand il s'agit des opérateurs logiques, vous devez garder en mémoire la table de vérité de chaque opérateur (ET, OU, NON) !",
    alreadyAsked: false,
  },
  {
    type: "qcm",
    question: "Qu'est-ce qu'une variable en C++ ?",
    propositions: [
      "Une constante",
      "Une littérale",
      "Un espace mémoire dans lequel on peut stocker une valeur",
      "Un type de données"
    ],
    answer: 2,
    description: "Une variable en C++ est un espace mémoire dans lequel on peut stocker une valeur d'un certain type.",
    alreadyAsked: false
  },
  {
    type: "qcm",
    question: "Quel est le résultat de l'expression suivante en C++ : 5 % 2 * 3",
    propositions: ['0', '1', '3', '5',],
    answer: 2,
    description: "L'expression est évaluée de gauche à droite selon les règles de priorité des opérateurs, donc 5 % 2 équivaut à 1, puis 1 * 3 équivaut à 3.",
    alreadyAsked: false,
  },
  {
    type: "qcm",
    question: "Quel est le but principal d'une boucle 'for' en C++ ?",
    propositions: [
      "Répéter un nombre précis d'itérations",
      "Répéter une action jusqu'à ce qu'une condition ne soit plus vraie",
      "Effectuer une action une seule fois",
      "Effectuer une action un nombre aléatoire d'itérations",
    ],
    answer: 0,
    description: "Le but principal d'une boucle 'for' en C++ est de répéter un nombre précis d'itérations en incrémentant ou décrémentant un compteur à chaque tour de boucle.",
    alreadyAsked: false
  },
  {
    type: "unique-answer",
    question: "Quel est l'opérateur de décalage de bits gauche en C++ ?",
    answer: "<<",
    description: "L'opérateur de décalage de bits gauche en C++ permet de décaler les bits d'un nombre entier vers la gauche.",
    alreadyAsked: false
  },
  {
    type: "unique-answer",
    question: "Quel est l'opérateur d'addition en C++ ?",
    answer: "+",
    description: "L'opérateur d'addition en C++ permet d'additionner deux nombres entiers ou flottants.",
    alreadyAsked: false
    },
  {
    type: "unique-answer",
    question: "Quel est l'opérateur de comparaison égal en C++ ?",
    answer: "==",
    description: "L'opérateur de comparaison égal en C++ permet de vérifier l'égalité entre deux valeurs.",
    alreadyAsked: false
  },
  {
    type: "qcm",
    question: "Quel est le résultat de l'expression suivante en C++ : <code style='font-weight:normal'><br>int x = 10; <br>int *ptr = &x; <br>cout &lt;&lt; *ptr;</code>",
    propositions: [
      "10",
      "L'expression ne compile pas",
      "La valeur de x",
      "L'adresse de x"
    ],
    answer: 0,
    description: "L'expression affiche la valeur de x, qui est 10. L'opérateur * est l'opérateur de déréférencement. On l'utilise pour accéder indirectement au contenue d'une variable à travers son pointeur.",
    alreadyAsked: false
  },
  {
    type: "qcm",
    question: "Quelle est la différence entre un pointeur et une référence en C++ ?",
    propositions: [
      "Les pointeurs peuvent être NULL, les références ne peuvent pas",
      "Les références ne peuvent être modifiées, les pointeurs oui",
      "Les références doivent être initialisées lors de leur déclaration, les pointeurs peuvent ne pas",
      "Il n'y a pas de différence"
    ],
    answer: 2,
    description: "Les références doivent être initialisées lors de leur déclaration, alors que les pointeurs peuvent ne pas être initialisées.",
    alreadyAsked: false
    },
    {
    type: "qcm",
    question: "Quel est le résultat de l'expression suivante en C++ : int x = 10; int *ptr = &x; *ptr = 20; cout << x;",
    propositions: [
    "20",
    "10",
    "L'expression ne compile pas",
    "La valeur de x"
    ],
    answer: 0,
    description: "L'expression affiche la valeur 20, qui est la valeur modifiée par le pointeur ptr.",
    alreadyAsked: false
    },
    {type: "qcm multiple",
      question: "Choisissez la (ou les) bonnes syntaxes sachant que l'on veut lire ou écrire dans la variable <i>variable</i>",
      propositions : ["cin &lt;&lt; variable", "cout &lt;&lt; variable", 'cout &lt;&lt; "variable"', "cin &gt;&gt; variable", "cout &gt;&gt; variable", 'cin &gt;&gt; "variable"', ],
      answers: [1, 3],
      description: "Les chevrons sont toujours orientés dans le sens de la destination de l'information.<br/> Avec <b>cin</b>, l'information vient du clavier vers la variable, tandis qu'avec <b>cout</b>, l'information de la variable va vers l'écran !",
      alreadyAsked: false,
    },
    {
      type: "qcm",
      question: "Changer la valeur d'une variable est une",
      propositions : ["Affectation", 'Initialisation'],
      answer: 0,
      description: "L'affectation consiste à modifier le contenu d'une variable déjà déclarée alors que l'initialisation c'est le combiné d'une déclaration et d'une affectation.",
      alreadyAsked: false,
    },
    {
      type: "qcm",
      question: "Mettre une valeur dans une variable à sa déclaration est une",
      propositions : ["Affectation", 'Initialisation'],
      answer: 1,
      description: "L'affectation consiste à modifier le contenu d'une variable déjà déclarée alors que l'initialisation c'est le combiné d'une déclaration et d'une affectation.",
      alreadyAsked: false,
    },
    {type: "qcm",
      question: "Supposons que je doive tester une variable entière dans les cas où elle est inférieure à 0 et dans le cas où elle est supérieure à zéro. Quelle structure conditionnelle puis-je utiliser ?",
      propositions : [
        "Le &lt;&lt;if simple&gt;&gt;", 
        "Le &lt;&lt;if ... else&gt;&gt;", 
        "Le &lt;&lt;if ... else if&gt;&gt;", 
        "La &lt;&lt;switch&gt;&gt;", 
        "La ternaire", 
      ],
      answer: 2,
      description: "La première condition servira à tester si le nombre est strictement positif et la seconde à tester si le nombre est strictement négatif. Gardez en tête que le contraire de supérieur n'est pas inférieur et ça vous sauvera la vie !",
      alreadyAsked: false,
    },
    ,
    {type: "qcm multiple",
      question: "Supposons que je doive tester une variable entière dans les cas où elle est inférieure à 0 et dans le cas où elle est supérieure ou égale à zéro. Quelle structure conditionnelle puis-je utiliser ?",
      propositions : [
        "Le &lt;&lt;if simple&gt;&gt;", 
        "Le &lt;&lt;if ... else&gt;&gt;", 
        "Le &lt;&lt;if ... else if&gt;&gt;", 
        "La &lt;&lt;switch&gt;&gt;", 
        "La ternaire", 
      ],
      answer: [1, 4],
      description: "La première condition servira à tester si le nombre est strictement positif l'alternative prendra en charge le reste (le contraire). Gardez en tête que le contraire de supérieur n'est pas inférieur et ça vous sauvera la vie !",
      alreadyAsked: false,
    },
    {type: "qcm multiple",
      question: "Combien de fosi une boucle exécute-t-elle un bloc d'instructions ?",
      propositions : ["0", "1", "Plusieurs fois"],
      answers: [0,1,2],
      description: "En effet, une boucle peut ou bien s'exécuter (1 ou plusieurs fois), ou bien ne pas s'exécuter du tout !",
      alreadyAsked: false,
    },
    {type: "qcm",
    question: "Quand je connais à l'avance le nombre de répétitions d'un bloc d'instructions, quelle structure conditionnelle dois-je utiliser ?",
    propositions : ["La boucle while", "La boucle do ... while", "La boucle for"],
    answer: 2,
    description: "La boucle for permet d'itérer quand on connait le nombre exact de fois qu'il le faut !",
    alreadyAsked: false,
  },
  {type: "qcm",
    question: "L'instruction <i>break</i> permet de",
    propositions : [
      "Arrêter le programme", 
      "Sortir d'une structure conditionnelle", 
      "Sortir d'une structure itérative", 
      "Passer à l'itération suivante d'une structure répétitive"
    ],
    answer: 2,
    description: "",
    alreadyAsked: false,
  },
  {type: "qcm",
    question: "L'instruction <i>continue</i> permet de",
    propositions : [
      "Arrêter le programme", 
      "Sortir d'une structure conditionnelle", 
      "Sortir d'une structure itérative", 
      "Passer à l'itération suivante d'une structure répétitive"
    ],
    answer: 3,
    description: "",
    alreadyAsked: false,
  },
  
];

var q = [
  {type: "qcm",
    question: "",
    propositions : [],
    answer: 0,
    description: "",
    alreadyAsked: false,
  },
  {type: "qcm multiple",
    question: "",
    propositions : [],
    answers: [],
    description: "",
    alreadyAsked: false,
  },
  {type: "unique-answer",
    question: "",
    answer: "",
    description: "",
    alreadyAsked: false
  },
  {type: "true-false",
    question: "",
    answer: true,
    description: "",
    alreadyAsked: false
}];