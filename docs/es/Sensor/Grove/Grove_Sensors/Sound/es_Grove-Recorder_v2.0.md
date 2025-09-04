---
description: Grove - Grabadora v2.0
title: Grove - Grabadora v2.0
keywords:
  - Grove Grove_Sensors Sound
image: https://wiki.seeedstudio.com/es/Grove-Loudness_Sensor/
slug: /es/Grove-Recorder_v2.0
last_update:
  date: 01/20/2023
  author: jianjing huang
---


![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0.jpg)
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Recorder-v2-0-p-4552.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - Grabadora v2.0 es una grabadora mejorada con características enriquecidas. Puede grabar audio de 8-20 segundos<sup>\[1\]</sup> con alta calidad y voz natural. Además, también cuenta con control de volumen de sonido y funciones de reproducción. Con MCU como Seeeduino o placa Arduino, puedes crear prototipos de varias aplicaciones rápidamente con interfaces fáciles de usar.

<sup>[1]</sup>El tiempo de grabación puede ser personalizado (si lo requieres) reemplazando diferentes resistencias; la solución para hacer esto se describirá en secciones posteriores.

Seguimiento de Versiones
------------------------

| Revisión del producto | Fecha de lanzamiento | Estado de soporte      | Notas |
|-----------------------|----------------------|------------------------|-------|
| V1.0                  | Abr 2014             | Soportado              |  -    |
| V2.0                  | Oct 2015             | Soporte principal      | <ol><li>Agregar controlador de volumen del altavoz.</li><li>Agregar amplificador NS8002 para mejorar la potencia.</li><li> Agregar interruptor de pin Rec para cambiar el pin Rec.</li></ol>|

Características
-----------

- Fácil de usar con control de volumen de sonido, funciones de grabación, reproducción e interfaces grove.
- Fácil de programar para múltiples aplicaciones con MCU.
- Modo de apagado automático, duración de grabación y reproducción variable, almacenamiento no volátil.
- Bajo consumo de energía.
- Se envía con un altavoz (8Ω/2W).

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Ideas de aplicación
-------------------

- Juguetes.
- Alarma.
- Aplicaciones que requieren eco de corta duración.

Especificaciones
---------------

| Parámetro                      | Valor                                                                                                         |
|--------------------------------|---------------------------------------------------------------------------------------------------------------|
| Voltaje de operación           | 3.3~5.0V(DC)                                                                                                 |
| Ondulación(a potencia máxima)  | ≤ 50mV                                                                                                        |
| Duración de grabación(predeterminada) | 12 segundos(valor MAX)<sup>\[2\]</sup>.                                                              |
| Duración de reproducción(predeterminada) | 12 segundos(valor MAX).                                                                            |
| Frecuencia de muestreo         | 53 kHz                                                                                                        |
| Chip                           | ISD1820PY([Hoja de datos](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/ISD_1800_Specifications.pdf)), NS8002(Amplificador de Volumen) |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

<sup>[2]</sup>Puedes reemplazar la resistencia que se muestra a continuación para cambiar la duración de grabación.

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0_back_view_600.jpg)

*Área marcada con rectángulo rojo*

:::note
La duración de reproducción será la misma que la duración de grabación cuando cambie. Diferentes tipos de resistencia llevarán a diferentes duraciones de grabación como muestra la siguiente tabla.
:::

| ROSC             | Duración | Frecuencia de Muestreo | Ancho de Banda de Entrada |
|------------------|----------|------------------------|----------------------------|
| 80 KΩ            | 8 segs   | 8.0 KHz                | 3.4 KHz                    |
| 100 KΩ (predeterminado) | 10 segs  | 6.4 KHz                | 2.6 KHz                    |
| 120 KΩ           | 12 segs  | 5.3 KHz                | 2.3 KHz                    |
| 160 KΩ           | 16 segs  | 4.0 KHz                | 1.7 KHz                    |
| 200 KΩ           | 20 segs  | 3.2 KHz                | 1.3 KHz                    |

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_View_wiki_s.jpg)

**Interfaz Grove**

Conecta la placa de control principal como la placa Seeeduino_v4.2 con Grove - Recorder.

**Interfaz del altavoz**

Conecta Grove - Recorder con el altavoz.

**Eje Rec**

Iniciar grabación.

**Interfaz de control de volumen**

Controla el volumen del altavoz.

**MIC**

Micrófono para grabación.

**IDS 1820PY**

Microcontrolador.

**Indicador de funcionamiento**

Se enciende mientras estás grabando. Se apaga cuando detienes la grabación o el tiempo de grabación excede la duración de grabación.

**Interruptor del pin Rec**

Puedes cambiar el pin Rec ON/OFF, así puedes deshabilitar o habilitar la grabación controlada por MCU.

**Cable Grove**

Conecta la placa de control principal con la placa controladora.

**Altavoz**

### **Lista de partes**

| Nombre de la parte        | Cantidad |
|---------------------------|----------|
| Grove - Recorder v2.0 | 1 PC     |
| Cable Grove           | 1 PC     |
| Altavoz                   | 1 PC     |

Comenzar
-----------

### **Materiales requeridos**

- Seeeduino_v4.2 x 1
- Grove - Button x 1
- Cable Grove x 1

### **Preparativos**

Consulta las siguientes guías para construir un IDE apropiado:

:::note
    Hemos usado Seeeduino en este caso.
:::

- Comenzar en Windows

- Comenzar en Mac OS X

### **Conexiones de hardware**

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_connection_s.jpg)

- Conecta todos los módulos como muestra la figura anterior.
  - Grove - Button > **D2**
  - Grove - Recorder > **D7**

### **Trabajo de software**

Código de prueba como se muestra a continuación, cópialo a tu Arduino IDE, luego haz clic en Upload(CTRL+U) para subir el código a tu Arduino.

```
// demo for Grove - Recorder
 
const int pinButton = 2;
const int pinRec    = 7;
 
 
void setup()
{
    pinMode(pinButton, INPUT);
    pinMode(pinRec, OUTPUT);
}
 
void loop()
{
    if(digitalRead(pinButton))      // button pressed
    {
        digitalWrite(pinRec, HIGH);
        delay(200);
        digitalWrite(pinRec, LOW);
        while(digitalRead(pinButton));  // until button release
    }
 
    delay(10);
}
```

### Pruébalo

- Después de que la conexión funcione y el software termine de funcionar, presiona el eje Rec para comenzar a grabar.
- Luego presiona el botón en Grove - Button para reproducir.
- También puedes ajustar el volumen con un destornillador Phillips.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- Archivo de esquemático en formato [Eagle](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip)
- Archivo de esquemático en formato [PDF](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_PDF_file.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Recorder_v2.0 -->

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
