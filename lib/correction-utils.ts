import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function correctDissertation(text: string, sujet: string): Promise<{ correction: string; grade: number }> {
  try {
    const result = await generateText({
      model: openai('gpt-4-turbo'),
      prompt: `Tu es un correcteur expérimenté en dissertation de Français-Philosophie pour les classes préparatoires aux grandes écoles (CPGE). Évalue cette dissertation selon la grille officielle des concours (Mines-Ponts, Centrale, ENS, etc.).

## Barème officiel prépa (/20) :

**18-20/20** : Copie exceptionnelle (très rare)
**16-17/20** : Excellente copie, niveau concours
**14-15/20** : Très bonne copie, solide
**12-13/20** : Bonne copie, quelques lacunes
**10-11/20** : Copie correcte, défauts notables
**8-9/20** : Copie insuffisante
**6-7/20** : Copie faible
**0-5/20** : Copie défaillante

## Grille d'évaluation officielle :

### 1. Problématisation du sujet (5 points)
- Reformulation juste du sujet
- Mise en tension des enjeux philosophiques/littéraires
- Vraie problématique (pas une simple reformulation descriptive)

### 2. Construction et progression (6 points)
- Plan rigoureux et logique
- Transitions fluides
- Pas de répétition ni rupture
- Progression de la réflexion à chaque partie

### 3. Utilisation des œuvres au programme (5 points)
- Citations précises et contextualisées
- Compréhension des enjeux de chaque œuvre
- Mobilisation intelligente (pas de récitation)

### 4. Culture générale et références (2 points)
- Références philosophiques/littéraires bien intégrées
- Ouvertures pertinentes
- Originalité/profondeur de réflexion

### 5. Langue, style, expression (2 points)
- Syntaxe correcte, vocabulaire riche
- Absence de fautes graves
- Clarté, élégance, fluidité

## Pénalités majeures :
- Hors-sujet ou problématisation ratée : -5 à -8 points
- Analyse superficielle des œuvres : -3 à -5 points
- Plan bancal/absence transitions : -2 à -4 points
- Langue défaillante : -1 à -3 points
- Récitation sans réflexion : -2 à -4 points

## Bonifications possibles :
- Plan original mais rigoureux : +1 à +2 points
- Écriture argumentative remarquable : +1 point
- Pensée fine et nuancée : +1 à +2 points
- Usage pertinent des œuvres comme outils de pensée : +1 point

---

**Dissertation à évaluer :**
"""${text}"""

**Sujet :**
"""${sujet}"""

## Format de correction :

**ANALYSE PAR CRITÈRES :**

1. **Problématisation (/5)** : [Note + justification]
2. **Construction/Progression (/6)** : [Note + justification]  
3. **Usage des œuvres (/5)** : [Note + justification]
4. **Culture générale (/2)** : [Note + justification]
5. **Langue/Style (/2)** : [Note + justification]

**TOTAL BRUT :** X/20
**BONIFICATIONS/PÉNALITÉS :** +/-X
**NOTE FINALE :** X/20

**JUSTIFICATION :** [Explication de la note finale]

**POINTS FORTS :** [Ce qui est réussi]
**AXES D'AMÉLIORATION :** [Ce qui doit progresser]

Termine par "Note: X/20"`,
    });

    const correction = result.text;
    const grade = extractGrade(correction) || 0;

    return { correction, grade };
  } catch (error) {
    console.error('Erreur lors de la correction:', error);
    throw new Error('Impossible de corriger la dissertation');
  }
}

