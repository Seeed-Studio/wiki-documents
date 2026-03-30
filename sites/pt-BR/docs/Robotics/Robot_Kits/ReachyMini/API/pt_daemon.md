---
description: Referência completa da API para o daemon do Reachy Mini incluindo classes centrais do daemon, classes de backend, utilitários do daemon, modelos de app e roteadores de app.
title: Referência da API do Daemon
slug: /reachymini_api_daemon
keywords:
  - api
  - daemon
  - backend
  - app models
  - app routers
  - fastapi
  - rest
  - websocket
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_daemon/
---
# Daemon

## Classes Centrais do Daemon

### `reachy_mini.daemon.daemon.Daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L37)**

Daemon para o robô Reachy Mini simulado ou real.

Executa o servidor com o backend apropriado (Mujoco para simulação ou RobotBackend para hardware real).

### Métodos

#### `restart`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L366)**

Reinicia o daemon do Reachy Mini.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `sim` | `bool` | Se True, executa em modo de simulação usando Mujoco. Padrão é None (usa o valor anterior). |
| `mockup_sim` | `bool` | Se True, executa em modo de simulação leve (sem MuJoCo). Padrão é None (usa o valor anterior). |
| `serialport` | `str` | Porta serial para motores reais. Padrão é None (usa o valor anterior). |
| `scene` | `str` | Nome da cena a ser carregada no modo de simulação ("empty" ou "minimal"). Padrão é None (usa o valor anterior). |
| `headless` | `bool` | Se True, executa o Mujoco em modo headless (sem GUI). Padrão é None (usa o valor anterior). |
| `use_audio` | `bool` | Se True, habilita áudio. Padrão é None (usa o valor anterior). |
| `localhost_only` | `bool` | Se True, restringe o servidor apenas a clientes localhost. Padrão é None (usa o valor anterior). |
| `wake_up_on_start` | `bool` | Se True, “acorda” o Reachy Mini na inicialização. Padrão é None (não acorda). |
| `goto_sleep_on_stop` | `bool` | Se True, coloca o Reachy Mini para “dormir” ao parar. Padrão é None (não coloca para dormir). |

**Retorna:**

| Type | Description |
|------|-------------|
| `DaemonState` | O estado atual do daemon após tentar reiniciá‑lo. |

---

#### `run4ever`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L462)**

Executa o daemon do Reachy Mini indefinidamente.

Primeiro, inicia o daemon, depois continua verificando o status e permite um desligamento gracioso na interrupção do usuário (Ctrl+C).

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `sim` | `bool` | Se True, executa em modo de simulação usando Mujoco. Padrão é False. |
| `mockup_sim` | `bool` | Se True, executa em modo de simulação leve (sem MuJoCo). Padrão é False. |
| `serialport` | `str` | Porta serial para motores reais. Padrão é "auto", que tentará encontrar a porta automaticamente. |
| `scene` | `str` | Nome da cena a ser carregada no modo de simulação ("empty" ou "minimal"). Padrão é "empty". |
| `localhost_only` | `bool` | Se True, restringe o servidor apenas a clientes localhost. Padrão é True. |
| `wake_up_on_start` | `bool` | Se True, “acorda” o Reachy Mini na inicialização. Padrão é True. |
| `goto_sleep_on_stop` | `bool` | Se True, coloca o Reachy Mini para “dormir” ao parar. Padrão é True. |
| `check_collision` | `bool` | Se True, habilita verificação de colisão. Padrão é False. |
| `kinematics_engine` | `str` | Motor de cinemática a ser usado. Padrão é "AnalyticalKinematics". |
| `headless` | `bool` | Se True, executa o Mujoco em modo headless (sem GUI). Padrão é False. |
| `use_audio` | `bool` | Se True, habilita áudio. Padrão é True. |

---

#### `start`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L144)**

Inicia o daemon do Reachy Mini.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `sim` | `bool` | Se True, executa em modo de simulação usando Mujoco. Padrão é False. |
| `mockup_sim` | `bool` | Se True, executa em modo de simulação leve (sem MuJoCo). Padrão é False. |
| `serialport` | `str` | Porta serial para motores reais. Padrão é "auto", que tentará encontrar a porta automaticamente. |
| `scene` | `str` | Nome da cena a ser carregada no modo de simulação ("empty" ou "minimal"). Padrão é "empty". |
| `localhost_only` | `bool` | Se True, restringe o servidor apenas a clientes localhost. Padrão é True. |
| `wake_up_on_start` | `bool` | Se True, “acorda” o Reachy Mini na inicialização. Padrão é True. |
| `check_collision` | `bool` | Se True, habilita verificação de colisão. Padrão é False. |
| `kinematics_engine` | `str` | Motor de cinemática a ser usado. Padrão é "AnalyticalKinematics". |
| `headless` | `bool` | Se True, executa o Mujoco em modo headless (sem GUI). Padrão é False. |
| `use_audio` | `bool` | Se True, habilita áudio. Padrão é True. |
| `hardware_config_filepath` | `str \| None` | Caminho para o arquivo YAML de configuração de hardware. Padrão é None. |

