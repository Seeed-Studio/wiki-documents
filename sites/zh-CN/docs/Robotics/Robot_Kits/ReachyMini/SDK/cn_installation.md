---
description: Reachy Mini Python SDK和守护进程在Linux、macOS和Windows上的全面安装指南，涵盖先决条件、虚拟环境设置和故障排除。
title: 安装指南
slug: /reachymini_sdk_installation
keywords:
  - installation
  - setup
  - python
  - virtual environment
  - uv
  - git
  - prerequisites
  - cross-platform
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_sdk_installation/
---

# 📦 安装指南

> **欢迎使用Reachy Mini！** 本指南将帮助您安装Python SDK和守护进程以开始控制您的机器人。

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ✅ 支持 | ✅ 支持 | ✅ 支持 |

**需要帮助？** 如果遇到任何问题，请随时在[GitHub](https://github.com/pollen-robotics/reachy_mini/issues)上提交问题。

## 首次使用命令行？🖥️

<details>
<summary>如果您是命令行/终端的新手，请点击此处</summary>

**命令行**（也称为终端或命令提示符）是一个基于文本的界面，您可以在其中键入命令与您的计算机交互。不要担心——它比看起来简单！

**如何打开命令行：**
* **Windows：** 按`Win + R`，键入`cmd`或`powershell`，然后按Enter
* **macOS：** 按`Cmd + Space`，键入`Terminal`，然后按Enter
* **Linux：** 按`Ctrl + Alt + T`或在应用程序中搜索"终端"

**基本提示：**
* 按指令中显示的那样准确键入命令
* 键入每个命令后按`Enter`运行它
* 您可以复制和粘贴（在大多数命令行界面中右键单击粘贴）

> [!TIP]
> _不要害怕！_ 命令行只是给计算机指令的另一种方式。按照步骤操作，您将很快控制您的Reachy Mini！

</details>

## 1. 📋 先决条件

| 工具 | 版本 | 目的 |
|------|---------|---------|
| 🐍 **Python** | 3.10 - 3.12 | 运行Reachy Mini SDK |
| 📂 **Git** | 最新 | 下载源代码和应用 |
| 📦 **Git LFS** | 最新 | 下载模型资产 |

### 🐍 安装Python

我们将使用`uv`——一个快速的Python包管理器，使安装简单！

#### 第1步：安装uv

??? info "Linux / macOS"
    在您的终端中运行：
    ```bash
    curl -LsSf https://astral.sh/uv/install.sh | sh
    ```

??? info "Windows"
    在您的终端中运行：
    ```powershell
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
    ```

**✅ 验证安装：**

安装完成后，关闭终端并打开一个新终端。您可以使用以下命令检查一切是否正常：
```bash
uv --version
```

#### 第2步：安装Python

在您的终端中运行：
```bash
uv python install 3.12 --default
```

> [!TIP]
> 我们推荐Python 3.12，因为它是Reachy Mini支持的最新版本。

### 📂 安装Git和Git LFS

??? info "Linux"
    #### 安装Git和Git LFS

    在您的终端中运行：
    ```bash
    sudo apt install git git-lfs
    ```

??? info "macOS"
    #### 1. 安装Homebrew（如果尚未安装）

    在您的终端中运行：
    ```zsh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

    对于Apple Silicon（M1、M2等），您还将被提示运行：

    ```zsh
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
    ```

    ✅ 验证Homebrew：

    安装完成后您可以使用以下命令检查它是否正常：
    ```zsh
    brew --version
    ```

    #### 2. 安装Git和Git LFS

    在您的终端中运行：
    ```zsh
    brew install git git-lfs
    ```

??? info "Windows"
    #### 下载并安装Git for Windows

    下载并安装Git for Windows：
    https://git-scm.com/install/windows

**✅ 最终确定安装：**

最后，Git LFS需要用以下命令初始化：

```bash
git lfs install
```

## 2. 🏠 设置虚拟环境

> **为什么使用虚拟环境？** 它保持您的Reachy Mini安装隔离并防止与其他Python项目冲突。现代Python开发需要这个！

### 创建环境

在您的终端中运行：
```bash
uv venv reachy_mini_env --python 3.12
```

### 激活环境

??? info "Linux / macOS"
    在您的终端中运行：
    ```bash
    source reachy_mini_env/bin/activate
    ```

??? warning "Windows - 首次设置"
    在您可以激活虚拟环境之前，Windows需要允许运行脚本。您只需要做一次！

    **第1步：** 以管理员身份打开终端
    - 按`Win + R`，键入`powershell`
    - 右键单击"Windows PowerShell"并选择"以管理员身份运行"

    **第2步：** 启用脚本执行

    在管理员终端中运行：
    ```powershell
    powershell Set-ExecutionPolicy RemoteSigned
    ```

    **第3步：** 关闭管理员终端并打开一个常规终端

    现在您可以通过运行以下命令激活您的虚拟环境：
    ```powershell
    reachy_mini_env\Scripts\activate
    ```

> **✅ 成功指标：** 您应该在命令行提示符的开头看到`(reachy_mini_env)`！

## 3. 🚀 安装Reachy Mini

选择您的安装方法：

??? info "📦 选项A：PyPI"
    **推荐给大多数用户** - 只是想控制您的机器人？这适合您！

    在您的终端中运行：
    ```bash
    uv pip install "reachy-mini"
    ```

    如果您想使用仿真模式，需要添加`mujoco`额外项：
    ```bash
    uv pip install "reachy-mini[mujoco]"
    ```

    > [!TIP]
    > 安装后gstreamer是因为PyPi的一个[问题](https://github.com/pypi/support/issues/8847#issuecomment-3899714506)，应该在未来解决。

    <details>
    <summary>🐧 <strong>Linux用户：需要额外步骤</strong></summary>

    **必须手动安装GStreamer**：

    **[📖 GStreamer安装指南](https://wiki.seeedstudio.com/reachymini_sdk_gstreamer-installation/)**

    **USB权限** — 需要用于USB连接到Reachy Mini：

    ```bash
    echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE="0666", GROUP="dialout"
    SUBSYSTEM=="usb", ATTRS{idVendor}=="38fb", ATTRS{idProduct}=="1001", MODE="0666", GROUP="dialout"' \
    | sudo tee /etc/udev/rules.d/99-reachy-mini.rules

    sudo udevadm control --reload-rules && sudo udevadm trigger
    sudo usermod -aG dialout $USER
    ```

    > [!WARNING]
    > 注销并重新登录以使更改生效！

    </details>

??? info "🔧 选项B：源代码"
    **面向开发者** - 想修改SDK或贡献？选择这个！

    在您的终端中运行：
    ```bash
    git clone https://github.com/pollen-robotics/reachy_mini && cd reachy_mini
    uv sync
    ```

    如果您想使用仿真模式，需要添加`mujoco`额外项：
    ```bash
    uv sync --extra mujoco
    ```

    <details>
    <summary>🐧 <strong>Linux用户：需要额外步骤</strong></summary>

    **必须手动安装GStreamer**：

    **[📖 GStreamer安装指南](https://wiki.seeedstudio.com/reachymini_sdk_gstreamer-installation/)**

    **USB权限** — 需要用于USB连接到Reachy Mini：

    ```bash
    echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE="0666", GROUP="dialout"
    SUBSYSTEM=="usb", ATTRS{idVendor}=="38fb", ATTRS{idProduct}=="1001", MODE="0666", GROUP="dialout"' \
    | sudo tee /etc/udev/rules.d/99-reachy-mini.rules

    sudo udevadm control --reload-rules && sudo udevadm trigger
    sudo usermod -aG dialout $USER
    ```

    > [!WARNING]
    > 注销并重新登录以使更改生效！

    </details>

## 🎉 恭喜！

您已成功安装Reachy Mini！你的机器人准备好开始运作了。

## ❓ 故障排除

遇到问题了吗？👉 **[查看故障排除和常见问题指南](/reachymini_troubleshooting)**

## 下一步

* **[快速入门指南](/reachymini_sdk_quickstart)**：在Reachy Mini上运行您的第一个行为
* **[Python SDK](/reachymini_sdk_python-sdk)**：学习移动、观看、说话和聆听。
* **[AI集成](/reachymini_sdk_integration)**：连接LLM、构建应用并发布到Hugging Face。
* **[核心概念](/reachymini_sdk_core-concept)**：架构、坐标系统和安全限制。