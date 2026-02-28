---
description: Referencia completa de la API para el daemon de Reachy Mini, incluyendo las clases principales del daemon, clases de backend, utilidades del daemon, modelos de la app y routers de la app.
title: Referencia de la API del Daemon
slug: /es/reachymini_api_daemon
keywords:
- api
- daemon
- backend
- modelos de app
- routers de app
- fastapi
- rest
- websocket
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---
# Daemon

## Clases principales del Daemon

### `reachy_mini.daemon.daemon.Daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L37)**

Daemon para el robot Reachy Mini simulado o real.

Ejecuta el servidor con el backend apropiado (Mujoco para simulación o RobotBackend para hardware real).

### Métodos

#### `restart`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L366)**

Reinicia el daemon de Reachy Mini.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `sim` | `bool` | Si es True, se ejecuta en modo simulación usando Mujoco. Por defecto es None (usa el valor anterior). |
| `mockup_sim` | `bool` | Si es True, se ejecuta en modo simulación ligero (sin MuJoCo). Por defecto es None (usa el valor anterior). |
| `serialport` | `str` | Puerto serie para los motores reales. Por defecto es None (usa el valor anterior). |
| `scene` | `str` | Nombre de la escena a cargar en modo simulación ("empty" o "minimal"). Por defecto es None (usa el valor anterior). |
| `headless` | `bool` | Si es True, ejecuta Mujoco en modo headless (sin GUI). Por defecto es None (usa el valor anterior). |
| `use_audio` | `bool` | Si es True, habilita el audio. Por defecto es None (usa el valor anterior). |
| `localhost_only` | `bool` | Si es True, restringe el servidor solo a clientes localhost. Por defecto es None (usa el valor anterior). |
| `wake_up_on_start` | `bool` | Si es True, despierta a Reachy Mini al iniciar. Por defecto es None (no lo despierta). |
| `goto_sleep_on_stop` | `bool` | Si es True, pone a dormir a Reachy Mini al detenerse. Por defecto es None (no lo pone a dormir). |

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `DaemonState` | El estado actual del daemon después de intentar reiniciarlo. |

---

#### `run4ever`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L462)**

Ejecuta el daemon de Reachy Mini indefinidamente.

Primero inicia el daemon, luego sigue comprobando el estado y permite un apagado limpio cuando el usuario interrumpe (Ctrl+C).

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `sim` | `bool` | Si es True, se ejecuta en modo simulación usando Mujoco. Por defecto es False. |
| `mockup_sim` | `bool` | Si es True, se ejecuta en modo simulación ligero (sin MuJoCo). Por defecto es False. |
| `serialport` | `str` | Puerto serie para los motores reales. Por defecto es "auto", que intentará encontrar el puerto automáticamente. |
| `scene` | `str` | Nombre de la escena a cargar en modo simulación ("empty" o "minimal"). Por defecto es "empty". |
| `localhost_only` | `bool` | Si es True, restringe el servidor solo a clientes localhost. Por defecto es True. |
| `wake_up_on_start` | `bool` | Si es True, despierta a Reachy Mini al iniciar. Por defecto es True. |
| `goto_sleep_on_stop` | `bool` | Si es True, pone a dormir a Reachy Mini al detenerse. Por defecto es True. |
| `check_collision` | `bool` | Si es True, habilita la comprobación de colisiones. Por defecto es False. |
| `kinematics_engine` | `str` | Motor de cinemática a utilizar. Por defecto es "AnalyticalKinematics". |
| `headless` | `bool` | Si es True, ejecuta Mujoco en modo headless (sin GUI). Por defecto es False. |
| `use_audio` | `bool` | Si es True, habilita el audio. Por defecto es True. |

---

#### `start`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L144)**

Inicia el daemon de Reachy Mini.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `sim` | `bool` | Si es True, se ejecuta en modo simulación usando Mujoco. Por defecto es False. |
| `mockup_sim` | `bool` | Si es True, se ejecuta en modo simulación ligero (sin MuJoCo). Por defecto es False. |
| `serialport` | `str` | Puerto serie para los motores reales. Por defecto es "auto", que intentará encontrar el puerto automáticamente. |
| `scene` | `str` | Nombre de la escena a cargar en modo simulación ("empty" o "minimal"). Por defecto es "empty". |
| `localhost_only` | `bool` | Si es True, restringe el servidor solo a clientes localhost. Por defecto es True. |
| `wake_up_on_start` | `bool` | Si es True, despierta a Reachy Mini al iniciar. Por defecto es True. |
| `check_collision` | `bool` | Si es True, habilita la comprobación de colisiones. Por defecto es False. |
| `kinematics_engine` | `str` | Motor de cinemática a utilizar. Por defecto es "AnalyticalKinematics". |
| `headless` | `bool` | Si es True, ejecuta Mujoco en modo headless (sin GUI). Por defecto es False. |
| `use_audio` | `bool` | Si es True, habilita el audio. Por defecto es True. |
| `hardware_config_filepath` | `str \| None` | Ruta al archivo YAML de configuración de hardware. Por defecto es None. |

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `DaemonState` | El estado actual del daemon después de intentar iniciarlo. |

