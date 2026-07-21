---
description: Referência da API do daemon para o Reachy Mini, cobrindo classes principais do daemon, bloqueio de app do robô, classes de backend e todos os endpoints do roteador.
title: Daemon API
slug: /reachymini_api_daemon
keywords:
  - daemon
  - api
  - backend
  - app lock
  - router
  - motors
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_daemon/
---

# Daemon

## Classes principais do Daemon

### `reachy_mini.daemon.daemon.Daemon`

Classe principal do daemon para controlar o robô Reachy Mini.

### Métodos

#### `start`

Inicia o daemon e todos os seus componentes.

---

#### `stop`

Para o daemon e todos os seus componentes.

---

#### `restart`

Reinicia o daemon.

---

#### `get_status`

Obtém o status atual do daemon.

**Retorna:**

`DaemonStatus` — Status atual do daemon.

---

#### `is_running`

Verifica se o daemon está em execução.

**Retorna:**

`bool` — True se o daemon estiver em execução.

---

### `reachy_mini.daemon.daemon.DaemonState`

Enum que representa o estado do daemon.

### Valores

| Value | Description |
|-------|-------------|
| `STOPPED` | O daemon não está em execução. |
| `STARTING` | O daemon está iniciando. |
| `RUNNING` | O daemon está em execução normal. |
| `STOPPING` | O daemon está sendo desligado. |
| `ERROR` | O daemon encontrou um erro. |

---

### `reachy_mini.daemon.daemon.DaemonStatus`

Objeto de status contendo o estado e informações do daemon.

### Propriedades

| Property | Type | Description |
|----------|------|-------------|
| `state` | `DaemonState` | Estado atual do daemon. |
| `uptime` | `float` | Tempo desde que o daemon foi iniciado, em segundos. |
| `version` | `str` | String de versão do daemon. |
| `robot_connected` | `bool` | Indica se um robô está conectado. |

---

## Bloqueio de App do Robô

O *app lock* do robô é a única fonte de verdade do daemon sobre qual
app gerenciado atualmente detém o robô. Ele serializa os dois pontos de
entrada gerenciados — apps Python locais lançados por :class:`AppManager` e
clientes WebRTC remotos roteados através do relay central de sinalização.

Ele **não** controla todos os caminhos de código que podem dirigir o robô: clientes
SDK que falam diretamente com o daemon via LAN/WebSocket o contornam.
O nome usa "app" deliberadamente para refletir esse escopo mais restrito.

### Modelo de concorrência

Dois pontos de entrada gerenciados podem abrir uma sessão com o robô:

1. **Caminho local** — um app Python lançado via
   ``POST /api/apps/start``. É executado como um subprocesso do daemon,
   falando diretamente com o backend.
2. **Caminho remoto** — um cliente de navegador autenticado através do
   servidor central de sinalização do HuggingFace, roteado para o robô via
   WebRTC. Manipulado por ``CentralSignalingRelay`` em sua própria thread.

Sem coordenação, ambos os caminhos podem pegar o robô ao mesmo tempo
e disputar comandos de motor, câmera e áudio. :class:`RobotAppLock`
previne isso com três estados mutuamente exclusivos:

- ``free`` — nenhum app gerenciado detém o slot.
- ``local_app(name)`` — um app Python está em execução.
- ``remote_session(name)`` — um cliente WebRTC remoto está conectado.

**Regras de aquisição:**

- O caminho local usa :meth:`RobotAppLock.acquire_local_evicting_remote`.
  Se uma sessão remota estiver ativa, o lock é transicionado
  atomicamente para ``local_app`` e o relay é instruído a enviar
  ``endSession`` para o par remoto e para o GStreamer local, para que a
  conexão WebRTC existente seja encerrada de forma limpa. Se outro app
  Python já detiver o lock, a aquisição gera ``RuntimeError``.
- O caminho remoto usa :meth:`RobotAppLock.try_acquire_remote`. Isso
  falha rapidamente (retorna ``False``) sempre que o lock não está
  ``free`` — sessões remotas recebidas são recusadas com
  ``{"type": "endSession", "reason": "robot_busy_local_app"}``.

**Regras de liberação:**

- :meth:`RobotAppLock.release_local` é chamado a partir do bloco
  ``finally`` do monitor de subprocesso, então saídas limpas, falhas,
  ``SIGKILL``, OOM e cancelamento de tarefa todos liberam o lock.
