---
description: Referência completa da API para movimento do Reachy Mini incluindo classes base, movimentos goto e movimentos gravados.
title: Referência da API de Movimento
slug: /reachymini_api_motion
keywords:
  - api
  - movimento
  - movimentos
  - goto
  - interpolação
  - gravação
  - reprodução
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_motion/
---
# Movimento

## Classes Base

### `reachy_mini.motion.move.Move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/move.py#L11)**

Classe base abstrata para definir um movimento no robô `ReachyMini`.

### Métodos

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/move.py#L25)**

Avalia o movimento no tempo t, tipicamente chamada em alta frequência (por exemplo, 100Hz).

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `t` | `float` | O tempo no qual avaliar o movimento (em segundos). Ele estará sempre entre 0 e duration. |

**Retorna:**

| Name | Type | Description |
|------|------|-------------|
| `head` | - | A posição da cabeça (matriz homogênea 4x4). |
| `antennas` | - | As posições das antenas (rad). |
| `body_yaw` | - | O ângulo de yaw do corpo (rad). |

---

## Movimentos Goto

### `reachy_mini.motion.goto.GotoMove`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/goto.py#L15)**

Um movimento goto para uma pose alvo da cabeça e/ou posição das antenas.

### Métodos

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/goto.py#L51)**

Avalia o movimento goto no tempo t.

---

## Movimentos Gravados

### `reachy_mini.motion.recorded_move.RecordedMove`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L70)**

Representa um movimento gravado.

### Métodos

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L98)**

Avalia o movimento no tempo t.

**Retorna:**

| Name | Type | Description |
|------|------|-------------|
| `head` | - | A posição da cabeça (matriz homogênea 4x4). |
| `antennas` | - | As posições das antenas (rad). |
| `body_yaw` | - | O ângulo de yaw do corpo (rad). |

---

### `reachy_mini.motion.recorded_move.RecordedMoves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L156)**

Carrega uma biblioteca de movimentos gravados a partir de um dataset do HuggingFace.

:::info

Usa apenas cache local para evitar bloquear chamadas de rede durante a reprodução.

O dataset deve ser pré-baixado na inicialização do daemon via `preload_default_datasets()`.

Se não estiver em cache, recorre ao download pela rede (o que pode causar atrasos).

:::

### Métodos

#### `get`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L209)**

Obtém um movimento gravado pelo nome.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `move_name` | `str` | O nome do movimento a ser recuperado. |

---

#### `list_moves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L218)**

Lista todos os movimentos na biblioteca carregada.

---

#### `process`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L189)**

Preenche os movimentos e sons gravados.
