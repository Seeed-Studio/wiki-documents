---
description: Referencia de la API del daemon para Reachy Mini que cubre las clases principales del daemon, el bloqueo de la app del robot, las clases de backend y todos los endpoints del router.
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

### `reachy_mini.daemon.daemon.Daemon`

Clase principal del daemon para controlar el robot Reachy Mini.

### Métodos

#### `start`

Inicia el daemon y todos sus componentes.

---

#### `stop`

Detiene el daemon y todos sus componentes.

---

#### `restart`

Reinicia el daemon.

---

#### `get_status`

Obtiene el estado actual del daemon.

**Devuelve:**

`DaemonStatus` — Estado actual del daemon.

---

#### `is_running`

Comprueba si el daemon se está ejecutando.

**Devuelve:**

`bool` — True si el daemon se está ejecutando.

---

### `reachy_mini.daemon.daemon.DaemonState`

Enum que representa el estado del daemon.

### Valores

| Value | Description |
|-------|-------------|
| `STOPPED` | El daemon no se está ejecutando. |
| `STARTING` | El daemon se está iniciando. |
| `RUNNING` | El daemon se está ejecutando con normalidad. |
| `STOPPING` | El daemon se está apagando. |
| `ERROR` | El daemon encontró un error. |

---

### `reachy_mini.daemon.daemon.DaemonStatus`

Objeto de estado que contiene el estado e información del daemon.

### Propiedades

| Property | Type | Description |
|----------|------|-------------|
| `state` | `DaemonState` | Estado actual del daemon. |
| `uptime` | `float` | Tiempo desde que el daemon se inició, en segundos. |
| `version` | `str` | Cadena de versión del daemon. |
| `robot_connected` | `bool` | Indica si hay un robot conectado. |

---

## Bloqueo de App del Robot

El *bloqueo de app* del robot es la única fuente de verdad del daemon sobre qué
app gestionada tiene actualmente el robot. Serializa los dos puntos de
entrada gestionados — apps Python locales lanzadas por :class:`AppManager` y
clientes WebRTC remotos enrutados a través del relay central de señalización.

**No** controla todas las rutas de código que pueden manejar el robot: los clientes del
SDK que hablan directamente con el daemon por LAN/WebSocket lo omiten.
El nombre usa deliberadamente "app" para reflejar ese alcance más limitado.

### Modelo de concurrencia

Dos puntos de entrada gestionados pueden abrir una sesión con el robot:

1. **Ruta local** — una app Python lanzada mediante
   ``POST /api/apps/start``. Se ejecuta como un subproceso del daemon,
   habla directamente con el backend.
2. **Ruta remota** — un cliente de navegador autenticado a través del
   servidor central de señalización de HuggingFace, enrutado al robot por
   WebRTC. Gestionado por ``CentralSignalingRelay`` en su propio hilo.

Sin coordinación, ambas rutas pueden tomar el robot al mismo tiempo
y competir por los comandos de los motores, la cámara y el audio. :class:`RobotAppLock`
evita eso con tres estados mutuamente excluyentes:

- ``free`` — ninguna app gestionada tiene el slot.
- ``local_app(name)`` — una app Python se está ejecutando.
- ``remote_session(name)`` — un cliente WebRTC remoto está conectado.

**Reglas de adquisición:**

- La ruta local usa :meth:`RobotAppLock.acquire_local_evicting_remote`.
  Si hay una sesión remota activa, el bloqueo se transiciona atómicamente
  a ``local_app`` y se le pide al relay que envíe ``endSession`` al
  par remoto y al GStreamer local para que la conexión WebRTC existente
  se cierre limpiamente. Si otra app Python ya tiene el bloqueo,
  la adquisición lanza ``RuntimeError``.
- La ruta remota usa :meth:`RobotAppLock.try_acquire_remote`. Esto
  falla rápidamente (devuelve ``False``) siempre que el bloqueo no esté ``free`` —
  las sesiones remotas entrantes se rechazan con
  ``{"type": "endSession", "reason": "robot_busy_local_app"}``.

