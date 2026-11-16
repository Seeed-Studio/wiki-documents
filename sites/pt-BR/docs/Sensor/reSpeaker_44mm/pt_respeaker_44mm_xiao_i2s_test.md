---
description: Verifique o I2S full-duplex entre o XIAO ESP32-S3 Plus e o array reSpeaker XVF3800 44 mm transmitindo um tom de teste de 440 Hz e conferindo as amostras recebidas do microfone.
title: Teste de I2S para reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - teste I2S
  - xvf3800
  - arduino audio tools
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_i2s_test
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_i2s_test/
---
# Teste de I2S para reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus

Este sketch verifica o link I2S entre o XIAO ESP32-S3 Plus e o XVF3800 no array de 44 mm. Ele gera uma onda quadrada de 440 Hz, grava na linha de transmissão I2S e, ao mesmo tempo, lê quadros estéreo retornando do array de microfones. Amostras recebidas que não sejam `0` nem `-1` são contadas como válidas, e o sketch informa PASS ou FAIL com base em quantas amostras válidas retornaram.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Pré-requisitos

- O array deve estar executando o **firmware I2S**. Consulte [Update Firmware](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/#update-firmware) se ele ainda estiver na imagem USB.
- Arduino IDE com o pacote de placas ESP32 e a biblioteca **Arduino Audio Tools** instalada. Consulte [Software Preparation](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_getting_started/#software-preparation).
- Placa selecionada como **XIAO_ESP32S3_Plus**, o número da porta precisa ser selecionado.
- Um cabo de dados USB-C (não apenas para carregamento).



:::note
Este teste configura o XIAO como **mestre** I2S (`cfg.is_master = true`). Os exemplos de gravação e reprodução executam o XIAO como **escravo**, porque o XVF3800 gera os clocks. Se você alternar entre sketches, mantenha essa diferença em mente.
:::

## Como funciona

1. O sketch configura um stream I2S full-duplex (`RXTX_MODE`) a 48 kHz, estéreo, 32 bits.
2. Para cada um dos 32.000 quadros, ele calcula uma onda quadrada de 440 Hz a partir de um acumulador de fase de 32 bits, grava a mesma amostra em ambos os canais e, em seguida, lê um quadro estéreo de volta.
3. Cada amostra recebida que não seja `0` ou `-1` incrementa `nonZero`; os primeiros 100 quadros são impressos para que você possa inspecionar visualmente os dados.
4. Após a execução, `nonZero` é comparado com `frameCount` (32.000 de 64.000 amostras). Se estiver abaixo do limite, o teste é executado mais uma vez antes de informar `I2S RX FAIL!`.

## Sketch Arduino

```c
#include "AudioTools.h"

const int sampleRate = 48000;
const int frequency = 440;
const int32_t amplitude = 500;

const int frameCount = 32000;  // 32000 stereo frames

AudioInfo info(sampleRate, 2, 32);
I2SStream i2s;
I2SConfig cfg;

uint32_t phase = 0;
const uint32_t phaseStep =
    (uint64_t)frequency * 0x100000000ULL / sampleRate;

// Generate TX frames and check RX samples simultaneously
void runI2STest(int &nonZero) {

  nonZero = 0;
  bool truncated = false;

  int32_t txFrame[2];
  int32_t rxFrame[2];

  phase = 0;

  for (int i = 0; i < frameCount; i++) {

    // Generate 440 Hz square wave
    phase += phaseStep;

    int32_t sample =
        (phase & 0x80000000UL) ? -amplitude : amplitude;

    // Same signal on left and right channels
    txFrame[0] = sample;
    txFrame[1] = sample;

    // Write one stereo frame (2 x 32-bit)
    i2s.write((uint8_t *)txFrame, sizeof(txFrame));

    // Read one stereo frame (2 x 32-bit)
    size_t n = i2s.readBytes(
        (uint8_t *)rxFrame,
        sizeof(rxFrame)
    );

    if (n == sizeof(rxFrame)) {

      for (int ch = 0; ch < 2; ch++) {

        if (rxFrame[ch] != 0 && rxFrame[ch] != -1) {
          nonZero++;
        }
      }

      // Print first 100 stereo frames
      if (i < 100) {
        Serial.printf(
            "L: %ld  R: %ld\n",
            (long)rxFrame[0],
            (long)rxFrame[1]
        );
      }
      else if (!truncated) {
        Serial.println("... (truncated)");
        truncated = true;
      }
    }
  }

  Serial.println();
}

void setup() {

  Serial.begin(115200);
  while (!Serial);

  AudioLogger::instance().begin(
      Serial,
      AudioLogger::Info
  );

  cfg = i2s.defaultConfig(RXTX_MODE);
  cfg.copyFrom(info);

  cfg.pin_bck = 8;
  cfg.pin_ws = 7;

  cfg.pin_data = 44;     // TX
  cfg.pin_data_rx = 43;  // RX

  cfg.is_master = true;

  i2s.begin(cfg);

  Serial.println("I2S full-duplex test started");
  Serial.println("Sample rate: 48000 Hz");
  Serial.println("Channels: 2");
  Serial.println("Bit depth: 32-bit");
}

void loop() {

  int nonZero = 0;

  Serial.println("First I2S RX test:");

  runI2STest(nonZero);

  Serial.printf(
      "Valid samples: %d / %d\n",
      nonZero,
      frameCount * 2
  );

  if (nonZero > frameCount) {

    Serial.println("I2S RX PASS!");

  } else {

    Serial.println(
        "Valid samples below threshold. Trying again..."
    );

    nonZero = 0;

    runI2STest(nonZero);

    Serial.printf(
        "Valid samples: %d / %d\n",
        nonZero,
        frameCount * 2
    );

    if (nonZero > frameCount) {
      Serial.println("I2S RX PASS!");
    } else {
      Serial.println("I2S RX FAIL!");
    }
  }

  Serial.println("Test complete");

  while (true);
}
```

## Saída esperada

Abra o Monitor Serial em **115200 baud**. Um link saudável se parece com isto:

```text
I2S full-duplex test started
Sample rate: 48000 Hz
Channels: 2
Bit depth: 32-bit
First I2S RX test:
L: -500  R: -500
L: -500  R: -500
L: 500  R: 500
... (truncated)
Valid samples: 63500 / 64000
I2S RX PASS!
Test complete
```

Os valores exatos nos primeiros quadros dependem do que os microfones captam. A linha importante é `I2S RX PASS!`.

## Solução de problemas

### `I2S RX FAIL!`

- Confirme que o array está executando o firmware **I2S** — a imagem USB não produz dados I2S.
- Verifique se o pacote de placa é `XIAO_ESP32S3_Plus` e se nenhum outro sketch redefiniu os pinos I2S.
- Verifique se o sketch usa GPIO 8 / 7 / 44 / 43, correspondendo à tabela acima.

### Todas as amostras recebidas são `0` ou `-1`

O stream do microfone não está chegando ao XIAO. Regrave o firmware I2S e, em seguida, desligue e ligue a placa. Se o array estiver em mute, os canais processados podem ficar silenciosos — pressione o botão de mute uma vez.

### O Monitor Serial permanece vazio

Selecione a porta correta em `Tools > Port` depois que a placa for reenumerada.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