---

#### `status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L436)**

Obtiene el estado actual del daemon de Reachy Mini.

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L287)**

Detiene el daemon de Reachy Mini.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `goto_sleep_on_stop` | `bool` | Si es True, pone a dormir a Reachy Mini al detenerse. Por defecto es True. |

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `DaemonState` | El estado actual del daemon después de intentar detenerlo. |

---

### `reachy_mini.daemon.daemon.DaemonState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L591)**

Enum que representa el estado del daemon de Reachy Mini.

---

### `reachy_mini.daemon.daemon.DaemonStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L603)**

Dataclass que representa el estado del daemon de Reachy Mini.

---

## Clases de Backend

### Backend abstracto

#### `reachy_mini.daemon.backend.abstract.MotorControlMode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/abstract.py#L43)**

Enum para los modos de control de motor.

---

### Backend del robot

#### `reachy_mini.daemon.backend.robot.RobotBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L28)**

Backend de robot real para Reachy Mini.

### Métodos

#### `close`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L316)**

Cierra la conexión con el controlador de motores y libera los recursos.

---

#### `compensate_head_gravity`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L513)**

Calcula las corrientes necesarias para compensar la gravedad.

---

#### `disable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L336)**

Desactiva los motores apagando el par.

---

#### `enable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L329)**

Activa los motores encendiendo el par.

---

#### `get_all_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L438)**

Obtiene las posiciones articulares actuales del robot.

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `tuple` | Una tupla que contiene dos listas: la primera lista es para las posiciones articulares de la cabeza y la segunda lista es para las posiciones articulares de las antenas. |

---

#### `get_imu_data`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L477)**

Obtiene los datos actuales de la IMU (acelerómetro, giroscopio, cuaternión, temperatura).

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `dict \| None` | Diccionario con las claves 'accelerometer', 'gyroscope', 'quaternion' y 'temperature', o None si la IMU no está disponible. |

---

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L466)**

Obtiene las posiciones articulares actuales de las antenas.

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `list` | Una lista de posiciones articulares para las antenas. |

---

#### `get_present_head_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L455)**

Obtiene las posiciones articulares actuales de la cabeza.

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `list` | Una lista de posiciones articulares para la cabeza, incluyendo la rotación del cuerpo. |

---

#### `get_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L323)**

Obtiene el estado actual del backend del robot.

---

#### `read_hardware_errors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L614)**

Lee los errores de hardware desde el controlador de motores.

---

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L136)**

Ejecuta el bucle de control para el backend del robot.

Este método actualiza continuamente el controlador de motores a una frecuencia especificada. Lee las posiciones articulares, actualiza el controlador de motores y publica las posiciones articulares. También gestiona errores y reintentos si el controlador de motores no responde.

---

#### `set_antennas_operation_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L398)**

Cambia el modo de funcionamiento de los motores de las antenas.

:::warning

Este método no funciona bien con los motores feetech actuales, ya que no admiten control de par. Por lo tanto, el método desactiva las antenas cuando está en modo de control de par.

:::

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `mode` | `int` | El modo de funcionamiento para los motores de las antenas (0: control de par, 3: control de posición, 5: control de posición basado en corriente). |

---

#### `set_head_operation_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L343)**

Cambiar el modo de funcionamiento de los motores de la cabeza.

Los modos de funcionamiento pueden ser:
- 0: control de par
- 3: control de posición
- 5: control de posición basado en corriente

:::warning

Este método no funciona bien con los motores Feetech actuales (rotación del cuerpo), ya que no admiten el control de par. Por lo tanto, el método desactiva las antenas cuando está en modo de control de par. Los motores Dynamixel utilizados para la cabeza sí admiten el control de par, por lo que este método funciona como se espera.

:::

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `mode` | `int` | El modo de funcionamiento para los motores de la cabeza. |

---

#### `set_motor_torque_ids`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L579)**

Establecer el estado de par para nombres de motores específicos.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `ids` | `list[int]` | Lista de IDs de motores para los que se establecerá el estado de par. |
| `on` | `bool` | `True` para habilitar el par, `False` para deshabilitarlo. |