**Reglas de liberación:**

- :meth:`RobotAppLock.release_local` se llama desde el bloque
  ``finally`` del monitor del subproceso, por lo que las salidas limpias, fallos, ``SIGKILL``,
  OOM y cancelación de tareas liberan el bloqueo.
- :meth:`RobotAppLock.release_remote` se llama desde cada
  manejador de ``endSession`` (en ambas direcciones), desde
  ``_close_connections`` al desconectar/reconectar, y desde el ``stop()`` del relay.
  Todas las llamadas de liberación son idempotentes — no hacen nada si el
  bloqueo no está en el estado correspondiente.

**Consideraciones entre hilos:** el estado del bloqueo está protegido por un
``threading.Lock``. La devolución de llamada de expulsión la registra el relay
y la invoca AppManager desde el bucle principal de asyncio, pero delega
la finalización real de la sesión al propio bucle de eventos del relay mediante
``asyncio.run_coroutine_threadsafe``. AppManager espera a que termine la finalización
antes de crear el subproceso de Python, de modo que el par remoto haya
liberado sus manejadores de medios antes de que la app local los abra.

### Referencia de la API

### `reachy_mini.daemon.robot_app_lock.RobotAppLock`

Bloqueo de aplicación del robot para gestionar el acceso al robot.

### Métodos

#### `acquire_local_evicting_remote`

Adquiere el bloqueo para una app Python local, expulsando cualquier sesión remota.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nombre de la app que adquiere el bloqueo. |

**Devuelve:**

`bool` — True si el bloqueo se adquirió correctamente.

---

#### `try_acquire_remote`

Intenta adquirir el bloqueo para una sesión WebRTC remota.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `session_name` | `str` | Nombre de la sesión que adquiere el bloqueo. |

**Devuelve:**

`bool` — True si el bloqueo se adquirió correctamente.

---

#### `release_local`

Libera el bloqueo desde una app Python local.

---

#### `release_remote`

Libera el bloqueo desde una sesión remota.

---

#### `get_status`

Obtiene el estado actual del bloqueo de app del robot.

**Devuelve:**

`RobotAppLockStatus` — Estado actual del bloqueo.

---

#### `is_free`

Comprueba si el bloqueo está libre.

**Devuelve:**

`bool` — True si ninguna app tiene el bloqueo.

---

#### `is_local_app`

Comprueba si una app local tiene actualmente el bloqueo.

**Devuelve:**

`bool` — True si una app local tiene el bloqueo.

---

#### `is_remote_session`

Comprueba si una sesión remota tiene actualmente el bloqueo.

**Devuelve:**

`bool` — True si una sesión remota tiene el bloqueo.

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockState`

Enum que representa el estado del bloqueo de app del robot.

### Valores

| Value | Description |
|-------|-------------|
| `free` | Ninguna app gestionada tiene el slot. |
| `local_app` | Una app Python se está ejecutando. |
| `remote_session` | Un cliente WebRTC remoto está conectado. |

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockStatus`

Objeto de estado que contiene el estado e información del bloqueo de app del robot.

### Propiedades

| Property | Type | Description |
|----------|------|-------------|
| `state` | `RobotAppLockState` | Estado actual del bloqueo. |
| `holder_name` | `str \| None` | Nombre del poseedor actual (si lo hay). |
| `holder_type` | `str \| None` | Tipo de poseedor ("local_app" o "remote_session"). |

---

## Clases de Backend

### Backend abstracto

### `reachy_mini.daemon.backend.abstract.MotorControlMode`

Enum que representa el modo de control de los motores.

### Valores

| Value | Description |
|-------|-------------|
| `enabled` | Los motores están completamente habilitados y respondiendo a comandos. |
| `disabled` | Los motores están deshabilitados y no responden a comandos. |
| `gravity_compensation` | Los motores están en modo de compensación de gravedad. |

