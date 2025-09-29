---
description: Conexión LNS Chirpstack basada en Wio SX1262 con módulo XIAO esp32s3
title: Conectar a Chirpstack
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51_1.png
slug: /es/wio_sx1262_xiao_esp32s3_LNS_Chirpstack
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Evelyn Chen
---

# Kit Wio-SX1262 con XIAO ESP32S3 Conectar a Chirpstack

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51.png" alt="pir" width={900} height="auto" /></p>


## Descripción general

LoRaWAN es un protocolo de red de área amplia y bajo consumo construido sobre la técnica LoRa. Conecta dispositivos de forma inalámbrica a internet y gestiona la comunicación entre dispositivos de nodo final y gateways de red.

Siguiendo la Guía de Inicio para Lora, configuramos Wio-SX1262 con XIAO ESP32S3 como gateway lora hub de un canal.

Esta página wiki explica cómo configurar LoraWAN basado en el kit Wio-SX1262 con XIAO ESP32S3 como gateway de canal único para intercambiar datos. Y también conectar el nodo sensor lora Sensecap S210x al kit Wio-SX1262 con XIAO ESP32S3 y transmitir los datos del sensor a Chirpstack.

## Instalar Chirpstack localmente

Por favor consulte las [instrucciones](https://learn.semtech.com/mod/book/view.php?id=223&chapterid=266#:~:text=Enter%20the%20following%20to%20clone%20the%20ChirpStack%20Docker,Share%20it%20on%20any%20security%20popups%20you%20see.) para instalar Chirpstack localmente.

1. abra un navegador y visite http://localhost:8080 .

Debería ver la página de inicio de sesión de ChirpStack.

2. Inicie sesión con el nombre de usuario predeterminado `admin` y contraseña `admin`.


## Agregar Perfil de Dispositivo

Agregue perfiles de dispositivo bajo Tenant:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/45.png" alt="pir" width={600} height="auto" /></p>

## Agregar Gateway LoRaWAN

Registre el gateway y complete el EUI del gateway:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/46.png" alt="pir" width={600} height="auto" /></p>

¡Agregado exitosamente!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/47.png" alt="pir" width={600} height="auto" /></p>


## Agregar Sensor LoRa SenseCAP

### Configurar Sensor LoRa vía APP Sensecraft
Vamos a agregar un nodo sensor sensecap a TTN.

**Paso 1**. Descargue y Abra la App Sensecraft.

**Paso 2**. Presione el botón del sensor y manténgalo presionado durante 3 segundos, el LED parpadeará con frecuencia de 1s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**Paso 3**. Por favor haga clic en "Scan" para agregar nuevo dispositivo y comience a escanear el código QR en el dispositivo.

**Paso 4**. Haga clic en "Advanced Configuration" y seleccione la plataforma de "Other Platform"

**Paso 5**. Seleccione el Plan de Frecuencia consistente con el gateway. Ya configuramos el gateway a EU868, así que también el sensor como EU868.

**Paso 6**. El dispositivo usa OTAA para unirse a la red LoRaWAN por defecto. Anote el `device EUI`, `App EUI` y `APP key`.

### Agregar a Chirpstack

**Paso 1**. Crear una Aplicación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/48.png" alt="pir" width={600} height="auto" /></p>

**Paso 2**. Agregar dispositivo en la aplicación y copiar el `Device EUI` y `AppKEY` al espacio correspondiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/49.png" alt="pir" width={600} height="auto" /></p>

**Paso 3**. Verificar estado del sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/50.png" alt="pir" width={600} height="auto" /></p>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>