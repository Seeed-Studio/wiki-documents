---
description: Enable SPI interface on Jetson-Nano
title: Enable SPI interface on Jetson-Nano
keywords:
- SPI
- Jetson-nano
- BSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /enable_spi_interface_on_jetsonnano
last_update:
  date: 07/02/2025
  author: Dayu
---

## Introduction

The Jetson Nano features two SPI interfaces multiplexed with GPIOs, but SPI is not enabled by default. Unlike other Jetson series such as Orin, which support enabling SPI via the configuration tool `/opt/nvidia/jetson-io/jetson-io.py`, this method is **not applicable on the Jetson Nano**.

This section uses the **SPI1** controller as an example and provides a method for enabling SPI functionality on the Jetson Nano. Note that this method must be applied before flashing the image to the Jetson device.

:::note
The method of this wiki must be applied before flashing the image to the Jetson device.
:::

## Modify spi and flashing

First, you need to short the `REC` pin and `GND` pin on the Jetson Nano to enter recovery mode. Then, on your host PC, prepare the image you intend to flash. However, do not flash it to the Jetson Nano until you have completed the SPI modifications.
You can refer to the [**flashing JetPack tutorial for the J101**](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/#:~:text=On%20the%20Linux%20host%20PC%2C%20we%20need%20to%20open%20a%20browser%20and%20go%20the%20Jetson%20Linux%20Archive.%20First%20we%20should%20check%20if%20the%20version%20of%20Jetson%20Linux%20is%20supported%20our%20reComputer%20Jetson%20module), and make sure to use the Command Line method only.

  Download the version of your choice from the [NIVIDIA DEVELOPER](https://developer.nvidia.com/embedded/jetson-linux-archive#:~:text=Previous%20Jetson%20Linux%20Versions), including the **BSP** and the **Simple Root Filesystem**.
In this guide, we use **L4T 32.7.2** as an example.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/source_nvidia_jetson-nao.png" /></div>

Place the **BSP** and the **Simple Root Filesystem** in the same directory, then follow the instructions below to extract them and run the `apply_binaries.sh`:

```bash
tar xf Jetson-210_Linux_R32.7.2_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

Create a new `.sh` file in the **Linux_for_Tegra** directory, and run the script. The script content is as follows:
<details>

<summary> modify_spi.sh </summary>

```shell
#!/bin/bash
set -e


cd "$(dirname "$0")"
cd kernel/dtb

DTS=tegra210-p3448-0002-p3449-0000-b00.dts
DTB=tegra210-p3448-0002-p3449-0000-b00.dtb


echo "📥 Decompiling $DTB to $DTS..."
sudo dtc -I dtb -O dts -o "$DTS" "$DTB"

fix_spi_node() {
    local node=$1
    if grep -A5 "$node {" "$DTS" | grep -q 'status'; then
        sudo sed -i "/$node {/,/spi-max-frequency/ s/status = \".*\";/status = \"okay\";/" "$DTS"
    else
        sudo sed -i "/$node {/,/spi-max-frequency/ s/compatible = \"tegra-spidev\";/&\n\t\tstatus = \"okay\";/" "$DTS"
    fi
}

echo "🔧 Enabling spi@0 and spi@1..."
fix_spi_node "spi@0"
fix_spi_node "spi@1"


patch_pin() {
    local pin=$1
    sudo sed -i "/${pin} {/,/nvidia,enable-input/ {
        s/nvidia,function = \"rsvd1\"/nvidia,function = \"spi1\"/
        s/nvidia,tristate = <0x01>/nvidia,tristate = <0x00>/
        s/nvidia,enable-input = <0x00>/nvidia,enable-input = <0x01>/
    }" "$DTS"
}

echo "🔧 Patching pinmux blocks..."
for pin in spi1_mosi_pc0 spi1_miso_pc1 spi1_sck_pc2 spi1_cs0_pc3 spi1_cs1_pc4; do
    patch_pin "$pin"
done

echo "🔧 Fixing tristate and input-enable for SPI1 pins..."


fix_pinmux_field() {
  local pin=$1
  awk -v pin="$pin" '
  BEGIN { in_block = 0 }
  {
    if ($0 ~ pin " {") {
      in_block = 1
    }
    if (in_block && /nvidia,tristate =/) {
      sub(/<0x1>/, "<0x0>")
    }
    if (in_block && /nvidia,enable-input =/) {
      sub(/<0x0>/, "<0x1>")
    }
    print
    if (in_block && /}/) {
      in_block = 0
    }
  }' "$DTS" | sudo tee "$DTS.fixed" > /dev/null && sudo mv "$DTS.fixed" "$DTS"
}

fix_pinmux_field "spi1_mosi_pc0"
fix_pinmux_field "spi1_miso_pc1"
fix_pinmux_field "spi1_sck_pc2"
fix_pinmux_field "spi1_cs0_pc3"
fix_pinmux_field "spi1_cs1_pc4"


echo "📦 Recompiling DTS to $DTB..."
sudo dtc -I dts -O dtb -o "$DTB" "$DTS"

echo "✅ SPI DTS patch applied and DTB regenerated successfully."
```

</details>

```bash
sudo bash modify_spi.sh
```

After running `modify_spi.sh`. This script will update the **SPI1** configuration in the device tree, recompile it, and overwrite the old one. If you want to enable **SPI2**, simply replace the keyword `spi1` with `spi2` in the `modify_spi.sh` script.

After modifying the device tree, flash the image to the Jetson-Nano:

```bash
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flashing_over_jetson-nano.png" /></div>

After rebooting, the `SPI0_MOSI`, `SPI0_MISO`, `SPI0_CS0`, and `SPI0_CS1` pins on the **40-pin** header will be available for use.

## Testing the SPI1 on Jetson-nao

Short pin 19 and pin 21, which correspond to `SPI0_MOSI` and `SPI0_MISO` respectively, to perform a loopback test using the **SPI1** controller.
The Jetson-Nano datasheet can be downloaded and viewed  [here](https://developer.download.nvidia.com/assets/embedded/secure/jetson/Nano/docs/DA-09753-001_v1.0.pdf?__token__=exp=1751957680~hmac=6683559201b449f5191cbe0069e9299b1c3b373e82307d09a6a92d596bee4745&t=eyJscyI6ImdzZW8iLCJsc2QiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyJ9
), particularly **page 6**.
<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/40-pin_jetson-nano.jpg" /></div>

The physical connection diagram is shown below:
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/real-connecr-spi.png
" /></div>

Load the SPI driver module, then download and compile the test program:

```bash
sudo modprobe spidev
git clone https://github.com/rm-hull/spidev-test
cd spidev-test/
gcc spidev_test.c -o spidev_test
```

Run the test program and specify `spidev0.0` (corresponding to **SPI1**):

```bash
./spidev_test -v -D /dev/spidev0.0 -p "Test"
```

The test result is shown below, indicating that **SPI1** has successfully completed the loopback transmission. You can also run `ls /dev/spidev*` to check the available SPI controllers.
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/spi_res_jetson-nano.png
" /></div>

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