---

### Backend del robot

### `reachy_mini.daemon.backend.robot.RobotBackend`

Backend para controlar el robot físico real.

### Métodos

#### `connect`

Conecta con el hardware del robot.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `port` | `str` | Puerto serie al que conectarse. |

---

#### `disconnect`

Desconecta del hardware del robot.

---

#### `get_motor_status`

Obtiene el estado de todos los motores.

**Devuelve:**

`Dict` — Diccionario de estados de los motores.

---

#### `set_motor_mode`

Establece el modo de control para los motores.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `MotorControlMode` | El modo de control que se va a establecer. |

---

#### `send_position_command`

Envía comandos de posición a los motores.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `positions` | `Dict` | Diccionario de posiciones de los motores. |

---

#### `get_joint_positions`

Obtiene las posiciones actuales de las articulaciones del robot.

**Devuelve:**

`Dict` — Diccionario de posiciones actuales de las articulaciones.

---

### `reachy_mini.daemon.backend.robot.RobotBackendStatus`

Objeto de estado que contiene el estado e información del backend del robot.

### Propiedades

| Property | Type | Description |
|----------|------|-------------|
| `connected` | `bool` | Indica si el backend está conectado al robot. |
| `motor_mode` | `MotorControlMode` | Modo de control actual de los motores. |
| `last_update` | `float` | Marca de tiempo de la última actualización. |

---

### Backend MuJoCo

### `reachy_mini.daemon.backend.mujoco.MujocoBackend`

Backend para la simulación MuJoCo del robot.

### Métodos

#### `load_model`

Carga el modelo MuJoCo del robot.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `model_path` | `str` | Ruta al archivo de modelo MuJoCo. |

---

#### `step`

Avanza la simulación.

---

#### `get_state`

Obtiene el estado actual de la simulación.

**Devuelve:**

`Dict` — Estado actual de la simulación.

---

#### `set_control`

Establece objetivos de control para la simulación.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `targets` | `Dict` | Diccionario de objetivos de control. |

---

#### `reset`

Restablece la simulación al estado inicial.

---

### `reachy_mini.daemon.backend.mujoco.MujocoBackendStatus`

Objeto de estado que contiene el estado e información del backend MuJoCo.

### Propiedades

| Property | Type | Description |
|----------|------|-------------|
| `model_loaded` | `bool` | Indica si hay un modelo cargado. |
| `simulation_time` | `float` | Tiempo actual de simulación. |
| `real_time_factor` | `float` | Factor de tiempo real de la simulación. |

---

### Backend de simulación Mockup

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackend`

Backend para simulación mockup (sin física real).

### Métodos

#### `start`

Inicia la simulación mockup.

---

#### `stop`

Detiene la simulación mockup.

---

#### `get_state`

Obtiene el estado actual del mockup.

**Devuelve:**

`Dict` — Estado actual del mockup.

---

#### `set_positions`

Establece posiciones objetivo para el mockup.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `positions` | `Dict` | Diccionario de posiciones objetivo. |

---

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus`

Objeto de estado que contiene la información y el estado de la simulación mockup.

### Propiedades

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `running` | `bool` | Indica si el mockup se está ejecutando. |
| `positions` | `Dict` | Posiciones objetivo actuales. |

---

## Utilidades del Daemon

### `reachy_mini.daemon.utils.find_serial_port`

Encuentra el puerto serie conectado al robot Reachy Mini.

**Devuelve:**

`str` — Ruta al puerto serie, o None si no se encuentra.

---

### `reachy_mini.daemon.utils.get_ip_address`

Obtiene la dirección IP de la máquina actual.

**Devuelve:**

`str` — Cadena con la dirección IP.

---

## App

### Modelos

### `reachy_mini.daemon.app.models.Matrix4x4Pose`

Representación de pose mediante una matriz 4x4 para el posicionamiento del robot.