---

### `reachy_mini.daemon.backend.robot.RobotBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L678)**

Estado del Backend del Robot.

---

### Backend MuJoCo

#### `reachy_mini.daemon.backend.mujoco.MujocoMockupBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mujoco/__init__.py#L15)**

Clase simulada para evitar errores de importación cuando MuJoCo no está instalado.

---

#### `reachy_mini.daemon.backend.mujoco.MujocoMockupBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mujoco/__init__.py#L28)**

Clase simulada para evitar errores de importación cuando MuJoCo no está instalado.

---

### Backend de Simulación Simulada

#### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L21)**

Reachy Mini simulado y ligero sin MuJoCo.

Este backend proporciona una simulación sencilla donde las posiciones objetivo se aplican inmediatamente sin simulación física. Las apps acceden directamente a la cámara web/micrófono (no mediante streaming UDP).

### Métodos

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L149)**

Obtener las posiciones articulares actuales de las antenas.

---

#### `get_present_head_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L143)**

Obtener las posiciones articulares actuales de la cabeza.

---

#### `get_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L139)**

Obtener el estado del backend.

---

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L68)**

Ejecutar el bucle de simulación.

En modo mockup-sim, las posiciones objetivo se aplican inmediatamente.

---

#### `set_motor_torque_ids`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L163)**

Establecer el estado de par del motor para nombres de motores específicos.

:::note

Sin operación en modo mockup-sim.

:::

---

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L172)**

Estado del backend MockupSim.

---

## Utilidades del Daemon

### `reachy_mini.daemon.utils.convert_enum_to_dict`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L164)**

Convertir una dataclass que contiene Enums a un diccionario con valores de enum.

---

### `reachy_mini.daemon.utils.find_serial_port`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L101)**

Encontrar el puerto serie para Reachy Mini en función del VID y el PID o el UART de la Raspberry Pi para la versión inalámbrica.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `wireless_version` | `bool` | Si se debe buscar la versión inalámbrica usando el UART de la Raspberry Pi. |
| `vid` | `str` | ID de proveedor del dispositivo (por ejemplo, "1a86"). |
| `pid` | `str` | ID de producto del dispositivo (por ejemplo, "55d3"). |
| `pi_uart` | `str` | Ruta al dispositivo UART de la Raspberry Pi (por ejemplo, "/dev/ttyAMA3"). |

---

### `reachy_mini.daemon.utils.get_ip_address`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L129)**

Obtener la dirección IP de una interfaz de red específica (Linux y Windows).

---

## App

### Modelos

#### `reachy_mini.daemon.app.models.Matrix4x4Pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L14)**

Representar una pose 3D mediante su matriz de transformación 4x4 (la traslación se expresa en metros).

---

#### `reachy_mini.daemon.app.models.XYZRPYPose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L68)**

Representar una pose 3D usando posición (x, y, z) en metros y orientación (roll, pitch, yaw) en radianes.

---

#### `reachy_mini.daemon.app.models.FullBodyTarget`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L116)**

Representar el cuerpo completo incluyendo la pose de la cabeza y las articulaciones de las antenas.

---

#### `reachy_mini.daemon.app.models.DoAInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L144)**

Información de la dirección de llegada (Direction of Arrival) desde la matriz de micrófonos.

---

#### `reachy_mini.daemon.app.models.FullState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L151)**

Representar el estado completo del robot incluyendo todas las posiciones articulares y poses.

---

### Dependencias

#### `reachy_mini.daemon.app.dependencies.get_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L10)**

Obtener el daemon como dependencia de la petición.

---

#### `reachy_mini.daemon.app.dependencies.get_backend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L16)**

Obtener el backend como dependencia de la petición.

---

#### `reachy_mini.daemon.app.dependencies.get_app_manager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L27)**

Obtener el gestor de la app como dependencia de la petición.

---

#### `reachy_mini.daemon.app.dependencies.ws_get_backend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L33)**

Obtener el backend como dependencia de WebSocket.

---

### Trabajos

#### `reachy_mini.daemon.app.bg_job_register.JobStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L15)**

Enum para el estado de los trabajos.

---

#### `reachy_mini.daemon.app.bg_job_register.JobInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L24)**

Modelo Pydantic para el estado de los trabajos de instalación.

---

#### `reachy_mini.daemon.app.bg_job_register.JobHandler`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L33)**

Manejador para trabajos en segundo plano.

---

#### `reachy_mini.daemon.app.bg_job_register.run_command`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L44)**

