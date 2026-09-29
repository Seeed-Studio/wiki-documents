---
description: Acione a captura de fotos ou vídeos na reCamera Pro a partir de dispositivos externos usando pinos GPIO, comandos seriais ou requisições HTTPS.
title: Acionar Captura a partir de Dispositivos Externos
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
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_uart_usage/
---

# Acionar Captura a partir de Dispositivos Externos

A reCamera Pro possui duas portas seriais: uma **DEBUG UART** para depuração do sistema e uma **interface UART** na porta de expansão para acionamento via Web UI e recebimento de dados de inferência de IA. Combinado com acionamento por GPIO e HTTPS, você pode integrar a câmera com controladores externos, sensores e sistemas de automação.

![Diagrama de Interface da Placa Base de Hardware](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![Esquemático da Porta de Expansão](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## Conectando a DEBUG UART

A taxa de baud da porta serial de depuração é **1500000**, e a interface de hardware é **MX1.25**.

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. Prepare um conversor USB-para-serial.
2. Conecte TX→RX, RX→TX e GND→GND entre o conversor e o dispositivo.
3. Ligue o dispositivo para ver as informações de depuração no conversor.

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

{/* TODO(verify): confirm whether the debug UART baud rate is configurable or fixed at 1500000 */}

## Usando a UART de expansão para acionamento

### Conectar a porta de expansão

1. Prepare um **cabo MX1.25 de 10 pinos** e conecte-o à interface de expansão.
2. Conecte TX→RX, RX→TX e GND→GND à sua ferramenta USB-para-TTL conforme o diagrama de expansão acima.

### Definir a taxa de baud

Em **Device Info** → **Connection Settings**, defina a taxa de baud da porta serial.

![Configuração de conexão UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

### Acionamento pela porta serial

1. Em **Recording Settings** → **Recording Configuration** → **Serial Port Trigger**, clique em **Configure** para definir o comando de acionamento.

![Configuração de acionamento UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

2. Abra sua ferramenta de porta serial, selecione a porta serial correta e envie o comando de acionamento.

![Envio de comando UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

3. Em **Recording Settings** → **File Preview**, visualize a foto ou o vídeo capturado.

![Pré-visualização de arquivo UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

:::note
O comando de acionamento só pode ser enviado em **formato ASCII**. Envio em HEX e caracteres chineses não são suportados.
:::

### Receber resultados de inferência de IA

1. Em **AI Inference** → **Output Method**, selecione **Serial Port**.

![Configuração de saída de IA via UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. Abra sua ferramenta de porta serial para ver os resultados da inferência.

![Saída de IA via UART](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

{/* TODO(verify): document the exact serial data format for inference results and whether it matches the real-time monitoring log fields */}

## Acionamento por GPIO

O acionamento por GPIO é configurado em **Recording Settings** → **Recording Configuration** → **GPIO Trigger**:

| Item de Configuração | Descrição |
|---|---|
| Nome do Pino GPIO | Selecione o pino GPIO |
| Estado do Pino | Estado padrão do pino, por exemplo, flutuante |
| Sinal de Acionamento | Nível de acionamento, por exemplo, nível alto |
| Duração do Debounce | Tempo de debounce em milissegundos |

Adequado para integração com sensores externos, botões, ímãs de porta, sensores PIR ou relés.

{/* TODO(verify): document which GPIO pins are available on the expansion port and their voltage levels */}

## Acionamento por HTTPS

O acionamento por HTTPS é configurado em **Recording Settings** → **Recording Configuration** → **HTTPS Trigger**. A página exibe o endereço de acionamento HTTPS que sistemas externos podem chamar.

Adequado para integração com plataformas de terceiros, sistemas de alarme ou scripts de automação.

{/* TODO(verify): document the exact HTTPS trigger URL format, HTTP method, and request body schema */}

## Páginas relacionadas

- [Configurar Gravação de Eventos](/pt-br/recamera_pro_record_settings/)
- [Enviar Resultados de Detecção via HTTP/UART](/pt-br/recamera_pro_http_uart/)
- [Guia de Pinos GPIO](/pt-br/recamera_pro_gpio_guide/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