### Propiedades

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `matrix` | `np.ndarray` | Matriz de transformación 4x4. |
| `translation` | `np.ndarray` | Vector de traslación (x, y, z). |
| `rotation` | `np.ndarray` | Matriz de rotación 3x3. |

---

### `reachy_mini.daemon.app.models.XYZRPYPose`

Representación de pose usando XYZ+RPY (posición y ángulos de Euler).

### Propiedades

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `x` | `float` | Posición X en metros. |
| `y` | `float` | Posición Y en metros. |
| `z` | `float` | Posición Z en metros. |
| `roll` | `float` | Ángulo de roll en radianes. |
| `pitch` | `float` | Ángulo de pitch en radianes. |
| `yaw` | `float` | Ángulo de yaw en radianes. |

---

### `reachy_mini.daemon.app.models.FullBodyTarget`

Pose objetivo de cuerpo completo incluyendo cabeza y antenas.

### Propiedades

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `head` | `Matrix4x4Pose \| None` | Pose objetivo de la cabeza. |
| `antennas` | `List[float] \| None` | Posiciones objetivo de las antenas. |
| `body_yaw` | `float \| None` | Ángulo objetivo de yaw del cuerpo. |

---

### `reachy_mini.daemon.app.models.DoAInfo`

Información de dirección de llegada (Direction of Arrival) para audio.

### Propiedades

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `doa_angle` | `float` | Ángulo de dirección de llegada en grados. |
| `energy` | `float` | Nivel de energía de audio. |

---

### `reachy_mini.daemon.app.models.FullState`

Estado completo del robot incluyendo todos los sensores y motores.

### Propiedades

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `joint_positions` | `Dict` | Posiciones actuales de las articulaciones. |
| `head_pose` | `Matrix4x4Pose` | Pose actual de la cabeza. |
| `antennas` | `List[float]` | Posiciones actuales de las antenas. |
| `body_yaw` | `float` | Ángulo actual de yaw del cuerpo. |
| `motor_mode` | `MotorControlMode` | Modo de control de motor actual. |

---

### Dependencias

### `reachy_mini.daemon.app.dependencies.get_daemon`

Proveedor de dependencias para la instancia de Daemon.

**Devuelve:**

`Daemon` — La instancia singleton de Daemon.

---

### `reachy_mini.daemon.app.dependencies.get_backend`

Proveedor de dependencias para el backend actual.

**Devuelve:**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — La instancia actual de backend.

---

### `reachy_mini.daemon.app.dependencies.get_app_manager`

Proveedor de dependencias para la instancia de AppManager.

**Devuelve:**

`AppManager` — La instancia de AppManager.

---

### `reachy_mini.daemon.app.dependencies.ws_get_backend`

Proveedor de dependencias WebSocket para el backend.

**Devuelve:**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — La instancia actual de backend.

---

### Trabajos

### `reachy_mini.daemon.app.bg_job_register.JobStatus`

Enum que representa el estado de un trabajo en segundo plano.

### Valores

| Valor | Descripción |
|-------|-------------|
| `PENDING` | El trabajo está esperando para comenzar. |
| `RUNNING` | El trabajo se está ejecutando actualmente. |
| `COMPLETED` | El trabajo se completó correctamente. |
| `FAILED` | El trabajo falló con un error. |
| `CANCELLED` | El trabajo fue cancelado. |

---

### `reachy_mini.daemon.app.bg_job_register.JobInfo`

Información sobre un trabajo en segundo plano.

### Propiedades

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `id` | `str` | Identificador único del trabajo. |
| `name` | `str` | Nombre del trabajo. |
| `status` | `JobStatus` | Estado actual del trabajo. |
| `created_at` | `float` | Marca de tiempo cuando se creó el trabajo. |
| `started_at` | `float \| None` | Marca de tiempo cuando comenzó el trabajo. |
| `completed_at` | `float \| None` | Marca de tiempo cuando se completó el trabajo. |
| `error` | `str \| None` | Mensaje de error si el trabajo falló. |

