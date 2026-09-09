---
description: La ReSpeaker XVF3800 USB 4-Mic Array es una matriz de micrófonos circular profesional con AEC, formación de haz, supresión de ruido y captura de voz de 360°. Combinada con la XIAO ESP32S3, permite un control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre una integración perfecta y flexibilidad de doble modo.
title: Uso de comandos I2C para controlar la reSpeaker XVF3800 USB Mic Array con XIAO ESP32S3
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_i2c_list
sku: 114993702,114993700
last_update:
  date: 8/24/2026
  author: Kunpeng Wang
createdAt: '2026-08-21'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/es/respeaker_xvf_3800_i2c_list/
---

## Introducción 

Esta sección proporciona la lista de comandos de control I2C para la ReSpeaker XVF3800, junto con ejemplos de lectura/escritura I2C y diagramas de la ruta de señal de hardware para los dos modos de funcionamiento. Para un ejemplo de aplicación de control de la ReSpeaker XVF3800 a través de la interfaz I2C, consulta la sección [Device Control](/es/respeaker_xvf3800_xiao_rgb).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>


## Diagrama de la ruta de señal de hardware de reSpeaker

### Ruta de señal en modo I2S

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/Signal Path-I2S.png" alt="pir" width={800} height="auto" /></p>

#### Ruta de grabación
Los micrófonos capturan datos en bruto, que son procesados por los módulos de algoritmo. Los datos procesados son luego leídos por el controlador host a través de la interfaz I2S.

#### Ruta de reproducción
En modo I2S, la ruta de reproducción de audio se divide en dos recorridos: Host → XVF3800 → DAC y Host → DAC.

##### 1. Host → XVF3800 → DAC

El controlador host envía datos de audio al XVF3800 a través de la interfaz I2S. Los datos son procesados por el bloque Optional Far DSP y luego se vuelven a transmitir al DAC para la reproducción a través del bus I2S.

:::note
Para un ejemplo de aplicación de reproducción a través de esta ruta, consulta la sección [reSpeaker XVF3800 Record and Playback Audio Using I2S](/es/respeaker_xvf3800_xiao_record_playback).
:::

##### 2. Host → DAC

El host envía datos de audio directamente al DAC para la reproducción a través de la interfaz I2S, omitiendo el XVF3800.

:::note
Para un ejemplo de aplicación de reproducción a través de esta ruta, consulta la sección [reSpeaker XVF3800 Audio Playback and Volume Control via I2C](/es/respeaker_xvf3800_xiao_volume).
:::

#### Ruta de control
La ruta de control, al igual que la ruta de reproducción, se divide en dos recorridos:

##### 1. Host → XVF3800 → DAC

- **Comunicación Host ↔ XVF3800:** El host actúa como I2C Master y el XVF3800 actúa como I2C Slave. El host usa I2C para configurar el Optional Far DSP, Optional PP, GPIO y otros bloques del XVF3800.
- **Comunicación XVF3800 ↔ DAC:** El XVF3800 actúa como I2C Master y el DAC actúa como I2C Slave. El XVF3800 controla la reproducción del DAC mediante I2C.

##### 2. Host → DAC

El host se comunica directamente con el DAC. El host usa I2C para controlar directamente el DAC para la reproducción de audio y el control de volumen.

### Ruta de señal en modo USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/Signal Path-USB.png" alt="pir" width={800} height="auto" /></p>

En modo USB, solo hay una ruta de datos: Host → XVF3800 → DAC, que se divide en dos segmentos: Host → XVF3800 y XVF3800 → DAC.

- **Host ↔ XVF3800:** La comunicación es vía USB. Tanto los datos de audio (los datos en bruto capturados por los micrófonos, que son procesados por los módulos de algoritmo) como los datos de control (para configurar el Optional Far DSP, Optional PP, GPIO y otros bloques del XVF3800) se transmiten por USB.

- **XVF3800 ↔ DAC:** La comunicación es vía I2C e I2S. El XVF3800 actúa como I2C Master e I2S Master para controlar el DAC para la reproducción de audio.

:::note
Para un ejemplo de aplicación de reproducción a través de esta ruta, consulta la sección [reSpeaker XVF3800 Control with Python](/es/respeaker_xvf3800_python_sdk).
:::

## Formato de trama I2C

### Operación de escritura

```
[resid] [cmd] [write_byte_num] [data...]
```

