---
description: Micro_bit BitMaker
title: BitMaker
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BitMaker
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249977-72e43eb6-aa32-4fa3-8e31-d49d1110d946.png#height=466&id=TVoRI&originHeight=466&originWidth=800&originalType=binary&ratio=1&size=0&status=done&style=none&width=800) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/1.png)

## Introducción

BitMaker es una placa de expansión del tamaño de una tarjeta de crédito, plug and play, que conecta los módulos Grove con un micro:bit. Incorpora 4 LEDs RGB, 1 zumbador integrado para reproducir melodías y 6 puertos Grove (uno es un puerto I2C) que permite al micro:bit conectarse a cientos de módulos, como sensores, actuadores, módulos de comunicación y pantallas.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656250001-d4b242c7-636e-430b-8565-1503c4272f34.png#height=384&id=zyWSH&originHeight=384&originWidth=1123&originalType=binary&ratio=1&size=0&status=done&style=none&width=1123) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/2.png)

:::note
Después de descargar un programa al micro:bit, asegúrate de que el BitMaker esté conectado a la alimentación a través de un cable micro USB.
:::

## Tutoriales

Aquí tienes algunos tutoriales relacionados para ayudarte a comenzar con BitMaker.

### 1. Reproductor de Música Mini

#### 1.1 Implementación

Este es un reproductor de música genial que puede reproducir una canción de cumpleaños y parpadear con luces amarillas y verdes.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249956-97e452a2-7a79-46f5-ab56-4f84a2333b3a.png#height=337&id=Q8LWx&originHeight=337&originWidth=599&originalType=binary&ratio=1&size=0&status=done&style=none&width=599) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/3.png)

#### 1.2 Escribir un Programa

Ten en cuenta que en MakeCode no tenemos bloques para controlar los LEDs RGB. Por lo tanto, necesitamos agregar una extensión Neopixel en MakeCode para asegurar que todo funcione bien. ¡Aprendamos cómo hacerlo ahora!
[Cómo Agregar la Extensión Neopixel]
Vamos a MakeCode: [https://makecode.microbit.org](https://makecode.microbit.org/)

- Paso 1 Haz clic en el ícono de engranaje (para configuraciones) en la barra azul en MakeCode.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249950-b8584720-ef46-4f7f-83ac-0f6ac745f224.png#height=549&id=f8O2j&originHeight=549&originWidth=1124&originalType=binary&ratio=1&size=0&status=done&style=none&width=1124) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/4.png)

- Paso 2 Selecciona "Extensions" de la lista desplegable que te lleva a la página de extensiones.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249951-f3c071db-d274-45d5-b10e-f83303155562.png#height=653&id=Zd6ki&originHeight=653&originWidth=853&originalType=binary&ratio=1&size=0&status=done&style=none&width=853) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/5.png)

- Paso 3 Ingresa la dirección de la extensión Neopixel en el cuadro de búsqueda: [https://www.adafruit.com/category/168](https://www.adafruit.com/category/168)

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249966-9061a1f4-eaea-4070-9416-d32bc76663f6.png#height=826&id=Gpf25&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/6.png)

> Si aparece un mensaje indicando que esta extensión no existe, por favor cierra el navegador e inténtalo de nuevo.

- Paso 4 Haz clic en el paquete de extensión que te lleva de vuelta a la página principal. Verás que la extensión Neopixel se ha agregado exitosamente.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249970-0c17f823-8b1c-4ea0-8e65-74fae74c493b.png#height=826&id=rHYia&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/7.png)

Pasemos a la tarea después de haber agregado la extensión.

:::note
Si quieres agregar una extensión BitMaker, sigue las mismas instrucciones anteriores. Extensión BitMaker: [https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
:::

Primero, agrega un bloque "on start". Ve a la pestaña "Music" y conecta el bloque "start melody repeating" debajo. Selecciona una canción de cumpleaños en este bloque. Luego arrastra y suelta el bloque "forever". Establece el número inicial de LEDs como 4 y confirma el formato de color. Sigue esta lógica del programa: la tira primero parpadea en rojo; después de 0.5 segundos, la tira parpadea en verde y hace una pausa de 0.5 segundos nuevamente.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249961-3f674736-8e2a-4dd3-bab0-f2177cd17f71.png#height=514&id=FqxUe&originHeight=514&originWidth=1193&originalType=binary&ratio=1&size=0&status=done&style=none&width=1193) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

#### 1.3 Conectar un Dispositivo

Desliza directamente el micro:bit en el BitMaker y ten cuidado de no invertirlo. Luego conecta el micro:bit a tu PC con un cable USB. Verifica si el indicador LED en el micro:bit se enciende. Si no, necesitas desconectar el cable USB y conectarlo a los dispositivos nuevamente.

#### 1.4 Descargar un Programa

Ya se te ha presentado cómo descargar un programa en los [tutoriales anteriores](#), lo cual puede resumirse simplemente en pasos como: renombrar un programa, hacer clic en el botón "Download" y enviarlo al micro:bit.
<!-- [previous tutorials](#https://docproxy.tinkergen.com/web/#/2?page_id=329) -->

#### 1.5 Ejecutar un Programa

Enciende el interruptor en el BitMaker y verifica si el micro:bit puede funcionar normalmente.

### 2. Otros Tutoriales

Como se mencionó al principio, BitMaker es capaz de conectar módulos Grove con un micro:bit. Proporcionamos tutoriales específicos en [4.3 BitGadget Kit](#) para mostrarte cómo hacerlo. Si tienes algunos módulos Grove contigo, adelante y sigue los tutoriales para comenzar tus proyectos. Si no los tienes, ¡visita nuestra TinkerGen Shop y compra!

> BitMaker es compatible con todos los módulos Grove.
<!-- [4.3 BitGadget Kit](#https://docproxy.tinkergen.com/web/#/2?page_id=325)  -->

## Materiales del Curso

Puedes ver los materiales del curso sobre micro:bit y BitMaker en nuestra plataforma de aprendizaje en línea Make2Learn a través de esta dirección: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Archivos Adjuntos

Archivo adjunto: https://files.seeedstudio.com/wiki/microbit_wiki_page/microbit-music player.hex

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
