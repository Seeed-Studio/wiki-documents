---
description: Despliegue para el Asistente de Modelos
title: Despliegue
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Deploy_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Despliegue

SSCMA es un proyecto de código abierto que proporciona una herramienta de despliegue de modelos visual sin código y un SDK basado en CPP. Permite a los usuarios desplegar fácilmente modelos en diferentes plataformas sin escribir código complejo.

Las plataformas actualmente soportadas incluyen:

| Dispositivo | SenseCraft-AI | SSCMA-Micro SDK |
| :--- | :--- | :--- |
| [Xiao ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html) | ✅ | ✅ |
| [Grove Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html) | ✅ | ✅ |

## SenseCraft-AI

SenseCraft-AI es una herramienta de despliegue de modelos visual proporcionada por SSCMA. Con esta herramienta, los usuarios pueden desplegar fácilmente modelos en varias plataformas a través de operaciones simples. La herramienta proporciona una interfaz amigable para el usuario y no requiere ninguna codificación.

Las características principales de [SenseCraft-AI](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/) incluyen:

- Interfaz visual sin habilidades de codificación
- Despliegue rápido de modelos en diferentes plataformas
- Soporte para modelos TFLite

Paso 1. Abrir el sitio web de SenseCraft-AI

<div align="center">
  <a href="https://seeed-studio.github.io/SenseCraft-Web-Toolk"><img width="10%" src="https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"/></a>
</div>

Paso 2. Conectar el dispositivo a tu computadora

Conecta tu dispositivo a tu computadora usando un cable de datos con capacidad de transferencia de datos.

Paso 3. Seleccionar y conectar tu dispositivo

Después de ingresar a la página principal de SenseCraft-AI, necesitamos conectar el dispositivo primero. Por favor, haz clic en el botón de conectar.

![step3-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step3-1.png)

Luego, aparecerá una ventana en el navegador. Necesitamos seleccionar el puerto correcto de Xiao aquí. Para sistemas Windows, el puerto usualmente comienza con COM, mientras que para sistemas MacOS, el puerto usualmente comienza con /dev/tty y tiene la etiqueta USB JTAG. Si no estás seguro sobre el puerto correcto, actualiza esta página después de conectar el dispositivo y haz clic en el botón de conectar nuevamente, y verás el nuevo puerto apareciendo en la lista desplegable.

![step3-2](https://files.seeedstudio.com/sscma/docs/static/deploy/step3-2.png)

Paso 4. Elegir tu modelo

Una vez que el botón de conectar se convierte en un botón rojo de desconectar, podemos seleccionar el modelo de la lista "Available AI Models". Aquí, elegí reconocimiento facial como demostración. Después de la selección, haz clic en el botón enviar y espera unos segundos.

![step4-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step4-1.png)

Paso 5. Desplegar tu modelo

![step5-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step5-1.png)

Finalmente, llegamos a la sección de vista previa. Haz clic en el botón detener una vez en la esquina superior derecha, y luego haz clic en el botón invocar. Si todo va bien, puedes ver efectos de pantalla en tiempo real.

![step5-2](https://files.seeedstudio.com/sscma/docs/static/deploy/step5-2.png)

## SSCMA-Micro SDK

SSCMA también proporciona un SDK basado en CPP llamado SSCMA-Micro, permitiendo a los usuarios desplegar modelos en sus propios proyectos. Al integrar SSCMA-Micro, los usuarios pueden usar convenientemente los modelos desplegados en sus aplicaciones.

Las características del SDK [SSCMA-Micro](https://github.com/Seeed-Studio/SSCMA-Micro) incluyen:

- Basado en CPP, adecuado para varios sistemas embebidos y plataformas
- Proporciona una API simple pero poderosa para invocación e inferencia de modelos
- Soporte para modelos TFLite


:::tip
Más ejemplos están llegando pronto, mantente atento.
:::