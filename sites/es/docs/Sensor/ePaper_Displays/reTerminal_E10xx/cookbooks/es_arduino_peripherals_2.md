---
description: Recetario de Arduino para reTerminal E1001 / E1002 / E1003 / E1004 — lectura/escritura del RTC PCF8563, estrategias de bajo consumo con deep-sleep y grabación de audio con micrófono PDM en tarjeta SD (solo E1001 / E1002 / E1003).
title: 'Recetario de Arduino: RTC, Bajo Consumo y Audio (reTerminal E Serie)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_arduino_peripherals_2
sidebar_position: 3
sidebar_label: Arduino – RTC, Energía y Audio
last_update:
  date: 05/27/2026
  author: Citric
createdAt: '2026-05-27'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals_2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recetario de Arduino: RTC, Bajo Consumo y Audio (reTerminal E Serie)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/246.png" style={{width:600, height:'auto'}}/></div>

:::tip Otros recetarios en esta serie
- **[Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino)** — renderizado de texto, gráficos e imágenes en la pantalla de tinta electrónica.
- **[Arduino Cookbook: Onboard Peripherals](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals)** — LED, zumbador, botones, sensor SHT4x, monitor de batería, tarjeta microSD y la canalización de imágenes de la tarjeta SD.
:::

## Introducción

Este es el segundo recetario de periféricos para la reTerminal E Serie. Mientras que el [primer recetario de periféricos](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals) cubre los periféricos básicos de E/S (LED, zumbador, botones, SHT4x, batería, tarjeta SD), esta página profundiza en tres temas más avanzados:

- **Reloj en Tiempo Real (RTC)** — el chip RTC **PCF8563** integrado, alimentado por una pila tipo moneda CR1220, que mantiene la hora incluso cuando se retira la batería principal.
- **Modos de Bajo Consumo** — deep sleep, light sleep y estrategias de activación por GPIO para extender la vida de la batería de días a meses.
- **Micrófono PDM** — captura de audio mediante el micrófono digital PDM integrado (solo E1001 / E1002 / E1003; el E1004 no tiene micrófono) y guardado de archivos WAV en la tarjeta microSD.

Todos los ejemplos de este recetario provienen del repositorio [OSHW-reTerminal-Series-E-D](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D) y **no requieren instalar bibliotecas adicionales** — todo utiliza las API integradas del ESP32.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Materiales necesarios

Este recetario se aplica a la reTerminal E Serie. Elige el dispositivo que tengas a mano:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Requisitos previos

Antes de ejecutar cualquiera de los ejemplos siguientes, ya deberías tener:

