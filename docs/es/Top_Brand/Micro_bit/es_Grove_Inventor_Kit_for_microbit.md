---
description: Grove_Inventor_Kit_for_microbit
title: Kit Inventor Grove para micro:bit
tags:
  - micro_bit
keywords:
  - micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Inventor_Kit_for_microbit
last_update:
  date: 01/05/2022 
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/zoro_im_kitbox.jpg" alt="pir" width={600} height="auto" /></p>

El BBC micro:bit es una computadora de bolsillo que puede realizar fácilmente tu creatividad sin mucho conocimiento eléctrico y de codificación. Hay numerosas posibilidades de creación que puedes descubrir con micro:bit, desde robots hasta instrumentos musicales. Sin embargo, si quieres crear más cosas, solo 1 micro:bit apenas es suficiente. Por eso te presentamos el Kit Inventor Grove para micro:bit.

El Kit Inventor Grove para Micro:bit trae infinitas posibilidades a tu micro:bit. La placa principal en este kit es el shield Grove para micro:bit, con el cual puedes usar una gran cantidad de módulos Grove incluyendo sensores, pantallas, actuadores para interactuar con micro:bit. Si nunca has usado y no tienes idea de qué es grove, aquí está la introducción de Grove. Todo lo que necesitas saber es que con Grove, ya no hay necesidad de soldadura o cables de puente. Tu prototipado será más fácil y mucho más conveniente.

Ya hemos preparado 8 módulos grove para que puedas comenzar con micro:bit. Con estos módulos grove, puedes medir distancia y mostrarla, usar gestos para reproducir diferentes música, o hacer un guardián inteligente para tu escritorio o habitación. Hemos preparado todas las librerías necesarias (paquetes) para descarga gratuita. Si eres principiante con micro:bit, no te preocupes porque también hemos preparado 12 proyectos diferentes que pueden enseñarte paso a paso. Si eres un usuario avanzado, este kit te ayudará con proyectos más creativos que otros.

:::note

El voltaje de salida del micro:bit es alrededor de 3.0V, usar microbit o batería AA para alimentar el circuito puede causar mal funcionamiento de los módulos Grove que requieren alto voltaje de entrada y corriente de manejo (ej. Grove - Ultrasonic Ranger). Para hacer que este tipo de Grove funcione bien, por favor usa el puerto micro-USB en el shield Grove para microbit para alimentar el circuito.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro%3Abit-p-2891.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Shield de extensión genial con periféricos ricos y convenientes;
- 10 módulos Grove bien seleccionados para trabajar con micro:bit;
- 12 proyectos increíbles para que puedas comenzar rápidamente;
- Instrucciones bien documentadas.

## Descripción del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/first_im.jpg" alt="pir" width={600} height="auto" /></p>

### **Lista de partes**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre de la parte</h3></td>
    <td><h3>Cantidad</h3></td>
  </tr>
  <tr>
    <td><h4>Shield Grove para micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Sensor de Ángulo Rotatorio(P)</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove - Altavoz </h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Sensor Ultrasónico</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Sensor de Luz v1.2</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Tira LED Impermeable WS2812 - 30 LEDs 1 metro</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesto</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Pantalla de 4 Dígitos</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - LED Rojo</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cable Micro USB - 48cm</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Manual de 12 Proyectos</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cable Caimán</h4></td>
    <td><h4>10</h4></td>
  </tr>
  <tr>
    <td><h4>Cable Grove</h4></td>
    <td><h4>7</h4></td>
  </tr>
  </tbody></table>

## Comenzando

### Fundamentos con Micro:bit

