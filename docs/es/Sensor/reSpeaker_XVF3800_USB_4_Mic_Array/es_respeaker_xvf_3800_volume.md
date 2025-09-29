---
description: El ReSpeaker XVF3800 USB 4-Mic Array es un arreglo de micrófonos circular profesional con AEC, beamforming, supresión de ruido y captura de voz de 360°. Emparejado con el XIAO ESP32S3, permite control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre la integración perfecta y flexibilidad de modo dual.

title: reSpeaker XVF3800 Reproducción de Audio y Control de Volumen vía I2C

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /es/respeaker_xvf3800_xiao_volume
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

Este código hace que el **XIAO ESP32S3** reproduzca un tono de **440Hz** usando un **chip de códec de audio AIC3104 externo** a través de la interfaz I2S. Envía la salida de audio a **auriculares (HPLOUT) o salida de línea (LOP)** y te permite ajustar el volumen escribiendo `+` o `-` en el monitor serie. El tono se genera en código (no desde un archivo) usando una onda senoidal. También permite cambiar el modo de salida (auriculares o salida de línea) escribiendo m. El AIC3104 se controla usando **I2C** para configurar registros de volumen y potencia de salida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Cómo Funciona

El código comienza inicializando el **códec de audio AIC3104** a través de la interfaz I2C, configurando parámetros de salida clave como el volumen del DAC y los niveles de auriculares/salida de línea. A continuación, genera una **señal de onda senoidal** (específicamente un tono de 440 Hz) usando el componente SineWaveGenerator de la biblioteca AudioTools. Esta señal de audio se transmite luego a través de la **interfaz I2S**, que está configurada para enviar datos de audio digital desde el ESP32S3 al chip AIC3104. La onda senoidal se alimenta continuamente al códec usando un objeto StreamCopy, que maneja la transferencia en tiempo real de datos de audio al flujo I2S. Mientras tanto, el usuario puede interactuar con el sistema a través del **monitor serie**, permitiendo control en tiempo real del **nivel de volumen** y **modo de salida (auriculares o salida de línea)**.

## Comandos Serie

El sistema responde a comandos serie simples escritos en el Monitor Serie. Presionar la tecla `+` aumentará el volumen en un nivel, mientras que presionar la tecla `-` lo disminuirá. Si presionas la tecla `m`, el modo de salida **alternará entre salida de auriculares (HPLOUT) y salida de línea (LOP)**. Estos comandos permiten pruebas y ajustes en tiempo real de la salida de audio sin modificar o volver a cargar el código.

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

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>