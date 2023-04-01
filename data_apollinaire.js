var question = [
    // Oeuvre
    {
        "texte": "De quand date la publication d'Alcools ?",
        "reponse": "1913"
    },
    {
        "texte": "Dans quel mouvement littéraire s'inscrit cette œuvre ?",
        "reponse": "La modernité"
    },
    {
        "texte": "Quelle est la spécificité moderne de ce recueil ?",
        "reponse": "L'absence de ponctuation"
    },
    {
        "texte": "Que signifie le titre de l'oeuvre Alcools ?",
        "reponse": "Il évoque à la fois le pouvoir enivrant de l'alcool (sources d'ivresse poétique) mais aussi les brûlures qu'il peut infliger (= vie/amour)"
    },
    // Amours malheureuses du poète
    {
        "texte": "Qui sont les amours malheureuses d'Apollinaire ?",
        "reponse": "Annie Playden, Marie Laurencin (et Marie Dubois)"
    },
    {
        "texte": "Où Apollinaire a-t-il voyagé ?",
        "reponse": "En Allemagne (Rhénanie où il recontre Annie Playden) puis à Londres (pour la rejoindre)",
    },
    {
        "texte": "Où Annie Playden fuit-elle définitivement ?",
        "reponse": "En Amérique, Apollinaire le vit comme une trahison (« La Chanson du Mal-aimé »)"
    },
    {
        "texte": "Que symbolise l'automne ?",
        "reponse": "La mélancolie, la déception amoureuse (« Automne Malade »)"
    },
    // Inspirations et influences
    {
        "texte": "Comment se ressent l'inspiration rhénane dans le recueil ?",
        "reponse": 'Présence de paysage rhénan typique (vignes, sapins... « Mai ») ou des nixes (créature de la mythologie germanique)'
    },
    {
        "texte": "Quelle est l'influence du cubisme sur Alcools ?",
        "reponse": "Multiplication des points de vue (« Zone »)"
    },
    {
        "texte": "Qu'est-ce que l'idée de \"Mots en liberté\" ?",
        "reponse": "mouvement représenté par Marinetti selon lequel les vers se délestent de règles grammaticales, syntaxiques voir typographique pour apporter de la vitesse"
    },
    // Définitions
    {
        "texte": "Qu'est-ce qu'une vanité",
        "reponse": "Peinture issue du mouvement baroque : représentation du memento mori"
    },
    {
        "texte": "Quelles sont les définitons d'un avangardiste",
        "reponse": "A l'origine, groupe de soldats qui marchent à l'éccart de l'armée en éclaireur. Puis artistes et écrivains qui sont en avance sur leur temps"
    },
    {
        "texte": "Qu'est-ce que le lyrisme ?",
        "reponse": "Au départ une poésie chantée accompagnée d'une lyre puis dès le XVIIIe, devient l'expression des sentiments personnels"
    },
    {
        "texte": "Qu'est-ce que le tempus fugit ?",
        "reponse": "Etroitement lié au memento moris, c'est un motif traditionel qui image la fuite du temps (l'eau qui s'écoule « Le Pont Mirabeau »)"
    },
    {
        "texte": "Qu'est-ce que la tonalité élégiaque ?",
        "reponse": "A l'origine, l'élégie est un chant funèbre mais dès le Moyen-Âge, il s'agit de poèmes qui chante les plaintes et douleurs de l'être humain"
    },
    {
        "texte": "Comment appelle-t-on un \"cliché\" de la littérature ?",
        "reponse": "Un topos (ou topoï)"
    },
    {
        "texte": "Comment nomme-t-on un thème ou procédé réccurrent dans une oeuvre ?",
        "reponse": "Un leitmotiv"
    },
    {
        "texte": "Quel est le lieu plaisant, idyllique, propice aux amours et classsique de la littérature bucolique ?",
        "reponse": "Le locus amoenus"
    },
    {
        "texte": "Quel effet répète des images, thematiques etc en suivant le motif d'un cercle ?",
        "reponse": "L'effet de bouclage (« Zone » et « Vendémiaire » : la fin revient au début comme dans un cercle)"
    },
];


for (i in question) {
    question[i].asked = false
    question[i].correct = false
}