---
description: O ReSpeaker XVF3800 USB 4-Mic Array é um microfone circular profissional com AEC, beamforming, supressão de ruído e captação de voz em 360°. Em conjunto com o XIAO ESP32S3, ele possibilita controle de voz avançado para dispositivos inteligentes, robótica e aplicações de IoT. Descubra uma integração perfeita e flexibilidade em modo duplo.
title: reSpeaker XVF3800 Gravar e Reproduzir Áudio Usando I2S
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /respeaker_xvf3800_xiao_record_playback
last_update:
  date: 7/16/2025
  author: Kasun Thushara
createdAt: '2025-07-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_record_playback/
---

# reSpeaker XVF3800 Gravar e Reproduzir Áudio Usando I2S

## Objetivo

O objetivo deste sketch é **gravar dados de áudio do processador de voz XVF3800** usando a interface I2S em um ESP32-S3, **armazená-los temporariamente na memória** e então **reproduzi-los** pelo mesmo caminho de áudio. Esse tipo de teste de loopback ajuda a verificar se os canais de entrada e saída do XVF3800 estão corretamente inicializados e funcionando, especialmente quando controlados via I2C.

## Visão Geral do Código

No início, configuramos um objeto AudioInfo especificando **taxa de amostragem de 16 kHz, 2 canais de áudio e profundidade de 32 bits** por amostra, o que corresponde às configurações típicas de áudio do XVF3800. O objeto I2SStream chamado out é usado tanto para gravação (modo RX) quanto para reprodução (modo TX).
A função setup() inicializa o console serial para depuração, configura o periférico I2S com pinos personalizados **(BCK = pino 8, WS = pino 7, DATA OUT = pino 44, DATA IN = pino 43)** e define o ESP32 como dispositivo mestre I2S. Essa configuração reflete a ligação de hardware entre o ESP32 e o módulo XVF3800.
Na função loop(), a saída I2S é primeiro interrompida com out.end(), depois reconfigurada no modo **RX** para gravar dados de áudio provenientes da saída do XVF3800. Ela usa out.readBytes() para preencher o buffer[] com amostras de áudio bruto. Após a gravação, o código alterna de volta para o **modo TX**, reinicializa o I2S e envia o áudio de volta usando out.write(). Isso cria um ciclo completo de **gravar–armazenar–reproduzir** a cada iteração do loop.

```bash
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
  config.is_master = true;
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

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
