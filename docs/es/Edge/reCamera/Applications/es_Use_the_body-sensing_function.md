---
description: Usa la función de detección corporal para controlar Subway Surfers.
title: Juega a Subway Surfers con control mediante sensor corporal
keywords:
  - reCamera
  - Control sensorial
  - Juego
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_title.gif
slug: /es/use_the_motion-sensing_function_of_recamera_to_play_games
sidebar_position: 9
last_update:
  date: 11/27/2025
  author: Xinrui Wu
---

# Juega a Subway Surfers con control por sensor corporal

## Introducción

La reCamera es una cámara AI equipada con potentes capacidades de computación en el borde. Esta demostración muestra su capacidad para ejecutar el modelo YOLO11n-Pose en tiempo real a nivel de dispositivo - sin depender de la nube, puede identificar con precisión los puntos clave y posturas del cuerpo humano. Al capturar los movimientos del jugador con la reCamera, transformamos nuestros cuerpos en controladores, permitiéndonos operar "Subway Run" con sensaciones corporales naturales: ¡saltar, agacharse y esquivar hacia la izquierda y derecha, todo en un movimiento fluido!

Aquí se muestra el efecto de uso después de completar esta demostración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_text.gif" /></div>

## Preparación del Hardware

Una reCamera
una computadora

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. Abre SenseCraft y encuentra la Aplicación llamada "GAME"

### 1.1 Abrir Wiki

La entrada de SenseCraft está en la esquina superior derecha de la interfaz Wiki, haz clic para ingresar a SenseCraft

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_1.png" /></div>

### 1.2 Espacio de trabajo en la reCamera

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_2.png" /></div>

### 1.3 Encuentra la Aplicación llamada GAME y haz clic en ella

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_3.png" /></div>

### 1.4 Despliega esta Aplicación en la reCamera

Desliza hasta la parte inferior de la página, haz clic en Open Application, luego haz clic en Visit Workspace Via USB (debes conectar la reCamera a tu computadora en este momento)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_4.png" /></div>

Luego ingresarás al Espacio de trabajo, el nodo Node-RED se cargará por un momento, por favor espera pacientemente a que se complete la carga

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_5.png" /></div>

Después de cargar, verás la siguiente interfaz, haz clic en No y sal

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_6.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_7.png" /></div>

Haz clic en el botón Deploy en la esquina superior derecha

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_8.png" /></div>

Después de que el despliegue sea exitoso, aparecerá una ventana emergente, y luego el botón de despliegue se volverá gris.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_9.png" /></div>

Luego abre el Dashboard para ver el efecto

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_10.png" /></div>

En este punto deberías poder ver exitosamente la pantalla de detección como sigue

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_11.png" /></div>

### 1.5 prueba el disparador de las cuatro acciones arriba, abajo, izquierda y derecha

#### 1.5.1 Estado inicial

Esta es la acción inicial, es decir, el regreso al estado medio. Cuando fijas la reCamera, ajusta el ángulo, párate frente a la reCamera, pon tus brazos a ambos lados naturalmente, y controla la pelota para que esté en la línea central y entre la línea púrpura y el área verde. En este momento, puedes realizar otras acciones para probar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_12.png" /></div>

#### 1.5.1 Izquierda

Brazo izquierdo hacia la izquierda, mantén el brazo derecho quieto, controla la pelota hacia la izquierda de la línea central, se mostrará en azul, en este momento se determina que es izquierda

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_13.png" /></div>

#### 1.5.2 Derecha

Brazo derecho hacia la derecha, mantén el brazo izquierdo quieto, controla la pelota hacia la derecha de la línea central, se mostrará en amarillo, en este momento se juzga que es derecha

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_14.png" /></div>

#### 1.5.3 Arriba

Ambos brazos deben levantarse hacia arriba. Cuando veas que la línea púrpura excede la línea amarilla, se determina que es hacia arriba y la pelota permanecerá blanca.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_15.png" /></div>

#### 1.5.4 ABAJO

Mantén el brazo de vuelta al medio y luego agáchate naturalmente. Controla la pelota hacia el área de agacharse. La pelota se volverá roja. En este momento, se determina que es hacia abajo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_16.png" /></div>

:::note
Si quieres disparar un cierto conjunto de acciones seguidas, como ir a la izquierda dos veces seguidas, o ir a la izquierda y luego hacia arriba, entonces cuando hagas la primera acción izquierda, primero debes hacer que la pelota regrese al medio y luego hacer la segunda acción.
:::

## 2. Descarga el programa de control python correspondiente y ejecútalo.

Haz clic en este [enlace de GitHub](https://github.com/xr686/Receive-the-information-from-the-reCamera-to-control-the-computer-through-body-sensing..git)

Después de ingresar, descarga el paquete comprimido de este proyecto localmente

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_17.png" /></div>

Después de la descompresión, abre scket_udp.py, y luego descarga primero una dependencia que controla el teclado.

```bash
pip install pynput
```

Luego puedes ejecutar este programa python. En este momento, debes mantener la pantalla de detección de reCamera en efecto, y verás la salida del resultado de determinación de acción.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_18.png" /></div>

## 3. Abre el juego (tomando la versión web de subway parkour como ejemplo)

Después de asegurar que tu detección de reCamera y programas python estén ejecutándose y la salida de las acciones de prueba no tenga problemas, abre la [página web de subway parkour](https://subway-surfers.gg/), luego haz clic en "Start Game" ¡y puedes comenzar a jugar!

:::note
Solo una persona puede aparecer en la pantalla. ¡Cuando otras personas irrumpan, llevará a un error en el juicio de acción!
:::

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
