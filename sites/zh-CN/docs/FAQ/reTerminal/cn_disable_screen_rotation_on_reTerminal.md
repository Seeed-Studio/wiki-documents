---
description: reTerminal-常见问题解答
title: 如何在 reTerminal 上禁用屏幕旋转
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/disable_screen_rotation_on_reTerminal
last_update:
  date: 6/21/2023
  author: Seraphina
---

如果您的屏幕显示正常，但会随着 reTerminal 的旋转而旋转，您可以通过禁用加速度计来关闭屏幕的自动旋转功能，从而实现固定的横向显示。<br/>
以下是禁用屏幕旋转的步骤：

- **步骤 1**：打开终端并导航到路径以定位并打开 **raspi-blacklist.conf** 文件。

```
/etc/modprobe.d/raspi-blacklist.conf 
```

- **步骤 2**：在 **raspi-blacklist.conf** 文件中添加以下代码行。

```
blacklist lis331dlh_i2c
```

- **步骤 3**：重启 reTerminal。

```sh
sudo reboot
```

完成以上步骤后，屏幕将固定为横向显示！