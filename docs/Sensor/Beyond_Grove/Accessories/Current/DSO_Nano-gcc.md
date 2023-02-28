---
title: DSO Nano/gcc
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DSO_Nano-gcc/
slug: /DSO_Nano-gcc
last_update:
  date: 02/03/2022
  author: gunengyu
---
# How to build the DSO Nano firmware using gcc

The [DSO Nano](/DSO_Nano "DSO Nano") firmware can be build with a gcc toolchain. The gcc-specific files reside in the project/gcc folder of the firmware source code tree.

## Get a ARM cross-building gcc toolchain

The ARM toolchain most of us use is the GCC from ARM at &lt;[https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)&gt;.

For Linux, you can choose the tarball or the installer. The latter is a much larger download than the former, for some reason. In any case make sure you have the toolchain's "bin" directory in your path. For example, if you extracted the tarball to /opt, type this in your shell, or add it to your .bashrc or .pam_environment:

```
PATH=/opt/gcc-arm-none-eabi-4_6-2012q2/bin:$PATH
```

Once you have the toolchain set up correctly, simply typing:

```
arm-none-eabi-gcc -v
```

should list the compiler version and the options it was built with. If you instead get an error, please fix your toolchain installation before continuing.

If you can not find a pre-built ARM toolchain for your platform, or otherwise want to build the toolchain yourself, you can download the source or check out [https://open-bldc.org/wiki/Building_ARM_Toolchain](https://open-bldc.org/wiki/Building_ARM_Toolchain)

## Get and build the firmware source code

For now, get the code from Tormod's gitlab tree:

```
git clone https://gitlab.com/dsonano/dso-firmware.git
cd dso-firmware
```

If you later want to update your tree to latest git:

```
git pull
```

### Compile the application part

```
cd DS0201_APP/project/gcc
make
```

### Compile the library part

```
cd ../../../DS0201_LIB/project/gcc
make clean
make
```

## Testing

Use [Dfu-util](/Dfu-util "Dfu-util") to download the dso-lib.bin and dso-app.bin files to your Nano V1 or V2. For the Nano V3 model, copy the dso-lib.hex and dso-app.hex one at a time to the DFU virtual USB drive.

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
