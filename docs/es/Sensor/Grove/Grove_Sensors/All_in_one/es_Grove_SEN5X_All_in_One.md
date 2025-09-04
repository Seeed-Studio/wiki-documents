---
description: Grove SEN5X Todo en Uno
title: Grove SEN5X Todo en Uno
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_SEN5X_All_in_One
last_update:
  date: 1/29/2023
  author: jianjing Huang
---

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={4}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El sensor ambiental todo en uno Grove SEN54/SEN55 es un sensor ambiental Grove integrado, que ensambla 8 tipos de salida de señal de datos, detecta con alta precisión y opera hasta por 10 años, diseñado para aplicaciones HVAC (Calefacción, Ventilación y Aire Acondicionado) y detección de calidad del aire durante muchos años. En esta wiki, te introduciremos cómo utilizarlo mientras usas herramientas Arduino y Raspberry Pi.

### Características

- Funcionalidad de detección ambiental integral: Soporta PM (material particulado), VOC (Compuestos Orgánicos Volátiles), RH (Humedad Relativa), Temp (temperatura) todos los 5 tipos de señales de datos ambientales detectando continuamente
- Un controlador para hasta 7/8 señales de datos: Entrega 4 tipos de PM y 4 señales ambientales primarias a través de la función IIC
- Un cable para toda la salida de datos: Representa la conexión simplificada de la familia Grove para solo un cable Grove requerido entre el sensor y la placa única
- Precisión de detección superior: Calibra señales completamente digitales para la salida
- Vida útil operativa superior: Mantiene un rendimiento fino hasta por 10 años
- Tres modos disponibles para desplegar con el borde: Configura Modo Inactivo y Modo de Medición Solo RHT/Gas para aplicaciones de bajo costo donde el Modo de Medición es para función completa

## Descripción del Hardware

## Comenzando

El sensor ambiental todo en uno Grove SEN54/SEN55 hereda las características finas de la Serie Grove ya que puede ser aplicado directamente a través de la interfaz IIC Grove.

### Instalación del Equipo

Conecta con el sensor ambiental todo en uno Grove SEN54/SEN55 con cable Grove.

### Preparación del Entorno

Dado que usamos Arduino y Raspberry Pi aquí, se requiere ejecutar el módulo en el sistema instalado:

