---
description: 无线Reachy Mini开发工作流指南，涵盖SSH访问、跨平台选项、远程编辑和高效代码测试方法。
title: 无线Reachy Mini开发工作流
slug: /reachymini_platforms_reachy_mini_development_workflow
keywords:
  - development
  - workflow
  - wireless
  - ssh
  - sshfs
  - remote editing
  - vs code
  - rsync
  - cross-platform
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_platforms_reachy_mini_development_workflow/
---

# 无线Reachy Mini开发工作流

本指南涵盖在无线Reachy Mini上开发和测试代码的高效工作流。

## 先决条件

- SSH访问您的机器人（`ssh pollen@reachy-mini.local`，密码：`root`）
- 在您的电脑上安装SSHFS（Ubuntu/Debian上`sudo apt install sshfs`）
- 您的机器人的IP地址（在仪表板、路由器中找到，或在SSH后运行`ifconfig`）

## 快速跨平台选项

在深入了解完整工作流之前，这里有两个更简单的跨平台方法：

### VS Code远程SSH

VS Code的[Remote - SSH扩展](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)让您可以直接在机器人上编辑文件。连接到`pollen@reachy-mini.local`，然后打开任何文件夹。更改直接保存在机器人上。这在Windows、macOS和Linux上都能工作。

### Rsync

使用`rsync`将您的本地源代码同步到机器人的site-packages。这很快，几乎无处不在：

```bash
rsync -avz /path/to/your_app/src/your_app/ \
    pollen@reachy-mini.local:/venvs/apps_venv/lib/python3.12/site-packages/your_app/
```

每次编辑后运行此命令以推送更改。添加`--delete`以删除本地不再存在的文件。

有关这两个选项，请参阅[方法A的第3步](#step-3-install-and-run-your-code-on-the-robot)以在机器人上运行您的代码。

---

## 方法A：在机器人上克隆，在本地编辑（推荐）

这是首选工作流。您的代码在机器人上，但您使用您喜欢的IDE或AI编码工具从您的电脑编辑它。

### 第1步：在机器人上克隆您的仓库

```bash
ssh pollen@reachy-mini.local
cd /home/pollen
git clone https://github.com/YOUR_USER/YOUR_APP.git
```

### 第2步：将机器人的文件挂载到您的本地机器

在您的本地电脑上，创建挂载点并挂载：

```bash
mkdir -p ~/wireless_dev
sshfs pollen@reachy-mini.local:/home/pollen/YOUR_APP ~/wireless_dev \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

现在您可以在`~/wireless_dev`中打开您的IDE，就像文件是本地的一样进行编辑。

### 第3步：在机器人上安装并运行您的代码

SSH进入机器人并安装/运行您的应用：

```bash
ssh pollen@reachy-mini.local
cd /home/pollen/YOUR_APP

# 以可编辑模式安装（更改立即生效）：
/venvs/apps_venv/bin/pip install -e .

# 然后运行您的应用：
/venvs/apps_venv/bin/python -m YOUR_MODULE.main

# 或者直接运行而不安装：
/venvs/apps_venv/bin/python your_script.py
```

### 第4步：完成后卸载

```bash
fusermount -u ~/wireless_dev
```

## 方法B：覆盖已安装的应用源

如果您已经通过仪表板安装了应用，并希望通过将本地文件挂载到机器人上来直接修改其源代码。

### 第1步：找到机器人上已安装的应用

应用安装在：
```
/venvs/apps_venv/lib/python3.12/site-packages/YOUR_APP_NAME/
```

### 第2步：将您的本地源挂载到已安装的位置

在**机器人上**运行此命令，将您PC的源代码挂载到已安装的软件包上：

```bash
ssh pollen@reachy-mini.local

# 将您的本地src内容挂载到site-packages
sshfs YOUR_USER@YOUR_PC_IP:/path/to/your_app/src/your_app \
    /venvs/apps_venv/lib/python3.12/site-packages/YOUR_APP_NAME \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

重要：只挂载**您的`src/your_app/`目录的内容**，而不是整个仓库。site-packages目录直接包含包，而不是仓库结构。

现在在您的PC上编辑文件。重启应用时更改立即生效。

## 方法C：挂载本地源并直接运行

类似于方法B，但不使用pip install或仪表板。您将本地源挂载到机器人并直接运行应用。

### 第1步：将您的本地源挂载到机器人

在**机器人上**运行此命令：

```bash
ssh pollen@reachy-mini.local
mkdir -p /home/pollen/my_app_mount

sshfs YOUR_USER@YOUR_PC_IP:/path/to/your_app /home/pollen/my_app_mount \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

### 第2步：直接运行您的应用

```bash
cd /home/pollen/my_app_mount
/venvs/apps_venv/bin/python main.py
```

这种方法对于测试很快，但您的应用不会注册在仪表板中。

## 安装特定分支或版本

要系统范围安装特定版本：

```bash
ssh pollen@reachy-mini.local
/venvs/apps_venv/bin/python -m pip install --force-reinstall \
    "git+https://github.com/pollen-robotics/MY_AWESOME_APP.git@MY_AWESOME_BRANCH"
```

将`MY_AWESOME_BRANCH`替换为分支名（`develop`）、标签或提交哈希。

## 常见陷阱

### 通过SSHFS安装pip很慢

如果您将文件**从您的电脑挂载到机器人**（方法A的反向），pip install操作会非常慢，因为pip通过网络读取许多小文件。

**解决方案：**
- 使用方法A（文件在机器人上，挂载到您的电脑）
- 或者跳过pip install，直接使用`python -m your_module`运行

### 错误的site-packages挂载点

git仓库有这个结构：
```
your_app/
  src/
    your_app/
      __init__.py
      main.py
```

但site-packages包含：
```
your_app/
  __init__.py
  main.py
```

如果您将整个仓库挂载到site-packages，Python将找不到您的代码。只挂载内部包目录。

## 快速参考

| 任务 | 命令 |
|------|---------|
| SSH到机器人 | `ssh pollen@reachy-mini.local` |
| 停止守护进程 | `sudo systemctl stop reachy-mini-daemon` |
| 启动守护进程 | `sudo systemctl start reachy-mini-daemon` |
| 查看守护进程日志 | `journalctl -u reachy-mini-daemon -f` |
| 检查机器人状态 | `reachyminios_check` |
| 将机器人文件本地挂载 | `sshfs pollen@IP:/path ~/local_mount -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3` |
| 卸载 | `fusermount -u ~/local_mount` |

## 另请参阅

- [从分支安装守护进程](/reachymini_platforms_reachy_mini_install_daemon_from_branch) - 用于测试未发布的守护进程版本
- [故障排除](/reachymini_troubleshooting) - 常见问题和修复