---
description: Reachy Mini应用完整API参考，涵盖核心应用类、应用管理、应用信息、应用助手和应用源。
title: 应用API参考
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
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/cn/reachymini_api_apps/
---

# 应用

## 核心应用类

### `reachy_mini.ReachyMiniApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L27)**

Reachy Mini应用程序的基类。

### 方法

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L143)**

运行应用的主逻辑。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `reachy_mini` | `ReachyMini` | 要交互的Reachy Mini实例。 |
| `stop_event` | `threading.Event` | 一个可以设置为优雅停止应用的事件。 |

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L154)**

优雅地停止应用。

---

#### `wrapped_run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L90)**

用Reachy Mini上下文管理包装run方法。

---

### `reachy_mini.apps.manager.AppManager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L51)**

Reachy Mini应用的管理器。

### 方法

#### `close`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L68)**

清理AppManager，停止任何正在运行的应用。

---

#### `current_app_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L276)**

获取应用的当前状态。

---

#### `install_new_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L306)**

按名称安装新应用。

---

#### `is_app_running`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L88)**

检查应用是否正在运行或停止。

---

#### `list_all_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L283)**

列出可用应用（并行异步）。

---

#### `list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L290)`

列出给定源类型的可用应用。

---

#### `remove_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L317)**

按名称删除已安装的应用。

---

#### `restart_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L262)**

重启当前应用。

---

#### `start_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L97)**

作为子进程启动应用，如果已有应用在运行则抛出RuntimeError。

---

#### `stop_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L194)**

停止当前应用子进程。

---

#### `update_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L328)**

通过从HuggingFace重新安装来更新已安装的应用。

这会保留原始源信息并重新安装以获取最新版本。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `app_name` | `str` | 要更新的应用名称。 |
| `logger` | `logging.Logger` | 用于进度输出的日志记录器。 |

---

## 应用管理

### `reachy_mini.apps.manager.AppState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L24)**

运行中的应用的状态。

---

### `reachy_mini.apps.manager.AppStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L34)**

应用的状态。

---

### `reachy_mini.apps.manager.RunningApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L43)**

关于运行中的应用的信息。

---

## 应用信息

### `reachy_mini.apps.AppInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L18)**

应用的元数据。

---

### `reachy_mini.apps.SourceKind`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L8)**

应用源的类型。

---

## 应用助手

### 助手函数

#### `reachy_mini.apps.assistant.validate_app_name`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L21)**

验证应用名称。

---

#### `reachy_mini.apps.assistant.is_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L36)**

检查给定路径是否在git仓库内。

---

#### `reachy_mini.apps.assistant.validate_location`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L48)**

验证创建应用项目的位置。

---

#### `reachy_mini.apps.assistant.validate_location_and_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L57)**

验证创建应用项目的位置，确保不在git仓库中。

---

#### `reachy_mini.apps.assistant.create_cli`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L68)**

使用CLI创建新的Reachy Mini应用项目。

---

#### `reachy_mini.apps.assistant.create`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L131)**

在指定路径用给定名称创建新的Reachy Mini应用项目。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `console` | `Console` | 用于打印消息的控制台对象。 |
| `app_name` | `str` | 要创建的应用名称。 |
| `app_path` | `Path` | 将创建应用项目的目录。 |

**返回：**

| 类型 | 描述 |
|------|-------------|
| `Path` | 创建的应用项目的路径。 |

---

#### `reachy_mini.apps.assistant.install_app_with_progress`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L210)**

在临时虚拟环境中安装应用，并显示进度微调。

---

#### `reachy_mini.apps.assistant.check`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L251)**

检查现有的Reachy Mini应用项目。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `console` | `Console` | 用于打印消息的控制台对象。 |
| `app_path` | `str` | 要检查的应用的本地路径。 |

---

#### `reachy_mini.apps.assistant.request_app_addition`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L562)**

请求将新应用添加到官方Reachy Mini应用商店。

---

