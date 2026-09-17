---
description: Deploy ONVIF on reCamera
title: Deploy ONVIF on reCamera
keywords:
  - reCamera
  - onvif
image: https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg
slug: /recamera_onvif
sku: 102991896, 108990119, 100029708
sidebar_position: 6
last_update:
  date: 9/14/2026
  author: yylin
createdAt: '2026-09-14'
updatedAt: '2026-09-14'
url: https://wiki.seeedstudio.com/recamera_onvif/
---

# Deploy ONVIF on reCamera

## Introduction

ONVIF is a widely used interoperability standard for security devices. After you deploy this solution, ONVIF-compatible clients on the local network—such as Home Assistant, Frigate, an NVR, or a VMS—can automatically discover reCamera and retrieve its device information, video-stream address, and login credentials.

The video itself is still delivered over RTSP: the client uses ONVIF to find reCamera, then uses the returned RTSP address to play or record the stream. The entire process runs on your local network and does not require an additional cloud service.

This guide walks you through the following:

1. Deploy the ONVIF service on reCamera.
2. Confirm that the RTSP video stream plays correctly.
3. Add reCamera to Home Assistant, an NVR, or a VMS through ONVIF.

## What You Need

Before you begin, prepare the following devices and make sure they are connected to the same local network.

| Device | Purpose |
| --- | --- |
| One reCamera | Runs the ONVIF and RTSP services. reCamera 2002 series, Gimbal, and HQ PoE models are supported. |
| A Linux computer | Installs and runs SenseCraft Solution to deploy the solution. The example below uses Ubuntu 24.04 x86_64. |
| Home Assistant, an NVR, or a VMS (optional) | Discovers reCamera and views or records its video. |

> **Network note:** The HQ PoE model does not support Wi-Fi. Connect it to a PoE-capable switch for both power and network access. Whichever model you use, ensure that reCamera and the client that discovers it are on the same local network. Discovery across subnets usually requires additional network configuration.

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div>
  </td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
    </div>
  </td>
 </tr>
</table>


## Install SenseCraft Solution

Open the [SenseCraft Solution download page](https://www.seeed.cc/category/reference-designs), click **Deploy**, and choose the installer that matches your computer's operating system and processor architecture.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-2.png" /></div>

The following example uses Ubuntu 24.04 x86_64. Open a terminal, then download and install the application:

```bash
wget https://appcenter.seeed.xyz/SenseCraft.Solution/SenseCraft.Solution_amd64.deb

sudo dpkg -i ./SenseCraft.Solution_amd64.deb
```

After installation, run the following command to start SenseCraft Solution:

```bash
sensecraft-solution
```

The SenseCraft Solution home screen appears when the application starts:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-11.png" /></div>

## Deploy the ONVIF Service on reCamera

### Update SenseCraft Solution

To ensure that the latest ONVIF solution is available, update your local solution list first. Select **System Settings** from the sidebar, find the update option, and complete the update before continuing.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-12.png" /></div>
### Deploy the ONVIF Solution

1. Select **Technical Demos** from the sidebar.
2. Select **reCamera** in the device filter.
3. Find and open the **reCamera ONVIF Gateway** solution.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-13.png" /></div>

Open the solution, select the target reCamera, and complete the connection setup as prompted.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-14.png" /></div>

Confirm that the device details are correct, then click **Deploy**. Wait for the deployment task to report success. reCamera now has the ONVIF service enabled and provides an authenticated RTSP video stream.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-15.png" /></div>

### Verify the Video Stream

After a successful deployment, play the RTSP video stream before adding the device to Home Assistant, Frigate, an NVR, or a VMS. This helps rule out network or video-stream issues first.

You can test the stream with VLC or with `ffplay` on Ubuntu. If `ffplay` is not installed, install FFmpeg first:

```bash
sudo apt install -y ffmpeg

ffplay rtsp://admin:recamera.1@<reCamera_IP>:8554/onvif
```

Replace `<reCamera_IP>` with reCamera's actual IP address on your local network. For example, if its IP address is `192.168.42.1`, run:

```bash
ffplay rtsp://admin:recamera.1@192.168.42.1:8554/onvif
```

If you can see the live video, both the ONVIF service and RTSP stream are working correctly. You can then add an ONVIF camera in your client. Usually, select **Auto Discover** or **Add ONVIF Device**, then enter reCamera's IP address, username, and password.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-9.png" /></div>


## Default Credentials and Security

Authentication is enabled by default. The default credentials are:

| Item | Default value |
| --- | --- |
| Username | `admin` |
| Password | `recamera.1` |
| RTSP path | `/onvif` |

> **Important:** The default password is intended only for initial verification. If other people can access reCamera's network, change the password before production use to prevent unauthorized access to the video stream.

To change the username or password, clone the [reCamera SDK](https://github.com/yyling0101-a11y/reCamera_2002w_sdk) from GitHub and locate the relevant configuration in `examples/camera_onvif_rtsp`:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-10.png" /></div>

Update the configuration and rebuild the project. For detailed build instructions, see the repository [README](https://github.com/yyling0101-a11y/reCamera_2002w_sdk/blob/main/README.md). Transfer the compiled executable to reCamera, make it executable, and run it to use the new credentials.

## Troubleshooting

| Issue | Solution |
| --- | --- |
| The client cannot find reCamera | Ensure that reCamera and Home Assistant, Frigate, the NVR, or the VMS are on the same local network. Also confirm that deployment completed successfully. |
| The RTSP stream will not play | Check that the command uses reCamera's actual IP address. Confirm the username, password, and path: `admin`, `recamera.1`, and `/onvif`. |
| The HQ PoE model cannot connect to the network | Confirm that the switch supports PoE and that the Ethernet cable provides both power and network connectivity. |
| The ONVIF solution is still unavailable after an update | Restart SenseCraft Solution, confirm that the solution list update completed, then select **Technical Demos > reCamera**. |

## Technical Support and Product Discussion

Thank you for choosing our product. We offer several support channels to help make your experience as smooth as possible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
