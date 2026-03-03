---
description: Referencia completa de la API para las utilidades de Reachy Mini, incluidas funciones de interpolación, configuración de hardware, visualización con Rerun y utilidades principales.
title: Referencia de la API de Utils
slug: /reachymini_api_utils
keywords:
- api
- utils
- interpolation
- hardware config
- visualization
- urdf
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---
# Utils

## Funciones de interpolación

### `reachy_mini.utils.interpolation.minimum_jerk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L13)**

Calcula la función de interpolación de mínimo tirón desde la posición inicial hasta la posición objetivo.

---

### `reachy_mini.utils.interpolation.linear_pose_interpolation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L58)**

Interpola linealmente entre dos poses en un espacio 6D.

---

### `reachy_mini.utils.interpolation.time_trajectory`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L96)**

Calcula el valor de la trayectoria temporal en función del método de interpolación especificado.

---

### `reachy_mini.utils.interpolation.delta_angle_between_mat_rot`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L135)**

Calcula el ángulo (en radianes) entre dos matrices de rotación 3x3 `P` y `Q`.

Esto es equivalente a la distancia angular en el espacio eje-ángulo. Se calcula mediante la traza de la matriz de rotación relativa.

**Parámetros:**

| Nombre | Descripción |
|------|-------------|
| `P` | Una matriz de rotación 3x3. |
| `Q` | Otra matriz de rotación 3x3. |

**Devuelve:**

El ángulo en radianes entre las dos rotaciones.

**Referencias:**
- [https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices](https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices)
- [http://www.boris-belousov.net/2016/12/01/quat-dist/](http://www.boris-belousov.net/2016/12/01/quat-dist/)

---

### `reachy_mini.utils.interpolation.distance_between_poses`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L161)**

Calcula tres tipos de distancia entre dos matrices de transformación homogénea 4x4.

El resultado combina traslación (en mm) y rotación (en grados) usando una equivalencia arbitraria pero emocionalmente satisfactoria: **1 grado ≈ 1 mm**.

**Parámetros:**

| Nombre | Descripción |
|------|-------------|
| `pose1` | Una matriz de transformación homogénea 4x4 que representa la primera pose. |
| `pose2` | Una matriz de transformación homogénea 4x4 que representa la segunda pose. |

**Devuelve:**

Una tupla de:
- distancia de traslación en metros
- distancia angular en radianes
- distancia desatada en mm mágicos (traslación en mm + rotación en grados)

---

### `reachy_mini.utils.interpolation.compose_world_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L187)**

Compone una pose absoluta en el marco del mundo con un desplazamiento en el marco del mundo.

- **las traslaciones se suman en el mundo:** `t_final = t_abs + t_off`
- **las rotaciones se componen en el mundo:** `R_final = R_off @ R_abs`

Esto rota el marco en su lugar (alrededor de su propio origen) mediante una rotación definida en los ejes del mundo y lo desplaza mediante una traslación en el mundo.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `T_abs` | `(4,4) ndarray` | Pose absoluta en el marco del mundo. |
| `T_off_world` | `(4,4) ndarray` | Transformación de desplazamiento especificada en los ejes del mundo (dx,dy,dz en el mundo; dR alrededor de los ejes del mundo). |
| `reorthonormalize` | `bool` | Si es True, reortogonaliza la rotación resultante mediante SVD para combatir la deriva. |

**Devuelve:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `T_final` | `(4,4) ndarray` | Pose resultante en el marco del mundo. |

---

### `reachy_mini.utils.interpolation.InterpolationTechnique`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L87)**

Enumeración de técnicas de interpolación.

---

## Configuración de hardware

### `reachy_mini.utils.hardware_config.parser.MotorConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L9)**

Configuración del motor.

---

### `reachy_mini.utils.hardware_config.parser.SerialConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L23)**

Configuración serie.

---

### `reachy_mini.utils.hardware_config.parser.ReachyMiniConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L30)**

Configuración de Reachy Mini.

---

### `reachy_mini.utils.hardware_config.parser.parse_yaml_config`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L38)**

Analiza el archivo de configuración YAML y devuelve un `ReachyMiniConfig`.

---

## Visualización con Rerun

### `reachy_mini.utils.rerun.Rerun`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L28)**

Registro con Rerun para Reachy Mini.

### Métodos

#### `log_camera`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L126)**

Registra la imagen de la cámara en Rerun.

---

#### `log_movements`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L203)**

Registra los datos de movimiento en Rerun.

---

#### `set_absolute_path_to_urdf`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L97)**

Establece las rutas absolutas en el archivo URDF. Rerun no puede leer las rutas `"package://"`.

---

#### `start`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L107)**

Inicia el hilo de registro de Rerun.

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L113)**

