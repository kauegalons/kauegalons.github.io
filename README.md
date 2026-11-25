# kauegalons.github.io

Portfólio pessoal de Kauê Galon — React + Vite, publicado no GitHub Pages.

🔗 **https://kauegalons.github.io**

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Editar conteúdo

- Textos, projetos e a seção de IA (PT e EN): `src/content.js`
- Experiências no método STAR: `src/experience.js`
- Foto: coloque em `public/foto.jpg` e siga o comentário em `src/App.jsx` (seção "sobre")

## Publicação

Todo push na branch `main` roda `.github/workflows/deploy.yml`, que faz o build e publica no GitHub Pages.
