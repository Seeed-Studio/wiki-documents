---
description: Activa la captura de fotos o vídeos en reCamera Pro desde dispositivos externos usando pines GPIO, comandos serie o solicitudes HTTPS.
title: Activar la captura desde dispositivos externos
keywords:
  - reCamera
  - reCamera Pro
  - GPIO
  - UART
  - serial trigger
  - HTTPS trigger
  - external trigger
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_uart_usage
sku: 10003420
sidebar_position: 12
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_uart_usage/
---

# Activar la captura desde dispositivos externos

reCamera Pro tiene dos puertos serie: un **DEBUG UART** para depuración del sistema y una **interfaz UART** en el puerto de expansión para activar desde la interfaz web y recibir datos de inferencia de IA. Combinado con los disparos por GPIO y HTTPS, puedes integrar la cámara con controladores externos, sensores y sistemas de automatización.

![Diagrama de la interfaz de la placa base de hardware](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![Esquemático del puerto de expansión](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## Conexión del DEBUG UART

La velocidad en baudios del puerto serie de depuración es **1500000**, y la interfaz de hardware es **MX1.25**.

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. Prepara un convertidor USB-a-serie.
2. Conecta TX→RX, RX→TX y GND→GND entre el convertidor y el dispositivo.
3. Enciende el dispositivo para ver la información de depuración en el convertidor.

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

{/* TODO(verify): confirm whether the debug UART baud rate is configurable or fixed at 1500000 */}

## Uso del UART de expansión para activar

### Conectar el puerto de expansión

1. Prepara un **cable MX1.25 de 10 pines** y conéctalo a la interfaz de expansión.
2. Conecta TX→RX, RX→TX y GND→GND a tu herramienta USB-a-TTL según el diagrama de expansión anterior.

### Configurar la velocidad en baudios

En **Device Info** → **Connection Settings**, configura la velocidad en baudios del puerto serie.

![Configuración de conexión UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

### Disparo por puerto serie

1. En **Recording Settings** → **Recording Configuration** → **Serial Port Trigger**, haz clic en **Configure** para establecer el comando de disparo.

![Configuración de disparo UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

2. Abre tu herramienta de puerto serie, selecciona el puerto serie correcto y envía el comando de disparo.

![Envío de comando UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

3. En **Recording Settings** → **File Preview**, visualiza la foto o el vídeo capturado.

![Vista previa de archivo UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

:::note
El comando de disparo solo se puede enviar en **formato ASCII**. No se admite el envío en HEX ni caracteres chinos.
:::

### Recibir resultados de inferencia de IA

1. En **AI Inference** → **Output Method**, selecciona **Serial Port**.

![Configuración de salida de IA por UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. Abre tu herramienta de puerto serie para ver los resultados de la inferencia.

![Salida de IA por UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

{/* TODO(verify): document the exact serial data format for inference results and whether it matches the real-time monitoring log fields */}

## Disparo por GPIO

El disparo por GPIO se configura en **Recording Settings** → **Recording Configuration** → **GPIO Trigger**:

| Elemento de configuración | Descripción |
|---|---|
| Nombre del pin GPIO | Selecciona el pin GPIO |
| Estado del pin | Estado predeterminado del pin, p. ej., flotante |
| Señal de disparo | Nivel de disparo, p. ej., nivel alto |
| Duración del anti-rebote | Tiempo de anti-rebote en milisegundos |

Adecuado para la integración con sensores externos, botones, contactos magnéticos de puerta, sensores PIR o relés.

{/* TODO(verify): document which GPIO pins are available on the expansion port and their voltage levels */}

## Disparo por HTTPS

El disparo por HTTPS se configura en **Recording Settings** → **Recording Configuration** → **HTTPS Trigger**. La página muestra la dirección de disparo HTTPS que los sistemas externos pueden invocar.

Adecuado para la integración con plataformas de terceros, sistemas de alarma o scripts de automatización.

{/* TODO(verify): document the exact HTTPS trigger URL format, HTTP method, and request body schema */}

## Páginas relacionadas

- [Configurar grabación de eventos](/es/recamera_pro_record_settings/)
- [Enviar resultados de detección por HTTP/UART](/es/recamera_pro_http_uart/)
- [Guía de pines GPIO](/es/recamera_pro_gpio_guide/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
