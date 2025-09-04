---
description: Grove - Codificador de Ratón
title: Grove - Codificador de Ratón
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Mouse_Encoder
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Codificador de Ratón es un tipo de codificador rotativo incremental mecánico con datos de retroalimentación de dirección rotativa y velocidad rotativa<sup>\[1\]</sup>. Cuenta con interfaz Grove estándar que te ahorrará mucho trabajo en cableado y programación. Además, está bien adaptado para trabajo pesado y un entorno hostil. Este producto puede aplicarse en juguetes, robots y dispositivos de entrada para el consumidor.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-%E2%80%93-Mouse-Encoder-p-2607.html)

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  La velocidad de rotación está diseñada para ser menor a 1000 rad/min (radianes por minuto).
</div>


Características
--------

-   Versátil para diferentes entornos.
-   Bien adaptado para trabajo pesado y entorno hostil.
-   Con detentes y una sensación agradable.
-   Interfaz Grove estándar para programación y cableado más fáciles.
-   Preciso y confiable.

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Aplicaciones
------------

Es versátil para diferentes aplicaciones en entornos hostiles como juguetes, robótica y dispositivos de entrada para el consumidor.

Especificaciones
--------------

| Elemento                         | Mín. | Típico  | Máx. |
|----------------------------------|------|---------|------|
| Voltaje de operación(V)          |      | 3.3     | 5.5  |
| Corriente de operación(mA)       |      | 10      | 13   |
| Ciclo de trabajo(velocidad constante) |      | 50%     |      |
| Diferencia de fase(velocidad constante) |      | π/4     |      |
| Pulsos por círculo               |      | 12      |      |

<div className="admonition note">
  <p className="admonition-title">Notas</p>
  <ol>
    <li>No se incluye perilla en la lista de productos. Porque creemos que esto hará que este codificador sea más versátil para diferentes entornos.</li>
    <li>Puedes encontrar el archivo de <a href="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove-Mouse_Encoder_Dimensions.pdf">dimensiones</a> en formato PDF, y puedes personalizar una perilla según las dimensiones.</li>
    <ol></ol>
  </ol>
</div>

<div className="admonition tip">
  <p className="admonition-title">Consejo</p>
  Puedes simplemente usar una punta de destornillador hexagonal adecuada si solo estás construyendo un prototipo para tu proyecto.
</div>


Descripción General del Hardware
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg" alt="pir" width={600} height="auto" /></p>

**Interfaz Grove**   
Conecta la placa de control principal como la placa **Seeeduino** con la placa controladora.

**Abertura hexagonal**   
Una abertura por la que pasas una perilla.

### **Lista de partes**

| Nombre de las partes                     | Cantidad |
|------------------------------------------|----------|
| Grove - Mouse Encoder(sin perilla incluida) | 1 PC     |
| Grove - Cable Universal                  | 1 PC     |

Comenzar
-----------

Esta sección te mostrará cómo construir un entorno IDE para crear aplicaciones con Grove - Mouse Encoder.

<!-- 图有问题 Refer to [Seeeduino V4.2](/es/Seeeduino_v4.2#Getting_Started_on_Windows)(It is exchangeable with Arduino board) for how to build a complete an IDE for your applications, or read [Arduino guide](https://www.arduino.cc/en/Guide/HomePage) if you use Arduino original board. -->

<div className="admonition note">
  <p className="admonition-title">Notas</p>
  <ol><li>El ciclo de trabajo será mayor si la velocidad de rotación es lenta.</li>
    <li>El ancho de pulso (PW) no será el mismo si la velocidad de rotación no es constante.</li>
    <li>Se supone que la velocidad de rotación debe ser menor a 1000 rad/min o causará un PW de salida estrecho o daño a este encoder.</li>
    <li>El voltaje de salida será incierto (voltaje alto o bajo) en circunstancias sin rotación ya que la posición del pulso dentro de este encoder no es cierta.</li></ol>
</div>


### Demo básico

Este demo muestra cómo detectar posición y detectar dirección.

#### Material requerido

-   Seeeduino V4.2
-   Base shield V2.0
-   Cable USB (tipo A a micro tipo B)

#### Conexiones

Conecta los materiales como se muestra a continuación:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg)  -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Código

```
/* Read Quadrature Encoder
* Connect Encoder to Pins encoder0PinA, encoder0PinB, and +5V.
*
* Sketch by max wolf / www.meso.net
* v. 0.1 - very basic functions - mw 20061220
*
*/  
 
 
int val; 
int encoder0PinA = 3;
int encoder0PinB = 4;
int encoder0Pos = 0;
int encoder0PinALast = LOW;
int n = LOW;
 
void setup() { 
    pinMode (encoder0PinA,INPUT);
    pinMode (encoder0PinB,INPUT);
    Serial.begin (115200);
} 
 
void loop() { 
    n = digitalRead(encoder0PinA);
    if ((encoder0PinALast == LOW) && (n == HIGH)) {
        if (digitalRead(encoder0PinB) == LOW) {
            encoder0Pos--;
        } else {
            encoder0Pos++;
        }
        Serial.println(encoder0Pos);
        Serial.println ("/");
    } 
    encoder0PinALast = n;
}
```

1.  Copia el código y grábalo en la placa controladora.
2.  Abre la ventana del monitor.
3.  Gira la punta del destornillador hacia la izquierda o izquierda para ver qué sucederá.

La salida:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png" alt="pir" width={600} height="auto" /></p>


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
---------

- [Archivos de esquemático](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mouser_Encoder -->

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
