---
description: Este es un proyecto / plataforma de código abierto enfocado en IA embebida.
title: Entrena y Despliega Tu Propio Modelo de IA
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/train_and_deploy_model
last_update:
  date: 09/24/2024
  author: Frank
---

# Entrena y Despliega Tu Propio Modelo de IA

## Plataforma SenseCraft AI

La [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) de Seeed Studio es una Solución de IA basada en navegador.

Permite a los usuarios entrenar y desplegar sin esfuerzo sus propios modelos en sus dispositivos edge, proporcionando una experiencia fluida y fácil de usar, permitiéndote entrenar y desplegar tus propios modelos directamente en tus dispositivos edge con **solo unos pocos clics**.

:::info
El núcleo de esto es un proyecto de código abierto y lo hemos compartido en [GitHub](https://github.com/Seeed-Studio/ModelAssistant) y también ofrecemos el [método de desarrollo](/es/ModelAssistant_Introduce_Overview).
:::

## Comenzar a Entrenar el Modelo

Primero vamos al [Sitio Web de Despliegue SenseCraft AI](https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974), luego simplemente conecta el XIAO ESP32S3 Sense a tu PC mediante un cable de datos para comenzar a usar instantáneamente.

#### Paso 1. Instalar la placa de expansión XIAO ESP32S3 Sense

Primero, necesitamos conectar correctamente la placa de expansión XIAO ESP32S3 Sense al XIAO. Instalar la placa de expansión es muy simple, solo necesitas alinear el conector en la placa de expansión con el conector B2B en el XIAO ESP32S3, presionarlo fuerte y escuchar un "clic", la instalación está completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

#### Paso 2. Conectar el XIAO a tu PC

Conecta el XIAO a tu PC usando un cable de datos con función de transferencia de datos.

#### Paso 3. Ir a la página de la Plataforma SenseCraft AI y conectar el XIAO

Haz clic en el botón de abajo para ir a la página principal de la Plataforma SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"2"}>Plataforma SenseCraft AI</font></span></strong></a>
</div><br />

#### paso 4. Comenzar a entrenar el modelo

Después de entrar a la página principal de la plataforma SenseCraft AI, primero hacemos clic en `Training`, luego seleccionamos `Classification Type`, nombramos tus clases, y finalmente elegimos `XIAO ESP32S3 Sense`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/1.png" style={{width:800, height:'auto'}}/></div>

Luego, basándote en tus requisitos para clasificación, refiere a tu clase, y haz clic en `Hold to Record`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/2.png" style={{width:800, height:'auto'}}/></div>

Esta vez, elegí el requisito para reconocimiento de gestos para clasificar "12345."

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/3.png" style={{width:800, height:'auto'}}/></div>

:::tip

Capturar imágenes: Cada una con más de 10 imágenes estará bien, más es mejor.

:::

Después de que la recolección de datos esté completa, seleccionamos `XIAO ESP32S3 Sense` en la sección Training y hacemos clic en `Start Training`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/4.png" style={{width:800, height:'auto'}}/></div>

Después de que el entrenamiento esté completo, podemos ver nuestros resultados de entrenamiento a través de una vista previa en tiempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/5.png" style={{width:800, height:'auto'}}/></div>

#### paso 5. Desplegar el modelo

Después de previsualizar y confirmar que el modelo entrenado está bien, seleccionamos `Training Records`, luego elegimos el modelo recientemente entrenado (llamado "ClassTrain" y "XIAO") y hacemos clic en `Deploy to device`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/6.png" style={{width:800, height:'auto'}}/></div>

Después de desplegar exitosamente al dispositivo, verás los resultados directamente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/7.gif" style={{width:800, height:'auto'}}/></div>

¡Has entrenado exitosamente tu primer modelo ML!

:::info

