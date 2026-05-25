---
description: Grove - Sensor de formaldehído
title: Grove - Sensor de formaldehído
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg
slug: /Grove-Formaldehyde-Sensor
sku: 101020972
last_update:
  date: 3/7/2024
  author: Spencer Yan
createdAt: '2023-02-28'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/Grove-Formaldehyde-Sensor/
---
<!-- ---
name: Grove - Formaldehyde sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html
oldwikiname: Grove - PIR Motion Sensor
prodimagename: Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg
surveyurl: https://www.surveymonkey.com/r/grove-pir-motion-sensor
sku: 101020972
tags: io_3v3, io_5v, plat_duino, plat_pi
--- -->

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/101020972_Front-05.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>
<br />

El Sensor de Formaldehído Grove puede detectar formaldehído en un rango de 0~1000 ppb con baja sensibilidad cruzada al alcohol y alta estabilidad con una vida útil de 6 años. El sensor RHT integrado asegura que mantenga un rendimiento óptimo bajo diferentes temperaturas y humedad, y transmite datos a través de puertos UART e I2C.

## Características

- Baja sensibilidad cruzada al alcohol
- Rango de medición estándar de formaldehído: 0 ~ 1000 ppb
- Estabilidad a largo plazo y vida útil de 6 años
- Celda electroquímica patentada con tecnología anti-secado
- Interfaz I2C/UART con salida calibrada de por vida
- Mantiene el rendimiento bajo diferentes temperaturas y humedad: compensado mediante sensor RHT Sensirion

## Especificaciones

|Parámetro|Valor/Rango
|---|---|
|Rango de voltaje de alimentación|3.3V o 5V
|Rango de medición|0 a 1,000 ppb
|Tiempo de respuesta|&lt;2 min
|Límite de detección|&lt;20 ppb
|Interfaz|I2C / UART
|Precisión de formaldehído|±20 ppb o ±20% del valor medido, lo que sea mayor

## Plataformas Compatibles

| Arduino| Raspberry |   |   |   |
|:------:|:---------:|---|---|---|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar Con Arduino

#### **Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove-Sensor de Formaldehído|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|   [Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)    |

- **Paso 2.** Configura el botón del Sensor de Formaldehído Grove en la posición **"1"**.

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/hardware1.png)

- **Paso 3.** Conecta Grove - Base Shield al Seeeduino y configura el Sensor de Formaldehído Grove en el puerto **I²C** del Grove-Base Shield
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/Arduous-link.jpg)

:::note
Si no tienes Grove Base Shield, aún puedes conectar directamente el Sensor de Formaldehído Grove al Seeeduino como se muestra a continuación.
:::

| Seeeduino |  Sensor de Sonoridad Grove |
|-----------|-----------------|
| 5V        | Rojo            |
| GND       | Negro           |
| SDA       | Blanco          |
| SCL       | Amarillo        |

#### **Software**

- **Paso 1.** Descarga la [Librería del Sensor de Formaldehído Grove](https://github.com/Sensirion/arduino-i2c-sfa3x) para el uso del Sensor de Formaldehído Grove e [instálala](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

- **Paso 2.** Abre el IDE de Arduino. Copia los códigos de abajo al IDE de Arduino y súbelos. Si no sabes cómo subir los códigos, aquí tenemos algunas guías sobre [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
También puedes descargar la librería directamente buscando **Sensirion I2C SFA3X** en el administrador de librerías.
:::

```cpp
#include <Arduino.h>
#include <SensirionI2CSfa3x.h>
#include <Wire.h>

SensirionI2CSfa3x sfa3x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sfa3x.begin(Wire);

    // Start Measurement
    error = sfa3x.startContinuousMeasurement();
    if (error) {
        Serial.print("Error trying to execute startContinuousMeasurement(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);
    int16_t hcho;
    int16_t humidity;
    int16_t temperature;
    error = sfa3x.readMeasuredValues(hcho, humidity, temperature);
    if (error) {
        Serial.print("Error trying to execute readMeasuredValues(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Hcho:");
        Serial.print(hcho / 5.0);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.print(humidity / 100.0);
        Serial.print("\t");
        Serial.print("Temperature:");
        Serial.println(temperature / 200.0);
    }
}
```

- **Paso 4.** En este programa, Seeeduino puede monitorear la concentración de gas formaldehído, la humedad del aire y los datos de temperatura en tiempo real. Al abrir el 'Monitor Serie', los resultados deberían ser como:

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/test.png)

### Jugar Con Raspberry Pi

#### **Hardware**

- **Paso 1.** Prepara las siguientes cosas:

| Raspberry pi | Grove Base Hat para Raspberry Pi | Grove-Sensor de Formaldehído|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)|

