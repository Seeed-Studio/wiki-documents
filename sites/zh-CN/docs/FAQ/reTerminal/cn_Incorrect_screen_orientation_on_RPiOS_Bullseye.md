---
description: reTerminal-常见问题解答
title: 安装 Raspberry Pi OS 后屏幕方向不正确
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Incorrect_screen_orientation_on_RPiOS_Bullseye
last_update:
  date: 2023/11/24
  author: Seraphina
---

<!-- Q11: 安装 Raspberry Pi OS Bullseye 后屏幕方向不正确 -->
### Raspberry Pi OS Bullseye

如果在安装 **Raspberry Pi OS Bullseye** 后发现屏幕方向错误，请按照以下步骤操作：

- **步骤 1.** 将 **Raspberry Pi OS Bullseye** 刷写到 reTerminal 的 eMMC 后，按照[此指南](https://wiki.seeedstudio.com/cn/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)安装必要的驱动程序。

- **步骤 2.** 在 **.config** 目录下创建一个名为 **monitors.xml** 的新文件

```sh
sudo vi ~/.config/monitors.xml
```

- **步骤 3.** 将以下内容复制到上述文件中以显式设置 LCD 显示屏 (DSI-1)，然后按 **ESC** 键后输入 **:wq** 保存文件

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **步骤 4.** 打开 **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **步骤 5.** 在文件中添加以下内容

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **步骤 6.** 重启 reTerminal

```sh
sudo reboot
```

现在屏幕将在 Raspberry Pi OS Bullseye 上以正确的方向显示！

### Raspberry Pi OS Bookworm

如果在安装 **Raspberry Pi OS Bookworm** 后发现屏幕方向错误，请按照以下步骤操作：

- **步骤 1.** 将 **Raspberry Pi OS Bookworm** 刷写到 reTerminal 的 eMMC 后，按照[此指南](https://wiki.seeedstudio.com/cn/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)安装必要的驱动程序。

如果您配置了非 root 用户，并且使用的是 7 月 24 日的 Bookworm 镜像，您需要执行以下操作：
```sh
sudo chown $USER ~/.config
sudo chgrp $USER ~/.config
sudo chmod u+rwx ~/.config
```

- **步骤 2.** 打开 .config/wayfire.ini

```sh
sudo vi ~/.config/wayfire.ini
```

- **步骤 3.** 将以下内容复制到上述文件中以显式设置 LCD 显示屏 (DSI-1)，然后按 **ESC** 键后输入 **:wq** 保存文件

```sh
[output:DSI-1]
mode = 720x1280@60
transform = 270
```

- **步骤 4.** 打开 **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **步骤 5.** 在文件中添加以下内容

```sh
dtoverlay=reTerminal
```

- **步骤 6.** 重启 reTerminal

```sh
sudo reboot
```

现在屏幕将在 Raspberry Pi OS Bookworm 上以正确的方向显示！