---

### `reachy_mini.daemon.app.bg_job_register.JobHandler`

Manejador para gestionar la ejecución de trabajos en segundo plano.

### Métodos

#### `start`

Inicia el manejador de trabajos.

---

#### `stop`

Detiene el manejador de trabajos.

---

#### `submit`

Envía un nuevo trabajo para su ejecución.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `job_id` | `str` | Identificador único del trabajo. |
| `func` | `Callable` | Función a ejecutar. |
| `args` | `List` | Argumentos posicionales para la función. |
| `kwargs` | `Dict` | Argumentos con nombre para la función. |

---

#### `cancel`

Cancela un trabajo en ejecución.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `job_id` | `str` | Identificador único del trabajo. |

---

#### `get_status`

Obtiene el estado de un trabajo.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `job_id` | `str` | Identificador único del trabajo. |

**Devuelve:**

`JobInfo` — Estado actual del trabajo.

---

### `reachy_mini.daemon.app.bg_job_register.run_command`

Ejecuta un comando de shell como un trabajo en segundo plano.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `command` | `str` | Comando a ejecutar. |
| `job_id` | `str` | Identificador único del trabajo. |

**Devuelve:**

`JobInfo` — Información sobre el trabajo iniciado.

---

### `reachy_mini.daemon.app.bg_job_register.get_info`

Obtiene información sobre un trabajo específico.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `job_id` | `str` | Identificador único del trabajo. |

**Devuelve:**

`JobInfo \| None` — Información del trabajo si se encuentra.

---

### `reachy_mini.daemon.app.bg_job_register.ws_poll_info`

Endpoint WebSocket para consultar información de trabajos.

---

### Aplicación principal

### `reachy_mini.daemon.app.main.Args`

Argumentos de línea de comandos para la aplicación daemon.

### Propiedades

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `host` | `str` | Host al que enlazar (por defecto: "0.0.0.0"). |
| `port` | `int` | Puerto al que enlazar (por defecto: 8000). |
| `backend` | `str` | Tipo de backend a usar ("robot", "mujoco", "mockup"). |
| `debug` | `bool` | Habilitar modo de depuración. |

---

### `reachy_mini.daemon.app.main.create_app`

Crea la aplicación FastAPI.

**Devuelve:**

`FastAPI` — La aplicación FastAPI configurada.

---

### `reachy_mini.daemon.app.main.run_app`

Ejecuta la aplicación FastAPI.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `app` | `FastAPI` | La aplicación FastAPI a ejecutar. |
| `host` | `str` | Host al que enlazar. |
| `port` | `int` | Puerto al que enlazar. |

---

### `reachy_mini.daemon.app.main.main`

Punto de entrada principal para la aplicación daemon.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `args` | `Args` | Argumentos de línea de comandos. |

---

## Routers de la App

### Router del Daemon

#### `reachy_mini.daemon.app.routers.daemon.start_daemon`

Inicia el servicio daemon.

**Devuelve:**

`Dict` — Mensaje de estado que indica que el daemon se inició.

---

#### `reachy_mini.daemon.app.routers.daemon.stop_daemon`

Detiene el servicio daemon.

**Devuelve:**

`Dict` — Mensaje de estado que indica que el daemon se detuvo.

---

#### `reachy_mini.daemon.app.routers.daemon.restart_daemon`

Reinicia el servicio daemon.

**Devuelve:**

`Dict` — Mensaje de estado que indica que el daemon se reinició.

---

#### `reachy_mini.daemon.app.routers.daemon.get_daemon_status`

Obtiene el estado actual del daemon.

**Devuelve:**

`DaemonStatus` — Estado actual del daemon.

---

#### `reachy_mini.daemon.app.routers.daemon.get_robot_app_lock_status`

Obtiene el estado actual del bloqueo de la app del robot.

