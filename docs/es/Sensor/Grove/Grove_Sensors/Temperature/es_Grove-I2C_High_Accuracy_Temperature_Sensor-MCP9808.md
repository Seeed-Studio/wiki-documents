---
description: Grove - Sensor de Temperatura I2C de Alta Precisión (MCP9808)
title: Grove - Sensor de Temperatura I2C de Alta Precisión (MCP9808)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG" /></div>

El Grove - Sensor de Temperatura I2C de Alta Precisión (MCP9808) es un módulo digital de alta precisión basado en el MCP9808. A diferencia de otros sensores, puedes elegir
la resolución de medición de este sensor. Además de las mediciones de temperatura de alta precisión, también ofrecemos alerta de temperatura
programable. Utilizamos un pin separado para generar la señal de alarma, encontrarás que es muy conveniente usar esta señal como una interrupción para controlar otras placas.

En resumen, creemos que este sensor será una nueva estrella para el control de temperatura.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para la detección ambiental. Por favor, consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de la calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba la última [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

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

- Alta Precisión
  - ±0.25 (típico) de -40°C a +125°C
  - ±0.5°C (máximo) de -20°C a 100°C
  - ±1°C (máximo) de -40°C a +125°C

- Resolución de Medición Seleccionable por el Usuario
  - +0.5°C, +0.25°C, +0.125°C, +0.0625°C
- Salida de Alerta de Temperatura Programable por el Usuario
- Interfaz I2C

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de trabajo|3.3V/5V|
|Rango de operación|-40°C a +125°C|
|Interfaz digital|I2C estándar 400 kHz|
|Dirección I2C|0x18(predeterminada)/ 0x18~0x1F(opcional)|

## Aplicaciones

- Aplicaciones Industriales
- Congeladores y Refrigeradores Industriales
- Procesamiento de Alimentos
- Computadoras Personales y Servidores
- Periféricos de PC
- Electrónicos de Consumo
- Dispositivos Portátiles/de Mano

## Descripción General del Hardware

### Mapa de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg" /></div>

**Dirección I2C**

Ofrecemos 3 conjuntos de pads en la parte posterior del PCB. Por defecto AD0~AD2 están todos conectados a los pads de nivel bajo, puedes cortar esos pads y soldarlos al otro lado (nivel alto).
La dirección I2C es una dirección de 7 bits <mark>0011A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark>. <mark>0011</mark> es el código de dirección, que es la configuración de fábrica, no podemos cambiarlo.
<mark>A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark> es la dirección esclava, podemos cambiarla. La configuración por defecto es A<sub>0</sub>=0/A<sub>1</sub>=0/A<sub>2</sub>=0, por lo que la dirección I2C
por defecto es <mark>0011000</mark>. Normalmente la dirección debería ser de 8 bits, por lo que necesitamos agregar un bit 0 al MSB (Bit Más Significativo), entonces obtenemos <mark>0001,1000</mark>. Esta es una dirección binaria,
a menudo usamos la dirección hexadecimal en el código, así que convirtamos la dirección binaria a una dirección hexadecimal, aquí obtenemos <mark>0x18</mark>. De la misma manera, si soldamos todos los pads al
 nivel alto, obtendremos <mark>0001,1111</mark>, que es <mark>0x1F</mark>. Así que la dirección I2C va desde 0x18 hasta 0x1F, entre ellas, puedes elegir la que quieras, solo asegúrate de cambiar
la dirección I2C en el archivo **Seeed_MCP9808.h** en la librería **Grove_Temperature_sensor_MCP9808-master**.

```cpp
#define DEFAULT_IIC_ADDR  0X18
```

Mapa de direcciones

A<sub>2</sub>=0|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-000,0x18|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-001,0x19
A<sub>1</sub>=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-010,0x1A|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-011,0x1B

A<sub>2</sub>=1|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-100,0x1C|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-101,0x1D
A<sub>1</sub>=0=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-110,0x1E|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-111,0x1F

**Pad <span style={{textDecoration: 'overline'}}>ALE</span>**

Puedes ver el pad <span style={{textDecoration: 'overline'}}>ALE</span> en la parte posterior de la PCB. La señal de alerta que sale de este pad puede usarse como una señal de interrupción externa para otros controladores.
La salida predeterminada es alta, en esta placa debería ser 3.3V. Cuando se cumple la condición, el voltaje de salida se vuelve bajo (0V). Puedes configurar la condición cuando termines este wiki 😄

### Esquemático

**Dirección I2C**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg" /></div>

Como mencionamos anteriormente, usamos esos tres conjuntos de pads para seleccionar la dirección I2C, si quieres cambiar la dirección predeterminada, puedes cortar el cable y volver a soldarlo.

**MCP9808**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg" /></div>

Como puedes ver, el pad <span style={{textDecoration: 'overline'}}>ALE</span>
 está conectado a los 3.3V a través de una resistencia pull-up.

 **Circuito cambiador de nivel bidireccional**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg" /></div>

Este es un circuito típico cambiador de nivel bidireccional para conectar dos secciones de voltaje diferentes de un bus I2C. El bus I<sup>2</sup>C de este sensor usa 3.3V, si el bus I<sup>2</sup>C del Arduino usa 5V, este circuito será necesario. En el esquemático anterior, **Q6** y **Q5** son MOSFET de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

:::tip
        En esta sección solo te mostramos parte del esquemático, para el documento completo consulta los [Recursos](https://wiki.seeedstudio.com/es/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)
:::

## Plataformas Compatibles

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

| Seeeduino V4.2 | Base Shield| Grove - I2C High Accuracy Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank">Obtener Uno Ahora</a>|

:::note

**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - I2C High Accuracy Temperature Sensor al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/connect.jpg" /></div>

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove-MCP9808          |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Grove MCP9808](https://github.com/Seeed-Studio/Grove_Temperature_sensor_MCP9808) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo a través de la ruta: **File --> Examples --> Grove Temperature Sensor MCP9808 --> MCP9808_demo_with_limit**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/demo_path.jpg" /></div>

:::tip
        Como se muestra en la imagen anterior, proporcionamos dos demos para ti, **MCP9808_basic_demo** y **MCP9808_demo_with_limit**. El **MCP9808_basic_demo** solo proporciona la temperatura, la función de alerta está deshabilitada.
        Y para el demo **MCP9808_demo_with_limit**, la función de alerta está habilitada. Si solo quieres la temperatura, el demo básico estará bien. Si quieres usar la función de alerta, debes elegir el demo con límite.
:::

- **Paso 4.** Sube el demo. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás el resultado.

El resultado debería ser como

```cpp
sensor init!!
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.19
temperature value is: 29.25
```

**Ahora, veamos cómo usar el <span style={{textDecoration: 'overline'}}>ALE</span> Pad.**

El código en la demostración **MCP9808_demo_with_limit**:

```cpp
#include "Seeed_MCP9808.h"


MCP9808  sensor;

void setup()
{
    Serial.begin(115200);
    if(sensor.init())
    {
        Serial.println("sensor init failed!!");
    }
    //Set upper limit is 30°C
    sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
    delay(10);
    //Set upper limit is 32°C
    sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,0x0200);
    delay(10);
    //Enable the alert bit.The alert bit outputs low when the temperature value beyond limit.Otherwise stays high.
    sensor.set_config(SET_CONFIG_ADDR,0x0008);

    Serial.println("sensor init!!");
}


void loop()
{
    float temp=0;
    //Get temperature ,a float-form value.
    sensor.get_temp(&temp);
    Serial.print("temperature value is: ");
    Serial.println(temp);
    delay(1000);
}

```

Además de medir la temperatura, este código también implementa una función. Cuando la temperatura es menor a 30℃, la salida del **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** es alta por defecto-3.3v.
Cuando la temperatura es mayor a 30℃, el **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** tendrá una salida baja-0v.

Entonces podrías preguntar, ¿qué pasa si quiero cambiar la temperatura umbral? OK, por favor ve a la línea 14:

```cpp
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
```

Usamos esta función para controlar la temperatura, el primer parámetro es la dirección del registro UPPER_LIMIT y el segundo parámetro <mark>0x01e0</mark> es la temperatura hexadecimal que establecemos, como mencionamos anteriormente, son 30℃. El <mark>0x01e0</mark> es un número hexadecimal de cuatro bits, el último bit a la derecha representa la parte fraccionaria. Lo establecemos como 0, entonces el número válido es <mark>0x1e</mark>. **e** significa 14 en decimal,
y el bit superior **1** significa 16 en decimal. Así que <mark>0x1e</mark> equivale a 16+14=30.

Proporcionamos 3 funciones en el archivo **Seeed_MCP9808.cpp**.  
```sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16);```
```sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16);```
```sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16);```

As we mentioned before, the default output of the **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** is high, and the output level goes low when the temperature meets certain conditions. You can use those 3 functions to set your own conditions.

**sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16)** is used to set the lower temperature limit, **u16** is the 4 bit Hexadecimal temperature we set. When the temperature is lower than the value we set, the output of the **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** will goes down.

**sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16)** is used to set the upper temperature limit, also **u16** is the 4 bit Hexadecimal temperature we set. When the temperature is higher than the value we set, the output of the **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** will goes down.

**sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16)** is used for the inturrupt mode, in this wiki we only show you how to work as a comparator. If you want to know more, please check the [datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/MCP9808_datasheet.pdf) .

Now we can set a condition zone by lower_limit and upper_limit, when the temperature comes to the condition zone, the output will goes low.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/Zone.jpg" /></div>

For example, if you want the **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** output high between 28℃ and 30℃, and output low when the tempareture is higer than 30℃ or lower than 28℃.
The code should be like:

```cpp

sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,0x01c0);
delay(10);
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
delay(10);

```

:::caution
        Por favor, asegúrate de que el **upper_limit** sea mayor que el **lower_limit**, de lo contrario no funcionará correctamente. Y por favor asegúrate de que el **critical_limit** sea mayor que el **upper_limit**. Se requiere un cierto delay() para asegurar que los registros se escriban correctamente.
:::

### Jugar con Raspberry Pi

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor de Temperatura I2C de Alta Precisión|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/thumbnail.jpg" /></div>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove - I2C High Accuracy Temperature Sensor al puerto I2C del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/MCP9808_Hat.jpg" /></div>

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo e instalar grove.py en tu raspberry pi.

- **Paso 2**. Ejecuta los siguientes comandos para ejecutar el código.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_high_accuracy_temperature
```

Following is the mcp9808.py code.

```python

