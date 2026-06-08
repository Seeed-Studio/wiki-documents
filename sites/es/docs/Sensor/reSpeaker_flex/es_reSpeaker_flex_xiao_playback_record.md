---
description: reSpeaker Flex es un potente sistema de voz modular con XMOS XVF3800, con matrices de 4 micrófonos circulares y lineales intercambiables para una captura de audio precisa de 360° o direccional, perfecto para robótica y dispositivos inteligentes.
title: Grabar y reproducir reSpeaker Flex con Xiao ESP32S3
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
url: https://wiki.seeedstudio.com/es/respeaker_flex_xiao_playback_record/
---

# Grabar y reproducir audio con reSpeaker Flex usando I2S

## Objetivo

El objetivo de este sketch es **grabar datos de audio desde el procesador de voz reSpeaker Flex XVF3800** usando la interfaz I2S en un ESP32-S3, **almacenarlos temporalmente en memoria** y luego **reproducirlos** a través de la misma ruta de audio. Este tipo de prueba de bucle (loopback) ayuda a verificar si tanto los canales de entrada como de salida del XVF3800 están correctamente inicializados y funcionando, especialmente cuando se controlan mediante I2C.

## Descripción general del código

Al principio, configuramos un objeto AudioInfo especificando **frecuencia de muestreo de 16 kHz, 2 canales de audio y profundidad de 32 bits** por muestra, lo que coincide con los ajustes de audio típicos del XVF3800. El objeto I2SStream llamado out se utiliza tanto para la grabación (modo RX) como para la reproducción (modo TX).
La función setup() inicializa la consola serie para depuración, configura el periférico I2S con pines personalizados **(BCK = pin 8, WS = pin 7, DATA OUT = pin 44, DATA IN = pin 43)** y configura el ESP32 como dispositivo maestro I2S. Esta configuración refleja el cableado de hardware entre el ESP32 y el módulo reSpeaker Flex XVF3800.
En la función loop(), primero se detiene la salida I2S con out.end(), luego se reconfigura en modo **RX** para grabar datos de audio entrantes desde la salida del XVF3800. Utiliza out.readBytes() para llenar buffer[] con muestras de audio en bruto. Después de la grabación, cambia de nuevo al **modo TX**, reinicializa I2S y envía el audio de vuelta usando out.write(). Esto crea un ciclo completo de **grabación–almacenamiento–reproducción** en cada iteración del bucle.

:::note
El firmware utilizado en este ejemplo es la versión I2S de 16 kHz. Asegúrate de que el firmware de tu XIAO ESP32S3 esté configurado para audio I2S a 16 kHz.
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

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
