---
sidebar_position: 9
description: Este artículo describe cómo enviar los resultados de reconocimiento de un modelo a través de MQTT.
title: Salida del Modelo Vía MQTT
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /es/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao
aliases:
  - /es/sensecraft_ai_output_mqtt_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# Configurando la Salida del Modelo vía MQTT en SenseCraft AI para XIAO ESP32S3 Sense

Este artículo wiki proporciona una guía paso a paso sobre cómo configurar la salida del modelo usando MQTT (Message Queuing Telemetry Transport) para la placa XIAO ESP32S3 Sense en la plataforma SenseCraft AI. MQTT es un protocolo de mensajería ligero que permite una comunicación eficiente entre dispositivos. Siguiendo estas instrucciones, aprenderás cómo configurar la comunicación MQTT y recuperar los resultados de inferencia del modelo desde tu XIAO ESP32S3 Sense.

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

1. Placa XIAO ESP32S3 Sense
2. Cable de datos USB-C para conectar la placa XIAO a tu computadora
3. Un cliente MQTT de terceros, como MQTTX, instalado en tu computadora

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Paso 1. Acceder al Espacio de Trabajo de SenseCraft AI Vision y conectar el XIAO ESP32S3 Sense

Abre tu navegador web y navega a la página del Espacio de Trabajo de SenseCraft AI Vision.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Directo con Un Clic 🖱️</font></span></strong>
    </a>
</div><br />

Selecciona la placa XIAO ESP32S3 Sense de los dispositivos disponibles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

Usando el cable USB-C, conecta tu placa XIAO ESP32S3 Sense a tu computadora. Una vez conectada, haz clic en el botón **Conectar** ubicado en la esquina superior izquierda de la página del Espacio de Trabajo de SenseCraft AI Vision.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Paso 2. Asegurar que un Modelo esté Cargado en el XIAO ESP32S3 Sense

Antes de proceder, asegúrate de que tu placa XIAO ESP32S3 Sense tenga un modelo entrenado cargado. Si aún no has cargado un modelo, consulta la documentación de SenseCraft AI sobre cómo entrenar e implementar modelos en tu dispositivo.

- [Usando un modelo para XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/es/sensecraft_ai_pretrained_models_for_xiao/)

Si quieres usar tu propio modelo entrenado, puedes consultar los siguientes dos Wikis.

