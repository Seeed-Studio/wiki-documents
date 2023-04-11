---
description: MaskCam
title: MaskCam
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson-Nano-MaskCam
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Maskcam -  Crowd Face Mask Usage Monitoring based on Jetson Nano

## **Introduction**

Due to the ravages of the COVID - 19, in many public places, we often see the requirement to wear a mask. There are usually managers at the gate of the area to observe whether people are wearing masks. Maybe it's a very simple task for humans, but if we combines it with Jetson Nano, graphics capture and edge computing with AI, it will be a very interesting and socially valuable task.

MaskCam was developed by Berkeley Design Technology, Inc. (BDTI) and Tryolabs S.A., with development funded by NVIDIA. MaskCam is offered under the MIT License. For more information about MaskCam, please see the [report from BDTI](https://www.bdti.com/maskcam). If you have questions, please email BDTI at maskcam@bdti.com.

In this project, we will use the [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) along with other accessories. At the same time, you can choose the [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html) from Seeed, which has the same size and functional design as NVIDIA's official carrier board, and also, it has excellent stability and versatility.

## **Perparation**

### **Hardware Requirement**

- [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) (JetPack 4.6)

- [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)(optional)

- 7-inch hdmi monitor and HDMI cable

- USB Docking Station

- Mouse and Keyboard

- 5V 4A Power Adapter

- USB Camera

- Ethernet Cable

- PC with Windows11 (or Windows10/Ubuntu18.04/ OSX Big Sur)

### **Software Requirement**

- docker

- docker-compose

- Video Software (Display RTSP streams,like VLC/QuickTime/PotPlayer)

## **Get Started**

### **Jetson Nano Setup**

- #### **Step 1.** Download MaskCam container from Docker Hub

```shell
sudo docker pull maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png)

- #### **Step 2.** Find Jetson Nano IP Address with the command ```ifconfig```

```shell
sudo ifconfig
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png)

- #### **Step 3.** Start MaskCam with docker

Remember to connect your Jetson Nano with a USB camera, and then, tab the command below into the terminal.

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png)

**Note:** Replace ```<your-jetson-ip>``` with your own Jetson Nano's IP address in this command.

If you don't want to use the default input device, there are also two different commands to choose and replace the command above.

Use the /dev/video1 camera device:

```shell
#Use the /dev/video1 camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

Use the CSI camera device:

```shell
#Use the CSI camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

- #### **Step 4.** View the live vedio stream through the ```MASKCAM_DEVICE_ADDRESS```

```shell
Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png)

**Note:**  ```aaa.bbb.ccc.ddd``` is the address that you provided in ```MASKCAM_DEVICE_ADDRESS``` previously.

You can copy-paste that URL into your RSTP streaming viewer on another computer. In the video stream, if you are not wearing a mask, you will see a red frame on your face. Otherwise, you will see a green frame.

### **MQTT Server Setup**

 In addition to the basic function, it also includes the function of the remote [server](https://github.com/bdtinc/maskcam/blob/main/server) in this library which means your PC can receive statistics from the device, store them in a database, and have a web-based GUI frontend to display them.

In this article, all demos about the server are based on Window11 system host, you can also find the instruction using Linux system through this article: [Maskcam](https://github.com/bdtinc/maskcam).

- #### **Step1.** Install Docker and Docker-compose on your PC

Download the installation package of [Docker](https://www.docker.com/) from its official website: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

Note: If there exists a message that says ```WLS 2 installization is incomplete.``` in the progress of installization, click the link in the prompt box, download and install thee Linux kernel update package.
The you can run ```docker```.

- #### **Step2.** Set up build directory

Run ```Windows PowerShell``` as administrator

Move to the root of the drive which you will be using, such as :

```shell
cd e:\
```

Download MaskCam repo :

```shell
Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\maskcam.zip
```

Unzip it to the path ```e:\maskcam``` :

```shell
Expand-Archive e:\maskcam.zip -DestinationPath e:\maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png)

Move To the maskcam server folder, which has four containers: the Mosquitto broker, backend API, database, and Streamlit frontend.

```shell
cd maskcam\maskcam-main\server
```

Then, create the ```.env``` files by copying the default templates:

```shell
cp database.env.template database.env
cp frontend.env.template frontend.env
cp backend.env.template backend.env
```

Open the ```database.env``` :

```shell
notepad database.env
```

Replace the ```<DATABASE_USER>```, ```<DATABASE_PASSWORD>```, and ```<DATABASE_NAME>``` fields with your own values

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png)

- #### **Step3.** Build and run local server

After editing the database environment file, you're ready to build all the containers and run them with a single command:

```shell
sudo docker-compose up -d
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png)

Next, open a web browser and enter the server IP to visit the frontend webpage:

```http://<server IP>:8501/```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png)

**Note:** Replace ```<server IP>``` with your own IP address.

If you see a ```ConnectionError``` in the frontend, wait a couple more seconds and reload the page. The backend container can take some time to finish the database setup.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png)

If you wait a couple more seconds and reload the page but it is still a ```ConnectionError``` in the frontend, please make sure the ports: <5432> and <80> are not being occupied or listened up.

If you visit the frontend webpage successfully the first time but failed the next, the best way to solve it currently is to re-install docker.

- #### **Step4.** Point Jetson Nano at your local server

Return to your Jetson Nano's terminal, and then run the maskcam container with the command below:

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png)

**Note:** Replace ```<server IP>``` and ```<your-jetson-ip>``` with your own server and Jetson Nano's IP address.

After that, you can choose your device on webpage as shown below:

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png)

Finally, you can see the data collected by Jetson Nano transmitting to the Server.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