- :meth:`RobotAppLock.release_remote` é chamado de todos os
  manipuladores de ``endSession`` (em ambas as direções), de
  ``_close_connections`` em desconexão/reconexão, e do ``stop()`` do relay.
  Todas as chamadas de liberação são idempotentes — elas não fazem nada se o
  lock não estiver no estado correspondente.

**Considerações entre threads:** o estado do lock é protegido por um
``threading.Lock``. O callback de expulsão é registrado pelo relay
e invocado pelo AppManager a partir do loop principal do asyncio, mas
despacha o encerramento real da sessão para o próprio event loop do relay via
``asyncio.run_coroutine_threadsafe``. O AppManager aguarda o encerramento
antes de criar o subprocesso Python, para que o par remoto tenha
liberado seus handles de mídia antes que o app local os abra.

### Referência da API

### `reachy_mini.daemon.robot_app_lock.RobotAppLock`

Bloqueio de aplicação do robô para gerenciar o acesso ao robô.

### Métodos

#### `acquire_local_evicting_remote`

Adquire o lock para um app Python local, expulsando qualquer sessão remota.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nome do app que está adquirindo o lock. |

**Retorna:**

`bool` — True se o lock foi adquirido com sucesso.

---

#### `try_acquire_remote`

Tenta adquirir o lock para uma sessão remota WebRTC.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `session_name` | `str` | Nome da sessão que está adquirindo o lock. |

**Retorna:**

`bool` — True se o lock foi adquirido com sucesso.

---

#### `release_local`

Libera o lock de um app Python local.

---

#### `release_remote`

Libera o lock de uma sessão remota.

---

#### `get_status`

Obtém o status atual do bloqueio de app do robô.

**Retorna:**

`RobotAppLockStatus` — Status atual do lock.

---

#### `is_free`

Verifica se o lock está livre.

**Retorna:**

`bool` — True se nenhum app detiver o lock.

---

#### `is_local_app`

Verifica se um app local atualmente detém o lock.

**Retorna:**

`bool` — True se um app local detiver o lock.

---

#### `is_remote_session`

Verifica se uma sessão remota atualmente detém o lock.

**Retorna:**

`bool` — True se uma sessão remota detiver o lock.

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockState`

Enum que representa o estado do bloqueio de app do robô.

### Valores

| Value | Description |
|-------|-------------|
| `free` | Nenhum app gerenciado detém o slot. |
| `local_app` | Um app Python está em execução. |
| `remote_session` | Um cliente WebRTC remoto está conectado. |

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockStatus`

Objeto de status contendo o estado e informações do bloqueio de app do robô.

### Propriedades

| Property | Type | Description |
|----------|------|-------------|
| `state` | `RobotAppLockState` | Estado atual do lock. |
| `holder_name` | `str \| None` | Nome do detentor atual (se houver). |
| `holder_type` | `str \| None` | Tipo de detentor ("local_app" ou "remote_session"). |

---

## Classes de Backend

### Backend abstrato

### `reachy_mini.daemon.backend.abstract.MotorControlMode`

Enum que representa o modo de controle dos motores.

### Valores

| Value | Description |
|-------|-------------|
| `enabled` | Os motores estão totalmente habilitados e respondendo a comandos. |
| `disabled` | Os motores estão desabilitados e não respondem a comandos. |
| `gravity_compensation` | Os motores estão em modo de compensação de gravidade. |

---

### Backend do Robô

### `reachy_mini.daemon.backend.robot.RobotBackend`

Backend para controlar o robô físico real.

### Métodos

#### `connect`

Conecta ao hardware do robô.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `port` | `str` | Porta serial à qual se conectar. |

---

#### `disconnect`

Desconecta do hardware do robô.

---

#### `get_motor_status`

Obtém o status de todos os motores.

**Retorna:**

`Dict` — Dicionário de status dos motores.

---

#### `set_motor_mode`

Define o modo de controle para os motores.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `MotorControlMode` | O modo de controle a ser definido. |

---

#### `send_position_command`

Envia comandos de posição para os motores.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `positions` | `Dict` | Dicionário de posições dos motores. |

---

#### `get_joint_positions`

Obtém as posições atuais das juntas do robô.

**Retorna:**

