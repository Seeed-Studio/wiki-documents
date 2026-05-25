---
description: Grove_Inventor_Kit_for_microbit
title: Kit de Inventor Grove para micro:bit
tags:
  - micro_bit
keywords:
  - micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Inventor_Kit_for_microbit
sku: 103100063, 103030195, 110060762
last_update:
  date: 01/05/2022
  author: Eico
no_comments: false
createdAt: '2023-01-10'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/es/Grove_Inventor_Kit_for_microbit/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/zoro_im_kitbox.jpg" alt="pir" width={600} height="auto" /></p>

La BBC micro:bit es un ordenador de bolsillo que puede hacer realidad fácilmente tu creatividad sin muchos conocimientos de electricidad y programación. Hay numerosas posibilidades de creación que puedes descubrir con la micro:bit, desde robots hasta instrumentos musicales. Sin embargo, si quieres crear más cosas, solo 1 micro:bit no es suficiente, por eso te presentamos el Kit de Inventor Grove para micro:bit.

El Kit de Inventor Grove para Micro:bit aporta infinitas posibilidades a tu micro:bit. La placa principal de este kit es el Grove Shield para micro:bit, con el cual puedes usar multitud de módulos Grove, incluidos sensores, pantallas y actuadores para interactuar con la micro:bit. Si nunca has usado y no tienes idea de qué es Grove, aquí tienes la introducción de Grove. Todo lo que necesitas saber es que con Grove, ya no hay necesidad de soldar ni de usar cables de puente. Tu creación de prototipos será más fácil y mucho más conveniente.

Ya hemos preparado 8 módulos Grove para que empieces con micro:bit. Con estos módulos Grove, puedes medir distancia y mostrarla, usar gestos para reproducir diferentes músicas o hacer un guardia inteligente para tu escritorio o habitación. Hemos preparado todas las bibliotecas (paquetes) necesarias para su descarga gratuita. Si eres principiante con micro:bit, no te preocupes porque también hemos preparado 12 proyectos diferentes que pueden enseñarte paso a paso. Si eres un usuario avanzado, este kit te ayudará a realizar proyectos más creativos que otros.

:::note

El voltaje de salida de la micro:bit es de alrededor de 3,0 V, usar la micro:bit o una batería AA para alimentar el circuito puede causar un mal funcionamiento de los módulos Grove que requieren un voltaje de entrada y una corriente de accionamiento altos (por ejemplo, Grove - Ultrasonic Ranger). Para que este tipo de Grove funcione bien, utiliza el puerto micro-USB del Grove shield para micro:bit para alimentar el circuito.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro%3Abit-p-2891.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Shield de expansión genial con periféricos ricos y convenientes;
- 10 módulos Grove bien seleccionados para trabajar con micro:bit;
- 12 proyectos increíbles para que puedas empezar rápidamente;
- Instrucciones bien documentadas.

## Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/first_im.jpg" alt="pir" width={600} height="auto" /></p>

### **Lista de piezas**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre de la pieza</h3></td>
    <td><h3>Cantidad</h3></td>
  </tr>
  <tr>
    <td><h4>Grove Shield para micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Rotary Angle Sensor(P)</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove - Speaker </h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Light Sensor v1.2</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - WS2812 Waterproof LED Strip - 30 LEDs 1 meter</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Red LED</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cable Micro USB - 48cm</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Manual de 12 proyectos</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cable con pinzas de cocodrilo</h4></td>
    <td><h4>10</h4></td>
  </tr>
  <tr>
    <td><h4>Cable Grove</h4></td>
    <td><h4>7</h4></td>
  </tr>
  </tbody></table>

## Primeros pasos

### Fundamentos con Micro:bit