**Retorna:**

| Type | Description |
|------|-------------|
| `DaemonState` | O estado atual do daemon após tentar iniciá‑lo. |

---

#### `status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L436)**

Obtém o status atual do daemon do Reachy Mini.

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L287)**

Para o daemon do Reachy Mini.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `goto_sleep_on_stop` | `bool` | Se True, coloca o Reachy Mini para “dormir” ao parar. Padrão é True. |

**Retorna:**

| Type | Description |
|------|-------------|
| `DaemonState` | O estado atual do daemon após tentar pará‑lo. |

---

### `reachy_mini.daemon.daemon.DaemonState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L591)**

Enum que representa o estado do daemon do Reachy Mini.

---

### `reachy_mini.daemon.daemon.DaemonStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L603)**

Dataclass que representa o status do daemon do Reachy Mini.

---

## Classes de Backend

### Backend Abstrato

#### `reachy_mini.daemon.backend.abstract.MotorControlMode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/abstract.py#L43)**

Enum para modos de controle de motor.

---

### Backend do Robô

#### `reachy_mini.daemon.backend.robot.RobotBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L28)**

Backend de robô real para o Reachy Mini.

### Métodos

#### `close`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L316)**

Fecha a conexão com o controlador de motores e libera recursos.

---

#### `compensate_head_gravity`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L513)**

Calcula as correntes necessárias para compensar a gravidade.

---

#### `disable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L336)**

Desativa os motores desligando o torque.

---

#### `enable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L329)**

Ativa os motores ligando o torque.

---

#### `get_all_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L438)**

Obtém as posições atuais das juntas do robô.

**Retorna:**

| Type | Description |
|------|-------------|
| `tuple` | Uma tupla contendo duas listas – a primeira lista é para as posições das juntas da cabeça e a segunda para as posições das juntas das antenas. |

---

#### `get_imu_data`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L477)**

Obtém os dados atuais da IMU (acelerômetro, giroscópio, quaternions, temperatura).

**Retorna:**

| Type | Description |
|------|-------------|
| `dict \| None` | Dicionário com as chaves 'accelerometer', 'gyroscope', 'quaternion' e 'temperature', ou None se a IMU não estiver disponível. |

---

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L466)**

Obtém as posições atuais das juntas das antenas.

**Retorna:**

| Type | Description |
|------|-------------|
| `list` | Uma lista de posições de juntas para as antenas. |

---

#### `get_present_head_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L455)**

Obtém as posições atuais das juntas da cabeça.

**Retorna:**

| Type | Description |
|------|-------------|
| `list` | Uma lista de posições de juntas para a cabeça, incluindo a rotação do corpo. |

---

#### `get_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L323)**

Obtém o status atual do backend do robô.

---

#### `read_hardware_errors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L614)**

Lê erros de hardware do controlador de motores.

---

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L136)**

Executa o loop de controle para o backend do robô.

Este método atualiza continuamente o controlador de motores em uma frequência especificada. Ele lê as posições das juntas, atualiza o controlador de motores e publica as posições das juntas. Também lida com erros e tenta novamente caso o controlador de motores não responda.

---

#### `set_antennas_operation_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L398)**

Altera o modo de operação dos motores das antenas.

:::warning

Este método não funciona bem com os motores feetech atuais, pois eles não suportam controle de torque. Portanto, o método desativa as antenas quando em modo de controle de torque.

:::

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `int` | O modo de operação para os motores das antenas (0: controle de torque, 3: controle de posição, 5: controle de posição baseado em corrente). |

---

#### `set_head_operation_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L343)**

Altera o modo de operação dos motores da cabeça.

Os modos de operação podem ser:
- 0: controle de torque
- 3: controle de posição
- 5: controle de posição baseado em corrente

:::warning

Este método não funciona bem com os motores Feetech atuais (rotação do corpo), pois eles não suportam controle de torque. Portanto, o método desativa as antenas quando está em modo de controle de torque. Os motores Dynamixel usados para a cabeça suportam controle de torque, então este método funciona como esperado.

