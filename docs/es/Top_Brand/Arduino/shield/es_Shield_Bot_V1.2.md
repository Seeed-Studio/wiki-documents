---
description: Shield Bot V1.2
title: Shield Bot V1.2
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Shield_Bot_V1.2
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Shield Bot V1.2
category: Arduino
bzurl: https://www.seeedstudio.com/Shield-Bot-p-1380.html
oldwikiname: Shield_Bot_V1.2
prodimagename: Shield_Bot_Kit_Product_Image.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/shield bot.jpg
surveyurl: https://www.research.net/r/Shield_Bot_V1_2
sku: 110060010
--- -->

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Kit_Product_Image.jpg)

Shield Bot es una plataforma robótica de nivel de entrada fácil de usar que te ayuda a saltar a la Robótica. Podrías construir un robot seguidor de líneas en pocos minutos usando la biblioteca y el sketch proporcionados.

Comparado con la versión anterior, el Shield Bot V1.2 no ha cambiado mucho.
:::note
La placa Arduino compatible no está incluida, consigue un Seeeduino o Arduino.
:::

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Shield-Bot-p-1380.html)

Características
---------------

- **Fácil de comenzar** - El Shieldbot es plug & play. Puede funcionar fuera de la caja en minutos
- **Expandible para la imaginación** - Los puertos de expansión Grove sin soldadura permiten la conexión fácil de más sensores y actuadores. Los headers del Shield permiten el uso de cualquier shield adicional de Arduino
- **Código abierto** - ¡Está diseñado para ser hackeado, adaptado y transformado en lo que quieras que sea!
- **Basado en Arduino** - El Shieldbot es un shield de Arduino. ¡La extensa comunidad de Arduino y el ecosistema de shields puede ser usado para expansión infinita!
- **Eficiencia de carga** - Puede cargarse completamente rápidamente. Tiene una alta eficiencia.

Especificaciones
----------------

### Especificación General

| Elemento                    | Parámetro                                             |
|-----------------------------|-------------------------------------------------------|
| Sensor                      | 5x sensores de reflectancia IR para seguimiento de líneas y bordes |
| Batería recargable Li-ion   | 900 mAh                                               |
| Gearmotor                   | Dos Gearmotores micro metálicos duraderos 160:1      |
| Puerto Grove                | 6x puertos de expansión Grove                        |
| Header del shield           | Headers de Expansión de Shield Arduino                |

### Especificación de Carga

**Modo de carga y eficiencia de carga según la siguiente tabla:**

| Modo       | Corriente de Carga(A) | la potencia de entrada(W) | Potencia de Carga(W) | Eficiencia de Carga(%) | Tiempo de Carga(h) |
|------------|----------------------|---------------------------|----------------------|------------------------|-------------------|
| Carga USB  | 0.396                | 3.94                      | 3.56                 | 90.36                  | 2.50              |
| Carga Vin  | 0.7                  | 6.78                      | 6.30                 | 92.92                  | 1.41              |

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_V1.2_Foto_1.JPG)

- **Interruptor de Alimentación**: Cuando ShieldBot está apagado, el shield bot no puede funcionar. Pero puedes usar el **Puerto de Carga USB** para cargar la batería.
- **Puerto de Carga USB:** USB mini-B, usado para cargar la batería.
- **Puertos Grove:** Los puertos Grove acceden a los pines D0, D1, D2, D3, D4, D5, A4, A5. Puedes conectar módulos Grove a estos puertos Grove.
- **Potenciómetro del Detector de Línea IR**: Usado para ajustar la sensibilidad de los detectores de línea. Ajuste en sentido horario, la sensibilidad aumenta; ajuste en sentido antihorario, la sensibilidad disminuye.
- **Detectores de Línea IR:** S1 a S5. Azul si se detecta una superficie no reflectiva (ej. línea de cinta negra)
- **Interruptor del Detector de Línea:** Gira el interruptor hacia "ON" para conectar los detectores de línea a los pines I/O (Los pines ocupados son A0,A1,A2,A3,D4) de Arduino. La demostración LineFollowingSimple en la biblioteca usa la señal de salida de los detectores de línea para controlar el funcionamiento del Shield Bot. Si el interruptor está hacia "OFF", Seeeduino/Arduino no puede controlar Shield Bot a través de la señal de salida de los detectores de línea.
- **Cabeceras de Expansión del Shield de Arduino**: Shield Bot puede realmente apilar otros shields.

:::note
1. Si S5 está habilitado no puedes usar los puertos grove j14 y j13.
2. Solo puedes usar UNA de las líneas serie del Arduino, puerto grove UART o j11 ya que todos comparten la línea D1/TX.
:::

Luces de Estado
-------------

¡El Shield Bot tiene muchos LEDs para mostrarte qué está pasando!
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_bot_1.2_LEDs.JPG)

