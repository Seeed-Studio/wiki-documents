---
description: Referencia completa de la API para las aplicaciones de Reachy Mini, incluyendo clases principales de aplicaciones, gestión de aplicaciones, información de aplicaciones, asistente de aplicaciones y orígenes de aplicaciones.
title: Referencia de la API de Apps
slug: /reachymini_api_apps
keywords:
- api
- apps
- app management
- app assistant
- hugging face
- app sources
- app utilities
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Apps

## Clases principales de Apps

### `reachy_mini.ReachyMiniApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L27)**

Clase base para las aplicaciones de Reachy Mini.

### Métodos

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L143)**

Ejecuta la lógica principal de la app.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `reachy_mini` | `ReachyMini` | La instancia de Reachy Mini con la que interactuar. |
| `stop_event` | `threading.Event` | Un evento que se puede establecer para detener la app de forma segura. |

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L154)**

Detiene la app de forma segura.

---

#### `wrapped_run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L90)**

Envuelve el método run con la gestión de contexto de Reachy Mini.

---

### `reachy_mini.apps.manager.AppManager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L51)**

Gestor para las apps de Reachy Mini.

### Métodos

#### `close`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L68)**

Limpia el AppManager, deteniendo cualquier app en ejecución.

---

#### `current_app_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L276)**

Obtiene el estado actual de la app.

---

#### `install_new_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L306)**

Instala una nueva app por nombre.

---

#### `is_app_running`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L88)**

Comprueba si una app se está ejecutando o deteniendo actualmente.

---

#### `list_all_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L283)**

Lista las apps disponibles (paralelo asíncrono).

---

#### `list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L290)**

Lista las apps disponibles para un tipo de origen dado.

---

#### `remove_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L317)**

Elimina una app instalada por nombre.

---

#### `restart_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L262)**

Reinicia la app actual.

---

#### `start_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L97)**

Inicia la app como un subproceso, lanza RuntimeError si ya hay una app en ejecución.

---

#### `stop_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L194)**

Detiene el subproceso de la app actual.

---

#### `update_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L328)**

Actualiza una app instalada reinstalándola desde HuggingFace.

Esto conserva la información de origen original y reinstala para obtener la última versión.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Nombre de la app a actualizar. |
| `logger` | `logging.Logger` | Logger para la salida de progreso. |

---

## Gestión de Apps

### `reachy_mini.apps.manager.AppState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L24)**

Estado de una app en ejecución.

---

### `reachy_mini.apps.manager.AppStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L34)**

Estado de una app.

---

### `reachy_mini.apps.manager.RunningApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L43)**

Información sobre una app en ejecución.

---

## Información de la App

### `reachy_mini.apps.AppInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L18)**

Metadatos sobre una app.

---

### `reachy_mini.apps.SourceKind`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L8)**

Tipos de origen de app.

---

## Asistente de Apps

### Funciones del Asistente

#### `reachy_mini.apps.assistant.validate_app_name`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L21)**

Valida el nombre de la app.

---

#### `reachy_mini.apps.assistant.is_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L36)**

Comprueba si la ruta dada está dentro de un repositorio git.

---

#### `reachy_mini.apps.assistant.validate_location`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L48)**

Valida la ubicación donde crear el proyecto de la app.

---

#### `reachy_mini.apps.assistant.validate_location_and_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L57)**

Valida la ubicación donde crear el proyecto de la app, asegurando que no esté en un repositorio git.

---

#### `reachy_mini.apps.assistant.create_cli`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L68)**

Crea un nuevo proyecto de app Reachy Mini usando una CLI.

---

#### `reachy_mini.apps.assistant.create`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L131)**

Crea un nuevo proyecto de app Reachy Mini con el nombre dado en la ruta especificada.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `console` | `Console` | El objeto de consola para imprimir mensajes. |
| `app_name` | `str` | El nombre de la app a crear. |
| `app_path` | `Path` | El directorio donde se creará el proyecto de la app. |

**Devuelve:**

| Type | Description |
|------|-------------|
| `Path` | La ruta al proyecto de la app creada. |

---

#### `reachy_mini.apps.assistant.install_app_with_progress`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L210)**

Instala la app en un entorno virtual temporal con un indicador de progreso.

---

#### `reachy_mini.apps.assistant.check`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L251)**

Comprueba un proyecto de app Reachy Mini existente.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `console` | `Console` | El objeto de consola para imprimir mensajes. |
| `app_path` | `str` | Ruta local a la app que se va a comprobar. |

---

#### `reachy_mini.apps.assistant.request_app_addition`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L562)**

