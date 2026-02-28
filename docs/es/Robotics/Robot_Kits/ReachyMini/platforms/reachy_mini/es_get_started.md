---
description: Guía de configuración de Reachy Mini Wireless que incluye instrucciones de montaje, primer arranque, configuración de Wi‑Fi, actualización del sistema y acceso SSH.
title: Guía de Configuración de Reachy Mini Wireless
slug: /es/reachymini_platforms_reachy_mini_get_started
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
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Reachy Mini (Wireless) - Guía de Configuración

El **Reachy Mini (Wireless)** es la versión autónoma impulsada por una Raspberry Pi 4. Funciona de manera independiente usando su batería interna y la conexión Wi‑Fi.

## 1. 🔧 Montaje

Reachy Mini se entrega como un kit. ¡Montarlo es el primer paso de tu aventura!

:::info Detalles del Montaje
* **Tiempo necesario:** de 2 a 3 horas.
* **Herramientas:** Todo está incluido en la caja.
* **Instrucciones:** Recomendamos encarecidamente seguir la guía en video junto con el manual.
:::

:::tip Consejo Profesional
Recomendamos encarecidamente tener la **Online Guide** o el **assembly video** abiertos junto al folleto en papel (ver más abajo). La versión en línea incluye breves extractos de video para cada paso, lo que hace que el montaje sea mucho más fácil de entender.
:::

| **📖 Guía Digital Interactiva** | **📺 Video Completo de Montaje** |
| :---: | :---: |
| [![Assembly Guide](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/digital_assembly_guide_preview_mini.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>[**Open Step-by-Step Guide**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>*(Incluye pequeños bucles de video)* | [![Watch on YouTube](https://img.youtube.com/vi/WeKKdnuXca4/maxresdefault.jpg)](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>[**Watch on YouTube**](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>*(Video con secciones para cada paso)* |

## 2. 🛜 Primer Arranque y Configuración de Wi‑Fi

Una vez montado, debes conectar el robot a tu red Wi‑Fi.

:::tip Paso 1: Encender
Enciende tu Reachy Mini.
:::

:::info Paso 2: Conectarse a Reachy
Espera unos momentos. El robot creará una red Wi‑Fi llamada **`reachy-mini-ap`**.
* **Password:** `reachy-mini`
* *O escanea el código QR:*

![QR-Code reachy-mini-ap](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/qrcode-ap.png)
:::

:::tip Paso 3: Configurar Wi‑Fi
* Abre tu navegador y ve a: **[http://reachy-mini.local:8000/settings](http://reachy-mini.local:8000/settings)**.
* Introduce las credenciales de tu Wi‑Fi local (SSID y Password) y haz clic en **"Connect"**.
* Espera unos momentos a que Reachy Mini se conecte a tu red Wi‑Fi. El punto de acceso desaparecerá una vez conectado. Si la conexión falla, Reachy Mini reiniciará el punto de acceso y podrás intentarlo de nuevo.
:::

## 3. 🔄 Actualizar el Sistema

:::warning Recomendado
Antes de continuar, se recomienda encarecidamente actualizar tu robot a la última versión.
:::

1.  **Abrir Settings:** Ve a **[http://reachy-mini.local:8000/settings](http://reachy-mini.local:8000/settings)**.
2.  **Buscar actualizaciones:** Haz clic en el botón **"Check for updates"**.
3.  **Instalar:** Si hay una nueva versión disponible, sigue las instrucciones en pantalla para instalarla.

## 4. 🕹️ Siguiente Paso: Usar el Robot

Ahora que tu robot está en línea y actualizado, ¡puedes empezar a controlarlo!

👉 **[Ve a la Guía de Uso](/es/reachymini_platforms_reachy_mini_usage)** para aprender cómo:
* Acceder al **Dashboard**.
* Instalar y ejecutar **Apps** (como Conversation o Games).
* Programar tu Reachy con **Python**.

## 5. 💻 Avanzado: Conectarse directamente a la Raspberry Pi interna mediante SSH

:::info Credenciales SSH
Si necesitas conectarte a la Raspberry Pi interna de Reachy Mini mediante SSH, las credenciales son:
:::

```bash
username: pollen
password: root
```

Una vez conectado mediante SSH, puedes comprobar la integridad de tu Raspberry Pi y la configuración del robot con:

```bash
reachyminios_check
```

## ❓ Resolución de Problemas

¿Tienes algún problema? 👉 **[Consulta la Guía de Resolución de Problemas y FAQ](/es/reachymini_troubleshooting)**

## Modo Experto

:::warning Guías para Expertos
Si necesitas reinstalar la Raspberry Pi desde cero o crear una imagen personalizada, sigue las guías para expertos que aparecen a continuación.
:::

<!-- * **[Reflash the ISO](../reflash_the_rpi_ISO.md)** -->
<!-- * **[Install Daemon from a Specific Branch](../install_daemon_from_branch.md)** -->
