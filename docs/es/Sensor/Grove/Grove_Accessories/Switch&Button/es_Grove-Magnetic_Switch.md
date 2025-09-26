---
description: Grove - Interruptor Magnético
title: Grove - Interruptor Magnético
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Magnetic_Switch
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Interruptor Magnético
category: Sensor
bzurl: https://seeedstudio.com/Grove-Magnetic-Switch-p-744.html
oldwikiname: Grove_-_Magnetic_Switch
prodimagename: Magnetic_Switch.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020038 1.jpg
surveyurl: https://www.research.net/r/Grove-Magnetic_Switch
sku: 101020038
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_bbg, plat_wio
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d.jpg)

Este es un módulo de interruptor magnético compatible con la interfaz Grove. Está basado en un interruptor de láminas encapsulado CT10. El CT10 es de tipo unipolar, un tiro (SPST), con contactos de rutenio normalmente abiertos. El sensor es de tipo de doble extremo y puede ser activado con un electroimán, un imán permanente o una combinación de ambos. El interruptor magnético es una herramienta maravillosa para diseñadores que desean encender y apagar un circuito basándose en la proximidad.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

## Características

- Interfaz compatible con Grove
- Módulo Grove de 2.0cm x 2.0cm
- Partes externas mínimas
- Clasificación de 10W
- Encapsulación resistente

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Ideas de Aplicación

- Sensor de Proximidad
- Sensor de Alarma de Seguridad
- Sensor de Nivel
- Sensor de Flujo
- Contador de Pulsos

## Especificaciones

<table border="1">
<tr>
<th scope="col">
Elementos
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Nom
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<td>
Voltaje de Trabajo
</td>
<td>
3.3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
Potencia Conmutada
</td>
<td colspan="3">
10
</td>
<td>
W
</td>
</tr>
<tr align="center">
<td>
Voltaje Conmutado AC, valor RMS (máx)
</td>
<td colspan="3">
&lt; 140
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
Corriente Conmutada DC
</td>
<td colspan="3">
&lt; 500
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Corriente de Transporte DC
</td>
<td colspan="3">
&lt; 0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<td>
Resistencia de Contacto
</td>
<td colspan="3">
&lt;200
</td>
<td>
mΩ
</td>
</tr>
<tr align="center">
<td>
Resistencia de Aislamiento
</td>
<td colspan="3">
&gt;10<sup>6</sup>
</td>
<td>
MΩ
</td>
</tr>
<tr align="center">
<td>
Temperatura de Operación
</td>
<td>
-40
</td>
<td>
-
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<td>
Rango de Operación
</td>
<td>
10
</td>
<td>
-
</td>
<td>
40
</td>
<td>
AT
</td>
</tr>
</table>

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Demostración

El pin SIG del módulo emite LOW normalmente. Cuando un imán se acerca al interruptor, el interruptor magnético se cierra y el pin SIG emite HIGH.

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Grove - Magnetic Switch |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **Paso 2.** Conecta Grove - Magnetic Switch al puerto **D2** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_ardu.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-Magnetic-Switch al Seeeduino como se muestra a continuación.
:::

| Seeeduino | Grove-Magnetic_Switch |
|------|----------------------------|
| 5V/3.3V   | Rojo                        |
| GND  | Negro                      |
| NC   | Blanco                      |
| D2   | Amarillo                     |


#### Software

- **Paso 1.** Copia el código en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
/*******************************************************************************/

/*macro definitions of magnetic pin and LED pin*/
#define MAGNECTIC_SWITCH 2
#define LED 13//the on board LED of the Arduino or Seeeduino

void setup()
{
    pinsInit();
}

void loop() 
{
    if(isNearMagnet())//if the magnetic switch is near the magnet?
    {
        turnOnLED();
    }
    else
    {
        turnOffLED();
    }
}
void pinsInit()
{
    pinMode(MAGNECTIC_SWITCH, INPUT);
    pinMode(LED,OUTPUT);
}

/*If the magnetic switch is near the magnet, it will return ture, */
/*otherwise it will return false                                */
boolean isNearMagnet()
{
    int sensorValue = digitalRead(MAGNECTIC_SWITCH);
    if(sensorValue == HIGH)//if the sensor value is HIGH?
    {
        return true;//yes,return ture
    }
    else
    {
        return false;//no,return false
    }
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
```

- **Paso 2.**  Luego el LED se enciende cuando hay un imán que se acerca al interruptor. ¡Inténtalo!

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Interruptor Magnético al puerto D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/cc_Magnetic_Switch.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, mueve el imán cerca del interruptor magnético y verás que el LED en el pin 13 del Arduino se enciende.
:::

### Jugar Con Raspberry Pi

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - Interruptor Magnético |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el sensor Grove-Magnetic-Switch al puerto **D2** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_rpi.jpg)

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Navega al directorio de las demos:

```
cd yourpath/GrovePi/Software/Python/
```

- **Paso 3.** Para ver el código (esta demostración tiene el mismo uso que el interruptor de inclinación)

```
nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```py
import time
import grovepi

# Connect the Grove Tilt Switch to digital port D2
# SIG,NC,VCC,GND
tilt_switch = 2

grovepi.pinMode(tilt_switch,"INPUT")

while True:
    try:
        print grovepi.digitalRead(tilt_switch)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Paso 4.** Ejecuta la demostración.

```
sudo python grovepi_tilt_switch.py
```

- **Paso 5.** Resultado

Coloca un imán sobre el sensor, el pin SIG emitirá HIGH.

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/Grovepi_tilt_Switch_00.png)

# Grove-Magnetic Switch v0.9

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-Magnetic Switch v1.3

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]**  [Esquemático Grove-Magnetic Switch v0.9](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip)

- **[Eagle]**  [Esquemático Grove-Magnetic Switch v1.3](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip)

- **[PDF]**  [Archivo PDF Grove-Magnetic Switch v1.3](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_PDF_File.pdf)

- **[Datasheet]**  [Hoja de datos CT10](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/CT10.pdf)

- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove_Magnetic_Switch_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Magnetic_Switch -->

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
