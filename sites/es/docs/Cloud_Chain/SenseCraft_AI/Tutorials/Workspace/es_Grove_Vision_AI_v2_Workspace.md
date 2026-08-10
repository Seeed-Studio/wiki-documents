---
description: Espacio de trabajo Grove Vision AI v2 en la plataforma SenseCraft AI
title: Espacio de trabajo Grove Vision AI v2 en la plataforma SenseCraft AI
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /sensecraft-ai/grove-vision-ai-v2-workspace
aliases:
  - /grove_vision_ai_v2_workspace
last_update:
  date: 08/22/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2025-09-04'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/grove-vision-ai-v2-workspace/
---

## Introducción

### Conectar Grove-Vision AI v2

1. Conecta Grove - Vision AI V2 a la cámara mediante el cable de conexión CSI.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

2. Conecta Grove - Vision AI V2 a tu ordenador mediante USB y selecciona la unidad de depuración USB Single/serial para conectarte.

:::note

Utiliza Chrome, Opera o Edge para desplegar modelos de IA en XIAO ESP32S3 Sense y Grove Vision AI v2.

:::

3. Una vez conectado al dispositivo, leerá la información del dispositivo, la información del modelo y ejecutará el modelo para la inferencia. Los usuarios pueden ajustar la configuración de Confidence e IoU para afinar la precisión de la inferencia del modelo.

- Confidence: Confidence se refiere al nivel de certeza o probabilidad asignado por un modelo a sus predicciones
- IoU: IoU se utiliza para evaluar la precisión de los cuadros delimitadores predichos en comparación con los cuadros delimitadores reales

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image11.png)

### Reemplazar modelo de IA

Si necesitas reemplazar el modelo que se está ejecutando actualmente en el dispositivo, la plataforma SenseCrfat AI ofrece dos formas de hacerlo

1. Seleccionar un modelo de acceso público en la plataforma SenseCraft AI o un modelo bajo la cuenta del usuario para reemplazarlo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image12.png)

2. Subir directamente un modelo para reemplazo.

- Model Name: introduce un nombre
- Model File: sube un modelo en formato tflite
- ID Object: clase de reconocimiento del modelo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image13.png)

### Configuración

Si necesitas enviar los resultados de inferencia desde el dispositivo a tu propio servicio MQTT o a la plataforma Sensecraft Data, configura Wi-Fi y MQTT. A continuación, usaremos la plataforma Sensecraft Data como ejemplo.

1. Introduce una red Wi-Fi de 2,4G válida.
2. Accede a la [plataforma SenseCraft Data](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login) e inicia sesión.

:::note

Puedes usar la misma cuenta para iniciar sesión tanto en Sensecraft AI como en la plataforma Sensecraft Data.

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image14.png)

3. Accede a la página Development Kit y haz clic en el botón "Create Development Kit".
4. Introduce el nombre del dispositivo y selecciona "Grove-Vision AI v2" como tipo de dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image15.png)

5. Una vez creado el dispositivo, haz clic en "connect" y luego copia y pega secuencialmente el Host, Port, clientId, Username y Password.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image16.jpg)

6. Después de completar el formulario, haz clic en el botón Save. Una vez que el dispositivo haya aplicado correctamente los cambios, ve a la página Process. Verás la dirección IP y el estado del servicio: MQTT connected.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image17.png)

7. Ahora puedes volver a la página Development Kit de la plataforma Sensecraft Data. Haz clic en el EUI del dispositivo para entrar en los detalles del dispositivo, donde podrás ver los resultados de la inferencia.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image18.png)

### Salida

Configura una condición para que, cuando el objetivo detectado cumpla los criterios, se encienda el LED amarillo del XIAO ESP32S3.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image19.png)

Ejemplo: si el dispositivo detecta Face y la confianza es mayor que 43, entonces enciende el LED amarillo del dispositivo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image20.png)

### Entrenar

SenseCraft AI integra YoLo-World para generar rápidamente modelos de IA de una sola clase basados en la clase de entrada del usuario, que pueden desplegarse directamente en dispositivos Grove-Vision AI v2.

### Generación rápida

1. Introduce la clase, haz clic en el botón Quick Generate y espera a que se genere el modelo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image21.png)

2. Después de que se genere el modelo, puedes seleccionarlo y hacer clic en el botón Deploy to device para flashear el modelo generado en el dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image22.jpg)

3. Ver el resultado de la inferencia

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image23.png)

### Capturar para entrenar

El modelo generado rápidamente puede no tener una alta precisión. Puedes hacer clic en Capture to Train para tomar y recopilar imágenes del objetivo. Envía las imágenes recopiladas a Yolo-World para un entrenamiento optimizado. El modelo optimizado tendrá una mejor precisión.

1. Usa la cámara Grove-Vision AI v2 para apuntar al objetivo y haz clic en el botón Capture para recopilar imágenes.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image24.png)

2. Selecciona y confirma el objetivo en las imágenes capturadas.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image25.png)

3. Repite los pasos 1-2 para recopilar al menos 10 fotos para el entrenamiento. Después de recopilar las imágenes, haz clic en el botón Train Model.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image26.png)

4. Una vez que se genere el modelo, selecciona el modelo recién generado, despliega el modelo en el dispositivo y comprueba los resultados de la inferencia.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image27.png)

## **Soporte técnico**

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para ayudarte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
