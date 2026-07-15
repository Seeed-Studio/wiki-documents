---
description: reSpeaker Flex é um poderoso sistema de voz modular com XMOS XVF3800, com arrays de 4 microfones circulares e lineares intercambiáveis para captura de áudio precisa em 360° ou direcional — perfeito para robótica e dispositivos inteligentes.
title: Gravar e Reproduzir reSpeaker Flex com Xiao ESP32S3
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_record_playback
sku: 100070894,100026178
last_update:
  date: 05/28/2026
  author: Kasun Thushara
createdAt: '2026-05-28'
updatedAt: '2026-05-28'
url: https://wiki.seeedstudio.com/pt-br/respeaker_flex_xiao_playback_record/
---

# Gravar e Reproduzir Áudio do reSpeaker Flex Usando I2S

## Objetivo

O objetivo deste sketch é **gravar dados de áudio do processador de voz reSpeaker Flex XVF3800** usando a interface I2S em um ESP32-S3, **armazená-los temporariamente na memória** e então **reproduzi-los** pelo mesmo caminho de áudio. Esse tipo de teste de loopback ajuda a verificar se os canais de entrada e saída do XVF3800 estão corretamente inicializados e funcionando, especialmente quando controlados via I2C.

## Visão Geral do Código

No início, configuramos um objeto AudioInfo especificando **taxa de amostragem de 16 kHz, 2 canais de áudio e profundidade de 32 bits** por amostra, o que corresponde às configurações típicas de áudio do XVF3800. O objeto I2SStream chamado out é usado tanto para gravação (modo RX) quanto para reprodução (modo TX).
A função setup() inicializa o console serial para depuração, configura o periférico I2S com pinos personalizados **(BCK = pino 8, WS = pino 7, DATA OUT = pino 44, DATA IN = pino 43)** e configura o ESP32 como dispositivo mestre I2S. Essa configuração reflete a ligação de hardware entre o ESP32 e o módulo reSpeaker Flex XVF3800.
Na função loop(), a saída I2S é primeiro parada com out.end(), depois reconfigurada no modo **RX** para gravar os dados de áudio recebidos da saída do XVF3800. Ela usa out.readBytes() para preencher o buffer[] com amostras de áudio bruto. Após a gravação, o código alterna de volta para o **modo TX**, reinicializa o I2S e envia o áudio de volta usando out.write(). Isso cria um ciclo completo de **gravação–armazenamento–reprodução** a cada iteração do loop.

:::note
O firmware usado neste exemplo é a versão I2S 16 kHz. Certifique-se de que o firmware do seu XIAO ESP32S3 esteja configurado para áudio I2S a 16 kHz.
:::

```c

#include "AudioTools.h"

AudioInfo info(16000, 2, 32);

I2SStream out; 
I2SConfig config;


uint8_t buffer[128000];
size_t bytes_read = 0;
size_t bytes_write = 0;

// Arduino Setup
void setup(void) {  
  // Open Serial 
  Serial.begin(115200);
  while(!Serial);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // start I2S
  Serial.println("starting I2S...");
  config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  // Custom I2S output pins
  config.pin_bck = 8;
  config.pin_ws = 7;
  config.pin_data = 44;
  config.pin_data_rx = 43;
  config.is_master = false;
  out.begin(config);
  Serial.println("started...");
}

// Arduino loop - copy sound to out 
void loop() {
  // copier.copy();
  out.end();
  config.rx_tx_mode = RX_MODE;
  out.begin(config);
  bytes_read = out.readBytes(buffer, 128000);
  out.end();
  config.rx_tx_mode = TX_MODE;
  out.begin(config);
  bytes_write= out.write(buffer, 128000);
}

```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
