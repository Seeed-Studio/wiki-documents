---
title: Quectel L76K
description: Comience con el módulo L76K GNSS para XIAO
keywords:
  - XIAO
  - Quectel L76K
  - GNSS
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg
slug: /es/get_start_l76k_gnss
sidebar_position: 0
last_update:
  date: 2024-10-14
  author: Spencer
---

# Comenzando con el Módulo GNSS L76K para SeeedStudio XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<!-- TODO Add bazaar link -->

## Introducción

El Módulo GNSS L76K para SeeedStudio XIAO es un módulo Multi-GNSS (Sistema Global de Navegación por Satélite) compatible con todas las placas de desarrollo XIAO, soporta sistemas GPS, BeiDou (BDS), GLONASS y QZSS, permite posicionamiento combinado de múltiples sistemas o independiente de un solo sistema. También soporta función AGNSS, amplificador de bajo ruido integrado y filtro de superficie acústica, y proporciona una buena experiencia de posicionamiento rápida, precisa y de alto rendimiento.

El módulo viene con una antena GNSS activa de alto rendimiento diseñada para cubrir las bandas GPS L1 C/A, BeiDou B1 y GLONASS L1. El diseño también tiene un pequeño LED verde brillante para indicar la salida 1PPS en la fijación.

### Características

- **Recepción Mejorada:** Amplificador de Bajo Ruido integrado y Filtro de Ondas Acústicas de Superficie para mejorar la sensibilidad y reducción de ruido
- **Alta Precisión:** 32/72 canales, seguimiento de -162dBm, sensibilidad de re-adquisición de -160dBm
- **Eficiencia Energética**: 41mA seguimiento/adquisición, 360µA en espera
- **Sistemas Multi-GNSS**: Alimentado por Quectel L76K, soportando GPS, BeiDou, GLONASS y QZSS
- **Antena Cerámica:** Recepción de señal mejorada, superior a las antenas tradicionales.

### Especificación

<div class="table-center">
<table align="center">
 <tr>
     <th>Elemento</th>
     <th>Detalle</th>
 </tr>
 <tr>
     <th>Bandas GNSS</th>
     <td>GPS L1 C/A: 1575.42MHz<br></br> GLONASS L1: 1602MHz<br></br> BeiDou B1: 1561.098MHz</td>
 </tr>
 <tr>
     <th>Canales</th>
     <td>32 canales de seguimiento/72 canales de adquisición</td>
 </tr>
  <tr>
     <th>TTFF (Tiempo Hasta Primera Fijación)</th>
     <td>Arranques en Frío: 30s(sin AGNSS), 5.5s(con GNSS)<br></br> Arranques en Caliente: 5.5s(sin AGNSS), 2s(con AGNSS)</td>
 </tr>
  <tr>
     <th>Sensibilidad</th>
     <td>Auto-adquisición: -148dBm<br></br> Seguimiento: -162dBm<br></br> Re-adquisición: -160dBm</td>
 </tr>
  <tr>
     <th>Precisión</th>
     <td>Posición: 2.0m CEP<br></br> Velocidad: 0.1m/s<br></br> Aceleración: 0.1m/s²<br></br> Temporización: 30ns</td>
 </tr>
  <tr>
     <th>Interfaz UART</th>
     <td>Velocidad de Baudios: 9600~115200bps(9600bps por defecto)<br></br> Tasa de Actualización: 1Hz(por defecto), 5Hz(Máx.)<br></br> Protocolo: NMEA 0183, protocolo propietario CASIC </td>
 </tr>
  <tr>
     <th>Antena</th>
     <td>Tipo: Antena Activa<br></br> Frecuencia de Operación: 1559–1606MHz<br></br> Cable Coaxial: RF1.13 Longitud=10cm<br></br> Conector de Cable: U.FL Plug RA </td>
 </tr>
  <tr>
     <th>Consumo de corriente(con antena activa)</th>
     <td>Auto-adquisición: 41mA<br></br> Seguimiento: 41mA<br></br> Espera: 360uA </td>
 </tr>
  <tr>
     <th>Dimensión</th>
     <td>18mm x 21mm</td>
 </tr>
</table>
</div>

## Descripción del Hardware

