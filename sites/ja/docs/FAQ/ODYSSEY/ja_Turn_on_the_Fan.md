---
description: ファンが起動しない
title: ファンが起動しない
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /Turn_on_the_Fan
last_update:
  date: 2023.6.25
  author: cheng.tang
createdAt: '2025-08-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/Turn_on_the_Fan/
---

ODYSSEY - X86J41x5のファンは、システムが起動する前にデバイスを初期化する役割を持つ組み込みコントローラー（EC）によって制御されています。BIOSでの温度はECによって検出され、温度センサーはセンサーピンを持たないIntel CPUの近くに配置されています。言い換えると、温度はCPUの直接的な値ではなく、おそらく5度程度の誤差があります。システムで見る温度値はCPU内部からのフィードバックであり、BIOS画面での温度はECからのフィードバックです。ファンの動作または停止はEC値に従って決まります。

- EC検出値（BIOS画面）とファン速度テーブルは以下の通りです：

**ファン無効状態**: 停止

**通常ファン状態**: 40°C未満–停止、45-50°C–50%、50-60℃–60%、60℃以上–80%

**積極的ファン状態**: 40°C未満–停止、45-50°C–70%、50-60℃–80%、60℃以上–100%