#### `reachy_mini.apps.assistant.try_to_push`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L639)**

尝试将更改推送到远程仓库。

---

#### `reachy_mini.apps.assistant.publish`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L656)**

将应用发布到Reachy Mini应用商店。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `console` | `Console` | 用于打印消息的控制台对象。 |
| `app_path` | `str` | 要发布的应用的本地路径。 |
| `commit_message` | `str` | 应用发布的提交消息。 |
| `official` | `bool` | 请求将应用发布为官方Reachy Mini应用。 |
| `no_check` | `bool` | 发布前不运行检查。 |
| `private` | `bool \| None` | 如果为True则设为私有。如果为False则设为公开。如果为None则提示。 |

---

## 应用源

### `reachy_mini.apps.sources.hf_auth.save_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L384)**

安全保存HuggingFace访问令牌。

针对Hugging Face API验证令牌，如果有效，则使用标准的Hugging Face认证机制存储它以跨会话重用。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `token` | `str` | 要保存的HuggingFace访问令牌。 |

**返回：**

| 类型 | 描述 |
|------|-------------|
| `dict` | 一个包含以下内容的字典："status"（"success"或"error"）、"username"（成功后关联的Hugging Face用户名）和"message"（如果不成功则描述错误）。 |

---

### `reachy_mini.apps.sources.hf_auth.get_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L430)**

获取存储的HuggingFace令牌。

**返回：**

| 类型 | 描述 |
|------|-------------|
| `str \| None` | 存储的令牌，如果没有存储则返回None。 |

---

### `reachy_mini.apps.sources.hf_auth.delete_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L440)**

删除存储的HuggingFace令牌。

:::note

不带参数调用logout()将退出所有保存的访问令牌。

:::

---

### `reachy_mini.apps.sources.hf_auth.check_token_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L454)**

检查令牌是否已存储并有效。

**返回：**

| 类型 | 描述 |
|------|-------------|
| `dict` | 包含is_logged_in和username的状态字典。 |

---

### `reachy_mini.apps.sources.hf_space.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L35)**

列出Hugging Face Spaces上可用的应用。

---

### `reachy_mini.apps.sources.hf_space.list_all_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L78)**

列出Hugging Face Spaces上所有可用的应用（包括非官方的）。

---

### `reachy_mini.apps.sources.local_common_venv.get_app_site_packages`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L126)**

获取给定应用venv的site-packages目录的公共API。

:::info

- 对于单独的venv：返回应用的venv site-packages
- 对于共享环境（SDK模式）：返回当前环境的site-packages

:::

---

### `reachy_mini.apps.sources.local_common_venv.get_app_python`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L145)**

获取应用Python可执行文件的路径（跨平台）。

:::info

- 对于单独的venv：返回应用的venv Python
- 对于共享环境：返回当前的Python解释器

:::

---

### `reachy_mini.apps.sources.local_common_venv.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L344)**

从入口点或单独的venv列出可用的应用。

---

### `reachy_mini.apps.sources.local_common_venv.install_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L460)**

给定AppInfo对象安装包，流式传输日志。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `app` | `AppInfo` | 包含包详情的AppInfo。 |
| `logger` | `logging.Logger` | 用于进度输出的日志记录器。 |
| `wireless_version` | `bool` | 是否在无线版本上运行。 |
| `desktop_app_daemon` | `bool` | 是否作为桌面应用守护进程运行。 |
| `force_reinstall` | `bool` | 如果为True，即使已安装也强制重新安装（用于更新）。 |

---

### `reachy_mini.apps.sources.local_common_venv.get_app_module`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L731)**

在不加载的情况下获取应用模块名称（用于子进程执行）。

---

### `reachy_mini.apps.sources.local_common_venv.uninstall_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L764)**

给定应用名称卸载包。

---

## 应用工具

### `reachy_mini.apps.utils.running_command`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/utils.py#L7)**

运行shell命令并将其输出流式传输到提供的日志记录器。