Antes de comenzar, podemos referirnos a las siguientes imágenes para entender el diseño de pines del Módulo GNSS L76K para SeeedStudio XIAO para facilitar nuestra comprensión de la función del módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-pinout.png" style={{width:800, height:'auto'}}/></div>

## Primeros Pasos

### Preparación del Hardware

Para experimentar completamente las capacidades del Módulo GNSS L76K, recomendamos emparejarlo con una placa madre de nuestra serie XIAO. *Cualquiera de los siguientes modelos XIAO* sería compatible para usar con el Módulo GNSS L76K.

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Antes de usar este módulo en una placa base XIAO, necesitas instalar los conectores de cabecera en el módulo y conectar la antena GNSS activa al módulo. Al conectar al XIAO, por favor presta especial atención a la dirección de instalación del módulo, por favor no lo conectes al revés, de lo contrario es probable que quemes el módulo o el XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-assembled.png" style={{width:500, height:'auto'}}/></div>

:::caution
Por favor presta especial atención a la dirección de instalación del módulo, por favor no lo conectes al revés, de lo contrario es probable que quemes el módulo o el XIAO.
:::

### Preparación del Software

Para usar el Módulo GNSS L76K para SeeedStudio XIAO, necesitamos programar la serie XIAO. La herramienta de programación recomendada es el IDE de Arduino, y necesitas configurar el entorno de Arduino para el XIAO y añadir el paquete de la placa.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](/es/Getting_Started_with_Arduino/).
:::

#### Paso 1. Descarga e Instala la versión estable del IDE de Arduino según tu sistema operativo

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar IDE de Arduino</font></span></strong></a>
</div>

#### Paso 2. Inicia la aplicación Arduino

#### Paso 3. Configura el IDE de Arduino para el XIAO que estés usando

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, por favor consulta **[este tutorial](/es/Seeeduino-XIAO/#software)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](/es/XIAO-RP2040-with-Arduino/#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, por favor consulta **[este tutorial](/es/XIAO_BLE/#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, por favor consulta **[este tutorial](/es/XIAO_ESP32C3_Getting_Started#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, por favor consulta **[este tutorial](/es/xiao_esp32s3_getting_started#software-preparation)** para terminar de añadirlo.

#### Paso 4. Añade la biblioteca TinyGPSPlus a Arduino

Primero, necesitas buscar y descargar la última versión de la biblioteca **TinyGPSPlus** en el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/installing-tinygpsplus.png" style={{width:800, height:'auto'}}/></div>

## Demostración de Aplicación

### Ejemplo 1: Lectura y Visualización de Datos GNSS

Una vez que el hardware y software estén listos, comenzamos subiendo nuestro primer programa de ejemplo. El Módulo GNSS L76K imprime la información GNSS a través del puerto serie cada 1 segundo después del encendido. En este ejemplo, usaremos la biblioteca **TinyGPSPlus** para analizar las sentencias NMEA recibidas del módulo e imprimir los resultados incluyendo latitud, longitud y tiempo al Monitor Serie del IDE de Arduino.

Aquí está el código fuente:

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>
/*
   This sample sketch demonstrates how to use L76K GNSS Module on SeeedStudio XIAO.
*/
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;

// The TinyGPSPlus object
TinyGPSPlus gps;

// The serial connection to the GNSS module
SoftwareSerial ss(RXPin, TXPin);

void setup() {
  Serial.begin(115200);
#ifdef ARDUINO_SEEED_XIAO_RP2040
  pinMode(D2,OUTPUT);
  digitalWrite(D2,1);
  pinMode(D0,OUTPUT);
  digitalWrite(D0,1);
#endif
  ss.begin(GPSBaud);

  Serial.println(F("DeviceExample.ino"));
  Serial.println(F("A simple demonstration of TinyGPSPlus with L76K GNSS Module"));
  Serial.print(F("Testing TinyGPSPlus library v. "));
  Serial.println(TinyGPSPlus::libraryVersion());
  Serial.println(F("by Mikal Hart"));
  Serial.println();
}

void loop() {
  // This sketch displays information every time a new sentence is correctly encoded.
  while (ss.available() > 0)
    if (gps.encode(ss.read()))
      displayInfo();

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println(F("No GPS detected: check wiring."));
    while (true);
  }
}

