---
description: Guía de uso de Reachy Mini Lite que cubre el panel de la aplicación de escritorio, demostraciones de acciones rápidas, instalación de la app y guía rápida del SDK de Python.
title: Uso de Reachy Mini Lite
slug: /reachymini_platforms_reachy_mini_lite_usage
keywords:
  - uso
  - panel
  - aplicación de escritorio
  - aplicaciones
  - demostraciones
  - python
  - sdk
  - control
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_reachy_mini_lite_usage/
---

# Uso de Reachy Mini Lite

Ahora que tu robot está conectado, aquí te mostramos cómo interactuar con él. Puedes controlarlo visualmente usando **Reachy Mini Control** o de forma programática usando **Python**.

Consulta [esta guía](/es/reachymini_platforms_reachy_mini_lite_get_started) si aún no has instalado la aplicación.

## 1. Reachy Mini Control 🖥️

**Reachy Mini Control** es la aplicación de escritorio para tu robot. Te permite comprobar el estado del robot, actualizar el sistema y gestionar aplicaciones.

Abre **Reachy Mini Control** y conecta tu robot por USB. Una vez conectado, verás información en tiempo real sobre tu robot.

* **Estado y Visualizador (Panel izquierdo):**
    * **Vista 3D:** Muestra la posición en tiempo real del robot.
    * **Listo/No listo:** Indica si el robot está correctamente conectado por USB.
    * **Sensores:** Supervisa la entrada del micrófono y el volumen del altavoz.
    * **Registros (Logs):** Consulta los detalles técnicos y eventos de conexión en la parte inferior.

### Funciones

* Controla la **Cabeza** y las **Antenas** usando la pestaña *Controller*.

![Pestaña Controller](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-controller.png)

* Juega con las **Expresiones**: Haz que tu robot esté feliz, triste, enfadado y más con las expresiones integradas.

![Pestaña Expressions](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-expressions.png)

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

👉 **[Ir a la documentación del SDK](/es/reachymini_sdk_readme)** para una visión general completa.

## ❓ Resolución de problemas

¿Tienes algún problema? 👉 **[Consulta la Guía de resolución de problemas y preguntas frecuentes](/es/reachymini_troubleshooting)**