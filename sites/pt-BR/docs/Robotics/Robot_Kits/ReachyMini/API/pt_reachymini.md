---
description: Referência completa da API para a classe principal ReachyMini, incluindo métodos para controle de motores, movimento e gerenciamento de estado.
title: Referência da API ReachyMini
slug: /reachymini_api_reachymini
keywords:
  - api
  - reachymini
  - controle de motor
  - movimento
  - estado
  - classe principal
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_reachymini/
---
# Reachy Mini

## Classe principal

### `reachy_mini.ReachyMini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L56)**

Classe Reachy Mini para controlar um robô Reachy Mini simulado ou real.

### Métodos

#### `async_play_move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L856)**

Executa de forma assíncrona um `Move`.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `move` | `Move` | O objeto Move a ser executado. |
| `play_frequency` | `float` | A frequência na qual o movimento será avaliado (em Hz). |
| `initial_goto_duration` | `float` | Duração do movimento inicial até a posição inicial do movimento (em segundos). Se 0, nenhum movimento inicial é realizado. |
| `sound` | `bool` | Se True, reproduz o som associado ao movimento (se houver). |

---

#### `disable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L843)**

Desativa a compensação de gravidade para os motores da cabeça.

---

#### `disable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L825)**

Desativa os motores.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `ids` | `List[str] \| None` | Lista de nomes de motores a serem desativados. Se None, todos os motores serão desativados. Os nomes válidos correspondem a `src/reachy_mini/assets/config/hardware_config.yaml`: `body_rotation`, `stewart_1` … `stewart_6`, `right_antenna`, `left_antenna`. |

---

#### `enable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L839)**

Ativa a compensação de gravidade para os motores da cabeça.

---

#### `enable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L814)**

Ativa os motores.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `ids` | `List[str] \| None` | Lista de nomes de motores a serem ativados. Se None, todos os motores serão ativados. Os nomes válidos correspondem a `src/reachy_mini/assets/config/hardware_config.yaml`: `body_rotation`, `stewart_1` … `stewart_6`, `right_antenna`, `left_antenna`. |

---

#### `get_current_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L698)**

Obtém a pose atual da cabeça como uma matriz 4x4.

**Retorna:**

`np.ndarray` — Uma matriz 4x4 que representa a pose atual da cabeça.

---

#### `get_current_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L674)**

Obtém as posições atuais das juntas da cabeça e das antenas (em rad).

**Retorna:**

`tuple` — Uma tupla contendo duas listas:
- Lista de posições das juntas da cabeça (rad) (comprimento 7)
- Lista de posições das juntas das antenas (rad) (comprimento 2)

---

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L687)**

Obtém as posições atuais das juntas das antenas (em rad).

**Retorna:**

`list` — Uma lista de posições das juntas das antenas (rad) (comprimento 2).

---

#### `goto_sleep`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L449)**

Coloca o robô em modo de sono movendo a cabeça e as antenas para uma posição de sono predefinida.

---

#### `goto_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L381)**

Vai para uma pose-alvo da cabeça e/ou posição das antenas usando interpolação no espaço de tarefa, em "duration" segundos.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | Matriz de pose 4x4 que representa a pose-alvo da cabeça. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | Vetor 1D com dois elementos representando os ângulos das antenas em radianos. |
| `duration` | `float` | Duração do movimento em segundos. |
| `method` | `InterpolationTechnique` | Método de interpolação a ser utilizado ("linear", "minjerk", "ease_in_out", "cartoon"). O padrão é "minjerk". |
| `body_yaw` | `float \| None` | Ângulo de guinada do corpo em radianos. Use None para manter a guinada atual. |

---

#### `look_at_image`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L481)**

Faz a cabeça do robô olhar para um ponto definido por uma posição de pixel (u,v).

:::tip

TODO: imagem do sistema de coordenadas do Reachy Mini

:::

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `u` | `int` | Coordenada horizontal no quadro da imagem. |
| `v` | `int` | Coordenada vertical no quadro da imagem. |
| `duration` | `float` | Duração do movimento em segundos. Se 0, a cabeça irá se mover imediatamente para a posição. |
| `perform_movement` | `bool` | Se True, realiza o movimento. Se False, apenas calcula e retorna a pose. |

**Retorna:**

`np.ndarray` — A pose calculada da cabeça como uma matriz 4x4.

---

#### `look_at_world`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L546)**

Olha para um ponto específico no espaço 3D no referencial do Reachy Mini.

:::tip

TODO: incluir imagem do sistema de coordenadas do Reachy Mini

:::

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `x` | `float` | Coordenada X em metros. |
| `y` | `float` | Coordenada Y em metros. |
| `z` | `float` | Coordenada Z em metros. |
| `duration` | `float` | Duração do movimento em segundos. Se 0, a cabeça irá se mover imediatamente para a posição. |
| `perform_movement` | `bool` | Se True, realiza o movimento. Se False, apenas calcula e retorna a pose. |

**Retorna:**

`np.ndarray` — A pose calculada da cabeça como uma matriz 4x4.

---

#### `play_move`

Executa de forma assíncrona um `Move`.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `move` | `Move` | O objeto Move a ser executado. |
| `play_frequency` | `float` | A frequência na qual o movimento será avaliado (em Hz). |
| `initial_goto_duration` | `float` | Duração do movimento inicial até a posição inicial do movimento (em segundos). Se 0, nenhum movimento inicial é realizado. |
| `sound` | `bool` | Se True, reproduz o som associado ao movimento (se houver). |

---

#### `set_automatic_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L847)**

Define a guinada automática do corpo.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `body_yaw` | `float` | O ângulo de guinada do corpo em radianos. |

---

#### `set_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L320)**

Define a pose-alvo da cabeça e/ou a posição-alvo das antenas.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | Matriz de pose 4x4 que representa a pose da cabeça. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | Vetor 1D com dois elementos representando os ângulos das antenas em radianos. |
| `body_yaw` | `Optional[float]` | Ângulo de guinada do corpo em radianos. |

---

#### `set_target_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L767)**

Define as posições-alvo das juntas das antenas.

---

#### `set_target_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L772)**

Define a guinada-alvo do corpo.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `body_yaw` | `float` | O ângulo de guinada do corpo em radianos. |

---

#### `set_target_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L743)**

Define a pose da cabeça para uma matriz 4x4 específica.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `pose` | `np.ndarray` | Uma matriz 4x4 que representa a pose desejada da cabeça. |
| `body_yaw` | `float` | O ângulo de guinada do corpo, usado para ajustar a pose da cabeça. |

---

#### `start_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L782)**

Inicia a gravação de dados.

---

#### `stop_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L787)**

Interrompe a gravação de dados e retorna os dados gravados.

---

#### `wake_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L433)**

Desperta o robô – vai para a posição inicial da cabeça e executa o emote e o som de despertar.
