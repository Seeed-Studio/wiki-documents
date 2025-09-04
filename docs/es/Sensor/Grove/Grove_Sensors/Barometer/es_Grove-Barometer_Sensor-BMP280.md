---
description: Grove - Sensor de Barómetro (BMP280)
title: Grove - Sensor de Barómetro (BMP280)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Barometer_Sensor-BMP280
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg" alt="pir" width={600} height="auto" /></p>


**Grove - Sensor de Barómetro (BMP280)** es una placa de conexión para el barómetro digital de alta precisión y bajo consumo Bosch BMP280. Este módulo puede utilizarse para medir **temperatura** y **presión atmosférica** con precisión. Como la presión atmosférica cambia con la altitud, también puede medir la **altitud** aproximada de un lugar. Puede conectarse a un microcontrolador con I<sup>2</sup>C (integrado con conector Grove) o a través del bus SPI. También hemos proporcionado una biblioteca altamente abstraída para hacer este producto más fácil de usar.

El BMP280 es una versión mejorada del BMP180 y obtiene mejoras dramáticas respecto al BMP180. El BMP280 viene con una huella más pequeña, menor consumo de energía, mediciones de menor ruido, mayores resoluciones para presión y temperatura, menor ruido RMS, interfaz SPI recién añadida, más modos de medición, mayor tasa de medición y filtro recién añadido contra interferencias ambientales. Dado que la lectura de presión atmosférica se ve afectada por la altitud y la temperatura, hemos añadido características de compensación en la biblioteca. Por lo tanto, Grove - Sensor de Barómetro (BMP280) sería más confiable para proporcionar datos precisos de temperatura, valores de presión atmosférica y datos aproximados de altitud.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)

