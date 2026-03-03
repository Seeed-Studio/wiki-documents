---
description: Micro_bit bitwear
title: BitWear
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BitWear
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991110-809f156c-23cb-47b0-82fd-15fc1e221ba2.png#align=left&display=inline&height=670&originHeight=670&originWidth=1021&size=0&status=done&style=none&width=1021) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/1.png)

## Introducción

BitWear es un accesorio compacto y de bajo costo para usuarios de micro:bit que permite crear divertidos dispositivos portátiles. El BitWear se conecta simplemente al micro:bit con 5 tornillos (M3x5mm), y se alimenta con dos baterías CR2032, que se sujetan de forma segura y no pueden extraerse a menos que desenrosques el BitWear. Hay un motor de vibración, un zumbador y un LED RGB direccionable a bordo, todos diseñados para tus divertidos proyectos portátiles. Nuestro objetivo de diseño para el BitWear es maximizar las funciones del micro:bit mientras minimizamos la huella espacial para proporcionar a los nuevos usuarios de micro:bit una experiencia portátil enriquecida.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991124-7551ded4-89b3-4524-8ea2-d43cf23c85dd.png#align=left&display=inline&height=547&originHeight=547&originWidth=1099&size=0&status=done&style=none&width=1099) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/2.png)

:::note
Los usuarios deben preparar dos baterías C2032 y cinco tornillos M3*5 por separado.
:::

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991126-2181a46f-99d0-4ee3-b587-3c82a082af0b.png#align=left&display=inline&height=527&originHeight=527&originWidth=995&size=0&status=done&style=none&width=995) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/3.png)

:::tip
Al probar un programa, no instales las baterías en el BitWear primero. Usa un cable USB en su lugar para proporcionar energía y asegurar la transmisión del programa. Solo instala las baterías cuando un programa esté completo y se requiera implementación sin conexión.
:::

## Tutoriales

Aquí hay algunos tutoriales relacionados para ayudarte a comenzar con el BitWear.

### 1. Alarma de Despertar

#### 1.1 Implementación

¡Este es un dispositivo mágico que puede despertarte! Una vez que el proyecto esté completo, usa la cinta de doble cara para asegurar el dispositivo en tu espalda. Inclínate lentamente hacia abajo como si te estuvieras quedando dormido, y ve si puede enviar un recordatorio.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991109-4bb68ed4-02eb-4499-b6df-bcebc2efe496.png#align=left&display=inline&height=522&originHeight=522&originWidth=928&size=0&status=done&style=none&width=928) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/4.png)

#### 1.2 Escribir un Programa

Primero, añade un bloque forever. Conecta el bloque show icon dentro. Mantén este ícono de corazón en él.
Luego, añade una declaración IF-THEN. Conecta un bloque de comparación &lt; en él. Dentro del bloque, añade el bloque acceleration (mg) de la pestaña Input a la caja de la izquierda; e ingresa 800 en la caja de la derecha.
Después, ve a la pestaña Music y conecta el bloque start melody (dadadum) repeating (once) debajo.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991101-b137ce8c-40cc-4e0f-a08b-a8b867c44cf6.png#align=left&display=inline&height=461&originHeight=461&originWidth=1303&size=0&status=done&style=none&width=1303) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/5.png)

#### 1.3 Conectar un Dispositivo

Conecta el BitWear al micro:bit. Usa un cable USB para conectar el micro:bit y tu PC juntos. Asegúrate de que el indicador LED en el micro:bit se encienda.

#### 1.4 Descargar un Programa

