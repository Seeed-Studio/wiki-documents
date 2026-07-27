---
description: Guía para usar agentes de programación con IA para crear aplicaciones de Reachy Mini, señalando a la documentación AGENTS.md para que los agentes de IA entiendan los patrones del SDK y las mejores prácticas.
title: Vibra con código junto a tu agente
slug: /reachymini_vibe-code-with-your-agent
keywords:
  - vibe coding
  - ai agent
  - claude code
  - copilot
  - agent
  - app building
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_vibe-code-with-your-agent/
---
# Programa una app de Reachy Mini con tu agente favorito 🤖

¿Usas un agente de programación con IA (Claude Code, Codex, Copilot, etc.)? Puedes empezar a crear aplicaciones de inmediato.
Pega este prompt en tu agente:

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md  I want my app to do [describe your app idea here].*

Esta guía AGENTS.md les da a los agentes de IA todo lo que necesitan: patrones del SDK, mejores prácticas, aplicaciones de ejemplo y habilidades paso a paso.

## Guía paso a paso

**1. Deja que el agente analice el proyecto**

Abre tu herramienta de agente (aquí usamos Kimi Code como ejemplo) y pídele que analice los archivos y el proyecto en las siguientes dos páginas:

Ejemplo: Analiza el proyecto y los archivos en https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md y  https://github.com/pollen-robotics/reachy_mini/tree/main

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_1.webp" />
</div>

**2. Indica la versión de hardware y comienza el desarrollo**

Una vez completado el análisis, dile a la IA si tu Reachy Mini es la versión con cable o inalámbrica, y pídele que comience a desarrollar el proyecto por ti.

Ejemplo: Actualmente estoy usando la versión con cable. Haz un proyecto de corrección de postura que emita un aviso por voz cuando detecte que la persona está sentada con una mala postura.

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_2.webp" />
</div>

**3. Inicia el daemon**

Cuando la IA termine el proyecto, abre una terminal, entra en el entorno virtual correspondiente y ejecuta:

```bash
reachymini-mini-daemon
```

**4. Ejecuta el script**

Abre otra terminal y ejecuta el script escrito por la IA para empezar. Si encuentras algún pequeño error o quieres añadir funciones sobre la versión actual, puedes seguir conversando con la IA para que haga los cambios correspondientes.

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_3.webp" />
</div>

Esto te permitirá desarrollar robots con IA de forma rápida: crear, probar e iterar aplicaciones de Reachy Mini. ¡E incluso publicarlas en la tienda de aplicaciones de Hugging Face para que las use todo el mundo!
