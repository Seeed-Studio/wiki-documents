---
description: Referência da API do daemon para o Reachy Mini, cobrindo classes principais do daemon, bloqueio de app do robô, classes de backend e todos os endpoints dos roteadores.
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
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_daemon/
---

# Daemon

## Classes principais do Daemon

[[autodoc]] reachy_mini.daemon.daemon.Daemon

[[autodoc]] reachy_mini.daemon.daemon.DaemonState

[[autodoc]] reachy_mini.daemon.daemon.DaemonStatus

## Bloqueio de App do Robô

O *app lock* do robô é a única fonte de verdade do daemon para saber qual
app gerenciado atualmente detém o robô. Ele serializa os dois pontos de
entrada gerenciados — apps Python locais iniciados por :class:`AppManager` e
clientes WebRTC remotos roteados através do relay central de sinalização.

Ele **não** controla todos os caminhos de código que podem acionar o robô: clientes
SDK que falam diretamente com o daemon via LAN/WebSocket o contornam.
O nome usa "app" deliberadamente para refletir esse escopo mais restrito.

### Modelo de concorrência

Dois pontos de entrada gerenciados podem abrir uma sessão com o robô:

1. **Caminho local** — um app Python iniciado via
   ``POST /api/apps/start``. É executado como um subprocesso do daemon
   e se comunica diretamente com o backend.
2. **Caminho remoto** — um cliente de navegador autenticado através do
   servidor central de sinalização do HuggingFace, roteado até o robô via
   WebRTC. Manipulado por ``CentralSignalingRelay`` em sua própria thread.

Sem coordenação, ambos os caminhos podem pegar o robô ao mesmo tempo
e disputar comandos de motor, câmera e áudio. :class:`RobotAppLock`
evita isso com três estados mutuamente exclusivos:

- ``free`` — nenhum app gerenciado detém o slot.
- ``local_app(name)`` — um app Python está em execução.
- ``remote_session(name)`` — um cliente WebRTC remoto está conectado.

**Regras de aquisição:**

- O caminho local usa :meth:`RobotAppLock.acquire_local_evicting_remote`.
  Se uma sessão remota estiver ativa, o lock é transicionado
  atomicamente para ``local_app`` e o relay é instruído a enviar
  ``endSession`` para o par remoto e para o GStreamer local, para que a
  conexão WebRTC existente seja encerrada corretamente. Se outro app
  Python já detiver o lock, a aquisição gera ``RuntimeError``.
- O caminho remoto usa :meth:`RobotAppLock.try_acquire_remote`. Isso
  falha rapidamente (retorna ``False``) sempre que o lock não estiver
  ``free`` — sessões remotas recebidas são recusadas com
  ``{"type": "endSession", "reason": "robot_busy_local_app"}``.

**Regras de liberação:**

- :meth:`RobotAppLock.release_local` é chamado a partir do bloco
  ``finally`` do monitor de subprocesso, portanto saídas limpas, falhas,
  ``SIGKILL``, OOM e cancelamento de tarefa liberam o lock.
- :meth:`RobotAppLock.release_remote` é chamado de todos os
  manipuladores de ``endSession`` (em ambas as direções), de
  ``_close_connections`` em caso de desconexão/reconexão e do
  ``stop()`` do relay. Todas as chamadas de liberação são idempotentes —
  elas não fazem nada se o lock não estiver no estado correspondente.

**Considerações entre threads:** o estado do lock é protegido por um
``threading.Lock``. O callback de despejo é registrado pelo relay
e invocado pelo AppManager a partir do loop principal do asyncio, mas
despacha o encerramento real da sessão para o próprio event loop do relay via
``asyncio.run_coroutine_threadsafe``. O AppManager aguarda o encerramento
antes de criar o subprocesso Python, para que o par remoto tenha
liberado seus handles de mídia antes que o app local os abra.

### Referência da API

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLock

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLockState

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLockStatus

## Classes de Backend

### Backend abstrato

[[autodoc]] reachy_mini.daemon.backend.abstract.MotorControlMode

### Backend do robô

[[autodoc]] reachy_mini.daemon.backend.robot.RobotBackend

[[autodoc]] reachy_mini.daemon.backend.robot.RobotBackendStatus

### Backend MuJoCo

[[autodoc]] reachy_mini.daemon.backend.mujoco.MujocoBackend

[[autodoc]] reachy_mini.daemon.backend.mujoco.MujocoBackendStatus

### Backend de simulação mockup

[[autodoc]] reachy_mini.daemon.backend.mockup_sim.MockupSimBackend

[[autodoc]] reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus

## Utilitários do Daemon

[[autodoc]] reachy_mini.daemon.utils.find_serial_port

[[autodoc]] reachy_mini.daemon.utils.get_ip_address

