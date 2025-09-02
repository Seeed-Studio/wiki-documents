---
description: Version control such as upgrade or rollback
title: OS Version control
keywords:
  - Edge
  - reCamera
  - recamera
  - Operating system
  - version upgrade
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.webp
slug: /recamera_os_version_control
sidebar_position: 1
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
---

# OS Update/Upgrade Guideline with Web

Connect the recamera to your computer using the type-c cable, and go to `http://192.168.42.1/#/system` in your computer's browser, or replace the IP address if you are visiting the device via network. Before upgrading, make sure reCamera has **access to the internet** by checking `ip_address/#/network`.

Click `System` Configuration, and if a new firmware is released, click `Apply` to update/upgrade the device system. The button text would be "Check" if there is no new firware auto detected.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>

Wait for the progress bar to complete.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>

Click `Restart` to complete the system update/upgrade. **Refresh the browser** around 30 seconds to reconnect to the device.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>

The system will automatically check if there is a new version of firmware that can be updated/upgrade.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

## OS Version management by command

### Device management by OTA

#### Update/Upgrade to latest OTA version

You can check out the latest version of the [reCamera OS here.](https://github.com/Seeed-Studio/reCamera-OS)

Manually update/upgrade the latest OTA firmware:

```bash
#Upgrade to the latest firmware version
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

sudo /mnt/system/upgrade.sh start
```

or

#### Update/Upgrade or rollback to any specific OTA version

If you have a speicific version you would like to deploy, you can use the command below.

```bash
#E.g. install 0.1.4 as an example
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/tag/0.1.4

sudo /mnt/system/upgrade.sh start
```

If you are developing OS and you have your own branch in github, you can also update/upgrade the system version with your branch link.

```bash
sudo /mnt/system/upgrade.sh latest https://github.com/your-user-name/reCamera-OS/releases/your-version-file-address

sudo /mnt/system/upgrade.sh start
```

#### For OS version 0.1.3 and below

If you would like to OTA with `upgrade.sh` but your version is **0.1.3 and below**, please follow the below steps:

1. Connect device with computer by USB-type C cable, then visit **192.168.42.1/#/terminal**. Find the upgrade.sh script in the folder

```bash
cd /mnt/system
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/find_upgrade_script.png" /></div>

2. Change the permission of this script

```bash
sudo rootfs_rw on
sudo chmod +x upgrade.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_file_permission.png" /></div>

3. Delete the old `upgrade.sh` file and check if it is removed successfully.

```bash
sudo rm upgrade.sh
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/remove_script.png" /></div>

4. Go to [Github](https://github.com/Seeed-Studio/reCamera-OS/blob/sg200x-reCamera/external/ramdisk/rootfs/overlay/cv181x_musl_riscv64/system/upgrade.sh) and download the latest `upgrade.sh` script.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/download_sh_github.png" /></div>

5. Change folder permission

```bash
sudo chmod 777 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_folder_permission.png" /></div>

6. Open your desktop/pc terminal, then copy the downloaded script to reCamera under the same folder.

```bash
sudo scp your_folder_address/upgrade.sh recamera@192.168.42.1:/mnt/system/
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/scp_file.png" /></div>

7. Go back to the web page to check if the new `upgrade.sh` is in

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/new_script.png" /></div>

8. Change back the folder permission for safety

```bash
sudo chmod 755 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/chang_back_permission.png" /></div>

9. Now you can try [OTA command](#device-management-by-ota) to do any version control.

### Device management by local package

You can also update/upgrade the firmware manually using the local ota package. The ota firmwares can be [downloaded here](https://github.com/Seeed-Studio/reCamera-OS/releases/). Use tools like scp to transfer the files to reCamera.

```bash
sudo scp sg2002_reCamera_0.1.3_emmc_ota.zip recamera@ip_address:~/
```

Then use the bash to deploy.

```bash
sudo /mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```

:::note
If you don't have enough permissions to dump files into recamera, you can can change system files to be readable or writable by typing `rootfs_rw on/off`.
:::

### Manually restore factory Settings

This command can restore reCamera to facotry settings. If you use this, all of your user data will be removed such as Node-RED flow and local storage.

```bash
sudo /mnt/system/upgrade.sh recovery
```

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