`Dict` — Dicionário das posições atuais das juntas.

---

### `reachy_mini.daemon.backend.robot.RobotBackendStatus`

Objeto de status contendo o estado e informações do backend do robô.

### Propriedades

| Property | Type | Description |
|----------|------|-------------|
| `connected` | `bool` | Indica se o backend está conectado ao robô. |
| `motor_mode` | `MotorControlMode` | Modo de controle atual dos motores. |
| `last_update` | `float` | Timestamp da última atualização. |

---

### Backend MuJoCo

### `reachy_mini.daemon.backend.mujoco.MujocoBackend`

Backend para simulação MuJoCo do robô.

### Métodos

#### `load_model`

Carrega o modelo MuJoCo do robô.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `model_path` | `str` | Caminho para o arquivo de modelo MuJoCo. |

---

#### `step`

Avança a simulação.

---

#### `get_state`

Obtém o estado atual da simulação.

**Retorna:**

`Dict` — Estado atual da simulação.

---

#### `set_control`

Define alvos de controle para a simulação.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `targets` | `Dict` | Dicionário de alvos de controle. |

---

#### `reset`

Redefine a simulação para o estado inicial.

---

### `reachy_mini.daemon.backend.mujoco.MujocoBackendStatus`

Objeto de status contendo o estado e informações do backend MuJoCo.

### Propriedades

| Property | Type | Description |
|----------|------|-------------|
| `model_loaded` | `bool` | Indica se um modelo está carregado. |
| `simulation_time` | `float` | Tempo atual de simulação. |
| `real_time_factor` | `float` | Fator de tempo real da simulação. |

---

### Backend de Simulação Mockup

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackend`

Backend para simulação mockup (sem física real).

### Métodos

#### `start`

Inicia a simulação mockup.

---

#### `stop`

Para a simulação mockup.

---

#### `get_state`

Obtém o estado atual do mockup.

**Retorna:**

`Dict` — Estado atual do mockup.

---

#### `set_positions`

Define posições alvo para o mockup.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `positions` | `Dict` | Dicionário de posições alvo. |

---

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus`

Objeto de status contendo o estado e as informações da simulação mockup.

### Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `running` | `bool` | Indica se o mockup está em execução. |
| `positions` | `Dict` | Posições alvo atuais. |

---

## Utilitários do Daemon

### `reachy_mini.daemon.utils.find_serial_port`

Encontra a porta serial conectada ao robô Reachy Mini.

**Retorna:**

`str` — Caminho para a porta serial ou None se não for encontrada.

---

### `reachy_mini.daemon.utils.get_ip_address`

Obtém o endereço IP da máquina atual.

**Retorna:**

`str` — String de endereço IP.

---

## App

### Modelos

### `reachy_mini.daemon.app.models.Matrix4x4Pose`

Representação de pose em matriz 4x4 para posicionamento do robô.

### Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `matrix` | `np.ndarray` | Matriz de transformação 4x4. |
| `translation` | `np.ndarray` | Vetor de translação (x, y, z). |
| `rotation` | `np.ndarray` | Matriz de rotação 3x3. |

---

### `reachy_mini.daemon.app.models.XYZRPYPose`

Representação de pose usando XYZ+RPY (posição e ângulos de Euler).

### Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `x` | `float` | Posição X em metros. |
| `y` | `float` | Posição Y em metros. |
| `z` | `float` | Posição Z em metros. |
| `roll` | `float` | Ângulo de roll em radianos. |
| `pitch` | `float` | Ângulo de pitch em radianos. |
| `yaw` | `float` | Ângulo de yaw em radianos. |

---

### `reachy_mini.daemon.app.models.FullBodyTarget`

Pose alvo de corpo inteiro incluindo cabeça e antenas.

### Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `head` | `Matrix4x4Pose \| None` | Pose alvo da cabeça. |
| `antennas` | `List[float] \| None` | Posições alvo das antenas. |
| `body_yaw` | `float \| None` | Ângulo alvo de yaw do corpo. |

---

### `reachy_mini.daemon.app.models.DoAInfo`

Informações de direção de chegada (Direction of Arrival) para áudio.

### Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `doa_angle` | `float` | Ângulo de direção de chegada em graus. |
| `energy` | `float` | Nível de energia do áudio. |

---

### `reachy_mini.daemon.app.models.FullState`

