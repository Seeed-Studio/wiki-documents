---
description: Remotely connect to Raspberry Pi/reComputer
title: Remotely connect to Raspberry Pi
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /remote_connect
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

# Remotely connect to Raspberry Pi/reComputer

It often happens that the user cannot physically access the Raspberry Pi (reComputer or other edge devices) due to certain constraints (such as no additional monitor, etc.). Therefore, it is very necessary to connect the Raspberry Pi remotely. Depending on the operating system you're running, there are several ways to establish a connection to a remote edge devices. In this project, according to using operation system (Linux) of Raspberry Pi, we could use Secure Shell Protocol (SSH) to control machines remotely.

## Getting Started

SSH, also known as Secure Shell or Secure Socket Shell, is a network protocol that gives users, particularly system administrators, a secure way to access a computer over an unsecured network. SSH is widely used by network administrators to manage systems and applications remotely, enabling them to log in to another computer over a network, execute commands and move files from one computer to another. An SSH server, by default, listens on the standard Transmission Control Protocol (TCP) port 22.

### Materials Required

- Linux-based devices (Raspberry Pi or reComputer)
- PC

### Remote Connection

Take Raspberry Pi as an example, we will open the Raspberry Pi SSH port and call it remotely using the SSH interface on the PC. To connect to the Raspberry Pi from the computer, we need to know the IP address of the Pi.
>Notice: make sure the PC and Raspberry Pi are under the same LAN.

If your device is reComputer, you can skip step 1 to step 3 since the ssh port is open by default.There are the following steps to connect Raspberry Pi with the computer.

**Step 1.** Open a new terminal on Raspberry Pi and execute `sudo raspi-config.`The menu will be shown as below and we need to select “Interfacing Options” and then press ENTER

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_2.png"/></div>

**Step 2.** Select “SSH” and press ENTER.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_3.png"/></div>

**Step 3.** Select “Yes” and press ENTER.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_4.png"/></div>

After a while, we will get a message “The SSH server is enabled”.

 <div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_5.png"/></div>

**Step 4.**  Open a Terminal on Raspberry Pi and execute `ifconfig`
We can see the IP address of Raspberry Pi shown as below:

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_6.png"/></div>

**Step 5.** Open the PC’s Terminal and execute `ssh pi@192.168.6.215` and input Raspberry Pi's password. The PC then will connect to Raspberry Pi remotely.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png"/></div>
