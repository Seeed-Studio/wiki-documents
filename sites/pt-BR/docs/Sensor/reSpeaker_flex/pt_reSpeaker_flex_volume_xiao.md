---
description: reSpeaker Flex é um poderoso sistema de voz modular com XMOS XVF3800, com arrays de 4 microfones circulares e lineares intercambiáveis para captura de áudio precisa em 360° ou direcional — perfeito para robótica e dispositivos inteligentes.
title: Controlando o volume do reSpeaker Flex com o Xiao ESP32S3
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_volume_control
sku: 100070894,100026178
last_update:
  date: 05/29/2026
  author: Kasun Thushara
createdAt: '2026-05-29'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/pt-br/respeaker_flex_xiao_volume_control
---


Este código faz o **XIAO ESP32S3** reproduzir um tom de **440Hz** usando um **chip codec de áudio externo AIC3104** através da interface I2S. Ele envia a saída de áudio para **fones de ouvido (HPLOUT) ou line out (LOP)** e permite ajustar o volume digitando `+ `ou` - ` no monitor serial. O tom é gerado no código (não a partir de um arquivo) usando uma onda senoidal. Ele também permite alternar o modo de saída (fones de ouvido ou line out) digitando m. O AIC3104 é controlado usando **I2C** para definir registradores de volume e potência de saída.

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear com XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular com XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


## Como funciona

O código começa inicializando o **codec de áudio AIC3104** via interface I2C, configurando parâmetros-chave de saída como volume do DAC e níveis de saída para fones de ouvido/line-out. Em seguida, ele gera um **sinal de onda senoidal** (especificamente um tom de 440 Hz) usando o componente SineWaveGenerator da biblioteca AudioTools. Esse sinal de áudio é então transmitido pela **interface I2S**, que é configurada para enviar dados de áudio digitais do ESP32S3 para o chip AIC3104. A onda senoidal é continuamente enviada ao codec usando um objeto StreamCopy, que lida com a transferência em tempo real dos dados de áudio para o fluxo I2S. Enquanto isso, o usuário pode interagir com o sistema por meio do **monitor serial**, permitindo o controle em tempo real do **nível de volume** e do **modo de saída (fones de ouvido ou line-out)**.

## Comandos seriais

O sistema responde a comandos seriais simples digitados no Monitor Serial. Pressionar a tecla `+` aumenta o volume em um nível, enquanto pressionar a tecla `-` o diminui. Se você pressionar a tecla `m`, o modo de saída **alternará entre saída para fones de ouvido (HPLOUT) e saída de linha (LOP)**. Esses comandos permitem testar e ajustar a saída de áudio em tempo real sem modificar ou reenviar o código.

## Código

```c
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
AudioInfo info(16000, 2, 32);
SineWaveGenerator<int16_t> sineWave(32000);
GeneratedSoundStream<int16_t> sound(sineWave);
I2SStream out;
StreamCopy copier(out, sound);

// Volume: range 0–17 (0–8 = DAC range, 9–17 = analog boost)
int volume = 3;  // Changed from 8 to 3 for quieter start
bool useHPOUT = true; // true = HPLOUT (headphone), false = LOP (line out)

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
  aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME,  0x00);
  aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

  // Set output to 0dB, unmuted, powered up
  aic3104_reg_write(AIC3104_HPLOUT_LEVEL,   0x0D);
  aic3104_reg_write(AIC3104_HPROUT_LEVEL,   0x0D);
  aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL,  0x0B);
  aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
}

void setVolume(int vol) {
  vol = constrain(vol, 0, 17);
  volume = vol;

  if (vol <= 8) {
    // ✅ FIX: DAC register is attenuation — invert so higher vol = less attenuation
    // vol=8 → dacVal=0  (0 dB, loudest)
    // vol=0 → dacVal=72 (−72 dB, quietest)
    uint8_t dacVal = (8 - vol) * 9;
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME,  dacVal);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, dacVal);

    // Output level fixed at 0dB
    aic3104_reg_write(AIC3104_HPLOUT_LEVEL,   0x0D);
    aic3104_reg_write(AIC3104_HPROUT_LEVEL,   0x0D);
    aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL,  0x0B);
    aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
  } else {
    // DAC at max (0 dB), boost via analog output stage
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME,  0x00);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

    uint8_t gain   = vol - 8;          // +1 to +9 dB above unity
    uint8_t outVal = (gain << 4) | 0x0B;

    if (useHPOUT) {
      aic3104_reg_write(AIC3104_HPLOUT_LEVEL, outVal);
      aic3104_reg_write(AIC3104_HPROUT_LEVEL, outVal);
    } else {
      aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL,  outVal);
      aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, outVal);
    }
  }

  // ✅ FIX: corrected dB label (attenuation = how far below max, not vol*1)
  Serial.print("Volume: step ");
  Serial.print(volume);
  Serial.print("/17  (");
  if (vol <= 8) {
    int dbAtten = (8 - vol) * 9;
    Serial.print("-");
    Serial.print(dbAtten);
    Serial.print(" dB DAC attenuation)");
  } else {
    Serial.print("+");
    Serial.print(vol - 8);
    Serial.print(" dB analog boost)");
  }
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  while (!Serial);

  setupAIC3104();
  setVolume(volume);  // This will now start at 3/17

  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info);
  config.pin_bck  = 8;
  config.pin_ws   = 7;
  config.pin_data = 44;
  config.is_master = false;

  out.begin(config);
  sineWave.begin(info, N_A4); // 440 Hz tone
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
      Serial.print("Output switched to: ");
      Serial.println(useHPOUT ? "HPLOUT (headphone)" : "LOP (line out)");
    }
  }
}
```


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