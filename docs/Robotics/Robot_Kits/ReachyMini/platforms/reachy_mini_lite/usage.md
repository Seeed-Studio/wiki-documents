---
description: Usage guide for Reachy Mini Lite covering the desktop application dashboard, quick actions demos, app installation, and Python SDK quickstart.
title: Using Reachy Mini Lite
keywords:
- usage
- dashboard
- desktop app
- applications
- demos
- python
- sdk
- control
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Using Reachy Mini Lite

The Lite version relies on your computer to run its intelligence. The central hub for this is the **Reachy Mini Control** application.

:::info
Check [this guide](./get_started.md) if you have not installed it yet.
:::

## 1. Reachy Mini Control (Dashboard) 🖥️

When you open the application, you access the complete control panel for your robot.

:::info Status & Visualizer (Left Panel)
* **3D View:** Shows the real-time position of the robot.
* **Ready/Not Ready:** Indicates if the robot is correctly connected via USB.
* **Sensors:** Monitor the microphone input and speaker volume.
* **Logs:** See technical details and connection events at the bottom.
:::

## 2. Applications & Demos 📱

:::tip
You don't need to code to start having fun. The app comes with an integrated ecosystem.
:::

### Quick Actions

Located at the bottom right, these are built-in demos ready to launch instantly:
* **Expressions:** Make Reachy express emotions (Happy, Sad, Angry, etc.).
* **Controller:** Teleoperate the robot using a game controller or sliders.

### Installing New Apps

To extend Reachy's capabilities with community-created behaviors:

**Step 1:** Click the **"Discover apps"** button. This opens the Hugging Face Spaces store.

**Step 2:** Select an app (like a Game or a Conversation demo) and click "Install".

**Step 3:** Once installed, the app will appear in your "Applications" list. Simply click **"Play"** to start it.

:::warning
When an App is running, it controls the robot. Stop the app before trying to run your own Python scripts.
:::

## 3. Coding with Python 🐍

:::info
Ready to write your own logic? Reachy Mini is controlled via a simple Python SDK.
:::

👉 **[Go to the SDK documentation](../../SDK/readme.md)** for a complete overview.

## ❓ Troubleshooting

Encountering an issue? 👉 **[Check the Troubleshooting & FAQ Guide](../../troubleshooting.md)**
