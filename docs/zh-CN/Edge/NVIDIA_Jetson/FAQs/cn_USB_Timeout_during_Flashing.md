---
description: 列出 Jetson 刷机过程中超时问题的可能原因。
title: 刷写 Jetpack 时的超时问题
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/usb_timeout_during_flash
last_update:
  date: 1/22/2025
  author: Youjiang
---

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/timeout_issue.png"/>
</div>

通过命令行刷写 Jetson 设备过程中可能导致超时问题的原因有以下几种：

1. **用于刷机的 Ubuntu 主机 PC 异常：** 典型的例子是通过 Ubuntu 虚拟机进行刷机。由于虚拟机中 USB 稳定性问题，经常会遇到超时。
2. **DC 电源适配器供电不足：** 电源输出需要满足 Jetson 设备的要求。您可以在 Seeed Bazaar 的产品详情页面查看此参数。
3. **Type-C 线缆质量问题：** 虽然刷机可以通过 USB 2.0 完成，但线缆质量会影响过程的稳定性。根据实际经验，线缆的两个关键点是：(a) 至少应支持 USB 2.0 通信，(b) 线缆长度应短于 1.5m。
4. **避免使用 USB 集线器：** 某些 USB 集线器可能会影响刷机过程中数据传输的稳定性。
5. **刷机包选择错误：** 请验证是否选择了正确的刷机包并重新启动刷机脚本。

请检查上述提到的问题并尝试重新启动刷机脚本。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>