Solicita añadir la nueva app a la tienda oficial de apps de Reachy Mini.

---

#### `reachy_mini.apps.assistant.try_to_push`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L639)**

Intenta hacer push de los cambios al repositorio remoto.

---

#### `reachy_mini.apps.assistant.publish`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L656)**

Publica la app en la tienda de apps de Reachy Mini.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `console` | `Console` | El objeto de consola para imprimir mensajes. |
| `app_path` | `str` | Ruta local a la app que se va a publicar. |
| `commit_message` | `str` | Mensaje de commit para la publicación de la app. |
| `official` | `bool` | Solicita publicar la app como una app oficial de Reachy Mini. |
| `no_check` | `bool` | No ejecutar comprobaciones antes de publicar la app. |
| `private` | `bool \| None` | Si es True, hacerla privada. Si es False, hacerla pública. Si es None, preguntar. |

---

## Orígenes de Apps

### `reachy_mini.apps.sources.hf_auth.save_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L384)**

Guarda de forma segura un token de acceso de HuggingFace.

Valida el token contra la API de Hugging Face y, si es válido, lo almacena usando el mecanismo estándar de autenticación de Hugging Face para reutilizarlo entre sesiones.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `token` | `str` | El token de acceso de HuggingFace que se va a guardar. |

**Devuelve:**

| Type | Description |
|------|-------------|
| `dict` | Un diccionario que contiene: "status" ("success" o "error"), "username" (el nombre de usuario de Hugging Face asociado si tiene éxito) y "message" (una descripción del error si falla). |

---

### `reachy_mini.apps.sources.hf_auth.get_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L430)**

Obtiene el token de HuggingFace almacenado.

**Devuelve:**

| Type | Description |
|------|-------------|
| `str \| None` | El token almacenado, o None si no hay ningún token almacenado. |

---

### `reachy_mini.apps.sources.hf_auth.delete_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L440)**

Elimina el/los token(s) de HuggingFace almacenados.

:::note

logout() sin argumentos cierra la sesión de todos los tokens de acceso guardados.

:::

---

### `reachy_mini.apps.sources.hf_auth.check_token_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L454)**

Comprueba si un token está almacenado y es válido.

**Devuelve:**

| Type | Description |
|------|-------------|
| `dict` | Diccionario de estado con is_logged_in y username. |

---

### `reachy_mini.apps.sources.hf_space.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L35)**

Listar las aplicaciones disponibles en Hugging Face Spaces.

---

### `reachy_mini.apps.sources.hf_space.list_all_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L78)**

Lista todas las aplicaciones disponibles en Hugging Face Spaces (incluyendo las no oficiales).

---

### `reachy_mini.apps.sources.local_common_venv.get_app_site_packages`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L126)**

API pública para obtener el directorio `site-packages` del venv de una aplicación dada.

:::info

- Para venvs separados: devuelve el `site-packages` del venv de la aplicación
- Para entorno compartido (modo SDK): devuelve el `site-packages` del entorno actual

:::

---

### `reachy_mini.apps.sources.local_common_venv.get_app_python`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L145)**

Obtiene la ruta del ejecutable de Python para una aplicación (multiplataforma).

:::info

- Para venvs separados: devuelve el Python del venv de la aplicación
- Para entorno compartido: devuelve el intérprete de Python actual

:::

---

### `reachy_mini.apps.sources.local_common_venv.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L344)**

Lista las aplicaciones disponibles desde entry points o venvs separados.

---

### `reachy_mini.apps.sources.local_common_venv.install_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L460)**

Instala un paquete dado un objeto AppInfo, transmitiendo los registros en tiempo real.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `app` | `AppInfo` | AppInfo con los detalles del paquete. |
| `logger` | `logging.Logger` | Logger para la salida de progreso. |
| `wireless_version` | `bool` | Indica si se está ejecutando en la versión inalámbrica. |
| `desktop_app_daemon` | `bool` | Indica si se está ejecutando como daemon de la aplicación de escritorio. |
| `force_reinstall` | `bool` | Si es True, fuerza la reinstalación incluso si ya está instalado (para actualizaciones). |

---

### `reachy_mini.apps.sources.local_common_venv.get_app_module`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L731)**

Obtiene el nombre del módulo de una aplicación sin cargarlo (para ejecución en subproceso).

---

### `reachy_mini.apps.sources.local_common_venv.uninstall_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L764)**

Desinstala un paquete dado el nombre de una aplicación.

---

## Utilidades de aplicaciones

### `reachy_mini.apps.utils.running_command`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/utils.py#L7)**

Ejecuta un comando de shell y transmite su salida al logger proporcionado.
