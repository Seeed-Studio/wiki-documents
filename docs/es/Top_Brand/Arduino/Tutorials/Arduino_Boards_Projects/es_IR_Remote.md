---
description: Control Remoto IR
title: Control Remoto IR
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/IR_Remote
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: IR Remote
category: Tutorial
oldwikiname:  IR Remote
prodimagename:  
surveyurl: https://www.research.net/r/IR_Remote
--- -->
IR es un medio de comunicación muy común. Esta demostración te mostrará cómo usar el módulo de envío y recepción IR.

Gran cantidad de electrodomésticos son controlados por Control Remoto IR, como TV, aire acondicionado y demás.

También podemos usar el módulo IR para controlar esos electrodomésticos.

**Hardware Requerido：**

* Arduino

* Emisor IR

* Receptor IR

* Botón

**Circuito：**

El Emisor IR se conecta a D3 y el Receptor IR se conecta a A4.

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_1.png)

**Código:**

Hay dos partes del código: obtener el valor del Control Remoto y Enviar comando.

Obtener Valor del Control Remoto：

Abre revTest de la Librería IRSendRev, abre el Monitor Serie. Toma tu Control Remoto, presiona un botón, entonces podrás encontrar que una serie de números han sido impresos.

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_2.png)

Esta serie de números es lo que necesitamos, anótala, la usaremos después.

Enviar Comando

Abre Arduino IDE, haz clic en File->Sketchbook->infrared.

Si ya obtuviste el valor de la tecla de encendido/apagado de tu TV, entonces apunta el emisor infrarrojo hacia tu TV, y presiona el botón.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>