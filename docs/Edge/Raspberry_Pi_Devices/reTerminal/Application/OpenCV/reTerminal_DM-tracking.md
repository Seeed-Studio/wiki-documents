---
description: Object Tracking with reTerminal and Pi camera with OpenCV
title: Object Tracking with reTerminal and Pi camera with OpenCV
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Object Tracking
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Face-tracking
last_update:
  date: 11/7/2023
  author: Kasun Thushara
---

##  An Introduction

Object tracking is the process of consistently locating a specific object across consecutive frames in a video. In the realm of single object trackers, the initial frame serves as a reference, with the target object marked by a bounding rectangle. Subsequent frames then employ tracking algorithms to follow and trace the object's movement. Typically, these trackers are utilized alongside object detectors in real-world applications, combining the strengths of both technologies for enhanced accuracy and efficiency.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" /></center>

## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

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

We recommend installing the **Bullesye** or **Bookworm**  version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this [**guide**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). 

:::note

We highly recommend checking out our previous tutorial on [**Getting started with OpenCV**](https://wiki.seeedstudio.com/reTerminal_DM_opencv/), as this tutorial serves as a continuation in our series.

:::

## Tracking vs. Detection

In prior wikis, we covered [**face**](https://wiki.seeedstudio.com/reTerminal_DM_Face_detection/) and [**color detection**](https://wiki.seeedstudio.com/reTerminal_DM_Color_detection/), but noticed its intermittent nature. Here's a quick comparison:

1. **Speed Advantage:**
Tracking is faster than detection. By leveraging prior frame data, tracking algorithms predict object locations, whereas detection algorithms often start from scratch in each frame.
2. **Handling Failures:**
If a face detector falters due to occlusion, tracking algorithms excel. They can manage partial obstruction, offering robust performance when detection falls short.
3. **Identity Persistence:**
Object detection provides rectangles of detected objects but lacks identity persistence. Tracking excels in maintaining consistent object identity across frames, crucial for many real-world applications.

## What are the algorithms in Tracking domain?

Here are some major object tracking algorithms with their pros and cons 

**BOOSTING**
- Pros: Simple and real-time. Performs well with consistent motion.
- Cons: Struggles with complex motion patterns and occlusions.
- Speed: Fast.
- Accuracy: Moderate.

**MIL (Multiple Instance Learning)**
- Pros: Effective in handling occlusions and changes in object appearance.
- Cons: May be sensitive to noise and background clutter.
- Speed: Moderate.
- Accuracy: Good.

**KCF (Kernelized Correlation Filter)**
- Pros: High-speed performance. Robust against scale variations.
- Cons: Sensitive to out-of-view scenarios.
- Speed: Fast.
- Accuracy: Moderate to High.

**TLD (Tracking, Learning, and Detection)**
- Pros: Self-updating and capable of re-detecting lost objects.
- Cons: Prone to drift and may have difficulties with fast motion.
- Speed: Moderate.
- Accuracy: Moderate.

**MEDIANFLOW**
- Pros: Robust in handling abrupt motion changes and occlusions.
- Cons: May struggle with significant object appearance changes.
- Speed: Fast.
- Accuracy: Moderate.

**MOSSE (Minimum Output Sum of Squared Error)**
- Pros: Extremely fast and suitable for real-time applications.
- Cons: Limited robustness under challenging conditions.
- Speed: Very Fast.
- Accuracy: Moderate.

**CSRT (Channel and Spatial Reliability Tracker)**
- Pros: High accuracy and robustness against challenging scenarios.
- Cons: Computationally more expensive.
- Speed: Moderate.
- Accuracy: High.


## Let's run the code.

Make sure that you are in correct folder. If not 

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```
Then or Even you can use Thonny IDE to run the python script.

 ```sh
python Tracking.py
 ```

The Python script above is designed to track faces. The following code snippet handles the scenario where tracking fails, prompting the system to initiate a new detection process and vice versa. 

 ```sh
python DetectandTrack.py
 ```

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