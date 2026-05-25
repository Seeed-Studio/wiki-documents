---
description: Reachy Mini es un robot expresivo y de código abierto creado para hackers y desarrolladores de IA. Incluye tienda de aplicaciones, SDK de Python y múltiples opciones de plataforma.
title: Reachy Mini
slug: /reachymini_intro
keywords:
  - reachy mini
  - robótica
  - código abierto
  - kit de robot
  - robot expresivo
  - python sdk
  - robot de ia
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_intro/
---

# Reachy Mini 🤖

[![Discord](https://img.shields.io/badge/Discord-Join_the_Community-7289DA?logo=discord&logoColor=white)](https://discord.gg/Y7FgMqHsub)

**Reachy Mini es un robot expresivo y de código abierto creado para hackers y desarrolladores de IA.**

🛒 [**Comprar Reachy Mini**](https://www.hf.co/reachy-mini/)

[![Reachy Mini Hello](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachy_mini_hello.gif)](https://www.pollen-robotics.com/reachy-mini/)

## ⚡️ Construye y pon en marcha tu propio robot

**Elige tu plataforma para acceder a la guía específica:**

| **🤖 Reachy Mini (Wireless)** | **🔌 Reachy Mini Lite** | **💻 Simulación** |
| :---: | :---: | :---: |
| La experiencia autónoma completa.<br/>Raspberry Pi CM4 + batería + WiFi. | La versión para desarrolladores.<br/>Conexión USB a tu ordenador. | No se requiere hardware.<br/>Prototipa en MuJoCo. |
| 👉 [**Ir a la guía Wireless**](/es/reachymini_platforms_reachy_mini_get_started) | 👉 [**Ir a la guía Lite**](/es/reachymini_platforms_reachy_mini_lite_get_started) | 👉 [**Ir a la Simulación**](/es/reachymini_platforms_simulation_get_started) |

:::tip Pro tip
Instala [uv](https://docs.astral.sh/uv/getting-started/installation/) para instalaciones de aplicaciones 10-100 veces más rápidas (se detecta automáticamente y, si no, usa `pip`).
:::

## 📱 Apps y ecosistema

Reachy Mini incluye una tienda de aplicaciones impulsada por Hugging Face Spaces. ¡Puedes instalar estas apps directamente desde Reachy Mini Control con un solo clic!

* **🗣️ [Conversation App](https://huggingface.co/spaces/pollen-robotics/reachy_mini_conversation_app):** Habla de forma natural con Reachy Mini (impulsado por LLMs).
* **📻 [Radio](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio):** ¡Escucha la radio con Reachy Mini!
* **👋 [Hand Tracker](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2):** El robot sigue los movimientos de tu mano en tiempo real.

👉 [**Explora todas las apps en Hugging Face**](https://hf.co/reachy-mini/#/apps)

## 🚀 Primeros pasos con Reachy Mini SDK

<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: '1px solid #ddd', borderRadius: '8px'}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

### Vistazo rápido
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
* **[Instalación](/es/reachymini_sdk_installation)**: 5 minutos para configurar tu ordenador
* **[Guía de inicio rápido](/es/reachymini_sdk_quickstart)**: Ejecuta tu primer comportamiento en Reachy Mini
* **[Python SDK](/es/reachymini_sdk_python-sdk)**: Aprende a moverte, ver, hablar y escuchar.
* **[Integraciones de IA](/es/reachymini_sdk_integration)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
* **[Creación y publicación de Apps](/es/reachymini_sdk_apps)**: Crea, prueba, publica y depura apps de Reachy Mini.
* **[Conceptos básicos](/es/reachymini_sdk_core-concept)**: Arquitectura, sistemas de coordenadas y límites de seguridad.
* **[Tutoriales](/es/reachymini_examples_minimal_demo)**: Ejemplos prácticos para aprender el SDK paso a paso.
* 📂 [**Explora la carpeta de ejemplos**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🛠 Descripción general del hardware

Los robots Reachy Mini se venden como kits y generalmente tardan **de 2 a 3 horas** en montarse. Hay guías detalladas paso a paso disponibles en las carpetas específicas de cada plataforma enlazadas arriba.

* **Reachy Mini (Wireless):** Se ejecuta a bordo (RPi CM4), es autónomo e incluye IMU. [Ver especificaciones](/es/reachymini_platforms_reachy_mini_hardware).
* **Reachy Mini Lite:** Se ejecuta en tu PC, alimentado mediante toma de corriente. [Ver especificaciones](/es/reachymini_platforms_reachy_mini_lite_hardware).

## ❓ Solución de problemas

¿Tienes algún problema? 👉 **[Consulta la guía de solución de problemas y preguntas frecuentes](/es/reachymini_troubleshooting)**

## 🤝 Comunidad y contribución

* **Únete a la comunidad:** Únete a [Discord](https://discord.gg/2bAhWfXme9) para compartir tus momentos con Reachy, crear apps juntos y obtener ayuda.
* **¿Has encontrado un error?** Abre un issue en [este repositorio](https://github.com/pollen-robotics/reachy_mini/issues).
* **Próximos pasos:** Echa un vistazo a nuestra [hoja de ruta](/es/reachymini_troubleshooting_roadmap) y comparte tus comentarios.

## Licencia

Este proyecto está licenciado bajo la licencia Apache 2.0. Consulta el archivo [LICENSE](https://github.com/pollen-robotics/reachy_mini/tree/main/LICENSE) para más detalles.
Los archivos de diseño de hardware están licenciados bajo Creative Commons BY-SA-NC.