---
description: reTerminal-FAQ
title: Cómo flashear el SO si reemplazo el CM4 con una versión sin eMMC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/flashing_os_on_non-eMMC_CM4_replacement
last_update:
  date: 6/21/2023
  author: Seraphina
---


<!-- Q4: How can I flash OS if I replace the CM4 with non-eMMC version -->

Si quieres usar un Compute Module 4 sin eMMC en el reTerminal, entonces necesitas insertar una micro-SD y flashear el SO de tu elección. Sigue los pasos a continuación según tu sistema operativo.

- **Paso 1.** Inserta una tarjeta micro-SD en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

:::note
Puedes elegir descargar para **Windows, Mac o Ubuntu**
:::

- **Paso 3.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más

- **Paso 5.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

:::note
Puedes seleccionar SO como **Ubuntu de 64 bits** navegando en **Other general purpose OS**
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 6.** Haz clic en **CHOOSE STORAGE** y selecciona la tarjeta micro-sd conectada

- **Paso 7.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 8.** Expulsa la tarjeta micro-SD de la computadora e insértala en el reTerminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**Nota:** Necesitas abrir la carcasa del reTerminal para acceder a la ranura de la tarjeta micro-sd
