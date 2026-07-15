---
description: Referência completa da API para utilitários do Reachy Mini, incluindo funções de interpolação, configuração de hardware, visualização com Rerun e utilitários centrais.
title: Referência da API de Utils
slug: /reachymini_api_utils
keywords:
  - api
  - utils
  - interpolação
  - configuração de hardware
  - visualização
  - urdf
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_utils/
---
# Utils

## Funções de Interpolação

### `reachy_mini.utils.interpolation.minimum_jerk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L13)**

Calcula a função de interpolação de mínimo jerk da posição inicial até a posição alvo.

---

### `reachy_mini.utils.interpolation.linear_pose_interpolation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L58)**

Interpola linearmente entre duas poses em espaço 6D.

---

### `reachy_mini.utils.interpolation.time_trajectory`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L96)**

Calcula o valor da trajetória temporal com base no método de interpolação especificado.

---

### `reachy_mini.utils.interpolation.delta_angle_between_mat_rot`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L135)**

Calcula o ângulo (em radianos) entre duas matrizes de rotação 3x3 `P` e `Q`.

Isso é equivalente à distância angular em espaço eixo-ângulo. É calculado via traço da matriz de rotação relativa.

**Parâmetros:**

| Nome | Descrição |
|------|-------------|
| `P` | Uma matriz de rotação 3x3. |
| `Q` | Outra matriz de rotação 3x3. |

**Retorna:**

O ângulo em radianos entre as duas rotações.

**Referências:**
- [https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices](https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices)
- [http://www.boris-belousov.net/2016/12/01/quat-dist/](http://www.boris-belousov.net/2016/12/01/quat-dist/)

---

### `reachy_mini.utils.interpolation.distance_between_poses`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L161)**

Calcula três tipos de distância entre duas matrizes de transformação homogênea 4x4.

O resultado combina translação (em mm) e rotação (em graus) usando uma equivalência arbitrária porém emocionalmente satisfatória: **1 grau ≈ 1 mm**.

**Parâmetros:**

| Nome | Descrição |
|------|-------------|
| `pose1` | Uma matriz de transformação homogênea 4x4 representando a primeira pose. |
| `pose2` | Uma matriz de transformação homogênea 4x4 representando a segunda pose. |

**Retorna:**

Uma tupla de:
- distância de translação em metros
- distância angular em radianos
- distância desancorada em mm mágicos (translação em mm + rotação em graus)

---

### `reachy_mini.utils.interpolation.compose_world_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L187)**

Compõe uma pose absoluta no referencial do mundo com um deslocamento no referencial do mundo.

- **translações somam no mundo:** `t_final = t_abs + t_off`
- **rotações se compõem no mundo:** `R_final = R_off @ R_abs`

Isso rotaciona o referencial no lugar (em torno de sua própria origem) por uma rotação definida em eixos do mundo e o desloca por uma translação no mundo.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `T_abs` | `(4,4) ndarray` | Pose absoluta no referencial do mundo. |
| `T_off_world` | `(4,4) ndarray` | Transformação de deslocamento especificada em eixos do mundo (dx,dy,dz no mundo; dR em torno dos eixos do mundo). |
| `reorthonormalize` | `bool` | Se True, reortogonaliza por SVD a rotação resultante para combater deriva. |

**Retorna:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `T_final` | `(4,4) ndarray` | Pose resultante no referencial do mundo. |

---

### `reachy_mini.utils.interpolation.InterpolationTechnique`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L87)**

Enumeração de técnicas de interpolação.

---

## Configuração de Hardware

### `reachy_mini.utils.hardware_config.parser.MotorConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L9)**

Configuração de motor.

---

### `reachy_mini.utils.hardware_config.parser.SerialConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L23)**

Configuração serial.

---

### `reachy_mini.utils.hardware_config.parser.ReachyMiniConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L30)**

Configuração do Reachy Mini.

---

### `reachy_mini.utils.hardware_config.parser.parse_yaml_config`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L38)**

Analisa o arquivo de configuração YAML e retorna um `ReachyMiniConfig`.

---

## Visualização com Rerun

### `reachy_mini.utils.rerun.Rerun`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L28)**

Registro com Rerun para o Reachy Mini.

### Métodos

#### `log_camera`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L126)**

Registra a imagem da câmera no Rerun.

---

#### `log_movements`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L203)**

Registra os dados de movimento no Rerun.

---

#### `set_absolute_path_to_urdf`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L97)**

Define os caminhos absolutos no arquivo URDF. O Rerun não consegue ler os caminhos `"package://"`.

---

#### `start`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L107)**

Inicia a thread de registro do Rerun.

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L113)**

