---
sidebar_position: 4
description: Desplegar modelo a Jetson en la Plataforma SenseCraft AI
title: Usando un modelo para reComputer Jetson
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /es/sensecraft-ai/tutorials/sensecraft-deploy-model-to-jetson
aliases:
  - /es/sensecraft_deploy_model_to_jetson
last_update:
  date: 08/22/2024
  author: Frank
---

## Primeros Pasos

La plataforma SenseCraft AI proporciona una forma muy simple de desplegar modelos de IA a dispositivos edge como Jetson Orin, XIAO ESPS3, etc. ¡Disfruta del despliegue de modelos Edge AI sin complicaciones ahora!<br />

1. Selecciona o sube un modelo de IA para dispositivo Jetson<br />
2. Visita los detalles del modelo de IA y haz clic en el botón "Deploy Model"<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/10.png)

### **Paso 1  Instalar SenseCraft AI-Jetson**

1. Si tu dispositivo Jetson ya tiene SenseCraft AI instalado en el dispositivo, ve directamente al paso 2

2. Conecta Jetson a una pantalla y enciéndelo

3. Conecta un mouse y teclado al dispositivo y escribe el siguiente comando en una terminal para ejecutar la aplicación

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/11.png)

4. Instalación de SenseCraft AI-Jetson completa, por favor ve al paso 2<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/12.png)

### **Paso 2  Seleccionar dispositivo**
1. Si ya has agregado el dispositivo a la plataforma, puedes seleccionar directamente el dispositivo y hacer clic en siguiente para ir al paso 3<br />


![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/13.png)

2. Si necesitas agregar un nuevo dispositivo, por favor haz clic en el botón "Add Device" y aparecerá la ventana Agregar Dispositivo.<br />
3. Ingresa el nombre del dispositivo <br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/14.png)

4. Visita la Aplicación SenseCraft AI-Jetson en tu dispositivo y ve a la página de Configuración<br />
5. Habilita la configuración "Bind to SenseCraft AI platform" y obtén el código de vinculación <br />
6. Regresa a la plataforma SenseCraft AI e ingresa el código de vinculación válido para completar la adición<br />

:::note
si este código de vinculación está duplicado, necesitas ingresar el nombre temporal.
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/15.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/16.png)

7. Ahora selecciona el dispositivo y haz clic en siguiente para ir al paso 3

### **Paso 3  Seleccionar Stream**
1. Si quieres aplicar el modelo de IA en el stream de video existente del dispositivo, por favor selecciona directamente el stream de video y haz clic en "Send" para enviar el modelo al dispositivo.<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/17.png)

2. Si quieres aplicar el modelo de IA a un nuevo stream de video, haz clic en el botón "Add Stream" e ingresa la información del nuevo stream<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/18.png)

Para detalles de información del stream, por favor revisa la siguiente tabla 

| **Campos** | **Contenido** |
| --- | --- |
| **Stream Name** | 1 nombre personalizado para este stream.<br />2 No puede estar vacío |
| **Video Type** | 1 Cámara IP：Acceder a una cámara IP, necesita ingresar una url rtsp válida<br />2 Cámara USB：Conectar la cámara USB al dispositivo, reconocer automáticamente el USB, y luego seleccionar la cámara USB correcta en la ruta de video.<br />3 Video：Video integrado en el dispositivo, e ingresar en la ruta de video |
| **Video Path** | Ruta de Video, formato decidido por "Video Type", si es incorrecto, se usará el video por defecto. |
| **Confidence Threshold** | 1 Umbral de confianza del objeto para detección.<br />2 Formato:float [0, 1] |
| **IoU Threshold** | 1 IoU se usa para evaluar la precisión de las cajas delimitadoras predichas comparadas con las cajas delimitadoras verdaderas2 Formato:float [0, 1] |
| **FPS** | 1 Cuadros por segundo del stream<br />2 Formato: INT [1,60] |
| **Quality** | 1 Calidad del stream de salida.  Por defecto: 50<br />2 Formato: int [0,100] |
| **Maximum Detections** | 1 número máximo de detecciones por imagen.Por defecto:3002 Formato: int [0,1000] |
| **Display Frame Rate** | 1 Si mostrar la tasa de cuadros del stream<br />2 Formato:Bool [True,False]<br />● True: mostrar FPS<br />● False: no mostrar FPS |
| **Display Clock** | 1 Si mostrar la hora<br />2 Formato:Bool [True,False]<br />● True: mostrar hora<br />● False: no mostrar hora |

3. Haz clic en el botón "Send" para enviar el modelo al dispositivo. El despliegue del modelo tomará aproximadamente 5 minutos, siéntete libre de cerrar la página de vista previa y revisarlo en el espacio de trabajo del dispositivo después de que el despliegue esté completo.

4. Revisa el nuevo modelo en el dispositivo o en el espacio de trabajo del dispositivo en la plataforma AI<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/19.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/20.png)


## **Soporte Técnico**

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>