- [Tipo de entrenamiento - Clasificación](https://wiki.seeedstudio.com/es/sensecraft_ai_training_classification/)
- [Tipo de entrenamiento - Detección de Objetos](https://wiki.seeedstudio.com/es/sensecraft_ai_training_object_detection/)

## Paso 3. Configurar la Salida MQTT

En la barra lateral izquierda de la página del Espacio de Trabajo de Vision, haz clic en la opción **Salida**. De las opciones de salida disponibles, selecciona **MQTT** para acceder a la configuración de MQTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## Paso 4. Configurar la Configuración MQTT

Haz clic en el botón **Configuración** en la parte inferior de la sección de salida MQTT. Aparecerá una ventana de configuración, solicitándote que ingreses la siguiente información:

- **SSID**: Ingresa el nombre de tu red Wi-Fi.
- **Contraseña**: Proporciona la contraseña de tu red Wi-Fi.
- **Cifrado**: Elige el tipo de cifrado para tu red Wi-Fi (ej., AUTO).
- **MQTT**: Selecciona "Sí" para habilitar la comunicación MQTT.

Completa los campos de configuración MQTT:

- **Host**: Ingresa el nombre del host o dirección IP de tu broker MQTT (ej., broker.emqx.io).
- **Puerto**: Especifica el número de puerto para la comunicación MQTT (ej., 1883).
- **ID de Cliente**: Proporciona un ID de cliente único para tu XIAO ESP32S3 Sense (ej., xiao_esp32s3).
- **Nombre de Usuario**: Ingresa tu nombre de usuario MQTT, si es requerido por tu broker MQTT.
- **Contraseña**: Proporciona tu contraseña MQTT, si es requerida por tu broker MQTT.
- **SSL**: Elige si habilitar el cifrado SSL. Si tu broker MQTT soporta SSL, puedes seleccionar "Sí" para mejorar la seguridad de la comunicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

Haz clic en el botón **Aplicar** para guardar la configuración.

:::caution
Este paso requerirá una conexión de red, por favor conecta una antena para el XIAO ESP32S3 Sense.
:::

Si todo está configurado correctamente, deberías poder ver la siguiente información en el sitio web.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## Paso 5. Configurar el Cliente MQTT (MQTTX)

Inicia la [aplicación MQTTX](https://mqttx.app/) en tu computadora.

Crea una nueva conexión con la siguiente configuración:

- Host: Ingresa el mismo nombre de host o dirección IP usado en la plataforma SenseCraft AI (ej., broker.emqx.io).
- Puerto: Especifica el número de puerto para la comunicación MQTT (ej., 1883).
- ID de Cliente: Proporciona un ID de cliente único para tu instancia MQTTX (ej., seeed_computer).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en el botón **Conectar** para establecer una conexión con el broker MQTT.

## Paso 6. Suscribirse al Tema MQTT

En la aplicación MQTTX, haz clic en el botón **Nueva Suscripción** para crear una nueva suscripción. Ingresa el tema `sscma/v0/#` y haz clic en **Suscribirse**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

Este tema se utilizará para recibir información de inferencia del modelo desde tu XIAO ESP32S3 Sense.

## Paso 7. Enviar Comando para Recuperar Resultados de Inferencia del Modelo

En la aplicación MQTTX, navega al canal del tema del dispositivo. Puedes obtenerlo haciendo clic en el botón **Query device's topic** en la página MQTT de SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

Envía el comando `AT+INVOKE=-1,0` para activar la inferencia del modelo en tu XIAO ESP32S3 Sense.

:::tip
Por favor asegúrate de que estás enviando el tema correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

Si encuentras que aún no tienes datos relacionados con el reconocimiento del modelo para reportar, intenta enviar el comando en formato HEX.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

El XIAO ESP32S3 Sense procesará el comando y publicará los resultados de inferencia del modelo al tema suscrito. En la aplicación MQTTX, recibirás los resultados de inferencia bajo el tema `sscma/v0/#`.

**Ejemplo**:

Digamos que tu modelo entrenado está diseñado para detectar objetos en una imagen. Cuando envías el comando 'AT+INVOKE=-1,0', el XIAO ESP32S3 Sense capturará una imagen, ejecutará la inferencia del modelo y publicará los resultados vía MQTT. Los resultados de inferencia pueden incluir información como los objetos detectados, sus cajas delimitadoras y puntuaciones de confianza. Por ejemplo, la carga útil del mensaje MQTT podría ser:

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

Para una descripción detallada del formato JSON lee la documentación **[aquí](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)**.

:::tip
En el firmware del dispositivo, hay un conjunto de protocolos de comunicación establecidos que especifican el formato de la salida de resultados del modelo, y lo que el usuario puede hacer con los modelos. Debido a problemas de espacio, no expandiremos los detalles específicos de estos protocolos en esta wiki, detallaremos esta sección a través de documentación en Github. Si estás interesado en un desarrollo más profundo, por favor ve **[aquí](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)**.
:::

Para decodificar la imagen codificada en base64:

1. Copia la cadena codificada en base64 del campo "image" en el objeto JSON.

2. Visita el sitio web `https://base64.guru/converter/decode/image` en tu navegador web.

3. Pega la cadena codificada en base64 copiada en el área de texto "Base64 string" del sitio web.

4. Haz clic en el botón **Decode Base64 to Image**.

5. La imagen decodificada aparecerá debajo del botón, y podrás verla o descargarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## Conclusión

Siguiendo esta guía paso a paso, has aprendido cómo configurar la salida del modelo usando MQTT en la plataforma SenseCraft AI para la placa XIAO ESP32S3 Sense. Ahora puedes recuperar resultados de inferencia del modelo vía MQTT e integrarlos en tus aplicaciones o sistemas. Recuerda asegurar una conexión Wi-Fi estable y configurar correctamente tu broker MQTT y configuraciones del cliente para una comunicación fluida.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