export async function correctResume(text: string, consigne: string): Promise<{ correction: string; grade: number }> {
  try {
    const result = await generateText({
      model: openai('gpt-4-turbo'),
      prompt: `Tu es un correcteur expérimenté en résumé de texte pour les classes préparatoires aux grandes écoles (CPGE). Évalue ce résumé selon la grille officielle des concours.

## IMPORTANT - CONTEXTE TECHNIQUE :
Ce résumé a été extrait d'un manuscrit par OCR (reconnaissance optique de caractères). Des erreurs de lecture peuvent exister :
- Fautes d'orthographe dues à l'OCR (ex: "definit" pour "définit")
- Mots mal reconnus ou coupés
- Erreurs de ponctuation

**CONSIGNE DE CORRECTION** : Évalue le FOND et la STRUCTURE, pas les erreurs techniques d'OCR. Concentre-toi sur la qualité intellectuelle du résumé.

## Barème officiel résumé (/20) :

**18-20/20** : Résumé exceptionnel (très rare)
**16-17/20** : Excellent résumé, niveau concours
**14-15/20** : Très bon résumé, solide
**12-13/20** : Bon résumé, quelques lacunes
**10-11/20** : Résumé correct, défauts notables
**8-9/20** : Résumé insuffisant
**6-7/20** : Résumé faible
**0-5/20** : Résumé défaillant

## Grille d'évaluation officielle :

### 1. Fidélité au texte original (6 points)
- Respect scrupuleux du fond et des idées
- Aucun contresens majeur
- Hiérarchisation correcte des arguments
- Respect de la logique de l'auteur
- **NOTE** : Ne pénalise PAS les erreurs d'OCR (orthographe, mots mal lus)

### 2. Structure et progression logique (5 points)
- Plan qui respecte l'architecture du texte original
- Articulations logiques maîtrisées (mots de liaison)
- Transitions fluides entre les idées
- Progression claire et cohérente

### 3. Technique de reformulation (4 points)
- Reformulation personnelle (pas de copier-coller)
- Vocabulaire varié et précis
- Condensation intelligente des idées
- Synthèse sans perte d'information essentielle
- **NOTE** : Juge l'intention de reformulation, pas les erreurs d'OCR

### 4. Respect de l'énonciation (3 points)
- **CRUCIAL** : Écriture À LA PLACE de l'auteur
- **INTERDIT** : "Selon l'auteur", "L'auteur explique"
- Maîtrise des pronoms et de la posture énonciative
- Ton et registre appropriés

### 5. Langue et respect des contraintes (2 points)
- Style clair, concis et élégant
- Fluidité de l'expression
- Respect du nombre de mots imposé
- **NOTE** : Pénalise légèrement les vraies fautes de l'élève, pas les erreurs d'OCR

## Fautes éliminatoires :
- **Contresens majeur** : -8 à -10 points
- **Rupture d'énonciation** ("Selon l'auteur...") : -3 à -5 points
- **Dépassement notable du nombre de mots** : -2 à -4 points
- **Copier-coller de phrases entières** : -3 à -5 points
- **Plan qui ne respecte pas la logique du texte** : -4 à -6 points

## Bonifications possibles :
- Reformulation particulièrement élégante : +1 point
- Maîtrise parfaite des articulations logiques : +1 point
- Condensation remarquable sans perte de sens : +1 point

---

**Résumé à évaluer (extrait par OCR d'un manuscrit) :**
"""${text}"""

**Consigne :**
"""${consigne}"""

## Format de correction :

**ANALYSE PAR CRITÈRES :**

1. **Fidélité au texte (/6)** : [Note + justification]
2. **Structure/Progression (/5)** : [Note + justification]
3. **Reformulation (/4)** : [Note + justification]
4. **Énonciation (/3)** : [Note + justification]
5. **Langue/Contraintes (/2)** : [Note + justification]

**TOTAL BRUT :** X/20
**PÉNALITÉS MAJEURES :** -X (si applicable)
**NOTE FINALE :** X/20

**JUSTIFICATION :** [Explication de la note finale]

**POINTS FORTS :** [Ce qui est réussi]
**ERREURS À CORRIGER :** [Fautes techniques et de fond]
**CONSEILS :** [Axes d'amélioration spécifiques]

Termine par "Note: X/20"`,
    });

    const correction = result.text;
    console.log("🎯 === RESUME CORRECTION DEBUG ===");
    console.log("📝 Correction text length:", correction.length);
    console.log("📝 First 200 chars:", correction.substring(0, 200));
    console.log("📝 Last 200 chars:", correction.substring(correction.length - 200));
    console.log("🔍 Looking for grade patterns...");
    
    const grade = extractGrade(correction) || 0;
    console.log("📊 Extracted grade:", grade);
    console.log("🎯 === END RESUME CORRECTION DEBUG ===");

    return { correction, grade };
  } catch (error) {
    console.error('Erreur lors de la correction:', error);
    throw new Error('Impossible de corriger le résumé');
  }
}

function extractGrade(correctionText: string): number | null {
  // Look for patterns like "Note : 15/20", "Note: 12/20", "**Note : 16/20**"
  const gradePatterns = [
    /\*\*Note\s*:\s*(\d+(?:\.\d+)?)\s*\/\s*20\*\*/i,
    /Note\s*:\s*(\d+(?:\.\d+)?)\s*\/\s*20/i,
    /(\d+(?:\.\d+)?)\s*\/\s*20/i,
  ]
  
  for (const pattern of gradePatterns) {
    const match = correctionText.match(pattern)
    if (match && match[1]) {
      const grade = parseFloat(match[1])
      if (grade >= 0 && grade <= 20) {
        return Math.round(grade * 10) / 10 // Round to 1 decimal place
      }
    }
  }
  
  return null
}
