---
description: reTerminal 指南
title: reTerminal 指南
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_Intro
last_update:
  date: 12/22/2023
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/New/reTerminal_new.jpg" style={{width:800, height:'auto'}}/></div>

## reTerminal 入门指南

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal 入门指南</font></th>
      <th class="table-trnobg"><font size={"4"}>硬件和接口使用</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 我们将讨论在 reterminal 设备上的操作系统安装，提供分步指导，并在本 wiki 中涵盖驱动程序安装。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本 wiki 介绍了 reTerminal 上的各种硬件组件和接口，如 GPIO、CSI 摄像头接口、内置传感器、LCD 显示屏等。它指导您如何利用这些功能来扩展您的项目想法。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-hardware-interfaces-usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal 和 Pi 摄像头模块</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal 扩展板 - reTerminal E10-1</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/expansion.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本教程中，我们将讨论如何安装 Picam 并配置它的分步说明。这些初始步骤对于使用 Seeed Studio reTerminal 设备启动您的目标检测项目至关重要。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reTerminal E10-1 扩展板通过可充电功能、改进的无线通信、工业数据传输和音频功能增强了 reTerminal。这使得 reTerminal 更加强大，适用于高速工业、农业或增强型无线家庭应用。让我们深入了解详细信息。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminalBridge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## 操作系统安装

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Raspbian OS 或 Ubuntu</font></th>
      <th class="table-trnobg"><font size={"4"}>Buildroot</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/URPi.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/build.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程将指导您完成 Raspberry Pi OS 和 Ubuntu 的安装过程。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Buildroot 是一个用户友好的工具，旨在通过交叉编译简化和自动化为嵌入式系统构建完整 Linux 系统的过程。在本教程中，我们深入探讨 Buildroot 的安装过程。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-Buildroot-SDK/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Yocto</font></th>
      <th class="table-trnobg"><font size={"4"}>Stream-pi 和 OBS studio</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Yocto 项目是一个开源协作倡议，帮助开发者为嵌入式产品制作定制的基于 Linux 的系统，无论硬件架构如何。在本 wiki 中，我们将探索 Yocto 的安装过程。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Stream-Pi 是一款强大的宏键盘软件，是一个具有可定制 UI 的开源替代方案。OBS Studio 是一款免费开源的应用程序，支持实时捕获和流媒体。现在让我们探索安装过程。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-Yocto/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Streampi_OBS_On_reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## 应用

