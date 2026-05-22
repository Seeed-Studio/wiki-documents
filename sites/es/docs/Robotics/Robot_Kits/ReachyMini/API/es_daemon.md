---
description: Referencia de la API del daemon para Reachy Mini que cubre las clases principales del daemon, el bloqueo de aplicaciones del robot, las clases de backend y todos los endpoints del router.
title: API del Daemon
slug: /reachymini_api_daemon
keywords:
  - daemon
  - api
  - backend
  - bloqueo de app
  - router
  - motores
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_api_daemon/
---

# Daemon

## Clases principales del Daemon

[[autodoc]] reachy_mini.daemon.daemon.Daemon

[[autodoc]] reachy_mini.daemon.daemon.DaemonState

[[autodoc]] reachy_mini.daemon.daemon.DaemonStatus

## Bloqueo de App del Robot

El *bloqueo de app* del robot es la única fuente de verdad del daemon para saber qué
aplicación gestionada tiene actualmente el control del robot. Serializa los dos puntos de
entrada gestionados — aplicaciones locales de Python lanzadas por :class:`AppManager` y
clientes WebRTC remotos enrutados a través del relay central de señalización.

**No** controla todas las rutas de código que pueden manejar el robot: los clientes del SDK
que hablan con el daemon directamente por LAN/WebSocket lo omiten.
El nombre usa deliberadamente "app" para reflejar ese alcance más limitado.

### Modelo de concurrencia

Dos puntos de entrada gestionados pueden abrir una sesión con el robot:

1. **Ruta local** — una aplicación de Python lanzada mediante
   ``POST /api/apps/start``. Se ejecuta como un subproceso del daemon y
   se comunica directamente con el backend.
2. **Ruta remota** — un cliente de navegador autenticado a través del
   servidor central de señalización de HuggingFace, enrutado al robot por
   WebRTC. Gestionado por ``CentralSignalingRelay`` en su propio hilo.

Sin coordinación, ambas rutas pueden tomar el control del robot al mismo tiempo
y competir por los comandos de los motores, la cámara y el audio. :class:`RobotAppLock`
evita esto con tres estados mutuamente excluyentes:

- ``free`` — ninguna aplicación gestionada ocupa el espacio.
- ``local_app(name)`` — una aplicación de Python se está ejecutando.
- ``remote_session(name)`` — un cliente WebRTC remoto está conectado.

**Reglas de adquisición:**

- La ruta local usa :meth:`RobotAppLock.acquire_local_evicting_remote`.
  Si hay una sesión remota activa, el bloqueo se transiciona atómicamente
  a ``local_app`` y se le pide al relay que envíe ``endSession`` al
  par remoto y al GStreamer local para que la conexión WebRTC existente
  se cierre limpiamente. Si otra aplicación de Python ya tiene
  el bloqueo, la adquisición lanza ``RuntimeError``.
- La ruta remota usa :meth:`RobotAppLock.try_acquire_remote`. Esta
  falla rápidamente (devuelve ``False``) siempre que el bloqueo no esté ``free`` —
  las sesiones remotas entrantes se rechazan con
  ``{"type": "endSession", "reason": "robot_busy_local_app"}``.

**Reglas de liberación:**

- :meth:`RobotAppLock.release_local` se llama desde el bloque ``finally``
  del monitor del subproceso, por lo que las salidas limpias, fallos, ``SIGKILL``,
  OOM y cancelación de tareas liberan el bloqueo.
- :meth:`RobotAppLock.release_remote` se llama desde cada
  manejador de ``endSession`` (en ambas direcciones), desde
  ``_close_connections`` en desconexión/reconexión y desde el ``stop()``
  del relay. Todas las llamadas de liberación son idempotentes — no hacen nada si el
  bloqueo no está en el estado correspondiente.

**Consideraciones entre hilos:** el estado del bloqueo está protegido por un
``threading.Lock``. La devolución de llamada de expulsión la registra el relay
y la invoca AppManager desde el bucle principal de asyncio, pero delega
el cierre real de la sesión al propio bucle de eventos del relay mediante
``asyncio.run_coroutine_threadsafe``. AppManager espera a que termine el cierre
antes de crear el subproceso de Python, de modo que el par remoto haya
liberado sus manejadores de medios antes de que la app local los abra.

### Referencia de la API

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLock

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLockState

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLockStatus

## Clases de Backend

### Backend abstracto

[[autodoc]] reachy_mini.daemon.backend.abstract.MotorControlMode

### Backend del robot

[[autodoc]] reachy_mini.daemon.backend.robot.RobotBackend

[[autodoc]] reachy_mini.daemon.backend.robot.RobotBackendStatus

