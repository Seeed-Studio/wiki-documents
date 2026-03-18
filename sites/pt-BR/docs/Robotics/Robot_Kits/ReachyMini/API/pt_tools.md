---
description: Referência completa da API para ferramentas do Reachy Mini, incluindo ferramentas de configuração de motor, de varredura e de regravação.
title: Referência da API de Ferramentas
slug: /reachymini_api_tools
keywords:
  - api
  - ferramentas
  - configuração de motor
  - varredura
  - regravação
  - utilitários
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_tools/
---
# Ferramentas

## Ferramentas de Configuração de Motor

### `reachy_mini.tools.setup_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L55)**

Configura o motor com a configuração fornecida.

---

### `reachy_mini.tools.setup_motor.lookup_for_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L144)**

Verifica se um motor com o ID fornecido é acessível na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.disable_torque`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L165)**

Desativa o torque do motor com o ID fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.change_baudrate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L177)**

Altera o baudrate do motor com o ID fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.change_id`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L191)**

Altera o ID do motor com o ID atual fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.change_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L203)**

Altera o offset do motor com o ID fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.change_operating_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L215)**

Altera o modo de operação do motor com o ID fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.change_angle_limits`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L233)**

Altera os limites de ângulo do motor com o ID fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.change_shutdown_error`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L256)**

Altera o erro de desligamento do motor com o ID fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.change_return_delay_time`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L274)**

Altera o tempo de atraso de retorno do motor com o ID fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.light_led_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L292)**

Acende o LED do motor com o ID fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.light_led_down`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L311)**

Apaga o LED do motor com o ID fornecido na porta serial especificada.

---

### `reachy_mini.tools.setup_motor.check_configuration`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L329)**

Verifica a configuração do motor com o ID fornecido na porta serial especificada.

---

## Ferramentas de Varredura de Motor

### `reachy_mini.tools.scan_motors.scan`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/scan_motors.py#L48)**

Faz a varredura do barramento no baudrate fornecido e retorna os IDs detectados.

---

## Ferramentas de Regravação de Motor

### `reachy_mini.tools.reflash_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/reflash_motors.py#L40)**

:::warning

Regrava os motores do Reachy Mini.

Esta é uma operação potencialmente perigosa que só deve ser realizada por usuários experientes.

:::
