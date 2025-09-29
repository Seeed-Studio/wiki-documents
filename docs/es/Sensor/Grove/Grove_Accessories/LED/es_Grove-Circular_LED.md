---
description: Grove - LED Circular
title: Grove - LED Circular
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Circular_LED
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED.jpg" alt="pir" width={600} height="auto" /></p>

Este es un anillo único: tiene un cuerpo florido con 24 LEDs controlables. ¡Tal vez despierte tu inspiración para hacer un anillo mágico brillante! Hay un hueco cuadrado de 1*1 en el medio de este módulo, donde puedes colocar un Encoder Grove y convertirlo en un codificador visual rotativo.

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)

## Características

---
- Forma circular
- 24 LEDs, aproximadamente 5.5 mA de corriente de manejo para cada canal.
- LEDs controlables con efectos floridos
- Interfaz Grove.

## Esquemático

---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_schmatic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_schmatic.jpg" alt="pir" width={600} height="auto" /></p>

## Especificaciones

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Elemento</th>
<th scope="col"> Mín</th>
<th scope="col"> Típico</th>
<th scope="col"> Máx</th>
<th scope="col"> Unidad</th>
</tr>
<tr>
<th scope="row"> Voltaje</th>
<td> 4.5</td>
<td> 5</td>
<td> 5.5</td>
<td> VDC</td>
</tr>
<tr>
<th scope="row"> Corriente</th>
<td> /</td>
<td> 5.5 para cada LED</td>
<td></td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> Dimensión</th>
<td colspan="3"> Forma de Anillo: 4.5 de diámetro</td>
<td> cm</td>
</tr>
<tr>
<th scope="row"> Peso Neto</th>
<td colspan="3"> 12</td>
<td> g</td>
</tr>
</table>

## Interfaz

---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_Interface.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_Interface.jpg" alt="pir" width={600} height="auto" /></p>

## Primeros Pasos

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield |Grove - Circular LED|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_S.jpg" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

### Conexión de Hardware

- **Paso 1.** Conecta el Grove - Circular LED con el puerto **D6** del Base Shield.

- **Paso 2.** Conecta Grove - Base Shield en Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Circular LED a Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Circular LED |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| D7           | Blanco                   |
| D6           | Amarillo                  |

### Software

:::note
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la [Librería Grove - LED Bar](https://github.com/Seeed-Studio/Grove_LED_Bar) desde Github.
- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- **Paso 3.** Abre **Arduino IDE -> File -> Examples -> Grove_LED_Bar -> BasicControl**
- **Paso 4.** Descomenta **define MY9221_LED_NUM 24** y comenta **#define MY9221_LED_NUM 10** como se muestra a continuación.

```
//#define MY9221_LED_NUM 10
#define MY9221_LED_NUM 24
```

- **Paso 5.** Sube el ejemplo a Arduino. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).
- **Paso 6.** Puedes ver que el led se ejecuta desde .C, 23 y AB repetidamente.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Circular LED al puerto D5 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/cc_Circular_LED.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/cc_Circular_LED.png" alt="pir" width={600} height="auto" /></p>

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, verás el LED ejecutarse en círculo.
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove-circular_LED_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Fuente

---

- [Librería CircularLED](https://github.com/Seeed-Studio/Grove_LED_Bar)

- [Archivo PDF de esquemáticos del Grove Circular LED](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Circular_LED_v0.9b.pdf)

- [Archivos eagle del Grove-circular LED](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove-circular_LED_eagle_files.zip)

- [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove_Circular_LED_CDC_File.zip)

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
