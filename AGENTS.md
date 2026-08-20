# AGENTS.md — NewPortfolio (my-portfolio)

Site vitrine / CV en ligne d'une page (React + Vite), déployé en PWA sur `charlesbourgault.com/fr/`.

## Ce qui n'est PAS ici

| Quoi | Où |
|---|---|
| Règles de travail générales — vérifier avant d'affirmer, DRY/KISS/YAGNI, périmètre, échelle de doc officielle, outils obligatoires, git, accord explicite | `~/.omp/agent/RULES.md` |
| Le poste, les graphes de code, les workflows | `~/.omp/agent/AGENTS.md` |
| Faits durables du projet — versions, gate mesuré, dettes, points ouverts | `~/.omp/agent/bank/NewPortfolio.md` |

## Trois portfolios sur le disque

`Mon-Portfolio` et `mon-nouveau-portfolio-tanstack` sont deux **autres** dépôts, clones du même
distant, en divergence depuis leur fork. Vérifier lequel est visé avant d'éditer — ce n'est pas
le même code sous le même nom.

## Layout

Un seul package à la racine, pas de monorepo.

- `src/App.jsx` — routeur (`react-router-dom`), une unique route `/` → `Home`.
- `src/Home/` — assemble la page en empilant les sections.
- `src/containers/` — les sections de la page (`Header`, `About`, `Projects`, `Parcours`,
  `Contact`, `Footer`), une par sous-dossier.
- `src/components/` — pièces réutilisées par les containers (`Navbar`, `Gallery`, `ContactForm`,
  `DarkMode`, `PWAUpdateHandler`, `Logo`, `Video`…).
- `src/data/projectsData.jsx` — contenu statique des projets affichés (images + métadonnées),
  regroupés en 4 catégories (`sass`, `javascript`, `react`, `games`).
- `src/styles/` — SCSS (`index.scss` + partiels `_settings.scss`, `components/`, `containers/`).
- `public/` — assets statiques servis tels quels, dont le CV en PDF.

## Stack

React `^18.3.1` + Vite `^5.4.1` — **seul projet du parc encore sur React 18**, et sur Vite 5
quand le reste tourne en 7 ou 8 : ne pas aligner une dépendance sur les autres dépôts sans
vérifier la compat React 18 d'abord.

Gestionnaire de paquets réel : **npm** — `package-lock.json` est committé, il n'y a pas de
`bun.lock`. Le script `gate` (`bun run lint`) invoque `bun` par convention d'outillage, mais
`npm ci` est ce que la CI utilise réellement pour installer.

## Commandes

Cinq scripts en tout, aucun autre :

```
bun run dev      # vite
bun run build    # vite build
bun run lint     # eslint .
bun run preview  # vite preview
bun run gate     # = lint, rien d'autre
```

**`gate` = `lint` seul.** Pas de `typecheck`, pas de `test`, **zéro fichier de test** dans le
dépôt. Un `gate` vert prouve l'absence d'erreur ESLint — il ne prouve ni que l'app compile
(pas de `tsc`, le projet est en JS pur sans vérif de types), ni qu'un composant rend
correctement, ni que le formulaire de contact fonctionne. Ne pas présenter un `gate` vert
comme une preuve de comportement.

## Déploiement — `.github/workflows/deploy.yml`

Sur push vers `main` : `npm ci` → `npm run build` → upload FTP (`FTP-Deploy-Action`) du
contenu de `dist/` vers `domains/charlesbourgault.com/public_html/fr/` sur **Hostinger**
(secrets `FTP_SERVER`/`FTP_USERNAME`/`FTP_PASSWORD`).

- `netlify.toml` existe à la racine mais **n'est plus le mécanisme de déploiement réel** : rien
  dans la CI ni dans le repo n'invoque Netlify. Ne pas s'y fier pour comprendre où le site part.
- `vite.config.js` a `base: "./"` (chemins relatifs) : nécessaire parce que le site est publié
  sous le sous-chemin `/fr/` et non à la racine du domaine — le changer casserait tous les
  assets en prod.
- La CI ne définit **aucune** variable `VITE_*` avant `npm run build`. Or
  `src/components/ContactForm/index.jsx` lit `VITE_PUBLIC_KEY` / `VITE_SERVICE_ID` /
  `VITE_TEMPLATE_ID` (clés EmailJS) via `import.meta.env` — sans elles injectées au build, ces
  valeurs sont `undefined` dans le bundle déployé et le formulaire de contact échoue
  silencieusement. Aucun `.env` n'est présent dans ce dépôt (seul `Mon-Portfolio` en a un).

## Pièges propres au dépôt

- **`dev-dist/` est committé** (~870 Ko, fichiers Workbox générés par `vite-plugin-pwa` en mode
  dev) : ce sont des artefacts de build, pas du code source. Ne pas les éditer à la main, ne pas
  les prendre pour une référence de comportement du service worker en prod.
- Le PWA (`vite-plugin-pwa`, `registerType: "autoUpdate"`) régénère son propre service worker au
  build ; `dev-dist/` n'a aucun rapport avec ce qui est réellement déployé.
- Contenu 100 % en français (UI et texte), cohérent avec le sous-chemin `/fr/` de déploiement —
  volontaire, ne pas traduire sans qu'on le demande.
- `eslint.config.js` cible `ecmaVersion: 2020` alors que `parserOptions.ecmaVersion` est
  `"latest"` : incohérence mineure dans la config, sans effet observé, à ne pas « corriger »
  sans raison de le faire.