Encerra a thread de registro do Rerun.

---

### `reachy_mini.utils.rerun.UrdfEntityPaths`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L276)**

Auxiliar para construir caminhos de entidades de links/juntas que correspondem ao registrador URDF nativo.

---

## Utilitários da Versão Wireless

### `reachy_mini.utils.wireless_version.utils.call_logger_wrapper`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/utils.py#L8)**

Executa um comando de forma assíncrona, transmitindo stdout e stderr para o logger em tempo real.

**Parâmetros:**

| Nome | Descrição |
|------|-------------|
| `command` | lista ou tupla de argumentos do comando (não é uma string) |
| `logger` | objeto logger com métodos `.info` e `.error` |

---

### `reachy_mini.utils.wireless_version.update.update_reachy_mini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update.py#L12)**

Atualiza o pacote reachy_mini e reinicia o daemon.

**Parâmetros:**

| Nome | Descrição |
|------|-------------|
| `logger` | Logger para transmissão da saída. |
| `pre_release` | Se True, instala pré-lançamento do PyPI (ignorado se git_ref definido). |
| `git_ref` | Se definido, instala a partir deste tag/branch do GitHub em vez do PyPI. |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_fix_venvs_ownership`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L17)**

Para unidades wireless, verifica se os arquivos em venvs_path pertencem ao usuário pollen e corrige se necessário.

**Parâmetros:**

| Nome | Descrição |
|------|-------------|
| `venvs_path` | Caminho para o diretório de ambientes virtuais (padrão: /venvs) |
| `custom_logger` | Logger opcional para usar em vez do logger do módulo |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_bluetooth_service`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L80)**

:::info

Verifica se o serviço de bluetooth precisa ser atualizado e atualiza se estiver diferente.

Compara o `bluetooth_service.py` de origem com a versão instalada em `/bluetooth/bluetooth_service.py`. Se forem diferentes, copia a nova versão e reinicia o serviço de bluetooth. Também sincroniza a pasta `commands/`.

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_wireless_launcher`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L190)**

:::info

Verifica se o serviço de daemon wireless precisa ser atualizado e atualiza se estiver diferente.

Compara o `reachy-mini-daemon.service` de origem com a versão instalada. Se forem diferentes, copia a nova versão e recarrega o systemd.

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_sync_apps_venv_sdk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L255)**

:::info

Verifica se o SDK do apps_venv corresponde à origem de instalação do daemon e sincroniza se necessário.

Compara tanto a versão QUANTO a origem da instalação (PyPI vs git ref). Se o daemon tiver sido instalado a partir de um git ref, o apps_venv será sincronizado para o mesmo ref.

:::

---

### `reachy_mini.utils.wireless_version.update_available.is_update_available`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L36)**

Verifica se há uma atualização disponível para o pacote fornecido.

---

### `reachy_mini.utils.wireless_version.update_available.get_pypi_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L47)**

Obtém a versão mais recente de um pacote a partir do PyPI.

---

### `reachy_mini.utils.wireless_version.update_available.get_local_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L65)**

Obtém a versão atualmente instalada de um pacote.

---

## Utilitários Centrais

### `reachy_mini.utils.create_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/__init__.py#L13)**

Cria uma matriz de transformação homogênea que representa uma pose em um espaço 6D (posição e orientação).

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `x` | `float` | Coordenada X da posição. |
| `y` | `float` | Coordenada Y da posição. |
| `z` | `float` | Coordenada Z da posição. |
| `roll` | `float` | Ângulo de roll |
| `pitch` | `float` | Ângulo de pitch |
| `yaw` | `float` | Ângulo de yaw |
| `mm` | `bool` | Se True, converte a posição de milímetros para metros. |
| `degrees` | `bool` | Se True, interpreta roll, pitch e yaw como graus; caso contrário, como radianos. |

**Retorna:**

`np.ndarray` — Uma matriz de transformação homogênea 4x4 representando a pose.

---

## Análise de URDF

### `reachy_mini.utils.parse_urdf_for_kinematics.get_data`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/parse_urdf_for_kinematics.py#L17)**

Gera o arquivo `urdf_kinematics.json`.
