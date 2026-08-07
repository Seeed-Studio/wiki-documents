---
description: 面向开发者的指南，介绍如何从特定GitHub分支安装Reachy Mini守护进程以测试新功能和错误修复。
title: 从特定分支安装守护进程
slug: /reachymini_platforms_reachy_mini_install_daemon_from_branch
keywords:
  - daemon
  - branch
  - install
  - testing
  - development
  - ssh
  - git
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_platforms_reachy_mini_install_daemon_from_branch/
---

# 从特定分支安装守护进程

> [!WARNING]
> _⚠️ 仅适用于开发者和测试人员_
>
> 本指南介绍如何在官方发布之前从特定GitHub分支安装Reachy Mini守护进程。使用此功能测试新功能或错误修复。

## 先决条件

- SSH访问您的Reachy Mini机器人（`pollen@reachy-mini.local`，密码：`root`）
- 机器人已连接到您的WiFi网络（或可通过其热点访问）

## 选项A：本地开发设置

> [!NOTE]
> 此选项适用于积极开发和快速调试周期。它允许您安全地测试更改，而不影响系统范围的安装。
>
> ⚠️ 避免使用此选项安装应用，因为对本地`reachy_mini`版本所做的更改不会正确传播。

### 步骤：

1. **通过SSH连接到机器人：**
   ```bash
   ssh pollen@reachy-mini.local
   # 密码：root
   ```

2. **克隆具有特定分支的Reachy Mini仓库：**
   ```bash
   git clone -b <branch-name> https://github.com/pollen-robotics/reachy_mini.git
   cd reachy_mini
   ```

3. **设置虚拟环境：**
   ```bash
   uv venv --python /venvs/mini_daemon/bin/python .venv
   source .venv/bin/activate
   uv sync --extra gstreamer --extra wireless-version
   ```

4. **停止系统守护进程服务：**
   ```bash
   sudo systemctl stop reachy-mini-daemon
   ```
   > [!TIP]
   > 此步骤需要在每次重启后重复，因为系统服务会自动重启。

5. **启动本地守护进程进行测试：**
   ```bash
   reachy-mini-daemon --wireless-version
   ```

现在您可以修改`~/reachy_mini`中的代码并测试更改，而不影响系统安装。

## 选项B：系统范围自定义安装

> [!NOTE]
> 此选项将分支构建的reachy-mini安装为系统范围的守护进程。它更适合进行彻底的端到端测试，并支持从Reachy Mini Control无缝安装应用。

### 步骤：

1. **通过SSH连接到机器人：**
   ```bash
   ssh pollen@reachy-mini.local
   # 密码：root
   ```

2. **激活守护进程的虚拟环境：**
   ```bash
   source /venvs/mini_daemon/bin/activate
   ```

3. **安装特定分支：**
   ```bash
   pip install --no-cache-dir --force-reinstall \
     "reachy_mini[gstreamer,wireless-version] @ git+https://github.com/pollen-robotics/reachy_mini.git@<branch-name>"
   ```
   将`<branch-name>`替换为您要测试的分支（例如`develop`、`feature/my-feature`、`bugfix/issue-123`）。

   > [!NOTE]
   > 我们必须在这里使用`pip`而不是`uv`，因为`uv pip install`[与`git lfs`](https://github.com/astral-sh/uv/issues/3312)不能正确工作。

4. **（仅适用于≤1.2.13的版本）** 使用`/venvs/apps_venv`重复步骤2和3。

5. **重启守护进程服务：**
   ```bash
   sudo systemctl restart reachy-mini-daemon
   ```

6. **验证安装成功：**
   ```bash
   pip show reachy-mini | grep Version
   ```
   这将显示您安装的分支对应的版本。

## 回滚到出厂版本

如果您在分支安装时遇到问题，可以恢复出厂守护进程：

1. **通过蓝牙触发SOFTWARE_RESET命令**以重新安装原始出厂守护进程
2. 有关详细分步说明，请参阅[重置指南](/reachymini_platforms_reachy_mini_reset)

## 重要说明

- **备份您的工作**在切换不同分支安装之前
- 在进行系统范围安装之前，在本地开发模式下进行充分测试
- 安装后**监控系统日志**：`journalctl -u reachy-mini-daemon -f`
- **性能影响：** 某些开发分支可能具有降低的性能或稳定性