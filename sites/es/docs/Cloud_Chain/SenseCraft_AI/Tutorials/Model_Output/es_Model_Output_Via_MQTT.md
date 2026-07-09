---
sidebar_position: 9
description: Este artículo describe cómo enviar los resultados de reconocimiento de un modelo a través de MQTT.
title: Salida del modelo vía MQTT
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao
aliases:
  - /sensecraft_ai_output_mqtt_xiao
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao/
---

# Configuración de la salida del modelo vía MQTT en SenseCraft AI para XIAO ESP32S3 Sense

Este artículo de la wiki proporciona una guía paso a paso sobre cómo configurar la salida del modelo usando MQTT (Message Queuing Telemetry Transport) para la placa XIAO ESP32S3 Sense en la plataforma SenseCraft AI. MQTT es un protocolo de mensajería ligero que permite una comunicación eficiente entre dispositivos. Siguiendo estas instrucciones, aprenderás a configurar la comunicación MQTT y a obtener los resultados de inferencia del modelo desde tu XIAO ESP32S3 Sense.

## Requisitos previos

Antes de comenzar, asegúrate de contar con lo siguiente:

1. Placa XIAO ESP32S3 Sense
2. Cable de datos USB-C para conectar la placa XIAO a tu ordenador
3. Un cliente MQTT de terceros, como MQTTX, instalado en tu ordenador

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Paso 1. Acceder al espacio de trabajo de XIAO ESP32S3 Sense y conectar el dispositivo

