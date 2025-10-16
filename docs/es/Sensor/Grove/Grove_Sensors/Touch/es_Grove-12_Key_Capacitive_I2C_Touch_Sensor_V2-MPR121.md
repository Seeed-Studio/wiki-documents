---
description: Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V2 (MPR121)
title: Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V2 (MPR121)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/main.jpg)

El **Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V2 (MPR121)** es un sensor táctil capacitivo de proximidad multicanal. Es un módulo 3 en 1 con las siguientes características: Detección de Capacitancia, Detección Táctil y Detección de Proximidad.

**Detección de Capacitancia**: Este módulo utiliza un esquema de detección de capacitancia de corriente DC constante. Puede medir capacitancias que van desde 10 pF hasta más de 2000 pF con una resolución de hasta 0.01 pF.

**Detección Táctil**: Una vez que se adquieren los datos de capacitancia del electrodo, el estado de toque/liberación del electrodo se determina comparándolo con el valor de línea base de capacitancia.

**Detección de Proximidad**: Una nueva característica del MPR121 es el sistema de detección de proximidad cercana. Esto significa que todos los electrodos del sistema pueden sumarse juntos para crear un solo electrodo grande.

Basado en el Freescale MPR121, este sensor tiene 12 electrodos completamente independientes con autoconfiguración incorporada. Gracias a la interfaz I2C, puedes detectar todas las señales de los 12 electrodos con solo un puerto Grove, y la dirección I2C es configurable por hardware, desde 0X5B hasta 0X5D. Esto también hace posible que múltiples **Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V2 (MPR121)** se usen juntos para expansiones de canales en un solo sistema, puedes construir un sistema táctil que contenga máximo 36 electrodos.

Este sensor es una versión mejorada del [Grove - Sensor Táctil I2C](https://www.seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html), para satisfacer las necesidades de Matsuzawa.Takashi (uno de nuestros clientes), hicimos la dirección I2C cambiable, e incluso más barata que la versión anterior. Así que si tienes alguna sugerencia sobre todos los Groves, por favor escríbenos. Siempre escucharemos tu voz, puede hacer otra mejora, incluso un nuevo grove. Por favor escribe amablemente tus sugerencias en la página [Grove 100+](https://www.seeedstudio.com/grove_100).

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CPq4VSAXBgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Cambio de Versión

|Elemento| Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V2 | Grove - Sensor Táctil I2C |
|---|---|---|
|Chip Principal|MPR121|MPR121|
|Dirección I2C|cambiable(0X5B ~ 0X5D)|no modificable(0X5A)|
|Sensor Táctil|x|√|
|Interfaz de Entrada|interfaz de cocodrilo|Conector Hembra DIP 2Pin|
|Rendimiento de Costo|Alto|Bajo|
|Fecha de Lanzamiento|11 de Septiembre de 2018|31 de Octubre de 2015|

## Características

- ADC interno de 10 bits
- Autocalibración independiente integrada para cada entrada de electrodo
- Electrodos completamente independientes con autoconfiguración incorporada
- Interfaz I2C, con salida de interrupción IRQ para avisar cambios de estado de electrodos
- Dirección I2C configurable por hardware
- 12 electrodos/entradas de detección de capacitancia en las cuales 8 son multifuncionales para control de LED y GPIO
- Autoconfiguración de corriente de carga y tiempo de carga para cada entrada de electrodo
- Umbrales de activación separados para toque y liberación para cada electrodo, proporcionando histéresis e independencia de electrodos

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de operación|3.3V / 5V|
|Temperatura de operación|-40°C a +85°C|
|Rango de Temperatura de Almacenamiento|-40°C a +125°C|
|Rango de capacitancias|10 pF a más de 2000 pF|
|Resolución|0.01 pF|
|Corriente Fuente GPIO por Pin|12 mA|
|Corriente Sumidero GPIO por Pin|1.2 mA|
|Interfaz|I2C|
|Rango de dirección I2C|0x5B,0x5C,0x5D|
|Dirección I2C por defecto|0x5B|

## Aplicaciones

- Periféricos de PC
- Reproductores MP3
- Controles Remotos
- Teléfonos Móviles
- Controles de Iluminación

## Descripción General del Hardware

### Mapa de Pines

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/pin_map.jpg)

|Número de Pin|Nombre del Pin|Función|Multiplexado de pin|
|---|---|---|---|
|8|CH0| Canal0, Electrodo 0, entrada del valor de capacitancia|-|
|9|CH1| Canal1, Electrodo 1, entrada del valor de capacitancia|-|
|10|CH2| Canal2, Electrodo 2, entrada del valor de capacitancia|-|
|11|CH3| Canal3, Electrodo 3, entrada del valor de capacitancia|-|
|12|CH4| Canal4, Electrodo 4, entrada del valor de capacitancia|GPIO o controlador LED|
|13|CH5| Canal5, Electrodo 5, entrada del valor de capacitancia|GPIO o controlador LED|
|14|CH6| Canal6, Electrodo 6, entrada del valor de capacitancia|GPIO o controlador LED|
|15|CH7| Canal7, Electrodo 7, entrada del valor de capacitancia|GPIO o controlador LED|
|16|CH8| Canal8, Electrodo 8, entrada del valor de capacitancia|GPIO o controlador LED|
|17|CH9| Canal9, Electrodo 9, entrada del valor de capacitancia|GPIO o controlador LED|
|18|CH10| Canal10, Electrodo 10, entrada del valor de capacitancia|GPIO o controlador LED|
|19|CH11| Canal11, Electrodo 11, entrada del valor de capacitancia|GPIO o controlador LED|

