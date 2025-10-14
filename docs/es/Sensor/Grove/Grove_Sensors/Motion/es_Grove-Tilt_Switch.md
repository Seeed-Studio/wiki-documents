---
description: Grove - Interruptor de Inclinación
title: Grove - Interruptor de Inclinación
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Tilt_Switch
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg" alt="pir" width={600} height="auto" /></p>

El Grove-Interruptor de Inclinación es el equivalente de un botón, y se utiliza como entrada digital. Dentro del interruptor de inclinación hay un par de bolas que hacen contacto with los pines cuando la carcasa está vertical. Inclina la carcasa y las bolas no tocan, por lo tanto no hacen conexión. Está conectado a la línea SIG, NC no se utiliza en este Grove.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

Características
--------

- Interfaz Grove
- Fácil de usar
- Módulo Grove simple

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje
</th>
<td>
3
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
<th scope="row">
Ángulo de Conexión
</th>
<td colspan="3">
10° ~170°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Ángulo de desconexión
</th>
<td colspan="3">
190° ~350°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Vida Eléctrica
</th>
<td colspan="3">
100,000
</td>
<td>
Ciclo
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

El pin SIG del Grove - Tilt Switch produce LOW normalmente. Cuando el Tilt Switch está vertical, un par de bolas dentro del interruptor de inclinación harán contacto con los pines y el pin SIG producirá HIGH.

El siguiente sketch demuestra una aplicación simple de usar el Tilt Switch y el Grove - Button para controlar el led.

- Como indica la siguiente imagen, el Tilt Switch está conectado al puerto digital 5 del Grove - Base Shield y el Grove-Button al puerto digital 7. El LED está conectado al puerto digital 1. La instalación del hardware es la siguiente:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg" alt="pir" width={600} height="auto" /></p>

- Copia y pega el código de abajo en un nuevo sketch de Arduino.

```
void setup()
{
    pinMode(1, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(100);
        digitalWrite(1, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }

}
```

- Sube el código.
- Entonces el LED se encenderá cuando presiones el botón o actives el interruptor de inclinación. ¡Inténtalo!

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Tilt Switch al puerto D5, luego conecta un Grove - Button y Grove - Red LED a los puertos D7 y D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png" alt="pir" width={600} height="auto" /></p>

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, inclina el interruptor de inclinación o presiona el botón, el LED se encenderá.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Tilt Switch |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el interruptor de inclinación al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Para el paso 3 puedes conectar el interruptor de inclinación a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python3 grove_tilt_switch.py 12

```

A continuación se muestra el código grove_tilt_switch.py.

```python

import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)
        self._on_trigger = None
        self._on_release = None

    @property
    def on_trigger(self):
        return self._on_trigger

    @on_trigger.setter
    def on_trigger(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_trigger = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):

        if value:
            if callable(self._on_trigger):
                self._on_trigger()
        else:
            if callable(self._on_release):
                self._on_release()

Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))

    def on_trigger():
        print('Triggered')
    def on_release():
        print("Released.")

    swicth.on_trigger = on_trigger
    swicth.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::success
    Si todo va bien, podrás ver el siguiente resultado cuando toques el interruptor de inclinación
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_tilt_switch.py 12
Triggered
Released.
Triggered
^CTraceback (most recent call last):
  File "grove_tilt_switch.py", line 106, in <module>
    main()
  File "grove_tilt_switch.py", line 102, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugar con Raspberry Pi (con GrovePi_Plus)

### Con Raspberry Pi

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::
1.Deberías tener una Raspberry Pi y un Grovepi o Grovepi+.

2.Deberías haber completado la configuración del entorno de desarrollo, de lo contrario sigue [aquí](/es/GrovePi_Plus/).

3.Conexión

- Conecta Tilt_Switch en el socket grovepi D3 usando un cable grove.

4.Navega al directorio de las demos:

```
       cd yourpath/GrovePi/Software/Python/
```

- Para ver el código

```
    nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect the Grove Tilt Switch to digital port D3
    # SIG,NC,VCC,GND
    tilt_switch = 3

    grovepi.pinMode(tilt_switch,"INPUT")

    while True:
        try:
            print grovepi.digitalRead(tilt_switch)
            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Ejecuta la demostración.

```
    sudo python grove_tilt_switch.py
```

6.Resultado: Coloque el sensor en posición vertical por un lado, el pin SIG emitirá HIGH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png" alt="pir" width={600} height="auto" /></p>

Referencia
---------

El ángulo de operación del Grove-Tilt Switch se muestra a continuación:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg" alt="pir" width={600} height="auto" /></p>

<div class="admonition note">
<p class="admonition-title">Nota</p>
La marca J1 en el Grove es el terminal de referencia.
</div>

# Grove - Tilt Switch v1.0 Archivo Eagle

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - Tilt Switch v1.1 Archivo Eagle

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Grove - Tilt Switch v1.0 Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip)
- [Grove - Tilt Switch v1.1 Archivo PDF](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_PDF_File.pdf)
- [Grove - Tilt Switch v1.1 Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip)
- [Hoja de datos SW200D](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/SW200D_datasheet.pdf)
- [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove_Tilt_Switch_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Tilt_Switch -->

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