Accede al espacio de trabajo de XIAO ESP32S3 Sense a través de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`XIAO ESP32S3 Sense`**, o utiliza el [enlace directo al espacio de trabajo](https://sensecraft.seeed.cc/ai/device/local/32).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/xiao_esp32s3_sense_workspace.png" style={{width:1000, height:'auto'}}/></div>

Usando el cable USB-C, conecta tu placa XIAO ESP32S3 Sense a tu ordenador. Una vez conectada, haz clic en el botón **Connect** situado en la esquina superior izquierda de la página del espacio de trabajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Paso 2. Asegurarse de que hay un modelo cargado en la XIAO ESP32S3 Sense

Antes de continuar, asegúrate de que tu placa XIAO ESP32S3 Sense tenga cargado un modelo entrenado. Si aún no has cargado un modelo, consulta la documentación de SenseCraft AI sobre cómo entrenar y desplegar modelos en tu dispositivo.

- [Uso de un modelo para XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/es/sensecraft_ai_pretrained_models_for_xiao/)

Si quieres usar tu propio modelo entrenado, puedes consultar los dos wikis siguientes.

- [Tipo de entrenamiento - Clasificación](https://wiki.seeedstudio.com/es/sensecraft_ai_training_classification/)
- [Tipo de entrenamiento - Detección de objetos](https://wiki.seeedstudio.com/es/sensecraft_ai_training_object_detection/)

## Paso 3. Configurar la salida MQTT

En la barra lateral izquierda de la página del espacio de trabajo, haz clic en la opción **Output**. De las opciones de salida disponibles, selecciona **MQTT** para acceder a los ajustes de configuración de MQTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## Paso 4. Configurar MQTT

Haz clic en el botón **Configuration** en la parte inferior de la sección de salida MQTT. Aparecerá una ventana de configuración que te pedirá introducir la siguiente información:

- **SSID**: Introduce el nombre de tu red Wi‑Fi.
- **Password**: Proporciona la contraseña de tu red Wi‑Fi.
- **Encryption**: Elige el tipo de cifrado de tu red Wi‑Fi (por ejemplo, AUTO).
- **MQTT**: Selecciona "Yes" para habilitar la comunicación MQTT.

Rellena los campos de configuración MQTT:

- **Host**: Introduce el nombre de host o la dirección IP de tu broker MQTT (por ejemplo, broker.emqx.io).
- **Port**: Especifica el número de puerto para la comunicación MQTT (por ejemplo, 1883).
- **Client ID**: Proporciona un ID de cliente único para tu XIAO ESP32S3 Sense (por ejemplo, xiao_esp32s3).
- **User Name**: Introduce tu nombre de usuario MQTT, si tu broker MQTT lo requiere.
- **Password**: Proporciona tu contraseña MQTT, si tu broker MQTT lo requiere.
- **SSL**: Elige si deseas habilitar el cifrado SSL. Si tu broker MQTT admite SSL, puedes seleccionar "Yes" para mejorar la seguridad de la comunicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

Haz clic en el botón **Apply** para guardar la configuración.

:::caution
Este paso requerirá una conexión de red, por favor conecta una antena para la XIAO ESP32S3 Sense.
:::

Si todo está configurado correctamente, deberías poder ver la siguiente información en el sitio web.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## Paso 5. Configurar el cliente MQTT (MQTTX)

Inicia la [aplicación MQTTX](https://mqttx.app/) en tu ordenador.

Crea una nueva conexión con los siguientes ajustes:

- Host: Introduce el mismo nombre de host o dirección IP usado en la plataforma SenseCraft AI (por ejemplo, broker.emqx.io).
- Port: Especifica el número de puerto para la comunicación MQTT (por ejemplo, 1883).
- Client ID: Proporciona un ID de cliente único para tu instancia de MQTTX (por ejemplo, seeed_computer).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en el botón **Connect** para establecer una conexión con el broker MQTT.

## Paso 6. Suscribirse al tema MQTT

En la aplicación MQTTX, haz clic en el botón **New Subscribe** para crear una nueva suscripción. Introduce el tema `sscma/v0/#` y haz clic en **Subscribe**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

Este tema se utilizará para recibir la información de inferencia del modelo desde tu XIAO ESP32S3 Sense.

## Paso 7. Enviar el comando para obtener los resultados de inferencia del modelo

En la aplicación MQTTX, navega al canal de tema del dispositivo. Puedes obtenerlo haciendo clic en el botón **Query device's topic** en la página MQTT de SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

Envía el comando `AT+INVOKE=-1,0` para activar la inferencia del modelo en tu XIAO ESP32S3 Sense.

:::tip
Por favor asegúrate de que estás enviando al tema correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

Si ves que aún no tienes ningún dato relacionado con el reconocimiento del modelo para informar, intenta enviar el comando en formato HEX.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

La XIAO ESP32S3 Sense procesará el comando y publicará los resultados de inferencia del modelo en el tema suscrito. En la aplicación MQTTX, recibirás los resultados de inferencia bajo el tema `sscma/v0/#`.

**Ejemplo**:

Supongamos que tu modelo entrenado está diseñado para detectar objetos en una imagen. Cuando envíes el comando 'AT+INVOKE=-1,0', la XIAO ESP32S3 Sense capturará una imagen, ejecutará la inferencia del modelo y publicará los resultados vía MQTT. Los resultados de inferencia pueden incluir información como los objetos detectados, sus cuadros delimitadores y los niveles de confianza. Por ejemplo, la carga útil del mensaje MQTT podría ser:

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

Para una descripción detallada del formato JSON lee la documentación **[aquí](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)**.

:::tip
En el firmware del dispositivo, hay un conjunto de protocolos de comunicación establecidos que especifican el formato de salida de los resultados del modelo y lo que el usuario puede hacer con los modelos. Debido a cuestiones de espacio, no profundizaremos en los detalles de estos protocolos en esta wiki; detallaremos esta sección a través de documentación en Github. Si estás interesado en un desarrollo más profundo, por favor ve **[aquí](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)**.
:::

Para decodificar la imagen codificada en base64:

1. Copia la cadena codificada en base64 del campo "image" en el objeto JSON.

2. Visita el sitio web `https://base64.guru/converter/decode/image` en tu navegador web.

3. Pega la cadena codificada en base64 copiada en el área de texto "Base64 string" en el sitio web.

4. Haz clic en el botón **Decode Base64 to Image**.

5. La imagen decodificada aparecerá debajo del botón, y podrás verla o descargarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## Conclusión

Siguiendo esta guía paso a paso, has aprendido cómo configurar la salida del modelo usando MQTT en la plataforma SenseCraft AI para la placa XIAO ESP32S3 Sense. Ahora puedes obtener los resultados de inferencia del modelo vía MQTT e integrarlos en tus aplicaciones o sistemas. Recuerda asegurarte de tener una conexión Wi‑Fi estable y de configurar correctamente tu broker y cliente MQTT para una comunicación fluida.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
