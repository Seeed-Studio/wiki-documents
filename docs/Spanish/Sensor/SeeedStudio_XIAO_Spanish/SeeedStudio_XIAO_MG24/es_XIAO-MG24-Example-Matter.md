---
description: XIAO MG24 Ejemplo - Matter
title: Seeed Studio XIAO MG24 Ejemplo - Matter
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /es/xiao_mg24_matter
sidebar_position: 2
last_update:
  date: 02/16/2025
  author: Guillermo
---

## Introducción

Matter es un **estándar unificado y de código abierto** para la tecnología de hogares inteligentes que promueve la interoperabilidad entre dispositivos y ecosistemas. Desarrollado por la Connectivity Standards Alliance (CSA), permite una comunicación sin problemas entre dispositivos de diferentes fabricantes sin necesidad de conectividad a internet. Matter soporta compatibilidad nativa con plataformas como Apple HomeKit, Google Home y Amazon Alexa, facilitando la integración de dispositivos en configuraciones de hogares inteligentes. Para una comprensión más profunda de Matter, consulta la [documentación oficial de Matter](https://project-chip.github.io/connectedhomeip-doc/index.html).

> En 2024[^1], Silicon Labs y Arduino se unieron para reducir las barreras a la adopción de Matter, proporcionando una ruta de desarrollo que simplifica el uso de Matter con el ecosistema de Arduino. Esta colaboración tiene como objetivo hacer que el desarrollo de Matter sea más accesible, ayudando a los desarrolladores de Arduino a superar los desafíos típicos y adoptar Matter sin problemas.

[^1]: [Silicon Labs y Arduino se asocian para democratizar Matter - 6 de febrero de 2024](https://news.silabs.com/2024-02-06-Silicon-Labs-and-Arduino-Partner-to-Democratize-Matter)

Matter opera de manera eficiente sobre redes locales, ofreciendo comunicación confiable y de baja latencia sin necesidad de acceso a internet. Esta característica mejora significativamente tanto la seguridad como el rendimiento de los dispositivos.

Esta documentación te guiará a través de los pasos para desarrollar una aplicación Matter en el XIAO MG24, utilizando Arduino.

## Requisitos Previos

Para comenzar a desarrollar una aplicación Matter en el XIAO MG24, asegúrate de que los siguientes componentes de hardware y software estén preparados y listos.

### Hardware

- **Placa Seeed Studio XIAO MG24**.
- **Hub Matter compatible** (por ejemplo, Apple HomePod mini) para conectarse a la red Matter.
- **Controlador Matter** (por ejemplo, la app Apple HomeKit) para gestionar e interactuar con tu dispositivo habilitado para Matter.

La siguiente tabla[^2] proporciona ejemplos de hubs compatibles con Matter en varios ecosistemas:

| Fabricante / Ecosistema | Dispositivo                   |
| ----------------------- | ----------------------------- |
| Google Home             | Nest Hub Gen2                 |
| Apple HomeKit           | HomePod Gen2, HomePod mini    |
| Amazon Alexa            | Echo Gen4                     |
| Raspberry Pi OTBR       | Raspberry Pi                  |

Por defecto, se asume que tienes al menos un [Hub Matter](https://en.wikipedia.org/wiki/Matter_(standard)#Supported_ecosystems_and_hubs) y un Controlador Matter (por ejemplo, un iPhone con HomeKit instalado) listos para la prueba.

[^2]: [README - Biblioteca Matter para Arduino](https://github.com/SiliconLabs/arduino/blob/main/libraries/Matter/readme.md)

### Software

El software requerido incluye el **IDE de Arduino con el Core de Arduino de Silicon Labs**:

- Si no está instalado, descarga y configura el [Core de Arduino de Silicon Labs](https://github.com/SiliconLabs/arduino) para compatibilidad con el XIAO MG24.
- Para instrucciones detalladas de configuración, consulta la [Guía de Inicio](/xiao_mg24_getting_started/#add-board).

Asegúrate de optar por el stack del Protocolo Matter:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-arduino-tool-option.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

## Empezando con el Ejemplo de Bombilla Matter

El [Ejemplo de Bombilla Matter](https://github.com/Silabs/arduino-matter/tree/main/examples/MatterLightBulb) demuestra una aplicación simple de Matter, permitiendo el control del `LED integrado` a través de una red Matter. Este ejemplo sirve como un punto de partida práctico para los desarrolladores que se inician en la integración de Matter en el XIAO MG24.

Para acceder al ejemplo en el IDE de Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-bulb-example.png" style={{width:480, height:'auto', "border-radius": '12.8px'}}/></div>

Para mayor comodidad, a continuación se proporcionan las modificaciones al nombre del dispositivo en el código de ejemplo, lo que permite una configuración personalizada.

```cpp
/*
   Ejemplo de bombilla Matter

   El ejemplo muestra cómo crear una bombilla simple de encendido/apagado con la API de Matter para Arduino.

   El ejemplo permite a los usuarios controlar el LED incorporado a través de Matter.
   El dispositivo debe ser comisionado a un hub Matter primero.

   Autor: Tamas Jozsi (Silicon Labs)
   Modificado por: Spencer Y (Seeed Studio)
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

  Serial.println("Bombilla Matter");

  matter_bulb.set_device_name("XIAO MG24 bulb");    // Personaliza el nombre del dispositivo predeterminado
  matter_bulb.set_vendor_name("Seeed Studio");      // Establece el nombre del proveedor
  matter_bulb.set_product_name("Seeed Matter Lightbulb"); // Define el nombre del producto

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("El dispositivo Matter no está comisionado");
    Serial.println("Comisionarlo a tu hub Matter con el código de emparejamiento manual o el código QR");
    Serial.printf("Código de emparejamiento manual: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("URL del código QR: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }

  Serial.println("Esperando la red Thread...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Conectado a la red Thread");

  Serial.println("Esperando el descubrimiento del dispositivo Matter...");
  while (!matter_bulb.is_online()) {
    delay(200);
  }
  Serial.println("El dispositivo Matter está ahora en línea");
}

void loop()
{
  static bool matter_lightbulb_last_state = false;
  bool matter_lightbulb_current_state = matter_bulb.get_onoff();

  // Enciende el LED si el estado es ON y el estado anterior era OFF
  if (matter_lightbulb_current_state && !matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
    Serial.println("Bombilla ENCENDIDA");
  }

  // Apaga el LED si el estado es OFF y el estado anterior era ON
  if (!matter_lightbulb_current_state && matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
    Serial.println("Bombilla APAGADA");
  }
}
```

### Flasheo del Firmware

1. Copia el código en el IDE de Arduino y súbelo a la placa XIAO MG24.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-lightbulb-flash.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>
2. Después de flashear el firmware, presiona el botón `RESET` o reconecta el XIAO MG24 para reiniciar la placa.  
3. Abre el Monitor Serial para confirmar la configuración. Deberías ver una salida similar a esta:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-url.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### Código QR para la Puesta en Marcha

El monitor serial mostrará una URL para generar un código QR, necesario para la puesta en marcha del dispositivo. Copia la URL, pégala en un navegador y escanea el código QR resultante con tu controlador Matter (por ejemplo, HomeKit).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-scan.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### Probando el Dispositivo

Después de escanear el código QR, el controlador Matter (HomeKit) te pedirá que confirmes la identidad del dispositivo. Una vez confirmado, el dispositivo será visible en la aplicación. Ahora podrás controlar el LED integrado del XIAO MG24 y probar su capacidad de respuesta directamente desde la interfaz de la aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-device-online.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

<iframe
  className="youtube-video-r"
  src="https://youtube.com/embed/tmCpIWuRojQ"
  title="MG24 Matter Lightbulb Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>

## Referencias y Recursos

Si eres nuevo en Matter, los siguientes recursos proporcionan conocimiento fundamental y soporte de desarrollo para trabajar dentro del ecosistema Matter:

- **[Guías de Inicio Rápido](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: Un punto de partida ideal para aprender los fundamentos de Matter, cubriendo conceptos y componentes esenciales del ecosistema.
- **[Viaje del Desarrollador de Matter](https://www.silabs.com/wireless/matter/matter-developer-journey)**: Una guía completa a través del proceso de desarrollo de Matter, que incluye las herramientas necesarias, recursos y mejores prácticas para una implementación efectiva.
- **[Especificaciones de Matter](https://csa-iot.org/developer-resource/specifications-download-request/)**: Especificaciones técnicas del protocolo Matter y sus componentes. Este es el recurso principal para comprender las capacidades y detalles operativos del protocolo.
- **[El Modelo de Datos del Dispositivo - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: Una explicación detallada del modelo de datos del dispositivo, que estandariza cómo se representan las características y capacidades de los dispositivos en el ecosistema Matter.
- **[Visión General del Marco de Desarrollo de Matter](/matter_development_framework)**: Una guía específicamente diseñada para el Marco de Desarrollo de Matter para el XIAO ESP32C6, ofreciendo un enfoque alternativo para el desarrollo de dispositivos Matter.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte en diferentes formas, asegurando que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
