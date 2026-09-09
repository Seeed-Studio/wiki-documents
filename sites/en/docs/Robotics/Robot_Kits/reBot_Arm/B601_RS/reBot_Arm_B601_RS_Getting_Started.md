---
description: This guide will help you get started with the reBot Arm B601-RS, including purchasing options, assembly, calibration, and software configuration.
title: reBot Arm B601-RS Quick Start
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 2026-08-17
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Getting Started with reBot Arm B601-RS

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6-DOF Robotic Arm · Multi-Motor Support · Kinematics Solver · Trajectory Planning · Fully Open Source</strong>
</p>

The reBot Arm project has been open-sourced on [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). This guide will take you through the quick start of B601-RS, from assembly to operation.
The content of this guide is racing towards you at the speed of light — stay tuned.

## Safety Disclaimer and Risk Notice

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## About Power Supply

1. The robotic arm is not shipped with a power supply / does not include a power supply by default. You can connect a battery yourself, or purchase our open-source [48V 12.5A MeanWell Power Supply](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html) or [Amazon](https://www.amazon.com/LRS-600-48-Switching-Upgrade-Version-SE-600-48/dp/B0BV5XFYNS/ref=sr_1_1?crid=2MK5Y1UI66CW9&dib=eyJ2IjoiMSJ9.FAt8rrpVeLIbeU2px5Bpe3WU2xsHpE3Kw1Fc6ZdPBFrIpRsaASOwU1dL9jPUNnpXO5u67hvlSXTsKCXH7jehZ8VWfiSFbcHmsVhJY_ua86iPUltJFeWlT9LIXphFER27jHWGnaJb2NdRIpPBMVdae8qgIllUI1J-Q8pZranpyjkkiJP2RmiEdhUBXTvvH3-vhk8z2uhf7BJrGW7hjRbjyCO7WHwwBQ3tMcnEKwto2doy9qus35djHRzODSFPbMuiA66PdgPuib4VL1aQghehDEiceMIpTUiCHHeRHfpB71M._yrosm8mVfpUq-5PjNTLSaYPgv8Dot6YbQTaGULjlLQ&dib_tag=se&keywords=LRS-600-48&qid=1781762081&s=electronics&sprefix=lrs-600-48%2Celectronics%2C351&sr=1-1), Please do not purchase power supplies from unbranded manufacturers or unsafe channels. Any risks or consequences arising therefrom shall be borne by the individual.

If your household voltage is 220V, set the voltage selector switch on the side of the power supply to 230V. If your household voltage is 110V, switch it to 115V.

| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |


   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" />
   </div>

2. Alternatively, you can choose our open-source 24V 14.6A MeanWell power supply enclosure for self-assembly. The text instructions and BOM are open-sourced in the [GitHub repository](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) (recommended only for developers with relevant power supply assembly experience).

   Assembly reference video:

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>

## Step 1: Assembly Guide

- Before assembly, please read the following instructions carefully. To ensure a smooth assembly process and a complete hands-on experience, please be patient, stay focused, and always follow these key points:
  1. This kit includes numerous screws and structural parts, some of which look similar. Please carefully verify the screw specifications and part models, and confirm the installation orientation before fastening.
  2. The video was recorded in early April. There may be minor adjustments to parts later, but this does not affect the assembly quality when following the video. The final parts are subject to what is shipped.
  3. For ease of screw installation and removal, the open-source BOM specifies standard screws. However, the screws shipped with the kit have thread-lock applied. You may also use your own preferred tools or an electric screwdriver (highly recommended to have one ready). If using an electric tool, be sure to set the torque to a low-to-medium level (3–6 kgf·cm) to avoid excessive torque that could strip the screws, causing irreversible damage where parts cannot be removed. If there is any sign of stripping, immediately replace the screw or realign and retry. Stripped thread-lock screws cannot be removed with a screw extractor and will scrap the entire part. Therefore, please proceed with caution.
  4. Please prioritize safety during assembly to avoid pinched fingers or crush injuries. Children should complete this project with the accompaniment of a parent or guardian.




## Step 2: Calibrate the Robotic Arm and Get Started

1. Explore our **MotorBridge** platform. This platform is a one-stop comprehensive solution that supports continuous expansion of motor types, covering [Damiao motors](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride motors](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque motors](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator motors](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow, and more. It is also compatible with continuously updated robotic arm products like reBot. The platform is user-friendly for beginners and also provides a Python SDK with fully consistent functionality for developers.

2. Experience the new features and details of MotorBridge specifically adapted for the reBot robotic arm, including one-click zero-point calibration, parameter writing, drag-and-drop motor control via the UI, and a built-in model visualization interface.

3. This tool is fully compatible with **Windows, Ubuntu, and macOS** operating systems.

:::tip
1. It has been verified that virtual machine performance is insufficient for running demos and there are configuration issues. It is recommended to use an Ubuntu physical machine to control the robotic arm.

2. (Beta version) Let an agent help you initialize the robotic arm. Copy the following content and send it to the agent:

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

  Note: If you purchased a pre-assembled kit, please tell the agent during the motor ID writing step: "I purchased a pre-assembled kit, please scan motors 1–7 to verify they are all online, do not rewrite the motor IDs."

3. The agent uses CLI commands to complete motor ID writing, while the wiki uses a web UI interaction method. Both approaches work.

:::

You should have completed the preliminary preparation for the robotic arm assembly by following the video. Next, we will introduce the steps for writing motor IDs and calibrating the robotic arm.


Please refer to the video and text tutorial. Before controlling the robotic arm, you need to reset the zero point again.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



### 1. Install Miniforge (Recommended) (Supports Windows\Ubuntu\macOS\Jetson\Raspberry Pi)

1. Install Miniforge and create a virtual environment to avoid conflicts with other environment packages that could cause demo failures.

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Jetson\Raspberry Pi">

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```
</TabItem>
<TabItem value="macOS" label="macOS">

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

</TabItem>
<TabItem value="windows" label="windows">

Open the Miniforge Release page in your browser, find the latest version of `Miniforge3-Windows-x86_64.exe` and click to download:

```text
https://github.com/conda-forge/miniforge/releases
```

</TabItem>
</Tabs>

2. Create a Python 3.12 virtual environment:

:::tip
  **Git Bash users**: If the `conda` command is not found, it means Git Bash has not loaded the conda environment. You need to initialize it first:

  ```bash
  # Temporary (current terminal only), replace <install_path> with the actual path
  source <install_path>/etc/profile.d/conda.sh

  # Permanent (write to bashrc, run once)
  echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
  source ~/.bashrc
  ```

  To let PowerShell automatically activate the conda environment:

  ```bash
  conda init powershell
  ```

:::

```bash
conda create -y -n rebot python=3.12
```

3. Activate the virtual environment. **You need to re-run this activation command every time you open a terminal to use reBot-related features**:

```bash
conda activate rebot
```

### 2. Install Motorbridge

After activating the reBot virtual environment, run the following command to install motorbridge:

:::tip Note for macOS users
If you experience low frame rates during teleoperation on macOS, it may be caused by an outdated WCH CH34x driver version. For **macOS 10.14 and later**, the system includes a built-in `AppleUSBCHC0M` driver. You can uninstall the old driver and switch to the macOS built-in driver, which should effectively improve frame rates.
:::


```bash
pip install motorbridge
```

### 3. PCAN-USB

Get the PCAN-USB device working on the CAN bus at 1Mbps for robotic arm communication.

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Raspberry Pi">

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

</TabItem>

<TabItem value="Jetson" label="Jetson">

Download the file: [peak-linux-driver-9.2.0.tar.gz](https://www.peak-system.com/quick/PCAN-Linux-Driver?_gl=1*1shem7p*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwj7HTBhBiEiwA8s35OkNgKcwSr95URUncy5ADLlO-AjdZSFxtqTgof7UY2-LgkXWyoHMX3RoC0i4QAvD_BwE&gbraid=0AAAAAD_YjBa3gnuD4t8dG6dxnFEdZOcTz)

- Remove brltty
On Jetson, brltty may occupy the USB serial port used by the leader. Remove it first:
```bash
sudo apt remove -y brltty
```

- Install Dependencies
```bash
sudo apt update
sudo apt install -y \
    build-essential \
    gcc \
    g++ \
    make \
    libpopt-dev \
    can-utils \
    ethtool \
    nvidia-l4t-kernel-headers
```
Verify that the current kernel headers directory exists:
```bash
ls -l /lib/modules/$(uname -r)/build
```

- Compile the PEAK SocketCAN Driver
Download and extract PEAK Linux Driver 9.2.0, then enter the source directory:
```bash
tar -xvf peak-linux-driver-9.2.0.tar.gz
cd ~/peak-linux-driver-9.2.0
```
Clean previous build artifacts:
```bash
make clean
```
Compile in netdev mode:
```bash
make netdev
```
Netdev mode registers PCAN-USB as a Linux SocketCAN network interface.
Do **not** use plain `make`. Plain `make` builds chardev mode, while LeRobot and motorbridge-cli rely on SocketCAN interfaces.

- Install and Load the Driver
Install the driver:
```bash
sudo make install
sudo depmod -a
```
Load the pcan kernel module:
```bash
sudo modprobe pcan
```
Enable automatic loading on boot:
```bash
echo pcan | sudo tee /etc/modules-load.d/pcan.conf
```
Confirm the driver is loaded:
```bash
ip -br link | grep can
```
Expected output:
```
can0             DOWN           <NOARP,ECHO>
can1             DOWN           <NOARP,ECHO>
.....
```

- Find which PCAN interface corresponds to your robotic arm
```bash
for i in /sys/class/net/can*; do [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"; done
```
Interfaces listed here are PEAK PCAN-USB devices, e.g.:
```
can2
```

- Persist the `pcan_refresh` command
Linux environment variables do not survive reboot, and PCAN interface numbering may change. A more reliable approach is to permanently define a refresh function and run it after opening a terminal.

Append the function to `~/.bashrc`:
```bash
grep -q '^pcan_refresh()' ~/.bashrc || cat >> ~/.bashrc <<'EOF'

pcan_refresh() {
    local iface
    iface=$(sudo setup-pcan-if) || return 1
    export PCAN_IF="$iface"
    echo "PCAN_IF=$PCAN_IF"
}
EOF
```
```bash
source ~/.bashrc
```
Run this after rebooting or re-plugging PCAN-USB:
```bash
pcan_refresh
```
On success, it outputs:
```
PCAN_IF=can1
```
Use `$PCAN_IF` in all subsequent commands instead of hardcoding `can1` or `can2`.

```bash
sudo modprobe peak_usb
ip -br link

# If $PCAN_IF appears, set the bitrate
sudo ip link set $PCAN_IF down 2>/dev/null
sudo ip link set $PCAN_IF type can bitrate 1000000 restart-ms 100
sudo ip link set $PCAN_IF up
```

</TabItem>
<TabItem value="macos" label="macos">

If `libPCBUSB.dylib` cannot be loaded, install PCBUSB first:
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

`install.sh` only creates `libPCBUSB.dylib`. motorbridge's native loader `dlopen`s the bare name `PCBUSB`, so add this symlink. Without it, connecting the arm fails with `load PCBUSB failed` even when a `libPCBUSB.dylib` ctypes check would pass:

```zsh
sudo ln -sf /usr/local/lib/libPCBUSB.dylib /usr/local/lib/PCBUSB
```

Configure `DYLD_FALLBACK_LIBRARY_PATH` so motorbridge-gateway can find PCBUSB at runtime. Prefer FALLBACK over `DYLD_LIBRARY_PATH`: the latter overrides dyld's default search order for the whole process and can break unrelated software. Create an activation script in the conda environment so it takes effect automatically each time you run `conda activate rebot`:

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_FALLBACK_LIBRARY_PATH="/usr/local/lib${DYLD_FALLBACK_LIBRARY_PATH:+:$DYLD_FALLBACK_LIBRARY_PATH}"
EOF

echo $DYLD_FALLBACK_LIBRARY_PATH
```

Optional, no sudo (shared machines): install into `~/.local/lib`. If you have the motorbridge source tree:

```bash
./scripts/setup_pcbusb_macos.sh --user-local
ln -sf "$HOME/.local/lib/libPCBUSB.dylib" "$HOME/.local/lib/PCBUSB"
```

Point the conda activate script at `$HOME/.local/lib` instead of `/usr/local/lib`.

Check if ready. Plug in the PCAN adapter first. `ctypes.CDLL('libPCBUSB.dylib')` is not a valid runtime check — motorbridge never loads that name.

```zsh
# Check Python package and CLI are ready
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# Native loader dlopens the bare name PCBUSB
python3 -c "import ctypes; ctypes.CDLL('PCBUSB'); print('PCBUSB load OK')"

# Real runtime check (can0 maps to PCAN_USBBUS1 on macOS)
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
```

</TabItem>
<TabItem value="windows" label="windows">

Please visit [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) to install the PCAN-USB driver.

</TabItem>



</Tabs>

:::tip Attention
If **PCAN-USB** is not detected in Device Manager after installing the driver, expand the section below, download the PCAN firmware, and follow the recovery steps.
:::



<details>

<summary>PCAN firmware download and driver recovery steps</summary>

If PCAN-USB still does not work after installing the driver and Device Manager does not show the **PCAN-USB** device illustrated below, download the PCAN firmware package and follow these steps to install the DFU driver and reflash the firmware.

![PCAN-USB detected in Device Manager](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)

> 📦 [Download USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

### Install the DFU Driver

1. Extract the downloaded package. It contains the `Dfu tool` and `pcan` folders.

![Dfu tool and pcan folders extracted from the package](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/02-extracted-folders.png)

2. Open the `Dfu tool` folder and run the `.exe` installer. After installation, record the driver installation path, for example:

```text
C:\Program Files (x86)\STMicroelectronics\Software\DfuSe v3.0.6\Bin\Driver
```

![DfuSe installer and driver installation path](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/03-dfuse-install-location.png)

3. Set the DIP switch on the USB2CAN module to **BOOT**, then connect the module to your computer.

![Set the USB2CAN DIP switch to BOOT](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/04-usb2can-boot-switch.jpg)

4. Open **Device Manager**, locate **Other devices → STM32 BOOTLOADER**, right-click it, select **Update driver**, and then select **Browse my computer for drivers**.

![STM32 BOOTLOADER in Device Manager](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/05-stm32-bootloader.png)

![Select Browse my computer for drivers](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/06-update-driver.png)

5. Paste the DfuSeDemo driver path recorded earlier into the location field, select **Include subfolders**, and click **Next**.

![Enter the DfuSeDemo driver path and select Include subfolders](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/07-driver-path.png)

6. Disconnect and reconnect the USB2CAN module. If it is now identified as **STM Device in DFU Mode**, the driver update was successful.

7. Open **DfuSeDemo** and confirm that it correctly detects the USB2CAN module.

![DfuSeDemo correctly detects the USB2CAN module](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/08-dfuse-detects-usb2can.png)

### Flash the PCAN Firmware

1. In DfuSeDemo, click **Upgrade or Verify Action → Choose...**, and select the firmware from the extracted `pcan` folder.
2. Click **Upgrade**, click **Yes** in the confirmation dialog, and wait for the firmware flashing process to finish. You can then close DfuSeDemo.

![Select the PCAN firmware and click Upgrade in DfuSeDemo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![Firmware upgrade completed](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

### Restore and Verify the Device

Disconnect the USB2CAN module, set the DIP switch to **120R**, and reconnect it to the computer. Open Device Manager. If the device is identified as **PCAN-USB**, the issue has been resolved and you can continue with this guide.

![PCAN-USB successfully detected in Device Manager](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>

<details>
<summary>PCAN Firmware Download & Driver Repair Steps - Ubuntu</summary>

Ubuntu users please refer to this guide

1.> 📦 [Click to download USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.Switch USB2CAN to BOOT

3.Please extract the USB2CAN.zip from step 1, and place flash_pcan_ubuntu.sh and pcan_canable_hw.bin (from inside USB2CAN.zip) in the same directory

[Click to download flash_pcan_ubuntu.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_ubuntu.sh)

If transferring from another computer (e.g. scp):

```text
scp flash_pcan_ubuntu.sh pcan_canable_hw.bin seeed@your_Ubuntu_IP:~/Downloads/
```
Or simply copy it onto a USB flash drive and plug it into the Ubuntu machine — as long as the files end up in ~/Downloads, the current directory, or /tmp, the script will find them automatically.

4.Execute:

```text
bash flash_pcan_ubuntu.sh
```

Enter your password; wait for completion

After completion, switch back to "120R"

Re-plug the USB.

</details>

<details>
<summary>PCAN Firmware Download & Driver Repair Steps - MAC</summary>

MAC users please refer to this guide

1.> 📦 [Click to download USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.Switch USB2CAN to BOOT

3.Please extract the USB2CAN.zip from step 1, and place flash_pcan_mac.sh and pcan_canable_hw.bin (from inside USB2CAN.zip) in the same directory

[Click to download flash_pcan_mac.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_mac.sh)

If transferring from another computer (e.g. scp):

```text
scp flash_pcan_mac.sh pcan_canable_hw.bin seeed@your_MAC_IP:~/Downloads/
```

Or simply copy it onto a USB flash drive and plug it into the MAC — as long as the files end up in ~/Downloads, the current directory, or /tmp, the script will find them automatically.

4.Execute:

```text
bash /Users/"your_username"/Downloads/flash_pcan_mac.sh "/Users/"your_username"/Downloads/pcan_canable_hw.bin"
```

The above command assumes the files are placed in the Mac Downloads path; adjust according to your actual path

Enter your password; wait for completion

After completion, switch back to "120R"

Re-plug the USB.

</details>

<!-- ### 3. Write Motor IDs

:::tip Pre-assembled kit users, please skip this step
:::

Use a screwdriver to disconnect all motor cables, then connect a single motor to the USB-to-CAN module.

Run the following command to scan whether the motor is detected. The factory ID may be 127.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 126 --end-id 127 --timeout-ms 300
```

After confirming the motor's current ID, run the modification command (note: do not connect multiple motors at the same time, as this will cause all of them to be overwritten):

```bash
# Example: Change ID 127 to 5
motorbridge-cli id-set --vendor robstride --channel can0 --motor-id 127 --new-motor-id 5
```

Repeat the above steps until all motor IDs have been successfully written. Then connect all motor cables and run the following command to make a final confirmation. If 7 motors are detected, you are done.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
``` -->


### 4. Start MotorBridge-gateway to Write Zero Points and Debug

#### Before Motor Reset

Before motor parameter configuration, please note the following preparations and safety rules:

- Prepare 2 tooling clamps (size ≥3 inches) and a 48V XT30-output switching power supply (please choose a reputable brand; do not use inferior power supplies).
- During debugging and operation, maintain a safe distance of at least 1 meter.
- Do not hot-plug motors; disconnect the power supply before plugging/unplugging the XT30 2+2 connector.
- Do not overload or overspeed the motors; check wiring and fasteners before startup; do not use in humid, high-temperature, or dusty environments.
- Set reasonable program parameters and emergency stop function to prevent equipment runaway.
- **Please strictly follow the above rules. The seller is not liable for any risks and losses caused by non-compliant operations or human errors.**


#### Web UI Zero Point Writing and Debugging

Open the address [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) in your browser, click the Help option, copy the corresponding command based on your operating system and driver board, verify the IP address and port number, then press Enter in the terminal to run it.


```bash
motorbridge-gateway --bind 127.0.0.1:9002  
```

macOS:

```bash
motorbridge-gateway --bind 127.0.0.1:9002 
```

or

```bash
DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```

#### Initialize RS Motor Control Parameters

:::warning Complete parameter initialization before first use

Most reBot Arm B601-RS examples run in MIT mode. Native Position (`pos_vel`) mode directly uses the position-loop gain `loc_kp` and maximum velocity `vel_max`. Its motion behavior is also affected by the speed-loop gain `spd_kp` and acceleration parameter `acc_rad`. If the recommended B601-RS parameters have not been initialized, or if the parameters saved on each joint are inconsistent, Position mode may show abnormal response, speed, or acceleration and deceleration behavior.

First select `rebot-arm-robstride` under **Robot Model** in [MotorBridge Studio](https://motorbridge.github.io/motorbridge-studio/), scan and confirm that Joints 1-7 are all online, and complete the robotic arm zero calibration described above. Then perform the following steps:

1. Click **Read Parameters** to read the parameters currently saved on all online joints. This operation only reads data and does not modify the motors. Wait until the page reports that the control parameters have been read successfully, and retain the current values as a record.
2. Click **Apply Default Template** and confirm that the page reports the reBot Arm RobStride default parameter template has been applied to Joints 1-7. This operation only loads the recommended values into the page; it does not write them to the motors yet.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_read_params.png" alt="Read the B601-RS motor parameters and apply the default template" />
</div>

3. Click **Write Parameters**. Confirm that the robotic arm is safely supported and that no people or obstacles are nearby, then confirm the write operation in the dialog. Do not disconnect the power or plug or unplug motor cables while parameters are being written.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_write_params.png" alt="Confirm writing the B601-RS motor parameters" />
</div>

4. After writing is complete, MotorBridge Studio automatically reads the parameters back. Initialization is successful when the page reports that the post-write readback verification matches.

:::