## App

### Modelos

[[autodoc]] reachy_mini.daemon.app.models.Matrix4x4Pose

[[autodoc]] reachy_mini.daemon.app.models.XYZRPYPose

[[autodoc]] reachy_mini.daemon.app.models.FullBodyTarget

[[autodoc]] reachy_mini.daemon.app.models.DoAInfo

[[autodoc]] reachy_mini.daemon.app.models.FullState

### Dependências

[[autodoc]] reachy_mini.daemon.app.dependencies.get_daemon

[[autodoc]] reachy_mini.daemon.app.dependencies.get_backend

[[autodoc]] reachy_mini.daemon.app.dependencies.get_app_manager

[[autodoc]] reachy_mini.daemon.app.dependencies.ws_get_backend

### Jobs

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobStatus

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobInfo

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobHandler

[[autodoc]] reachy_mini.daemon.app.bg_job_register.run_command

[[autodoc]] reachy_mini.daemon.app.bg_job_register.get_info

[[autodoc]] reachy_mini.daemon.app.bg_job_register.ws_poll_info

### Aplicação principal

[[autodoc]] reachy_mini.daemon.app.main.Args

[[autodoc]] reachy_mini.daemon.app.main.create_app

[[autodoc]] reachy_mini.daemon.app.main.run_app

[[autodoc]] reachy_mini.daemon.app.main.main

## Roteadores do App

### Roteador do Daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.start_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.stop_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.restart_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.get_daemon_status

[[autodoc]] reachy_mini.daemon.app.routers.daemon.get_robot_app_lock_status

### Roteador de estado

[[autodoc]] reachy_mini.daemon.app.routers.state.get_head_pose

[[autodoc]] reachy_mini.daemon.app.routers.state.get_body_yaw

[[autodoc]] reachy_mini.daemon.app.routers.state.get_antenna_joint_positions

[[autodoc]] reachy_mini.daemon.app.routers.state.get_doa

[[autodoc]] reachy_mini.daemon.app.routers.state.get_full_state

[[autodoc]] reachy_mini.daemon.app.routers.state.ws_full_state

### Roteador de motores


[[autodoc]] reachy_mini.daemon.app.routers.motors.get_motor_status

[[autodoc]] reachy_mini.daemon.app.routers.motors.set_motor_mode

### Roteador de movimento



[[autodoc]] reachy_mini.daemon.app.routers.move.get_running_moves

[[autodoc]] reachy_mini.daemon.app.routers.move.goto

[[autodoc]] reachy_mini.daemon.app.routers.move.play_wake_up

[[autodoc]] reachy_mini.daemon.app.routers.move.play_goto_sleep

[[autodoc]] reachy_mini.daemon.app.routers.move.list_recorded_move_dataset

[[autodoc]] reachy_mini.daemon.app.routers.move.play_recorded_move_dataset

[[autodoc]] reachy_mini.daemon.app.routers.move.stop_move

[[autodoc]] reachy_mini.daemon.app.routers.move.set_target

[[autodoc]] reachy_mini.daemon.app.routers.move.ws_move_updates

### Roteador de apps

[[autodoc]] reachy_mini.daemon.app.routers.apps.list_available_apps

[[autodoc]] reachy_mini.daemon.app.routers.apps.list_all_available_apps

[[autodoc]] reachy_mini.daemon.app.routers.apps.install_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.remove_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.job_status

[[autodoc]] reachy_mini.daemon.app.routers.apps.ws_apps_manager

[[autodoc]] reachy_mini.daemon.app.routers.apps.start_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.restart_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.stop_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.current_app_status

[[autodoc]] reachy_mini.daemon.app.routers.apps.install_private_space

### Roteador de atualização

[[autodoc]] reachy_mini.daemon.app.routers.update.available

[[autodoc]] reachy_mini.daemon.app.routers.update.start_update

[[autodoc]] reachy_mini.daemon.app.routers.update.get_update_info

[[autodoc]] reachy_mini.daemon.app.routers.update.websocket_logs

### Roteador de cache

[[autodoc]] reachy_mini.daemon.app.routers.cache.clear_huggingface_cache

[[autodoc]] reachy_mini.daemon.app.routers.cache.reset_apps

### Roteador de cinemática


[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_kinematics_info

[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_urdf

[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_stl_file

### Roteador de volume


[[autodoc]] reachy_mini.daemon.app.routers.volume.get_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.set_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.play_test_sound

[[autodoc]] reachy_mini.daemon.app.routers.volume.get_microphone_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.set_microphone_volume

### Roteador de logs

[[autodoc]] reachy_mini.daemon.app.routers.logs.websocket_daemon_logs

### Roteador de autenticação HF

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.save_token

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.get_auth_status

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.delete_token