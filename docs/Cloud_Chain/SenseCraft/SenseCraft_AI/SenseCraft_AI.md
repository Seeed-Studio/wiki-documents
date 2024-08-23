---
description: SenseCraft AI
title: SenseCraft AI Introduction
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /sensecraft_ai
last_update:
  date: 12/28/2023
  author: Seraphina
---

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) empowers users to effortlessly deploy a vast library of publicly available AI models onto their edge devices such as **Recomputer (Jetson)**,[XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html),  [Grove Vision AI v2](https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html) and SenseCAP Watcher and  provides a seamless and user-friendly experience, allowing you to deploy public AI models directly onto your edge devices with just a few clicks. Say goodbye to complex configurations and coding – with SenseCraft AI Studio, you can effortlessly unlock the power of AI on your devices.

Model Sharing and Collaboration: SenseCraft AI Studio allows you to upload and share your own trained AI models with the community. By publishing your models, you contribute to a growing library of shared knowledge, fostering collaboration and innovation among AI enthusiasts.

## **User Account**

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) is an open platform that allows users to browse all public AI models and Home pages without logging in. You need to sign up and sign in only when you need to deploy a model, or share your own model.

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) and [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/#/login) ( original SenseCAP Cloud Platform) are both software services provided by seeed studio for users, users only need to sign up for an account on any one of the platforms, and then they can use the same account to sign in on both platforms.

#### **Sign up**
1. Enter your name and valid email,and then click "get capcha"<br />


![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png)

2. Get the verification code from your email and enter it on sign up page

:::note
verification code is valid for 10min, please complete the registration within 10 minutes
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png)

3. Enter your password and other user information to complete your registration. <br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png)

#### **Sign in**
Sign in with your registered email account

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png)

#### **Forget password**
If you forget your account password, please enter your valid account and get verification code to set a new password.<br />
The validity period of the verification code is 10min, please complete the reset within 10 minutes<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/5.png)

#### **Change password**

1. Visist user account page and click "Change your password" button<br />
2. Enter the old password and new password to change password<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/6.png)



## AI Models

### Model Management

#### Model list

Public AI models show all published AI models；Custom AI models show all your own uploaded AI models.  The model is displayed on the list as follows

- Model inference example image
- Model Name
- Model describe
- This model task type like detection,classification,segmentation,pose, generation
- Supported Device:Device that support deployment of this model
- The username that published this model

**Search model**<br/>
Provides search feature based on various types of key information in the model like model name, model task, surpported device,model publisher

**Favorite model**<br/>
Users can favorite public models

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/7.png)

#### Add Model

SenseCraft AI is a platform that supports content co-creation for developers and modelers! Share your results with the global developer community. Meanwhile, through our AI open platform, you will have the opportunity to combine your AI models with commercialization needs, providing valuable solutions for enterprises and users in different industries. We look forward to your participation and contribution to jointly realize the innovation and application of AI technology in the commercial field!

1. To add a model you need to complete the following information, 

**Basic model info**<br/>

- Model Name
- Model Excerpt:A simple description of the model
- Model Introduction：detailed description of the model
- Model Deployment Perparation：Pre-requisite for model deployment, not required
- Supported Device:Choose which device the model will be deployed on, currently the platform supports Jetson devices, XIAO ESPS3, etc.
- Model Inference Example Image ：Upload an image of the model's inference results

2. Click next when the information is completed.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/8.png)

**Model**<br/>
1. Enter the follow information about the model parameters
2. Publish the model to the public AI model library is checked by default, the model will be visible to everyone after saving, if unchecked, the model will be visible only to you after saving.

|     | Content|
| --- | --- |
| Model Format | 1 The correct format for the model<br />2 Option:ONNX, Tensor RT, Pytorch<br />3 Platform will support more model formats |
| Task | 1 The task type of the model<br />2 Option:Detection,Classification,Segment,Pose |
| AI Framework | 1 The AI framework of the model<br />2 Option:YOLOV5,YOLOV8,FOMO,ModileNetV2,PFLD<br />3 Platform will support more AI framwork |
| Classes | 1 Classes or labels that the model categorizes for a specific task or problem<br />2 Please make sure the class id and class name matches correctly. |
| Model File | Upload a model file in the format of your choice. |
| Model Precision | 1 model precision<br />2 Option:Int8,Float16,Float32 |

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/9.png)

