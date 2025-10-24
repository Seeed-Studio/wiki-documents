---
description: Grove - Sensor de Temperatura Infrarrojo en Matriz (AMG8833)
title: Grove - Sensor de Temperatura Infrarrojo en Matriz (AMG8833)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Infrared_Temperature_Sensor_Array-AMG8833
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/main.jpg" /></div>

El Grove - Sensor de Temperatura Infrarrojo en Matriz (AMG8833) es un sensor de matriz infrarroja de alta precisión basado en tecnología MEMS avanzada. Puede soportar detección de temperatura en área bidimensional: 8 × 8 (64 píxeles) y distancia máxima de detección de 7 metros.

Proporcionamos demos tanto para Arduino como para Raspberry Pi para este sensor. Será un módulo perfecto para hacer tu propia cámara térmica.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Detección de temperatura en área bidimensional: 8 × 8 (64 píxeles)
- Salida I2C (capacidad de salida de valor de temperatura)
- Alta precisión
- Larga distancia de detección

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Rango de temperatura del objeto de medición|0 °C a 80 °C +32 °F a +176 °F|
|Rango de temperatura de operación|0 °C a 80 °C +32 °F a +176 °F|
|Rango de temperatura de almacenamiento|−20 °C a 80 °C –4 °F a +176 °F|
|Precisión de temperatura|Típica ±2.5 °C ±4.5 °F|
|Ángulo de visión|Típico 60 °|
|Desviación del eje óptico|Dentro de Típico ±5.6 °|
|Número de píxeles|64 (Matriz Vertical 8 × Horizontal 8)|
|Interfaz externa| I2C|
|Dirección I2C|0x68(por defecto) \\  0x69(opcional)|

## Aplicaciones Típicas

- Electrodomésticos de alta funcionalidad (microondas y aires acondicionados)
- Ahorro de energía en oficinas (control de aire acondicionado/iluminación)
- Señalización digital
- Puertas automáticas/ascensores

## Descripción General del Hardware

### Distribución de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out_back.jpg" /></div>

### Esquemático

**Alimentación**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_1.jpg" /></div>

El voltaje típico del AMG8833 es 3.3V, por lo que utilizamos el chip [XC6206P33](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf) para proporcionar un 3.3V estable. La entrada del XC6206P33 varía de 1.8V a 6.0V, por lo que puedes usar este módulo con tu Arduino tanto en 3.3V como en 5V.

**Circuito convertidor de nivel bidireccional**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_2.jpg" /></div>

Este es un circuito convertidor de nivel bidireccional típico para conectar dos secciones de voltaje diferentes de un bus I2C. El bus I<sup>2</sup>C de este sensor usa 3.3V, si el bus I<sup>2</sup>C del Arduino usa 5V, este circuito será necesario. En el esquemático anterior, **Q6** y **Q5** son MOSFET de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

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

| Seeeduino V4.2 | Base Shield |Sensor de Temperatura Infrarrojo Array |2.8 TFT Touch Shield V2.0|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/2.8touch%20shieldv2.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Infrared Temperature Sensor Array (AMG8833) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el 2.8 TFT Touch Shield V2.0 al Grove - Base Shield.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_1.jpg" /></div>

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - Infrared Temperature Sensor Array (AMG8833) |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V     | Rojo                | VCC |
| SDA            | Blanco              | SDA |
| SCL            | Amarillo             | SCL |

#### Software