Iniciar un trabajo en segundo plano, con un logger personalizado y devolver su `job_id`.

---

#### `reachy_mini.daemon.app.bg_job_register.get_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L93)**

Obtener la información de un trabajo por su ID.

---

#### `reachy_mini.daemon.app.bg_job_register.ws_poll_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L103)**

Endpoint WebSocket para transmitir los registros de trabajos en tiempo real.

---

### Aplicación Principal

#### `reachy_mini.daemon.app.main.Args`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L54)**

Argumentos para configurar el daemon de Reachy Mini.

---

#### `reachy_mini.daemon.app.main.create_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L91)**

Crear y configurar la aplicación FastAPI.

---

#### `reachy_mini.daemon.app.main.run_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L264)**

Ejecutar la app FastAPI con Uvicorn.

---

#### `reachy_mini.daemon.app.main`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L383)**

Ejecutar la app FastAPI con Uvicorn.

---

## Routers de la App

### Router del Daemon

#### `reachy_mini.daemon.app.routers.daemon.start_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L19)**

Iniciar el daemon.

---

#### `reachy_mini.daemon.app.routers.daemon.stop_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L48)**

Detener el daemon, opcionalmente poniendo el robot en reposo.

---

#### `reachy_mini.daemon.app.routers.daemon.restart_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L64)**

Reinicia el daemon.

---

#### `reachy_mini.daemon.app.routers.daemon.get_daemon_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L80)**

Obtén el estado actual del daemon.

---

### Enrutador de estado

#### `reachy_mini.daemon.app.routers.state.get_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L21)**

Obtén la pose actual de la cabeza.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `use_pose_matrix` | `bool` | Indica si se debe usar la representación de la matriz de pose (4x4 aplanada) o la representación de traslación + ángulos de Euler (x, y, z, roll, pitch, yaw). |
| `backend` | `Backend` | La instancia de backend. |

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `AnyPose` | La pose actual de la cabeza. |

---

#### `reachy_mini.daemon.app.routers.state.get_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L39)**

Obtén el yaw actual del cuerpo (en radianes).

---

#### `reachy_mini.daemon.app.routers.state.get_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L47)**

Obtén las posiciones actuales de las articulaciones de las antenas (en radianes) - (izquierda, derecha).

---

#### `reachy_mini.daemon.app.routers.state.get_doa`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L57)**

Obtén la dirección de llegada (Direction of Arrival) desde la matriz de micrófonos.

Devuelve el ángulo en radianes (0=izquierda, π/2=frente, π=derecha) y el estado de detección de voz. Devuelve None si el dispositivo de audio no está disponible.

---

#### `reachy_mini.daemon.app.routers.state.get_full_state`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L74)**

Obtén el estado completo del robot, con campos opcionales.

---

#### `reachy_mini.daemon.app.routers.state.ws_full_state`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L130)**

Punto final WebSocket para transmitir el estado completo del robot.

---

### Enrutador de motores

#### `reachy_mini.daemon.app.routers.motors.get_motor_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/motors.py#L27)**

Obtén el estado actual de los motores.

---

#### `reachy_mini.daemon.app.routers.motors.set_motor_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/motors.py#L33)**

Configura el modo de control del motor.

---

### Enrutador de movimiento

#### `reachy_mini.daemon.app.routers.move.get_running_moves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L131)**

Obtén una lista de las tareas de movimiento que se están ejecutando actualmente.

---

#### `reachy_mini.daemon.app.routers.move.goto`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L137)**

Solicita un movimiento hacia un objetivo específico.

---

#### `reachy_mini.daemon.app.routers.move.play_wake_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L152)**

Solicita que el robot se despierte.

---

#### `reachy_mini.daemon.app.routers.move.play_goto_sleep`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L158)**

Solicita que el robot se vaya a dormir.

---

#### `reachy_mini.daemon.app.routers.move.list_recorded_move_dataset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L164)**

Enumera los movimientos grabados disponibles en un conjunto de datos.

---

#### `reachy_mini.daemon.app.routers.move.play_recorded_move_dataset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L177)**

Solicita que el robot reproduzca un movimiento grabado predefinido de un conjunto de datos.

---

#### `reachy_mini.daemon.app.routers.move.stop_move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L195)**

Detén una tarea de movimiento en ejecución.

---

#### `reachy_mini.daemon.app.routers.move.set_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L216)**

Ruta POST para establecer un único FullBodyTarget.

---

#### `reachy_mini.daemon.app.routers.move.ws_move_updates`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L201)**

Ruta WebSocket para transmitir actualizaciones de movimiento.

---