Estado completo do robô incluindo todos os sensores e motores.

### Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `joint_positions` | `Dict` | Posições atuais das juntas. |
| `head_pose` | `Matrix4x4Pose` | Pose atual da cabeça. |
| `antennas` | `List[float]` | Posições atuais das antenas. |
| `body_yaw` | `float` | Ângulo atual de yaw do corpo. |
| `motor_mode` | `MotorControlMode` | Modo de controle de motor atual. |

---

### Dependências

### `reachy_mini.daemon.app.dependencies.get_daemon`

Provedor de dependência para a instância do Daemon.

**Retorna:**

`Daemon` — A instância singleton do Daemon.

---

### `reachy_mini.daemon.app.dependencies.get_backend`

Provedor de dependência para o backend atual.

**Retorna:**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — A instância atual do backend.

---

### `reachy_mini.daemon.app.dependencies.get_app_manager`

Provedor de dependência para a instância do AppManager.

**Retorna:**

`AppManager` — A instância do AppManager.

---

### `reachy_mini.daemon.app.dependencies.ws_get_backend`

Provedor de dependência WebSocket para o backend.

**Retorna:**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — A instância atual do backend.

---

### Jobs

### `reachy_mini.daemon.app.bg_job_register.JobStatus`

Enum que representa o status de um job em segundo plano.

### Valores

| Valor | Descrição |
|-------|-------------|
| `PENDING` | Job aguardando para iniciar. |
| `RUNNING` | Job em execução no momento. |
| `COMPLETED` | Job concluído com sucesso. |
| `FAILED` | Job falhou com um erro. |
| `CANCELLED` | Job foi cancelado. |

---

### `reachy_mini.daemon.app.bg_job_register.JobInfo`

Informações sobre um job em segundo plano.

### Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `id` | `str` | Identificador único do job. |
| `name` | `str` | Nome do job. |
| `status` | `JobStatus` | Status atual do job. |
| `created_at` | `float` | Timestamp de quando o job foi criado. |
| `started_at` | `float \| None` | Timestamp de quando o job foi iniciado. |
| `completed_at` | `float \| None` | Timestamp de quando o job foi concluído. |
| `error` | `str \| None` | Mensagem de erro se o job falhou. |

---

### `reachy_mini.daemon.app.bg_job_register.JobHandler`

Handler para gerenciar a execução de jobs em segundo plano.

### Métodos

#### `start`

Inicia o job handler.

---

#### `stop`

Encerra o job handler.

---

#### `submit`

Submete um novo job para execução.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `job_id` | `str` | Identificador único do job. |
| `func` | `Callable` | Função a ser executada. |
| `args` | `List` | Argumentos posicionais para a função. |
| `kwargs` | `Dict` | Argumentos nomeados para a função. |

---

#### `cancel`

Cancela um job em execução.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `job_id` | `str` | Identificador único do job. |

---

#### `get_status`

Obtém o status de um job.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `job_id` | `str` | Identificador único do job. |

**Retorna:**

`JobInfo` — Status atual do job.

---

### `reachy_mini.daemon.app.bg_job_register.run_command`

Executa um comando de shell como um job em segundo plano.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `command` | `str` | Comando a ser executado. |
| `job_id` | `str` | Identificador único do job. |

**Retorna:**

`JobInfo` — Informações sobre o job iniciado.

---

### `reachy_mini.daemon.app.bg_job_register.get_info`

Obtém informações sobre um job específico.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `job_id` | `str` | Identificador único do job. |

**Retorna:**

`JobInfo \| None` — Informações do job se encontrado.

---

### `reachy_mini.daemon.app.bg_job_register.ws_poll_info`

Endpoint WebSocket para consultar informações de jobs.

---

### Aplicação Principal

### `reachy_mini.daemon.app.main.Args`

Argumentos de linha de comando para a aplicação do daemon.

### Propriedades

| Propriedade | Tipo | Descrição |
|----------|------|-------------|
| `host` | `str` | Host ao qual vincular (padrão: "0.0.0.0"). |
| `port` | `int` | Porta à qual vincular (padrão: 8000). |
| `backend` | `str` | Tipo de backend a ser usado ("robot", "mujoco", "mockup"). |
| `debug` | `bool` | Habilita o modo de depuração. |

---

### `reachy_mini.daemon.app.main.create_app`

