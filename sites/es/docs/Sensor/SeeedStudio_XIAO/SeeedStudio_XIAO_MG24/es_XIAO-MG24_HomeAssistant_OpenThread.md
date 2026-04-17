---
description: Conectando a HA usando Matter sobre los protocolos de red OpenThread
title: Seeed Studio XIAO MG24 Conectar HomeAssistant Con Matter
keywords:
  - MG24
  - xiao
  - HomeAssistant
  - Matter
  - OpenThread
  - Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E
image: https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki-XIAO-MG24-HA-Matter.webp
slug: /xiao_mg24_ha_openthread
sidebar_position: 8
last_update:
  date: 05/5/2025
  author: Jason
createdAt: '2025-05-08'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/xiao_mg24_ha_openthread/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki XIAO MG24-HA-Matter.png" style={{width:900, height:'auto'}}/></div>

## Introducción

En este wiki, utilizaremos el Sonoff Zigbee 3.0 USB Dongle para acceder al HomeAssistant y así actuar como un router frontera, mientras que el Seeed Studio XIAO MG24 actuará como un dispositivo de protocolo Matter con la red Thread. Para su conveniencia, le guiaremos a través de las siguientes tres preguntas para participar mejor en el proceso. ***Gracias al autor [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) por las ideas del WiKi***

### ¿Qué es Matter?
Matter (anteriormente CHIP) es un estándar universal de capa de aplicación desarrollado por la Connectivity Standards Alliance (CSA).
- Interoperabilidad entre proveedores sobre redes IP (Wi-Fi/Ethernet/Thread)
- Tipos de dispositivos estandarizados (por ejemplo, luces, cerraduras de puertas, termostatos)
- Puesta en servicio segura usando códigos QR/NFC
- Cifrado de extremo a extremo con Distributed Compliance Ledger (DCL)

### ¿Qué es OpenThread?
OpenThread es una implementación de código abierto del protocolo de red Thread. Crea redes de malla seguras y de bajo consumo para dispositivos IoT usando tecnología de radio IEEE 802.15.4. Características clave:
- Soporte IPv6 integrado (6LoWPAN)
- Topología de red auto-organizativa
- Cifrado AES-128 para todas las comunicaciones
- Compatible con dispositivos tan pequeños como bombillas o sensores

### ¿Cuál es la relación entre Matter y Thread?

***Gracias al autor [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) por una explicación muy detallada de este punto, citándolo!***

Después de esta breve introducción a Matter y Thread, ahora entiendes que Thread y Matter sirven propósitos diferentes y operan en diferentes capas del stack tecnológico. Para recapitular:

Thread:
- Thread es un protocolo de red de malla inalámbrica de bajo consumo diseñado para dispositivos domésticos conectados. Proporciona una forma confiable y segura para que los dispositivos se comuniquen entre sí y con internet.
- Thread crea una red local que permite a los dispositivos comunicarse entre sí incluso si internet se cae.

Matter:
- Matter es un protocolo de capa de aplicación que se sitúa sobre protocolos de red como Thread, Wi-Fi y Ethernet. Su objetivo es simplificar y unificar el ecosistema del hogar inteligente asegurando que los dispositivos de diferentes fabricantes puedan trabajar juntos sin problemas.
- Matter define cómo los dispositivos se comunican e interactúan a nivel de aplicación, enfocándose en la interoperabilidad, seguridad y facilidad de uso.

Conexión entre Thread y Matter:

- Matter puede usar Thread como uno de sus protocolos de red subyacentes. Esto significa que los dispositivos que usan el protocolo Matter pueden comunicarse sobre una red Thread.
- La combinación de Matter y Thread permite un ecosistema de hogar inteligente robusto, seguro e interoperable donde los dispositivos pueden comunicarse local y eficientemente.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## Descripción General del Hardware


<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
        <th>XIAO MG24</th>
        <th>Grove - Sensor de Temperatura y Humedad (SHT31)</th>
        <th>Seeed Studio Grove Base para XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Gree_HA.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Dongle.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/XIAO_MG24.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/SHT31.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>

