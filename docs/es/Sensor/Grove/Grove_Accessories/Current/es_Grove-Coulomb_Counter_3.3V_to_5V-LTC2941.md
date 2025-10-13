---
description: Grove - Contador de Coulomb 3.3V a 5V (LTC2941)
title: Grove - Contador de Coulomb 3.3V a 5V (LTC2941)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941
last_update:
  date: 1/9/2023
  author: jianjing Huang
---


<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/main.jpg" /></div>

El coulomb (símbolo: C) es la unidad de carga eléctrica del Sistema Internacional de Unidades (SI). Es la carga (símbolo: Q o q) transportada por una corriente constante de un amperio en un segundo: 1C=1A•1s. Un Contador de Coulomb es un dispositivo para medir la corriente que están usando tus dispositivos o sensores.

El Grove - Contador de Coulomb 3.3V a 5V (LTC2941) está basado en el LTC2941, su rango de operación es perfectamente adecuado para baterías de Li-Ion de una sola celda. Un contador de coulomb de precisión integra la corriente a través de una resistencia sensora entre el terminal positivo de la batería y la carga o cargador. Este módulo mide la cantidad de amperios-hora que se han usado, si usas una batería completamente cargada, puedes probar la cantidad de batería que has usado, el porcentaje restante, justo como la batería restante mostrada en tu teléfono. Viceversa, si estás cargando una batería, puedes usar este módulo para monitorear el proceso de carga.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Indica la Carga y Descarga Acumulada de la Batería
- Integración Analógica de Alta Precisión
- 1% de Precisión de Carga
- Interfaz SMBus/I2C

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|2.7V a 5.5V|
|Temperatura de Operación|0℃ a +70℃|
|Precisión|±2ppm de 0°C a +40°C|
|Interfaz|I2C|
|Dirección I2C|0x64|

## Aplicaciones Típicas

- Productos Portátiles de Bajo Consumo
- Teléfonos Celulares
- Reproductor MP3
- Cámaras
- GPS

## Descripción General del Hardware

### Distribución de Pines

**Descripción General**

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out_0.jpg" /></div>

:::caution
Tanto 3 como 4 son interfaces de entrada de alimentación, por favor selecciona una como entrada de alimentación, no uses ambas al mismo tiempo, y el voltaje no puede exceder 5V, de lo contrario el módulo puede dañarse.
:::
___
**Interfaz Grove**

Este módulo se comunica con la placa de control a través de la interfaz I2C:

>GND: Pin de alimentación, conectar al GND del sistema  
>VCC: Pin de alimentación, conectar a 5V o 3.3V, suministro de energía para este módulo.
>SDA: Pin de señal, datos serie I2C  
>SCL: Pin de señal, reloj serie I2C

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out1.jpg" /></div>

___
**OUT**

Salida de alimentación, conectar a la carga o al cargador.

>+: Electrodo positivo de salida de alimentación  
>-: Electrodo negativo de salida de alimentación

:::caution
No conectar directamente a cargas inductivas, como motores o servos, o el chip puede dañarse debido al rizado causado por cargas inductivas.
:::

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out2.jpg" /></div>

___
**IN**

Entrada de alimentación, suministro de energía para **OUT**

>+: Electrodo positivo de entrada de alimentación  
>-: Electrodo negativo de entrada de alimentación

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out3.jpg" /></div>

:::caution
Si usas el [I2C Scanner](https://playground.arduino.cc/Main/I2cScanner/) para escanear el ID I2C del dispositivo, tienes que suministrar 3.3v/5v al terminal IN.
:::

___
**Entrada de Batería**

Entrada de Batería, soporta batería Li-PO de 3.7-4.2v, Jst2.0(2 pin-2.0mm), suministro de energía para **OUT**

>+: Electrodo positivo de entrada de batería  
>-: Electrodo negativo de entrada de batería

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out4.jpg" /></div>

___
**Pin de Alarma**

Conectar al pin AL/CC del LTC2941, salida de alerta o entrada de carga completa. El LTC2941 sí soporta función de alerta, y hemos reservado los pines de hardware relevantes para ti, sin embargo el software que proporcionamos no soporta esta función. Por lo tanto, necesitas trabajar con la parte de software por ti mismo si necesitas esta parte.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out5.jpg" /></div>

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Coulomb Counter 3.3V to 5V (LTC2941) |
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta la carga o cargador en el puerto **OUT**.

- **Paso 2.** Conecta la batería en el puerto **JST** o conecta otra fuente de alimentación en el puerto **IN**.

- **Paso 3.** Conecta el Grove - Coulomb Counter 3.3V to 5V (LTC2941) al puerto **I2C** del Grove-Base Shield.

- **Paso 4.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 5.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/connect.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - Coulomb Counter 3.3V to 5V (LTC2941) |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V     | Rojo                | VCC |
| SDA            | Blanco              | SDA |
| SCL            | Amarillo             | SCL |

#### Software

:::caution
Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Seeed_LTC2941](https://github.com/Seeed-Studio/Seeed_LTC2941) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove - Coulomb Counter for 3.3V to 5V(LTC2941) --> battery_power**.  
    >**battery_power:** Esta demostración te mostrará los datos de carga eléctrica en la unidad **C** y **mAh**, 1mAh=3.6C, así como la batería restante en porcentaje.  
    >**current_expend:** Esta demostración te mostrará cuánta energía estás consumiendo.

    <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_1.jpg" /></div>

    2. Ábrelo en tu computadora haciendo clic en **battery_power.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_LTC2941-master\examples\battery_power**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_2.jpg" /></div>

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp

#include "LTC2941.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

float coulomb = 0, mAh = 0, percent = 0;

void setup(void)
{
    Wire.begin();
    
    SERIAL.begin(115200);
    while(!SERIAL.available());
    
    SERIAL.println("LTC2941 Raw Data");
    
    ltc2941.initialize();
    ltc2941.setBatteryFullMAh(400);
}

void loop(void)
{
    coulomb = ltc2941.getCoulombs();
    mAh = ltc2941.getmAh();
    percent = ltc2941.getPercent();
    
    SERIAL.print(coulomb);
    SERIAL.print("C,");
    SERIAL.print(mAh);
    SERIAL.print("mAh,");
    SERIAL.print(percent);
    SERIAL.print("%");
    
    SERIAL.println();
    
    delay(1000);
}
```

:::caution
El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas `ctrl`+`shift`+`m` al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::tip
Si todo va bien, cuando abras el Monitor Serie y presiones cualquier tecla luego presiones el botón enviar, puede mostrarse como se indica a continuación:
:::

```cpp
LTC2941 Raw Data
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
```

#### Descripción de la función

En la demostración, usamos una batería de 400mAh, por lo que puedes ver los resultados `1439.96mC,399.99mAh,100.00%`. El porcentaje de batería restante es válido solo después de establecer la capacidad de la batería. Puedes cambiar la capacidad de la batería en la línea de código 21,

```cpp
ltc2941.setBatteryFullMAh(400); // set the battery capacity here
```

Además, cada vez que vuelvas a abrir el puerto serie, o vuelvas a encender la placa de control, los datos se restablecerán a `100.00%`. Así que, todavía hay mucho trabajo por hacer si quieres usarlo en tu teléfono :D

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Coulomb Counter 3.3V to 5V (LTC2941) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip)

- **[Zip]** [Librería Seeed LTC2941](https://github.com/Seeed-Studio/Seeed_LTC2941/archive/master.zip)

- **[PDF]** [Hoja de Datos LTC2941](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/datasheet.pdf)

## Proyecto

Este es el Video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