| Field | Description |
|-------|-------------|
| `resid` | Resource ID |
| `cmd` | Command ID |
| `write_byte_num` | Number of data bytes to write |
| `data...` | Data bytes to be written |

### Operación de lectura (primero escribir comando, luego leer respuesta):

```
Step 1 (Write): [resid] [cmd | 0x80] [read_len + 1]
Step 2 (Read):  [status] [data...]
```

| Field | Description |
|-------|-------------|
| `cmd\|0x80` | Command ID con el bit más significativo establecido en 1, indicando una operación de lectura |
| `read_len + 1` | Número esperado de bytes a leer (+1 para el byte de estado) |
| `status` | Byte de estado de la respuesta (`0` = éxito, `64` = reintentar) |
| `data...` | Bytes de datos devueltos |

:::note
Para la lista detallada de comandos I2C, consulta la sección [I2C Command List](#i2c-command-list).
:::

## Ejemplo de lectura y escritura con Arduino
```cpp
#define XMOS_ADDR 0x2C  // XVF3800 I2C 7-bit Address
```
### Escritura

```cpp
void xmos_write_bytes(uint8_t resid, uint8_t cmd, uint8_t *value, uint8_t write_byte_num) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(write_byte_num);
  for (uint8_t i = 0; i < write_byte_num; i++) {
    Wire.write(value[i]);
  }
  Wire.endTransmission();
}
```

### Lectura

```cpp
bool xmos_read_bytes(uint8_t resid, uint8_t cmd, uint8_t *buffer, uint8_t read_len, uint8_t *status) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd | 0x80);
  Wire.write(read_len + 1);  // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // First byte is status (0 = success, 64 = retry)
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}
```

### Ejemplo de lectura de la versión del firmware

```cpp
#include <Wire.h>

#define XMOS_ADDR 0x2C  // XVF3800 I2C 7-bit Address

#define APPLICATION_SERVICER_RESID 48  // ResID = 48 (Application Servicer)
#define VERSION_CMD              0     // CmdID = 0 (VERSION)
#define VERSION_NUM_BYTES        3     // 3 bytes: MAJOR, MINOR, PATCH

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 Firmware Version Read Test Starting...");
}

void loop() {
  uint8_t version[VERSION_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  // Read 3 bytes: [MAJOR] [MINOR] [PATCH]
  bool success = xmos_read_bytes(APPLICATION_SERVICER_RESID, VERSION_CMD,
                                 version, VERSION_NUM_BYTES, &status);

  if (success && status == 0) {
    Serial.print("Firmware Version: v");
    Serial.print(version[0]);  // MAJOR
    Serial.print(".");
    Serial.print(version[1]);  // MINOR
    Serial.print(".");
    Serial.println(version[2]);  // PATCH
    Serial.print("  (Status byte: 0x");
    Serial.print(status, HEX);
    Serial.println(")");
  } else {
    Serial.print("Read failed. Status byte: 0x");
    Serial.println(status, HEX);
  }

  delay(2000);
}

bool xmos_read_bytes(uint8_t resid, uint8_t cmd, uint8_t *buffer, uint8_t read_len, uint8_t *status) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd | 0x80);        
  Wire.write(read_len + 1);      // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // First byte is status (0 = success, 64 = retry)
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

```

**Salida esperada**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/read-version.png" alt="pir" width={800} height="auto" /></p>

:::note
Para un ejemplo de aplicación de control de la ReSpeaker XVF3800 a través de la interfaz I2C, consulta la sección [Device Control](/es/respeaker_xvf3800_xiao_rgb).
:::

## Lista de comandos I2C

### Lista de ResID

| Servicer Name | ResID | Hex | Description |
|---------------|------|------|-------------|
| PP Servicer (Post-Processing) | 17 | 0x11 | AGC, limitador, supresión de ruido, supresión de eco |
| GPO Servicer (GPIO/LED/DOA) | 20 | 0x14 | Lectura/escritura GPO, efecto/color/velocidad/brillo de LED, DOA |
| AEC Servicer (Acoustic Echo Cancellation) | 33 | 0x21 | Filtro AEC, haz, acimut, RT60 |
| Audio Manager | 35 | 0x23 | Ganancia, I2S, selección de canal, enrutamiento de salida |
| Application Servicer (System) | 48 | 0x30 | Versión, reinicio, guardado de configuración, profundidad de bits USB |

### Lista de CmdID

#### ResID = 48 — Application Servicer (System Control)

| Name | CmdID | Direction | Data Type | Values | Bytes | Description |
|------|-------|-----------|-----------|--------|-------|-------------|
| VERSION | 0 | ro | uint8 | 3 | 3 | Versión de firmware (MAJOR, MINOR, PATCH) |
| BLD_MSG | 1 | ro | char | 50 | 50 | Mensaje de compilación (nombre de la configuración de compilación) |
| BLD_HOST | 2 | ro | char | 30 | 30 | Información del host de compilación CI |
| BLD_REPO_HASH | 3 | ro | char | 40 | 40 | Hash de GIT |
| BLD_MODIFIED | 4 | ro | char | 6 | 6 | Indica si el firmware fue modificado |
| BOOT_STATUS | 5 | ro | char | 3 | 3 | Modo de arranque (SPI/JTAG/FLASH) |
| TEST_CORE_BURN | 6 | rw | uint8 | 1 | 1 | Prueba de estrés del núcleo (reinicia el chip) |
| REBOOT | 7 | wo | uint8 | 1 | 1 | Reiniciar chip, restaurar parámetros predeterminados |
| USB_BIT_DEPTH | 8 | rw | uint8 | 2 | 2 | Profundidad de bits USB (16/24/32), solo en modo USB |
| SAVE_CONFIGURATION | 9 | wo | uint8 | 1 | 1 | Guardar configuración actual en la flash |
| CLEAR_CONFIGURATION | 10 | wo | uint8 | 1 | 1 | Borrar configuración, restaurar valores predeterminados |
| AIC3104_HP_LEVEL | 11 | rw | uint8 | 1 | 1 | Nivel de salida de auriculares [0..9] |
| AIC3104_LINEOUT_LEVEL | 12 | rw | uint8 | 1 | 1 | Nivel de salida de línea [0..9] |

---

#### ResID = 20 — GPO Servicer (GPIO and LED Control)

| Name | CmdID | Direction | Data Type | Values | Bytes | Description |
|------|-------|-----------|-----------|--------|-------|-------------|
| GPO_READ_VALUES | 0 | ro | uint8 | 5 | 5 | Leer todos los niveles de los pines GPO |
| GPO_WRITE_VALUE | 1 | wo | uint8 | 2 | 2 | Establecer el nivel del pin GPO especificado |
| GPO_PORT_PIN_INDEX | 2 | rw | uint32 | 2 | 8 | Índice de puerto/pin GPO |
| GPO_PIN_VAL | 3 | wo | uint8 | 3 | 3 | Escribir el valor del pin de puerto especificado |
| GPO_PIN_ACTIVE_LEVEL | 4 | rw | uint32 | 1 | 4 | Nivel activo (1=alto, 0=bajo) |
| LED_EFFECT | 12 | rw | uint8 | 1 | 1 | Efecto LED (0=off 1=breathing 2=rainbow 3=solid 4=DOA 5=ring) |
| LED_BRIGHTNESS | 13 | rw | uint8 | 1 | 1 | Brillo del LED |
| LED_GAMMIFY | 14 | rw | uint8 | 1 | 1 | Corrección gamma (0=off 1=on) |
| LED_SPEED | 15 | rw | uint8 | 1 | 1 | Velocidad del LED |
| LED_COLOR | 16 | rw | uint32 | 1 | 4 | Color del LED (RGB) |
| LED_DOA_COLOR | 17 | rw | uint32 | 2 | 8 | Color en modo DOA (color base + color DOA) |
| DOA_VALUE | 18 | ro | uint16 | 2 | 4 | Ángulo DOA (0-359) + indicador de detección de voz |
| LED_RING_COLOR | 19 | rw | uint32 | 12 | 48 | Color por LED en modo anillo |

---

#### ResID = 33 — Servicer AEC (Cancelación de Eco Acústico)

| Nombre | CmdID | Dirección | Tipo de dato | Valores | Bytes | Descripción |
|------|-------|-----------|-----------|--------|-------|-------------|
| AEC_AECPATHCHANGE | 0 | ro | int32 | 1 | 4 | Detección de cambio de ruta AEC (0,1) |
| AEC_HPFONOFF | 1 | rw | int32 | 1 | 4 | Filtro pasa-altos (0=apagado 1=70Hz 2=125Hz 3=150Hz 4=180Hz) |
| AEC_AECSILENCELEVEL | 2 | rw | float | 2 | 8 | Umbral de silencio [0.0..1.0] |
| AEC_AECCONVERGED | 3 | ro | int32 | 1 | 4 | AEC convergido (0,1) |
| AEC_AECEMPHASISONOFF | 4 | rw | int32 | 1 | 4 | Pre/de-énfasis (0=apagado 1=encendido 2=on_eq) |
| AEC_FAR_EXTGAIN | 5 | rw | float | 1 | 4 | Ganancia externa de extremo lejano (dB) |
| AEC_PCD_COUPLINGI | 6 | rw | float | 1 | 4 | Sensibilidad PCD [0.0..1.0] |
| AEC_PCD_MINTHR | 7 | rw | float | 1 | 4 | Umbral mínimo PCD [0.0..0.02] |
| AEC_PCD_MAXTHR | 8 | rw | float | 1 | 4 | Umbral máximo PCD [0.025..0.2] |
| AEC_RT60 | 9 | ro | float | 1 | 4 | Estimación de reverberación RT60 [0.250..0.900] s |
| AEC_ASROUTONOFF | 35 | rw | int32 | 1 | 4 | Conmutador de salida ASR (0=residual 1=procesado por ASR) |
| AEC_ASROUTGAIN | 36 | rw | float | 1 | 4 | Ganancia de salida ASR [0.0..1000.0] |
| AEC_FIXEDBEAMSONOFF | 37 | rw | int32 | 1 | 4 | Conmutador de modo de haz fijo (0,1) |
| AEC_FIXEDBEAMNOISETHR | 38 | rw | float | 2 | 8 | Umbral de ruido de haz fijo [0.0..1.0] |
| SHF_BYPASS | 70 | rw | uint8 | 1 | 1 | Bypass de AEC |
| AEC_NUM_MICS | 71 | ro | int32 | 1 | 4 | Número de micrófonos |
| AEC_NUM_FARENDS | 72 | ro | int32 | 1 | 4 | Número de referencias de extremo lejano |
| AEC_MIC_ARRAY_TYPE | 73 | ro | int32 | 1 | 4 | Tipo de matriz de micrófonos (1=lineal 2=cuadrada) |
| AEC_MIC_ARRAY_GEO | 74 | ro | float | 12 | 48 | Geometría de la matriz de micrófonos (coordenadas 3D XYZ) |
| AEC_AZIMUTH_VALUES | 75 | ro | radians | 4 | 16 | Acimut (haz1/2/libre/auto) |
| TEST_AEC_DISABLE_CONTROL | 76 | wo | uint32 | 1 | 4 | Desactivar control AEC (solo prueba) |
| AEC_CURRENT_IDLE_TIME | 77 | ro | uint32 | 1 | 4 | Tiempo de inactividad actual (tick de 10ns) |
| AEC_MIN_IDLE_TIME | 78 | ro | uint32 | 1 | 4 | Tiempo mínimo de inactividad (tick de 10ns) |
| AEC_RESET_MIN_IDLE_TIME | 79 | wo | uint32 | 1 | 4 | Restablecer tiempo mínimo de inactividad |
| AEC_SPENERGY_VALUES | 80 | ro | float | 4 | 16 | Energía del habla (haz1/2/libre/auto) |
| AEC_FIXEDBEAMSAZIMUTH_VALUES | 81 | rw | radians | 2 | 8 | Acimut de haz fijo |
| AEC_FIXEDBEAMSELEVATION_VALUES | 82 | rw | radians | 2 | 8 | Elevación de haz fijo |
| AEC_FIXEDBEAMSGATING | 83 | rw | uint8 | 1 | 1 | Conmutador de compuerta de haz fijo |
| SPECIAL_CMD_AEC_FAR_MIC_INDEX | 90 | wo | int32 | 2 | 8 | Índice de lectura del filtro AEC (comando de disparo) |
| SPECIAL_CMD_AEC_FILTER_COEFF_START_OFFSET | 91 | rw | int32 | 1 | 4 | Desplazamiento inicial del coeficiente del filtro |
| SPECIAL_CMD_AEC_FILTER_COEFFS | 92 | rw | float | 15 | 60 | Lectura/escritura de coeficientes del filtro AEC |
| SPECIAL_CMD_AEC_FILTER_LENGTH | 93 | ro | int32 | 1 | 4 | Longitud del filtro AEC |
| AEC_FILTER_CMD_ABORT | 94 | wo | int32 | 1 | 4 | Abortar máquina de estados de lectura/escritura de filtro |

---

#### ResID = 35 — Audio Manager (Gestión de Audio)

| Nombre | CmdID | Dirección | Tipo de dato | Valores | Bytes | Descripción |
|------|-------|-----------|-----------|--------|-------|-------------|
| AUDIO_MGR_MIC_GAIN | 0 | rw | float | 1 | 4 | Ganancia de micrófono (antes de SHF) |
| AUDIO_MGR_REF_GAIN | 1 | rw | float | 1 | 4 | Ganancia de referencia (antes de SHF) |
| AUDIO_MGR_CURRENT_IDLE_TIME | 2 | ro | int32 | 1 | 4 | Tiempo de inactividad actual (tick de 10ns) |
| AUDIO_MGR_MIN_IDLE_TIME | 3 | ro | int32 | 1 | 4 | Tiempo mínimo de inactividad (tick de 10ns) |
| AUDIO_MGR_RESET_MIN_IDLE_TIME | 4 | wo | int32 | 1 | 4 | Restablecer tiempo mínimo de inactividad |
| MAX_CONTROL_TIME | 5 | ro | int32 | 1 | 4 | Tiempo máximo de control |
| RESET_MAX_CONTROL_TIME | 6 | wo | int32 | 1 | 4 | Restablecer tiempo máximo de control |
| I2S_CURRENT_IDLE_TIME | 7 | ro | int32 | 1 | 4 | Tiempo de inactividad actual de I2S |
| I2S_MIN_IDLE_TIME | 8 | ro | int32 | 1 | 4 | Tiempo mínimo de inactividad de I2S |
| I2S_RESET_MIN_IDLE_TIME | 9 | wo | int32 | 1 | 4 | Restablecer tiempo de inactividad de I2S |
| I2S_INPUT_PACKED | 10 | rw | uint8 | 1 | 1 | Modo empaquetado de entrada I2S/USB |
| AUDIO_MGR_SELECTED_AZIMUTHS | 11 | ro | radians | 2 | 8 | Acimut de haz seleccionado (procesar DOA + selección automática de DOA) |
| AUDIO_MGR_SELECTED_CHANNELS | 12 | rw | uint8 | 2 | 2 | Canales de salida seleccionados |
| AUDIO_MGR_OP_PACKED | 13 | rw | uint8 | 2 | 2 | Estado empaquetado de salida L/R |
| AUDIO_MGR_OP_UPSAMPLE | 14 | rw | uint8 | 2 | 2 | Estado de sobremuestreo de salida L/R |
| AUDIO_MGR_OP_L | 15 | rw | uint8 | 2 | 2 | Categoría y fuente del canal L (= OP_L_PK0) |
| AUDIO_MGR_OP_L_PK0 | 16 | rw | uint8 | 2 | 2 | Fuente empaquetada 0 del canal L |
| AUDIO_MGR_OP_L_PK1 | 17 | rw | uint8 | 2 | 2 | Fuente empaquetada 1 del canal L |
| AUDIO_MGR_OP_L_PK2 | 18 | rw | uint8 | 2 | 2 | Fuente empaquetada 2 del canal L |
| AUDIO_MGR_OP_R | 19 | rw | uint8 | 2 | 2 | Categoría y fuente del canal R (= OP_R_PK0) |
| AUDIO_MGR_OP_R_PK0 | 20 | rw | uint8 | 2 | 2 | Fuente empaquetada 0 del canal R |
| AUDIO_MGR_OP_R_PK1 | 21 | rw | uint8 | 2 | 2 | Fuente empaquetada 1 del canal R |
| AUDIO_MGR_OP_R_PK2 | 22 | rw | uint8 | 2 | 2 | Fuente empaquetada 2 del canal R |
| AUDIO_MGR_OP_ALL | 23 | rw | uint8 | 12 | 12 | Todos los ajustes de fuentes empaquetadas L/R |
| I2S_INACTIVE | 24 | ro | uint8 | 1 | 1 | I2S activo (0=activo 1=inactivo) |
| AUDIO_MGR_FAR_END_DSP_ENABLE | 25 | rw | uint8 | 1 | 1 | Conmutador DSP de extremo lejano |
| AUDIO_MGR_SYS_DELAY | 26 | rw | int32 | 1 | 4 | Retardo de señal de referencia (muestras) |
| I2S_DAC_DSP_ENABLE | 27 | rw | uint8 | 1 | 1 | Conmutador DSP de extremo lejano del DAC |

---

#### ResID = 17 — Servicer PP (Postprocesamiento: AGC/Ruido/Eco)

| Nombre | CmdID | Dirección | Tipo de dato | Valores | Bytes | Descripción |
|------|-------|-----------|-----------|--------|-------|-------------|
| PP_AGCONOFF | 10 | rw | int32 | 1 | 4 | Conmutador AGC (0,1) |
| PP_AGCMAXGAIN | 11 | rw | float | 1 | 4 | Ganancia máxima de AGC [1.0..1000.0] |
| PP_AGCDESIREDLEVEL | 12 | rw | float | 1 | 4 | Potencia objetivo de AGC [1e-8..1.0] |
| PP_AGCGAIN | 13 | rw | float | 1 | 4 | Ganancia actual de AGC [1.0..1000.0] |
| PP_AGCTIME | 14 | rw | float | 1 | 4 | Constante de tiempo de AGC [0.5..4.0] s |
| PP_AGCFASTTIME | 15 | rw | float | 1 | 4 | Tiempo de decaimiento rápido de AGC [0.05..4.0] s |
| PP_AGCALPHAFASTGAIN | 16 | rw | float | 1 | 4 | Umbral de ganancia de modo rápido [0.0..1000.0] |
| PP_AGCALPHASLOW | 17 | rw | float | 1 | 4 | Parámetro de memoria lenta [0.0..1.0] |
| PP_AGCALPHAFAST | 18 | rw | float | 1 | 4 | Parámetro de memoria rápida [0.0..1.0] |
| PP_LIMITONOFF | 19 | rw | int32 | 1 | 4 | Conmutador de limitador (0,1) |
| PP_LIMITPLIMIT | 20 | rw | float | 1 | 4 | Potencia máxima del limitador [1e-8..1.0] |
| PP_MIN_NS | 21 | rw | float | 1 | 4 | Piso de ganancia de ruido estacionario [0.0..1.0] |
| PP_MIN_NN | 22 | rw | float | 1 | 4 | Piso de ganancia de ruido no estacionario [0.0..1.0] |
| PP_ECHOONOFF | 23 | rw | int32 | 1 | 4 | Conmutador de supresión de eco (0,1) |
| PP_GAMMA_E | 24 | rw | float | 1 | 4 | Factor de sobre-sustracción de eco [0.0..2.0] |
| PP_GAMMA_ETAIL | 25 | rw | float | 1 | 4 | Factor de sobre-sustracción de eco de cola [0.0..2.0] |
| PP_GAMMA_ENL | 26 | rw | float | 1 | 4 | Factor de sobre-sustracción de eco no lineal [0.0..5.0] |
| PP_NLATTENONOFF | 27 | rw | int32 | 1 | 4 | Conmutador de atenuación de eco no lineal (0,1) |
| PP_NLAEC_MODE | 28 | rw | int32 | 1 | 4 | Modo de entrenamiento AEC no lineal (0=normal 1=entrenamiento 2=entrenamiento2) |
| PP_MGSCALE | 29 | rw | float | 3 | 12 | Escala de ganancia mínima (máx,mín,act) |
| PP_FMIN_SPEINDEX | 30 | rw | float | 1 | 4 | Límite de frecuencia de doble conversación [0.0..7999.0] |
| PP_DTSENSITIVE | 31 | rw | int32 | 1 | 4 | Sensibilidad de doble conversación [0..5, 10..15] |
| PP_ATTNS_MODE | 32 | rw | int32 | 1 | 4 | Conmutador de atenuación extra de no voz (0,1) |
| PP_ATTNS_NOMINAL | 33 | rw | float | 1 | 4 | Atenuación nominal del habla [0.0..1.0] |
| PP_ATTNS_SLOPE | 34 | rw | float | 1 | 4 | Pendiente de atenuación [0.0..5.0] |
| PP_CURRENT_IDLE_TIME | 70 | ro | uint32 | 1 | 4 | Tiempo de inactividad actual de PP (tick de 10ns) |
| PP_MIN_IDLE_TIME | 71 | ro | uint32 | 1 | 4 | Tiempo mínimo de inactividad de PP (tick de 10ns) |
| PP_RESET_MIN_IDLE_TIME | 72 | wo | uint32 | 1 | 4 | Restablecer tiempo mínimo de inactividad de PP |
| PP_NL_MODEL_CMD_ABORT | 94 | wo | int32 | 1 | 4 | Abortar máquina de estados de lectura/escritura del modelo NL |
| PP_EQUALIZATION_CMD_ABORT | 100 | wo | int32 | 1 | 4 | Abortar máquina de estados de lectura/escritura del ecualizador |

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



