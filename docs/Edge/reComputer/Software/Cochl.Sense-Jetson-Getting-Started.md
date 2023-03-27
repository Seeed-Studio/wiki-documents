---
description: Getting Started with Cochl.Sense on NVIDIA® Jetson Devices
title: Getting Started with Cochl.Sense on NVIDIA® Jetson Devices
keywords:
- Software Cochl.Sense
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Cochl.Sense-Jetson-Getting-Started
last_update:
  date: 03/27/2023
  author: Lakshantha
---

# Getting Started with Cochl.Sense on NVIDIA® Jetson Devices

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Cochl.Sense/1.gif" style={{width:700, height:'auto'}}/></div>

In this tutorial, you are going to build a sound recognition system that runs on the NVIDIA Jetson board using Cochl.Sense. [Cochl.Sense](https://www.cochl.ai) is a Machine Listening development platform for deploying deep learning applications on edge devices such as NVIDIA® Jetson devices. 

Machine Listening, also known as audio analytics or sound recognition, is a rapidly growing field that uses artificial intelligence and machine learning to analyze and understand audio data. It aims for automated analysis and understanding of sounds from music, animals, vehicles, machines, urban noise, as well as human speech. Cochl.Sense is built with a pre-trained Machine Listening model that includes 37 different target sounds, such as gunshot, dog barking, siren, or baby crying. 

Training a model with large amounts of data and developing Machine Listening applications from scratch require deep knowledge of Audio Signal Processing and Deep Learning. Cochl.Sense has made Machine Listening easily accessible to developers and companies, so you can build and implement a Machine Listening application with powerful performance with a few lines of code.

## Cochl.Sense Key features

- 94% F-1 Score officially measured by IEEE
- Pretrained model tested and verified in the real world
- Multi-labeling (detect multiple sounds simultaneously) supported
- [30+ target sounds available](https://docs.cochl.ai/sense/tags)

## Getting a trial license 

Since Cochl.Sense SDK comes with full product features, access is granted after review. In order to access the SDK, you will need to submit this short [Google Form](https://forms.gle/Pa2iYWirLJVNS7Pp6) and tell us how you plan to use the SDK. Cochl will send you a 2-week trial license to your email.

If you want a quick start, you can also start free with the Cloud API that comes with the same functionalities, but runs on the cloud. [Click here](https://www.cochl.ai/product) to explore!

## Hardware Supported

- NVIDIA Jetson

    - [Full systems with NVIDIA SoMs by Seeed](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
    - Official Development Kits by NVIDIA

- Raspberry Pi 3+ or above
- Google Coral Board

Eventhough, Cochl.Sense is supported by multiple hardware platforms, in this wiki, we will only focus on using Cochl.Sense with the NVIDIA Jetson platform.

## Prerequisites

For this tutorial you’ll need:

- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) or any other NVIDIA Jetson device running JetPack 4.6 or higher
- USB microphone that supports 16-bit depth audio, sampling rate of 22,050 Hz

## Flash JetPack to Jetson

Now you need to make sure that the Jetson device is flashed with a [JetPack](https://developer.nvidia.com/embedded/jetpack) system including SDK components such as CUDA, TensorRT, cuDNN and more. You can either use NVIDIA SDK Manager or command-line to flash JetPack to the device.

For Seeed Jetson-powered devices flashing guides, please refer to the below links:
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## Getting started

Deploying your first machine listening project only takes a couple of minutes! By the end of this wiki, you will be able to detect sounds on a live audio stream from a microphone connected to a Jetson device. In this tutorial, you will learn how to: 

1. Create a project using Cochl dashboard
2. Download Cochl.Sense SDK and source code for sample application 
3. Authenticate your sample application
4. Run your sound detection application

### 1. Create a project using Cochl Dashboard

**Step 1:** Open a web browser from your Jetson. In order to create a new project, [sign up](https://dashboard.cochl.ai) for a free Cochl account and sign into your Dashboard account. 

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/2.png" /></div>

**Step 2:** After you sign in, click the **+ New project** button. Name your project, select **Edge SDK** from Product type, and **select tags** to add target sounds you want to detect. 

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/3.png" /></div>

### 2. Download SDK and source code for sample application

**Step 1:** Click on the project you just made, and click **Cochl.Sense SDK** to visit the external link to download the SDK file at [Cochl Docs](https://docs.cochl.ai).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/4.png" /></div>

**Step 2:** On the **Cochl Docs** page, click on the **Resources** on the left tab.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/5.png" /></div>

**Step 3:** Scroll down to find the **Download Link** for C++ SDK and Python SDK. In this tutorial, we are downloading the `AArch64` SDK because we are using the Jetson platform.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/6.png" /></div>

**Step 4:** Open a new tab, go to [this repo](https://github.com/cochlearai/sense-sdk-cpp-tutorials) for Sense-sdk C++ tutorials, and download the source code.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/7.png" /></div>

**Step 5:** Extract what you’ve just downloaded.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/8.png" /></div>

**Step 6:** Move the sense folder to `sense-sdk-cpp-tutorials-main` folder. Below is how the `sense-sdk-cpp-tutorials-main` folder looks like.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/9.png" /></div>

### 3. Authenticate your sample application

**Step 1:** Go to the `example` folder, find the `sense-stream.cc` file, and open it with any text editor.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/10.png" /></div>

**Step 2:** Go back to the browser, open the project page, navigate to the **Settings** page, and copy the `Project key`. 

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/11.png" /></div>

**Step 3:** Go to the `sense-stream.cc` file you opened with the text editor. Paste the `Project Key` that you just copied to replace the `"Your project key"` line and **save** the file.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/12.png" /></div>

### 4. Run your sound detection application

**Step 1:** Open the Terminal from your Jetson.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/13.png" /></div>

**Step 2:** Run the following commands to install dependencies

```sh
sudo apt update
sudo apt install libpulse-dev pulseaudio pulseaudio-utilss
```

**Step 3:** Go to the source code folder and build your application with the following commands.

```sh
cd Downloads/sense-sdk-cpp-tutorials-main
g++ -fopenmp examples/sense-stream.cc -I./sense/include/ -lsense-core -L./sense/lib -o sense-stream -lm -std=c++11 -ldl -lstdc++ -lpulse -lpulse-simple -Wl,-rpath -Wl,./sense/lib
```

**Step 4:** Run the application, and try making the sounds yourself or playing the sounds from other sources like YouTube. You can see the sound detection results in real-time. Make sure the microphone is connected to the Jetson device before running the application. 

```sh
./sense-stream 
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/14.png" /></div>

:::note
Please note that the Gunshot detection cannot be detected well when you play from speakers, as the model was trained to best work with real gunshots.
:::

**Step 5:** To stop the application, press **Ctrl+C**.

**Step 6:** If you want to view your detection results from the web, go to your **Dashboard** and click the Analytics tab and set the time range next to the **Filter** button.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/15.png" /></div>

Congratulations! You have successfully deployed a real-time Machine Listening application. You can go further and build your custom Smart Cities or Smart Home applications or integrate with other applications. If you’re interested in other Machine Listening technologies, you can visit [this page](https://labs.cochl.ai) and try other Cochl solutions like Music identification, Music content analysis or Speaker verification. 

## Resources

- [Cochl Docs](https://docs.cochl.ai)
- [Cochl Website](https://www.cochl.ai)
- [Web-based Demos](https://labs.cochl.ai)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>