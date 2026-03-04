---
description: Guía de uso de Reachy Mini Lite que cubre el panel de la aplicación de escritorio, demostraciones de acciones rápidas, instalación de apps y guía rápida del SDK de Python.
title: Uso de Reachy Mini Lite
slug: /reachymini_platforms_reachy_mini_lite_usage
keywords:
- usage
- dashboard
- desktop app
- applications
- demos
- python
- sdk
- control
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Uso de Reachy Mini Lite

La versión Lite depende de tu ordenador para ejecutar su inteligencia. El centro de control para esto es la aplicación **Reachy Mini Control**.

:::info
Consulta [esta guía](/es/reachymini_platforms_reachy_mini_lite_get_started) si aún no la has instalado.
:::

## 1. Reachy Mini Control (Panel de control) 🖥️

Cuando abres la aplicación, accedes al panel de control completo de tu robot.

:::info Status & Visualizer (Left Panel)
* **3D View:** Muestra la posición en tiempo real del robot.
* **Ready/Not Ready:** Indica si el robot está correctamente conectado por USB.
* **Sensors:** Supervisa la entrada del micrófono y el volumen del altavoz.
* **Logs:** Muestra detalles técnicos y eventos de conexión en la parte inferior.
:::

## 2. Aplicaciones y Demos 📱

:::tip
No necesitas programar para empezar a divertirte. La app incluye un ecosistema integrado.
:::

### Acciones rápidas

Situadas en la parte inferior derecha, son demos integradas listas para lanzarse al instante:
* **Expressions:** Haz que Reachy exprese emociones (Happy, Sad, Angry, etc.).
* **Controller:** Teleopera el robot usando un game controller o deslizadores.

### Instalación de nuevas apps

Para ampliar las capacidades de Reachy con comportamientos creados por la comunidad:

**Paso 1:** Haz clic en el botón **"Discover apps"**. Esto abre la tienda de Hugging Face Spaces.

**Paso 2:** Selecciona una app (como un Game o una demo de Conversation) y haz clic en "Install".

**Paso 3:** Una vez instalada, la app aparecerá en tu lista de "Applications". Simplemente haz clic en **"Play"** para iniciarla.

:::warning
Cuando una App se está ejecutando, controla el robot. Detén la app antes de intentar ejecutar tus propios scripts de Python.
:::

## 3. Programar con Python 🐍

:::info
¿Listo para escribir tu propia lógica? Reachy Mini se controla mediante un sencillo SDK de Python.
:::

👉 **[Ir a la documentación del SDK](/es/reachymini_sdk_readme)** para una visión general completa.

## ❓ Resolución de problemas

¿Tienes algún problema? 👉 **[Consulta la Guía de resolución de problemas y FAQ](/es/reachymini_troubleshooting)**
