---
description: Grove - Sensor de Temp y Humedad (SHT31)
title: Grove - Sensor de Temp y Humedad (SHT31)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-TempAndHumi_Sensor-SHT31
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/main_new.jpg" /></div>

Grove - Sensor de Temp y Humedad (SHT31) es un sensor de temperatura y humedad integrado, altamente confiable, preciso y de respuesta rápida. El sensor (chip) utilizado en el módulo está diseñado con la tecnología CMOSens<sup>®</sup> de Sensirion. El chip está bien calibrado, linealizado y compensado para salida digital.

La precisión típica de este módulo puede ser **±2%RH** (para humedad relativa) y **±0.3°C** (para temperatura). Este módulo es compatible con 3.3 Voltios y 5 Voltios y por lo tanto no requiere un convertidor de nivel de voltaje. Este módulo se comunica usando el bus serie I<sup>2</sup>C y puede trabajar hasta velocidades de 1 MHz. También hemos proporcionado una biblioteca altamente abstraída para hacer este producto más fácil de usar.

Usar el sensor es fácil. Para [Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compatible con Arduino), simplemente conecta esta placa de conexión con la placa de control principal a través del [cable Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57). Luego usa la biblioteca proporcionada y el código de ejemplo/demo disponible en GitHub para obtener tus datos. Si estás usando un Arduino sin un Base Shield, simplemente conecta el pin VIN al pin de voltaje de 5V, GND a tierra, SCL al Reloj I2C (Analógico 5) y SDA a Datos I2C (Analógico 4).

<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html?queryID=77b7436dc353691bf84e59c7496c9f8f&objectID=35&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para detección ambiental. Por favor consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 Temp y Humedad del Aire</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Versión

| Versión del Producto              | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - Sensor de Temperatura y Humedad(SHT31) V1.0 | Inicial                                                                                                                                                                                    | Ene 2016      |

## Características

- Altamente confiable, preciso y tiempo de respuesta rápido
- Compatible con Grove y fácil de usar
- Bien calibrado, linealizado, compensado para salida digital
- Biblioteca de desarrollo altamente abstraída
- Dirección I2C 0x44

:::note
    Si deseas usar múltiples dispositivos I2C, consulta [Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide/).
:::

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Parámetro                | Valor                                                                                                        |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| Voltaje de entrada (VCC) | 3.3 voltios o 5 voltios                                                                                     |
| Nivel lógico I/O         | 3.3 voltios o 5 voltios basado en VCC                                                                       |
| Corriente de operación   | 100 μA                                                                                                       |
| Temperatura de operación | -40–125 ℃                                                                                                   |
| Rango del sensor de temperatura | -40–125 ℃, con precisión de ±0.3°C                                                                   |
| Rango del sensor de humedad | 0% - 100%(Humedad Relativa), con precisión de ±2%                                                       |
| Chip del sensor          | SHT31([Hoja de datos](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)) |
| Puerto                   | I<sup>2</sup>C                                                                                               |
| Peso                     | 4 g (para placa breakout), 9 g para todo el paquete cada pieza                                              |
| Dimensiones              | 40(largo)×20(ancho) mm                                                                                       |

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

### Jugar Con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - Temp&Hum Sensor(SHT31) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)|

- **Paso 2.** Conecta Grove - Temperature&Humidity Sensor(SHT31) al puerto I2C del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/arduino_connect.jpg" /></div>

## Descripción del Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/Grove-TempAndHumi_Sensor-SHT31-components_1200_s.jpg" /></div>

:::caution
 No toques, agites o hagas vibrar este producto mientras lo uses. De lo contrario, afectará la precisión de los datos medidos.
:::

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Temperature&Humidity Sensor(SHT31) al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Temperature&Humidity Sensor(SHT31) |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| SDA           | Blanco                   |
| SCL           | Amarillo                  |


#### Software