:::note
Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Seeed_AMG8833](https://github.com/Seeed-Studio/Seeed_AMG8833) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove IR Matrix Temperature sensor AMG8833 --> TFT_screen_demo**.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_1.jpg" /></div>

    2. Ábrelo en tu computadora haciendo clic en **TFT_screen_demo.ino** que puedes encontrar en la carpeta **XXXXArduino\libraries\Seeed_AMG8833-master\examples\TFT_screen_demo**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_2.jpg" /></div>

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include <stdint.h>
#include <TFTv2.h>
#include <SPI.h>

#include "Seeed_AMG8833_driver.h"


AMG8833 sensor;

#define TFT_PIXELS_NUM   30

void parse_int_status(u8* status)
{
    u8 val=0;
    for(u32 i=0;i<8;i++)
    {
        if(status[i])
        {
            for(u32 j=0;j<8;j++)
            {
                if(status[i]&((1<<j)))
                {
                    Serial.print("pixel ");
                    Serial.print(8*i+j+1);
                    Serial.println("interrupt is generated!!!");
                }
            }
        }
    }
}

void print_status(u8* status)
{
    for(u32 i=0;i<8;i++)
    {
        Serial.print(status[i],HEX);
        Serial.print("  ");

    }
    Serial.println("  ");
}


void setup()
{
    Serial.begin(115200);
    sensor.init();
    TFT_BL_ON;
    /*2.8 TFT screen. url:https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html*/
    Tft.TFTinit();
}


void loop()
{
    u8 val=0;
    float pixels_temp[PIXEL_NUM]={0};
    u16 color[PIXEL_NUM]={0};
    /*Read temperature*/
    sensor.read_pixel_temperature(pixels_temp);
    /*Different temperature correspond to different color.*/
    for(u32 i=0;i<PIXEL_NUM;i++)
    {
        if(pixels_temp[i]<29)
        {
            color[i]=BLUE;
        }
        else if((pixels_temp[i]>=29)&&(pixels_temp[i]<30))
        {
            color[i]=GREEN;
        }
        else if((pixels_temp[i]>=30)&&(pixels_temp[i]<31))
        {
            color[i]=YELLOW;
        }
        else if((pixels_temp[i]>=31)&&(pixels_temp[i]<33))
        {
            color[i]=0xfd00;
        }
        else
        {
            color[i]=RED;
        }
    }
    /*Use a TFT screen to display.*/
    for(u32 i=0;i<PIXEL_NUM;i++)
    {
        Tft.fillScreen(TFT_PIXELS_NUM*(i%8),TFT_PIXELS_NUM*(i%8+1),TFT_PIXELS_NUM*(8-i/8),TFT_PIXELS_NUM*(7-i/8),color[i]);
    }
}

```

:::caution
        El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
    Si todo va bien, verás que la pantalla TFT muestra el mapa de temperatura.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_arduino.gif" /></div>

### Jugar con Raspberry

:::note
        Si esta es la primera vez que juegas con una raspberry pi, por favor consulta [Comenzar con una Raspberry Pi](https://www.raspberrypi.org/documentation/).
:::

#### Hardware

**Materiales requeridos**

| Raspberry Pi |Grove Base Hat para Raspberry Pi|Sensor de Temperatura Infrarrojo Array |Pantalla Táctil Capacitiva de 5 pulgadas 800x480|
|--------------|-------------|-----------------|-------|
|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grove_Pi_hat.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pi_display.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3184.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/5-inch-800x480-Capacitive-TouchScreen-p-2923.html" target="_blank">Obtener Uno Ahora</a>|

:::tip
Si no tienes una Pi-Screen puedes usar el monitor de PC, o puedes usar el [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) para mostrar el resultado de forma remota.
:::

- **Paso 1.** Conecta el Grove - Sensor de Temperatura Infrarrojo Array (AMG8833) al puerto **I2C** del Grove Base Hat para Raspberry Pi.

- **Paso 2.** Conecta el Grove Base Hat para Raspberry Pi en la Raspberry Pi.

- **Paso 3.** Conecta la pantalla táctil capacitiva de 5 pulgadas 800x480 con la Raspberry Pi a través del cable HDMI.

- **Paso 4.** Conecta la Raspberry Pi a la PC a través de un cable micro-USB, alimenta la pantalla táctil capacitiva de 5 pulgadas 800x480 a través de otro cable micro-USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_2.jpg" /></div>

#### Software

- **Paso 1.** Abre la interfaz I2C para tu raspberry pi. Puedes abrir una terminal y escribir el siguiente comando.

```python
sudo raspi-config
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_1.png" /></div>

- **Paso 2.** Cuando veas la imagen de arriba, elige **Interfacing Options**, luego elige **I2C** para habilitar la interfaz I2C.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_2.jpg" /></div>

- **Paso 3.** Cuando termines, puedes usar el siguiente comando para verificar.

```python
sudo i2cdetect -y 1
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_3.jpg" /></div>

Puedes ver la dirección I2C, lo que significa que la raspberry ha detectado el sensor. Si no es así, por favor repite los pasos 1~3 nuevamente. Ok, continuemos.

- **Paso 4.** Escribe los siguientes comandos en la terminal para instalar las dependencias relacionadas.

```python
sudo apt-get update
sudo apt-get install -y build-essential python-pip python-dev python-smbus git
sudo apt-get install -y python-scipy python-pygame
sudo pip install colour
```

- **Paso 5.** Descarga la Biblioteca Python Seeed AMG8833.

```python
git clone https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python.git
```

- **Paso 6.** Ve a la carpeta AMG8833 y ejecuta la demostración.

```python
pi@raspberrypi:~ $ cd Seeed_AMG8833_Raspberry_Python/
pi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ ls
driver.py   README.md         Seeed_AMG8833.pyc
driver.pyc  Seeed_AMG8833.py  thermal_cam.py
pi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ python thermal_cam.py
```

:::tip
Si todo va bien, lo verás.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_pi.gif" /></div>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Infrared Temperature Sensor Array (AMG8833) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip)

- **[Zip]** [Librería Arduino Seeed AMG8833](https://github.com/Seeed-Studio/Seeed_AMG8833/archive/master.zip)

- **[Zip]** [Librería Python Seeed AMG8833](https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python/archive/master.zip)

- **[PDF]** [HOJA DE DATOS AMG8833](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/AMG88.pdf)

- **[PDF]** [HOJA DE DATOS XC6206](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NG0E-qs8zgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión del Producto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
