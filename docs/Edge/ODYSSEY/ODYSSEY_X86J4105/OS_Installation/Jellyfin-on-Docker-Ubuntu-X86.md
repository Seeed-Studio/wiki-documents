---
description: ODYSSEY - X86J41x5
title: Jellyfin Media Server Installation
tags:
  - ODYSSEY
keywords:
  - ODYSSEY
image: https://avatars.githubusercontent.com/u/10758833
slug: /Jellyfin-on-Docker-Ubuntu-X86
last_update:
  date: 01/03/2023
  author: w0x7ce

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/thumb.png" alt="pir" width={1000} height="auto" /></p>

This guide explains how to set up Jellyfin Media Server as a Docker container installed on an Ubuntu system running on [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html). By using Jellyfin, you can stream all your local media files from anywhere in the world!

## What is Docker?

[Docker](https://docs.docker.com/) is an open platform for developing, shipping, and running applications. Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. You can easily share containers while you work, and be sure that everyone you share with gets the same container that works in the same way.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width={200} height="auto" /></p>

## What is Jellyfin Media Server?

[Jellyfin Media Server](https://www.plex.tv) is a tool that allows you to access the music, pictures, and videos stored on one device with many other devices. You can install Jellyfin software on a Windows, Mac, or Linux computer, network-attached storage (NAS) device or even a router. You can stream all your media files stored on your Jellyfin Media Server remotely over the internet and access from anywhere in the world using the Jellyfin app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/23.png" alt="pir" width={300} height="auto" /></p>

## Getting Started

Now let's go through the process of running Jellyfin Media Server as a Docker container installed on an Ubuntu system.

### Install Ubuntu on X86

Follow [this wiki](https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-OS) to install Ubuntu on ODYSSEY-X86. You can download the latest Ubuntu OS from [here](https://ubuntu.com/download/desktop).

### Install Docker on Ubuntu

- **Step 1.** Update your existing packages list

```sh
sudo apt update
```

- **Step 2.** Install needed prerequisite packages

```sh
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

- **Step 3.** Add the GPG key for the official Docker repository to your Ubuntu system

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- **Step 4.** Add the Docker repository to APT sources

```sh
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

- **Step 5.** Install Docker

```sh
sudo apt install docker-ce -y
```

- **Step 6.** Verify that Docker is installed and already running

```sh
sudo systemctl status docker
```

And you will see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/1.png" alt="pir" width={1000} height="auto" /></p>

- **Step 7.** By default, the docker command can only be run as the root user or by a user in the docker group. So, add your username to the Docker group

```sh
sudo usermod -aG docker ${USER}
```

- **Step 8.** Apply the new group membership

```sh
su - ${USER}
```

### Install Jellyfin Media Server on Docker

- **Step 1.** Download the latest Jellyfin container image

```sh
docker pull jellyfin/jellyfin
```

- **Step 2.** Create persistent storage for configuration and cache data

```sh
docker volume create jellyfin-config
docker volume create jellyfin-cache
```

- **Step 3.** Create a folder to save the media files

```sh
# for example
mkdir /home/username/movies
```

**Note:** Here **username** should be replaced by the username on your Ubuntu system

- **Step 4.** Create and run a container

```sh
docker run -d \
 --name jellyfin \
 --net=host \
 --volume jellyfin-config:/config \
 --volume jellyfin-cache:/cache \
 --mount type=bind,source=/path/to/media,target=/media \
 --restart=unless-stopped \
 jellyfin/jellyfin
```

**Note:** Here **/path/to/media** is the **/home/username/movies** directory that we created before

### Initial Setup of Jellyfin Media Server

- **Step 1.** Type the following on a web browser from within ODYSSEY-X86 or any other PC on the same network as ODYSSEY-X86

```sh
<IP_address_of_ODYSSEY-X86>:8096
```

```sh
# for example:
192.168.1.133:8096
```

- **Step 2.** On the Jellyfin setup homepage, select your preferred language and click **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/2.png" alt="pir" width={1000} height="auto" /></p>

- **Step 3.** Enter a **Username**, **Password** for the admin account and click **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/3.png" alt="pir" width={1000} height="auto" /></p>

- **Step 4.** Click **Add Media Library**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/4.png" alt="pir" width={1000} height="auto" /></p>

- **Step 5.** Choose the **Content type** from the drop-down menu and fill the Display name. Here the Display name will choose the same as the content type

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/5.png" alt="pir" width={1000} height="auto" /></p>

- **Step 6.** Click on the **+** symbol next to **Folders**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/6.png" alt="pir" width={1000} height="auto" /></p>

- **Step 7.** Click on the **/media** folder inside the Docker container and click **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/7.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/8.png" alt="pir" width={1000} height="auto" /></p>

- **Step 8.** Click **OK** again keeping the other settings at default. You can change the other settings if you prefer.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/9.png" alt="pir" width={1000} height="auto" /></p>

- **Step 9.** Click **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/10.png" alt="pir" width={1000} height="auto" /></p>

**Note:** Before clicking **Next**, you can continue to add other media libraries such as TV shows. Just click **Add Media Library** and repeat the process

- **Step 10.** Change the seetings if you want and click **Next** for the following screens

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/11.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/12.png" alt="pir" width={1000} height="auto" /></p>

- **Step 11.** Finally click **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/13.png" alt="pir" width={1000} height="auto" /></p>

- **Step 12.** Sign in to the admin account we created before

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/14.png" alt="pir" width={1000} height="auto" /></p>

And you will be brought to the Homepage of Jellyfin!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/15.png" alt="pir" width={1000} height="auto" /></p>

### Add Movies/ TV Shows

Now we will add a couple of movies so that we can play on Jellyfin

- **Step 1.** Copy and paste all your movie files into the directory (/home/username/movies) that we created before

- **Step 2.** Come back to the Jellyfin homepage, click the 3 dots and select **Refresh metadata**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/16.png" alt="pir" width={400} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/17.png" alt="pir" width={400} height="auto" /></p>

- **Step 3.** Keep the default **Refresh mode** and click **Refresh**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/18.png" alt="pir" width={1000} height="auto" /></p>

- **Step 4.** Click **Movies**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/20.png" alt="pir" width={1000} height="auto" /></p>

And finally you will see all your movies loaded

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/19.png" alt="pir" width={1000} height="auto" /></p>

- **Step 5.** Click on a movie and click the **Play** button to start playing the movie

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/21.png" alt="pir" width={1000} height="auto" /></p>

### Play the Media on Jellyfin Client Applications

Now you can use the Jellyufin Client applications to view all your media inside the Jellyfin Media Server. The Jellyfin app can be installed on various devices such as mobile phones, PCs, smart TVs, etc...

Visit [this link](https://jellyfin.org/clients) to view supported devices so that you can install the Jellyfin app on them.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/22.png" alt="pir" width={1000} height="auto" /></p>

Now you can navigate to the Jellyfin Client App, log in, and stream all your media stored on the Jellyfin Media Server!

### Attach External Storage to Store the Media

You can also attach external storage drives to expand the storage on X86 so that we can store all our media.

ODYSSEY - X86J4125 has a number of storage options such as:

- PCIe SSD
- SATA SSD
- SATA HDD
- Micro-SD Card
- USB Flash Drives

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

You can attach any external storage of your choice by referring to the above storage options.

## Turn an Ordinary TV into a Smart TV to Run Jellyfin

It is very convenient to stream media such as movies from your Jellyfin Media Server by using a Smart TV at home. You need a smart TV because the Jellyfin app can be installed if the TV has an app store. However, if you have an ordinary TV, you can turn it into a smart TV by using a Raspberry Pi!

You can follow [this link](https://pimylifeup.com/raspberry-pi-android-tv-lineageos) to learn more!

## Community

<iframe width={560} height={315} src="https://www.youtube.com/embed/4VkY1vTpCJY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Resources

- **[Web Page]** [Docker Offficial Documentation](https://docs.docker.com)

- **[Web Page]** [Docker Hub](https://hub.docker.com)

- **[Web Page]** [Jellyfin Media Server](https://jellyfin.org)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
