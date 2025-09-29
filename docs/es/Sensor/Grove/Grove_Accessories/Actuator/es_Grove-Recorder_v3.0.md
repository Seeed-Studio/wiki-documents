---
title: Grove - Grabadora V3
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Recorder_v3.0/
slug: /es/Grove-Recorder_v3.0
last_update:
  date: 01/09/2022
  author: gunengyu
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/cover.jpg)

Esta es la última versión de Grove-grabadora, y también la mejor versión. Comparando con la anterior, hay algunas actualizaciones que nos gustaría mencionar.

El primer cambio es el MCU. En V3.0, el MCU se actualiza para ser ISD9160FI, que es más potente que el anterior ISD1820PY. ¿Cómo es más potente? Junto con la memoria flash de 2Mbytes recién añadida, te permite grabar hasta 83 segundos, mucho más tiempo que los 12 segundos de grabación anteriores.

En segundo lugar, si alguna vez has usado la versión anterior, sabrías que si quieres reproducir lo que has grabado, necesitas presionar otro botón en el botón Grove que se conecta por separado. En V3.0, integramos el botón de grabación y el botón de reproducción en un solo botón. Manteniendo presionado el botón por 2 segundos, comienza a grabar, presionando el botón rápidamente, reproduce lo que se ha grabado.

## Qué hay de nuevo en V3

* MCU de ISD1820PY a ISD 9160FI
* Botón de grabación y reproducción
* Interruptor de grabación
* Flash de 2Mbytes

## Características

* Tiempo de grabación muy largo, hasta 83s
* Botón integrado para operar
* Indicador LED integrado
* Independiente o controlado por MCU
* Micrófono integrado

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Soporte de Plataforma

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## Especificaciones

* Voltaje de Funcionamiento: 3.3/5V
* Corriente de Funcionamiento (@5V, 25℃)
  * En espera: 25-30mA
  * Grabando: 29-35mA
  * Reproduciendo: 110-150mA
* Corriente de Funcionamiento (@3.3V, 25℃)
  * En espera: 23-25mA
  * Grabando: 25-30mA
  * Reproduciendo: 70-150mA
* Temperatura de Funcionamiento: 0~85℃
* Tamaño: 40x20mm
* Peso: 31.5g

## Descripción del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/hw.png)

1.Conector del Altavoz - JST2.0

2.Micrófono

3.Control de Voz

4.Botón

* Presión Corta y Liberación: Reproducir
* Presión Larga: Iniciar grabación hasta liberar el botón

5.Indicador LED

* LED rojo, se enciende cuando se presiona el botón

6.Conector Grove

7.Interruptor REC

* Cambiar a ON si deseas controlar el módulo para grabar vía Software

8.MCU

## Primeros Pasos

Aquí te mostraremos cómo funciona este Grove - Recorder V3.0 a través de una demostración simple. Primero que todo, necesitas preparar las siguientes cosas:

| Seeeduino V4 | Grove - Recorder | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/stuff.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### Conexión de Hardware
Gracias al beneficio de los módulos de la serie Grove, no necesitas hacer soldaduras o usar una protoboard, lo que necesitas hacer es conectar los módulos al puerto correcto del Base Shield. Para esta demostración, conectamos Grove - Recorder al puerto D2.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/connection.jpeg)

## Independiente

Este módulo puede funcionar de forma independiente sin programación.

* **Grabar** - Presiona el botón hasta que se encienda el LED, y estará grabando, suelta el botón cuando termines de grabar.
* **Reproducir** - Presiona y suelta el botón para reproducir la voz que ha sido grabada.

Si quieres controlar el módulo mediante código, continúa adelante.

## Software

Copia el código de abajo y pégalo en tu Arduino IDE, y súbelo a tu Seeeduino V4. Después de subir el código a un Arduino, luego abre el Monitor Serie.

```
/* Grove - Recorder Test Code
+--------------------------------------------------------------------+
|   Open Serial Monitor and input command to control the module:
|   r - start recording
|   s - stop recording
|   p - play
+-------------------------------------------------------------------*/

const int pinRec  = 3;
const int pinPlay = 2;

void setup() 
{
    Serial.begin(115200);
    Serial.println("Grove - Recorder V3.0 Test Code");
    Serial.println("cmd: \r\nr: record\r\ns: stop recording\r\np: play");
    
    pinMode(pinRec, OUTPUT);
    pinMode(pinPlay, OUTPUT);
    digitalWrite(pinRec, HIGH);
    digitalWrite(pinPlay, HIGH);
}

void loop() 
{
    if(Serial.available())
    {
        char c = Serial.read();
        if(c == 'r')            // begin to record
        {
            digitalWrite(pinRec, LOW);
            Serial.println("start recording...");
        }
        else if(c == 's')       // stop recording
        {
            digitalWrite(pinRec, HIGH);
            Serial.println("stop recording...");
        }
        else if(c == 'p')       // play
        {
            digitalWrite(pinPlay, LOW);
            delay(100);
            digitalWrite(pinPlay, HIGH);
            Serial.println("play...");
        }
    }
}
```

## Ingresar Comando

Puedes ingresar algunos comandos en el monitor serie:

* **Iniciar grabación** - Ingresa una 'r'
* **Detener grabación** - Ingresa una 's'
* **Reproducir** - Ingresa una 'p'

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Record al puerto D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Recorder/img/cc_Recorder.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
    Cuando el código termine de subirse, puedes usar Recorder para grabar y reproducir mediante el Monitor Serie.
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemáticos en PDF](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/Grove%20-%20Recorder%20v3.0a.pdf)
* [Esquemáticos en Eagle](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip)
* [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove_Recorder_CDC_File.zip)

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
