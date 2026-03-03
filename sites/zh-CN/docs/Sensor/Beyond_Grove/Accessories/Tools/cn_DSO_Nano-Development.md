---
title: DSO Nano/开发
keywords:
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DSO_Nano-Development/
slug: /cn/DSO_Nano-Development
last_update:
  date: 02/03/2022
  author: gunengyu
---

一些关于 [DSO Nano](/cn/DSO_Nano "DSO Nano") 开发的资源。

## 固件开发

* 获取源码并进行构建

请参阅 [使用 gcc 构建源码](/cn/DSO_Nano-gcc "DSO Nano/gcc")。如果需要使用 IAR 构建，请参阅下面的链接部分。

* 提交补丁

请在 DSO Nano 论坛分享您的修改。最好是从 git 仓库中生成一个 "diff" 文件，例如使用命令 `git diff > mypatch.diff`，然后发布 `mypatch.diff` 文件，而不是上传整个代码树。更好的方式是学习 [git](http://git-scm.com/) 并制作真正的补丁系列，或者在某处发布您自己的 git 仓库（例如 gitourious.org、github.com 等）。

## 调试

* 使用 [qemu 模拟器和 gdb](/cn/DSO_Nano-Qemu_gdb "DSO Nano/Qemu gdb") 调试运行在 ARM 上的代码

* 使用 [OpenOCD 和 gdb](/cn/DSO_Nano-OpenOCD_gdb "DSO Nano/OpenOCD gdb") 调试运行在带有 JTAG 的开发板上的 ARM 代码

## 链接

* [固件生成和升级](http://dsonano.googlecode.com/files/DSO%20nano%20firmware%20generation%20and%20upgrade.pdf) (PDF)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>