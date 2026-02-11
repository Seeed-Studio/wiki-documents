---
description: Setup guide for Reachy Mini Simulation using MuJoCo physics engine. Prototype and test applications without hardware, including installation and scene options.
title: Reachy Mini Simulation - Setup Guide
keywords:
- Reachy Mini
- Simulation
- MuJoCo
- Setup
- Installation
- Physics
- Virtual Robot
image: https://camo.githubusercontent.com/ce846352192340e1de0c054dec19d4ca185f45a26d76c3f848e50f3707e8b19c/68747470733a2f2f77772f636f736f96e6d7723072f6f726964637073687463646473696473702f647706966465676f73647264652f70730706966c6162726f6f70636472706f62676c61746772653677269783065646e2e6766676c6f69736e642e676f
slug: /reachymini/simulation/get_started
last_update:
  date: 02/11/2026
  author: Tienjui Wong
translation:
  skip: [zh-CN]
---

# Reachy Mini Simulation - Setup Guide

You don't need a physical robot to start building! The Reachy Mini simulation runs on [MuJoCo](https://mujoco.org) and provides a realistic physics environment to prototype, test, and debug your applications.

![Simulation](https://camo.githubusercontent.com/ce846352192340e1de0c054dec19d4ca185f45a26d76c3f848e50f3707e8b19c/68747470733a2f2f77772f636f736f96e6d7723072f6f726964637073687463646473696473702f647706966465676f73647264652f70730706966c6162726f6f70636472706f62676c61746772653677269783065646e2e676f676c6f69736e642e676f)

## 1. Installation

> **📋 Prerequisites:** Before setting up the simulation, you must first complete the basic installation and virtual environment setup by following the **[Installation Guide](../../SDK/installation)**. This guide assumes you already have the Reachy Mini SDK installed and your virtual environment activated.

The simulation requires the `mujoco` python bindings. You can install them alongside the Reachy Mini software with the extra tag `[mujoco]`.

With `pip`, run :
```bash
pip install "reachy-mini[mujoco]"
```
With `uv`, run :
```bash
uv pip install "reachy-mini[mujoco]"
```

## 2. Running the Simulation

To start the simulated robot, simply run the daemon command with the `--sim` flag:

```bash
reachy-mini-daemon --sim
```

> If you are using `uv`, you need to add `uv run` before `reachy-mini-daemon`.

A window should open displaying the 3D view of the robot. You can interact with the view using your mouse (drag to rotate, right-click to pan, scroll to zoom).

### 🍎 Mac Users (Apple Silicon / Intel)
On macOS, MuJoCo requires a specific launcher to work correctly with the GUI. Instead of the command above, use `mjpython`:

```bash
mjpython -m reachy_mini.daemon.app.main --sim
```

> **⚠️ macOS Users:** `uv` may have compatibility issues with MuJoCo on macOS. If you encounter installation or runtime problems, it's recommended to use `pip` directly instead of `uv` for MuJoCo-related packages.

## 3. Dashboard and Apps

You can access the Dashboard at **[http://localhost:8000](http://localhost:8000)**.

* **Apps:** You can install and run Apps! They will execute inside the simulation (e.g., the robot will dance in the 3D viewer).

## 4. Scenes & Options

You can customize the simulation environment using the `--scene` argument.

* **`empty`** (default): Just the robot in a void.
* **`minimal`**: Adds a table and some objects (apple, croissant, duck) to play with.

**Example:**
```bash
reachy-mini-daemon --sim --scene minimal
```

## 5. Connecting your Code

Once the simulation is running, it behaves exactly like a real **Reachy Mini Lite** connected via USB. The daemon listens on `localhost`, and you can run any Python SDK script without modification:

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

# Connects to the simulation running on localhost
with ReachyMini() as mini:
    print("Connected to simulation!")

    # Look up and tilt head
    print("Moving head...")
    mini.goto_target(
        head=create_head_pose(z=20, roll=10, mm=True, degrees=True),
        duration=1.0
    )

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.6, -0.6], duration=0.3)
    mini.goto_target(antennas=[-0.6, 0.6], duration=0.3)

    # Reset to rest position
    mini.goto_target(
        head=create_head_pose(),
        antennas=[0, 0],
        duration=1.0
    )
```

## Next Steps
* **[Python SDK](../../SDK/python-sdk)**: Learn to move, see, speak, and hear.
* **[AI Integrations](../../SDK/integration)**: Connect LLMs, build Apps, and publish to Hugging Face.
* **[Core Concepts](../../SDK/core-concept)**: Architecture, coordinate systems, and safety limits.


## ❓ Troubleshooting

Encountering an issue? 👉 **[Check the Troubleshooting & FAQ Guide](../../troubleshooting)**
