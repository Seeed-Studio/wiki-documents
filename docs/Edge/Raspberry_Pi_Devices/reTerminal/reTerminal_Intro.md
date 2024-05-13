---
description: reTerminal Guide
title: reTerminal Guide
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_Intro
last_update:
  date: 12/22/2023
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/New/reTerminal_new.jpg" style={{width:800, height:'auto'}}/></div>

## Getting Started with reTerminal

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Getting Started with reTerminal</font></th>
      <th class="table-trnobg"><font size={"4"}>Hardware and Interfaces Usage</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> We are going to discuss OS installation on the reterminal device, providing a step-by-step walkthrough, and cover driver installation in this wiki.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki introduces various hardware components and interfaces such as GPIOs, CSI camera interface, built-in sensors, LCD display, etc., on the reTerminal. It guides you on how to utilize these features to expand your project ideas.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-hardware-interfaces-usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal and Pi camera modules</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal Extension board - reTerminal E10-1</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/expansion.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> In this wiki, we will discuss step-by-step instructions on how to install Picams and configure it. These initial steps are crucial for initiating your object detection project with the Seeed Studio reTerminal device.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> The reTerminal E10-1 expansion board enhances the reTerminal with rechargeable functions, improved wireless communication, industrial data transmission, and audio capabilities. This makes the reTerminal more robust, suitable for high-speed industrial, agriculture, or enhanced wireless home applications. Let's dive into the wiki for details.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminalBridge/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
		</tr>
	</table>
</div>


## OS Installations

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Raspbian OS or Ubuntu</font></th>
      <th class="table-trnobg"><font size={"4"}>Buildroot</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/URPi.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/build.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki will guide you through the installation process of Raspberry Pi OS and Ubuntu.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Buildroot is a user-friendly tool designed to simplify and automate the process of building a complete Linux system for embedded systems through cross-compilation. In this wiki, we delve into the installation process of Buildroot.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-Buildroot-SDK/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Yocto</font></th>
      <th class="table-trnobg"><font size={"4"}>Stream-pi and OBS studio</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> The Yocto Project, an open-source collaboration initiative, aids developers in crafting custom Linux-based systems for embedded products, irrespective of the hardware architecture. In this wiki, we will explore the installation process of Yocto.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Stream-Pi, a robust macro keyboard software, is an open-source alternative with a customizable UI. OBS Studio, a free and open-source app, supports real-time capture and streaming. Let's now explore the installation process.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-Yocto/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Streampi_OBS_On_reTerminal/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## Applications

