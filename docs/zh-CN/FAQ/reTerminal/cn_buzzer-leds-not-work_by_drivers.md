---
description: reTerminal-常见问题解答
title: 如何解决安装reTerminal驱动后蜂鸣器和LED灯无法工作的问题
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/buzzer-leds-not-work_by_drivers
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q13: 安装reTerminal驱动后LED灯和蜂鸣器无法工作 -->

此问题不会持续很长时间，我们将在后续的reTerminal驱动中彻底解决该问题。

- **步骤 1.** 打开 **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **步骤 2.** 注释以下行，并在按下 **ESC** 后输入 **:wq** 保存文件

```sh
#dtoverlay=reTerminal-bridge
```

- **步骤 3.** 重启reTerminal

```sh
sudo reboot
```

现在LED灯和蜂鸣器将正常工作。