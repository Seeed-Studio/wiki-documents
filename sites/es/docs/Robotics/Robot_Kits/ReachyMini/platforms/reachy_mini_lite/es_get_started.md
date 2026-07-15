---
description: Guía de configuración de Reachy Mini Lite que incluye instrucciones de montaje, conexión USB y descarga de la app de escritorio para Windows, macOS y Linux.
title: Guía de configuración de Reachy Mini Lite
slug: /reachymini_platforms_reachy_mini_lite_get_started
keywords:
  - lite
  - configuración
  - montaje
  - usb
  - app de escritorio
  - conexión
  - educación
  - desarrollo
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_reachy_mini_lite_get_started/
---

# Reachy Mini Lite - Guía de configuración

El **Reachy Mini Lite** es la versión con cable diseñada para educación y desarrollo. Requiere un ordenador para ejecutar su inteligencia.

## 1. 🔧 Montaje

Reachy Mini se entrega como un kit. ¡Montarlo es el primer paso de tu viaje!

* **Tiempo necesario:** de 2 a 3 horas.
* **Herramientas:** Todo está incluido en la caja.
* **Instrucciones:** Recomendamos encarecidamente seguir la guía en vídeo junto con el manual.

:::tip Consejo profesional
Recomendamos encarecidamente tener la **Guía en línea** o el **vídeo de montaje** abiertos junto con el folleto en papel (ver más abajo). La versión en línea incluye breves extractos de vídeo para cada paso, lo que hace que el montaje sea mucho más fácil de entender.
:::

| **📖 Guía digital interactiva** | **📺 Vídeo completo de montaje** |
| :---: | :---: |
| [![Assembly Guide](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/digital_assembly_guide_preview_mini_lite.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_LITE_Assembly_Guide)<br/>[**Abrir guía paso a paso**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_LITE_Assembly_Guide)<br/>*(Incluye pequeños bucles de vídeo)* | [![Watch on YouTube](https://img.youtube.com/vi/PC5Yx950nMY/maxresdefault.jpg)](https://www.youtube.com/watch?v=PC5Yx950nMY)<br/>[**Ver en YouTube**](https://www.youtube.com/watch?v=PC5Yx950nMY)<br/>*(Vídeo con secciones para cada paso)* |

## 2. 💻 Conexión

1.  **Encender:** Conecta el robot a una toma de corriente usando la fuente de alimentación proporcionada.
2.  **Conectar datos:** Conecta el cable USB desde el robot a tu ordenador.

## 3. 📥 Descargar Reachy Mini Control

:::warning
Compatibilidad de la app de escritorio

**⚠️ Compatibilidad de Reachy Mini Control:**
- **Sistemas ARM64 (DGX, Jetson, Surface, etc.) y distribuciones de Linux poco habituales:** Es posible que la app de escritorio no funcione en tu sistema.

**Alternativa:** Si la app de escritorio no funciona en tu configuración, puedes instalar y usar directamente el [Python SDK](/es/reachymini_sdk_readme), que es una forma totalmente compatible y válida de controlar tu robot.
:::

La app de escritorio **Reachy Mini Control** es el centro de mando de tu robot. Incluye herramientas de visualización, un lanzador de aplicaciones y ajustes del sistema, sin necesidad de usar la línea de comandos.

<div align="center">
  <a href="https://hf.co/reachy-mini/#/download">
    <img src="https://huggingface.co/spaces/pollen-robotics/Reachy_Mini/resolve/main/public/assets/desktop-app-screenshot--white.png" width="600" alt="Reachy Mini Control App" />
  </a>
</div>


**Obtener la app:**

* **👉 [Descargar desde el sitio web oficial](https://hf.co/reachy-mini/#/download)** (Recomendado para Windows, macOS, Linux)
* *Alternativa:* [GitHub Releases](https://github.com/pollen-robotics/reachy-mini-desktop-app/releases) (Para versiones específicas)

:::info Actualización automática
Una vez instalada, simplemente abre la app. Comprobará e instalará automáticamente las últimas actualizaciones tanto para la App como para el software interno del Robot.
:::

## 4. 🕹️ Siguiente paso: usar el robot

Ahora que todo está conectado e instalado, ¡ya estás listo para jugar!

👉 **[Ve a la guía de uso](/es/reachymini_platforms_reachy_mini_lite_usage)** para aprender a:
* Usar las funciones de la **app de escritorio**.
* Instalar y ejecutar **apps de la comunidad** (conversación, juegos, etc.).
* Programar tu Reachy con **Python**.

## ❓ Resolución de problemas

¿Te has encontrado con algún problema? 👉 **[Consulta la guía de resolución de problemas y preguntas frecuentes](/es/reachymini_troubleshooting)**