:::tip
Para los CH0 ~ CH11, una vez que se adquieren los datos de capacitancia del electrodo, el estado de toque/liberación del electrodo se determina comparándolo con el valor de línea base de capacitancia. Y puedes establecer el valor de línea base para cada canal por separado. Los Pin12 ~ Pin19 son multifuncionales, lo que significa que puedes configurarlos como GPIO o controlador LED, para más detalles, consulta la nota de aplicación de freescale [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf).
:::

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/pin_map_back_1.jpg)

:::caution
La almohadilla central está conectada al cable de dirección, puedes cambiar la dirección I2C cortando el cable y volviéndolo a soldar. Por la seguridad tuya y de otros, ten cuidado con el cuchillo o pistola de soldar que puedas usar.
:::

### Esquemático

**Alimentación**

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/schematic.jpg)

El voltaje de operación del Freescale MPR121 es de 1.71V a 3.6V, sin embargo, el voltaje de Arduino es 3.3V o 5V. Para hacerlo compatible con el sistema de 5V, usamos un chip de conversión de voltaje para proporcionar 3.3V al Freescale MPR121.

**Circuito cambiador de nivel bidireccional**

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/schematic_1.jpg)

Este es un circuito cambiador de nivel bidireccional típico para conectar dos secciones de voltaje diferentes de un bus I2C. El bus I<sup>2</sup>C de este sensor usa 3.3V, si el bus I<sup>2</sup>C del Arduino usa 5V, este circuito será necesario. En el esquemático anterior, **Q1** y **Q2** son MOSFET de Canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

En esta parte, te mostraremos cómo usar el **Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V2 (MPR121)** como un sensor táctil, en cuanto a cómo configurarlo como un Sensor de Capacitancia o Sensor de Proximidad, por favor consulta la [Hoja de Datos](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/MPR121.pdf).

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Sensor Táctil I2C V2|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121) al puerto **I2C** del Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/connect.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove-MPR121          |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

#### Software

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Grove touch sensor MPR121](https://github.com/linux-downey/Grove_touch_sensor_MPR121) desde Github.

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove touch sensor MPR121 --> MPR121_demo**.
    ![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/path.jpg)

    2. Ábrelo en tu computadora haciendo clic en **MPR121_demo.ino** que puedes encontrar en **xxxx\Arduino\libraries\Grove_touch_sensor_MPR121-master**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/path_1.jpg)

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include "Seeed_MPR121_driver.h"

Mpr121 mpr121;

u16 touch_status_flag[CHANNEL_NUM]={0};
void setup()
{
  s32 ret=0;
  Serial.begin(115200);
  if(mpr121.begin()<0)
  {
    Serial.println("Can't detect device!!!!");
  }
  else
  {
    Serial.println("mpr121 init OK!");
  }
  delay(100);
}
void loop()
{
  u16 result=0;
  u16 filtered_data_buf[CHANNEL_NUM]={0};
  u8 baseline_buf[CHANNEL_NUM]={0};
  
  result=mpr121.check_status_register();

  mpr121.get_filtered_reg_data(&result,filtered_data_buf);

  for(int i=0;i<CHANNEL_NUM;i++)
  {
    if(result&(1<<i))                             /*key i is pressed!!*/
    {
      if(0==touch_status_flag[i])             
      { 
        touch_status_flag[i]=1;
        Serial.print("key ");
        Serial.print(i);
        Serial.println("pressed");
      }
    }
    else
    {
      if(1==touch_status_flag[i])
      {
        touch_status_flag[i]=0;
        Serial.print("key ");
        Serial.print(i);
        Serial.println("release");
      }
    }
  }
  delay(50); 
}
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas `ctrl`+`shift`+`m` al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::tip
Si todo va bien, obtendrás el resultado. Cuando toques los pads CH0 ~ CH11, se activará **key ?pressed** y **key ?release**
:::

```cpp
mpr121 inmpr121 init OK!
key 11pressed
key 11release
key 10pressed
key 10release
key 0pressed
key 0release
key 2pressed
key 2release

```

### Jugar con Raspberry Pi

#### Hardware

- **Paso 1.** Componentes utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Sensor Táctil I2C V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/thumbnail.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html)|

