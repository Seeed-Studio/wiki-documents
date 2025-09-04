---
description: Espacio de Trabajo de Grove Vision AI v2 en la Plataforma SenseCraft AI
title: Espacio de Trabajo de Grove Vision AI v2 en la Plataforma SenseCraft AI
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /es/sensecraft-ai/grove-vision-ai-v2-workspace
aliases:
  - /es/grove_vision_ai_v2_workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## Primeros Pasos

### Conectar Grove-Vision AI v2

1. Conecte Grove - Vision AI V2 a la cámara a través del cable de conexión CSI.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

2. Conecte Grove - Vision AI V2 a su computadora vía USB. y seleccione USB Single/serial debug unit para conectar

:::note

Por favor use Chrome, Opera, o Edge para desplegar modelos de IA en XIAO ESP32S3 Sense y Grove Vision AI v2.

:::

3. Una vez conectado al dispositivo, leerá la información del dispositivo, información del modelo, y ejecutará el modelo para inferencia. Los usuarios pueden ajustar las configuraciones de Confianza e IoU para afinar la precisión de la inferencia del modelo.

- Confianza：La confianza se refiere al nivel de certeza o probabilidad asignado por un modelo a sus predicciones
- IoU：IoU se usa para evaluar la precisión de las cajas delimitadoras predichas comparadas con las cajas delimitadoras verdaderas

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image11.png)

### Reemplazar Modelo de IA

Si necesita reemplazar el modelo actualmente en ejecución del dispositivo, la plataforma SenseCrfat AI ofrece dos formas de hacerlo

1. Seleccione un modelo disponible públicamente en la plataforma SenseCraft AI o un modelo bajo la cuenta del usuario para reemplazarlo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image12.png)

2. Cargar directamente un modelo para reemplazo.
- Nombre del Modelo：ingrese un nombre
- Archivo del Modelo：Cargue un modelo en formato tflite
- Objeto ID: Clase de reconocimiento del modelo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image13.png)

### Configuración

Si necesita enviar los resultados de inferencia del dispositivo a su propio servicio MQTT o a la plataforma Sensecraft Data, por favor configure Wi-Fi y MQTT. A continuación, usaremos la plataforma Sensecraft Data como ejemplo.

1. Ingrese un Wi-Fi 2.4G válido.
2. Acceda a la [plataforma SenseCraft Data](https://sensecap.seeed.cc/portal/#/login) e inicie sesión.

:::note

Puede usar la misma cuenta para iniciar sesión tanto en Sensecraft AI como en la plataforma Sensecraft Data.

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image14.png)

3. Acceda a la página Development Kit y haga clic en el botón "Create Development Kit".
4. Ingrese el nombre del dispositivo y seleccione "Grove-Vision AI v2" como el tipo de dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image15.png)

5. Una vez que el dispositivo esté creado, haga clic en "connect" y luego copie y pegue el Host, Port, clientId, Username, y Password secuencialmente.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image16.jpg)

6. Después de completar el formulario, haga clic en el botón Save. Una vez que el dispositivo haya aplicado exitosamente los cambios, vaya a la página Process. Verá la Dirección IP y el Estado del Servicio: MQTT conectado.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image17.png)

7. Ahora puede regresar a la página Development Kit de la plataforma Sensecraft Data. Haga clic en el EUI del dispositivo para ingresar a los detalles del dispositivo, donde podrá ver los resultados de inferencia.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image18.png)

### Salida

Establezca una condición para que cuando el objetivo detectado cumpla los criterios, el LED amarillo en el XIAO ESP32S3 se encienda.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image19.png)

Ejemplo:Si el dispositivo detecta Face y la confianza es mayor que 43, entonces encienda el led amarillo del dispositivo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image20.png)

### Entrenar

SenseCraft AI integra YoLo-World para generar rápidamente modelos de IA de una sola clase basados en la clase ingresada por el usuario, que puede ser desplegada directamente en dispositivos Grove-Vision AI v2.

### Generación Rápida

1. Ingrese la clase, haga clic en el botón Quick Generate, y espere a que el modelo sea generado.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image21.png)

2. Después de que el modelo sea generado, puede seleccionar el modelo y hacer clic en el botón Deploy to device para flashear el modelo generado en el dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image22.jpg)

3. Ver el resultado de inferencia

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image23.png)

### Capturar para Entrenar

El modelo generado rápidamente puede no tener alta precisión. Puede hacer clic en Capture to Train para tomar y recopilar imágenes objetivo. Envíe las imágenes recopiladas a Yolo-World para entrenamiento optimizado. El modelo optimizado tendrá mejor precisión.

1. Use la cámara Grove-Vision AI v2 para apuntar al objetivo, y haga clic en el botón Capture para recopilar imágenes.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image24.png)

2. Seleccione y confirme el objetivo en las imágenes capturadas.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image25.png)

3. Repita los pasos 1-2 para recopilar al menos 10 fotos para entrenamiento. Después de recopilar las imágenes, haga clic en el botón Train Model.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image26.png)

4. Una vez que el modelo sea generado, seleccione el modelo recién generado, despliéguelo en el dispositivo, y verifique los resultados de inferencia.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image27.png)


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