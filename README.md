# Music Notes 🎵

**Music Notes** es un sitio web de apuntes personales sobre teoría musical, diseñado como referencia rápida para músicos y compositores. Aquí encontrarás conceptos clave como escalas, modos, funciones armónicas, estructura de canciones y más.

Este sitio está construido con [Docusaurus](https://docusaurus.io/), un generador de sitios estáticos moderno.

## 🚀 Enlace del sitio

👉 [https://erp-project-music.github.io/music-notes/](https://erp-project-music.github.io/music-notes/)

## 📦 Instalación

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