- **Paso 2.** Conecta el Grove Base Hat al Raspberry.
- **Paso 3.** Conecta el Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121) al puerto **I2C** del Base Hat.
- **Paso 4.** Conecta el Raspberry Pi a la PC a través del cable USB.
![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/rasp_MPR121.jpg)

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1.** Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2.** Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3.** Ejecuta el siguiente comando para ejecutar el código.

```
cd grove.py/grove
python3 grove_12_chan_touch_sensor_MPR121.py
```

A continuación se muestra el código grove_12_chan_touch_sensor_MPR121.py.

```python
import time
from grove.i2c import Bus


TOUCH_SENSOR_DEFAULT_ADDR                 = 0x5b

MODE_CONFIG_REG_ADDR                      = 0x5e
GLOBAL_PARAM_REG_ADDR_L                   = 0x5c
TOUCH_STATUS_REG_ADDR_L                   = 0x00
SET_DEBOUNCE_REG_ADDR                     = 0x5b

FILTERED_DATA_REG_START_ADDR_L            = 0x04
CHANNEL_NUM                               = 12

STOP_MODE                                 = 0
NORMAL_MODE                               = 0x3c

class TouchSensorMpr121():
    def __init__(self,bus_num = 1,addr = TOUCH_SENSOR_DEFAULT_ADDR):
        self.bus = Bus(bus_num)
        self.addr = addr
        self.threshold = 0
        self.touch_flag = [0]*CHANNEL_NUM

    def sensor_init(self):
        self._set_mode(STOP_MODE)
        data = [0x23,0x10]
        self._set_global_param(data)
        self._set_debounce(0x22)
        self._set_mode(NORMAL_MODE)

    def set_threshold(self,threshold):
        self.threshold = threshold

    def wait_for_ready(self):
        time.sleep(.2)

    def _set_mode(self,mode):
        self.bus.write_byte_data(self.addr,MODE_CONFIG_REG_ADDR,mode)
    
    def _set_global_param(self,data):
        self.bus.write_i2c_block_data(self.addr,GLOBAL_PARAM_REG_ADDR_L,data)
    
    def _set_debounce(self,data):
        self.bus.write_byte_data(self.addr,SET_DEBOUNCE_REG_ADDR,data)

    def _check_status_register(self):
        data_status = self.bus.read_i2c_block_data(self.addr,TOUCH_STATUS_REG_ADDR_L,2)
        return data_status
    
    def get_filtered_touch_data(self,sensor_status):
        result_value = []
        for i in range(CHANNEL_NUM):
            time.sleep(.01)
            if(sensor_status & (1<<i)):
                channel_data = self.bus.read_i2c_block_data(self.addr,FILTERED_DATA_REG_START_ADDR_L+2*i,2)
                result_value.append(channel_data[0] | channel_data[1]<<8 )
            else:
                result_value.append(0)
        return result_value

    def listen_sensor_status(self):
        data = self._check_status_register()
        touch_status = data[0] | (data[1]<<8) 
        touch_result_value = self.get_filtered_touch_data(touch_status)

        for i in range(CHANNEL_NUM):
            if(touch_result_value[i] < self.threshold ):
                touch_result_value[i] = 0
        return touch_result_value
    
    def parse_and_print_result(self,result):
        for i in range(CHANNEL_NUM):
            if(result[i] != 0):
                if(0 == self.touch_flag[i]):
                    self.touch_flag[i] = 1
                    print("Channel %d is pressed,value is %d" %(i,result[i]))
            else:
                if(1 == self.touch_flag[i]):
                    self.touch_flag[i] = 0
                    print("Channel %d is released,value is %d" %(i,result[i]))
        


mpr121 = TouchSensorMpr121() 
def main():
    mpr121.sensor_init()
    mpr121.set_threshold(0x60)
    mpr121.wait_for_ready()
    while 1:
        result = mpr121.listen_sensor_status()
        mpr121.parse_and_print_result(result)
        time.sleep(.1)

if __name__  == '__main__':
    main()
```

:::tip
Si todo va bien, obtendrás el resultado. Cuando toques las almohadillas CH0 ~ CH11, se activará **channel # pressed** y **Channel # released** con los valores de presión correspondientes.
:::

```cpp
>>> %Run grove_12_chan_touch_sensor_MPR121.py
    Channel 8 is pressed, value is 308
    Channel 8 is released, value is 0
    Channel 9 is pressed, value is 170
    Channel 9 is released, value is 0
    Channel 10 is pressed, value is 340
    Channel 8 is pressed, value is 180
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - 12 Key Capacitive I2C Touch Sensor V2 archivos eagle](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121.zip)

- **[Zip]** [Grove touch sensor MPR121 Librería](https://github.com/linux-downey/Grove_touch_sensor_MPR121/archive/master.zip)

- **[PDF]** [Hoja de datos del MPR121](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/MPR121.pdf)

- **[PDF]** [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Piano de Hojas**: Hicimos un piano usando un sensor táctil, así como hojas para las teclas del piano.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**Jugar con Scratch**: ¿Cómo jugar un juego de scratch con un Sensor Táctil?

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed' width='350'></iframe>

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
