---
description:  Getting started with Google MediaPipe
title:  Getting started with Google MediaPipe
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_ML_MediaPipe
last_update:
  date: 1/10/2024
  author: Kasun Thushara
---


# Getting Started with MediaPipe on reTerminal

 MediaPipe is a an open-source framework from Google for building multimodal (eg. video, audio, any time series data), cross platform (i.e Android, iOS, web, edge devices) applied ML pipelines. It is performance optimized with end-to-end ondevice inference in mind. Mediapipe is currently under active development and includes multiple demos, that can be run out-of-the box after installing Mediapipe on reTerminal.


 ### Hardware preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Software Preparation

We recommend installing the **Bullesye** or **Bookworm** version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this [**guide**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). 

:::note

In earlier OS versions, Python libraries could be directly installed system-wide using pip, the Python package installer. However, in Bookworm  release, a shift has occurred. To mitigate potential issues during installation, it is now necessary to install packages via pip into a Python virtual environment using venv. 

:::

Execute these commands one by one, and you will end up with a virtual environment.

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

## ML solutions in MediaPipe

Begin by cloning the GitHub repository to your reTerminal device using the following command:

 ```sh
 git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```
Navigate to the folder that contains the required resources. In this directory, you will find four topics that we will be covering.

### Face Detection

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-faccedetection.gif" /></center>

- **Step 1** For our first topic, we will be installing dependencies for face detection. Move to the face detection section using the following commands

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_detector/raspberry_pi
 ```
- **Step 2** Run the setup script to install the necessary dependencies

 ```sh
sh setup.sh
 ```

- **Step 3** Once the setup is complete, you can execute the source file to initiate face detection

 ```sh
python3 detect.py
 ```

### Face Landmarker
<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-facelandmarks.gif" /></center>

- **Step 1** Install dependencies

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_landmarker/raspberry_pi
 ```
- **Step 2** Run the setup script to install the necessary dependencies

 ```sh
sh setup.sh
 ```

- **Step 3** Once the setup is complete, you can execute the source file to initiate face landmaker.

 ```sh
python3 detect.py
 ```

### Hand Landmarker

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe_handlandmarks.gif" /></center>

 - **Step 1** Install dependencies

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/hand_landmarker/raspberry_pi
 ```
- **Step 2** Run the setup script to install the necessary dependencies

 ```sh
sh setup.sh
 ```

- **Step 3** Once the setup is complete, you can execute the source file to initiate hand landmaker.

 ```sh
python3 detect.py
 ```

### Pose Landmarker

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe-pose.gif" /></center>

 - **Step 1** Install dependencies

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/pose_landmarker/raspberry_pi
 ```
- **Step 2** Run the setup script to install the necessary dependencies

 ```sh
sh setup.sh
 ```

- **Step 3** Once the setup is complete, you can execute the source file to initiate pose landmaker.

 ```sh
python3 detect.py
 ```

## Resources

- **[Web Page]** [MediaPipe Official Webpage](https://mediapipe.dev/)

- **[Web Page]** [MediaPipe Official Documentation](https://google.github.io/mediapipe/)

## Tech support

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>