---
description: Grove - Sensor Inductivo de 2 Canales(LDC1612)
title: Grove - Sensor Inductivo de 2 Canales(LDC1612)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-2_Channel_Inductive_Sensor-LDC1612
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/main.jpg)

El Grove - Sensor Inductivo de 2 Canales está basado en el LDC1612 de Texas Instruments(TI), un convertidor de inductancia a digital de 28 bits (LDC) para soluciones de detección inductiva. Con múltiples canales y soporte para detección remota, el LDC1612 permite que los beneficios de rendimiento y confiabilidad de la detección inductiva se realicen con costo y consumo de energía mínimos. La inductancia es un efecto causado por el campo magnético de un conductor que transporta corriente actuando de vuelta sobre el conductor. Así que al detectar la inductancia, este sensor puede detectar la proximidad de conductores, especialmente metal cercano.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-2-Channel-Inductive-Sensor-%28LDC1612%29-p-3223.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Característica

- 2 Canales con Excitación de Sensor Emparejada
- Fácil de Usar: Configuración Mínima Requerida
- Múltiples Canales Soportan Compensación Ambiental y de Envejecimiento
- Posición de Sensor Remoto de >20 cm Soporta Operación en Ambientes Hostiles
- Parámetro de Bobina: Diámetro: 16mm/ Vueltas: 20

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de Alimentación|3.3V / 5V|
|Temperatura de Unión|-55～150℃|
|Rango de Frecuencia de Sensor Soportado|1kHz~10MHz|
|Mejor Rango de Detección|15mm|
|Interfaz|I2C|
|Dirección I2C|0x2B(predeterminada)<br />0x2A(configurable)|
|Tamaño del Paquete|L: 140mm W: 90mm H: 10mm|
|Peso Bruto|12g|

Cuando el pin ADDR se establece en bajo, la dirección I2C del LDC es 0x2A; cuando el pin ADDR se establece en alto, la dirección I2C del LDC es 0x2B.

## Aplicaciones típicas

- Perillas en productos de consumo, electrodomésticos y automotriz
- Codificadores lineales y rotacionales
- Botones en electrónicos domésticos, dispositivos portátiles, manufactura y automotriz
- Teclados en manufactura y electrodomésticos
- Botones deslizantes en productos de consumo
- Detección de metales en industrial y automotriz
- POS y EPOS
- Medidores de flujo en productos de consumo y electrodomésticos

## Descripción general del hardware

### Distribución de pines

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/pinout_back.jpg)

:::note
**1.** Establece el Rb(unidad de resistencia-kom), L(unidad de inductancia-uH), C(unidad de capacitancia-pf) mediante las APIs si no usas la Inductancia de Bobina que proporcionamos. Se usa para calcular y establecer el registro de frecuencia correspondiente del sensor.

**2.** Hay un pad INT en la placa del sensor, cambia a nivel bajo cuando la conversión se completa, de lo contrario permanece alto, pero debes configurar el registro correspondiente del sensor.
:::

## Principio de funcionamiento

El LDC1612 funciona basándose en la medición de los parámetros del oscilador LC, formado por la traza de cobre del PCB y el capacitor.

El LDC1612 es capaz de medir la cantidad de energía que necesita proporcionar para mantener la oscilación LC cuando un objeto conductor que está magnéticamente acoplado con el oscilador LC se acerca. Como la pérdida de potencia del circuito oscilador es proporcional a la impedancia del objeto conductor, y el valor de impedancia se ve afectado por la distancia del objeto, entonces puede usarse para determinar la distancia entre el objeto y el oscilador LC. En este caso, la traza de cobre del PCB puede verse como un sensor de impedancia.

## Plataformas soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - Sensor Inductivo de 2 Canales|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/thumbnail.jpg)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-2-Channel-Inductive-Sensor-%28LDC1612%29-p-3223.html)|

:::note
 **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - 2-Channel Inductive Sensor(LDC1612) al puerto **I^2^C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/With_ard.jpg)