:::

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `int` | O modo de operação para os motores da cabeça. |

---

#### `set_motor_torque_ids`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L579)**

Define o estado de torque para nomes de motores específicos.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `ids` | `list[int]` | Lista de IDs de motores para definir o estado de torque. |
| `on` | `bool` | True para habilitar o torque, False para desabilitar. |

---

### `reachy_mini.daemon.backend.robot.RobotBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L678)**

Status do Backend do Robô.

---

### Backend MuJoCo

#### `reachy_mini.daemon.backend.mujoco.MujocoMockupBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mujoco/__init__.py#L15)**

Classe mockup para evitar erros de importação quando o MuJoCo não está instalado.

---

#### `reachy_mini.daemon.backend.mujoco.MujocoMockupBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mujoco/__init__.py#L28)**

Classe mockup para evitar erros de importação quando o MuJoCo não está instalado.

---

### Backend de Simulação Mockup

#### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L21)**

Reachy Mini simulado leve sem MuJoCo.

Este backend fornece uma simulação simples em que as posições alvo são aplicadas imediatamente, sem simulação física. Os aplicativos acessam a webcam/microfone diretamente (não via streaming UDP).

### Métodos

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L149)**

Obtém as posições articulares atuais das antenas.

---

#### `get_present_head_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L143)**

Obtém as posições articulares atuais da cabeça.

---

#### `get_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L139)**

Obtém o status do backend.

---

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L68)**

Executa o loop de simulação.

No modo mockup-sim, as posições alvo são aplicadas imediatamente.

---

#### `set_motor_torque_ids`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L163)**

Define o estado de torque do motor para nomes de motores específicos.

:::note

No-op no modo mockup-sim.

:::

---

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L172)**

Status do backend MockupSim.

---

## Utilitários do Daemon

### `reachy_mini.daemon.utils.convert_enum_to_dict`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L164)**

Converte uma dataclass contendo Enums em um dicionário com valores de enum.

---

### `reachy_mini.daemon.utils.find_serial_port`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L101)**

Encontra a porta serial para o Reachy Mini com base em VID e PID ou a UART do Raspberry Pi para a versão sem fio.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `wireless_version` | `bool` | Se deve procurar a versão sem fio usando a UART do Raspberry Pi. |
| `vid` | `str` | ID do fornecedor do dispositivo (por exemplo, "1a86"). |
| `pid` | `str` | ID do produto do dispositivo (por exemplo, "55d3"). |
| `pi_uart` | `str` | Caminho para o dispositivo UART do Raspberry Pi (por exemplo, "/dev/ttyAMA3"). |

---

### `reachy_mini.daemon.utils.get_ip_address`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L129)**

Obtém o endereço IP de uma interface de rede específica (Linux e Windows).

---

## App

### Modelos

#### `reachy_mini.daemon.app.models.Matrix4x4Pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L14)**

Representa uma pose 3D por sua matriz de transformação 4x4 (a translação é expressa em metros).

---

#### `reachy_mini.daemon.app.models.XYZRPYPose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L68)**

Representa uma pose 3D usando posição (x, y, z) em metros e orientação (ângulos de roll, pitch, yaw) em radianos.

---

#### `reachy_mini.daemon.app.models.FullBodyTarget`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L116)**

Representa o corpo completo, incluindo a pose da cabeça e as articulações das antenas.

---

#### `reachy_mini.daemon.app.models.DoAInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L144)**

Informações de direção de chegada do array de microfones.

---

#### `reachy_mini.daemon.app.models.FullState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L151)**

Representa o estado completo do robô, incluindo todas as posições articulares e poses.

---

### Dependências

#### `reachy_mini.daemon.app.dependencies.get_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L10)**

Obtém o daemon como dependência de requisição.

---

#### `reachy_mini.daemon.app.dependencies.get_backend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L16)**

Obtém o backend como dependência de requisição.

---

#### `reachy_mini.daemon.app.dependencies.get_app_manager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L27)**

Obtém o gerenciador do app como dependência de requisição.

---

#### `reachy_mini.daemon.app.dependencies.ws_get_backend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L33)**

Obtém o backend como dependência de websocket.

---

### Jobs

#### `reachy_mini.daemon.app.bg_job_register.JobStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L15)**

Enum para status de job.

---

#### `reachy_mini.daemon.app.bg_job_register.JobInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L24)**

Modelo Pydantic para status de job de instalação.

---

#### `reachy_mini.daemon.app.bg_job_register.JobHandler`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L33)**

Handler para jobs em segundo plano.

