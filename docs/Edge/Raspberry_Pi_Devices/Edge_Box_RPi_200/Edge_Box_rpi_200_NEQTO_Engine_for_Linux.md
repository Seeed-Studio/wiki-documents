---
description: Getting started with NEQTO Engine for Linux on EdgeBox-RPI-200
title: Getting started with NEQTO Engine for Linux on EdgeBox-RPI-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /NEQTO_Engine_for_Linux_EdgeBox-RPI-200
last_update:
  date: 04/25/2024
  author: Kazuhiro Ozuchi
---

## Introduction

NEQTO is a lightweight and secure software package allowing companies to remotely install and configure their software on edge devices. NEQTO enables companies to provide improved software services to end users through turnkey platform connectors and built-in software lifecycle management.

Devices installed with NEQTO can be managed through API or the ready-to-use NEQTO Console, which includes optional services for data storage, alerts, and watchdog monitoring. Businesses can enable AIoT with near-instant installation on any Linux device and seamless data integration with any on-premise or cloud servers.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## Prerequisites

### Hardware supported

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">EdgeBox-RPI-200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

- (Any Linux machine)

:::tip
- Supported Architectures: armv6l(32bit), armv7l(32bit), aarch64(64bit), x86_64(64bit)
- Required disk space: ≥ 32 MB
- Required RAM space: ≥ 4MB (In default settings)
- Network Communication Interfaces: A physical network adapter must be on board.
- Monitor, keyboard, mouse (optional)
:::

## Getting Started
### Hardware Connection

Please refer to Getting Started Edge Box RPI-200 (https://wiki.seeedstudio.com/Edge_Box_introduction/)

### Sign Up for a NEQTO Account:
- Step 1. Visit this page (https://console.neqto.com/register) to sign up for a NEQTO account
- Step 2. Enter your email address, create a password, and proceed
- Step 3. Verify the account from the activation email you receive 

### Installation of NEQTO Linux

1. Select `Manage API Keys for Linux-based Device` from

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

in NEQTO Console

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. Click `CREATE API KEY`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

And then the API Key will be displayed

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>


3. Download `NEQTO Engine Linux Installer` by curl or wget.

    This time, use the wget command.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

Copy the `Download link` of `Installer of NEQTO Engine for Linux` and paste it after "wget ".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be384ccae06004c6d972d.png" alt="pir" width={600} height="auto" /></p>

Installer downloads successfully

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be2f5ccae06004c6d9725.png" alt="pir" width={600} height="auto" /></p>

4. Change the execution permissions of the downloaded installer (`neqto-daemon-install.latest.sh`) with the chmod command before running the installation of NEQTO Engine for Linux.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be308ccae06004c6d9726.png" alt="pir" width={600} height="auto" /></p>


<!--<div style="page-break-before:always"></div>-->

5. Copy the `API Key` from `API Keys for NEQTO Engine for Linux` in the NEQTO Console and paste it after `sudo ./neqto-daemon-install.latest.sh -k `.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be313ccae06004c6d9727.png" alt="pir" width={600} height="auto" /></p>


6. Just after execution, important notes will be displayed. Please check it and enter "agree" if you agree. Thereafter, device registration will be executed, and software installation will continue.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be31dccae06004c6d9728.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Please wait until the final status `Installation completed successfully!` is displayed.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be329ccae06004c6d9729.png" alt="pir" width={600} height="auto" /></p>

Confirmation that the device has been registered on the NEQTO Console

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc577ccae06004c6d9713.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hello World

1. Click on `ADD GROUP` under `GROUPS`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9ee5ccae06004c6d96bf.png" alt="pir" width={600} height="auto" /></p>

2. Enter `EdgeBox-RPI-200` in `Name` and click `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9f21ccae06004c6d96c1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9fa0ccae06004c6d96c2.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. Select the `EdgeBox-RPI-200` you created and click `SCRIPTS`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc9b3ccae06004c6d9714.png" alt="pir" width={600} height="auto" /></p>

4. Click `ADD SCRIPT`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd119ccae06004c6d9715.png" alt="pir" width={600} height="auto" /></p>

5. Enter `Hello World` in the `Name` field and click `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd134ccae06004c6d9716.png" alt="pir" width={600} height="auto" /></p>

6. Copy and paste the [sample code](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code) from `Getting Started` into the NEQTO Console script editor and then click `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd142ccae06004c6d9717.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Click on `TEMPLATES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd156ccae06004c6d9718.png" alt="pir" width={600} height="auto" /></p>

And then click on `ADD TEMPLATE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd166ccae06004c6d9719.png" alt="pir" width={600} height="auto" /></p>

8. Set `DEVICE INFORMATION` as follows

    - Enter `EdgeBox-RPI-200 Template` for `Name` field

    - Select `Linux-based device` for `Firmware Type` field

    - Select the latest version for `Firmware Version` field

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd177ccae06004c6d971a.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. For `OPTIONS`, select `Hello World` in `Script` field and click `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd186ccae06004c6d971b.png" alt="pir" width={600} height="auto" /></p>

10. Click on `NODES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd195ccae06004c6d971c.png" alt="pir" width={600} height="auto" /></p>

And then click on `ADD NODE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd19eccae06004c6d971d.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. Set `META DATA` as follows

    - Set `Name` field to `EdgeBox-RPI-200`

    - Set `Template` field to `EdgeBox-RPI-200 Template`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1adccae06004c6d971e.png" alt="pir" width={600} height="auto" /></p>

12. Select the device you just registered in `DEVICE INFORMATION` and click `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1baccae06004c6d971f.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1c8ccae06004c6d9720.png" alt="pir" width={600} height="auto" /></p>

13. Type `tail -F /tmp/neqto/log/neqto.log` on the terminal on EdgeBox-RPI-200 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be347ccae06004c6d972b.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. After running `Reload Script` on NEQTO Console, you can see `Hello World!!!` on the terminal of EdgeBox-RPI-200 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1eaccae06004c6d9721.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660aad1accae06004c6d96fb.png" alt="pir" width={600} height="auto" /></p>

## What's More / Trouble Shooting

- [NEQTO Support](https://support.neqto.com/hc/en-us)
- [Support Guidelines](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## Resource

- [NEQTO Resource Center](https://docs.neqto.com/docs/en/linux/software/requirements)

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

