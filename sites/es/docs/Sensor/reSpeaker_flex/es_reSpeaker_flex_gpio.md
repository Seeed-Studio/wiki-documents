---
description: reSpeaker Flex es un potente sistema de voz modular con XMOS XVF3800, con arrays de 4 micrófonos circulares y lineales intercambiables para una captura de audio precisa de 360° o direccional, perfecto para robótica y dispositivos inteligentes.
title: Controlar reSpeaker Flex mediante GPIO con Xiao ESP32S3
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_gpio_control
sku: 100070894,100026178
last_update:
  date: 06/01/2026
  author: Kasun Thushara
createdAt: '2026-06-01'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/es/respeaker_flex_xiao_gpio_control

---

## Objetivo

Esta guía explica cómo **leer y controlar pines GPIO** en el procesador de voz XVF3800 usando la interfaz I2C. Aprenderás a:

- **Leer los estados de los pines GPI y GPO**
- **Comprender los mapeos de GPIO y su propósito**

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

## Descripción general de GPIO

| Nombre de pin | Dirección   | Función                               |
|:---------|:------------|:---------------------------------------|
| X1D09    | Entrada (RO)  | Estado del botón de arranque / GPI0              |
| X1D13    | Entrada (RO)  | Flotante / GPI1                        |
| X1D34    | Entrada (RO)  | Flotante / GPI2                        |
| X0D11    | Salida (RW) | Flotante / GPO, compartido con SPI MOSI   |
| X0D30    | Salida (RW) | Control de SD/FAULT                       |
| X0D31    | Salida (RW) | Control de PA / amplificador                 |
| X0D32    | Salida (RW) | XMOS GPIO 1                            |
| X0D33    | Salida (RW) | XMOS GPIO 2                            |
| X0D39    | Salida (RW) | Flotante / GPO, compartido con SPI MISO   |


## Leer estados de pines GPO

**Objetivo**: Comprobar los niveles lógicos de todos los **GPIO con capacidad de salida (GPO)**.
**Aspectos destacados del código**:

- Envía una solicitud de lectura usando:
  - ID de recurso: 20 (GPO)
  - ID de comando: 0 (GPO_READ_VALUES)
- Lee los estados de 5 pines GPO en orden: X0D11 → X0D30 → X0D31 → X0D33 → X0D39
- Incluye un byte de estado para validar la respuesta



```c
#include <Wire.h>

#define XMOS_ADDR 0x2C  // I2C 7-bit address

#define GPO_SERVICER_RESID 20
#define GPO_SERVICER_RESID_GPO_READ_VALUES 0
#define GPO_GPO_READ_NUM_BYTES 5

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 GPO Read Test Starting...");
}

void loop() {
  uint8_t gpo_values[GPO_GPO_READ_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  bool success = read_gpo_values(gpo_values, &status);

  if (success) {
    Serial.print("I2C Communication SUCCESS. Status byte: 0x");
    Serial.print(status, HEX);
    Serial.print(" | GPO Output Values: ");
    for (uint8_t i = 0; i < GPO_GPO_READ_NUM_BYTES; i++) {
      Serial.print("0x");
      Serial.print(gpo_values[i], HEX);
      Serial.print(" ");
    }
    Serial.println();
  } else {
    Serial.println("Failed to read GPO values.");
  }

  delay(1000);
}

bool read_gpo_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = GPO_SERVICER_RESID;
  const uint8_t cmd = GPO_SERVICER_RESID_GPO_READ_VALUES | 0x80;
  const uint8_t read_len = GPO_GPO_READ_NUM_BYTES;

  // Step 1: Write command
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len + 1);
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  // Step 2: Read response (status + payload)
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}


```


## Leer estados de pines GPI

**Objetivo**: Comprobar los estados de los **GPIO con capacidad de entrada** (por ejemplo, estado del botón de silencio).
**Aspectos destacados del código**:

- Envía un comando a:
  - ID de recurso: 36 (IO_CONFIG)
  - ID de comando: 6 (GPI_VALUE_ALL)
- Recibe 3 GPI que representan el estado de X1D09, X1D13 y X1D34


```c
#include <Wire.h>

#define XMOS_ADDR 0x2C  // I2C 7-bit address of XVF3800

// Resource and command IDs for GPI
#define IO_CONFIG_SERVICER_RESID 36
#define IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES 0
#define GPI_READ_NUM_BYTES 3   // From header: IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES_NUM_VALUES

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 GPI Read Test Starting...");
}

void loop() {
  uint8_t gpi_values[GPI_READ_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  bool success = read_gpi_values(gpi_values, &status);

  if (success) {
    Serial.print("I2C Communication SUCCESS. Status byte: 0x");
    Serial.print(status, HEX);
    Serial.print(" | GPI Input Values: ");
    for (uint8_t i = 0; i < GPI_READ_NUM_BYTES; i++) {
      Serial.print("0x");
      Serial.print(gpi_values[i], HEX);
      Serial.print(" ");
    }
    Serial.println();
  } else {
    Serial.println("Failed to read GPI values.");
  }

  delay(1000);
}

bool read_gpi_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = IO_CONFIG_SERVICER_RESID;
  const uint8_t cmd = IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES | 0x80;  // Read command
  const uint8_t read_len = GPI_READ_NUM_BYTES;

  // Step 1: Send the command
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len + 1);  // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  // Step 2: Read response (status + payload)
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // first byte is status
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

```
Una vez que pulses el botón de arranque, el estado cambiará.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/gpio_ard.jpg" alt="pir" width={600} height="auto" /></p>

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
