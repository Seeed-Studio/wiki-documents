---
description: Comprehensive installation guide for Reachy Mini Python SDK and daemon on Linux, macOS, and Windows, covering prerequisites, virtual environment setup, and troubleshooting.
title: Installation Guide
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
url: https://wiki.seeedstudio.com/reachymini_sdk_installation/
---

# 📦 Installation Guide

> **Welcome to Reachy Mini!** This guide will help you install the Python SDK and daemon to start controlling your robot.

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ✅ Supported | ✅ Supported | ✅ Supported |

**Need help?** Feel free to open an [issue](https://github.com/pollen-robotics/reachy_mini/issues) if you encounter any problem.

## First time using the command line? 🖥️

<details>
<summary>Click here if you're new to using a terminal/command line</summary>

A **command line** (also called terminal or command prompt) is a text-based interface where you can type commands to interact with your computer. Don't worry—it's simpler than it looks!

**How to open the command line:**
* **Windows:** Press `Win + R`, type `cmd` or `powershell`, and press Enter
* **macOS:** Press `Cmd + Space`, type `Terminal`, and press Enter
* **Linux:** Press `Ctrl + Alt + T` or search for "Terminal" in your applications

**Basic tips:**
* Type commands exactly as shown in the instructions
* Press `Enter` after typing each command to run it
* You can copy and paste commands (right-click to paste in most command line interfaces)

:::tip
_Don't be intimidated!_ The command line is just another way to give instructions to your computer. Follow the commands step by step, and you'll be controlling your Reachy Mini in no time!
:::

</details>

## 1. 📋 Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| 🐍 **Python** | 3.10 - 3.12 | Run Reachy Mini SDK |
| 📂 **Git** | Latest | Download source code and apps |
| 📦 **Git LFS** | Latest | Download model assets |

### 🐍 Install Python

We'll use `uv` - a fast Python package manager that makes installation simple!

#### Step 1: Install uv

:::info Linux / macOS
In your terminal, run:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
:::

:::info Windows
In your terminal, run:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
:::

**✅ Verify installation:**

Once the installation is completed, close your terminal and open a new one. You can check if everything went well with:
```bash
uv --version
```

#### Step 2: Install Python

In your terminal, run:
```bash
uv python install 3.12 --default
```

:::tip
We recommend Python 3.12 as it's the latest supported version for Reachy Mini.
:::

### 📂 Install Git and Git LFS

:::info Linux
#### Install Git and Git LFS

In your terminal, run:
```bash
sudo apt install git git-lfs
```
:::

:::info macOS
#### 1. Install Homebrew (if not already installed)

In your terminal, run:
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

For Apple Silicon (M1, M2, etc.), you will also be prompted to run:

```zsh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

✅ Verify Homebrew:

Once the installation is completed you can check if it went fine with:
```zsh
brew --version
```

#### 2. Install Git and Git LFS

In your terminal, run:
```zsh
brew install git git-lfs
```
:::

:::info Windows
#### Download and install Git for Windows

Download and install Git for Windows:
https://git-scm.com/install/windows
:::

**✅ Finalize installation:**

Finally, Git LFS then needs to be initialized with the command:

```bash
git lfs install
```

## 2. 🏠 Set up a Virtual Environment

> **Why use a virtual environment?** It keeps your Reachy Mini installation isolated and prevents conflicts with other Python projects. Modern Python development requires this!

### Create the environment

In your terminal, run:
```bash
uv venv reachy_mini_env --python 3.12
```

### Activate the environment

:::info Linux / macOS
In your terminal, run:
```bash
source reachy_mini_env/bin/activate
```
:::

:::warning Windows - First-time setup
Before you can activate your virtual environment, Windows needs permission to run scripts. You only need to do this once!

**Step 1:** Open terminal as Administrator
- Press `Win + R`, type `powershell`
- Right-click on "Windows PowerShell" and select "Run as administrator"

**Step 2:** Enable script execution

In the administrator terminal, run:
```powershell
powershell Set-ExecutionPolicy RemoteSigned
```

**Step 3:** Close the administrator terminal and open a regular terminal

Now you can activate your virtual environment by running:
```powershell
reachy_mini_env\Scripts\activate
```
:::

> **✅ Success indicator:** You should see `(reachy_mini_env)` at the start of your command line prompt!

## 3. 🚀 Install Reachy Mini

Choose your installation method:

:::info 📦 Option A: PyPI
**Recommended for most users** - Just want to control your robot? This is for you!

In your terminal, run:
```bash
uv pip install "reachy-mini"
```

If you want to use the simulation mode, you need to add the `mujoco` extra:
```bash
uv pip install "reachy-mini[mujoco]"
```

:::tip
The post installation of gstreamer is due to an [issue](https://github.com/pypi/support/issues/8847#issuecomment-3899714506) with PyPi and should be solved in the future.
:::

<details>
<summary>🐧 <strong>Linux users: additional steps required</strong></summary>

**GStreamer** must be installed manually on Linux:

**[📖 GStreamer Installation Guide](https://wiki.seeedstudio.com/reachymini_sdk_gstreamer-installation/)**

**USB permissions** — needed for the USB connection to Reachy Mini:

```bash
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE="0666", GROUP="dialout"
SUBSYSTEM=="usb", ATTRS{idVendor}=="38fb", ATTRS{idProduct}=="1001", MODE="0666", GROUP="dialout"' \
| sudo tee /etc/udev/rules.d/99-reachy-mini.rules

sudo udevadm control --reload-rules && sudo udevadm trigger
sudo usermod -aG dialout $USER
```

:::warning
Log out and log back in for the changes to take effect!
:::

</details>
:::

:::info 🔧 Option B: Source
**For developers** - Want to modify the SDK or contribute? Choose this option!

In your terminal, run:
```bash
git clone https://github.com/pollen-robotics/reachy_mini && cd reachy_mini
uv sync
```

If you want to use the simulation mode, you need to add the `mujoco` extra:
```bash
uv sync --extra mujoco
```

<details>
<summary>🐧 <strong>Linux users: additional steps required</strong></summary>

**GStreamer** must be installed manually on Linux:

**[📖 GStreamer Installation Guide](https://wiki.seeedstudio.com/reachymini_sdk_gstreamer-installation/)**

**USB permissions** — needed for the USB connection to Reachy Mini:

```bash
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE="0666", GROUP="dialout"
SUBSYSTEM=="usb", ATTRS{idVendor}=="38fb", ATTRS{idProduct}=="1001", MODE="0666", GROUP="dialout"' \
| sudo tee /etc/udev/rules.d/99-reachy-mini.rules

sudo udevadm control --reload-rules && sudo udevadm trigger
sudo usermod -aG dialout $USER
```

> [!WARNING]
> Log out and log back in for the changes to take effect!

</details>

## 🎉 Congratulations!

You've successfully installed Reachy Mini! Your robot is ready to come to life.

## ❓ Troubleshooting

Encountering an issue? 👉 **[Check the Troubleshooting & FAQ Guide](/reachymini_troubleshooting)**

## Next Steps

* **[Quickstart Guide](/reachymini_sdk_quickstart)**: Run your first behavior on Reachy Mini
* **[Python SDK](/reachymini_sdk_python-sdk)**: Learn to move, see, speak, and hear.
* **[AI Integrations](/reachymini_sdk_integration)**: Connect LLMs, build Apps, and publish to Hugging Face.
* **[Core Concepts](/reachymini_sdk_core-concept)**: Architecture, coordinate systems, and safety limits.