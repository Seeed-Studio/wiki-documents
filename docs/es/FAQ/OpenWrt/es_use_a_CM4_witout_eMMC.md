---
description: OpenWrt-FAQ
title: Cómo usar un CM4 sin eMMC en la Placa Portadora Dual Gigabit Ethernet
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/use_a_CM4_witout_eMMC
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q2: ¿Qué pasa si tengo la Placa Portadora Dual Gigabit Ethernet versión sin CM4 y conecto un CM4 sin emmC? -->

Si quieres usar un Compute Module 4 sin eMMC en la Placa Portadora Dual Gigabit Ethernet, entonces necesitas flashear OpenWrt en una tarjeta micro-SD e insertarla en la placa. Sigue los pasos a continuación según tu sistema operativo.

- **Paso 1.** Inserta una tarjeta micro-SD en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Descarga el software **balenaEtcher** visitando [este enlace](https://www.balena.io/etcher) según tu sistema operativo

- **Paso 3.** Ejecuta **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Paso 4.** Haz clic en **Flash from file** y apunta al archivo de imagen de OpenWrt que descargaste anteriormente

- **Paso 5.** Haz clic en **Select target** y selecciona la tarjeta micro-SD conectada

- **Paso 6.** Finalmente, haz clic en **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 7.** Expulsa la tarjeta micro-SD de la computadora e insértala en la Placa Portadora Dual Gigabit Ethernet

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/micro-sd-install.png" alt="pir" width="400" height="auto"/></p>