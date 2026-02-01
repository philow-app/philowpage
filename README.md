# Philow - CPGE Français & Philosophie

Plateforme d'aide pour les étudiants en CPGE (Classes Préparatoires aux Grandes Écoles) en Français et Philosophie.

## 📚 Fonctionnalités

### 🎯 Correction de Dissertations
- **OCR intelligent** : Conversion automatique de PDF/images de copies manuscrites en texte
- **Correction assistée par IA** : Analyse approfondie et conseils personnalisés
- **Barème automatique** : Notation sur 20 avec justification détaillée
- **Conseils d'amélioration** : Suggestions concrètes pour progresser

### 📖 Ressources Pédagogiques
- **Fiches de lecture** : Résumés et analyses d'œuvres au programme
  - Georges Canguilhem - *Le Normal et le Pathologique*
  - Marlen Haushofer - *Le Mur invisible*
  - Jules Verne - *L'Île mystérieuse*
- **Méthodologie** : Guides complets pour la dissertation et l'explication de texte
- **Quiz interactifs** : Tests de connaissance et de vocabulaire

### 🎨 Thématiques
- Exploration des grandes thématiques philosophiques et littéraires
- Interface moderne avec navigation intuitive

## 🛠️ Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI modernes
- **OpenAI API** - Intelligence artificielle pour la correction
- **Tesseract.js** - OCR pour la reconnaissance de texte
- **PDF-lib** - Traitement des documents PDF

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/thopfl/Philow.git
cd Philow

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Ajouter vos clés API dans .env.local

# Lancer le serveur de développement
npm run dev
```

## 📝 Variables d'Environnement

Créez un fichier `.env.local` avec :

```env
OPENAI_API_KEY=your_openai_api_key_here
```

## 🎨 Structure du Projet

```
├── app/                    # Pages et API routes (App Router)
│   ├── api/               # Routes API
│   │   ├── ocr/          # OCR et traitement d'images
│   │   ├── correct/      # Correction de dissertations
│   │   └── ...
│   ├── dashboard/        # Interface principale
│   └── thematiques/      # Pages thématiques
├── components/           # Composants réutilisables
│   └── ui/              # Composants UI (shadcn/ui)
├── lib/                 # Utilitaires et helpers
└── public/              # Assets statiques
```

## 🎯 Utilisation

1. **Correction de Dissertation** :
   - Uploadez votre copie (PDF ou images)
   - L'OCR extrait automatiquement le texte
   - L'IA analyse et corrige votre travail
   - Recevez note et conseils personnalisés

2. **Ressources** :
   - Consultez les fiches de lecture
   - Testez vos connaissances avec les quiz
   - Suivez la méthodologie proposée

3. **Thématiques** :
   - Explorez les grandes questions philosophiques
   - Découvrez des analyses approfondies

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer la documentation

## 📄 Licence

Ce projet est sous licence MIT.

## 🔗 Liens

- [Demo Live](https://philow.vercel.app) *(à venir)*
- [Documentation](https://docs.philow.app) *(à venir)*

---

Développé avec ❤️ pour les étudiants en CPGE
