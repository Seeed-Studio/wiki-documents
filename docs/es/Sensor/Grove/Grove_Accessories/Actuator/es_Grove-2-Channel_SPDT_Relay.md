---
title: Grove - Relé SPDT de 2 Canales
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-2-Channel_SPDT_Relay/
slug: /es/Grove-2-Channel_SPDT_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/mian.jpg)

El Grove - Relé SPDT de 2 Canales tiene dos interruptores de polo simple - doble tiro (SPDT). Solo requiere señales de bajo voltaje y baja corriente para
controlar esos interruptores. Específicamente, puedes usar 5V DC para controlar máx. 250V AC o 110V DC.

Lo mejor es que puedes controlar los dos canales por separado. Por ejemplo, controlado por SIG1, puedes conectar el COM1 a NC1 o N01 como desees.
Es tan conveniente y confiable que puede aplicarse a productos masivos o proyectos que necesiten conmutar dispositivos de alto voltaje/alta corriente.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Carcasa de plástico resistente a altas temperaturas
- Carga de alto voltaje
- Bajo consumo de energía
- Larga duración

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de operación|5V|
|Corriente Nominal de Bobina|89.3mA|
|Carga Certificación TUV |10A 250VAC/  10A 30VDC|
|Carga Certificación UL|10A 125VAC/ 10A 28VDC|
|Voltaje Máximo Permitido|250VAC/110VDC|
|Consumo de Energía|aprox. 0.45W|
|Resistencia de Contacto|100mΩ Máx.|
|Resistencia de Aislamiento|100MΩ Mín. (500VDC)|
|Conmutación Máx. ON/OFF|30 operaciones/min|
|Temperatura Ambiente|-40°C a +85°C|
|Humedad de Operación|45% a 85%RH|
|Material de Contacto|AgCdO|
|Interfaz de entrada|Digital SIG1/SIG2|
|Puerto de Salida|Terminal de Tornillo Hembra DIP de 3 Pines-Verde|

## Aplicaciones

- Electrodomésticos
- Máquinas de oficina
- Receptor de TV con control remoto
- Pantalla de monitor
- Equipos de audio para aplicaciones de alta corriente de arranque

## Descripción General del Hardware

### Mapa de Pines

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/schematic.jpg)

**K1** es el módulo de relé, hay una bobina entre el **pin1** y el **pin3** de K1. Por defecto, el **COM1** se conectará a **NC1**. Si el pin3 de K1 se conecta a tierra, entonces esta bobina estará 'cerrada', por lo que el **COM1** se conectará a **NO1**.

Para abrir esta bobina, se requieren aproximadamente 90mA, sin embargo, normalmente el pin GPIO de Arduino solo puede proporcionar 20mA (40mA máximo). Por lo tanto, usamos un transistor NPN [S9013](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf) que puede proporcionar 500mA.

El **SIG1** es llevado a bajo por la resistencia R2 de 10k, si no hay señal, la 'Compuerta' de **Q1** será 0v, y Q1 está apagado, por lo que el K1 estará 'abierto'. Si **SIG1** se convierte en 5v, entonces el Q1 se encenderá.
El **Pin3** de k1 se conectará al GND del sistema, para el K1 habrá 5V entre el **pin3** y el **pin1**, por lo que la bobina estará 'cerrada', y el **COM1** se conectará a **NO1**

:::tip
    El **D3** es un [diodo de retorno (diodo de contraflujo)](https://en.wikipedia.org/wiki/Flyback_diode). Un diodo de retorno es un diodo conectado a través de un inductor usado para eliminar el retorno, que es el pico de voltaje repentino visto a través de una carga inductiva cuando su corriente de suministro se reduce o interrumpe repentinamente. Se usa en circuitos en los que las cargas inductivas son controladas por interruptores, y en fuentes de alimentación conmutadas e inversores.
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg)  |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - Relé SPDT de 2 Canales |Grove-LED x2|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor, conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor, usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el pin **SIG** del Grove-LED al puerto **COM** del Grove - 2-Channel SPDT Relay. Conecta el pin **GND** del Grove-LED al **GND** del Base Shield.

- **Paso 2.** Conecta el puerto **NO** del Grove - 2-Channel SPDT Relay al **5V** del Base Shield. Conecta el puerto **NC** del Grove - 2-Channel SPDT Relay al **GND** del Base Shield.

:::tip
        Paso 1. y Paso 2. Conecta el GND del Grove LED al GND del sistema y el SIG al puerto COM del Relay. Si el COM se conecta a NO(5v), el LED se encenderá, y si el COM se conecta a NC(0V), el LED se apagará. Usamos dos LEDs en este wiki, por favor asegúrate de que LED<sub>1</sub> sea para el Switch<sub>1</sub>, y el LED<sub>2</sub> para el Switch<sub>2</sub>.
:::

- **Paso 3.** Conecta el Grove - 2-Channel SPDT Relay al puerto **D7** del Base Shield.

- **Paso 4.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 5.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/connect.jpg)

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Abre el IDE de Arduino y crea un nuevo archivo, luego copia el siguiente código en el nuevo archivo.

```cpp
#include <Arduino.h>
uint8_t channel1 = 7;
uint8_t channel2 = 8;
void setup() {
  pinMode(channel1, OUTPUT);
  pinMode(channel2, OUTPUT);
}
void loop() {
  digitalWrite(channel1, HIGH);
  digitalWrite(channel2, LOW);
  delay(2000);
  digitalWrite(channel1, LOW);
  digitalWrite(channel2, HIGH);
  delay(2000);
}
```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
    Verás los LEDs integrados encenderse y apagarse alternativamente, igual que los dos Grove - LEDs.
:::

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/test20180821_142634.gif)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos eagle de Grove-2-Channel SPDT Relay](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip)
- **[PDF]** [Hoja de datos del Relé SRD 05VDC-SL-C](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
- **[PDF]** [Hoja de datos del S9013](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)

## Proyecto

Este es el Video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/_8au__eavKk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