import math
import threading
from grove.i2c import Bus 
from grove.temperature import Temper

RES_LOW = 0x00
RES_MEDIUM = 0x01
RES_HIGH = 0x02
RES_PRECISION = 0x03

MCP9808_REG_AMBIENT_TEMP = 0x05

class TemperMCP9808(Temper):
    def __init__(self, address=0x18):
        self._addr = address
        self._bus = Bus()
        self._resolution = Temper.RES_1_2_CELSIUS

    def _derive_res(self, res):
        ares = -1
        if res >= Temper.RES_1_2_CELSIUS:
            ares = RES_LOW
        elif res >= Temper.RES_1_4_CELSIUS:
            ares = RES_MEDIUM
        elif res >= Temper.RES_1_8_CELSIUS:
            ares = RES_HIGH
        elif res >= Temper.RES_1_16_CELSIUS:
            ares = RES_PRECISION

        if ares < 0:
            return False
        self._bus.write_byte(self._addr, ares)
        # print("ares = {}".format(ares))
        return True

    @property
    def temperature(self):
        result = self._bus.read_word_data(self._addr, MCP9808_REG_AMBIENT_TEMP)
        # Swap the bytes
        data = (result & 0xff) << 8 | (result & 0xff00) >> 8
        # print("data = {}".format(data))
        # print("data = {}".format(hex(data)))
        # Check if the temperature is negative
        if data & 0x1000:
            data = -((data ^ 0x0FFF) + 1)
        else:
            data = data & 0x0fff
        return data / 16.0
```

:::tip success
Si todo va bien, podrás ver el siguiente resultado
:::

```python

(env)pi@raspberrypi:~ grove_high_accuracy_temperature 
Insert Grove - I2C-High-Accuracy-Temperature
  to Grove-Base-Hat any I2C slot
Detecting temperature...
24.5 Celsius
24.5 Celsius
24.375 Celsius
^CTraceback (most recent call last):
  File "grove_high_accuracy_temperature.py", line 54, in <module>
    main()
  File "grove_high_accuracy_temperature.py", line 50, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes salir de este programa simplemente presionando **ctrl+c**.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - I2C High Accuracy Temperature Sensor(MCP9808) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip)
- **[Zip]** [Librería Seeed MCP9808](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove_Temperature_sensor_MCP9808-master.zip)
- **[PDF]** [Hoja de datos del MCP9808](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/MCP9808_datasheet.pdf)
- **[PDF]** [Hoja de datos del 2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)
- **[PDF]** [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HQr6jSmfJs0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión del Producto


¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
