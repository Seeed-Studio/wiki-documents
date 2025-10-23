---
description: XIAO MG24 Ejemplo - Matter
title: Seeed Studio XIAO MG24 Ejemplo - Matter
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /es/xiao_mg24_matter
sidebar_position: 2
last_update:
  date: 11/07/2024
  author: Spencer
---

## Introducción

Matter es un **estándar abierto y unificado** para tecnología de hogar inteligente que promueve la interoperabilidad entre dispositivos y ecosistemas. Desarrollado por la Connectivity Standards Alliance (CSA), permite la comunicación fluida entre dispositivos de varios fabricantes sin requerir conectividad a internet. Matter soporta compatibilidad nativa con plataformas como Apple HomeKit, Google Home y Amazon Alexa, facilitando la integración de dispositivos en configuraciones de hogar inteligente. Para una comprensión más profunda de Matter, consulte la [documentación oficial de Matter](https://project-chip.github.io/connectedhomeip-doc/index.html).

> En 2024[^1], Silicon Labs y Arduino unieron fuerzas para reducir las barreras de adopción de Matter, proporcionando una ruta de desarrollo que simplifica el uso de Matter con el ecosistema Arduino. Esta colaboración tiene como objetivo hacer el desarrollo de Matter más accesible, ayudando a los desarrolladores de Arduino a superar los desafíos típicos y adoptar Matter sin problemas.

[^1]: [Silicon Labs and Arduino Partner to Democratize Matter - Feb 6, 2024](https://news.silabs.com/2024-02-06-Silicon-Labs-and-Arduino-Partner-to-Democratize-Matter)

Matter opera eficientemente sobre redes locales, ofreciendo comunicación confiable y de baja latencia sin necesidad de acceso a internet. Esta característica mejora significativamente tanto la seguridad como el rendimiento del dispositivo.

Esta documentación le guiará a través de los pasos para desarrollar una aplicación Matter en el XIAO MG24, usando Arduino.

## Prerrequisitos

Para comenzar a desarrollar una aplicación Matter en el XIAO MG24, asegúrese de que los siguientes componentes de hardware y software estén preparados y listos.

### Hardware

- Placa **Seeed Studio XIAO MG24**.
- **Hub Matter compatible** (ej., Apple HomePod mini) para conectar a la red Matter.
- **Controlador Matter** (ej., Apple HomeKit App) para gestionar e interactuar con su dispositivo habilitado para Matter.

La siguiente tabla[^2] proporciona ejemplos de hubs compatibles con Matter en varios ecosistemas:

| Fabricante / Ecosistema | Dispositivo                |
| ----------------------- | -------------------------- |
| Google Home             | Nest Hub Gen2              |
| Apple HomeKit           | HomePod Gen2, HomePod mini |
| Amazon Alexa            | Echo Gen4                  |
| Raspberry Pi OTBR       | Raspberry Pi               |

Por defecto, se asume que tienes al menos un [Hub de Matter](https://en.wikipedia.org/wiki/Matter_(standard)#Supported_ecosystems_and_hubs) y un Controlador de Matter (por ejemplo, un iPhone con HomeKit instalado) listos para pruebas.

[^2]: [README - Biblioteca Arduino de Matter](https://github.com/SiliconLabs/arduino/blob/main/libraries/Matter/readme.md)

### Software

El software requerido incluye el **IDE de Arduino con el Core de Arduino de Silicon Labs**:

- Si no está instalado aún, descarga y configura el [Core de Arduino de Silicon Labs](https://github.com/SiliconLabs/arduino) para compatibilidad con el XIAO MG24.
- Para instrucciones detalladas de configuración, consulta la [Guía de Inicio](/es/xiao_mg24_getting_started/#add-board).

Asegúrate de optar por la pila de protocolo Matter:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-arduino-tool-option.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

## Inicio Rápido con el Ejemplo de Bombilla Matter

El [Ejemplo de Bombilla de Luz Matter](https://github.com/Silabs/arduino-matter/tree/main/examples/MatterLightBulb) demuestra una aplicación simple de Matter, permitiendo el control del `LED integrado` a través de una red Matter. Este ejemplo sirve como un punto de partida práctico para desarrolladores nuevos en la integración de Matter en el XIAO MG24.

Para acceder al ejemplo en el IDE de Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-bulb-example.png" style={{width:480, height:'auto', "border-radius": '12.8px'}}/></div>

Para mayor comodidad, se proporcionan a continuación modificaciones al nombre del dispositivo en el código de ejemplo para permitir una configuración personalizada.

```cpp
/*
   Matter lightbulb example

   The example shows how to create a simple on/off lightbulb with the Arduino Matter API.

   The example lets users control the onboard LED through Matter.
   The device has to be commissioned to a Matter hub first.

   Author: Tamas Jozsi (Silicon Labs)
   Modified by: Spencer Y (Seeed Studio)
 */
#include <Matter.h>
#include <MatterLightbulb.h>

MatterLightbulb matter_bulb;

void setup()
{
  Serial.begin(115200);
  Matter.begin();
  matter_bulb.begin();

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);

  Serial.println("Matter lightbulb");

  matter_bulb.set_device_name("XIAO MG24 bulb");    // Customize the default device name
  matter_bulb.set_vendor_name("Seeed Studio");      // Set the vendor name
  matter_bulb.set_product_name("Seeed Matter Lightbulb"); // Define the product name

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }

  Serial.println("Waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Connected to Thread network");

  Serial.println("Waiting for Matter device discovery...");
  while (!matter_bulb.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop()
{
  static bool matter_lightbulb_last_state = false;
  bool matter_lightbulb_current_state = matter_bulb.get_onoff();

  // Turn on the LED if the state is ON and the previous state was OFF
  if (matter_lightbulb_current_state && !matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
    Serial.println("Bulb ON");
  }

  // Turn off the LED if the state is OFF and the previous state was ON
  if (!matter_lightbulb_current_state && matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
    Serial.println("Bulb OFF");
  }
}
```

### Flasheando el Firmware

1. Copia el código en el Arduino IDE y súbelo a la placa XIAO MG24.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-lightbulb-flash.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>
2. Después de flashear el firmware, presiona el botón `RESET` o reconecta el XIAO MG24 para reiniciar la placa.
3. Abre el Monitor Serie para confirmar la configuración. Deberías ver una salida similar a esta:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-url.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### Código QR para Comisionado

El monitor serie mostrará una URL para generar un código QR, requerido para el comisionado del dispositivo. Copia la URL, pégala en un navegador, y escanea el código QR resultante con tu controlador Matter (ej., HomeKit).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-scan.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### Probando el Dispositivo

Después de escanear el código QR, el controlador Matter (HomeKit) te pedirá que confirmes la identidad del dispositivo. Una vez confirmado, el dispositivo será visible en la aplicación. Ahora puedes controlar el LED integrado del XIAO MG24 y probar su capacidad de respuesta directamente desde la interfaz de la aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-device-online.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://youtube.com/embed/tmCpIWuRojQ"
  title="Ejemplo de Bombilla Matter MG24"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

## Referencia y Recursos

Si eres nuevo en Matter, los siguientes recursos proporcionan conocimiento fundamental y soporte de desarrollo para trabajar dentro del ecosistema Matter:

- **[Guías de Inicio Rápido](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: Un punto de partida ideal para aprender los fundamentos de Matter, cubriendo conceptos esenciales y componentes del ecosistema.
- **[Viaje del Desarrollador Matter](https://www.silabs.com/wireless/matter/matter-developer-journey)**: Una guía completa a través del proceso de desarrollo Matter, incluyendo herramientas necesarias, recursos y mejores prácticas para una implementación efectiva.
- **[Especificaciones Matter](https://csa-iot.org/developer-resource/specifications-download-request/)**: Especificaciones técnicas para el protocolo Matter y sus componentes. Este es el recurso principal para entender las capacidades del protocolo y detalles operacionales.
- **[El Modelo de Datos del Dispositivo - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: Una explicación detallada del modelo de datos del dispositivo, que estandariza cómo las características y capacidades del dispositivo se representan en el ecosistema Matter.
- **[Descripción General del Framework de Desarrollo Matter](/es/matter_development_framework)**: Una guía específicamente adaptada al Framework de Desarrollo Matter para el XIAO ESP32C6, ofreciendo un enfoque alternativo para el desarrollo de dispositivos Matter.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