## Actualizable a Sensores Industriales
Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para la detección ambiental. Por favor, consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba la última [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Temp. y Humedad del Aire</strong></a></td>
    </tr>
  </tbody>
</table>

## Lectura previa

Se recomienda encarecidamente leer una introducción sobre **Qué es un Sensor de Presión Barométrica** y **Cómo funciona** si no estás familiarizado con el tema. Por favor visita nuestro [blog](https://www.seeedstudio.com/blog/2019/12/30/what-is-barometric-pressure-sensor-and-arduino-guide-to-get-started/) para información detallada.

## Características

-   Obtén valores más precisos de temperatura, presión atmosférica y datos aproximados de altitud
-   Compatible con Grove y fácil de usar
-   Biblioteca altamente abstraída para construir proyectos más rápidamente

:::tip
     Para más detalles sobre los módulos Grove, consulta el [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/).
:::
## Especificaciones


| Parámetro                            | Valor                                                                                                                       |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Voltaje de entrada                   | 3.3V o 5V                                                                                                                  |
| Voltaje de E/S                       | 3.3V o 5V                                                                                                                  |
| Corriente de operación               | 0.6mA                                                                                                                       |
| Temperatura de operación             | -40 - 85 ℃                                                                                                                  |
| Rango efectivo de medición de presión | 300 - 1100 hPa (1 hPa= cien Pa) con precisión de ±1.0 hPa                                                               |
| Precisión de medición de temperatura | ±1.0°C                                                                                                                      |
| Modos de medición                    | Piezo y Temperatura, forzado o periódico                                                                                     |
| Chip                                 | BMP280 ([hoja de datos](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)) |
| Tasa de muestreo posible             | 182 Hz (típica)                                                                                                            |
| Bus de interfaz                      | SPI, I<sup>2</sup>C (usa cualquiera de ellos)                                                                                |
| Peso                                 | 3 g (para placa de desarrollo)                                                                                                    |
| Dimensiones                          | 40 (ancho) × 20 (profundidad) mm                                                                                                  |
| Dirección I2C | 0x77(predeterminada) o 0x76 |

<div class="admonition note">
<p class="admonition-title">Notas</p>
<p> 1. Mostraremos/describiremos cómo seleccionar el bus de interfaz pronto.</p>
<p> 2. La altitud se calcula mediante una combinación de temperatura y presión atmosférica. No hay componentes especializados para altitud.</p>
</div>

## Aplicación

- Mejora de la navegación GPS
- Navegación exterior/interior
- Pronóstico del tiempo
- Gestión de botánica

## Plataformas compatibles


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
     Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar con Arduino

#### Materiales requeridos

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BMP280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|

#### Descripción General del Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>


-   **Pads de soldadura SPI**, un circuito de monitoreo de voltaje.
-   **Pads de selección de bus de interfaz**, para seleccionar el bus I<sup>2</sup>C, conecta los dos pads soldando (esto está conectado por defecto); para seleccionar el bus SPI, corta los dos pads con un cuchillo afilado o un soldador.
-   **Pads de selección de dirección de placa esclava**, para seleccionar la dirección de la placa esclava y evitar colisión de direcciones.

:::tip
      * Si has seleccionado el bus I2C, la dirección por defecto para la placa esclava es **0x77**(los dos pads de la derecha están conectados). Si quieres usar la dirección **0x76**, conecta solo los dos de la izquierda (desconecta los dos de la derecha) soldando.

      * Puedes desconectar los pads simplemente con un cuchillo afilado.

      * Si has seleccionado el bus SPI, la dirección por defecto para la placa esclava es **0x77**(los dos pads de la derecha están conectados). Si quieres usar la dirección **0x76**, desconecta los tres pads.
:::
<div class="admonition note">
<p class="admonition-title">Nota</p>
No toques, agites o dejes que este producto vibre cuando esté funcionando. Esto causará interferencia y afectará la precisión de los datos recolectados.
</div>

**Paso 1.** Conecta Grove-Barometer_Sensor-BMP280 al puerto **I2C** del Grove-Base Shield.

**Paso 2.** Conecta Grove - Base Shield al Seeeduino y conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
	Si no tienes un Grove Base Shield, también puedes conectar directamente este módulo al [Seeeduino](https://www.seeedstudio.com/catalogsearch/result/?q=Seeeduino) como se muestra a continuación.
:::
<!--I2C-->
| Seeeduino_v4 | Grove-Barometer_Sensor-BMP280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### Software

**Paso 1.** Descarga la [biblioteca](https://github.com/Seeed-Studio/Grove_BMP280.git) desde Github.

**Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.


**Paso 3.** Crea un nuevo sketch de Arduino y pega los códigos de abajo o abre el código directamente por la ruta:File -> Example ->bmp280_example->bmp280_example

**Aquí está el código:**

```cpp
/*
 * bmp280_example.ino
 * Example sketch for BMP280
 *
 * Copyright (c) 2016 seeed technology inc.
 * Website    : www.seeedstudio.com
 * Author     : Lambor, CHN
 * Create Time:
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup()
{
  Serial.begin(9600);
  if(!bmp280.init()){
    Serial.println("Device error!");
  }
}

void loop()
{
  float pressure;

  //get and print temperatures
  Serial.print("Temp: ");
  Serial.print(bmp280.getTemperature());
  Serial.println("C"); // The unit for  Celsius because original arduino don't support speical symbols

  //get and print atmospheric pressure data
  Serial.print("Pressure: ");
  Serial.print(pressure = bmp280.getPressure());
  Serial.println("Pa");

  //get and print altitude data
  Serial.print("Altitude: ");
  Serial.print(bmp280.calcAltitude(pressure));
  Serial.println("m");

  Serial.println("\n");//add a line between output of different times.

  delay(1000);
}
```

**Paso 4.** Sube el código. Si no sabes cómo subir el código, por favor consulta [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

**Paso 5.** Abre el monitor serie para recibir los datos del sensor incluyendo temperatura, valor de presión barométrica y altitud.

:::success
        El resultado se mostrará en el **Puerto Serie** como se muestra a continuación si todo va bien.
:::
<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png" alt="pir" width={600} height="auto" /></p>


## Visor de Esquemático en Línea
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático del Sensor Barómetro BMP280 Grove](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip)
- **[Hoja de Datos]** [Hoja de Datos BMP280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)
- **[Referencias]**  [Guía I<sup>2</sup>C para Arduino](https://www.arduino.cc/en/Reference/Wire)

## Proyecto

**Sistema de alarma inteligente hecho con BBG ( IoT)**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**Sistema de Monitoreo para Cultivos Inteligentes** Diseña y construye un sistema para monitorear el estado de tus cultivos usando el Netduino 3 WiFi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>


## Soporte Técnico y Discusión de Productos


