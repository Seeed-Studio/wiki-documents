---
description: O ReSpeaker XVF3800 USB 4-Mic Array é um array circular de microfones profissional com AEC, formação de feixe, supressão de ruído e captura de voz em 360°. Emparelhado com o XIAO ESP32S3, ele possibilita controle de voz avançado para dispositivos inteligentes, robótica e aplicações de IoT. Descubra integração perfeita e flexibilidade em modo duplo.
title: reSpeaker XVF3800 USB Mic Array com teste I2S em XIAO ESP32S3
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_xiao_i2s
last_update:
  date: 8/11/2025
  author: Kasun Thushara
createdAt: '2025-07-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_i2s/
---

# reSpeaker XVF3800 USB Mic Array com teste I2S em XIAO ESP32S3

Este projeto serve como um sketch de teste para verificar a funcionalidade da interface I2S entre o **XIAO ESP32S3** e o **ReSpeaker XVF3800 USB 4-Mic Array**. O objetivo é confirmar que a transmissão e recepção de dados através do barramento I2S estão funcionando corretamente. Para isso, o sketch gera um sinal de áudio sintético em onda quadrada e o escreve na interface I2S. Em seguida, ele lê os dados de áudio do array de microfones XVF3800 e verifica a integridade das amostras recebidas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Objetivo

O objetivo principal deste projeto é testar e validar as operações de transmissão (TX) e recepção (RX) I2S. Ele busca garantir que o array de microfones ReSpeaker XVF3800 consiga enviar dados de áudio de volta para o ESP32S3 via I2S com sucesso. Ao fazer isso, estabelece uma base confiável para a comunicação I2S entre os dois dispositivos, abrindo caminho para aplicações mais avançadas de áudio e processamento de voz.

## Como Funciona

Durante a fase de configuração, o sketch inicializa a comunicação serial e inicia a interface I2S usando configuração estéreo com largura de amostra de 32 bits. Os pinos I2S são configurados de acordo com o mapeamento de hardware do ESP32S3. Na fase de transmissão (TX), é gerada uma onda quadrada de 440 Hz alternando o valor de amplitude do sinal de áudio. **Um total de 32.000 amostras são escritas no barramento I2S. Na fase de recepção (RX), o sketch lê 32.000 amostras do array de microfones XVF3800. Em seguida, conta quantas dessas amostras são diferentes de zero e válidas. Se mais de 16.000 amostras válidas forem recebidas, o teste é aprovado**. Caso contrário, uma segunda tentativa de leitura é feita. Se o resultado ainda ficar abaixo do limite, o teste é marcado como reprovado.

## Código

```c
#include "AudioTools.h"

const int sampleRate = 16000;  // Hz
const int frequency = 440;     // Hz square wave
const int amplitude = 500;     // peak value
const int halfWavelength = sampleRate / frequency;

AudioInfo info(sampleRate, 2, 32); // stereo, 32-bit
I2SStream i2s;
I2SConfig cfg;

int32_t sample = amplitude;
int count = 0;

void printSamplesAndCount(int &nonZero) {
  nonZero = 0;
  bool truncated = false;
  for (int i = 0; i < 32000; i++) {
    int32_t rxSample;
    size_t n = i2s.readBytes((uint8_t*)&rxSample, sizeof(rxSample));
    if (n == sizeof(rxSample)) {
      if (rxSample != 0 && rxSample != 0xFFFFFFFF) {
        nonZero++;
      }
      if (i < 200) {
        Serial.printf("%d ", rxSample);
      } else if (!truncated) {
        Serial.print("... (truncated)");
        truncated = true;
      }
    }
  }
  Serial.println();
}


void setup() {
  Serial.begin(115200);
  while (!Serial);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  cfg = i2s.defaultConfig(RXTX_MODE); // full duplex
  cfg.copyFrom(info);
  cfg.pin_bck = 8;
  cfg.pin_ws = 7;
  cfg.pin_data = 44;     // TX data pin
  cfg.pin_data_rx = 43;  // RX data pin
  cfg.is_master = true;
  i2s.begin(cfg);

  Serial.println("I2S full-duplex test start");
}

void loop() {
  // 1) Generate and write 32k samples of square wave
  for (int i = 0; i < 32000; i++) {
    if (count % halfWavelength == 0) {
      sample = -sample; // toggle polarity for square wave
    }
    i2s.write((uint8_t*)&sample, sizeof(sample)); 
    count++;
  }

  // 2) First read attempt
  int nonZero = 0;
  Serial.println("First read attempt:");
  printSamplesAndCount(nonZero);
  Serial.printf("Valid samples: %d\n", nonZero);

  // 3) Check pass/fail or do second attempt
  if (nonZero > 16000) {
    Serial.println("I2S RX PASS!");
  } else {
    Serial.println("Valid samples below threshold, trying second read...");
    nonZero = 0;
    Serial.println("Second read attempt:");
    printSamplesAndCount(nonZero);
    Serial.printf("Valid samples: %d\n", nonZero);
    if (nonZero > 16000) {
      Serial.println("I2S RX PASS!");
    } else {
      Serial.println("I2S RX FAIL!");
    }
  }

  Serial.println("Test complete");
  while (true); // stop here
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/i2s.PNG" alt="pir" width={900} height="auto" /></p>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