### Backend MuJoCo

[[autodoc]] reachy_mini.daemon.backend.mujoco.MujocoBackend

[[autodoc]] reachy_mini.daemon.backend.mujoco.MujocoBackendStatus

### Backend de simulación Mockup

[[autodoc]] reachy_mini.daemon.backend.mockup_sim.MockupSimBackend

[[autodoc]] reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus

## Utilidades del Daemon

[[autodoc]] reachy_mini.daemon.utils.find_serial_port

[[autodoc]] reachy_mini.daemon.utils.get_ip_address

## App

### Modelos

[[autodoc]] reachy_mini.daemon.app.models.Matrix4x4Pose

[[autodoc]] reachy_mini.daemon.app.models.XYZRPYPose

[[autodoc]] reachy_mini.daemon.app.models.FullBodyTarget

[[autodoc]] reachy_mini.daemon.app.models.DoAInfo

[[autodoc]] reachy_mini.daemon.app.models.FullState

### Dependencias

[[autodoc]] reachy_mini.daemon.app.dependencies.get_daemon

[[autodoc]] reachy_mini.daemon.app.dependencies.get_backend

[[autodoc]] reachy_mini.daemon.app.dependencies.get_app_manager

[[autodoc]] reachy_mini.daemon.app.dependencies.ws_get_backend

### Trabajos

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobStatus

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobInfo

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobHandler

[[autodoc]] reachy_mini.daemon.app.bg_job_register.run_command

[[autodoc]] reachy_mini.daemon.app.bg_job_register.get_info

[[autodoc]] reachy_mini.daemon.app.bg_job_register.ws_poll_info

### Aplicación principal

[[autodoc]] reachy_mini.daemon.app.main.Args

[[autodoc]] reachy_mini.daemon.app.main.create_app

[[autodoc]] reachy_mini.daemon.app.main.run_app

[[autodoc]] reachy_mini.daemon.app.main.main

## Routers de la App

### Router del Daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.start_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.stop_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.restart_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.get_daemon_status

[[autodoc]] reachy_mini.daemon.app.routers.daemon.get_robot_app_lock_status

### Router de estado

[[autodoc]] reachy_mini.daemon.app.routers.state.get_head_pose

[[autodoc]] reachy_mini.daemon.app.routers.state.get_body_yaw

[[autodoc]] reachy_mini.daemon.app.routers.state.get_antenna_joint_positions

[[autodoc]] reachy_mini.daemon.app.routers.state.get_doa

[[autodoc]] reachy_mini.daemon.app.routers.state.get_full_state

[[autodoc]] reachy_mini.daemon.app.routers.state.ws_full_state

### Router de motores


[[autodoc]] reachy_mini.daemon.app.routers.motors.get_motor_status

[[autodoc]] reachy_mini.daemon.app.routers.motors.set_motor_mode

### Router de movimiento



[[autodoc]] reachy_mini.daemon.app.routers.move.get_running_moves

[[autodoc]] reachy_mini.daemon.app.routers.move.goto

[[autodoc]] reachy_mini.daemon.app.routers.move.play_wake_up

[[autodoc]] reachy_mini.daemon.app.routers.move.play_goto_sleep

[[autodoc]] reachy_mini.daemon.app.routers.move.list_recorded_move_dataset

[[autodoc]] reachy_mini.daemon.app.routers.move.play_recorded_move_dataset

[[autodoc]] reachy_mini.daemon.app.routers.move.stop_move

[[autodoc]] reachy_mini.daemon.app.routers.move.set_target

[[autodoc]] reachy_mini.daemon.app.routers.move.ws_move_updates

### Router de apps

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

### Router de actualización

[[autodoc]] reachy_mini.daemon.app.routers.update.available

[[autodoc]] reachy_mini.daemon.app.routers.update.start_update

[[autodoc]] reachy_mini.daemon.app.routers.update.get_update_info

[[autodoc]] reachy_mini.daemon.app.routers.update.websocket_logs

### Router de caché

[[autodoc]] reachy_mini.daemon.app.routers.cache.clear_huggingface_cache

[[autodoc]] reachy_mini.daemon.app.routers.cache.reset_apps

### Router de cinemática


[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_kinematics_info

[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_urdf

[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_stl_file

### Router de volumen


[[autodoc]] reachy_mini.daemon.app.routers.volume.get_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.set_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.play_test_sound

[[autodoc]] reachy_mini.daemon.app.routers.volume.get_microphone_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.set_microphone_volume

### Router de logs

[[autodoc]] reachy_mini.daemon.app.routers.logs.websocket_daemon_logs

### Router de autenticación HF

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.save_token

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.get_auth_status

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.delete_token