Cria a aplicação FastAPI.

**Retorna:**

`FastAPI` — A aplicação FastAPI configurada.

---

### `reachy_mini.daemon.app.main.run_app`

Executa a aplicação FastAPI.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `app` | `FastAPI` | A aplicação FastAPI a ser executada. |
| `host` | `str` | Host ao qual vincular. |
| `port` | `int` | Porta à qual vincular. |

---

### `reachy_mini.daemon.app.main.main`

Ponto de entrada principal para a aplicação do daemon.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `args` | `Args` | Argumentos de linha de comando. |

---

## Roteadores da App

### Roteador do Daemon

#### `reachy_mini.daemon.app.routers.daemon.start_daemon`

Inicia o serviço do daemon.

**Retorna:**

`Dict` — Mensagem de status indicando que o daemon foi iniciado.

---

#### `reachy_mini.daemon.app.routers.daemon.stop_daemon`

Encerra o serviço do daemon.

**Retorna:**

`Dict` — Mensagem de status indicando que o daemon foi encerrado.

---

#### `reachy_mini.daemon.app.routers.daemon.restart_daemon`

Reinicia o serviço do daemon.

**Retorna:**

`Dict` — Mensagem de status indicando que o daemon foi reiniciado.

---

#### `reachy_mini.daemon.app.routers.daemon.get_daemon_status`

Obtém o status atual do daemon.

**Retorna:**

`DaemonStatus` — Status atual do daemon.

---

#### `reachy_mini.daemon.app.routers.daemon.get_robot_app_lock_status`

Obtém o status atual do bloqueio do aplicativo do robô.

**Retorna:**

`RobotAppLockStatus` — Status atual do bloqueio do aplicativo do robô.

---

### Roteador de Estado

#### `reachy_mini.daemon.app.routers.state.get_head_pose`

Obtém a pose atual da cabeça.

**Retorna:**

`Matrix4x4Pose` — Matriz de pose atual da cabeça.

---

#### `reachy_mini.daemon.app.routers.state.get_body_yaw`

Obtém o ângulo atual de yaw do corpo.

**Retorna:**

`float` — Yaw atual do corpo em radianos.

---

#### `reachy_mini.daemon.app.routers.state.get_antenna_joint_positions`

Obtém as posições atuais das juntas das antenas.

**Retorna:**

`List[float]` — Posições atuais das antenas em radianos.

---

#### `reachy_mini.daemon.app.routers.state.get_doa`

Obtém as informações atuais de direção de chegada.

**Retorna:**

`DoAInfo` — Informações atuais de DOA.

---

#### `reachy_mini.daemon.app.routers.state.get_full_state`

Obtém o estado completo do robô.

**Retorna:**

`FullState` — Estado completo atual do robô.

---

#### `reachy_mini.daemon.app.routers.state.ws_full_state`

Endpoint WebSocket para transmissão de atualizações completas de estado do robô.

---

### Roteador de Motores

#### `reachy_mini.daemon.app.routers.motors.get_motor_status`

Obtém o status de todos os motores.

**Retorna:**

`Dict` — Dicionário de status dos motores incluindo posição, velocidade e torque.

---

#### `reachy_mini.daemon.app.routers.motors.set_motor_mode`

Define o modo de controle dos motores.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `mode` | `str` | Modo de controle dos motores ("enabled", "disabled", "gravity_compensation"). |

**Retorna:**

`Dict` — Mensagem de status confirmando a alteração de modo.

---

### Roteador de Movimento

#### `reachy_mini.daemon.app.routers.move.get_running_moves`

Obtém a lista de movimentos em execução no momento.

**Retorna:**

`List[Dict]` — Lista de movimentos em execução com seus IDs e progresso.

---

#### `reachy_mini.daemon.app.routers.move.goto`

Envia um comando goto para mover o robô.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `head` | `List[List[float]]` | Matriz de pose da cabeça 4x4 (16 valores). |
| `antennas` | `List[float]` | Posições alvo das antenas [esquerda, direita] em radianos. |
| `body_yaw` | `float` | Yaw alvo do corpo em radianos. |
| `duration` | `float` | Duração do movimento em segundos. |
| `method` | `str` | Método de interpolação ("linear", "minjerk", "ease_in_out", "cartoon"). |

**Retornos:**

`Dict` — ID do movimento e status.

