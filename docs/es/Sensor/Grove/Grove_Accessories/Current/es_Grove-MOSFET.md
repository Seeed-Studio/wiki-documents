---
description: Grove - MOSFET
title: Grove - MOSFET
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-MOSFET
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_01.jpg" /></div>

Grove – MOSFET te permite controlar proyectos de mayor voltaje, digamos 15V DC, con bajo voltaje, digamos 5V, en un microcontrolador. MOSFET también es un tipo de interruptor, pero su frecuencia de conmutación puede alcanzar hasta 5MHz, mucho más rápido que un relé mecánico normal. Hay dos terminales de tornillo en la placa. Una para la fuente de alimentación externa y la otra para el dispositivo que deseas controlar. Grove – MOSFET pasará la energía de un extremo al otro cuando esté cerrado. Pero si la fuente de alimentación externa está ausente, tu dispositivo aún puede obtener energía del microcontrolador a través de la interfaz Grove.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-MOSFET-p-1594.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Versión

| Versión del Producto         | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - MOSFET V1.0 | Inicial                                                                                                                                                                                    | Oct 2015      |

## Especificación

|Parámetro| Valor/Rango|
|:--------|:-----------|
|Voltaje de trabajo|  5V|
|Vin      |   5 ~ 15V|
|Modelo MOSFET| CJQ4435|

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Demostración

Aquí demostramos cómo usar Grove - MOSFET para controlar un motor. Proporcionamos energía para él con una fuente de alimentación externa, pero si tu dispositivo controlado necesita una corriente menor a 300mA, Seeeduino puede soportarlo totalmente y no se necesita fuente de alimentación extra.

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - MOSFET |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **Paso 2.** Conecta Grove - MOSFET al puerto D6 del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/2.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente Grove_MOSFET al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove_MOSFET |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| D6            | Amarillo                  |

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/MOSFET_Interface_Function.jpg" /></div>

Vin: Acepta alimentación de 5V ~ 15V con corriente menor a 2A.

Vout: Conecta actuadores aquí.

#### Software

- **Paso 1.** Copia el código en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
// demo of Grove - MOSFET
// use  pwm pin 6 to control a motor

int motorPin = 6;

void setup()
{
    Serial.begin(38400);
    pinMode(motorPin, OUTPUT);
    Serial.println("Grove - MOSFET Test Demo!");
}

void loop()
{
    motorOnThenOffWithSpeed();
    motorAcceleration();
}

void motorOnThenOffWithSpeed()
{
    int onSpeed  = 200;                         // a number between 0 (stopped) and 255 (full speed)
    int onTime   = 2500;
    int offSpeed = 50;                          // a number between 0 (stopped) and 255 (full speed)
    int offTime  = 1000;
    analogWrite(motorPin, onSpeed);
    delay(onTime);
    analogWrite(motorPin, offSpeed);
    delay(offTime);
}

void motorAcceleration()
{
    int delayTime = 50;
    for(int i=0; i<256; i++)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }

    for(int i=255; i>=0; i--)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }
}
```

- **Paso 2.** Observa el estado del motor

![](https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Static_image.gif)

### Jugar con Raspberry Pi

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - MOSFET |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **Paso 2.** Conecta el GrovePi_Plus a la Raspberry.
- **Paso 3.** Conecta el Grove-MOSFET al puerto **D6** del GrovePi_Plus.
- **Paso 4.** Conecta la Raspberry a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/1.jpg" /></div>

#### Software

- **Paso 1.** Navega al directorio de las demos:

```
cd yourpath/GrovePi/Software/Python/
```

- **Paso 2.** Para ver el código

```
nano grove_mosfet.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove MOSFET to digital port D6
# SIG,NC,VCC,GND
mosfet = 6

grovepi.pinMode(mosfet,"OUTPUT")
time.sleep(1)

while True:
    try:
        # Full speed
        grovepi.analogWrite(mosfet,255)
        print "full speed"
        time.sleep(2)

        # Half speed
        grovepi.analogWrite(mosfet,128)
        print "half speed"
        time.sleep(2)

        # Off
        grovepi.analogWrite(mosfet,0)
        print "off"
        time.sleep(2)

    except KeyboardInterrupt:
        grovepi.analogWrite(mosfet,0)
        break
    except IOError:
        print "Error"
```

- **Paso 3.** Ejecuta la demostración.

```
sudo python grove_mosfet.py
```

- **Paso 4.** Veremos la salida mostrada en la terminal como se muestra a continuación.

<div><img width="{1000}" src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/pi_result.png" /></div>
|
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Archivo esquemático Grove - MOSFET](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip)
- **[PDF]** [PDF esquemático Grove - MOSFET](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove%20-%20MOSFET%20.pdf)
- **[Hoja de datos]** [Hoja de datos CJQ4435](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/CJQ4435.pdf)
- **[WIKI]** [Wikipedia MOSFET](https://en.wikipedia.org/wiki/MOSFET)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_MOSFET -->

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
