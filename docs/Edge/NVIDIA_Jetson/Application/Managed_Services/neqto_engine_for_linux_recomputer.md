---
description: Getting started of NEQTO Engine for Linux on reComputer J30
title: Getting started of NEQTO Engine for Linux on reComputer J30
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /neqto_engine_for_linux_recomputer
last_update:
  date: 03/14/2024
  author: Kazuhiro Ozuchi
---

## Introduction

NEQTO is a lightweight and secure software package allowing companies to remotely install and configure their software on edge devices. NEQTO enables companies to provide improved software services to end users through turnkey platform connectors and built-in software lifecycle management.

Devices installed with NEQTO can be managed through API or the ready-to-use NEQTO Console, which includes optional services for data storage, alerts, and watchdog monitoring. Businesses can enable AIoT with near-instant installation on any Linux device and seamless data integration with any on-premise or cloud servers.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## Prerequisites

### Hardware supported

You can choose either one:

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer J3011 - NVIDIA Jetson Orin™ Nano 8GB </th>
        <th>reComputer J4011 - NVIDIA Jetson Orin™ NX 8GB</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image1_1_1.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image2.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4011-p-5585.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
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

### Sign Up for a NEQTO Account

- Step 1. Visit the [official page](https://console.neqto.com/register) to sign up for a NEQTO account
- Step 2. Enter your email address, create a password, and proceed
- Step 3. Verify the account from the activation email you receive

### Installation of NEQTO Linux

1. Select `Manage API Keys for Linux-based Device` from

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

in NEQTO Console

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. Click `CREATE API KEY`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

And then the API Key will be displayed

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. Download `NEQTO Engine Linux Installer` by curl or wget.

    This time, use the wget command.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

Copy the `Download link` of `Installer of NEQTO Engine for Linux` and paste it after "wget␣".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00259ccae06004c6d94a8.png" alt="pir" width={600} height="auto" /></p>

Installer downloads successfully

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f002fbccae06004c6d94aa.png" alt="pir" width={600} height="auto" /></p>

4. Change the execution permissions of the downloaded installer (`neqto-daemon-install.latest.sh`) with the chmod command before running the installation of NEQTO Engine for Linux.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00369ccae06004c6d94ab.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

5. Copy the `API Key` from `API Keys for NEQTO Engine for Linux` in the NEQTO Console and paste it after `sudo . /neqto-daemon-install.sh␣-k␣`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00476ccae06004c6d94ae.png" alt="pir" width={600} height="auto" /></p>

6. Enter Password

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00529ccae06004c6d94af.png" alt="pir" width={600} height="auto" /></p>

7. Just after execution, important notes will be displayed. Please check it and enter "agree" if you agree. Thereafter, device registration will be executed, and software installation will continue.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f005c1ccae06004c6d94b1.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

8. Please wait until the final status `Installation completed successfully!` is displayed.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00657ccae06004c6d94b3.png" alt="pir" width={600} height="auto" /></p>

Confirmation that the device has been registered on the NEQTO Console

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00722ccae06004c6d94b5.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hello World

1. Click on `ADD GROUP` under `GROUPS`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eef7b9ccae06004c6d947b.png" alt="pir" width={600} height="auto" /></p>

2. Enter `reComputer J30` in `Name` and click `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eef7d6ccae06004c6d947c.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f007ddccae06004c6d94b6.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. Select the `reComputer J30` you created and click `SCRIPTS`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0392accae06004c6d9518.png" alt="pir" width={600} height="auto" /></p>

4. Click `ADD SCRIPT`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0379fccae06004c6d9512.png" alt="pir" width={600} height="auto" /></p>

5. Enter `Hello World` in the `Name` field and click `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03861ccae06004c6d9515.png" alt="pir" width={600} height="auto" /></p>

6. Copy and paste the [sample code](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code) from `Getting Started` into the NEQTO Console script editor and then click `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f036f4ccae06004c6d950f.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Click on `TEMPLATES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f035d5ccae06004c6d950d.png" alt="pir" width={600} height="auto" /></p>

And then click on `ADD TEMPLATE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03451ccae06004c6d950a.png" alt="pir" width={600} height="auto" /></p>

8. Set `DEVICE INFORMATION` as follows

    - Enter `reComputer J30 Template` for `Name` field

    - Select `Linux-based device` for `Firmware Type` field

    - Select the latest version for `Firmware Version` field

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03337ccae06004c6d9505.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. For `OPTIONS`, select `Hello World` in `Script` field and click `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03261ccae06004c6d9501.png" alt="pir" width={600} height="auto" /></p>

10. Click on `NODES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0313accae06004c6d94fe.png" alt="pir" width={600} height="auto" /></p>

And then click on `ADD NODE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03019ccae06004c6d94fb.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. Set `META DATA` as follows

    - Set `Name` field to `reComputer J30`

    - Set `Template` field to `reComputer J30 Template`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02f56ccae06004c6d94f8.png" alt="pir" width={600} height="auto" /></p>

12. Select the device you just registered in `DEVICE INFORMATION` and click `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02e10ccae06004c6d94f5.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02d0dccae06004c6d94f2.png" alt="pir" width={600} height="auto" /></p>

13. Type `tail -F /tmp/neqto/log/neqto.log` on the terminal on reComputer J30

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00ac6ccae06004c6d94c8.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. After running `Reload Script` on NEQTO Console, you can see `Hello World!!!` on the terminal of reComputer J30

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02b89ccae06004c6d94ef.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00bf7ccae06004c6d94cd.png" alt="pir" width={600} height="auto" /></p>

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
