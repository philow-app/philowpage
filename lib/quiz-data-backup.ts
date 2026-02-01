// Questions de Connaissance
export interface KnowledgeQuestion {
  id: number
  question: string
  answer: string
}

// Questions de Vocabulaire  
export interface VocabularyQuestion {
  id: number
  word: string
  definition: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

// Verne - Connaissance
export const verneConnaissance: KnowledgeQuestion[] = [
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
    question: "Quelles sont les grandes zones géographiques encore inconnues ou en cours d'exploration au XIXe siècle ?",
    answer: "L'Afrique (en cours de cartographie), les pôles, et surtout les fonds marins qui restent quasiment inexplorés."
  }
]

// Verne - Vocabulaire
export const verneVocabulaire: VocabularyQuestion[] = [
  {
    id: 1,
    word: "Positivisme",
    definition: "Une philosophie qui repose sur l'observation scientifique et le rejet de la métaphysique",
    options: [
      "Une attitude optimiste envers la vie",
      "Une philosophie basée sur l'observation scientifique et le rejet de la métaphysique",
      "Une théorie politique progressiste",
      "Un mouvement artistique du XIXe siècle"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    word: "Romantisme",
    definition: "Un mouvement artistique et intellectuel valorisant l'émotion, l'imagination et l'individualité",
    options: [
      "Un genre musical du XVIIe siècle",
      "Un mouvement artistique valorisant l'émotion, l'imagination et l'individualité",
      "Une doctrine philosophique rationnelle",
      "Un style architectural gothique"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    word: "Exploration",
    definition: "Action de découvrir et parcourir des territoires inconnus",
    options: [
      "L'étude théorique des cartes géographiques",
      "L'action de découvrir et parcourir des territoires inconnus",
      "La colonisation de nouveaux pays",
      "L'écriture de récits de voyage"
    ],
    correctAnswer: 1
  }
]

// Haushofer - Connaissance
export const haushoferConnaissance: KnowledgeQuestion[] = [
  {
    id: 1,
    question: "Qui est Marlen Haushofer et quel est le contexte de sa vie ?",
    answer: "Marlen Haushofer (1920-1970) est une écrivaine autrichienne qui a vécu pendant le nazisme et l'après-guerre. Elle explore dans son œuvre les thèmes de l'isolement, de la nature et de la condition humaine."
  },
  {
    id: 2,
    question: "Quel est le contexte historique du Mur Invisible ?",
    answer: "Le roman a été écrit après la Seconde Guerre mondiale dans l'Autriche d'après-guerre, marquée par la division et l'occupation. Le mur invisible symbolise les barrières créées par la guerre et la séparation."
  },
  {
    id: 3,
    question: "Quels sont les thèmes principaux du Mur Invisible ?",
    answer: "L'isolement, la solitude, la réconciliation avec la nature, la survie, la condition féminine, et la reconstruction après le trauma de la guerre."
  },
  {
    id: 4,
    question: "Comment la protagoniste s'adapte-t-elle à son isolement ?",
    answer: "Elle développe une nouvelle relation avec la nature, apprend à cultiver la terre, élève des animaux, et trouve une forme d'harmonie avec l'environnement naturel qui l'entoure."
  },
  {
    id: 5,
    question: "Quel est le rapport entre l'isolement physique et l'isolement psychologique dans le roman ?",
    answer: "Le mur invisible symbolise à la fois l'isolement physique et le trauma psychologique de la guerre. La protagoniste doit surmonter ces deux formes d'isolement pour survivre et trouver un sens à sa vie."
  }
]

// Haushofer - Vocabulaire
export const haushoferVocabulaire: VocabularyQuestion[] = [
  {
    id: 1,
    word: "Isolement",
    definition: "État de solitude ou de séparation du monde extérieur",
    options: [
      "La condition de vivre loin des villes",
      "État de solitude ou de séparation du monde extérieur",
      "Un sentiment de tristesse passager",
      "L'absence de communication avec les autres"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    word: "Trauma",
    definition: "Blessure psychologique causée par un événement bouleversant",
    options: [
      "Une blessure physique grave",
      "Blessure psychologique causée par un événement bouleversant",
      "Un sentiment de mélancolie",
      "Une réaction naturelle au changement"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    word: "Réconciliation",
    definition: "Retour à l'harmonie, à la paix après un conflit ou une séparation",
    options: [
      "Un accord commercial entre deux parties",
      "Retour à l'harmonie, à la paix après un conflit ou une séparation",
      "Le oubli d'un événement douloureux",
      "Un sentiment temporaire de bien-être"
    ],
    correctAnswer: 1
  }
]

// Canguilhem - Connaissance
export const canguilhemConnaissance: KnowledgeQuestion[] = [
  {
    id: 1,
    question: "Qui est Georges Canguilhem et quel est son domaine principal de recherche ?",
    answer: "Georges Canguilhem (1904-1995) est un philosophe français spécialisé en épistémologie, c'est-à-dire l'étude critique de la science. Il s'intéresse particulièrement à la philosophie des sciences biologiques."
  },
  {
    id: 2,
    question: "Quel est le concept central de 'La Connaissance de la vie' ?",
    answer: "Canguilhem propose que la vie ne peut être comprise que par elle-même, et que la connaissance scientifique doit prendre en compte l'perspective vitale. Il critique le réductionnisme mécanique."
  },
  {
    id: 3,
    question: "Comment Canguilhem distingue-t-il entre le 'normal' et le 'pathologique' ?",
    answer: "Le normal et le pathologique ne sont pas deux états distincts mais deux tendances de la vie. La maladie n'est pas une déviation de la norme mais une autre norme imposée par l'organisme face aux variations du milieu."
  },
  {
    id: 4,
    question: "Quel est le rôle de l'expérimentation dans la pensée de Canguilhem ?",
    answer: "L'expérimentation scientifique est centrale mais elle doit toujours être replacée dans le contexte vivant. La science doit respecter la complexité du vivant et ne pas le réduire à des mécanismes simples."
  },
  {
    id: 5,
    question: "Comment Canguilhem critique-t-il le mécanicisme en biologie ?",
    answer: "Il argue que réduire les phénomènes biologiques à des mécanismes simples ignore la particularité du vivant. La vie a des propriétés émergeantes que le mécanicisme ne peut pas expliquer."
  }
]

// Canguilhem - Vocabulaire
export const canguilhemVocabulaire: VocabularyQuestion[] = [
  {
    id: 1,
    word: "Épistémologie",
    definition: "Étude critique de la nature et de la validité de la connaissance scientifique",
    options: [
      "L'histoire des découvertes scientifiques",
      "Étude critique de la nature et de la validité de la connaissance scientifique",
      "L'application pratique des théories scientifiques",
      "L'étude des mathématiques pures"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    word: "Mécanicisme",
    definition: "Approche qui réduit tous les phénomènes à des principes méchaniques simples",
    options: [
      "L'étude des machines et de leur fonctionnement",
      "Approche qui réduit tous les phénomènes à des principes mécaniques simples",
      "Une théorie physique basée sur la mécanique quantique",
      "L'utilisation de la technologie dans la biologie"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    word: "Réductionnisme",
    definition: "Tendance à expliquer les phénomènes complexes par leurs composantes simples",
    options: [
      "La critique des théories scientifiques",
      "Tendance à expliquer les phénomènes complexes par leurs composantes simples",
      "L'effort pour simplifier les concepts complexes",
      "Une méthode de calcul mathématique"
    ],
    correctAnswer: 1
  }
]