**Devuelve:**

`RobotAppLockStatus` — Estado actual del bloqueo de la app del robot.

---

### Router de Estado

#### `reachy_mini.daemon.app.routers.state.get_head_pose`

Obtiene la pose actual de la cabeza.

**Devuelve:**

`Matrix4x4Pose` — Matriz de la pose actual de la cabeza.

---

#### `reachy_mini.daemon.app.routers.state.get_body_yaw`

Obtiene el ángulo actual de yaw del cuerpo.

**Devuelve:**

`float` — Yaw actual del cuerpo en radianes.

---

#### `reachy_mini.daemon.app.routers.state.get_antenna_joint_positions`

Obtiene las posiciones actuales de las articulaciones de las antenas.

**Devuelve:**

`List[float]` — Posiciones actuales de las antenas en radianes.

---

#### `reachy_mini.daemon.app.routers.state.get_doa`

Obtiene la información actual de dirección de llegada.

**Devuelve:**

`DoAInfo` — Información DOA actual.

---

#### `reachy_mini.daemon.app.routers.state.get_full_state`

Obtiene el estado completo del robot.

**Devuelve:**

`FullState` — Estado completo actual del robot.

---

#### `reachy_mini.daemon.app.routers.state.ws_full_state`

Endpoint WebSocket para transmitir actualizaciones completas del estado del robot.

---

### Router de Motores

#### `reachy_mini.daemon.app.routers.motors.get_motor_status`

Obtiene el estado de todos los motores.

**Devuelve:**

`Dict` — Diccionario de estados de los motores incluyendo posición, velocidad y par.

---

#### `reachy_mini.daemon.app.routers.motors.set_motor_mode`

Establece el modo de control de los motores.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `mode` | `str` | Modo de control de motor ("enabled", "disabled", "gravity_compensation"). |

**Devuelve:**

`Dict` — Mensaje de estado que confirma el cambio de modo.

---

### Router de Movimiento

#### `reachy_mini.daemon.app.routers.move.get_running_moves`

Obtiene la lista de movimientos que se están ejecutando actualmente.

**Devuelve:**

`List[Dict]` — Lista de movimientos en ejecución con sus IDs y progreso.

---

#### `reachy_mini.daemon.app.routers.move.goto`

Envía un comando goto para mover el robot.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `head` | `List[List[float]]` | Matriz de pose de la cabeza 4x4 (16 valores). |
| `antennas` | `List[float]` | Posiciones objetivo de las antenas [izquierda, derecha] en radianes. |
| `body_yaw` | `float` | Objetivo de yaw del cuerpo en radianes. |
| `duration` | `float` | Duración del movimiento en segundos. |
| `method` | `str` | Método de interpolación ("linear", "minjerk", "ease_in_out", "cartoon"). |

**Devuelve:**

`Dict` — ID del movimiento y estado.

---

#### `reachy_mini.daemon.app.routers.move.play_wake_up`

Reproduce la animación de despertar para llevar al robot al estado listo.

**Devuelve:**

`Dict` — Mensaje de estado que confirma que el despertar ha comenzado.

---

#### `reachy_mini.daemon.app.routers.move.play_goto_sleep`

Reproduce la animación de ir a dormir para poner al robot en la postura de reposo.

**Devuelve:**

`Dict` — Mensaje de estado que confirma que el modo de reposo ha comenzado.

---

#### `reachy_mini.daemon.app.routers.move.list_recorded_move_dataset`

Enumera los conjuntos de datos de movimientos grabados disponibles.

**Devuelve:**

`List[str]` — Lista de nombres de conjuntos de datos disponibles.

---

#### `reachy_mini.daemon.app.routers.move.play_recorded_move_dataset`

Reproduce un movimiento grabado de un conjunto de datos.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `dataset` | `str` | Nombre del conjunto de datos que contiene el movimiento. |
| `move_name` | `str` | Nombre del movimiento específico a reproducir. |
| `initial_goto_duration` | `float` | Duración del movimiento inicial hasta la posición de inicio. |
| `sound` | `bool` | Indica si se debe reproducir el sonido asociado. |