void displayInfo() {
  Serial.print(F("Location: "));
  if (gps.location.isValid()) {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid()) {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid()) {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.println();
}
```

Simplemente selecciona el XIAO que estés usando y el número de puerto donde se encuentra el XIAO, compila y súbelo.

Asegúrate de que el Módulo GNSS L76K esté colocado en el exterior donde se puedan recibir buenas señales GNSS. Sube el código a tu XIAO y espera unos minutos, deberías ver la información mostrada en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-output.png" style={{width:800, height:'auto'}}/></div>

Este código utiliza la biblioteca TinyGPSPlus para leer datos del módulo GNSS L76K a través de una conexión serie y muestra información de ubicación válida y fecha/hora en el monitor serie.

<!-- PCN(May 25, 2025): Considering the scenario of power saving, we removed the fix status indicator. Therefore, hide the following LED demo.

## Configuración

### Ejemplo 1: Cambiar el comportamiento del LED

Esta sección demuestra cómo controlar un LED verde usando Arduino enviando comandos hexadecimales específicos a través de comunicación serie. El ejemplo proporcionado a continuación muestra cómo apagar el LED y luego devolverlo a su estado normal de parpadeo.

```cpp
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
SoftwareSerial SerialGNSS(RXPin, TXPin);

void setup() {
  SerialGNSS.begin(GPSBaud);

  // Define the byte array to turn the LED off
  byte OffState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                     0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                     // highlight-start
                     0x00, 
                     // highlight-end
                     0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, 
                     // highlight-start
                     0xF0, 
                    // highlight-end
                     0xC8, 0x17, 0x08};

  // Define the byte array to recover the LED blinking state
  byte RecoverState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                         0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                         // highlight-start
                         0x03, 
                         // highlight-end
                         0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00,
                         // highlight-start
                         0xF3, 
                         // highlight-end
                         0xC8, 0x17, 0x08};

  // Send the command to turn off the LED.
  SerialGNSS.write(OffState, sizeof(OffState));
  // Wait for 5 seconds.
  delay(5000);
  // Send the command to return the LED to blinking.
  SerialGNSS.write(RecoverState, sizeof(RecoverState));
}

void loop() {}
```

:::info
Para detalles ver Mensajes de Protocolo CASIC de Quectel_L76K_GNSS.

```c
struct CASIC_Messages {  
  uint16_t header; // 0xBA, 0xCE
  uint16_t len;    // 0x10, 0x00
  uint8_t class;   // 0x06
  uint8_t id;      // 0x03
  uint8_t* payload; // 0x40, 0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, ->8
                   // 0x00, 0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, ->8
  uint8_t checksum; // 0xF0,0xC8, 0x17, 0x08
} L76KStruct;
```

:::-->

## Recursos

- **PDF**: [Esquemático del Módulo GNSS L76K para Seeed Studio XIAO](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/109100021-L76K-GNSS-Module-for-Seeed-Studio-XIAO-Schematic.pdf)
- **PDF**: [Quectel_L76K_GNSS_协议规范_V1.0](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_协议规范_V1.0.pdf)
- **PDF**: [Quectel_L76K_GNSS_Protocol_Specification_V1.1](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_Protocol_Specification_V1.1.pdf)
- **GitHub**: [Seeed_L76K-GNSS_for_XIAO](https://github.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO)

## Solución de problemas

<details>
<summary>¿Puede la celda recargable alimentar el XIAO?</summary>
No, la celda recargable en este contexto se utiliza únicamente para el Reloj de Tiempo Real (RTC) y para mantener un estado de arranque en caliente en el Módulo GNSS L76K. No puede utilizarse como fuente de alimentación principal para el XIAO o para las operaciones generales del módulo GNSS.
</details>

<details>
<summary>¿Por qué no se muestra la información GNSS en el monitor serie?</summary>

Asegúrese de que el Módulo GNSS L76K esté colocado al aire libre donde se puedan recibir buenas señales GNSS.
</details>

<details>
<summary>¿Por qué la luz verde del dispositivo permanece encendida constantemente cuando se conecta al XIAO RP2040?</summary>
Para solucionar este problema, necesita poner D0 y D2 en alto. La iluminación constante de la luz verde de fijación indica que el dispositivo ha entrado en un estado de funcionamiento anormal.
</details>

```cpp
pinMode(D2,OUTPUT);
digitalWrite(D2,1);
pinMode(D0,OUTPUT);
digitalWrite(D0,1);
```

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