Detiene el hilo de registro de Rerun.

---

### `reachy_mini.utils.rerun.UrdfEntityPaths`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L276)**

Ayuda a construir rutas de entidades de eslabones/articulaciones que coinciden con el registrador URDF nativo.

---

## Utilidades de la versión inalámbrica

### `reachy_mini.utils.wireless_version.utils.call_logger_wrapper`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/utils.py#L8)**

Ejecuta un comando de forma asíncrona, transmitiendo stdout y stderr al logger en tiempo real.

**Parámetros:**

| Nombre | Descripción |
|------|-------------|
| `command` | lista o tupla de argumentos del comando (no una cadena) |
| `logger` | objeto logger con métodos `.info` y `.error` |

---

### `reachy_mini.utils.wireless_version.update.update_reachy_mini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update.py#L12)**

Actualiza el paquete reachy_mini y reinicia el daemon.

**Parámetros:**

| Nombre | Descripción |
|------|-------------|
| `logger` | Logger para transmitir la salida. |
| `pre_release` | Si es True, instala la versión preliminar desde PyPI (se ignora si se establece git_ref). |
| `git_ref` | Si se establece, instala desde esta etiqueta/rama de GitHub en lugar de PyPI. |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_fix_venvs_ownership`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L17)**

Para unidades inalámbricas, comprueba si los archivos bajo venvs_path pertenecen al usuario pollen y corrige si es necesario.

**Parámetros:**

| Nombre | Descripción |
|------|-------------|
| `venvs_path` | Ruta al directorio de entornos virtuales (por defecto: /venvs) |
| `custom_logger` | Logger opcional para usar en lugar del logger del módulo |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_bluetooth_service`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L80)**

:::info

Comprueba si el servicio de bluetooth necesita actualizarse y lo actualiza si es diferente.

Compara el `bluetooth_service.py` de origen con la versión instalada en `/bluetooth/bluetooth_service.py`. Si son diferentes, copia la nueva versión y reinicia el servicio de bluetooth. También sincroniza la carpeta `commands/`.

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_wireless_launcher`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L190)**

:::info

Comprueba si el servicio del daemon inalámbrico necesita actualizarse y lo actualiza si es diferente.

Compara el `reachy-mini-daemon.service` de origen con la versión instalada. Si son diferentes, copia la nueva versión y recarga systemd.

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_sync_apps_venv_sdk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L255)**

:::info

Comprueba si el SDK de apps_venv coincide con la fuente de instalación del daemon y lo sincroniza si es necesario.

Compara tanto la versión COMO la fuente de instalación (PyPI frente a git ref). Si el daemon se instaló desde una git ref, apps_venv se sincronizará con la misma referencia.

:::

---

### `reachy_mini.utils.wireless_version.update_available.is_update_available`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L36)**

Comprueba si hay una actualización disponible para el paquete dado.

---

### `reachy_mini.utils.wireless_version.update_available.get_pypi_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L47)**

Obtiene la última versión de un paquete desde PyPI.

---

### `reachy_mini.utils.wireless_version.update_available.get_local_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L65)**

Obtiene la versión actualmente instalada de un paquete.

---

## Utilidades principales

### `reachy_mini.utils.create_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/__init__.py#L13)**

Crea una matriz de transformación homogénea que represente una pose en un espacio 6D (posición y orientación).

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `x` | `float` | Coordenada X de la posición. |
| `y` | `float` | Coordenada Y de la posición. |
| `z` | `float` | Coordenada Z de la posición. |
| `roll` | `float` | Ángulo de roll |
| `pitch` | `float` | Ángulo de pitch |
| `yaw` | `float` | Ángulo de yaw |
| `mm` | `bool` | Si es True, convierte la posición de milímetros a metros. |
| `degrees` | `bool` | Si es True, interpreta roll, pitch y yaw como grados; en caso contrario, como radianes. |

**Devuelve:**

`np.ndarray` — Una matriz de transformación homogénea 4x4 que representa la pose.

---

## Análisis de URDF

### `reachy_mini.utils.parse_urdf_for_kinematics.get_data`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/parse_urdf_for_kinematics.py#L17)**

Genera el archivo `urdf_kinematics.json`.
