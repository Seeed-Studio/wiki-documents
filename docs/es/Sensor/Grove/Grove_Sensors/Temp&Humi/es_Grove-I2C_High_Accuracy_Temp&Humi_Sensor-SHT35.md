---
description: Grove - I2C High Accuracy Temp&Humi Sensor(SHT35)
title: Grove - I2C High Accuracy Temp&Humi Sensor(SHT35)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-I2C_High_Accuracy_Temp%26Humi_Sensor-SHT35
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/main.jpg" /></div>

Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) está basado en SHT3x-DIS, que es la próxima generación de sensores de temperatura y humedad de Sensirion. Se basa en un nuevo chip sensor CMOSens® que está en el corazón de la nueva plataforma de humedad y temperatura de Sensirion. El SHT3x-DIS tiene mayor inteligencia, confiabilidad y especificaciones de precisión mejoradas en comparación con su predecesor. Su funcionalidad incluye procesamiento de señal mejorado, dos direcciones I2C distintivas y seleccionables por el usuario y velocidades de comunicación de hasta 1 MHz.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para el sensado ambiental. Por favor consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

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
          <strong>S2101 Temp. y Humedad del Aire</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Características

- Alta precisión de ±1.5 %HR y ±0.1 °C
- Salida digital completamente calibrada, linealizada y compensada por temperatura
- Interfaz I2C con velocidades de comunicación de hasta 1MHz y dos direcciones seleccionables por el usuario
- Tiempo de arranque y medición muy rápido

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Rango de Temperatura Especificado|-40°C a +125°C|
|Resolución de Temperatura|0.01°C|
|Tolerancia de Precisión de Temperatura|±0.1 °C|
|Rango de Humedad Especificado|0%HR a +100%HR|
|Resolución de Humedad|0.01%HR|
|Tolerancia de Precisión de Humedad|±1.5 %HR|
|Interfaz|I2C|
|Dirección I2C|0x45(predeterminada) / 0x44(opcional)|

## Aplicaciones

- Congeladores y Refrigeradores Industriales
- Procesamiento de Alimentos
- Computadoras Personales y Servidores
- Periféricos de PC
- Electrónicos de Consumo
- Dispositivos Portátiles/de Mano

## Descripción General del Hardware

### Distribución de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/pin_out_back.jpg" /></div>

### Esquemático

**Alimentación**

Este módulo está basado en **SHT35**, el voltaje de entrada de este chip varía de 2.15v-5.5v, por lo que puedes usar tanto el pin de 3.3v como el de 5v de Arduino para alimentar este módulo.

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove-SHT35 Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/connect.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V     | Rojo                | VCC |
| SDA            | Blanco              | SDA |
| SCL            | Amarillo             | SCL |

#### Software

:::caution
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Grove-SHT35 Sensor](https://github.com/Seeed-Studio/Seeed_SHT35) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove Temperature sensor SHT35 --> basic_demo**.

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/path.jpg" /></div>

    2. Ábrelo en tu computadora haciendo clic en **basic_demo.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_SHT35-master\examples\basic_demo**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/path_1.jpg" /></div>

    3. O, puedes simplemente hacer clic en el icono<div><img width="{1000}" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" /></div> en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include "Seeed_SHT35.h"


/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SDAPIN  20
  #define SCLPIN  21
  #define RSTPIN  7
  #define SERIAL SerialUSB
#else
  #define SDAPIN  A4
  #define SCLPIN  A5
  #define RSTPIN  2
  #define SERIAL Serial
#endif

SHT35 sensor(SCLPIN);


void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("serial start!!");
    if(sensor.init())
    {
      SERIAL.println("sensor init failed!!!");
    }
    delay(1000);
}


void loop()
{
     u16 value=0;
    u8 data[6]={0};
    float temp,hum;
    if(NO_ERROR!=sensor.read_meas_data_single_shot(HIGH_REP_WITH_STRCH,&temp,&hum))
    {
      SERIAL.println("read temp failed!!");
      SERIAL.println("   ");
      SERIAL.println("   ");
      SERIAL.println("   ");
    }
    else
    {
      SERIAL.println("result======>");
      SERIAL.print("temperature =");
      SERIAL.println(temp);

      SERIAL.print("humidity =");
      SERIAL.println(hum);

      SERIAL.println("   ");
      SERIAL.println("   ");
      SERIAL.println("   ");
    }
    delay(1000);
}
```

:::caution
        El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::tip
     Si todo va bien, cuando abras el Monitor Serie, puede mostrarse como se indica a continuación:
:::

```cpp
serial start!!
=>
temperature =24.10
humidity =51.09


result======>
temperature =24.10
humidity =50.96
   
      
result======>
temperature =24.10
humidity =51.04
   
   
result======>
temperature =24.11
humidity =51.09
```

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor SHT35 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/thumbnail.jpg" /></div>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) al puerto **I2C** del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/With_Hat.jpg" /></div>

#### Software

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py 

```

A continuación se muestra el código grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py.

```python

import time
from grove.i2c import Bus

def CRC(data):
  crc = 0xff
  for s in data:
    crc ^= s
    for i in range(8):
      if crc & 0x80:
        crc <<= 1
        crc ^= 0x131
      else:
        crc <<= 1
  return crc

class GroveTemperatureHumiditySensorSHT3x(object):

    def __init__(self, address=0x45, bus=None):
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
        data = self.bus.read_i2c_block_data(0x45, 0x00, 6)
        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0
        if data[2] != CRC(data[:2]):
            raise RuntimeError("temperature CRC mismatch")
        if data[5] != CRC(data[3:5]):
            raise RuntimeError("humidity CRC mismatch")
        return celsius, humidity

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
    Si todo va bien, podrás ver el siguiente resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py 
Temperature in Celsius is 20.47 C
Relative Humidity is 40.28 %
Temperature in Celsius is 20.47 C
Relative Humidity is 40.47 %
Temperature in Celsius is 20.47 C
Relative Humidity is 40.70 %
Temperature in Celsius is 20.43 C
Relative Humidity is 40.70 %
Temperature in Celsius is 20.41 C
Relative Humidity is 40.60 %
^CTraceback (most recent call last):
  File "grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py", line 89, in <module>
    main()
  File "grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py", line 86, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip)

- **[Zip]** [Librería Seeed SHT35](https://github.com/Seeed-Studio/Seeed_SHT35/archive/master.zip)

- **[PDF]** [Hoja de Datos SHT3x-DIS](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Datasheet%20SHT3x-DIS.pdf)

## Proyectos

**Visualización de datos de transporte con Google Map**：Usamos el Wio LTE cat.1 para monitorear el GPS de transporte y otra información. Para cadena de frío, podemos monitorear la ubicación GPS junto con temperatura y humedad. Para ciclismo, podemos monitorear la ubicación GPS junto con la frecuencia cardíaca.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed" width={350} />

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
