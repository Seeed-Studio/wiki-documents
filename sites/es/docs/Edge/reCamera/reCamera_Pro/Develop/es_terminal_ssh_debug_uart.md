---
description: Accede a la línea de comandos de reCamera Pro a través del terminal de la WebUI, SSH o la consola serie DEBUG UART, y aprende cuándo usar cada una.
title: Terminal, SSH y Debug UART
keywords:
  - reCamera
  - reCamera Pro
  - terminal
  - SSH
  - UART
  - depuración
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_terminal
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_terminal/
---

# Terminal, SSH y Debug UART

reCamera Pro ofrece tres formas de acceder a una línea de comandos, cada una útil en diferentes situaciones:

| Método | Requiere red | Úsalo cuando |
| --- | --- | --- |
| Consola de terminal WebUI | Sí | Comprobaciones rápidas desde un navegador, sin herramientas adicionales |
| SSH | Sí | Scripting, transferencia de archivos, sesiones largas de desarrollo |
| Consola serie DEBUG UART | No | El dispositivo no arranca, la red está mal configurada o necesitas registros de arranque |

## Consola de terminal WebUI

La consola de terminal te permite iniciar sesión directamente en el terminal del sistema de reCamera Pro desde la Web UI, sin una herramienta SSH adicional.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

Inicia sesión con la siguiente cuenta predeterminada:

```bash
Username: root
Password: recamera
```

La misma página de la Web UI también proporciona una vista de registros del sistema para inspección de registros en tiempo real, filtrado y descarga; consulta [Collect Logs](/es/recamera_pro_collect_logs/).

## SSH

Cuando el dispositivo es accesible en la red, SSH es el método de acceso más conveniente para el desarrollo: admite transferencia de archivos (`scp`), reenvío de puertos y sesiones de larga duración. Desde un ordenador en la misma red (dirección predeterminada de Ethernet virtual USB `192.168.42.1`):

```bash
ssh root@192.168.42.1
```

{/* TODO(verify): confirm the SSH default credentials on stock Buildroot firmware (whether root login uses the same password as the WebUI terminal console) and whether SSH is enabled out of the box */}

## Consola serie DEBUG UART

El DEBUG UART está dedicado a la depuración. Funciona sin ninguna configuración de red y muestra la salida durante el arranque, lo que lo convierte en la vía de recuperación cuando el dispositivo no arranca o se desconoce la dirección IP.

La velocidad en baudios del puerto serie de depuración es **1500000**, y la especificación de la interfaz de hardware es MX1.25. La secuencia de pines se muestra a continuación.

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

### Conectar el DEBUG UART

1. Prepara un convertidor USB-a-serie. Conecta el TX del convertidor al pin RX del dispositivo y conecta el RX del convertidor al pin TX del dispositivo. Recuerda conectar también GND.
2. Enciende el dispositivo y verás la información de depuración del dispositivo en el convertidor.

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

:::note
Configura tu herramienta serie a una velocidad en baudios de 1500000. Una velocidad en baudios que no coincida produce salida ilegible.
:::

{/* TODO(verify): confirm the DEBUG UART console login account on stock firmware and whether it accepts the same root credentials as the WebUI terminal */}

## Páginas relacionadas

- [UART Usage](/es/recamera_pro_uart_usage/) — el segundo puerto serie en la interfaz de expansión, usado para disparo desde la WebUI y salida de inferencia de IA
- [Collect Logs](/es/recamera_pro_collect_logs/) — recopila registros para la resolución de problemas y soporte

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
