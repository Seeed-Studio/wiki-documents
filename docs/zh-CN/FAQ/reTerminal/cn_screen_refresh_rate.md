---
description: reTerminal && reTerminal DM-FAQ
title: 如何解决屏幕刷新率过低的问题
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/screen_refresh_rate_low
last_update:
  date: 7/2/2024
  author: Parker
---

<!-- ### Q17: 如何解决屏幕刷新率过低的问题 -->

## 问题描述

屏幕出现明显的刷新卡顿条纹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/DM_bug.gif" alt="pir" width={600} height="auto" /></p>

## 问题解决

- **步骤 1.** 在终端中输入以下命令。

```sh
sudo raspi-config
```

- **步骤 2.** 选择 `6 Advanced Options` 并按 Enter 键

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/01.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 选择 `A9 Wayland` 并按 Enter 键

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/02.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 选择 `Yes` 并按 Enter 键

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/03.png" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 选择 `Ok` 并按 Enter 键

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/04.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 选择 `Finish` 并按 Enter 键

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/05.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 选择立即重启，选择 `Yes` 并按 Enter 键

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/06.png" alt="pir" width={600} height="auto" /></p>

:::note
如果您使用的是 bullseye 系统，切换到 Wayland 模式可能会导致您的远程登录软件 VNC 无法使用。
如果您使用的是 bookworm 系统，则不会有此问题。
:::