Si tienes más tiempo, puedes intentar usar [la operación `Output` que has aprendido antes](https://wiki.seeedstudio.com/es/sscma/#2-sensecraft-triggers---do-a-simple-feedback-action).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/8.png" style={{width:800, height:'auto'}}/></div>

:::

# Tareas Pendientes

- [ ] Entrenar e implementar modelos usando la plataforma SenseCraft AI.
- [ ] Configurar un Disparador y **Controlar LED** para tus modelos entrenados con la Plataforma SenseCraft AI.

## (Opcional) Federar: Transmitir datos a larga distancia

En este paso, estamos intentando transmitir nuestros datos desde XIAO ESP32S3 Sense a un dispositivo remoto, usando Wi-Fi y MQTT, ayudándonos a ver su implementación de forma remota.

### Paso 1. Configurar MQTT en un dispositivo y probar

Como ejemplo, estamos usando NVIDIA Jetson reComputer J4012 para ello. Soporta la instalación de broker MQTT y lo más importante es que ofrece 100 TOPS de Potencia AI, para que apliquemos LLM localmente.

La Plataforma SenseCraft AI soporta conexión Wi-Fi y MQTT.

<iframe width={800} height={480} src="https://www.youtube.com/embed/-KAyUHzRxHc" title="Unboxing & Plug in reComputer J4012 - Powered by NVIDIA Jetson Orin NX" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

Primero necesitamos instalar el broker MQTT(Mosquitto) y luego intentar configurar el servidor MQTT.

```
sudo apt-get update
sudo apt-get install mosquitto
```

y completar la instalación de Mosquitto en el reComputer(Linux).

Then run the commend:

```
sudo service mosquitto start
```

para iniciarlo.

Posteriormente podemos ejecutar este comando:

```
sudo service mosquitto status
```

para ver si ha sido activado:

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_1-3919de85499db74b41cf3057bcdfe6bd.png)

:::info
Pruebas:

Para crear/suscribirse a un tema:

```
mosquitto_sub -h localhost -t "LED"
```

Para enviar/publicar algunos datos:

```
mosquitto_pub -h localhost -t "LED" -m "1"
mosquitto_pub -h localhost -t "LED" -m "test"
```

Obteniendo los resultados y parece que todo está bien:

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_3-281bf87c08ecdb601595625229a7e1df.png)
:::

Y el `localhost` es `192.168.66.184`(como reComputer):

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_2-8202adc158ca9aa540a264c288c431ed.jpg)

### Paso 3. Configurar XIAO ESP32S3 Sense en la Plataforma SenseCraft AI

En la Plataforma SenseCraft AI, puedes consultar la página de "Configuración":

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiao_mqtt_1.png" style={{width:800, height:'auto'}}/></div>

:::info

- SSID: (Nombre de Wi-Fi igual que tu dispositivo MQTT)
- Password: (Contraseña de Wi-Fi de tu dispositivo MQTT)
- Encryption: AUTO
- MQTT: Sí
- Host: (Dirección IP de tu dispositivo MQTT)
- Port: 1883

En este ejemplo, el dispositivo MQTT es el reComputer como se muestra arriba.
:::

### Paso 3. Recibir datos del XIAO ESP32S3 Sense y Mostrar

En la parte de recepción, puedes instalar un cliente con el comando:

```
pip install python-sscma
```

Este es un cliente integrado para el [sscma_micro](https://github.com/Seeed-Studio/sscma_micro), que es un microcontrolador en servidor para los modelos [SSCMA](https://github.com/Seeed-Studio/SSCMA).

Y luego recibir los datos usando:

```
sscma.cli client --broker mqtt.broker.com --device device_id 
```

:::info
En este caso, `mqtt.broker.com` es 192.168.66.184, `device_id` proviene del XIAO ESP32S3 Sense en la Plataforma SenseCraft AI.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiao_mqtt_2.png" style={{width:300, height:'auto'}}/></div>
:::

### Paso 4. (próximamente) Federar múltiples XIAOs en una página

### Paso 5. (próximamente) Habilitar LLM para observar automáticamente imágenes desde XIAO