| Números de Luz     | Función                 | Estado                                                                                    |
|--------------------|-------------------------|-------------------------------------------------------------------------------------------|
| D22                | Alimentación            | Verde cuando Shieldbot está encendido. Cuando ShieldBot está apagado, ShieldBot solo puede cargar la batería. |
| D23 y D24          | Estado de carga         | Rojo significa cargando, verde significa carga completa.                                 |
| D18                | Reinicio                | Rojo si el botón de reinicio está presionado.                                            |
| D11 y D12          | Indicadores Motor Derecho | Verde significa adelante, rojo significa atrás, ambos significa detenido.               |
| D13 y D15          | Indicadores Motor Izquierdo | Verde significa adelante, rojo significa atrás, ambos significa detenido.             |
| D5 D10 D14 D17 D19 | Indicadores Sensor de Luz | Azul si se detecta una superficie no reflectiva (ej. línea de cinta negra).            |

Estructura
---------

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Position_for_seeeduino.jpg)
Las Partes 1, 2 y 3 están hechas por nuestra impresora 3D. También puedes ver la Posición de Instalación para la placa Seeeduino.

Primeros Pasos
---------------

¡Configurar el Shieldbot es rápido y fácil! Sigue estos pasos para poner en funcionamiento tu compañero robótico.

### El Trabajo Preparatorio

- Primero necesitas conectar Arduino en la parte inferior del Shield Bot y conectarlo a la PC usando un cable USB.

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_Programming2.JPG)

- Es mejor que gires el Interruptor de Alimentación hacia *OFF* antes de cargar el código. De lo contrario, se ejecuta cuando no estás prestando atención y puede asustarte.

¡Hemos construido una excelente biblioteca para el Shield Bot con funciones útiles para controlar tu Shield Bot y varios ejemplos para que puedas ponerlo en funcionamiento en poco tiempo!

- Descarga la biblioteca desde [aquí](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip) y descomprime.
- Coloca el archivo ShieldBot en el archivo de bibliotecas del IDE de Arduino por la ruta: ..\arduino-1.0.1\libraries.

### Instalar la batería

La batería es necesaria cuando quieres hacer que el Shield Bot funcione en el suelo.

:::note
1. Una vez que la batería esté instalada, puedes cargar la batería con un cable USB mini-b. Cuando la batería se está cargando, un LED rojo se encenderá. Cuando termine de cargarse, un LED verde se iluminará.
2. Cuando cargues el código, necesitas conectar el puerto USB de tu Seeeduino a tu PC. El puerto USB en el shield bot solo se usa para cargar la batería.
:::

### Demo 1: Activar motores para Funcionar

- Abre el entorno de Arduino y ve a File->Examples->Shieldbot->drive para cargar el primer ejemplo del Shield Bot. Asegúrate de seleccionar la Placa Arduino y Puerto Serie correctos.
- Luego carga el código en el Arduino. Una vez que la carga esté completa, la consola debería mostrar "Done Uploading".
- Puedes desconectar el cable USB después de completar la carga.
- Luego coloca el Shield Bot en un lugar espacioso y gira el interruptor de alimentación a '**ON**'.
- Ahora el Shield Bot funcionará a una cierta velocidad.

### Demo 2: Siguiendo Línea Negra

El Shield Bot puede detectar superficie reflectante basándose en los sensores Line finder (s1,s2,s3,s4,s5). Los indicadores azules se iluminarán si se detecta superficie no reflectante (ej. línea de cinta negra). Ahora usémoslo para hacer que funcione siguiendo la línea negra.

:::caution
Asegúrate de que los interruptores dip estén encendidos, y que ninguno de tus shields esté usando los pines A0, A1, A2, A3 o D4.
:::

- Vuelve a cargar el nuevo demo: LineFollowingSimple después de conectar Seeeduino a PC usando el cable USB.
- Después de completar la carga, coloca el Shield Bot en la pista negra pre-construida.

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Line_Finder.jpg)

- Puedes ajustar el Potenciómetro del IR Line Finder para cambiar la Sensibilidad de los Line Finders. Cuando se ajusta en sentido horario, la Sensibilidad aumenta, ajuste en sentido antihorario, la Sensibilidad disminuye. ¡Inténtalo!

### Instancias de Adaptación

**1. Reloj**

Este es un reloj increíblemente simple y funcional. Las ruedas giran una hacia adelante y una en reversa, haciendo girar los sensores de reflectancia alrededor de la rueda indicando los minutos. En la marca de la hora el bot avanza hacia adelante y hace avanzar la corredera lineal para indicar las horas. ¡Crédito extra por los rieles lineales gratuitos hechos de desechos cortados con láser y cinta adhesiva transparente!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team1_2.jpg)

**2. Shot.Bot**

Era un dispositivo realmente hermoso que muchas personas en el evento comentaron que les gustaría comprar. El robot seguidor de líneas tomaría pedidos luego conduciría por la pista hasta el dispensador donde usaría un servo para activar una cantidad de cualquiera de 3 bebidas, antes de conducir de vuelta al cliente.

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team7_2.jpg)

**3. Simon**

Este es un clon de simon para 2 jugadores bellamente diseñado, aunque no completamente terminado. El bot reproduce una melodía con luces y usas el disco cortado con láser, completo con braille para que incluso las personas con discapacidad visual puedan jugar, para marcar los tonos en la pizarra. El Shieldbot luego avanza hacia adelante y usa los sensores para ver si has marcado correctamente. ¡Quieres obtener más respuestas correctas que tu oponente para que el bot conduzca hacia su objetivo!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team6_2.jpg)