---

#### `reachy_mini.daemon.app.bg_job_register.run_command`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L44)**

Inicia um job em segundo plano, com um logger personalizado e retorna seu job_id.

---

#### `reachy_mini.daemon.app.bg_job_register.get_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L93)**

Obtém as informações de um job pelo seu ID.

---

#### `reachy_mini.daemon.app.bg_job_register.ws_poll_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L103)**

Endpoint WebSocket para transmitir logs de jobs em tempo real.

---

### Aplicação Principal

#### `reachy_mini.daemon.app.main.Args`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L54)**

Argumentos para configurar o daemon do Reachy Mini.

---

#### `reachy_mini.daemon.app.main.create_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L91)**

Cria e configura a aplicação FastAPI.

---

#### `reachy_mini.daemon.app.main.run_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L264)**

Executa o app FastAPI com Uvicorn.

---

#### `reachy_mini.daemon.app.main`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L383)**

Executa o app FastAPI com Uvicorn.

---

## Roteadores do App

### Roteador do Daemon

#### `reachy_mini.daemon.app.routers.daemon.start_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L19)**

Inicia o daemon.

---

#### `reachy_mini.daemon.app.routers.daemon.stop_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L48)**

Para o daemon, opcionalmente colocando o robô em modo de suspensão.

---

#### `reachy_mini.daemon.app.routers.daemon.restart_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L64)**

Reinicie o daemon.

---

#### `reachy_mini.daemon.app.routers.daemon.get_daemon_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L80)**

Obtenha o status atual do daemon.

---

### Roteador de Estado

#### `reachy_mini.daemon.app.routers.state.get_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L21)**

Obtenha a pose atual da cabeça.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `use_pose_matrix` | `bool` | Se deve usar a representação de matriz de pose (4x4 achatada) ou a representação de translação + ângulos de Euler (x, y, z, roll, pitch, yaw). |
| `backend` | `Backend` | A instância do backend. |

**Retorna:**

| Tipo | Descrição |
|------|-------------|
| `AnyPose` | A pose atual da cabeça. |

---

#### `reachy_mini.daemon.app.routers.state.get_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L39)**

Obtenha o yaw atual do corpo (em radianos).

---

#### `reachy_mini.daemon.app.routers.state.get_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L47)**

Obtenha as posições atuais das juntas da antena (em radianos) - (esquerda, direita).

---

#### `reachy_mini.daemon.app.routers.state.get_doa`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L57)**

Obtenha a Direção de Chegada a partir do arranjo de microfones.

Retorna o ângulo em radianos (0=esquerda, π/2=frente, π=direita) e o status de detecção de fala. Retorna None se o dispositivo de áudio não estiver disponível.

---

#### `reachy_mini.daemon.app.routers.state.get_full_state`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L74)**

Obtenha o estado completo do robô, com campos opcionais.

---

#### `reachy_mini.daemon.app.routers.state.ws_full_state`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L130)**

Endpoint WebSocket para transmitir o estado completo do robô.

---

### Roteador de Motores

#### `reachy_mini.daemon.app.routers.motors.get_motor_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/motors.py#L27)**

Obtenha o status atual dos motores.

---

#### `reachy_mini.daemon.app.routers.motors.set_motor_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/motors.py#L33)**

Defina o modo de controle do motor.

---

### Roteador de Movimento

#### `reachy_mini.daemon.app.routers.move.get_running_moves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L131)**

Obtenha uma lista das tarefas de movimento em execução no momento.

---

#### `reachy_mini.daemon.app.routers.move.goto`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L137)**

Solicite um movimento para um alvo específico.

---

#### `reachy_mini.daemon.app.routers.move.play_wake_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L152)**

Solicite que o robô acorde.

---

#### `reachy_mini.daemon.app.routers.move.play_goto_sleep`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L158)**

Solicite que o robô vá dormir.

---

#### `reachy_mini.daemon.app.routers.move.list_recorded_move_dataset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L164)**

Liste os movimentos gravados disponíveis em um conjunto de dados.

---

#### `reachy_mini.daemon.app.routers.move.play_recorded_move_dataset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L177)**

Solicite que o robô execute um movimento gravado predefinido de um conjunto de dados.

---

#### `reachy_mini.daemon.app.routers.move.stop_move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L195)**

Pare uma tarefa de movimento em execução.

---

#### `reachy_mini.daemon.app.routers.move.set_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L216)**

Rota POST para definir um único FullBodyTarget.

---

#### `reachy_mini.daemon.app.routers.move.ws_move_updates`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L201)**

