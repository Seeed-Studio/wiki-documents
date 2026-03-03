---
description: Referencia completa de la API para el movimiento de Reachy Mini, incluidas las clases base, movimientos goto y movimientos grabados.
title: Referencia de la API de Movimiento
slug: /es/reachymini_api_motion
keywords:
- api
- motion
- moves
- goto
- interpolation
- recording
- playback
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---
# Movimiento

## Clases base

### `reachy_mini.motion.move.Move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/move.py#L11)**

Clase base abstracta para definir un movimiento en el robot `ReachyMini`.

### Métodos

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/move.py#L25)**

Evalúa el movimiento en el tiempo t, normalmente llamada a alta frecuencia (p. ej. 100Hz).

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `t` | `float` | El tiempo en el que se evalúa el movimiento (en segundos). Siempre estará entre 0 y la duración. |

**Devuelve:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `head` | - | La posición de la cabeza (matriz homogénea 4x4). |
| `antennas` | - | Las posiciones de las antenas (rad). |
| `body_yaw` | - | El ángulo de guiñada del cuerpo (rad). |

---

## Movimientos Goto

### `reachy_mini.motion.goto.GotoMove`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/goto.py#L15)**

Un movimiento goto hacia una pose objetivo de la cabeza y/o una posición de antenas.

### Métodos

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/goto.py#L51)**

Evalúa el movimiento goto en el tiempo t.

---

## Movimientos grabados

### `reachy_mini.motion.recorded_move.RecordedMove`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L70)**

Representa un movimiento grabado.

### Métodos

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L98)**

Evalúa el movimiento en el tiempo t.

**Devuelve:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `head` | - | La posición de la cabeza (matriz homogénea 4x4). |
| `antennas` | - | Las posiciones de las antenas (rad). |
| `body_yaw` | - | El ángulo de guiñada del cuerpo (rad). |

---

### `reachy_mini.motion.recorded_move.RecordedMoves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L156)**

Carga una biblioteca de movimientos grabados desde un conjunto de datos de HuggingFace.

:::info

Utiliza solo la caché local para evitar llamadas de red bloqueantes durante la reproducción.

El conjunto de datos debe descargarse previamente al inicio del daemon mediante `preload_default_datasets()`.

Si no está en caché, recurre a la descarga por red (lo que puede causar retrasos).

:::

### Métodos

#### `get`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L209)**

Obtiene un movimiento grabado por nombre.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `move_name` | `str` | El nombre del movimiento que se va a recuperar. |

---

#### `list_moves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L218)**

Enumera todos los movimientos en la biblioteca cargada.

---

#### `process`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L189)**

Rellena los movimientos y sonidos grabados.
