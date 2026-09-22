---
description: Usa el sensor IMU de la pantalla táctil XIAO ESP32-S3 Plus para controlar el robot Reachy Mini inclinando la pantalla: balanceo del cuerpo, rotación de la cabeza y asentimiento.
title: Reachy Mini × Control de Movimiento con Pantalla XIAO
slug: /reachymini_development_cases_sway_screen
image: https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif
keywords:
  - Reachy Mini
  - IMU
  - control de movimiento
  - XIAO ESP32-S3
  - pantalla táctil
  - LSM6DS3
  - Arduino
  - Python
sku: 100090917, 114993666
last_update:
  date: 2026-09-22
  author: jingyizhang
translation:
  skip: [zh-CN]
createdAt: '2026-09-20'
updatedAt: '2026-09-22'
url: https://wiki.seeedstudio.com/es/reachymini_development_cases_sway_screen/
---

# Reachy Mini × Control de Movimiento con Pantalla XIAO

Combina el robot **Reachy Mini** con la **pantalla táctil XIAO ESP32-S3 Plus**: usando el sensor IMU integrado (LSM6DS3), al inclinar la pantalla se controla el balanceo del cuerpo del robot, el giro de la cabeza (yaw) y la inclinación de la cabeza (pitch).

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif"
    alt="Demostración de Control de Movimiento con Pantalla Reachy Mini × XIAO" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Reachy Mini Ahora 🤖</font></span></strong>
</a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue XIAO 1.47'' Ahora 🖥️</font></span></strong>
</a>
</div>

<p align="center">
    <img src="https://img.shields.io/badge/Platform-Reachy%20Mini-blue.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Controller-XIAO%20ESP32--S3%20Plus-green.svg" alt="Controller" />
    <img src="https://img.shields.io/badge/Sensor-LSM6DS3%20IMU-orange.svg" alt="Sensor" />
    <img src="https://img.shields.io/badge/Language-Arduino%20%7C%20Python-yellow.svg" alt="Language" />
</p>

---

## Demostración

| Acción | Respuesta del robot | Pantalla |
|:-------|:--------------------|:---------|
| Inclinar la pantalla a la izquierda/derecha | Balanceo del cuerpo + giro de la cabeza (izquierda/derecha) | El kaomoji se inclina con la dirección |
| Inclinar la pantalla hacia adelante/atrás | Inclinación de la cabeza (asentir arriba/abajo) | — |
| Pantalla mantenida quieta | El robot permanece quieto (disparo manual) | El kaomoji vuelve al centro |

