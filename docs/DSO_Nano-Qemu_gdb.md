---
name: DSO Nano/Qemu gdb
category: MakerPro
bzurl:
oldwikiname:  DSO Nano/Qemu gdb
prodimagename:  
surveyurl: https://www.research.net/r/DSO_Nano-Qemu_gdb
sku:
---


##   Running STM32 code on the qemu emulator

With the qemu emulator you can run and debug arm code without any arm processor!

You can load the code onto the emulator, connect the gdb debugger and step through the code. Of course, peripherals, timers and other microcontroller components will not be emulated, but it is helpful for verifying some of the code.

You will need to run the qemu-system-arm which is part of the QEMU project. On Debian/Ubuntu it is included in the qemu-system package (or qemu-kvm-extras in older versions).

##   Building qemu-system-arm (optional)

If there is no distribution packages for your system, or the packaged version is older than 0.13, it is recommended that you build it yourself:

<pre>wget [http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz](http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz)
tar xzf qemu-0.13.0.tar.gz
cd qemu-0.13.0
./configure --disable-kvm --enable-debug --target-list=arm-softmmu --audio-card-list= --audio-drv-list=
make
</pre>

You can now run it directly from the arm-softmmu folder, unless you want to install it to e.g. /usr/local/bin.

##   Note on STM32 support

The STM32 microcontroller in the DSO Nano uses an ARM cortex-m3 core. The qemu-system-arm does not know the ROM (flash) layout of the STM32. In particular, it does not read out the stack and reset vector from the 0x08000000 address. But if your elf file correctly designates the reset handler as entry point, it will use this as the starting address. However you will have to set the stack pointer (sp) manually.

##   Start the emulator

Start the qemu emulator and its internal gdb server (-s option), loading your elf file as a "kernel":
```
qemu-system-arm -cpu cortex-m3 -S -s -singlestep -nographic -m 513 -kernel dso-lib.elf
```

The "-m 513" option makes a memory space that includes the 0x2000000 RAM addresses of the STM32.

Start up gdb (the one from your ARM toolchain!) and connect to the qemu emulator:
```
arm-none-eabi-gdb dso-lib.elf
(gdb) target extended-remote localhost:1234
(gdb) set $sp = 0x20005000
(gdb) where
```

You can now start stepping through the program, just some examples
```
(gdb) display/i $pc
(gdb) stepi
(gdb) next
(gdb) break main.c:23
(gdb) x/16wx 0x20000000
(gdb) cont
(gdb) info reg
(gdb) info variables
(gdb) print *pProperty
```

##   Links

*   [http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/](http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/)

*   [http://embdev.net/topic/129757](http://embdev.net/topic/129757)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>