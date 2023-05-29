---
title: DSO Nano/OpenOCD gdb
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DSO_Nano-OpenOCD_gdb/
slug: /DSO_Nano-OpenOCD_gdb
last_update:
  date: 02/03/2022
  author: gunengyu
---

#   Debugging with OpenOCD and gdb

Please use openocd 4.0 or newer.

This example assumes you have a Segger J-Link compatible JTAG adapter between your computer and the device (or dev board) you are debugging. It is possible to use an SWD (ST-Link) adapter instead, for this use openocd 0.7 or newer.

Start the openocd server with configuration files matching your hardware:
```
openocd -f interface/jlink.cfg -f target/stm32.cfg
```

Or, if you are using SWD:
```
openocd -f interface/stlink-v2.cfg -f target/stm32f1x_stlink.cfg
```

In a second window, start an interactive session with openocd:
```
telnet localhost 4444
```

This seems to be necessary to avoid "target is not halted" errors and other trouble later:
```
reset_config trst_and_srst
```

Stop the target (the arm processor):
```
reset halt
```

If you have not already flashed the binary, using for instance dfu-util, you can do it over JTAG like this:
```
reset init
flash write_image erase dso-lib.hex 0 ihex
reset halt
```

In a third window, start gdb or gdbtui:
```
arm-none-eabi-gdb
(gdb) file dso-lib.elf
(gdb) target remote localhost:3333"
(gdb) load dso-lib.elf
```

You should now be able to run and debug:
```
(gdb) set $pc = Reset_Handler
(gdb) display/i $pc
(gdb) stepi
```

## Tech Support & Product Discussion
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>