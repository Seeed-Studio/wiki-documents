---
description: Guía de Hardware de reTerminal DM
title: Guía de Hardware de reTerminal DM
keywords:
  - Edge
  - reTerminal-DM
  - Hardware Guide
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reterminal-dm-hardware-guide
last_update:
  date: 05/19/2023
  author: Peter Pan
---
# Descripción General del Hardware de reTerminal DM

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM es un HMI industrial de código abierto de 10.1" - un Maestro de Dispositivo Integrado para unificar el flujo de datos y gestionar el dispositivo en sitio.

Basado en Raspberry Pi CM4, y como un dispositivo todo-en-uno Panel PC, HMI, PLC, Gateway IIoT, reTerminal DM es una nueva generación de hub de detección interactivo con una pantalla grande de grado industrial IP65.

Está equipado con rica escalabilidad y conectividad híbrida, soportando bus CAN, RS485, RS232, puerto Gigabit Ethernet, y otras interfaces, así como potentes capacidades de comunicación inalámbrica como 4G, LoRa®, WiFi, y BLE.

> \*Los módulos 4G y LoRa® no vienen con reTerminal DM por defecto, por favor compre los módulos relevantes en consecuencia, para
> [paquete 4G](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

Esta Wiki le mostrará cómo Ensamblar y Desensamblar la unidad para instalar componentes periféricos, así como la opción para montaje

## Prerrequisito de hardware

Necesita preparar el siguiente hardware

- reTerminal DM x 1
- Juego de destornilladores
  - Phillips + 3.5 bit
  - Phillips + 3.0 bit
  - Ranurado - 2.5 bit

### Guía de Ensamblaje y Desensamblaje de la Cubierta Trasera

**PASO 1:** Por favor coloque cuidadosamente el reTerminal DM con la pantalla hacia abajo sobre una superficie plana.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/facedown.png" alt="pir" width="800" height="auto"/></p>

**PASO 2:** Afloje los tornillos y retire la cubierta trasera.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/back_screw.png" alt="pir" width="800" height="auto"/></p>

### Ensamblaje de Antena WiFi/BLE

**PASO 1:** Retire la cubierta trasera, saque el tapón de silicona.

**PASO 2:** Cargue el conector SMA de la antena en la cubierta trasera, y atornille la antena en el conector SMA

**PASO 3:** Inserte el otro extremo del alimentador de la antena (enchufe IPEX) en el socket IPEX del CM4.

**PASO 4:** Cubra la cubierta trasera y bloquee los tornillos.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/wifi-antenna.png" alt="pir" width="800" height="auto"/></p>

### Ensamblaje del Módulo 4G y Antena

**PASO 1:** Retire la cubierta trasera, saque el tapón de silicona.

**PASO 2:** Cargue el conector SMA de la antena en la cubierta trasera, y atornille la antena en el conector SMA

**PASO 3:**  Inserte el módulo 4G en el socket de la placa principal y bloquee los tornillos.

**PASO 4:**  Inserte el otro extremo del alimentador de la antena (enchufe IPEX) en el socket IPEX del módulo 4G.

**PASO 5:** Cubra la cubierta trasera y bloquee los tornillos.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/4g-antenna.png" alt="pir" width="800" height="auto"/></p>

### Ensamblaje del Módulo LoRa® y Antena

**PASO 1:** Retire la cubierta trasera, saque el tapón de silicona.

**PASO 2:** Cargue el conector SMA de la antena en la cubierta trasera, y atornille la antena en el conector SMA

**PASO 3:**  Inserte el módulo LoRa® en el socket de la placa principal y bloquee los tornillos.

**PASO 4:**  Inserte el otro extremo del alimentador de la antena (enchufe IPEX) en el socket IPEX del módulo LoRa®.

**PASO 5:** Cubra la cubierta trasera y bloquee los tornillos.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/lora-antenna.png" alt="pir" width="800" height="auto"/></p>

### Instalar Módulo de Extensión PCIe

:::note
El Módulo de Extensión PCIe será lanzado pronto, por favor manténgase atento.
:::

**PASO 1:** Retire la cubierta trasera.

**PASO 2:** Inserte dos juegos de cables de 16 pines en los sockets del tablero del Módulo de Extensión PCIe y el Tablero de Puerto de Red Dual.

**PASO 3:** Cargue el tablero del Módulo de Extensión PCIe en la placa principal y bloquee los tornillos.

**PASO 4:** Coloque el Tablero de Puerto de Red Dual en la cubierta frontal del DM, y bloquee los tornillos.

**PASO 5:** Retire la Pantalla del Puerto de Red de la Ranura de expansión.

**PASO 6:** Cubra la carcasa trasera y bloquee los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/PCIe.png" alt="pir" width="800" height="auto"/></p>

### Instalar SSD

**PASO 1:** Retire la cubierta trasera.

**PASO 2:** Cargue el [tablero del Módulo de Extensión PCIe](https://www.seeedstudio.com/reTerminal-DM-Dual-LAN-and-SSD-extension-p-5766.html) en la placa principal y bloquee los tornillos.

**PASO 3:** Cubra la carcasa trasera de vuelta y bloquee los tornillos.

**PASO 4:** Desatornille el tornillo de la cubierta de remoción rápida y saque la cubierta de remoción rápida.

**PASO 5:** Cargue el SSD en el socket M.2 y bloquee los tornillos.

**PASO 6:** Coloque la cubierta de remoción rápida de vuelta y bloquee los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/ssd.png" alt="pir" width="800" height="auto"/></p>

### Instalar Cámara

:::note

El Módulo PiCamera V2 ha sido probado y funciona en reTerminal DM, Necesitará obtener un módulo de cámara FPC largo personalizado para usar en reTerminal DM.

:::

**PASO 1:** Retire la cubierta trasera.

**PASO 2:** Inserte la cámara en el tablero inferior de la cámara.

**PASO 3:** Inserte el cable FPC de la cámara en el socket del tablero inferior de la cámara.

**PASO 4:** Instale la cámara en la cubierta frontal y adhiera una etiqueta para fijarla.

**PASO 5:** Ensamble el módulo de la cámara en la cubierta frontal, y bloquee los tornillos.

**PASO 6:** Conecta el FPC al socket de la placa principal, coloca la cubierta trasera de vuelta y aprieta los tornillos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/camera.png" alt="pir" width="800" height="auto"/></p>

### Instalar Módulo PoE

**PASO 1:** Retira la cubierta trasera y saca la placa principal.

**PASO 2:** Inserta el PoE en la placa principal según la marca de punto.

**PASO 3:** Suelda el módulo PoE en la parte trasera de la placa principal.

**PASO 4:** Asegura de vuelta la placa principal, coloca la cubierta trasera y aprieta los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/poe.png" alt="pir" width="800" height="auto"/></p>

### Reemplazo de Batería RTC

**PASO 1:** Retira la cubierta trasera.

**PASO 2:** Inserta el cable de la batería RTC en el socket de la batería RTC, y adhiere la batería RTC al puerto de red.

**PASO 3:** Coloca la cubierta trasera de vuelta y aprieta los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/RTC_battery.png" alt="pir" width="800" height="auto"/></p>

### Reemplazo de Fusible

**PASO 1:** Retira la cubierta trasera.

**PASO 2:** Saca el fusible viejo del socket de fusible de la placa principal e inserta el fusible nuevo.

**PASO 3:** Coloca la cubierta trasera de vuelta y aprieta los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/fuse.png" alt="pir" width="800" height="auto"/></p>

### Guía de Conexión a Tierra del Chasis

**PASO 1:** Afloja el tornillo de conexión a tierra.

**PASO 2:** Carga el conector de conexión a tierra y aprieta el tornillo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/grounding.png" alt="pir" width="800" height="auto"/></p>

### Guía de Conexión de Terminal

**PASO 1:** Inserta el conector de alimentación en la dirección mostrada abajo.

**PASO 2:** Inserta el conector de cable en la dirección mostrada abajo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/terminal_block.png" alt="pir" width="800" height="auto"/></p>

## Guía de Montaje

El reTerminal DM soporta múltiples métodos de instalación, y los usuarios pueden elegir flexiblemente según sus escenarios de uso. Debe notarse que el producto estándar no viene con los accesorios requeridos para Montaje en Panel y Montaje en Riel DIN, y se necesitan comprar accesorios definidos para la instalación. Para detalles sobre accesorios, por favor consulta la sección 2.3 Interfaces y Módulos Opcionales.

### Montaje en Panel

Se requiere el Kit de montaje en panel para reTerminal DM para el montaje en panel

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/panel_mount.png" alt="pir" width="800" height="auto"/></p>

### Montaje VESA

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/VESA.png" alt="pir" width="800" height="auto"/></p>

### Montaje en Riel DIN

Se requiere Bloque Deslizante para Riel de Guía Lineal para el montaje en Riel DIN

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070181-sliding-block-for-linear-guideway-rail_including-screws_-45font.jpg" alt="pir" width="400" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sliding-block-for-linear-guideway-rail-including-screws-p-5527.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/DIN.png" alt="pir" width="800" height="auto"/></p>

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
