---
description: reTerminal-FAQ
title: Log in to Raspberry Pi OS/ Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /log_rpios_use_ssh_over_wifi_ethernet
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Log in to Raspberry Pi OS/ Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet -->

If you want to log in to the Raspberry Pi OS using **SSH over Wi-Fi/ Ethernet**, you can follow the steps below. First set up Wi-Fi/Ethernet on the reTerminal and then SSH using Windows/Mac/Linux.

## Step 1: Set up Wi-Fi/Ethernet on the reTerminal

:::caution
If you have configured WiFi and enabled SSH using Raspberry Pi Imager, you can skip step 1
:::

- **1.** If you **have a Wi-Fi connection**, click the **Wi-Fi icon** on the top right corner of the Raspberry Pi OS Desktop, select your Wi-Fi network and enter the password using the on-screen virtual keyboard

**Note:** The location of the Wi-Fi setting might be different for other OS

- **2.** If you **don't have a Wi-Fi connection**, you can connect an ethernet cable from your router to the ethernet port of the reTerminal

**Note:** Make sure the reTerminal and your computer is connected to the same network

- **3.** Touch on the Raspberry Pi icon at the top left corner and navigate to `Preferences > Raspberry Pi Configuration` and click on **Interfaces** tab

- **4.** Select **Enable** which is next to **SSH** and click **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

Now let's configure the software on the computer. Please follow according to your operating system

## Step 2: Configure SSH using Windows/Mac/Linux

### For Windows

- **1.** Open **Command Prompt** and type the following

```sh
ssh pi@raspberrypi.local
```

- **2.** Type **yes** for the prompt

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **3.** Enter the password as follows

```sh
raspberry
```

- **4.** If you have sucessfully logged into the Raspberry Pi OS, you will see the following output

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

### For Mac/Linux

- **1.** Open **Terminal** on the computer and type the following

```sh
ssh pi@raspberrypi.local
```

- **2.** Type **yes** for the following message

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **3.** When it asks for the password, type the following

```sh
raspberry
```

- **4.** If you have sucessfully logged into the Raspberry Pi OS, you will see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>