**4. HackPHX-Plotter**

El dispositivo está muy cerca de superar la máquina de dibujo 2d Der Kritzler que es una mesa vertical x,y con makerslide y tuvo la idea ingeniosa de atornillar las llantas del Shield bot de tal manera que cuando se ponía en reversa, levantaba la pluma de la superficie de dibujo :) ¡Incluso trabajaron con el diseñador para crear una interfaz de usuario del lado de la PC!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team8.jpg)

Referencia
---------

Para usar la biblioteca Shield Bot simplemente añade la biblioteca Shield Bot y declara un objeto Shieldbot en la parte superior de tu código Arduino antes de tu void setup()

```
#include <Shieldbot.h>  //includes the Shield Bot Library
 
Shieldbot shieldbot = Shieldbot(); //decares a Shieldbot object
```

**<u> setMaxSpeed(int both) </u>**

*Descripción*: establece la velocidad máxima de ambos motores.

*both*: entre 0 (básicamente apagado) y 255 (velocidad máxima)

**<u> setMaxSpeed(int left, int right)</u>**

*Descripción*: Escribe una velocidad máxima al motor izquierdo y derecho.

*left,right*: Left es la velocidad del motor izquierdo. right es la velocidad del motor derecho. entre 0 (básicamente apagado) y 255 (velocidad máxima)

**<u> rightMotor(char mag)</u>**

*Descripción*: Habilita el motor derecho, negativo para retroceder, positivo para avanzar. Si haces que un motor funcione más lento, girará en esa dirección. Si haces que los motores giren en dirección opuesta, rotará.

*mag*: la dirección para hacer girar el motor derecho; -128: retroceder completamente, 0: no moverse, 127: avanzar completamente

**<u> leftMotor(char mag)</u>**

*Descripción*: Habilita el motor izquierdo, negativo para retroceder, positivo para avanzar.

*mag*: la dirección para hacer girar el motor izquierdo; -128: retroceder completamente, 0: no moverse, 127: avanzar completamente

**<u> forward()</u>**

*Descripción*: Habilita los motores para enviar el bot directamente hacia adelante a la setSpeed().

**<u> backward()</u>**

*Descripción*: Habilita los motores para enviar el bot directamente hacia atrás a la setSpeed().

**<u> drive(char left, char right)</u>**

*Descripción*: Llamada de manejo de propósito general. Llama a leftMotor y rightMotor directamente.

*left*: entre -128 (motor izquierdo hacia atrás 100% de velocidad máxima), 0 (parado), y 127 (motor izquierdo hacia adelante 100% de velocidad máxima) :*right*: entre -128 (motor derecho hacia atrás 100% de velocidad máxima), 0 (parado), y 127 (motor derecho hacia adelante 100% de velocidad máxima)

**<u> stop()</u>**

*Descripción*: Deshabilita los motores. También puedes usar drive(0,0).

**<u> stopLeft()</u>**

*Descripción*: Deshabilita el motor izquierdo. También puedes usar drive(0,X).

**<u> stopRight()</u>**

*Descripción*: Deshabilita el motor derecho. También puedes usar drive(X,0).

**<u> fastStop()</u>**

*Descripción*: Deshabilita el motor derecho. También puedes usar drive(X,0).

**<u> fastStopLeft()</u>**

*Descripción*: Deshabilita el motor izquierdo más rápido. Esto se considera posiblemente malo para el chip del motor, así que úsalo a tu discreción

**<u> fastStopRight()</u>**

*Descripción*: Deshabilita el motor derecho más rápido. Esto se considera posiblemente malo para el chip del motor, así que úsalo a tu discreción

**<u> readS1(), readS2(), readS3(), readS4(), readS5()</u>**

*Descripción*: Lee cualquiera de los 5 sensores de luz a bordo. NOTA NECESITAS conectar los sensores a los puertos de arduino usando el bloque de interruptores dip (interruptores HACIA los números y texto ON) Estos interruptores de otra manera te permitirían usar esos pines para otras cosas si no quisieras usar tus sensores de luz

*Retorna*: LOW si la superficie refleja (ej. blanco) y HIGH si la superficie no refleja nada (ej NEGRO)

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_driveLibrary.png)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Librería Shield Bot 1.2](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip)
- [Archivos Eagle Shield Bot 1.2](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip)
- [Esquemático ShieldBot 1.2](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_v1.2.pdf)
- [Hoja de Datos del Sensor de Reflectancia IR RPR-220](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/RPR-220.pdf)
- [Hoja de Datos del Regulador Elevador ISL97516](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/ISL97516.pdf)
- [Hoja de Datos del Cargador Li-ion BQ2057](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/BQ2057.pdf)
- [Hoja de Datos del Controlador de Motor Puente H L298](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/L298.pdf)
- [Hoja de Datos del Amplificador Operacional LMV358](http://www.ti.com/product/lmv358)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Shield_Bot_V1.2 -->

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
