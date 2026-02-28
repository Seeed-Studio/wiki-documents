---
description: Reachy Mini es un robot expresivo y de código abierto creado para hackers y desarrolladores de IA. Incluye tienda de apps, SDK de Python y múltiples opciones de plataforma.
title: Reachy Mini
slug: /es/reachymini_intro
keywords:
- reachy mini
- robotics
- open source
- robot kit
- expressive robot
- python sdk
- ai robot
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Reachy Mini 🤖

[![Discord](https://img.shields.io/badge/Discord-Join_the_Community-7289DA?logo=discord&logoColor=white)](https://discord.gg/Y7FgMqHsub)

**Reachy Mini es un robot expresivo y de código abierto creado para hackers y desarrolladores de IA.**

🛒 [**Buy Reachy Mini**](https://www.hf.co/reachy-mini/)

[![Reachy Mini Hello](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_hello.gif)](https://www.pollen-robotics.com/reachy-mini/)

## ⚡️ Construye y pon en marcha tu propio robot

**Elige tu plataforma para acceder a la guía específica:**

| **🤖 Reachy Mini (Wireless)** | **🔌 Reachy Mini Lite** | **💻 Simulation** |
| :---: | :---: | :---: |
| La experiencia autónoma completa.<br/>Raspberry Pi 4 + batería + WiFi. | La versión para desarrolladores.<br/>Conexión USB a tu ordenador. | No se requiere hardware.<br/>Prototipa en MuJoCo. |
| 👉 [**Ir a la guía Wireless**](/es/reachymini_platforms_reachy_mini_get_started) | 👉 [**Ir a la guía Lite**](/es/reachymini_platforms_reachy_mini_lite_get_started) | 👉 [**Ir a Simulation**](/es/reachymini_platforms_simulation_get_started) |

:::tip Pro tip
Instala [uv](https://docs.astral.sh/uv/getting-started/installation/) para instalaciones de apps 10-100 veces más rápidas (se detecta automáticamente y, si no, usa `pip`).
:::

## 📱 Apps y ecosistema

Reachy Mini incluye una tienda de apps impulsada por Hugging Face Spaces. ¡Puedes instalar estas apps directamente desde el panel de tu robot con un solo clic!

* **🗣️ [Conversation App](https://huggingface.co/spaces/pollen-robotics/reachy_mini_conversation_app):** Habla de forma natural con Reachy Mini (impulsado por LLMs).
* **📻 [Radio](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio):** ¡Escucha la radio con Reachy Mini!
* **👋 [Hand Tracker](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2):** El robot sigue los movimientos de tu mano en tiempo real.

👉 [**Explora todas las apps en Hugging Face**](https://hf.co/reachy-mini/#/apps)

## 🚀 Primeros pasos con Reachy Mini SDK

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/h2lyqR2eMyM"
  frameborder="0"
  allowfullscreen
/>

### Vista rápida
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

### Guías de usuario
* **[Installation](/es/reachymini_sdk_installation)**: 5 minutos para configurar tu ordenador
* **[Quickstart Guide](/es/reachymini_sdk_quickstart)**: Ejecuta tu primer comportamiento en Reachy Mini
* **[Python SDK](/es/reachymini_sdk_python-sdk)**: Aprende a mover, ver, hablar y escuchar.
* **[AI Integrations](/es/reachymini_sdk_integration)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
* **[Core Concepts](/es/reachymini_sdk_core-concept)**: Arquitectura, sistemas de coordenadas y límites de seguridad.
* 🤗[**Comparte tu app con la comunidad**](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)
* 📂 [**Explora la carpeta de ejemplos**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🛠 Descripción general del hardware

Los robots Reachy Mini se venden en forma de kits y generalmente tardan **de 2 a 3 horas** en montarse. Hay guías detalladas paso a paso disponibles en las carpetas específicas de cada plataforma enlazadas arriba.

* **Reachy Mini (Wireless):** Se ejecuta a bordo (RPi 4), es autónomo e incluye IMU. [Ver especificaciones](/es/reachymini_platforms_reachy_mini_hardware).
* **Reachy Mini Lite:** Se ejecuta en tu PC, alimentado desde una toma de corriente. [Ver especificaciones](/es/reachymini_platforms_reachy_mini_lite_hardware).

## ❓ Resolución de problemas

¿Tienes algún problema? 👉 **[Consulta la guía de resolución de problemas y FAQ](/es/reachymini_troubleshooting)**

## 🤝 Comunidad y contribuciones

* **Únete a la comunidad:** Únete a [Discord](https://discord.com/2bAhWfXme9) para compartir tus momentos con Reachy, crear apps juntos y obtener ayuda.
* **¿Has encontrado un bug?** Abre un issue en [este repositorio](https://github.com/pollen-robotics/reachy_mini/issues).

## Licencia

Este proyecto está licenciado bajo la licencia Apache 2.0. Consulta el archivo [LICENSE](https://github.com/pollen-robotics/reachy_mini/tree/main/LICENSE) para más detalles.
Los archivos de diseño de hardware están licenciados bajo Creative Commons BY-SA-NC.
