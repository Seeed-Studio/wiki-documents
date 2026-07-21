---
description: Referência da API de movimento do Reachy Mini cobrindo classes base de movimento, movimentos goto e movimentos gravados.
title: API de Movimento
slug: /reachymini_api_motion
keywords:
  - movimento
  - api
  - goto
  - movimentos gravados
  - movimento
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_motion/
---

# Movimento

## Classes Base

### `reachy_mini.motion.move.Move`

Classe base para todos os tipos de movimento no sistema de movimento do Reachy Mini.

### Métodos

#### `goto_target`

Ir para uma pose alvo usando interpolação no espaço de tarefa.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | Matriz de pose 4x4 representando a pose alvo da cabeça. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | Vetor 1D com dois elementos representando os ângulos das antenas em radianos. |
| `duration` | `float` | Duração do movimento em segundos. |
| `method` | `InterpolationTechnique` | Método de interpolação a ser usado ("linear", "minjerk", "ease_in_out", "cartoon"). |
| `body_yaw` | `float \| None` | Ângulo de guinada do corpo em radianos. |

---

#### `set_target`

Define a pose alvo da cabeça e/ou a posição alvo das antenas (controle em tempo real).

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | Matriz de pose 4x4 representando a pose da cabeça. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | Vetor 1D com dois elementos representando os ângulos das antenas em radianos. |
| `body_yaw` | `Optional[float]` | Ângulo de guinada do corpo em radianos. |

---

## Movimentos Goto

### `reachy_mini.motion.goto.GotoMove`

Classe GotoMove para movimentos usando interpolação no espaço de tarefa.

### Métodos

#### `play`

Executa o movimento goto com a duração e o método de interpolação especificados.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `duration` | `float` | Duração do movimento em segundos. |
| `method` | `str` | Método de interpolação a ser usado. |

---

## Movimentos Gravados

### `reachy_mini.motion.recorded_move.RecordedMove`

Um único movimento gravado que pode ser reproduzido no robô.

### Métodos

#### `evaluate`

Avalia o movimento gravado em um instante de tempo específico.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `t` | `float` | Tempo em segundos no qual avaliar o movimento. |

**Retorna:**

`Dict` — Dicionário contendo a pose da cabeça, as posições das antenas e a guinada do corpo no instante t.

---

#### `play`

Reproduz o movimento gravado no robô.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `play_frequency` | `float` | Frequência na qual avaliar o movimento (em Hz). |
| `initial_goto_duration` | `float` | Duração do movimento goto inicial até a posição de partida (em segundos). |
| `sound` | `bool` | Se o som associado deve ser reproduzido. |

---

### `reachy_mini.motion.recorded_move.RecordedMoves`

Coleção de movimentos gravados, normalmente carregada a partir de um dataset do HuggingFace.

### Métodos

#### `get`

Obtém um movimento gravado específico pelo nome.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `name` | `str` | Nome do movimento gravado a ser recuperado. |

**Retorna:**

`RecordedMove` — O movimento gravado solicitado.

---

#### `list`

Lista todos os nomes de movimentos gravados disponíveis.

**Retorna:**

`List[str]` — Lista de nomes de movimentos disponíveis.