La pantalla muestra un kaomoji `≧∇≦`, girado 90° en posición vertical, que se balancea con la dirección de inclinación. El patrón de visualización de la pantalla XIAO se puede personalizar: consulta el tutorial [1.47 inch Touch Display Getting Started](https://wiki.seeedstudio.com/es/getting_started_1.47_inch_touch_display_nrf52840/) para compilar y flashear tu propio patrón.

---

## Hardware

| Hardware | Descripción |
|:---------|:------------|
| [Reachy Mini Wireless Kit](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | Conectado por USB al PC |
| [1.47 inch Touch Display — XIAO ESP32-S3 Plus](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html) | Sensor IMU LSM6DS3 integrado |
| PC (Windows) | Python 3.11+ |
| Cables USB-C ×2 | Uno para la pantalla, otro para el robot |

---

## Configuración de Software

### Paso 1. Instalar Arduino CLI

Descarga e instala desde [Arduino CLI Releases](https://github.com/arduino/arduino-cli/releases).

### Paso 2. Instalar Soporte de Placa ESP32

```bash
arduino-cli config init
```

Edita `~/.arduino15/arduino-cli.yaml` y añade la URL de la placa ESP32 bajo `board_manager.additional_urls`:

```yaml
board_manager:
  additional_urls:
    - https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

Instala el core de ESP32:

```bash
arduino-cli core install esp32:esp32
```

:::tip
Selecciona `XIAO_ESP32S3_Plus` como la placa objetivo (fqbn) para la pantalla.
:::

### Paso 3. Instalar la Biblioteca Seeed GFX

La visualización en pantalla depende de la biblioteca [Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX). Instálala desde GitHub en tu directorio de bibliotecas de Arduino.

### Paso 4. Instalar Dependencias de Python

```bash
pip install reachy-mini pyserial numpy
```

---

## Paso 1: Obtener el Código del Proyecto

```bash
git clone https://github.com/Genie-INSPIRE/reachy-mini-sway-screen.git
cd reachy-mini-sway-screen
```

Contenido del proyecto:

| Archivo | Propósito |
|:--------|:---------|
| `reachy_sway_screen/reachy_sway_screen.ino` | Firmware de la pantalla: lee la IMU + salida serie + dibuja el kaomoji |
| `reachy_sync/sway_follow.py` | Programa de control principal: lee el puerto serie + controla el robot |
| `reachy_sync/start_daemon.py` | Lanzador del daemon de Reachy Mini |

---

## Paso 2: Flashear el Firmware de la Pantalla

### 1. Encontrar el Puerto COM de la Pantalla

Conecta la pantalla por USB, abre el **Administrador de dispositivos** y encuentra el puerto COM **USB-Serial/JTAG** (VID `0x303A`).

:::note
La pantalla se detecta automáticamente por VID, por lo que los cambios en el número de puerto COM no importan.
:::

### 2. Compilar y Flashear

```bash
arduino-cli compile --fqbn esp32:esp32:XIAO_ESP32S3_Plus -u -p COM9 --warnings none reachy_sway_screen
```

Sustituye `COM9` por el puerto COM real de tu pantalla.

### 3. Calibrar la Posición Neutra

1. Coloca la pantalla **plana sobre una mesa** (mantenla nivelada)
2. Espera 2 segundos (la pantalla muestra `hold neutral`)
3. Se auto-muestrea durante 0.5 segundos, guarda la posición neutra en la **NVS** (persiste tras apagar)
4. Para recalibrar: envía la letra `c` a la pantalla mediante una herramienta serie (115200 baudios)

:::caution
Debes calibrar la posición neutra en el primer uso o al cambiar de pantalla, de lo contrario los ángulos de inclinación serán incorrectos.
:::

---

## Paso 3: Iniciar el Daemon del Robot

### 1. Encontrar el Puerto COM del Robot

Conecta el robot por USB, encuentra el puerto COM del **chip CH343** en el Administrador de dispositivos (VID `0x1A86`).

### 2. Configurar el Puerto COM

Edita `reachy_sync/start_daemon.py` y cambia `COM14` por el puerto COM real de tu robot:

```bash
# Open start_daemon.py in an editor, change COM14 to your actual port
```

### 3. Iniciar

```bash
cd reachy_sync
python -u start_daemon.py
```

Deberías ver `Uvicorn running on http://127.0.0.1:8000` — ¡éxito!

:::tip
Abre http://127.0.0.1:8000/ en un navegador para confirmar que el daemon está en ejecución.
:::

---

## Paso 4: Ejecutar el Programa de Control Principal

```bash
cd reachy_sync
python -u sway_follow.py
```

Deberías ver:

```text
screen connected on COMx
connected
ready: L/R tilt -> body sway + head yaw. F/B tilt -> head pitch.
```

Inclina la pantalla y el robot seguirá el movimiento.

---

## Cómo Funciona

### Flujo de Datos

```text
Screen IMU (LSM6DS3)
  ax = left/right tilt, ay = forward/back tilt
  tilt = -asinf(ax), pitch = -asinf(ay)
  deadband filter + gain + low-pass filter
  Serial output: "sway <value> pitch <value> rad" (115200 baud)
        ↓
Python (sway_follow.py)
  Reads serial data
  Two-stage low-pass filter (0.22)
  Computes body_yaw, head yaw, head pitch
        ↓
Reachy Mini Daemon (port 8000)
  set_target(body_yaw, antennas, head)
        ↓
Robot motors execute
```

### Parámetros del Firmware de la Pantalla

| Parámetro | Valor | Descripción |
|:----------|:------|:------------|
| `GAIN` | 6.0 | Factor de amplificación de inclinación — más alto = más sensible |
| `FILT` | 0.25 | Coeficiente de filtro paso bajo — más bajo = más suave pero más lento |
| `AMP` | 0.7 | Amplitud máxima de salida (rad), ~40° |
| `deadband` | 0.008 | Zona muerta (rad), ignora inclinaciones por debajo de 0.5° |

### Parámetros del Lado del Robot

| Parámetro | Valor | Descripción |
|:----------|:------|:------------|
| `HEAD_K` | 0.40 | Ganancia de giro de cabeza (izquierda/derecha) |
| `HEAD_PITCH_K` | 0.65 | Ganancia de inclinación de cabeza (arriba/abajo) |
| Coeficientes de filtro | 0.22 / 0.22 | Filtro paso bajo de dos etapas — más bajo = más suave |

### Espejado de Antenas

Los dos motores de antena en Reachy Mini están montados en espejo:

- **Antena derecha** (índice 0): positivo = se inclina a la izquierda, negativo = se inclina a la derecha
- **Antena izquierda** (índice 1): positivo = se inclina a la derecha, negativo = se inclina a la izquierda

Para que ambas antenas se inclinen en la misma dirección, usa signos opuestos: resta para la derecha, suma para la izquierda.

---

## Ajuste de Parámetros

### Demasiado Lento en Responder

- Aumenta `FILT` en la pantalla (p. ej. 0.25 → 0.30): filtrado más fuerte en el lado de la pantalla
- Disminuye el coeficiente de filtro del lado del robot (p. ej. 0.22 → 0.15): respuesta más suave pero más lenta

### Demasiado Lento / Requiere Grandes Inclinaciones

- Aumenta `GAIN` en la pantalla (p. ej. 6.0 → 8.0): pequeñas inclinaciones provocan movimientos mayores
- Aumenta el coeficiente de filtro del lado del robot (p. ej. 0.22 → 0.30): respuesta más rápida

### Dirección de la Cabeza Invertida

| Problema | Solución |
|:--------|:---------|
| Izquierda/derecha invertidas | Invierte el signo de `tilt` (`tilt = -asinf(ax)` en `.ino`) |
| Arriba/abajo invertidos | Invierte el signo de `pitch` (`pt = -asinf(ay)` en `.ino`) |

### Dirección del Kaomoji Incorrecta

| Problema | Solución |
|:--------|:---------|
| Ángulo de rotación | Modifica `drawFigure(dyn + 1.5708f)` — `1.5708` = 90° |
| Dirección de inclinación invertida | Cambia `dyn = kaoDev * 2.0f` a `dyn = -kaoDev * 2.0f` |

---

## Preguntas Frecuentes (FAQ)

<details>
<summary><strong>P: ¿Qué hacer después de un corte de energía?</strong></summary>

R: Reinicia el daemon (`python start_daemon.py`) y luego inicia `sway_follow.py`. El firmware de la pantalla y la calibración neutra se guardan en la NVS y no se perderán.

</details>

<details>
<summary><strong>P: ¿El número de puerto COM cambió?</strong></summary>

R: La pantalla se detecta automáticamente por VID (`0x303A`), no se necesita ningún cambio. Actualiza el puerto COM del robot en `start_daemon.py`.

</details>

<details>
<summary><strong>P: ¿El robot no se mueve?</strong></summary>

R: Comprueba si el daemon se está ejecutando en el puerto 8000 (abre http://127.0.0.1:8000/ en el navegador). Si no, reinicia el daemon.

</details>

<details>
<summary><strong>P: ¿La pantalla no muestra nada o no envía datos?</strong></summary>

R: Comprueba el cable USB, vuelve a flashear el firmware, usa una herramienta serie (115200 baudios) para verificar la salida `sway ... pitch ... rad`.

</details>

<details>
<summary><strong>P: ¿La dirección de la cabeza está invertida?</strong></summary>

R: Izquierda/derecha invertidas → invierte el signo en `tilt = -asinf(ax)` en el archivo `.ino`. Arriba/abajo invertidos → invierte el signo en `pt = -asinf(ay)`.

</details>

---

## Soporte Técnico

- **Repositorio del Proyecto**: [GitHub](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen)
- **Enviar Incidencia**: [Issues](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen/issues)
- **Foro**: [Seeed Studio Forum](https://forum.seeedstudio.com/)
- **Comprar**: [Reachy Mini](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | [XIAO 1.47'' Touch Display](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html)

---

## Referencias

- [Reachy Mini Getting Started](/es/reachymini_getting_started)
- [1.47 inch Touch Display Getting Started](https://wiki.seeedstudio.com/es/getting_started_1.47_inch_touch_display_nrf52840/)
- [Arduino CLI Documentation](https://arduino.github.io/arduino-cli/)
- [LSM6DS3 Datasheet](https://www.st.com/en/mems-and-sensors/lsm6ds3.html)
