# Jetson Mate Getting Started

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/banner-2.png"/></div>

**Jetson Mate** is a carrier board which can install up to **4 Nvidia Jetson Nano/NX SoMs**. There is an on board **5-port gigabit switch enabling the 4 SoMs to communicate with each other**. All the 3 peripheral SoMs can be powered on or off separately. With one 65w PD power adapter and 1 ethernet cable, developers can easily build their own Jetson Cluster.

## Feature

- Easy to build and config
- Powerful and Compact
- Comes with a dedicated case and fan

## Specification

|Spec|--|
|--|--|
|Power|65w PD|
|Dimensions|110mm x 110mm|
|Onboard Switch|Microchip KSZ9896CTXC|


## Hardware Overview

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate.png"/></div>

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate-2.png"/></div>

## Getting Started

### Step.1 Preparation

- **Power Supply**: A qualified Type-C power adapter (at least **65w**) with PD protocol (**Not included**).

- **Nvidia Jetson Nano / Xavier NX Compute Modules** x 4. Either eMMC version or SD card version from Dev Kit is supported.

### Step.2 Install and Configure Jetson OS

> If you are using Computer Modules form Dev Kit with SD card, we suggest you install and configure the system on the Dev Kit carrier board.

If you are using Compute Modules with eMMC storage, please use Nvidia’s official SDK manager.

- Choose the target hardware:

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/step-1.png"/></div>

- Choose the OS and Libraries you want to install:

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/step-2.png"/></div>

- Download and install the files.

**During this Process**

1.Insert the computer module to the main node.

<div align=center><img width = 550 src="https://files.seeedstudio.com/wiki/Jetson-Mate/h-3.jpg"/></div>

2.Short the **2 GND pin** shown in the picture.

<div align=center><img width = 550 src="https://files.seeedstudio.com/wiki/Jetson-Mate/h-1.jpg"/></div>

3.Connect Jetson Mate to your computer via micro USB port.

<div align=center><img width = 550 src="https://files.seeedstudio.com/wiki/Jetson-Mate/h-2.jpg"/></div>

4.Power on the machine, press the **wake up button**.

5.Flash your compute module.

- When the installation of OS and software library is completed, you will see a window pop up. Select Manual Setup option. Then click flash. Wait until it’s finished.

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/step-3.png"/></div>

- Flash all the left compute modules you have.

**All the modules can only be flashed when installed on the main node**. Thus, you should flash and configure the modules one by one on the main node.

### Launch the Cluster

Install all the compute modules you have. **Power on**, then click **wake up button**. Now you can check the IP address through your router. You can also connect to the nodes via their hostname!

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/banner-1.png"/></div>

## Resources

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