Necesitas conocer algunos conocimientos esenciales si es la primera vez que te involucras con Micro:bit. Puedes hacer clic [**aquí**](https://microbit.org/code/) para ver más sobre Micro:bit.

Micro:bit ofrece dos tipos de editor - Editor de Bloques JavaScript y Editor de Python. El Editor de Bloques JavaScript soporta programación gráfica, es fácil de aprender. Así que este Tutorial está basado en el Editor de Bloques JavaScript.

Aquí hay dos pasos simples antes de que disfrutes nuestro kit, después de eso podemos empezar a programar.

#### Paso1.Abrir el Editor

Por favor haz clic para abrir el **[Editor de Bloques JavaScript](https://makecode.microbit.org/)** , y verás una web de programación gráfica.

#### Paso2.Añadir el Paquete Grove

- Haz clic en el engranaje en la esquina superior derecha > selecciona **Add Package**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-1.png" alt="pir" width={800} height="auto" /></p>

- Introduce la URL del proyecto: **github.com/seeed-studio/pxt-grove**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-2.png" alt="pir" width={800} height="auto" /></p>

- Ahora puedes encontrar **Grove**  en la barra de herramientas.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-3.png" alt="pir" width={800} height="auto" /></p>

### Demo 1. Reconocimiento de Gestos

El sensor de gestos puede reconocer 9 gestos diferentes, en esta demo, aprenderás cómo mostrar el nombre del
gesto reconocido en micro:bit.

#### Lista de partes

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre de la parte</h3></td>
    <td><h4>Número</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Universal 4 pin cable</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cable Micro-USB</h4></td>
    <td><h4>1</h4></td>
  </tr>
  
  </tbody></table>

#### Conexión

- Conecta el **micro:bit** al **Grove Shield para micro:bit**.
- Conecta el Grove-Gesture al puerto **I2C** del micro:bit mediante un cable universal Grove de 4 pines.
- Conecta el micro:bit a la PC mediante un cable Micro-USB.

:::warning

por favor asegúrate de que el Array LED esté orientado hacia arriba cuando conectes el micro:bit, o podrías dañar la placa.

:::

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Gesture%20Recognition.png" alt="pir" width={600} height="auto" /></p>

#### Software

- Paso 1:

  Añadir Bloque On Gesture
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-1.png" alt="pir" width={600} height="auto" /></p>

- Paso 2:

  Selecciona Right, para que el sensor pueda reconocer cuando muevas tu mano de derecha a izquierda.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-2.png" alt="pir" width={600} height="auto" /></p>

- Paso 3:

  Añade el bloque Basic **show string** e incrústalo en el bloque Gesture. Luego haz doble clic en "Hello!", cámbialo a "Right".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-3.png" alt="pir" width={600} height="auto" /></p>

- Paso 4:

  Añade "Left" y "Clockwise" de la misma manera, e incrusta **show icon** en "Clockwise".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-4.png" alt="pir" width={600} height="auto" /></p>

- Paso 5:

  Cuando hayas terminado todo lo anterior, renombra el proyecto "gesture". Luego puedes descargar el proyecto a tu placa. Haz clic en **Download** en la esquina inferior izquierda, descarga el archivo **microbit-gesture.hex** en la memoria flash del MICROBIT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-5.png" alt="pir" width={600} height="auto" /></p>

  Ahora disfruta de tu proyecto.

:::tip
  Puedes encontrar los bloques por color. Por ejemplo, si no sabes dónde está **show icon**, como es azul y el Módulo **Basic** es azul, puedes encontrarlo aquí. Simple y efectivo, ¿no es así?
:::

### Demo 2. Medidor Ultrasónico

En esta demostración, aprenderás cómo usar el sensor ultrasónico para medir distancia y mostrar el valor en una
pantalla.

#### Lista de partes

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre de la parte</h3></td>
    <td><h4>Número</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove Shield para micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cable universal Grove de 4 pines</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>Cable Micro-USB</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

#### Conexión

- Conecta el **micro:bit** al **Grove Shield para micro:bit**.

:::warning
por favor asegúrate de que el Array LED esté orientado hacia arriba cuando conectes el micro:bit, o podrías dañar la placa.
:::

- Conecta el Grove-Ultrasonic Ranger al Puerto **P0/P14** del micro:bit mediante un cable Grove Universal de 4 pines.
- Conecta el Grove-4-Digit Display al Puerto **P1/P15** del micro:bit mediante un cable Grove Universal de 4 pines.
- Conecta el micro:bit a la PC mediante un cable Micro-USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Ultrasonic_Meter.png" alt="pir" width={600} height="auto" /></p>

#### software

- Paso1:

  Añade el bloque básico **on start**, luego añade bloques de variable **set item to 0**, renombra 'items' a 'Display'. Si has añadido exitosamente el paquete Grove, reemplaza "0" con el bloque Grove 4-Digit Display en P1 y P15.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-2.png" alt="pir" width={600} height="auto" /></p>

- Paso2:

  Añade el bloque básico forever, luego añade el bloque Grove item show number 0, renombra 'item' a 'Display', reemplaza '0' con el bloque Grove Ultrasonic Sensor (in cm) en P0.

- Paso3:

  Añade el bloque básico pause (ms) (100).
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-3.png" alt="pir" width={600} height="auto" /></p>

- Paso4:

  Renombra el proyecto "Ultrasonic Meter", descarga y disfruta.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

  [**Manual de Usuario del Grove Inventor Kit para micro:bit**](https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/res/Guide_Grove_kit_for_microbit.pdf)

  [**Videos de Introducción a micro:bit**](http://microbit.org/start/)

  [**Acerca de micro:bit**](http://microbit.org/about/)

  [**Hardware de micro:bit**](http://microbit.org/guide/hardware/)

  [**Aplicaciones de micro:bit**](http://microbit.org/code/)

  [**Grove Shield para microbit_eagle file.zip**](https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip)

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