**Devuelve:**

`Dict` — Mensaje de estado que confirma que el movimiento ha comenzado.

---

#### `reachy_mini.daemon.app.routers.move.stop_move`

Detiene el movimiento que se está ejecutando actualmente.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `move_id` | `str` | ID del movimiento a detener. |

**Devuelve:**

`Dict` — Mensaje de estado que confirma que el movimiento se ha detenido.

---

#### `reachy_mini.daemon.app.routers.move.set_target`

Establece posiciones objetivo en tiempo real para control continuo.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `List[List[float]]` | Matriz de pose de la cabeza 4x4 (16 valores). |
| `antennas` | `List[float]` | Posiciones objetivo de las antenas [izquierda, derecha] en radianes. |
| `body_yaw` | `float` | Objetivo de guiñada del cuerpo en radianes. |

**Devuelve:**

`Dict` — Mensaje de estado que confirma que el objetivo se ha establecido.

---

#### `reachy_mini.daemon.app.routers.move.ws_move_updates`

Endpoint WebSocket para transmitir actualizaciones de movimientos.

---

### Apps Router

#### `reachy_mini.daemon.app.routers.apps.list_available_apps`

Enumera las aplicaciones disponibles para instalación.

**Devuelve:**

`List[Dict]` — Lista de aplicaciones disponibles con metadatos.

---

#### `reachy_mini.daemon.app.routers.apps.list_all_available_apps`

Enumera todas las aplicaciones, incluidas instaladas y disponibles.

**Devuelve:**

`List[Dict]` — Lista completa de todas las aplicaciones.

---

#### `reachy_mini.daemon.app.routers.apps.install_app`

Instala una aplicación desde una fuente.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `source` | `str` | URL de origen o ruta de la aplicación. |

**Devuelve:**

`Dict` — Estado de la instalación e ID del trabajo.

---

#### `reachy_mini.daemon.app.routers.apps.remove_app`

Elimina una aplicación instalada.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nombre de la aplicación a eliminar. |

**Devuelve:**

`Dict` — Estado de la eliminación.

---

#### `reachy_mini.daemon.app.routers.apps.job_status`

Obtiene el estado de un trabajo de operación de aplicación.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `job_id` | `str` | ID del trabajo a comprobar. |

**Devuelve:**

`JobInfo` — Estado actual del trabajo.

---

#### `reachy_mini.daemon.app.routers.apps.ws_apps_manager`

Endpoint WebSocket para actualizaciones del gestor de aplicaciones.

---

#### `reachy_mini.daemon.app.routers.apps.start_app`

Inicia una aplicación instalada.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nombre de la aplicación a iniciar. |

**Devuelve:**

`Dict` — Estado de inicio e información de la sesión.

---

#### `reachy_mini.daemon.app.routers.apps.restart_app`

Reinicia una aplicación en ejecución.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nombre de la aplicación a reiniciar. |

**Devuelve:**

`Dict` — Estado del reinicio.

---

#### `reachy_mini.daemon.app.routers.apps.stop_app`

Detiene una aplicación en ejecución.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nombre de la aplicación a detener. |

**Devuelve:**

`Dict` — Estado de la detención.

---

#### `reachy_mini.daemon.app.routers.apps.current_app_status`

Obtiene el estado de la aplicación que se está ejecutando actualmente.

**Devuelve:**

`Dict` — Estado actual de la aplicación, incluido nombre, estado e información de la sesión.

---

#### `reachy_mini.daemon.app.routers.apps.install_private_space`

Instala un HuggingFace Space privado como aplicación.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `space_id` | `str` | Identificador del HuggingFace Space. |

**Devuelve:**

`Dict` — Estado de la instalación e ID del trabajo.

---