Necesitas conocer algunos conceptos esenciales si es la primera vez que trabajas con Micro:bit. Puedes hacer clic [**aquí**](https://microbit.org/code/) para ver más sobre Micro:bit.

Micro:bit ofrece dos tipos de editor: JavaScript Block Editor y Python Editor. JavaScript Block Editor admite programación gráfica, es fácil de aprender. Así que este tutorial se basa en JavaScript Block Editor.

Aquí hay dos pasos sencillos antes de disfrutar nuestro kit, después de eso podemos empezar a programar.

#### Paso 1. Abre el Editor

Haz clic para abrir el **[JavaScript Block Editor](https://makecode.microbit.org/)**, y verás una web de programación gráfica.

#### Paso 2. Añade el paquete Grove

- Haz clic en el engranaje en la esquina superior derecha > selecciona **Add Package**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-1.png" alt="pir" width={800} height="auto" /></p>

- Introduce la URL del proyecto: **github.com/seeed-studio/pxt-grove**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-2.png" alt="pir" width={800} height="auto" /></p>

- Ahora puedes encontrar **Grove** en la barra de herramientas.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-3.png" alt="pir" width={800} height="auto" /></p>

### Demo 1. Reconocimiento de gestos

El sensor de gestos puede reconocer 9 gestos diferentes, en esta demo aprenderás cómo mostrar el nombre del gesto reconocido
en la micro:bit.

#### Lista de piezas

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre de la pieza</h3></td>
    <td><h4>Número</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
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
    <td><h4>Cable Grove Universal de 4 pines</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cable Micro-USB</h4></td>
    <td><h4>1</h4></td>
  </tr>

  </tbody></table>

#### Conexión

- Inserta la **micro:bit** en el **Grove Shield para micro:bit**.
- Conecta el Grove-Gesture al puerto **I2C** de la micro:bit mediante un cable Grove Universal de 4 pines.
- Conecta la micro:bit al PC mediante un cable Micro-USB.

:::warning

asegúrate de que la matriz de LED esté hacia arriba cuando conectes la micro:bit, o podrías dañar la placa.

:::

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Gesture%20Recognition.png" alt="pir" width={600} height="auto" /></p>

#### Software

- Paso 1:

  Añade el bloque On Gesture
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-1.png" alt="pir" width={600} height="auto" /></p>

- Paso 2:

  Selecciona Right, de modo que el sensor pueda reconocer cuando mueves tu mano de derecha a izquierda.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-2.png" alt="pir" width={600} height="auto" /></p>

- Paso 3:

  Añade el bloque básico **show string** e insértalo en el bloque Gesture. Luego haz doble clic en "Hello!", cámbialo a "Right".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-3.png" alt="pir" width={600} height="auto" /></p>

- Paso 4:

  Añade "Left" y "Clockwise" de la misma manera, e inserta **show icon** en "Clockwise".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-4.png" alt="pir" width={600} height="auto" /></p>

- Paso 5:

  Cuando termines todo lo anterior, renombra el proyecto como "gesture". Entonces podrás descargar el proyecto a tu placa. Haz clic en **Download** en la esquina inferior izquierda, descarga el archivo **microbit-gesture.hex** en la memoria flash de MICROBIT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-5.png" alt="pir" width={600} height="auto" /></p>

  Ahora disfruta tu proyecto.

:::tip
  Puedes encontrar los bloques por color. Por ejemplo, si no sabes dónde está **show icon**, como es azul y el módulo **Basic** es azul, puedes encontrarlo allí. Simple y efectivo, ¿verdad?
:::

### Demo 2. Medidor ultrasónico

En esta demo, aprenderás cómo usar el sensor ultrasónico para medir distancia y mostrar el valor en una
pantalla.

#### Lista de piezas

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre de la pieza</h3></td>
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
    <td><h4>Cable Grove Universal de 4 pines</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>Cable Micro-USB</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

#### Conexión

- Inserta la **micro:bit** en el **Grove Shield para micro:bit**.

:::warning
asegúrate de que la matriz de LED esté hacia arriba cuando conectes la micro:bit, o podrías dañar la placa.
:::

- Conecta el Grove-Ultrasonic Ranger al puerto **P0/P14** de la micro:bit mediante un cable Grove Universal de 4 pines.
- Conecta el Grove-4-Digit Display al puerto **P1/P15** de la micro:bit mediante un cable Grove Universal de 4 pines.
- Conecta la micro:bit al PC mediante un cable Micro-USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Ultrasonic_Meter.png" alt="pir" width={600} height="auto" /></p>

#### software

- Paso 1:

  Añade el bloque básico **on start**, luego añade bloques de variable **set item to 0**, cambia el nombre de ‘items’ a ‘Display’. Si has añadido correctamente el paquete Grove, reemplaza “0” con el bloque Grove 4-Digit Display en P1 y P15.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-2.png" alt="pir" width={600} height="auto" /></p>

- Paso 2:

  Añade el bloque básico forever, luego añade el bloque Grove item show number 0, cambia el nombre de ‘item’ a ‘Display’, sustituye ‘0’ por el bloque Grove Ultrasonic Sensor (in cm) at P0.

- Paso 3:

  Añade el bloque básico pause (ms) (100).
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-3.png" alt="pir" width={600} height="auto" /></p>

- Paso 4:

  Cambia el nombre del proyecto a "Ultrasonic Meter", descárgalo y disfrútalo.

## Visor de esquemas en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

  [**Manual de usuario del Grove Inventor Kit para micro:bit**](https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/res/Guide_Grove_kit_for_microbit.pdf)

  [**Videos de introducción a micro:bit**](http://microbit.org/start/)

  [**Acerca de micro:bit**](http://microbit.org/about/)

  [**Hardware de micro:bit**](http://microbit.org/guide/hardware/)

  [**Aplicaciones de micro:bit**](http://microbit.org/code/)

  [**Proyecto eagle de Grove Shield para micro:bit**](https://files.seeedstudio.com/products/103100063/Res/Grove_Shield_for_microbit_v2.2_SCH-PCB_220406.zip)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
