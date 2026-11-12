---
description: Controla el anillo de 24 x WS2812 LED en el reSpeaker XVF3800 44mm desde el XIAO ESP32-S3 Plus a través de I2C, incluyendo alimentación, modo de efecto, brillo, velocidad y color con verificación de lectura.
title: Efectos LED para reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - efectos LED
  - WS2812
  - xvf3800
  - I2C
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_led_effects
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_led_effects/
---
# Efectos LED para reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus

Los 24 × WS2812 LED de la matriz de 44 mm son controlados por el XVF3800. Un MCU host puede tomar el control sobre I2C: alimentar el raíl de LED, elegir un efecto, ajustar el brillo y la velocidad, y enviar un color RGB. Este sketch recorre siete colores cada dos segundos y lee cada color de vuelta para confirmar que el comando se recibió correctamente.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Requisitos previos

- La matriz debe estar ejecutando el **firmware I2S**; el control por I2C está disponible en este modo.
- Arduino IDE con el paquete de placas ESP32. La biblioteca **Arduino Audio Tools** no es necesaria para este sketch. Consulta [Preparación de software](https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_getting_started/#Preparación-de-software).
- Placa seleccionada como **XIAO_ESP32S3_Plus**, es necesario seleccionar el número de puerto.


## Comandos de control de LED

Todos los comandos van al servicio GPO (`RESID 20`). Las escrituras usan la forma `[resid, cmd, len, payload...]`; las lecturas usan `[resid, cmd | 0x80, len + 1]` y devuelven primero un byte de estado.

| Comando | ID | Carga útil | Notas |
|---------|----|------------|-------|
| Escritura de valor GPO | `1` | pin, valor | Se usa para conmutar el raíl de alimentación de los LED (`X0D33` = 33) |
| Efecto LED | `12` | 1 byte | Consulta la tabla de efectos a continuación |
| Brillo LED | `13` | 1 byte | `0`–`255` |
| Velocidad LED | `15` | 1 byte | Velocidad de animación del efecto |
| Color LED | `16` | 4 bytes | Azul, Verde, Rojo, `0x00` |

| Efecto | Valor | Descripción |
|--------|-------|-------------|
| `LED_EFFECT_OFF` | `0` | LEDs apagados |
| `LED_EFFECT_BREATHING` | `1` | Fundido de respiración |
| `LED_EFFECT_RAINBOW` | `2` | Ciclo arcoíris |
| `LED_EFFECT_SOLID` | `3` | Color sólido único |
| `LED_EFFECT_DOA` | `4` | Indicador de dirección DoA |
| `LED_EFFECT_RING` | `5` | Animación en anillo |

:::note
El valor de color se almacena como `0xRRGGBB` en el sketch, pero se transmite en little-endian, por lo que los bytes de la carga útil son **Azul, Verde, Rojo, 0x00**.
:::

## Cómo funciona

1. `setup()` inicia I2C a 100 kHz y espera 2,5 s a que termine la animación de arranque del propio XVF3800.
2. Habilita el raíl de alimentación de los LED con una escritura GPO al pin `33`, ajusta el brillo a `150` y selecciona `LED_EFFECT_SOLID`.
3. `applyColor()` envía el color, espera 30 ms, luego lee el color de vuelta y compara los 24 bits bajos con lo que se envió, imprimiendo `Color readback PASS` o `MISMATCH`.
4. `loop()` avanza al siguiente color cada dos segundos.

Si los botones y los LED están conectados al XIAO en lugar del XVF3800 (conmutador de enrutamiento en `D11`), el anillo también se puede controlar desde `WS2812_DIN_XIAO` en D15 como una cadena WS2812 simple. El sketch siguiente utiliza la ruta del XVF3800.

## Sketch de Arduino

```c
#include <Wire.h>

// =====================================================
// I2C CONFIGURATION
// =====================================================

#define XMOS_ADDR                 0x2C

#define I2C_SDA_PIN               5
#define I2C_SCL_PIN               6

#define GPO_SERVICER_RESID        20

#define CMD_GPO_WRITE_VALUE       1

#define CMD_LED_EFFECT            12
#define CMD_LED_BRIGHTNESS        13
#define CMD_LED_SPEED             15
#define CMD_LED_COLOR             16

#define LED_POWER_PIN             33

// LED effect modes
#define LED_EFFECT_OFF            0
#define LED_EFFECT_BREATHING      1
#define LED_EFFECT_RAINBOW        2
#define LED_EFFECT_SOLID          3
#define LED_EFFECT_DOA            4
#define LED_EFFECT_RING           5

// =====================================================
// LED CONFIGURATION
// =====================================================

#define LED_BRIGHTNESS            150

// Change LED color every 2 seconds
#define COLOR_INTERVAL_MS         2000

// =====================================================
// COLOR DEFINITIONS
// Format: 0xRRGGBB
// =====================================================

struct LEDColor {
    const char *name;
    uint32_t value;
};

LEDColor colors[] = {
    {"RED",     0xFF0000},
    {"GREEN",   0x00FF00},
    {"BLUE",    0x0000FF},
    {"ORANGE",  0xFF8800},
    {"PURPLE",  0x8000FF},
    {"WHITE",   0xFFFFFF},
    {"YELLOW",  0xFFFF00}
};

const uint8_t COLOR_COUNT =
    sizeof(colors) / sizeof(colors[0]);

uint8_t currentColor = 0;

unsigned long lastColorChange = 0;

// =====================================================
// XMOS I2C WRITE
// =====================================================

bool xmos_write_bytes(
    uint8_t resid,
    uint8_t cmd,
    const uint8_t *value,
    uint8_t write_byte_num
) {

    Wire.beginTransmission(XMOS_ADDR);

    Wire.write(resid);
    Wire.write(cmd);
    Wire.write(write_byte_num);

    for (uint8_t i = 0; i < write_byte_num; i++) {
        Wire.write(value[i]);
    }

    uint8_t error = Wire.endTransmission();

    if (error != 0) {

        Serial.printf(
            "I2C write failed! RESID=%u CMD=%u ERROR=%u\n",
            resid,
            cmd,
            error
        );

        return false;
    }

    return true;
}

// =====================================================
// ENABLE LED POWER
// GPIO X0D33 HIGH = WS2812 LED POWER ENABLE
// =====================================================

bool setLEDPower(bool enable) {

    uint8_t payload[2] = {
        LED_POWER_PIN,
        enable ? 1 : 0
    };

    bool result = xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_GPO_WRITE_VALUE,
        payload,
        2
    );

    if (result) {
        Serial.printf(
            "LED power: %s\n",
            enable ? "ON" : "OFF"
        );
    }

    return result;
}

// =====================================================
// SET LED EFFECT
// =====================================================

bool setLEDEffect(uint8_t effect) {

    uint8_t payload[1] = {effect};

    bool result = xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_LED_EFFECT,
        payload,
        1
    );

    if (result) {
        Serial.printf("LED effect set: %u\n", effect);
    }

    return result;
}

// =====================================================
// SET LED BRIGHTNESS
// =====================================================

bool setLEDBrightness(uint8_t brightness) {

    uint8_t payload[1] = {brightness};

    bool result = xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_LED_BRIGHTNESS,
        payload,
        1
    );

    if (result) {
        Serial.printf("LED brightness: %u\n", brightness);
    }

    return result;
}

// =====================================================
// SET LED SPEED
// =====================================================

bool setLEDSpeed(uint8_t speed) {

    uint8_t payload[1] = {speed};

    return xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_LED_SPEED,
        payload,
        1
    );
}

// =====================================================
// SET LED COLOR
// Color format: 0xRRGGBB
// =====================================================

bool setLEDColor(uint32_t color) {

    // Serialize uint32_t in little-endian order.
    // Byte 0 = Blue
    // Byte 1 = Green
    // Byte 2 = Red
    // Byte 3 = Reserved

    uint8_t payload[4] = {
        (uint8_t)(color & 0xFF),
        (uint8_t)((color >> 8) & 0xFF),
        (uint8_t)((color >> 16) & 0xFF),
        0x00
    };

    bool result = xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_LED_COLOR,
        payload,
        4
    );

    if (result) {

        Serial.printf(
            "LED color command sent: 0x%06lX\n",
            (unsigned long)(color & 0xFFFFFF)
        );

        Serial.printf(
            "Payload: %02X %02X %02X %02X\n",
            payload[0],
            payload[1],
            payload[2],
            payload[3]
        );
    }

    return result;
}

// =====================================================
// READ BACK LED COLOR
// =====================================================

bool readLEDColor(uint32_t &color) {

    Wire.beginTransmission(XMOS_ADDR);

    Wire.write(GPO_SERVICER_RESID);
    Wire.write(CMD_LED_COLOR | 0x80);
    Wire.write(5);  // Status + 4-byte payload

    if (Wire.endTransmission() != 0) {
        Serial.println("LED color read command failed");
        return false;
    }

    uint8_t received = Wire.requestFrom(
        (uint8_t)XMOS_ADDR,
        (uint8_t)5
    );

    if (received != 5) {

        Serial.printf(
            "LED read response incomplete: %u/5\n",
            received
        );

        while (Wire.available()) {
            Wire.read();
        }

        return false;
    }

    uint8_t status = Wire.read();

    uint8_t b0 = Wire.read();
    uint8_t b1 = Wire.read();
    uint8_t b2 = Wire.read();
    uint8_t b3 = Wire.read();

    if (status != 0) {
        Serial.printf(
            "LED read status error: 0x%02X\n",
            status
        );

        return false;
    }

    color =
        ((uint32_t)b3 << 24) |
        ((uint32_t)b2 << 16) |
        ((uint32_t)b1 << 8) |
        b0;

    Serial.printf(
        "LED readback: 0x%06lX\n",
        (unsigned long)(color & 0xFFFFFF)
    );

    return true;
}

// =====================================================
// APPLY COLOR
// =====================================================

void applyColor(uint8_t index) {

    if (index >= COLOR_COUNT) {
        return;
    }

    Serial.println("\n----------------------------");

    Serial.printf(
        "Changing LED color to: %s\n",
        colors[index].name
    );

    if (!setLEDColor(colors[index].value)) {
        Serial.println("Color update failed!");
        return;
    }

    delay(30);

    uint32_t readback = 0;

    if (readLEDColor(readback)) {

        if ((readback & 0xFFFFFF) ==
            (colors[index].value & 0xFFFFFF)) {

            Serial.println("Color readback PASS");

        } else {

            Serial.println("Color readback MISMATCH");
        }
    }

    Serial.println("----------------------------");
}

// =====================================================
// SETUP
// =====================================================

void setup() {

    Serial.begin(115200);
    delay(1000);

    Serial.println("\n================================");
    Serial.println("ReSpeaker 44mm LED COLOR TEST");
    Serial.println("================================");

    // Initialize I2C
    Wire.begin(
        I2C_SDA_PIN,
        I2C_SCL_PIN
    );

    Wire.setClock(100000);

    Serial.println("I2C initialized");

    // Allow XMOS startup LED initialization to finish
    delay(2500);

    // Enable LED hardware power
    setLEDPower(true);

    delay(100);

    // Configure LED brightness
    setLEDBrightness(LED_BRIGHTNESS);

    // Configure solid color mode
    setLEDEffect(LED_EFFECT_SOLID);

    delay(100);

    // Start with RED
    applyColor(currentColor);

    lastColorChange = millis();

    Serial.println("\nAutomatic LED color changing started");
}

// =====================================================
// LOOP
// =====================================================

void loop() {

    unsigned long now = millis();

    if (now - lastColorChange >= COLOR_INTERVAL_MS) {

        lastColorChange = now;

        currentColor++;

        if (currentColor >= COLOR_COUNT) {
            currentColor = 0;
        }

        applyColor(currentColor);
    }
}
```

## Resultado esperado

```text
================================
ReSpeaker 44mm LED COLOR TEST
================================
I2C initialized
LED power: ON
LED brightness: 150
LED effect set: 3

----------------------------
Changing LED color to: RED
LED color command sent: 0xFF0000
Payload: 00 00 FF 00
LED readback: 0xFF0000
Color readback PASS
----------------------------

Automatic LED color changing started

----------------------------
Changing LED color to: GREEN
LED color command sent: 0x00FF00
Payload: 00 FF 00 00
LED readback: 0x00FF00
Color readback PASS
----------------------------
```

El anillo debe alternar entre rojo, verde, azul, naranja, morado, blanco y amarillo cada dos segundos.

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
