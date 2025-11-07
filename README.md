# CV – Timeline Dynamique (Base)

Ce dossier contient la base d'un mini site CV, avec timeline animée (sans dépendances externes).

## Fichiers
- `index.html` — structure HTML et sections types (À propos, Expériences/timeline, Compétences, Formations, Contact).
- `styles.css` — thème sombre premium + animation douce.
- `script.js` — animation d'apparition des éléments de la timeline (IntersectionObserver).

## Utilisation
1. Ouvre `index.html` dans ton navigateur.
2. Remplace les textes “Prénom Nom”, “Titre du poste”, etc.
3. Duplique un bloc `.timeline__item` pour chaque expérience.
4. Remplace l’image de profil par la tienne (200×200 conseillé).
5. (Optionnel) Héberge via GitHub Pages / Netlify / Vercel.

## Personnalisation
- Les couleurs principales sont définies dans `:root` (variables CSS).
- Les tags de la timeline sont des `<li>` dans `.timeline__tags`.
- Le design est responsive, la timeline devient mono‑colonne sur mobile.
