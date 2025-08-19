---
description: 本文主要介绍如何在 reComputer R1000 上安装 FIN。

title: reComputer R1000 安装 FIN
keywords:
  - 边缘控制器
  - reComputer R1000
  - fuxa
  - fin
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_install_fin
last_update:
  date: 07/4/2024
  author: ShuishengPeng
---

## 简介
FIN 框架（FIN Framework）是一款软件框架，包含应用套件，可用于集成、控制、管理、分析、可视化和连接。其功能可以被 OEM 集成到一系列产品和服务中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" /></center>

本文主要介绍如何在 reComputer R1000 上安装 FIN。

## 开始准备

在开始这个项目之前，您需要提前准备好硬件和软件，如下所述。

### 硬件准备

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

* 首先，您需要联系供应商获取 FIN 安装包和许可证文件。
* 然后，请编写一个名为 `fin.service` 的文件，用于在系统中启动 FIN 服务。如果您的安装包是一个 zip 文件，`fin.service` 文件的内容如下：
  ```shell
  [Unit]
  Description=FIN Framework
  After=syslog.target network.target
  StartLimitIntervalSec=0

  [Service]
  Type=simple
  Restart=always
  RestartSec=1
  WorkingDirectory=/opt/finFramework_5.1.6.55
  ExecStart=/usr/bin/java -Xmx512M -cp /opt/finFramework_5.1.6.55/lib/java/sys.jar -Dfan.home=/opt/finFramework_5.1.6.55/ fanx.tools.Fan finStackHost

  [Install]
  WantedBy=multi-user.target

  #systemctl daemon-reload
  #systemctl enable fin
  #systemctl start fin
  ```

## 安装步骤
**步骤 1**：输入以下命令安装 FIN：
  ```shell
  sudo apt install openjdk-17-jdk
  cd /opt/
  ## 将安装包解压到 /opt 目录
  sudo unzip ~/Desktop/FINFramework_5.1.6.55.zip
  ## 修改名称以便知道版本号
  sudo mv finFramework finFramework_5.1.6.55
  ## 将服务文件导入系统
  sudo cp ~/Desktop/fin.service /etc/systemd/system/
  sudo systemctl daemon-reload
  sudo systemctl enable fin
  sudo systemctl start fin
  sudo reboot
  ```
  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/install_fin.gif" /></center>

**步骤 2**：重启后，打开浏览器并输入 `http://localhost:8080/`。出现以下界面，表示安装的第一步成功。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/login.png" /></center>

**步骤 3**：初始用户名和密码均为 `su`。点击登录按钮进行登录。登录成功后，系统会要求您重置密码。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/change_passwd.gif" /></center>

**步骤 4**：登录后，系统可能提示没有许可证文件，此时需要导入许可证文件。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/add_license.gif" /></center>

之后，您可以探索 `FIN` 的各种功能。

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。以下是我们提供的几种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>