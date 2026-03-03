---
title: Logic DC Jack
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Logic_DC_Jack/
slug: /es/Logic_DC_Jack
last_update:
  date: 02/03/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian.JPG)

Este es un controlador lógico fácil de usar que implementa lógica AND y negación lógica.
Está diseñado con puente H que obtiene cierta función de control para manejar motores y otras aplicaciones, ahora tu aplicación no se limitará solo a aplicaciones LED.
Si eres principiante en programación e inclinado a hacer una aplicación simple, esta será una elección inteligente para comenzar algo.

## Características

* Entrada dual y salida única

* Selecciona la lógica mediante un interruptor

* Entrada por defecto en HIGH

* Salida de medio puente, puede manejar motor directamente

* Alimentado por batería de 9V

## Especificaciones

* Corriente sin carga: 10±1mA;

* Voltaje de entrada: 6~9V；

* Voltaje de salida: 5V；

* Eficiencia de conversión de energía 82±5%

## Descripción del Hardware

Aquí está el diagrama de bloques del módulo Logic_DC_Jack que consiste en las siguientes partes.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_overview1.JPG)

* **Entrada** - Entrada lógica

  * GND - Conectar a tierra

    * VCC - Conectar a fuente de alimentación

    * IN2 - Entrada2

    * IN1 - Entrada1

* **Salida** - Salida lógica

  * GND - Conectar a tierra

    * VCC - Conectar a fuente de alimentación

    * OUT - Salida

    * OUT - Salida

* **LED de Estado** - un led rojo

  * ENCENDIDO - Modo NOT

    * APAGADO - Modo AND

* **Interruptor de Función**

  * Off - Apagado

    * Not - Modo NOT, significa que la placa ahora es una compuerta lógica NOT, solo puede soportar un módulo de entrada.

    * And - Modo AND, cuando solo un cable Grove está insertado en el conector izquierdo de la placa principal, la placa principal será un simple conector. Pero si usaste un cable Grove ramificado, la placa principal se comportará como compuertas lógicas AND

_Nota: Cuando está en Modo AND, IN2 está por defecto en HIGH, así que cuando es solo un módulo de entrada, Logic DC Jack actúa como un buffer_

* **Entrada de Alimentación** - Entrada de alimentación DC, se requiere 6-9V

* **LED de Alimentación** - Un led verde, encendido cuando hay suministro de energía

## Primeros Pasos

Después de esta sección, puedes hacer funcionar Logic DC Jack con solo unos pocos pasos.

### ¿Cómo funciona?

Logic DC Jack es un dispositivo lógico, que se usa para lograr algunas funciones lógicas simples. Por favor consulta estos enlaces para conocer información sobre [compuerta NOT](https://en.wikipedia.org/wiki/Inverter_logic_gate) y [compuerta AND](https://en.wikipedia.org/wiki/AND_gate) antes de comenzar.

Este módulo incluye dos tipos de cables y usarás uno de ellos mientras conectas una entrada o dos entradas al puerto de entrada.

<dl>
  <dd> Situación 1 – Una entrada </dd>
  <dd> Si la entrada es solo un módulo, el Logic DC Jack puede realizar la función lógica de AND y NOT. La siguiente es la figura de la función lógica: </dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_3.png)

<dl>
  <dd> Situación 2 – Dos entradas </dd>
  <dd> Si las entradas son dos módulos, este Logic DC Jack solo puede realizar la función lógica de AND. La siguiente es la figura de la función lógica: </dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_4.png)

Elige el número de entradas primero y luego ajusta el interruptor a la posición correcta, la función lógica necesaria está confirmada.

### ¿Cómo distinguir el puerto de entrada y el puerto de salida?

Hay dos sellos de flecha en la carcasa, puedes distinguir la entrada y salida fácilmente.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian_2.JPG)

### ¿Cómo conocer el nivel de entrada por defecto?

Aunque sabemos cómo usar la función lógica, pero ¿cómo conocemos el estado de nivel por defecto de la entrada?, porque diferentes estados de nivel por defecto pueden hacer un estado de salida diferente. Aquí, puedes obtenerlo mediante un experimento simple.

#### Preparativos

Se necesita algo:

* [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35)

* Batería de 9V

#### Conectando hardware

En esta demostración, usamos [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50) como ENTRADA, y [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35) como SALIDA.

Cambiar a compuerta **NOT**.

Como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_setting_stared_not.JPG)

#### Revisar Resultados

Como sabes, solo si el nivel de salida es 1, entonces el Grove - LED podría encenderse. Después de encender, encontrarás que Grove - LED está encendido, en otras palabras, el nivel de salida es 1 según la figura de lógica, así que podemos saber: si la salida es 1, el modo del interruptor es NOT, así que el nivel de entrada por defecto es 0.

### Demostración sobre dos entradas

Si quieres usar dos entradas, necesitas el Cable Ramificado Grove.

Con este cable, puedes conectar 2 Grove a la ENTRADA. Uno conecta a Input1 y el otro a Input2.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_cable.JPG)

Aquí hay un ejemplo, 2 Botones de ENTRADA y una SALIDA LED:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_and.jpg)

El led se encenderá solo cuando se presionen 2 botones.

<font color="Red">Consejos: Este cable también puede usarse como salida, si quieres controlar el estado de nivel de 2 Groves al mismo tiempo, este cable es necesario. Por favor presta atención: Si usas el cable de esta manera, el estado de nivel de las dos salidas es el mismo.</font>

### Trabajar Con Lego

Logic DC Jack contiene una carcasa compatible con Lego, puedes insertar Logic DC Jack en Lego, haciéndolo más divertido.

Sobre la Base Grove que es compatible con Lego, estará disponible pronto.

Aquí hay una demostración:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_with_lego.jpg)

## Groves Compatibles para Logic DC Jack

Los siguientes Groves pueden funcionar bien con Logic DC Jack:

### Entrada

* [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - Touch Sensor](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)

* [Grove - Switch](https://www.seeedstudio.com/Grove-SwitchP-p-1252.html?cPath=85_50)

* [Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)

* [Grove - Loudness Sensor](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html?cPath=25_128)

* [Grove - Moisture Sensor](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html?cPath=25_27)

* [Grove - Water Sensor](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html?cPath=25_27)

* [Grove - Magnetic Switch](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

* [Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

* [Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html?cPath=25_31)

* [Grove - PIR Motion Sensor](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html?cPath=25_31)

* [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)

* [Grove - Slide Potentiometer](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html?cPath=85_52)

* [Grove - Flame Sensor](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)

### Salida

* [Grove - LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)

* [Grove - LED String Light](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)

* [Grove - Vibration Motor](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

* [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)

* [Grove - Mini Fan](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)

* [Grove - Recorder](https://www.seeedstudio.com/Grove-Recorder-p-1825.html?cPath=25_128)

* [Grove - Electromagnet](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html?cPath=25_33)

* [Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[PDF]**   [Esquemático en PDF](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH.pdf)
* **[Eagle]**    [Esquemático en Eagle](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip)
* **[PDF]**[Logic DC Jack v1.0 pdf](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.pdf)
* **[EAGLE]**[Logic DC Jack v1.0 sch](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.sch)
* **[Wik]**   [Página Wiki de Compuerta NOT](https://en.wikipedia.org/wiki/Inverter_(logic_gate))
* **[Wik]**    [Página Wiki de Compuerta AND](https://en.wikipedia.org/wiki/AND_gate)

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
