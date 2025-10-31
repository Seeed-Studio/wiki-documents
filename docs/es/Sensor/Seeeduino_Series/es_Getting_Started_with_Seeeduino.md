---
description: Primeros pasos con Seeeduino
title: Primeros pasos con Seeeduino
keywords:
- Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Getting_Started_with_Seeeduino
last_update:
  date: 1/12/2022
  author: hushuxu
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Hello_world.jpg" alt="pir" width={600} height="auto" /></p>

### **0. Hola mundo**

Generalmente, los profesores nos enseñan a escribir un simple ejemplo de Hola Mundo cuando comenzamos a aprender un lenguaje de programación. Esto es solo una introducción básica, pero es un proceso muy importante. Aunque no estés familiarizado con Arduino, no te preocupes. Puedes aprender el hola mundo de Arduino: encender un LED.
Ahora tomamos Seeeduino como ejemplo para aprender cómo encender un LED que está controlado por el pin Digital 13. Antes de hacer esto, por favor asegúrate de haber descargado el Entorno Arduino e instalado el Driver de Seeeduino exitosamente. Si no, por favor haz clic aquí para aprender los pasos específicos.

### 1. Conectar Seeeduino a la PC

Conecta la placa Seeeduino a tu computadora usando el cable USB. El LED verde de alimentación (etiquetado PWR) debería encenderse.
(Cuando Seeeduino funciona independientemente, puedes seleccionar USB o adaptador de corriente para alimentar Seeeduino.)

### 2. Abrir el ejemplo Blink

Abre el sketch de ejemplo de parpadeo del LED: **File&gt;Examples&gt;01.Basics&gt;Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started1.png" alt="pir" width={600} height="auto" /></p>

### 3. Selecciona tu placa

Necesitarás seleccionar la entrada en el menú Tools &gt; Board que corresponde a tu Arduino. Aquí necesitamos seleccionar ATmega328.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started2.png" alt="pir" width={600} height="auto" /></p>

### 4. Selecciona tu Puerto Serie

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started3.png" alt="pir" width={600} height="auto" /></p>

### 5. Cargar el programa

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos - deberías ver los LEDs RX y TX en la placa parpadeando. Si la carga es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started4.png" alt="pir" width={600} height="auto" /></p>

### 6. Resultado

Unos segundos después de que termine la carga, deberías ver el LED del pin 13 (L) en la placa comenzar a parpadear (en naranja). Si lo hace, ¡felicitaciones! Has puesto Arduino en funcionamiento.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>