---
title: Grove - Mini Fan
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Mini_Fan/
slug: /es/Grove-Mini_Fan
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_Fan%20head.jpg)

El módulo **Grove - Mini Fan** es un controlador de motor DC basado en el microcontrolador AVR Atmega168. El módulo también proporciona una conexión a través de la cual puedes cambiar el código del microcontrolador. Por ejemplo, el código puede cambiarse para que el módulo pueda usarse para controlar un [servomotor](https://en.wikipedia.org/wiki/Servomotor). Por defecto, el módulo está configurado para hacer funcionar el motor DC que está incluido en tu paquete mezclador. El ventilador de aspas suaves también incluido en el paquete puede conectarse al motor para hacer un proyecto divertido con niños. Al tener aspas suaves, el ventilador es completamente seguro y no hay posibilidad de lesión alguna incluso si se mueve a alta velocidad.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)

## Características

---

* Módulo de salida fácil de usar que activa un motor DC en funcionamiento basado en la señal recibida de un sensor de entrada o módulo de conmutación
* Usado en conjunto con el motor DC incluido con el paquete
* Interfaz JST 2.0 usada para conectar al motor
* El motor DC viene con un accesorio de ventilador de aspas suaves coloridas (como se muestra en la imagen)
* El microcontrolador integrado puede reprogramarse para cambiar la operación del módulo
* El microcontrolador ejecuta código compatible con Arduino
* Cambia el código para controlar servomotores en lugar de motores DC
* Usa cables Grove estándar de 4 pines para conectar a otros módulos Grove
<div>
  <span style={{color: 'red'}}>Nota:</span>para la versión más reciente (v1.1), el voltaje de salida para el motor se actualizó a 3.3 voltios.
</div>

## Función de la Interfaz

---
![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_fan.jpg)

<dl>
  <dt>① Interfaz UartSBee: Usa esta interfaz para cambiar el código del microcontrolador. Usa un módulo [UartSBee](/es/UartSBee_V4) para conectar al microcontrolador usando la interfaz Uart.</dt>
  <dt>② Interfaz JST 2.0: Usada para conectar a un motor DC de 3.3 voltios (solo 3.3 voltios)</dt>
  <dt>③ Interfaz Grove</dt>
  <dt>④ Interfaz ICSP</dt>
  <dt>⑤ Microcontrolador Atmega168</dt>
  <dt>⑥ Interfaz Servo</dt>
</dl>

## Uso

---
Sigue estos pasos para construir un circuito de muestra usando este módulo:

1.Primero conecta el motor DC al módulo **Grove - Mini Fan** usando la interfaz de dos cables JST2.0.

2.Conecta el módulo Mini Fan al lado de salida de tu circuito (a la derecha del módulo de alimentación). En el lado de entrada del circuito, puedes usar una gama de módulos de entrada basados en sensores ([Grove - Light Sensor](/Grove-Light_Sensor "Grove - Light Sensor"), [Grove - Sound Sensor](/Grove-Sound_Sensor "Grove - Sound Sensor"), [Grove - Button](/Grove-Button "Grove - Button") o [Grove - Slide Potentiometer](/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")).

3.Enciende el circuito.

4.El motor DC comienza a rotar cuando el módulo de entrada suministra un disparador:

* Si usas con un interruptor momentáneo como el del módulo [Grove - Button](/Grove-Button "Grove - Button"), simplemente presiona el botón para encender el motor.

* Si usas con un [Grove - Slide Potentiometer](/Grove-Slide_Potentiometer "Grove - Slide Potentiometer"), mueve el deslizador desde la posición GND a VCC y observa cómo la velocidad del motor aumenta conforme el voltaje suministrado aumenta. ¡Conecta el ventilador de aspas suaves y tienes un ventilador personal de velocidad variable que puedes hacer funcionar a cualquier velocidad que desees para combatir el calor!

* Si usas con un [Grove - Light Sensor](/Grove-Light_Sensor "Grove - Light Sensor") conectado directamente al lado de entrada del circuito, deberías ver que el motor funciona con luz brillante y se detiene en la oscuridad:

![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Light_Sensitive_Fan.gif)

* Si quieres que el motor funcione solo en la oscuridad, añade un módulo Grove - NOT entre el sensor de luz y el módulo de alimentación.
* Si usas con un [Grove - Sound Sensor](/Grove-Sound_Sensor "Grove - Sound Sensor"), deberías ver que el motor funciona al detectar sonido. Nuevamente, si quieres invertir la función, o en otras palabras, si quieres que el motor esté encendido todo el tiempo excepto cuando hay sonido, añade un módulo Grove - NOT entre el sensor de sonido y el módulo de alimentación.

Puedes usar tanto el módulo Grove - USB Power como el módulo Grove - DC Jack Power para el circuito Grove.

Para construir un circuito que controle un servomotor usando un potenciómetro, sigue los pasos a continuación:

1. Abre el código directamente en la ruta: \libraries\Servo\examples\Knob

2. Sube tu código al MCU integrado. Asegúrate de seleccionar el tipo de placa correcto y el puerto COM al subir.

3. Ahora deberías poder controlar tu servomotor con un potenciómetro

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Mini Fan al puerto D2, y conecta un Grove - Light Sensor al puerto A0 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen a continuación o abre el archivo cdc que puede descargarse al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/cc_Mini_Fan.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
    Cuando el código termine de subirse, cubre la luz del Sensor de Luz con tu mano y el ventilador se encenderá.
:::

## Disponibilidad

---
Este módulo Grove está disponible como parte de la siguiente Serie de Kits Grove:

* Grove Mixer Pack V2

Alternativamente, se puede comprar por separado en el Seeed Studio Bazaar.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Grove - Mini Fan v1.0 (Archivos Eagle)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip)

* [Grove - Mini Fan v1.0 (pdf)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.pdf)

* [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove_Mini_Fan_CDC_File.zip)

## Proyectos

**Controlador de Mini Ventilador Grove + TI LaunchPad**: Alimenta un mini ventilador con PWM usando Seeed Grove y TI LaunchPad.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/measley2/grove-mini-fan-controller-ti-launchpad-cba304/embed' width='350'></iframe>

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
