---
description: Verifica el I2S full-dúplex entre el XIAO ESP32-S3 Plus y la matriz reSpeaker XVF3800 de 44 mm transmitiendo un tono de prueba de 440 Hz y comprobando las muestras de micrófono recibidas.
title: Prueba I2S para reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - prueba I2S
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
url: https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_i2s_test/
---
# Prueba I2S para reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus

Este sketch verifica el enlace I2S entre el XIAO ESP32-S3 Plus y el XVF3800 en la matriz de 44 mm. Genera una onda cuadrada de 440 Hz, la escribe en la línea de transmisión I2S y, al mismo tiempo, lee tramas estéreo que regresan desde la matriz de micrófonos. Las muestras recibidas que no son `0` ni `-1` se cuentan como válidas, y el sketch informa PASS o FAIL en función de cuántas muestras válidas se recibieron.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Requisitos previos

- La matriz debe estar ejecutando el **firmware I2S**. Consulta [Update Firmware](https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/#actualizar-firmware) si todavía está en la imagen USB.
- Arduino IDE con el paquete de placas ESP32 y la biblioteca **Arduino Audio Tools** instalada. Consulta [Software Preparation](https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_getting_started/#preparación-de-software).
- Placa seleccionada como **XIAO_ESP32S3_Plus**, es necesario seleccionar el número de puerto.
- Un cable de datos USB-C (no solo de carga).



:::note
Esta prueba configura el XIAO como **maestro** I2S (`cfg.is_master = true`). Los ejemplos de grabación y reproducción ejecutan el XIAO como **esclavo**, porque el XVF3800 genera los relojes. Si cambias entre sketches, ten en cuenta esta diferencia.
:::

## Cómo funciona

1. El sketch configura un flujo I2S full-dúplex (`RXTX_MODE`) a 48 kHz, estéreo, 32 bits.
2. Para cada una de las 32 000 tramas calcula una onda cuadrada de 440 Hz a partir de un acumulador de fase de 32 bits, escribe la misma muestra en ambos canales y luego lee una trama estéreo de vuelta.
3. Cada muestra recibida que no sea `0` o `-1` incrementa `nonZero`; las primeras 100 tramas se imprimen para que puedas revisar visualmente los datos.
4. Después de la ejecución, `nonZero` se compara con `frameCount` (32 000 de 64 000 muestras). Si está por debajo del umbral, la prueba se ejecuta una vez más antes de informar `I2S RX FAIL!`.

## Sketch de Arduino

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

## Salida esperada

Abre el Monitor Serie a **115200 baudios**. Un enlace en buen estado se ve así:

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

Los valores exactos en las primeras tramas dependen de lo que capten los micrófonos. La línea importante es `I2S RX PASS!`.

## Resolución de problemas

### `I2S RX FAIL!`

- Confirma que la matriz está ejecutando el firmware **I2S**: la imagen USB no produce datos I2S.
- Comprueba que el paquete de placa sea `XIAO_ESP32S3_Plus` y que ningún otro sketch haya redefinido los pines I2S.
- Verifica que el sketch use GPIO 8 / 7 / 44 / 43, coincidiendo con la tabla anterior.

### Todas las muestras recibidas son `0` o `-1`

El flujo del micrófono no está llegando al XIAO. Vuelve a flashear el firmware I2S y luego apaga y enciende la placa. Si la matriz está silenciada, los canales procesados pueden estar en silencio: pulsa el botón de mute una vez.

### El Monitor Serie permanece vacío

Selecciona el puerto correcto en `Tools > Port` después de que la placa se vuelva a enumerar.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
