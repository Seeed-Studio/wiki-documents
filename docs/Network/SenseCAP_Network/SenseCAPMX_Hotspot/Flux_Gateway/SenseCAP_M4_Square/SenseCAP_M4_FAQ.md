---
description: SenseCAP M4 FAQ
title: SenseCAP M4 FAQ
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 02/14/2023
  author: Matthew
---

FAQ
===

### **What's the average flux chain sync time for the node?**

Download and load a 20GB snapshot file, and chain sync for about an hour to catch up with the latest block. The correct sync time depends on the device network, make sure the device has a good network.

### **Does SenseCAP M4 Square support NIMBUS and STRATUS?**

**No**,SenseCAP M4 Square only support CUMULUS. if need NIMBUS please click [here](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)

### **How to check if my port is open?**

SenseCAP M4 Square opens all ports required by Flux. SenseCAP Hotspot App provides UPNP detection. If the UPNP status is ON, the ports are open. If the status is OFF, please check your router's UPNP. For more detail,please visit [Flux Node Network Setup](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

### **Does M4 need static IP and is it possible to run multiple SenseCAP M4 Squares in the same external IP?**

An external IP is required.

Max run 8 devices per IP, and make sure your router supports UPnP or port forward.

### **How to test the network bandwidth to meet the request?**

https://www.speedtest.net

### **What is the different between flux and flux tokens**

Flux tokens are Flux. Flux tokens are Parallel Assets that are paid on different blockchains, like ETH Flux, BSC Flux, etc. They are claimable in the Fusion app inside Zelcore. Select "Parallel Mining Claim" from the three dots top right. You will only see a claimable amount if your Flux-Token amount is higher than the fees required to claim.

### **If I am a professional user, can I erase the original system and install other one?**

This is not a recommended operation. However, it is an x86-based device and you can reinstall any system you want, before it, please make sure that you know what you are doing.

But keep in mind that if erase the standard system, you will lose your warranty, and it's hard to revert back to the origin system.

### **Do I need to choose the power plug myself?**

M4 Square includes a wide range input power adapter and has US/AU/UK/EU plug.

### **Need an external antenna？**

The wifi antenna is inside the device. SenseCAP M4 Square-Fluxnode does not require an external antenna.

### **Do I need to stake the 1000Flux?**

**Yes**, the 1000 Flux is not included in the hardware, so you need to stake it by yourself.

### **Can my M1 turn into FluxNode, and convert an 8GB Pi into a FluxNode?**

At present, Raspi 8GB is supported by Flux, but it requires an external SSD, and the stability cannot be guaranteed, which may affect the stable equipment running.