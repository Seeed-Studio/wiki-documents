---
description: Grove - Sensor de Temperatura y Humedad (SHT4x)
title: Grove - Sensor de Temperatura y Humedad (SHT4x)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-SHT4x
last_update:
  date: 1/4/2022
  author: jianjing Huang
---


# Grove - Sensor de Temperatura y Humedad

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Introducción

Este sensor digital Grove SHT40 está basado en los sensores de humedad y temperatura de probada eficacia industrial de Sensirion. Puede proporcionar precisión constante de temperatura y humedad en un amplio rango de medición. Y con la plataforma grove, estás listo para conectar y usar el sensor SHT4x en cualquier microcontrolador (Arduino) o microprocesador (Raspberry Pi).

## Descripción General del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Grove - Sensor de Temperatura y Humedad.

<table border="0">
<tbody>
<tr>
<td><strong>Parámetro       </strong></td>
<td><strong>Valor</strong></td>
</tr>
<tr>
<td>Tasa de precisión de temperatura</td>
<td>±0.2 ℃</td>
</tr>
<tr>
<td>Tasa de precisión de humedad </td>
<td>±1.8% RH</td>
</tr>
<tr>
<td>Rango de temperatura de funcionamiento  </td>
<td>-40°C a 125°C</td>
</tr>
<tr>
<td>Rango de humedad de funcionamiento       </td>
<td>0% a 100% RH</td>
</tr>
<tr>
<td>Alimentación Grove            </td>
<td>5/3.3 v</td>
</tr>
<tr>
<td>Protocolo Serie</td>
<td>I2C </td>
</tr>
<tr>
<td>Corriente promedio Grove </td>
<td>32 µA</td>
</tr>
<tr>
<td>Corriente en reposo Grove</td>
<td>1.2µA</td>
</tr>
<tr>
<td>Dimensión del Producto</td>
<td>20mm x 40mm</td>
</tr>
<tr>
<td>Comunicación</td>
<td>IIC</td>
</tr>
<tr>
<td>Velocidad</td>
<td>115200</td>
</tr>
</tbody>
</table>

## Comenzando

Ahora podemos configurar el módulo y detectar humedad y temperatura.

### Preparación

**Hardware**

- Grove - Sensor de Temperatura y Humedad
- PC host Windows o PC MacOS (Win 10 y MacOS 12.2 probados)
- Cable Type-C

**Software**

- [Software Arduino](https://www.arduino.cc/)
- [Librería del módulo](https://github.com/Sensirion/arduino-i2c-sht4x)

## Descripción General de la Librería Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

La librería que usamos aquí está publicada en Github, incluyendo el ejemplo.

<p style={{textAlign: 'center'}}><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank"><img src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></p>

### Función

- `Serial.begin(115200);` —— El número aquí significa que la velocidad está configurada a 115200. Cuando subimos el código, es necesario configurar la velocidad a 115200 mientras se abre el monitor

### Instalación

Ya que has descargado la librería zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la librería se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la librería se instaló exitosamente.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

### Actualizando el Paquete

Por el bien de la continuidad del producto, podemos optimizar y actualizar la librería del producto en una etapa posterior. Según los dos métodos de instalación de librería proporcionados arriba, también hay dos formas de actualizar la librería para referencia.

Seremos los primeros en actualizar GitHub cuando la librería sea optimizada. Puedes eliminar la carpeta de librería original en la carpeta de tu computadora, luego descargar la versión más reciente de GitHub, descomprimirla y ponerla en el directorio de librerías del Arduino IDE. (**...\Arduino\libraries. ....** es la ruta que configuraste para Arduino)

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" /></div>

## Ejemplo Arduino

Ahora que tenemos nuestra librería instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro Grove - Sensor de Temp y Humedad para ver cómo se comporta.

**Prerrequisito**

| Seeeduino V4.2 | Base Shield | Grove - Sensor de Temp y Humedad|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="{210}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html)|

**Paso 1.**  Conecta el hardware como se muestra abajo, y enfócate en la conexión del puerto IIC:

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xconnection.png" /></div>

**Paso 2.** Necesitas instalar un Software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width = "{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

**Paso 3.** Inicia la aplicación Arduino.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 4.** Navega a "file-->examples-->Sensirion IIC Sen4x-->exampleUsage" y abre el ejemplo proporcionado en la librería. También puedes copiar el código de abajo:

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

**Paso 5.** Sube el código al software de Arduino y haz clic en "monitor" en la esquina superior derecha. El resultado del monitor podría mostrarse así:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xoutput.png" /></div>

## Recursos

- **[PDF]** [Hoja de datos SHT4x](https://files.seeedstudio.com/wiki/SHT4x/SHT4x_Datasheet.pdf)

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
