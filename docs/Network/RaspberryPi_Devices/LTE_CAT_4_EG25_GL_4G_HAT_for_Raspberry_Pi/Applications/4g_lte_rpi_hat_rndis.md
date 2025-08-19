---
description: Configure RNDIS on Windows to connect Raspberry Pi 4G LTE HAT via USB, enabling seamless internet and network access.

title: RNDIS on 4G LTE Raspberry pi HAT Windows
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - RNDIS
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /raspberry_pi_4g_lte_hat_rndis
last_update:
  date: 3/17/2025
  author: Kasun Thushara
---

## Introduction

**RNDIS (Remote Network Driver Interface Specification)** is a Microsoft protocol that enables USB devices to emulate network adapters, allowing them to provide internet or network access to a Windows PC via a USB connection. In Windows, installing the correct RNDIS driver is essential for devices like Quectel modules to function as virtual Ethernet interfaces. Once installed, the driver allows the PC to recognize the device as a network adapter, enabling internet sharing or local network communication. This process is especially common in cellular modules that provide internet connectivity over USB.

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


## Software Prerequisites
If you have already installed NDIS or any other driver on Windows, please uninstall it and install the RNDIS driver provided below.

- [Download From Here](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_RNDIS_V1.1.12.zip)
- [Get Latest Updates](https://www.quectel.com/download-zone/?_sf_s=rndis)


You can check the installation result through `Computer Management` → `Device Manager`. The "Device 
Manager" interface after a successful driver installation is shown below.  

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree.PNG" 
    style={{ width: 600}} 
  />
</div>



### Configure to RNDIS Mode

To configure RNDIS mode, use the QCOM tool and follow these steps:  
1. Enter and send the following command on [QCOM tool](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar):  
   **AT+QCFG="usbnet"?**  
   
2. If the response does not show **AT+QCFG="usbnet",3**, manually set it to RNDIS mode by sending:  
   **AT+QCFG="usbnet",3**


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnetcommnad.PNG" 
    style={{ width: 600}} 
  />
</div>

### Connect with Network

You should see a network interface (e.g., Network X) indicating the connection.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connection.PNG" 
    style={{ width: 400}} 
  />
</div>

You can verify the new RNDIS configuration using the ipconfig command.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/3.PNG" 
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

