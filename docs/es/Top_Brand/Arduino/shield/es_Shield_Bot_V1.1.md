---
description:  Shield Bot V1.1
title:  Shield Bot V1.1
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Shield_Bot_V1.1
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Shield Bot V1.1
category: Arduino
bzurl: https://www.seeedstudio.com/Shield-Bot-p-1380.html
oldwikiname:  Shield Bot V1.1
prodimagename: 4WD_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG
surveyurl: https://www.research.net/r/Shield_Bot_V1-1
sku:  110060010
--- -->
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/shield%20bot.jpg)

Comparado con la versión anterior, el Shield Bot V1.1 puede usar el puerto USB de la PC para cargar la batería. Y la eficiencia de carga se mejora considerablemente después de que optimizamos el circuito. Y puedes usar el pin Vin de Arduino/Seeeduino para carga rápida.

Nota: La placa Arduino compatible no está incluida, prueba el [Seeeduino](/Seeeduino "Seeeduino").

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Shield-Bot-p-1380.html)

## Características

---

* **Fácil de comenzar** - El Shieldbot es plug and play y puede estar funcionando fuera de la caja en minutos

* **Expandible para la imaginación**- los puertos de expansión grove sin soldadura permiten la conexión fácil de más sensores y actuadores, y los headers de shield permiten el uso de shields adicionales de Arduino

* **Código abierto** -  ¡Está diseñado para ser hackeado, adaptado y transformado en lo que quieras que sea!

* **Basado en Arduino** - el Shieldbot es un shield de Arduino, ¡así que la extensa comunidad de Arduino y el ecosistema de shields pueden ser usados para expansión infinita!

* **Eficiencia de carga** - Puede cargarse completamente rápidamente, y tiene una alta eficiencia.

:::note
La nueva versión actualiza la salida de alto voltaje de aproximadamente más de 4.0V a aproximadamente más de 4.5V.
:::

## Especificaciones

---

<table>
  <tr>
    <th>Elemento</th>
    <th>Parámetro</th>
  </tr>
  <tr>
    <td width="200">Sensor</td>
    <td width="300">5x sensores de reflectancia IR para seguimiento de línea y borde</td>
  </tr>
  <tr>
    <td>Batería recargable Li-ion</td>
    <td>900 mAh</td>
  </tr>
  <tr>
    <td>Motorreductor</td>
    <td>Dos motorreductores micro metálicos duraderos 160:1</td>
  </tr>
  <tr>
    <td>Puerto Grove</td>
    <td>6x puertos de expansión Grove</td>
  </tr>
  <tr>
    <td>Header de shield</td>
    <td>Headers de expansión de shield Arduino</td>
  </tr>
</table>

## Especificación de Carga

---
<font color="red">Modo de carga y eficiencia de carga según la siguiente tabla:</font>

<table>
  <tr>
    <th>Modo</th>
    <th>Corriente de Carga(A)</th>
    <th>la potencia de entrada(W)</th>
    <th>Potencia de Carga(W)</th>
    <th>Eficiencia de Carga(%)</th>
    <th>Tiempo de Carga(h)</th>
  </tr>
  <tr>
    <td width="200">Carga USB</td>
    <td width="200">0.396</td>
    <td width="200">3.94</td>
    <td width="200">3.56</td>
    <td width="200">90.36</td>
    <td width="200">2.50</td>
  </tr>
  <tr>
    <td>Carga Vin</td>
    <td>0.7</td>
    <td>6.78</td>
    <td>6.30</td>
    <td>92.92</td>
    <td>1.41</td>
  </tr>
</table>

## Función de la Interfaz

---
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_V1.2_Foto_1.JPG)

* **Interruptor de Alimentación**: Cuando ShieldBot está apagado, el shield bot no puede funcionar. Pero puedes usar el **Puerto de Carga USB** para cargar la batería.

* **Puerto de Carga USB:** USB mini-B, usado para cargar la batería.

* **Puertos Grove:** Los puertos Grove acceden a los pines D0, D1, D2, D3, D4, D5, A4, A5. Puedes conectar módulos Grove a estos puertos Grove.
* **Potenciómetro del Detector de Línea IR**: Usado para ajustar la sensibilidad de los detectores de línea. Ajuste en sentido horario, la sensibilidad aumenta; ajuste en sentido antihorario, la sensibilidad disminuye.

