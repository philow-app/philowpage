export interface Question {
  id: number
  question: string
  answer: string
}

export interface VocabularyQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export interface QuizData {
  [bookId: string]: {
    connaissance: Question[]
    vocabulaire: VocabularyQuestion[]
  }
}

export const quizQuestions: QuizData = {
  verne: {
    connaissance: [
      {
        id: 1,
        question: "Qui est Jules Verne et quel rôle joue-t-il dans le XIXe siècle ?",
        answer: "Jules Verne est un écrivain français (1828-1905) considéré comme le témoin et chantre du XIXe siècle, une époque marquée par les grandes inventions, les explorations et le triomphe de la science."
      },
      {
        id: 2,
        question: "Quelles sont les grandes inventions et avancées scientifiques du XIXe siècle citées dans le texte ?",
        answer: "La machine à vapeur, l'électricité, la photographie, les explorations géographiques."
      },
      {
        id: 3,
        question: "Qu'est-ce que le positivisme d'Auguste Comte et comment se manifeste-t-il dans le roman ?",
        answer: "Le positivisme est une philosophie qui valorise la connaissance fondée uniquement sur l'observation et la mesure des faits. Dans le roman, il se manifeste par le personnage du professeur Aronnax, qui incarne cet esprit scientifique."
      },
      {
        id: 4,
        question: "Pourquoi le personnage du Capitaine Nemo est-il qualifié de « héros romantique » ?",
        answer: "Parce qu'il est une figure du banni sublime, un génie solitaire en révolte contre la société, ce qui incarne les valeurs et tensions du romantisme, en opposition au rationalisme scientifique."
      },
      {
        id: 5,
        question: "Quelles sont les grandes zones géographiques encore inconnues ou en cours d'exploration au XIXe siècle selon le texte ?",
        answer: "L'Afrique (en cours de cartographie), les pôles, et surtout les fonds marins qui restent quasiment inexplorés."
      },
      {
        id: 6,
        question: "Comment la nature est-elle perçue dans Vingt mille lieues sous les mers par rapport à l'œuvre de Haushofer ?",
        answer: "La nature n'est plus subie dans la solitude, mais choisie et médiatisée par la technique, elle devient un spectacle grandiose et un territoire à conquérir."
      },
      {
        id: 7,
        question: "Quel rôle joue la figure du Nautilus dans la symbolique du roman ?",
        answer: "Le Nautilus incarne le progrès technique, la maîtrise de la nature, et la volonté positiviste de mesurer et dominer le monde naturel."
      },
      {
        id: 8,
        question: "Décrivez brièvement le rôle du professeur Aronnax dans le roman.",
        answer: "Aronnax est un biologiste et professeur, un observateur scientifique qui cherche à voir, nommer et classifier la nature, et il est aussi le narrateur principal."
      },
      {
        id: 9,
        question: "Quel est le rôle de Conseil dans le récit ?",
        answer: "Conseil est le serviteur fidèle d'Aronnax, incarnation de la manie classificatoire, qui voit la nature sous forme de listes et de catégories."
      },
      {
        id: 10,
        question: "Comment Ned Land perçoit-il la nature, et quelle voix représente-t-il dans le roman ?",
        answer: "Ned Land perçoit la nature de façon pragmatique et sensorielle, comme source de nourriture et adversaire. Il porte la voix du non-sens et du ressentiment face à la captivité."
      },
      {
        id: 11,
        question: "Quelle est la nature de l'expérience du Capitaine Nemo vis-à-vis de la nature ?",
        answer: "Son expérience est multiple : scientifique, esthétique, pragmatique et fusionnelle, à la fois rationnelle et passionnée."
      },
      {
        id: 12,
        question: "En quoi le XIXe siècle est-il décrit comme un « Siècle de la Science et du Progrès » ?",
        answer: "Parce que c'est une époque où la science triomphe, la connaissance s'appuie sur l'observation et la mesure, les inventions techniques révolutionnent la société, et les explorations géographiques se multiplient."
      },
      {
        id: 13,
        question: "Citez une citation célèbre d'Auguste Comte résumant l'idée de positivisme.",
        answer: "« Savoir pour prévoir, afin de pouvoir. » (Bien que cette citation ne soit pas dans le texte, elle résume bien la pensée positiviste.)"
      },
      {
        id: 14,
        question: "Pourquoi peut-on dire que le roman illustre une « tension fondamentale » entre deux visions de la nature ?",
        answer: "Parce qu'il oppose la fascination mystique pour la nature vierge à la volonté positiviste de la mesurer, classer, et dominer par la science."
      },
      {
        id: 15,
        question: "Expliquez en quoi le personnage de Nemo crée une tension fascinante avec l'esprit scientifique du professeur Aronnax.",
        answer: "Nemo est un banni, un rebelle qui exprime un romantisme sombre et un rapport fusionnel à la nature, tandis qu'Aronnax est un scientifique rationnel et positiviste. Leurs visions s'opposent et se complètent."
      },
      {
        id: 16,
        question: "Quelle est la fonction narrative du professeur Aronnax dans le roman ?",
        answer: "Il est le narrateur principal, celui par qui le lecteur découvre l'aventure et les fonds marins à travers un regard scientifique."
      },
      {
        id: 17,
        question: "Comment le roman illustre-t-il la conquête technique de la nature ?",
        answer: "Par la description du Nautilus, un sous-marin technologiquement avancé, symbole du triomphe humain sur les éléments naturels."
      },
      {
        id: 18,
        question: "Quels sont les enjeux de la cartographie au XIXe siècle ?",
        answer: "Achever la connaissance géographique du globe, explorer les territoires inconnus, et asseoir un pouvoir scientifique et politique."
      },
      {
        id: 19,
        question: "Pourquoi la nature est-elle qualifiée de « spectacle grandiose » dans le roman ?",
        answer: "Parce qu'elle est médiatisée par la technique et la science, elle devient un objet de curiosité esthétique et scientifique, au lieu d'être une menace brute."
      },
      {
        id: 20,
        question: "Dans le contexte de ce roman, que symbolise la plongée dans les fonds marins ?",
        answer: "Une exploration littérale et figurative d'un monde inconnu, à la fois mystérieux et accessible grâce à la science et à la technique."
      },
      {
        id: 21,
        question: "En quoi Vingt mille lieues sous les mers est-il qualifié de \"roman-monde\" ?",
        answer: "Parce qu'il combine plusieurs genres : le roman d'aventure maritime, le récit scientifique encyclopédique, la fable politique et philosophique, et l'utopie technique, créant ainsi une œuvre complexe et multidimensionnelle."
      },
      {
        id: 22,
        question: "Quels sont les éléments hérités du roman d'aventure maritime présents dans l'œuvre ?",
        answer: "Le suspense, les combats, les tempêtes, l'exploration — caractéristiques typiques des romans d'aventure comme ceux de Cooper ou Melville."
      },
      {
        id: 23,
        question: "Comment Jules Verne articule-t-il l'objectif d'instruire et d'amuser dans son roman ?",
        answer: "En mêlant récit d'aventure et descriptions encyclopédiques scientifiques, Verne fait de la lecture une expérience à la fois divertissante et pédagogique, où le voyage géographique sert de prétexte à un voyage de connaissance."
      },
      {
        id: 24,
        question: "Quel est le point de départ de l'intrigue dans le premier chapitre et comment la perception du « monstre marin » évolue-t-elle ?",
        answer: "L'intrigue débute avec des témoignages marins évoquant un « monstre » inconnu capable de grandes vitesses et de projeter de l'eau, d'abord moqué puis considéré comme une menace réelle après des incidents graves."
      },
      {
        id: 25,
        question: "Comment le professeur Aronnax explique-t-il scientifiquement ce phénomène au début, et quelle hypothèse privilégie-t-il ?",
        answer: "Il émet l'hypothèse qu'il s'agit d'un narval géant ou d'un appareil sous-marin, mais penche pour le narval géant, qu'il défend dans un article scientifique."
      },
      {
        id: 26,
        question: "Quel est le rôle de la frégate Abraham Lincoln dans l'histoire et qui accompagne Aronnax dans cette expédition ?",
        answer: "La frégate est envoyée par la marine américaine pour traquer la créature. Aronnax embarque avec son domestique Conseil et fait la connaissance du harponneur Ned Land."
      },
      {
        id: 27,
        question: "Comment se termine la confrontation entre la frégate et le « monstre » dans les premiers chapitres ?",
        answer: "La frégate ne peut pas rattraper le monstre, dont la peau semble métallique, et Aronnax est projeté à la mer lors d'une gerbe d'eau ; il est ensuite sauvé et découvre que le monstre est en réalité un sous-marin."
      },
      {
        id: 28,
        question: "Quelle alternative propose le capitaine Nemo aux captifs et quelles sont les conditions de leur séjour à bord du Nautilus ?",
        answer: "Nemo propose soit la liberté à bord du Nautilus, soit la mort pour préserver le secret du sous-marin ; Aronnax, Conseil et Ned Land acceptent de rester à bord."
      },
      {
        id: 29,
        question: "Quelles sont les interrogations d'Aronnax concernant le capitaine Nemo dans le premier chapitre de la seconde partie ?",
        answer: "Aronnax se demande si Nemo est un simple savant misanthrope ou un homme animé par une vengeance contre l'humanité ; il ressent une part d'ombre et un malaise chez Nemo malgré l'admiration pour la beauté des fonds marins."
      },
      {
        id: 30,
        question: "Comment se déroule l'expédition aux pêcheries de perles de Ceylan, et que révèle-t-elle du caractère de Nemo ?",
        answer: "L'expédition est méticuleusement préparée, ils plongent sans fusils, seulement avec des poignards. Nemo montre une perle gigantesque mais refuse de la prendre, révélant son respect pour la nature plutôt que la convoitise."
      },
      {
        id: 31,
        question: "Quelle est la nature du « tunnel arabe » et quel exploit technique le Nautilus réalise-t-il en l'utilisant ?",
        answer: "Le « tunnel arabe » est un passage souterrain secret permettant de rejoindre la Méditerranée depuis la mer Rouge, malgré l'absence du canal de Suez. Le Nautilus franchit ce passage en moins de vingt minutes, montrant ses capacités extraordinaires."
      },
      {
        id: 32,
        question: "Décrivez la tension entre Ned Land et Aronnax quant à l'idée d'évasion à bord du Nautilus.",
        answer: "Ned Land est impatient et planifie une fuite, tandis qu'Aronnax admire Nemo et veut rester pour percer ses mystères. Land veut s'échapper avec ou sans les autres, et Aronnax accepte de le suivre si l'occasion se présente."
      },
      {
        id: 33,
        question: "Comment se conclut la confrontation avec le calmar géant, et quel impact cet événement a-t-il sur Nemo et l'équipage ?",
        answer: "Le combat est violent, un marin meurt, et Nemo intervient pour sauver un équipier. Cet affrontement traumatisant rend Nemo taciturne et distant, affectant profondément l'équipage."
      }
    ],
    vocabulaire: [
      {
        id: 1,
        question: "Que signifie le terme 'Positivisme' ?",
        options: [
          "Connaissance par l'observation et la mesure des faits",
          "Mouvement valorisant émotion et imagination",
          "Idéal de société rendu possible par la technologie",
          "Haine ou défiance envers l'humanité"
        ],
        correctAnswer: 0,
        explanation: "Le positivisme est une doctrine qui privilégie la connaissance par l'observation et la mesure des faits."
      },
      {
        id: 2,
        question: "Que désigne le terme 'Romantisme' ?",
        options: [
          "Connaissance par l'observation scientifique",
          "Mouvement valorisant émotion, imagination, individualisme",
          "Classification des êtres vivants",
          "Méthode basée sur l'expérience"
        ],
        correctAnswer: 1,
        explanation: "Le romantisme est un mouvement artistique et littéraire valorisant l'émotion, l'imagination et l'individualisme."
      },
      {
        id: 3,
        question: "Qu'est-ce qu'une 'Utopie technique' ?",
        options: [
          "Une méthode de classification scientifique",
          "Un monstre marin mythologique",
          "Idéal de société rendu possible par la technologie",
          "Un passage maritime dangereux"
        ],
        correctAnswer: 2,
        explanation: "Une utopie technique est un idéal de société rendu possible par les progrès technologiques."
      },
      {
        id: 4,
        question: "Où se trouve Vanikoro ?",
        options: [
          "Dans les fjords norvégiens",
          "Île du Pacifique, site d'un naufrage historique de l'expédition La Pérouse",
          "Dans la Méditerranée",
          "Au nord de l'Australie"
        ],
        correctAnswer: 1,
        explanation: "Vanikoro est une île du Pacifique, célèbre pour être le site du naufrage de l'expédition La Pérouse."
      },
      {
        id: 5,
        question: "Qu'est-ce que le Détroit de Torres ?",
        options: [
          "Un tourbillon marin légendaire",
          "Passage maritime étroit et dangereux au nord de l'Australie",
          "Un archipel d'îles côtières",
          "Une voie navigable artificielle"
        ],
        correctAnswer: 1,
        explanation: "Le Détroit de Torres est un passage maritime étroit et dangereux situé au nord de l'Australie."
      },
      {
        id: 6,
        question: "Qui sont les Papous ?",
        options: [
          "Populations autochtones de Papouasie",
          "Explorateurs français du XVIIIe siècle",
          "Scientifiques spécialisés en océanographie",
          "Membres d'équipage du Nautilus"
        ],
        correctAnswer: 0,
        explanation: "Les Papous sont les populations autochtones de Papouasie."
      },
      {
        id: 7,
        question: "Qu'est-ce qu'un Maelström ?",
        options: [
          "Un sous-marin révolutionnaire",
          "Tourbillon marin légendaire (Norvège)",
          "Un instrument de navigation",
          "Une espèce de cétacé"
        ],
        correctAnswer: 1,
        explanation: "Le Maelström est un tourbillon marin légendaire situé en Norvège."
      },
      {
        id: 8,
        question: "Que sont les Lofoten ?",
        options: [
          "Des instruments de mesure océanographique",
          "Des populations nordiques",
          "Archipel d'îles côtières en Norvège",
          "Des courants marins froids"
        ],
        correctAnswer: 2,
        explanation: "Les Lofoten forment un archipel d'îles côtières en Norvège."
      },
      {
        id: 9,
        question: "Que signifie 'Introspectives' ?",
        options: [
          "Réflexions sur soi-même, sur ses pensées",
          "Observations scientifiques externes",
          "Explorations géographiques",
          "Classifications biologiques"
        ],
        correctAnswer: 0,
        explanation: "Les réflexions introspectives portent sur soi-même, sur ses propres pensées et émotions."
      },
      {
        id: 10,
        question: "Qu'est-ce que la Misanthropie ?",
        options: [
          "Amour de l'humanité",
          "Haine ou défiance envers l'humanité",
          "Étude des sociétés humaines",
          "Mouvement artistique"
        ],
        correctAnswer: 1,
        explanation: "La misanthropie est un sentiment de haine ou de défiance envers l'humanité."
      },
      {
        id: 11,
        question: "Qu'est-ce que le Canal de Suez ?",
        options: [
          "Un passage sous-marin secret",
          "Voie navigable artificielle (Méditerranée-Mer Rouge)",
          "Un détroit naturel",
          "Un fleuve égyptien"
        ],
        correctAnswer: 1,
        explanation: "Le Canal de Suez est une voie navigable artificielle reliant la Méditerranée à la Mer Rouge."
      },
      {
        id: 12,
        question: "Qu'est-ce que le Tunnel arabe ?",
        options: [
          "Une construction moderne",
          "Passage sous-marin secret (Nemo)",
          "Un tunnel ferroviaire",
          "Une grotte naturelle"
        ],
        correctAnswer: 1,
        explanation: "Le tunnel arabe est un passage sous-marin secret utilisé par le capitaine Nemo."
      },
      {
        id: 13,
        question: "Qu'est-ce qu'un Canot ?",
        options: [
          "Un grand navire de guerre",
          "Petite embarcation, souvent pour l'évasion",
          "Un instrument de pêche",
          "Un type de filet"
        ],
        correctAnswer: 1,
        explanation: "Un canot est une petite embarcation, souvent utilisée pour l'évasion ou les déplacements courts."
      },
      {
        id: 14,
        question: "Où se trouve le Détroit de Gibraltar ?",
        options: [
          "Entre l'Atlantique et la Méditerranée",
          "Au nord de l'Australie",
          "En mer du Nord",
          "Dans l'océan Indien"
        ],
        correctAnswer: 0,
        explanation: "Le Détroit de Gibraltar est le passage entre l'océan Atlantique et la mer Méditerranée."
      },
      {
        id: 15,
        question: "Qu'est-ce que l'Atlantide ?",
        options: [
          "Une île réelle découverte par Nemo",
          "Continent ou cité mythique engloutie",
          "Un archipel norvégien",
          "Une région de l'Atlantique"
        ],
        correctAnswer: 1,
        explanation: "L'Atlantide est un continent ou une cité mythique supposée engloutie dans l'océan."
      },
      {
        id: 16,
        question: "Qu'est-ce que la Mer des Sargasses ?",
        options: [
          "Une mer fermée",
          "Zone de l'Atlantique avec beaucoup d'algues flottantes",
          "Un détroit dangereux",
          "Une zone polaire"
        ],
        correctAnswer: 1,
        explanation: "La Mer des Sargasses est une zone de l'Atlantique caractérisée par la présence de nombreuses algues flottantes."
      },
      {
        id: 17,
        question: "Qu'est-ce que le Cap Horn ?",
        options: [
          "Cap dangereux à l'extrême sud de l'Amérique du Sud",
          "Une île du Pacifique",
          "Un port européen",
          "Un détroit méditerranéen"
        ],
        correctAnswer: 0,
        explanation: "Le Cap Horn est un cap réputé dangereux situé à l'extrême sud de l'Amérique du Sud."
      },
      {
        id: 18,
        question: "Qu'est-ce que le Gulf Stream ?",
        options: [
          "Un détroit maritime",
          "Courant marin chaud dans l'Atlantique",
          "Un type de navigation",
          "Une zone de pêche"
        ],
        correctAnswer: 1,
        explanation: "Le Gulf Stream est un courant marin chaud circulant dans l'océan Atlantique."
      },
      {
        id: 19,
        question: "Que signifie 'Sabordé' ?",
        options: [
          "Navire réparé en urgence",
          "Navire coulé volontairement par son équipage",
          "Navire abandonné sur une côte",
          "Navire capturé par l'ennemi"
        ],
        correctAnswer: 1,
        explanation: "Un navire sabordé est un navire coulé volontairement par son propre équipage."
      },
      {
        id: 20,
        question: "Que représentent 'Vingt mille lieues' ?",
        options: [
          "Environ 20 kilomètres",
          "Unité de distance, environ 80 000 km",
          "Une profondeur marine",
          "Une durée de voyage"
        ],
        correctAnswer: 1,
        explanation: "Vingt mille lieues représentent une unité de distance d'environ 80 000 kilomètres."
      },
      {
        id: 21,
        question: "Que signifie 'Taxonomique' ?",
        options: [
          "Liée à la classification des êtres vivants",
          "Relative aux impôts",
          "Concernant la géographie",
          "Relative aux mathématiques"
        ],
        correctAnswer: 0,
        explanation: "Le terme taxonomique est lié à la classification scientifique des êtres vivants."
      },
      {
        id: 22,
        question: "Qu'est-ce qu'une approche 'Pragmatique et sensorielle' ?",
        options: [
          "Basée sur la théorie pure",
          "Basée sur l'expérience concrète et les sens",
          "Basée sur l'intuition",
          "Basée sur la tradition"
        ],
        correctAnswer: 1,
        explanation: "Une approche pragmatique et sensorielle est basée sur l'expérience concrète et les perceptions sensorielles."
      },
      {
        id: 23,
        question: "Qu'est-ce qu'une 'Lignée littéraire' ?",
        options: [
          "Un style d'écriture particulier",
          "Succession d'auteurs ou d'œuvres influentes",
          "Une technique narrative",
          "Un genre littéraire"
        ],
        correctAnswer: 1,
        explanation: "Une lignée littéraire désigne une succession d'auteurs ou d'œuvres qui s'influencent mutuellement."
      },
      {
        id: 24,
        question: "Qu'est-ce que le Léviathan ?",
        options: [
          "Un type de sous-marin",
          "Monstre marin biblique et mythologique",
          "Une espèce de baleine",
          "Un courant océanique"
        ],
        correctAnswer: 1,
        explanation: "Le Léviathan est un monstre marin légendaire issu de la tradition biblique et mythologique."
      },
      {
        id: 25,
        question: "Que signifie 'Caractère sacré' ?",
        options: [
          "Qualité de ce qui est scientifique",
          "Qualité de ce qui est vénéré, inviolable",
          "Qualité de ce qui est ancien",
          "Qualité de ce qui est mystérieux"
        ],
        correctAnswer: 1,
        explanation: "Le caractère sacré désigne la qualité de ce qui est vénéré et considéré comme inviolable."
      },
      {
        id: 26,
        question: "Que sont les 'Temps géologiques' ?",
        options: [
          "Les heures de travail des géologues",
          "Échelles de temps très longues (millions d'années)",
          "Les saisons de l'année",
          "Les cycles lunaires"
        ],
        correctAnswer: 1,
        explanation: "Les temps géologiques désignent les échelles de temps très longues, comptées en millions d'années."
      },
      {
        id: 27,
        question: "Qu'est-ce que le 'Savoir empirique' ?",
        options: [
          "Connaissance théorique pure",
          "Connaissance acquise par l'expérience",
          "Connaissance intuitive",
          "Connaissance révélée"
        ],
        correctAnswer: 1,
        explanation: "Le savoir empirique est une connaissance acquise par l'expérience et l'observation directe."
      },
      {
        id: 28,
        question: "Qu'est-ce qu'une 'Approche empirique' ?",
        options: [
          "Méthode basée sur la théorie",
          "Méthode basée sur l'expérience",
          "Méthode basée sur la logique pure",
          "Méthode basée sur l'autorité"
        ],
        correctAnswer: 1,
        explanation: "Une approche empirique est une méthode basée sur l'expérience et l'observation des faits."
      },
      {
        id: 29,
        question: "Qui est Darwin ?",
        options: [
          "Un personnage de Jules Verne",
          "Naturaliste célèbre pour la théorie de l'évolution",
          "Un explorateur arctique",
          "Un inventeur de sous-marins"
        ],
        correctAnswer: 1,
        explanation: "Charles Darwin est un naturaliste britannique célèbre pour sa théorie de l'évolution des espèces."
      },
      {
        id: 30,
        question: "Que signifie 'Arche sainte' dans le contexte du Nautilus ?",
        options: [
          "La salle des machines",
          "Dimension sacrée, quasi divine du Nautilus",
          "La bibliothèque du sous-marin",
          "Le salon principal"
        ],
        correctAnswer: 1,
        explanation: "L'expression 'arche sainte' évoque la dimension sacrée, quasi divine accordée au Nautilus."
      },
      {
        id: 31,
        question: "Que signifie 'Relativisation des récits humains' ?",
        options: [
          "Amélioration des connaissances",
          "Les découvertes scientifiques bousculent les dogmes anciens",
          "Confirmation des traditions",
          "Respect des autorités"
        ],
        correctAnswer: 1,
        explanation: "La relativisation des récits humains désigne le fait que les découvertes scientifiques remettent en question les dogmes établis."
      },
      {
        id: 32,
        question: "Qu'est-ce qu'une 'Métaphore écologique profonde' ?",
        options: [
          "Une simple comparaison poétique",
          "Comparaison de l'Argonaute/coquille à Nemo/Nautilus",
          "Une description scientifique",
          "Une technique narrative"
        ],
        correctAnswer: 1,
        explanation: "Cette métaphore compare la relation entre l'Argonaute et sa coquille à celle entre Nemo et son Nautilus."
      },
      {
        id: 33,
        question: "Que sont les 'Trois niveaux d'habitat' de Nemo ?",
        options: [
          "Les trois ponts du Nautilus",
          "Carapace psychologique, Nautilus, mer entière pour Nemo",
          "Les trois océans explorés",
          "Les trois cabines principales"
        ],
        correctAnswer: 1,
        explanation: "Les trois niveaux d'habitat de Nemo sont sa carapace psychologique, le Nautilus, et la mer entière."
      },
      {
        id: 34,
        question: "Que signifie 'Maîtriser par le savoir' ?",
        options: [
          "Contrôler par la force",
          "Dominer le monde en le comprenant et le nommant",
          "Enseigner aux autres",
          "Accumuler des richesses"
        ],
        correctAnswer: 1,
        explanation: "Maîtriser par le savoir signifie dominer le monde en le comprenant et en le nommant scientifiquement."
      },
      {
        id: 35,
        question: "Qu'est-ce qu'une 'Expérience classificatoire' ?",
        options: [
          "Une expédition de découverte",
          "La science comme moyen de ranger et d'ordonner le réel",
          "Un type d'expérience chimique",
          "Une méthode de navigation"
        ],
        correctAnswer: 1,
        explanation: "L'expérience classificatoire utilise la science comme moyen de ranger et d'ordonner la réalité."
      },
      {
        id: 36,
        question: "Qu'est-ce que le 'Sublime (au sens kantien)' ?",
        options: [
          "Ce qui est simplement beau",
          "Sentiment mêlé de crainte et d'admiration face à ce qui nous dépasse",
          "Ce qui est parfaitement harmonieux",
          "Ce qui est techniquement parfait"
        ],
        correctAnswer: 1,
        explanation: "Le sublime kantien est un sentiment mêlé de crainte et d'admiration face à ce qui nous dépasse."
      },
      {
        id: 37,
        question: "Qu'est-ce que la 'Transcendance laïque' ?",
        options: [
          "Une pratique religieuse",
          "Une forme d'élévation spirituelle sans lien religieux",
          "Une technique scientifique",
          "Une philosophie matérialiste"
        ],
        correctAnswer: 1,
        explanation: "La transcendance laïque est une forme d'élévation spirituelle qui ne s'appuie sur aucune religion."
      },
      {
        id: 38,
        question: "Qu'est-ce qu'un 'Asile politique' dans le contexte de Nemo ?",
        options: [
          "Un bureau gouvernemental",
          "La mer comme refuge contre la société",
          "Une ambassade",
          "Un tribunal international"
        ],
        correctAnswer: 1,
        explanation: "Pour Nemo, l'asile politique désigne la mer comme refuge contre la société terrestre."
      },
      {
        id: 39,
        question: "Qu'est-ce qu'une 'Prison dorée' ?",
        options: [
          "Une prison luxueuse",
          "Un lieu merveilleux mais qui prive de liberté",
          "Un palais royal",
          "Un sous-marin décoré"
        ],
        correctAnswer: 1,
        explanation: "Une prison dorée est un lieu merveilleux qui offre le confort mais prive de liberté."
      },
      {
        id: 40,
        question: "Quelle est la 'Tension entre libération et enfermement' ?",
        options: [
          "Un conflit personnel",
          "Le paradoxe de la technologie",
          "Une opposition politique",
          "Un dilemme moral simple"
        ],
        correctAnswer: 1,
        explanation: "Cette tension illustre le paradoxe de la technologie qui peut à la fois libérer et enfermer."
      },
      {
        id: 41,
        question: "Qu'est-ce que l''Encyclopédisme vernien' ?",
        options: [
          "Un style littéraire simple",
          "Le désir de Verne de faire du roman une somme de savoirs",
          "Une technique narrative",
          "Un genre de science-fiction"
        ],
        correctAnswer: 1,
        explanation: "L'encyclopédisme vernien désigne la volonté de Jules Verne de faire du roman une encyclopédie de connaissances."
      },
      {
        id: 42,
        question: "Qu'est-ce que l''Ichtyologie fantastique' ?",
        options: [
          "L'étude des poissons fossiles",
          "Étude des poissons incluant des éléments merveilleux ou surnaturels",
          "La pêche en haute mer",
          "L'aquaculture moderne"
        ],
        correctAnswer: 1,
        explanation: "L'ichtyologie fantastique est l'étude des poissons enrichie d'éléments merveilleux ou surnaturels."
      },
      {
        id: 43,
        question: "Qu'est-ce que le Nautilus ?",
        options: [
          "Un animal marin",
          "Sous-marin de Nemo, symbole de prouesse technique et d'utopie",
          "Un navire de surface",
          "Un instrument de navigation"
        ],
        correctAnswer: 1,
        explanation: "Le Nautilus est le sous-marin du capitaine Nemo, symbole de prouesse technique et d'utopie."
      },
      {
        id: 44,
        question: "Que sont les Ballasts ?",
        options: [
          "Des armes du sous-marin",
          "Réservoirs contrôlant la plongée et la remontée d'un sous-marin",
          "Des instruments de mesure",
          "Des provisions de voyage"
        ],
        correctAnswer: 1,
        explanation: "Les ballasts sont des réservoirs qui contrôlent la plongée et la remontée d'un sous-marin."
      },
      {
        id: 45,
        question: "Qu'est-ce qu'un Gouvernail ?",
        options: [
          "Un membre d'équipage",
          "Organe de direction d'un navire ou sous-marin",
          "Un type de moteur",
          "Un instrument de communication"
        ],
        correctAnswer: 1,
        explanation: "Le gouvernail est l'organe qui permet de diriger un navire ou un sous-marin."
      },
      {
        id: 46,
        question: "Qu'est-ce qu'un 'Roman-monde' ?",
        options: [
          "Un roman de voyage",
          "Roman vaste et encyclopédique, cherchant à tout englober",
          "Un roman d'aventures",
          "Un roman historique"
        ],
        correctAnswer: 1,
        explanation: "Un roman-monde est un roman vaste et encyclopédique qui cherche à englober toutes les connaissances."
      },
      {
        id: 47,
        question: "Qu'est-ce qu'une 'Fable politique et philosophique' ?",
        options: [
          "Un conte pour enfants",
          "Récit transmettant un message moral ou social",
          "Une chronique historique",
          "Un rapport scientifique"
        ],
        correctAnswer: 1,
        explanation: "Une fable politique et philosophique est un récit qui transmet un message moral ou social."
      },
      {
        id: 48,
        question: "Qu'est-ce qu'un Dugong ?",
        options: [
          "Un type de sous-marin",
          "Mammifère marin herbivore, similaire au lamantin",
          "Un poisson des profondeurs",
          "Un oiseau marin"
        ],
        correctAnswer: 1,
        explanation: "Le dugong est un mammifère marin herbivore, proche du lamantin."
      },
      {
        id: 49,
        question: "Qu'est-ce qu'un Cachalot ?",
        options: [
          "Un petit poisson",
          "Grand cétacé reconnaissable à sa tête massive",
          "Un mollusque",
          "Un crustacé"
        ],
        correctAnswer: 1,
        explanation: "Le cachalot est un grand cétacé facilement reconnaissable à sa tête massive."
      },
      {
        id: 50,
        question: "Que signifie 'In extremis' ?",
        options: [
          "En profondeur",
          "Au tout dernier moment, de justesse",
          "À l'extrême nord",
          "En superficie"
        ],
        correctAnswer: 1,
        explanation: "'In extremis' signifie au tout dernier moment, de justesse."
      },
      {
        id: 51,
        question: "Que signifie 'Fusionnelle' ?",
        options: [
          "Qui divise",
          "Tendance à se fondre avec, à ne faire qu'un avec l'environnement",
          "Qui analyse",
          "Qui observe à distance"
        ],
        correctAnswer: 1,
        explanation: "Une relation fusionnelle tend à faire disparaître les limites, à ne faire qu'un avec l'environnement."
      },
      {
        id: 52,
        question: "Que désigne le terme 'Milieu' ?",
        options: [
          "Le centre géométrique",
          "Environnement naturel spécifique",
          "Une moyenne mathématique",
          "Une position sociale"
        ],
        correctAnswer: 1,
        explanation: "Le milieu désigne un environnement naturel spécifique où vivent des êtres vivants."
      },
      {
        id: 53,
        question: "Qu'est-ce qu'une 'Croyance irrationnelle' ?",
        options: [
          "Une hypothèse scientifique",
          "Foi sans fondement logique ou scientifique",
          "Une théorie prouvée",
          "Une observation empirique"
        ],
        correctAnswer: 1,
        explanation: "Une croyance irrationnelle est une foi qui n'a pas de fondement logique ou scientifique."
      },
      {
        id: 54,
        question: "Qu'est-ce qu'un 'Deus ex machina' ?",
        options: [
          "Une machine divine",
          "Intervention inattendue pour résoudre une situation complexe",
          "Un moteur de navire",
          "Un personnage religieux"
        ],
        correctAnswer: 1,
        explanation: "Un 'deus ex machina' est une intervention inattendue qui résout artificiellement une situation complexe."
      },
      {
        id: 55,
        question: "Qu'est-ce qu'une 'Devise latine' ?",
        options: [
          "Une monnaie ancienne",
          "Expression courte en latin",
          "Un titre nobiliaire",
          "Une prière religieuse"
        ],
        correctAnswer: 1,
        explanation: "Une devise latine est une expression courte en latin, souvent porteuse de sens moral ou philosophique."
      },
      {
        id: 56,
        question: "Qu'est-ce qu'une 'Symbiose' ?",
        options: [
          "Une opposition",
          "Association étroite et souvent bénéfique entre différents éléments",
          "Une séparation",
          "Une compétition"
        ],
        correctAnswer: 1,
        explanation: "Une symbiose est une association étroite et généralement bénéfique entre différents éléments ou organismes."
      },
      {
        id: 57,
        question: "Qu'est-ce qu'une 'Dimension initiatique' ?",
        options: [
          "Une mesure géométrique",
          "Caractère de découverte et de transformation personnelle",
          "Une technique d'enseignement",
          "Une méthode de calcul"
        ],
        correctAnswer: 1,
        explanation: "La dimension initiatique désigne le caractère de découverte et de transformation personnelle d'une expérience."
      },
      {
        id: 58,
        question: "Qu'est-ce que le 'Dilemme d'Aronnax' ?",
        options: [
          "Un problème technique",
          "Choix difficile entre deux options, souvent contradictoires",
          "Une découverte scientifique",
          "Une méthode de navigation"
        ],
        correctAnswer: 1,
        explanation: "Le dilemme d'Aronnax représente un choix difficile entre deux options souvent contradictoires."
      },
      {
        id: 59,
        question: "Que sont les 'Dolmens des temps antéhistoriques' ?",
        options: [
          "Des fossiles marins",
          "Monuments mégalithiques très anciens, antérieurs à l'histoire écrite",
          "Des outils de navigation",
          "Des espèces animales disparues"
        ],
        correctAnswer: 1,
        explanation: "Les dolmens des temps antéhistoriques sont des monuments mégalithiques très anciens, antérieurs à l'histoire écrite."
      },
      {
        id: 60,
        question: "Qu'est-ce qu'une 'Vocation didactique' ?",
        options: [
          "Une profession d'enseignant",
          "But d'enseigner ou d'instruire",
          "Une méthode pédagogique",
          "Un diplôme universitaire"
        ],
        correctAnswer: 1,
        explanation: "Une vocation didactique désigne le but d'enseigner ou d'instruire à travers une œuvre."
      },
      {
        id: 61,
        question: "Que signifie 'Relativiser la séparation' ?",
        options: [
          "Creuser un fossé",
          "Diminuer la distinction ou la distance entre deux choses",
          "Augmenter les différences",
          "Créer des catégories"
        ],
        correctAnswer: 1,
        explanation: "Relativiser la séparation signifie diminuer la distinction ou la distance entre deux choses."
      },
      {
        id: 62,
        question: "Qu'est-ce que la 'Dialectique entre la théorie et la pratique' ?",
        options: [
          "Opposition irréductible",
          "Tension et interaction dynamique entre le savoir livresque et l'expérience",
          "Domination de la théorie",
          "Rejet de toute théorie"
        ],
        correctAnswer: 1,
        explanation: "Cette dialectique désigne la tension et l'interaction dynamique entre le savoir théorique et l'expérience pratique."
      },
      {
        id: 63,
        question: "Que sont les 'Dogmes religieux' ?",
        options: [
          "Des hypothèses scientifiques",
          "Croyances imposées par une religion, souvent sans discussion possible",
          "Des observations empiriques",
          "Des théories philosophiques"
        ],
        correctAnswer: 1,
        explanation: "Les dogmes religieux sont des croyances imposées par une religion, généralement sans possibilité de discussion."
      },
      {
        id: 64,
        question: "Qu'est-ce que l''Adaptation des espèces à leur milieu' ?",
        options: [
          "Modification artificielle des espèces",
          "Capacité des êtres vivants à s'ajuster à leur environnement",
          "Transport d'espèces vers d'autres milieux",
          "Destruction de l'environnement"
        ],
        correctAnswer: 1,
        explanation: "L'adaptation des espèces à leur milieu désigne leur capacité à s'ajuster à leur environnement naturel."
      },
      {
        id: 65,
        question: "Qu'est-ce que la 'Prépondérance de l'océan' ?",
        options: [
          "La pollution marine",
          "Importance dominante de la mer",
          "La navigation commerciale",
          "L'exploration sous-marine"
        ],
        correctAnswer: 1,
        explanation: "La prépondérance de l'océan désigne l'importance dominante de la mer dans un contexte donné."
      },
      {
        id: 66,
        question: "Qu'est-ce qu'un 'Écosystème complet et autonome' ?",
        options: [
          "Un aquarium artificiel",
          "Milieu de vie se suffisant à lui-même",
          "Une réserve naturelle",
          "Un laboratoire scientifique"
        ],
        correctAnswer: 1,
        explanation: "Un écosystème complet et autonome est un milieu de vie qui se suffit à lui-même."
      },
      {
        id: 67,
        question: "Qu'est-ce qu'un 'Traumatisme historique' ?",
        options: [
          "Un accident du passé",
          "Conséquence psychologique d'un événement douloureux du passé",
          "Une guerre ancienne",
          "Un changement politique"
        ],
        correctAnswer: 1,
        explanation: "Un traumatisme historique désigne les conséquences psychologiques durables d'un événement douloureux du passé."
      },
      {
        id: 68,
        question: "Qu'est-ce qu'une 'Expérience existentielle' ?",
        options: [
          "Une expérience scientifique",
          "Confrontation avec soi-même et le sens de l'existence",
          "Un voyage touristique",
          "Une formation professionnelle"
        ],
        correctAnswer: 1,
        explanation: "Une expérience existentielle est une confrontation profonde avec soi-même et le sens de l'existence."
      }
    ]
  },
  haushofer: {
    connaissance: [
      {
        id: 1,
        question: "Quel est le contexte historique ayant influencé l'écriture de Le Mur invisible ?",
        answer: "Les bouleversements du XXᵉ siècle, notamment les deux Guerres mondiales, et leur impact psychologique, social et existentiel."
      },
      {
        id: 2,
        question: "Comment peut-on qualifier le style d'écriture de Marlen Haushofer ?",
        answer: "Un style précis, introspectif, dépouillé, sans effets stylistiques superflus."
      },
      {
        id: 3,
        question: "Quel genre littéraire peut-on associer à Le Mur invisible ?",
        answer: "Une dystopie d'anticipation mêlée à une réflexion philosophique et existentielle."
      },
      {
        id: 4,
        question: "Pourquoi peut-on considérer Le Mur invisible comme une œuvre féministe ?",
        answer: "Parce qu'elle met en scène une femme seule, autonome, en rupture avec les normes patriarcales de la société d'après-guerre."
      },
      {
        id: 5,
        question: "Quelle fonction remplit le journal intime dans le roman ?",
        answer: "Il permet une introspection profonde et rend compte de l'évolution psychologique de la narratrice face à l'isolement."
      },
      {
        id: 6,
        question: "Quel est le rôle symbolique du \"mur\" dans le roman ?",
        answer: "Il symbolise une séparation absolue d'avec la civilisation et une nouvelle condition existentielle imposée par la nature."
      },
      {
        id: 7,
        question: "Comment l'expérience de la nature diffère-t-elle entre Jules Verne et Marlen Haushofer ?",
        answer: "Chez Verne, la nature est un espace à explorer et maîtriser ; chez Haushofer, elle est un cadre de survie, indifférente, voire hostile."
      },
      {
        id: 8,
        question: "Quelle est la principale transformation de la narratrice au fil du roman ?",
        answer: "Elle passe de citadine intellectuelle à une femme enracinée dans la nature, autonome, attentive aux rythmes biologiques."
      },
      {
        id: 9,
        question: "Comment l'œuvre traite-t-elle la question du temps ?",
        answer: "Le temps devient cyclique et naturel, rythmé par les saisons et les besoins élémentaires, en opposition au temps social et mécanique."
      },
      {
        id: 10,
        question: "Quelle est la fonction de la chienne Lynx dans le récit ?",
        answer: "Elle est à la fois un soutien affectif, une médiatrice entre la narratrice et la nature, et un outil de survie."
      },
      {
        id: 11,
        question: "Pourquoi peut-on dire que Lynx incarne le retour à l'instinct ?",
        answer: "Parce qu'elle abandonne les habitudes domestiques pour redevenir une chasseresse et protectrice dans un milieu sauvage."
      },
      {
        id: 12,
        question: "Quel est le rôle symbolique de la vache ?",
        answer: "Elle incarne la fertilité, la responsabilité, la continuité de la vie, et rappelle la dépendance humaine envers les autres vivants."
      },
      {
        id: 13,
        question: "Que signifie la naissance du veau dans l'économie symbolique du roman ?",
        answer: "Un signe d'espoir, une régénération au sein d'un monde appauvri et figé par l'enfermement."
      },
      {
        id: 14,
        question: "Quelle place la narratrice accorde-t-elle aux animaux ?",
        answer: "Ils deviennent sa nouvelle communauté, ses interlocuteurs silencieux, et participent à sa redéfinition de l'humain."
      },
      {
        id: 15,
        question: "Pourquoi peut-on parler de \"symbiose\" entre la narratrice et son environnement ?",
        answer: "Car elle adapte ses gestes, ses pensées et ses rythmes aux lois naturelles, vivant en interdépendance avec la faune et la flore."
      },
      {
        id: 16,
        question: "Comment le roman exprime-t-il une critique de la société moderne ?",
        answer: "En opposant la société industrialisée à une vie élémentaire et en valorisant une autonomie fondée sur la sobriété et l'adaptation."
      },
      {
        id: 17,
        question: "Quelle réflexion le roman propose-t-il sur la liberté ?",
        answer: "La liberté y est paradoxale : la narratrice est enfermée, mais elle gagne une forme d'autonomie intérieure et de maîtrise de soi."
      },
      {
        id: 18,
        question: "Comment la disparition du chat contribue-t-elle à la tension dramatique du récit ?",
        answer: "Elle rappelle brutalement la vulnérabilité de toute vie, même domestiquée, face aux lois impitoyables de la nature."
      },
      {
        id: 19,
        question: "Quel type de regard la narratrice adopte-t-elle sur elle-même à travers le journal ?",
        answer: "Un regard introspectif, lucide, parfois désabusé, où elle analyse ses émotions, ses limites et ses métamorphoses."
      },
      {
        id: 20,
        question: "Comment Le Mur invisible illustre-t-il la crise de l'humanisme au XXᵉ siècle ?",
        answer: "En confrontant l'individu à une solitude absolue, privée de tout lien social, l'œuvre questionne la définition même de l'homme en dehors de la culture."
      },
      {
        id: 21,
        question: "Quel est l'effet produit par l'utilisation du journal intime comme forme narrative dans Le Mur invisible ?",
        answer: "Le journal intime place le lecteur au plus près des pensées de la narratrice, créant une forte empathie. Ce choix accentue la subjectivité du récit, mais limite la compréhension globale de la situation. Le lecteur ne connaît que ce que la narratrice perçoit ou décide de rapporter."
      },
      {
        id: 22,
        question: "En quoi la linéarité du récit est-elle paradoxale dans Le Mur invisible ?",
        answer: "Bien que le récit suive un ordre chronologique, il est marqué par des discontinuités, des ellipses et des temps morts. Cela reflète la monotonie et le vide temporel liés à la solitude, où certains événements insignifiants sont longuement décrits tandis que des périodes entières sont éludées."
      },
      {
        id: 23,
        question: "Quels genres littéraires se croisent dans Le Mur invisible ? Donnez deux exemples concrets issus du passage.",
        answer: "Plusieurs genres se croisent : le roman de survie, avec la gestion des ressources et des besoins vitaux, et le roman philosophique, avec des réflexions sur la solitude, la mort, et le sens de la vie. Il s'agit donc d'un récit hybride, mêlant introspection existentielle et narration d'épreuve."
      },
      {
        id: 24,
        question: "Quel est le rôle du mur dans la construction narrative et symbolique du roman ?",
        answer: "Le mur est à la fois un élément déclencheur du récit (il isole la narratrice et instaure la situation post-apocalyptique) et un symbole fort. Il représente l'incommunicabilité, l'isolement existentiel, mais aussi la frontière entre l'humain et le non-humain, entre le monde social et le monde naturel."
      },
      {
        id: 25,
        question: "Pourquoi le fait que la narratrice soit anonyme est-il significatif ?",
        answer: "L'absence de nom universalise la figure de la narratrice. Elle devient une \"toute femme\", une figure existentielle plus qu'un personnage particulier. Cela accentue la portée philosophique de l'expérience et l'identification du lecteur."
      },
      {
        id: 26,
        question: "Comment la narratrice redéfinit-elle le temps au fil du récit ?",
        answer: "Elle passe d'un temps social et linéaire à un temps cyclique et naturel. Ses repères deviennent les saisons, les récoltes, la croissance des animaux. Ce changement marque une transformation profonde de son rapport au monde."
      },
      {
        id: 27,
        question: "Quelle est la fonction narrative et symbolique des animaux dans le récit ?",
        answer: "Les animaux jouent plusieurs rôles : compagnons affectifs (Lynx, la vache, le chat), ressources vitales (lait, protection), miroirs de l'instinct et de la résilience. Ils incarnent aussi la fragilité de la vie et l'ordre naturel impitoyable."
      },
      {
        id: 28,
        question: "En quoi peut-on dire que la nature est à la fois \"geôlière\" et \"nourricière\" ?",
        answer: "La nature, enfermée par le mur, est la seule réalité possible : elle emprisonne la narratrice, mais lui fournit aussi tout ce dont elle a besoin pour survivre. Cette ambivalence souligne la complexité du rapport humain au vivant."
      },
      {
        id: 29,
        question: "Comment la mort des animaux affecte-t-elle la narratrice psychologiquement ?",
        answer: "Chaque perte (chat, veau, Lynx) est un choc qui réactive le sentiment de solitude et la fragilité de son équilibre mental. La mort de Lynx, en particulier, remet en question son désir de continuer à vivre. Ces deuils successifs marquent les étapes de sa transformation intérieure."
      },
      {
        id: 30,
        question: "Que signifie le fait que le journal s'arrête en plein milieu d'une phrase ?",
        answer: "Cette fin ouverte reflète l'absurdité existentielle de sa situation. Elle renforce l'incertitude sur son avenir et sur le monde extérieur. C'est aussi une façon de signifier que la vie continue, même sans explication, même dans l'inconnu."
      },
      {
        id: 31,
        question: "Pourquoi peut-on dire que Le Mur invisible est un roman de \"déconstruction de l'humain\" ?",
        answer: "La narratrice perd progressivement ses repères sociaux, intellectuels et identitaires. Elle abandonne les valeurs culturelles et urbaines pour s'adapter à un monde réduit à sa plus simple expression : survivre, ressentir, observer. Cela déconstruit l'idée de supériorité humaine et redéfinit ce que signifie \"être vivant\"."
      },
      {
        id: 32,
        question: "Pourquoi la narratrice perd-elle son nom, et que signifie cette absence d'identité ?",
        answer: "Parce qu'elle est coupée de toute société humaine. Cette perte du nom symbolise une libération des assignations sociales (genre, statut, etc.) et permet une refondation existentielle."
      },
      {
        id: 33,
        question: "En quoi l'expérience du mur invalide-t-elle les savoirs académiques de la narratrice ?",
        answer: "Ses connaissances intellectuelles deviennent inutiles dans le contexte de survie. Elle doit apprendre par l'expérience directe, valorisant l'intelligence pratique."
      },
      {
        id: 34,
        question: "Quel rôle joue le corps dans la transformation de la narratrice ?",
        answer: "Son corps devient un outil fonctionnel. Il perd toute valeur esthétique ou genrée, se réapproprie une puissance primitive qui renverse les normes féminines traditionnelles."
      },
      {
        id: 35,
        question: "Comment la temporalité vécue dans la vallée contraste-t-elle avec celle du monde d'avant ?",
        answer: "Le temps n'est plus social ou productif, mais organique et cyclique. Il épouse les rythmes naturels (saisons, animaux), abolissant l'urgence propre au capitalisme."
      },
      {
        id: 36,
        question: "Quel rôle tiennent les animaux dans la structuration psychique de la narratrice ?",
        answer: "Ils ne sont pas de simples compagnons : ils incarnent une altérité pacifique, une forme de sagesse instinctive et d'ancrage émotionnel qui remplace la communauté humaine."
      },
      {
        id: 37,
        question: "En quoi la narratrice dépasse-t-elle la notion de genre ?",
        answer: "Coupée de toute assignation sociale, elle se vit parfois comme enfant, homme ou être asexué. Cela traduit une dissolution des catégories binaires et une exploration post-genre."
      },
      {
        id: 38,
        question: "Comment l'œuvre critique-t-elle l'anthropocentrisme ?",
        answer: "Par l'idée que l'humain n'est pas au sommet de la création. L'animalité devient modèle de vie, et l'humain apparaît comme une anomalie destructrice, surtout à travers la figure masculine violente."
      },
      {
        id: 39,
        question: "Pourquoi peut-on dire que la narratrice expérimente une forme de sagesse écologique ?",
        answer: "Parce qu'elle apprend à vivre en symbiose avec son environnement, en respectant ses limites, ses cycles et ses lois, développant une éthique du care et de l'adaptation."
      },
      {
        id: 40,
        question: "Quelle fonction symbolique le mur remplit-il dans l'œuvre ?",
        answer: "Il marque une frontière entre civilisation et nature, mais aussi entre violence et paix. Il incarne une rupture qui permet une critique de la société moderne, patriarcale et productiviste."
      },
      {
        id: 41,
        question: "Comment le roman exprime-t-il une critique du consumérisme ?",
        answer: "À travers la révélation que la vie antérieure, gouvernée par le désir de possession, était vide de sens. La simplicité forcée lui fait entrevoir une autre échelle de valeur."
      },
      {
        id: 42,
        question: "Que révèle l'homme inconnu qui surgit à la fin du récit ?",
        answer: "Il incarne le retour brutal du patriarcat et de la violence masculine. En tuant le chien, il détruit la dernière trace d'affection de la narratrice. Sa venue réactive la peur et la menace."
      },
      {
        id: 43,
        question: "En quoi peut-on lire le roman comme une allégorie écoféministe ?",
        answer: "Parce qu'il établit un lien entre la domination masculine et l'exploitation de la nature. La narratrice, en s'émancipant seule dans un espace naturel, rejette les logiques patriarcales."
      },
      {
        id: 44,
        question: "Pourquoi peut-on considérer la vallée comme une utopie paradoxale ?",
        answer: "C'est une utopie écologique fondée sur la réciprocité et la survie, mais aussi une anti-utopie, car elle est acquise dans la douleur, le deuil, et ne garantit ni bonheur ni salut."
      },
      {
        id: 45,
        question: "Quel rôle joue l'écriture dans la survie psychique de la narratrice ?",
        answer: "L'écriture du journal est son seul ancrage mental. Elle lui permet de maintenir une continuité du moi, de ne pas sombrer dans la folie, et de donner un sens à l'absurde."
      },
      {
        id: 46,
        question: "Comment l'écriture transforme-t-elle l'espace et le temps dans le roman ?",
        answer: "L'écriture crée une temporalité suspendue, hors du temps linéaire. Elle redessine les paysages en reflets de l'inconscient, transformant l'extérieur en miroir intérieur."
      }
    ],
    vocabulaire: [
      {
        id: 1,
        question: "Que signifie 'Isolement' ?",
        options: [
          "Choix volontaire de solitude",
          "État de solitude forcée, de rupture avec tout lien social",
          "Période de méditation",
          "Mode de vie temporaire"
        ],
        correctAnswer: 1,
        explanation: "L'isolement désigne un état de solitude forcée, impliquant une rupture avec tout lien social."
      },
      {
        id: 2,
        question: "Qu'est-ce qu'une 'Relation fondamentale' ?",
        options: [
          "Une relation superficielle",
          "Lien essentiel et structurant entre deux entités",
          "Une relation conflictuelle",
          "Un lien temporaire"
        ],
        correctAnswer: 1,
        explanation: "Une relation fondamentale est un lien essentiel et structurant entre deux entités."
      },
      {
        id: 3,
        question: "Que désigne une 'Condition inéluctable' ?",
        options: [
          "Une situation modifiable",
          "Situation ou destin fatal, dont on ne peut se soustraire",
          "Une opportunité",
          "Un choix libre"
        ],
        correctAnswer: 1,
        explanation: "Une condition inéluctable est une situation ou un destin fatal dont on ne peut se soustraire."
      },
      {
        id: 4,
        question: "Qu'est-ce que la 'Poésie tragique' ?",
        options: [
          "Un genre littéraire uniquement",
          "Dimension esthétique et émotionnelle d'une situation de souffrance ou de destin funeste",
          "Une forme de versification",
          "Un style d'écriture moderne"
        ],
        correctAnswer: 1,
        explanation: "La poésie tragique désigne la dimension esthétique et émotionnelle d'une situation de souffrance ou de destin funeste."
      },
      {
        id: 5,
        question: "Qu'est-ce que la 'Littérature d'anticipation dystopique' ?",
        options: [
          "Littérature du passé",
          "Genre littéraire explorant une société future indésirable, souvent oppressive",
          "Science-fiction optimiste",
          "Roman historique"
        ],
        correctAnswer: 1,
        explanation: "La littérature d'anticipation dystopique explore des sociétés futures indésirables et oppressives."
      },
      {
        id: 6,
        question: "Que signifie 'Dimension philosophique' ?",
        options: [
          "Style littéraire particulier",
          "Aspect d'une œuvre abordant des questions ontologiques ou éthiques",
          "Méthode scientifique",
          "Technique narrative"
        ],
        correctAnswer: 1,
        explanation: "La dimension philosophique d'une œuvre aborde des questions ontologiques ou éthiques fondamentales."
      },
      {
        id: 7,
        question: "Qu'est-ce que la 'Dimension psychologique' ?",
        options: [
          "Description des lieux",
          "Analyse des processus mentaux, des émotions et des comportements des personnages",
          "Étude du contexte historique",
          "Analyse stylistique"
        ],
        correctAnswer: 1,
        explanation: "La dimension psychologique analyse les processus mentaux, émotions et comportements des personnages."
      },
      {
        id: 8,
        question: "Qu'est-ce que la 'Nature humaine' ?",
        options: [
          "Les acquis culturels",
          "Ensemble des caractéristiques universelles et innées de l'être humain",
          "Les différences individuelles",
          "L'évolution sociale"
        ],
        correctAnswer: 1,
        explanation: "La nature humaine désigne l'ensemble des caractéristiques universelles et innées de l'être humain."
      },
      {
        id: 9,
        question: "Qu'est-ce que la 'Recherche de sens' ?",
        options: [
          "Analyse littéraire",
          "Quête de signification à l'existence face à l'absurdité ou au vide",
          "Méthode scientifique",
          "Technique philosophique"
        ],
        correctAnswer: 1,
        explanation: "La recherche de sens est une quête de signification à l'existence face à l'absurdité ou au vide."
      },
      {
        id: 10,
        question: "Qu'est-ce qu'un 'Monde désenchanté' ?",
        options: [
          "Un monde magique",
          "Vision d'un univers privé de transcendance, de magie ou d'illusions",
          "Un monde idéal",
          "Une réalité augmentée"
        ],
        correctAnswer: 1,
        explanation: "Un monde désenchanté est un univers privé de transcendance, de magie ou d'illusions."
      },
      {
        id: 11,
        question: "Qu'est-ce qu'une 'Société patriarcale' ?",
        options: [
          "Société égalitaire",
          "Système social où les hommes détiennent le pouvoir et l'autorité",
          "Société matriarcale",
          "Organisation démocratique"
        ],
        correctAnswer: 1,
        explanation: "Une société patriarcale est un système social où les hommes détiennent le pouvoir et l'autorité."
      },
      {
        id: 12,
        question: "Qu'est-ce que l''Autonomie individuelle' ?",
        options: [
          "Dépendance totale",
          "Capacité d'un individu à s'auto-déterminer et à agir par lui-même",
          "Isolement social",
          "Conformisme"
        ],
        correctAnswer: 1,
        explanation: "L'autonomie individuelle est la capacité d'un individu à s'auto-déterminer et à agir par lui-même."
      },
      {
        id: 13,
        question: "Qu'est-ce que l''Animalité de l'homme' ?",
        options: [
          "Supériorité humaine",
          "Référence aux instincts primaires et aux comportements archaïques de l'être humain",
          "Évolution culturelle",
          "Rationalité pure"
        ],
        correctAnswer: 1,
        explanation: "L'animalité de l'homme fait référence aux instincts primaires et comportements archaïques de l'être humain."
      },
      {
        id: 14,
        question: "Qu'est-ce que la 'Redéfinition de la liberté' ?",
        options: [
          "Maintien des anciennes définitions",
          "Reconsidération du concept de liberté en fonction de nouvelles contraintes ou opportunités",
          "Suppression de la liberté",
          "Liberté absolue"
        ],
        correctAnswer: 1,
        explanation: "La redéfinition de la liberté est une reconsidération du concept en fonction de nouvelles contraintes ou opportunités."
      },
      {
        id: 15,
        question: "Qu'est-ce qu'un 'Chef-d'œuvre' ?",
        options: [
          "Une œuvre populaire",
          "Œuvre majeure et exemplaire, reconnue pour sa qualité artistique",
          "Une œuvre récente",
          "Un bestseller"
        ],
        correctAnswer: 1,
        explanation: "Un chef-d'œuvre est une œuvre majeure et exemplaire, reconnue pour sa qualité artistique exceptionnelle."
      },
      {
        id: 16,
        question: "Que sont les 'Rythmes viscéraux' ?",
        options: [
          "Rythmes musicaux",
          "Fonctions biologiques profondes et instinctives du corps",
          "Mouvements conscients",
          "Habitudes sociales"
        ],
        correctAnswer: 1,
        explanation: "Les rythmes viscéraux sont les fonctions biologiques profondes et instinctives du corps."
      },
      {
        id: 17,
        question: "Qu'est-ce qu'un 'Genre narratif' ?",
        options: [
          "Style d'écriture personnel",
          "Catégorie typologique structurant les formes de récit (roman, nouvelle, etc.)",
          "Technique de dialogue",
          "Méthode de publication"
        ],
        correctAnswer: 1,
        explanation: "Un genre narratif est une catégorie typologique qui structure les formes de récit comme le roman ou la nouvelle."
      },
      {
        id: 18,
        question: "Qu'est-ce qu'un 'Journal intime' ?",
        options: [
          "Publication officielle",
          "Récit personnel et chronologique des pensées et événements vécus par l'auteur",
          "Document historique",
          "Œuvre de fiction"
        ],
        correctAnswer: 1,
        explanation: "Un journal intime est un récit personnel et chronologique des pensées et événements vécus par l'auteur."
      },
      {
        id: 19,
        question: "Qu'est-ce que la 'Première personne' ?",
        options: [
          "Narration objective",
          "Mode de narration où le récit est énoncé par un personnage-narrateur (\"je\")",
          "Dialogue entre personnages",
          "Description externe"
        ],
        correctAnswer: 1,
        explanation: "La première personne est un mode de narration où le récit est énoncé par un personnage-narrateur utilisant \"je\"."
      },
      {
        id: 20,
        question: "Qu'est-ce que la 'Subjectivité radicale' ?",
        options: [
          "Objectivité scientifique",
          "Point de vue entièrement déterminé par la perception et les émotions d'un seul individu",
          "Vision collective",
          "Neutralité narrative"
        ],
        correctAnswer: 1,
        explanation: "La subjectivité radicale est un point de vue entièrement déterminé par la perception et les émotions d'un seul individu."
      },
      {
        id: 21,
        question: "Qu'est-ce que la 'Linéarité' ?",
        options: [
          "Narration fragmentée",
          "Progression chronologique continue du récit",
          "Retours en arrière",
          "Structure circulaire"
        ],
        correctAnswer: 1,
        explanation: "La linéarité désigne une progression chronologique continue du récit."
      },
      {
        id: 22,
        question: "Qu'est-ce que la 'Discontinuité' ?",
        options: [
          "Progression régulière",
          "Absence de succession régulière, présence de ruptures ou d'interruptions",
          "Continuité parfaite",
          "Ordre chronologique"
        ],
        correctAnswer: 1,
        explanation: "La discontinuité est l'absence de succession régulière, marquée par des ruptures ou interruptions."
      },
      {
        id: 23,
        question: "Que sont les 'Ellipses temporelles' ?",
        options: [
          "Descriptions détaillées",
          "Omissions volontaires de périodes de temps dans le récit",
          "Ralentissement du temps",
          "Répétitions narratives"
        ],
        correctAnswer: 1,
        explanation: "Les ellipses temporelles sont des omissions volontaires de périodes de temps dans le récit."
      },
      {
        id: 24,
        question: "Qu'est-ce qu'une 'Dystopie' ?",
        options: [
          "Société idéale",
          "Contre-utopie, représentation d'une société future négative et aliénante",
          "Monde fantastique",
          "Réalité historique"
        ],
        correctAnswer: 1,
        explanation: "Une dystopie est une contre-utopie représentant une société future négative et aliénante."
      },
      {
        id: 25,
        question: "Qu'est-ce qu'un 'Non-lieu' ?",
        options: [
          "Lieu très fréquenté",
          "Espace abstrait ou dénué de signification identitaire ou sociale",
          "Endroit géographique précis",
          "Lieu historique"
        ],
        correctAnswer: 1,
        explanation: "Un non-lieu est un espace abstrait ou dénué de signification identitaire ou sociale."
      },
      {
        id: 26,
        question: "Qu'est-ce qu'une 'Recherche anthropologique' ?",
        options: [
          "Étude des animaux",
          "Étude des dimensions humaines, sociales et culturelles d'une situation",
          "Recherche géologique",
          "Analyse littéraire"
        ],
        correctAnswer: 1,
        explanation: "Une recherche anthropologique étudie les dimensions humaines, sociales et culturelles d'une situation."
      },
      {
        id: 27,
        question: "Qu'est-ce qu'un 'Paysage psychanalytique' ?",
        options: [
          "Description géographique",
          "Représentation d'un paysage reflétant des dynamiques inconscientes ou psychiques",
          "Carte topographique",
          "Vue panoramique"
        ],
        correctAnswer: 1,
        explanation: "Un paysage psychanalytique représente un paysage qui reflète des dynamiques inconscientes ou psychiques."
      },
      {
        id: 28,
        question: "Que sont les 'Pulsations difficiles à prévoir' ?",
        options: [
          "Rythmes réguliers",
          "Manifestations instinctives ou émotionnelles imprévisibles",
          "Battements cardiaques",
          "Mouvements contrôlés"
        ],
        correctAnswer: 1,
        explanation: "Les pulsations difficiles à prévoir sont des manifestations instinctives ou émotionnelles imprévisibles."
      },
      {
        id: 29,
        question: "Qu'est-ce que le 'Flux de conscience' ?",
        options: [
          "Dialogue structuré",
          "Technique narrative transcrivant le flot ininterrompu des pensées et perceptions",
          "Récit chronologique",
          "Description objective"
        ],
        correctAnswer: 1,
        explanation: "Le flux de conscience est une technique narrative qui transcrit le flot ininterrompu des pensées et perceptions."
      },
      {
        id: 30,
        question: "Qu'est-ce qu'un 'Laboratoire de l'introspection' ?",
        options: [
          "Un lieu scientifique",
          "Contexte propice à une exploration approfondie de sa vie intérieure",
          "Un cabinet médical",
          "Une bibliothèque"
        ],
        correctAnswer: 1,
        explanation: "Un laboratoire de l'introspection est un contexte propice à l'exploration approfondie de sa vie intérieure."
      },
      {
        id: 31,
        question: "Qu'est-ce qu'un 'Personnage diffracté en alter ego' ?",
        options: [
          "Personnage unique",
          "Personnage dont l'expérience est perçue comme un reflet de celle du lecteur",
          "Personnage secondaire",
          "Narrateur omniscient"
        ],
        correctAnswer: 1,
        explanation: "Un personnage diffracté en alter ego est un personnage dont l'expérience reflète celle du lecteur."
      },
      {
        id: 32,
        question: "Qu'est-ce que le genre 'Post-apocalyptique' ?",
        options: [
          "Récit du passé",
          "Genre décrivant le monde après une catastrophe civilisationnelle majeure",
          "Science-fiction optimiste",
          "Épopée historique"
        ],
        correctAnswer: 1,
        explanation: "Le genre post-apocalyptique décrit le monde après une catastrophe civilisationnelle majeure."
      },
      {
        id: 33,
        question: "Qu'est-ce qu'un 'Roman de survie' ?",
        options: [
          "Roman d'amour",
          "Récit axé sur les stratégies et défis de la subsistance en milieu hostile",
          "Roman policier",
          "Biographie"
        ],
        correctAnswer: 1,
        explanation: "Un roman de survie se concentre sur les stratégies et défis de subsistance en milieu hostile."
      },
      {
        id: 34,
        question: "Qu'est-ce qu'un 'Roman philosophique' ?",
        options: [
          "Roman historique",
          "Œuvre littéraire explorant des idées ou concepts philosophiques",
          "Roman policier",
          "Conte fantastique"
        ],
        correctAnswer: 1,
        explanation: "Un roman philosophique explore des idées ou concepts philosophiques à travers la fiction."
      },
      {
        id: 35,
        question: "Qu'est-ce qu'un 'Roman psychologique' ?",
        options: [
          "Roman d'action",
          "Récit centré sur l'exploration de la vie intérieure et de la psyché des personnages",
          "Roman d'aventures",
          "Roman social"
        ],
        correctAnswer: 1,
        explanation: "Un roman psychologique explore la vie intérieure et la psyché des personnages."
      },
      {
        id: 36,
        question: "Qu'est-ce qu'une 'Transformation' ?",
        options: [
          "Changement superficiel",
          "Changement profond et durable de la nature ou de la condition d'un être",
          "Adaptation temporaire",
          "Modification externe"
        ],
        correctAnswer: 1,
        explanation: "Une transformation est un changement profond et durable de la nature ou condition d'un être."
      },
      {
        id: 37,
        question: "Qu'est-ce que la 'Connaissance viscérale et empirique' ?",
        options: [
          "Savoir théorique",
          "Savoir acquis par l'expérience directe et intuitive, non théorique",
          "Connaissance livresque",
          "Apprentissage scolaire"
        ],
        correctAnswer: 1,
        explanation: "La connaissance viscérale et empirique est un savoir acquis par l'expérience directe et intuitive."
      },
      {
        id: 38,
        question: "Qu'est-ce que la 'Cruauté implacable' ?",
        options: [
          "Bonté naturelle",
          "Caractère absolu et inévitable d'une force destructrice ou douloureuse",
          "Compassion",
          "Indifférence"
        ],
        correctAnswer: 1,
        explanation: "La cruauté implacable désigne le caractère absolu et inévitable d'une force destructrice."
      },
      {
        id: 39,
        question: "Qu'est-ce que la 'Générosité fondamentale' ?",
        options: [
          "Égoïsme naturel",
          "Disposition essentielle à donner ou à pourvoir aux besoins",
          "Calcul intéressé",
          "Indifférence"
        ],
        correctAnswer: 1,
        explanation: "La générosité fondamentale est une disposition essentielle à donner ou pourvoir aux besoins."
      },
      {
        id: 40,
        question: "Qu'est-ce qu'une 'Connexion quasi symbiotique' ?",
        options: [
          "Relation conflictuelle",
          "Lien très étroit, bénéfique pour les deux parties, proche d'une symbiose biologique",
          "Indépendance totale",
          "Relation superficielle"
        ],
        correctAnswer: 1,
        explanation: "Une connexion quasi symbiotique est un lien très étroit et bénéfique, proche de la symbiose biologique."
      },
      {
        id: 41,
        question: "Qu'est-ce que l''Instinct pur' ?",
        options: [
          "Comportement appris",
          "Comportement inné, non acquis et non modifié par l'apprentissage",
          "Réflexe conditionné",
          "Habitude sociale"
        ],
        correctAnswer: 1,
        explanation: "L'instinct pur est un comportement inné, non acquis et non modifié par l'apprentissage."
      },
      {
        id: 42,
        question: "Qu'est-ce que l''Adaptation naturelle' ?",
        options: [
          "Modification artificielle",
          "Processus par lequel un être vivant s'ajuste à son milieu de manière spontanée",
          "Résistance au changement",
          "Conditionnement social"
        ],
        correctAnswer: 1,
        explanation: "L'adaptation naturelle est le processus par lequel un être vivant s'ajuste spontanément à son milieu."
      },
      {
        id: 43,
        question: "Qu'est-ce que l''Inexorabilité' ?",
        options: [
          "Caractère flexible",
          "Caractère de ce qui ne peut être infléchi, une fatalité",
          "Possibilité de changement",
          "Adaptabilité"
        ],
        correctAnswer: 1,
        explanation: "L'inexorabilité est le caractère de ce qui ne peut être infléchi, une fatalité absolue."
      },
      {
        id: 44,
        question: "Qu'est-ce que la 'Domestication' ?",
        options: [
          "Liberté totale",
          "Processus par lequel l'homme soumet et élève des animaux pour ses besoins",
          "Retour à l'état sauvage",
          "Adaptation naturelle"
        ],
        correctAnswer: 1,
        explanation: "La domestication est le processus par lequel l'homme soumet et élève des animaux pour ses besoins."
      },
      {
        id: 45,
        question: "Qu'est-ce que la 'Fragilité de la domestication' ?",
        options: [
          "Force du contrôle humain",
          "Vulnérabilité du contrôle humain sur les forces de la nature",
          "Permanence des habitudes",
          "Solidité des liens"
        ],
        correctAnswer: 1,
        explanation: "La fragilité de la domestication désigne la vulnérabilité du contrôle humain sur les forces naturelles."
      },
      {
        id: 46,
        question: "Qu'est-ce que la 'Chaîne alimentaire impitoyable' ?",
        options: [
          "Coopération entre espèces",
          "Succession des relations trophiques, où la prédation est inévitable",
          "Harmonie naturelle",
          "Égalité des espèces"
        ],
        correctAnswer: 1,
        explanation: "La chaîne alimentaire impitoyable est la succession des relations trophiques avec prédation inévitable."
      },
      {
        id: 47,
        question: "Qu'est-ce qu'une 'Expérience existentielle radicale' ?",
        options: [
          "Expérience superficielle",
          "Confrontation profonde et dénuée de concessions avec les questions de l'être",
          "Divertissement",
          "Routine quotidienne"
        ],
        correctAnswer: 1,
        explanation: "Une expérience existentielle radicale est une confrontation profonde avec les questions fondamentales de l'être."
      },
      {
        id: 48,
        question: "Qu'est-ce qu'une 'Régression salutaire' ?",
        options: [
          "Progression continue",
          "Retour à un état antérieur (souvent primitif) bénéfique pour la survie psychique ou physique",
          "Évolution moderne",
          "Stagnation"
        ],
        correctAnswer: 1,
        explanation: "Une régression salutaire est un retour bénéfique à un état antérieur pour la survie psychique ou physique."
      },
      {
        id: 49,
        question: "Qu'est-ce que la 'Refondation de l'être' ?",
        options: [
          "Maintien de l'identité",
          "Reconstruction des fondements de l'identité personnelle",
          "Conformité sociale",
          "Reproduction des modèles"
        ],
        correctAnswer: 1,
        explanation: "La refondation de l'être est la reconstruction des fondements de l'identité personnelle."
      },
      {
        id: 50,
        question: "Qu'est-ce qu'une 'Tabula rasa identitaire' ?",
        options: [
          "Renforcement de l'identité",
          "Situation de table rase, d'effacement complet des repères identitaires antérieurs",
          "Continuité identitaire",
          "Accumulation d'expériences"
        ],
        correctAnswer: 1,
        explanation: "Une tabula rasa identitaire est l'effacement complet des repères identitaires antérieurs."
      },
      {
        id: 51,
        question: "Qu'est-ce que la 'Résilience épistémique' ?",
        options: [
          "Résistance au savoir",
          "Capacité à développer de nouvelles formes de savoir et d'apprentissage face à l'adversité",
          "Ignorance volontaire",
          "Savoir figé"
        ],
        correctAnswer: 1,
        explanation: "La résilience épistémique est la capacité à développer de nouvelles formes de savoir face à l'adversité."
      },
      {
        id: 52,
        question: "Qu'est-ce que la 'Puissance corporelle' ?",
        options: [
          "Faiblesse physique",
          "Manifestation de la force et des capacités physiques du corps",
          "Négation du corps",
          "Spiritualité pure"
        ],
        correctAnswer: 1,
        explanation: "La puissance corporelle est la manifestation de la force et des capacités physiques du corps."
      },
      {
        id: 53,
        question: "Qu'est-ce que la 'Temporalité organique' ?",
        options: [
          "Temps mécanique",
          "Rythme de vie dicté par les cycles naturels et biologiques",
          "Temps social",
          "Horaire artificiel"
        ],
        correctAnswer: 1,
        explanation: "La temporalité organique est un rythme de vie dicté par les cycles naturels et biologiques."
      },
      {
        id: 54,
        question: "Qu'est-ce que le 'Productivisme' ?",
        options: [
          "Système de décroissance",
          "Système axé sur l'augmentation continue de la production",
          "Économie stationnaire",
          "Autosuffisance"
        ],
        correctAnswer: 1,
        explanation: "Le productivisme est un système axé sur l'augmentation continue de la production."
      },
      {
        id: 55,
        question: "Qu'est-ce que le 'Consumérisme' ?",
        options: [
          "Sobriété volontaire",
          "Tendance à privilégier la consommation de biens et services",
          "Économie de subsistance",
          "Autarcie"
        ],
        correctAnswer: 1,
        explanation: "Le consumérisme est la tendance à privilégier la consommation de biens et services."
      },
      {
        id: 56,
        question: "Qu'est-ce qu'une 'Dualité profonde' ?",
        options: [
          "Unité parfaite",
          "Coexistence de deux aspects opposés ou contradictoires au sein d'une même entité",
          "Simplicité",
          "Homogénéité"
        ],
        correctAnswer: 1,
        explanation: "Une dualité profonde est la coexistence d'aspects opposés ou contradictoires dans une même entité."
      },
      {
        id: 57,
        question: "Qu'est-ce que le 'Panthéisme existentiel' ?",
        options: [
          "Athéisme radical",
          "Conception philosophique où le divin ou le sacré est immanent à toute l'existence et à la nature",
          "Religion organisée",
          "Matérialisme pur"
        ],
        correctAnswer: 1,
        explanation: "Le panthéisme existentiel conçoit le divin comme immanent à toute l'existence et la nature."
      },
      {
        id: 58,
        question: "Qu'est-ce que la 'Suspension du temps' ?",
        options: [
          "Accélération temporelle",
          "Interruption ou arrêt de la perception linéaire du temps",
          "Chronologie précise",
          "Temps régulier"
        ],
        correctAnswer: 1,
        explanation: "La suspension du temps est l'interruption ou l'arrêt de la perception linéaire du temps."
      },
      {
        id: 59,
        question: "Qu'est-ce qu'un 'Cadrage topographique' ?",
        options: [
          "Description vague",
          "Définition précise des éléments géographiques d'un lieu",
          "Abstraction spatiale",
          "Désorientation géographique"
        ],
        correctAnswer: 1,
        explanation: "Un cadrage topographique définit précisément les éléments géographiques d'un lieu."
      },
      {
        id: 60,
        question: "Qu'est-ce qu'une 'Dimension transcendantale intemporelle' ?",
        options: [
          "Aspect temporel limité",
          "Aspect qui dépasse les limites du temps et de l'espace, atteignant une portée universelle",
          "Réalité matérielle",
          "Circonstance particulière"
        ],
        correctAnswer: 1,
        explanation: "Une dimension transcendantale intemporelle dépasse les limites spatio-temporelles avec une portée universelle."
      },
      {
        id: 61,
        question: "Qu'est-ce qu'un 'No man's land temporel' ?",
        options: [
          "Temps bien défini",
          "Période indéfinie ou hors du cadre chronologique habituel",
          "Chronologie précise",
          "Temps social"
        ],
        correctAnswer: 1,
        explanation: "Un no man's land temporel est une période indéfinie, hors du cadre chronologique habituel."
      },
      {
        id: 62,
        question: "Qu'est-ce que le 'Nihilisme' ?",
        options: [
          "Affirmation de valeurs",
          "Doctrine philosophique qui nie toute valeur, tout sens ou toute finalité à l'existence",
          "Optimisme radical",
          "Croyance absolue"
        ],
        correctAnswer: 1,
        explanation: "Le nihilisme nie toute valeur, sens ou finalité à l'existence humaine."
      },
      {
        id: 63,
        question: "Qu'est-ce qu'une 'Existence désaliénée' ?",
        options: [
          "Vie sous contraintes",
          "Vie libérée des contraintes et des asservissements sociaux ou économiques",
          "Soumission totale",
          "Conformité sociale"
        ],
        correctAnswer: 1,
        explanation: "Une existence désaliénée est une vie libérée des contraintes et asservissements sociaux ou économiques."
      },
      {
        id: 64,
        question: "Que sont les 'Co-existants essentiels' ?",
        options: [
          "Êtres indépendants",
          "Êtres dont la présence est indispensable à l'existence mutuelle",
          "Rivaux",
          "Étrangers"
        ],
        correctAnswer: 1,
        explanation: "Les co-existants essentiels sont des êtres dont la présence est indispensable à l'existence mutuelle."
      },
      {
        id: 65,
        question: "Qu'est-ce que la 'Redéfinition de l'altérité' ?",
        options: [
          "Rejet de l'autre",
          "Nouvelle perception et compréhension de ce qui est Autre",
          "Uniformisation",
          "Ignorance de l'autre"
        ],
        correctAnswer: 1,
        explanation: "La redéfinition de l'altérité est une nouvelle perception et compréhension de ce qui est Autre."
      },
      {
        id: 66,
        question: "Qu'est-ce que l''Anthropocentrisme' ?",
        options: [
          "Égalité des espèces",
          "Conception plaçant l'être humain au centre de l'univers et des préoccupations",
          "Respect de la nature",
          "Vision écocentrique"
        ],
        correctAnswer: 1,
        explanation: "L'anthropocentrisme place l'être humain au centre de l'univers et des préoccupations."
      },
      {
        id: 67,
        question: "Qu'est-ce que la 'Fluidité identitaire' ?",
        options: [
          "Identité figée",
          "Caractère non fixe et évolutif de l'identité d'un individu",
          "Permanence identitaire",
          "Stabilité absolue"
        ],
        correctAnswer: 1,
        explanation: "La fluidité identitaire désigne le caractère non fixe et évolutif de l'identité individuelle."
      },
      {
        id: 68,
        question: "Qu'est-ce que la 'Transmutation de l'être' ?",
        options: [
          "Changement superficiel",
          "Transformation radicale et profonde de la nature essentielle d'un être",
          "Adaptation mineure",
          "Évolution graduelle"
        ],
        correctAnswer: 1,
        explanation: "La transmutation de l'être est une transformation radicale et profonde de la nature essentielle."
      },
      {
        id: 69,
        question: "Qu'est-ce qu'un 'Dispositif narratif' ?",
        options: [
          "Contenu de l'histoire",
          "Ensemble des procédés et techniques mis en œuvre par l'auteur dans le récit",
          "Personnages principaux",
          "Décor de l'action"
        ],
        correctAnswer: 1,
        explanation: "Un dispositif narratif rassemble les procédés et techniques utilisés par l'auteur dans le récit."
      },
      {
        id: 70,
        question: "Qu'est-ce qu'une 'Critique systémique' ?",
        options: [
          "Éloge du système",
          "Analyse et remise en question des fondements et mécanismes d'un système (social, politique)",
          "Acceptation passive",
          "Réforme superficielle"
        ],
        correctAnswer: 1,
        explanation: "Une critique systémique analyse et remet en question les fondements d'un système social ou politique."
      },
      {
        id: 71,
        question: "Qu'est-ce qu'une 'Apocalypse rédemptrice' ?",
        options: [
          "Destruction pure",
          "Vision d'une fin du monde qui est aussi une purification ou une chance de renouveau",
          "Catastrophe définitive",
          "Statu quo"
        ],
        correctAnswer: 1,
        explanation: "Une apocalypse rédemptrice voit la fin du monde comme purification et chance de renouveau."
      },
      {
        id: 72,
        question: "Qu'est-ce qu'un 'Renversement des valeurs' ?",
        options: [
          "Maintien de l'ordre établi",
          "Changement radical dans l'échelle des principes et des priorités",
          "Conservation des traditions",
          "Réforme progressive"
        ],
        correctAnswer: 1,
        explanation: "Un renversement des valeurs est un changement radical dans l'échelle des principes et priorités."
      },
      {
        id: 73,
        question: "Qu'est-ce qu'une 'Société malade de son excès' ?",
        options: [
          "Société équilibrée",
          "Communauté souffrant des conséquences de son surdéveloppement ou de ses dérives",
          "Société primitive",
          "Organisation parfaite"
        ],
        correctAnswer: 1,
        explanation: "Une société malade de son excès souffre des conséquences de son surdéveloppement ou de ses dérives."
      },
      {
        id: 74,
        question: "Qu'est-ce que l''Aliénation consumériste' ?",
        options: [
          "Liberté de consommer",
          "État de soumission ou de perte de soi par la consommation",
          "Sobriété heureuse",
          "Indépendance économique"
        ],
        correctAnswer: 1,
        explanation: "L'aliénation consumériste est un état de soumission ou de perte de soi par la consommation."
      },
      {
        id: 75,
        question: "Qu'est-ce que la 'Violence intrinsèque au masculin' ?",
        options: [
          "Douceur masculine",
          "Caractère de violence perçue comme inhérente ou spécifiquement liée au genre masculin",
          "Pacifisme masculin",
          "Neutralité de genre"
        ],
        correctAnswer: 1,
        explanation: "La violence intrinsèque au masculin désigne une violence perçue comme inhérente au genre masculin."
      },
      {
        id: 76,
        question: "Qu'est-ce qu'un 'Espace-refuge' ?",
        options: [
          "Zone dangereuse",
          "Lieu de protection et de sécurité, souvent à l'abri des dangers extérieurs",
          "Territoire hostile",
          "Espace public"
        ],
        correctAnswer: 1,
        explanation: "Un espace-refuge est un lieu de protection et de sécurité, à l'abri des dangers extérieurs."
      },
      {
        id: 77,
        question: "Que sont les 'Murs visibles' ?",
        options: [
          "Obstacles physiques",
          "Obstacles symboliques ou sociaux, non physiques, entravant la liberté",
          "Constructions architecturales",
          "Barrières matérielles"
        ],
        correctAnswer: 1,
        explanation: "Les murs visibles sont des obstacles symboliques ou sociaux, non physiques, entravant la liberté."
      },
      {
        id: 78,
        question: "Qu'est-ce que la 'Claustration' ?",
        options: [
          "Liberté totale",
          "État d'être enfermé, de vivre en réclusion",
          "Ouverture au monde",
          "Mobilité constante"
        ],
        correctAnswer: 1,
        explanation: "La claustration est l'état d'être enfermé, de vivre en réclusion."
      },
      {
        id: 79,
        question: "Que sont les 'Impératifs genrés' ?",
        options: [
          "Libertés individuelles",
          "Injonctions ou rôles spécifiques attribués en fonction du genre",
          "Égalité des sexes",
          "Neutralité de genre"
        ],
        correctAnswer: 1,
        explanation: "Les impératifs genrés sont des injonctions ou rôles spécifiques attribués selon le genre."
      },
      {
        id: 80,
        question: "Qu'est-ce que l''Autonomie retrouvée' ?",
        options: [
          "Dépendance accrue",
          "Réacquisition de la capacité à s'autogouverner et à prendre ses propres décisions",
          "Soumission volontaire",
          "Contrôle externe"
        ],
        correctAnswer: 1,
        explanation: "L'autonomie retrouvée est la réacquisition de la capacité à s'autogouverner et décider par soi-même."
      },
      {
        id: 81,
        question: "Qu'est-ce que la 'Charge mentale et émotionnelle' ?",
        options: [
          "Légèreté d'esprit",
          "Fardeau psychologique lié aux responsabilités multiples et aux sollicitations affectives",
          "Tranquillité d'esprit",
          "Insouciance"
        ],
        correctAnswer: 1,
        explanation: "La charge mentale et émotionnelle est un fardeau psychologique lié aux responsabilités et sollicitations."
      },
      {
        id: 82,
        question: "Qu'est-ce qu'un 'Fardeau invisible' ?",
        options: [
          "Charge évidente",
          "Poids ou contrainte qui n'est pas directement perceptible",
          "Liberté apparente",
          "Facilité manifeste"
        ],
        correctAnswer: 1,
        explanation: "Un fardeau invisible est un poids ou une contrainte qui n'est pas directement perceptible."
      },
      {
        id: 83,
        question: "Qu'est-ce qu'un 'Microcosme' ?",
        options: [
          "Univers immense",
          "Petit univers qui reflète les caractéristiques d'un plus grand système",
          "Réalité isolée",
          "Système simple"
        ],
        correctAnswer: 1,
        explanation: "Un microcosme est un petit univers qui reflète les caractéristiques d'un système plus grand."
      },
      {
        id: 84,
        question: "Qu'est-ce que la 'Réciprocité du besoin' ?",
        options: [
          "Indépendance totale",
          "Relation où les besoins des individus sont mutuellement satisfaits et interdépendants",
          "Égoïsme mutuel",
          "Autosuffisance"
        ],
        correctAnswer: 1,
        explanation: "La réciprocité du besoin est une relation où les besoins sont mutuellement satisfaits et interdépendants."
      },
      {
        id: 85,
        question: "Qu'est-ce qu'une 'Utopie écologique' ?",
        options: [
          "Destruction de la nature",
          "Représentation d'une société idéale en harmonie avec son environnement naturel",
          "Industrialisation massive",
          "Urbanisation totale"
        ],
        correctAnswer: 1,
        explanation: "Une utopie écologique représente une société idéale en harmonie avec son environnement naturel."
      },
      {
        id: 86,
        question: "Qu'est-ce qu'une 'Anti-utopie' ?",
        options: [
          "Société parfaite",
          "Contre-vision d'une société présentée comme idéale mais révélant des aspects négatifs",
          "Réalité actuelle",
          "Progrès continu"
        ],
        correctAnswer: 1,
        explanation: "Une anti-utopie révèle les aspects négatifs d'une société présentée comme idéale."
      },
      {
        id: 87,
        question: "Qu'est-ce que la 'Rationalité' ?",
        options: [
          "Pensée irrationnelle",
          "Capacité de raisonner et de comprendre le monde de manière logique",
          "Intuition pure",
          "Émotion dominante"
        ],
        correctAnswer: 1,
        explanation: "La rationalité est la capacité de raisonner et comprendre le monde de manière logique."
      },
      {
        id: 88,
        question: "Qu'est-ce qu'une 'Fonction intrinsèque' ?",
        options: [
          "Rôle accessoire",
          "Rôle essentiel et inhérent à la nature profonde de quelque chose",
          "Fonction temporaire",
          "Usage externe"
        ],
        correctAnswer: 1,
        explanation: "Une fonction intrinsèque est un rôle essentiel et inhérent à la nature profonde de quelque chose."
      },
      {
        id: 89,
        question: "Qu'est-ce qu'un 'Méta-discours' ?",
        options: [
          "Discours simple",
          "Discours qui porte sur un autre discours ou sur le discours lui-même",
          "Monologue intérieur",
          "Conversation ordinaire"
        ],
        correctAnswer: 1,
        explanation: "Un méta-discours est un discours qui porte sur un autre discours ou sur le discours lui-même."
      },
      {
        id: 90,
        question: "Qu'est-ce que l''Ancrage' ?",
        options: [
          "Dérive libre",
          "Processus de fixation, de stabilité ou de référence",
          "Mouvement constant",
          "Instabilité"
        ],
        correctAnswer: 1,
        explanation: "L'ancrage est un processus de fixation, de stabilité ou de référence."
      },
      {
        id: 91,
        question: "Qu'est-ce que la 'Dissolution du moi' ?",
        options: [
          "Renforcement de l'identité",
          "Perte de la cohésion et de l'unité de l'identité personnelle",
          "Affirmation de soi",
          "Stabilité psychique"
        ],
        correctAnswer: 1,
        explanation: "La dissolution du moi est la perte de la cohésion et de l'unité de l'identité personnelle."
      },
      {
        id: 92,
        question: "Qu'est-ce qu'un 'Exutoire thérapeutique' ?",
        options: [
          "Source de stress",
          "Moyen d'évacuer des tensions ou des souffrances psychologiques",
          "Problème psychologique",
          "Blocage émotionnel"
        ],
        correctAnswer: 1,
        explanation: "Un exutoire thérapeutique est un moyen d'évacuer des tensions ou souffrances psychologiques."
      },
      {
        id: 93,
        question: "Qu'est-ce que la 'Structuration du psychisme' ?",
        options: [
          "Désorganisation mentale",
          "Organisation des processus mentaux et de la vie psychique",
          "Chaos psychologique",
          "Confusion mentale"
        ],
        correctAnswer: 1,
        explanation: "La structuration du psychisme est l'organisation des processus mentaux et de la vie psychique."
      },
      {
        id: 94,
        question: "Qu'est-ce que la 'Réflexivité' ?",
        options: [
          "Réaction automatique",
          "Capacité à l'introspection, à l'analyse de ses propres pensées et actions",
          "Réflexe conditionné",
          "Pensée superficielle"
        ],
        correctAnswer: 1,
        explanation: "La réflexivité est la capacité à l'introspection et à l'analyse de ses propres pensées et actions."
      }
    ]
  },
  canguilhem: {
    connaissance: [
      {
        id: 1,
        question: "Quelle est la triple identité intellectuelle de Georges Canguilhem, et pourquoi est-elle essentielle pour comprendre son œuvre ?",
        answer: "Canguilhem est philosophe, historien des sciences et médecin. Cette triple casquette lui permet d'aborder les sciences du vivant avec un regard interdisciplinaire : rigueur philosophique, ancrage historique des concepts scientifiques, et confrontation directe avec le réel médical. Son œuvre est ainsi à la croisée de la réflexion théorique et de l'expérience concrète."
      },
      {
        id: 2,
        question: "En quoi la période historique (1941–1948) influence-t-elle la portée de La Connaissance de la vie ?",
        answer: "Elle correspond à un moment de grande instabilité (Seconde Guerre mondiale, Résistance, refondation intellectuelle). Cette période nourrit chez Canguilhem une conscience aiguë de l'autonomie du vivant face à l'adversité, ce qui alimente sa réflexion sur la normativité biologique. L'œuvre prend donc une dimension existentielle en plus d'être épistémologique."
      },
      {
        id: 3,
        question: "Expliquez ce que Canguilhem entend par \"normativité du vivant\".",
        answer: "Il s'agit de la capacité du vivant à établir ses propres normes en fonction de son environnement. Contrairement à un objet inerte soumis aux lois physiques, un organisme vivant peut interpréter, s'adapter et reconfigurer ses relations au monde pour survivre. C'est un concept-clé qui oppose radicalement le vivant à la machine."
      },
      {
        id: 4,
        question: "Quelle tension centrale traverse la philosophie des sciences selon l'introduction de l'œuvre ?",
        answer: "La tension entre scientificité et réductionnisme. Comment analyser la vie avec la rigueur scientifique sans la réduire à un pur mécanisme ? Canguilhem cherche une voie qui évite à la fois le piège du mécanicisme simplificateur et celui du vitalisme mystique."
      },
      {
        id: 5,
        question: "Distinguez \"la vie\" et \"le vivant\" dans la perspective de Canguilhem.",
        answer: "\"La vie\" est une notion floue, vulgaire ou métaphysique, souvent chargée de représentations philosophiques ou émotionnelles. \"Le vivant\" est l'objet d'étude rigoureux de la biologie. Canguilhem insiste sur cette distinction pour éviter l'anthropomorphisme ou les généralisations idéologiques dans les sciences du vivant."
      },
      {
        id: 6,
        question: "En quoi le parcours personnel de Canguilhem influe-t-il sur ses positions philosophiques ?",
        answer: "Son engagement dans la Résistance et sa pratique clandestine de la médecine ont forgé chez lui une expérience de terrain du vivant souffrant et résilient. Cela nourrit sa réflexion sur la vie comme combat, l'individualité biologique, et la dimension éthique de toute connaissance scientifique."
      },
      {
        id: 7,
        question: "Quelle critique Canguilhem adresse-t-il à la connaissance scientifique \"spontanée\" ?",
        answer: "Il dénonce les illusions de la connaissance spontanée, c'est-à-dire les opinions ou croyances naïves qui ne reposent pas sur une investigation critique et historique. Il plaide pour une épistémologie rigoureuse, qui prend conscience de ses propres conditions de validité."
      },
      {
        id: 8,
        question: "En quoi Canguilhem se démarque-t-il de l'imaginaire scientifique chez Jules Verne ?",
        answer: "Contrairement à Verne qui célèbre la conquête technique et l'exploration spectaculaire, Canguilhem adopte une posture réflexive, critique, philosophique : il s'intéresse aux conditions de possibilité de la connaissance du vivant plutôt qu'à l'accumulation de savoirs ou à la maîtrise technologique."
      },
      {
        id: 9,
        question: "Quelle est la difficulté centrale que pose la connaissance du vivant selon Canguilhem ?",
        answer: "Elle réside dans la tension entre traiter le vivant comme un objet scientifique et ne pas le réduire à un mécanisme inerte ou à une abstraction métaphysique."
      },
      {
        id: 10,
        question: "Quel rôle la philosophie joue-t-elle dans l'étude du vivant selon Canguilhem ?",
        answer: "Elle éclaire les conditions de possibilité d'une connaissance du vivant et interroge les présupposés des sciences biologiques."
      },
      {
        id: 11,
        question: "Quel type de rationalisme Canguilhem adopte-t-il ?",
        answer: "Un rationalisme critique, qui analyse l'histoire et la formation des concepts scientifiques au lieu de les accepter comme évidents."
      },
      {
        id: 12,
        question: "Quelle méthode Canguilhem rejette-t-il pour penser le vivant ?",
        answer: "Il rejette à la fois le réductionnisme mécaniste (réduction du vivant à la physique) et le mysticisme vitaliste."
      },
      {
        id: 13,
        question: "Que critique Canguilhem dans la \"connaissance spontanée\" ?",
        answer: "Il la critique comme intuitive, naïve, et insuffisante pour comprendre la complexité du vivant."
      },
      {
        id: 14,
        question: "Quel lien Canguilhem établit-il entre médecine et philosophie ?",
        answer: "Il pense la médecine comme lieu concret d'observation du vivant normatif, et la philosophie comme réflexion sur ses fondements épistémologiques."
      },
      {
        id: 15,
        question: "Pourquoi la connaissance du vivant nécessite-t-elle une approche interdisciplinaire ?",
        answer: "Parce que le vivant résiste à une seule forme de réduction et nécessite des apports de la biologie, de la médecine, de l'histoire et de la philosophie."
      },
      {
        id: 16,
        question: "Qu'est-ce qu'un mécanisme inerte selon Canguilhem ?",
        answer: "Un système non vivant, obéissant à des lois physiques sans produire ses propres normes."
      },
      {
        id: 17,
        question: "Pourquoi Canguilhem refuse-t-il d'assimiler l'organisme à une machine ?",
        answer: "Parce que l'organisme est normatif : il s'autorégule, s'adapte, et produit ses propres normes de fonctionnement."
      },
      {
        id: 18,
        question: "Quelle critique Canguilhem adresse-t-il aux métaphores en biologie ?",
        answer: "Il critique leur pouvoir trompeur, car elles peuvent dissimuler des insuffisances conceptuelles sous une forme imagée."
      },
      {
        id: 19,
        question: "Quelle importance Canguilhem accorde-t-il à l'histoire des sciences ?",
        answer: "Il la juge essentielle pour comprendre comment les concepts scientifiques sont apparus, évoluent et se légitiment."
      },
      {
        id: 20,
        question: "En quoi la notion de normativité est-elle centrale chez Canguilhem ?",
        answer: "Parce qu'elle distingue le vivant de l'inerte : un être vivant établit ses propres normes face aux perturbations."
      },
      {
        id: 21,
        question: "Quel est l'apport fondamental de Canguilhem à la philosophie de la biologie ?",
        answer: "Il introduit une analyse critique des concepts biologiques et replace le vivant dans sa spécificité irréductible."
      },
      {
        id: 22,
        question: "Quelle est la conséquence d'un excès de réduction mécaniste dans l'étude du vivant ?",
        answer: "Cela conduit à ignorer la complexité propre du vivant, notamment sa capacité d'adaptation et de régulation."
      },
      {
        id: 23,
        question: "Quel est le risque inverse à la réduction mécaniste que Canguilhem identifie ?",
        answer: "Le retour à une vision mystique ou spiritualiste de la vie, qui évacue toute rigueur scientifique."
      },
      {
        id: 24,
        question: "Pourquoi le vivant ne peut-il être un objet d'étude comme un autre ?",
        answer: "Parce qu'il n'est pas neutre : il sent, agit, s'adapte, souffre – il possède une subjectivité biologique."
      },
      {
        id: 25,
        question: "Quel est le lien entre science du vivant et normativité pour Canguilhem ?",
        answer: "La science du vivant doit prendre en compte que les organismes ne suivent pas seulement des lois, mais instaurent des normes."
      },
      {
        id: 26,
        question: "Pourquoi Canguilhem critique-t-il la tendance à naturaliser certains concepts sociaux ?",
        answer: "Parce que cela consiste à projeter sur la nature des catégories idéologiques, biaisant la connaissance."
      },
      {
        id: 27,
        question: "Quel lien Canguilhem établit-il entre concept scientifique et pratique médicale ?",
        answer: "Les concepts scientifiques ne sont pas abstraits : ils ont des implications concrètes en médecine, où la norme et la pathologie se rencontrent."
      },
      {
        id: 28,
        question: "Comment Canguilhem définit-il la science ?",
        answer: "Comme une élaboration conceptuelle progressive, historiquement située, et jamais achevée."
      },
      {
        id: 29,
        question: "Pourquoi faut-il, selon Canguilhem, résister à la tentation de l'objectivité absolue en biologie ?",
        answer: "Parce que le vivant, en tant qu'être normatif, ne peut être compris sans intégrer une part de subjectivité."
      },
      {
        id: 30,
        question: "Que veut dire Canguilhem en disant que \"vivre, c'est juger\" ?",
        answer: "Que tout organisme vivant opère des distinctions (utile/nocif, favorable/défavorable), ce qui constitue une forme de jugement vital."
      },
      {
        id: 31,
        question: "Quel est le rôle de l'erreur dans la science selon Canguilhem ?",
        answer: "L'erreur n'est pas un échec, mais une étape nécessaire de la construction des savoirs scientifiques."
      },
      {
        id: 32,
        question: "Pourquoi Canguilhem défend-il une pensée critique du vivant ?",
        answer: "Parce qu'il refuse les évidences, les dogmes et les simplifications. Il veut penser le vivant dans sa richesse, sa résistance à la réduction et sa capacité à produire des normes."
      },
      {
        id: 33,
        question: "Quelle est la formation académique de Georges Canguilhem ?",
        answer: "Il est philosophe, historien des sciences et docteur en médecine."
      },
      {
        id: 34,
        question: "Quel événement historique a poussé Canguilhem à quitter ses fonctions universitaires en 1940 ?",
        answer: "L'invasion allemande ; il rejoint la Résistance où il exerce la médecine clandestine."
      },
      {
        id: 35,
        question: "En quoi l'engagement de Canguilhem dans la Résistance a-t-il influencé sa pensée philosophique ?",
        answer: "Cela renforce sa sensibilité à la normativité du vivant : face à l'adversité, le vivant crée ses propres normes."
      },
      {
        id: 36,
        question: "Comment peut-on qualifier l'approche intellectuelle de Canguilhem ?",
        answer: "Elle est interdisciplinaire, mêlant sciences, médecine, épistémologie et éthique."
      },
      {
        id: 37,
        question: "Quelles avancées scientifiques marquent le XXe siècle selon le texte ?",
        answer: "Des progrès fulgurants en biologie, nécessitant une réflexion épistémologique sur les concepts scientifiques du vivant."
      },
      {
        id: 38,
        question: "Que dénonce Canguilhem dans l'attitude de certains scientifiques vis-à-vis du savoir ?",
        answer: "Il critique les illusions de la connaissance spontanée et les préjugés idéologiques."
      },
      {
        id: 39,
        question: "Quel philosophe influence la posture rationaliste critique de Canguilhem ?",
        answer: "Gaston Bachelard, pionnier de l'épistémologie historique."
      },
      {
        id: 40,
        question: "Comment Canguilhem conçoit-il la rationalité scientifique ?",
        answer: "Comme une construction propre aux pratiques scientifiques, dépendante des objets étudiés."
      },
      {
        id: 41,
        question: "Quel est l'objet de sa thèse de médecine ?",
        answer: "Le concept de réflexe."
      },
      {
        id: 42,
        question: "Quelle est la principale tension soulevée par Canguilhem au sein de la philosophie des sciences ?",
        answer: "Comment étudier scientifiquement le phénomène vital sans le réduire à des mécanismes inertes ni sombrer dans la métaphysique."
      },
      {
        id: 43,
        question: "Quelle est la principale ambition de La Connaissance de la vie ?",
        answer: "Interroger les conditions d'une connaissance authentique du vivant, au-delà des simples descriptions techniques."
      },
      {
        id: 44,
        question: "Entre quelles années Canguilhem développe-t-il les idées qui nourriront cette œuvre ?",
        answer: "Entre 1941 et 1948."
      },
      {
        id: 45,
        question: "Pourquoi le vivant ne peut-il pas être réduit à des mécanismes inertes ?",
        answer: "Parce qu'il manifeste une normativité propre, une capacité à réagir, à s'adapter, à créer des normes."
      },
      {
        id: 46,
        question: "À quelle forme de science Canguilhem s'oppose-t-il implicitement ?",
        answer: "À une science positiviste naïve, qui prétendrait tout expliquer par des lois universelles sans prendre en compte la singularité du vivant."
      },
      {
        id: 47,
        question: "En quoi la médecine a-t-elle influencé sa manière de penser le vivant ?",
        answer: "Elle lui a permis de voir le vivant dans sa dimension concrète, incarnée, normative, confrontée à la maladie, à l'accident."
      },
      {
        id: 48,
        question: "Quel lien Canguilhem établit-il entre science et expérience ?",
        answer: "La science doit être éclairée par l'expérience, notamment celle du vivant en situation (maladie, crise, adaptation…)."
      },
      {
        id: 49,
        question: "Pourquoi Canguilhem considère-t-il que le vivant est un objet d'étude complexe ?",
        answer: "Parce qu'il échappe aux simplifications théoriques et nécessite une approche intégrative (philosophique, scientifique, éthique…)."
      },
      {
        id: 50,
        question: "Comment Canguilhem se démarque-t-il de la tradition métaphysique dans sa manière d'aborder la vie ?",
        answer: "Il rejette les spéculations mystiques au profit d'une enquête rigoureuse, mais refuse aussi de réduire la vie à la physique."
      },
      {
        id: 51,
        question: "Quel est l'enjeu fondamental de La Connaissance de la vie pour la philosophie des sciences ?",
        answer: "Clarifier les conditions de validité d'un savoir sur le vivant, en maintenant sa spécificité irréductible."
      },
      {
        id: 52,
        question: "Expliquez cette idée implicite : \"Le vivant crée ses propres normes.\"",
        answer: "Contrairement aux objets inertes, le vivant n'est pas soumis passivement à des lois : il agit, s'adapte, résiste, ce qui fonde sa normativité."
      },
      {
        id: 53,
        question: "Que signifie l'expression \"enquête épistémologique\" dans le contexte de l'ouvrage ?",
        answer: "Il s'agit d'analyser les conditions, les concepts et les méthodes par lesquelles le savoir sur le vivant est construit."
      },
      {
        id: 54,
        question: "Pourquoi peut-on dire que La Connaissance de la vie ne cherche pas à \"conquérir\" la nature ?",
        answer: "Contrairement à Verne ou à une science prométhéenne, Canguilhem s'intéresse à comprendre en profondeur sans dominer."
      },
      {
        id: 55,
        question: "Pourquoi le biologiste ne peut-il pas se passer de la philosophie selon Canguilhem ?",
        answer: "Parce que les concepts qu'il utilise (vie, fonction, organisme, pathologie…) ont une portée théorique et une histoire qu'il faut questionner."
      },
      {
        id: 56,
        question: "Comment cette œuvre prépare-t-elle à une réflexion sur la médecine ou les biotechnologies contemporaines ?",
        answer: "En posant les bases d'une éthique du vivant, en montrant que toute intervention sur le vivant suppose une définition préalable de ce qu'est \"vivre\"."
      }
    ],
    vocabulaire: [
      {
        id: 1,
        question: "Qu'est-ce qu'une 'Enquête épistémologique' ?",
        options: [
          "Recherche policière",
          "Étude critique des conditions de la connaissance scientifique",
          "Enquête journalistique",
          "Recherche historique"
        ],
        correctAnswer: 1,
        explanation: "Une enquête épistémologique étudie de manière critique les conditions de la connaissance scientifique."
      },
      {
        id: 2,
        question: "Qu'est-ce qu'un 'Phénomène vital' ?",
        options: [
          "Événement social important",
          "Ce qui caractérise le vivant (croissance, reproduction, etc.)",
          "Phénomène physique",
          "Processus chimique"
        ],
        correctAnswer: 1,
        explanation: "Un phénomène vital désigne ce qui caractérise spécifiquement le vivant comme la croissance ou la reproduction."
      },
      {
        id: 3,
        question: "Que sont les 'Mécanismes inertes' ?",
        options: [
          "Processus biologiques",
          "Fonctionnement des objets non vivants",
          "Réactions chimiques",
          "Mouvements spontanés"
        ],
        correctAnswer: 1,
        explanation: "Les mécanismes inertes désignent le fonctionnement des objets non vivants, purement mécaniques."
      },
      {
        id: 4,
        question: "Que sont les 'Conceptions métaphysiques/mystiques' ?",
        options: [
          "Théories scientifiques",
          "Explications non scientifiques du monde vivant",
          "Méthodes empiriques",
          "Observations rationnelles"
        ],
        correctAnswer: 1,
        explanation: "Les conceptions métaphysiques ou mystiques proposent des explications non scientifiques du monde vivant."
      },
      {
        id: 5,
        question: "Qu'est-ce que l''Exigence conceptuelle' ?",
        options: [
          "Besoin de simplicité",
          "Nécessité de bien définir les idées scientifiques",
          "Demande de vulgarisation",
          "Recherche de popularité"
        ],
        correctAnswer: 1,
        explanation: "L'exigence conceptuelle est la nécessité de bien définir et préciser les idées scientifiques."
      },
      {
        id: 6,
        question: "Qu'est-ce que le 'Rationalisme critique' ?",
        options: [
          "Rejet de la raison",
          "Raisonnement rigoureux, mais toujours remis en question",
          "Acceptation aveugle",
          "Intuition pure"
        ],
        correctAnswer: 1,
        explanation: "Le rationalisme critique privilégie un raisonnement rigoureux tout en le remettant constamment en question."
      },
      {
        id: 7,
        question: "Qu'est-ce que l''Épistémologie historique' ?",
        options: [
          "Histoire des dates",
          "Étude de l'évolution des concepts scientifiques",
          "Chronologie des découvertes",
          "Biographie des savants"
        ],
        correctAnswer: 1,
        explanation: "L'épistémologie historique étudie l'évolution et la transformation des concepts scientifiques dans le temps."
      },
      {
        id: 8,
        question: "Qu'est-ce que la 'Genèse des concepts scientifiques' ?",
        options: [
          "Destruction des idées",
          "Origine et formation des idées scientifiques",
          "Application pratique",
          "Vulgarisation scientifique"
        ],
        correctAnswer: 1,
        explanation: "La genèse des concepts scientifiques étudie l'origine et la formation des idées scientifiques."
      },
      {
        id: 9,
        question: "Que sont les 'Illusions de la connaissance spontanée' ?",
        options: [
          "Découvertes importantes",
          "Idées fausses issues de l'intuition",
          "Théories confirmées",
          "Méthodes efficaces"
        ],
        correctAnswer: 1,
        explanation: "Les illusions de la connaissance spontanée sont des idées fausses issues de l'intuition non critique."
      },
      {
        id: 10,
        question: "Que sont les 'Préjugés idéologiques' ?",
        options: [
          "Théories objectives",
          "Idées reçues qui faussent la science",
          "Méthodes rigoureuses",
          "Observations neutres"
        ],
        correctAnswer: 1,
        explanation: "Les préjugés idéologiques sont des idées reçues qui viennent fausser l'approche scientifique."
      },
      {
        id: 11,
        question: "Qu'est-ce que la 'Normativité du vivant' ?",
        options: [
          "Obéissance aux lois physiques",
          "Capacité à créer ses propres règles biologiques",
          "Conformité sociale",
          "Respect des normes"
        ],
        correctAnswer: 1,
        explanation: "La normativité du vivant est sa capacité à créer ses propres règles et normes biologiques."
      },
      {
        id: 12,
        question: "Qu'est-ce que la 'Finalité (en biologie)' ?",
        options: [
          "Fin de la vie",
          "But ou fonction d'un organe ou processus",
          "Conclusion d'une expérience",
          "Arrêt de la croissance"
        ],
        correctAnswer: 1,
        explanation: "La finalité en biologie désigne le but ou la fonction d'un organe ou d'un processus biologique."
      },
      {
        id: 13,
        question: "Qu'est-ce que l''Individualité (biologique)' ?",
        options: [
          "Conformité génétique",
          "Unicité propre à chaque organisme",
          "Isolation sociale",
          "Reproduction identique"
        ],
        correctAnswer: 1,
        explanation: "L'individualité biologique désigne l'unicité propre à chaque organisme vivant."
      },
      {
        id: 14,
        question: "Qu'est-ce que le 'Vitalisme' ?",
        options: [
          "Théorie mécaniste",
          "Idée qu'une force propre anime le vivant",
          "Matérialisme pur",
          "Déterminisme strict"
        ],
        correctAnswer: 1,
        explanation: "Le vitalisme est l'idée qu'une force vitale spécifique anime le vivant, distinct de la matière inerte."
      },
      {
        id: 15,
        question: "Qu'est-ce qu'une 'Connaissance \"de surplomb\"' ?",
        options: [
          "Savoir incarné",
          "Savoir extérieur, détaché de l'objet étudié",
          "Connaissance pratique",
          "Expérience vécue"
        ],
        correctAnswer: 1,
        explanation: "Une connaissance 'de surplomb' est un savoir extérieur et détaché de l'objet étudié."
      },
      {
        id: 16,
        question: "Qu'est-ce que l''Immanence radicale' ?",
        options: [
          "Savoir externe",
          "Savoir qui vient de l'intérieur du vécu",
          "Théorie abstraite",
          "Observation distante"
        ],
        correctAnswer: 1,
        explanation: "L'immanence radicale désigne un savoir qui émerge de l'intérieur même du vécu."
      },
      {
        id: 17,
        question: "Qu'est-ce qu'une 'Expérience incarnée' ?",
        options: [
          "Théorie pure",
          "Connaissance issue du corps et du vécu",
          "Abstraction mentale",
          "Calcul mathématique"
        ],
        correctAnswer: 1,
        explanation: "Une expérience incarnée est une connaissance qui émerge du corps et du vécu concret."
      },
      {
        id: 18,
        question: "Que sont les 'Approches réductrices' ?",
        options: [
          "Méthodes complètes",
          "Méthodes qui simplifient à l'excès",
          "Analyses approfondies",
          "Études exhaustives"
        ],
        correctAnswer: 1,
        explanation: "Les approches réductrices sont des méthodes qui simplifient excessivement les phénomènes étudiés."
      },
      {
        id: 19,
        question: "Quelle est la différence entre 'Qualités vs Quantités' ?",
        options: [
          "Aucune différence",
          "Ce qu'est une chose (qualités) vs ce qu'elle mesure (quantités)",
          "Deux mesures identiques",
          "Aspects équivalents"
        ],
        correctAnswer: 1,
        explanation: "Les qualités concernent ce qu'est une chose, tandis que les quantités concernent ce qu'elle mesure."
      },
      {
        id: 20,
        question: "Qu'est-ce qu'une 'Grandeur phénoménologique' ?",
        options: [
          "Mesure objective",
          "Importance sensible d'un phénomène, vécu subjectif",
          "Calcul mathématique",
          "Donnée statistique"
        ],
        correctAnswer: 1,
        explanation: "Une grandeur phénoménologique désigne l'importance sensible d'un phénomène tel qu'il est vécu subjectivement."
      },
      {
        id: 21,
        question: "Qu'est-ce que la 'Primauté de l'expérience esthétique et sensorielle' ?",
        options: [
          "Rejet des sens",
          "Rôle de la perception dans la connaissance",
          "Intellectualisme pur",
          "Abstraction totale"
        ],
        correctAnswer: 1,
        explanation: "Cette primauté reconnaît le rôle fondamental de la perception et des sens dans la connaissance."
      },
      {
        id: 22,
        question: "Que sont les 'Spécificités ontologiques' ?",
        options: [
          "Caractères généraux",
          "Ce qui fait l'être du vivant",
          "Propriétés physiques",
          "Lois universelles"
        ],
        correctAnswer: 1,
        explanation: "Les spécificités ontologiques désignent ce qui fait l'être même du vivant, sa nature propre."
      },
      {
        id: 23,
        question: "Qu'est-ce que l''Auto-organisation' ?",
        options: [
          "Organisation extérieure",
          "Le vivant s'organise sans aide extérieure",
          "Contrôle externe",
          "Direction imposée"
        ],
        correctAnswer: 1,
        explanation: "L'auto-organisation est la capacité du vivant à s'organiser de lui-même, sans aide extérieure."
      },
      {
        id: 24,
        question: "Qu'est-ce que la 'Connaissance viscérale et empirique' ?",
        options: [
          "Savoir théorique",
          "Savoir profond issu de l'expérience",
          "Connaissance livresque",
          "Abstraction pure"
        ],
        correctAnswer: 1,
        explanation: "La connaissance viscérale et empirique est un savoir profond issu de l'expérience directe et corporelle."
      },
      {
        id: 25,
        question: "Qu'est-ce qu'un 'Automate auto-suffisant' ?",
        options: [
          "Machine dépendante",
          "Machine autonome, sans aide extérieure",
          "Système contrôlé",
          "Mécanisme simple"
        ],
        correctAnswer: 1,
        explanation: "Un automate auto-suffisant est une machine capable de fonctionner de manière autonome, sans aide extérieure."
      },
      {
        id: 26,
        question: "Qu'est-ce qu'une 'Totalité intégrée et indivisible' ?",
        options: [
          "Ensemble fragmenté",
          "L'organisme ne peut être séparé en parties",
          "Collection d'éléments",
          "Système décomposable"
        ],
        correctAnswer: 1,
        explanation: "Une totalité intégrée et indivisible désigne un organisme qui ne peut être séparé en parties indépendantes."
      },
      {
        id: 27,
        question: "Qu'est-ce que l''Auto-réparation / Auto-organisation' ?",
        options: [
          "Réparation externe",
          "Capacité à se réparer et se structurer seul",
          "Maintenance artificielle",
          "Intervention extérieure"
        ],
        correctAnswer: 1,
        explanation: "L'auto-réparation et l'auto-organisation désignent la capacité à se réparer et se structurer par soi-même."
      },
      {
        id: 28,
        question: "Qu'est-ce que l''Animal-machine cartésien' ?",
        options: [
          "Animal doué d'âme",
          "Idée que l'animal est une machine sans âme",
          "Être spirituel",
          "Créature divine"
        ],
        correctAnswer: 1,
        explanation: "L'animal-machine cartésien est la conception de Descartes selon laquelle l'animal est une machine dépourvue d'âme."
      },
      {
        id: 29,
        question: "Que sont les 'Causes efficientes' ?",
        options: [
          "Buts finaux",
          "Les mécanismes directs d'un phénomène",
          "Intentions cachées",
          "Finalités secrètes"
        ],
        correctAnswer: 1,
        explanation: "Les causes efficientes sont les mécanismes directs qui produisent un phénomène."
      },
      {
        id: 30,
        question: "Qu'est-ce qu'une 'Cause finale' ?",
        options: [
          "Mécanisme initial",
          "Le but ou la fonction visée",
          "Origine première",
          "Déclencheur immédiat"
        ],
        correctAnswer: 1,
        explanation: "La cause finale désigne le but ou la fonction vers laquelle tend un processus ou un organe."
      },
      {
        id: 31,
        question: "Qu'est-ce que la 'Spécificité ontologique' ?",
        options: [
          "Caractère général",
          "Ce qui fait la singularité du vivant",
          "Propriété commune",
          "Trait universel"
        ],
        correctAnswer: 1,
        explanation: "La spécificité ontologique désigne ce qui fait la singularité et l'unicité du vivant."
      },
      {
        id: 32,
        question: "Qu'est-ce que la 'Plasticité normative' ?",
        options: [
          "Rigidité des règles",
          "Adaptation à de nouvelles règles internes",
          "Fixité des normes",
          "Immuabilité"
        ],
        correctAnswer: 1,
        explanation: "La plasticité normative est la capacité d'adaptation à de nouvelles règles et normes internes."
      },
      {
        id: 33,
        question: "Quelle est la différence entre 'Expliquer vs Comprendre' ?",
        options: [
          "Aucune différence",
          "Mécanismes (expliquer) vs sens profond (comprendre)",
          "Deux approches identiques",
          "Méthodes équivalentes"
        ],
        correctAnswer: 1,
        explanation: "Expliquer concerne les mécanismes causaux, comprendre vise le sens profond des phénomènes."
      },
      {
        id: 34,
        question: "Qu'est-ce que la 'Technique organique' ?",
        options: [
          "Technologie artificielle",
          "Aptitude naturelle à s'auto-organiser",
          "Méthode industrielle",
          "Procédé mécanique"
        ],
        correctAnswer: 1,
        explanation: "La technique organique désigne l'aptitude naturelle du vivant à s'auto-organiser et s'adapter."
      },
      {
        id: 35,
        question: "Qu'est-ce que le 'Préjugé anthropomorphique' ?",
        options: [
          "Vision objective",
          "Attribuer à la nature des traits humains",
          "Neutralité scientifique",
          "Observation pure"
        ],
        correctAnswer: 1,
        explanation: "Le préjugé anthropomorphique consiste à attribuer à la nature des caractéristiques humaines."
      },
      {
        id: 36,
        question: "Qu'est-ce que l''Épistémologie de l'incorporation' ?",
        options: [
          "Connaissance abstraite",
          "Rôle du corps dans l'acte de connaître",
          "Pensée pure",
          "Théorie désincarnée"
        ],
        correctAnswer: 1,
        explanation: "L'épistémologie de l'incorporation étudie le rôle du corps dans l'acte de connaître."
      },
      {
        id: 37,
        question: "Qu'est-ce qu'une 'Rectification épistémologique' ?",
        options: [
          "Confirmation d'erreurs",
          "Correction des erreurs de connaissance",
          "Maintien des préjugés",
          "Répétition des fautes"
        ],
        correctAnswer: 1,
        explanation: "Une rectification épistémologique est la correction des erreurs dans les processus de connaissance."
      },
      {
        id: 38,
        question: "Qu'est-ce que la 'Complexité organisationnelle' ?",
        options: [
          "Simplicité mécanique",
          "Degré élevé d'organisation du vivant",
          "Désorganisation",
          "Structure élémentaire"
        ],
        correctAnswer: 1,
        explanation: "La complexité organisationnelle désigne le degré élevé d'organisation caractéristique du vivant."
      },
      {
        id: 39,
        question: "Qu'est-ce que l''Autonomie (du vivant)' ?",
        options: [
          "Dépendance totale",
          "Capacité à fonctionner seul",
          "Soumission externe",
          "Contrôle extérieur"
        ],
        correctAnswer: 1,
        explanation: "L'autonomie du vivant est sa capacité à fonctionner et se réguler par lui-même."
      },
      {
        id: 40,
        question: "Qu'est-ce que l''Abstraction conceptuelle' ?",
        options: [
          "Expérience concrète",
          "Idée générale détachée du concret",
          "Observation directe",
          "Perception immédiate"
        ],
        correctAnswer: 1,
        explanation: "L'abstraction conceptuelle est une idée générale détachée de l'expérience concrète."
      },
      {
        id: 41,
        question: "Qu'est-ce que le 'Réductionnisme' ?",
        options: [
          "Approche globale",
          "Expliquer par les éléments les plus simples",
          "Vision complexe",
          "Méthode intégrative"
        ],
        correctAnswer: 1,
        explanation: "Le réductionnisme consiste à expliquer les phénomènes par leurs éléments les plus simples."
      },
      {
        id: 42,
        question: "Qu'est-ce qu'une 'Signification biologique' ?",
        options: [
          "Absence de sens",
          "Sens d'une fonction ou d'un organe",
          "Neutralité fonctionnelle",
          "Arbitraire total"
        ],
        correctAnswer: 1,
        explanation: "La signification biologique désigne le sens et la raison d'être d'une fonction ou d'un organe."
      },
      {
        id: 43,
        question: "Qu'est-ce que le 'Fonctionnement de l'organisme entier' ?",
        options: [
          "Analyse partielle",
          "Comprendre l'organisme comme un tout",
          "Étude fragmentée",
          "Vision compartimentée"
        ],
        correctAnswer: 1,
        explanation: "Le fonctionnement de l'organisme entier implique de le comprendre comme une totalité intégrée."
      },
      {
        id: 44,
        question: "Qu'est-ce que le 'Finalisme naïf' ?",
        options: [
          "Analyse causale",
          "Attribuer un but à tout phénomène vivant",
          "Mécanisme pur",
          "Vision matérialiste"
        ],
        correctAnswer: 1,
        explanation: "Le finalisme naïf consiste à attribuer automatiquement un but à tout phénomène vivant."
      },
      {
        id: 45,
        question: "Qu'est-ce qu'une 'Interrogation téléologique a priori' ?",
        options: [
          "Observation sans préjugé",
          "Chercher une finalité avant d'observer",
          "Analyse neutre",
          "Étude objective"
        ],
        correctAnswer: 1,
        explanation: "L'interrogation téléologique a priori consiste à chercher une finalité avant même d'observer."
      },
      {
        id: 46,
        question: "Qu'est-ce qu'une 'Fonction révélée a posteriori' ?",
        options: [
          "But préconçu",
          "Découverte de la fonction après usage",
          "Finalité imposée",
          "Intention préalable"
        ],
        correctAnswer: 1,
        explanation: "Une fonction révélée a posteriori est découverte après observation, sans présupposé de finalité."
      },
      {
        id: 47,
        question: "Qu'est-ce que l''Observation dynamique in vivo' ?",
        options: [
          "Étude post-mortem",
          "Étude sur organisme vivant en action",
          "Analyse statique",
          "Examen inerte"
        ],
        correctAnswer: 1,
        explanation: "L'observation dynamique in vivo étudie l'organisme vivant en action, dans son fonctionnement naturel."
      },
      {
        id: 48,
        question: "Qu'est-ce que le 'Milieu intérieur (Claude Bernard)' ?",
        options: [
          "Environnement externe",
          "Environnement interne stable du corps",
          "Contexte social",
          "Cadre extérieur"
        ],
        correctAnswer: 1,
        explanation: "Le milieu intérieur de Claude Bernard désigne l'environnement interne stable du corps vivant."
      },
      {
        id: 49,
        question: "Qu'est-ce qu'une 'Entité auto-régulatrice' ?",
        options: [
          "Système contrôlé",
          "Organisme qui maintient son équilibre",
          "Machine dirigée",
          "Mécanisme passif"
        ],
        correctAnswer: 1,
        explanation: "Une entité auto-régulatrice est un organisme capable de maintenir son équilibre par lui-même."
      },
      {
        id: 50,
        question: "Qu'est-ce que l''Homéostasie vitale' ?",
        options: [
          "Déséquilibre constant",
          "Stabilité interne face aux perturbations",
          "Instabilité chronique",
          "Variation permanente"
        ],
        correctAnswer: 1,
        explanation: "L'homéostasie vitale est la capacité à maintenir la stabilité interne face aux perturbations externes."
      },
      {
        id: 51,
        question: "Qu'est-ce qu'une 'Boucle réflexive' ?",
        options: [
          "Pensée linéaire",
          "Savoir enrichi par aller-retour entre expérience et théorie",
          "Raisonnement direct",
          "Logique simple"
        ],
        correctAnswer: 1,
        explanation: "Une boucle réflexive enrichit le savoir par des allers-retours entre expérience et théorie."
      },
      {
        id: 52,
        question: "Qu'est-ce qu'une 'Dialectique' ?",
        options: [
          "Monologue",
          "Dialogue entre deux idées opposées",
          "Pensée unique",
          "Consensus immédiat"
        ],
        correctAnswer: 1,
        explanation: "La dialectique est un dialogue dynamique entre deux idées ou positions opposées."
      },
      {
        id: 53,
        question: "Que sont les 'Totalités organiques' ?",
        options: [
          "Parties isolées",
          "Tout vivant comme système unifié",
          "Éléments séparés",
          "Fragments indépendants"
        ],
        correctAnswer: 1,
        explanation: "Les totalités organiques conçoivent tout vivant comme un système unifié et intégré."
      },
      {
        id: 54,
        question: "Qu'est-ce que l''Irréversibilité (biologique)' ?",
        options: [
          "Retour possible",
          "Changements du vivant non retournables",
          "Réversibilité totale",
          "Cyclicité parfaite"
        ],
        correctAnswer: 1,
        explanation: "L'irréversibilité biologique désigne les changements du vivant qui ne peuvent être annulés."
      },
      {
        id: 55,
        question: "Qu'est-ce qu'un 'Processus historique (biologie)' ?",
        options: [
          "Permanence absolue",
          "Le vivant évolue dans le temps",
          "Statisme total",
          "Immuabilité"
        ],
        correctAnswer: 1,
        explanation: "Un processus historique en biologie reconnaît que le vivant évolue et se transforme dans le temps."
      },
      {
        id: 56,
        question: "Qu'est-ce que le 'Primat de l'anthropologie' ?",
        options: [
          "Négation de l'humain",
          "Importance de l'étude de l'humain",
          "Rejet des sciences humaines",
          "Indifférence à l'homme"
        ],
        correctAnswer: 1,
        explanation: "Le primat de l'anthropologie reconnaît l'importance centrale de l'étude de l'humain."
      },
      {
        id: 57,
        question: "Qu'est-ce que l''Anthropogenèse' ?",
        options: [
          "Fin de l'humanité",
          "Origine et évolution de l'humanité",
          "Stagnation humaine",
          "Régression de l'espèce"
        ],
        correctAnswer: 1,
        explanation: "L'anthropogenèse étudie l'origine et l'évolution de l'humanité."
      },
      {
        id: 58,
        question: "Qu'est-ce que la 'Sagesse biologique' ?",
        options: [
          "Manipulation irresponsable",
          "Prudence face à la manipulation du vivant",
          "Intervention aveugle",
          "Expérimentation sans limite"
        ],
        correctAnswer: 1,
        explanation: "La sagesse biologique implique la prudence et la responsabilité face à la manipulation du vivant."
      },
      {
        id: 59,
        question: "Qu'est-ce que la 'Persistance vitale' ?",
        options: [
          "Abandon facile",
          "Tendance à survivre malgré les obstacles",
          "Résignation",
          "Faiblesse naturelle"
        ],
        correctAnswer: 1,
        explanation: "La persistance vitale est la tendance naturelle à survivre et persévérer malgré les obstacles."
      },
      {
        id: 60,
        question: "Qu'est-ce que la 'Théorie mécaniste du vivant' ?",
        options: [
          "Vision vitaliste",
          "Le vivant comparé à une machine",
          "Approche spiritualiste",
          "Conception mystique"
        ],
        correctAnswer: 1,
        explanation: "La théorie mécaniste conçoit le vivant comme une machine complexe régie par des lois physiques."
      },
      {
        id: 61,
        question: "Que sont les 'Postulats de ce mécanisme' ?",
        options: [
          "Réfutations du mécanisme",
          "Fondements de l'idée mécaniste",
          "Critiques de la machine",
          "Négations du déterminisme"
        ],
        correctAnswer: 1,
        explanation: "Les postulats du mécanisme sont les fondements théoriques de la conception mécaniste du vivant."
      },
      {
        id: 62,
        question: "Qu'est-ce que la 'Causalité linéaire' ?",
        options: [
          "Causalité circulaire",
          "Une cause produit un effet unique",
          "Multicausalité",
          "Causalité complexe"
        ],
        correctAnswer: 1,
        explanation: "La causalité linéaire postule qu'une cause produit un effet unique et prévisible."
      },
      {
        id: 63,
        question: "Qu'est-ce que la 'Polymorphie intrinsèque' ?",
        options: [
          "Uniformité totale",
          "Diversité inhérente au vivant",
          "Monotonie biologique",
          "Standardisation"
        ],
        correctAnswer: 1,
        explanation: "La polymorphie intrinsèque désigne la diversité des formes inhérente au vivant."
      },
      {
        id: 64,
        question: "Qu'est-ce qu'un 'Ordre autre que l'ordre le plus probable' ?",
        options: [
          "Normalité parfaite",
          "Différence marquante par rapport à la norme",
          "Conformité absolue",
          "Standard habituel"
        ],
        correctAnswer: 1,
        explanation: "C'est un ordre qui se distingue de façon marquante par rapport à ce qui est statistiquement normal."
      },
      {
        id: 65,
        question: "Qu'est-ce que l''Altérité radicale' ?",
        options: [
          "Similarité parfaite",
          "Ce qui est absolument différent",
          "Identité complète",
          "Ressemblance totale"
        ],
        correctAnswer: 1,
        explanation: "L'altérité radicale désigne ce qui est absolument et fondamentalement différent."
      },
      {
        id: 66,
        question: "Qu'est-ce que l''Expérience esthétique de la nature' ?",
        options: [
          "Analyse purement technique",
          "Perception sensible et poétique du monde naturel",
          "Mesure quantitative",
          "Calcul mathématique"
        ],
        correctAnswer: 1,
        explanation: "L'expérience esthétique de la nature implique une perception sensible et poétique du monde naturel."
      },
      {
        id: 67,
        question: "Qu'est-ce que la 'Polymorphie' ?",
        options: [
          "Forme unique",
          "Multiplicité des formes dans le vivant",
          "Monotonie structurelle",
          "Uniformité parfaite"
        ],
        correctAnswer: 1,
        explanation: "La polymorphie désigne la multiplicité et la diversité des formes dans le monde vivant."
      },
      {
        id: 68,
        question: "Qu'est-ce que la 'Tératologie' ?",
        options: [
          "Étude de la normalité",
          "Étude des malformations biologiques",
          "Science de la perfection",
          "Analyse de la régularité"
        ],
        correctAnswer: 1,
        explanation: "La tératologie est la science qui étudie les malformations et anomalies biologiques."
      },
      {
        id: 69,
        question: "Quelle est la différence entre 'Monstrueux vs Énorme' ?",
        options: [
          "Aucune différence",
          "Le monstrueux = différent, l'énorme = très grand",
          "Deux concepts identiques",
          "Même signification"
        ],
        correctAnswer: 1,
        explanation: "Le monstrueux désigne ce qui est différent de la norme, l'énorme ce qui est très grand."
      },
      {
        id: 70,
        question: "Qu'est-ce que l''Ordre le plus probable' ?",
        options: [
          "L'exceptionnel",
          "Ce qui arrive le plus souvent dans la nature",
          "Le rarissime",
          "L'impossible"
        ],
        correctAnswer: 1,
        explanation: "L'ordre le plus probable désigne ce qui arrive statistiquement le plus souvent dans la nature."
      },
      {
        id: 71,
        question: "Qu'est-ce que le 'Fantastique' ?",
        options: [
          "Réalité pure",
          "Domaine de l'imaginaire et de l'inexplicable",
          "Fait scientifique",
          "Vérité établie"
        ],
        correctAnswer: 1,
        explanation: "Le fantastique appartient au domaine de l'imaginaire et de ce qui échappe à l'explication rationnelle."
      },
      {
        id: 72,
        question: "Qu'est-ce qu'un 'Continuum des phénomènes' ?",
        options: [
          "Discontinuité absolue",
          "Fluidité des processus naturels",
          "Séparation nette",
          "Fragmentation totale"
        ],
        correctAnswer: 1,
        explanation: "Le continuum des phénomènes désigne la fluidité et la continuité des processus naturels."
      },
      {
        id: 73,
        question: "Qu'est-ce que l''Éther (newtonien)' ?",
        options: [
          "Substance réelle",
          "Ancien fluide censé porter les forces",
          "Matière confirmée",
          "Élément prouvé"
        ],
        correctAnswer: 1,
        explanation: "L'éther newtonien était un fluide hypothétique censé porter les forces à travers l'espace."
      },
      {
        id: 74,
        question: "Qu'est-ce qu'une 'Fonction mécanique' ?",
        options: [
          "Rôle organique",
          "Rôle d'un élément dans un système",
          "Finalité vitale",
          "But biologique"
        ],
        correctAnswer: 1,
        explanation: "Une fonction mécanique désigne le rôle précis d'un élément dans un système mécanique."
      },
      {
        id: 75,
        question: "Qu'est-ce que le 'Déterminisme mécanique' ?",
        options: [
          "Hasard total",
          "Tout effet a une cause précise et unique",
          "Indétermination",
          "Chaos complet"
        ],
        correctAnswer: 1,
        explanation: "Le déterminisme mécanique postule que tout effet a une cause précise, unique et prévisible."
      },
      {
        id: 76,
        question: "Qui sont les 'Anthropogéographes' ?",
        options: [
          "Géologues",
          "Étudient l'influence du lieu sur les sociétés humaines",
          "Astronomes",
          "Biologistes marins"
        ],
        correctAnswer: 1,
        explanation: "Les anthropogéographes étudient l'influence de l'environnement géographique sur les sociétés humaines."
      },
      {
        id: 77,
        question: "Qu'est-ce que la 'Causalité unidirectionnelle' ?",
        options: [
          "Causalité circulaire",
          "Cause → effet, sans retour",
          "Rétroaction",
          "Boucle causale"
        ],
        correctAnswer: 1,
        explanation: "La causalité unidirectionnelle va de la cause vers l'effet, sans possibilité de retour."
      },
      {
        id: 78,
        question: "Qu'est-ce que le 'Positivisme (Auguste Comte)' ?",
        options: [
          "Métaphysique pure",
          "Science basée sur l'observation",
          "Spéculation abstraite",
          "Mysticisme"
        ],
        correctAnswer: 1,
        explanation: "Le positivisme d'Auguste Comte fonde la science sur l'observation des faits positifs."
      },
      {
        id: 79,
        question: "Qu'est-ce que l''Effectivité propre (du vivant)' ?",
        options: [
          "Impuissance naturelle",
          "Capacité à produire des effets",
          "Passivité totale",
          "Inertie complète"
        ],
        correctAnswer: 1,
        explanation: "L'effectivité propre du vivant désigne sa capacité spécifique à produire des effets réels."
      },
      {
        id: 80,
        question: "Qu'est-ce qu'un 'Réseau dynamique et fluctuant de relations' ?",
        options: [
          "Structure figée",
          "Interactions changeantes entre vivant et milieu",
          "Système statique",
          "Organisation immuable"
        ],
        correctAnswer: 1,
        explanation: "C'est un ensemble d'interactions changeantes et évolutives entre le vivant et son milieu."
      },
      {
        id: 81,
        question: "Qu'évoque l'image du 'Maelström' ?",
        options: [
          "Ordre parfait",
          "Image du chaos naturel, incontrôlable",
          "Harmonie absolue",
          "Stabilité totale"
        ],
        correctAnswer: 1,
        explanation: "Le Maelström évoque l'image d'un chaos naturel puissant et incontrôlable."
      },
      {
        id: 82,
        question: "Qu'est-ce que la 'Spontanéité créatrice (du vivant)' ?",
        options: [
          "Reproduction mécanique",
          "Capacité du vivant à inventer",
          "Répétition automatique",
          "Imitation pure"
        ],
        correctAnswer: 1,
        explanation: "La spontanéité créatrice est la capacité du vivant à inventer et créer du nouveau."
      },
      {
        id: 83,
        question: "Qu'est-ce que le 'Productivisme industriel (taylorisme)' ?",
        options: [
          "Artisanat traditionnel",
          "Organisation du travail par la performance",
          "Production artisanale",
          "Travail personnel"
        ],
        correctAnswer: 1,
        explanation: "Le productivisme industriel organise le travail selon des critères de performance et de rendement."
      },
      {
        id: 84,
        question: "Qu'est-ce que l''Umwelt (von Uexküll)' ?",
        options: [
          "Monde objectif",
          "Monde tel qu'il est perçu par chaque espèce",
          "Réalité universelle",
          "Environnement neutre"
        ],
        correctAnswer: 1,
        explanation: "L'Umwelt désigne le monde tel qu'il est perçu et vécu par chaque espèce vivante."
      },
      {
        id: 85,
        question: "Qu'est-ce que l''Umgebung' ?",
        options: [
          "Monde subjectif",
          "Monde objectif, indépendant de la perception",
          "Perception individuelle",
          "Expérience personnelle"
        ],
        correctAnswer: 1,
        explanation: "L'Umgebung désigne le monde objectif, indépendant de toute perception subjective."
      },
      {
        id: 86,
        question: "Qu'est-ce que le 'Welt' ?",
        options: [
          "Monde animal",
          "Monde humain, symbolique et social",
          "Environnement naturel",
          "Milieu physique"
        ],
        correctAnswer: 1,
        explanation: "Le Welt désigne le monde spécifiquement humain, symbolique et social."
      },
      {
        id: 87,
        question: "Qu'est-ce que le 'Cosmos (conception grecque)' ?",
        options: [
          "Chaos total",
          "Univers harmonieux et ordonné",
          "Désordre absolu",
          "Anarchie cosmique"
        ],
        correctAnswer: 1,
        explanation: "Le cosmos grec désigne un univers harmonieux, ordonné et intelligible."
      },
      {
        id: 88,
        question: "Que signifie 'Multi-centré' ?",
        options: [
          "Centre unique",
          "Chaque vivant a son propre \"centre\"",
          "Centralisation absolue",
          "Point focal unique"
        ],
        correctAnswer: 1,
        explanation: "Multi-centré signifie que chaque être vivant constitue son propre centre de référence."
      },
      {
        id: 89,
        question: "Qu'est-ce qu'une 'Connaissance pratique et incarnée' ?",
        options: [
          "Savoir abstrait",
          "Savoir intégré par le vécu",
          "Théorie pure",
          "Spéculation détachée"
        ],
        correctAnswer: 1,
        explanation: "Une connaissance pratique et incarnée est un savoir intégré par l'expérience vécue et corporelle."
      },
      {
        id: 90,
        question: "Qu'est-ce que l''Aventure imprévisible (de la vie)' ?",
        options: [
          "Déterminisme total",
          "Vie = imprévisible et pleine de surprises",
          "Prédictibilité parfaite",
          "Mécanisme automatique"
        ],
        correctAnswer: 1,
        explanation: "L'aventure imprévisible de la vie souligne son caractère créateur et imprévisible."
      },
      {
        id: 91,
        question: "Qu'est-ce que le 'Vitalisme de Bichat' ?",
        options: [
          "Mécanisme pur",
          "Force vitale au cœur du vivant",
          "Matérialisme strict",
          "Déterminisme physique"
        ],
        correctAnswer: 1,
        explanation: "Le vitalisme de Bichat postule l'existence d'une force vitale spécifique au cœur du vivant."
      },
      {
        id: 92,
        question: "Qu'est-ce que l''Animisme' ?",
        options: [
          "Matérialisme strict",
          "Croyance en l'âme des choses",
          "Mécanisme pur",
          "Physicalisme"
        ],
        correctAnswer: 1,
        explanation: "L'animisme est la croyance selon laquelle toutes choses possèdent une âme ou un principe spirituel."
      },
      {
        id: 93,
        question: "Qu'est-ce qu'une 'Normalité purement idéale' ?",
        options: [
          "Santé parfaite réelle",
          "Santé comme idéal jamais atteint",
          "État normal accessible",
          "Réalité commune"
        ],
        correctAnswer: 1,
        explanation: "Une normalité purement idéale conçoit la santé comme un idéal jamais parfaitement atteint."
      },
      {
        id: 94,
        question: "Qu'est-ce qu'une 'Organisation de puissances' ?",
        options: [
          "Faiblesse organisée",
          "Ensemble de forces du vivant",
          "Impuissance structurée",
          "Débilité systémique"
        ],
        correctAnswer: 1,
        explanation: "Une organisation de puissances désigne l'ensemble des forces organisées du vivant."
      },
      {
        id: 95,
        question: "Qu'est-ce qu'une 'Hiérarchie de fonctions' ?",
        options: [
          "Égalité fonctionnelle",
          "Organisation ordonnée des rôles biologiques",
          "Anarchie biologique",
          "Chaos fonctionnel"
        ],
        correctAnswer: 1,
        explanation: "Une hiérarchie de fonctions est une organisation ordonnée et structurée des rôles biologiques."
      },
      {
        id: 96,
        question: "Qu'est-ce que l''Instabilité créatrice' ?",
        options: [
          "Équilibre parfait",
          "Déséquilibre utile à l'innovation",
          "Stabilité absolue",
          "Permanence totale"
        ],
        correctAnswer: 1,
        explanation: "L'instabilité créatrice est un déséquilibre qui favorise l'innovation et la créativité du vivant."
      },
      {
        id: 97,
        question: "Qu'est-ce que l''Essai / Aventure (du vivant)' ?",
        options: [
          "Répétition mécanique",
          "Chaque vivant = tentative unique",
          "Reproduction identique",
          "Automatisme total"
        ],
        correctAnswer: 1,
        explanation: "Chaque vivant est conçu comme un essai unique, une aventure originale de la vie."
      },
      {
        id: 98,
        question: "Qu'est-ce qu'une 'Connotation péjorative' ?",
        options: [
          "Sens positif",
          "Sens négatif associé à un mot",
          "Neutralité parfaite",
          "Valeur méliorative"
        ],
        correctAnswer: 1,
        explanation: "Une connotation péjorative est un sens négatif ou dévalorisant associé à un terme."
      },
      {
        id: 99,
        question: "Qu'est-ce qu'un 'Être en devenir' ?",
        options: [
          "Substance figée",
          "Ce qui évolue, se transforme sans cesse",
          "Entité statique",
          "Forme immuable"
        ],
        correctAnswer: 1,
        explanation: "Un être en devenir est ce qui évolue et se transforme continuellement."
      },
      {
        id: 100,
        question: "Qu'est-ce qu'une 'Spécificité dynamique' ?",
        options: [
          "Caractère statique",
          "Caractère unique et évolutif du vivant",
          "Permanence absolue",
          "Fixité totale"
        ],
        correctAnswer: 1,
        explanation: "La spécificité dynamique désigne le caractère à la fois unique et évolutif du vivant."
      },
      {
        id: 101,
        question: "Qu'est-ce qu'une 'Valeur d'organisme' ?",
        options: [
          "Prix marchand",
          "Capacité à se réguler et se définir",
          "Coût économique",
          "Valeur monétaire"
        ],
        correctAnswer: 1,
        explanation: "La valeur d'organisme désigne la capacité à se réguler et se définir de manière autonome."
      },
      {
        id: 102,
        question: "Que sont les 'Milieux protecteurs' ?",
        options: [
          "Environnements hostiles",
          "Environnements construits pour se protéger",
          "Zones dangereuses",
          "Territoires menaçants"
        ],
        correctAnswer: 1,
        explanation: "Les milieux protecteurs sont des environnements créés ou aménagés pour assurer la protection."
      },
      {
        id: 103,
        question: "Qu'est-ce qu'une 'Physiologie déviée / nouvelle' ?",
        options: [
          "Fonctionnement normal",
          "Fonctionnement biologique modifié ou inédit",
          "Activité standard",
          "Processus habituel"
        ],
        correctAnswer: 1,
        explanation: "Une physiologie déviée ou nouvelle désigne un fonctionnement biologique modifié ou inédit."
      },
      {
        id: 104,
        question: "Qu'est-ce qu'une 'Capacité normative' ?",
        options: [
          "Soumission aux normes",
          "Créer ses propres règles internes",
          "Obéissance externe",
          "Conformité imposée"
        ],
        correctAnswer: 1,
        explanation: "La capacité normative est la faculté de créer ses propres règles et normes internes."
      },
      {
        id: 105,
        question: "Qu'est-ce que le 'Psychisme humain' ?",
        options: [
          "Corps physique",
          "Ensemble des processus mentaux",
          "Anatomie visible",
          "Structure matérielle"
        ],
        correctAnswer: 1,
        explanation: "Le psychisme humain désigne l'ensemble des processus mentaux et psychologiques."
      },
      {
        id: 106,
        question: "Qu'est-ce qu'une 'Innovation radicale' ?",
        options: [
          "Répétition du passé",
          "Changement profond, hors normes",
          "Tradition respectée",
          "Conformité absolue"
        ],
        correctAnswer: 1,
        explanation: "Une innovation radicale est un changement profond qui sort des normes établies."
      }
    ]
  }
}
