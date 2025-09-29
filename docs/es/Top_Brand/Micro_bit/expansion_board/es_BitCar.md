---
description: Micro_bit bitcar
title: BitCar
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Bitcar
last_update:
  date: 12/29/2023
  author: Seraphina
---

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113289-2b808a5b-f4e6-4205-ba05-f5ef6339f38d.png#align=left&display=inline&height=415&originHeight=415&originWidth=415&size=0&status=done&style=none&width=415) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/9.png)

## Introducción

BitCar es un proyecto de micro:bit que diseña un coche robot inteligente y programable para fomentar el aprendizaje STEAM de los niños. Después de combinar programas de Microsoft MakeCode, el coche robot será capaz de realizar seguimiento de líneas, evitar obstáculos e incluso hacer un caballito. El coche lleva un altavoz incorporado para reproducir melodías y efectos de sonido, y tiene 4 LEDs RGB coloridos en la parte inferior y un sensor ultrasónico desmontable en la parte frontal para evitar obstáculos en el camino.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113282-0a378b93-75f4-4f4a-a776-9d20a53ffc20.png#align=left&display=inline&height=554&originHeight=554&originWidth=923&size=0&status=done&style=none&width=923) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/10.png)

:::note
El micro:bit, cable USB y baterías no están incluidos en el paquete. Necesitas prepararlos por separado. Para detalles específicos sobre cómo ensamblar el coche, consulta el Anexo 1 Instrucciones de Ensamblaje de BitCar. Para detalles sobre la cubierta y el chasis, consulta el Anexo 3 Cubierta y Chasis de BitCar.
:::

## Tutoriales

Aquí tienes algunos tutoriales de ejemplo para aprender cómo usar este kit. ¡Empecemos!

### 1. Seguimiento de Líneas

#### 1.1 Implementación

Después de que el coche se inicie, puede conducir a lo largo de la pista.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113288-c57403ca-ae55-473e-ae97-42c2b0c7ca78.png#align=left&display=inline&height=632&originHeight=632&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/11.png)

> Consulta el Anexo 2 Mapa de BitCar

#### 1.2 Escribir un Programa

Ten en cuenta que necesitas agregar una extensión en MakeCode porque no tiene bloques que controlen el coche. Sigue las instrucciones a continuación para agregar la extensión.