* **Detectores de Línea IR:** S1 a S5. Azul si se detecta una superficie no reflectiva (ej. línea de cinta negra)
* **Interruptor de Habilitación:** Gira el interruptor hacia "ON" para conectar los detectores de línea a los pines I/O (Los pines ocupados son A0,A1,A2,A3,D4) de Arduino. La demostración LineFollowingSimple en la biblioteca usa la señal de salida de los detectores de línea para controlar el funcionamiento del Shield Bot. Si el interruptor está hacia "OFF", Seeeduino/Arduino no puede controlar el Shield Bot a través de la señal de salida de los detectores de línea.

* **Cabeceras de Expansión del Shield de Arduino**: Shield Bot puede realmente apilar otros shields.

:::note

* 1)  Si S5 está habilitado no puedes usar los puertos grove j14 y j13.
* 2) Solo puedes usar UNA de las líneas serie del arduino, puerto grove uart o j11 ya que todos comparten la línea D1/TX.
:::

## Luces de Estado

---
¡El Shield Bot tiene muchos LEDs para mostrarte qué está pasando!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_bot_1.2_LEDs.JPG)

<table>
  <tr>
    <th>Números de Luz</th>
    <th>Función</th>
    <th>Estado</th>
  </tr>
  <tr>
    <td width="200">D22</td>
    <td>Alimentación</td>
    <td>Verde cuando Shieldbot está encendido. Cuando ShieldBot está apagado, ShieldBot solo puede cargar la batería.</td>
  </tr>
  <tr>
    <td>D23 y D24</td>
    <td>Estado de carga</td>
    <td>Rojo significa cargando, verde significa carga completa.</td>
  </tr>
  <tr>
    <td>D18</td>
    <td>Reinicio</td>
    <td>Rojo si se presiona el botón de reinicio.</td>
  </tr>
  <tr>
    <td>D11 y D12</td>
    <td>Indicadores del Motor Derecho</td>
    <td>Verde significa hacia adelante, rojo significa hacia atrás, ambos significa detenido.</td>
  </tr>
  <tr>
    <td>D13 y D15</td>
    <td>Indicadores del Motor Izquierdo</td>
    <td>Verde significa hacia adelante, rojo significa hacia atrás, ambos significa detenido.</td>
  </tr>
  <tr>
    <td>D5 D10 D14 D17 D19</td>
    <td>Indicadores del Sensor de Luz</td>
    <td>Azul si se detecta una superficie no reflectiva (ej. línea de cinta negra).</td>
  </tr>
</table>

## Estructura

---
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Position_for_seeeduino.jpg)

La Parte 1, Parte 2 y Parte 3 están hechas por nuestra impresora 3D. Los dos hubs son iguales. El Diagrama de Impresión se muestra a continuación. ¡Muy mágico!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Print_diagram_1.JPG) ![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/P1018898.JPG)

## Primeros Pasos

---
¡Configurar el Shieldbot es rápido y fácil! Sigue estos pasos para poner en funcionamiento tu compañero robótico.

### El Trabajo Preparatorio

* Primero necesitas conectar Arduino en la parte inferior del Shield Bot y conectarlo a la PC usando un cable USB.

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_Programming2.JPG)

* Es mejor que gires el Interruptor de Habilitación hacia _OFF_ antes de subir el código. De lo contrario, se ejecuta cuando no estás prestando atención y puede asustarte.

¡Hemos construido una bonita librería para el Shield Bot con funciones útiles para controlar tu Shield Bot y varios ejemplos para que puedas ponerlo en funcionamiento en poco tiempo!

* Descarga la librería desde [aquí](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip) y descomprime. Por favor abre el archivo Note.txt antes de usar nuestra Librería.
* Pon el archivo ShieldBot en el archivo libraries del IDE de Arduino por la ruta: ..\arduino-1.0.1\libraries.

### Instalar la batería

La batería es necesaria cuando quieres hacer que el Shield Bot funcione en el suelo.
:::note

