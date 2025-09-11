---
description: RS232_Shield
title: RS232 Shield

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RS232_Shield
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_Photo.jpg" alt="pir" width={600} height="auto" /></p>

RS232 Shield es un puerto de comunicación estándar para equipos industriales. Este módulo está basado en MAX232, que es un controlador/receptor dual que incluye un generador de voltaje capacitivo para suministrar niveles de voltaje TIA/EIA-232-F desde una sola fuente de alimentación de 5V. El shield integra conectores DB9 (hembra) que proporcionan conexión a varios dispositivos con interfaz RS232. También los headers RS232 facilitarán sus conexiones y puesta en marcha. Proporciona áreas de soldadura para hacer pleno uso del espacio extra en él, lo cual es altamente conveniente para prototipos.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS232-Shield-p-1910.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificaciones
-------------

-   Cumple o Excede TIA/EIA-232-F e ITU
-   Opera Hasta 120 kbit/s
-   Baja Corriente de Alimentación
-   Indicador LED
-   Conectores DB9 (hembra)
-   Áreas de Soldadura


## Función de la Interfaz
------------------

**Uso**

Primero, podemos probarlo por computadora.

### Instalación de Hardware

1. Seeeduino v3.0, Cable Mini USB, RS232 Shield, Cable RS232 a USB.
2. Haga las conexiones como se muestra abajo. Los puentes pueden usarse para seleccionar el puerto serie por software desde los pines digitales. Puede configurarlos a D7(232_TX) y D6(232_RX), y modificar el código a "*SoftwareSerial mySerial(7, 6); // 232_TX, 232_RX*"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage.jpg" alt="pir" width={600} height="auto" /></p>

### Parte de Software

-   1) Abra Arduino IDE, y pegue el código de abajo.

```cpp
 
#include <SoftwareSerial.h>
 
SoftwareSerial mySerial(7, 6); //232_TX,232_RX
 
void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }
 
 
    Serial.println("Goodnight moon!");
 
    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    mySerial.println("Hello, world?");
}
 
void loop() // run over and over
{
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

-   2) Suba el código. Note que debe seleccionar el tipo de placa correcto y el puerto COM.
-   3) Abra el Monitor Serie.

Puede ver:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage1.jpg" alt="pir" width={600} height="auto" /></p>


<div>
  ## Visor de Esquemático en Línea
  <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
  </div>
</div>


Recursos
--------

-   [Archivo eagle de RS232 Shield](https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip)
-   [RS232_Shield_v1.0.pdf](https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.pdf)
-   [Hoja de datos MAX232D.pdf](https://files.seeedstudio.com/wiki/RS232_Shield/res/MAX232D.pdf)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/RS232_Shield -->

## Soporte Técnico y Discusión del Producto
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>