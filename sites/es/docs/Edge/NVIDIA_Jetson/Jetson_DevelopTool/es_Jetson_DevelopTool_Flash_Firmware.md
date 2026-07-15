---
description: Guía paso a paso para flashear firmware JetPack en dispositivos Jetson de Seeed Studio usando el módulo Flash Center en Seeed Jetson DevelopTool.
title: Flashear firmware
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - Flash Center
  - JetPack
  - firmware flash
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_flash_firmware
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/es/jetson_developtool_flash_firmware/
---

El módulo **Flash Center** te permite descargar y flashear firmware oficial JetPack a cualquier dispositivo Jetson de Seeed Studio compatible con un único flujo de trabajo, sin necesidad de scripts BSP por línea de comandos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png" style={{width:800, height:'auto'}}/></div>

## Demo: Tutorial completo de flasheo

<div style={{textAlign:'center'}}>
  <video width="800" controls>
    <source src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-firmware-tutorial-en.mp4" type="video/mp4"/>
  </video>
</div>

## Antes de empezar

- Se recomienda encarecidamente un host Linux nativo (Ubuntu 20.04/22.04/24.04). Consulta [Connect Device](/es/jetson_developtool_connect_device) para la configuración del modo USB Recovery.
- Asegúrate de tener al menos **20 GB** de espacio libre en disco para la descarga y extracción del firmware.

## Flujo de trabajo de flasheo

**Paso 1. Selecciona tu dispositivo y la versión de L4T.**

En la pestaña **Flash Center**, elige el modelo de tu dispositivo (por ejemplo, `J4012s`) y la versión de L4T de destino en la lista desplegable. Consulta [Supported Devices](/es/jetson_developtool_supported_devices) para ver la lista completa de compatibilidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-select-device.png" style={{width:800, height:'auto'}}/></div>

**Paso 2. Descarga y verifica el firmware.**

Haz clic en **Download / Extract BSP**. La herramienta:

- Descargará el paquete de firmware con soporte de reanudación (es seguro interrumpir y continuar)
- Verificará la integridad de la descarga mediante checksum SHA256
- Extraerá el BSP automáticamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-prepare-bsp.png" style={{width:800, height:'auto'}}/></div>

**Paso 3. Pon el dispositivo en modo Recovery.**

Mantén pulsado el botón **Recovery** en el dispositivo mientras conectas el cable USB-C a tu PC host (o mientras lo enciendes). Suéltalo después de 2 segundos.

**Paso 4. Detecta el dispositivo.**

Haz clic en **Detect Device** en la herramienta. Deberías ver que el dispositivo se detecta por USB. Si no se encuentra, vuelve a comprobar el cable USB y los pasos del modo Recovery.

**Paso 5. Inicia el flasheo.**

Haz clic en **Start Flash**. El proceso tarda **2–10 minutos** dependiendo del tamaño del firmware y de la velocidad del USB. No desconectes la alimentación ni el USB durante el flasheo.

Una vez finalizado, el dispositivo se reiniciará automáticamente con el nuevo firmware.

:::tip
Si estás en Windows y la detección USB falla, prueba el flujo de trabajo con WSL2 + usbipd. La herramienta te guiará para adjuntar el dispositivo USB a WSL2.
:::

:::caution
El flasheo borrará todos los datos en la eMMC/NVMe del Jetson. Haz una copia de seguridad de los datos importantes antes de continuar.
:::

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
