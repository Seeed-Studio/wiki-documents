---
description: Grove - Sensor Barómetro(BME280)
title: Grove - Sensor Barómetro(BME280)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Barometer_Sensor-BME280
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg" alt="pir" width={500} height="auto" /></p>

Grove - Sensor de Temp&Humi&Barómetro (BME280) es una placa de conexión para el sensor combinado de humedad, presión y temperatura Bosch BMP280 de alta precisión y bajo consumo. Este módulo se puede usar para medir temperatura, presión atmosférica y humedad de manera precisa y rápida. Como la presión atmosférica cambia con la altitud, también puede medir la **altitud** aproximada de un lugar. Se puede conectar a un microcontrolador con I<sup>2</sup>C (integrado con conector Grove) o a través del bus SPI. También hemos proporcionado una biblioteca altamente abstraída para hacer que este producto sea más fácil de usar.

El BME280 es una versión mejorada del BMP180, y el BME280 obtiene mejoras dramáticas del BMP180. El BME280 viene con una huella más pequeña, menor consumo de energía, mediciones de menor ruido, resoluciones más altas para presión y temperatura, menor ruido RMS, bus SPI recién agregado, más modos de medición, mayor tasa de medición y filtro recién agregado contra interferencias ambientales. Dado que la lectura de presión atmosférica se ve afectada por la altitud y la temperatura, hemos agregado características de compensación. Por lo tanto, Grove - Sensor de Temp&Humi&Barómetro (BME280) será más confiable para proporcionar datos precisos de temperatura, valores de presión atmosférica, humedad y altitud aproximada.

Usar el sensor es fácil. Para [Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compatible con Arduino), simplemente conecta esta placa de conexión usando [cable Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) al conector Grove I2C. Luego, usa la biblioteca proporcionada y el código de ejemplo de GitHub. Si estás usando un Arduino, usa Base Shield v2.0 o simplemente conecta el pin VCC al pin de voltaje de 5V, GND a tierra, SCL al Reloj I2C (Analógico 5) y SDA a Datos I2C (Analógico 4).

Aplicaciones típicas: Mejora de navegación GPS, navegación exterior/interior, pronóstico del tiempo, o cualquier otro proyecto que requiera lectura precisa de presión atmosférica.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para la detección ambiental. Por favor, consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de la calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

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

## Características

- Obtén valores más precisos de temperatura, presión atmosférica, humedad y datos aproximados de altitud de forma rápida.
- Compatible con Grove y fácil de usar
- Biblioteca altamente abstraída para construir proyectos más rápidamente

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Parámetro                                     | Valor                                                                                             |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------|
| Voltaje de entrada                            | 3.3V o 5V                                                                                        |
| Voltaje de E/S                                | 3.3V o 5V                                                                                        |
| Corriente de operación                        | 0.4mA                                                                                             |
| Temperatura de operación                      | -40 - 85 ℃                                                                                        |
| Rango de medición del sensor de presión atmosférica | 300 - 1100 hPa (1 hPa= cien Pa) con precisión de ±1.0 hPa                                     |
| Rango de medición del sensor de temperatura   | -40 - 85 ℃, con precisión de ±1.0°C                                                                  |
| Rango de mediciones del sensor de humedad     | 0% - 100% humedad relativa , con precisión de ±3%                                                   |
| Modos de medición                             | Piezo y Temperatura, forzado o periódico                                                           |
| Chip                                          | BME280([hoja de datos](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)) |
| Bus de interfaz                               | SPI, I<sup>2</sup>C (usa cualquiera de ellos)                                                      |
| Peso                                          | 3.2 g (para placa breakout), 9.3 g para todo el paquete cada pieza                                    |
| Dimensiones                                   | 40 (longitud) × 20 (ancho) mm    |
|I2C                                             | 0x76(predeterminado) o 0x77     |

<div class="admonition note">
<p class="admonition-title">Nota</p>
<ol><li>Mostraremos/describiremos cómo seleccionar el bus de interfaz pronto.</li>
<li>La altitud se calcula mediante una combinación de temperatura y presión atmosférica. No hay componentes especializados para altitud.</li></ol>
</div>

### Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción General del Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

- **Pads de soldadura SPI**, un circuito de monitoreo de voltaje.
- **Pads de selección de bus de interfaz**, para seleccionar el bus I<sup>2</sup>C, conecta los dos pads soldando (está conectado por defecto); para seleccionar el bus SPI, corta los dos pads con un cuchillo afilado o un soldador.
- **Pads de selección de dirección de placa esclava**, para seleccionar la dirección de la placa esclava y evitar colisión de direcciones.

  - Si has seleccionado el bus I2C, la dirección por defecto para la placa esclava es **0x76** (los dos pads de la derecha están conectados). Si quieres usar la dirección **0x77**, conecta solo los dos de la izquierda (desconecta los dos de la derecha) soldando.

<div class="admonition tip">
<p class="admonition-title">Consejo</p>
Puedes desconectar los pads con solo un cuchillo afilado.
</div>
    - Si has seleccionado el bus SPI, la dirección por defecto para la placa esclava es **0x76** (los dos pads de la derecha están conectados). Si quieres usar la dirección **0x77**, desconecta los tres pads.

<div class="admonition note">
<p class="admonition-title">Nota</p>
No toques, agites o dejes este producto en vibración cuando funcione. Esto causará interferencia y afectará la precisión de los datos recolectados.
</div>

### **El paquete incluye** (partes principales)

