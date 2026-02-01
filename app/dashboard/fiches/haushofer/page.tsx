"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, User, Globe, Lightbulb, ThumbsUp } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { useState } from "react"

export default function VernePage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    biography: false,
    introduction: false,
    structure: false,
    summary: false,
    characters: false,
    citations: false,
    theme: false,
    definitions: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Navigation */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard/fiches">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-black hover:bg-transparent hover:text-black hover:font-bold"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux fiches
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Le mur invisible</h1>
          <p className="text-xl text-gray-600">Marlen Haushofer (1920-1970)</p>
          <p className="text-lg text-gray-500 italic">Roman de survie et d'introspection, publié en 1963</p>
        </div>

        {/* Biography Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader
          className="cursor-pointer hover:bg-blue-100 transition-colors"
          onClick={() => toggleSection("biography")}
        >
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <User className="h-5 w-5" />
            L'Auteur et son Époque : Une Voix Singulière de l'Après-Guerre
            <span className="ml-auto text-sm text-blue-600">
              {openSections.biography ? "▼" : "Cliquer pour voir"}
            </span>
          </CardTitle>
        </CardHeader>
        {openSections.biography && (
          <CardContent className="space-y-4">
            <p className="text-gray-800 leading-relaxed">
              <strong>Marlen Haushofer (1920-1970)</strong> est une écrivaine autrichienne dont l'œuvre, bien que moins médiatisée que celle de ses contemporains masculins, offre une perspective unique et souvent féministe sur la condition humaine et la relation à la nature. Née en 1920, elle a vécu les bouleversements majeurs du XXe siècle, incluant les deux Guerres Mondiales et leurs conséquences sociales et psychologiques. Ce contexte historique d'incertitude, de destruction et de reconstruction imprègne son écriture, souvent teintée de solitude et d'une exploration des fragilités humaines.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                Haushofer est reconnue pour son style précis, introspectif et sans fioritures, qui contraste avec l'ampleur des thèmes qu'elle aborde. Son travail peut être rattaché à une littérature d'anticipation dystopique, mais avec une forte dimension philosophique et psychologique. Elle s'intéresse particulièrement à la nature humaine face aux situations extrêmes, à la perte de repères et à la recherche de sens dans un monde désenchanté. Son expérience de femme dans une société encore très patriarcale de l'après-guerre nourrit implicitement sa critique des structures sociales et sa valorisation de l'autonomie individuelle, notamment celle de la narratrice face à une nature impitoyable.
              </p>
            </div>
            <p className="text-gray-800 leading-relaxed">
              <strong>Le Mur invisible</strong> est souvent considéré comme son chef-d'œuvre, où elle développe une réflexion existentielle sur la survie, l'animalité de l'homme et la redéfinition de la liberté en captivité. L'œuvre est emblématique d'une époque où l'individu, confronté aux crises (guerres, menaces écologiques naissantes), est amené à réévaluer sa place dans le monde et sa relation à un environnement qui peut basculer d'accueillant à menaçant. Haushofer, en déplaçant l'action loin des centres urbains et en se focalisant sur une figure féminine solitaire, met en lumière des expériences de la nature plus intimes, plus viscérales, et fondamentalement liées à la survie et à la relation au vivant non-humain.
            </p>
          </CardContent>
        )}
        </Card>

        {/* Introduction Générale Section */}
      <Card className="bg-red-50 border-red-200 mt-4"> {/* Added mt-4 for spacing */}
        <CardHeader
          className="cursor-pointer hover:bg-red-50 transition-colors"
          onClick={() => toggleSection("introduction")}
        >
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Introduction Générale : L'Existence Redéfinie Face à l'Invisible
            <span className="ml-auto text-sm text-red-600">
              {openSections.introduction ? "▼" : "Cliquer pour voir"}
            </span>
          </CardTitle>
        </CardHeader>
        {openSections.introduction && (
          <CardContent className="space-y-4">
            <p className="leading-relaxed">
              Marlen Haushofer, avec <strong>Le Mur invisible</strong> (originalement <em>Die Wand</em>, 1963), nous plonge dans une <strong>expérience de la nature</strong> radicalement différente de celle, héroïque et conquérante, que l'on trouve chez Jules Verne. Loin des explorations techniques et des découvertes géographiques, ce roman invite à une <strong>réflexion existentielle profonde</strong> sur la <strong>survie, l'isolement</strong> et la <strong>relation fondamentale de l'être humain avec un environnement subitement hostile et mystérieux</strong>.
            </p>
            <p className="leading-relaxed">
              L'œuvre se présente comme le journal intime d'une femme autrichienne anonyme, piégée du jour au lendemain dans une portion isolée des Alpes par un mur transparent et infranchissable, coupée de toute civilisation. Ce "mur invisible" n'est pas un obstacle à surmonter par l'ingéniosité technique, mais une <strong>condition inéluctable de son existence</strong>, la forçant à un retour brutal à une vie purement élémentaire. Le roman devient alors une <strong>méditation sur la capacité d'adaptation du vivant</strong>, la <strong>re-négociation des normes humaines</strong> face à l'urgence biologique, et la <strong>poésie tragique</strong> d'une vie dépouillée de tout superflu. C'est une enquête sur ce qui reste de l'humain quand tout ce qui le définit socialement lui est retiré, et comment la nature, dans sa version la plus brute, devient à la fois geôlier et unique source de subsistance.
            </p>
          </CardContent>
        )}
        </Card>

        {/* Key Characters Section */}
      <Card className="bg-emerald-50 border-emerald-200 mt-4"> {/* Added mt-4 for spacing */}
        <CardHeader
          className="cursor-pointer hover:bg-emerald-100 transition-colors"
          onClick={() => toggleSection("characters")}
        >
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Carte des Personnages et de leurs Expériences de la Nature
            <span className="ml-auto text-sm text-emerald-600">
              {openSections.characters ? "▼" : "Cliquer pour voir"}
            </span>
          </CardTitle>
        </CardHeader>
        {openSections.characters && (
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-105 cursor-pointer">
                <h4 className="font-semibold text-gray-900 mb-2">La Narratrice (non nommée)</h4>
                <p className="text-sm text-gray-700">
                  <strong>Rôle :</strong> Protagoniste principale et unique voix humaine du roman. Elle est celle qui tient le journal intime.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Profil avant le mur :</strong> Femme d'une quarantaine d'années, citadine, cultivée, intellectuelle (elle se décrit comme lisant beaucoup), habituée au confort moderne et à la vie sociale. Ses vacances au chalet de chasse étaient une échappée de cette routine.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Transformation :</strong> Elle incarne l'adaptation radicale de l'être humain. Initialement désespérée et démunie face à l'isolement, elle se transforme progressivement en une survivante autonome et ingénieuse. Elle apprend les gestes essentiels (chasse, cueillette, agriculture rudimentaire, soin des animaux), développant une connaissance viscérale et empirique de la nature.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Expérience de la Nature :</strong> Pour elle, la nature passe d'un décor de loisirs à un milieu existentiel total. Elle est à la fois sa geôlière (le mur) et sa source de vie (nourriture, abri). Elle découvre la cruauté implacable des lois naturelles (prédateurs, mort) mais aussi sa générosité fondamentale. Sa perception du temps et de la vie s'aligne sur les cycles naturels, et sa pensée devient plus instinctive, moins abstraite. Elle développe une connexion profonde et quasi symbiotique avec son environnement et les animaux.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-105 cursor-pointer">
                <h4 className="font-semibold text-gray-900 mb-2">Lynx</h4>
                <p className="text-sm text-gray-700">
                  <strong>Rôle :</strong> La chienne de la narratrice (ou de Hugo, mais elle reste avec la narratrice). C'est le premier et le plus constant de ses compagnons animaux.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Profil :</strong> Chienne fidèle, intelligente, instinctive. Elle est initialement un chien domestique mais retrouve rapidement ses instincts de chasseuse et de protectrice.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Importance pour la narratrice :</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>Compagnonnage affectif : Lynx est son principal soutien émotionnel, la seule présence vivante qui rompt la solitude totale. Leur lien est profond et mutuel.</li>
                    <li>Aide à la survie : La chienne est essentielle pour la chasse et la protection contre les autres animaux sauvages. Elle guide la narratrice par son flair et ses instincts.</li>
                    <li>Lien avec le monde naturel : Lynx agit comme une médiatrice entre la narratrice et la nature sauvage, l'aidant à en comprendre les codes et les dangers.</li>
                  </ul>
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Expérience de la Nature :</strong> Lynx représente l'instinct pur et l'adaptation naturelle. Sa vie est dictée par la survie dans ce nouvel environnement. Sa mort est un événement clé qui confronte la narratrice à l'inexorabilité de la nature et à une douleur insoutenable.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-105 cursor-pointer">
                <h4 className="font-semibold text-gray-900 mb-2">La Vache (et son veau)</h4>
                <p className="text-sm text-gray-700">
                  <strong>Rôle :</strong> Une jeune génisse errante que la narratrice trouve et domestique. Elle deviendra une source vitale de lait et de nourriture.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Profil :</strong> Un animal de ferme qui s'adapte à une vie semi-sauvage. Elle est une ressource, mais aussi une responsabilité.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Importance pour la narratrice :</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>Source de subsistance : Le lait qu'elle fournit est une nourriture essentielle, surtout après la naissance de son veau, prolongeant les réserves.</li>
                    <li>Responsabilité et routine : S'occuper de la vache (la traire, la nourrir, la protéger) donne un sens et une structure au quotidien de la narratrice.</li>
                    <li>Symbolique de la vie et de la fertilité : La naissance du veau est un signe d'espoir et de continuité de la vie dans ce monde clos.</li>
                  </ul>
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Expérience de la Nature :</strong> La vache symbolise la domestication nécessaire à la survie humaine, mais aussi la fragilité de cette domestication face aux aléas naturels (maladie, accident du veau). Elle rappelle à la narratrice le cycle de vie et de mort inhérent à la nature.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-105 cursor-pointer">
                <h4 className="font-semibold text-gray-900 mb-2">Le Chat (castré)</h4>
                <p className="text-sm text-gray-700">
                  <strong>Rôle :</strong> Un chat errant qui se joint aux animaux de la narratrice.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Profil :</strong> Un animal plus indépendant que la chienne, mais qui apporte aussi une présence.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Importance pour la narratrice :</strong> Apporte une compagnie silencieuse et contribue à la régulation des petits nuisibles (souris).
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Expérience de la Nature :</strong> Sa disparition (probablement tué par un prédateur) est une autre leçon sur la dureté du milieu naturel et la chaîne alimentaire impitoyable. Il souligne la vulnérabilité de chaque créature, y compris l'homme, dans ce nouvel environnement.
                </p>
              </div>
            </div>
          </CardContent>
        )}
        </Card>

        {/* Structure and Genre Section */}
      <Card className="bg-stone-50 border-stone-200 mt-4">
        <CardHeader
          className="cursor-pointer hover:bg-stone-100 transition-colors"
          onClick={() => toggleSection("structure")}
        >
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Structure et Genre de l'Œuvre : Un Récit Intime de Survie
            <span className="ml-auto text-sm text-stone-600">
              {openSections.structure ? "▼" : "Cliquer pour voir"}
            </span>
          </CardTitle>
        </CardHeader>
        {openSections.structure && (
          <CardContent className="space-y-4">
            <p className="leading-relaxed">
              <strong>Le Mur invisible</strong> est un roman qui se distingue par sa <strong>structure atypique et son genre narratif particulier</strong>, qui renforcent l'immersion du lecteur dans l'expérience isolée de la narratrice.
            </p>
            <p className="leading-relaxed">
              Le roman se présente comme un <strong>journal intime</strong>. Ce choix de narration a des implications majeures :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>Première personne et subjectivité radicale :</strong> Tout le récit est filtré par la perception et les pensées de la narratrice. Nous n'avons accès qu'à son monde intérieur et à ce qu'elle choisit de consigner. Cela crée une forte empathie et une intimité avec le personnage, mais limite aussi la connaissance du "pourquoi" de la situation.
              </li>
              <li>
                <strong>Linéarité et discontinuité :</strong> Bien que le récit soit chronologique (une succession de jours, de mois, puis d'années), il ne suit pas une structure chapitrée classique. C'est une <strong>succession continue de réflexions, d'observations et de descriptions</strong> sans découpage formel imposé. Parfois, de longues périodes peuvent être résumées, ou un événement apparemment insignifiant peut occuper plusieurs pages, reflétant le rythme et les préoccupations de la vie quotidienne de la survivante. Les "blancs" ou ellipses temporelles dans le récit traduisent le vide et la monotonie de l'isolement.
              </li>
              <li>
                <strong>Absence de dialogue externe :</strong> Puisque la narratrice est seule (hors de ses interactions avec les animaux), les dialogues sont intériorisés ou inexistants, renforçant l'atmosphère de solitude absolue.
              </li>
            </ul>
            <p className="leading-relaxed">
              Quant au genre, <strong>Le Mur invisible</strong> se situe à la croisée de plusieurs catégories :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>Roman de survie :</strong> Le cœur du récit est la lutte quotidienne de la narratrice pour subvenir à ses besoins fondamentaux (nourriture, abri, protection).
              </li>
              <li>
                <strong>Roman dystopique/post-apocalyptique :</strong> L'événement du mur, bien que jamais expliqué, plonge le monde connu dans une sorte d'apocalypse silencieuse. La dystopie réside dans la privation de liberté et l'incertitude du futur.
              </li>
              <li>
                <strong>Roman philosophique/existentiel :</strong> Au-delà de la survie physique, le texte explore des questions profondes sur le sens de la vie, la nature humaine, la solitude, la mort et la relation de l'homme à l'animal et au temps.
              </li>
              <li>
                <strong>Roman psychologique :</strong> L'accent est mis sur l'évolution de la psyché de la narratrice face à l'isolement extrême et aux défis.
              </li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="leading-relaxed">
                Cette structure de journal intime et la nature hybride du genre permettent à Haushofer de créer une œuvre profondément immersive et contemplative, où l'expérience subjective de la nature (sa beauté, sa cruauté, son indifférence, sa générosité) est au centre de la narration, contrastant fortement avec les descriptions objectives et techniques de Verne.
              </p>
            </div>
          </CardContent>
        )}
        </Card>

        {/* Summary Section */}
      <Card className="bg-amber-50 border-amber-200 mt-4">
        <CardHeader
          className="cursor-pointer hover:bg-amber-100 transition-colors"
          onClick={() => toggleSection("summary")}
        >
          <CardTitle className="flex items-center gap-2 text-amber-900">
            <Globe className="h-5 w-5" />
            Résumé du livre
            <span className="ml-auto text-sm text-amber-600">{openSections.summary ? "▼" : "Cliquer pour voir"}</span>
          </CardTitle>
        </CardHeader>
        {openSections.summary && (
          <CardContent className="space-y-6">
            <p className="leading-relaxed">
              Le roman <strong>Le Mur invisible</strong> est le <strong>journal intime</strong> d'une femme autrichienne d'une quarantaine d'années, dont l'identité ne nous est jamais révélée. Le récit, sans découpage en chapitres, retrace son expérience de la solitude absolue après un événement cataclysmique et inexpliqué.
            </p>
            <p className="leading-relaxed">
              L'histoire débute alors que la narratrice accompagne son cousin Hugo et sa femme Luise pour quelques jours de vacances dans un chalet de chasse isolé, au cœur des Alpes autrichiennes. Hugo et Luise partent un matin en randonnée vers le village voisin et ne reviennent pas. D'abord intriguée, puis inquiète, la narratrice attend. Le lendemain matin, elle décide de prendre la voiture pour aller à leur recherche. C'est alors qu'elle bute sur un obstacle invisible : la voiture s'arrête net, et en explorant, elle découvre une <strong>paroi transparente et infranchissable</strong> qui s'étend à perte de vue. Le mur est parfaitement lisse, incolore et indétectable visuellement, mais il l'emprisonne dans une zone délimitée de la montagne, incluant le chalet, un petit ruisseau, une prairie et une partie de la forêt.
            </p>
            <p className="leading-relaxed">
              Elle essaie de comprendre, jette des objets contre le mur qui tombent sans le traverser, hurle sans écho. Il n'y a <strong>aucun signe de vie humaine au-delà du mur</strong>. Les autres animaux (oiseaux, insectes, etc.) semblent s'y heurter et mourir instantanément, ou éviter la zone. Seuls les animaux présents <strong>à l'intérieur</strong> de l'enceinte semblent avoir survécu. Rapidement, elle réalise qu'elle est probablement la <strong>dernière survivante humaine</strong> dans cette portion du monde. Cette prise de conscience la submerge d'abord de désespoir et de sidération.
            </p>
            <p className="leading-relaxed">
              Face à cette réalité implacable, la narratrice est contrainte d'adopter un <strong>mode de vie purement animal et instinctif</strong>, centré sur la survie. Elle apprend à chasser, à cueillir, à cultiver un petit jardin. Le temps perd son sens habituel et se mesure désormais aux cycles de la nature : les saisons, la croissance des plantes, les naissances des animaux.
            </p>
            <p className="leading-relaxed">
              Elle n'est pas totalement seule. Elle est accompagnée d'une <strong>chienne, Lynx</strong>, qui lui est restée fidèle et qu'elle a trouvée avec son cousin. Plus tard, une <strong>vache</strong> errante (qui se révélera être une jeune génisse) et un <strong>chat</strong> (castré) viennent se joindre à elle. Ces animaux deviennent ses <strong>uniques compagnons</strong> et la forcent à rester ancrée dans le présent, à prendre soin d'eux et à maintenir une forme de routine. La relation avec Lynx est particulièrement forte ; la chienne est un lien précieux avec le monde du vivant et un soutien émotionnel indispensable. Elle se met à les désigner par des surnoms, à leur parler, et observe avec une acuité nouvelle leurs comportements et leur autonomie.
            </p>
            <p className="leading-relaxed">
              Le quotidien de la narratrice est rythmé par les tâches de survie :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                La recherche de nourriture : Elle apprend à cueillir des baies, des champignons, cultive des pommes de terre. La chasse devient une nécessité pour la viande et les peaux.
              </li>
              <li>
                L'entretien du chalet : Elle répare, nettoie, assure le chauffage et la protection contre les intempéries.
              </li>
              <li>
                La gestion des animaux : Elle trait la vache, élève son veau, prend soin de la chienne et du chat, les protège des dangers de la nature sauvage (loups, intempéries).
              </li>
              <li>
                L'adaptation aux saisons : Chaque saison apporte son lot de défis et de ressources. L'hiver est particulièrement rude, exigeant des provisions et une grande résilience.
              </li>
            </ul>
            <p className="leading-relaxed">
              Au fil des années (le journal couvre environ trois ans), la narratrice développe une <strong>connaissance intime et viscérale de la nature</strong>. Elle observe attentivement la faune et la flore, apprend leurs rythmes, leurs interdépendances. Elle abandonne progressivement toute illusion de retour à la civilisation. Ses compétences intellectuelles et culturelles, qu'elle valorisait autrefois, perdent de leur pertinence. Lire des livres lui semble dérisoire face à l'urgence de la survie. Elle note l'évolution de sa propre pensée, qui se rapproche de celle des animaux, plus ancrée dans le concret et l'instinct.
            </p>
            <p className="leading-relaxed">
              Plusieurs événements tragiques ponctuent son isolement, renforçant sa solitude et sa conscience de la précarité de la vie :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                La <strong>mort de son chat</strong> : Le chat disparaît un jour, et elle soupçonne qu'il a été tué par un rapace, soulignant la cruauté implacable de la chaîne alimentaire.
              </li>
              <li>
                La <strong>mort de son veau</strong> : Le veau, né de la vache, meurt après une chute accidentelle, provoquant une douleur profonde chez la narratrice qui avait investi beaucoup d'affection et d'espoir en lui. Elle réalise que ses efforts de domestication sont toujours à la merci des aléas naturels.
              </li>
              <li>
                La <strong>mort de Lynx</strong> : Sa chienne adorée est tuée par un prédateur (probablement un loup ou un renard). C'est la perte la plus douloureuse, car Lynx représentait son dernier lien affectif et sa connexion à l'humanité. Cette perte la plonge dans un abîme de désespoir et remet en question son désir de survivre.
              </li>
            </ul>
            <p className="leading-relaxed">
              Ces pertes la confrontent directement à la <strong>brutalité de la nature</strong> et à sa propre vulnérabilité. Elle doit constamment lutter contre le découragement et l'absurdité de sa situation. Paradoxalement, c'est cette immersion totale dans la nature qui lui permet de trouver un sens nouveau à son existence, au-delà des conventions sociales. Elle développe une forme de <strong>sagesse primitive</strong>, une acceptation de son destin et une profonde connexion avec le cycle vie-mort de l'écosystème.
            </p>
            <p className="leading-relaxed">
              Le journal se termine brusquement, en plein milieu d'une phrase, laissant le destin final de la narratrice incertain. Cette fin ouverte renforce le sentiment d'isolement et de l'absurdité de sa situation, mais aussi la <strong>persistance de la vie</strong> même dans les conditions les plus extrêmes. Le roman est une réflexion poignante sur la survie, la solitude et la transformation de l'être humain face à l'énigme d'un monde coupé.
            </p>
          </CardContent>
        )}
        </Card>

        {/* Analysis Section */}
      <Card className="bg-blue-50 border-blue-200 mt-4">
        <CardHeader
          className="cursor-pointer hover:bg-blue-100 transition-colors"
          onClick={() => toggleSection("theme")}
        >
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <ThumbsUp className="h-5 w-5" />
            Axes d’analyses
            <span className="ml-auto text-sm text-blue-600">{openSections.theme ? "▼" : "Cliquer pour voir"}</span>
          </CardTitle>
        </CardHeader>
        {openSections.theme && (
          <CardContent className="space-y-4">
            <p className="leading-relaxed">
              Le roman <strong>Le Mur invisible</strong> de Marlen Haushofer ne se contente pas de situer son récit dans la nature ; il en fait le laboratoire d'une <strong>expérience existentielle radicale</strong>, interrogeant les fondements de l'identité, de la société et du rapport à soi. Pour des étudiants de Prépa, une analyse technique et approfondie de cette thématique permet d'aborder des concepts philosophiques, écologiques et féministes de manière nuancée.
            </p>

            {/* Axe 1 */}
            <details className="group border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <summary className="font-medium text-gray-800 cursor-pointer list-none">
                <div className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold text-lg">Axe 1 :</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700 leading-relaxed">
                      La Nature comme Matrice d'une (Re)configuration du Sujet : Du Dépouillement à l'Authenticité
                    </p>
                    <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                      Cliquez pour voir l'explication →
                    </div>
                  </div>
                </div>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                <p className="text-gray-800 leading-relaxed">
                  Cet axe explore comment l'immersion forcée dans un environnement naturel dénué de civilisation contraint la narratrice à une régression salutaire, la menant à une refondation de son être.
                </p>
                <h5 className="font-semibold text-gray-900 mt-4">La Dissolution des Identités Sociales et Culturelles Face à l'Impératif Biologique.</h5>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    L'abolition du nom et des rôles sociaux : La narratrice, en perdant son nom et toute interaction humaine, se délie des étiquettes imposées par la société. Elle n'est plus "épouse", "mère", "citadine", mais une <strong>entité indéfinie</strong>, confrontée à l'essence brute de la survie. Cette perte du nom, loin d'être un signe d'anéantissement, marque le début d'une libération des assignations sociales, comme le souligne la narratrice : "Qu'est-ce qu'un nom quand aucune autre personne ne peut le prononcer ?" C'est une <strong>tabula rasa identitaire</strong> qui s'opère. 📝
                  </li>
                  <li>
                    La dévaluation des savoirs académiques au profit de l'intelligence pratique : L'éducation bourgeoise (arithmétique, histoire) est rendue caduque par l'urgence du quotidien. La narratrice se qualifie de "dilettante", une figure de l'inaptitude moderne face aux exigences archaïques. Ce constat critique une civilisation qui a déconnecté l'individu des <strong>compétences vitales</strong>. Sa reconnexion à la nature la transforme en autodidacte, faisant d'elle son "propre professeur", une illustration de la <strong>résilience épistémique</strong>. 🌱
                  </li>
                  <li>
                    Le corps comme instrument de survie et lieu de réappropriation : Le récit est un témoignage cru des défis physiques (froid, faim, blessures, maladie). Le corps n'est plus un objet de regard ou d'esthétique, mais une <strong>machine fonctionnelle</strong> ; ses mains deviennent "des outils". Cette exigence physique révèle une force insoupçonnée, transformant la vulnérabilité en une <strong>puissance corporelle</strong> inattendue. La narratrice se défait progressivement des injonctions de genre liées à l'apparence physique, son corps amaigri et sans formes affirmant une nouvelle neutralité. 💪
                  </li>
                </ul>
                <h5 className="font-semibold text-gray-900 mt-4">L'Animalité comme Archétype et Voie d'Accès à une Authentique Communauté du Vivant.</h5>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    La temporalité organique contre l'accélération humaine : Le temps n'est plus une construction sociale régie par le "productivisme" ou le "consumérisme", mais une immersion dans les <strong>cycles naturels</strong> : diurne/nocturne, saisons, rythmes animaux. Cette adoption d'une "temporalité de la nature" est perçue comme une source de "liberté et de bonheur", un retour à une <strong>existence désaliénée</strong>. 🕰️
                  </li>
                  <li>
                    La symbiose avec le règne animal : Les animaux (Lynx, la vache, les chats) dépassent le simple rôle de "compagnons" pour devenir des <strong>co-existants essentiels</strong>. Leur pragmatisme, leur absence de jugement et leur ancrage dans le présent offrent à la narratrice un miroir non déformant. L'empathie qu'elle développe, allant jusqu'à se priver pour les chevreuils affamés, témoigne d'une <strong>redéfinition de l'altérité</strong>. Elle les perçoit comme des maîtres spirituels, soulignant que "un homme ne peut jamais devenir un animal, il passe à côté de l'animalité pour sombrer dans l'abîme", ce qui déconstruit l'anthropocentrisme. 🐾
                  </li>
                  <li>
                    Vers une identité post-genrée : Au contact de la nature, la narratrice perd la "conscience d'être une femme", se sentant parfois "enfant", "jeune homme" ou "personne très âgée, sans sexe défini". Cette <strong>fluidité identitaire</strong> suggère une libération des carcans de genre, une <strong>transmutation de l'être</strong> au-delà des catégories binaires imposées par la société. L'absence de l'Autre masculin est explicitement perçue comme une condition de cette évolution. 🚻
                  </li>
                </ul>
              </div>
            </details>

            {/* Axe 2 */}
            <details className="group border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <summary className="font-medium text-gray-800 cursor-pointer list-none">
                <div className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold text-lg">Axe 2 :</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700 leading-relaxed">
                      Le Mur : Une Frontière Philosophique et Écoféministe Révélant les Maux de la Civilisation
                    </p>
                    <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                      Cliquez pour voir l'explication →
                    </div>
                  </div>
                </div>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                <p className="text-gray-800 leading-relaxed">
                  Le "mur invisible", entité fantastique par excellence, agit comme un dispositif narratif pour déployer une critique systémique de la société humaine et de ses rapports de domination, notamment de genre et de la nature.
                </p>
                <h5 className="font-semibold text-gray-900 mt-4">Le Mur comme Hypothèse d'une Apocalypse Rédemptrice : Rupture et Critique Sociétale.</h5>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    L'effondrement comme libération du "délire politique" : La narratrice ne déplore pas la disparition de la civilisation, la considérant comme l'"ultime manifestation du délire politique". Le chaos au-delà du mur n'engendre "aucun regret véritable". Cette perspective post-apocalyptique opère un <strong>renversement des valeurs</strong>, où la catastrophe devient un prélude à une possible régénération individuelle et à une critique radicale de la société de consommation. 💥
                  </li>
                  <li>
                    La critique du productivisme et du consumérisme : Le mode de vie antérieur de la narratrice est perçu comme "insuffisant", marqué par un désir insatiable de "vouloir plus". Le roman expose une <strong>société malade de son excès</strong>, où le temps est dicté par des logiques vides de sens. La solitude forcée permet une prise de conscience de cette <strong>aliénation consumériste</strong>. 🛍️
                  </li>
                  <li>
                    L'équation "Mensch = Mann = Mord" et la violence masculine : L'irruption de l'homme inconnu, qui tue le chien et le taureau sans motif, est une actualisation terrifiante de la phrase "Mensch = Mann = Mord". Cela symbolise le retour d'une <strong>violence intrinsèque au masculin</strong> dans le récit de Haushofer, qui anéantit la "paix" du havre solitaire de la narratrice. Le mur, par sa fonction protectrice, est implicitement une barrière contre cette toxicité masculine. ⚔️
                  </li>
                </ul>
                <h5 className="font-semibold text-gray-900 mt-4">L'Écoféminisme du Mur : Réinventer le Monde Loin de la Domination Patriarcale.</h5>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Le mur comme espace de rébellion féministe : La paroi invisible n'est pas qu'une prison physique ; elle est un <strong>espace-refuge</strong> où la narratrice échappe aux "murs visibles" de la société patriarcale. Cette "claustration" devient la condition d'une "liberté inespérée" face à des impératifs genrés ("Kinder – Küche – Kirche") et une "dépendance" masculine. La solitude est le ferment d'une <strong>autonomie retrouvée</strong>. 🕊️
                  </li>
                  <li>
                    La charge mentale et émotionnelle : une condition féminine universelle : Le texte explore la "charge mentale et émotionnelle" inhérente aux femmes, celle d'être "des mères" au sens large, soucieuses du bien-être d'autrui au détriment du leur. Même dans son isolement, la narratrice se préoccupe constamment de ses animaux. Cette observation, partagée silencieusement par les femmes de l'ancien monde, révèle un <strong>fardeau invisible et universel</strong> du genre. 🧠
                  </li>
                  <li>
                    La nature comme alternative utopique (et anti-utopique) : Le "microcosme" de la vallée est une tentative fragile d'établir une "communauté" basée sur la "réciprocité du besoin", loin de la "compétition" et des "dispositifs juridiques" de l'ancien monde. C'est une <strong>utopie écologique</strong> où l'ordre naturel prime. Cependant, l'œuvre est aussi une anti-utopie, car cette nouvelle "rationalité" est conquise dans la douleur et ne garantit pas une fin heureuse, interrogeant la viabilité même d'une telle alternative. 🌿
                  </li>
                </ul>
              </div>
            </details>

            {/* Axe 3 */}
            <details className="group border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <summary className="font-medium text-gray-800 cursor-pointer list-none">
                <div className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold text-lg">Axe 3 :</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700 leading-relaxed">
                      L'Écriture : Outil de Survie Psychique et Méta-Discours sur l'Expérience du Réel
                    </p>
                    <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                      Cliquez pour voir l'explication →
                    </div>
                  </div>
                </div>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                <p className="text-gray-800 leading-relaxed">
                  Cet axe analyse la fonction intrinsèque de l'acte d'écrire pour la narratrice, non seulement comme un moyen de préserver sa santé mentale, mais aussi comme une exploration de la nature même de la perception et de la mémoire dans un monde déserté.
                </p>
                <h5 className="font-semibold text-gray-900 mt-4">L'Écriture comme Ancrage Contre la Folie et la Dissolution du Moi.</h5>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Le journal comme nécessité existentielle : Le journal n'est pas un acte littéraire mais une "contrainte", "le seul moyen de ne pas perdre la raison". Il est un <strong>exutoire thérapeutique</strong>, une "assurance de sa propre réalité" face à la "dissolution" de son identité. L'écriture devient une forme de <strong>structuration du psychisme</strong> en l'absence d'interactions sociales. ✍️
                  </li>
                  <li>
                    La réflexivité comme moteur narratif : Le roman, dépourvu d'une "cascade événementielle", tire sa substance de l'"activité mentale" de la narratrice : angoisses, questionnements, retours en arrière. Le "matériau narratif est avant tout un matériau réflexif", transformant l'isolement en un <strong>laboratoire de l'introspection</strong>. Cette écriture du flux de conscience invite le lecteur à une "cause commune avec un personnage diffracté en alter ego". 🤔
                  </li>
                  <li>
                    La quête de sens dans un monde déserté : L'écriture permet à la narratrice de "conserver une trace de soi" et de s'interroger sur le "non-lieu" dévolu à la femme dans la société. Le journal est une tentative de donner un sens à son expérience extrême, même si le "résultat est vain" face à l'inaccessibilité de l'Autre. C'est une <strong>recherche anthropologique</strong> personnelle menée par l'autrice à travers son personnage. 🌍
                  </li>
                </ul>
                <h5 className="font-semibold text-gray-900 mt-4">Le Paysage Intériorisé : Entre Réminiscence, Fantasme et Transcendance.</h5>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Les paysages de l'inconscient : Les descriptions alpestres, bien que s'inspirant de lieux réels, sont "recomposées" et fonctionnent comme des "projections de signes provenant de l'inconscient". La forêt, notamment, est un "élément féminin" et une source de "pulsations difficiles à prévoir et à contrôler". Le paysage n'est pas qu'un décor ; il est un <strong>paysage psychanalytique</strong>, miroir du "mal-être profond" de l'héroïne. 🏞️
                  </li>
                  <li>
                    L'ambivalence symbolique de la nature : La nature est constamment "ambivalente" : lieu de "l'idylle" et de la "mort", "utérus" et "tombe" à la fois. Cette <strong>dualité profonde</strong> reflète la complexité de l'existence et la perception d'une force primordiale qui contient à la fois la vie et sa fin. C'est une illustration d'un <strong>panthéisme existentiel</strong>, où le sacré se manifeste dans le cycle naturel. 🔄
                  </li>
                  <li>
                    La suspension du temps et la quête transcendantale : Inspirée par Heidegger, Haushofer confère au roman un "flou temporel" et une "absence de cadrage topographique" qui concourent à une "dimension transcendantale intemporelle". Le récit n'est pas daté, créant un "no man's land temporel" qui universalise l'expérience. L'écriture est le moyen de cette <strong>communion avec l'au-delà du monde réel</strong>, offrant une forme de "réconfort" face au "nihilisme" ambiant. 🌌
                  </li>
                </ul>
              </div>
            </details>
          </CardContent>
        )}
        </Card>

        {/* Section: Définitions des Termes */}
      <Card className="mt-4">
        <CardHeader
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => toggleSection("definitions")}
        >
          <CardTitle className="flex items-center gap-2 text-2xl font-serif">
            <Lightbulb className="h-6 w-6 text-blue-500" />
            Définitions des Termes
            <span className="ml-auto text-sm text-gray-600">
              {openSections.definitions ? "▼" : "Cliquer pour voir"}
            </span>
          </CardTitle>
        </CardHeader>
        {openSections.definitions && (
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            <div>
              <p><strong className="text-gray-900">Isolement :</strong> État de solitude forcée, de rupture avec tout lien social.</p>
              <p><strong className="text-gray-900">Relation fondamentale :</strong> Lien essentiel et structurant entre deux entités.</p>
              <p><strong className="text-gray-900">Condition inéluctable :</strong> Situation ou destin fatal, dont on ne peut se soustraire.</p>
              <p><strong className="text-gray-900">Poésie tragique :</strong> Dimension esthétique et émotionnelle d'une situation de souffrance ou de destin funeste.</p>
              <p><strong className="text-gray-900">Littérature d'anticipation dystopique :</strong> Genre littéraire explorant une société future indésirable, souvent oppressive.</p>
              <p><strong className="text-gray-900">Dimension philosophique :</strong> Aspect d'une œuvre abordant des questions ontologiques ou éthiques.</p>
              <p><strong className="text-gray-900">Dimension psychologique :</strong> Analyse des processus mentaux, des émotions et des comportements des personnages.</p>
              <p><strong className="text-gray-900">Nature humaine :</strong> Ensemble des caractéristiques universelles et innées de l'être humain.</p>
              <p><strong className="text-gray-900">Recherche de sens :</strong> Quête de signification à l'existence face à l'absurdité ou au vide.</p>
              <p><strong className="text-gray-900">Monde désenchanté :</strong> Vision d'un univers privé de transcendance, de magie ou d'illusions.</p>
              <p><strong className="text-gray-900">Société patriarcale :</strong> Système social où les hommes détiennent le pouvoir et l'autorité.</p>
              <p><strong className="text-gray-900">Autonomie individuelle :</strong> Capacité d'un individu à s'auto-déterminer et à agir par lui-même.</p>
              <p><strong className="text-gray-900">Animalité de l'homme :</strong> Référence aux instincts primaires et aux comportements archaïques de l'être humain.</p>
              <p><strong className="text-gray-900">Redéfinition de la liberté :</strong> Reconsidération du concept de liberté en fonction de nouvelles contraintes ou opportunités.</p>
              <p><strong className="text-gray-900">Chef-d'œuvre :</strong> Œuvre majeure et exemplaire, reconnue pour sa qualité artistique.</p>
              <p><strong className="text-gray-900">Rythmes viscéraux :</strong> Fonctions biologiques profondes et instinctives du corps.</p>
              <p><strong className="text-gray-900">Genre narratif :</strong> Catégorie typologique structurant les formes de récit (roman, nouvelle, etc.).</p>
              <p><strong className="text-gray-900">Journal intime :</strong> Récit personnel et chronologique des pensées et événements vécus par l'auteur.</p>
              <p><strong className="text-gray-900">Première personne :</strong> Mode de narration où le récit est énoncé par un personnage-narrateur ("je").</p>
              <p><strong className="text-gray-900">Subjectivité radicale :</strong> Point de vue entièrement déterminé par la perception et les émotions d'un seul individu.</p>
              <p><strong className="text-gray-900">Linéarité :</strong> Progression chronologique continue du récit.</p>
              <p><strong className="text-gray-900">Discontinuité :</strong> Absence de succession régulière, présence de ruptures ou d'interruptions.</p>
              <p><strong className="text-gray-900">Ellipses temporelles :</strong> Omissions volontaires de périodes de temps dans le récit.</p>
              <p><strong className="text-gray-900">Dystopie :</strong> Contre-utopie, représentation d'une société future négative et aliénante.</p>
              <p><strong className="text-gray-900">Non-lieu :</strong> Espace abstrait ou dénué de signification identitaire ou sociale.</p>
              <p><strong className="text-gray-900">Recherche anthropologique :</strong> Étude des dimensions humaines, sociales et culturelles d'une situation.</p>
              <p><strong className="text-gray-900">Paysage psychanalytique :</strong> Représentation d'un paysage reflétant des dynamiques inconscientes ou psychiques.</p>
              <p><strong className="text-gray-900">Pulsations difficiles à prévoir :</strong> Manifestations instinctives ou émotionnelles imprévisibles.</p>
              <p><strong className="text-gray-900">Flux de conscience :</strong> Technique narrative transcrivant le flot ininterrompu des pensées et perceptions.</p>
              <p><strong className="text-gray-900">Laboratoire de l'introspection :</strong> Contexte propice à une exploration approfondie de sa vie intérieure.</p>
              <p><strong className="text-gray-900">Personnage diffracté en alter ego :</strong> Personnage dont l'expérience est perçue comme un reflet de celle du lecteur.</p>
            </div>
            <div>
              <p><strong className="text-gray-900">Post-apocalyptique :</strong> Genre décrivant le monde après une catastrophe civilisationnelle majeure.</p>
              <p><strong className="text-gray-900">Roman de survie :</strong> Récit axé sur les stratégies et défis de la subsistance en milieu hostile.</p>
              <p><strong className="text-gray-900">Roman philosophique :</strong> Œuvre littéraire explorant des idées ou concepts philosophiques.</p>
              <p><strong className="text-gray-900">Roman psychologique :</strong> Récit centré sur l'exploration de la vie intérieure et de la psyché des personnages.</p>
              <p><strong className="text-gray-900">Transformation :</strong> Changement profond et durable de la nature ou de la condition d'un être.</p>
              <p><strong className="text-gray-900">Connaissance viscérale et empirique :</strong> Savoir acquis par l'expérience directe et intuitive, non théorique.</p>
              <p><strong className="text-gray-900">Cruauté implacable :</strong> Caractère absolu et inévitable d'une force destructrice ou douloureuse.</p>
              <p><strong className="text-gray-900">Générosité fondamentale :</strong> Disposition essentielle à donner ou à pourvoir aux besoins.</p>
              <p><strong className="text-gray-900">Connexion quasi symbiotique :</strong> Lien très étroit, bénéfique pour les deux parties, proche d'une symbiose biologique.</p>
              <p><strong className="text-gray-900">Instinct pur :</strong> Comportement inné, non acquis et non modifié par l'apprentissage.</p>
              <p><strong className="text-gray-900">Adaptation naturelle :</strong> Processus par lequel un être vivant s'ajuste à son milieu de manière spontanée.</p>
              <p><strong className="text-gray-900">Inexorabilité :</strong> Caractère de ce qui ne peut être infléchi, une fatalité.</p>
              <p><strong className="text-gray-900">Domestication :</strong> Processus par lequel l'homme soumet et élève des animaux pour ses besoins.</p>
              <p><strong className="text-gray-900">Fragilité de la domestication :</strong> Vulnérabilité du contrôle humain sur les forces de la nature.</p>
              <p><strong className="text-gray-900">Chaîne alimentaire impitoyable :</strong> Succession des relations trophiques, où la prédation est inévitable.</p>
              <p><strong className="text-gray-900">Expérience existentielle radicale :</strong> Confrontation profonde et dénuée de concessions avec les questions de l'être.</p>
              <p><strong className="text-gray-900">Régression salutaire :</strong> Retour à un état antérieur (souvent primitif) bénéfique pour la survie psychique ou physique.</p>
              <p><strong className="text-gray-900">Refondation de l'être :</strong> Reconstruction des fondements de l'identité personnelle.</p>
              <p><strong className="text-gray-900">Tabula rasa identitaire :</strong> Situation de table rase, d'effacement complet des repères identitaires antérieurs.</p>
              <p><strong className="text-gray-900">Résilience épistémique :</strong> Capacité à développer de nouvelles formes de savoir et d'apprentissage face à l'adversité.</p>
              <p><strong className="text-gray-900">Puissance corporelle :</strong> Manifestation de la force et des capacités physiques du corps.</p>
              <p><strong className="text-gray-900">Temporalité organique :</strong> Rythme de vie dicté par les cycles naturels et biologiques.</p>
              <p><strong className="text-gray-900">Productivisme :</strong> Système axé sur l'augmentation continue de la production.</p>
              <p><strong className="text-gray-900">Consumérisme :</strong> Tendance à privilégier la consommation de biens et services.</p>
              <p><strong className="text-gray-900">Dualité profonde :</strong> Coexistence de deux aspects opposés ou contradictoires au sein d'une même entité.</p>
              <p><strong className="text-gray-900">Panthéisme existentiel :</strong> Conception philosophique où le divin ou le sacré est immanent à toute l'existence et à la nature.</p>
              <p><strong className="text-gray-900">Suspension du temps :</strong> Interruption ou arrêt de la perception linéaire du temps.</p>
              <p><strong className="text-gray-900">Cadrage topographique :</strong> Définition précise des éléments géographiques d'un lieu.</p>
              <p><strong className="text-gray-900">Dimension transcendantale intemporelle :</strong> Aspect qui dépasse les limites du temps et de l'espace, atteignant une portée universelle.</p>
              <p><strong className="text-gray-900">No man's land temporel :</strong> Période indéfinie ou hors du cadre chronologique habituel.</p>
              <p><strong className="text-gray-900">Nihilisme :</strong> Doctrine philosophique qui nie toute valeur, tout sens ou toute finalité à l'existence.</p>
            </div>
            <div>
              <p><strong className="text-gray-900">Existence désaliénée :</strong> Vie libérée des contraintes et des asservissements sociaux ou économiques.</p>
              <p><strong className="text-gray-900">Co-existants essentiels :</strong> Êtres dont la présence est indispensable à l'existence mutuelle.</p>
              <p><strong className="text-gray-900">Redéfinition de l'altérité :</strong> Nouvelle perception et compréhension de ce qui est Autre.</p>
              <p><strong className="text-gray-900">Anthropocentrisme :</strong> Conception plaçant l'être humain au centre de l'univers et des préoccupations.</p>
              <p><strong className="text-gray-900">Fluidité identitaire :</strong> Caractère non fixe et évolutif de l'identité d'un individu.</p>
              <p><strong className="text-gray-900">Transmutation de l'être :</strong> Transformation radicale et profonde de la nature essentielle d'un être.</p>
              <p><strong className="text-gray-900">Dispositif narratif :</strong> Ensemble des procédés et techniques mis en œuvre par l'auteur dans le récit.</p>
              <p><strong className="text-gray-900">Critique systémique :</strong> Analyse et remise en question des fondements et mécanismes d'un système (social, politique)..</p>
              <p><strong className="text-gray-900">Apocalypse rédemptrice :</strong> Vision d'une fin du monde qui est aussi une purification ou une chance de renouveau.</p>
              <p><strong className="text-gray-900">Renversement des valeurs :</strong> Changement radical dans l'échelle des principes et des priorités.</p>
              <p><strong className="text-gray-900">Société malade de son excès :</strong> Communauté souffrant des conséquences de son surdéveloppement ou de ses dérives.</p>
              <p><strong className="text-gray-900">Aliénation consumériste :</strong> État de soumission ou de perte de soi par la consommation.</p>
              <p><strong className="text-gray-900">Violence intrinsèque au masculin :</strong> Caractère de violence perçue comme inhérente ou spécifiquement liée au genre masculin.</p>
              <p><strong className="text-gray-900">Espace-refuge :</strong> Lieu de protection et de sécurité, souvent à l'abri des dangers extérieurs.</p>
              <p><strong className="text-gray-900">Murs visibles :</strong> Obstacles symboliques ou sociaux, non physiques, entravant la liberté.</p>
              <p><strong className="text-gray-900">Claustration :</strong> État d'être enfermé, de vivre en réclusion.</p>
              <p><strong className="text-gray-900">Impératifs genrés :</strong> Injonctions ou rôles spécifiques attribués en fonction du genre.</p>
              <p><strong className="text-gray-900">Autonomie retrouvée :</strong> Réacquisition de la capacité à s'autogouverner et à prendre ses propres décisions.</p>
              <p><strong className="text-gray-900">Charge mentale et émotionnelle :</strong> Fardeau psychologique lié aux responsabilités multiples et aux sollicitations affectives.</p>
              <p><strong className="text-gray-900">Fardeau invisible :</strong> Poids ou contrainte qui n'est pas directement perceptible.</p>
              <p><strong className="text-gray-900">Microcosme :</strong> Petit univers qui reflète les caractéristiques d'un plus grand système.</p>
              <p><strong className="text-gray-900">Réciprocité du besoin :</strong> Relation où les besoins des individus sont mutuellement satisfaits et interdépendants.</p>
              <p><strong className="text-gray-900">Utopie écologique :</strong> Représentation d'une société idéale en harmonie avec son environnement naturel.</p>
              <p><strong className="text-gray-900">Anti-utopie :</strong> Contre-vision d'une société présentée comme idéale mais révélant des aspects négatifs.</p>
              <p><strong className="text-gray-900">Rationalité :</strong> Capacité de raisonner et de comprendre le monde de manière logique.</p>
              <p><strong className="text-gray-900">Fonction intrinsèque :</strong> Rôle essentiel et inhérent à la nature profonde de quelque chose.</p>
              <p><strong className="text-gray-900">Méta-discours :</strong> Discours qui porte sur un autre discours ou sur le discours lui-même.</p>
              <p><strong className="text-gray-900">Ancrage :</strong> Processus de fixation, de stabilité ou de référence.</p>
              <p><strong className="text-gray-900">Dissolution du moi :</strong> Perte de la cohésion et de l'unité de l'identité personnelle.</p>
              <p><strong className="text-gray-900">Exutoire thérapeutique :</strong> Moyen d'évacuer des tensions ou des souffrances psychologiques.</p>
              <p><strong className="text-gray-900">Structuration du psychisme :</strong> Organisation des processus mentaux et de la vie psychique.</p>
              <p><strong className="text-gray-900">Réflexivité :</strong> Capacité à l'introspection, à l'analyse de ses propres pensées et actions.</p>
              </div>
          </CardContent>
        )}
        </Card>

        {/* Navigation to other works */}
        <Card>
          <CardHeader>
            <CardTitle>Autres œuvres au programme</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/dashboard/fiches/canguilhem">
                <div className="p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                  <h4 className="font-semibold text-blue-700">La connaissance de la vie</h4>
                  <p className="text-sm text-gray-600">Georges Canguilhem</p>
                </div>
              </Link>
              <Link href="/dashboard/fiches/verne">
                <div className="p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                  <h4 className="font-semibold text-purple-700">Vingt mille lieues sous les mers</h4>
                  <p className="text-sm text-gray-600">Jules Verne</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