---

#### `reachy_mini.daemon.app.routers.move.play_wake_up`

Reproduz a animação de despertar para colocar o robô em estado pronto.

**Retornos:**

`Dict` — Mensagem de status confirmando que o despertar foi iniciado.

---

#### `reachy_mini.daemon.app.routers.move.play_goto_sleep`

Reproduz a animação de ir dormir para colocar o robô em posição de descanso.

**Retornos:**

`Dict` — Mensagem de status confirmando que o modo de descanso foi iniciado.

---

#### `reachy_mini.daemon.app.routers.move.list_recorded_move_dataset`

Lista os conjuntos de dados de movimentos gravados disponíveis.

**Retornos:**

`List[str]` — Lista de nomes de conjuntos de dados disponíveis.

---

#### `reachy_mini.daemon.app.routers.move.play_recorded_move_dataset`

Reproduz um movimento gravado a partir de um conjunto de dados.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `dataset` | `str` | Nome do conjunto de dados que contém o movimento. |
| `move_name` | `str` | Nome do movimento específico a ser reproduzido. |
| `initial_goto_duration` | `float` | Duração do movimento inicial até a posição de partida. |
| `sound` | `bool` | Se o som associado deve ser reproduzido. |

**Retornos:**

`Dict` — Mensagem de status confirmando que o movimento foi iniciado.

---

#### `reachy_mini.daemon.app.routers.move.stop_move`

Interrompe o movimento em execução no momento.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `move_id` | `str` | ID do movimento a ser interrompido. |

**Retornos:**

`Dict` — Mensagem de status confirmando que o movimento foi interrompido.

---

#### `reachy_mini.daemon.app.routers.move.set_target`

Define posições-alvo em tempo real para controle contínuo.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `List[List[float]]` | Matriz de pose da cabeça 4x4 (16 valores). |
| `antennas` | `List[float]` | Posições-alvo das antenas [esquerda, direita] em radianos. |
| `body_yaw` | `float` | Alvo de guinada do corpo em radianos. |

**Retornos:**

`Dict` — Mensagem de status confirmando que o alvo foi definido.

---

#### `reachy_mini.daemon.app.routers.move.ws_move_updates`

Endpoint WebSocket para transmissão contínua de atualizações de movimentos.

---

### Apps Router

#### `reachy_mini.daemon.app.routers.apps.list_available_apps`

Lista aplicativos disponíveis para instalação.

**Retornos:**

`List[Dict]` — Lista de aplicativos disponíveis com metadados.

---

#### `reachy_mini.daemon.app.routers.apps.list_all_available_apps`

Lista todos os aplicativos, incluindo instalados e disponíveis.

**Retornos:**

`List[Dict]` — Lista completa de todos os aplicativos.

---

#### `reachy_mini.daemon.app.routers.apps.install_app`

Instala um aplicativo a partir de uma fonte.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `source` | `str` | URL de origem ou caminho do aplicativo. |

**Retornos:**

`Dict` — Status da instalação e ID da tarefa.

---

#### `reachy_mini.daemon.app.routers.apps.remove_app`

Remove um aplicativo instalado.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nome do aplicativo a ser removido. |

**Retornos:**

`Dict` — Status da remoção.

---

#### `reachy_mini.daemon.app.routers.apps.job_status`

Obtém o status de uma tarefa de operação de aplicativo.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `job_id` | `str` | ID da tarefa a ser verificada. |

**Retornos:**

`JobInfo` — Status atual da tarefa.

---

#### `reachy_mini.daemon.app.routers.apps.ws_apps_manager`

Endpoint WebSocket para atualizações do gerenciador de aplicativos.

---

#### `reachy_mini.daemon.app.routers.apps.start_app`

Inicia um aplicativo instalado.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nome do aplicativo a ser iniciado. |

**Retornos:**

`Dict` — Status de inicialização e informações da sessão.

---

#### `reachy_mini.daemon.app.routers.apps.restart_app`

Reinicia um aplicativo em execução.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nome do aplicativo a ser reiniciado. |

**Retornos:**

`Dict` — Status da reinicialização.

---

#### `reachy_mini.daemon.app.routers.apps.stop_app`

Interrompe um aplicativo em execução.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nome do aplicativo a ser interrompido. |

**Retornos:**

`Dict` — Status da interrupção.

