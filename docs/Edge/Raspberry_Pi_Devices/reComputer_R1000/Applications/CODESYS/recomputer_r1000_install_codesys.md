---
description: This article mainly introduces how to install CODESYS and how to deploy new projects in R1000

title: How to install CODESYS for reComputer R1000
keywords:
  - Edge Controller
  - reComputer R1000
  - CODESYS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_install_codesys
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introduction 
CODESYS is a popular automation software development platform widely used in industrial control and automation systems. Its full name is Controller Development System, which was first developed by the German company 3S-Smart Software Solutions.
This article mainly introduces how to download and install CODESYS, and finally deploy the CODESYS project to reComputer R1000

Before you start this project, you may need to prepare your hardware and software in advance as described here.

## Hardware Preparation

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
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

## Software Preparation

* [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
* [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## Getting Start

### Install CODESYS
**Step 1**: Go to the CODESYS store, find `CODESYS Development System V3` and download it, then find `CODESYS Control for Raspberry Pi SL` and download it.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/1.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/2.png" /></center>

**Step 2**: Double-click the downloaded `CODESYS 64 3.5.20.30.exe` file and click `install` to download the `CODESYS Installer`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/3.png" /></center>

**Step 3**: After the `CODESYS Installer` is downloaded, the `InstallShield Wizard` will pop up automatically. Click `Next` to start installing `CODESYS`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" /></center>

**Step 4**: Click to accept the license, then click `Next` to proceed to the next step.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/5.png" /></center>

**Step 5**: Click `I have read the information`, then click `Next`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/6.png" /></center>

**Step 6**: Modify the installation directory and click `Next` after the modification is completed.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/7.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/8.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/9.png" /></center>

**Step 7**: Select `Complete` to fully install CODESYS, then click `Next`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/10.png" /></center>

**Step 8**: Click `Install` to start the installation. It will take some time, just wait for the installation to complete

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/11.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/12.png" /></center>

### Update dependency packages

**Step 1**: After the installation is complete, open `CODESYS V3.5 SP20 Patch 3`, click `Tools`--->`CODESYS Installer..`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p1.png" /></center>

**Step 2**: In the new window, click `Install File(s)`, then select the package to be installed. After selecting, the package will be parsed

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p2.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p3.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p4.png" /></center>

**Step 3**: Click `I accept the license agreement(s)`, then click `Continue` to start the installation

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p5.png" /></center>

**Step 4**: A pop-up window will appear, asking you to close `CODESYS V3.5 SP20 Patch 3`. Close CODESYS and then click `OK`. CODESYS will start installing the new package.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p7.png" /></center>

**Step 5**: Wait for the installation to complete

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p8.png" /></center>

### Deployment CODESYS run-time

CODESYS Runtime refers to the CODESYS runtime system, which is the software installed on the target device to execute the PLC program created with the CODESYS development environment. CODESYS Runtime turns the target device (such as embedded systems, industrial computers, Raspberry Pi, etc.) into a programmable logic controller (PLC).

**Step 1**: Make sure reComputer R1000 and the host computer are in the same network segment

**Step 2**: Click `Tools`--->`Update Raspberry Pi`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r1.png" /></center>

**Step 3**: Enter the username and password of reComputer R1000, IP address, then click Install to download `run time` to reComputer R1000, and finally click `Start` to start `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r2.png" /></center>

**Step 4**: When the following message appears in the message bar, it means that reComputer R1000 has successfully run `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r3.png" /></center>


### Deploy a new project

**Step 1**: Click `File`--->`New project` to create a new project

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n1.png" /></center>

**Step 2**: Enter the project name, select `Project`--->`Standard project`, and finally click `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n2.png" /></center>

**Step 3**: Select `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` in the `Device` column, select `Structured Text (ST)` in `PLC_PRG in`, and finally click `OK`. A new project is created. Later, we will demonstrate how to deploy the project.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n3.png" /></center>

**Step 4**: After creating the project, double-click it. In the new pop-up window, click `Scan Network`, which can find the reComputer R1000 in the same network segment.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n5.png" /></center>

**Step 5**: Select R1000 and click `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n6.png" /></center>

**Step 6**: In the `Add Device User` window, fill in the reComputer R1000 username and password, and finally click `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n7.png" /></center>

**Step 7**: Then the `Device User Login` window will pop up, fill in the reComputer R1000 username and password again, and finally click OK

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n8.png" /></center>

**Step 8**: After the connection is successful, you can see that the status lights are all green

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n9.png" /></center>

**Step 9**: Click the Deploy button on the toolbar as shown to compile and deploy the current project to reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n10.png" /></center>

**Step 10**: Click the Start button on the toolbar to start the current project in reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n11.png" /></center>

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