## Descripción del Software

### Flasheo del dongle Sonoff ZBDongle-E

El dongle Sonoff ZBDongle-E viene con firmware que solo permite la comunicación con dispositivos Zigbee. Para habilitarlo para que funcione with el protocolo de radio Thread, debes flashear nuevo firmware. Puedes actualizar el firmware del dongle directamente desde el navegador Chrome en https://darkxst.github.io/silabs-firmware-builder. Después de insertar el dongle en tu computadora, haz clic en "Connect" y selecciona el firmware "OpenThread" para cambiar el firmware.
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img 
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/1.jpg" 
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img 
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/2.jpg" 
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img 
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/3.jpg" 
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>


### Dispositivo Sensor de Temperatura y Humedad Matter

Si esta es tu primera vez usando XIAO MG24 como dispositivo Matter, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/xiao_mg24_matter/) sobre cómo configurarlo.

- **Paso 1.** Descarga la [Librería](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor) desde Github.

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre un nuevo sketch, y copia el siguiente código en el nuevo sketch.

```cpp
#include <Matter.h>
#include <MatterTemperature.h>
#include <MatterHumidity.h>
#include "ArduinoLowPower.h"
#include "SHT31.h"
#include <Wire.h>


SHT31 sht31 = SHT31();

float humidity;
float temperature;

MatterHumidity matter_humidity_sensor;
MatterTemperature matter_temp_sensor;


void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
  
  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  Matter.begin();
  matter_temp_sensor.begin();
  matter_humidity_sensor.begin();
  matter_temp_sensor.set_device_name("XIAO_MG24");
  matter_temp_sensor.set_vendor_name("Seeed_Studio");
  matter_temp_sensor.set_product_name("Matter_SHT31");

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }
  Serial.println("Matter device is commissioned, waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Device is connected to Thread network");
  Serial.println("Waiting for Matter device discovery...");
  while (!matter_temp_sensor.is_online() || !matter_humidity_sensor.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop() {

  delay(1000);

  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  matter_temp_sensor.set_measured_value_celsius(temperature);
  matter_humidity_sensor.set_measured_value(humidity);


  LowPower.sleep(600000);
}
```

### Configuración de HomeAssistant

**Conjunto 1. Tienda de Complementos**

Necesitas descargar dos plugins basándote en las imágenes.

<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img 
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon1.jpg" 
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img 
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon2.jpg" 
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

**Conjunto 2 . Configuración de Thread**

Añade el complemento OpenThread Border Router. ¡Este complemento te permite crear o unirte a una red Thread y convertir Home Assistant en un Thread Border Router!
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img 
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread1.jpg" 
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img 
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread2.jpg" 
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>
Selecciona la red correspondiente en la configuración del servicio Thread.
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img 
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread3.jpg" 
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img 
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread4.jpg" 
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

### Configuración de Home Assistant en Móvil

Para añadir un dispositivo Matter a Home Assistant, necesitas instalar la aplicación Home Assistant en tu smartphone. El smartphone actúa como el "coordinador" para Matter, añadiendo nuevos dispositivos a la red Matter y realizando configuraciones de seguridad, mientras que el HomeAssistant Green actúa como el controlador para Matter, gestionando todos los dispositivos conectados a la red Matter.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone2.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### Añadiendo un Dispositivo Matter

Para incorporar un nuevo dispositivo Matter en tu sistema de automatización del hogar, elige "Añadir Dispositivo Matter" y escanea el código QR incluido con el dispositivo. Este tutorial demuestra cómo generar el código QR usando el sitio web CHIP, basado en la URL proporcionada por el XIAO MG24 en el Monitor Serie.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone7.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone6.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone8.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone9.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### Panel de HA para ver temperatura y humedad

Una vez que el código QR se añade exitosamente, ¡podemos ver nuestro sensor de temperatura y humedad en el panel de HA!

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result3.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
</table>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>