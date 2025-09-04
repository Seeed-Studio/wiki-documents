---
description: Este artículo se centra en el uso del sensor Grove SGP41.
title: Grove -Sensor Inteligente de Calidad del Aire (SGP41)
keywords:
- SGP41
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/grove-smart-air-quality-sensor-sgp41
last_update:
  date: 5/11/2023
  author: Stephen Lo
---

# Grove -Sensor Inteligente de Calidad del Aire (SGP41)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

El Grove - Sensor Inteligente de Calidad del Aire (SGP41) es un módulo sensor de gas digital de la serie Grove. Cuenta con una interfaz Grove de 4 pines que permite a los usuarios conectar fácilmente el sensor a un microcontrolador. El módulo soporta alimentación tanto de 3.3V como de 5V, haciéndolo flexible.

El sensor de gas digital SGP41 utiliza la tecnología CMOSens® de Sensirion, que ofrece un sistema sensor completo y fácil de usar en un solo chip. Puede medir la concentración de compuestos orgánicos volátiles (COV) y óxidos de nitrógeno (NOx) en el aire interior y proporciona señales de salida digitales. Además, este sensor tiene una estabilidad a largo plazo y vida útil excepcionales.

El módulo Grove - Sensor Inteligente de Calidad del Aire (SGP41) es compacto y adecuado para aplicaciones con espacio limitado. También tiene alta confiabilidad y reproducibilidad. Si necesita medir la calidad del aire interior, ¡considere usar nuestro módulo Grove - Sensor de Calidad del Aire (SGP41)!

:::tip

Hemos lanzado la [Guía de Selección de Sensores de Gas de Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.

:::

## Características

- Sensor de gas digital: El SGP41 es un sensor de gas digital que puede medir la concentración de compuestos orgánicos volátiles (COV) y óxidos de nitrógeno (NOx) en el aire interior.
- Tecnología CMOSens®: El SGP41 utiliza la tecnología CMOSens® de Sensirion, que ofrece un sistema sensor completo y fácil de usar en un solo chip.
- Estabilidad a largo plazo: El SGP41 tiene una estabilidad a largo plazo y vida útil excepcionales, haciéndolo ideal para aplicaciones que requieren monitoreo continuo de la calidad del aire interior.
- Señales de salida digitales: El SGP41 proporciona señales de salida digitales, lo que facilita su integración con microcontroladores y otros sistemas digitales.
- Factor de forma pequeño: El SGP41 es muy compacto y adecuado para aplicaciones con espacio limitado. Cuenta con una interfaz Grove de 4 pines que permite a los usuarios conectar fácilmente el sensor a un microcontrolador.
- Alimentación flexible: El módulo soporta alimentación tanto de 3.3V como de 5V, haciéndolo muy flexible y fácil de usar en diferentes aplicaciones.
- Alta confiabilidad y reproducibilidad: El proceso de producción de vanguardia de Sensirion garantiza alta reproducibilidad y confiabilidad del módulo SGP41.

## Especificación

- Tecnología de detección: Sensor de gas basado en MOx para aplicaciones de calidad del aire
- Detección de gases: Mediciones de VOC y NOx
- Interfaz: Interfaz I2C con señales de salida digital
- Consumo de energía: Bajo consumo de energía de 3.0 mA a 3.3 V
- Rango de temperatura de funcionamiento: -40°C a +85°C
- Rango de humedad: 0% a 100% HR (sin condensación)
- Tiempo de respuesta: &lt;10 segundos para VOCs y &lt;60 segundos para NOx
- Precisión: ±15% para VOCs y ±50 ppb para NOx (en condiciones estándar)

## Aplicaciones

- Monitoreo de calidad del aire interior: El SGP41 es ideal para monitorear la calidad del aire interior en hogares, oficinas, escuelas y otros entornos interiores.
- Purificadores de aire: El SGP41 puede integrarse en purificadores de aire para detectar y eliminar gases nocivos del aire.
- Sistemas de ventilación controlada por demanda: El SGP41 puede utilizarse en sistemas de ventilación controlada por demanda para ajustar la tasa de ventilación basándose en el nivel de contaminantes en el aire.
- Hogares inteligentes: El SGP41 puede integrarse en sistemas de hogares inteligentes para proporcionar información en tiempo real sobre la calidad del aire interior y activar acciones basadas en esta información.
- Aplicaciones industriales: El SGP41 puede utilizarse en aplicaciones industriales como plantas químicas, refinerías e instalaciones de manufactura para monitorear la calidad del aire interior y garantizar la seguridad de los trabajadores.
- Monitoreo ambiental: El SGP41 puede utilizarse para el monitoreo ambiental de emisiones de VOCs y NOx de fábricas, vehículos y otras fuentes.

## Descripción General del Hardware

### Mapa de Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/sgp41_hw.png" alt="pir" width={600} height="auto" /></p>

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Materiales requeridos

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino V4.3</th>
   <th>Grove Base Shield V2.0</th>
            <th>Grove - Sensor Inteligente de Calidad del Aire (SGP41)</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::note
**1**. Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2**. Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta Grove - Smart Air Quality Sensor (SGP41) al puerto **I2C** del Grove Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Smart Air Quality Sensor (SGP41) al Seeeduino como se muestra a continuación.
:::

| Seeeduino     | Grove-VOC and eCO2 Gas Sensor(SGP30) |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

#### Software

- **Paso 1.** Descarga las librerías de dependencias desde Github.

  - **Librería arduino-core**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-core" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

  - **Librería arduino-i2c-sgp41**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-i2c-sgp41" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Después de descargar e instalar la librería correctamente, puedes encontrar un programa de ejemplo llamado `exampleUsage.ino` en la carpeta de ejemplos. Este programa está diseñado para el sensor SGP41.

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp41.h>
#include <Wire.h>

SensirionI2CSgp41 sgp41;

// time in seconds needed for NOx conditioning
uint16_t conditioning_s = 10;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp41.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp41.getSerialNumber(serialNumber, serialNumberSize);

    if (error) {
        Serial.print("Error trying to execute getSerialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SerialNumber:");
        Serial.print("0x");
        for (size_t i = 0; i < serialNumberSize; i++) {
            uint16_t value = serialNumber[i];
            Serial.print(value < 4096 ? "0" : "");
            Serial.print(value < 256 ? "0" : "");
            Serial.print(value < 16 ? "0" : "");
            Serial.print(value, HEX);
        }
        Serial.println();
    }

    uint16_t testResult;
    error = sgp41.executeSelfTest(testResult);
    if (error) {
        Serial.print("Error trying to execute executeSelfTest(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTest failed with error: ");
        Serial.println(testResult);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];
    uint16_t defaultRh = 0x8000;
    uint16_t defaultT = 0x6666;
    uint16_t srawVoc = 0;
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // During NOx conditioning (10s) SRAW NOx will remain 0
        error = sgp41.executeConditioning(defaultRh, defaultT, srawVoc);
        conditioning_s--;
    } else {
        // Read Measurement
        error = sgp41.measureRawSignals(defaultRh, defaultT, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("Error trying to execute measureRawSignals(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx:");
        Serial.println(srawNox);
    }
}
```

- **Paso 4.** Sube el código de demostración.

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/2.png" style={{width:700, height:'auto'}}/></div>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - Sensor Inteligente de Calidad del Aire (SGP41) SCH&PCB](https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip)
- **[PDF]** [Hoja de Datos SGP41](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)

## Soporte Técnico y Discusión de Productos

.

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
