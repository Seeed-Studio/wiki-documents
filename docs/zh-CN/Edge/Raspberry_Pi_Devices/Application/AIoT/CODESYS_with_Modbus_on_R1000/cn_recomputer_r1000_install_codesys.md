---
description: 本文主要介绍如何安装 CODESYS 以及如何在 R1000 中部署新项目

title: 如何为 reComputer R1000 安装 CODESYS
keywords:
  - Edge Controller
  - reComputer R1000
  - CODESYS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_install_codesys
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## 介绍

CODESYS 是一个流行的自动化软件开发平台，广泛用于工业控制和自动化系统。它的全称是 Controller Development System，最初由德国公司 3S-Smart Software Solutions 开发。
本文主要介绍如何下载和安装 CODESYS，并最终将 CODESYS 项目部署到 reComputer R1000

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

## 硬件准备

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
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

## 软件准备

- [CODESYS 开发系统 V3](https://store.codesys.com/de/codesys.html)
- [CODESYS 树莓派控制系统 SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## 开始使用

### 安装 CODESYS

**步骤 1**：前往 CODESYS 商店，找到 `CODESYS Development System V3` 并下载，然后找到 `CODESYS Control for Raspberry Pi SL` 并下载。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/1.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/2.png" /></center>

**步骤 2**：双击下载的 `CODESYS 64 3.5.20.30.exe` 文件，点击 `install` 下载 `CODESYS Installer`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/3.png" /></center>

**步骤 3**：`CODESYS Installer` 下载完成后，`InstallShield Wizard` 会自动弹出。点击 `Next` 开始安装 `CODESYS`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" /></center>

**步骤 4**：点击接受许可协议，然后点击 `Next` 进入下一步。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/5.png" /></center>

**步骤 5**：点击 `I have read the information`，然后点击 `Next`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/6.png" /></center>

**步骤 6**：修改安装目录，修改完成后点击 `Next`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/7.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/8.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/9.png" /></center>

**步骤 7**：选择 `Complete` 完整安装 CODESYS，然后点击 `Next`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/10.png" /></center>

**步骤 8**：点击 `Install` 开始安装。这需要一些时间，请等待安装完成

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/11.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/12.png" /></center>

### 更新依赖包

**步骤 1**：安装完成后，打开 `CODESYS V3.5 SP20 Patch 3`，点击 `Tools`--->`CODESYS Installer..`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p1.png" /></center>

**步骤 2**：在新窗口中，点击 `Install File(s)`，然后选择要安装的包。选择后，包将被解析

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p2.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p3.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p4.png" /></center>

**步骤 3**：点击 `I accept the license agreement(s)`，然后点击 `Continue` 开始安装

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p5.png" /></center>

**步骤 4**：会弹出一个窗口，要求您关闭 `CODESYS V3.5 SP20 Patch 3`。关闭 CODESYS 然后点击 `OK`。CODESYS 将开始安装新包。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p7.png" /></center>

**步骤 5**：等待安装完成

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p8.png" /></center>

### 部署 CODESYS 运行时

CODESYS Runtime 是指 CODESYS 运行时系统，它是安装在目标设备上用于执行使用 CODESYS 开发环境创建的 PLC 程序的软件。CODESYS Runtime 将目标设备（如嵌入式系统、工业计算机、Raspberry Pi 等）转换为可编程逻辑控制器（PLC）。

**步骤 1**：确保 reComputer R1000 和主机在同一网段

**步骤 2**：点击 `Tools`--->`Update Raspberry Pi`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r1.png" /></center>

**步骤 3**：输入 reComputer R1000 的用户名和密码、IP 地址，然后点击 Install 将 `run time` 下载到 reComputer R1000，最后点击 `Start` 启动 `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r2.png" /></center>

**步骤 4**：当消息栏中出现以下消息时，表示 reComputer R1000 已成功运行 `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r3.png" /></center>

### 部署新项目

**步骤 1**：点击 `File`--->`New project` 创建新项目

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n1.png" /></center>

**步骤 2**：输入项目名称，选择 `Project`--->`Standard project`，最后点击 `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n2.png" /></center>

**步骤 3**：在 `Device` 列中选择 `CODESYS Control for Raspberry Pi 64 SL (CODESYS)`，在 `PLC_PRG in` 中选择 `Structured Text (ST)`，最后点击 `OK`。新项目创建完成。稍后，我们将演示如何部署该项目。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n3.png" /></center>

**步骤 4**：创建项目后，双击该项目。在新弹出的窗口中，点击 `Scan Network`，可以找到同一网段中的 reComputer R1000。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n5.png" /></center>

**步骤 5**：选择 R1000 并点击 `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n6.png" /></center>

**步骤 6**：在 `Add Device User` 窗口中，填入 reComputer R1000 的用户名和密码，最后点击 `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n7.png" /></center>

**步骤 7**：然后会弹出 `Device User Login` 窗口，再次填入 reComputer R1000 的用户名和密码，最后点击 OK

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n8.png" /></center>

**步骤 8**：连接成功后，可以看到状态指示灯都是绿色的

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n9.png" /></center>

**步骤 9**：点击工具栏上如图所示的 Deploy 按钮，编译并将当前项目部署到 reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n10.png" /></center>

**步骤 10**：点击工具栏上的 Start 按钮，在 reComputer R1000 中启动当前项目

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n11.png" /></center>

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
