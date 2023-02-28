---
description: reTerminal-Home-Assistant
title: Getting Started with Home Assistant
image: https://avatars.githubusercontent.com/u/4452826?s=400&amp;v=4
slug: /reTerminal_Home_Assistant
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Getting Started with Home Assistant on reTerminal

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/94.jpg" /></center>

## Introduction

This wiki will walkthrough step-by-step on how you can turn your ordinary house into a smart one just by using a reTerminal! By the end of this wiki, you will be able to view a beautiful dashboard on the reTerminal LCD and be able to control your home appliances and view other information such as sensor data right at your fingertips. So, let's get started!

## What is Home Assistant?

[Home Assistant](https://www.home-assistant.io) is a free and open-source software for home automation designed to be a central control system for smart home devices, which can be referred to as a smart home hub. It offers you home automation without needing the cloud, which means your home automation system is not dependent on remote servers or an internet connection. This local control means, you can have far better security than cloud connected devices. Also, it offers greater reliability when it comes to keep it running 24x7.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></center>

It is flexible to use and very easy to get started even for beginners with the great documentation offered by Home Assistant. Also, there is an active community on [Home Assistant Forum](https://community.home-assistant.io) with many members who will be there to help you if you come across any issues when building and running Home Assistant.
After setting up Home Assistant, it can be accessed through a web-based user interface by using companion apps for Android and iOS, or by voice commands via a supported virtual assistant such as Google Assistant or Amazon Alexa.
If you want to quickly experience a demo on your web browser, please [click here](https://demo.home-assistant.io).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></center>

## Different installation methods

Home Assistant is supported to run on different hardware such as a Raspberry Pi, ODROID, ASUS Tinkerboard, Intel NUC, Windows/ Linux/ Mac PCs. And with this, comes different methods of installation on different hardware. To learn more about all these installation methods please visit [this page](https://www.home-assistant.io/installation).
As you can see below, there are 4 main types of installation methods and not all Home Assistant features are supported by all installation methods.

<center><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></center>

## Installation Method for reTerminal

According to Home Assistant, the two recommended methods of Home Assistant installation are **OS and Container method**. However we will not be using these 2 methods to install on reTerminal. Why is that?

### Why not Home Assistant Operating System?

If we install Home Assistant Operating System on reTerminal, we cannot view the Home Assistant Dashboard UI on reTerminal LCD. This is because, Home Assistant OS will only output a CLI interface to any connected display like below.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/5.png" /></center>

So the dashboard UI can only be accessed via **homeassistant.local:8123** on another device. However, if you want to install like this and do not want to view the dashboard on reTerminal LCD, you can follow [this guide](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system). It follows the same installation methods as a Raspberry Pi because reTerminal is based on Raspberry Pi Compute Module 4.

### Why not Home Assistant Container?

If we install Home Assistant Container on reTerminal, we will be missing out on several Home Assistant features. So we will skip on that installation. However, if you want to explore this installation method, you can follow [this guide](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-container). It follows the same installation methods as a Raspberry Pi because reTerminal is based on Raspberry Pi Compute Module 4.

### Why Home Assistant Supervised?

If we install Home Assistant Supervised on reTerminal, we will be able to use all the features of Home Assistant and be able to view the dashboard UI on reTerminal LCD as well! But the installation of this will involve more steps in comparison with OS and Container methods. However, if you carefully follow along this wiki, you will be able to successfully achieve it!

## Let's build it

Now let's go through the process of installing Home Assistant Supervised on reTerminal.

- **Step 1.** Prepare a reTerminal with Raspberry Pi OS already installed. reTerminal comes with RPi OS 32-bit pre-installed. However, if you want to install it again please follow [this wiki](https://wiki.seeedstudio.com/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).

**Note:** Make sure to use 32-bit version because Home Assistant Dashboard UI on reTerminal LCD will be much smoother in 32-bit version.

- **Step 2.** Update package manager list

```sh
sudo apt update
```

- **Step 3.** Install dependencies

```sh
sudo apt install jq wget curl avahi-daemon udisks2 libglib2.0-bin network-manager dbus -y
```

- **Step 4.** Fix broken installations

```sh
sudo apt --fix-broken install
```

- **Step 5.** Restart reTerminal

```sh
sudo reboot
```

- **Step 6.** Download official Docker script

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
```

- **Step 7.** Run the Docker script

```sh
sudo sh get-docker.sh
```

- **Step 8.** Add Docker user to the system

```sh
sudo usermod -aG docker pi
```

- **Step 9.** Check whether Docker is working properly

```sh
docker --version
```

If you see an output like below, that means Docker is installed properly

```
Docker version 20.10.18, build b40c2f6
```

- **Step 10.** Visit [Home Assistant OS Agent page](https://github.com/home-assistant/os-agent/releases), under the latest release, right click on file that ends with ***linux_armv7.deb** and copy the link

:::note
The tested stable and working release for Home Assistant Agent so far for reTerminal(CM4) is V1.3.0.
:::

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/4.jpg" /></center>

- **Step 11.** Download the file by entering in following format

```sh
wget <copied_link>
```

For example:

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_armv7.deb
```

- **Step 12.** Install Home Asssitant OS Agent

```sh
sudo dpkg -i os-agent_<version_number>_linux_armv7.deb
```

For example:

```sh
sudo dpkg -i os-agent_1.3.0_linux_armv7.deb
```

- **Step 13.** Download Home Assistant-Supervised installation script

:::note
Similarly, the tested stable and working release for Home Assistant-Supervised so far for reTerminal(CM4) is also V1.3.0.
:::

```sh
wget https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
```

- **Step 14.** Install Home Assistant-Supervised

```sh
sudo dpkg -i homeassistant-supervised.deb
```

- **Step 15.** If there are any errors in the installation, pleae run the bellow command to fix broken installations

```sh
sudo apt --fix-broken install
```

- **Step 16.** In the **Package configuration** window, select **raspberrypi4** and press **ENTER**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/6.png" /></center>

The output will be as follows

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/7.png" /></center>

Now to check whether all the services are installed and are up and running, we need to install [Portainer](https://www.portainer.io), which is a Docker management platform. Here we will see all our containers running.

- **Step 17.** Create a volume for Portainer

```sh
sudo docker volume create portainer_data
```

- **Step 18.** Install Portainer

```sh
sudo docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest -H unix:///var/run/docker.sock
```

- **Step 19.** Open a web browser on PC and access Portainer as follows

```sh
homeassistant.local:9000
```

- **Step 20.** Create a user by entering a username and a password

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/8.png" /></center>

- **Step 21.** On Portainer dashboard, click primary

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/10.jpg" /></center>

- **Step 22.** Click Containers

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/11.jpg" /></center>

If you see the following containers up and running, that means Home Assistant is installed successfully

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/12.png" /></center>

## View Home Assistant Dashboard UI on web browser

- **Step 1.** On a web browser, type the following URL

```sh
homeassistant.local:8123
```

It will take some time to finish the initial start up process

- **Step 2.** Once finished starting up, create an account and follow through the initial set up instuctions

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></center>

After that you will see your welcome dashboard as follows

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></center>

## View Home Assistant Dashboard UI in Kiosk mode on reTerminal

To be able to view the Home Assistant Dashboard UI on reTerminal LCD, we will use Chromium web browser which already comes with Raspberry Pi OS. We will set up Chromium so that it will autostart on full-screen mode after reTerminal is booted up.

- **Step 1.** Navigate to the following directory

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **Step 2.** Open **autostart** file with **nano text editor**

```sh
sudo nano autostart
```

- **Step 3.** Add the following line to the end of the file

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **Step 4.** Reboot reTerminal

```sh
sudo reboot 
```

Now when reTerminal boots up, Home Assistant dashboard UI will open in full-screen window !

## Bonus

After integrating smart lights, temperature, humidity sensors, CCTV and more, a complete Smart Home dashboard on Home Assistant will look like below

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></center>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>
<br />

# Tech support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/)

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