- **Paso 2.** Conecta el Grove Base Hat para Raspberry Pi en la Raspberry Pi.
- **Paso 3.** Conecta el Grove-Dust Sensor al puerto **I²C** del Grove Base Hat para Raspberry Pi.
- **Paso 4.** Conecta la Raspberry Pi a la PC a través de un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/raspberry-link.jpg)

#### **Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo de Raspberry Pi.
- **Paso 2.** Descarga la [Grove-Formaldehyde Sensor Library](https://github.com/Sensirion/raspberry-pi-i2c-sfa3x/archive/refs/heads/master.zip) y descomprímela en la Raspberry Pi.

- **Paso 3.** Navega al directorio de las demos. El siguiente comando puede monitorear la concentración de formaldehído, humedad y temperatura.

```python
cd ~/raspberry-pi-i2c-sfa3x-master
make
./sfa3x_i2c_example_usage
```

:::tip
En este wiki usamos la ruta **~/embedded-sfa3x-main/i2c** en lugar de **/home/pi/Desktop/embedded-sfa3x-main/i2c**, necesitas asegurarte de que el Paso 2 y el Paso 3 usen la misma ruta.
:::

Aquí está el código **sfa3x_i2c_example_usage.c**.

```cpp
#include <stdio.h>  // printf

#include "sensirion_common.h"
#include "sensirion_i2c_hal.h"
#include "sfa3x_i2c.h"

/**
 * TO USE CONSOLE OUTPUT (PRINTF) IF NOT PRESENT ON YOUR PLATFORM
 */
//#define printf(...)

int main(void) {
    int16_t error = 0;

    sensirion_i2c_hal_init();

    error = sfa3x_device_reset();
    if (error) {
        printf("Error resetting device: %i\n", error);
        return -1;
    }

    uint8_t device_marking[42];
    error = sfa3x_get_device_marking(&device_marking[0], sizeof(device_marking));
    if (error) {
        printf("Error getting device marking: %i\n", error);
        return -1;
    }
    printf("Device marking: %s\n", device_marking);

    // Start Measurement
    error = sfa3x_start_continuous_measurement();
    if (error) {
        printf("Error executing sfa3x_start_continuous_measurement(): %i\n",
               error);
    }

    for (;;) {
        // Read Measurement

        int16_t hcho;
        int16_t humidity;
        int16_t temperature;

        sensirion_i2c_hal_sleep_usec(500000);

        error = sfa3x_read_measured_values(&hcho, &humidity, &temperature);

        if (error) {
            printf("Error executing sfa3x_read_measured_values(): %i\n", error);
        } else {
            printf("Measurement:\n");
            printf("  Formaldehyde concentration: %.1f\n", hcho / 5.0f);
            printf("  Relative humidity: %.2f\n", humidity / 100.0f);
            printf("  Temperature: %.2f\n", temperature / 200.0f);
        }
    }

    error = sfa3x_stop_measurement();
    if (error) {
        printf("Error executing sfa3x_stop_measurement(): %i\n", error);
    }

    return 0;
}

```

:::tip
Si todo va bien, los siguientes resultados se pueden mostrar así:
:::

```shell
pi@raspberrypi:~/Downloads/embedded-sfa3x-main/i2c $ ./sfa3x_i2c_example_usage
Device marking: 211117825F073B80
Measurement:
  Formaldehyde concentration: 0.0
  Relative humidity: 70.19
  Temperature: 27.41
```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
