---
description: Guía de Hardware de reTerminal DM
title: Guía de Hardware de reTerminal DM
keywords:
  - Edge
  - reTerminal-DM
  - Guía de Hardware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reterminal-dm-hardware-guide
last_update:
  date: 04/06/2025
  author: Erick González
---
# Descripción General del Hardware de reTerminal DM

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM es una HMI industrial de código abierto de 10,1" – un dispositivo maestro integrado para unificar el flujo de datos y gestionar el dispositivo in situ.

Basado en Raspberry Pi CM4, y como un PC de panel, HMI, PLC y Gateway IIoT todo en uno, reTerminal DM es una nueva generación de hub de sensado interactivo con una pantalla industrial de gran formato y grado IP65.

Está equipado con una rica escalabilidad y conectividad híbrida, soportando bus CAN, RS485, RS232, puerto Ethernet Gigabit y otras interfaces, así como potentes capacidades de comunicación inalámbrica como 4G, LoRa®, WiFi y BLE.

> \*Los módulos 4G y LoRa® no vienen incluidos por defecto en el reTerminal DM, por lo que es necesario adquirir los módulos correspondientes. Para el 
> [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

Esta Wiki te mostrará cómo ensamblar y desmontar la unidad para instalar componentes periféricos, así como las opciones de montaje.

## Requisitos de Hardware 
Necesitarás preparar el siguiente hardware:

- reTerminal DM x 1
- Juego de destornilladores:
  * Phillips + 3,5 bit
  * Phillips + 3,0 bit
  * Plana - 2,5 bit

### Guía de Ensamblaje y Desmontaje de la Tapa Trasera

**PASO 1:** Coloca cuidadosamente el reTerminal DM con la pantalla hacia abajo sobre una superficie plana.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/facedown.png" alt="pir" width="800" height="auto"/></p>

**PASO 2:** Afloja los tornillos y retira la tapa trasera.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/back_screw.png" alt="pir" width="800" height="auto"/></p>

### Ensamblaje de la Antena WiFi/BLE

**PASO 1:** Retira la tapa trasera y saca el tapón de silicona.

**PASO 2:** Inserta el conector SMA de la antena en la tapa trasera y atornilla la antena al conector SMA.

**PASO 3:** Inserta el otro extremo del cable de la antena (conector IPEX) en el socket IPEX del CM4.

**PASO 4:** Coloca nuevamente la tapa trasera y asegúrala con los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/wifi-antenna.png" alt="pir" width="800" height="auto"/></p>

### Ensamblaje del Módulo y la Antena 4G

**PASO 1:** Retira la tapa trasera y saca el tapón de silicona.

**PASO 2:** Inserta el conector SMA de la antena en la tapa trasera y atornilla la antena al conector SMA.

**PASO 3:** Inserta el módulo 4G en el socket de la placa principal y asegura los tornillos.

**PASO 4:** Inserta el otro extremo del cable de la antena (conector IPEX) en el socket IPEX del módulo 4G.

**PASO 5:** Coloca nuevamente la tapa trasera y asegura los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/4g-antenna.png" alt="pir" width="800" height="auto"/></p>

### Ensamblaje del Módulo y la Antena LoRa®

**PASO 1:** Retira la tapa trasera y saca el tapón de silicona.

**PASO 2:** Inserta el conector SMA de la antena en la tapa trasera y atornilla la antena al conector SMA.

**PASO 3:** Inserta el módulo LoRa® en el socket de la placa principal y asegura los tornillos.

**PASO 4:** Inserta el otro extremo del cable de la antena (conector IPEX) en el socket IPEX del módulo LoRa®.

**PASO 5:** Coloca nuevamente la tapa trasera y asegura los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/lora-antenna.png" alt="pir" width="800" height="auto"/></p>

### Instalación del Módulo de Extensión PCIe

:::note
El Módulo de Extensión PCIe se lanzará próximamente, por favor mantente atento.
:::

**PASO 1:** Retira la tapa trasera.

**PASO 2:** Inserta dos juegos de cables de 16 pines en los sockets de la placa del Módulo de Extensión PCIe y la Placa de Doble Puerto de Red.

**PASO 3:** Inserta la placa del Módulo de Extensión PCIe en la placa principal y asegura los tornillos.

**PASO 4:** Coloca la Placa de Doble Puerto de Red en la tapa frontal del DM y asegura los tornillos.

**PASO 5:** Retira el separador de puertos de red del Slot de expansión.

**PASO 6:** Coloca nuevamente la carcasa trasera y asegura los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/PCIe.png" alt="pir" width="800" height="auto"/></p>

### Instalación del SSD

:::note
El SSD M.2 se instalará en el Módulo de Extensión PCIe, el cual se lanzará próximamente, por favor mantente atento.
:::

**PASO 1:** Retira la tapa trasera.

**PASO 2:** Inserta la placa del Módulo de Extensión PCIe en la placa principal y asegura los tornillos.

**PASO 3:** Coloca nuevamente la carcasa trasera y asegura los tornillos.

**PASO 4:** Desatornilla el tornillo de la cubierta de extracción rápida y retira la cubierta.

**PASO 5:** Inserta el SSD en el socket M.2 y asegura los tornillos.

**PASO 6:** Vuelve a colocar la cubierta de extracción rápida y asegura los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/ssd.png" alt="pir" width="800" height="auto"/></p>

### Instalación de la Cámara

:::note
El módulo PiCamera V2 ha sido probado y funciona en reTerminal DM. Necesitarás obtener un módulo de cámara FPC larga personalizado para usarlo en reTerminal DM.
:::

**PASO 1:** Retira la tapa trasera.

**PASO 2:** Inserta la cámara en la placa inferior de la cámara.

**PASO 3:** Inserta el cable FPC de la cámara en el socket de la placa inferior de la cámara.

**PASO 4:** Instala la cámara en la tapa frontal y coloca una etiqueta adhesiva para fijarla.

**PASO 5:** Monta el módulo de la cámara en la tapa frontal y asegura los tornillos.

**PASO 6:** Conecta el cable FPC al socket principal de la placa, coloca nuevamente la tapa trasera y asegura los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/camera.png" alt="pir" width="800" height="auto"/></p>

### Instalación del Módulo PoE

**PASO 1:** Retira la tapa trasera y extrae la placa principal.

**PASO 2:** Inserta el PoE en la placa principal según la marca de puntos.

**PASO 3:** Este soldera el módulo PoE en la parte trasera de la placa principal.

**PASO 4:** Vuelve a colocar la placa principal, cubre con la tapa trasera y asegúrala con los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/poe.png" alt="pir" width="800" height="auto"/></p>

### Reemplazo de la Batería RTC

**PASO 1:** Retira la tapa trasera.

**PASO 2:** Inserta el cable de la batería RTC en el socket correspondiente y coloca la batería RTC en el puerto de red.

**PASO 3:** Coloca nuevamente la tapa trasera y asegura los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/RTC_battery.png" alt="pir" width="800" height="auto"/></p>

### Reemplazo del Fusible

**PASO 1:** Retira la tapa trasera.

**PASO 2:** Extrae el fusible viejo del socket de fusibles de la placa principal e inserta el nuevo fusible.

**PASO 3:** Vuelve a colocar la tapa trasera y asegura los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/fuse.png" alt="pir" width="800" height="auto"/></p>

### Guía de Puesta a Tierra del Chasis

**PASO 1:** Afloja el tornillo de conexión a tierra.

**PASO 2:** Inserta el conector de tierra y aprieta el tornillo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/grounding.png" alt="pir" width="800" height="auto"/></p>

### Guía de Conexión de Terminales

**PASO 1:** Inserta el conector de alimentación en la dirección indicada a continuación.

**PASO 2:** Inserta el conector del cable en la dirección indicada a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/terminal_block.png" alt="pir" width="800" height="auto"/></p>

## Guía de Montaje

El reTerminal DM soporta múltiples métodos de instalación, y los usuarios pueden elegir de forma flexible según sus escenarios de uso. Cabe señalar que el producto estándar no incluye los accesorios necesarios para el montaje en panel y en riel DIN; estos accesorios deben adquirirse por separado. Para más detalles sobre accesorios, consulta la sección 2.3 Interfaces y Módulos Opcionales.

### Montaje en Panel

Se requiere el Kit de Montaje en Panel para reTerminal DM.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/panel_mount.png" alt="pir" width="800" height="auto"/></p>

### Montaje VESA

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/VESA.png" alt="pir" width="800" height="auto"/></p>

### Montaje en Riel DIN

Se requiere un Bloque Deslizante para Carril de Guía Lineal para el montaje en riel DIN.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070181-sliding-block-for-linear-guideway-rail_including-screws_-45font.jpg" alt="pir" width="400" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sliding-block-for-linear-guideway-rail-including-screws-p-5527.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/DIN.png" alt="pir" width="800" height="auto"/></p>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte distintos canales de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