Ahora, te demostraremos cómo ejecutar el código para la detección de distancia de monedas, procedimiento similar si deseas ejecutar otros programas.

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Grove-2-Channel_Inductive_Sensor-LDC1612](https://github.com/Seeed-Studio/Seeed_LDC1612) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el Arduino IDE. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el Arduino IDE a través de la ruta: **File --> Examples -->Seeed Inductive Sensor LDC1612--> coin_test_demo**.
    ![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/arduino1.png)

    2. Ábrelo en tu computadora haciendo clic en **basic_demo.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\examples\coin_test_demo\coin_test_demo.ino**, **XXXX** es la ubicación donde instalaste el Arduino IDE.
    ![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/arduino2.png)

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el Arduino IDE.

**Demo de moneda**
Este programa permite al usuario detectar la distancia desde la moneda hasta la traza de cobre.

```cpp


#include "Seeed_LDC1612.h"

LDC1612 sensor;
const u32 DISTANCE_00=44000000;  //do not detect
const u32 DISTANCE_00_01=60000000;  // distance:<1mm
const u32 DISTANCE_01_05=45000000;  // distance:1mm~5mm
const u32 DISTANCE_05_10=44250000; // distance:5mm~10mm
const u32 DISTANCE_10_15=44080000; // distance:10mm~15mm
const u32 DISTANCE_15_20=44020000; // distance:15mm~20mm

void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("start!");

    sensor.init();

    if(sensor.single_channel_config(CHANNEL_0))
    {
        Serial.println("can't detect sensor!");
        while(1);
    }


}


void loop()
{
    u32 result_channel1=0;
    u32 result_channel2=0;

    /*shows the status of sensor.*/
    //sensor.get_sensor_status();

    /*Get channel 0 result and parse it.*/
    sensor.get_channel_result(CHANNEL_0,&result_channel1);

    /*Test the distance between the coin and the sensor. 
    Note that the accuracy is for reference only.
    Please suspend the sensor during the test! */
    if(0!=result_channel1)
    {
        if(result_channel1<DISTANCE_00)
        {
            Serial.println("There is no coin here!");
        }

        if(result_channel1>=DISTANCE_00_01)
        {
            Serial.println("The distance between the COIN is 0~1mm");
        }

        if(result_channel1<DISTANCE_00_01&&result_channel1>=DISTANCE_01_05)
        {
            Serial.println("The distance between the COIN is 1~5mm");
        }

        if(result_channel1<DISTANCE_01_05&&result_channel1>=DISTANCE_05_10)
        {
            Serial.println("The distance between the COIN is 5~10mm");
        }

        if(result_channel1<DISTANCE_05_10&&result_channel1>=DISTANCE_10_15)
        {
            Serial.println("The distance between the COIN is 10~15mm");
        }

        if(result_channel1<DISTANCE_10_15&&result_channel1>=DISTANCE_15_20)
        {
            Serial.println("The distance between the COIN is 15~20mm");
        }

        if(result_channel1<DISTANCE_15_20&&result_channel1>=DISTANCE_00)
        {
            Serial.println("The distance between the COIN is more than 2mm");
        }

    }
    
    delay(1000);
}


```

:::caution
El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

:::tip
  Si todo va bien, verás el siguiente resultado
:::

```cpp

The distance between the COIN is 5~10mm
The distance between the COIN is 5~10mm
There is no coin here!
The distance between the COIN is 10~15mm
The distance between the COIN is 5~10mm
The distance between the COIN is 1~5mm
The distance between the COIN is 5~10mm
The distance between the COIN is 5~10mm

```

**Basic demo**

Código para basic_demo.ino

```cpp


#include "Seeed_LDC1612.h"

LDC1612 sensor;


void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("start!");

    sensor.init();

    if(sensor.single_channel_config(CHANNEL_0))
    {
        Serial.println("can't detect sensor!");
        while(1);
    }


}


void loop()
{
    u32 result_channel1=0;
    u32 result_channel2=0;

    /*shows the status of sensor.*/
    //sensor.get_sensor_status();

    /*Get channel 0 result and parse it.*/
    sensor.get_channel_result(CHANNEL_0,&result_channel1);

    /*sensor result value.you can make a lot of application according to its changes.*/
    if(0!=result_channel1)
    {
        Serial.print("result_channel0 is ");
        Serial.println(result_channel1);
    }
    
    delay(1000);
}


```

:::success
    Si todo va bien, verás el siguiente resultado
:::

```cpp

start!
17:06:16.418 -> fsensor =3.74
17:06:16.418 -> result_channel0 is 44387993
result_channel0 is 44387847
result_channel0 is 43476136
result_channel0 is 43799295
result_channel0 is 48988429
result_channel0 is 48828492
result_channel0 is 48682647
result_channel0 is 48845443

```

**Demo Multi-Canal**

Este ejemplo muestra la medición de múltiples canales y nota que el LDC1612 soporta dos canales.

Puedes conectar la bobina 1 como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/link.png)