---

#### `reachy_mini.daemon.app.routers.apps.current_app_status`

Obtém o status do aplicativo em execução no momento.

**Retornos:**

`Dict` — Status atual do aplicativo, incluindo nome, estado e informações da sessão.

---

#### `reachy_mini.daemon.app.routers.apps.install_private_space`

Instala um Space privado do HuggingFace como aplicativo.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `space_id` | `str` | Identificador do HuggingFace Space. |

**Retornos:**

`Dict` — Status da instalação e ID da tarefa.

---

### Update Router

#### `reachy_mini.daemon.app.routers.update.available`

Verifica se há atualizações disponíveis.

**Retornos:**

`Dict` — Informações sobre atualizações disponíveis, incluindo versão e changelog.

---

#### `reachy_mini.daemon.app.routers.update.start_update`

Inicia o processo de atualização.

**Retornos:**

`Dict` — Status e progresso da atualização.

---

#### `reachy_mini.daemon.app.routers.update.get_update_info`

Obtém informações detalhadas sobre a atualização.

**Retornos:**

`Dict` — Informações detalhadas da atualização, incluindo tamanho do download e tempo estimado.

---

#### `reachy_mini.daemon.app.routers.update.websocket_logs`

Endpoint WebSocket para transmissão contínua de logs de atualização.

---

### Cache Router

#### `reachy_mini.daemon.app.routers.cache.clear_huggingface_cache`

Limpa o cache do HuggingFace para liberar espaço em disco.

**Retornos:**

`Dict` — Status da limpeza do cache e quantidade de espaço liberado.

---

#### `reachy_mini.daemon.app.routers.cache.reset_apps`

Redefine todos os aplicativos para o estado inicial.

**Retornos:**

`Dict` — Status da redefinição.

---

### Kinematics Router

#### `reachy_mini.daemon.app.routers.kinematics.get_kinematics_info`

Obtém informações de cinemática do robô.

**Retornos:**

`Dict` — Parâmetros de cinemática, incluindo parâmetros DH e limites das juntas.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_urdf`

Obtém a descrição URDF do robô.

**Retornos:**

`str` — String XML URDF descrevendo o robô.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_stl_file`

Obtém o arquivo de malha STL para um componente do robô.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `component` | `str` | Nome do componente (por exemplo, "head", "antenna"). |

**Retornos:**

`bytes` — Dados do arquivo STL.

---

### Volume Router

#### `reachy_mini.daemon.app.routers.volume.get_volume`

Obtém o volume atual do alto-falante.

**Retornos:**

`int` — Nível de volume atual (0-100).

---

#### `reachy_mini.daemon.app.routers.volume.set_volume`

Define o volume do alto-falante.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Nível de volume (0-100). |

**Retornos:**

`int` — Volume efetivamente definido (pode ser limitado).

---

#### `reachy_mini.daemon.app.routers.volume.play_test_sound`

Reproduz um som de teste para verificar a saída de áudio.

**Retornos:**

`Dict` — Mensagem de status confirmando que o som de teste foi reproduzido.

---

#### `reachy_mini.daemon.app.routers.volume.get_microphone_volume`

Obtém o volume atual do microfone.

**Retornos:**

`int` — Volume atual do microfone (0-100).

---

#### `reachy_mini.daemon.app.routers.volume.set_microphone_volume`

Define o volume do microfone.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Nível de volume (0-100). |

**Retornos:**

`int` — Volume efetivamente definido (pode ser limitado).

---

### Logs Router

#### `reachy_mini.daemon.app.routers.logs.websocket_daemon_logs`

Endpoint WebSocket para transmissão contínua de logs do daemon.

---

### HF Auth Router

#### `reachy_mini.daemon.app.routers.hf_auth.save_token`

Salva o token de autenticação do HuggingFace.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `token` | `str` | Token de API do HuggingFace. |

**Retornos:**

`Dict` — Status do salvamento.

---

#### `reachy_mini.daemon.app.routers.hf_auth.get_auth_status`

Obtém o status atual de autenticação.

**Retornos:**

`Dict` — Status de autenticação, incluindo se o token é válido e informações do usuário.

---

#### `reachy_mini.daemon.app.routers.hf_auth.delete_token`

Exclui o token de autenticação salvo.

**Retornos:**

`Dict` — Status da exclusão.