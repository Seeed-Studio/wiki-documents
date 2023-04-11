---
description: Plex Media Server on Docker
title: Plex Media Server
keywords:
- Sorftware OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /OpenWrt-Plex-Media-Server-on-Docker
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/thumb-1.png" alt="pir" width="1000" height="auto"/></p>

This guide explains how to set up Plex Media Server as a Docker container on Seeed OpenWrt firmware. By using Plex Media Server, you can stream all your local media files from anywhere in the world! Here OpenWrt can run on the [ODYSSEY – X86 Board](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html) or the [Dual Gigabit Ethernet Carrier Board for Raspberry Pi Compute Module 4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html).

**Note:** Make sure to follow the [OpenWrt getting started guide](https://wiki.seeedstudio.com/OpenWrt-Getting-Started) before going through this guide.

## What is Docker?

[Docker](https://docs.docker.com/) is an open platform for developing, shipping, and running applications. Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. You can easily share containers while you work, and be sure that everyone you share with gets the same container that works in the same way.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width="200" height="auto"/></p>

## What is Plex Media Server?

[Plex Media Server](https://www.plex.tv) is a tool that allows you to access the music, pictures, and videos stored on one device with many other devices. You can install Plex Media Server software on a Windows, Mac, or Linux computer, network-attached storage (NAS) device or even a router. You can stream all your media files stored on your Plex Media Server remotely over the internet and access from anywhere in the world using the Plex app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

## Plex Media Server on Docker

Now let's go through the process of running Plex Media Server as a Docker container on OpenWrt.

### Create a Plex Account

First of all, we need to have a Plex account

- **Step 1.** Click [this link](https://www.plex.tv) to visit the Plex website

- **Step 2.** Click **Sign Up** and create a new Plex account

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-sign-up.jpg" alt="pir" width="1000" height="auto"/></p>

### Attach External Storage to Store the Media

Now we need to attach external storage drives to expand the storage on X86 and CM4 boards so that we can store all our media.

ODYSSEY - X86J4125 has a number of storage options such as:

- PCIe SSD
- SATA SSD
- SATA HDD
- Micro-SD Card
- USB Flash Drives

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width="650" height="auto"/></p>

Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 has various storage options such as:

- USB Flash Drives
- Micro-SD Card
- USB Expansion via 9-Pin Header

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/cm4-storage-2.jpg" alt="pir" width="1000" height="auto"/></p>

You can attach any external storage of your choice by referring to the above storage options.

### Mount the External Storage on OpenWrt

After attaching an external storage device we need to mount it so that we can use it

- **Step 1.** Open a web browser and log in to the OpenWrt device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Luci.png" alt="pir" width="1000" height="auto"/></p>

**Note:** We have previously configured **192.168.2.1** as the IP address to log in to OpenWrt. So you can type this IP address in the web browser

- **Step 2.** Navigate to `System > Disk Man` and you will see the storage drives attached to the OpenWrt device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Disk-man-1.png" alt="pir" width="1000" height="auto"/></p>

- **Step 3.** Under the attached storage drive, click **EDIT**

- **Step 4.** Under **Partitions Info**, remove all partitions by clicking **REMOVE** next to the partition

- **Step 5.** Under **Device Info**, select **GPT** for the **Partition Table**

- **Step 6.** Under **Partitions Info**, click **NEW** to create a partition

- **Step 7.** Under the newly created partition, click **FORMAT**, choose **ext4** and click **FORMAT** to format the partition

- **Step 8.** Navigate to `System > Disk Man` again

- **Step 9.** Under **Mount Point**, choose the partition that we created before

- **Step 10.** Leave **File system** as **auto**

- **Step 11.** Under **Mount Options** type **rw** to allow read and write access to this partition

- **Step 12.** Under **Mount Point** type **/plex** and click **MOUNT** to mount the partition

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/disk-mount-1.png" alt="pir" width="1000" height="auto"/></p>

### Create Plex Media Server Docker Container

Now let's create the plex media server docker container

- **Step 1.** In OpenWrt Luci interface, navigate to `Docker > Images`

- **Step 2.** Under **Pull Image** type **linuxserver/plex** and click **PULL** to download the Plex Media Server Docker image

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-image.png" alt="pir" width="1000" height="auto"/></p>

**Note:** Wait a few seconds until the image is downloaded

- **Step 3.** Navigate to `Docker > Containers` and click **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-add.png" alt="pir" width="1000" height="auto"/></p>

- **Step 4.** Click on **COMMAND LINE** and enter the  following:

```sh
docker run \
-d \
--name plex \
--network=host \
-e TZ=<enter timezone> \
-e PLEX_CLAIM=<enter claimToken> \
-v /plex/database:/config \
-v /plex/temp:/transcode \
-v /plex/media:/data \
linuxserver/plex
```

**Note:** To obtain the **timezone**, visit [this link](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) and copy the **TZ database name**. To obtain the **claimToken**, visit [this link](#www.plex.tv/claim) and copy/ paste the token.

- **Step 5.** Finally click **SUBMIT**

### Run and Set up Plex Media Server

- **Step 1.** Now you will see the container listed. Click on the **checkbox** and click **START** to run the container

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-start.png" alt="pir" width="1000" height="auto"/></p>

- **Step 2.** Type **192.168.2.1:32400/web** to open the Plex Media Server initial set up

**Note:** 32400 is the port where the Plex docker container is running.

- **Step 3.** Type a **Server name** and click **NEXT**

- **Step 4.** Under **Organize Media**, click **ADD LIBRARY**

- **Step 5.** Select the **library type** and click **NEXT**

- **Step 6.** Click **BROWSE FOR MEDIA FOLDER**, select the **data** folder and click **ADD LIBRARY**

**Note:** As we have configured before, the **data** folder inside the plex container is linked with the **/plex/media** folder on OpenWrt

- **Step 7.** Click **NEXT** and then **DONE** to finish the initial set up.

Now you will see the Plex Media Server user interface

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-ui.png" alt="pir" width="1000" height="auto"/></p>

### Mount Plex Directory on the PC and Transfer the Media

After the external storage mounted before, now we need to mount **/plex** directory on the PC so that it can be accessed easily.

- **Step 1.** In OpenWrt Luci interface, navigate to `Services > Network Shares`

- **Step 2.** Under **Shared Directories**, click **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/network-shares.png" alt="pir" width="1000" height="auto"/></p>

- **Step 3.** Fill the row according to the following:

        - name: Plex 
        - Path: /plex
        - Browse-able: ticked
        - Force Root: ticked
        - Allow guests: ticked
        - Create mask: 0666
        - Directory mask: 0777

**Note:** Here **name** field can be anything of your choice. **Force Root** is enabled to allow root access to this folder.

- **Step 4.** Click **SAVE** and then click **SAVE & APPLY**

- **Step 5.** Go to **File Explorer** on the PC and click **Network**

- **Step 6.** Navigate to `OpenWrt > plex > media` and copy all the media inside this directory

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/PC-shares.png" alt="pir" width="1000" height="auto"/></p>

### Play the Media on Plex Client Applications

Now you can use the Plex Client applications to view all your media inside the Plex Media Server. The Plex app can be installed on various devices such as mobile phones, PCs, smart TVs, etc...

Visit [this link](https://www.plex.tv/media-server-downloads/#plex-app) to view supported devices so that you can install the Plex app on them.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-client.jpg" alt="pir" width="1000" height="auto"/></p>

Now you can navigate to the Plex Client App, log in, and stream all your movies, music, pictures and other media stored on the Plex Media Server!

### Turn an Ordinary TV into a Smart TV to Run Plex

It is very convenient to stream media such as movies from your Plex Media Server by using a Smart TV at home. You need a smart TV because the Plex app can be installed if the TV has an app store. However, if you have an ordinary TV, you can turn it into a smart TV by using a Raspberry Pi!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" alt="pir" width="1000" height="auto"/></p>

You can follow [this link](https://pimylifeup.com/raspberry-pi-android-tv-lineageos) to learn more!

## Resources

- **[Web Page]** [Docker Offficial Documentation](https://docs.docker.com)

- **[Web Page]** [Docker Hub](https://hub.docker.com)

- **[Web Page]** [Plex Media Server](https://www.plex.tv)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
