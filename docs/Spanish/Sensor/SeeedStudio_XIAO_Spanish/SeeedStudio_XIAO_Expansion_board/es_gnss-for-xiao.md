---
description: Getting started with L76-L GNSS for XIAO
title: L76-L GNSS para XIAO
keywords:
- gps
- gnss
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/gnss_for_xiao
last_update:
  date: 02/16/2025
  author: Guillermo
---

# L76-L GNSS para XIAO

:::danger
Este producto está en espera.
:::

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/Longan-Labs/XIAO_GPS/main/IMG/back.png" alt="pir" width={250} height="auto" /></p>

Bienvenido al L76-L GNSS para XIAO, la última incorporación a la serie de productos XIAO de Seeed Studio. Este módulo GNSS no solo ofrece capacidades de posicionamiento preciso para tus proyectos, sino que también se integra perfectamente con el controlador principal XIAO, convirtiéndolo en una herramienta potente. Ya sea que estés diseñando una aplicación móvil, un dispositivo de rastreo o simplemente quieras agregar funcionalidades de geolocalización a tu proyecto, este módulo es tu mejor opción.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/gnss_for_xiao">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción  

### Características  

- **Soporte Multiconstelación:** Compatible con GPS, GLONASS, Galileo y QZSS.  
- **Alto Rendimiento:** Equipado con 33 canales de seguimiento, 99 canales de adquisición y 210 canales PRN.  
- **Compatibilidad con XIAO:** Diseñado para integrarse sin problemas con el controlador principal XIAO.  
- **Conectividad Flexible:** Además de la conexión con XIAO, ofrece pads como VCC y GND para aplicaciones más amplias.  

### Especificaciones  

- **Tipo de GNSS:** L76-L  
- **Sistemas Satelitales Compatibles:** GPS, GLONASS, Galileo y QZSS.  
- **Puerto de Conexión:** Diseñado para XIAO.  
- **Puerto de Conexión para XIAO:** D2/D3 (TX/RX)  
- **Pads Adicionales:** VCC, GND, TX, RX  

### Aplicaciones  

- **Aplicaciones Móviles:** Proporciona capacidades de geolocalización precisa para tus aplicaciones móviles.  
- **Dispositivos de Rastreo:** Diseña y construye dispositivos de localización y seguimiento.  
- **Funciones de Geolocalización:** Agrega capacidades de geolocalización a tus proyectos.  

## Primeros Pasos  

Bienvenido a la guía rápida de inicio para el **L76-L GNSS para XIAO**. Esta guía tiene como objetivo ayudarte a configurar y comenzar a utilizar tu nueva placa de expansión GPS junto con el controlador principal **XIAO nRF52840**.  

### Preparación de Hardware  

#### Soldadura de los Pines  

Al recibir tu producto, será necesario realizar una soldadura. Se incluyen dos pines en el paquete que deberán ser soldados a la placa de expansión.  

#### Conexión del XIAO a la Placa de Expansión  

Una vez completada la soldadura, puedes proceder a conectar la placa de expansión al controlador principal XIAO.  

### Preparación de Software  

#### EspSoftwareSerial (Solo para la serie XIAO ESP32)  

Si estás utilizando la serie XIAO ESP32 como maestro, es posible que necesites descargar la biblioteca para el puerto serie por software por separado.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/espsoftwareserial/">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Puedes buscar e instalar la biblioteca `EspSoftwareSerial` directamente desde el Administrador de Bibliotecas en el Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/1.png" style={{width:400, height:'auto'}}/></div>

:::note
Si estás usando otra serie de XIAO, no necesitas descargar la biblioteca para el puerto serial por separado.
:::

#### TinyGPSPlus  

También necesitamos una biblioteca para analizar los mensajes de datos GPS reportados por la placa de expansión. Puedes descargar la biblioteca **TinyGPSPlus** haciendo clic en el botón de abajo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/tinygpsplus/">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Puedes buscar e instalar la biblioteca `TinyGPSPlus` directamente desde el Administrador de Bibliotecas en el Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/2.png" style={{width:400, height:'auto'}}/></div>

## Ejemplo de XIAO nRF52840  

El módulo L76-L envía información GPS a través del puerto serie cada 1 segundo. En este ejemplo, imprimimos el contenido recibido desde el puerto serie. Podrás ver mucha información, incluyendo la hora, los satélites, así como la latitud y la longitud. Aquí está el código.

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>

static const int RXPin = D3, TXPin = D2;
static const uint32_t GPSBaud = 9600;

// El objeto TinyGPSPlus
TinyGPSPlus gps;

// La conexión serie al dispositivo GPS
SoftwareSerial ss(RXPin, TXPin);

void setup()
{
    Serial.begin(115200);
    ss.begin(GPSBaud);

    Serial.println(F("DeviceExample.ino"));
    Serial.println(F("Una demostración simple de TinyGPSPlus con un módulo GPS conectado"));
    Serial.print(F("Probando la librería TinyGPSPlus v. ")); Serial.println(TinyGPSPlus::libraryVersion());
    Serial.println(F("por Mikal Hart"));
    Serial.println();
}

void loop()
{
    // Este sketch muestra información cada vez que se codifica correctamente una nueva sentencia.
    while (ss.available() > 0)
    if (gps.encode(ss.read()))
    displayInfo();

    if (millis() > 5000 && gps.charsProcessed() < 10)
    {
        Serial.println(F("No se detectó GPS: verifique el cableado."));
        while(true);
    }
}

void displayInfo()
{
    Serial.print(F("Ubicación: "));
    if (gps.location.isValid())
    {
        Serial.print(gps.location.lat(), 6);
        Serial.print(F(","));
        Serial.print(gps.location.lng(), 6);
    }
    else
    {
        Serial.print(F("INVÁLIDO"));
    }

    Serial.print(F("  Fecha/Hora: "));
    if (gps.date.isValid())
    {
        Serial.print(gps.date.month());
        Serial.print(F("/"));
        Serial.print(gps.date.day());
        Serial.print(F("/"));
        Serial.print(gps.date.year());
    }
    else
    {
        Serial.print(F("INVÁLIDO"));
    }

    Serial.print(F(" "));
    if (gps.time.isValid())
    {
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
    }
    else
    {
        Serial.print(F("INVÁLIDO"));
    }

    Serial.println();
}
```

Asegúrate de utilizar el módulo GPS en un lugar más abierto para que pueda recibir una buena señal GPS. Con una señal adecuada, en un máximo de cinco minutos, el puerto serie mostrará la información de latitud, longitud y hora proporcionada por el módulo GPS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/3.png" style={{width:700, height:'auto'}}/></div>


## Trabajar sin XIAO  

Si deseas utilizar el módulo GPS con otros microcontroladores, pueden hacer uso de las cuatro almohadillas de soldadura disponibles en la placa de circuito: 3V, GND, TX y RX.  

Conectando estas almohadillas a los pines respectivos en el microcontrolador deseado, el módulo L76-L puede ser integrado y operado sin el XIAO. Asegúrate de consultar la documentación del microcontrolador específico para obtener las configuraciones y conexiones de pines adecuadas.

|Modulo L76-L|Otros MCU|
|------------|----------|
|3V|3.3V|
|GND|GND|
|TX|RX|
|RX|TX|

## Recursos  

- **[Zip]** [Archivo Eagle](https://files.seeedstudio.com/wiki/gnss-xiao/XIAO_GPS_SCH&PCB.zip)  
- **[PDF]** [Hoja de datos - L76-L](https://files.seeedstudio.com/wiki/gnss-xiao/L76-L_doc.zip)  

## Soporte Técnico y Discusión sobre el Producto  

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>