Rota WebSocket para transmitir atualizações de movimento.

---

### Roteador de Apps

#### `reachy_mini.daemon.app.routers.apps.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L46)**

Liste os aplicativos disponíveis (incluindo os não instalados).

---

#### `reachy_mini.daemon.app.routers.apps.list_all_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L55)**

Liste todos os aplicativos disponíveis (incluindo os não instalados).

---

#### `reachy_mini.daemon.app.routers.apps.install_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L63)**

Instale um novo aplicativo por meio de suas informações (em segundo plano, retorna job_id).

---

#### `reachy_mini.daemon.app.routers.apps.remove_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L78)**

Remova um aplicativo instalado pelo seu nome (em segundo plano, retorna job_id).

---

#### `reachy_mini.daemon.app.routers.apps.job_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L91)**

Obtenha o status/logs de uma tarefa.

---

#### `reachy_mini.daemon.app.routers.apps.ws_apps_manager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L101)**

Rota WebSocket para transmitir em tempo real o status/logs de uma tarefa, enviando atualizações assim que novos logs estiverem disponíveis.

---

#### `reachy_mini.daemon.app.routers.apps.start_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L109)**

Inicie um aplicativo pelo seu nome.

---

#### `reachy_mini.daemon.app.routers.apps.restart_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L121)**

Reinicie o aplicativo atualmente em execução.

---

#### `reachy_mini.daemon.app.routers.apps.stop_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L132)**

Pare o aplicativo atualmente em execução.

---

#### `reachy_mini.daemon.app.routers.apps.current_app_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L143)**

Obtenha o status do aplicativo atualmente em execução, se houver.

---

#### `reachy_mini.daemon.app.routers.apps.install_private_space`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L157)**

Instale um espaço privado do HuggingFace.

Requer que o token HF seja armazenado antes via /api/hf-auth/save-token.

---

### Roteador de Atualização

#### `reachy_mini.daemon.app.routers.update.available`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L32)**

Verifique se há uma atualização disponível para o Reachy Mini Wireless.

---

#### `reachy_mini.daemon.app.routers.update.start_update`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L58)**

Inicie o processo de atualização para a versão do Reachy Mini Wireless.

---

#### `reachy_mini.daemon.app.routers.update.get_update_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L117)**

Obtenha as informações de uma tarefa de atualização.

---

#### `reachy_mini.daemon.app.routers.update.websocket_logs`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L126)**

Endpoint WebSocket para transmitir logs de atualização em tempo real.

---

### Roteador de Cache

#### `reachy_mini.daemon.app.routers.cache.clear_huggingface_cache`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/cache.py#L13)**

Limpe o diretório de cache do HuggingFace.

---

#### `reachy_mini.daemon.app.routers.cache.reset_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/cache.py#L32)**

Remova o diretório do ambiente virtual das aplicações.

---

### Roteador de Cinemática

#### `reachy_mini.daemon.app.routers.kinematics.get_kinematics_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L29)**

Obtenha as informações atuais da cinemática.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_urdf`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L42)**

Obtenha a representação URDF do robô.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_stl_file`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L48)**

Obtenha o caminho para um arquivo de ativo STL.

---

### Roteador de Volume

#### `reachy_mini.daemon.app.routers.volume.get_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L79)**

Obtenha o nível atual de volume de saída.

---

#### `reachy_mini.daemon.app.routers.volume.set_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L86)**

Defina o nível de volume de saída e reproduza um som de teste.

---

#### `reachy_mini.daemon.app.routers.volume.play_test_sound`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L107)**

Reproduza um som de teste.

---

#### `reachy_mini.daemon.app.routers.volume.get_microphone_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L139)**

Obtenha o nível atual de volume de entrada do microfone.

---

#### `reachy_mini.daemon.app.routers.volume.set_microphone_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L146)**

Defina o nível de volume de entrada do microfone.

---

### Roteador de Logs

#### `reachy_mini.daemon.app.routers.logs.websocket_daemon_logs`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/logs.py#L15)**

Endpoint WebSocket para transmitir em tempo real os logs do journalctl para o serviço reachy-mini-daemon.

---

### Roteador HF Auth

#### `reachy_mini.daemon.app.routers.hf_auth.save_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L33)**

Salve o token HuggingFace após a validação.

---

#### `reachy_mini.daemon.app.routers.hf_auth.get_auth_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L49)**

Verifique se o usuário está autenticado com o HuggingFace.

---

#### `reachy_mini.daemon.app.routers.hf_auth.delete_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L79)**

Exclua o token HuggingFace armazenado.