Ya se te ha introducido cómo descargar un programa en los [tutoriales anteriores](https://docproxy.tinkergen.com/web/#/2?page_id=329), que puede simplificarse en pasos como: renombrar un programa, hacer clic en el botón "Download" y enviarlo al micro:bit.

#### 1.5 Ejecutar un Programa

Enciende el interruptor de alimentación en el BitWear y ve si el programa puede ejecutarse normalmente.

### 2. Detector de Luz

#### 2.1 Implementación

Con un BitWear conectado, el micro:bit muestra una cara sonriente si el nivel de luz es mayor que 80; si no, el BitWear vibra, y el micro:bit muestra una cara triste y reproduce la melodía Baddy. (El nivel de luz especificado puede diferir en un escenario real; puedes ajustarlo según sea necesario.)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991125-adfecd70-04c0-4415-9c82-829929c8e68c.png#align=left&display=inline&height=494&originHeight=494&originWidth=878&size=0&status=done&style=none&width=878) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/6.png)

#### 2.2 Escribir un Programa

Ten en cuenta que MakeCode no proporciona bloques para controlar el BitWear. Por lo tanto, necesitamos añadir manualmente una extensión en MakeCode para asegurar que todo funcione bien. ¡Aprendamos cómo hacerlo ahora!
Cómo Añadir una Extensión de BitWear:
Ve a MakeCode:
[https://makecode.microbit.org](https://makecode.microbit.org/)

<!-- - Step 1: Create a new project to enter the workspace. Click the gear icon (for settings) on the blue bar.![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991129-3a81d155-0279-412d-a66f-28ab0f9530cb.png#align=left&display=inline&height=496&originHeight=496&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/7.png)

- Paso 2: Selecciona Extensions de la lista desplegable que te lleva a la página de extensiones.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991368-facfd798-ea8e-4703-89d8-78114f26d22e.png#align=left&display=inline&height=638&originHeight=638&originWidth=834&size=0&status=done&style=none&width=834) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/8.png)

- Paso 3: Ingresa la dirección de la extensión BitWear en la caja de búsqueda: [https://github.com/TinkerGen/pxt-BitWear](https://github.com/TinkerGen/pxt-BitWear)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991151-7ca03e5e-ce2a-4c82-b993-788be270b4e7.png#align=left&display=inline&height=455&originHeight=455&originWidth=1007&size=0&status=done&style=none&width=1007) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/9.png)

> Si aparece un mensaje indicando que la extensión no existe, cierra el navegador e ingresa a MakeCode para intentar nuevamente.

- Paso 4: Haz clic en el paquete de extensión que te lleva de vuelta al espacio de trabajo. Verás que la extensión BitWear se ha añadido exitosamente.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991400-25ce2189-c8b8-461d-ae36-98595d4c26a4.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/10.png)

Continuemos con la tarea después de haber añadido la extensión.

Primero, añade un bloque forever y conecta una declaración IF-THEN-ELSE dentro.
Sigue esta lógica de programa y código: si el nivel de luz es mayor que 80, entonces el micro:bit mostrará una cara sonriente; si no, el BitWear vibrará, y el micro:bit mostrará una cara triste y reproducirá la melodía Baddy.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991145-87f4c2d0-d211-489c-8886-8d5f257f1968.png#align=left&display=inline&height=635&originHeight=635&originWidth=1264&size=0&status=done&style=none&width=1264) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/11.png)

#### 2.3 Conectar un Dispositivo

Conecta el BitWear al micro:bit. Usa un cable USB para conectar el micro:bit y tu PC juntos. Asegúrate de que el indicador LED en el micro:bit se encienda.

#### 2.4 Descargar un Programa

Ya se te ha explicado cómo descargar un programa en los tutoriales anteriores, lo cual puede simplificarse en pasos como: renombrar un programa, hacer clic en el botón "Download" y enviarlo al micro:bit.

#### 2.5 Ejecutar un Programa

Enciende el interruptor de alimentación en el BitWear y verifica si el programa puede ejecutarse normalmente.

:::note
Debido a que no hay un sensor de luz integrado en el micro:bit, el micro:bit usa la matriz LED para detectar la luz a su alrededor. Los actuadores LED se convierten constantemente en señales de entrada y toman muestras de la duración de atenuación del voltaje, que es aproximadamente proporcional al nivel de luz del ambiente circundante.
:::

## Materiales del Curso

Puedes ver materiales de curso relacionados sobre el micro:bit y BitWear en nuestra plataforma de aprendizaje en línea Make2Learn a través de esta dirección: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Archivos Adjuntos

#### [Archivo Adjunto: Código Fuente del Tutorial BitWear](https://tinkergen.com/filedownload/179236)

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
