---
description: Conexión LNS de TTN basada en Wio SX1262 con módulo XIAO esp32s3 
title: Conectar a TTN
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png
slug: /es/wio_sx1262_xiao_esp32s3_LNS_TTN
sidebar_position: 1
last_update:
  date: 10/17/2024
  author: Evelyn Chen
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png" alt="pir" width={900} height="auto" /></p>

## Descripción general

LoRaWAN es un protocolo de red de área amplia y bajo consumo construido sobre la técnica LoRa. Conecta dispositivos de forma inalámbrica a internet y gestiona la comunicación entre dispositivos de nodo final y gateways de red.

Siguiendo la Guía de Inicio para Lora, configuramos Wio-SX1262 con XIAO ESP32S3 como un gateway lora hub de un canal.

Esta página wiki explica cómo configurar LoraWAN basado en el kit Wio-SX1262 con XIAO ESP32S3 como gateway de canal único para intercambiar datos con TTN. Y también conectar el nodo sensor lora Sensecap S210x al kit Wio-SX1262 con XIAO ESP32S3 y transmitir los datos del sensor a TTN(The Things Network).


## Agregar Gateway LoRaWAN

Haz clic y crea una nueva cuenta de TTN: https://www.thethingsnetwork.org/.

Si tienes una cuenta puedes visitar https://eu1.cloud.thethings.network/ directamente.

Inicia sesión, luego registra un gateway.

**Paso 1**. Registrar gateway

**Paso 2**. Completa la información correcta de `gateway EUI`, `gateway ID` y `frequency plan`.

**Paso 3**. Reinicia tu módulo gateway y espera aproximadamente 2 minutos. Luego puedes verificar el estado del gateway como conectado.

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## Crear una Aplicación

Agregar nueva aplicación en TTN

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## Agregar Sensor LoRa SenseCAP


### Configurar Sensor LoRa vía APP Sensecraft
Vamos a agregar un nodo sensor sensecap a TTN. 

**Paso 1**. Descarga y abre la App Sensecraft.

**Paso 2**. Presiona el botón del sensor y mantén presionado por 3 segundos, el LED parpadeará con frecuencia de 1s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**Paso 3**. Por favor haz clic en "Scan" para agregar nuevo dispositivo y comenzar a escanear el código QR en el dispositivo.

**Paso 4**. Haz clic en "Advanced Configuration" y selecciona la plataforma de "The Things Network"

**Paso 5**. Selecciona el Plan de Frecuencia consistente con el gateway. Ya configuramos el gateway a EU868, así que también el sensor como EU868.

**Paso 6**. El dispositivo usa OTAA para unirse a la red LoRaWAN por defecto. Anota el `device EUI`, `App EUI` y `APP key`.

Hay una [instrucción más detallada](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf) para conectar el sensor sensecap S210x a The Things Network.

### Registrar en TTN
Registrar un dispositivo final.

**Paso 1**. Selecciona el tipo de dispositivo final y completa JoinEUI(AppEUI de sensecraft). Luego haz clic en *Confirm*.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/42.png" alt="pir" width={600} height="auto" /></p>

**Paso 2**. Completa DevEUI y AppKey. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/43.png" alt="pir" width={600} height="auto" /></p>

**Paso 3**. Verifica dos veces la información de aprovisionamiento completada, luego haz clic en registrar dispositivo final. Los datos del sensor aparecerán en el panel de control.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/44.png" alt="pir" width={600} height="auto" /></p>

## Recursos

* [The Things Network](https://eu1.cloud.thethings.network/)
* [Instrucción de sensor Sensecap a TTN](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>