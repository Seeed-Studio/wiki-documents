---
description: reTerminal-常见问题解答
title: 触摸屏不准确问题的故障排除
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/troubleshooting-touch-screen-inaccuracy
last_update:
  date: 6/21/2023
  author: Seraphina
---

 <!-- Q12: 触摸屏不准确问题的故障排除 -->

在将屏幕配置为正确的方向后，触摸位置可能仍然不准确，导致当您触摸显示屏的特定区域时，光标会朝意外的方向移动。为了解决此问题，请按照以下步骤操作。

- **步骤 1**：打开终端并通过输入以下命令进入 xorg.conf.d 文件夹

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2**：您将可以访问 "40-libinput.conf" 文件，可以使用以下命令进行编辑。

```sh
sudo nano 40-libinput.conf
```

- **步骤 3**：找到 **touchscreen** InputClass 的 InputClass 部分。

- **步骤 4**：添加以下内容。您可以参考截图

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 5**：按 Ctrl+O 保存并按回车，然后按 Ctrl+X 退出，之后重启设备

```sh
Sudo reboot 
```

重启后，您可能会注意到触摸位置现在变得准确了。这意味着当您触摸显示屏的特定区域时，光标会按照预期的方向移动。