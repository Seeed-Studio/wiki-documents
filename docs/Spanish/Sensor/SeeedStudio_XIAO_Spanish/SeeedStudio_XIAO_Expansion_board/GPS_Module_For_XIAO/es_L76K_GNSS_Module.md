---
title: Quectel L76K
description: Introducción al Modulo L76K GNSS para XIAO
keywords:
  - XIAO
  - Quectel L76K
  - GNSS
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg
slug: /es/get_start_l76k_gnss
sidebar_position: 0
last_update:
  date: 2025-02-14
  author: Guillermo
---

# Introducción al Modulo L76K GNSS para XIAO de Seeed Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<!-- TODO Add bazaar link -->

## Introducción

El módulo L76K GNSS para SeeedStudio XIAO es un módulo Multi-GNSS (Sistema Global de Navegación por Satélite) compatible con todas las placas de desarrollo XIAO, que soporta los sistemas GPS, BeiDou (BDS), GLONASS y QZSS, permitiendo posicionamiento combinado de múltiples sistemas o independiente de un solo sistema. También soporta la función AGNSS, amplificador de bajo ruido integrado y filtro de onda acústica superficial, proporcionando una experiencia de posicionamiento rápida, precisa y de alto rendimiento.

El módulo viene con una antena GNSS activa de alto rendimiento, diseñada para cubrir las bandas GPS L1 C/A, BeiDou B1 y GLONASS L1. El diseño también incluye un pequeño LED verde brillante que indica la salida 1PPS en la fijación.

### Características

- **Recepción Mejorada:** Amplificador de bajo ruido integrado y filtro de onda acústica superficial para una mejor sensibilidad y reducción de ruido.
- **Alta Precisión:** 32/72 canales, sensibilidad de seguimiento de -162dBm, sensibilidad de re-adquisición de -160dBm.
- **Eficiencia Energética:** 41mA en seguimiento/adquisición, 360µA en espera.
- **Sistemas Multi-GNSS:** Alimentado por Quectel L76K, soportando GPS, BeiDou, GLONASS y QZSS.
- **Antena Cerámica:** Recepción de señal mejorada, superior a las antenas tradicionales.

### Especificaciones

<div class="table-center">
<table align="center">
 <tr>
     <th>Artículo</th>
     <th>Detalle</th>
 </tr>
 <tr>
     <th>GNSS bands</th>
     <td>GPS L1 C/A: 1575.42MHz<br></br> GLONASS L1: 1602MHz<br></br> BeiDou B1: 1561.098MHz</td>
 </tr>
 <tr>
     <th>Canales</th>
     <td>32 tracking ch/72 acquisition ch</td>
 </tr>
  <tr>
     <th>TTFF (Time To First Fix)</th>
     <td>Cold Starts: 30s(w/o AGNSS), 5.5s(w/ GNSS)<br></br> Hot Starts: 5.5s(w/o AGNSS), 2s(w/ AGNSS)</td>
 </tr>
  <tr>
     <th>Sensibilidad</th>
     <td>Auto-aquisition: -148dBm<br></br> Tracking: -162dBm<br></br> Re-acquisition: -160dBm</td>
 </tr>
  <tr>
     <th>Exactitud</th>
     <td>Posición: 2.0m CEP<br></br> Velocidad: 0.1m/s<br></br> Aceleración: 0.1m/s²<br></br> Tiempo: 30ns</td>
 </tr>
  <tr>
     <th>Interfaz UART</th>
     <td>Tasa de baudios: 9600~115200bps(9600bps default)<br></br> Tasa de actualización: 1Hz(default), 5Hz(Max.)<br></br> Protocolo: NMEA 0183, CASIC proprietary protocol </td>
 </tr>
  <tr>
     <th>Antena</th>
     <td>Tipo: Antena activa<br></br> Frecuencia operativa: 1559–1606MHz<br></br> Coaxial Cable: RF1.13 Length=10cm<br></br> Cable Connector: U.FL Plug RA </td>
 </tr>
  <tr>
     <th>Consumo de corriente (c/ antena activa)</th>
     <td>Auto-aquisition: 41mA<br></br> Tracking: 41mA<br></br> Standby: 360uA </td>
 </tr>
  <tr>
     <th>Dimensión</th>
     <td>18mm x 21mm</td>
 </tr>
</table>
</div>

## Visión General del Hardware