:::note

To ensure the healthy development of our platform, we will review the models and content posted by users. If any illegal, non-compliant, or infringing content is found, it will not be allowed to be published and may be deleted accordingly.
Thank you for your understanding and support in maintaining a healthy platform environment!

:::

#### Custom AI Model Management

Users have all the permissions to operate their own models

**Publish Model**: Publish a private model that will be available to all users.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image1.png)

**Privatize Model**:Privatize a public model, the model is only visible to yourself

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image2.png)

**Delete Model**: Delete a private model, public models are not allowed to be deleted

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image3.png)

**Edit Model**:Allow to modify all information of the model


### Deploy model to XIAO ESP32S3

SenseCraft AI platform provide a very simple way to deploy AI model to edge device such as Jetson orin ,XIAO ESP32S3 Sense,etc. Enjoy seamless Edge AI model deployment now!

You can learn more through the [Deploy model to XIAO ESP32S3 documentation](https://wiki.seeedstudio.com/Deploy_model_to_XIAO_ESP32S3/).


### Deploy model to Grove - Vision AI V2

SenseCraft AI platform provide a very simple way to deploy AI model to edge device such as Jetson ,XIAO ESP32S3 Sense,Grove-Vision AI v2, SenseCAP Watcher. Enjoy seamless Edge AI model deployment now!

You can learn more through the [Deploy model to Grove - Vision AI V2 documentation](https://wiki.seeedstudio.com/Deploy_model_to_Grove_Vision_AI_V2/).

### Deploy model to Jetson

SenseCraft AI platform provide a very simple way to deploy AI model to edge device such as Jetson orin ,XIAO ESPS3,etc. Enjoy seamless Edge AI model deployment now!

You can learn more through the [Deploy model to Jetson documentation](https://wiki.seeedstudio.com/sensecraft_deploy_model_to_jetson/).


## Device Workspace

The SenseCraft AI platform provides an AI model zoo for users to share and download AI models, and also has a device workspace where users can view the inference results of their devices in real time and manage their devices to improve the convenience and flexibility of device management.

### XIAO ESP32S3 Workspace

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

You can learn more through the [XIAO ESP32S3 Workspace documentation](https://wiki.seeedstudio.com/XIAO_ESP32S3_Workspace/).

### Grove-Vision AI v2 Workspace

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

You can learn more through the [Grove-Vision AI v2 Workspace documentation](https://wiki.seeedstudio.com/Grove_Vision_AI_v2_Workspace/).

### Nvidia Jeson Workspace

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

You can learn more through the [Nvidia Jeson Workspace documentation](https://wiki.seeedstudio.com/Nvidia_Jeson_Workspace/).

## SenseCraft AI-Jetson

SenseCraft AI-Jetson is a development toolkit and platform designed for NVIDIA Jetson Edge AI devices. Simply run the "Quickstart Script" and you will be presented with an interactive user interface to view an example application with a pre-loaded video and a pre-loaded AI model. If you want to add your own USB camera, IP camera you can simply do it in a few clicks! 

In addition to the various built-in AI models we offer out-of-the-box,  you can access to a large number of public models on SenseCraft AI platform and you will be able to download and deploy AI models for specific scenarios and create personalized AI solutions based on your needs. SenseCraft AI is your intelligent decision-making partner for vision ai, providing you with simple, flexible and efficient inferencing and solution building capabilities.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)


You can learn more through the [SenseCraft AI-Jetson documentation](https://wiki.seeedstudio.com/SenseCraft_AI_Jetson/).



## **Tech Support**

**Need help with your SenseCAP Indicator? We're here to assist you!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>