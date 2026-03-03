---
description: Este artículo se centra en el uso del sensor Grove SGP41.
title: Corrección para medición SGP41(raw) dependiente de humedad y temperatura
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/grove-sgp41-with-aht20
last_update:
  date: 10/16/2023
  author: Hans Bausewein
---

# Corrección para medición SGP41(raw) dependiente de humedad y temperatura

## Descripción general (Cómo comencé con este proyecto)

Primero leí la documentación de [Grove - Smart Air Quality Sensor (SGP41)](https://wiki.seeedstudio.com/es/grove-smart-air-quality-sensor-sgp41) y [Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor](https://wiki.seeedstudio.com/es/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/).

Según la [Hoja de datos SGP41 (PDF)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf) sección 3.2 (Medición de Señal Raw), la medición del SGP41 depende de la humedad y temperatura, por lo que necesitamos aplicar una corrección para obtener datos consistentes: leer la humedad relativa y temperatura del AHT20 (u otro sensor), calcular los ticks y pasarlos a la función *sgp41_measure_raw_signals*.

### Prueba Teórica

La Tabla 11 (Descripción del comando de medición I2C) en la página 15 describe las fórmulas para calcular los ticks:

```
RHticks = RH% × 65535 / 100
Tticks = (T°C + 45) × 65535 / 175
```

Verifica usando los valores predeterminados de 25°C y 50% de humedad relativa:

```
50 × 65535 / 100 = 32767.5 = 0x8000 (hexadecimal, rounded up)
(25 + 45) × 65535 / 175 = 26214 = 0x6666 (hexadecimal) 
```

Los resultados coinciden con las constantes utilizadas en el programa usado por [Grove - Smart Air Quality Sensor (SGP41)](https://wiki.seeedstudio.com/es/grove-smart-air-quality-sensor-sgp41) y definidas en la Tabla 11 de la [SGP41 Datasheet (PDF)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf).

Lo mismo en c:

```cpp
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
```

Tenga en cuenta que 'humi' en el programa es un valor entre 0 y 1, por lo que se eliminaron la división por 100 y la multiplicación anterior.

## Preparación del Hardware

Estoy usando Seeeduino Nano como placa de control y usando Grove - Smart Air Quality Sensor (SGP41) y Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor para hacerlo posible.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino Nano</th>
   <th>Grove - AHT20 Temperature&amp;Humidity Sensor</th>
            <th>Grove - Smart Air Quality Sensor (SGP41)</th>
   <th>Grove - Branch Cable</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg" style={{width:185, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparación del Software

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Hay múltiples librerías que son requeridas y se presentan en el siguiente paso.

## Comenzando

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

### 1. Conectar con Arduino Nano

:::note
Por favor conecta el cable USB con cuidado, de lo contrario puedes dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
:::

- **Paso 1.** Conecta el Cable Ramificado Grove al puerto **I2C** del Seeeduino Nano.

- **Paso 2.** Conecta el Cable Ramificado Grove al módulo sensor I2C Grove AHT20.

- **Paso 3.** Conecta el Cable Ramificado Grove al módulo sensor I2C Grove SGP41.

- **Paso 4.** Conecta el Seeeduino a una PC mediante un cable USB.

![Seeeduino_SGP41_AHT20](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/1.jpg)

### 2. Descargar las librerías requeridas y añadirlas a Arduino

- **Paso 1.** Descarga las librerías de dependencia desde Github.

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

  - **Librería Seeed_Arduino_AHT20**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_AHT20" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Después de descargar e instalar las librerías correctamente, puedes subir el código de abajo, que es una combinación del software [SGP41](https://wiki.seeedstudio.com/es/grove-smart-air-quality-sensor-sgp41#software) y el [AHT20](https://wiki.seeedstudio.com/es/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor//#software-code) con las fórmulas descritas en la introducción añadidas.

### 3. Subir el Código y verificar el resultado

- **Paso 1.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```cpp
// ARDUINO DEMO FOR GROVE-AHT20+SGP41
//
#include <Wire.h>
#include "AHT20.h"
#include <Arduino.h>
#include <SensirionI2CSgp41.h>

SensirionI2CSgp41 sgp41;

// time in seconds needed for NOx conditioning
uint16_t conditioning_s = 10;

AHT20 AHT;

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
    AHT.begin();
}

uint16_t read_sgp41(uint16_t rh, uint16_t t) {
    uint16_t error;
    char errorMessage[256];
    uint16_t srawVoc = 0;
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // During NOx conditioning (10s) SRAW NOx will remain 0
        error = sgp41.executeConditioning(rh, t, srawVoc);
        conditioning_s--;
    } else {
        // Read Measurement
        error = sgp41.measureRawSignals(rh, t, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("Error trying to execute measureRawSignals(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("RH ticks: ");
        Serial.print(rh);
        Serial.print("\t");
        Serial.print("T ticks: ");
        Serial.print(t);
        Serial.print("\t");
        Serial.print("SRAW_VOC: ");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx: ");
        Serial.println(srawNox);
    }
    return error;
}

void loop()
{
    float humi, temp;
    
    int ret = AHT.getSensor(&humi, &temp);
    
    if(ret)     // GET DATA OK
    {
        Serial.print("humidity: ");
        Serial.print(humi*100);
        Serial.print("%\t temperature: ");
        Serial.print(temp);
        Serial.print("\t");
        // T-ticks = (T/°C + 45) × 65535 / 175
        // H-ticks = RH/% × 65535 / 100
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
        read_sgp41(h_ticks, t_ticks);
    }
    else        // GET DATA FAIL
    {
        Serial.println("GET DATA FROM AHT20 FAIL");
    }
    
    delay(100);
}

// END FILE
```

- **Paso 2.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**.

![Salida de la Consola Serie](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/2.jpg)

Ten en cuenta que los primeros diez valores SRAW_NOx son cero debido al acondicionamiento.

## Recursos

- [SGP41](https://wiki.seeedstudio.com/es/grove-smart-air-quality-sensor-sgp41#resources)
- [AHT20](https://wiki.seeedstudio.com/es/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/#resources)

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a [los esfuerzos de Hans](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35179519) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

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