Antes de comenzar, podemos referirnos a las siguientes imágenes para entender el diseño de pines del módulo L76K GNSS para SeeedStudio XIAO, lo que facilitará nuestra comprensión de la función del módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-pinout.png" style={{width:800, height:'auto'}}/></div>

## Empezando

### Preparación del Hardware

Para experimentar completamente las capacidades del módulo L76K GNSS, recomendamos emparejarlo con una placa base de nuestra serie XIAO. *Cualquiera de los siguientes modelos de XIAO* sería compatible para usar con el módulo L76K GNSS.

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
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Antes de usar este módulo en una placa base XIAO, necesitas instalar los conectores de pines en el módulo y conectar la antena GNSS activa al módulo. Al conectarlo a la XIAO, por favor, presta especial atención a la dirección de instalación del módulo. No lo conectes al revés, ya que de lo contrario es probable que se dañe el módulo o la XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-assembled.png" style={{width:500, height:'auto'}}/></div>

:::caution
Por favor, presta especial atención a la dirección de instalación del módulo. No lo conectes al revés, ya que de lo contrario es probable que se dañe el módulo o la XIAO.
:::

### Preparación del Software

Para usar el módulo L76K GNSS para SeeedStudio XIAO, necesitamos programar la serie XIAO. La herramienta de programación recomendada es el IDE de Arduino, y es necesario configurar el entorno de Arduino para la XIAO y agregar el paquete correspondiente para la placa.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](/Getting_Started_with_Arduino/).
:::

#### Paso 1. Descarga e instala la versión estable del IDE de Arduino según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

#### Paso 2. Inicia la aplicación Arduino

#### Paso 3. Configura el IDE de Arduino para la XIAO que estás utilizando