* 1) Una vez que la batería esté instalada, puedes cargar la batería con un cable USB mini-b. Cuando la batería se está cargando, un LED rojo se encenderá. Cuando termine de cargarse, un LED verde se iluminará.
* 2) Cuando subas el código, necesitas conectar el puerto usb de tu seeeduino a tu PC. El puerto usb en el shield bot se usa para cargar la batería.
:::

:::note
Porque cambiamos los pines del driver para shield bot v1.1. Así que asegúrate de haber modificado el archivo .cpp para que coincida con tu versión de Shield Bot antes de usar el archivo de Librería Shieldbot. El paso de modificación se describe en Note.txt.
:::

### Demo 1: Hacer funcionar los motores

* Abre el entorno de Arduino y ve a File-&gt;Examples-&gt;Shieldbot-&gt;drive para cargar el primer ejemplo de Shield Bot. Asegúrate de seleccionar la Placa Arduino y Puerto Serie correctos.
* Luego sube el código al Arduino. Una vez que la subida esté completa, la consola debería mostrar "Done Uploading".
* Puedes desconectar el cable usb después de completar la subida.
* Luego pon el Shield Bot en un lugar espacioso y gira el interruptor de encendido a '**ON**'.
* Ahora el Shield Bot funcionará a cierta velocidad.

### Demo 2: Seguir Línea Negra

El Shield Bot puede detectar superficie reflectante basándose en los sensores Line finder (s1,s2,s3,s4,s5). Los indicadores azules se iluminarán si se detecta superficie no reflectante (ej. línea de cinta negra). Ahora usémoslo para hacer que funcione siguiendo la línea negra.<br />
**<font color="red">Nota: Asegúrate de que los interruptores dip estén encendidos, y que ninguno de tus shields esté usando los pines A0,A1,A2,A3 o D4.  </font>**

* Vuelve a subir el nuevo demo: LineFollowingSimple después de conectar Seeeduino a PC usando el cable USB.

* Después de completar la subida. Pon el Shield Bot en la pista negra pre-construida. Entonces aparecerá la pantalla fina:

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_Line_Finder.jpg)

* Puedes ajustar el Potenciómetro IR Line Finder para cambiar la Sensibilidad de los Line Finders. Cuando se ajusta en sentido horario, la Sensibilidad aumenta, ajuste en sentido antihorario, la Sensibilidad disminuye. ¡Inténtalo!

### Instancias de Aplicación

**1. Reloj**

Este es un reloj increíblemente simple y funcional. Las ruedas giran una hacia adelante y una en reversa, haciendo girar los sensores de reflectancia alrededor de la rueda indicando los minutos. En la marca de la hora el bot avanza hacia adelante y hace avanzar el deslizador lineal para indicar las horas. ¡Crédito extra por los rieles lineales gratuitos hechos de desechos cortados con láser y cinta adhesiva transparente!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team1_2.jpg)

**2. Shot.Bot**

Era un dispositivo realmente hermoso que muchas personas en el evento comentaron que les gustaría comprar. El robot seguidor de líneas tomaría pedidos luego conduciría por la pista hasta el dispensador donde usaría un servo para activar una cantidad de cualquiera de 3 bebidas, antes de conducir de vuelta al cliente

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team7_2.jpg)

**3. Simon**

Había un clon de simon cara a cara para 2 jugadores bellamente diseñado, aunque no del todo terminado. El bot reproduce una melodía con luces y usas el disco cortado con láser, completo con braille para que incluso los discapacitados visuales pudieran jugar, para marcar los tonos en la pizarra. El Shieldbot luego avanza hacia adelante y usa los sensores para ver si has marcado correctamente. ¡Quieres obtener más respuestas correctas que tu oponente para que el bot conduzca hacia su objetivo!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team6_2.jpg)

**4. HackPHX-Plotter**

El dispositivo está muy cerca de superar la máquina de dibujo 2d Der Kritzler que es una mesa vertical x,y con makerslide y tuvo la idea ingeniosa de atornillar las llantas del Shield bot de tal manera que cuando se ponía en reversa, levantaba la pluma de la superficie de dibujo :) ¡Incluso trabajaron con el diseñador para crear una interfaz de usuario del lado de la PC!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team8.jpg)

## Referencia

---
Para usar la librería Shield Bot simplemente añade la librería Shield Bot y declara un objeto Shieldbot en la parte superior de tu código Arduino antes de tu void setup()

