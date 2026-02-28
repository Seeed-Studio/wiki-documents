---
description: Guía de uso de Reachy Mini que cubre la interfaz web Dashboard, la gestión de apps y el inicio rápido del SDK de Python.
title: Uso de Reachy Mini
slug: /es/reachymini_platforms_reachy_mini_usage
keywords:
- usage
- dashboard
- apps
- python
- sdk
- control
- management
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Uso de Reachy Mini

Ahora que tu robot está conectado, aquí tienes cómo interactuar con él. Puedes controlarlo visualmente usando el **Dashboard** o de forma programática usando **Python**.

## 1. El Dashboard 🕹️

:::info
El Dashboard es la interfaz web que se ejecuta dentro de tu robot. Te permite comprobar el estado del robot, actualizar el sistema y gestionar aplicaciones.
:::

**Acceso:** Abre [http://reachy-mini.local:8000/](http://reachy-mini.local:8000/) en tu navegador.

### Funciones

* **System Updates:** Mantén siempre tu robot actualizado. Ve a la pestaña *Settings* y haz clic en "Check for updates".
* **Hardware Monitor:** Comprueba el nivel de batería, la temperatura de los motores y el uso de disco.
* **Network:** Configura las conexiones Wi‑Fi.

## 2. Aplicaciones 📱

:::tip
Reachy Mini puede ejecutar "Apps": comportamientos autónomos empaquetados para el robot (como una demo de Conversation, un Game o un Dance).
:::

### Cómo usar Apps

**Paso 1:** Ve a la pestaña *Apps* en el Dashboard.

**Paso 2:** Haz clic en el botón "Store" para explorar el ecosistema de [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini). Puedes instalar cualquier app compatible con un solo clic.

**Paso 3:** Haz clic en el botón "Play" ▶️ en una app instalada. El robot iniciará el comportamiento inmediatamente.

**Paso 4:** Haz clic en el botón "Stop" ⏹️ para detener la aplicación.

:::warning
Cuando una App está en ejecución, toma el control del robot. No puedes ejecutar scripts de Python mientras una App está activa.
:::

## 3. Inicio rápido de programación 🐍

:::info
¿Listo para escribir tu propia lógica? Reachy Mini se controla mediante un sencillo SDK de Python.
:::

👉 **[Ir a la documentación del SDK](../../SDK/readme.md)** para una visión general completa.

## ❓ Resolución de problemas

¿Tienes algún problema? 👉 **[Consulta la Guía de resolución de problemas y FAQ](../../troubleshooting.md)**