- Si deseas usar **Seeed Studio XIAO SAMD21** para los programas posteriores, por favor consulta **[este tutorial](/Seeeduino-XIAO/#software)** para completar la configuración.

- Si deseas usar **Seeed Studio XIAO RP2040** para los programas posteriores, por favor consulta **[este tutorial](/XIAO-RP2040-with-Arduino/#software-setup)** para completar la configuración.

- Si deseas usar **Seeed Studio XIAO nRF52840** para los programas posteriores, por favor consulta **[este tutorial](/XIAO_BLE/#software-setup)** para completar la configuración.

- Si deseas usar **Seeed Studio XIAO ESP32C3** para los programas posteriores, por favor consulta **[este tutorial](/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la configuración.

- Si deseas usar **Seeed Studio XIAO ESP32S3** para los programas posteriores, por favor consulta **[este tutorial](/xiao_esp32s3_getting_started#software-preparation)** para completar la configuración.

#### Step 4. Add the TinyGPSPlus library to Arduino

First, you need to search and download the latest version of the **TinyGPSPlus** library in the Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/installing-tinygpsplus.png" style={{width:800, height:'auto'}}/></div>

## Demo de Aplicación

### Ejemplo 1: Lectura y Visualización de Datos GNSS

Una vez que el hardware y el software estén listos, comenzamos a cargar nuestro primer programa de ejemplo. El módulo L76K GNSS imprime la información GNSS a través del puerto serial cada 1 segundo después de encenderse. En este ejemplo, utilizaremos la biblioteca **TinyGPSPlus** para analizar las oraciones NMEA recibidas del módulo y mostrar los resultados, incluyendo la altitud, longitud y hora, en el Monitor Serial del IDE de Arduino.

Aquí está el código fuente:

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>
/*
   Este ejemplo demuestra cómo usar el Módulo L76K GNSS en SeeedStudio XIAO.
*/
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;

// El objeto TinyGPSPlus
TinyGPSPlus gps;

// La conexión serial con el módulo GNSS
SoftwareSerial ss(RXPin, TXPin);

void setup() {
  Serial.begin(115200);
#ifdef ARDUINO_SEEED_XIAO_RP2040
  pinMode(D10,OUTPUT);
  digitalWrite(D10,1);
  pinMode(D0,OUTPUT);
  digitalWrite(D0,1);
#endif
  ss.begin(GPSBaud);

  Serial.println(F("DeviceExample.ino"));
  Serial.println(F("Una demostración simple de TinyGPSPlus con el Módulo L76K GNSS"));
  Serial.print(F("Probando la biblioteca TinyGPSPlus v. "));
  Serial.println(TinyGPSPlus::libraryVersion());
  Serial.println(F("por Mikal Hart"));
  Serial.println();
}

void loop() {
  // Este sketch muestra información cada vez que una nueva sentencia es correctamente codificada.
  while (ss.available() > 0)
    if (gps.encode(ss.read()))
      displayInfo();

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println(F("No se detectó GPS: verifica el cableado."));
    while (true);
  }
}

void displayInfo() {
  Serial.print(F("Ubicación: "));
  if (gps.location.isValid()) {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  } else {
    Serial.print(F("INVÁLIDO"));
  }

  Serial.print(F(" Fecha/Hora: "));
  if (gps.date.isValid()) {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  } else {
    Serial.print(F("INVÁLIDO"));
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
    Serial.print(F("INVÁLIDO"));
  }

  Serial.println();
}
```

Solo selecciona el modelo de XIAO que estás utilizando y el número de puerto donde se encuentra el XIAO, compila y súbelo.

Asegúrate de que el Módulo L76K GNSS esté colocado en un lugar exterior donde pueda recibir una buena señal GNSS. Sube el código a tu XIAO y espera unos minutos, deberías ver la información mostrada en el monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-output.png" style={{width:800, height:'auto'}}/></div>

Este código usa la biblioteca TinyGPSPlus para leer datos del módulo L76K GNSS a través de una conexión serial y muestra la información de ubicación válida y la fecha/hora en el monitor serial.

## Configuración

### Ejemplo 1: Cambiar el comportamiento del LED

Esta sección demuestra cómo controlar un LED verde usando Arduino enviando comandos hexadecimales específicos a través de la comunicación serial. El ejemplo proporcionado a continuación muestra cómo apagar el LED y luego devolverlo a su estado normal de parpadeo.

```cpp
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
SoftwareSerial SerialGNSS(RXPin, TXPin);

void setup() {
  SerialGNSS.begin(GPSBaud);

  // Define el arreglo de bytes para apagar el LED
  byte OffState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                     0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                     // resaltar-inicio
                     0x00, 
                     // resaltar-fin
                     0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, 
                     // resaltar-inicio
                     0xF0, 
                    // resaltar-fin
                     0xC8, 0x17, 0x08};

  // Define el arreglo de bytes para recuperar el estado de parpadeo del LED
  byte RecoverState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                         0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                         // resaltar-inicio
                         0x03, 
                         // resaltar-fin
                         0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00,
                         // resaltar-inicio
                         0xF3, 
                         // resaltar-fin
                         0xC8, 0x17, 0x08};

  // Enviar el comando para apagar el LED.
  SerialGNSS.write(OffState, sizeof(OffState));
  // Esperar 5 segundos.
  delay(5000);
  // Enviar el comando para devolver el LED al parpadeo.
  SerialGNSS.write(RecoverState, sizeof(RecoverState));
}

void loop() {}
```

:::info
Para obtener detalles, consulta los mensajes del protocolo CASIC del Quectel_L76K_GNSS.

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
:::

## Recursos

- **PDF**: [Esquemático para el Modulo L76K GNSS para XIAO de Seeed Studio](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/109100021-L76K-GNSS-Module-for-Seeed-Studio-XIAO-Schematic.pdf)
- **PDF**: [Quectel_L76K_GNSS_协议规范_V1.0](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_协议规范_V1.0.pdf)
- **PDF**: [Quectel_L76K_GNSS_Protocol_Specification_V1.1](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_Protocol_Specification_V1.1.pdf)
- **GitHub**: [Seeed_L76K-GNSS_para_XIAO](https://github.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO)

## Solución de problemas

<details>
<summary>¿Puede la batería recargable alimentar el XIAO?</summary>
No, la batería recargable en este contexto se utiliza exclusivamente para el reloj en tiempo real (RTC) y para mantener un estado de inicio en caliente en el módulo L76K GNSS. No puede usarse como fuente de alimentación primaria para el XIAO ni para las operaciones generales del módulo GNSS.
</details>

<details>
<summary>¿Por qué no se muestra la información GNSS en el monitor serial?</summary>

Asegúrate de que el módulo L76K GNSS esté colocado en un lugar al aire libre donde pueda recibir buenas señales GNSS.
</details>

<details>
<summary>¿Por qué la luz verde del dispositivo permanece encendida constantemente cuando se conecta al XIAO RP2040?</summary>
Para solucionar este problema, debes activar los pines D0 y D10. La luz verde fija indica que el dispositivo ha entrado en un estado de funcionamiento anormal.

```cpp
pinMode(D10,OUTPUT);
digitalWrite(D10,1);
pinMode(D0,OUTPUT);
digitalWrite(D0,1);
```

</details>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