- Primero vamos a MakeCode: [https://makecode.microbit.org/](https://makecode.microbit.org/)

- Paso 1 Crea un nuevo proyecto que te lleve al espacio de trabajo. Haz clic en el icono de engranaje (para configuración).
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113277-c32373b0-93fd-4471-b79b-e1dfd4958188.png#align=left&display=inline&height=565&originHeight=565&originWidth=1152&size=0&status=done&style=none&width=1152) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/12.png)

- Paso 2 Haz clic en "Extensions" de la lista desplegable y luego entrarás a la página de extensiones.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-225fdfab-20b1-4d31-bc32-1ae7adad3f6d.png#align=left&display=inline&height=723&originHeight=723&originWidth=945&size=0&status=done&style=none&width=945) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/13.png)

- Paso 3 Copia y pega este enlace de extensión en el cuadro de búsqueda: [https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113278-4c8a39b6-2479-47c5-900f-a785f201815c.png#align=left&display=inline&height=448&originHeight=448&originWidth=992&size=0&status=done&style=none&width=992) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/14.png)

> Si aparece un mensaje que dice que esta extensión no existe, por favor cierra el navegador e inténtalo de nuevo.

- Paso 4 Haz clic en el icono de la extensión y regresa al espacio de trabajo.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-405a3a72-1457-4dbb-a230-84db87fe68d1.png#align=left&display=inline&height=505&originHeight=505&originWidth=1119&size=0&status=done&style=none&width=1119) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/15.png)

Después de agregar la extensión, podemos comenzar la tarea.

Primero, agrega un bloque "forever". Si se detecta la línea negra en el lado izquierdo, el coche debe hacer un giro corto a la izquierda para que pueda seguir siguiendo la pista. En este caso, establecemos la velocidad del motor izquierdo como 3% y la velocidad del motor derecho como 15%. De manera similar, si se detecta la línea negra en el lado derecho, el coche debe hacer un giro corto a la derecha. Y establecemos la velocidad del motor derecho como 3% y la velocidad del motor izquierdo como 15%.

> Puedes ajustar la velocidad del motor según sea necesario.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113295-500e52b5-b3ff-4474-9e87-ed72c1329f1e.png#align=left&display=inline&height=556&originHeight=556&originWidth=1282&size=0&status=done&style=none&width=1282) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/16.png)

#### 1.3 Conectar un Dispositivo

Desliza el micro:bit en BitCar y ten cuidado de no invertirlo. Luego, conecta el micro:bit a tu PC con un cable USB. Verifica si el indicador LED en el micro:bit se enciende o no. Si no, necesitas conectar el cable USB de nuevo.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113285-2552ad75-17d6-4f40-aa08-4223e9ccb65e.png#align=left&display=inline&height=543&originHeight=543&originWidth=642&size=0&status=done&style=none&width=642) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/17.png)

#### 1.4 Subir un Programa

Los tutoriales anteriores ya te han mostrado cómo descargar el programa que escribiste. Solo necesitas renombrar tu programa, hacer clic en el botón "Download" y enviarlo a tu micro:bit.

#### 1.5 Ejecutar un Programa

Enciende el interruptor del coche y verifica si puede funcionar normalmente.

### 2. Evitar Obstáculos

#### 2.1 Implementación

Después de que el coche se inicie, puede conducir a lo largo de la pista y detenerse tan pronto como vea un obstáculo.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113304-c6853e11-bd23-455c-8ca9-ab9b897a9f74.png#align=left&display=inline&height=311&originHeight=311&originWidth=554&size=0&status=done&style=none&width=554) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/18.png)

#### 2.2 Escribir un Programa

Aún usamos el mismo método del Tutorial 1 para añadir la extensión BitCar.<br />
Primero, añade un bloque "Forever". Si el sensor ultrasónico detecta un objeto a una distancia menor de 12, entonces establece la velocidad del motor izquierdo al 20% y la velocidad del motor derecho al 0%. Luego establece un tiempo de espera de 0.7 s.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113303-d80b5cc8-83ce-4109-bdbd-0c9244e69358.png#align=left&display=inline&height=474&originHeight=474&originWidth=1305&size=0&status=done&style=none&width=1305) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/19.png)

#### 2.3 Conectar un Dispositivo

Desliza el micro:bit en el BitCar y ten cuidado de no invertirlo. Luego, conecta el micro:bit a tu PC con un cable USB. Verifica si el indicador LED en el micro:bit se enciende o no. Si no, necesitas conectar el cable USB nuevamente. Saca el sensor ultrasónico e instálalo en el carro.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-308bd885-a798-4c30-9a7c-18c399ba6fce.png#align=left&display=inline&height=314&originHeight=314&originWidth=408&size=0&status=done&style=none&width=408) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/20.png)

Cómo instalar el sensor ultrasónico (ver el manual del usuario en el paquete):
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113361-abf193ef-4dc7-4d2e-916b-e6cefef00147.png#align=left&display=inline&height=500&originHeight=500&originWidth=1012&size=0&status=done&style=none&width=1012) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/21.png)

#### 2.4 Subir un Programa

Ya se te ha presentado cómo descargar tus programas en los tutoriales anteriores. Solo necesitas renombrar tu programa, hacer clic en el botón "Download" y enviarlo a tu micro:bit.

#### 2.5 Ejecutar un Programa

Enciende el interruptor en el carro y verifica si puede funcionar normalmente.

### 3. Carro RC (Controlado por un micro:bit)

#### 3.1 Implementación

Después de que el carro se inicie, el carro irá hacia adelante si se presiona el botón A en el micro:bit; e irá hacia atrás si se presiona el botón B.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113317-0bc5b339-1106-4562-839e-8ce42d2f8dd7.png#align=left&display=inline&height=539&originHeight=539&originWidth=944&size=0&status=done&style=none&width=944) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/22.png)

#### 3.2 Escribir un Programa

Aún usamos el mismo método del Tutorial 1 para añadir la extensión BitCar.

- Programa micro:bit<br />
Añade un bloque "on start". Conecta el bloque "radio set group" en él. Arrastra y suelta el bloque "Forever". Sigue esta lógica del programa: si se presiona el botón A, entonces la radio enviará el número "1"; si se presiona el botón B, entonces la radio enviará el número "2".

- Programa BitCar<br />
Añade un bloque "on start". Conecta el bloque "radio set group" en él. Sigue esta lógica del programa: la radio recibe una señal "receivedNumber". Si "receivedNumber" es igual a 1, entonces el carro irá hacia adelante a una velocidad del 15%. Si "receivedNumber" es igual a 2, entonces el carro irá hacia atrás a una velocidad del 15%.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113345-98bd2a99-0f62-4ea6-adc8-6522c0cee2cb.png#align=left&display=inline&height=486&originHeight=486&originWidth=1213&size=0&status=done&style=none&width=1213) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/23.png)

Programa Controlador micro:bit
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113327-1cb7faa3-45f1-440e-9192-7a1ca64bbf2e.png#align=left&display=inline&height=518&originHeight=518&originWidth=1283&size=0&status=done&style=none&width=1283) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/24.png)

Programa Receptor BitCar

#### 3.3 Conectar un Dispositivo

Desliza el micro:bit en el BitCar y ten cuidado de no invertirlo. Luego, conecta el micro:bit a tu PC con un cable USB. Verifica si el indicador LED en el micro:bit se enciende o no. Si no, necesitas conectar el cable USB nuevamente.

:::note
Hay 2 grupos de programas, por lo tanto necesitarás 2 micro:bits para este proyecto. Usa un micro:bit para conectar a la alimentación, y el otro para controlar el carro. También necesitas escribir y descargar programas por separado para distinguir los dos micro:bits. Los micro:bits mencionados en este tutorial no están incluidos en el paquete.
:::

#### 3.4 Subir un Programa

Ya se te ha presentado cómo descargar tus programas en los tutoriales anteriores. Solo necesitas renombrar tu programa, hacer clic en el botón "Download" y enviarlo a tu micro:bit.

#### 3.5 Ejecutar un Programa

Enciende el interruptor en el carro y verifica si puede funcionar normalmente.

### 4. Carro RC (Controlado por un micro:bit y un BitPlayer)

#### 4.1 Implementación

Si el joystick se tira hacia arriba, el carro va hacia adelante; si el joystick se tira hacia atrás, el carro va hacia atrás; si el joystick se tira hacia la izquierda, el carro gira a la izquierda; si el joystick se tira hacia la derecha, el carro gira a la derecha; si se presiona el botón A, el carro se levanta; si se presiona el botón B, el carro se detiene.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-83bb83d6-af28-4ffa-87bc-26df831aef8a.png#align=left&display=inline&height=639&originHeight=639&originWidth=1083&size=0&status=done&style=none&width=1083) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/25.png)

#### 4.2 Escribir un Programa

Aún usamos el mismo método del Tutorial 1 para añadir la extensión BitCar.<br />
Extensión BitCar: [https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)<br />
Extensión BitPlayer: [https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)

- Programa BitPlayer<br />
  Añade un bloque "on start". Conecta el bloque "radio set group" en él. Arrastra y suelta un bloque "Forever". Comienza añadiendo bloques bajo esta lógica del programa: si el joystick se tira hacia arriba, la radio enviará el número "1"; si el joystick se tira hacia atrás, la radio enviará el número "2"; si el joystick se tira hacia la izquierda, la radio enviará el número "3"; si el joystick se tira hacia la derecha, la radio enviará el número "4"; si se presiona el botón A, la radio enviará el número "5"; si se presiona el botón B, la radio enviará el número "6".

- Programa BitCar<br />
  Añade un bloque "al iniciar". Conecta el bloque "radio establecer grupo" en él. Si "receivedNumber" es igual a 1, el coche avanzará a una velocidad del 15%; si "receivedNumber" es igual a 2, el coche retrocederá a una velocidad del 15%; si "receivedNumber" es igual a 3, la velocidad del motor derecho será del 20% y la velocidad del motor izquierdo será del 0%, luego el coche avanzará a una velocidad del 15% nuevamente; si "receivedNumber" es igual a 4, la velocidad del motor izquierdo será del 20% y la velocidad del motor derecho será del 0%, luego el coche avanzará a una velocidad del 15% nuevamente; si "receivedNumber" es igual a 5, el coche realizará un acto de levantarse a una velocidad del 100%; si "receivedNumber" es igual a 6, el coche se detendrá.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113324-b23e7a3c-37cf-4616-9d5a-85078a7f7617.png#align=left&display=inline&height=780&originHeight=780&originWidth=857&size=0&status=done&style=none&width=857) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/26.png)

Programa BitPlayer
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113335-24bb344c-3f6e-4af8-abb4-b6d80fe210cb.png#align=left&display=inline&height=851&originHeight=851&originWidth=902&size=0&status=done&style=none&width=902) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/27.png)

Programa BitCar

#### 4.3 Conectar un Dispositivo

Desliza el micro:bit en el BitCar y ten cuidado de no invertirlo. Luego, conecta el micro:bit a tu PC con un cable USB. Verifica si el indicador LED en el micro:bit se enciende o no. Si no se enciende, necesitas conectar el cable USB nuevamente.
:::note
Hay 2 grupos de programas, por lo tanto necesitarás 2 micro:bits para este proyecto. Un micro:bit es para BitPlayer; el otro es para BitCar. También necesitas escribir y descargar programas por separado para distinguir los dos micro:bits. Los micro:bits mencionados en este tutorial no están incluidos en el paquete.
:::

#### 4.4 Subir un Programa

Ya se te ha explicado cómo descargar tus programas en los tutoriales anteriores. Solo necesitas renombrar tu programa, hacer clic en el botón "Descargar" y enviarlo a tu micro:bit.

#### 4.5 Ejecutar un Programa

Enciende el BitCar y BitPlayer. Después de que se emparejen, observa cómo se ejecuta el programa.

### 5. Python

Además de los tutoriales anteriores, también puedes usar Python para controlar el BitCar. A continuación se muestra el programa de ejemplo:

#### 5.1 Control del Motor

Primero, importaremos todos los módulos necesarios de micro:bit.

1. Añade tu código Python aquí. Por ejemplo:
2. from microbit import *

Luego definimos una función llamada movement(left,right), el valor de left y right es la velocidad (de -255 a 255) para cada motor.

```cpp
1. def movement(left, right):
2.     if left > 0:
3.         pin13.write_analog(0)
4.         pin14.write_analog(left)
5.     elif left < 0:
6.         pin13.write_analog(left)
7.         pin14.write_analog(0)
8.     if right > 0:
9.         pin15.write_analog(0)
10.         pin16.write_analog(right)
11.     elif right > 0:
12.         pin15.write_analog(right)
13.         pin16.write_analog(0)
```

Define otra función llamada stop(), llamamos a esta función para detener el BitCar.

``` cpp
1. def stop():
2.         pin13.write_analog(0)
3.         pin14.write_analog(0)
4.         pin15.write_analog(0)
5.         pin16.write_analog(0)
```

Con las funciones que acabamos de definir arriba, podemos controlar BitCar como sigue:

**Moverse hacia adelante a velocidad máxima:**<br />
movement(255, 255)

**Moverse hacia atrás a velocidad máxima:**<br />
movement(-255, -255)

**Girar en sentido horario:**<br />
movement(255, -255)

**Parar:** <br />
stop()

## Información del Curso y Descarga de Lección de Muestra

Puedes ver cursos relacionados de micro:bit y BitCar en Make 2 Learn a través de esta dirección: [https://make2learn.tinkergen.com](https://make2learn.tinkergen.com/)

## IV Anexos

#### Anexo 1 Instrucciones de Ensamblaje de BitCar：[Attachment 1 BitCar Assembly Instruction.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf?_lake_card=%7B%22uid%22%3A%221611139151730-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf%22%2C%22name%22%3A%22Attachment%201%20BitCar%20Assembly%20Instruction.pdf%22%2C%22size%22%3A818663%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22UXHlE%22%2C%22card%22%3A%22file%22%7D)

#### Anexo 2 Mapa de BitCar：[Attachment 2 BitCar Map.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf?_lake_card=%7B%22uid%22%3A%221611139162975-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf%22%2C%22name%22%3A%22Attachment%202%20BitCar%20Map.pdf%22%2C%22size%22%3A753958%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22n0BjB%22%2C%22card%22%3A%22file%22%7D)

#### Anexo 3 Cubierta y Chasis de BitCar：[Attachment 3 BitCar Cover - Chassis.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip?_lake_card=%7B%22uid%22%3A%221611139172665-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip%22%2C%22name%22%3A%22Attachment%203%20BitCar%20Cover%20-%20Chassis.zip%22%2C%22size%22%3A367966%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22T1EXv%22%2C%22card%22%3A%22file%22%7D)

#### Anexo 4 Código Fuente：[Attachment 4 Source Code.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip?_lake_card=%7B%22uid%22%3A%221611139180453-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip%22%2C%22name%22%3A%22Attachment%204%20Source%20Code.zip%22%2C%22size%22%3A1535318%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%227lUfd%22%2C%22card%22%3A%22file%22%7D)

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
