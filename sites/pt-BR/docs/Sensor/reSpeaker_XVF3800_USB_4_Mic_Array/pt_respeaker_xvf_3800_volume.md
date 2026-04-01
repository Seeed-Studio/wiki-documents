---
description: O ReSpeaker XVF3800 USB 4-Mic Array é uma matriz circular de microfones profissional com AEC, formação de feixe, supressão de ruído e captação de voz em 360°. Emparelhado com o XIAO ESP32S3, ele possibilita controle de voz avançado para dispositivos inteligentes, robótica e aplicações de IoT. Descubra integração perfeita e flexibilidade em modo duplo.
title: Reprodução de Áudio e Controle de Volume do reSpeaker XVF3800 via I2C
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /respeaker_xvf3800_xiao_volume
last_update:
  date: 7/16/2025
  author: Kasun Thushara
createdAt: '2025-07-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_volume/
---

Este código faz o **XIAO ESP32S3** reproduzir um tom de **440Hz** usando um **chip codec de áudio externo AIC3104** por meio da interface I2S. Ele envia a saída de áudio para **fones de ouvido (HPLOUT) ou line out (LOP)** e permite ajustar o volume digitando `+ `ou` - ` no monitor serial. O tom é gerado no código (não a partir de um arquivo) usando uma onda senoidal. Também permite alternar o modo de saída (fones de ouvido ou line out) digitando m. O AIC3104 é controlado usando **I2C** para definir registros de volume e potência de saída.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Como Funciona

O código começa inicializando o **codec de áudio AIC3104** via interface I2C, configurando parâmetros de saída importantes, como volume do DAC e níveis de saída para fones de ouvido/line out. Em seguida, ele gera um **sinal de onda senoidal** (especificamente um tom de 440 Hz) usando o componente SineWaveGenerator da biblioteca AudioTools. Esse sinal de áudio é então transmitido pela **interface I2S**, que é configurada para enviar dados de áudio digital do ESP32S3 para o chip AIC3104. A onda senoidal é continuamente alimentada no codec usando um objeto StreamCopy, que lida com a transferência em tempo real dos dados de áudio para o fluxo I2S. Enquanto isso, o usuário pode interagir com o sistema por meio do **monitor serial**, permitindo o controle em tempo real do **nível de volume** e do **modo de saída (fones de ouvido ou line-out)**.

## Comandos Seriais

O sistema responde a comandos seriais simples digitados no Monitor Serial. Pressionar a tecla `+` aumenta o volume em um nível, enquanto pressionar a tecla `-` o diminui. Se você pressionar a tecla `m`, o modo de saída **alternará entre saída para fones de ouvido (HPLOUT) e saída de linha (LOP)**. Esses comandos permitem testes e ajustes em tempo real da saída de áudio sem modificar ou reenviar o código.

## Código

```bash
#include <Wire.h>
#include "AudioTools.h"

// AIC3104 I2C address
#define AIC3104_ADDR 0x18

// Register addresses
#define AIC3104_PAGE_CTRL        0x00
#define AIC3104_LEFT_DAC_VOLUME  0x2B
#define AIC3104_RIGHT_DAC_VOLUME 0x2C
#define AIC3104_HPLOUT_LEVEL     0x33
#define AIC3104_HPROUT_LEVEL     0x41
#define AIC3104_LEFT_LOP_LEVEL   0x56
#define AIC3104_RIGHT_LOP_LEVEL  0x5D

// Audio: 16kHz, stereo, 16-bit
AudioInfo info(16000, 2, 16);
SineWaveGenerator<int16_t> sineWave(32000);
GeneratedSoundStream<int16_t> sound(sineWave);
I2SStream out;
StreamCopy copier(out, sound);

// Volume: range 0–17 (0–8 = DAC, 9–17 = analog boost)
int volume = 8;
bool useHPOUT = true; // true = use HPLOUT, false = use LOP

void aic3104_reg_write(uint8_t reg, uint8_t val) {
  Wire.beginTransmission(AIC3104_ADDR);
  Wire.write(reg);
  Wire.write(val);
  Wire.endTransmission();
}

void setupAIC3104() {
  Wire.begin();
  aic3104_reg_write(AIC3104_PAGE_CTRL, 0x00);

  // Set default 0dB DAC volume
  aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00);
  aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

  // Set output to 0dB, unmuted, powered up
  aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D);
  aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D);
  aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x0B);
  aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
}

void setVolume(int vol) {
  vol = constrain(vol, 0, 17);
  volume = vol;

  if (vol <= 8) {
    // DAC attenuation
    uint8_t dacVal = vol * 9; // 0dB to -72dB
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, dacVal);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, dacVal);

    // Output level fixed to 0dB
    aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D);
    aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D);
    aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x0B);
    aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
  } else {
    // DAC at 0dB
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

    // Boost output gain via HPLOUT or LOP
    uint8_t gain = (vol - 8); // from +1 to +9 dB
    uint8_t outVal = (gain << 4) | 0x0B; // Set gain and power/mute bits

    if (useHPOUT) {
      aic3104_reg_write(AIC3104_HPLOUT_LEVEL, outVal);
      aic3104_reg_write(AIC3104_HPROUT_LEVEL, outVal);
    } else {
      aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, outVal);
      aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, outVal);
    }
  }

  // Debug info
  Serial.print("Volume set to ");
  Serial.print(volume);
  Serial.print(" (");
  if (vol <= 8) Serial.print("-" + String(volume * 1) + " dB)");
  else Serial.print("+" + String((vol - 8)) + " dB)");
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  while (!Serial);

  setupAIC3104();
  setVolume(volume);

  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info);
  config.pin_bck = 8;
  config.pin_ws = 7;
  config.pin_data = 44;
  config.is_master = true;

  out.begin(config);
  sineWave.begin(info, N_A4); // 440Hz tone
}

void loop() {
  copier.copy();

  if (Serial.available()) {
    char c = Serial.read();

    if (c == '+' && volume < 17) {
      setVolume(volume + 1);
    } else if (c == '-' && volume > 0) {
      setVolume(volume - 1);
    } else if (c == 'm') {
      useHPOUT = !useHPOUT;
      setVolume(volume);
      Serial.print("Switched to ");
      Serial.println(useHPOUT ? "HPLOUT (headphone)" : "LOP (line out)");
    }
  }
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/volumecontrol.PNG" alt="pir" width={600} height="auto" /></p>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>