| Nombre de las partes                                                                                                                    | Cantidad |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - Temp&Humi&Barometer Sensor (BME280)                                                                                            | 1 pieza  |
| [Cable Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 pieza  |

## Comenzando

Ahora ejecutemos algunos ejemplos básicos con este módulo.

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara las siguientes cosas:

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BME280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **Paso 2.** Conecta Grove-Barometer_Sensor-BME280 al puerto **I2C** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::
<!--I2C-->
| seeeduino_v4 | Grove-Barometer_Sensor-BME280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### Software

**Paso 1.** Descarga la [Biblioteca y código de ejemplo](https://github.com/Seeed-Studio/Grove_BME280) desde Github.

**Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

**Paso 3.** Crea un nuevo sketch de Arduino y pega los códigos de abajo o abre el código directamente por la ruta: File -> Example ->Barometer_Sensor->Barometer_Sensor.

Aquí está el código

```c

/*
 * bme280_example.ino
 * Example sketch for bme280
 *
 * Copyright (c) 2016 seeed technology inc.
 * Website    : www.seeedstudio.com
 * Author     : Lambor
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
#include "Seeed_BME280.h"
#include <Wire.h>

BME280 bme280;

void setup()
{
  Serial.begin(9600);
  if(!bme280.init()){
    Serial.println("Device error!");
  }
}

void loop()
{
  float pressure;

  //get and print temperatures
  Serial.print("Temp: ");
  Serial.print(bme280.getTemperature());
  Serial.println("C");//The unit for  Celsius because original arduino don't support speical symbols

  //get and print atmospheric pressure data
  Serial.print("Pressure: ");
  Serial.print(pressure = bme280.getPressure());
  Serial.println("Pa");

  //get and print altitude data
  Serial.print("Altitude: ");
  Serial.print(bme280.calcAltitude(pressure));
  Serial.println("m");

  //get and print humidity data
  Serial.print("Humidity: ");
  Serial.print(bme280.getHumidity());
  Serial.println("%");

  delay(1000);
}

```

**Paso 4.** Sube el código. Si no sabes cómo subir el código, por favor consulta [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

**Paso 5.** Abre el monitor serie para recibir los datos del sensor incluyendo temperatura, valor de presión barométrica, altitud y humedad.

### Jugar Con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara las siguientes cosas:

| Wio Terminal | Grove-Barometer Sensor-BME280 |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **Paso 2.** Conecta Grove-Barometer Sensor-BME280 al puerto Grove **I2C** del Wio Terminal.

- **Paso 3.** Conecta el Wio Terminal a la PC a través del cable USB Type-C.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/WT-BME280.png" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Sigue [**ArduPy Getting Started**](https://wiki.seeedstudio.com/es/ArduPy/) para configurar el entorno de desarrollo ArduPy en Wio Terminal.

- **Paso 2.** Asegúrate de que el firmware ArduPy esté flasheado en Wio Terminal. Para más información, por favor sigue [**aquí**](https://wiki.seeedstudio.com/es/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip install Seeed-Studio/seeed-ardupy-bme280
aip build
aip flash
```

- **Paso 3.** Copia el siguiente código y guárdalo como `ArduPy-bme280.py`:

```python
from arduino import grove_bme280
from machine import LCD
from machine import Sprite
import time

bme280 = grove_bme280()
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
      spr.setTextSize(2)
      spr.fillSprite(spr.color.BLACK)
      spr.setTextColor(lcd.color.ORANGE)
      spr.drawString("BME280 Reading", 90, 10)
      spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
      spr.setTextColor(lcd.color.WHITE)
      spr.drawString("- Temperature: ", 20, 50)
      spr.drawString("- Humidity: ", 20, 80)
      spr.drawString("- Pressure: ", 20, 110)

      spr.drawFloat(bme280.temperature, 2, 220,50)
      spr.drawNumber(bme280.humidity, 220,80)
      spr.drawNumber(bme280.pressure, 220,110)
      spr.pushSprite(0,0)
      time.sleep_ms(500)

      print ("\nTemperature: ", bme280.temperature, "C")
      print ("Humidity: ", bme280.humidity, "%")
      print ("Pressure: ", bme280.pressure, "Pa")

if __name__ == "__main__":
    main()
```

- **Paso 4.** Guarda el `ArduPy-bme280.py` en una ubicación que conozcas. Ejecuta el siguiente comando y **reemplaza** `<YourPythonFilePath>` con la ubicación de tu `ArduPy-bme280.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
```

- **Paso 5.** Veremos los valores mostrados en la terminal como se muestra a continuación, y mostrándose en la pantalla LCD del Wio Terminal.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy

Temperature:  29.88 C
Humidity:  55 %
Pressure:  100332 Pa

Temperature:  29.91 C
Humidity:  55 %
Pressure:  100332 Pa

Temperature:  29.88 C
Humidity:  54 %
Pressure:  100331 Pa
```

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Grove-Barometer_Sensor-BME280-v1.0_Schematics](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip)
- **[Hoja de Datos]** [Hoja de Datos BME280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)
- **[Librería]** [Librería Grove_BME280](https://github.com/Seeed-Studio/Grove_BME280) en GitHub
- **[Referencia]** [Guía de I<sup>2</sup>C para Arduino](https://www.arduino.cc/en/Reference/Wire)

## Proyectos

**Solución Seeed LoRa IoTea**: Un sistema automático de recolección de información aplicado a plantaciones de té. Es parte de la recolección inteligente de información agrícola.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos
