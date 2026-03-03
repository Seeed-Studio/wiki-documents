---
description: Referencia completa de la API para la clase principal ReachyMini, incluidos métodos para control de motores, movimiento y gestión de estado.
title: Referencia de la API de ReachyMini
slug: /es/reachymini_api_reachymini
keywords:
- api
- reachymini
- motor control
- movement
- state
- main class
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---
# Reachy Mini

## Clase principal

### `reachy_mini.ReachyMini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L56)**

Clase Reachy Mini para controlar un robot Reachy Mini simulado o real.

### Métodos

#### `async_play_move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L856)**

Reproduce de forma asíncrona un `Move`.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `move` | `Move` | El objeto Move que se va a reproducir. |
| `play_frequency` | `float` | Frecuencia a la que se evalúa el movimiento (en Hz). |
| `initial_goto_duration` | `float` | Duración del movimiento inicial hacia la posición de inicio del movimiento (en segundos). Si es 0, no se realiza el movimiento inicial. |
| `sound` | `bool` | Si es True, reproduce el sonido asociado al movimiento (si lo hay). |

---

#### `disable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L843)**

Desactiva la compensación de gravedad para los motores de la cabeza.

---

#### `disable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L825)**

Desactiva los motores.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `ids` | `List[str] \| None` | Lista de nombres de motores que se van a desactivar. Si es None, se desactivarán todos los motores. Los nombres válidos coinciden con `src/reachy_mini/assets/config/hardware_config.yaml`: `body_rotation`, `stewart_1` … `stewart_6`, `right_antenna`, `left_antenna`. |

---

#### `enable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L839)**

Activa la compensación de gravedad para los motores de la cabeza.

---

#### `enable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L814)**

Activa los motores.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `ids` | `List[str] \| None` | Lista de nombres de motores que se van a activar. Si es None, se activarán todos los motores. Los nombres válidos coinciden con `src/reachy_mini/assets/config/hardware_config.yaml`: `body_rotation`, `stewart_1` … `stewart_6`, `right_antenna`, `left_antenna`. |

---

#### `get_current_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L698)**

Obtiene la pose actual de la cabeza como una matriz 4x4.

**Devuelve:**

`np.ndarray` — Una matriz 4x4 que representa la pose actual de la cabeza.

---

#### `get_current_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L674)**

Obtiene las posiciones articulares actuales de la cabeza y las antenas (en rad).

**Devuelve:**

`tuple` — Una tupla que contiene dos listas:
- Lista de posiciones articulares de la cabeza (rad) (longitud 7)
- Lista de posiciones articulares de las antenas (rad) (longitud 2)

---

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L687)**

Obtiene las posiciones articulares actuales de las antenas (en rad).

**Devuelve:**

`list` — Una lista de posiciones articulares de las antenas (rad) (longitud 2).

---

#### `goto_sleep`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L449)**

Pone el robot en modo reposo moviendo la cabeza y las antenas a una posición de sueño predefinida.

---

#### `goto_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L381)**

Va a una pose objetivo de la cabeza y/o a una posición objetivo de las antenas usando interpolación en el espacio de tareas, en "duration" segundos.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | Matriz de pose 4x4 que representa la pose objetivo de la cabeza. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | Vector 1D con dos elementos que representan los ángulos de las antenas en radianes. |
| `duration` | `float` | Duración del movimiento en segundos. |
| `method` | `InterpolationTechnique` | Método de interpolación a utilizar ("linear", "minjerk", "ease_in_out", "cartoon"). El valor predeterminado es "minjerk". |
| `body_yaw` | `float \| None` | Ángulo de guiñada del cuerpo en radianes. Usa None para mantener la guiñada actual. |

---

#### `look_at_image`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L481)**

Hace que la cabeza del robot mire a un punto definido por una posición de píxel (u,v).

:::tip

TODO: imagen del sistema de coordenadas de Reachy Mini

:::

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `u` | `int` | Coordenada horizontal en el marco de la imagen. |
| `v` | `int` | Coordenada vertical en el marco de la imagen. |
| `duration` | `float` | Duración del movimiento en segundos. Si es 0, la cabeza saltará a la posición inmediatamente. |
| `perform_movement` | `bool` | Si es True, realiza el movimiento. Si es False, solo calcula y devuelve la pose. |

**Devuelve:**

`np.ndarray` — La pose calculada de la cabeza como una matriz 4x4.

---

#### `look_at_world`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L546)**

Mira a un punto específico en el espacio 3D en el marco de referencia de Reachy Mini.

:::tip

TODO: incluir imagen del sistema de coordenadas de Reachy Mini

:::

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `x` | `float` | Coordenada X en metros. |
| `y` | `float` | Coordenada Y en metros. |
| `z` | `float` | Coordenada Z en metros. |
| `duration` | `float` | Duración del movimiento en segundos. Si es 0, la cabeza saltará a la posición inmediatamente. |
| `perform_movement` | `bool` | Si es True, realiza el movimiento. Si es False, solo calcula y devuelve la pose. |

**Devuelve:**

`np.ndarray` — La pose calculada de la cabeza como una matriz 4x4.

---

#### `play_move`

Reproduce de forma asíncrona un `Move`.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `move` | `Move` | El objeto Move que se va a reproducir. |
| `play_frequency` | `float` | Frecuencia a la que se evalúa el movimiento (en Hz). |
| `initial_goto_duration` | `float` | Duración del movimiento inicial hacia la posición de inicio del movimiento (en segundos). Si es 0, no se realiza el movimiento inicial. |
| `sound` | `bool` | Si es True, reproduce el sonido asociado al movimiento (si lo hay). |

---

#### `set_automatic_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L847)**

Configura la guiñada automática del cuerpo.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `body_yaw` | `float` | El ángulo de guiñada del cuerpo en radianes. |

---

#### `set_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L320)**

Configura la pose objetivo de la cabeza y/o la posición objetivo de las antenas.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | Matriz de pose 4x4 que representa la pose de la cabeza. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | Vector 1D con dos elementos que representan los ángulos de las antenas en radianes. |
| `body_yaw` | `Optional[float]` | Ángulo de guiñada del cuerpo en radianes. |

---

#### `set_target_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L767)**

Configura las posiciones articulares objetivo de las antenas.

---

#### `set_target_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L772)**

Configura la guiñada objetivo del cuerpo.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `body_yaw` | `float` | El ángulo de guiñada del cuerpo en radianes. |

---

#### `set_target_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L743)**

Configura la pose de la cabeza a una matriz 4x4 específica.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `pose` | `np.ndarray` | Una matriz 4x4 que representa la pose deseada de la cabeza. |
| `body_yaw` | `float` | El ángulo de guiñada del cuerpo, usado para ajustar la pose de la cabeza. |

---

#### `start_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L782)**

Inicia la grabación de datos.

---

#### `stop_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L787)**

Detiene la grabación de datos y devuelve los datos grabados.

---

#### `wake_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L433)**

Despierta el robot: va a la posición inicial de la cabeza y reproduce el gesto y el sonido de despertar.
