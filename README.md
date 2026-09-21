# Rohit Paul — Portfolio

A static React + Vite portfolio for Rohit Paul, an AI/ML Engineer focused on GenAI, NLP, retrieval, and knowledge systems.

## Local development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. The included `.github/workflows/deploy-pages.yml` installs Node, runs `npm ci`, builds the site, and deploys `dist` with the official Pages actions.
4. The committed `public/CNAME` file keeps the custom domain attached to Pages. The Vite base is `/`, which is correct for `rohitpaul.me`.
5. If the first workflow run reports `Creating Pages deployment failed: Not Found`, enable Pages once in **Settings → Pages** with **Source: GitHub Actions**, then rerun the workflow. This is a repository setting rather than a code or credential requirement.

The downloadable CV is kept at `public/rohit-paul-cv.txt` and is copied to the site root during the build.

## Namecheap custom domain: rohitpaul.me

In the repository's **Settings → Pages → Custom domain**, enter `rohitpaul.me`. Commit the generated `CNAME` file if GitHub creates one, or add `public/CNAME` containing:

```text
rohitpaul.me
```

In Namecheap, open **Advanced DNS** for `rohitpaul.me` and create these records (remove conflicting URL redirect and parking records):

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `lazee01.github.io` |

DNS propagation can take up to 48 hours. Once GitHub Pages verifies the domain, enable **Enforce HTTPS**.

## Content notes

The site uses only the supplied CV details. To add another project, add one object to the typed `projects` array near the top of `src/main.tsx` with its `title`, `description`, `stack`, `status`, `repoUrl`, optional `demoUrl`, and visual `accent`. Project cards render automatically; use the existing `visual: 'graphmind'` value only for the bespoke GraphMind visual treatment. Keep repository and demo URLs accurate and omit `demoUrl` when one is not available.
