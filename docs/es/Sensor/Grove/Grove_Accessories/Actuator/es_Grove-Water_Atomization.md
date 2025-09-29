---
title: Grove - Atomización de Agua
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Water_Atomization/
slug: /es/Grove-Water_Atomization
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_product_1200.jpg)

Grove - Atomización de Agua es un excelente módulo Grove para que desarrolles un atomizador o un módulo atomizador en tus aplicaciones fácilmente. Con unos pocos pasos simples, puedes crear un prototipo de atomizador. Tiene interfaz grove que lo hace fácilmente aplicable a muchas aplicaciones. Un humidificador es una aplicación básica que se puede construir con él, puedes desarrollar objetos más avanzados e interesantes con tecnología de aroma digital y cualquier otra situación en la que se requiera atomización.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Water-Atomization-v10-p-2542.html)

Características
--------

- Calentado con ultrasonido.
- Fácil de crear prototipos de nuevas aplicaciones.
- Bien aplicado a vastas aplicaciones.
- Para varias aplicaciones interesantes, inteligentes y modernas.

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Ideas de aplicación
-----------------

- Humidificador.
- Emisor de aromas en diferentes situaciones.
- Para aplicaciones de casa inteligente.
- Para objetos inteligentes en productos electrónicos de consumo.

Especificaciones
--------------

| Parámetro            | Valor          |
|----------------------|----------------|
| Voltaje de Operación | 5.0V(DC)       |
| Rizado(a potencia máx) | ≤100 mV        |
| Potencia máxima      | 2W             |
| Voltaje de salida pico | 65±5V          |
| Frecuencia de operación | 105±5kHz       |
| Chips                | ETA1617, NE555 |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Descripción general del hardware
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_overview_1200.jpg) -->

**Interfaz Grove**
Conecta la placa de control principal como la placa Seeeduino con la placa controladora.

**Interfaz del transductor**
Conecta el transductor ultrasónico con la placa controladora.

**Cable Grove**
Conecta la placa de control principal con la placa controladora.

### **Lista de partes**

| Nombre de las partes        | Cantidad |
|-----------------------------|----------|
| Placa controladora          | 1PC      |
| Cable Grove             | 1PC      |
| Placa transductora ultrasónica | 1PC   |

Comenzar
-----------

### **Material requerido**

Seeeduino v4.2 x 1

Grove - Base shield v2 x 1

Grove - Wire x 1

### **Preparativos**

Consulta las siguientes guías para construir un IDE apropiado:

:::note
Hemos elegido Seeeduino en este caso.
:::

- Comenzar en Windows
- Comenzar en Mac OS X

### **Conexiones de hardware**

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

### **Una pequeña demostración**

:::note
  También necesitamos un Grove - Touch Sensor en esta demostración y también conectarlo a D5.
:::

1.Copia el código de abajo al editor de Arduino IDE.

```
/*
  Demo code for grove  atomization.
  Touch to start atomizing.
  Last modified by he
  by xiaohe
*/

// the setup function runs once when you press reset or power the board
void setup() {
    // initialize digital pin 13 as an output.
    pinMode(A5, OUTPUT);// Set A5 as OUTPUT
    pinMode(5, INPUT); // Use digital pin 5 as output port
}

// the loop function runs over and over again forever
void loop() {
    int D2Sig = digitalRead(5);// read pin 5 signal
    if (D2Sig == 1)
    {
        /* code */
        digitalWrite(A5, HIGH);   // atomize
        delay(10000);              // wait for 10 seconds
        digitalWrite(A5, LOW);    // atomization stopped

    }
}
```

2.Coloca un poco de papel tisú en una taza de papel recortada llena de agua, pon el transductor ultrasónico sobre el tisú.

:::note
  El lado inferior es el lado con el hueco que debe quedar hacia abajo. Deja que la parte inferior de la placa del transductor se sumerja en el agua y mantén la parte superior por encima del agua. La función del tisú es conducir agua al transductor y mantener la parte superior del transductor por encima del agua.
:::

3.Sube el código a la placa de control principal.

4.Ahora si tocas el sensor táctil Grove, puedes ver vapor producido.

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

:::caution
  No toques directamente los pines de la interfaz del transductor porque el voltaje de salida pico de la placa secadora puede ser de 65V.
:::

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/High_voltage_warning_600.jpg)

:::caution
  El inductor <span style={{fontWeight: 'bold'}}>L2</span> (marcado en el rectángulo rojo arriba) se calentará. Así que no lo toques directamente.
:::

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - Water Atomization al puerto D2, y conecta Grove - Button al puerto D5 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/cc_Water_Atomization.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
    Cuando el código termine de subirse, la atomización de agua comienza a atomizar cuando presionas el botón.
:::

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Archivos esquemáticos en Eagle](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip)
- [Archivos esquemáticos en PDF](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip)
- [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Grove_Water_Atomization_CDC_File.zip)

## Proyecto

**Humidificador Inteligente** Haz tu habitación cómoda en invierno.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/taifur/smart-humidifier-dac66f/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Water_Atomization -->

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
