---
description: Referencia de la API de movimiento para Reachy Mini que cubre las clases base de movimiento, movimientos goto y movimientos grabados.
title: API de movimiento
slug: /reachymini_api_motion
keywords:
  - movimiento
  - api
  - goto
  - movimientos grabados
  - movimiento
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/es/reachymini_api_motion/
---

# Movimiento

## Clases base

### `reachy_mini.motion.move.Move`

Clase base para todos los tipos de movimiento en el sistema de movimiento de Reachy Mini.

### Métodos

#### `goto_target`

Ir a una pose objetivo utilizando interpolación en el espacio de tareas.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | Matriz de pose 4x4 que representa la pose objetivo de la cabeza. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | Arreglo 1D con dos elementos que representan los ángulos de las antenas en radianes. |
| `duration` | `float` | Duración del movimiento en segundos. |
| `method` | `InterpolationTechnique` | Método de interpolación a utilizar ("linear", "minjerk", "ease_in_out", "cartoon"). |
| `body_yaw` | `float \| None` | Ángulo de guiñada del cuerpo en radianes. |

---

#### `set_target`

Establece la pose objetivo de la cabeza y/o la posición objetivo de las antenas (control en tiempo real).

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | Matriz de pose 4x4 que representa la pose de la cabeza. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | Arreglo 1D con dos elementos que representan los ángulos de las antenas en radianes. |
| `body_yaw` | `Optional[float]` | Ángulo de guiñada del cuerpo en radianes. |

---

## Movimientos Goto

### `reachy_mini.motion.goto.GotoMove`

Clase GotoMove para movimientos que utilizan interpolación en el espacio de tareas.

### Métodos

#### `play`

Reproduce el movimiento goto con la duración y el método de interpolación especificados.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `duration` | `float` | Duración del movimiento en segundos. |
| `method` | `str` | Método de interpolación a utilizar. |

---

## Movimientos grabados

### `reachy_mini.motion.recorded_move.RecordedMove`

Un único movimiento grabado que se puede reproducir en el robot.

### Métodos

#### `evaluate`

Evalúa el movimiento grabado en un momento específico.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `t` | `float` | Tiempo en segundos en el que se evalúa el movimiento. |

**Devuelve:**

`Dict` — Diccionario que contiene la pose de la cabeza, las posiciones de las antenas y la guiñada del cuerpo en el tiempo t.

---

#### `play`

Reproduce el movimiento grabado en el robot.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `play_frequency` | `float` | Frecuencia a la que se evalúa el movimiento (en Hz). |
| `initial_goto_duration` | `float` | Duración del goto inicial hasta la posición de inicio (en segundos). |
| `sound` | `bool` | Indica si se debe reproducir el sonido asociado. |

---

### `reachy_mini.motion.recorded_move.RecordedMoves`

Colección de movimientos grabados, normalmente cargados desde un conjunto de datos de HuggingFace.

### Métodos

#### `get`

Obtiene un movimiento grabado específico por nombre.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `name` | `str` | Nombre del movimiento grabado que se desea recuperar. |

**Devuelve:**

`RecordedMove` — El movimiento grabado solicitado.

---

#### `list`

Enumera todos los nombres de movimientos grabados disponibles.

**Devuelve:**

`List[str]` — Lista de nombres de movimientos disponibles.