### 嵌入式机器学习应用

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">在 reTerminal 上开始使用 MediaPipe</th>
      <th class="table-trnobg">在 reTerminal 上开始使用 TensorFlow Lite</th>
      <th class="table-trnobg">使用 Edge Impulse 和 reTerminal 进行目标检测</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipeadd.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/ml/emotion/emotions.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在这个 wiki 中，我们深入探讨 MediaPipe，这是 Google 开发的一个开源框架，用于构建多模态和跨平台的应用机器学习管道，针对设备端推理进行了优化。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>这个 wiki 提供了对 TFlite 和各种应用的见解。TensorFlow Lite 是一套工具，促进设备端机器学习，使开发者能够在移动设备、嵌入式设备和物联网设备上运行模型。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在这个 wiki 中，我们探索使用 Edge Impulse 和 reTerminal 进行目标检测。Edge Impulse 使开发者能够使用真实世界的数据创建和优化嵌入式机器学习解决方案。让我们深入了解详细信息。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_ML_MediaPipe/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_ML_TFLite/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_ML_Edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### 计算机视觉

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">使用 reTerminal 和 Pi 摄像头配合 OpenCV 入门</th>
      <th class="table-trnobg">使用 reTerminal 和 Pi 摄像头配合 OpenCV 进行人脸检测</th>
      <th class="table-trnobg">使用 reTerminal 和 Pi 摄像头进行物体检测</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本指南中，我们将集成 Raspberry Pi 摄像头，使用 Python 代码片段捕获视频流，并实现通过按键保存图像的功能。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本指南中，我们将探索使用 Haar 级联方法进行人脸检测，这是计算机视觉中的一项关键技术，利用机器学习模型来识别面部特征。我们将专门关注在 reTerminal 上使用 Raspberry Pi 摄像头实现这一功能。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本指南探索了如何利用 Raspberry Pi 摄像头和 reTerminal，使用基于 COCO 数据集的预训练 EfficientNet 模型来检测约 90 种物体。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_DM_opencv/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_DM_Face_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_DM_Object_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

  <div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">使用 reTerminal Pi 摄像头和 OpenCV 进行颜色检测</th>
      <th class="table-trnobg">使用 reTerminal Pi 摄像头和 OpenCV 进行物体跟踪</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 颜色检测是计算机视觉的核心组件，涉及识别和分析数字图像或视频中的颜色。在本教程中，我们将解释如何处理颜色并检测它们。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 当检测失败时，实施跟踪。探索算法并了解跟踪的好处。Seeed Studio Wiki 提供全面的指南。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_DM_Color_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_DM_Face-tracking/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Home Assistant

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">在 reTerminal 上开始使用 Home Assistant</th>
    <th class="table-trnobg">如何自定义 Home Assistant</th>
      <th class="table-trnobg">Frigate 与 reTerminal 集成</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在这个教程中，我们将逐步指导您使用 reTerminal 将普通房屋转变为智能家居。完成后，您将在 reTerminal LCD 上拥有一个美观的仪表板，让您能够轻松控制家用电器并访问传感器数据。让我们开始吧！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程将逐步介绍如何通过进行必要的配置来构建仪表板，以及如何使用 Home Assistant 附带的一些重要插件。让我们开始吧！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Frigate 是一个专为实时 AI 物体检测设计的开源 NVR。所有处理都在您的硬件上本地进行，确保您的摄像头画面保留在家中。本教程将指导您完成 NVR 的安装并演示物体检测功能。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-Home-Assistant-Customize/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal_frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### 创建强大的用户界面

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">reTerminal 的 Qt Python 版本</th>
    <th class="table-trnobg">reTerminal 的 Flutter</th>
      <th class="table-trnobg">reTerminal 的 Electron</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程介绍如何在 reTerminal 上使用 Qt for Python 构建自己的用户界面。这里我们使用 PySide2 进行开发。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程指导您使用 Flutter 构建自己的用户界面，Flutter 是 Google 开源的 UI 软件开发工具包。Flutter 支持使用单一代码库进行跨平台应用开发，包括 Android、iOS、Linux、Mac、Windows、Google Fuchsia 和 Web。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程指导您使用 Electron 构建自己的用户界面，Electron 是一个开源框架，用于使用 HTML、CSS 和 JavaScript 等 Web 技术创建原生桌面应用程序（Windows、Mac、Linux）。如果您能构建网站，就能构建桌面应用！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-build-UI-using-Qt-for-Python/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-build-UI-using-Flutter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-build-UI-using-Electron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>
    <br />

  <div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">reTerminal 的 LVGL</th>
    <th class="table-trnobg">使用 Grafana 构建您自己的天气仪表板</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>LVGL 为制作嵌入式 GUI 提供了必要的工具，具有用户友好的图形元素、令人惊叹的视觉效果和最小的内存占用。这个图形库专为资源有限的微控制器设计。在这篇 wiki 文章中，我们将使用带有 SDL2 的 PC 模拟器示例，并进行轻微修改以全屏显示 UI 而不是在窗口中显示。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>感谢 </font><strong><font color={'8DC215'} size={"2"}>Michaelm Klementsk。</font></strong><br /><font size={"2"}>在这个 wiki 中，我们将使用 ESP32 收集温度、湿度和压力读数，将它们发送到托管在云服务器上的 InfluxDB 时间序列数据库。最后，我们将使用 Grafana 可视化和分析数据。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-build-UI-using-LVGL/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/weather-dashboard-with-Grafana-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## 其他

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal 安装选项</font></th>
      <th class="table-trnobg"><font size={"4"}>在 reTerminal 上安装 Mender 客户端</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Mount_Options/9.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mender.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本节中，我们探讨 reTerminal 安装解决方案，涵盖硬件螺丝规格和社区设计方面。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本 wiki 解释了如何在 reTerminal 上设置 Mender 客户端，以便从托管或自托管 Mender 服务器接收 OTA 更新。该指南重点介绍使用通过 Yocto 项目编译的自定义 Linux 系统的 reTerminal。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal_Mount_Options/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Mender-Client-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div>
<table>
 <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 探索更多</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 返回 Pi 设备 </font></span></strong></a></div></td>
  </tr>
 </table>

## ✨ 贡献者项目

- 我们有一个更新此页面的任务列表，该列表归类在我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)下，因为我们致力于通过开发我们的wiki平台来增强用户体验并提供更好的支持。
- [您对此页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038)对我们来说至关重要！我们非常重视您的意见，并将非常感谢您在产生想法方面的帮助。

## 常见问题

- [如何解决reTerminal黑屏问题](https://wiki.seeedstudio.com/cn/reterminal_black_screen)
- [如何将Raspberry Pi OS/ 64位Ubuntu OS或其他OS刷写到eMMC](https://wiki.seeedstudio.com/cn/flash_different_os_to_emmc)
- [通过Wi-Fi/以太网使用SSH登录到Raspberry Pi OS/++Ubuntu OS或其他OS](https://wiki.seeedstudio.com/cn/log_rpios_use_ssh_over_wifi_ethernet)
- [了解更多](https://wiki.seeedstudio.com/cn/reTerminal-new_FAQ/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
