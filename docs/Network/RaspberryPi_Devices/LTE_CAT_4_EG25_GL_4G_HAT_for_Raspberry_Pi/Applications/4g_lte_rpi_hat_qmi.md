---
description: Learn how to set up a Raspberry Pi with a 4G HAT using the Quectel EG25 module in QMI mode for reliable LTE internet access. Step-by-step guide for configuring, compiling, and dialing with quectel-CM on Raspberry Pi.

title: 4G Raspberry Pi HAT - QMI Mode Setup on Raspberry Pi OS
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - QMI
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Raspberry-Pi-4G-LTE-CAT4-HAT.webp
slug: /raspberry_pi_4g_lte_hat_qmi
last_update:
  date: 3/20/2025
  author: Kasun Thushara
---

## Introduction

This guide explains how to configure internet access on a Raspberry Pi using a 4G HAT equipped with a Quectel EG25-G module. The Quectel EG25-G is a widely-used LTE modem that supports multiple network protocols, including QMI (Qualcomm MSM Interface) mode, which enables efficient and high-speed mobile broadband connectivity. By following this guide, you will learn how to set up the module in QMI mode, compile and use the quectel-CM dial-up tool, and establish a stable 4G internet connection on your Raspberry Pi. This method is ideal for applications requiring mobile internet access, such as IoT deployments, remote monitoring, and edge computing.

## Prerequisites

### Hardware Requirements

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Software Prerequisites

#### Remove Previous Dialing Configurations

Before proceeding, ensure that any other dialing methods are removed to avoid conflicts.

1. **Verify Correct Serial Port**

Run the following command to verify you are using the correct AT command port (replace `/dev/ttyUSB2` if needed):

```bash
sudo minicom -D /dev/ttyUSB2
```

2. **Check and Set USB Network Mode**

Inside the minicom terminal, input:

```bash
AT+QCFG="usbnet"?
```

- If the response is `usbnet,0`, no changes are needed.

To explicitly set the mode to `0`:

```bash
AT+QCFG="usbnet",0
```

3. **Restart the Module**

Reset the module using:

```bash
AT+CFUN=1,1
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnet_qmi.PNG"
    style={{ width: 600}}
  />
</div>

## Verify Kernel Driver(qmi_wwan and others)

Check if the `qmi_wwan` driver is loaded:

```bash
lsmod 
```

- If you see output indicating `qmi_wwan` is loaded, the kernel driver is active.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/lsmod.PNG"
    style={{ width: 600}}
  />
</div>

## Transplanting the Dial Tool

1. **Download and Extract the Tool**

- After downloading, [unzip the package](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/eg25qmi.zip) into your home directory.
- Navigate to your home directory:
  
```bash
ls
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls1.PNG"
    style={{ width: 600}}
  />
</div>

- You should see a folder named `eg25qmi`.

2. **Navigate to the Tool Directory**

```bash
cd eg25qmi
ls
```

- You will see source files for the dial-up tool.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls2.PNG"
    style={{ width: 600}}
  />
</div>

## Compilation

1. **Compile the Dialing Tool**

```bash
sudo make
```

- After compilation, newly generated files (highlighted in green) will be visible, including the `quectel-CM` dial-up tool.

### Verify the Compiled Files

```bash
ls
```

- The `quectel-CM` executable should be present. This is the dial-up tool required for connecting to the internet.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls3.PNG"
    style={{ width: 600}}
  />
</div>

## Dial-Up Internet Access

1. **Start Dialing**

```bash
sudo ./quectel-CM
```

- If the dialing process is successful, you will see an assigned IP address and gateway information.
- If the first attempt fails, wait and retry; the second attempt should succeed.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connect.PNG"
    style={{ width: 600}}
  />
</div>

## Post-Dialing Verification

1. **Check Network Interface**

```bash
ifconfig
```

- Look for the `wwan0` interface with an IP address.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/wwan0.PNG"
    style={{ width: 600}}
  />
</div>

2. **Test Connectivity**

```bash
ping -I wwan0 8.8.8.8
```

- A successful ping confirms the connection is active.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ping.PNG"
    style={{ width: 600}}
  />
</div>

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
