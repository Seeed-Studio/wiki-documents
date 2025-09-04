---
description: Espacio de Trabajo XIAO ESP32S3 en la Plataforma SenseCraft AI
title: Espacio de Trabajo XIAO ESP32S3 en la Plataforma SenseCraft AI
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /es/sensecraft-ai/xiao-esp32s3-workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## Primeros Pasos

### Conectar XIAO ESP32S3

1. Alinee el conector en la placa de expansión del sensor de cámara con el conector B2B en el XIAO ESP32S3 Sense y presiónelo para instalar el sensor de cámara.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

2. Conecte el XIAO ESP32S3 Sense a su computadora vía USB y seleccione la unidad de depuración USB JAG/serial para conectar el dispositivo.

:::note

Por favor use Chrome, Opera, o Edge para desplegar modelos de IA en XIAO ESP32S3 Sense y Grove Vision AI v2.

:::

3. Una vez conectado al dispositivo, leerá la información del dispositivo, información del modelo, y ejecutará el modelo para inferencia. Los usuarios pueden ajustar las configuraciones de Confianza e IoU para afinar la precisión de la inferencia del modelo.

- Confianza：La confianza se refiere al nivel de certeza o probabilidad asignado por un modelo a sus predicciones
- IoU：IoU se usa para evaluar la precisión de las cajas delimitadoras predichas comparadas con las cajas delimitadoras verdaderas

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image5.png)

### Reemplazar Modelo de IA

Si necesita reemplazar el modelo actualmente en ejecución del dispositivo, la plataforma SenseCrfat AI ofrece dos formas de hacerlo

1. Seleccione un modelo disponible públicamente en la plataforma SenseCraft AI o un modelo bajo la cuenta del usuario para reemplazarlo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image6.png)

2. Cargar directamente un modelo para reemplazo.

- Nombre del Modelo：ingrese un nombre
- Archivo del Modelo：Cargue un modelo en formato tflite
- Objeto ID: Clase de reconocimiento del modelo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image7.png)

### Salida

Establezca una condición para que cuando el objetivo detectado cumpla los criterios, el LED amarillo en el XIAO ESP32S3 se encienda.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image8.png)

Ejemplo:Si el dispositivo detecta Cara y la confianza es mayor que 43, entonces encienda el led amarillo del dispositivo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image9.png)

## **Soporte Técnico**

**¿Necesita ayuda con su SenseCAP Indicator? ¡Estamos aquí para asistirle!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