### Update Router

#### `reachy_mini.daemon.app.routers.update.available`

Comprueba si hay actualizaciones disponibles.

**Devuelve:**

`Dict` — Información de la actualización disponible, incluida la versión y el registro de cambios.

---

#### `reachy_mini.daemon.app.routers.update.start_update`

Inicia el proceso de actualización.

**Devuelve:**

`Dict` — Estado y progreso de la actualización.

---

#### `reachy_mini.daemon.app.routers.update.get_update_info`

Obtiene información detallada sobre la actualización.

**Devuelve:**

`Dict` — Información detallada de la actualización, incluido el tamaño de descarga y el tiempo estimado.

---

#### `reachy_mini.daemon.app.routers.update.websocket_logs`

Endpoint WebSocket para transmitir registros de actualización.

---

### Cache Router

#### `reachy_mini.daemon.app.routers.cache.clear_huggingface_cache`

Limpia la caché de HuggingFace para liberar espacio en disco.

**Devuelve:**

`Dict` — Estado de limpieza de la caché y cantidad de espacio liberado.

---

#### `reachy_mini.daemon.app.routers.cache.reset_apps`

Restablece todas las aplicaciones al estado inicial.

**Devuelve:**

`Dict` — Estado del restablecimiento.

---

### Kinematics Router

#### `reachy_mini.daemon.app.routers.kinematics.get_kinematics_info`

Obtiene información de cinemática del robot.

**Devuelve:**

`Dict` — Parámetros de cinemática, incluidos parámetros DH y límites de las articulaciones.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_urdf`

Obtiene la descripción URDF del robot.

**Devuelve:**

`str` — Cadena XML URDF que describe el robot.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_stl_file`

Obtiene el archivo de malla STL de un componente del robot.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `component` | `str` | Nombre del componente (por ejemplo, "head", "antenna"). |

**Devuelve:**

`bytes` — Datos del archivo STL.

---

### Volume Router

#### `reachy_mini.daemon.app.routers.volume.get_volume`

Obtiene el volumen actual del altavoz.

**Devuelve:**

`int` — Nivel de volumen actual (0-100).

---

#### `reachy_mini.daemon.app.routers.volume.set_volume`

Establece el volumen del altavoz.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Nivel de volumen (0-100). |

**Devuelve:**

`int` — Volumen realmente establecido (puede estar limitado).

---

#### `reachy_mini.daemon.app.routers.volume.play_test_sound`

Reproduce un sonido de prueba para verificar la salida de audio.

**Devuelve:**

`Dict` — Mensaje de estado que confirma que se ha reproducido el sonido de prueba.

---

#### `reachy_mini.daemon.app.routers.volume.get_microphone_volume`

Obtiene el volumen actual del micrófono.

**Devuelve:**

`int` — Volumen actual del micrófono (0-100).

---

#### `reachy_mini.daemon.app.routers.volume.set_microphone_volume`

Establece el volumen del micrófono.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Nivel de volumen (0-100). |

**Devuelve:**

`int` — Volumen realmente establecido (puede estar limitado).

---

### Logs Router

#### `reachy_mini.daemon.app.routers.logs.websocket_daemon_logs`

Endpoint WebSocket para transmitir registros del daemon.

---

### HF Auth Router

#### `reachy_mini.daemon.app.routers.hf_auth.save_token`

Guarda el token de autenticación de HuggingFace.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `token` | `str` | Token de API de HuggingFace. |

**Devuelve:**

`Dict` — Estado del guardado.

---

#### `reachy_mini.daemon.app.routers.hf_auth.get_auth_status`

Obtiene el estado de autenticación actual.

**Devuelve:**

`Dict` — Estado de autenticación, incluido si el token es válido e información del usuario.

---

#### `reachy_mini.daemon.app.routers.hf_auth.delete_token`

Elimina el token de autenticación guardado.

**Devuelve:**

`Dict` — Estado de la eliminación.