- [Arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/)
- [Raspberry Pi](https://wiki.seeedstudio.com/es/Raspberry_Pi_3_Model_B/)

## Descripción de la Librería Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos altamente que te refieras a [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

Hay dos librerías requeridas para instalar mientras usas Arduino:

- [arduino-i2c-sen5x](https://github.com/Sensirion/arduino-i2c-sen5x)(Función principal del sensor ambiental todo en uno Grove SEN54/SEN55)
- [arduino-core](https://github.com/Sensirion/arduino-core)(Archivo central / Dependencias)

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

- `Serial.begin(115200)` —— Cuando el proceso de carga haya terminado, abre el Monitor Serie o el Plotter Serie a través del menú Herramientas para observar los valores de medición. Nota que la Velocidad de Baudios en la ventana correspondiente tiene que estar configurada a 115200 baudios

### Instalación

Dado que has descargado la Librería zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la librería se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la librería está instalada exitosamente.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Ejemplo de Arduino

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro sensor ambiental todo en uno Grove SEN54/SEN55 para ver cómo se comporta.

**Paso 1.** Conexión de Hardware.

**Paso 2.** Necesitas instalar un Software de Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 3.** Ejecuta la aplicación de Arduino.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

### Demo 1 Detectar 4 tipos de PM y 4 señales ambientales primarias

Esta demostración puede detectar 4 tipos de PM (material particulado), VOC (Compuestos Orgánicos Volátiles), RH (Humedad Relativa), Temp (temperatura) y luego mostrarlos en el monitor, mostrando si el lugar donde está montado el módulo es saludable.

#### Materiales Requeridos

| Seeeduino V4.2 | Base Shield | SEN54/SEN55|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"/></div>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html)|

```cpp

/*
 * I2C-Generator: 0.3.0
 * Yaml Version: 2.1.3
 * Template Version: 0.7.0-112-g190ecaa
 */
/*
 * Copyright (c) 2021, Sensirion AG
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of Sensirion AG nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

#include <Arduino.h>
#include <SensirionI2CSen5x.h>
#include <Wire.h>

// The used commands use up to 48 bytes. On some Arduino's the default buffer
// space is not large enough
#define MAXBUF_REQUIREMENT 48

#if (defined(I2C_BUFFER_LENGTH) &&                 \
     (I2C_BUFFER_LENGTH >= MAXBUF_REQUIREMENT)) || \
    (defined(BUFFER_LENGTH) && BUFFER_LENGTH >= MAXBUF_REQUIREMENT)
#define USE_PRODUCT_INFO
#endif

SensirionI2CSen5x sen5x;

void printModuleVersions() {
    uint16_t error;
    char errorMessage[256];

    unsigned char productName[32];
    uint8_t productNameSize = 32;

    error = sen5x.getProductName(productName, productNameSize);

    if (error) {
        Serial.print("Error trying to execute getProductName(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("ProductName:");
        Serial.println((char*)productName);
    }

    uint8_t firmwareMajor;
    uint8_t firmwareMinor;
    bool firmwareDebug;
    uint8_t hardwareMajor;
    uint8_t hardwareMinor;
    uint8_t protocolMajor;
    uint8_t protocolMinor;

    error = sen5x.getVersion(firmwareMajor, firmwareMinor, firmwareDebug,
                             hardwareMajor, hardwareMinor, protocolMajor,
                             protocolMinor);
    if (error) {
        Serial.print("Error trying to execute getVersion(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Firmware: ");
        Serial.print(firmwareMajor);
        Serial.print(".");
        Serial.print(firmwareMinor);
        Serial.print(", ");

        Serial.print("Hardware: ");
        Serial.print(hardwareMajor);
        Serial.print(".");
        Serial.println(hardwareMinor);
    }
}

void printSerialNumber() {
    uint16_t error;
    char errorMessage[256];
    unsigned char serialNumber[32];
    uint8_t serialNumberSize = 32;

    error = sen5x.getSerialNumber(serialNumber, serialNumberSize);
    if (error) {
        Serial.print("Error trying to execute getSerialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SerialNumber:");
        Serial.println((char*)serialNumber);
    }
}

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    sen5x.begin(Wire);

    uint16_t error;
    char errorMessage[256];
    error = sen5x.deviceReset();
    if (error) {
        Serial.print("Error trying to execute deviceReset(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }

// Print SEN55 module information if i2c buffers are large enough
#ifdef USE_PRODUCT_INFO
    printSerialNumber();
    printModuleVersions();
#endif

    // set a temperature offset in degrees celsius
    // Note: supported by SEN54 and SEN55 sensors
    // By default, the temperature and humidity outputs from the sensor
    // are compensated for the modules self-heating. If the module is
    // designed into a device, the temperature compensation might need
    // to be adapted to incorporate the change in thermal coupling and
    // self-heating of other device components.
    //
    // A guide to achieve optimal performance, including references
    // to mechanical design-in examples can be found in the app note
    // “SEN5x – Temperature Compensation Instruction” at www.sensirion.com.
    // Please refer to those application notes for further information
    // on the advanced compensation settings used
    // in `setTemperatureOffsetParameters`, `setWarmStartParameter` and
    // `setRhtAccelerationMode`.
    //
    // Adjust tempOffset to account for additional temperature offsets
    // exceeding the SEN module's self heating.
    float tempOffset = 0.0;
    error = sen5x.setTemperatureOffsetSimple(tempOffset);
    if (error) {
        Serial.print("Error trying to execute setTemperatureOffsetSimple(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature Offset set to ");
        Serial.print(tempOffset);
        Serial.println(" deg. Celsius (SEN54/SEN55 only");
    }

    // Start Measurement
    error = sen5x.startMeasurement();
    if (error) {
        Serial.print("Error trying to execute startMeasurement(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    // Read Measurement
    float massConcentrationPm1p0;
    float massConcentrationPm2p5;
    float massConcentrationPm4p0;
    float massConcentrationPm10p0;
    float ambientHumidity;
    float ambientTemperature;
    float vocIndex;
    float noxIndex;

    error = sen5x.readMeasuredValues(
        massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0,
        massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex,
        noxIndex);

    if (error) {
        Serial.print("Error trying to execute readMeasuredValues(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("MassConcentrationPm1p0:");
        Serial.print(massConcentrationPm1p0);
        Serial.print("\t");
        Serial.print("MassConcentrationPm2p5:");
        Serial.print(massConcentrationPm2p5);
        Serial.print("\t");
        Serial.print("MassConcentrationPm4p0:");
        Serial.print(massConcentrationPm4p0);
        Serial.print("\t");
        Serial.print("MassConcentrationPm10p0:");
        Serial.print(massConcentrationPm10p0);
        Serial.print("\t");
        Serial.print("AmbientHumidity:");
        if (isnan(ambientHumidity)) {
            Serial.print("n/a");
        } else {
            Serial.print(ambientHumidity);
        }
        Serial.print("\t");
        Serial.print("AmbientTemperature:");
        if (isnan(ambientTemperature)) {
            Serial.print("n/a");
        } else {
            Serial.print(ambientTemperature);
        }
        Serial.print("\t");
        Serial.print("VocIndex:");
        if (isnan(vocIndex)) {
            Serial.print("n/a");
        } else {
            Serial.print(vocIndex);
        }
        Serial.print("\t");
        Serial.print("NoxIndex:");
        if (isnan(noxIndex)) {
            Serial.println("n/a");
        } else {
            Serial.println(noxIndex);
        }
    }
}
```

#### **Resultado**

Después de cargar los códigos, podemos abrir el monitor serie a una velocidad de baudios de 115200 y debería mostrar los ocho tipos de señales.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin12.png"/></div>

## Descripción General del Paquete Python

:::tip
Si esta es tu primera vez usando Raspberry Pi, te recomendamos encarecidamente que consultes [Primeros Pasos con Raspberry Pi](https://tinkergen-helper.yuque.com/tinkergen_helper/slgacm/tn0wlt).
:::

Este paquete soporta los sensores SEN50, SEN54, SEN55, permitiéndote detectar datos ambientales mientras usas Raspberry Pi.

<p style={{textAlign: 'center'}}><a href="https://github.com/Sensirion/raspberry-pi-i2c-sen5x" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

### Función

## Ejemplo de Raspberry Pi

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro sensor ambiental todo en uno Grove SEN54/SEN55 para ver cómo se comporta.

**Paso 1.** Conexión de Hardware.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin13.png"/></div>

**Paso 2.** [Instala el SO Raspberry Pi en tu Raspberry Pi](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up).

**Paso 3.** [Habilita la interfaz I2C en raspi-config](https://www.raspberrypi.org/documentation/configuration/raspi-config.md).

**Paso 4.** Descarga el controlador desde la [Página de Github de Sensirion](https://github.com/Sensirion/raspberry-pi-i2c-sen5x) como se indica arriba y extrae el `.zip` en tu Raspberry Pi.

### Demo 1 Aplicar el ejemplo de función con Raspberry Pi

La demostración te ayudará a detectar varios datos ambientales en tu área.

#### Materiales Requeridos

|              |              |
|--------------|--------------|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin14.png"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"/></div>
|[**Obtener UNO Ahora**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[**Obtener UNO Ahora**](https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html)|

Compilar el controlador:

**Paso 1.** Abrir una terminal

**Paso 2.** Navegar al directorio del controlador. Por ejemplo, **cd ~/raspberry-pi-i2c-sen5x**.

**Paso 3.** Ejecutar el comando `make` para compilar el controlador.

**Paso 4.** Ejecutar `./sen5x_i2c_example_usage` en el mismo directorio que usaste para compilar el controlador.

```cpp
//sen5x_i2c_example_usage.c


/*
 * I2C-Generator: 0.3.0
 * Yaml Version: 2.1.3
 * Template Version: 0.7.0-109-gb259776
 */
/*
 * Copyright (c) 2021, Sensirion AG
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of Sensirion AG nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

#include <math.h>   // NAN
#include <stdio.h>  // printf

#include "sen5x_i2c.h"
#include "sensirion_common.h"
#include "sensirion_i2c_hal.h"

/*
 * TO USE CONSOLE OUTPUT (PRINTF) YOU MAY NEED TO ADAPT THE INCLUDE ABOVE OR
 * DEFINE IT ACCORDING TO YOUR PLATFORM:
 * #define printf(...)
 */

int main(void) {
    int16_t error = 0;

    sensirion_i2c_hal_init();

    error = sen5x_device_reset();
    if (error) {
        printf("Error executing sen5x_device_reset(): %i\n", error);
    }

    unsigned char serial_number[32];
    uint8_t serial_number_size = 32;
    error = sen5x_get_serial_number(serial_number, serial_number_size);
    if (error) {
        printf("Error executing sen5x_get_serial_number(): %i\n", error);
    } else {
        printf("Serial number: %s\n", serial_number);
    }

    unsigned char product_name[32];
    uint8_t product_name_size = 32;
    error = sen5x_get_product_name(product_name, product_name_size);
    if (error) {
        printf("Error executing sen5x_get_product_name(): %i\n", error);
    } else {
        printf("Product name: %s\n", product_name);
    }

    uint8_t firmware_major;
    uint8_t firmware_minor;
    bool firmware_debug;
    uint8_t hardware_major;
    uint8_t hardware_minor;
    uint8_t protocol_major;
    uint8_t protocol_minor;
    error = sen5x_get_version(&firmware_major, &firmware_minor, &firmware_debug,
                              &hardware_major, &hardware_minor, &protocol_major,
                              &protocol_minor);
    if (error) {
        printf("Error executing sen5x_get_version(): %i\n", error);
    } else {
        printf("Firmware: %u.%u, Hardware: %u.%u\n", firmware_major,
               firmware_minor, hardware_major, hardware_minor);
    }

    // set a temperature offset in degrees celsius
    // Note: supported by SEN54 and SEN55 sensors
    // By default, the temperature and humidity outputs from the sensor
    // are compensated for the modules self-heating. If the module is
    // designed into a device, the temperature compensation might need
    // to be adapted to incorporate the change in thermal coupling and
    // self-heating of other device components.
    //
    // A guide to achieve optimal performance, including references
    // to mechanical design-in examples can be found in the app note
    // “SEN5x – Temperature Compensation Instruction” at www.sensirion.com.
    // Please refer to those application notes for further information
    // on the advanced compensation settings used in
    // `sen5x_set_temperature_offset_parameters`,
    // `sen5x_set_warm_start_parameter` and `sen5x_set_rht_acceleration_mode`.
    //
    // Adjust temp_offset to account for additional temperature offsets
    // exceeding the SEN module's self heating.
    float temp_offset = 0.0f;
    error = sen5x_set_temperature_offset_simple(temp_offset);
    if (error) {
        printf("Error executing sen5x_set_temperature_offset_simple(): %i\n",
               error);
    } else {
        printf("Temperature Offset set to %.2f °C (SEN54/SEN55 only)\n",
               temp_offset);
    }

    // Start Measurement
    error = sen5x_start_measurement();

    if (error) {
        printf("Error executing sen5x_start_measurement(): %i\n", error);
    }

    for (int i = 0; i < 600; i++) {
        // Read Measurement
        sensirion_i2c_hal_sleep_usec(1000000);

        float mass_concentration_pm1p0;
        float mass_concentration_pm2p5;
        float mass_concentration_pm4p0;
        float mass_concentration_pm10p0;
        float ambient_humidity;
        float ambient_temperature;
        float voc_index;
        float nox_index;

        error = sen5x_read_measured_values(
            &mass_concentration_pm1p0, &mass_concentration_pm2p5,
            &mass_concentration_pm4p0, &mass_concentration_pm10p0,
            &ambient_humidity, &ambient_temperature, &voc_index, &nox_index);
        if (error) {
            printf("Error executing sen5x_read_measured_values(): %i\n", error);
        } else {
            printf("Mass concentration pm1p0: %.1f µg/m³\n",
                   mass_concentration_pm1p0);
            printf("Mass concentration pm2p5: %.1f µg/m³\n",
                   mass_concentration_pm2p5);
            printf("Mass concentration pm4p0: %.1f µg/m³\n",
                   mass_concentration_pm4p0);
            printf("Mass concentration pm10p0: %.1f µg/m³\n",
                   mass_concentration_pm10p0);
            if (isnan(ambient_humidity)) {
                printf("Ambient humidity: n/a\n");
            } else {
                printf("Ambient humidity: %.1f %%RH\n", ambient_humidity);
            }
            if (isnan(ambient_temperature)) {
                printf("Ambient temperature: n/a\n");
            } else {
                printf("Ambient temperature: %.1f °C\n", ambient_temperature);
            }
            if (isnan(voc_index)) {
                printf("Voc index: n/a\n");
            } else {
                printf("Voc index: %.1f\n", voc_index);
            }
            if (isnan(nox_index)) {
                printf("Nox index: n/a\n");
            } else {
                printf("Nox index: %.1f\n", nox_index);
            }
        }
    }

    error = sen5x_stop_measurement();
    if (error) {
        printf("Error executing sen5x_stop_measurement(): %i\n", error);
    }

    return 0;
}

```

#### **Resultado**

La salida debería verse así:

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/output.png"/></div>

## Recursos

- [Biblioteca para STM32](https://github.com/Sensirion/embedded-i2c-sen5x)

## Soporte Técnico y Discusión de Productos

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width ="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"/></a></div>
