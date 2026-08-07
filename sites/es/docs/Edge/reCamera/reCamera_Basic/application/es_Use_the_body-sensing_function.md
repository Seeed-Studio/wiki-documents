---
description: Usa la función de detección corporal para controlar Subway Surfers.
title: Juega Subway Surfers con control por sensor corporal
keywords:
  - reCamera
  - Control sensorial
  - Juego
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_title.gif
slug: /use_the_motion-sensing_function_of_recamera_to_play_games
sku: 102991896, 108990119, 100029708
sidebar_position: 9
last_update:
  date: 11/27/2025
  author: Xinrui Wu
createdAt: '2025-11-27'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/es/reCamera/reCamera_Basic/application/use_the_motion-sensing_function_of_recamera_to_play_games/
---

# Juega Subway Surfers con control por sensor corporal

## Introducción

La reCamera es una cámara de IA equipada con potentes capacidades de computación en el borde. Esta demostración muestra su capacidad para ejecutar el modelo YOLO11n-Pose en tiempo real a nivel de dispositivo: sin depender de la nube, puede identificar con precisión los puntos clave y las posturas del cuerpo humano. Al capturar los movimientos del jugador con la reCamera, transformamos nuestro cuerpo en un controlador, lo que nos permite manejar "Subway Run" con sensaciones corporales naturales: saltar, agacharse y esquivar a izquierda y derecha, ¡todo en un movimiento fluido!

Aquí se muestra el efecto de uso después de completar esta demostración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_text.gif" /></div>

## Preparación de hardware

Una reCamera
un ordenador

<table align="center">
 <tr>
  <th>reCamera 2002 Serie</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. Abre SenseCraft y encuentra las aplicaciones llamadas "GAME"

### 1.1 Abrir Wiki

La entrada de SenseCraft está en la esquina superior derecha de la interfaz de Wiki, haz clic para entrar en SenseCraft

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_1.png" /></div>

### 1.2 Abrir la aplicación desde SenseCraft

Abre la sección de aplicaciones de sensecraft, introduce "GAME" en el cuadro de entrada de la izquierda y luego haz clic para entrar en la aplicación GAME.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_19.png" /></div>

### 1.3 Despliega esta aplicación en la reCamera

Haz clic en Deploy Application en la página y luego haz clic en Visit Workspace Via USB (en este punto, debes conectar la reCamera a tu ordenador)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_23.png" /></div>

Luego entrarás en el Workspace, el nodo de Node-RED se cargará durante un rato, espera pacientemente a que termine la carga

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_5.png" /></div>

Después de la carga, verás la siguiente interfaz, haz clic en No y sal

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_6.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_7.png" /></div>

Haz clic en el botón Deploy en la esquina superior derecha

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_8.png" /></div>

Después de que el despliegue sea exitoso, aparecerá una ventana emergente como aviso y luego el botón de despliegue se volverá gris.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_9.png" /></div>

Luego abre el Dashboard para ver el efecto

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_10.png" /></div>

En este punto deberías poder ver correctamente la pantalla de detección como se muestra a continuación

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_11.png" /></div>

### 1.4 Cierra el firewall del ordenador y cambia la dirección IP de la reCamera

#### 1.4.1 Apaga todos los firewalls del ordenador

Apagar el firewall es para evitar que los mensajes UDP posteriores enviados por la reCamera sean interceptados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_22.png" /></div>

#### 1.4.2 Establece la dirección IP de la reCamera en 192.168.42.2

Abre el Panel de control en tu ordenador – Red e Internet – Conexiones de red, encuentra el dispositivo llamado "UsbNcm Host Device", este es tu dispositivo reCamera, haz clic derecho y selecciona propiedades para entrar.   

Este paso es para permitir que la reCamera se comunique con el ordenador en el mismo segmento de red.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_20.png" /></div>

Elige IPV4 – Propiedades – Usar la siguiente dirección IP – Cambia la dirección IP a 192.168.42.2 y la máscara de subred a 255.255.255.0, después de seleccionar, haz clic en Aceptar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_21.png" /></div>

### 1.5 Prueba el disparo de las cuatro acciones arriba, abajo, izquierda y derecha

#### 1.5.1 Estado inicial

Esta es la acción inicial, es decir, el estado de retorno al centro. Cuando fijes la reCamera, ajusta el ángulo, colócate frente a la reCamera, deja los brazos a ambos lados de forma natural y controla la pelota para que esté en la línea central y entre la línea morada y el área verde. En este momento, puedes realizar otras acciones para probar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_12.png" /></div>

#### 1.5.1 Izquierda

Brazo izquierdo hacia la izquierda, mantén el brazo derecho quieto, controla la pelota hacia la izquierda de la línea central, se mostrará en azul, en este momento se determina como izquierda

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_13.png" /></div>

#### 1.5.2 Derecha

Brazo derecho hacia la derecha, mantén el brazo izquierdo quieto, controla la pelota hacia la derecha de la línea central, se mostrará en amarillo, en este momento se determina como derecha

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_14.png" /></div>

#### 1.5.3 Arriba

Ambos brazos deben levantarse hacia arriba. Cuando veas que la línea morada supera la línea amarilla, se determina como hacia arriba y la pelota permanecerá blanca.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_15.png" /></div>

#### 1.5.4 ABAJO

Mantén el brazo de vuelta al centro y luego agáchate de forma natural. Controla la pelota hacia el área de sentadilla. La pelota se volverá roja. En este momento, se determina como hacia abajo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_16.png" /></div>

:::note
Si quieres disparar un cierto conjunto de acciones seguidas, como ir a la izquierda dos veces seguidas, o ir a la izquierda y luego hacia arriba, entonces cuando hagas la primera acción hacia la izquierda, primero debes hacer que la pelota vuelva al centro y luego hacer la segunda acción.
:::

## 2. Descarga el programa de control en python correspondiente y ejecútalo.

Haz clic en este [enlace de GitHub](https://github.com/xr686/Receive-the-information-from-the-reCamera-to-control-the-computer-through-body-sensing..git)

Después de entrar, descarga el paquete comprimido de este proyecto en local

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_17.png" /></div>

Después de descomprimir, abre scket_udp.py y luego descarga primero una dependencia que controle el teclado.

```bash
pip install pynput
```

Entonces puedes ejecutar este programa de python. En este momento, debes mantener la pantalla de detección de la reCamera en efecto y verás la salida del resultado de la determinación de la acción.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_18.png" /></div>

## 3. Abre el juego (toma como ejemplo la versión web de Subway Surfers)

Después de asegurarte de que tu detección de reCamera y los programas de python se estén ejecutando y que la salida de las acciones de prueba no tenga problema, abre la [página web de subway parkour](https://subway-surfers.gg/), luego haz clic en "Start Game" y ¡puedes empezar a jugar!

:::note
Solo puede aparecer una persona en la pantalla. ¡Cuando otras personas se crucen, provocará un error en el juicio de la acción!
:::

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
