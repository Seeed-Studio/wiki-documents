---
description: This tutorial will show you how to compile, configure and burn balenaOS for R1000.
title: Build balenaOS for reComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /build_balenaOS_for_reComputer_r1000
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## What is balena?

[balena](https://www.balena.io/) is an Internet of Things (IoT) platform designed to help developers build, deploy, and manage IoT  applications across a fleet of devices. It supports a wide range of device architectures and includes features for containerized application deployment, making it possible to easily update your IoT software and HostOS, fix bugs and introduce new features on your IoT applications. balena provides a unified way to push code updates, manage device configurations and ensure devices run reliably and securely in the field, regardless of their location or network conditions.

This tutorial will show you how to compile, configure and burn balenaOS for R1000.
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware Preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software

* [yocto](https://docs.yoctoproject.org/4.0.20/brief-yoctoprojectqs/index.html) environment
* [docker](https://www.docker.com/) environment
* [balenaEtcher](https://etcher.balena.io/) to flash the CM4 memory.


### Hardware Configuration

**Step 1**: You need to set the switch on the side of the R1000 to boot mode, then power on the device

<div class="table-center">

| Switch Position                                              | Mode        | Description    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | Boot from eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | Boot from USB  | High      |

</div>

**Step 2**: Please use a USB Type-c cable to connect reComputer R1000 to your computer.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### Compile R1000-balenaOS
**Step 1**: Download the following libraries and ensure that the current environment supports compiling the yocto project
```shell
 sudo apt install gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 python3-subunit zstd liblz4-tool file locales libacl1 jq nodejs npm
 sudo locale-gen en_US.UTF-8
```

**Step 2**: Enter the following instructions to download and configure `balena-seeed-cm4`, and finally compile the yocto project.
```shell
  git clone https://github.com/Seeed-Studio/balena-seeed-cm4.git
  cd balena-seeed-cm4
  git submodule update --init --recursive
  ./balena-yocto-scripts/build/barys --dry-run
  source layers/poky/oe-init-build-env
  MACHINE=seeed-recomputer-r100x bitbake balena-image
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/0_build_balenaOS.gif" alt="pir" width="700" height="auto" /></div>

**Step 3**: The compiled image is named `balena-image-seeed-recomputer-r100x.balenaos-img` and is in the `build/tmp/deploy/images/seeed-recomputer-r100x` directory. At this point, the image is Compilation is complete, the next step is to configure it.

:::note
The default balenaOS version of this warehouse is 5.3.27+rev1. The version information is located in the `VERSION` file. If you need to compile other versions of balenaOS, please change the content in the `VERSION` file.
:::

### Configure R1000-balenaOS
**Step 1**: Enter the directory where the compiled image is located, then enter the command line interface, enter `balena login`, and log in to `balena Cloud`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/1_login_balena.gif" alt="pir" width="700" height="auto" /></div>

**Step 2**: Create a new `Fleet`, select the type as `Raspberry Pi 4 (using 64bit os)`

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2.1new_fleet.png" alt="pir" width="700" height="auto" /></div>

**Step 3**: Enter the following command to preload the image
```shell
  balena preload ./balena-image-seeed-recomputer-r100x.balenaos-img --fleet [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2_preload_image.gif" alt="pir" width="700" height="auto" /></div>

**Step 4**: Register the new device with Fleet and generate a device ID
```shell
balena device register [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/3_regester_dev.gif" alt="pir" width="700" height="auto" /></div>

**Step 5**: Generate configuration file.
```shell
balena config generate --device [uuid] --version 3.0.15+atsss --dev -o config.json
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/4_generate_config.gif" alt="pir" width="700" height="auto" /></div>

**Step 6**: Load the configuration file.
```shell
balena os configure balena-image-seeed-recomputer-r100x.balenaos-img --config config.json  --device [uuid] --version 3.0.15+atsss --dev
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/5_config_image.gif" alt="pir" width="700" height="auto" /></div>

**Step 7**: Copy the final image file,this image can be burned into reComputer R1000
```shell
cp balena-image-seeed-recomputer-r100x.balenaos-img recomputer_balenaos-dev.img
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/6_rename.gif" alt="pir" width="700" height="auto" /></div>

### Steps for Flashing balena OS

**Step 1**: Open the [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) software, and then the system will show the new disk

**Step 2**: Open the flash tool [balenaEtcher](https://etcher.balena.io/), select the balena image file, then select the target disk, and finally click Burn.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

**Step 3**: After the burning is completed, restart the R1000. After a while, you will see the new device successfully online on the balena Cloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/7_online.png" alt="pir" width="700" height="auto" /></div>




## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>