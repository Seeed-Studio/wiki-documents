---
description: Este wiki fornecerá uma breve introdução sobre como usar a porta serial no dispositivo para depuração e acionamento de captura de fotos/vídeos/gravações.
title: Uso de UART
keywords:
  - reCamera
  - reCamera Pro
  - UART
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_uart_usage_legacy
draft: true
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_uart_usage_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Build_Your_App/external_trigger.md (https://wiki.seeedstudio.com/pt-br/recamera_pro_uart_usage/), which now serves the original slug /recamera_pro_uart_usage. This file is kept for history as a draft (slug /recamera_pro_uart_usage_legacy) and is excluded from production builds. Do not link here. -->

## Índice de Migração de Conteúdo (Página Legada)

| Seção original | Novo local |
| --- | --- |
| Conectando a DEBUG UART | [Terminal, SSH e Debug UART](https://wiki.seeedstudio.com/pt-br/recamera_pro_terminal/) |
| Acionamento pela Porta Serial | [Acionamento Externo via UART](https://wiki.seeedstudio.com/pt-br/recamera_pro_uart_usage/) (este slug) |
| Recebendo Resultados de Inferência de IA | [Enviar Resultados de Detecção via HTTP/UART](https://wiki.seeedstudio.com/pt-br/recamera_pro_http_uart/) |

# Usando a Interface UART na reCamera Pro

Existem duas portas seriais no dispositivo: uma é a DEBUG UART dedicada à depuração, e a outra é a interface UART usada para acionamento pela interface web.
![Diagrama da Interface da Placa Base de Hardware](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![Esquemático da Porta de Expansão](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## Conectando a DEBUG UART

A taxa de baud da porta serial de depuração é 1500000, e a especificação da interface de hardware é MX1.25. A sequência dos pinos é mostrada abaixo.
![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. Primeiro, prepare um conversor USB-para-serial. Conecte o TX do conversor ao pino RX do dispositivo e conecte o RX do conversor ao pino TX do dispositivo. Lembre-se também de conectar o GND.
2. Ligue o dispositivo e você poderá ver as informações de depuração do dispositivo no conversor.
![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

## Usando a UART na Interface de Expansão

Esta interface UART é usada como a interface UART para acionamento pela interface web. Ela pode ser usada para receber dados de inferência de IA e também para enviar comandos para acionar eventos.

### Acionamento pela Porta Serial

1. Primeiro, prepare um cabo MX1.25 de 10 pinos e conecte-o à interface de expansão.

2. Em seguida, de acordo com a sequência de pinos no diagrama de expansão acima, conecte-o à sua ferramenta USB-para-TTL. Conecte o TX do conversor ao pino RX do dispositivo e conecte o RX do conversor ao pino TX do dispositivo. Lembre-se também de conectar o GND.

3. Em ***Device Info*** -> ***Connection Settings***, você pode definir a taxa de baud da porta serial.
![DEBUG_UART_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

4. Em ***Recording Settings*** -> ***Recording Configuration*** -> ***Serial Port Trigger***, clique em Configure para definir o comando de acionamento.
![DEBUG_UART_COMMAND_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

5. Abra a ferramenta de porta serial, selecione o dispositivo de porta serial correspondente e envie o comando de acionamento.
![DEBUG_UART_SEND_COMMAND](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

6. Em ***Recording Settings*** -> ***File Preview***, você pode visualizar a foto ou o vídeo capturado pelo acionamento da porta serial há pouco.
![DEBUG_UART_FILE_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

:::note
O comando de acionamento só pode ser enviado em formato ASCII. O envio em HEX não é suportado, e caracteres chineses não são suportados.
:::

### Recebendo Resultados de Inferência de IA

1. Primeiro, em ***AI Inference*** -> ***Output Method***, selecione ***Serial Port***.
![UART_AI_OUTPUT_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. Abra a ferramenta de porta serial e você poderá ver os resultados de saída.
![UART_AI_OUTPUT](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer vários tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos múltiplos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
