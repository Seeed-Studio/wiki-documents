---
description: Controla el volumen de reproducción del reSpeaker XVF3800 44mm desde el XIAO ESP32-S3 Plus escribiendo los registros de salida analógica y del DAC AIC3104 mediante I2C, con un tono de prueba de 440 Hz para escuchar el cambio.
title: Control de volumen del reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - AIC3104
  - control de volumen
  - xvf3800
  - I2C
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_volume_control
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_volume_control/
---
# Control de volumen del reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus

Este sketch hace que el XIAO ESP32-S3 Plus reproduzca un tono generado de **440 Hz** a través del códec **AIC3104** integrado mediante I2S, y luego ajusta el volumen escribiendo `+` o `-` en el Monitor Serie. Al escribir `m` se conmuta la salida entre auriculares (`HPLOUT`/`HPROUT`) y salida de línea (`LOP`), y el códec se configura completamente por I2C. El tono se sintetiza en el código, por lo que no se necesita ningún archivo de audio.

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

- La matriz debe estar ejecutando el **firmware I2S**, porque el XVF3800 proporciona los relojes I2S. Consulta [Update Firmware](https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/#actualizar-firmware).
- Arduino IDE con el paquete de placas ESP32 y la biblioteca **Arduino Audio Tools**. Consulta [Software Preparation](https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_getting_started/#preparación-de-software).
- Placa seleccionada como **XIAO_ESP32S3_Plus**, es necesario seleccionar el número de puerto.
- Un altavoz en el conector JST o auriculares en el jack de 3,5 mm.



:::note
El AIC3104 comparte el bus I2C con el XVF3800. El firmware XMOS y los botones de volumen integrados pueden escribir en los mismos registros, por lo que un nivel establecido desde el XIAO puede ser sobrescrito más tarde.
:::

## Mapeo de volumen

El sketch expone una escala de volumen de 0 a 17, dividida entre atenuación digital y ganancia analógica:

| Volumen | Resultado |
|--------|----------|
| `0` | −8 dB (atenuación del DAC) |
| `8` | 0 dB (referencia, DAC a escala completa) |
| `9` … `17` | +1 dB … +9 dB de ganancia de salida analógica |

De 0 a 8 el DAC se atenúa en **pasos de 0,5 dB** (`(8 − volume) × 2`). De 9 a 17 el DAC se mantiene en 0 dB y la etapa de salida analógica se incrementa en `volume − 8` dB.

## Mapa de registros

| Registro | Dirección | Propósito |
|----------|-----------|-----------|
| Control de página | `0x00` | Selecciona la página de registro 0 |
| Volumen DAC izquierdo | `0x2B` | Atenuación digital, 0,5 dB por paso |
| Volumen DAC derecho | `0x2C` | Atenuación digital, 0,5 dB por paso |
| Nivel HPLOUT | `0x33` | Salida de auriculares izquierda |
| Nivel HPROUT | `0x41` | Salida de auriculares derecha |
| Nivel LEFT_LOP | `0x56` | Salida de línea izquierda |
| Nivel RIGHT_LOP | `0x5D` | Salida de línea derecha |

Bits del registro de salida: **D7–D4** = ganancia analógica (`0`–`9` dB), **D3** = desmutear, **D0** = encender. Los registros de auriculares también configuran **D2** (alta impedancia cuando está apagado), por lo que usan `0x0D` como nibble bajo fijo y los registros de salida de línea usan `0x09`.

## Cómo funciona

1. `setup()` inicia I2C a 100 kHz y escribe en el registro de control de página del AIC3104, luego ajusta ambos canales del DAC a 0 dB y activa/desmutea las salidas de auriculares y de línea a 0 dB.
2. `setVolume()` divide el nivel solicitado en un valor de atenuación del DAC y un valor de ganancia analógica, escribe los cuatro registros de salida y lee de nuevo el registro del DAC izquierdo para confirmación.
3. I2S se inicia en `TX_MODE` a 48 kHz, estéreo, 32 bits, con el XIAO como esclavo para que el XVF3800 genere BCLK y LRCLK.
4. Un `SineWaveGenerator` produce el tono de 440 Hz al 25 % de la escala completa de 32 bits, envuelto en un `GeneratedSoundStream` y copiado a I2S por `StreamCopy`.
5. `loop()` mantiene el tono reproduciéndose y atiende comandos de un solo carácter desde el Monitor Serie.

## Comandos serie

| Tecla | Acción |
|-------|--------|
| `+` | Aumentar volumen (hasta 17) |
| `-` | Disminuir volumen (hasta 0) |
| `m` | Cambiar entre salida de auriculares y de línea |
| `v` | Imprimir el volumen actual |
| `h` | Mostrar la lista de comandos |

## Código

```c
#include <Wire.h>
#include "AudioTools.h"

// =====================================================
// AIC3104 I2C CONFIGURATION
// =====================================================

#define AIC3104_ADDR 0x18

#define I2C_SDA_PIN 5
#define I2C_SCL_PIN 6

// Register addresses
#define AIC3104_PAGE_CTRL         0x00

#define AIC3104_LEFT_DAC_VOLUME   0x2B
#define AIC3104_RIGHT_DAC_VOLUME  0x2C

#define AIC3104_HPLOUT_LEVEL      0x33
#define AIC3104_HPROUT_LEVEL      0x41

#define AIC3104_LEFT_LOP_LEVEL    0x56
#define AIC3104_RIGHT_LOP_LEVEL   0x5D


// =====================================================
// I2S CONFIGURATION
// =====================================================

#define SAMPLE_RATE 48000
#define CHANNELS    2
#define BITS        32

AudioInfo info(SAMPLE_RATE, CHANNELS, BITS);

// 440Hz sine wave, 25% of 32-bit full scale
SineWaveGenerator<int32_t> sineWave(0x20000000);

GeneratedSoundStream<int32_t> sound(sineWave);

I2SStream out;
StreamCopy copier(out, sound);


// =====================================================
// VOLUME CONFIGURATION
// =====================================================

// Volume: 0 to 17
// 0  = -8dB
// 8  =  0dB
// 17 = +9dB

int volume = 8;

// true  = HPLOUT / HPROUT
// false = LEFT_LOP / RIGHT_LOP

bool useHPOUT = true;


// =====================================================
// AIC3104 REGISTER WRITE
// =====================================================

bool aic3104_reg_write(uint8_t reg, uint8_t val) {

    Wire.beginTransmission(AIC3104_ADDR);

    Wire.write(reg);
    Wire.write(val);

    uint8_t error = Wire.endTransmission();

    if (error != 0) {

        Serial.printf(
            "I2C WRITE ERROR: Register 0x%02X, Error %u\n",
            reg,
            error
        );

        return false;
    }

    return true;
}


// =====================================================
// AIC3104 REGISTER READ
// =====================================================

bool aic3104_reg_read(uint8_t reg, uint8_t &value) {

    Wire.beginTransmission(AIC3104_ADDR);

    Wire.write(reg);

    if (Wire.endTransmission(false) != 0) {
        return false;
    }

    if (Wire.requestFrom(
            (uint8_t)AIC3104_ADDR,
            (uint8_t)1
        ) != 1) {

        return false;
    }

    value = Wire.read();

    return true;
}


// =====================================================
// INITIALIZE AIC3104
// =====================================================

bool setupAIC3104() {

    Serial.println("\nInitializing AIC3104...");

    // Select register page 0
    if (!aic3104_reg_write(AIC3104_PAGE_CTRL, 0x00)) {
        return false;
    }

    // DAC digital volume: 0dB, unmuted
    if (!aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00))
        return false;

    if (!aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00))
        return false;

    // HPLOUT / HPROUT:
    // 0dB, unmuted, powered up
    if (!aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D))
        return false;

    if (!aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D))
        return false;

    // LEFT_LOP / RIGHT_LOP:
    // 0dB, unmuted, powered up
    // Bit 2 is reserved; write it as zero.
    if (!aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x09))
        return false;

    if (!aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x09))
        return false;

    Serial.println("AIC3104 initialized successfully");

    return true;
}


// =====================================================
// SET OUTPUT ANALOG GAIN
// =====================================================

bool setOutputGain(uint8_t gain) {

    gain = constrain(gain, 0, 9);

    // Reset inactive output to 0dB.
    // Keep active output at requested gain.

    uint8_t hpGain =
        useHPOUT ? gain : 0;

    uint8_t lopGain =
        useHPOUT ? 0 : gain;

    // HP registers:
    // D7-D4 = 0 to +9dB
    // D3 = 1 (unmuted)
    // D2 = 1 (high impedance when powered down)
    // D0 = 1 (powered up)

    uint8_t hpValue =
        (hpGain << 4) | 0x0D;

    // LOP registers:
    // D7-D4 = 0 to +9dB
    // D3 = 1 (unmuted)
    // D2 = 0 (reserved)
    // D0 = 1 (powered up)

    uint8_t lopValue =
        (lopGain << 4) | 0x09;

    bool ok = true;

    ok &= aic3104_reg_write(
        AIC3104_HPLOUT_LEVEL,
        hpValue
    );

    ok &= aic3104_reg_write(
        AIC3104_HPROUT_LEVEL,
        hpValue
    );

    ok &= aic3104_reg_write(
        AIC3104_LEFT_LOP_LEVEL,
        lopValue
    );

    ok &= aic3104_reg_write(
        AIC3104_RIGHT_LOP_LEVEL,
        lopValue
    );

    return ok;
}


// =====================================================
// SET VOLUME
// =====================================================

void setVolume(int vol) {

    vol = constrain(vol, 0, 17);

    volume = vol;

    uint8_t dacValue;
    uint8_t analogGain;

    if (vol <= 8) {

        // DAC attenuation:
        // Volume 0 = -8dB
        // Volume 8 =  0dB

        int attenuationDB = 8 - vol;

        // AIC3104 DAC step = 0.5dB
        dacValue = attenuationDB * 2;

        analogGain = 0;

    } else {

        // DAC at 0dB
        dacValue = 0;

        // Analog boost: +1dB to +9dB
        analogGain = vol - 8;
    }

    // Update left and right DAC
    bool ok = true;

    ok &= aic3104_reg_write(
        AIC3104_LEFT_DAC_VOLUME,
        dacValue
    );

    ok &= aic3104_reg_write(
        AIC3104_RIGHT_DAC_VOLUME,
        dacValue
    );

    // Update analog output gain
    ok &= setOutputGain(analogGain);

    if (!ok) {

        Serial.println("Volume update failed!");
        return;
    }

    // Debug output

    Serial.println("\n------------------------------");

    Serial.printf(
        "Volume level: %d / 17\n",
        volume
    );

    if (vol <= 8) {

        Serial.printf(
            "DAC attenuation: -%d dB\n",
            8 - vol
        );

    } else {

        Serial.printf(
            "Analog output gain: +%d dB\n",
            analogGain
        );
    }

    Serial.printf(
        "Output mode: %s\n",
        useHPOUT ? "HPLOUT" : "LINE OUT"
    );

    Serial.printf(
        "DAC register: 0x%02X\n",
        dacValue
    );

    uint8_t readValue;

    if (aic3104_reg_read(
            AIC3104_LEFT_DAC_VOLUME,
            readValue
        )) {

        Serial.printf(
            "DAC readback: 0x%02X\n",
            readValue
        );
    }

    Serial.println("------------------------------");
}


// =====================================================
// SERIAL CONTROL
// =====================================================

void handleSerial() {

    while (Serial.available()) {

        char c = Serial.read();

        if (c == '+') {

            if (volume < 17) {
                setVolume(volume + 1);
            } else {
                Serial.println("Maximum volume reached");
            }

        } else if (c == '-') {

            if (volume > 0) {
                setVolume(volume - 1);
            } else {
                Serial.println("Minimum volume reached");
            }

        } else if (c == 'm' || c == 'M') {

            useHPOUT = !useHPOUT;

            setVolume(volume);

        } else if (c == 'v' || c == 'V') {

            Serial.printf(
                "Current volume: %d / 17\n",
                volume
            );

        } else if (c == 'h' || c == 'H') {

            Serial.println("\nCommands:");
            Serial.println("+ : Increase volume");
            Serial.println("- : Decrease volume");
            Serial.println("m : Switch HP / LINE output");
            Serial.println("v : Show current volume");
            Serial.println("h : Show help");
        }
    }
}


// =====================================================
// SETUP
// =====================================================

void setup() {

    Serial.begin(115200);

    while (!Serial);

    Serial.println("\n================================");
    Serial.println("ReSpeaker 44mm Volume Test");
    Serial.println("XVF3800 + AIC3104");
    Serial.println("================================");

    // Initialize I2C
    Wire.begin(
        I2C_SDA_PIN,
        I2C_SCL_PIN
    );

    Wire.setClock(100000);

    delay(100);

    Serial.println("I2C initialized");

    // Initialize AIC3104
    if (!setupAIC3104()) {

        Serial.println("AIC3104 initialization FAILED!");

        while (true) {
            delay(1000);
        }
    }

    // Set starting volume
    setVolume(volume);

    // Initialize I2S output
    auto config = out.defaultConfig(TX_MODE);

    config.copyFrom(info);

    config.pin_bck = 8;     // D9 / GPIO8
    config.pin_ws = 7;      // D8 / GPIO7
    config.pin_data = 44;   // D7 / GPIO44

    // XVF3800 provides I2S clocks
    config.is_master = false;

    if (!out.begin(config)) {

        Serial.println("I2S initialization FAILED!");

        while (true) {
            delay(1000);
        }
    }

    // Start 440Hz sine wave
    sineWave.begin(info, N_A4);

    Serial.println("\nI2S started");
    Serial.println("440Hz test tone playing");

    Serial.println("\nVolume control ready:");
    Serial.println("+ : Increase volume");
    Serial.println("- : Decrease volume");
    Serial.println("m : Switch HP / LINE output");
    Serial.println("v : Show current volume");
    Serial.println("h : Show help");
}


// =====================================================
// LOOP
// =====================================================

void loop() {

    // Continuously transmit 440Hz test tone
    copier.copy();

    // Check serial commands
    handleSerial();
}
```

## Resultado esperado

```text
================================
ReSpeaker 44mm Volume Test
XVF3800 + AIC3104
================================
I2C initialized

Initializing AIC3104...
AIC3104 initialized successfully

------------------------------
Volume level: 8 / 17
Output mode: HPLOUT
DAC register: 0x00
DAC readback: 0x00
------------------------------

I2S started
440Hz test tone playing

Volume control ready:
+ : Increase volume
- : Decrease volume
m : Switch HP / LINE output
v : Show current volume
h : Show help
```

Envía `+` para subir un nivel. Por encima del nivel 8 el registro cambia a `Analog output gain: +N dB`:

```text
------------------------------
Volume level: 10 / 17
Analog output gain: +2 dB
Output mode: HPLOUT
DAC register: 0x00
DAC readback: 0x00
------------------------------
```

## Solución de problemas

### `I2C WRITE ERROR: Register 0x.., Error 2`

El AIC3104 no está reconociendo en `0x18`. Comprueba SDA en D4 (GPIO5) y SCL en D5 (GPIO6), confirma que el firmware I2S se está ejecutando y apaga y enciende la placa.

### `AIC3104 initialization FAILED!`

El códec no aceptó la escritura de selección de página. Normalmente el bus I2C está retenido por otro maestro o la placa sigue arrancando; añade un pequeño retardo antes de `setupAIC3104()` y vuelve a intentarlo.

### No hay tono, pero el registro serie parece correcto

- Confirma que un altavoz o auriculares estén conectados a la salida JST / 3,5 mm.
- El tono de 440 Hz se genera al 25 % de la escala completa, por lo que es intencionadamente bajo en el nivel 8.
- Pulsa `m` para probar la otra ruta de salida (auriculares frente a salida de línea).

### El volumen sigue volviendo atrás después de unos segundos

El firmware del XVF3800 o los botones `+`/`-` integrados escriben en los mismos registros del AIC3104. Ajusta el nivel desde el XIAO sin tocar los botones, o mantén el códec solo bajo el control del XIAO.

### Un clic o chasquido al cambiar con `m`

Ambas etapas de salida se reescriben en cada cambio. Esto es lo esperado en el AIC3104; baja el volumen antes de cambiar para reducirlo.

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
