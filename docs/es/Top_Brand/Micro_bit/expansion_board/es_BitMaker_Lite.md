---
description: Micro_bit BitMaker lite
title: BitMaker Lite
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BitMaker_lite
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-e058e745-c2f4-4263-8a0b-9c38faa4085d.png#align=left&display=inline&height=512&originHeight=512&originWidth=814&size=0&status=done&style=none&width=814) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

## Introducción
BitMaker Lite es una versión compacta y simplificada de BitMaker. Solo tiene 3 puertos Grove, pero esto es suficiente para muchos proyectos. La conveniencia de conectar y usar significa que puedes implementar fácilmente un proyecto usando un módulo grove. El zumbador incluido también hace posibles muchos proyectos de audio interesantes, por ejemplo, un piano de frutas. Si quieres acceder a más GPIOs, BitMaker Lite también proporciona conexiones de todos los pines disponibles del micro:bit, puedes soldar conectores de cabecera para usarlos.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416911-961efb23-8578-4cfa-a224-29da21dcd517.png#align=left&display=inline&height=419&originHeight=419&originWidth=1156&size=0&status=done&style=none&width=1156) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/10.png)

## Tutoriales
### 1. Reproductor de Música
#### 1.1 Implementación

El micro:bit reproduce una canción de cumpleaños una vez al encenderse.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416918-8d8828f3-a79b-45ad-a721-186f3f7756fb.png#align=left&display=inline&height=399&originHeight=399&originWidth=709&size=0&status=done&style=none&width=709) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/11.png)

#### 1.2 Escribir un Programa
Añade el bloque al iniciar y conecta el bloque iniciar melodía (dadadum) repitiendo (una vez), desde la pestaña Música. Selecciona una canción de cumpleaños en este bloque.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416887-1ca9e66a-ee00-4f89-83cf-7b8faafdfa3b.png#align=left&display=inline&height=171&originHeight=171&originWidth=535&size=0&status=done&style=none&width=535) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/12.png)

#### 1.3 Conectar un Dispositivo
Desliza el micro:bit en BitMaker Lite y ten cuidado de no invertirlo. Conecta el micro:bit a tu PC con un cable USB. Verifica si el indicador LED en el micro:bit se enciende. Si no, el cable USB puede estar conectado incorrectamente.

#### 1.4 Descargar un Programa
Ya se te ha introducido cómo descargar un programa en los [tutoriales anteriores](https://docproxy.tinkergen.com/web/#/2?page_id=329), que se puede simplificar en pasos como: renombrar un programa, hacer clic en el botón "Descargar" y enviarlo al micro:bit.

#### 1.5 Ejecutar un Programa
Enciende el interruptor en el BitMaker Lite y verifica si el micro:bit reproduce la canción de cumpleaños.


### 2. Diversión con Acelerómetro
#### 2.1 Implementación

El micro:bit muestra un patrón y reproduce una melodía correspondiente cada vez que hace diferentes gestos.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416904-9f5c413e-032f-4651-8d51-303ca7f57420.png#align=left&display=inline&height=490&originHeight=490&originWidth=632&size=0&status=done&style=none&width=632) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/13.png)

#### 2.2 Escribir un Programa
Sigue la lógica del programa y el código:<br />
Al encenderse, el micro:bit muestra un icono de corazón.<br />
Cuando el micro:bit se agita, la pantalla se limpia y no muestra nada.<br />
Cuando el logo está derecho hacia arriba, el micro:bit muestra una flecha "Norte" y reproduce la melodía "saltar arriba".<br />
Cuando el logo está derecho hacia abajo, el micro:bit muestra una flecha "Sur" y reproduce la melodía "saltar abajo".<br />
Cuando el micro:bit se inclina a la izquierda, muestra una flecha "Oeste" y reproduce la melodía "dadadum".<br />
Cuando el micro:bit se inclina a la derecha, muestra una flecha "Este" y reproduce la melodía "entertainer".<br />
Cuando la pantalla está boca arriba, el micro:bit muestra una cara feliz y reproduce la melodía "encender".<br />
Cuando la pantalla está boca abajo, el micro:bit muestra una cara triste y reproduce la melodía "apagar".
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416885-b70ab193-d5c2-47d1-ab29-bdb3452d6aa2.png#align=left&display=inline&height=741&originHeight=741&originWidth=982&size=0&status=done&style=none&width=982) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/14.png)

#### 2.3 Conectar un Dispositivo
Desliza el micro:bit en BitMaker Lite y ten cuidado de no invertirlo. Conecta el micro:bit a tu PC con un cable USB. Verifica si el indicador LED en el micro:bit se enciende. Si no, el cable USB puede estar conectado incorrectamente.

#### 2.4 Descargar un Programa
Ya se te ha introducido cómo descargar un programa en los tutoriales anteriores, que se puede simplificar en pasos como: renombrar un programa, hacer clic en el botón "Descargar" y enviarlo al micro:bit.

#### 2.5 Ejecutar un Programa
Enciende el interruptor en el BitMaker Lite y verifica si el programa puede ejecutarse normalmente.

### 3. Otros Proyectos

Como se mencionó desde el inicio, BitMaker Lite es capaz de conectar módulos Grove con un micro:bit. Proporcionamos tutoriales específicos en [4.2 BitStarter Kit](https://docproxy.tinkergen.com/web/#/2?page_id=403) para mostrarte cómo hacer eso. Si tienes algunos módulos Grove contigo, adelante y sigue los tutoriales para comenzar tus proyectos. Si no los tienes, visita nuestra Tienda TinkerGen y ordena algunos!

> BitMaker Lite es compatible con todos los módulos Grove.

#### Añadir una Extensión
Para habilitar módulos Grove cuando se usa un BitMaker Lite, necesitamos añadir una extensión a MakeCode. Descubramos cómo hacer eso:

- Ve a MakeCode: [https://makecode.microbit.org](https://makecode.microbit.org/)
- Crea un nuevo proyecto para entrar al espacio de trabajo. Haz clic en el icono de engranaje (para configuraciones) en la barra azul.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416889-8342e086-2cdc-4416-bbbf-95d991f48444.png#align=left&display=inline&height=524&originHeight=524&originWidth=1072&size=0&status=done&style=none&width=1072) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/15.png)

- Selecciona Extensions del menú desplegable que te lleva a la página de extensiones.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-ee4ae33c-ffc2-44b8-a127-bf55f7e4e0e5.png#align=left&display=inline&height=712&originHeight=712&originWidth=931&size=0&status=done&style=none&width=931) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/16.png)

- Ingresa la dirección de la extensión BitMaker Lite en el cuadro de búsqueda: [https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416930-10133e74-2d1f-41d1-9a3c-1c29482f27a3.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/17.png)

> Si aparece un mensaje indicando que la extensión no existe, cierra el navegador e ingresa a MakeCode para intentar nuevamente.

- Haz clic en el paquete de extensión que te lleva de vuelta al espacio de trabajo. Verás que la extensión Grove se ha añadido exitosamente.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416925-93ed4b5a-8d37-4841-be77-0d6564d01cc8.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/18.png)


## Materiales del Curso
Puedes ver materiales de curso relacionados sobre el micro:bit y BitMaker Lite en nuestra plataforma de aprendizaje en línea Make2Learn a través de esta dirección: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Adjuntos
#### [Adjunto: Código Fuente del Tutorial BitMaker Lite](https://tinkergen.com/filedownload/179268)

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