```
#include <Shieldbot.h> //includes the Shield Bot Library
Shieldbot shieldbot = Shieldbot(); //decares a Shieldbot object
```

**<u>setMaxSpeed(int both)</u>**

*Descripción*: establece la velocidad máxima de ambos motores.
*both*: entre 0 (básicamente apagado) y 255 (velocidad máxima)

**<u>setMaxSpeed(int left, int right)</u>**

*Descripción*: Escribe una velocidad máxima al motor izquierdo y derecho.
*left,right*: Left es la velocidad del motor izquierdo. right es la velocidad del motor derecho. entre 0 (básicamente apagado) y 255 (velocidad máxima)

**<u>rightMotor(char mag)</u>**

*Descripción*: Habilita el motor derecho, negativo para retroceder, positivo para avanzar. Si haces que un motor funcione más lento, girará en esa dirección. Si haces que los motores giren en dirección opuesta, girará sobre sí mismo.
*mag*: la dirección para hacer girar el motor derecho; -128: retroceder completamente, 0: no moverse, 127: avanzar completamente

**<u>leftMotor(char mag)</u>**

*Descripción*: Habilita el motor izquierdo, negativo para retroceder, positivo para avanzar.
*mag*: la dirección para hacer girar el motor izquierdo; -128: retroceder completamente, 0: no moverse, 127: avanzar completamente

**<u>forward()</u>**

*Descripción*: Habilita los motores para enviar el bot directamente hacia adelante a la setSpeed().

**<u>backward()</u>**

*Descripción*: Habilita los motores para enviar el bot directamente hacia atrás a la setSpeed().

**<u>drive(char left, char right)</u>**

*Descripción*: Llamada de manejo de propósito general. Llama a leftMotor y rightMotor directamente.
*left*: entre -128 (motor izquierdo hacia atrás 100% de velocidad máxima), 0 (parado), y 127 (motor izquierdo hacia adelante 100% de velocidad máxima)
*right*: entre -128 (motor derecho hacia atrás 100% de velocidad máxima), 0 (parado), y 127 (motor derecho hacia adelante 100% de velocidad máxima)

**<u>stop()</u>**

*Descripción*: Deshabilita los motores. También puedes usar drive(0,0).

**<u>stopLeft()</u>**

*Descripción*: Deshabilita el motor izquierdo. También puedes usar drive(0,X).

**<u>stopRight()</u>**

*Descripción*: Deshabilita el motor derecho. También puedes usar drive(X,0).

**<u>fastStop()</u>**

*Descripción*: Deshabilita el motor derecho. También puedes usar drive(X,0).

**<u>fastStopLeft()</u>**

*Descripción*: Deshabilita el motor izquierdo más rápidamente. Esto se considera posiblemente malo para el chip del motor, así que úsalo a tu discreción

**<u>fastStopRight()</u>**

*Descripción*: Deshabilita el motor derecho más rápidamente. Esto se considera posiblemente malo para el chip del motor, así que úsalo a tu discreción

**<u>readS1(), readS2(), readS3(), readS4(), readS5()</u>**

*Descripción*: Lee cualquiera de los 5 sensores de luz a bordo. NOTA: NECESITAS conectar los sensores a los puertos de arduino usando el bloque de interruptores dip (interruptores HACIA los números y texto ON) Estos interruptores de otra manera te permitirían usar esos pines para otras cosas si no quisieras usar tus sensores de luz
*Retorna*: LOW si la superficie refleja (ej. blanco) y HIGH si la superficie no refleja nada (ej NEGRO)

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_driveLibrary.png)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Biblioteca Shield Bot](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip)

* [Archivos Eagle de Shield Bot](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip)

* [Esquemático ShieldBot](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ShieldBotv0.9b_Schematic.pdf)

* [Hoja de datos RPR-220](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/RPR-220.pdf) Sensor de Reflectancia IR

* [Hoja de datos ISL97516](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ISL97516.pdf) Regulador elevador

* [Hoja de datos BQ2057](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/BQ2057.pdf) Cargador Li-ion

* [Hoja de datos L298](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/L298.pdf) Controlador de Motor Puente H

* [Hoja de datos 358](http://www.ti.com/product/lmv358) Op-Amp como comparador para sensores de reflectancia

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
