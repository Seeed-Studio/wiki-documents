---
description: reSpeaker Flex es un potente sistema de voz modular con XMOS XVF3800, con matrices de 4 micrófonos circulares y lineales intercambiables para una captura de audio precisa de 360° o direccional, perfecto para robótica y dispositivos inteligentes.
title: Control de volumen de reSpeaker Flex con Xiao ESP32S3
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
url: https://wiki.seeedstudio.com/es/respeaker_flex_xiao_volume_control
---


Este código hace que el **XIAO ESP32S3** reproduzca un tono de **440Hz** utilizando un **chip códec de audio externo AIC3104** a través de la interfaz I2S. Envía la salida de audio a **auriculares (HPLOUT) o salida de línea (LOP)** y te permite ajustar el volumen escribiendo `+ `o` - `en el monitor serie. El tono se genera en el código (no desde un archivo) usando una onda sinusoidal. También te permite cambiar el modo de salida (auriculares o salida de línea) escribiendo m. El AIC3104 se controla mediante **I2C** para configurar registros de volumen y potencia de salida.

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Lineal con XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular con XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


## Cómo funciona

El código comienza inicializando el **códec de audio AIC3104** mediante la interfaz I2C, configurando parámetros clave de salida como el volumen del DAC y los niveles de auriculares/salida de línea. A continuación, genera una **señal de onda sinusoidal** (específicamente un tono de 440 Hz) utilizando el componente SineWaveGenerator de la biblioteca AudioTools. Esta señal de audio se transmite luego a través de la **interfaz I2S**, que está configurada para enviar datos de audio digital desde el ESP32S3 al chip AIC3104. La onda sinusoidal se alimenta continuamente al códec usando un objeto StreamCopy, que gestiona la transferencia en tiempo real de los datos de audio al flujo I2S. Mientras tanto, el usuario puede interactuar con el sistema mediante el **monitor serie**, lo que permite controlar en tiempo real el **nivel de volumen** y el **modo de salida (auriculares o salida de línea)**.

## Comandos serie

El sistema responde a sencillos comandos serie escritos en el Monitor Serie. Al pulsar la tecla `+` se incrementará el volumen en un nivel, mientras que al pulsar la tecla `-` se disminuirá. Si pulsas la tecla `m`, el modo de salida **alternará entre salida de auriculares (HPLOUT) y salida de línea (LOP)**. Estos comandos permiten probar y ajustar la salida de audio en tiempo real sin modificar ni volver a cargar el código.

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


## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>