- El **Arduino IDE** instalado con el **paquete de placas ESP32** (≥ 3.0 para el micrófono PDM) y la placa **XIAO_ESP32S3** seleccionada.
- **PSRAM** configurada como **OPI PSRAM** y **Flash** configurada como **8 MB** en el menú Tools.
- Un **cable de datos USB-C** funcional y el puerto serie correcto seleccionado.
- Verificado que puedes flashear un sketch básico al dispositivo — consulta la preparación del entorno en [Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino#preparación-del-entorno) si aún no lo has hecho.

Todos los sketches de este recetario imprimen información de depuración a través de `Serial1` en los pines **GPIO44 (RX) / GPIO43 (TX)** a **115200 baudios** — este es el puente USB-UART portador, **no** el USB-CDC `Serial` que el Arduino IDE abre automáticamente. Abre el Monitor Serie de Arduino y selecciona el puerto y la velocidad en baudios correspondientes para seguir la salida.

### Resumen de compatibilidad de hardware

No todas las funciones de este recetario están disponibles en los cuatro modelos. La tabla siguiente resume lo que puedes utilizar:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Función</th>
      <th>E1001</th>
      <th>E1002</th>
      <th>E1003</th>
      <th>E1004</th>
    </tr>
    <tr>
      <td>PCF8563 RTC (externo, I2C 0x51, respaldo CR1220)</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Deep sleep / light sleep</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Activación por botón (KEY0)</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Grabación con micrófono PDM</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
  </table>
</div>

## Reloj en Tiempo Real (RTC)

Cada modelo de reTerminal E Serie incluye un chip de reloj en tiempo real **PCF8563** de NXP, con su propio cristal de 32,768 kHz y un portapilas para **batería tipo moneda CR1220** que mantiene el tiempo incluso cuando se retira o se agota por completo la batería principal.

:::warning Batería no incluida — instálala tú mismo
La pila tipo moneda CR1220 **no** se envía con el dispositivo. Debes comprar una batería CR1220 por separado e instalarla antes de que el RTC pueda conservar la hora entre ciclos de alimentación.
:::

### Instalación de la batería CR1220

El portapilas CR1220 se encuentra en la **parte posterior de la PCB**. Los pasos de desmontaje difieren ligeramente entre modelos:

<Tabs>
<TabItem value="e1001_e1002" label="E1001 / E1002" default>

<div style={{textAlign:'center'}}>
<iframe style={{width:'80%', aspectRatio:'16/9'}} src="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/rtc_1001_1002.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Paso 1 — Apaga el dispositivo**

Desconecta el cable USB-C y asegúrate de que el dispositivo esté completamente apagado.

**Paso 2 — Retira la tapa trasera**

Retira los cuatro tornillos del panel posterior y levanta la tapa trasera para dejar al descubierto la PCB.

**Paso 3 — Localiza el portapilas**

Localiza el portapilas para la moneda CR1220 en la PCB (marcado como `BT2` o `CR1220`).

**Paso 4 — Inserta la batería**

Coloca la batería CR1220 en el portapilas con el **lado positivo (+) hacia arriba**. Presiona suavemente hasta que encaje en su lugar.

**Paso 5 — Vuelve a montar**

Vuelve a colocar la tapa trasera y aprieta los cuatro tornillos. El RTC ahora tiene respaldo de batería y mantendrá la hora incluso cuando se desconecte la alimentación principal.

</TabItem>
<TabItem value="e1003" label="E1003">

<div style={{textAlign:'center'}}>
<iframe style={{width:'80%', aspectRatio:'16/9'}} src="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/rtc_1003.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Paso 1 — Apaga el dispositivo**

Desconecta el cable USB-C y asegúrate de que el dispositivo esté completamente apagado.

**Paso 2 — Retira la tapa trasera**

Retira los tornillos del panel posterior y levanta la tapa trasera para dejar al descubierto la PCB.

**Paso 3 — Localiza el portapilas**

Localiza el portapilas para la moneda CR1220 en la PCB (marcado como `BT2` o `CR1220`).

**Paso 4 — Inserta la batería**

Coloca la batería CR1220 en el portapilas con el **lado positivo (+) hacia arriba**. Presiona suavemente hasta que encaje en su lugar.

**Paso 5 — Vuelve a montar**

Vuelve a colocar la tapa trasera y aprieta los tornillos. El RTC ahora tiene respaldo de batería y mantendrá la hora incluso cuando se desconecte la alimentación principal.

</TabItem>
<TabItem value="e1004" label="E1004">

<div style={{textAlign:'center'}}>
<iframe style={{width:'80%', aspectRatio:'16/9'}} src="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/rtc_1004.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Paso 1 — Apaga el dispositivo**

Desconecta el cable USB-C y asegúrate de que el dispositivo esté completamente apagado.

**Paso 2 — Retira la tapa trasera**

Retira los tornillos alrededor del perímetro del panel trasero y levanta con cuidado la tapa posterior para dejar al descubierto la PCB.

**Paso 3 — Localiza el portapilas**

Encuentra el portapilas tipo moneda CR1220 en la PCB (marcado como `BT2` o `CR1220`).

**Paso 4 — Inserta la batería**

Coloca la batería CR1220 en el portapilas con el **lado positivo (+) hacia arriba**. Presiona suavemente hasta que encaje en su lugar.

**Paso 5 — Vuelve a montar**

Vuelve a colocar la tapa trasera y aprieta todos los tornillos. El RTC ahora tiene respaldo por batería y mantendrá la hora incluso cuando se desconecte la alimentación principal.

</TabItem>
</Tabs>

### Descripción general del hardware

<div class="table-center">
  <table align="center">
    <tr>
      <th>Parámetro</th>
      <th>Valor</th>
    </tr>
    <tr>
      <td>Chip</td>
      <td>PCF8563M/TR (NXP)</td>
    </tr>
    <tr>
      <td>Bus</td>
      <td>I2C — dirección <strong>0x51</strong> (fijada en silicio)</td>
    </tr>
    <tr>
      <td>SCL</td>
      <td>GPIO20</td>
    </tr>
    <tr>
      <td>SDA</td>
      <td>GPIO19</td>
    </tr>
    <tr>
      <td>Cristal</td>
      <td>32,768 kHz (pines OSCI / OSCO)</td>
    </tr>
    <tr>
      <td>Batería de respaldo</td>
      <td>Pila tipo moneda CR1220 — mantiene la hora cuando se retira la alimentación principal</td>
    </tr>
    <tr>
      <td>Bandera VL</td>
      <td>Establecida por el chip cuando el voltaje de la batería de respaldo es demasiado bajo; indica que la hora no es fiable</td>
    </tr>
  </table>
</div>

### Sketch completo: RTC_PCF8563

El sketch completo está disponible en el repositorio: [`examples/RTC_PCF8563/RTC_PCF8563.ino`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/blob/main/examples/RTC_PCF8563/RTC_PCF8563.ino).

<details>
<summary>Haz clic para desplegar el código completo de RTC_PCF8563.ino</summary>

```cpp
// ============================================================
// USER CONFIGURATION
// ============================================================

// --- How to set the initial time ---
//
// OPTION A — Compile-time (recommended):
//   Uncomment USE_COMPILE_TIME.  The C compiler embeds __DATE__ / __TIME__
//   (the exact moment you clicked "Upload") into the binary automatically.
//   No need to type the date by hand — just compile and flash.
//
#define USE_COMPILE_TIME
//
// OPTION B — Manual:
//   Comment out USE_COMPILE_TIME above, then fill in the values below.
//   INITIAL_YEAR must be in the range 2000–2099.
#define INITIAL_YEAR   2026
#define INITIAL_MONTH     5   // 1–12
#define INITIAL_DAY      26   // 1–31
#define INITIAL_HOUR     14   // 0–23
#define INITIAL_MIN       0   // 0–59
#define INITIAL_SEC       0   // 0–59

// --- When to write the time ---
//
// You do NOT need to touch anything here for normal use.
//
// How it works automatically:
//   • New board / battery just replaced → PCF8563 sets VL=1 internally
//     → code detects VL=1 at boot → writes the initial time once → done.
//   • Every reboot after that (battery healthy, VL=0)
//     → stored time is kept, nothing is overwritten.
//
// FORCE_SET_TIME is only for manual re-calibration (e.g. correcting drift).
// If you uncomment it, the clock is overwritten on EVERY boot — make sure
// to comment it out again and re-flash right after calibrating.
//
// #define FORCE_SET_TIME

// ============================================================
// END OF USER CONFIGURATION — no need to edit below this line
// ============================================================

#include <Wire.h>
#include <time.h>
#include <sys/time.h>

// ============================================================
// RtcTime — carries all date/time fields returned by rtcGetTime().
//
// Defined here, right after the #includes, so that Arduino IDE's
// automatic function-prototype injection (which is inserted after
// the last #include) can see the type before using it in prototypes
// like  static bool rtcGetTime(RtcTime &rt).
// ============================================================
struct RtcTime {
    int  year;       // full year (e.g. 2026)
    int  month;      // 1–12
    int  day;        // 1–31
    int  weekday;    // 0=Sunday … 6=Saturday
    int  hour;       // 0–23
    int  minute;     // 0–59
    int  second;     // 0–59
    bool voltageOK;  // false → VL flag set, battery was drained, time unreliable
};

// ---------- Serial debug (carrier USB-UART bridge) ----------
#define PIN_SERIAL_RX   44
#define PIN_SERIAL_TX   43
#define LOG             Serial1

// ---------- I2C pins (identical on all E1001 / E1002 / E1003 / E1004) --------
#define PIN_I2C_SCL     20   // ESP_IO20 / I2C0_SCL
#define PIN_I2C_SDA     19   // ESP_IO19 / I2C0_SDA

// ---------- PCF8563 I2C address (7-bit, fixed in hardware) -------------------
#define PCF8563_ADDR    0x51

// ---------- PCF8563 register map (only the registers used here) --------------
#define REG_CTRL1       0x00   // Control/Status 1 — bit5 STOP halts the clock
#define REG_CTRL2       0x01   // Control/Status 2
#define REG_SECONDS     0x02   // bit7 = VL (voltage-low flag); bits6:0 = seconds
#define REG_MINUTES     0x03   // bits6:0 = minutes
#define REG_HOURS       0x04   // bits5:0 = hours
#define REG_DAYS        0x05   // bits5:0 = day-of-month
#define REG_WEEKDAYS    0x06   // bits2:0 = weekday (0=Sunday)
#define REG_MONTHS      0x07   // bit7 = century (0→2000s, 1→1900s); bits4:0 = month
#define REG_YEARS       0x08   // bits7:0 = year within century (BCD, 00–99)
#define REG_CLKOUT      0x0D   // CLKOUT control — bit7 FE enables clock output pin

// ============================================================
// BCD ↔ decimal conversion
// The PCF8563 stores all time fields in BCD (Binary-Coded Decimal):
//   e.g. decimal 26 → upper nibble=2, lower nibble=6 → 0x26
// ============================================================
static inline uint8_t bcdToDec(uint8_t bcd)
{
    return static_cast<uint8_t>(((bcd >> 4) * 10U) + (bcd & 0x0FU));
}

static inline uint8_t decToBcd(uint8_t dec)
{
    return static_cast<uint8_t>(((dec / 10U) << 4) | (dec % 10U));
}

// ============================================================
// I2C read / write helpers
// ============================================================

// Read `len` consecutive registers starting at `reg` into `buf`.
// Uses a repeated-START (no STOP between write and read) as required by the
// PCF8563 data sheet.
static bool rtcReadRegs(uint8_t reg, uint8_t *buf, size_t len)
{
    Wire.beginTransmission(PCF8563_ADDR);
    Wire.write(reg);
    if (Wire.endTransmission(false) != 0) return false;   // repeated START

    const uint8_t received = Wire.requestFrom(static_cast<uint8_t>(PCF8563_ADDR),
                                              static_cast<uint8_t>(len));
    if (received != len) return false;

    for (size_t i = 0; i < len; i++) {
        buf[i] = static_cast<uint8_t>(Wire.read());
    }
    return true;
}

// Write a single register.
static bool rtcWriteReg(uint8_t reg, uint8_t value)
{
    Wire.beginTransmission(PCF8563_ADDR);
    Wire.write(reg);
    Wire.write(value);
    return Wire.endTransmission() == 0;
}

// ============================================================
// PCF8563 API
// ============================================================

// Check whether the chip responds on the I2C bus.
static bool rtcProbe()
{
    Wire.beginTransmission(PCF8563_ADDR);
    return Wire.endTransmission() == 0;
}

// Clear the STOP bit so the oscillator runs, and disable the CLKOUT pin
// (saves a small amount of power when the clock output is not needed).
static bool rtcInit()
{
    if (!rtcWriteReg(REG_CTRL1, 0x00)) return false;   // STOP=0 → run
    if (!rtcWriteReg(REG_CTRL2, 0x00)) return false;   // clear alarm/timer flags
    if (!rtcWriteReg(REG_CLKOUT, 0x00)) return false;  // FE=0 → disable CLKOUT
    return true;
}

// Return false if the voltage-low flag is set (time data is unreliable).
static bool rtcVoltageOK()
{
    uint8_t sec = 0;
    if (!rtcReadRegs(REG_SECONDS, &sec, 1)) return false;
    return (sec & 0x80U) == 0U;   // VL bit = 0 means voltage has been OK
}

// Write date and time to the RTC.
// `year` must be in the range 2000–2099.
// Weekday is computed automatically from the supplied date.
static bool rtcSetTime(int year, int month, int day,
                       int hour, int minute, int second)
{
    if (year  < 2000 || year  > 2099) return false;
    if (month < 1    || month > 12  ) return false;
    if (day   < 1    || day   > 31  ) return false;
    if (hour  < 0    || hour  > 23  ) return false;
    if (minute < 0   || minute > 59 ) return false;
    if (second < 0   || second > 59 ) return false;

    // Use mktime() to derive the weekday (0=Sunday) from the calendar date.
    struct tm t = {};
    t.tm_year = year - 1900;
    t.tm_mon  = month - 1;
    t.tm_mday = day;
    mktime(&t);   // fills t.tm_wday

    // Write all 7 time registers in one burst starting at REG_SECONDS.
    // The PCF8563 auto-increments the internal address pointer after each byte.
    Wire.beginTransmission(PCF8563_ADDR);
    Wire.write(REG_SECONDS);
    Wire.write(decToBcd(static_cast<uint8_t>(second)));
    Wire.write(decToBcd(static_cast<uint8_t>(minute)));
    Wire.write(decToBcd(static_cast<uint8_t>(hour)));
    Wire.write(decToBcd(static_cast<uint8_t>(day)));
    Wire.write(static_cast<uint8_t>(t.tm_wday));         // weekday is not BCD
    Wire.write(decToBcd(static_cast<uint8_t>(month)));   // century bit = 0 → 2000s
    Wire.write(decToBcd(static_cast<uint8_t>(year % 100)));
    return Wire.endTransmission() == 0;
}

// Read the current date and time from the RTC into an RtcTime struct.
static bool rtcGetTime(RtcTime &rt)
{
    uint8_t raw[7] = {};
    // Burst-read 7 bytes: seconds, minutes, hours, days, weekdays, months, years
    if (!rtcReadRegs(REG_SECONDS, raw, 7)) return false;

    rt.voltageOK = (raw[0] & 0x80U) == 0U;                // VL flag
    rt.second    = bcdToDec(raw[0] & 0x7FU);
    rt.minute    = bcdToDec(raw[1] & 0x7FU);
    rt.hour      = bcdToDec(raw[2] & 0x3FU);
    rt.day       = bcdToDec(raw[3] & 0x3FU);
    rt.weekday   = bcdToDec(raw[4] & 0x07U);
    rt.month     = bcdToDec(raw[5] & 0x1FU);

    const int yr = bcdToDec(raw[6]);
    // Century bit 1 in REG_MONTHS → 1900s, bit 0 → 2000s
    rt.year      = ((raw[5] & 0x80U) != 0U) ? (1900 + yr) : (2000 + yr);

    return true;
}

// ============================================================
// Sync the ESP32's POSIX system clock from the RTC.
// After calling this, standard C functions like time(), localtime(),
// and strftime() will return the correct time.
// ============================================================
static void syncSystemClock(const RtcTime &rt)
{
    struct tm t = {};
    t.tm_year = rt.year - 1900;
    t.tm_mon  = rt.month - 1;
    t.tm_mday = rt.day;
    t.tm_hour = rt.hour;
    t.tm_min  = rt.minute;
    t.tm_sec  = rt.second;
    const time_t epoch = mktime(&t);
    struct timeval tv  = { epoch, 0 };
    settimeofday(&tv, nullptr);
}

// ============================================================
// Compile-time timestamp parser
//
// The C preprocessor provides two string literals in every translation unit:
//   __DATE__  →  "May 26 2026"  (month name, day, 4-digit year)
//   __TIME__  →  "14:53:00"    (HH:MM:SS, 24-hour)
//
// We parse them here so callers get plain integers without any library.
// ============================================================
#ifdef USE_COMPILE_TIME
static void getCompileTime(int &year, int &month, int &day,
                           int &hour, int &minute, int &second)
{
    // Map the 3-letter month abbreviation to 1–12.
    // strncmp compares only the first 3 characters, so this is safe.
    const char *abbr  = __DATE__;       // "May 26 2026"
    const char *names = "JanFebMarAprMayJunJulAugSepOctNovDec";
    month = 1;
    for (int i = 0; i < 12; i++) {
        if (strncmp(abbr, names + i * 3, 3) == 0) { month = i + 1; break; }
    }

    // __DATE__ + 4  →  "26 2026"  (day starts at offset 4)
    // __DATE__ + 7  →  "2026"     (year starts at offset 7)
    day  = atoi(__DATE__ + 4);
    year = atoi(__DATE__ + 7);

    // __TIME__      →  "14:53:00"
    // __TIME__ + 3  →  "53:00"
    // __TIME__ + 6  →  "00"
    hour   = atoi(__TIME__);
    minute = atoi(__TIME__ + 3);
    second = atoi(__TIME__ + 6);
}
#endif  // USE_COMPILE_TIME

// ============================================================
// Helpers
// ============================================================
static const char *kWeekdayNames[] = {
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
};

// ============================================================
// Global state
// ============================================================
static unsigned long s_lastPrintMs = 0;

// ============================================================
// setup()
// ============================================================
void setup()
{
    // Use Serial1 (the USB-UART bridge on the carrier board, not USB-CDC).
    // GPIO43 = TX, GPIO44 = RX of the bridge chip.
    LOG.begin(115200, SERIAL_8N1, PIN_SERIAL_RX, PIN_SERIAL_TX);
    delay(500);

    LOG.println("=========================================");
    LOG.println("  RTC_PCF8563 — reTerminal E Series");
    LOG.println("=========================================");

    // ── Step 1: initialise I2C at 400 kHz (PCF8563 supports up to 400 kHz) ──
    Wire.begin(PIN_I2C_SDA, PIN_I2C_SCL);
    Wire.setClock(400000UL);
    LOG.printf("[I2C] Bus started: SDA=GPIO%d  SCL=GPIO%d  400 kHz\n",
               PIN_I2C_SDA, PIN_I2C_SCL);

    // ── Step 2: check the PCF8563 is reachable ──
    LOG.printf("[RTC] Probing PCF8563 at I2C address 0x%02X ...", PCF8563_ADDR);
    if (!rtcProbe()) {
        LOG.println(" NOT FOUND");
        LOG.println("[RTC] FATAL: check wiring and backup battery. Halting.");
        while (true) delay(1000);
    }
    LOG.println(" OK");

    // ── Step 3: clear STOP bit, disable CLKOUT ──
    if (!rtcInit()) {
        LOG.println("[RTC] FATAL: could not initialise PCF8563. Halting.");
        while (true) delay(1000);
    }

    // ── Step 4: decide whether the time needs to be set ──
    //
    // The VL (voltage-low) flag is stored inside the PCF8563 and survives
    // power cycles.  It is set by the chip whenever the backup battery
    // voltage has been too low to keep the clock running reliably.
    // We treat a set VL flag as "time is unknown and must be initialised".
    const bool voltageWasLow = !rtcVoltageOK();

#ifdef FORCE_SET_TIME
    const bool doSetTime = true;
    LOG.println("[RTC] FORCE_SET_TIME defined — overwriting RTC time.");
#else
    const bool doSetTime = voltageWasLow;
    if (voltageWasLow) {
        LOG.println("[RTC] WARNING: VL flag set — backup battery may be depleted.");
        LOG.println("[RTC] Time is unreliable; resetting to INITIAL_* constants.");
    } else {
        LOG.println("[RTC] Battery OK — retaining stored time.");
    }
#endif

    if (doSetTime) {
#ifdef USE_COMPILE_TIME
        // Parse the timestamp baked in at compile time.
        // __DATE__ / __TIME__ are evaluated by the C preprocessor during
        // compilation, so they reflect the moment "Upload" was clicked.
        int cy, cm, cd, ch, cmin, cs;
        getCompileTime(cy, cm, cd, ch, cmin, cs);
        LOG.printf("[RTC] Setting time from compile timestamp: "
                   "%04d-%02d-%02d  %02d:%02d:%02d\n",
                   cy, cm, cd, ch, cmin, cs);
        if (!rtcSetTime(cy, cm, cd, ch, cmin, cs)) {
            LOG.println("[RTC] ERROR: rtcSetTime() failed.");
        }
#else
        LOG.printf("[RTC] Setting time from INITIAL_* constants: "
                   "%04d-%02d-%02d  %02d:%02d:%02d\n",
                   INITIAL_YEAR, INITIAL_MONTH, INITIAL_DAY,
                   INITIAL_HOUR, INITIAL_MIN,   INITIAL_SEC);
        if (!rtcSetTime(INITIAL_YEAR, INITIAL_MONTH, INITIAL_DAY,
                        INITIAL_HOUR, INITIAL_MIN,   INITIAL_SEC)) {
            LOG.println("[RTC] ERROR: rtcSetTime() failed.");
        }
#endif
    }

    // ── Step 5: read back and sync the ESP32 system clock ──
    //
    // The ESP32 has its own software RTC that resets to Jan 1 1970 on each
    // power cycle.  By calling settimeofday() once at boot, we keep the
    // ESP32's POSIX time() / localtime() / strftime() in sync with the
    // hardware RTC so the rest of the firmware can use standard C time APIs.
    RtcTime rt;
    if (rtcGetTime(rt)) {
        syncSystemClock(rt);
        LOG.printf("[RTC] Current time: %04d-%02d-%02d (%s)  %02d:%02d:%02d\n",
                   rt.year, rt.month, rt.day, kWeekdayNames[rt.weekday],
                   rt.hour, rt.minute, rt.second);
        LOG.println("[RTC] ESP32 system clock synced.");
    } else {
        LOG.println("[RTC] ERROR: could not read time after init.");
    }

    LOG.println();
    LOG.println("[READY] Printing time every second.");
}

// ============================================================
// loop()
// ============================================================
void loop()
{
    const unsigned long now = millis();

    // Print time once per second (non-blocking: compare elapsed time instead
    // of calling delay(), so other tasks in loop() are never blocked).
    if (now - s_lastPrintMs >= 1000UL) {
        s_lastPrintMs = now;

        RtcTime rt;
        if (rtcGetTime(rt)) {
            // Show the time read directly from the hardware RTC.
            // The "[VL]" tag warns that the chip saw a low-voltage event.
            LOG.printf("[TIME] %04d-%02d-%02d (%s)  %02d:%02d:%02d%s\n",
                       rt.year, rt.month, rt.day,
                       kWeekdayNames[rt.weekday],
                       rt.hour, rt.minute, rt.second,
                       rt.voltageOK ? "" : "  [VL: battery low!]");

            // ── Optional: also print the time via the ESP32 POSIX API ──
            // This demonstrates that the system clock (synced at boot) is
            // ticking independently of the I2C bus.
            char buf[32];
            time_t epoch = time(nullptr);
            struct tm info;
            localtime_r(&epoch, &info);
            strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", &info);
            LOG.printf("[SYS ] ESP32 system time: %s\n", buf);

        } else {
            LOG.println("[RTC] ERROR: rtcGetTime() failed — check I2C bus.");
        }
    }
}
```

</details>

### Cómo funciona el código

El código sigue una secuencia de inicialización de 5 pasos en `setup()`:

1. **Inicializar el bus I2C** a 400 kHz en GPIO19 (SDA) / GPIO20 (SCL), los pines I2C estándar de reTerminal compartidos con el sensor SHT4x.
2. **Sondear el PCF8563** en la dirección 0x51 para verificar que el chip está respondiendo.
3. **Inicializar el chip**: borrar el bit STOP (para que el oscilador funcione), borrar las banderas de alarma y desactivar el pin CLKOUT para ahorrar energía.
4. **Decidir si se debe ajustar la hora**: el PCF8563 tiene una **bandera VL (Voltage Low)** que se establece automáticamente cuando el voltaje de la batería de respaldo cae demasiado. Si VL está activada (primer arranque o batería reemplazada), el código escribe la hora inicial; de lo contrario mantiene la hora almacenada.
5. **Sincronizar el reloj del sistema del ESP32**: después de leer la hora del PCF8563, se llama a `settimeofday()` para que las funciones de tiempo estándar de C (`time()`, `localtime()`, `strftime()`) devuelvan la hora correcta en el resto del firmware.

El `loop()` lee el RTC una vez por segundo vía I2C e imprime la hora formateada. La etiqueta `[VL]` aparece si el voltaje de la batería de respaldo es bajo.

### Opciones para ajustar la hora

| Opción | Cómo activarla | Comportamiento |
|---|---|---|
| **En tiempo de compilación** (recomendado) | `#define USE_COMPILE_TIME` | El preprocesador de C inserta `__DATE__` / `__TIME__` (el momento en que hiciste clic en Upload). Cero esfuerzo: solo compila y flashea. |
| **Manual** | Comenta `USE_COMPILE_TIME`, rellena las constantes `INITIAL_*` | Escribes la fecha y hora exactas. Útil para entornos sin conexión. |
| **Forzar sobrescritura** | `#define FORCE_SET_TIME` | Sobrescribe el RTC en **cada** arranque. Úsalo para recalibrar, luego coméntalo y vuelve a flashear. |

:::tip
La bandera VL persiste entre ciclos de alimentación. Una vez que se ajusta la hora y la batería CR1220 está en buen estado, el PCF8563 sigue funcionando y los reinicios posteriores **no** la sobrescriben.
:::

### Salida esperada

```
=========================================
  RTC_PCF8563 — reTerminal E Series
=========================================
[RTC] 2026-05-27 (Wed) 14:53:00
[READY] Printing time every second.
[TIME] 2026-05-27 (Wed) 14:53:01
[TIME] 2026-05-27 (Wed) 14:53:02
[TIME] 2026-05-27 (Wed) 14:53:03
```

Si la batería de respaldo está agotada o ausente, verás la advertencia `[VL: battery low!]`:

```
[RTC] WARNING: VL flag set — backup battery may be depleted.
[TIME] 2026-05-27 (Wed) 14:53:01  [VL: battery low!]
```

<!-- TODO: Insert serial monitor screenshot here -->

## Modos de bajo consumo

El ESP32-S3 admite varios estados de energía. Los dos más útiles para aplicaciones de ePaper alimentadas por batería son **deep sleep** y **light sleep**:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Estado de energía</th>
      <th>CPU</th>
      <th>Wi-Fi / BT</th>
      <th>RAM</th>
      <th>RTC</th>
      <th>Fuente de activación</th>
    </tr>
    <tr>
      <td><strong>Activo</strong></td>
      <td>En ejecución</td>
      <td>Encendido</td>
      <td>Toda</td>
      <td>Encendido</td>
      <td>—</td>
    </tr>
    <tr>
      <td><strong>Light Sleep</strong></td>
      <td>Pausada</td>
      <td>Apagado</td>
      <td>Retenida</td>
      <td>Encendido</td>
      <td>GPIO, Temporizador</td>
    </tr>
    <tr>
      <td><strong>Deep Sleep</strong></td>
      <td>Apagado</td>
      <td>Apagado</td>
      <td>Perdida (excepto RTC)</td>
      <td>Encendido</td>
      <td>GPIO, Temporizador, Táctil</td>
    </tr>
  </table>
</div>

### Sketch completo: LowPower_DeepSleep

El sketch completo está disponible en el repositorio: [`examples/LowPower_DeepSleep/LowPower_DeepSleep.ino`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/blob/main/examples/LowPower_DeepSleep/LowPower_DeepSleep.ino).

<details>
<summary>Haz clic para desplegar todo el código LowPower_DeepSleep.ino</summary>

```cpp
// ============================================================
// USER CONFIGURATION
// ============================================================

// How many seconds to stay awake before entering deep sleep.
#define SLEEP_DELAY_SEC   5

// --- Wake-up button pin ---
// Uncomment the ONE line that matches your device.
// Only GPIO0–GPIO21 can wake the ESP32-S3 from deep sleep.
//
#define PIN_WAKE_BTN   3   // E1001 / E1002 / E1003 — KEY0
// #define PIN_WAKE_BTN   4   // E1004               — KEY0

// ============================================================
// END OF USER CONFIGURATION
// ============================================================

#include "esp_sleep.h"
#include "driver/rtc_io.h"

#define PIN_SERIAL_RX   44
#define PIN_SERIAL_TX   43
#define LOG             Serial1

// Survives deep sleep — increments on every wakeup.
RTC_DATA_ATTR static int s_bootCount = 0;

static const char* wakeupReason()
{
    switch (esp_sleep_get_wakeup_cause()) {
        case ESP_SLEEP_WAKEUP_EXT1:  return "GPIO button (EXT1)";
        default:                     return "power-on / manual reset";
    }
}

void setup()
{
    s_bootCount++;

    LOG.begin(115200, SERIAL_8N1, PIN_SERIAL_RX, PIN_SERIAL_TX);
    delay(100);

    LOG.println("========================================");
    LOG.println("  LowPower_DeepSleep — reTerminal E");
    LOG.println("========================================");
    LOG.printf("[WAKE] Boot #%d — wakeup: %s\n", s_bootCount, wakeupReason());
    LOG.printf("[WAKE] Entering deep sleep in %d seconds...\n", SLEEP_DELAY_SEC);
    LOG.printf("[WAKE] Press GPIO%d button to wake up.\n", PIN_WAKE_BTN);

    delay((uint32_t)SLEEP_DELAY_SEC * 1000);

    esp_sleep_enable_ext1_wakeup(1ULL << PIN_WAKE_BTN, ESP_EXT1_WAKEUP_ANY_LOW);

    // Normal GPIO pull-up is off during deep sleep; use keep-alive domain instead.
    rtc_gpio_pullup_en(static_cast<gpio_num_t>(PIN_WAKE_BTN));
    rtc_gpio_pulldown_dis(static_cast<gpio_num_t>(PIN_WAKE_BTN));

    LOG.println("[SLEEP] Entering deep sleep now.");
    LOG.flush();
    delay(10);

    esp_deep_sleep_start();
}

void loop()
{
    // esp_deep_sleep_start() in setup() never returns, so loop() is never reached.
    // If you see this message, deep sleep failed to start.
    LOG.println("[ERROR] deep sleep did not start!");
    delay(1000);
}
```

</details>

### Cómo funciona el código

1. **Comienza `setup()`**: incrementa el contador de arranques `RTC_DATA_ATTR` (esta variable se mantiene en el dominio de memoria RTC del ESP32-S3, por lo que sobrevive al deep sleep).
2. **Imprime el estado**: muestra el número de arranques y por qué se despertó el chip (botón GPIO frente a reinicio por encendido).
3. **Espera** `SLEEP_DELAY_SEC` segundos (5 por defecto): esto te da tiempo para leer la salida serie.
4. **Configura la fuente de activación**: `esp_sleep_enable_ext1_wakeup()` registra el pin del botón (KEY0). El nivel de activación es `LOW` porque los botones son activos en bajo con resistencias pull-up por hardware.
5. **Habilita el pull-up del RTC**: los pull-up GPIO normales se deshabilitan durante el deep sleep. `rtc_gpio_pullup_en()` usa el pull-up del dominio RTC para mantener la línea del botón en HIGH mientras está dormido.
6. **Entra en deep sleep**: `esp_deep_sleep_start()` apaga todo excepto el dominio RTC. La corriente cae a **~14 µA**.
7. **Al pulsar el botón**: el dominio RTC detecta el flanco descendente en el GPIO, el chip se reinicia y `setup()` se ejecuta de nuevo desde el paso 1.

:::tip Cómo verificar que el deep sleep está funcionando
`loop()` contiene una instrucción de impresión que **nunca** debería ejecutarse. Si ves `[ERROR] deep sleep did not start!` en el monitor serie, el deep sleep falló. Silencio después de `[SLEEP]` significa que el dispositivo está realmente dormido.
:::

### Selección del pin de activación por botón

El botón de activación difiere entre modelos debido a la distribución de los GPIO:

| Modelo | Pin de activación | `PIN_WAKE_BTN` | Notas |
|---|---|---|---|
| **E1001 / E1002 / E1003** | GPIO3 (KEY0) | `3` | Botón derecho (Botón Verde en E1001/E1002) |
| **E1004** | GPIO4 (KEY0) | `4` | Botón de dirección derecha (panel frontal) |

Descomenta la línea correcta en la sección USER CONFIGURATION antes de flashear.

### Salida esperada

Primer arranque (encendido):

```
========================================
  LowPower_DeepSleep — reTerminal E
========================================
[WAKE] Boot #1 — wakeup: power-on / manual reset
[WAKE] Entering deep sleep in 5 seconds...
[WAKE] Press GPIO3 button to wake up.
[SLEEP] Entering deep sleep now.
```

Después de pulsar KEY0 para despertar:

```
========================================
  LowPower_DeepSleep — reTerminal E
========================================
[WAKE] Boot #2 — wakeup: GPIO button (EXT1)
[WAKE] Entering deep sleep in 5 seconds...
[WAKE] Press GPIO3 button to wake up.
[SLEEP] Entering deep sleep now.
```

<!-- TODO: Insert serial monitor screenshot here -->

### Patrón Despertar → Trabajar → Dormir

Un patrón común para aplicaciones de ePaper es:

1. **Despertar** desde deep sleep (temporizador o botón).
2. **Leer el RTC** para poner marcas de tiempo.
3. **Leer sensores** (SHT4x, batería, etc.).
4. **Conectarse a Wi-Fi** y obtener datos, si es necesario.
5. **Actualizar la pantalla ePaper** con la nueva información.
6. **Volver a deep sleep** hasta el siguiente despertar programado.

Para añadir un **despertar por temporizador** además del despertar por botón, simplemente añade:

```cpp
esp_sleep_enable_timer_wakeup(30 * 60 * 1000000ULL);  // 30 minutes
```

antes de llamar a `esp_deep_sleep_start()`. Ambas fuentes de activación pueden estar activas simultáneamente: la primera que se dispare gana.

## Micrófono (E1001 / E1002 / E1003)

:::caution E1004 no tiene micrófono
El reTerminal **E1004** no incluye un micrófono integrado. Los ejemplos de esta sección se aplican solo a **E1001, E1002 y E1003**. Si estás usando un E1004, sáltate esta sección.
:::

Los reTerminal E1001 / E1002 / E1003 incluyen un micrófono digital integrado **PDM (Pulse Density Modulation)**. Los micrófonos PDM generan un flujo sigma-delta de 1 bit que es decodificado por el periférico PDM integrado del ESP32-S3; no se necesita ningún chip códec externo.

### Descripción general del hardware

<div class="table-center">
  <table align="center">
    <tr>
      <th>Señal</th>
      <th>Pin GPIO</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>PDM_CLK</td>
      <td>GPIO42</td>
      <td>Salida de reloj hacia el micrófono</td>
    </tr>
    <tr>
      <td>PDM_DATA</td>
      <td>GPIO41</td>
      <td>Entrada de datos de 1 bit desde el micrófono</td>
    </tr>
    <tr>
      <td>MIC_PWR_EN</td>
      <td>GPIO38</td>
      <td>Habilitación de alimentación del micrófono (activo en HIGH): debe ponerse en HIGH antes de usar</td>
    </tr>
  </table>
</div>

Los pines son los mismos en E1001, E1002 y E1003. El pin de habilitación de alimentación del micrófono (`GPIO38`) controla un interruptor de carga (TPS22916CYFPR); **debes** ponerlo en HIGH antes de grabar y puedes ponerlo en LOW después para ahorrar energía.

:::note Se requiere Arduino ESP32 ≥ 3.0
El sketch utiliza la API ESP-IDF 5.x PDM-RX (`driver/i2s_pdm.h`), que solo está disponible en la versión 3.0 o superior del core Arduino ESP32. Asegúrate de que el paquete de tu placa esté actualizado.
:::

### Sketch completo: MicRecordToSD

El sketch completo está disponible en el repositorio: [`examples/MicRecordToSD/MicRecordToSD.ino`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/blob/main/examples/MicRecordToSD/MicRecordToSD.ino).

<details>
<summary>Haz clic para desplegar el código completo de MicRecordToSD.ino</summary>

```cpp
// ============================================================
// USER CONFIGURATION
// ============================================================

// Uncomment ONE line to select your hardware model:
// #define DEVICE_E1001_E1002   // reTerminal E1001 or E1002
#define DEVICE_E1003      // reTerminal E1003

// Recording parameters
#define SAMPLE_RATE      16000U  // Sample rate in Hz (8000 / 16000 / 44100)
#define MAX_RECORD_SECS  30      // Auto-stop after this many seconds (0 = unlimited)
#define RECORD_DIR       "/REC"  // Directory on the SD card root

// ============================================================
// END OF USER CONFIGURATION — no need to edit below this line
// ============================================================

#include <SD.h>
#include <SPI.h>
#include <driver/i2s_pdm.h>    // ESP-IDF 5.x PDM-RX API (Arduino ESP32 >= 3.0)
#include <driver/i2s_common.h>

// ---------- Serial debug ---------
#define PIN_SERIAL_RX   44
#define PIN_SERIAL_TX   43
#define LOG             Serial1

// ---------- PDM Microphone -------
// Same on E1001, E1002, and E1003.
#define PIN_MIC_CLK     42   // GPIO42 — PDM_CLK  (R109 in schematic)
#define PIN_MIC_DATA    41   // GPIO41 — PDM_DATA (R110 in schematic)
#define PIN_MIC_PWR_EN  38   // GPIO38 — MIC power enable (TPS22916CYFPR EN, ESP_IO3B)

// ---------- SD Card --------------
// SPI bus is shared with the ePaper display; a separate CS keeps them independent.
#define PIN_SD_DET       15  // Card detect (LOW = card present)
#define PIN_SD_CS        14  // SPI Chip Select
#define PIN_SD_MISO       8
#define PIN_SD_MOSI       9
#define PIN_SD_SCK        7

// ---------- User Button ----------
#define PIN_BTN_KEY0      3  // KEY0 — active LOW (hardware pull-up)

// ---------- Model-specific pins --
#if defined(DEVICE_E1001_E1002)
  #define PIN_SD_EN    16    // GPIO16 — SD card power enable
  #define PIN_LED       6    // GPIO6  — onboard LED (inverted: LOW = ON)
#elif defined(DEVICE_E1003)
  #define PIN_SD_EN    39    // GPIO39 — SD card power enable
  #define PIN_LED      16    // GPIO16 — onboard LED (inverted: LOW = ON)
#else
  #error "Please define DEVICE_E1001_E1002 or DEVICE_E1003 in the USER CONFIGURATION section."
#endif

// ---------- I2S / Audio ----------
#define I2S_PORT          I2S_NUM_0
#define DMA_BUF_COUNT     8     // number of DMA descriptors
#define DMA_BUF_LEN       512   // frames per DMA descriptor
#define BITS_PER_SAMPLE   16
#define AUDIO_CHANNELS    1
#define BYTES_PER_SAMPLE  (BITS_PER_SAMPLE / 8)
#define BYTES_PER_SEC     (SAMPLE_RATE * AUDIO_CHANNELS * BYTES_PER_SAMPLE)

// Single-read chunk: matches one DMA buffer (512 frames × 2 bytes = 1024 bytes)
#define READ_BUF_BYTES    (DMA_BUF_LEN * BYTES_PER_SAMPLE)
static uint8_t s_dmaBuf[READ_BUF_BYTES];

// ============================================================
// WAV file header (44 bytes, little-endian)
// ============================================================
#pragma pack(push, 1)
struct WavHeader {
    // RIFF chunk
    char     riffTag[4];      // "RIFF"
    uint32_t riffSize;        // file size − 8
    char     waveTag[4];      // "WAVE"
    // fmt sub-chunk
    char     fmtTag[4];       // "fmt "
    uint32_t fmtSize;         // 16 for PCM
    uint16_t audioFormat;     // 1 = PCM
    uint16_t numChannels;     // 1 = mono
    uint32_t sampleRate;
    uint32_t byteRate;        // sampleRate × channels × bytesPerSample
    uint16_t blockAlign;      // channels × bytesPerSample
    uint16_t bitsPerSample;
    // data sub-chunk
    char     dataTag[4];      // "data"
    uint32_t dataSize;        // audio payload in bytes
};
#pragma pack(pop)

static_assert(sizeof(WavHeader) == 44, "WavHeader must be 44 bytes");

// ============================================================
// Global state
// ============================================================
static i2s_chan_handle_t s_rxHandle    = nullptr;  // ESP-IDF 5.x channel handle
static SPIClass          s_spiSD(HSPI);
static File        s_wavFile;
static bool        s_recording     = false;
static uint32_t    s_recordedBytes = 0;
static uint32_t    s_fileIndex     = 1;

// Button debounce
static bool          s_lastRawBtn    = HIGH;
static bool          s_stableBtn     = HIGH;
static unsigned long s_debounceMs    = 0;
static const unsigned long DEBOUNCE_DELAY = 50;

// LED blink
static unsigned long s_lastBlinkMs  = 0;
static bool          s_ledState     = false;

// ============================================================
// LED helpers (inverted logic)
// ============================================================
static void ledOn()  { digitalWrite(PIN_LED, LOW);  }
static void ledOff() { digitalWrite(PIN_LED, HIGH); }

// ============================================================
// WAV helpers
// ============================================================
static void writeWavHeader(File& f, uint32_t dataBytes)
{
    WavHeader h;
    memcpy(h.riffTag,  "RIFF", 4);
    h.riffSize     = 36 + dataBytes;
    memcpy(h.waveTag,  "WAVE", 4);
    memcpy(h.fmtTag,   "fmt ", 4);
    h.fmtSize      = 16;
    h.audioFormat  = 1;
    h.numChannels  = AUDIO_CHANNELS;
    h.sampleRate   = SAMPLE_RATE;
    h.byteRate     = BYTES_PER_SEC;
    h.blockAlign   = AUDIO_CHANNELS * BYTES_PER_SAMPLE;
    h.bitsPerSample = BITS_PER_SAMPLE;
    memcpy(h.dataTag,  "data", 4);
    h.dataSize     = dataBytes;
    f.write(reinterpret_cast<const uint8_t*>(&h), sizeof(h));
}

// ============================================================
// SD card helpers
// ============================================================
static bool mountSD()
{
    pinMode(PIN_SD_EN, OUTPUT);
    digitalWrite(PIN_SD_EN, HIGH);
    delay(10);

    s_spiSD.end();
    s_spiSD.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, PIN_SD_CS);

    if (!SD.begin(PIN_SD_CS, s_spiSD)) {
        LOG.println("[SD] Initialization failed — check card and formatting (FAT32).");
        return false;
    }
    LOG.printf("[SD] Mounted. Type: %s  Size: %llu MB\n",
               SD.cardType() == CARD_SDHC ? "SDHC" : "SD",
               SD.cardSize() / (1024ULL * 1024ULL));
    return true;
}

static String nextFilename()
{
    if (!SD.exists(RECORD_DIR)) {
        SD.mkdir(RECORD_DIR);
    }
    char buf[32];
    while (true) {
        snprintf(buf, sizeof(buf), "%s/REC_%04u.WAV", RECORD_DIR, s_fileIndex);
        if (!SD.exists(buf)) break;
        s_fileIndex++;
        if (s_fileIndex > 9999) s_fileIndex = 1;
    }
    return String(buf);
}

// ============================================================
// PDM / I2S helpers  (ESP-IDF 5.x new-API, Arduino ESP32 >= 3.0)
// ============================================================
static bool initMic()
{
    // ── Step 1: power up the microphone via the load switch ──
    LOG.println("[MIC] Powering on microphone...");
    pinMode(PIN_MIC_PWR_EN, OUTPUT);
    digitalWrite(PIN_MIC_PWR_EN, HIGH);
    delay(50);  // give the LDO and PDM decimation filter time to start up

    // ── Step 2: create an I2S RX channel ──
    LOG.println("[MIC] Creating I2S channel...");
    i2s_chan_config_t chanCfg = I2S_CHANNEL_DEFAULT_CONFIG(I2S_NUM_0, I2S_ROLE_MASTER);
    chanCfg.dma_desc_num  = DMA_BUF_COUNT;
    chanCfg.dma_frame_num = DMA_BUF_LEN;
    chanCfg.auto_clear    = true;

    esp_err_t err = i2s_new_channel(&chanCfg, nullptr, &s_rxHandle);
    if (err != ESP_OK) {
        LOG.printf("[MIC] i2s_new_channel failed: 0x%x\n", err);
        return false;
    }

    // ── Step 3: configure PDM-RX mode ──
    LOG.println("[MIC] Configuring PDM-RX mode...");
    i2s_pdm_rx_config_t pdmCfg = {};
    pdmCfg.clk_cfg  = I2S_PDM_RX_CLK_DEFAULT_CONFIG(SAMPLE_RATE);
    pdmCfg.slot_cfg = I2S_PDM_RX_SLOT_DEFAULT_CONFIG(I2S_DATA_BIT_WIDTH_16BIT,
                                                      I2S_SLOT_MODE_MONO);
    pdmCfg.gpio_cfg.clk             = static_cast<gpio_num_t>(PIN_MIC_CLK);
    pdmCfg.gpio_cfg.din             = static_cast<gpio_num_t>(PIN_MIC_DATA);
    pdmCfg.gpio_cfg.invert_flags.clk_inv = false;

    err = i2s_channel_init_pdm_rx_mode(s_rxHandle, &pdmCfg);
    if (err != ESP_OK) {
        LOG.printf("[MIC] i2s_channel_init_pdm_rx_mode failed: 0x%x\n", err);
        i2s_del_channel(s_rxHandle);
        s_rxHandle = nullptr;
        return false;
    }

    // ── Step 4: enable (starts the clock and DMA) ──
    LOG.println("[MIC] Enabling channel...");
    err = i2s_channel_enable(s_rxHandle);
    if (err != ESP_OK) {
        LOG.printf("[MIC] i2s_channel_enable failed: 0x%x\n", err);
        i2s_del_channel(s_rxHandle);
        s_rxHandle = nullptr;
        return false;
    }

    // ── Step 5: warm-up — discard a few DMA buffers with a finite timeout ──
    // The PDM decimation filter needs several milliseconds to settle.
    // Using a 500 ms timeout instead of portMAX_DELAY prevents hanging if
    // the hardware is not producing data for any reason.
    LOG.println("[MIC] Warming up PDM filter...");
    size_t dummy;
    for (int i = 0; i < 3; i++) {
        i2s_channel_read(s_rxHandle, s_dmaBuf, sizeof(s_dmaBuf),
                         &dummy, pdMS_TO_TICKS(500));
    }

    LOG.printf("[MIC] PDM initialized. Rate=%u Hz  Bits=%d  CLK=GPIO%d  DATA=GPIO%d\n",
               SAMPLE_RATE, BITS_PER_SAMPLE, PIN_MIC_CLK, PIN_MIC_DATA);
    return true;
}

// ============================================================
// Recording control
// ============================================================
static bool startRecording()
{
    String fname = nextFilename();
    s_wavFile = SD.open(fname, FILE_WRITE);
    if (!s_wavFile) {
        LOG.printf("[REC] Cannot create file: %s\n", fname.c_str());
        return false;
    }
    writeWavHeader(s_wavFile, 0);   // placeholder — filled in when recording stops
    s_recordedBytes = 0;
    s_recording     = true;
    ledOn();
    LOG.printf("[REC] Recording started → %s\n", fname.c_str());
    return true;
}

static void stopRecording()
{
    s_recording = false;
    ledOff();

    // Seek back to the beginning and rewrite the header with the real data size.
    s_wavFile.seek(0);
    writeWavHeader(s_wavFile, s_recordedBytes);
    s_wavFile.close();

    float seconds = static_cast<float>(s_recordedBytes) / BYTES_PER_SEC;
    LOG.printf("[REC] Recording stopped. %u bytes saved (%.1f s).\n",
               s_recordedBytes, seconds);
    s_fileIndex++;
}

// ============================================================
// setup()
// ============================================================
void setup()
{
    LOG.begin(115200, SERIAL_8N1, PIN_SERIAL_RX, PIN_SERIAL_TX);
    delay(500);   // brief pause for the serial bridge to enumerate

    LOG.println("=========================================");
    LOG.println("  MicRecordToSD — reTerminal E Series");
#if defined(DEVICE_E1001_E1002)
    LOG.println("  Device: E1001 / E1002");
#else
    LOG.println("  Device: E1003");
#endif
    LOG.println("=========================================");

    // LED
    pinMode(PIN_LED, OUTPUT);
    ledOff();

    // Startup blink to confirm power-on
    for (int i = 0; i < 3; i++) {
        ledOn();  delay(100);
        ledOff(); delay(100);
    }

    // User button (hardware pull-up, active LOW)
    pinMode(PIN_BTN_KEY0, INPUT);

    // SD card
    LOG.println("[SD] Mounting...");
    if (!mountSD()) {
        LOG.println("[SD] FATAL: could not mount SD card. Halting.");
        while (true) { delay(1000); }
    }

    // PDM microphone
    LOG.println("[MIC] Initializing PDM microphone...");
    if (!initMic()) {
        LOG.println("[MIC] FATAL: microphone init failed. Halting.");
        while (true) { delay(1000); }
    }

    LOG.println();
    LOG.printf("[READY] Press KEY0 to start recording (max %d s).\n", MAX_RECORD_SECS);
    LOG.printf("[READY] Files will be saved to %s/REC_XXXX.WAV\n", RECORD_DIR);
}

// ============================================================
// loop()
// ============================================================
void loop()
{
    // -------------------------------------------------------
    // Debounced button handling
    // -------------------------------------------------------
    const bool rawBtn = digitalRead(PIN_BTN_KEY0);
    if (rawBtn != s_lastRawBtn) {
        s_debounceMs = millis();
        s_lastRawBtn = rawBtn;
    }
    if ((millis() - s_debounceMs) > DEBOUNCE_DELAY && rawBtn != s_stableBtn) {
        s_stableBtn = rawBtn;
        if (s_stableBtn == LOW) {   // falling edge = button pressed
            if (!s_recording) {
                startRecording();
            } else {
                stopRecording();
            }
        }
    }

    // -------------------------------------------------------
    // Audio capture (only while recording)
    // -------------------------------------------------------
    if (s_recording) {
        size_t bytesRead = 0;
        // Use a 200 ms timeout so the button check in the next loop iteration
        // is still reached even if the DMA is unexpectedly slow.
        const esp_err_t err = i2s_channel_read(s_rxHandle, s_dmaBuf, sizeof(s_dmaBuf),
                                               &bytesRead, pdMS_TO_TICKS(200));
        if (err == ESP_OK && bytesRead > 0) {
            s_wavFile.write(s_dmaBuf, bytesRead);
            s_recordedBytes += bytesRead;
        } else if (err != ESP_OK && err != ESP_ERR_TIMEOUT) {
            LOG.printf("[REC] i2s_channel_read error: 0x%x — stopping.\n", err);
            stopRecording();
            return;
        }

        // Auto-stop when MAX_RECORD_SECS is reached
        if (MAX_RECORD_SECS > 0 && s_recordedBytes >= static_cast<uint32_t>(BYTES_PER_SEC) * MAX_RECORD_SECS) {
            LOG.println("[REC] Maximum duration reached — stopping automatically.");
            stopRecording();
            return;
        }

        // LED blink at 500 ms period while recording
        const unsigned long now = millis();
        if (now - s_lastBlinkMs >= 500) {
            s_lastBlinkMs = now;
            s_ledState    = !s_ledState;
            if (s_ledState) ledOn(); else ledOff();
        }
    }
}
```

</details>

### Cómo funciona el código

**Secuencia de inicialización (`setup()`):**

1. **Parpadeo de arranque**: el LED integrado parpadea 3 veces para confirmar el encendido.
2. **Montar la tarjeta SD**: enciende la ranura SD mediante `PIN_SD_EN`, inicializa el bus HSPI y llama a `SD.begin()`.
3. **Inicializar el micrófono PDM**: este es un proceso de 4 pasos:
   - **Encender** el micrófono mediante `PIN_MIC_PWR_EN` (GPIO38): activa el interruptor de carga TPS22916 en nivel HIGH.
   - **Crear un canal I2S** usando `i2s_new_channel()`.
   - **Configurar el modo PDM-RX** con `i2s_channel_init_pdm_rx_mode()` — establece la frecuencia de muestreo, la profundidad de bits (16 bits), el modo mono y los pines GPIO.
   - **Habilitar y calentar** — `i2s_channel_enable()` inicia el reloj, luego se leen y descartan 3 búferes DMA para permitir que el filtro de decimación sigma-delta se estabilice.

**Bucle de grabación (`loop()`):**

1. **Antirrebote del botón**: lee KEY0 con una ventana de antirrebote de 50 ms. En flanco descendente (pulsado):
   - Si no está grabando → **inicia** la grabación (crea el archivo WAV, escribe una cabecera provisional).
   - Si está grabando → **detiene** la grabación (reescribe la cabecera con el tamaño real, cierra el archivo).
2. **Captura de audio** — `i2s_channel_read()` lee un búfer DMA (512 muestras = 1024 bytes) a la vez con un tiempo de espera de 200 ms. Los datos se escriben directamente en la tarjeta SD.
3. **Parada automática** — si se alcanza `MAX_RECORD_SECS`, la grabación se detiene automáticamente.
4. **Parpadeo del LED** — el LED parpadea a intervalos de 500 ms mientras la grabación está activa.

### Configuración específica del modelo

El sketch requiere que descomentes **una** `#define` en la sección USER CONFIGURATION:

| Modelo | `#define` | Pin SD_EN | Pin LED |
|---|---|---|---|
| E1001 / E1002 | `DEVICE_E1001_E1002` | GPIO16 | GPIO6 |
| E1003 | `DEVICE_E1003` | GPIO39 | GPIO16 |

### Preparar la tarjeta SD

Para obtener instrucciones sobre cómo insertar y formatear la tarjeta microSD, consulta la sección **[Using the MicroSD Card](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals#using-the-microsd-card)** en el primer libro de recetas de periféricos.

:::note
La reTerminal Serie E es compatible con tarjetas microSD de hasta **64 GB**, formateadas como **FAT32**.
:::

:::tip E1004 se envía con una tarjeta SD preinstalada
La reTerminal **E1004** viene con una tarjeta microSD ya insertada. No necesitas comprar ni instalar una por separado. Para otros modelos (E1001 / E1002 / E1003), debes insertar una tarjeta tú mismo.
:::

Preparación rápida:

1. Formatea la tarjeta microSD como **FAT32** (omite este paso para la E1004 si usas la tarjeta preinstalada).
2. El sketch creará automáticamente un directorio `/REC` en la primera grabación.
3. Asegúrate de que la tarjeta esté insertada antes de encender.

### Salida esperada

```
=========================================
  MicRecordToSD — reTerminal E Series
=========================================
[SD] Mounting...
[SD] Mounted. Size: 31918 MB
[MIC] Powering on microphone...
[MIC] Creating I2S channel...
[MIC] Configuring PDM-RX mode...
[MIC] Enabling channel...
[MIC] Warming up PDM filter...
[MIC] PDM ready. Rate=16000  CLK=GPIO42  DATA=GPIO41
[READY] Press KEY0 to record (max 30 s).
[READY] Files saved to /REC/REC_XXXX.WAV

[REC] Started → /REC/REC_0001.WAV
[REC] Stopped. 320000 bytes (10.0 s).
```

<!-- TODO: Insert serial monitor screenshot here -->
<!-- TODO: Insert photo of SD card with WAV files on PC -->

## Solución de problemas

### P1: La salida serie sigue siendo visible en deep sleep, ¿significa eso que el sketch de bajo consumo no funciona?

Esto es normal y **no** significa que el deep sleep haya fallado.

La salida serie que ves es manejada por el **chip puente USB-UART de la placa portadora** (no por el propio ESP32-S3). El chip puente se alimenta directamente desde la conexión USB, por lo que permanece activo independientemente de si el ESP32-S3 está despierto o dormido. En realidad, esto es una decisión de diseño deliberada: garantiza que siempre puedas ver la salida serie y cargar nuevo firmware incluso si el dispositivo entra en un ciclo rápido de deep sleep.

Para confirmar que el deep sleep está realmente activo, revisa el registro serie:

- Si ves `[SLEEP] Entering deep sleep now.` seguido de silencio, el dispositivo **está** en deep sleep.
- Si ves `[ERROR] deep sleep did not start!`, entonces algo salió mal.

### P2: ¿Cómo uso correctamente el sketch del RTC para diferentes escenarios?

<Tabs>
<TabItem value="scenario1" label="Primer arranque" default>

**Escenario:** Placa completamente nueva o acabas de reemplazar la batería CR1220.

No necesitas cambiar nada: simplemente sube el sketch tal como está.

En una placa completamente nueva, el flag interno VL (Voltage Low) del PCF8563 siempre es `1` porque la batería nunca ha alimentado el reloj. El sketch lee VL=1 al inicio y escribe automáticamente la marca de tiempo de compilación en el RTC.

Confirma que tu USER CONFIGURATION se ve así:

```cpp
#define USE_COMPILE_TIME     // ← enabled ✓
// #define FORCE_SET_TIME   // ← keep commented ✓
```

→ Haz clic en **Upload** → Listo.

</TabItem>
<TabItem value="scenario2" label="Reinicio / Reconexión de energía">

**Escenario:** La placa ya estaba funcionando y luego se reinició o se desconectó y reconectó la alimentación.

No necesitas hacer nada: simplemente enciende.

La batería CR1220 mantiene el PCF8563 en marcha mientras la alimentación principal está apagada. Al inicio, el sketch lee VL=0 (batería en buen estado) y omite la escritura, preservando la hora almacenada. La salida serie mostrará la hora correcta inmediatamente.

</TabItem>
<TabItem value="scenario3" label="Recalibrar">

**Escenario:** La hora del RTC es incorrecta y necesita ser recalibrada.

**Paso 1 — Forzar sobrescritura.** Descomenta `FORCE_SET_TIME`, luego sube:

```cpp
#define USE_COMPILE_TIME
#define FORCE_SET_TIME      // ← uncomment this line
```

→ Haz clic en **Upload** → La hora ahora se fuerza a la marca de tiempo de compilación.

**Paso 2 — Desactivar la sobrescritura forzada.** Inmediatamente vuelve a comentarla y sube de nuevo:

```cpp
#define USE_COMPILE_TIME
// #define FORCE_SET_TIME   // ← comment it back out
```

→ Haz clic en **Upload** → A partir de ahora, cada reinicio preserva la hora almacenada.

</TabItem>
</Tabs>


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
