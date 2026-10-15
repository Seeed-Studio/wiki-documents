---
description: Guía de uso de Reachy Mini que cubre la interfaz web del panel, la gestión de aplicaciones y el inicio rápido del SDK de Python.
title: Uso de Reachy Mini
slug: /reachymini_platforms_reachy_mini_usage
keywords:
  - usage
  - dashboard
  - apps
  - python
  - sdk
  - control
  - management
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_reachy_mini_usage/
---

# Uso de Reachy Mini

Ahora que tu robot está conectado, aquí tienes cómo interactuar con él. Puedes controlarlo visualmente usando **Reachy Mini Control** o de forma programática usando **Python**.

## 1. Reachy Mini Control 🕹️

**Reachy Mini Control** es la aplicación de escritorio para tu robot. Te permite comprobar el estado del robot, actualizar el sistema y gestionar aplicaciones.

**Descarga:** Obtén la última versión de **Reachy Mini Control** desde el [sitio web oficial](https://hf.co/reachy-mini/#/download).

**Abre Reachy Mini Control** y conéctate a tu robot. Una vez conectado, verás información en tiempo real sobre tu robot.

![Reachy Mini Control](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-dashboard.png)

### Funciones

* Controla la **Cabeza** y las **Antenas** usando la pestaña *Controller*.

![Controller Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-controller.png)

* Juega con las **Expresiones**: Haz que tu robot esté feliz, triste, enfadado y más con las expresiones integradas.

![Expressions Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-expressions.png)

* En la pestaña *⚙️*, puedes:
    * **Actualizaciones del sistema:** Mantén siempre tu robot actualizado.
    * **Red:** Configura las conexiones Wi‑Fi.

## 2. Aplicaciones 📱

Reachy Mini puede ejecutar "Apps": comportamientos autónomos empaquetados para el robot (como una demo de conversación, un juego o un baile).

### Cómo usar las Apps
1.  **Explorar:** Ve a la pestaña *Applications* en Reachy Mini Control y haz clic en "Discover Apps". Esto abrirá el ecosistema de Hugging Face Spaces, donde puedes encontrar aplicaciones compatibles para tu robot.
2.  **Instalar:** Haz clic en el botón "Install" en una app para añadirla a tu robot.
3.  **Iniciar:** Haz clic en el botón "Start ▶️" en una app instalada. El robot iniciará el comportamiento inmediatamente.
4.  **Detener:** Haz clic en el botón "Stop" ⏹️ para detener la aplicación.

> **Nota:** Cuando una App se está ejecutando, toma el control del robot. No puedes ejecutar scripts de Python mientras una App está activa.

## 3. Inicio rápido de programación 🐍

¿Listo para escribir tu propia lógica? Reachy Mini se controla mediante un sencillo SDK de Python.

👉 **[Ve a la documentación del SDK](/es/reachymini_sdk_readme)** para una visión general completa.

## ❓ Solución de problemas

¿Tienes algún problema? 👉 **[Consulta la Guía de solución de problemas y preguntas frecuentes](/es/reachymini_troubleshooting)**