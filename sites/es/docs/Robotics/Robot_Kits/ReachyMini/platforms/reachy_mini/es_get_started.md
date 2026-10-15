---
description: Guía de configuración para Reachy Mini Wireless que incluye instrucciones de montaje, primer arranque, configuración de Wi‑Fi, actualización del sistema y acceso SSH.
title: Guía de Configuración de Reachy Mini Wireless
slug: /reachymini_platforms_reachy_mini_get_started
keywords:
  - wireless
  - setup
  - assembly
  - wi-fi
  - first boot
  - configuration
  - ssh
  - update
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_reachy_mini_get_started/
---

# Reachy Mini (Wireless) - Guía de Configuración

El **Reachy Mini (Wireless)** es la versión autónoma impulsada por un Raspberry Pi Compute Module 4 (CM4). Funciona de manera independiente usando su batería interna y la conexión Wi‑Fi.

## 1. 🔧 Montaje

Reachy Mini se entrega como un kit. ¡Montarlo es el primer paso de tu aventura!

* **Tiempo necesario:** de 2 a 3 horas.
* **Herramientas:** Todo está incluido en la caja.
* **Instrucciones:** Recomendamos encarecidamente seguir la guía en video junto con el manual.

:::tip Consejo profesional
Recomendamos encarecidamente tener la **Guía en línea** o el **video de montaje** abiertos junto con el folleto en papel (ver más abajo). La versión en línea incluye breves extractos de video para cada paso, lo que hace que el montaje sea mucho más fácil de entender.
:::

| **📖 Guía Digital Interactiva** | **📺 Video Completo de Montaje** |
| :---: | :---: |
| [![Assembly Guide](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/digital_assembly_guide_preview_mini.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>[**Abrir Guía Paso a Paso**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>*(Incluye pequeños bucles de video)* | [![Watch on YouTube](https://img.youtube.com/vi/WeKKdnuXca4/maxresdefault.jpg)](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>[**Ver en YouTube**](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>*(Video con secciones para cada paso)* |


## 2. 🛜 Primer Arranque y Configuración de Wi‑Fi

Una vez montado, debes conectar el robot a tu red Wi‑Fi.

1.  **Encender:** Enciende tu Reachy Mini.
2. **Descargar Reachy Mini Control:** Si aún no lo has hecho, descarga e instala la app **Reachy Mini Control** desde el [sitio web oficial](https://hf.co/reachy-mini/#/download).
3. **Ejecutar la App:** Abre **Reachy Mini Control** y haz clic en el enlace inferior **"First time connecting..."**.
![First time connecting](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/first-setup-wifi-1.png)
4. **Seguir las instrucciones:** La app te guiará a través del proceso de conexión. Te pedirá que te conectes al punto de acceso Wi‑Fi del robot y luego configures tu Wi‑Fi.
![Configuring your WiFi](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/first-setup-wifi-2.png)

## 3. 🔄 Actualizar el Sistema

Antes de continuar, se recomienda encarecidamente actualizar tu robot a la última versión.

1. Conéctate a tu robot usando **Reachy Mini Control**.
2. Una vez conectado, haz clic en la pestaña de ajustes **"⚙️"**.
![Settings Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-settings.png)
3. Ve a la sección **System Updates**.
![System Update Section](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-update.png)
4.  **Instalar:** Si hay una nueva versión disponible, sigue las instrucciones en pantalla para instalarla.


## 4. 🕹️ Siguiente Paso: Usar el Robot

Ahora que tu robot está en línea y actualizado, ¡puedes empezar a controlarlo!

👉 **[Ve a la Guía de Uso](/es/reachymini_platforms_reachy_mini_usage)** para aprender a:
* Usar **Reachy Mini Control**.
* Instalar y ejecutar **Apps** (como Conversación o Juegos).
* Programar tu Reachy con **Python**.

## 5. 💻 Avanzado: Conectarse directamente a la Raspberry Pi interna vía SSH

Si necesitas conectarte a la Raspberry Pi interna de Reachy Mini vía SSH, las credenciales son:

```
username: pollen
password: root
```

Una vez conectado vía SSH, puedes comprobar la integridad de tu Raspberry Pi y la configuración del robot con:

```bash
reachyminios_check
```

## ❓ Resolución de Problemas

¿Tienes algún problema? 👉 **[Consulta la Guía de Resolución de Problemas y Preguntas Frecuentes](/es/reachymini_troubleshooting)**

## Modo Experto

Si necesitas reinstalar la Raspberry Pi desde cero o crear una imagen personalizada, sigue las guías para expertos.

**[Reflashear la ISO](/es/reachymini_platforms_reachy_mini_reflash_the_rpi_iso)**

**[Instalar el Daemon desde una Rama Específica](/es/reachymini_platforms_reachy_mini_install_daemon_from_branch)**

**[Flujo de Trabajo de Desarrollo](/es/reachymini_platforms_reachy_mini_development_workflow)** - Mejores prácticas para desarrollar y probar código en el Reachy Mini Wireless