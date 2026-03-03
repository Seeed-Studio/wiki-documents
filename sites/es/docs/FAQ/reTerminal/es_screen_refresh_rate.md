---
description: reTerminal && reTerminal DM-FAQ
title: Cómo resolver la tasa de refresco de pantalla demasiado baja
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/screen_refresh_rate_low
last_update:
  date: 7/2/2024
  author: Parker
---

<!-- ### Q17: How to solve screen refresh rate is too low -->

## Descripción del problema

La pantalla tiene rayas de parpadeo de refresco notables.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/DM_bug.gif" alt="pir" width={600} height="auto" /></p>

## Solución del problema

- **Paso 1.** Ingresa el siguiente comando en la terminal.

```sh
sudo raspi-config
```

- **Paso 2.** Selecciona `6 Advanced Options` y presiona Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/01.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.** Selecciona `A9 Wayland` y presiona Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/02.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Selecciona `Yes` y presiona Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/03.png" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Selecciona `Ok` y presiona Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/04.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Selecciona `Finish` y presiona Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/05.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Selecciona reiniciar ahora, selecciona `Yes` y presiona Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/06.png" alt="pir" width={600} height="auto" /></p>

:::note
Si estás usando un sistema bullseye, cambiar al modo wayland puede deshabilitar tu software de inicio de sesión remoto VNC.
Si estás usando un sistema bookworm, no tendrás este problema.
:::