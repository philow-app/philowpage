"use client"

import type React from "react"
import { useState } from "react"

// Import de votre mise en page générale (menu, etc.)
import DashboardLayout from "@/components/dashboard-layout"

// Import des composants de l'interface (cartes, etc.)
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Import des icônes
import {
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Rocket,
  AlertTriangle,
  CheckCircle,
  BrainCircuit,
  Feather,
  Target,
  Layout,
  Microscope,
} from "lucide-react"

// Définition de la page complète
export default function MethodologiePage() {
  // État modifié pour ne gérer qu'une seule section ouverte à la fois (comportement d'accordéon)
  const [openSection, setOpenSection] = useState<string | null>("dissertation")

  // Logique modifiée pour l'accordéon
  const toggleSection = (sectionId: string) => {
    // Si on clique sur la section déjà ouverte, on la ferme. Sinon, on ouvre la nouvelle.
    setOpenSection(prevOpenSection => (prevOpenSection === sectionId ? null : sectionId))
  }

  // Ce sous-composant est utilisé pour créer les cartes dépliables
  const SectionToggle = ({
    id,
    title,
    icon: Icon,
    children,
    isOpen,
  }: {
    id: string
    title: string
    icon: any
    children: React.ReactNode
    isOpen: boolean
  }) => (
    <Card className="mb-4 overflow-hidden rounded-lg shadow-md last:mb-0">
      <CardHeader className="cursor-pointer transition-colors hover:bg-gray-50" onClick={() => toggleSection(id)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon className="h-7 w-7 text-blue-600" />
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
          </div>
          {isOpen ? (
            <ChevronDown className="h-6 w-6 text-gray-500" />
          ) : (
            <ChevronRight className="h-6 w-6 text-gray-500" />
          )}
        </div>
      </CardHeader>
      {/* Le contenu est affiché uniquement si la section est ouverte */}
      {isOpen && <CardContent className="pt-4 text-gray-700 leading-relaxed">{children}</CardContent>}
    </Card>
  )

  // Le rendu de la page commence ici
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header (inchangé) */}
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Fiche Méthodologique d'Excellence</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
            Votre guide complet pour la dissertation et le résumé
          </p>
        </div>

        {/* --- NOUVELLE DISPOSITION EN ACCORDÉON --- */}
        <div className="max-w-5xl mx-auto">
          <div className="border-t pt-8">
            <SectionToggle
              id="dissertation"
              title="Méthodologie Complète de la Dissertation"
              icon={BrainCircuit}
              isOpen={openSection === "dissertation"}
            >
              {/* Le contenu de la dissertation reste identique */}
              <div className="space-y-8">
                {/* 1. Architecture de la Pensée */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
                    <BrainCircuit className="h-6 w-6" />
                    1. L'Architecture de la Pensée (Le Brouillon)
                  </h3>
                  <p className="mb-6 text-gray-800 italic">
                    Cette phase est la plus cruciale. Un devoir est gagné ou perdu ici. Ne la négligez jamais.
                  </p>
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        🎯 Décoder le Sujet : L'Art de Lire entre les Lignes
                      </h4>
                      <p className="mt-2">
                        Ne lisez pas le sujet, interrogez-le. Un sujet n'est jamais une question neutre ; il est orienté
                        et contient des présupposés.
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          <strong>Identifier le présupposé :</strong> C'est l'idée implicite que le sujet vous demande
                          d'accepter. Votre rôle est de questionner ce lien.
                        </li>
                        <li>
                          <strong>Repérer la tension :</strong> Cherchez le conflit, le paradoxe. Cette tension est le
                          carburant de votre problématique.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        🗺️ Créer une Carte Mentale (Mind Map) : La Pensée en Arborescence
                      </h4>
                      <p className="mt-2">
                        Le cerveau ne pense pas de manière linéaire. La carte mentale est l'outil qui respecte le mieux
                        son fonctionnement. Elle vous libère de la tyrannie de la liste et vous permet de jeter toutes
                        vos idées sur le papier et de créer des connexions visuelles ensuite.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        🧭 Construire le Plan Dialectique et la Problématique
                      </h4>
                      <p className="mt-2">
                        C'est la mise en ordre de votre réflexion. Le plan dialectique (Thèse-Antithèse-Synthèse) n'est
                        pas un simple "pour/contre". C'est un cheminement qui montre la maturation de votre pensée.
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>La Thèse : La Doxa Éclairée.</strong> La réponse la plus évidente, mais formulée de
                          manière intelligente.
                        </li>
                        <li>
                          <strong>L'Antithèse : Le Moment Critique.</strong> Le "grain de sable" qui montre les limites
                          et illusions de la thèse.
                        </li>
                        <li>
                          <strong>La Synthèse : Le Dépassement (Aufhebung).</strong> PAS un compromis. C'est la création
                          d'une nouvelle perspective qui résout la contradiction.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2. Rédaction Stratégique */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-2">
                    <Feather className="h-6 w-6" />
                    2. La Rédaction Stratégique (La Copie)
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg">
                        L'Introduction : Un Contrat de Confiance en 5 Alinéas
                      </h4>
                      <div className="mt-2 space-y-3 bg-white p-4 rounded-lg">
                        <p>
                          <strong>1. Phrase d'accroche :</strong> Commencez par une phrase percutante (historique,
                          philosophique, littéraire ou paradoxale) qui capte l'attention et amène directement à la
                          réécriture du sujet.
                        </p>
                        <p>
                          <strong>2. Reformulation et définition des termes :</strong> Reformulez le sujet avec vos
                          propres mots pour montrer que vous avez saisi ses enjeux, puis définissez les termes clés pour
                          cadrer l'analyse.
                        </p>
                        <p>
                          <strong>3. Problématisation :</strong> Introduisez les tensions ou contradictions soulevées
                          par le sujet pour amener progressivement la question centrale.
                        </p>
                        <p>
                          <strong>4. Problématique :</strong> Posez clairement et directement la question fondamentale à
                          laquelle votre développement va répondre.
                        </p>
                        <p>
                          <strong>5. Annonce du corpus et du plan :</strong> Introduisez les œuvres et annoncez
                          brièvement les trois grandes parties de votre argumentation.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Le Développement : Une Architecture Invisible mais Solide
                      </h4>
                      <p className="mt-2">
                        Rappel clé : Chaque grande partie commence directement par un alinéa,{" "}
                        <strong>sans jamais écrire de titre</strong>. La structure doit être ressentie, pas affichée.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">La Transition : Une Affirmation Stratégique</h4>
                      <p className="mt-2">
                        Sa fonction n'est pas de poser une question, mais de montrer la maîtrise de votre progression.
                        C'est une affirmation de votre contrôle sur le raisonnement.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">La Conclusion : Le Point d'Orgue de la Symphonie</h4>
                      <p className="mt-2">
                        La conclusion est le moment où vous récoltez les fruits de votre travail. La technique de
                        réutilisation des transitions est puissante.
                      </p>
                      <p className="mt-2">
                        <strong>Réponse à la problématique :</strong> Soyez direct. "En réponse à notre problématique, il
                        apparaît donc clairement que..."
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Zooms et Conseils d'Excellence */}
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6" />
                    3. Zooms et Conseils d'Excellence
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="text-lg font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                        <Microscope className="h-5 w-5" />
                        Zoom : L'Art de la Confrontation d'Exemples
                      </h4>
                      <p>
                        <strong>Règle d'Or :</strong> Chaque sous-partie doit faire dialoguer les{" "}
                        <strong>trois œuvres</strong>. C'est non négociable.
                      </p>
                      <p className="mt-2">
                        <strong>Créer le Dialogue :</strong> Utilisez des formules pour :
                      </p>
                      <ul className="list-disc pl-6 text-sm mt-1">
                        <li>
                          <strong>Comparer :</strong> "De la même manière que Nemo..."
                        </li>
                        <li>
                          <strong>Opposer :</strong> "Là où l'expérience de Verne est marquée par la démesure..."
                        </li>
                        <li>
                          <strong>Théoriser :</strong> "Canguilhem nous offre la grille de lecture..."
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="text-lg font-semibold text-green-900 mb-2 flex items-center gap-2">
                        💡 Conseils Stratégiques de Rédaction
                      </h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          <strong>L'Ordre des Exemples (Technique 1-3-2) :</strong> Dans un sous-argument, commencez
                          par un exemple clair, placez au milieu le plus complexe, et terminez par votre exemple le
                          plus brillant.
                        </li>
                        <li>
                          <strong>Le Style :</strong> Variez la longueur des phrases. Utilisez un vocabulaire riche et
                          précis. Préférez la voix active.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 4. Structure Résumée */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                    <Layout className="h-6 w-6" />
                    4. Structure Résumée de la Dissertation
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded border bg-white">
                      <h4 className="font-semibold text-blue-600 mb-2">Introduction (en 5 alinéas)</h4>
                      <ul className="text-sm space-y-1">
                        <li>1. Accroche</li>
                        <li>2. Présentation du sujet + Définition des termes</li>
                        <li>3. Problématisation</li>
                        <li>4. Problématique</li>
                        <li>5. Annonce du plan</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded border bg-white">
                      <h4 className="font-semibold text-blue-600 mb-2">
                        Développement (en 3 parties, sans titres)
                      </h4>
                      <p className="text-sm">
                        Chaque partie contient : Annonce de l'argument, 2 sous-arguments (chacun avec 3 exemples
                        confrontés), et une transition stratégique.
                      </p>
                    </div>
                    <div className="p-4 rounded border bg-white">
                      <h4 className="font-semibold text-blue-600 mb-2">Conclusion (en 1 ou 2 alinéas)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Bilan du raisonnement</li>
                        <li>• Réponse claire et définitive à la problématique</li>
                        <li>• Ouverture (Optionnelle)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SectionToggle>

            <SectionToggle
              id="resume"
              title="La Méthodologie du Résumé de Texte (Centrale & CCINP)"
              icon={ClipboardList}
              isOpen={openSection === "resume"}
            >
              {/* Le contenu du résumé reste identique */}
              <div className="space-y-8 p-2">
                <p className="text-gray-600 italic">
                  Cet exercice évalue votre capacité à saisir l'architecture logique d'une pensée. La méthode qui suit
                  est conçue pour déconstruire méthodiquement le texte afin de le reconstruire en une synthèse fidèle,
                  concise et élégante.
                </p>

                {/* Étapes de la méthode détaillées */}
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Les 6 Étapes Clés Détaillées</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg">Étape 1 : La Lecture d'Imprégnation</h4>
                      <p className="mt-1">
                        <strong>Action :</strong> Lisez le texte une première fois, de manière fluide, sans stylo ni
                        surligneur. L'objectif est de vous laisser porter par le discours de l'auteur pour en saisir
                        l'essence.
                      </p>
                      <p className="mt-1">
                        <strong>Objectif :</strong> C'est une prise de contact. À la fin de cette lecture, vous devez
                        être capable de formuler en quelques mots sur votre brouillon : Quel est le{" "}
                        <strong>thème</strong> central ? Quel est le <strong>ton</strong> employé (polémique, didactique,
                        ironique...) ? Quelle est la <strong>thèse</strong>, c'est-à-dire l'idée principale que l'auteur
                        cherche à défendre ? Cette première intuition est votre point de départ.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Étape 2 : La Lecture Active au Surligneur</h4>
                      <p className="mt-1">
                        <strong>Action :</strong> Armé de votre code couleur, vous allez maintenant disséquer le texte.
                        Chaque couleur a une fonction précise pour cartographier la pensée de l'auteur. Soyez
                        systématique.
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                        <li>
                          <strong className="text-blue-600">Couleur 1 (Thèse et Idées Directrices) :</strong> Repérez
                          les phrases qui expriment l'idée principale et les arguments majeurs de chaque paragraphe.
                          C'est le squelette de l'argumentation.
                        </li>
                        <li>
                          <strong className="text-green-600">Couleur 2 (Arguments et Articulations) :</strong> Surlignez
                          les mots de liaison (mais, donc, car, en effet...) et les arguments secondaires qui viennent
                          étayer les idées directrices. C'est la structure logique.
                        </li>
                        <li>
                          <strong className="text-yellow-600">Couleur 3 (Exemples Illustratifs) :</strong> Marquez les
                          exemples concrets, les anecdotes, les statistiques que l'auteur utilise pour donner corps à
                          ses idées.
                        </li>
                        <li>
                          <strong className="text-red-600">Couleur 4 (Nuances et Oppositions) :</strong> Identifiez les
                          concessions ("certes...", "bien que..."), les réfutations d'idées adverses et les nuances
                          importantes. C'est ce qui révèle la complexité de la pensée.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Étape 3 : La Lecture de Synthèse Logique</h4>
                      <p className="mt-1">
                        <strong>Action :</strong> Relisez le texte une troisième fois. Cette lecture est rapide car votre
                        cerveau va naturellement suivre les chemins de couleur que vous avez tracés.
                      </p>
                      <p className="mt-1">
                        <strong>Objectif :</strong> Valider votre compréhension de la dynamique du texte. Le mouvement
                        est-il linéaire ? L'auteur part-il d'un constat pour aboutir à une solution ? Réfute-t-il une
                        thèse pour proposer la sienne ? Vous devez voir le film de l'argumentation se dérouler sous vos
                        yeux.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Étape 4 : Dégager la Structure au Brouillon</h4>
                      <p className="mt-1">
                        <strong>Action :</strong> Ne recopiez pas vos surlignages ! Le texte est votre réservoir. Sur le
                        brouillon, créez un plan schématique qui représente la fonction de chaque grande partie du
                        texte.
                      </p>
                      <p className="mt-1">
                        <strong>Objectif :</strong> Avoir un squelette clair pour votre rédaction. Ce plan doit être
                        ultra-synthétique et se concentrer sur le "rôle" de chaque bloc de texte, comme dans l'exemple
                        fourni. C'est la charpente de votre résumé.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Étape 5 : Le Premier Jet</h4>
                      <p className="mt-1">
                        <strong>Action :</strong> Lancez-vous dans la rédaction en suivant votre plan. Reformulez les
                        idées surlignées avec vos propres mots, en vous concentrant sur le respect scrupuleux de la
                        logique de l'auteur.
                      </p>
                      <p className="mt-1">
                        <strong>Objectif :</strong> Produire une version complète du résumé, fidèle au fond et à la
                        structure, sans la contrainte paralysante du nombre de mots. Il est normal que ce premier jet
                        soit trop long.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Étape 6 : Le Calibrage et le Polissage</h4>
                      <p className="mt-1">
                        <strong>Action :</strong> C'est l'étape de l'orfèvre. Comptez les mots. Ensuite, travaillez à
                        réduire le texte par passes successives.
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                        <li>
                          <strong>Réduction mécanique :</strong> "extrêmement important" devient "essentiel". "afin de"
                          devient "pour".
                        </li>
                        <li>
                          <strong>Réduction sémantique :</strong> "le processus par lequel les individus s'adaptent"
                          devient "l'adaptation".
                        </li>
                        <li>
                          <strong>Polissage :</strong> Assurez-vous que les phrases s'enchaînent de manière fluide. Les
                          mots de liaison sont-ils corrects ? Le style est-il clair et concis ?
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ... Reste du contenu du résumé (Conseils, Erreurs, Gestion du Temps) ... */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    ✅ Les Conseils d'Or et ❌ Les Erreurs Éliminatoires
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Conseils pour un Résumé d'Excellence
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-bold">🎯 Devenez un Détective de l'Énonciation</p>
                          <p className="text-sm mt-1">
                            Posez-vous la question clé : "Qui parle ?". Annotez les pronoms et la posture de l'auteur.
                            C'est votre boussole pour la rédaction.
                          </p>
                        </div>
                        <div>
                          <p className="font-bold">🔗 Soyez le Maître des Articulations Logiques</p>
                          <p className="text-sm mt-1">
                            Votre résumé doit révéler la charpente argumentative. La maîtrise des mots de liaison est la
                            preuve de votre compréhension.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Erreurs à Proscrire Absolument
                      </h4>
                      <div className="space-y-3 text-sm">
                        <p>
                          <strong>Le Contresens :</strong> La faute capitale de fond.
                        </p>
                        <div className="p-3 bg-red-100 rounded-md border border-red-300">
                          <p className="font-bold text-red-700">
                            ⚠️ LA FAUTE TECHNIQUE N°1 : La Rupture de l'Énonciation
                          </p>
                          <p className="mt-1">
                            INTERDICTION ABSOLUE d'écrire "Selon l'auteur...", "L'auteur explique que...". Vous devez
                            écrire <strong>À LA PLACE</strong> de l'auteur.
                          </p>
                        </div>
                        <p>
                          <strong>Le Non-Respect du Nombre de Mots :</strong> Sanctionné lourdement.
                        </p>
                        <p>
                          <strong>Le "Copier-Coller" de Phrases :</strong> L'exercice évalue la reformulation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4">
                    ⏱️ Gestion du Temps et ✒️ Secrets du Style
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-2">Pour CCINP (1h / 60 min)</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Imprégnation : 5 min</li>
                        <li>Lecture Active : 10 min</li>
                        <li>Synthèse Logique : 5 min</li>
                        <li>Structure : 5 min</li>
                        <li>Premier Jet : 15 min</li>
                        <li>Calibrage & Polissage : 20 min</li>
                      </ul>
                      <h4 className="font-bold mt-4 mb-2">Pour Centrale (1h30 / 90 min)</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Imprégnation : 10 min</li>
                        <li>Lecture Active : 15 min</li>
                        <li>Synthèse Logique : 5 min</li>
                        <li>Structure : 10 min</li>
                        <li>Premier Jet : 25 min</li>
                        <li>Calibrage & Polissage : 25 min</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Les 5 Secrets du Style Réussi</h4>
                      <ol className="list-decimal pl-5 text-sm space-y-1">
                        <li>
                          <strong>Neutralité Absolue :</strong> Vous êtes le porte-parole.
                        </li>
                        <li>
                          <strong>Respect de la Structure :</strong> Suivez le cheminement de pensée.
                        </li>
                        <li>
                          <strong>Maîtrise des Mots de Liaison :</strong> La clé de la logique.
                        </li>
                        <li>
                          <strong>Reformulation Intelligente :</strong> Gardez les concepts, changez les phrases.
                        </li>
                        <li>
                          <strong>Objectivité de l'Énonciation :</strong> Adoptez le ton du texte.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </SectionToggle>

            <SectionToggle
              id="temps"
              title="La Gestion du Temps par Concours : Votre Plan de Bataille"
              icon={Rocket}
              isOpen={openSection === "temps"}
            >
              {/* Le contenu de la gestion du temps reste identique */}
              <div className="space-y-8 p-2">
                <p className="text-center text-gray-600 italic">
                  Chaque concours est une épreuve unique. Votre succès dépend de votre capacité à adapter votre méthode
                  et votre rythme aux attentes spécifiques du jury. Voici la répartition stratégique finale, corrigée et
                  détaillée pour chaque concours.
                </p>

                {/* Carte pour Mines-Ponts */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    ⏱️ Concours Mines-Ponts (Épreuve de 3 heures)
                  </h3>
                  <p className="mb-4 text-gray-800">
                    <strong>Le défi :</strong> La densité. Une dissertation pure où la qualité et la profondeur de
                    l'introduction donnent le ton.
                    <br />
                    <strong>La clé du succès :</strong> Une introduction-démonstration, longue et riche.
                    <br />
                    <strong>Objectif de longueur pour l'introduction :</strong> 2 à 2 pages et demie. C'est un
                    investissement stratégique majeur.
                  </p>
                  <h4 className="font-semibold text-gray-800 mb-2">Répartition du temps (180 minutes) :</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Problématisation, Plan & Problématique (Brouillon) : 30 à 45 minutes.</strong>
                      <p className="text-sm italic pl-2">
                        Prenez ce temps pour construire une argumentation solide. C'est ici que vous structurez la
                        pensée qui nourrira votre longue introduction.
                      </p>
                    </li>
                    <li>
                      <strong>Rédaction de l'Introduction (Brouillon) : 15 minutes.</strong>
                      <p className="text-sm italic pl-2">
                        Rédigez intégralement cette pièce maîtresse pour vous assurer de sa cohérence et de sa densité.
                      </p>
                    </li>
                    <li>
                      <strong>Rédaction (Développement & Conclusion) : Environ 2 heures.</strong>
                      <p className="text-sm italic pl-2">
                        Le développement découle de votre plan. La conclusion doit être rapide et efficace.
                      </p>
                    </li>
                    <li>
                      <strong>Relecture : Au moins 5 minutes.</strong>
                      <p className="text-sm italic pl-2">Essentiel pour éliminer les fautes d'inattention.</p>
                    </li>
                  </ul>
                </div>

                {/* Carte pour Centrale-Supélec */}
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-green-900 mb-3">
                    ⏱️ Concours Centrale-Supélec (Épreuve de 4 heures)
                  </h3>
                  <p className="mb-4 text-gray-800">
                    <strong>Le défi :</strong> La polyvalence et la gestion de l'endurance sur deux exercices
                    distincts.
                    <br />
                    <strong>La clé du succès :</strong> Ne pas laisser le résumé déborder et être efficace sur une
                    dissertation plus ramassée.
                    <br />
                    <strong>Objectif de longueur pour l'introduction :</strong> 1 page et demie, grand maximum 2 pages.
                    La concision et la clarté priment.
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Partie 1 : Le Résumé de Texte (1 heure 30 minutes)
                    </h4>
                    <p className="text-sm italic mb-2 text-gray-700">
                      Soyez intraitable avec votre montre. À 1h30, vous devez passer à la dissertation, quoi qu'il
                      arrive.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Partie 2 : La Dissertation (2 heures 30 minutes / 150 minutes)
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        <strong>Problématisation & Plan (Brouillon) : 30 minutes maximum.</strong>
                        <p className="text-sm italic pl-2">
                          Soyez rapide et efficace. Votre plan doit être un squelette clair et fonctionnel.
                        </p>
                      </li>
                      <li>
                        <strong>Rédaction (Intro, Dev, Conclu) & Relecture : Environ 2 heures.</strong>
                        <p className="text-sm italic pl-2">
                          C'est un bloc de production intense. Rédigez l'introduction directement au propre si vous
                          êtes à l'aise, puis déroulez votre plan. Gardez impérativement 5-10 minutes à la fin for la
                          relecture.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Carte pour CCINP */}
                <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    ⏱️ Concours Commun INP (CCINP) (Épreuve de 4 heures)
                  </h3>
                  <p className="mb-4 text-gray-800">
                    <strong>Le défi :</strong> L'équilibre. Un résumé très rapide suivi d'une dissertation au format
                    long.
                    <br />
                    <strong>La clé du succès :</strong> Ne pas se laisser déstabiliser par la vitesse exigée pour le
                    résumé et aborder la dissertation avec la méthode d'une épreuve de 3h, mais avec le style concis de
                    Centrale.
                    <br />
                    <strong>Objectif de longueur pour l'introduction :</strong> 1 page et demie à 2 pages.
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Partie 1 : Le Résumé de Texte (1 heure)
                    </h4>
                    <p className="text-sm italic mb-2 text-gray-700">
                      C'est un véritable sprint. La méthode doit être parfaitement maîtrisée en amont pour tenir ce
                      délai très court.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Partie 2 : La Dissertation (3 heures / 180 minutes)
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        <strong>Problématisation & Plan (Brouillon) : 40 minutes.</strong>
                        <p className="text-sm italic pl-2">
                          Vous disposez de temps pour une analyse solide. Profitez-en pour bâtir une argumentation
                          riche.
                        </p>
                      </li>
                      <li>
                        <strong>Rédaction Intro (Brouillon) : 15 minutes.</strong>
                        <p className="text-sm italic pl-2">
                          Même si elle est plus courte qu'à Mines, la rédiger au brouillon reste une bonne assurance
                          qualité.
                        </p>
                      </li>
                      <li>
                        <strong>Rédaction (Développement & Conclusion) : 1 heure 50 minutes.</strong>
                        <p className="text-sm italic pl-2">
                          C'est un temps confortable pour rédiger proprement vos trois parties et votre conclusion.
                        </p>
                      </li>
                      <li>
                        <strong>Relecture : 15 minutes.</strong>
                        <p className="text-sm italic pl-2">
                          Avec une dissertation de 3h, vous avez le temps pour une relecture complète et soignée. Ne la
                          négligez pas, c'est ce qui vous distinguera.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SectionToggle>
          </div>
        </div>

        {/* Conseils méthodologiques épurés en bas */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 max-w-5xl mx-auto border border-amber-200">
          <h3 className="text-xl font-semibold text-amber-900 mb-6 text-center">Conseils Méthodologiques Essentiels</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Colonne 1 : Analyse des œuvres */}
            <div className="space-y-5">
              <h4 className="text-lg font-semibold text-amber-800 border-b border-amber-300 pb-2">Analyse des Œuvres</h4>
              
              <div>
                <p className="mb-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <strong>Lecture stratégique :</strong> Lisez chaque œuvre avec un carnet de citations. Notez immédiatement les passages qui illustrent des concepts philosophiques.
                </p>
              </div>
              
              <div>
                <p className="mb-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <strong>Fiches thématiques :</strong> Créez une fiche par grande notion (connaissance, vérité, science, expérience) avec des exemples tirés des trois œuvres.
                </p>
              </div>
              
              <div>
                <p className="mb-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <strong>Confrontation des œuvres :</strong> Identifiez les points d'accord et de désaccord entre Verne, Yourcenar et Canguilhem sur chaque concept clé.
                </p>
              </div>
              
              <div>
                <p className="mb-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <strong>Citations précises :</strong> Mémorisez 3-4 citations courtes et percutantes par œuvre. Préférez la qualité à la quantité.
                </p>
              </div>
            </div>

            {/* Colonne 2 : Méthodes de travail */}
            <div className="space-y-5">
              <h4 className="text-lg font-semibold text-amber-800 border-b border-amber-300 pb-2">Méthodes de Travail</h4>
              
              <div>
                <p className="mb-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <strong>Planning hebdomadaire :</strong> Consacrez 2h par semaine à la révision active : 1h pour les œuvres, 1h pour la méthode.
                </p>
              </div>
              
              <div>
                <p className="mb-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <strong>Entraînement progressif :</strong> Commencez par des analyses de textes courts, puis des dissertations partielles avant les sujets complets.
                </p>
              </div>
              
              <div>
                <p className="mb-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <strong>Auto-évaluation :</strong> Utilisez nos grilles de correction pour évaluer vos productions et identifier vos points d'amélioration.
                </p>
              </div>
              
              <div>
                <p className="mb-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <strong>Révisions ciblées :</strong> Révisez la méthode avant chaque devoir, les œuvres selon un planning rotatif pour maintenir la fraîcheur.
                </p>
              </div>
            </div>
          </div>

          {/* Section supplémentaire : Conseils d'excellence */}
          <div className="mt-8 pt-6 border-t border-amber-300">
            <h4 className="text-lg font-semibold text-amber-800 mb-4 text-center">Les Secrets de l'Excellence</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-amber-800 font-bold text-lg">1</span>
                </div>
                <p><strong>Régularité :</strong> 30 minutes de lecture quotidienne valent mieux que 3h le week-end. La constance crée l'excellence.</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-amber-800 font-bold text-lg">2</span>
                </div>
                <p><strong>Créativité :</strong> Établissez des liens inattendus entre les œuvres. Les correcteurs valorisent l'originalité de la pensée.</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-amber-800 font-bold text-lg">3</span>
                </div>
                <p><strong>Précision :</strong> Un exemple bien choisi et bien analysé vaut mieux que trois exemples superficiels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
