---
description: Referencia completa de la API para las herramientas de Reachy Mini, incluidas herramientas de configuración de motores, herramientas de escaneo y herramientas de reprogramación.
title: Referencia de la API de herramientas
slug: /reachymini_api_tools
keywords:
  - api
  - tools
  - motor setup
  - scanning
  - reflashing
  - utilities
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/es/reachymini_api_tools/
---
# Herramientas

## Herramientas de configuración de motores

### `reachy_mini.tools.setup_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L55)**

Configura el motor con la configuración indicada.

---

### `reachy_mini.tools.setup_motor.lookup_for_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L144)**

Comprueba si un motor con el ID indicado es accesible en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.disable_torque`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L165)**

Desactiva el par del motor con el ID indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.change_baudrate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L177)**

Cambia la velocidad en baudios del motor con el ID indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.change_id`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L191)**

Cambia el ID del motor con el ID actual indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.change_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L203)**

Cambia el desplazamiento del motor con el ID indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.change_operating_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L215)**

Cambia el modo de funcionamiento del motor con el ID indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.change_angle_limits`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L233)**

Cambia los límites de ángulo del motor con el ID indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.change_shutdown_error`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L256)**

Cambia el error de apagado del motor con el ID indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.change_return_delay_time`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L274)**

Cambia el tiempo de retardo de respuesta del motor con el ID indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.light_led_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L292)**

Enciende el LED del motor con el ID indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.light_led_down`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L311)**

Enciende el LED del motor con el ID indicado en el puerto serie especificado.

---

### `reachy_mini.tools.setup_motor.check_configuration`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L329)**

Comprueba la configuración del motor con el ID indicado en el puerto serie especificado.

---

## Herramientas de escaneo de motores

### `reachy_mini.tools.scan_motors.scan`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/scan_motors.py#L48)**

Escanea el bus a la velocidad en baudios indicada y devuelve los IDs detectados.

---

## Herramientas de reprogramación de motores

### `reachy_mini.tools.reflash_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/reflash_motors.py#L40)**

:::warning

Vuelve a programar los motores de Reachy Mini.

Esta es una operación potencialmente peligrosa que solo debería ser realizada por usuarios con experiencia.

:::
