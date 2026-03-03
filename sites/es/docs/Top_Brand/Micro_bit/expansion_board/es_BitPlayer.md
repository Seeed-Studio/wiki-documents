---
description: Micro_bit BitPlayer
title: BitPlayer
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BitPlayer
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608299-82ca0e88-02a3-4a72-bb27-0d6e31d508f5.png#height=609&id=HttEj&originHeight=609&originWidth=904&originalType=binary&ratio=1&size=0&status=done&style=none&width=904) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/1.png)

## Introducción

BitPlayer te proporciona inspiración y emoción para crear proyectos como un piano portátil o una calculadora inteligente. Para ser más fácil de transportar y usar, BitPlayer abandonó un diseño de todos botones que típicamente usaría un controlador de juegos en favor de un joystick de 2 ejes. Incluye otros 6 botones programables etiquetados como L, R, A, B, C y D. Además, el BitPlayer en sí cuenta con un zumbador, un motor de vibración y un puerto Grove I2C para dar a los niños una experiencia de juego vívida e interactiva. Puedes disfrutar fácilmente de proyectos DIY en cualquier lugar instalando 2 baterías AAA en el BitPlayer. Como ya se ha probado, BitPlayer puede interactuar con otros dispositivos cuando el posicionamiento Bluetooth está dentro de un rango de distancia de aproximadamente 10 metros. Si quieres implementar un coche de control remoto, recomendamos que también prepares un [BitCar](https://docproxy.tinkergen.com/web/#/2?page_id=357).

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608604-b8c61682-56cb-4c53-aa80-90e45003792c.png#height=907&id=yenfN&originHeight=907&originWidth=905&originalType=binary&ratio=1&size=0&status=done&style=none&width=905) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/2.png)

## Tutoriales

Aquí hay algunos tutoriales relacionados para ayudarte a comenzar con BitPlayer.

### 1. Juego de Velocidad de Dedos

#### 1.1 Implementación

En este proyecto, encenderemos los LEDs en secuencia manipulando el joystick. La luz correrá alrededor de la pantalla como un cuadrado en bucle.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608313-1eb60ba3-e82b-4cea-baa3-0eba2906910c.png#height=266&id=FXfhp&originHeight=266&originWidth=473&originalType=binary&ratio=1&size=0&status=done&style=none&width=473) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/3.png)

#### 1.2 Escribir un Programa

Ten en cuenta que en MakeCode no tenemos bloques para controlar el BitPlayer. Por lo tanto, necesitamos agregar una extensión de BitPlayer en MakeCode para asegurar que todo funcione bien. ¡Aprendamos cómo hacerlo ahora!
【Cómo Agregar la Extensión BitPlayer】
Vamos a MakeCode: [https://makecode.microbit.org](https://makecode.microbit.org/)

- Paso 1 Haz clic en el ícono de engranaje (para configuraciones) en la barra azul en MakeCode.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608337-28675e0d-cba2-4fcd-9e95-ea566db99f46.png#height=489&id=URYAb&originHeight=489&originWidth=1000&originalType=binary&ratio=1&size=0&status=done&style=none&width=1000) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/4.png)

- Paso 2 Selecciona "Extensions" de la lista desplegable que te lleva a la página de extensiones.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608593-1510b8dd-4f3f-49b2-8145-fd6e87b854db.png#height=699&id=AAz5P&originHeight=699&originWidth=914&originalType=binary&ratio=1&size=0&status=done&style=none&width=914) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/5.png)

- Paso 3 Ingresa la dirección de la extensión BitPlayer en el cuadro de búsqueda: [https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608308-08990569-fce3-4dc8-a07a-ad1c3f1182e1.png#height=937&id=b9Blo&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/6.png)

> Si aparece un mensaje indicando que esta extensión no existe, por favor cierra el navegador e ingresa a MakeCode nuevamente.

<!-- - Paso 4 Haz clic en el paquete de extensión que te lleva de vuelta al espacio de trabajo. Verás que la extensión BitPlayer se ha agregado exitosamente.![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608597-2ade6798-937e-47e0-8215-99e146f6d983.png#height=937&id=jyFxX&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/7.png)

Continuemos con la tarea.
Primero, agrega un bloque "on start". Creemos 3 variables nombradas como LED encendido, coordenada x y coordenada y.
Luego, establece la variable "LED encendido" como un sprite con un par ordenado (coordenada x, coordenada y). Este par ordenado inicialmente comenzará desde (0, 0).<br />
Después, sigue esta lógica de programa para codificar: si el joystick se tira hacia arriba, la coordenada y cambiará en -1; si el joystick se tira hacia abajo, la coordenada y cambiará en 1; si el joystick se tira hacia la izquierda, la coordenada x cambiará en -1; si el joystick se tira hacia la derecha, la coordenada x cambiará en 1.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608356-3c424c72-15e0-4ee2-895e-4eee6ec085a1.png#height=699&id=GohIO&originHeight=699&originWidth=1434&originalType=binary&ratio=1&size=0&status=done&style=none&width=1434) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/8.png)

#### 1.3 Conectar un Dispositivo

Desliza directamente el micro:bit en el BitPlayer y ten cuidado de no invertirlo. Luego conecta el micro:bit a tu PC con un cable USB. Verifica si el indicador LED en el micro:bit se enciende. Si no, necesitas desconectar el cable USB y conectarlo a los dispositivos nuevamente.

#### 1.4 Descargar un Programa

Ya se te ha introducido cómo descargar un programa en los [tutoriales anteriores](https://docproxy.tinkergen.com/web/#/2?page_id=329), que puede resumirse simplemente en pasos como: renombrar un programa, hacer clic en el botón "Download" y enviarlo al micro:bit.

#### 1.5 Ejecutar un Programa

Enciende el interruptor en el BitPlayer y verifica si el micro:bit puede funcionar normalmente.

### 2. Coche de Control Remoto

Ver [Tutorial 4 de BitCar.](https://docproxy.tinkergen.com/web/#/2?page_id=357)

## Materiales del Curso

Puedes ver los materiales del curso sobre micro:bit y BitPlayer en nuestra plataforma de aprendizaje en línea Make2Learn a través de esta dirección: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

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
