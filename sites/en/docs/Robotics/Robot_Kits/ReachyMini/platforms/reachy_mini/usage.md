---
description: Usage guide for Reachy Mini covering the Dashboard web interface, app management, and Python SDK quickstart.
title: Using Reachy Mini
slug: /reachymini_platforms_reachy_mini_usage
keywords:
  - usage
  - dashboard
  - apps
  - python
  - sdk
  - control
  - management
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/reachymini_platforms_reachy_mini_usage/
---

# Using Reachy Mini

Now that your robot is connected, here is how to interact with it. You can control it visually using the **Dashboard** or programmatically using **Python**.

## 1. The Dashboard 🕹️

:::info
The Dashboard is the web interface running inside your robot. It allows you to check the robot's status, update the system, and manage applications.
:::

**Access:** Open [http://reachy-mini.local:8000/](http://reachy-mini.local:8000/) in your browser.

### Features

* **System Updates:** Always keep your robot up to date. Go to the *Settings* tab and click "Check for updates".
* **Hardware Monitor:** Check battery level, motor temperatures, and disk usage.
* **Network:** Configure Wi-Fi connections.

## 2. Applications 📱

:::tip
Reachy Mini can run "Apps" — autonomous behaviors packaged for the robot (like a Conversation demo, a Game, or a Dance).
:::

### How to use Apps

**Step 1:** Go to the *Apps* tab on the Dashboard.

**Step 2:** Click on the "Store" button to browse the [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) ecosystem. You can install any compatible app with one click.

**Step 3:** Click the "Play" ▶️ button on an installed app. The robot will start the behavior immediately.

**Step 4:** Click the "Stop" ⏹️ button to kill the application.

:::warning
When an App is running, it takes control of the robot. You cannot run Python scripts while an App is active.
:::

## 3. Coding Quickstart 🐍

:::info
Ready to write your own logic? Reachy Mini is controlled via a simple Python SDK.
:::

👉 **[Go to the SDK documentation](/reachymini_sdk_readme)** for a complete overview.

## ❓ Troubleshooting

Encountering an issue? 👉 **[Check the Troubleshooting & FAQ Guide](/reachymini_troubleshooting)**
