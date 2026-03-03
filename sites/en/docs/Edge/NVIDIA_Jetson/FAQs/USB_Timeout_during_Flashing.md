---
description: List the possible causes of timeout issues during the Jetson flashing process.
title: Timeout Issue during Flash Jetpack
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /usb_timeout_during_flash
last_update:
  date: 1/22/2025
  author: Youjiang
---

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/timeout_issue.png"/>
</div>

There are several reasons that may cause a timeout issue during the process of flashing the Jetson device via the command line:

1. **Abnormalities with the Ubuntu host PC used for flashing:** A typical example is flashing through an Ubuntu virtual machine. Due to USB stability issues in virtual machines, timeouts are often encountered.
2. **Insufficient power supply from the DC power adapter:** The power output needs to meet the requirements of the Jetson device. You can check this parameter on the product details page of Seeed Bazaar.
3. **Quality issues with the Type-C cable:** Although flashing can be done via USB 2.0, the quality of the cable affects the stability of the process. Based on practical experience, two key points for the cable are: (a) it should at least support USB 2.0 communication, and (b) the cable length should be shorter than 1.5m.
4. **Avoid using USB hubs:** Some USB hubs may affect the stability of data transmission during the flashing process.
5. **Incorrect flashing package selection:** Please verify that the correct flashing package is selected and restart the flashing script.

Please check the issues mentioned above and try restarting the flashing script.

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