- **Paso 1.** Descarga la [Librería](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre un nuevo sketch, y copia el siguiente código en el nuevo sketch.

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "SHT31.h"

SHT31 sht31 = SHT31();

void setup() {  
  Serial.begin(9600);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
}

void loop() {
  float temp = sht31.getTemperature();
  float hum = sht31.getHumidity();
  Serial.print("Temp = "); 
  Serial.print(temp);
  Serial.println(" C"); //The unit for  Celsius because original arduino don't support speical symbols
  Serial.print("Hum = "); 
  Serial.print(hum);
  Serial.println("%"); 
  Serial.println();
  delay(1000);
}
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**. Si todo va bien, obtendrás los resultados.

El resultado debería ser así:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/RESULT.png" /></div>

### Jugar Con Raspberry Pi

#### Hardware

- **Paso 1.** Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor Temp&Hum(SHT31)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

- **Paso 2.** Conecta el Grove Base Hat al Raspberry.
- **Paso 3.** Conecta el Grove - Temperature&Humidity Sensor (SHT31) al puerto **I2C** del Base Hat.
- **Paso 4.** Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/SHT31_Hat.jpg" /></div>

#### Software

- **Paso 1.** Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2.** Descarga el archivo fuente clonando la biblioteca grove.py.

```

cd ~
git clone https://github.com/Seeed-Studio/grove.py


```

- **Paso 3.** Ejecuta el siguiente comando para ejecutar el código.

```

cd grove.py/grove
python grove_temperature_humidity_sensor_sht3x.py 

```

A continuación se muestra el código grove_temperature_humidity_sensor_sht3x.py.

```python


import time
from grove.i2c import Bus


def CRC(data):
    crc = 0xff
    for s in data:
        crc ^= s
        for _ in range(8):
            if crc & 0x80:
                crc <<= 1
                crc ^= 0x131
            else:
                crc <<= 1
    return crc


class GroveTemperatureHumiditySensorSHT3x(object):

    def __init__(self, address=0x44, bus=None):
        self.address = address

        # I2C bus
        self.bus = Bus(bus)

    def read(self):
        # high repeatability, clock stretching disabled
        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])

        # measurement duration < 16 ms
        time.sleep(0.016)

        # read 6 bytes back
        # Temp MSB, Temp LSB, Temp CRC, Humididty MSB, Humidity LSB, Humidity CRC
        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)

        if data[2] != CRC(data[:2]):
            raise ValueError("temperature CRC mismatch")
        if data[5] != CRC(data[3:5]):
            raise ValueError("humidity CRC mismatch")


        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0

        return celsius, humidity


Grove = GroveTemperatureHumiditySensorSHT3x


def main():
    sensor = GroveTemperatureHumiditySensorSHT3x()
    while True:
        temperature, humidity = sensor.read()

        print('Temperature in Celsius is {:.2f} C'.format(temperature))
        print('Relative Humidity is {:.2f} %'.format(humidity))

        time.sleep(1)


if __name__ == "__main__":
    main()


```

:::tip
If everything goes well, you will be able to see temperature and humidity
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_temperature_humidity_sensor_sht3x.py 
Temperature in Celsius is 21.48 C
Relative Humidity is 51.32 %
Temperature in Celsius is 21.47 C
Relative Humidity is 51.34 %
Temperature in Celsius is 21.46 C
Relative Humidity is 51.37 %
^CTraceback (most recent call last):
  File "grove_temperature_humidity_sensor_sht3x.py", line 95, in <module>
    main()
  File "grove_temperature_humidity_sensor_sht3x.py", line 91, in main
    time.sleep(1)
KeyboardInterrupt


```

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Tenemos esta parte disponible en [geppetto](https://geppetto.seeedstudio.com/), diseño electrónico modular fácil con Seeed y Geppeto. Constrúyelo Ahora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## Recursos

- **[EAGLE]** [Grove - Temperature&Humidity Sensor(SHT31) archivos PCB y esquema PDF](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip)
- **[Hoja de Datos]** [Hoja de Datos del Sensor SHT31](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)
- **[Librería]** [Librería y código de ejemplo](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)
- **[Lectura Adicional]** [Guía de I<sup>2</sup>C para Arduino](https://www.arduino.cc/en/Reference/Wire)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Temp&Humi_Sensor(SHT31) -->

## Proyectos

**Monitor de Salud de Plantas con Hardware de Código Abierto MediaTek**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/shanek/mediatek-open-source-hardware-plant-health-monitor-3390f5/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

