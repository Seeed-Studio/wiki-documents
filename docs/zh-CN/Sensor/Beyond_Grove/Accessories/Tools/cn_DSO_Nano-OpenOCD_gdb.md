---
title: 使用 OpenOCD 和 gdb 进行调试
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DSO_Nano-OpenOCD_gdb/
slug: /cn/DSO_Nano-OpenOCD_gdb
last_update:
  date: 02/03/2022
  author: gunengyu
---

# 使用 OpenOCD 和 gdb 进行调试

请使用 OpenOCD 4.0 或更新版本。

本示例假设您在计算机和调试设备（或开发板）之间使用了 Segger J-Link 兼容的 JTAG 适配器。也可以使用 SWD（ST-Link）适配器，若使用此适配器，请使用 OpenOCD 0.7 或更新版本。

使用与您的硬件匹配的配置文件启动 OpenOCD 服务器：
```
openocd -f interface/jlink.cfg -f target/stm32.cfg
```

或者，如果您使用的是 SWD：
```
openocd -f interface/stlink-v2.cfg -f target/stm32f1x_stlink.cfg
```

在第二个窗口中，启动一个与 OpenOCD 的交互会话：
```
telnet localhost 4444
```

这似乎是必要的，以避免后续出现“目标未停止”的错误和其他问题：
```
reset_config trst_and_srst
```

停止目标（ARM 处理器）：
```
reset halt
```

如果您尚未通过例如 dfu-util 等工具烧录二进制文件，可以通过 JTAG 进行烧录：
```
reset init
flash write_image erase dso-lib.hex 0 ihex
reset halt
```

在第三个窗口中，启动 gdb 或 gdbtui：
```
arm-none-eabi-gdb
(gdb) file dso-lib.elf
(gdb) target remote localhost:3333"
(gdb) load dso-lib.elf
```

现在您应该可以运行和调试：
```
(gdb) set $pc = Reset_Handler
(gdb) display/i $pc
(gdb) stepi
```

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>