# Spanish-English Flashcard Learning Website

Premium-styled **Next.js + React + Tailwind CSS** flashcard site with two modes:

1. **Flashcard Screensaver**
   - One bouncing card (DVD-style movement)
   - Auto-flips between Spanish and English
   - Designed to run continuously (24/7 style)

2. **Flashcard Learner**
   - Learn in rounds of **20 words**
   - Then complete a **10-word matching test**
   - Each new test samples from all learned words so far:
     - 20 learned → test from 20
     - 40 learned → test from 40
     - 60 learned → test from 60
     - ... up to 1000

## Word Dataset

The app uses a bundled list of **1000 Spanish-English pairs**:

- `src/data/spanishEnglishWords.ts`
- Source adapted from the public `1000-common-words` dataset.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

## Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

Production:

```bash
npm run build
npm run start
```

## Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    flashcards/
      ModeSelector.tsx
      ScreensaverMode.tsx
      LearnerMode.tsx
  data/
    spanishEnglishWords.ts
  lib/
    flashcards.ts
```

## Customize

- **Replace words**: edit `src/data/spanishEnglishWords.ts`
- **Adjust round sizes**: edit constants/logic in `LearnerMode.tsx`
- **Change visuals**: update classes + palette in `globals.css` and flashcard components
- **Change typography**: update fonts in `src/app/layout.tsx`

## Accessibility + UX

- Keyboard-clickable controls
- High-contrast buttons/cards
- Reduced motion support via `prefers-reduced-motion`
- Clear visual states for selected and matched answers