### Embedded ML Applications

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Getting Started with MediaPipe on reTerminal</th>
      <th class="table-trnobg">Getting Started with TensorFlow Lite on reTerminal</th>
      <th class="table-trnobg">Object detection with Edge Impulse and reTerminal</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipeadd.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/ml/emotion/emotions.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>In this wiki, we delve into MediaPipe, an open-source framework by Google for constructing multimodal and cross-platform applied ML pipelines, optimized for on-device inference. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki provides insights into TFlite and various applications. TensorFlow Lite, a set of tools, facilitates on-device machine learning, enabling developers to run models on mobile, embedded, and IoT devices. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>In this wiki, we explore Object detection with Edge Impulse and reTerminal. Edge Impulse empowers developers to create and optimize embedded machine learning solutions using real-world data. Let's delve into the details. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_ML_MediaPipe/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_ML_TFLite/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_ML_Edgeimpulse/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Computer Vision

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Getting start with reTerminal and Pi camera with OpenCV</th>
      <th class="table-trnobg">Face Detection with reTerminal and Pi camera with OpenCV</th>
      <th class="table-trnobg">Object Detection with reTerminal and Pi camera</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>In this guide, we will integrate the Raspberry Pi camera, capturing a video stream using a Python snippet, and implementing a feature to save an image by pressing a key. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>In this guide, we'll explore Face Detection using the Haar Cascade method, a crucial technique in computer vision that utilizes a machine learning model to identify facial features. We'll specifically focus on implementing this on the reTerminal using the Raspberry Pi camera. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This guide explores the utilization of the Raspberry Pi camera and reTerminal for detecting around 90 objects using a pre-trained EfficientNet model based on the COCO dataset. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_opencv/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Face_detection/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Object_detection/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    
  <div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Color Detection with reTerminal Pi camera and OpenCV</th>
      <th class="table-trnobg">Object Tracking with reTerminal Pi camera and OpenCV</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Color detection, a core component of computer vision, involves identifying and analyzing colors in digital images or videos. In this wiki, we will explain how to deal with colors and detect them.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> When detection fails, implement tracking. Explore algorithms and understand the benefits of tracking. Seeed Studio Wiki provides comprehensive guides.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Color_detection/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Face-tracking/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Home Assistant 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">Getting Started with Home Assistant on reTerminal</th>
    <th class="table-trnobg">How to Customize Home Assistant</th>
      <th class="table-trnobg">Frigate intergrating with reTerminal</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>In this wiki, we'll guide you step-by-step on transforming your ordinary house into a smart one using a reTerminal. By the end, you'll have a beautiful dashboard on the reTerminal LCD, allowing you to control home appliances and access sensor data effortlessly. Let's begin! </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki will walkthrough step-by-step on how to build out the dashboard by doing the necessary configurations and also how to use some of the important add-ons that comes with Home Assistant. So let's get started!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Frigate is an open-source NVR designed for real-time AI object detection. All processing occurs locally on your hardware, ensuring your camera feeds stay within your home. This wiki guides you through the installation of the NVR and demonstrates object detection capabilities. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_Home_Assistant/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-Home-Assistant-Customize/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal_frigate/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Create Powerful User Interface

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">Qt for reTerminal with Python</th>
    <th class="table-trnobg">Flutter for reTerminal</th>
      <th class="table-trnobg">Electron for reTerminal</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki explains how to build your own user interface using Qt for Python on the reTerminal. Here we have used PySide2 for the development. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki guides you through building your own user interface with Flutter, an open-source UI software development kit from Google. Flutter enables cross-platform app development for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web using a single codebase.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki guides you through building your own user interface using Electron, an open-source framework for creating native desktop applications (Windows, Mac, Linux) with web technologies like HTML, CSS, and JavaScript. If you can build a website, you can build a desktop app! </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-Qt-for-Python/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-Flutter/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-Electron/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    <br />

  <div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">LVGL for reTerminal</th>
    <th class="table-trnobg">Build Your Own Weather Dashboard Using Grafana</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>LVGL provides the essentials for crafting an embedded GUI with user-friendly graphical elements, stunning visual effects, and a minimal memory footprint. This graphics library is designed for microcontrollers with limited resources. In this wiki article, we'll utilize a PC simulator example with SDL2 and make slight modifications to display the UI in full screen rather than in a window. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Credit to </font><strong><font color={'8DC215'} size={"2"}>Michaelm Klementsk.</font></strong><br /><font size={"2"}> In this wiki, we'll use an ESP32 to collect temperature, humidity, and pressure readings, sending them to an InfluxDB time-series database hosted on their cloud server. Finally, we'll visualize and analyze the data using Grafana.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-LVGL/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/weather-dashboard-with-Grafana-reTerminal/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Miscellaneous

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal Mount Options</font></th>
      <th class="table-trnobg"><font size={"4"}>Installation of Mender Client on reTerminal</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Mount_Options/9.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mender.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> In this section, we explore reTerminal mounting solutions, covering hardware screw specifications and community design aspects.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki explains how to set up the Mender Client on a reTerminal for receiving OTA updates from either a Hosted or Self-Hosted Mender Server. The guide emphasizes using a reTerminal with a custom Linux System compiled using the Yocto Project.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_Mount_Options/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
		<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Mender-Client-reTerminal/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div> 
<table>
	<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 Explore More</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/raspberry-pi-devices/"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 Back to Pi Devices </font></span></strong></a></div></td>
		</tr>
	</table>

## ✨ Contributor Project

- We have a task list for updating this page, which is categorized under our [contributor project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), as we are dedicated to enhancing the user experience and providing better support through the development of our wiki platform.
- [Your contribution to this page](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038) is essential to us! We really value your input and would greatly appreciate your assistance in generating ideas.

## FAQ

- [How to troubleshoot the black screen issue on reTerminal](https://wiki.seeedstudio.com/reterminal_black_screen)
- [How to flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC](https://wiki.seeedstudio.com/flash_different_os_to_emmc)
- [Log in to Raspberry Pi OS/++Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet](https://wiki.seeedstudio.com/log_rpios_use_ssh_over_wifi_ethernet)
- [Find out more](https://wiki.seeedstudio.com/reTerminal-new_FAQ/)


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
