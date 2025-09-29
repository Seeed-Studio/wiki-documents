---
title: Grove - Motor de Vibración
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Vibration_Motor/
slug: /es/Grove-Vibration_Motor
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib.jpg)

Este es un mini motor de vibración adecuado como indicador no audible. Cuando la entrada es HIGH, el motor vibrará igual que tu teléfono celular en modo silencioso.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

## Seguimiento de Versiones

| Revisión | Descripción                                                    | Lanzamiento   |
|----------|----------------------------------------------------------------|---------------|
| v0.9b    | Lanzamiento público inicial                                    | 10 de mayo, 2011  |
| v1.0     | Usa directamente un puerto I/O para controlar el Motor de Vibración | 5 de noviembre, 2011   |
| v1.2     | Transistor añadido, usa mayor corriente para controlar el Motor de Vibración | 11 de julio, 2013 |

## Características

- Compatible con Grove
- No audible
- Bajo consumo de energía
- Alta confiabilidad

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típ
</th>
<th scope="col">
Máx
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Operación
</th>
<td>
3.0V
</td>
<td>
5.0V
</td>
<td>
5.5V
</td>
</tr>
<tr align="center">
<th scope="row">
Modo de Control
</th>
<td colspan="3" rowspan="1">
Nivel Lógico
(Cuando es Lógico HIGH, el motor está ENCENDIDO. Cuando es LOW, el motor está APAGADO.)
</td>
</tr>
<tr align="center">
<th scope="row">
Velocidad nominal
</th>
<td colspan="3" rowspan="1">
9000 rpm
</td>
</tr>
</table>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar Con Arduino

Hacer que vibre es tan fácil como encender un LED. Aquí hay un ejemplo que muestra cómo encender el motor de vibración.

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - Motor de Vibración |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **Paso 2.** Grove - Motor de Vibración al D2 del Grove-Base Shield.
- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/vibration_motor.png)

:::note
 Si no tenemos el Grove Base Shield, también podemos conectar directamente el Grove - Motor de Vibración al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Motor de Vibración |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| D2            | Amarillo                  |

#### Software

- **Paso 1.** Copia el código en el Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
int MoPin = 2;    // vibrator Grove connected to digital pin 9

void setup()  {
    pinMode( MoPin, OUTPUT );
}

void loop()  {

    digitalWrite(MoPin, HIGH);
    delay(1000);

    digitalWrite(MoPin, LOW);
    delay(1000);
}

```

- **Paso 2.** ¡Ahora, siente la vibración de tu motor!

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - Motor de Vibración al puerto D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/cc_Vibration_Motor.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
    Cuando el código termine de subirse, sentirás la vibración del motor de vibración.
:::

### Jugar Con Raspberry Pi

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - Motor de Vibración |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta Grove - Motor de Vibración al puerto **D8** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC mediante cable USB.

#### Software

- **Paso 1.** Navega al directorio de las demos:

```
cd yourpath/GrovePi/Software/Python/
```

- **Paso 2.** Para ver el código

```
nano grove_vibration_motor.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove Vibration Motor to digital port D8
# SIG,NC,VCC,GND
vibration_motor = 8

grovepi.pinMode(vibration_motor,"OUTPUT")

while True:
    try:
        # Start vibrating for 1 second
        grovepi.digitalWrite(vibration_motor,1)
        print 'start'
        time.sleep(1)

        # Stop vibrating for 1 second, then repeat
        grovepi.digitalWrite(vibration_motor,0)
        print 'stop'
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(vibration_motor,0)
        break
    except IOError:
        print "Error"
```

- **Paso 3.** Ejecuta la demostración.

```
sudo python grove_vibration_motor.py
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Grove - Esquemático del Motor de Vibración](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip)

- **[Hoja de Datos]** [Hoja de Datos S9013](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/S9013.pdf)

- **[Hoja de Datos]** [Hoja de Datos ANDA-B1020](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/ANDA-B1020_datasheet.pdf)

- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove_Vibration_Motor/resource/Grove_Vibration_Motor_CDC_File.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_Vibration_Motor -->

## Proyecto

**Grove - Introducción a un Motor de Vibración - solo para adultos**: Ejemplo para Principiantes

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-vibration-motor-only-for-adults-2acfc2/embed' width='350'></iframe>

**¡Inspirados por OVERWATCH, hemos hecho un juguete de Pistola Láser de Madera muy genial para divertirnos estos días!**

La Pistola Láser de Madera y el Objetivo de la Pistola están basados en una placa Arduino llamada Seeeduino Lotus. El emisor láser en la Pistola Láser está controlado para disparar pulsos láser para "activar" el Objetivo de la Pistola. Y hay 3 sensores de luz en el Objetivo de la Pistola para detectar el pulso láser. Parece muy simple ¿verdad? Si estás interesado en nuestro proyecto, ¡por favor haz uno para ti o tu hijo! Vale la pena pasar un día haciéndolo como regalo de Navidad.

[![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

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
