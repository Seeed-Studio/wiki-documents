---
description: Descripción general del SDK de Reachy Mini con guía de inicio rápido, ejemplos de código y enlaces a la instalación, documentación del SDK de Python y recursos de la comunidad.
title: Reachy Mini SDK
slug: /reachymini_sdk_readme
keywords:
  - sdk
  - inicio rápido
  - python
  - ejemplos de código
  - tutoriales
  - primeros pasos
  - control de robots
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/es/reachymini_sdk_readme/
---

# Construye, juega e innova con Reachy Mini 🤖


<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: '1px solid #ddd', borderRadius: '8px'}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

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

## 🚀 Comenzar
* **[Instalación](/es/reachymini_sdk_installation)**: 5 minutos para configurar tu ordenador
* **[Guía de inicio rápido](/es/reachymini_sdk_quickstart)**: Ejecuta tu primer comportamiento en Reachy Mini
* **[SDK de Python](/es/reachymini_sdk_python-sdk)**: Aprende a moverte, ver, hablar y escuchar.
* **[Integraciones de IA](/es/reachymini_sdk_integration)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
* **[Creación y publicación de Apps](/es/reachymini_sdk_apps)**: Crea, prueba, publica y depura aplicaciones de Reachy Mini.
* **[Conceptos clave](/es/reachymini_sdk_core-concept)**: Arquitectura, sistemas de coordenadas y límites de seguridad.

## 📂 Ejemplos de código

Proporcionamos una colección de scripts listos para ejecutar para ayudarte a entender cómo utilizar funciones específicas del robot.

[**👉 Explorar la carpeta de ejemplos**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 Desarrollo asistido por IA

¿Usas un agente de programación con IA (Claude Code, Codex, Copilot, etc.)? Puedes empezar a crear aplicaciones de inmediato. Pega esta instrucción en tu agente:

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

Esta guía [**AGENTS.md**](/es/reachymini_agents) proporciona a los agentes de IA todo lo que necesitan: patrones del SDK, buenas prácticas, aplicaciones de ejemplo y habilidades paso a paso.

## ❓ Solución de problemas

¿Tienes algún problema? 👉 **[Consulta la guía de solución de problemas y preguntas frecuentes](/es/reachymini_troubleshooting)**

## 💬 Comunidad
* [Discord](https://discord.gg/Y7FgMqHsub) - Obtén ayuda y comparte proyectos.
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - Descubre aplicaciones de la comunidad.
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - Solicitudes de funciones y errores.