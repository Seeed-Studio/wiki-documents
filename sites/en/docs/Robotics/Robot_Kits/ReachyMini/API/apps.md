---
description: Complete API reference for Reachy Mini apps including core app classes, app management, app information, app assistant, and app sources.
title: Apps API Reference
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
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/reachymini_api_apps/
---

# Apps

## Core App Classes

### `reachy_mini.ReachyMiniApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L27)**

Base class for Reachy Mini applications.

### Methods

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L143)**

Run the main logic of the app.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `reachy_mini` | `ReachyMini` | The Reachy Mini instance to interact with. |
| `stop_event` | `threading.Event` | An event that can be set to stop the app gracefully. |

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L154)**

Stop the app gracefully.

---

#### `wrapped_run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L90)**

Wrap the run method with Reachy Mini context management.

---

### `reachy_mini.apps.manager.AppManager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L51)**

Manager for Reachy Mini apps.

### Methods

#### `close`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L68)**

Clean up the AppManager, stopping any running app.

---

#### `current_app_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L276)**

Get the current status of the app.

---

#### `install_new_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L306)**

Install a new app by name.

---

#### `is_app_running`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L88)**

Check if an app is currently running or stopping.

---

#### `list_all_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L283)**

List available apps (parallel async).

---

#### `list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L290)**

List available apps for given source kind.

---

#### `remove_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L317)**

Remove an installed app by name.

---

#### `restart_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L262)**

Restart the current app.

---

#### `start_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L97)**

Start the app as a subprocess, raises RuntimeError if an app is already running.

---

#### `stop_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L194)**

Stop the current app subprocess.

---

#### `update_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L328)**

Update an installed app by reinstalling it from HuggingFace.

This preserves the original source info and reinstalls to get the latest version.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Name of the app to update. |
| `logger` | `logging.Logger` | Logger for progress output. |

---

## App Management

### `reachy_mini.apps.manager.AppState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L24)**

Status of a running app.

---

### `reachy_mini.apps.manager.AppStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L34)**

Status of an app.

---

### `reachy_mini.apps.manager.RunningApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L43)**

Information about a running app.

---

## App Information

### `reachy_mini.apps.AppInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L18)**

Metadata about an app.

---

### `reachy_mini.apps.SourceKind`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L8)**

Kinds of app source.

---

## App Assistant

### Assistant Functions

#### `reachy_mini.apps.assistant.validate_app_name`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L21)**

Validate the app name.

---

#### `reachy_mini.apps.assistant.is_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L36)**

Check if the given path is inside a git repository.

---

#### `reachy_mini.apps.assistant.validate_location`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L48)**

Validate the location where to create the app project.

---

#### `reachy_mini.apps.assistant.validate_location_and_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L57)**

Validate the location where to create the app project, ensuring it's not in a git repo.

---

#### `reachy_mini.apps.assistant.create_cli`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L68)**

Create a new Reachy Mini app project using a CLI.

---

#### `reachy_mini.apps.assistant.create`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L131)**

Create a new Reachy Mini app project with the given name at the specified path.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `console` | `Console` | The console object for printing messages. |
| `app_name` | `str` | The name of the app to create. |
| `app_path` | `Path` | The directory where the app project will be created. |

**Returns:**

| Type | Description |
|------|-------------|
| `Path` | The path to the created app project. |

---

#### `reachy_mini.apps.assistant.install_app_with_progress`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L210)**

Install the app in a temporary virtual environment with a progress spinner.

---

#### `reachy_mini.apps.assistant.check`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L251)**

Check an existing Reachy Mini app project.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `console` | `Console` | The console object for printing messages. |
| `app_path` | `str` | Local path to the app to check. |

---

#### `reachy_mini.apps.assistant.request_app_addition`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L562)**

Request to add the new app to the official Reachy Mini app store.

---

#### `reachy_mini.apps.assistant.try_to_push`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L639)**

Try to push changes to the remote repository.

---

#### `reachy_mini.apps.assistant.publish`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L656)**

Publish the app to the Reachy Mini app store.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `console` | `Console` | The console object for printing messages. |
| `app_path` | `str` | Local path to the app to publish. |
| `commit_message` | `str` | Commit message for the app publish. |
| `official` | `bool` | Request to publish the app as an official Reachy Mini app. |
| `no_check` | `bool` | Don't run checks before publishing the app. |
| `private` | `bool \| None` | If True, make private. If False, make public. If None, prompt. |

---

## App Sources

### `reachy_mini.apps.sources.hf_auth.save_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L384)**

Save a HuggingFace access token securely.

Validates the token against the Hugging Face API and, if valid, stores it using the standard Hugging Face authentication mechanism for reuse across sessions.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `token` | `str` | The HuggingFace access token to save. |

**Returns:**

| Type | Description |
|------|-------------|
| `dict` | A dict containing: "status" ("success" or "error"), "username" (the associated Hugging Face username if successful), and "message" (an error description if unsuccessful). |

---

### `reachy_mini.apps.sources.hf_auth.get_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L430)**

Get stored HuggingFace token.

**Returns:**

| Type | Description |
|------|-------------|
| `str \| None` | The stored token, or None if no token is stored. |

---

### `reachy_mini.apps.sources.hf_auth.delete_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L440)**

Delete stored HuggingFace token(s).

:::note

logout() without arguments logs out from all saved access tokens.

:::

---

### `reachy_mini.apps.sources.hf_auth.check_token_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L454)**

Check if a token is stored and valid.

**Returns:**

| Type | Description |
|------|-------------|
| `dict` | Status dict with is_logged_in and username. |

---

### `reachy_mini.apps.sources.hf_space.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L35)**

List apps available on Hugging Face Spaces.

---

### `reachy_mini.apps.sources.hf_space.list_all_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L78)**

List all apps available on Hugging Face Spaces (including unofficial ones).

---

### `reachy_mini.apps.sources.local_common_venv.get_app_site_packages`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L126)**

Public API to get the site-packages directory for a given app's venv.

:::info

- For separate venvs: returns the app's venv site-packages
- For shared environment (SDK mode): returns the current environment's site-packages

:::

---

### `reachy_mini.apps.sources.local_common_venv.get_app_python`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L145)**

Get the Python executable path for an app (cross-platform).

:::info

- For separate venvs: returns the app's venv Python
- For shared environment: returns the current Python interpreter

:::

---

### `reachy_mini.apps.sources.local_common_venv.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L344)**

List apps available from entry points or separate venvs.

---

### `reachy_mini.apps.sources.local_common_venv.install_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L460)**

Install a package given an AppInfo object, streaming logs.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `app` | `AppInfo` | AppInfo with package details. |
| `logger` | `logging.Logger` | Logger for progress output. |
| `wireless_version` | `bool` | Whether running on wireless version. |
| `desktop_app_daemon` | `bool` | Whether running as desktop app daemon. |
| `force_reinstall` | `bool` | If True, force reinstall even if already installed (for updates). |

---

### `reachy_mini.apps.sources.local_common_venv.get_app_module`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L731)**

Get the module name for an app without loading it (for subprocess execution).

---

### `reachy_mini.apps.sources.local_common_venv.uninstall_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L764)**

Uninstall a package given an app name.

---

## App Utilities

### `reachy_mini.apps.utils.running_command`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/utils.py#L7)**

Run a shell command and stream its output to the provided logger.
