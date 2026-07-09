---
description: Este wiki proporcionará una breve introducción sobre cómo usar el puerto serie en el dispositivo para depuración y para activar la captura de fotos/vídeos/grabaciones.
title: Uso de UART en reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - UART
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_uart_usage
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-9'
url: https://wiki.seeedstudio.com/es/recamera_pro_uart_usage/
---

# Uso de la interfaz UART

Hay dos puertos serie en el dispositivo: uno es el DEBUG UART dedicado a la depuración y el otro es la interfaz UART utilizada para el disparo desde la interfaz web.
![Diagrama de la interfaz de la placa base de hardware](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![Esquemático del puerto de expansión](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## Conexión del DEBUG UART
La velocidad en baudios del puerto serie de depuración es 1500000 y la especificación de la interfaz de hardware es MX1.25. La secuencia de pines se muestra a continuación.
![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. Primero, prepara un convertidor USB a serie. Conecta el TX del convertidor al pin RX del dispositivo y conecta el RX del convertidor al pin TX del dispositivo. Recuerda conectar también GND.
2. Enciende el dispositivo y podrás ver la información de depuración del dispositivo en el convertidor.
![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

## Uso del UART en la interfaz de expansión

Esta interfaz UART se utiliza como la interfaz UART para el disparo desde la interfaz web. Se puede usar para recibir datos de inferencia de IA y también se puede usar para enviar comandos para activar eventos.

### Disparo por puerto serie
1. Primero, prepara un cable MX1.25 de 10 pines y conéctalo a la interfaz de expansión.

2. Luego, de acuerdo con la secuencia de pines en el diagrama de expansión anterior, conéctalo a tu herramienta USB a TTL. Conecta el TX del convertidor al pin RX del dispositivo y conecta el RX del convertidor al pin TX del dispositivo. Recuerda conectar también GND.

3. En ***Device Info*** -> ***Connection Settings***, puedes configurar la velocidad en baudios del puerto serie.
![DEBUG_UART_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

4. En ***Recording Settings*** -> ***Recording Configuration*** -> ***Serial Port Trigger***, haz clic en Configure para establecer el comando de disparo.
![DEBUG_UART_COMMAND_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

5. Abre la herramienta de puerto serie, selecciona el dispositivo de puerto serie correspondiente y envía el comando de disparo.
![DEBUG_UART_SEND_COMMAND](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

6. En ***Recording Settings*** -> ***File Preview***, puedes ver la foto o el vídeo capturado por el disparo del puerto serie justo ahora.
![DEBUG_UART_FILE_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

::: note
El comando de disparo solo se puede enviar en formato ASCII. No se admite el envío en HEX ni se admiten caracteres chinos.
:::

### Recepción de resultados de inferencia de IA
1. Primero, en ***AI Inference*** -> ***Output Method***, selecciona ***Serial Port***.
![UART_AI_OUTPUT_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. Abre la herramienta de puerto serie y podrás ver los resultados de salida.
![UART_AI_OUTPUT](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>