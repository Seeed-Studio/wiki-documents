---
description: Descripción general del SDK de Reachy Mini con guía de inicio rápido, ejemplos de código y enlaces a la instalación, documentación del SDK de Python y recursos de la comunidad.
title: Reachy Mini SDK
slug: /reachymini_sdk_readme
keywords:
- sdk
- quick start
- python
- code examples
- tutorials
- getting started
- robot control
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Crea, juega e innova con Reachy Mini 🤖

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/h2lyqR2eMyM"
  frameborder="0"
  allowfullscreen
/>

## ⚡️ Vista rápida
Controla tu robot con solo **unas pocas líneas de código**:

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # Look up and tilt head
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

## 🚀 Primeros pasos

:::tip New to Reachy Mini?
Sigue estas guías en orden:
:::

* **[Installation](https://wiki.seeedstudio.com/es/reachymini_sdk_installation)**: 5 minutos para configurar tu ordenador
* **[Quickstart Guide](https://wiki.seeedstudio.com/es/reachymini_sdk_quickstart)**: Ejecuta tu primer comportamiento en Reachy Mini
* **[Python SDK](https://wiki.seeedstudio.com/es/reachymini_sdk_python-sdk)**: Aprende a moverte, ver, hablar y escuchar.
* **[AI Integrations](https://wiki.seeedstudio.com/es/reachymini_sdk_integration)**: Conecta LLMs, crea Apps y publica en Hugging Face.
* **[Core Concepts](https://wiki.seeedstudio.com/es/reachymini_sdk_core-concept)**: Arquitectura, sistemas de coordenadas y límites de seguridad.

## 📂 Ejemplos de código

:::info Listo para ejecutar
Proporcionamos una colección de scripts listos para ejecutar que te ayudarán a entender cómo usar funciones específicas del robot.
:::

[**👉 Explora la carpeta de ejemplos**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 Desarrollo asistido por IA

:::tip For AI coding agents
¿Usas un agente de programación con IA (Claude Code, Codex, Copilot, etc.)? Puedes empezar a crear apps de inmediato. Pega este prompt en tu agente:
:::

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md*

Esta guía [**AGENTS.md**](/es/reachymini_agents) proporciona a los agentes de IA todo lo que necesitan: patrones del SDK, buenas prácticas, aplicaciones de ejemplo y habilidades paso a paso.

## ❓ Resolución de problemas

¿Tienes algún problema? 👉 **[Consulta la guía de resolución de problemas y preguntas frecuentes](https://wiki.seeedstudio.com/es/reachymini_troubleshooting)**

## 💬 Comunidad

* [Discord](https://discord.gg/Y7FgMqHsub) - Obtén ayuda y comparte proyectos.
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - Descubre aplicaciones de la comunidad.
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - Solicitudes de funciones y reporte de errores.
