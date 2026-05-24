# Portfólio — Thalisson Pereira

Site pessoal desenvolvido em **React + TypeScript** para apresentar minha trajetória, habilidades e projetos como desenvolvedor.

## Tecnologias

- **React 19** + **TypeScript**
- **Vite** (build e ambiente de desenvolvimento)
- **Material UI (MUI)** + Emotion (estilização)

## Estrutura

O projeto segue uma organização por componentes e seções:

- `src/components` — componentes reutilizáveis (NavBar, StyledButton, etc.)
- `src/pages` — páginas; as seções ficam em `src/pages/Home/sections` (Hero, About, Skills, Projects)
- `src/theme.ts` — tema centralizado (cores e tipografia)

## Funcionalidades

- Tema escuro com todas as cores centralizadas no tema
- Layout responsivo (desktop e mobile)
- Navegação suave entre as seções pelo menu
- Seção de projetos com links diretos para os repositórios

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a build de produção:

```bash
npm run build
```

## Deploy

Hospedado na **Vercel**, que detecta o Vite automaticamente — basta importar o repositório do GitHub.

## Autor

**Thalisson Pereira**
[LinkedIn](https://www.linkedin.com/in/thalissonpereira2003) · [GitHub](https://github.com/ThalissonS)