### Enrutador de aplicaciones

#### `reachy_mini.daemon.app.routers.apps.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L46)**

Enumera las aplicaciones disponibles (incluyendo las no instaladas).

---

#### `reachy_mini.daemon.app.routers.apps.list_all_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L55)**

Enumera todas las aplicaciones disponibles (incluyendo las no instaladas).

---

#### `reachy_mini.daemon.app.routers.apps.install_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L63)**

Instala una nueva aplicación por su información (en segundo plano, devuelve job_id).

---

#### `reachy_mini.daemon.app.routers.apps.remove_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L78)**

Elimina una aplicación instalada por su nombre (en segundo plano, devuelve job_id).

---

#### `reachy_mini.daemon.app.routers.apps.job_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L91)**

Obtén el estado/registros de un trabajo.

---

#### `reachy_mini.daemon.app.routers.apps.ws_apps_manager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L101)**

Ruta WebSocket para transmitir en vivo el estado/registros de un trabajo, enviando actualizaciones tan pronto como haya nuevos registros disponibles.

---

#### `reachy_mini.daemon.app.routers.apps.start_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L109)**

Inicia una aplicación por su nombre.

---

#### `reachy_mini.daemon.app.routers.apps.restart_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L121)**

Reinicia la aplicación que se está ejecutando actualmente.

---

#### `reachy_mini.daemon.app.routers.apps.stop_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L132)**

Detén la aplicación que se está ejecutando actualmente.

---

#### `reachy_mini.daemon.app.routers.apps.current_app_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L143)**

Obtén el estado de la aplicación que se está ejecutando actualmente, si existe.

---

#### `reachy_mini.daemon.app.routers.apps.install_private_space`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L157)**

Instala un espacio privado de HuggingFace.

Requiere que el token de HF se almacene primero mediante /api/hf-auth/save-token.

---

### Enrutador de actualización

#### `reachy_mini.daemon.app.routers.update.available`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L32)**

Comprueba si hay una actualización disponible para Reachy Mini Wireless.

---

#### `reachy_mini.daemon.app.routers.update.start_update`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L58)**

Inicia el proceso de actualización para la versión Reachy Mini Wireless.

---

#### `reachy_mini.daemon.app.routers.update.get_update_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L117)**

Obtén la información de un trabajo de actualización.

---

#### `reachy_mini.daemon.app.routers.update.websocket_logs`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L126)**

Punto final WebSocket para transmitir en tiempo real los registros de actualización.

---

### Enrutador de caché

#### `reachy_mini.daemon.app.routers.cache.clear_huggingface_cache`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/cache.py#L13)**

Limpia el directorio de caché de HuggingFace.

---

#### `reachy_mini.daemon.app.routers.cache.reset_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/cache.py#L32)**

Elimina el directorio del entorno virtual de las aplicaciones.

---

### Enrutador de cinemática

#### `reachy_mini.daemon.app.routers.kinematics.get_kinematics_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L29)**

Obtén la información actual de la cinemática.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_urdf`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L42)**

Obtén la representación URDF del robot.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_stl_file`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L48)**

Obtén la ruta a un archivo de recurso STL.

---

### Enrutador de volumen

#### `reachy_mini.daemon.app.routers.volume.get_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L79)**

Obtén el nivel actual de volumen de salida.

---

#### `reachy_mini.daemon.app.routers.volume.set_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L86)**

Establece el nivel de volumen de salida y reproduce un sonido de prueba.

---

#### `reachy_mini.daemon.app.routers.volume.play_test_sound`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L107)**

Reproduce un sonido de prueba.

---

#### `reachy_mini.daemon.app.routers.volume.get_microphone_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L139)**

Obtiene el nivel actual de volumen de entrada del micrófono.

---

#### `reachy_mini.daemon.app.routers.volume.set_microphone_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L146)**

Establece el nivel de volumen de entrada del micrófono.

---

### Enrutador de registros

#### `reachy_mini.daemon.app.routers.logs.websocket_daemon_logs`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/logs.py#L15)**

Punto final WebSocket para transmitir en tiempo real los registros de journalctl del servicio reachy-mini-daemon.

---

### Enrutador de autenticación HF

#### `reachy_mini.daemon.app.routers.hf_auth.save_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L33)**

Guarda el token de HuggingFace después de la validación.

---

#### `reachy_mini.daemon.app.routers.hf_auth.get_auth_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L49)**

Comprueba si el usuario está autenticado con HuggingFace.

---

#### `reachy_mini.daemon.app.routers.hf_auth.delete_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L79)**

Elimina el token de HuggingFace almacenado.