Código para muti_channel_demo.ino

```cpp

#include "Seeed_LDC1612.h"
#include "math.h"

LDC1612 sensor;

void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("start!");

    sensor.init();

    /*Enable INT-PIN,Interrupted after measurement is completed.*/
    //sensor.set_ERROR_CONFIG(0x01);

    /*multiple channel use case configuration.*/
    if(sensor.LDC1612_mutiple_channel_config())
    {
        Serial.println("can't detect sensor!");
        while(1);
    }
}


void loop()
{
    u32 result_channel0=0;
    u32 result_channel1=0;

    /*shows the status of sensor.*/
    //sensor.get_sensor_status();

    /*sensor result value.you can make a lot of application according to its changes.*/
    sensor.get_channel_result(0,&result_channel0);
    sensor.get_channel_result(1,&result_channel1);

    if(0!=result_channel0)
    {
        Serial.print("result_channel0 is ");
        Serial.println(result_channel0);
    }
    if(0!=result_channel1)
    {
        Serial.print("result_channel1 is ");
        Serial.println(result_channel1);
    }
    delay(1000);
}


```

:::tip
        Si todo va bien, verás el siguiente resultado
:::

```cpp

start!
17:04:34.063 -> fsensor =3.74
17:04:34.063 -> fsensor =3.74
17:04:34.063 -> result_channel0 is 44399351
17:04:34.063 -> result_channel1 is 43599310
result_channel0 is 44648052
17:04:35.078 -> result_channel1 is 43803483
result_channel0 is 44786926
17:04:36.056 -> result_channel1 is 43990824
result_channel0 is 44266733
17:04:37.069 -> result_channel1 is 43305067
result_channel0 is 44767222
17:04:38.092 -> result_channel1 is 43553768
result_channel0 is 46081099
17:04:39.068 -> result_channel1 is 45089497
result_channel0 is 44681202
17:04:40.083 -> result_channel1 is 43207588
can't detect coil Coil Inductance!!!
17:04:41.098 -> can't detect coil Coil Inductance!!!
can't detect coil Coil Inductance!!!
17:04:42.106 -> result_channel0 is 89478485
can't detect coil Coil Inductance!!!
17:04:43.081 -> result_channel0 is 49469095
result_channel0 is 51374493
17:04:44.113 -> result_channel1 is 49895644
can't detect coil Coil Inductance!!!
17:04:45.090 -> can't detect coil Coil Inductance!!!
can't detect coil Coil Inductance!!!

```

:::note
En los ejemplos basic_demo y muti_channel_demo, puedes tener en cuenta que cada salida corresponde a la intensidad de inductancia. Existe una relación funcional entre la salida y la intensidad de inductancia, si estás interesado en más información, puedes consultar la [Hoja de datos LDC1612](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/LDC1612.pdf) proporcionada por Texas Instrument(TI).
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/Grove%20-%202-Channel%20Inductive%20Sensor%20(LDC1612).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - 2-Channel Inductive Sensor(LDC1612) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/Grove%20-%202-Channel%20Inductive%20Sensor%20(LDC1612).zip)

- **[Zip]** [Grove - 2-Channel Inductive Sensor(LDC1612) Biblioteca de Software](https://github.com/Seeed-Studio/Seeed_LDC1612/archive/master.zip)

- **[PDF]** [Hoja de datos LDC1612](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/LDC1612.pdf)

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
