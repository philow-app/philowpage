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
          <h1 className="text-4xl font-serif font-bold text-gray-900">Vingt mille lieues sous les mers</h1>
          <p className="text-xl text-gray-600">Jules Verne (1828-1905)</p>
          <p className="text-lg text-gray-500 italic">Roman d'aventures scientifiques publié en 1870</p>
        </div>

        {/* Biography Section */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader
            className="cursor-pointer hover:bg-blue-100 transition-colors"
            onClick={() => toggleSection("biography")}
          >
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <User className="h-5 w-5" />
              L'Auteur et son Époque : Le Siècle de la Science et du Progrès
              <span className="ml-auto text-sm text-blue-600">
                {openSections.biography ? "▼" : "Cliquer pour voir"}
              </span>
            </CardTitle>
          </CardHeader>
          {openSections.biography && (
            <CardContent className="space-y-4">
              <p className="text-grey-800 leading-relaxed">
                <strong>Jules Verne (1828-1905)</strong> est le témoin et le chantre de son siècle. Le XIXe siècle est
                celui des Expositions Universelles, des grandes inventions (machine à vapeur, électricité,
                photographie), des explorations géographiques qui achèvent de cartographier le globe, et du triomphe de
                la science comme nouvelle religion.
              </p>
              <div className="bg-grey-100 p-4 rounded-lg">
                <p className="text-grey-800 leading-relaxed">
                  <strong>🧠 Le Positivisme d'Auguste Comte :</strong> Cette philosophie, qui domine l'époque, postule
                  que l'humanité peut atteindre un "état positif" où la connaissance est uniquement fondée sur
                  l'observation et la mesure des faits. Le professeur Aronnax est une incarnation parfaite de cet
                  esprit.
                </p>
              </div>
              <p className="text-grey-800 leading-relaxed">
                <strong>Le Romantisme persistant :</strong> Malgré ce culte de la science, l'époque reste marquée par
                l'héritage romantique. Le personnage de Nemo, figure du banni sublime, du génie solitaire en révolte
                contre la société, est un héros typiquement romantique, ce qui crée une tension fascinante avec la
                rationalité scientifique du projet.
              </p>
              <p className="text-grey-800 leading-relaxed">
                <strong>Les grandes explorations :</strong> l'Afrique est en cours de cartographie, les pôles sont
                encore mystérieux, les fonds marins restent presque vierges.
              </p>
            </CardContent>
          )}
        </Card>

        {/* Introduction Générale */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader
            className="cursor-pointer hover:bg-red-50 transition-colors"
            onClick={() => toggleSection("introduction")}
          >
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Introduction Générale : La Nature comme Spectacle et Conquête
              <span className="ml-auto text-sm text-red-600">
                {openSections.introduction ? "▼" : "Cliquer pour voir"}
              </span>
            </CardTitle>
          </CardHeader>
          {openSections.introduction && (
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                <strong>Avec Jules Verne, nous changeons radicalement de registre par rapport à Haushofer.</strong>{" "}
                L'expérience de la nature n'est plus subie dans la solitude, elle est choisie, recherchée et médiatisée
                par le triomphe de la technique humaine. <em>Vingt mille lieues sous les mers</em> (1869-1870) est
                l'épopée d'une exploration, d'une plongée littérale et figurative dans un monde jusqu'alors inaccessible
                : les fonds marins.
              </p>
              <p className="leading-relaxed">
                La nature n'est plus la force brute qui contraint l'individu, elle devient un spectacle grandiose, un
                objet de connaissance encyclopédique et un territoire de conquête.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="leading-relaxed">
                  <strong>💡 Le roman met en scène une tension fondamentale du XIXe siècle :</strong> une fascination
                  quasi mystique pour une nature vierge et mystérieuse, et une volonté positiviste de la mesurer, la
                  classer, la comprendre et la dominer par la science et l'industrie. L'expérience de la nature est ici
                  indissociable de l'expérience du progrès technique, incarné par la figure du{" "}
                  <strong>🔑 "Nautilus"</strong>.
                </p>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Key Characters */}
        <Card className="bg-emerald-50 border-emerald-200">
          <CardHeader
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection("characters")}
          >
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personnages principaux
              <span className="ml-auto text-sm text-gray-600">
                {openSections.characters ? "▼" : "Cliquer pour voir"}
              </span>
            </CardTitle>
          </CardHeader>
          {openSections.characters && (
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-105 cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-2">Le Professeur Aronnax (L'Œil Scientifique)</h4>
                  <p className="text-sm text-gray-700">
                    Biologiste français et professeur au musée d'histoire naturelle de Paris, son expérience est
                    cognitive et classificatoire. Il veut voir, nommer, classer. Il reste souvent un spectateur passif
                    d'une nature médiatisée. Narrateur principal, il porte la voix du XIXe siècle et la volonté des
                    États-Unis à explorer les fonds marins.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-105 cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-2">Conseil (L'Œil du Classificateur Dévoué)</h4>
                  <p className="text-sm text-gray-700">
                    Fidèle serviteur d'Aronnax (avec qui il a beaucoup voyagé), son expérience est taxonomique. Il est
                    l'incarnation de la manie classificatoire, incapable de voir la nature dans sa globalité, il voit la
                    nature comme une liste.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-105 cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-2">Ned Land (Le Corps du Prédateur)</h4>
                  <p className="text-sm text-gray-700">
                    Aventurier, son expérience est pragmatique et sensorielle. La nature est pour lui une source de
                    nourriture et un adversaire. Il porte la voix du non sens. Land vit bien le mal du pays et la
                    captivité du Nautilus.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-105 cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-2">Le Capitaine Nemo (L'Œil du Maître et du Banni)</h4>
                  <p className="text-sm text-gray-700">
                    Son expérience est totale et contradictoire : scientifique, esthétique, pragmatique et fusionnelle.
                    Il est le cœur du roman et à l'écoute de son équipage.
                  </p>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Structure and Genre */}
        <Card className="bg-stone-50 border-stone-200">
          <CardHeader
            className="cursor-pointer hover:bg-stone-50 transition-colors"
            onClick={() => toggleSection("structure")}
          >
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Structure et Genre de l'Œuvre : Entre Roman d'Aventures et Encyclopédie
              <span className="ml-auto text-sm text-stone-600">
                {openSections.structure ? "▼" : "Cliquer pour voir"}
              </span>
            </CardTitle>
          </CardHeader>
          {openSections.structure && (
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                <strong>La structure de l'œuvre reflète sa double nature, c'est un "roman-monde".</strong>{" "}
                <em>Vingt mille lieues sous les mers</em> se présente comme un journal de bord, rédigé par le professeur
                Aronnax, naturaliste français captif du Nautilus. Il mêle avec audace :
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-700">
                    <strong>Le roman d'aventure maritime</strong>, hérité de Cooper et Melville : suspense, combats,
                    tempêtes, exploration.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-700">
                    <strong>Le récit scientifique</strong>, où Verne déploie une érudition encyclopédique sur les
                    espèces marines, les profondeurs, les minéraux, etc.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-sm text-gray-700">
                    <strong>La fable politique et philosophique</strong>, avec le personnage de Nemo, figure du refus,
                    de la révolte et de la solitude.
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-sm text-gray-700">
                    <strong>L'utopie technique</strong>, avec le Nautilus comme monde clos, autonome, vision d'un futur
                    possible.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="leading-relaxed text-yellow-800">
                  <strong>❗️ Ce mélange peut dérouter le lecteur moderne, mais il est la clé de l'œuvre.</strong> Verne
                  veut "instruire en amusant". L'expérience de la lecture doit être elle-même une expérience de la
                  connaissance. Le voyage géographique est un prétexte au voyage encyclopédique.
                </p>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Chapter-by-Chapter Summary */}
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader
            className="cursor-pointer hover:bg-amber-100 transition-colors"
            onClick={() => toggleSection("summary")}
          >
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <Globe className="h-5 w-5" />
              Résumé détaillé par chapitres
              <span className="ml-auto text-sm text-amber-600">{openSections.summary ? "▼" : "Cliquer pour voir"}</span>
            </CardTitle>
          </CardHeader>
          {openSections.summary && (
            <CardContent className="space-y-6">
              {/* Première Partie */}
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-amber-900 border-b border-amber-300 pb-2">
                  PREMIÈRE PARTIE
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 1 :</p> {/* Modifié de grey-800 à gray-800 pour consistance Tailwind */}
                    <p className="text-gray-700"> {/* Modifié de grey-700 à gray-700 pour consistance Tailwind */}
                      L'histoire débute entre l'été 1866 et le printemps 1867 par une série de témoignages troublants :
                      marins américains et européens signalent une apparition étrange en pleine mer, un « objet » ou un
                      « animal » de taille colossale, capable de se déplacer à des vitesses incroyables et de projeter
                      des colonnes d'eau de cinquante mètres de haut. Ce phénomène suscite d'abord moqueries et
                      incrédulité, avant de devenir une source d'inquiétude : deux incidents graves font passer
                      l'hypothèse du « monstre marin » de la farce à la menace réelle. Toute disparition de navire est
                      alors imputée à cette créature inconnue.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 2 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      On fait la connaissance du professeur Pierre Aronnax, éminent spécialiste du Muséum d'histoire
                      naturelle à Paris, qui est aussi le narrateur du récit. Aronnax tente de donner une explication
                      scientifique au phénomène : il s'agirait soit d'un monstre d'une taille inédite, soit d'un
                      appareil sous-marin, ce que les gouvernements jugent irréalisable. Aronnax penche pour l'hypothèse
                      d'un narval géant, idée qu'il développe dans un article. L'écho médiatique est tel que la marine
                      américaine arme la frégate Abraham Lincoln pour traquer la bête. Aronnax est convié à
                      l'expédition.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 3 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Aronnax accepte l'invitation sans tergiverser, emporté par l'excitation scientifique. Il appelle
                      son fidèle domestique Conseil, et tous deux embarquent sur l'Abraham Lincoln à New York. Le
                      capitaine Farragut leur montre leur cabine. Le navire, solidement équipé, quitte le port à toute
                      vapeur pour traquer la créature dans l'Atlantique Nord.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 4 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      La frégate compte un équipage d'élite, dont le célèbre harponneur canadien Ned Land. Farragut
                      offre une récompense au premier homme qui verra le monstre. Aronnax et Land sympathisent
                      rapidement. Ce dernier, bien que sceptique, accepte d'y croire, même s'il doute qu'un animal ait
                      pu déformer les plaques de fer d'un navire tel que le Scotia.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 5 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      L'Abraham Lincoln longe les côtes sud-américaines, passe le cap Horn et traverse le Pacifique
                      nord. L'équipage commence à perdre patience. Le capitaine promet de retourner en Europe si la
                      créature ne se montre pas dans les trois jours. Le troisième jour, alors qu'Aronnax et Conseil
                      discutent de l'échec de l'expédition, Ned Land repère enfin l'étrange silhouette au loin.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 6 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      La frégate entame alors une course poursuite fébrile. Aronnax croit avoir affaire à un narval doué
                      d'électrification. Toute la journée, puis la nuit, le navire et le « monstre » s'affrontent dans
                      un ballet aquatique. Le matin, le brouillard se lève et la créature réapparaît, propulsant de
                      gigantesques jets de vapeur. Malgré les ordres du capitaine, la frégate ne parvient pas à suivre
                      la cadence. Les tirs de l'équipage n'ont aucun effet, les balles ricochent. Land lance son harpon
                      et sent qu'il a frappé quelque chose de dur, métallique. Soudain, deux immenses gerbes d'eau
                      s'écrasent sur le pont, et Aronnax est projeté à la mer.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 7 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Conseil, fidèle jusqu'au bout, se jette à l'eau pour secourir son maître. Les deux hommes,
                      ballottés par les vagues, nagent à tour de rôle pour conserver leurs forces. Ils aperçoivent
                      bientôt la silhouette de la frégate, lointaine. Aronnax appelle à l'aide, une voix humaine lui
                      répond, puis il sombre dans l'inconscience. À son réveil, il est étendu sur une surface dure, aux
                      côtés de Conseil et de Ned Land. Ils sont sur le dos du prétendu monstre. En l'observant, Land
                      réalise qu'il s'agit en réalité d'un engin recouvert de plaques métalliques. Ils viennent d'être
                      découverts et capturés par les occupants du mystérieux vaisseau.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 8 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Transportés à l'intérieur du bâtiment, les trois hommes sont plongés dans l'obscurité et la
                      confusion. Land est prêt à se battre, mais Aronnax préconise la patience. La pièce s'éclaire
                      soudainement et dévoile un mobilier sobre. Deux hommes entrent, mais leur langue est inconnue.
                      Malgré leurs efforts pour communiquer en plusieurs langues, aucun dialogue n'est établi. Puis un
                      intendant arrive, leur apporte des vêtements propres et un somptueux repas. Chaque plat est gravé
                      de la devise Mobilis in Mobili et orné d'un « N ». Épuisés mais rassasiés, les captifs s'endorment
                      dans le silence du sous-marin.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 9 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      À leur réveil, Aronnax note une sensation étrange : un souffle d'air plus frais que d'ordinaire.
                      Il comprend que le vaisseau a dû refaire surface pour renouveler son oxygène, à la manière d'un
                      cétacé. Land, quant à lui, est affamé et irritable. Lorsque l'intendant entre, Land tente de
                      l'étrangler. C'est alors qu'une voix claire et ferme, en français, se fait entendre : celle du
                      capitaine Nemo, qui intime l'ordre d'arrêter. Nemo s'apprête à se dévoiler.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 10 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le capitaine Nemo, personnage à l'autorité naturelle, se présente aux trois hommes. Il explique
                      qu'il les a observés et longuement réfléchi à leur sort. Il leur offre une alternative : soit ils
                      acceptent de vivre libres à bord du Nautilus, soit ils seront exécutés pour préserver le secret de
                      l'existence de ce navire. Face à ce dilemme, ils acceptent de demeurer à bord. Nemo invite Aronnax
                      à découvrir son univers. Il lui montre une bibliothèque somptueuse de 12 000 volumes, une
                      collection de tableaux de maîtres, des partitions musicales, et surtout une extraordinaire
                      collection de spécimens marins. Leur dîner, entièrement composé de produits de la mer, est
                      accompagné de cigares à base d'algues. Aronnax est fasciné.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 11 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      La visite se poursuit dans la salle des machines. Nemo explique que toute l'énergie du Nautilus
                      provient de l'électricité, générée à partir de minéraux extraits de l'eau de mer. L'électricité
                      alimente la propulsion, l'éclairage, le chauffage et même la distillation de l'eau potable.
                      Aronnax, à la fois admiratif et curieux, pose de nombreuses questions auxquelles Nemo promet de
                      répondre en temps voulu.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 12 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le capitaine expose le principe de navigation du Nautilus : le sous-marin utilise des ballasts
                      pour plonger ou remonter, et un gouvernail permet de le diriger avec précision. Un puissant
                      projecteur illumine les profondeurs. Nemo précise que son navire a été construit en secret à
                      partir de pièces venues du monde entier, assemblées sur une île désertique par des ouvriers qui
                      ont ensuite été renvoyés. Le chantier a été détruit pour ne laisser aucune trace.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 13 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Une fois remontés à la surface, Nemo et Aronnax montent sur la plateforme. En scrutant l'horizon,
                      ils se repèrent près des côtes japonaises. De retour à l'intérieur, Nemo ouvre des panneaux qui
                      transforment le salon en observatoire sous-marin. Aronnax est émerveillé : des poissons aux
                      couleurs éclatantes, des coraux, des méduses – tout un monde aquatique se déploie sous ses yeux.
                      Le spectacle est si hypnotique qu'ils passent l'après-midi à contempler les merveilles de l'océan.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 14 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Du 6 au 19 novembre, Nemo reste invisible. Puis Aronnax trouve un mot l'invitant à une chasse
                      sous-marine autour de l'île de Crespo. Ils utiliseront des combinaisons spéciales éclairées et des
                      armes capables de tuer instantanément tout animal au contact. Aronnax, toujours curieux des
                      inventions de Nemo, accepte avec enthousiasme. Conseil et Land l'accompagnent.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 15 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Équipés de leurs scaphandres, les hommes quittent le Nautilus pour explorer le fond marin. Aronnax
                      décrit le paysage sous-marin avec une grande poésie : rochers scintillants, végétation ondoyante,
                      poissons aux formes étranges. Ils avancent lentement, guidés par Nemo, jusqu'à atteindre une zone
                      sablonneuse qui marque le bord de l'île de Crespo.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 16 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Dans une forêt sous-marine peuplée d'arbres gigantesques, les chasseurs s'enfoncent dans
                      l'obscurité. Aronnax note l'absence de vent, la lenteur des mouvements, et l'étrangeté du silence.
                      Soudain, une araignée de mer gigantesque surgit. Nemo la tue avec calme et précision. Poursuivant
                      leur chemin, ils croisent un albatros et deux requins affamés. Nemo protège Aronnax et Conseil en
                      les poussant à l'écart, démontrant une fois encore son sang-froid.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 17 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le Nautilus poursuit sa route. Le 1er décembre, il franchit l'équateur. Aronnax, émerveillé,
                      observe les espèces marines à travers les vitres du navire. Un jour, ils croisent une épave
                      récente, dans laquelle des cadavres sont encore attachés par des cordes. Des requins rôdent. Ce
                      spectacle morbide marque profondément les passagers du Nautilus.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 18 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Après plusieurs jours d'absence, et à l'approche de Noël, le capitaine Nemo réapparaît et annonce
                      à Aronnax qu'ils ont atteint Vanikoro. Nemo prétend y avoir retrouvé une épave, qu'il relie à un
                      naufrage historique. Il révèle à Aronnax une boîte en fer blanc contenant des documents officiels
                      signés de Louis XVI. Ce trésor, selon Nemo, recèle une grande valeur mémorielle et pourrait être
                      utile un jour à son équipage.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 19 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le récit reprend au jour de l'An. Conseil exprime ses doutes sur leur retour à la civilisation,
                      tout en reconnaissant les merveilles extraordinaires qu'ils ont découvertes à bord du Nautilus. Le
                      navire longe la côte nord de l'Australie et s'engage dans le détroit de Torres. Le mauvais temps
                      pousse le sous-marin à s'échouer accidentellement sur un récif.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 20 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Aronnax, Conseil et Land explorent une île voisine. Ned se montre ravi de pouvoir goûter à nouveau
                      à la liberté et pense surtout à chasser. Le premier jour, ils mangent des fruits, mais ne trouvent
                      pas de viande. Le lendemain, leur chasse est fructueuse : oiseaux, cochons, et même de petits
                      kangourous sont tués, cuisinés, et dégustés.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 21 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Mais cette liberté est de courte durée : les hommes tombent nez à nez avec des Papous. Poussés par
                      la prudence, ils se réfugient rapidement sur le Nautilus. Aronnax alerte Nemo, qui reste
                      indifférent. Le lendemain, Aronnax observe une centaine d'indigènes rassemblés sur la plage.
                      Certains d'entre eux tentent de monter à bord du sous-marin lorsque les écoutilles s'ouvrent.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 22 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le Nautilus poursuit sa route à toute vitesse vers l'océan Indien. Aronnax commence à s'interroger
                      sur la destination du capitaine. Le 16 janvier, alors que le navire flotte paisiblement, Aronnax
                      découvre un paysage phosphorescent stupéfiant, un lit marin illuminé naturellement.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 23 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le dernier chapitre de la première partie s'ouvre sur un Nemo grave qui demande à Aronnax s'il est
                      médecin. Un membre de l'équipage est gravement blessé, le crâne brisé et le cerveau apparent.
                      Aronnax tente d'intervenir, mais la blessure est fatale. Nemo ne révèle rien des circonstances de
                      l'accident, mais Aronnax soupçonne qu'il est lié aux événements cachés de la veille.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seconde Partie */}
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-amber-900 border-b border-amber-300 pb-2">
                  SECONDE PARTIE
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 1 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      La seconde partie s'ouvre sur les réflexions introspectives d'Aronnax. Il s'interroge sur les
                      motivations profondes du capitaine Nemo. Est-il un simple savant exilé du monde par misanthropie,
                      ou un homme poursuivant une forme de vengeance contre l'humanité ? En dépit de son admiration pour
                      la beauté des fonds marins et la liberté offerte par le Nautilus, Aronnax sent poindre un malaise
                      : une part d'ombre entoure Nemo.Nous sommes à la fin du mois de janvier, et le Nautilus file à
                      grande vitesse à travers l'océan Indien. Depuis la plateforme, Aronnax observe les oiseaux marins
                      et la richesse des espèces aquatiques. Le 26 janvier, ils traversent l'équateur, croisent une
                      immense bande de requins, puis aperçoivent des cadavres charriés par les eaux du Gange. Le
                      lendemain, ils contemplent des aurores boréales, spectacle saisissant et rare sous ces latitudes.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 2 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Nemo propose une nouvelle excursion à ses hôtes : une visite des célèbres pêcheries de perles de
                      Ceylan. Il avertit cependant que le site est fréquenté par les requins, ce qui n'est pas sans
                      inquiéter Aronnax. Malgré ses réticences, il accepte la proposition, tout comme Conseil et Ned
                      Land, ce dernier étant toujours en quête d'action et de sensations fortes.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 3 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      L'expédition commence très tôt, à quatre heures du matin. Les quatre hommes embarquent dans une
                      barque qui les emmène vers les parcs à huîtres. Au lever du soleil, ils enfilent leurs
                      combinaisons de plongée et leurs casques. Nemo leur explique qu'ils n'auront pas besoin de
                      lanternes : la profondeur sera modérée et la lumière naturelle suffira. Pas de fusils non plus,
                      seulement des poignards, ce qui intrigue Land, qui préfère tout de même emporter son harpon.À sept
                      heures, ils atteignent les parcs à huîtres. Nemo guide le groupe vers une grotte au fond de
                      laquelle il leur montre une huître gigantesque. Il en force l'ouverture à l'aide de son poignard,
                      révélant une perle d'une taille extraordinaire, comparable à une noix de coco. Le trésor est
                      impressionnant, mais Nemo n'y touche pas : il semble plus attaché à l'idée de préserver cette
                      merveille qu'à l'exploiter.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 4 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le Nautilus reprend sa route vers l'ouest, franchissant le pays d'Oman et atteignant les détroits
                      de la mer Rouge le 8 février. Les passagers observent les magnifiques fonds marins : coraux
                      lumineux, éponges étranges, poissons colorés, coquillages chatoyants et falaises abruptes. Aronnax
                      discute avec Nemo des légendes entourant cette mer, jadis crainte pour ses dangers et admirée pour
                      sa valeur commerciale stratégique. Lorsque Nemo affirme qu'ils seront bientôt en Méditerranée,
                      Aronnax est perplexe : le canal de Suez n'est pas encore construit. Nemo lui révèle alors
                      l'existence d'un passage souterrain qu'il appelle le "tunnel arabe".
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 5 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le Nautilus flotte sur les eaux calmes de la mer Rouge. Ned Land et Aronnax aperçoivent un dugong,
                      sorte de lamantin massif. Land supplie Nemo de le laisser tenter sa chance au harpon. Le capitaine
                      accepte, mais prévient : ces bêtes peuvent se montrer redoutables si elles sont blessées. Land
                      blesse le dugong d'un premier coup, mais l'animal, furieux, plonge. La poursuite s'engage. Le
                      dugong faillit faire chavirer la barque, mais Land réussit à lui porter un coup mortel au cœur. De
                      retour à bord, le Nautilus pénètre dans le tunnel secret. Le courant y est fort, les parois
                      étroites. Aronnax ressent une vive émotion en traversant ce passage mystérieux. En moins de vingt
                      minutes, ils atteignent la Méditerranée, émerveillés par l'exploit.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 6 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Une fois de retour en Méditerranée, Ned Land s'impatiente. Il cherche un moment opportun pour
                      s'échapper, mais Aronnax n'est pas prêt à quitter Nemo. Il estime que le mystère du capitaine
                      mérite encore d'être exploré. Land insiste : dès qu'ils seront près des côtes, il s'enfuira, avec
                      ou sans les autres. Aronnax accepte de le suivre si une opportunité se présente. À la mi-février,
                      le Nautilus croise au large de la Crète. Une nuit, Aronnax accompagne Nemo au salon d'observation.
                      Alors qu'ils contemplent les fonds marins, un plongeur surgit devant les vitres. Nemo, sans un
                      mot, ouvre un coffre de fer rempli d'or, écrit une adresse sur le couvercle, et le fait emporter
                      hors du salon. Plus tard, Aronnax ressent une chaleur intense : le sous-marin traverse les eaux
                      brûlantes d'un volcan sous-marin. Nemo garde le silence, laissant planer le mystère.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 7 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Aronnax remarque que Nemo devient plus sombre et distant. Il semble oppressé par la proximité de
                      l'Europe et de l'Afrique. Le Nautilus ne fait surface que rarement, et sa vitesse élevée empêche
                      toute tentative d'évasion. Le 18 février, ils franchissent le détroit de Gibraltar et rejoignent
                      l'Atlantique.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 8 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Les tensions montent. Ned Land annonce qu'il a préparé une fuite alors que le Nautilus se trouve à
                      quelques kilomètres des côtes espagnoles. Il a fabriqué un canot et prévoit de s'enfuir sous la
                      couverture de la nuit. Aronnax est tiraillé : rester avec Nemo, qu'il admire, ou tenir sa promesse
                      à Land. Il craint aussi que Nemo, s'il découvre leur plan, ne réagisse violemment.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 9 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le projet d'évasion est reporté : le Nautilus s'éloigne vers le large. Nemo convie Aronnax à une
                      excursion spéciale, de nuit. Les deux hommes marchent dans les ténèbres en direction d'une lueur
                      rouge. Ils atteignent un volcan sous-marin, grimpent jusqu'à une plate-forme d'où Nemo écrit un
                      mot mystérieux sur un rocher : "Atlantide". Aronnax comprend qu'ils se trouvent dans la cité
                      engloutie. Ils contemplent les ruines antiques baignées par la lumière de la lune, puis rentrent
                      au lever du jour.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 10 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      De retour à bord, Aronnax découvre que le Nautilus flotte dans un lac intérieur, au cœur d'un
                      volcan éteint. L'équipage y extrait du charbon pour produire de l'électricité. Aronnax, Conseil et
                      Land en profitent pour explorer les parois du volcan. Land chasse des oiseaux et récolte du miel.
                      Ils savourent la beauté paisible de cette île volcanique.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 11 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le 22 février, le Nautilus entre dans la mer des Sargasses, un endroit étrange et paisible couvert
                      d'algues flottantes. Jusqu'au 12 mars, il progresse à vitesse constante dans l'Atlantique. Aronnax
                      réfléchit à leur situation : toujours captifs, ils ont parcouru 13 000 lieues. Le capitaine Nemo
                      devient plus distant. À grande profondeur, Aronnax observe des créatures marines inconnues dans un
                      silence abyssal.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 12 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      La tension à bord du Nautilus monte d'un cran lorsque Ned Land, frustré par l'inaction, laisse
                      exploser son envie de chasser. Lorsqu'un groupe de cachalots apparaît, le harponneur canadien
                      sollicite l'autorisation d'en abattre. Nemo, d'abord réticent sous prétexte qu'ils n'ont pas
                      besoin d'huile de baleine, finit par accepter. Mais cette chasse tourne à une démonstration de
                      violence spectaculaire. Ned et l'équipage se livrent à un massacre brutal. Aronnax, troublé,
                      qualifie le capitaine de boucher. Nemo, en guise de justification, défend l'idée qu'il s'agissait
                      d'un acte de vengeance contre des espèces destructrices. Une fois les bêtes tuées, deux membres de
                      l'équipage extraient un liquide lacté des cadavres – que Nemo offre à Aronnax, le trouvant
                      délicieux. Ce chapitre révèle encore davantage la froideur, l'ambivalence et la détermination
                      meurtrière du capitaine.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 13 :</p> {/* Modifié */}
                    <p className="text-gray-700"> {/* Modifié */}
                      Le Nautilus continue sa plongée vers les mers du sud, traversant des régions de plus en plus
                      glaciales. Aronnax observe les transformations des paysages : d'énormes icebergs dérivent sur
                      l'océan et les jours se raccourcissent considérablement. Lorsqu'ils atteignent un mur de glace
                      infranchissable, Nemo décide de passer en dessous. Une fois encore, les capacités techniques du
                      sous-marin sont mises à l'épreuve. Le risque est grand : ils pourraient manquer d'air avant
                      d'émerger. Pendant quarante heures, le Nautilus s'efforce de trouver un passage sous l'énorme
                      masse gelée. À plusieurs reprises, le vaisseau heurte la glace. Aronnax, inquiet, parvient à
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 14 :</p>
                    <p className="text-gray-700">
                      À peine sortis du tunnel de glace, Nemo organise une nouvelle expédition terrestre. Accompagné
                      d'Aronnax, de Conseil et de deux membres d'équipage, il se dirige vers une île au pôle Sud. Cette
                      expédition est unique : Nemo devient le premier homme à poser le pied sur ce territoire inexploré.
                      Aronnax décrit avec précision les paysages désolés, les plantes rares et les phoques curieux.
                      Après deux jours de neige constante, ils retournent brièvement au Nautilus. Ils reviennent ensuite
                      pour mesurer précisément leur position géographique avant l'équinoxe. Gravissant une hauteur, ils
                      observent la clarté du ciel et la fin du jour. Nemo plante alors un drapeau noir frappé de la
                      lettre « N », s'appropriant symboliquement ce territoire désertique. Un long cycle d'obscurité
                      polaire s'annonce désormais.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 15 :</p>
                    <p className="text-gray-700">
                      Au cœur de la nuit antarctique, le Nautilus subit un choc violent. Le sous-marin s'est coincé sur
                      tribord après avoir été percuté par un fragment d'iceberg retourné. Les pompes fonctionnent à
                      plein régime, mais la situation reste critique. Peu après, un second choc secoue violemment le
                      vaisseau. Aronnax se précipite auprès de Conseil et Land, craignant un naufrage imminent. Nemo
                      finit par leur avouer que le sous-marin est encerclé par les glaces dans toutes les directions. La
                      tension est à son comble.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 16 :</p>
                    <p className="text-gray-700">
                      La situation devient dramatique. Le Nautilus est prisonnier des glaces et les réserves d'air
                      diminuent rapidement. Nemo annonce qu'il ne reste que quarante-huit heures d'oxygène. La seule
                      solution consiste à percer un tunnel dans la glace, de l'intérieur. Des équipes de volontaires –
                      parmi lesquelles Ned Land – sortent en scaphandre pour commencer le forage. Le travail est
                      harassant. À l'intérieur, l'air devient rare, les maux de tête apparaissent, les muscles se
                      raidissent. Aronnax est pris de panique. Alors qu'il s'évanouit, Conseil et Land partagent avec
                      lui l'ultime réserve d'air de leur propre appareil. Au dernier moment, Nemo tente une ultime
                      manœuvre : il fait plonger le sous-marin pour remonter avec force. Le Nautilus brise enfin la
                      couche de glace et l'air s'engouffre violemment. Tous sont sauvés in extremis.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 17 :</p>
                    <p className="text-gray-700">
                      Aronnax exprime sa profonde gratitude envers ses compagnons pour lui avoir sauvé la vie. Alors que
                      les jours passent, les trois hommes se questionnent de plus en plus sur leur avenir à bord. Le 31
                      mars, le Nautilus franchit le cap Horn. Aronnax, toujours passionné par la faune et la flore,
                      décrit abondamment les espèces qu'il observe. Le capitaine Nemo demeure absent, tandis que le
                      vaisseau met le cap vers le nord. Ils franchissent le fleuve Amazone puis l'équateur, s'approchant
                      des Caraïbes. Mais à chaque fois qu'ils sont près des côtes, le Nautilus reste trop loin pour
                      qu'une évasion soit possible.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 18 :</p>
                    <p className="text-gray-700">
                      Le 20 avril, un incident inattendu survient : un calmar géant s'est emmêlé dans les pales du
                      Nautilus. Nemo, Aronnax, Land et les autres doivent intervenir à l'extérieur avec des haches et
                      des harpons pour libérer le sous-marin. L'affrontement est brutal et dramatique. Lorsqu'un
                      tentacule emporte un marin, Nemo intervient personnellement pour le sauver. Le calmar projette de
                      l'encre, aveuglant les hommes. Dans le tumulte, un homme d'équipage est tué. C'est un moment
                      traumatisant pour tout le monde, notamment pour Nemo, qui s'isole dans le silence.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 19 :</p>
                    <p className="text-gray-700">
                      Dès lors, Nemo devient de plus en plus taciturne et distant. Le Nautilus reste à l'arrêt jusqu'au
                      1er mai, puis reprend lentement sa route vers le nord. Tandis qu'ils suivent le Gulf Stream,
                      Aronnax observe les poissons lumineux, les méduses, les bancs phosphorescents. À contrecœur, il
                      accepte une invitation de Nemo dans sa cabine. Là, le capitaine lui montre un manuscrit contenant
                      toute son histoire. Ce texte, enfermé dans un cylindre étanche, devra être jeté à la mer par le
                      dernier survivant du Nautilus. Nemo refuse toujours de libérer ses hôtes et leur interdit
                      d'aborder le sujet à nouveau. Un ouragan éclate quelques jours plus tard. Nemo, stoïque, s'attache
                      à la plateforme extérieure pendant que les vagues déchaînées fouettent le vaisseau. À minuit, il
                      retourne à l'intérieur, ordonnant une plongée immédiate.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 20 :</p>
                    <p className="text-gray-700">
                      Après la tempête, le Nautilus se trouve loin des côtes américaines. Ned Land est abattu par ce
                      contretemps. Le 15 mai, ils croisent au large de Terre-Neuve le câble sous-marin transatlantique
                      qui relie l'Europe à l'Amérique. Peu après, le Nautilus se pose au fond de l'océan, à proximité
                      d'une épave. Nemo révèle qu'il s'agit du vaisseau « Le Marseillais », sabordé par son capitaine en
                      1794 pour ne pas tomber entre les mains ennemies. Il admire le courage des marins de l'époque, et
                      sa voix vibre d'émotion. Le sous-marin repart ensuite en direction du nord.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 21 :</p>
                    <p className="text-gray-700">
                      Peu à peu, Aronnax comprend que la haine de Nemo contre le monde extérieur est immense, viscérale.
                      Un jour, le Nautilus fait surface à proximité d'un navire de guerre. Land y voit une chance
                      d'évasion et agite un mouchoir blanc. Mais Nemo, furieux, intervient. Il fait hisser son drapeau
                      noir et lance l'attaque. Le sous- marin tire un projectile qui fait exploser le navire. L'équipage
                      ennemi périt sous les yeux impuissants d'Aronnax. Nemo, brisé, rentre dans sa cabine et fond en
                      larmes devant le portrait de sa femme et de ses enfants. C'est un moment de bascule tragique dans
                      le roman.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 22 :</p>
                    <p className="text-gray-700">
                      Ce massacre hante profondément Aronnax, qui ne trouve plus la paix. Le Nautilus continue son
                      trajet silencieux vers le nord. À bord, les horloges s'arrêtent, plus aucun membre d'équipage ne
                      se montre. L'ambiance est pesante, presque irréelle. Après deux semaines sans nouvelle, Land
                      propose une fuite immédiate. Aronnax accepte, rongé par l'anxiété. Alors qu'il attend le moment
                      convenu, il entend Nemo jouer de l'orgue, seul dans l'obscurité. Il hésite, mais la peur de rester
                      à bord le pousse à agir. Ils atteignent la plate-forme. Soudain, un grondement épouvantable surgit
                      : le maelström des côtes norvégiennes engloutit tout. Aronnax heurte la coque du Nautilus et perd
                      connaissance.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-semibold text-gray-800">Chap. 23 :</p>
                    <p className="text-gray-700">
                      Lorsqu'il reprend ses esprits, Aronnax se trouve dans une cabane sur les îles Lofoten, en Norvège,
                      aux côtés de Conseil et Ned Land. Nul ne sait ce qu'il est advenu du Nautilus ou du capitaine
                      Nemo. Le voyage a duré dix mois, et ils ont parcouru plus de 20 000 lieues. Aronnax garde son
                      manuscrit comme témoignage des merveilles – mais aussi des horreurs – qu'ils ont vécues. Il espère
                      que, grâce à ce récit, le monde comprendra un jour l'énigmatique capitaine des mers.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Citations Section */}
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader
            className="cursor-pointer hover:bg-purple-100 transition-colors"
            onClick={() => toggleSection("citations")}
          >
            <CardTitle className="flex items-center gap-2 text-purple-900">
              <BookOpen className="h-5 w-5" />
              Citations importantes et leurs explications
              <span className="ml-auto text-sm text-purple-600">
                {openSections.citations ? "▼" : "Cliquer pour voir"}
              </span>
            </CardTitle>
          </CardHeader>
          {openSections.citations && (
            <CardContent className="space-y-4">
              {/* All existing citation content remains the same */}
              <div className="grid gap-4">
                {/* Citation 1 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « L'esprit humain se plaît à ces conceptions grandioses d'êtres surnaturels. Or la mer est
                          précisément leur meilleur véhicule, le seul milieu où ces géants - près desquels les animaux
                          terrestres, éléphants ou rhinocéros, ne sont que des nains - puissent se produire et se
                          développer. Les masses liquides transportent les plus grandes espèces connues de mammifères,
                          (...). » (page 15)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette citation, énoncée par le professeur Aronnax, met en lumière
                      la fascination humaine pour le gigantisme et le surnaturel. Elle positionne la mer non seulement
                      comme un décor, mais comme le milieu par excellence où l'imaginaire peut s'épanouir, donnant
                      naissance à des créatures colossales. Elle justifie la présence de monstres marins dans le roman
                      et souligne l'importance du concept de "milieu" (un environnement naturel spécifique), précurseur
                      des idées écologiques qui émergent à la fin du XIXe siècle.
                    </p>
                  </div>
                </details>

                {/* Citation 1 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « L'esprit humain se plaît à ces conceptions grandioses d'êtres surnaturels. Or la mer est
                          précisément leur meilleur véhicule, le seul milieu où ces géants - près desquels les animaux
                          terrestres, éléphants ou rhinocéros, ne sont que des nains - puissent se produire et se
                          développer. Les masses liquides transportent les plus grandes espèces connues de mammifères,
                          (...). » (page 15)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette citation, énoncée par le professeur Aronnax, met en lumière
                      la fascination humaine pour le gigantisme et le surnaturel. Elle positionne la mer non seulement
                      comme un décor, mais comme le milieu par excellence où l'imaginaire peut s'épanouir, donnant
                      naissance à des créatures colossales. Elle justifie la présence de monstres marins dans le roman
                      et souligne l'importance du concept de "milieu" (un environnement naturel spécifique), précurseur
                      des idées écologiques qui émergent à la fin du XIXe siècle.
                    </p>
                  </div>
                </details>

{/* Citation 2 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Pour peindre de pareils tableaux, il faudrait la plume du plus illustre de nos poètes,
                          l'auteur des Travailleurs de la mer. » (page 564)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette phrase est une référence directe à Victor Hugo et à son roman
                      Les Travailleurs de la mer. Elle témoigne de l'admiration de Jules Verne pour Hugo et inscrit
                      Vingt mille lieues sous les mers dans une lignée littéraire qui célèbre la grandeur, la puissance
                      et les mystères de la mer. Elle renforce la dimension poétique et épique du récit en suggérant que
                      la beauté des fonds marins est si sublime qu'elle nécessite un talent littéraire exceptionnel pour
                      être rendue.
                    </p>
                  </div>
                </details>

                {/* Citation 3 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Je suis bon nageur, sans prétendre égaler Byron et Edgar Poe, qui sont des maîtres, et ce
                          plongeon ne me fit point perdre la tête. » (pages 58-59)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Ici, le narrateur, Aronnax, établit une comparaison de ses propres
                      compétences de nageur avec celles de figures littéraires et historiques notables : Lord Byron,
                      poète romantique connu pour ses exploits physiques, et Edgar Allan Poe, maître du fantastique.
                      Cette référence, bien qu'indirecte dans sa première occurrence, participe à l'enrichissement de
                      l'arrière-plan culturel du roman et, en ce qui concerne Poe, préfigure la dimension fantastique et
                      étrange que prendra l'aventure sous-marine.
                    </p>
                  </div>
                </details>

                {/* Citation 4 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Il y croyait comme certaines bonnes femmes croient au Léviathan - par foi, non par raison. »
                          (pages 26-28, concernant le commandant Farragut)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette citation illustre la croyance irrationnelle du commandant
                      Farragut en l'existence d'un monstre marin, qu'Aronnax compare à la foi populaire dans le
                      Léviathan. Le Léviathan est un monstre marin biblique et mythologique, souvent associé au chaos et
                      au paganisme. La comparaison souligne la distinction entre la foi aveugle et la raison
                      scientifique, un thème central du roman.
                    </p>
                  </div>
                </details>

                {/* Citation 5 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « C'était une sorte de chevalier de Rhodes, un Dieudonné de Gozon, marchant à la rencontre du
                          serpent qui désolait son île. » (page 28, toujours concernant le commandant Farragut)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette référence compare le commandant Farragut au chevalier
                      Dieudonné de Gozon, un personnage semi-légendaire de l'Ordre de Saint-Jean de Jérusalem
                      (Chevaliers de Rhodes) qui aurait vaincu un dragon au XIVe siècle. Elle ancre la quête du "monstre
                      marin" dans une tradition héroïque et mythique de lutte contre des forces surnaturelles, conférant
                      une dimension épique à la traque.
                    </p>
                  </div>
                </details>

                {/* Citation 6 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « La frégate aurait eu cent fois raison de s'appeler l'Argus. » (page 28)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette allusion à Argus, le géant mythologique doté d'une centaine
                      d'yeux et gardien d'Io dans la mythologie grecque, suggère la vigilance extrême et la capacité
                      d'observation attendue de la frégate Abraham Lincoln dans sa traque du monstre. Elle souligne
                      l'idée de surveillance constante et omniprésente.
                    </p>
                  </div>
                </details>

                {/* Citation 7 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Son récit prenait une forme épique, et je croyais écouter quelque Homère canadien, chantant
                          l'Iliade des régions hyperboréennes. » (page 31, concernant Ned Land)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette citation qualifie la manière de raconter de Ned Land
                      d'épique, la comparant à celle d'Homère, l'auteur légendaire de l'Iliade et de l'Odyssée. Elle
                      confère à Ned Land une stature de conteur de récits héroïques, inscrivant ses aventures de
                      harponneur dans la tradition des grandes épopées.
                    </p>
                  </div>
                </details>

                {/* Citation 8 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Les temps ne sont plus où les Jonas se réfugient dans le ventre des baleines! » (page 64)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette référence biblique à Jonas, prophète qui fut avalé par un
                      grand poisson (souvent interprété comme une baleine) et en ressortit vivant, est utilisée avec
                      ironie. Elle souligne le changement d'époque, où les miracles bibliques cèdent la place à la
                      rationalité scientifique, tout en préfigurant le thème de l'ingestion par un monstre ou un
                      vaisseau.
                    </p>
                  </div>
                </details>

                {/* Citation 9 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Je le considérais avec un effroi mélangé d'intérêt, et sans doute, ainsi qu'Œdipe
                          considérait le sphinx. » (page 96)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette comparaison de la relation d'Aronnax avec Nemo à celle
                      d'Œdipe face au Sphinx(créature mythologique qui posait des énigmes et tuait ceux qui ne pouvaient
                      y répondre) est particulièrement riche. Elle suggère le mystère énigmatique de Nemo et préfigure
                      un "dénouement" où la "réponse" (l'identité de Nemo, la nature de l'homme) pourrait être fatale au
                      Sphinx (Nemo ou le Nautilus), tout comme Œdipe, en répondant à l'énigme, cause la mort du Sphinx.
                    </p>
                  </div>
                </details>

                {/* Citation 10 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « I.../ le transformait en une arche sainte à laquelle nul profanateur ne touchait sans être
                          foudroyé (...) » (page 259, concernant l'utilisation de l'électricité à bord du Nautilus)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> L'emploi du terme "arche sainte" (référence à l'Arche d'Alliance
                      biblique) confère au Nautilus un caractère sacré, presque divin. L'électricité, source de sa
                      puissance, est comparée à la foudre divine,soulignant l'aspect inviolable du sous-marin et la
                      puissance quasi surnaturelle du Capitaine Nemo, qui s'élève au rang de "demi-dieu".
                    </p>
                  </div>
                </details>

                {/* Citation 11 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « (...) je cherchais involontairement du regard le vieux Protée, le mythologique pasteur qui
                          gardait ces immenses troupeaux de Neptune. » (page 497)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette référence à Protée, divinité marine grecque capable de
                      changer de forme et de prédire l'avenir, et qui gardait les troupeaux marins de Poséidon (Neptune
                      en mythologie romaine), souligne la dimension mythologique et intemporelle de l'océan. Aronnax
                      cherche instinctivement cette figure tutélaire de la mer, renforçant l'idée d'une nature marine
                      peuplée de mythes anciens.
                    </p>
                  </div>
                </details>

                {/* Citation 12 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « En outre, monsieur Némo qui justifie bien son nom latin, n'est pas plus gênant que s'il
                          n'existait pas. » (Page 214)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette remarque de Conseil met en lumière la signification du nom
                      "Nemo". En latin, "nemo" signifie "personne". Ce nom est parfaitement en adéquation avec le
                      personnage : il est inconnu du monde extérieur, son passé est secret, et il se retire de la
                      société, devenant littéralement "personne" aux yeux des hommes. Cela renforce son caractère
                      énigmatique et son rejet du monde terrestre.
                    </p>
                  </div>
                </details>

                {/* Citation 13 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Etait-il le champion des peuples opprimés, le libérateur des races esclaves ? Avait-il
                          figuré dans les dernières commotions politiques ou sociales de ce siècle ? Avait-il été l'un
                          des héros de la terrible guerre américaine, guerre lamentable et à jamais glorieuse ?... »
                          (page 400)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Ces questions posées par Aronnax sur l'identité et les motivations
                      de Nemo soulignent le mystère impénétrable qui entoure le capitaine. Elles évoquent des conflits
                      et des idéaux politiques contemporains à l'époque de Verne, suggérant que Nemo pourrait être un
                      exilé politique ou un vengeur,renforçant sa figure de "demi-dieu" ou de "deus ex machina" (une
                      intervention divine ou providentielle,souvent inattendue, qui résout une situation).
                    </p>
                  </div>
                </details>

                {/* Citation 14 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">« Mobilis in mobile » (page 108)</p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette devise latine, qui signifie "mobile dans l'élément mobile"
                      (ou "mouvant dans l'élément mouvant"), est gravée sur les plats du Nautilus. Elle symbolise
                      parfaitement la symbiose entre le sous-marin et son environnement. Elle exprime la capacité unique
                      du Nautilus et de Nemo à se mouvoir avec une aisance inégalée dans l'océan, comme s'ils faisaient
                      partie intégrante de cet élément fluide et changeant.
                    </p>
                  </div>
                </details>

                {/* Citation 15 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « fanatique du Nautilus, j'étais incarné dans la peau de son commandant. » (page 333)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette confession d'Aronnax révèle sa fascination croissante pour le
                      Nautilus et Nemo. Elle témoigne de la dimension initiatique de son voyage : de simple observateur,
                      il s'identifie progressivement à son hôte et à la machine, éprouvant un désir profond de prolonger
                      l'exploration scientifique qu'elle rend possible, même au prix de sa liberté.
                    </p>
                  </div>
                </details>

                {/* Citation 16 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Grâce à lui, grâce à son appareil, je complétais chaque jours mes études sous-marines, I...]
                          Je ne pouvais donc me faire à cette idée d'abandonner le Nautilus avant notre cycle
                          d'investigations accompli. » (page 364)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette citation explicite le dilemme d'Aronnax : sa passion pour la
                      science et l'exploration des fonds marins (rendue possible par le "laboratoire flottant" qu'est le
                      Nautilus) prime sur son désir de retrouver la liberté terrestre. Elle souligne la tension entre la
                      quête de connaissance et la captivité, un aspect central de "l'expérience de la nature" pour le
                      savant.
                    </p>
                  </div>
                </details>

                {/* Citation 17 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Mais qu'était donc cette portion du globe engloutie par les cataclysmes ? Qui avait disposé
                          ces roches et ces pierres comme des dolmens des temps antéhistoriques ? Où étais-je, où
                          m'avait entraîné la fantaisie du capitaine Némo ? » (page 419)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> La stupeur d'Aronnax face aux vestiges de l'Atlantide révèle un
                      voyage dans le temps géologique et mythologique. Les termes comme "dolmens des temps
                      antéhistoriques" soulignent la profondeur de l'histoire de la Terre et le caractère extraordinaire
                      de cette découverte, qui dépasse les connaissances de son époque.
                    </p>
                  </div>
                </details>

                {/* Citation 18 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Ainsi donc, conduit par la plus étrange destinée, je foulais du pied l'une des montagnes de
                          ce continent! Je touchais de la main ces ruines mille fois séculaires et contemporaines des
                          époques géologiques! Je marchais la même où avaient marché les contemporains du premier homme!
                          J'écrasais sous mes lourdes semelles ces squelettes d'animaux des temps fabuleux, que ces
                          arbres, maintenant minéralisés, couvraient autrefois de leur ombre ! - Ah ! pourquoi le temps
                          me manquait-il ! J'aurais voulu descendre les pentes abruptes de cette montagne, parcourir en
                          entier ce continent immense qui sans doute reliait l'Afrique à l'Amérique, et visiter ces
                          grandes cités antédiluviennes. » (page 423)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Ce passage exprime l'émerveillement et la frustration d'Aronnax. Il
                      est confronté à une immersion directe dans un passé lointain ("époques
                      géologiques", "contemporains du premier homme"),soulignant la dimension temporelle du voyage et la
                      capacité de la nature à conserver des traces de l'histoire de la vie sur Terre. Il désire
                      approfondir cette exploration du temps.
                    </p>
                  </div>
                </details>

                {/* Citation 19 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « J'avais maintenant le droit d'écrire le vrai livre de la mer, et ce livre, je voulais que,
                          plus tôt que plus tard, il pût voir le jour. » (page 548)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette déclaration d'Aronnax exprime son impérieux désir de
                      transmettre les connaissances acquises lors de son voyage. C'est l'objectif du scientifique
                      : partager les découvertes d'un monde inconnu avec l'humanité, marquant la vocation didactique du
                      roman de Jules Verne lui-même.
                    </p>
                  </div>
                </details>

                {/* Citation 20 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Aussi notre vitesse fut-elle de vingt-cinq milles à l'heure, soit douze lieues de quatre
                          kilomètres. » (page 380)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette citation et les suivantes ("Une heure plus tard, nous étions
                      par treize mille mètres - trois lieues et quart environ - et le fond de l'océan ne se laissait pas
                      pressentir. » I...J « Nous avions atteint une profondeur de seize mille mètres - quatre lieues -
                      [...] ») mettent en lumière l'utilisation de lieues terrestrespour mesurer une distance
                      maritime. Ce choix, bien que relevant d'Aronnax en tant qu'homme "terrestre",souligne peut-être la
                      volonté de Verne de relativiser la séparation entre la terre et la mer, ou de marquer
                      la domination humaine dans la perception même de l'espace, même sous l'eau. Le fait que 20 000
                      lieues terrestres représentent deux fois la circonférence de la Terre (et que l'eau couvre les
                      deux tiers de la planète) invite à une réflexion sur les proportions et l'interconnexion des
                      éléments.
                    </p>
                  </div>
                </details>

                {/* Citation 21 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Les premiers plans qui passaient devant nos yeux, c'étaient des rocs découpés
                          fantastiquement, des forêts d'arbres passés du règne végétal au règne animal, et dont
                          l'immobile silhouette grimaçait sous les flots. » (page 425)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette description des paysages sous-marins, en particulier les
                      "forêts d'arbres passés du règne végétal au règne animal", évoque la transformation géologique et
                      paléontologique. La référence aux "houillères sous-marines" dans le chapitre suivant renforce
                      l'idée d'un voyage à travers les temps géologiques (Carbonifère, formation du charbon), rappelant
                      la thématique de <i>Voyage au centre de la Terre</i>.
                    </p>
                  </div>
                </details>

                {/* Citation 22 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « J'avais en lui un spécialiste, très ferré sur la classification en histoire naturelle,
                          (...1, il n'eût pas distingué, je crois, un cachalot d'une baleine ! ». (page 20, concernant
                          Conseil)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette critique initiale de Conseil par Aronnax met en évidence la
                      limite de la connaissance purement théorique face à l'expérience pratique. Elle souligne
                      l'importance de la pratique sur le terrain pour le naturaliste et prépare la confrontation des
                      approches scientifiques (théorie versus pratique) qui sera développée tout au long du roman.
                    </p>
                  </div>
                </details>

                {/* Citation 23 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Et, sur ce sujet, une discussion s'éleva entre les deux amis, car ils connaissaient les
                          poissons, mais chacun d'une façon très différente. » (page 148, entre Conseil et Ned Land)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette phrase cristallise la dialectique entre la théorie et la
                      pratique. Conseil représente la connaissance livresque et la classification, tandis que Ned Land
                      incarne l'expérience directe et le savoir empirique. Jules Verne suggère que la vraie connaissance
                      réside dans l'équilibre entre ces deux approches.
                    </p>
                  </div>
                </details>

                {/* Citation 24 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Et en effet, le digne garçon, classificateur enragé, n'était point un naturaliste, et je ne
                          sais pas s'il aurait distingué un thon d'une bonite. En un mot, le contraire du Canadien, qui
                          nommait tous ces poissons sans hésiter. » (page 152)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette citation renforce l'idée que le véritable naturaliste n'est
                      pas seulement un théoricien, mais un homme de terrain, capable de reconnaître et de nommer les
                      espèces par l'observation directe. C'est une prise de position en faveur du positivisme et de
                      l'approche empirique de la science.
                    </p>
                  </div>
                </details>

                {/* Citation 25 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Donc, pour élever ces murailles, me dit-il, il a fallu?... - Cent quatre-vingt-douze mille
                          an, mon brave Conseil, ce qui allonge singulièrement les jours bibliques. D'ailleurs, la
                          formation de la houille, c'est-à-dire la minéralisation des forêts enlisées par les déluges, a
                          exigé un temps beaucoup plus considérable. Mais j'ajouterai que les jours de la Bible ne sont
                          que des époques et non l'intervalle qui s'écoule entre deux levers de soleil, car, d'après la
                          Bible elle-même, le soleil ne date pas du premier jour de la création. ». (page 202)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Ce passage est fondamental pour comprendre la relation de Verne
                      avec les théories scientifiques de son temps, notamment celle de Darwin sur l'évolution et l'âge
                      de la Terre. Il confronte les temps géologiques (formation des atolls, de la houille) aux récits
                      bibliques, en relativisant ces derniers par une interprétation allégorique des "jours" de la
                      Genèse. Il illustre le doute scientifique face aux dogmes religieux de l'époque.
                    </p>
                  </div>
                </details>

                {/* Citation 26 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Mais ce plateau élevé ne mesurait que quelques toises, et bientôt nous fûmes rentrés dans
                          notre élément. Je crois avoir maintenant le droit de le qualifier ainsi. » (page 324)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette phrase est significative de l'adaptation des héros à leur
                      nouvel environnement. Le fait qu'Aronnax considère désormais l'eau comme "notre élément" est une
                      illustration directe de la théorie darwinienne de l'adaptation des espèces à leur milieu. Bien que
                      contraints, les personnages évoluent et s'acclimatent à leur vie sous-marine, devenant presque une
                      nouvelle espèce humaine.
                    </p>
                  </div>
                </details>

                {/* Citation 27 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « La mer est tout ! Elle couvre les sept dixièmes du globe terrestre. » (page 103)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette affirmation de Nemo souligne l'immensité et la prépondérance
                      de l'océan sur les terres émergées. Elle pose la mer comme un univers autonome, complet et
                      autosuffisant, renforçant l'idéal d'autarcie du capitaine. C'est une vision du monde qui
                      privilégie le domaine marin.
                    </p>
                  </div>
                </details>

                {/* Citation 28 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Tantôt je mets mes filets à la traîne, et je les retire, prêts à se rompre. Tantôt je vais
                          chasser au milieu de cet élément qui paraît être inaccessible à l'homme, et je force le gibier
                          qui gîte dans mes forêts sous-marines. Mes troupeaux, comme ceux du vieux pasteur de Neptune,
                          paissent sans crainte les immenses prairies de l'Océan. J'ai là une vaste propriété que
                          j'exploite moi-même et qui est toujours ensemencée par la main du Créateur de toutes choses. »
                          (page 102)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Nemo utilise ici de nombreuses métaphores terrestres ("chasser",
                      "gibier", "forêts", "troupeaux", "prairies", "propriété", "ensemencée") pour décrire
                      l'exploitation des ressources marines. Cela révèle sa vision de l'océan comme un vaste domaine
                      personnel, autosuffisant et généreux, qu'il gère selon ses propres lois. Cela met en lumière la
                      continuité entre les écosystèmes terrestres et marins dans l'imaginaire vernien, et sa démarche de
                      "propriétaire" des océans.
                    </p>
                  </div>
                </details>

                {/* Citation 29 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « La mer a ses fleuves comme les continents » (page 142)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette simple phrase d'Aronnax illustre parfaitement l'utilisation
                      de métaphores terrestres pour appréhender et décrire le milieu marin. Elle rend le concept plus
                      accessible au lecteur et crée une continuité imaginaire entre les deux mondes, soulignant
                      l'analogie des phénomènes naturels.
                    </p>
                  </div>
                </details>

                {/* Citation 30 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Véritablement, cette eau qui m'entourait n'était qu'une sorte d'air, plus dense que
                          l'atmosphère terrestre, mais presque aussi diaphane. Au-dessus de moi, j'apercevais la calme
                          surface de la mer. » (page 171)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Aronnax exprime ici une perception sensorielle altérée due à son
                      immersion. La comparaison de l'eau à une "sorte d'air" montre comment les sens s'adaptent à un
                      nouvel environnement, transformant le familier en extraordinaire. Cela contribue à la dimension
                      merveilleuse et immersive de l'expérience sous-marine.
                    </p>
                  </div>
                </details>

                {/* Citation 31 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Quel spectacle ! Comment le rendre ! » (page 416)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette exclamation d'Aronnax traduit la difficulté inhérente à
                      décrire l'indicible et l'inconnu. Elle souligne le défi pour l'auteur de transmettre la
                      magnificence des fonds marins à un lecteur "terrestre", d'où le recours aux métaphores et
                      analogies pour rendre l'extraordinaire intelligible.
                    </p>
                  </div>
                </details>

                {/* Citation 32 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « montraient des veines vertes, comme si le sulfate de cuivre en eût tracé les lignes
                          ondulées. D'autres, semblables à d'énormes améthystes, se laissaient pénétrer par la lumière.
                          Celles-ci réverbéraient les rayons du jour sur les mille facettes de leurs cristaux.
                          Celles-là, nuancées des vifs reflets du calcaire, auraient suffi à la construction de toute
                          une ville de marbre. » (pages 472-473, décrivant les glaces)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette description des glaces utilise des métaphores minérales et
                      géologiques ("sulfate de cuivre", "améthystes", "cristaux", "calcaire", "marbre"). Elle sublime la
                      nature en la comparant à des pierres précieuses et des matériaux de construction, renforçant le
                      lien avec la géologie et rappelant les descriptions de <i>Voyage au centre de la Terre</i>.
                    </p>
                  </div>
                </details>

                {/* Citation 33 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « Mine éblouissante de gemmes, et particulièrement de saphirs qui croisaient leurs jets bleus
                          avec le jet vert des émeraudes. Cà et là des nuances opalines d'une douceur infinie couraient
                          au milieu de points ardents comme autant de diamants de feu dont l'œil ne pouvait soutenir
                          l'éclat. » (page 514, décrivant le spectacle sous la glace)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Cette métaphore continue de minéraliser le paysage marin gelé, le
                      transformant en un trésor de gemmes. Elle accentue la dimension esthétique et merveilleuse de
                      l'exploration sous-marine, où la nature se révèle d'une beauté inouïe, presque irréelle, défiant
                      la description conventionnelle.
                    </p>
                  </div>
                </details>

                {/* Citation 34 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-100 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">"</span>
                      <div className="flex-1">
                        <p className="italic text-grey-700 leading-relaxed">
                          « L'argonaute est libre de quitter sa coquille, dis-je à Conseil, mais il ne la quitte jamais.
                          — Ainsi fait le capitaine Némo, répondit judicieusement Conseil. C'est pourquoi il eût mieux
                          fait d'appeler son navire l'Argonaute. » (pages 295-296)
                        </p>
                        <div className="mt-2 text-sm text-purple-600 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Ce dialogue constitue une métaphore écologique centrale. La
                      relation de l'argonaute (mollusque marin) à sa coquille est comparée à celle de Nemo au Nautilus :
                      une protection, un habitat, mais aussi une prison volontaire. Cette métaphore se décline en trois
                      niveaux d'habitat (carapace psychologique, Nautilus, mer entière) pour Nemo, soulignant son
                      retrait complet du monde et sa symbiose avec l'océan.
                    </p>
                  </div>
                </details>

              </div>
            </CardContent>
          )}
        </Card>

        {/* Citations Section */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader
            className="cursor-pointer hover:bg-blue-100 transition-colors"
            onClick={() => toggleSection("theme")}
          >
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <ThumbsUp className="h-5 w-5" />
              Étude Approfondie du Thème : Les "Expériences de la nature"
              <span className="ml-auto text-sm text-blue-600">{openSections.theme ? "▼" : "Cliquer pour voir"}</span>
            </CardTitle>
          </CardHeader>
          {openSections.theme && (
            <CardContent className="space-y-4">
              {/* All existing theme content remains the same */}
              <div className="grid gap-4">
                {/* Thème 1 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">1.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          La Nature comme Laboratoire et Quête Scientifique
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Le roman dépeint la nature, et particulièrement l'océan, comme un
                      vaste terrain d'expérimentation scientifique et empirique. Le Nautilus fonctionne comme un
                      laboratoire sous-marin qui permet une immersion totale, offrant un accès inédit à des profondeurs
                      inexplorées. Aronnax, naturaliste et incarnation du positivisme, cherche à confronter la théorie à
                      la pratique. Ce voyage enrichit une nouvelle encyclopédie du monde marin, soulignant la vocation
                      didactique du récit et le désir de maîtriser le savoir par l'observation et la classification. 🔬
                      Attention à l'héritage des Lumières et de l'encyclopédisme du XIXe siècle.
                    </p>
                  </div>
                </details>

                {/* Thème 2 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">2.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          La Dialectique de la Connaissance : Théorie et Pratique
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Verne explore la tension féconde entre la connaissance théorique
                      (symbolisée par Conseil et sa classification taxonomique) et le savoir empirique (incarné par Ned
                      Land et son approche pragmatique et sensorielle). Aronnax s'efforce de réconcilier ces deux
                      approches, démontrant qu'une véritable compréhension de la nature nécessite les deux. L'aventure
                      sous-marine pousse chaque personnage à dépasser ses limites, enrichissant leur perception du
                      monde. ⚖️ Pensez à l'équilibre nécessaire entre le livre et le terrain.
                    </p>
                  </div>
                </details>

                {/* Thème 3 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">3.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          La Nature entre Merveilleux, Fantastique et Mythe
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> L'expérience de la nature n'est jamais purement factuelle ; elle
                      est profondément imbriquée dans le fantastique, le merveilleux et les résonances mythologiques. La
                      mer est le "meilleur véhicule" des "êtres surnaturels", un terreau pour l'ichtyologie fantastique.
                      Les nombreuses références mythologiques (Léviathan, Œdipe et le Sphinx, Protée, Argonautes)
                      réactivent des mythes anciens, inscrivant l'aventure dans une tradition de voyages initiatiques et
                      épiques. Le Nautilus lui-même prend des allures d'"arche sainte", conférant au récit une dimension
                      quasi mystique et une aura de caractère sacré. 🐉 N'oubliez pas la dimension imaginaire et
                      légendaire de la mer.
                    </p>
                  </div>
                </details>

                {/* Thème 4 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">4.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          La Révélation du Sublime et de l'Étrange
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> La nature sous-marine est dépeinte avec un sens aigu du sublime (au
                      sens kantien), mélangeant une beauté époustouflante (comme les forêts sous-marines et les grottes
                      de glace qualifiées de "mine éblouissante de gemmes") à une étrangeté parfois inquiétante. Cette
                      altérité radicale du monde sous-marin bouleverse les repères terrestres et plonge les personnages
                      dans une perception sensorielle altérée, invitant à une contemplation sous cloche où la
                      magnificence côtoie l'inexplicable. ✨ Insistez sur l'émotion et le vertige face à l'inconnu.
                    </p>
                  </div>
                </details>

                {/* Thème 5 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">5.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          La Nature comme Matrice de la Dialectique Prison/Liberté
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Le thème de l'expérience de la nature est indissociable de la
                      dialectique de la prison et de la liberté. Pour Nemo, l'océan est un asile politique et un refuge
                      de liberté absolue, sa "vaste propriété" exploitée en autarcie. Cependant, pour Aronnax, Conseil
                      et Ned Land, cette liberté océanique a un prix : un enfermement physique et une perte de leur
                      liberté de choix, faisant du Nautilus une prison dorée. La nature, loin d'être un simple havre,
                      redéfinit les termes de l'autonomie et pousse à une adaptation forcée à ce nouvel "élément". 🔗
                      Soulignez le paradoxe de la liberté acquise par la contrainte.
                    </p>
                  </div>
                </details>

                {/* Thème 6 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">6.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          La Nature comme Révélateur de Dilemmes Moraux et Existentiels
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> L'aventure sous-marine se transforme en un voyage intérieur,
                      forçant les personnages à découvrir leurs propres limites et à affronter des conflits intérieurs.
                      Le dilemme d'Aronnax entre la quête scientifique et le retour à la liberté terrestre est central.
                      La nature n'est pas neutre ; elle agit comme un "miroir ou révélateur", posant des questions
                      éthiques fondamentales et menant à une expérience existentielle où la science et la survie
                      confrontent les valeurs profondes de l'homme. 🤔 N'oubliez pas la dimension psychologique et
                      éthique du voyage.
                    </p>
                  </div>
                </details>

                {/* Thème 7 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">7.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          La Nature comme Manifestation du Temps Profond et de l'Évolution
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> L'exploration de la nature est aussi une plongée dans le temps
                      géologique. La découverte de l'Atlantide est l'apogée de cette immersion dans un "passé lointain"
                      et des "époques antédiluviennes". La nature devient un musée vivant de l'histoire de la Terre, où
                      les "squelettes d'animaux des temps fabuleux" et les "arbres minéralisés" témoignent de
                      l'évolution. Les discussions sur la formation de la houille et l'âge des atolls illustrent une
                      relativisation des récits humains (comme les "jours bibliques") face aux théories évolutionnistes
                      de Darwin et à une temporalité scientifique immense. ⏳ Mettez en avant le dialogue entre la
                      science et la religion de l'époque.
                    </p>
                  </div>
                </details>

                {/* Thème 8 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">8.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          La Nature comme Enjeu Écologique et Morale : La Vision de Nemo
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> "Vingt mille lieues sous les mers" est précurseur dans sa réflexion
                      écologique. Le Capitaine Nemo incarne un gardien de l'océan, dont le mode de vie en autarcie et le
                      respect des ressources marines ("Mes troupeaux... paissent sans crainte les immenses prairies de
                      l'Océan") anticipent les préoccupations environnementales modernes, faisant de son leadership une
                      leçon de gestion raisonnée et respectueuse. Sa vision de la mer comme un écosystème complet et
                      autonome et la métaphore écologique profonde de l'argonaute et du Nautilus soulignent une symbiose
                      entre l'être et son environnement, où la nature est un refuge contre l'humanité destructrice. 🌳
                      Pensez à Nemo comme un éco-guerrier avant l'heure.
                    </p>
                  </div>
                </details>

                {/* Thème 9 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">9.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          L'Expérience Technique : Le Nautilus comme Médiateur Ambigü
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Le Nautilus est bien plus qu'un simple sous-marin ; c'est un outil
                      de médiation technologique entre l'homme et la nature, rendant l'océan habitable et visible. Cette
                      utopie technique reflète la foi de Verne dans le progrès. Cependant, cette médiation est aussi une
                      mise à distance : le sous-marin protège mais isole, montre à travers une vitre, créant une
                      ambivalence sur la véritable rencontre avec la nature. C'est une illustration de la tension entre
                      libération et enfermement inhérente à la technologie. ⚙️ Insistez sur la dualité de la technologie
                      : outil et barrière.
                    </p>
                  </div>
                </details>

                {/* Thème 10 */}
                <details className="group border border-grey-200 rounded-lg p-4 hover:bg-grey-50 transition-colors cursor-pointer">
                  <summary className="font-medium text-grey-800 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="text-grey-600 font-bold text-lg">10.</span>
                      <div className="flex-1">
                        <p className="font-semibold text-grey-700 leading-relaxed">
                          La Nature : Source d'Adversité et de Combat pour la Survie
                        </p>
                        <div className="mt-2 text-sm text-blue-500 group-open:hidden">
                          Cliquez pour voir l'explication →
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-grey-200">
                    <p className="text-grey-800 leading-relaxed">
                      <strong>Explication :</strong> Au-delà de l'émerveillement et de la science, la nature est aussi
                      un adversaire redoutable. Ned Land incarne un rapport pragmatique et vital à cet environnement, y
                      cherchant nourriture et échappatoire, prêt à la défier et à la combattre. L'homme reste un corps
                      vulnérable dans un monde hostile, confronté aux tempêtes, aux glaces et aux créatures comme le
                      calmar géant. Cette dimension met en lumière la face concrète de l'adversité et le besoin constant
                      de survie face aux forces implacables de la nature, illustrant une "autre modernité" axée sur
                      l'action et le travail manuel. 🥊 N'oubliez pas la dimension de lutte et de survie face aux
                      éléments.
                    </p>
                  </div>
                </details>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Section: Définitions des Termes */}
        <Card>
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
                <p>
                  <strong className="text-gray-900">Positivisme :</strong> Connaissance par l’observation et la mesure
                  des faits.
                </p>
                <p>
                  <strong className="text-gray-900">Romantisme :</strong> Mouvement valorisant émotion, imagination,
                  individualisme.
                </p>
                <p>
                  <strong className="text-gray-900">Utopie technique :</strong> Idéal de société rendu possible par la
                  technologie.
                </p>
                <p>
                  <strong className="text-gray-900">Vanikoro :</strong> Île du Pacifique, site d’un naufrage historique
                  de l’expédition La Pérouse.
                </p>
                <p>
                  <strong className="text-gray-900">Détroit de Torres :</strong> Passage maritime étroit et dangereux au
                  nord de l’Australie.
                </p>
                <p>
                  <strong className="text-gray-900">Papous :</strong> Populations autochtones de Papouasie.
                </p>
                <p>
                  <strong className="text-gray-900">Maelström :</strong> Tourbillon marin légendaire (Norvège).
                </p>
                <p>
                  <strong className="text-gray-900">Lofoten :</strong> Archipel d’îles côtières en Norvège.
                </p>
                <p>
                  <strong className="text-gray-900">Introspectives :</strong> Réflexions sur soi-même, sur ses pensées.
                </p>
                <p>
                  <strong className="text-gray-900">Misanthropie :</strong> Haine ou défiance envers l’humanité.
                </p>
                <p>
                  <strong className="text-gray-900">Canal de Suez :</strong> Voie navigable artificielle
                  (Méditerranée-Mer Rouge).
                </p>
                <p>
                  <strong className="text-gray-900">Tunnel arabe :</strong> Passage sous-marin secret (Nemo).
                </p>
                <p>
                  <strong className="text-gray-900">Canot :</strong> Petite embarcation, souvent pour l’évasion.
                </p>
                <p>
                  <strong className="text-gray-900">Détroit de Gibraltar :</strong> Passage entre l’Atlantique et la
                  Méditerranée.
                </p>
                <p>
                  <strong className="text-gray-900">Atlantide :</strong> Continent ou cité mythique engloutie.
                </p>
                <p>
                  <strong className="text-gray-900">Mer des Sargasses :</strong> Zone de l’Atlantique avec beaucoup
                  d’algues flottantes.
                </p>
                <p>
                  <strong className="text-gray-900">Cap Horn :</strong> Cap dangereux à l’extrême sud de l’Amérique du
                  Sud.
                </p>
                <p>
                  <strong className="text-gray-900">Gulf Stream :</strong> Courant marin chaud dans l’Atlantique.
                </p>
                <p>
                  <strong className="text-gray-900">Sabordé :</strong> Navire coulé volontairement par son équipage.
                </p>
                <p>
                  <strong className="text-gray-900">Vingt mille lieues :</strong> Unité de distance, environ 80 000 km.
                </p>
                <p>
                  <strong className="text-gray-900">Taxonomique :</strong> Liée à la classification des êtres vivants.
                </p>
                <p>
                  <strong className="text-gray-900">Pragmatique et sensorielle :</strong> Basée sur l’expérience
                  concrète et les sens.
                </p>
                <p>
                  <strong className="text-gray-900">Lignée littéraire :</strong> Succession d’auteurs ou d’œuvres
                  influentes.
                </p>
                <p>
                  <strong className="text-gray-900">Léviathan :</strong> Monstre marin biblique et mythologique.
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-900">Caractère sacré :</strong> Qualité de ce qui est vénéré, inviolable.
                </p>
                <p>
                  <strong className="text-gray-900">Temps géologiques :</strong> Échelles de temps très longues
                  (millions d’années).
                </p>
                <p>
                  <strong className="text-gray-900">Savoir empirique :</strong> Connaissance acquise par l’expérience.
                </p>
                <p>
                  <strong className="text-gray-900">Approche empirique :</strong> Méthode basée sur l’expérience.
                </p>
                <p>
                  <strong className="text-gray-900">Darwin :</strong> Naturaliste célèbre pour la théorie de
                  l’évolution.
                </p>
                <p>
                  <strong className="text-gray-900">“Arche sainte” :</strong> Dimension sacrée, quasi divine du
                  Nautilus.
                </p>
                <p>
                  <strong className="text-gray-900">Relativisation des récits humains :</strong> Les découvertes
                  scientifiques bousculent les dogmes anciens.
                </p>
                <p>
                  <strong className="text-gray-900">Métaphore écologique profonde :</strong> Comparaison de
                  l’Argonaute/coquille à Nemo/Nautilus.
                </p>
                <p>
                  <strong className="text-gray-900">Trois niveaux d’habitat :</strong> Carapace psychologique, Nautilus,
                  mer entière pour Nemo.
                </p>
                <p>
                  <strong className="text-gray-900">Maîtriser par le savoir :</strong> Dominer le monde en le comprenant
                  et le nommant.
                </p>
                <p>
                  <strong className="text-gray-900">Expérience classificatoire :</strong> La science comme moyen de
                  ranger et d’ordonner le réel.
                </p>
                <p>
                  <strong className="text-gray-900">Sublime (au sens kantien) :</strong> Sentiment mêlé de crainte et
                  d’admiration face à ce qui nous dépasse.
                </p>
                <p>
                  <strong className="text-gray-900">Transcendance laïque :</strong> Une forme d’élévation spirituelle
                  sans lien religieux.
                </p>
                <p>
                  <strong className="text-gray-900">Asile politique :</strong> La mer comme refuge contre la société.
                </p>
                <p>
                  <strong className="text-gray-900">Prison dorée :</strong> Un lieu merveilleux mais qui prive de
                  liberté.
                </p>
                <p>
                  <strong className="text-gray-900">Tension entre libération et enfermement :</strong> Le paradoxe de la
                  technologie.
                </p>
                <p>
                  <strong className="text-gray-900">Encyclopédisme vernien :</strong> Le désir de Verne de faire du
                  roman une somme de savoirs.
                </p>
                <p>
                  <strong className="text-gray-900">Ichtyologie fantastique :</strong> Étude des poissons incluant des
                  éléments merveilleux ou surnaturels.
                </p>
                <p>
                  <strong className="text-gray-900">Nautilus :</strong> Sous-marin de Nemo, symbole de prouesse
                  technique et d’utopie.
                </p>
                <p>
                  <strong className="text-gray-900">Ballasts :</strong> Réservoirs contrôlant la plongée et la remontée
                  d’un sous-marin.
                </p>
                <p>
                  <strong className="text-gray-900">Gouvernail :</strong> Organe de direction d’un navire ou sous-marin.
                </p>
                <p>
                  <strong className="text-gray-900">Roman-monde :</strong> Roman vaste et encyclopédique, cherchant à
                  tout englober.
                </p>
                <p>
                  <strong className="text-gray-900">Fable politique et philosophique :</strong> Récit transmettant un
                  message moral ou social.
                </p>
                <p>
                  <strong className="text-gray-900">Dugong :</strong> Mammifère marin herbivore, similaire au lamantin.
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-900">Cachalot :</strong> Grand cétacé reconnaissable à sa tête massive.
                </p>
                <p>
                  <strong className="text-gray-900">In extremis :</strong> Au tout dernier moment, de justesse.
                </p>
                <p>
                  <strong className="text-gray-900">Fusionnelle :</strong> Tendance à se fondre avec, à ne faire qu’un
                  avec l’environnement.
                </p>
                <p>
                  <strong className="text-gray-900">Milieu :</strong> Environnement naturel spécifique.
                </p>
                <p>
                  <strong className="text-gray-900">Croyance irrationnelle :</strong> Foi sans fondement logique ou
                  scientifique.
                </p>
                <p>
                  <strong className="text-gray-900">Deus ex machina :</strong> Intervention inattendue pour résoudre une
                  situation complexe.
                </p>
                <p>
                  <strong className="text-gray-900">Devise latine :</strong> Expression courte en latin.
                </p>
                <p>
                  <strong className="text-gray-900">Symbiose :</strong> Association étroite et souvent bénéfique entre
                  différents éléments.
                </p>
                <p>
                  <strong className="text-gray-900">Dimension initiatique :</strong> Caractère de découverte et de
                  transformation personnelle.
                </p>
                <p>
                  <strong className="text-gray-900">Dilemme d’Aronnax :</strong> Choix difficile entre deux options,
                  souvent contradictoires.
                </p>
                <p>
                  <strong className="text-gray-900">Dolmens des temps antéhistoriques :</strong> Monuments mégalithiques
                  très anciens, antérieurs à l’histoire écrite.
                </p>
                <p>
                  <strong className="text-gray-900">Vocation didactique :</strong> But d’enseigner ou d’instruire.
                </p>
                <p>
                  <strong className="text-gray-900">Relativiser la séparation :</strong> Diminuer la distinction ou la
                  distance entre deux choses.
                </p>
                <p>
                  <strong className="text-gray-900">Dialectique entre la théorie et la pratique :</strong> Tension et
                  interaction dynamique entre le savoir livresque et l’expérience.
                </p>
                <p>
                  <strong className="text-gray-900">Dogmes religieux :</strong> Croyances imposées par une religion,
                  souvent sans discussion possible.
                </p>
                <p>
                  <strong className="text-gray-900">Adaptation des espèces à leur milieu :</strong> Capacité des êtres
                  vivants à s’ajuster à leur environnement.
                </p>
                <p>
                  <strong className="text-gray-900">Prépondérance de l’océan :</strong> Importance dominante de la mer.
                </p>
                <p>
                  <strong className="text-gray-900">Écosystème complet et autonome :</strong> Milieu de vie se suffisant
                  à lui-même.
                </p>
                <p>
                  <strong className="text-gray-900">Traumatisme historique :</strong> Conséquence psychologique d’un
                  événement douloureux du passé.
                </p>
                <p>
                  <strong className="text-gray-900">Expérience existentielle :</strong> Confrontation avec soi-même et
                  le sens de l’existence.
                </p>
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
              <Link href="/dashboard/fiches/haushofer">
                <div className="p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                  <h4 className="font-semibold text-purple-700">Le Mur invisible</h4>
                  <p className="text-sm text-gray-600">Marlen Haushofer</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
