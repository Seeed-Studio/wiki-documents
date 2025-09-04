---
description: Bluetooth_Shield_V2
title: Bluetooth Shield V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Bluetooth_Shield_V2
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shiled_v2.JPG" alt="pir" width={600} height="auto" /></p>

El Bluetooth Shield integra un módulo Bluetooth Serial. Puede ser usado fácilmente con Arduino/Seeedstudio para comunicación serial inalámbrica transparente. Puedes elegir dos pines desde Arduino D0 hasta D7 como Puertos Serie por Software para comunicarte con el Bluetooth Shield (D0 y D1 es Puerto Serie por Hardware). El shield también tiene dos conectores Grove (uno es Digital, el otro es Analógico) para que instales módulos Grove.

## Características

---
- Voltaje de Entrada: 3.3V
- Velocidad de baudios: 9600, 19200, 38400, 57600, 115200, 230400, 460800
- Compatible con Seeeduino/Arduino
- Hasta 10m de distancia de comunicación en casa sin obstáculos
- Interfaz UART (TTL) con velocidad de baudios programable
- Velocidad de baudios por defecto: 9600, Bits de datos: 8, Bit de parada: 1, Paridad: Sin paridad
- PINCODE por defecto:"1234"
- Un conjunto completo de comandos de configuración
- Antena PCB integrada

## Función de la interfaz

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_V2.0_K.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>Tipo de Pad</h3></td>
    <td><h3>Descripción</h3></td>
  </tr>
  <tr>
    <td><h4>BT_IO</h4></td>
    <td><h4>Puerto IO del módulo Bluetooth que puede ser controlado: leer, escribir.</h4></td>
  </tr>
  <tr>
    <td><h4>BT_RX</h4></td>
    <td><h4>Entrada de datos UART del módulo Bluetooth.</h4></td>
  </tr>  
  <tr>
    <td><h4>BT_TX</h4></td>
    <td><h4>Salida de datos UART del módulo Bluetooth.</h4></td>
  </tr>
  <tr>
    <td><h4>Dos conectores Grove</h4></td>
    <td><h4>Uno es Digital (D8 y D9), el otro es I2C/Analógico (A4 y A5).</h4></td>
  </tr>
  </tbody></table>

## Demostración

### 1：Conexión de Dos Bluetooth Shield

Esta demostración te mostrará cómo conectar dos bluetooth shield.

Necesitas dos piezas de [Seeeduino V3.0](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7),
Un Bluetooth Shield como Maestro mientras que el otro como Esclavo.

**Instalación de Hardware**

como sigue:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image0.png" alt="pir" width={600} height="auto" /></p>

asegúrate de la conexión correcta de los jumpers
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image4.jpg" alt="pir" width={600} height="auto" /></p>

**Descargar Código y Subir**

1. Puedes descargar el código en github, haz clic [aquí](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip), luego extráelo a la carpeta libraries de Arduino.

2. Abre Arduino IDE, abre File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Master_Button, entonces puedes abrir el código del Maestro

3. Abre Arduino IDE, abre File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Slave_led, entonces puedes abrir el código del Esclavo

4. Haz clic en Upload para Subir el código, si tienes algún problema sobre cómo iniciar Arduino, por favor haz clic [aquí](/es/Getting_Started_with_Seeeduino) para obtener ayuda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_ide_1.jpg" alt="pir" width={600} height="auto" /></p>

**Verificar El Resultado**

1. Después de terminar de Subir el código tanto al Maestro como al Esclavo, reinicia los dos dispositivos al mismo tiempo

2. Puedes ver el led parpadear, indicando que los dispositivos se estaban inicializando y conectando.

3. Después de varios segundos, el led se enciende, indicando que el Maestro y el Esclavo se habían conectado.

!!!Note
    Si no se observa el fenómeno anterior, intenta desconectar la alimentación y volver a conectarla.

### 2：Conectar a Teléfono Inteligente

Esta demostración te mostrará cómo conectar Bluetooth Shield a un Teléfono Inteligente.

Necesitamos un Seeeduino V3.0, un Teléfono Inteligente que tenga función Bluetooth.

A través de una App Bluetooth SPP

**Instalación de Hardware**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image1.png" alt="pir" width={600} height="auto" /></p>

**Descargar Código y Subir**

1. Puedes descargar el código en github, haz clic [aquí](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip), luego extráelo a la carpeta libraries de Arduino.

2. Abre Arduino IDE, File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Slave_Temperature, entonces puedes abrir el código

3. Haz clic en Upload para Subir el código, si tienes algún problema sobre cómo iniciar Arduino, por favor haz clic [aquí](//Getting_Started_with_Seeeduino) para obtener ayuda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Demo2.jpg" alt="pir" width={600} height="auto" /></p>

**Descargar una App SSP**

Aquí usamos un Teléfono Android, el mío es un Xiaomi 2A, abre Google Play, busca bluetooth spp, puedes encontrar muchos resultados.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Find_spp.png" alt="pir" width={600} height="auto" /></p>

La mayoría de estas apps son útiles, solo elige una y pruébala.

**Obtener Temperatura**

Después de instalar una app SPP, intenta conectarla a SeeedBTSlave, el código pin es: "0000"
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_App_1.png" alt="pir" width={600} height="auto" /></p>

Cuando la conexión esté bien, envía 't' a SeeedBTSlave, y puedes obtener la temperatura ahora:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_get_temp.png" alt="pir" width={600} height="auto" /></p>

## Recursos

* [Esquemático y Layout en formato Eagle](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Buletooth_Shield_v2.0_sch_pcb.zip)

- [Hoja de datos del módulo](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
