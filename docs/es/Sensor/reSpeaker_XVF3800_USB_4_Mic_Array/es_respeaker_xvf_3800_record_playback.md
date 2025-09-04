---
description: El ReSpeaker XVF3800 USB 4-Mic Array es un arreglo de micrófonos circular profesional con AEC, beamforming, supresión de ruido y captura de voz de 360°. Emparejado con el XIAO ESP32S3, permite control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre la integración perfecta y flexibilidad de modo dual.

title: reSpeaker XVF3800 Grabación y Reproducción de Audio Usando I2S

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /es/respeaker_xvf3800_xiao_record_playback
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 Grabación y Reproducción de Audio Usando I2S

## Objetivo
El objetivo de este sketch es **grabar datos de audio del procesador de voz XVF3800** usando la interfaz I2S en un ESP32-S3, **almacenarlos temporalmente en memoria**, y luego **reproducirlos** a través de la misma ruta de audio. Este tipo de prueba de bucle cerrado ayuda a verificar si tanto los canales de entrada como de salida del XVF3800 están correctamente inicializados y funcionando, especialmente cuando se controlan vía I2C.

## Descripción del Código

En la parte superior, configuramos un objeto AudioInfo especificando **frecuencia de muestreo de 16kHz, 2 canales de audio y profundidad de 32 bits** por muestra, lo cual coincide con las configuraciones típicas de audio del XVF3800. El objeto I2SStream llamado out se usa tanto para grabación (modo RX) como para reproducción (modo TX).
La función setup() inicializa la consola serie para depuración, configura el periférico I2S con pines personalizados **(BCK = pin 8, WS = pin 7, DATA OUT = pin 44, DATA IN = pin 43)**, y configura el ESP32 como dispositivo maestro I2S. Esta configuración refleja el cableado de hardware entre el ESP32 y el módulo XVF3800.
En la función loop(), la salida I2S se detiene primero con out.end(), luego se reconfigura en modo **RX** para grabar datos de audio entrantes de la salida del XVF3800. Usa out.readBytes() para llenar el buffer[] con muestras de audio en bruto. Después de grabar, cambia de vuelta al **modo TX**, reinicializa I2S, y envía el audio de vuelta usando out.write(). Esto crea un ciclo completo de **grabar–almacenar–reproducir** en cada iteración del bucle.

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


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>