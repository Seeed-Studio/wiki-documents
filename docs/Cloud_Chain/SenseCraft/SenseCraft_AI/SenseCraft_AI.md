---
description: SenseCraft AI
title: SenseCraft AI Introduction
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /SenseCraft_AI
last_update:
  date: 12/28/2023
  author: Seraphina
---

## **Model Zoo**

SenseCraft AI -Model Zoo empowers users to effortlessly deploy a vast library of publicly available AI models onto their edge devices such as Recomputer (Jetson), XIAO S3, and more and  provides a seamless and user-friendly experience, allowing you to deploy public AI models directly onto your edge devices with just a few clicks. Say goodbye to complex configurations and coding – with SenseCraft AI Studio, you can effortlessly unlock the power of AI on your devices.

Model Sharing and Collaboration: SenseCraft AI Studio allows you to upload and share your own trained AI models with the community. By publishing your models, you contribute to a growing library of shared knowledge, fostering collaboration and innovation among AI enthusiasts.

### **User Account**
SenseCraft AI -Model Zoo is an open platform that allows users to browse all public AI models and Home pages without logging in. You need to sign up and sign in only when you need to deploy a model, or share your own model.

SenseCraft AI-Model Zoo and [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/#/login) ( original SenseCAP Cloud Platform) are both software services provided by seeed studio for users, users only need to sign up for an account on any one of the platforms, and then they can use the same account to sign in on both platforms.

#### **Sign up**
1 Enter your name and valid email,and then click "get capcha"<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663386809-1912a9bb-9cb0-4e4a-ac26-0badb727e389.png#averageHue=%23737553&clientId=u1b4eaca0-c34a-4&from=paste&height=447&id=u2478dda2&originHeight=447&originWidth=907&originalType=binary&ratio=1&rotation=0&showTitle=false&size=300941&status=done&style=none&taskId=u00dd821d-d52c-413a-b3b1-ba305f7661b&title=&width=907)<br /> -->

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png)

2 Get the verification code from your email and enter it on sign up page

:::note
verification code is valid for 10min, please complete the registration within 10 minutes
:::

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663773726-04104839-8e3c-459c-a0e9-5eb8b8649c89.png#averageHue=%23fcfcfc&clientId=u1b4eaca0-c34a-4&from=paste&id=u986a3eae&originHeight=1196&originWidth=1682&originalType=url&ratio=1&rotation=0&showTitle=false&size=107337&status=done&style=none&taskId=ue4467a33-3dd3-4cd4-ae7b-0086a9ad97e&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png)

3 Enter your password and other user information to complete your registration. <br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663800447-412f46c9-7d31-4397-a8ca-7f0b07b070f3.png#averageHue=%23676651&clientId=u1b4eaca0-c34a-4&from=paste&id=ua9096fdf&originHeight=1806&originWidth=3816&originalType=url&ratio=1&rotation=0&showTitle=false&size=2815809&status=done&style=none&taskId=u122f0f63-13b6-4409-a3f2-4ba38f33072&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png)

#### **Sign in**
Sign in with your registered email account

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663808680-78efae4b-105c-4f0d-ae53-1013b412078f.png#averageHue=%2362634d&clientId=u1b4eaca0-c34a-4&from=paste&id=ud1915a06&originHeight=1574&originWidth=3244&originalType=url&ratio=1&rotation=0&showTitle=false&size=2493335&status=done&style=none&taskId=u0d9c6f48-1ea4-4f14-986c-08d9f068c70&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png)

#### **Forget password**
If you forget your account password, please enter your valid account and get verification code to set a new password.<br />
The validity period of the verification code is 10min, please complete the reset within 10 minutes<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663806329-33956475-af96-4830-aef8-0f496ea1c019.png#averageHue=%2399a580&clientId=u1b4eaca0-c34a-4&from=paste&id=u8c1b1523&originHeight=1928&originWidth=3830&originalType=url&ratio=1&rotation=0&showTitle=false&size=1510158&status=done&style=none&taskId=ua2a75334-6763-49f1-828e-1f83ca3cf5e&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/5.png)

#### **Change password**

1 Visist user account page and click "Change your password" button<br />
2 Enter the old password and new password to change password<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663813231-1dacc60a-1b75-4d39-984a-d6c0072486b0.png#averageHue=%23b9b9b9&clientId=u1b4eaca0-c34a-4&from=paste&id=u84b28d94&originHeight=1630&originWidth=3314&originalType=url&ratio=1&rotation=0&showTitle=false&size=286040&status=done&style=none&taskId=u2c1ea0a5-f045-474d-9354-4ce067ce3e2&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/6.png)

### **AI Models**
AI models are categorized into two types, public AI models, which can be viewed by any user, and custom AI  models, which are uploaded and managed by the users themselves

#### **Model list**
Public AI models show all published AI models；Custom AI models show all your own uploaded AI models.  The model is displayed on the list as follows

- Model inference example image<br />
- Model Name<br />
- Model describe<br />
- This model task type like detection,classification,segment,pose<br />
- Adapted Device:Device that support deployment of this model<br />
- AI framework for this models like yolov8, yolov5<br />
- The username that published this model<br />

**2 Search model**<br />
Provides search feature based on various types of key information in the model like model name, model task, surpported device,model publisher<br />

**3 Favorite model**<br />
Users can favorite public models<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663830970-13041574-1860-478c-a4ef-20ce4aba6f31.png#averageHue=%238d8f6d&clientId=u1b4eaca0-c34a-4&from=paste&id=u46274f82&originHeight=1910&originWidth=3824&originalType=url&ratio=1&rotation=0&showTitle=false&size=3661493&status=done&style=none&taskId=u77a157ec-5573-4f7b-a822-67ba6d6f6df&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/7.png)

#### **Add Model**
SenseCraft AI is a platform that supports content co-creation for developers and modelers! Share your results with the global developer community. Meanwhile, through our AI open platform, you will have the opportunity to combine your AI models with commercialization needs, providing valuable solutions for enterprises and users in different industries. We look forward to your participation and contribution to jointly realize the innovation and application of AI technology in the commercial field!<br />

1 To add a model you need to complete the following information

**Basic model info**<br />

- Model Name<br />
- Model Excerpt:A simple description of the model<br />
- Model Introduction：Detailed description of the model<br />
- Model Deployment Perparation：Pre-requisite for model deployment, not required<br />
- Supported Device:Choose which device the model will be deployed on, currently the platform supports Jetson devices, XIAO ESPS3, etc.<br />
- Model Inference Example Image ：Upload an image of the model's inference results<br />

2 Click next when the information is completed.<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663844433-d3bb3717-7b7a-4b6d-943d-2dab78bd8000.png#averageHue=%23fdfdfd&clientId=u1b4eaca0-c34a-4&from=paste&id=ucfbed46f&originHeight=3524&originWidth=3840&originalType=url&ratio=1&rotation=0&showTitle=false&size=1072092&status=done&style=none&taskId=u46016e17-7648-4cc6-89a9-f5882cf631f&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/8.png)

**Model**<br />

1 Enter the follow information about the model parameters<br />
2 Publish the model to the public AI model library is checked by default, the model will be visible to everyone after saving, if unchecked, the model will be visible only to you after saving.


|     | Content|
| --- | --- |
| Model Format | 1 The correct format for the model<br />2 Option:ONNX, Tensor RT, Pytorch<br />3 Platform will support more model formats |
| Task | 1 The task type of the model<br />2 Option:Detection,Classification,Segment,Pose |
| AI Framework | 1 The AI framework of the model<br />2 Option:YOLOV5,YOLOV8,FOMO,ModileNetV2,PFLD<br />3 Platform will support more AI framwork |
| Classes | 1 Classes or labels that the model categorizes for a specific task or problem<br />2 Please make sure the class id and class name matches correctly. |
| Model File | Upload a model file in the format of your choice. |
| Model Precision | 1 model precision<br />2 Option:Int8,Float16,Float32 |



<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663870609-6d5f80ec-4f7a-48d9-861c-0aaf37d504b2.png#averageHue=%23fdfdfd&clientId=u1b4eaca0-c34a-4&from=paste&id=ufc3ba3a2&originHeight=6490&originWidth=3840&originalType=url&ratio=1&rotation=0&showTitle=false&size=1230615&status=done&style=none&taskId=u844470fa-1484-4ae2-a106-81de94071fe&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/9.png)

#### **Deploy AI Model to Jetson**
SenseCraft AI platform provide a very simple way to deploy AI model to edge device such as Jetson orin ,XIAO ESPS3,etc. Enjoy seamless Edge AI model deployment now!<br />

1 Select or upload an AI model<br />
2 Visit the AI model detail and click "Deploy Model" button<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663880597-c9a6eb22-bca4-43ca-8219-328e290d7d88.png#averageHue=%23fafaf9&clientId=u1b4eaca0-c34a-4&from=paste&id=uca15fd4d&originHeight=1564&originWidth=3090&originalType=url&ratio=1&rotation=0&showTitle=false&size=619209&status=done&style=none&taskId=ucfe082fd-7371-4145-83ab-a1dc6879b70&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/10.png)

##### **Step 1  Install SenseCraft AI-Jetson**

  1 If your Jetson device has installed SenseCraft AI on device,go directly to step 2<br />
  2 Connect Jetson to a display and power it on<br />
  3  Plug a mouse and keyboard into the device and type the following command on a terminal to run the application

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663892399-e31e8128-3cf5-4793-a4c1-bfd0fb29edd2.png#averageHue=%23f5f5f5&clientId=u1b4eaca0-c34a-4&from=paste&id=u3c9d517d&originHeight=3074&originWidth=3840&originalType=url&ratio=1&rotation=0&showTitle=false&size=591591&status=done&style=none&taskId=u72c4095c-851a-4410-9062-a697b9c41bc&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/11.png)

  3 SenseCraft AI-Jetson install complete, please go to step 2<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663891314-58d8a24d-0924-4cce-97fc-fd6473b22f3b.png#averageHue=%23000000&clientId=u1b4eaca0-c34a-4&from=paste&id=ue845602d&originHeight=1400&originWidth=2788&originalType=url&ratio=1&rotation=0&showTitle=false&size=99832&status=done&style=none&taskId=u5a12d741-2475-4aa8-bdfb-0b36edb0a99&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/12.png)

##### **Step 2  Select device**
1 If you have already added the device to the platform, you can directly select the device and click next to go to step 3<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663910417-2e8ed505-f52e-42fe-b192-4e053fc79513.png#averageHue=%23fdfdfd&clientId=u1b4eaca0-c34a-4&from=paste&id=u8a3890ae&originHeight=1556&originWidth=3268&originalType=url&ratio=1&rotation=0&showTitle=false&size=224316&status=done&style=none&taskId=u0fb6cf11-8cd9-46d2-a477-685859856f4&title=)<br /> -->

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/13.png)

2 If your need add a new device, please click "Add Devic" Button and the Add Device window will appear.<br />
3 Enter the device name <br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663910363-a94fa790-676e-432f-8a05-3067d67f3098.png#averageHue=%23e1e1e1&clientId=u1b4eaca0-c34a-4&from=paste&id=u881f16ea&originHeight=914&originWidth=1322&originalType=url&ratio=1&rotation=0&showTitle=false&size=135183&status=done&style=none&taskId=u2c9f38e5-6cb2-4c67-befd-3d814ac9a51&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/14.png)

4 Visit SenseCraft AI-Jetson Application on your device and go to Settings page<br />
5 Enable "Bind to SenseCraft AI platform" setting and get the bind code <br />
6 Back to SenseCraft AI platform and enter the valid bind code to complete the addition<br />

:::note
if this bind code is duplicated, you need to enter the temporary name.
:::

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663921436-0106265d-1d17-4609-8f7b-2727acc747cc.png#averageHue=%23344218&clientId=u1b4eaca0-c34a-4&from=paste&id=u635e9c19&originHeight=1008&originWidth=2792&originalType=url&ratio=1&rotation=0&showTitle=false&size=133223&status=done&style=none&taskId=u3234e204-a62b-453a-ab2c-0b2a3de4d09&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/15.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663921323-26d6f42e-cde1-40ce-ba99-ec30869df9c2.png#averageHue=%23ececec&clientId=u1b4eaca0-c34a-4&from=paste&id=u9f1d39f2&originHeight=812&originWidth=1102&originalType=url&ratio=1&rotation=0&showTitle=false&size=83229&status=done&style=none&taskId=u9477f01b-07b5-43cb-946f-aae302a4714&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/16.png)

7 Now select the device and click next to step 3

##### **Step 3  Select Stream**
1 If you want to apply the AI model on the existing video stream of the device, please directly select the video stream and click "Send" to send the model down to the device.<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663950392-d6307304-1a48-44ac-842a-0adae4d6bbb6.png#averageHue=%23fcfcfc&clientId=u1b4eaca0-c34a-4&from=paste&id=ue28eda5b&originHeight=1492&originWidth=3256&originalType=url&ratio=1&rotation=0&showTitle=false&size=256935&status=done&style=none&taskId=uecbace86-17bf-486c-88ed-33bcfbeb7c3&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/17.png)

2 If you want to apply the AI model to a new video stream, click the "Add Stream" button and enter the new stream's information<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663952642-8afdb5d4-99cc-4ad5-8a36-cf622db25d2a.png#averageHue=%23cdcdcd&clientId=u1b4eaca0-c34a-4&from=paste&id=ud67a80ac&originHeight=1930&originWidth=3788&originalType=url&ratio=1&rotation=0&showTitle=false&size=368554&status=done&style=none&taskId=u41421483-f73d-442c-9e16-a30261d59cb&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/18.png)

Stream info detail please check the follow table 

| **Fields** | **Content** |
| --- | --- |
| **Stream Name** | 1 custom name for this stream.<br />2 Cannot be empty |
| **Video Type** | 1 Ip camera：Access a IP camera, need input a valid rtsp url<br />2 Usb camera：Connect the usb camera to the device, automatically recognize the usb, and then select the correct usb camera in the video path.<br />3 Video：Video built into the device,and input in video path |
| **Video Path** | Video Path, format decided by "Video Type", if wrong, default video will be used. |
| **Confidence Threshold** | 1 Object confidence threshold for detection.<br />2 Format:float [0, 1] |
| **IoU Threshold** | 1 IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes2 Format:float [0, 1] |
| **FPS** | 1 Frames per second of stream<br />2 Format: INT [1,60] |
| **Quality** | 1 Output stream quality.  Default: 50<br />2 Format: int [0,100] |
| **Maximum Detections** | 1 maximum number of detections per image.Default:3002 Format: int [0,1000] |
| **Display Frame Rate** | 1 Whether to display the frame rate of the stream<br />2 Format:Bool [True,False]<br />● True: display FPS<br />● False: do not display FPS |
| **Display Clock** | 1 Whether to display the time<br />2 Format:Bool [True,False]<br />● True: display time<br />● False: do not display time |

3 Click “Send” button to send the model down to the device.The model deployment will take about 5mins, please feel free to close the preview page and check it in device workspace after the deployment is complete.

4 Check the new model on device or device workspace on AI platform<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663960005-641b1e19-df67-479a-a278-3d879566fb45.png#averageHue=%23e5efd1&clientId=u1b4eaca0-c34a-4&from=paste&id=uc87624a6&originHeight=1520&originWidth=3262&originalType=url&ratio=1&rotation=0&showTitle=false&size=442425&status=done&style=none&taskId=ucb1c1377-2966-47a3-82c0-127912732bb&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/19.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663961445-6163de68-0058-4e17-b5cd-a2411145ce67.png#averageHue=%23797566&clientId=u1b4eaca0-c34a-4&from=paste&id=u35e76187&originHeight=1876&originWidth=3750&originalType=url&ratio=1&rotation=0&showTitle=false&size=1489501&status=done&style=none&taskId=ue258096a-d56e-4ee2-8d3e-d9fde8f3fa1&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/20.png)

#### **Custom AI Model Management**
Users have all the permissions to operate their own models

**Publish Model**: Publish a private model that will be available to all users.<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663960237-e19060f3-895a-4850-a168-3c8886aa5750.png#averageHue=%23b4b4b4&clientId=u1b4eaca0-c34a-4&from=paste&id=u684cf417&originHeight=1172&originWidth=3276&originalType=url&ratio=1&rotation=0&showTitle=false&size=578368&status=done&style=none&taskId=u83683ee7-7505-4204-96c7-e29c234b2aa&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/21.png)

**Privatize Model**:Privatize a public model, the model is only visible to yourself<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663969500-01425192-bfa4-4afe-8cc0-e5277e2d984b.png#averageHue=%23b4b4b4&clientId=u1b4eaca0-c34a-4&from=paste&id=u8c2ba967&originHeight=1096&originWidth=2836&originalType=url&ratio=1&rotation=0&showTitle=false&size=353813&status=done&style=none&taskId=u924821ce-7e32-4808-8cc8-3ff99f2cb67&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/22.png)

**Delete Model**: Delete a private model, public models are not allowed to be deleted<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663969484-e8dae049-1bc1-43f4-be73-bc71c942f13a.png#averageHue=%23b5b4b4&clientId=u1b4eaca0-c34a-4&from=paste&id=ua5204987&originHeight=1202&originWidth=3258&originalType=url&ratio=1&rotation=0&showTitle=false&size=331575&status=done&style=none&taskId=u3e833cf5-89f1-4b51-a9c1-90c8faca1be&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/23.png)

**Edit Model**:Allow to modify all information of the model

### **Device Workspace**
SenseCraft AI platform not only provides an AI model zoo for users to share and download AI models, but also has Device Workspace, which enables users to view real-time video streams of inference results from Jetson devices and manage them remotely, realizing zero-touch operation, saving labor costs, and improving the convenience and flexibility of device management.

#### **Add Device**
1 Before adding a Jetson device, please first install the SenseCraft AI app to the device, for more information, please check the "**Install SenseCraft AI**"<br />
2 Click "Add Device" button on Device Workspace Page<br />
3 Enter a device custom name and get the bind code from device.<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663979005-c969724c-3860-4196-9ce7-4146c71053a7.png#averageHue=%23afb0ae&clientId=u1b4eaca0-c34a-4&from=paste&id=uf398a3a1&originHeight=1410&originWidth=2658&originalType=url&ratio=1&rotation=0&showTitle=false&size=338478&status=done&style=none&taskId=u2b74c039-d94e-44ce-aad0-4cdb56cb6f6&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/24.png)

4 Back to device‘s SenseCraft AI application. Click "Bind to SenseCraft AI platform",and then application will display bind code and temporary name.<br />

- Bind Code: enter the correct and valid bind code on SenseCraft AI-Model Zoo to finish binding the device.<br />
- Temporary Name: if the bind code is duplicated then you need to enter the correct temporay name.

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663978024-dfee9f6d-fece-4fb2-86b6-ebc10dd2ee25.png#averageHue=%23759825&clientId=u1b4eaca0-c34a-4&from=paste&id=uad42fbc6&originHeight=704&originWidth=3280&originalType=url&ratio=1&rotation=0&showTitle=false&size=91074&status=done&style=none&taskId=u72e7d9e5-b0d3-49d4-ac92-fd699f2e928&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/25.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663988252-27cb923d-368c-43c5-8b69-ca0470a7848b.png#averageHue=%23181919&clientId=u1b4eaca0-c34a-4&from=paste&id=u92823f98&originHeight=806&originWidth=1406&originalType=url&ratio=1&rotation=0&showTitle=false&size=80189&status=done&style=none&taskId=u95ae4629-0b1e-4c8c-a74d-694455e9578&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/26.png)

5  enter the correct and valid bind code and click "Comfirm" button<br />
6 Bind successfully,now you can manage the device <br />

:::note
every account only add 5 free device
:::

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703663988895-7063f9f0-e4d7-4315-b12f-ad2734e4baf6.png#averageHue=%23b4b6b5&clientId=u1b4eaca0-c34a-4&from=paste&id=u9106e0d1&originHeight=1440&originWidth=3284&originalType=url&ratio=1&rotation=0&showTitle=false&size=355643&status=done&style=none&taskId=u8a9f964c-16f3-49cd-88bc-4a7ac3d5785&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/27.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664001170-505a6342-eca2-4a38-a010-2e1335bea75c.png#averageHue=%23181919&clientId=u1b4eaca0-c34a-4&from=paste&id=ucb7dffa3&originHeight=806&originWidth=1406&originalType=url&ratio=1&rotation=0&showTitle=false&size=80189&status=done&style=none&taskId=u93754269-f60e-4f28-b22f-28e6f660a4b&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/28.png)

5 enter the correct and valid bind code and click "Comfirm" button<br />
6 Bind successfully,now you can manage the device <br />
:::note
every account only add 5 free device
:::

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664001646-83ff8e3d-fa19-47a1-aad6-97f6e0572a18.png#clientId=u1b4eaca0-c34a-4&from=paste&id=u6e15fe71&originHeight=1440&originWidth=3284&originalType=url&ratio=1&rotation=0&showTitle=false&size=355643&status=done&style=none&taskId=u0cb2de7d-5674-4de6-88ff-2b96fb9f40d&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/29.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664017618-6996a8cb-051c-44ec-b538-34e1ec10e14c.png#averageHue=%238d8e8e&clientId=u1b4eaca0-c34a-4&from=paste&id=ua8bba1db&originHeight=1632&originWidth=3288&originalType=url&ratio=1&rotation=0&showTitle=false&size=264085&status=done&style=none&taskId=u4572503a-34a7-4e33-a4e0-767d38cdb2b&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/30.png)

#### **Device Information**
The device information is divided into three parts, general information, video stream information and AI model.<br />
**General Info**<br />
The device information is divided into three parts, general information, Video stream information and AI model. Please check the table below for details <br />
<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664022957-b87e7a15-b368-44e0-81b4-25920820cfa0.png#averageHue=%238e9079&clientId=u1b4eaca0-c34a-4&from=paste&id=u85236f5a&originHeight=1892&originWidth=3806&originalType=url&ratio=1&rotation=0&showTitle=false&size=3763247&status=done&style=none&taskId=u3ab74fdb-e6fa-4830-b32b-2cd94360286&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/31.png)

| Fields | Content |
| --- | --- |
| Device Name | Device custom name, user can change the name |
| Device SN | Unique production serial number of the device |
| Device EUI | Device EUI |
| Online Status | Online: device is online<br />Offline: device is offline,user can‘t operate offline device |
| Equipped Module | The device's module |
| CPU Usage | Device CPU usage |
| Memory | Device RAM usage |
| Storage | Device disk usage |
| IP Address | The device network IP address |
| MAC Address | The device MAC address |
| SenseCraft AI Version | Version of the SenseCraft AI Application installed on the device |
| Collect Time | The time when the last information was collected from the device |

#### **Delete Device **
If you have completed the deployment of the AI Model and do not need to manage the device remotely, you can remove the device from the platform and the device can do local inference, stream management and AI model management independently on the edge.


#### **Video Stream  Management**
Video Stream can view the real-time inference results remote and manage device video stream. supported add stream, edit stream  view stream,and delete stream.
##### **Real-time inference **
If video streams have been added to the device, users can view real-time inference results for all streams on the platform. Enables real-time monitoring of inference results and exceptions<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664127393-8cb184bc-f0c5-4fd6-bb02-63f5512c8a46.png#averageHue=%23a9af97&clientId=u1b4eaca0-c34a-4&from=paste&id=ub03bfc15&originHeight=1862&originWidth=3828&originalType=url&ratio=1&rotation=0&showTitle=false&size=3131080&status=done&style=none&taskId=u486872c6-9d64-430f-83b5-9991a3030bf&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/32.png)

##### **Add Stream**

Click "Add Stream" and enter valid stream info, and then  click "Confirm" button to send the new stream to the device.  It takes time for the device to add a new stream, the platform information will be updated later. please check the below table for detail info.<br />

**note: The device must be online to add a new stream**

| **Fields** | **Content** |
| --- | --- |
| **Stream Name** | 1 custom name for this stream.<br />2 Cannot be empty |
| **Video Type** | 1 Ip camera：Access a IP camera, need input a valid rtsp url<br />2 Usb camera：Connect the usb camera to the device, automatically recognize the usb, and then select the correct usb camera in the video path. |
| **Video Path** | Video Path, format decided by "Video Type", if wrong, default video will be used. |
| **Device AI Model** | 1 Select an AI model which already downloaded on the device<br />2 If there is no AI model on your device, please go to AI Models page to download the model to your device. |
| **Confidence Threshold** | 1 Object confidence threshold for detection.<br />2 Format:float [0, 1] |
| **IoU Threshold** | 1 IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes2 Format:float [0, 1] |
| **FPS** | 1 Frames per second of stream<br />2 Format: INT [1,60] |
| **Quality** | 1 Output stream quality.  Default: 50<br />2 Format: int [0,100] |
| **Maximum Detections** | 1 maximum number of detections per image.Default:3002 Format: int [0,1000] |
| **Display Frame Rate** | 1 Whether to display the frame rate of the stream<br />2 Format:Bool [True,False]<br />● True: display FPS<br />● False: do not display FPS |
| **Display Clock** | 1 Whether to display the time<br />2 Format:Bool [True,False]<br />● True: display time<br />● False: do not display time |

##### **Stream detail **
Click the stream "Eye" icon,you will view the stream  detail info<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664135728-5f4283ad-e5b6-46a2-8652-96b5f6f89fdd.png#averageHue=%2376786e&clientId=u1b4eaca0-c34a-4&from=paste&id=u6709ff17&originHeight=1772&originWidth=3300&originalType=url&ratio=1&rotation=0&showTitle=false&size=2271570&status=done&style=none&taskId=u1ad25eb3-3696-41c6-9e28-fe2b8ad2418&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/33.png)

##### **Edit Stream**
Click the stream "Edit" icon, users can edit all configurations of the stream and click "Confirm" button to send the modified stream info to the device.  It takes time for the device to update the streaming configuration, the platform information will be updated later<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664133261-61f9d0cf-f73b-4bf1-ab07-8f0107aebee5.png#averageHue=%239a9999&clientId=u1b4eaca0-c34a-4&from=paste&id=ubb34ecf3&originHeight=1900&originWidth=3812&originalType=url&ratio=1&rotation=0&showTitle=false&size=1158673&status=done&style=none&taskId=u3c14250b-14f3-42cf-a043-9710db22be3&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/34.png)

##### **Delete Stream**
Click the stream "Delete" icon to delete the stream. It takes time for the device to delete stream, the platform information will be updated later

#### **Device AI Model **
Manage all AI models that have been downloaded on the device and support add model , view the model detail and delete model.

## **Jetson**
SenseCraft AI-Jetson is a development toolkit and platform designed for NVIDIA Jetson Edge AI devices. Simply run the "Quickstart Script" and you will be presented with an interactive user interface to view an example application with a pre-loaded <br />video and a pre-loaded AI model. If you want to add your own USB camera, IP camera you can simply do it in a few clicks! <br />In addition to the various built-in AI models we offer out-of-the-box,  you can access to a large number of public models on SenseCraft AI platform and you will be able to download and deploy AI models for specific scenarios and create personalized AI solutions based on your needs. SenseCraft AI is your intelligent decision-making partner for vision ai, providing you with simple, flexible and efficient inferencing and solution building capabilities.

[e44a0b7d91621e697b9329b9efc1f59d.mov](https://drive.weixin.qq.com/s?k=AGEAZwfLABELmYBWERAU4AkwapAFE)

### **Install SenseCraft AI-Jetson**

**Hardware Requirements**
- NVIDIA Jetson device
- Internet connectivity via Ethernet/ WiFi
- Display

**Software Requirements**
- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**Quick Start**<br />
1 Connect Jetson to a display and power it on<br />
2 Plug a mouse and keyboard into the device and type the following command on a terminal to run the application

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3 During application installation, you need to set the following optional configurations, so please set them according to your needs 

- 2 **[Optional] Enable jetson_clocks script to maximize Jetson performance by setting max frequency to CPU, GPU, and EMC clocks? [y/n] (default: y): y**<br />
provides the jetson_clocks script to maximize Jetson  performance by setting static max frequency to CPU, GPU, and EMC clocks.

- 3 **[Optional] Save space by uninstalling some unnecessary packages like libreoffice, change the size of the Swap Memory? (/swapfile) [y/n] (default: n): n**<br />
In the case of insufficient memory (especially jetson nano), it is better to enable swap to ensure the normal operation of the program.

- 4 **[Optional] Do you want to create or change the size of the Swap Memory? (/swapfile)?**<br />
To get better performance out of nano, turn on Swap.

- 5 **[Optional] Use external · to store the Docker data directory? (for docker images & volumes)?**<br />
**(Recommended if your root partition is smaller than 32 GB). [y/n] (default: n): n**<br />
The edge ai program requires a minimum of 32G of storage space to run, if not, you can choose to mount the docker data volume to an external disk.

4 Now you can experience SenseCraft AI-Jetson

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664299033-20121d7b-29fe-4cdf-8890-0ca847742b87.png#averageHue=%23364236&clientId=u1b4eaca0-c34a-4&from=paste&id=uef9a49fc&originHeight=1600&originWidth=2588&originalType=url&ratio=1&rotation=0&showTitle=false&size=2244129&status=done&style=none&taskId=u073d9392-3a06-4e16-822c-d5a8631758a&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **Deploy new models**
1 Visis “AI Models“ Page  and select a AI model you need<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664300065-1600edf9-bb20-483c-b5d9-97a801ad3423.png#averageHue=%2395917b&clientId=u1b4eaca0-c34a-4&from=paste&id=uf7214c65&originHeight=1634&originWidth=3268&originalType=url&ratio=1&rotation=0&showTitle=false&size=2883706&status=done&style=none&taskId=u2d052d7d-3968-40af-a81b-432a426e029&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2 Click "Deploy Model" button

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664304993-441ed3aa-54af-4cd0-8696-7042538a3d51.png#averageHue=%23f7f6f6&clientId=u1b4eaca0-c34a-4&from=paste&id=u53f951f6&originHeight=1906&originWidth=3808&originalType=url&ratio=1&rotation=0&showTitle=false&size=774077&status=done&style=none&taskId=u213188a2-cebc-4081-b5c3-0e62f983de6&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3 Check the read me to ensure the device have install SenseCraft AI-Jetson and the AI model adapt to the device type.

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664304367-a859129f-4f06-401a-a5ff-f916d716096a.png#averageHue=%23f8f8f8&clientId=u1b4eaca0-c34a-4&from=paste&id=ubbb240f4&originHeight=1914&originWidth=3802&originalType=url&ratio=1&rotation=0&showTitle=false&size=366038&status=done&style=none&taskId=u73045e39-3b98-483c-93d9-6adc4e6a995&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4 Select a online device 

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664312149-c8883dc5-501f-4c8a-9904-dc3e2da46111.png#averageHue=%23fdfdfd&clientId=u1b4eaca0-c34a-4&from=paste&id=u07d30d61&originHeight=1562&originWidth=3294&originalType=url&ratio=1&rotation=0&showTitle=false&size=202063&status=done&style=none&taskId=u3f3de8b0-35dc-47b6-9117-aa23cbf8209&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5 AI model need apply a video stream, if there is no stream please add a valid stream firstly. Model zoo will send the stream info to the device directly.

:::note 
more stream info describe please check Streams Management
:::

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664312201-e68f8f3e-003d-44f1-bee0-cf9a30b1f068.png#averageHue=%23fefefe&clientId=u1b4eaca0-c34a-4&from=paste&id=u1b56dd19&originHeight=1542&originWidth=3292&originalType=url&ratio=1&rotation=0&showTitle=false&size=215419&status=done&style=none&taskId=ucec86600-420c-4db1-b001-ad33f72c55a&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703664321131-81bc67c1-09c6-479d-a98a-bf5c318c1aed.png#averageHue=%23cbcbcb&clientId=u1b4eaca0-c34a-4&from=paste&id=ufa490f64&originHeight=1644&originWidth=3276&originalType=url&ratio=1&rotation=0&showTitle=false&size=276450&status=done&style=none&taskId=u21470608-87c5-423f-8c2d-9c58afdbb29&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6 Send the AI model and stream info to device. AI model deployment takes a few minutes, so you can leave the current page and go to the device after a few minutes to view the deployed AI model

### **Streams management**

SenseCraft AI-Jetson supports add multiple video streams and supports add USB camera and IP camera as your needed.

The number of video streams that can be added depends on the CPU and memory resources of the device. Pay attention to the resource usage of the device.

#### **Add Stream**

1 Visit Streams page and  click + icon<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742274119-7ff0be9f-5e38-49d3-89f8-c9132536e962.png#averageHue=%23000000&clientId=ue490ccf8-ca1e-4&from=paste&id=ube351815&originHeight=1592&originWidth=3266&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=137427&status=done&style=none&taskId=ue12d17bd-870f-4659-ae98-c1bd06ec268&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2  Setup the new video stream valid message, please check the table below for details<br />
<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742274445-4d88d494-bba4-423d-82ee-4fc2743dede5.png#averageHue=%2386ad30&clientId=ue490ccf8-ca1e-4&from=paste&id=u7aaf5e45&originHeight=1580&originWidth=3816&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=240651&status=done&style=none&taskId=u31d131e2-3134-46e6-a61d-77bc96d7132&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **Fields** | **Content** |
| --- | --- |
| **Stream Name** | 1 custom name for this stream.<br />2 Cannot be empty |
| **Video Type** | 1 Ip camera：Access a IP camera, need input a valid rtsp url<br />2 Usb camera：Connect the usb camera to the device, automatically recognize the usb, and then select the correct usb camera in the video path. |
| **Video Path** | Video Path, format decided by "Video Type", if wrong, default video will be used. |
| **Device AI Model** | 1 Select an AI model which already downloaded on the device<br />2 If there is no AI model on your device, please go to AI Models page to download the model to your device. |
| **Confidence Threshold** | 1 Object confidence threshold for detection.<br />2 Format:float [0, 1] |
| **IoU Threshold** | 1 IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes2 Format:float [0, 1] |
| **FPS** | 1 Frames per second of stream<br />2 Format: INT [1,60] |
| **Quality** | 1 Output stream quality.  Default: 50<br />2 Format: int [0,100] |
| **Maximum Detections** | 1 maximum number of detections per image.Default:3002 Format: int [0,1000] |
| **Display Frame Rate** | 1 Whether to display the frame rate of the stream<br />2 Format:Bool [True,False]<br />● True: display FPS<br />● False: do not display FPS |
| **Display Clock** | 1 Whether to display the time<br />2 Format:Bool [True,False]<br />● True: display time<br />● False: do not display time |

3 Click "Save" button and back to home page to check the new stream and AI detection result.

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742299141-a99048ba-82a1-472e-a717-ab6dcd94b4b0.png#averageHue=%236e8e25&clientId=ue490ccf8-ca1e-4&from=paste&id=u0f14820a&originHeight=610&originWidth=3330&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=73478&status=done&style=none&taskId=u0204043e-aa08-45c3-bb07-255fba72703&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742304277-dd6aab14-666b-44c3-b19a-181fc7f915a9.png#averageHue=%2381786c&clientId=ue490ccf8-ca1e-4&from=paste&id=u7ccaf0a8&originHeight=1776&originWidth=3750&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=1734919&status=done&style=none&taskId=u0258d8fe-ac25-41f2-bd66-783b782ebd2&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)

#### **Delete Stream**
Go to the stream details and click "Delete" icon to delete the stream<br />
<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742299818-be3052fa-6f2c-4d7c-a8ce-45eeda16d1c2.png#averageHue=%2386ad30&clientId=ue490ccf8-ca1e-4&from=paste&id=uf35ffe38&originHeight=1584&originWidth=3830&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=242633&status=done&style=none&taskId=u3d4eb5a8-f12d-40da-8bd4-f01b8b0bc38&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **AI Model Management**

Manage all AI models that have been downloaded on the device.

- The AI model will show the name of the stream that uses the model.<br />
- AI models not used on stream can be deleted<br />

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742303149-dcebe89f-ce8d-4648-bd7d-ef9f32643926.png#averageHue=%23c8c2b7&clientId=ue490ccf8-ca1e-4&from=paste&id=u327a440f&originHeight=1266&originWidth=3818&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=1054380&status=done&style=none&taskId=u8e0c7e27-2652-4b8d-a4ee-46112e569cd&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **Settings**

#### **About**

The device info, more info please check the follow table <br />
<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742312601-616ae14f-ef66-4330-9376-d070fd1012c1.png#averageHue=%2381a72b&clientId=ue490ccf8-ca1e-4&from=paste&id=ub5c9835c&originHeight=1514&originWidth=3298&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=191851&status=done&style=none&taskId=u8d40d4af-8000-4c1d-8720-656abc81d32&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **Fields** | **Content** |
| --- | --- |
| **Product** | The device's module |
| **IP** | The device network IP address |
| **Serial number** | Unique production serial number of the device |
| **MAC address** | Network MAC address |
| **CPU Usage** | Device CPU usage |
| **RAM** | Device RAM |
| **Swap** | Device swap |
| **Disk usage** | Device disk usage |
| **Cuda version** | The version of Cuda installed on the device |
| **Jetpack version** | The version of jetpack installed on the device |

#### **Bind to SenseCraft AI platform**
SenseCraft AI -Jetson is designed for edge AI. AI inference and video stream processing is done locally on the device, only if you need to download more AI models you need to bind the device to the SenseCraft AI-Model Zoo, and you can remove the device from the platform once downloaded.

1 Visist SenseCraft AI-Model Zoo<br />
2 Register with a valid email address. The SenseCraft-AI Model Zoo account is the same as the SenseCAP cloud account, if you already have a SenseCAP Cloud account, you can log in directly.

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742315481-b843df8c-dcf2-4afc-96ed-8411e8e66867.png#averageHue=%239da985&clientId=ue490ccf8-ca1e-4&from=paste&id=u9eb1c17a&originHeight=1534&originWidth=2850&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=902585&status=done&style=none&taskId=u6a0b09be-5323-49a3-b65a-263c44399d1&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3 Visit "Device Workspace" and click “Add Device” button.<br />
4  Enter a device custom name and get the bind code from device.

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742328666-339a899d-affc-4d42-bea6-f6a68c496663.png#averageHue=%23afb0ae&clientId=ue490ccf8-ca1e-4&from=paste&id=uf81774fc&originHeight=1410&originWidth=2658&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=338478&status=done&style=none&taskId=u3c615a5f-4f7a-4ff5-86b4-8551ea4dff4&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5  Back to device‘s SenseCraft AI application. Click "Bind to SenseCraft AI platform",and then application will display bind code and temporary name.

- Bind Code: enter the correct and valid bind code on SenseCraft AI-Model Zoo to finish binding the device.<br />
- Temporary Name: if the bind code is duplicated then you need to enter the correct temporay name.

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742326852-6f6735b9-59ce-42ab-a105-86f72dc4e9ae.png#averageHue=%23759825&clientId=ue490ccf8-ca1e-4&from=paste&id=udc115a95&originHeight=704&originWidth=3280&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=91074&status=done&style=none&taskId=ua732d260-fb18-46b1-800b-1f236f1c2f8&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742326823-89b751ad-7e03-4350-af0c-a7848e77ddba.png#averageHue=%23181919&clientId=ue490ccf8-ca1e-4&from=paste&id=uc8d9281b&originHeight=806&originWidth=1406&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=80189&status=done&style=none&taskId=ud2af18da-27c8-4d89-a6ff-0f8df99caba&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6  enter the correct and valid bind code and click "Comfirm" button<br />
7 Bind successfully,now you can add new AI models from model zoo

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742328722-0fea257d-976f-43cb-8c4a-ddfb65c0e0a6.png#averageHue=%23b4b6b5&clientId=ue490ccf8-ca1e-4&from=paste&id=uebf9cfda&originHeight=1440&originWidth=3284&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=355643&status=done&style=none&taskId=ued482874-fff3-419f-b8c9-f1b6b5ff507&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742328593-11761fb0-7185-465d-9b59-8dcd1f119f1c.png#averageHue=%238d8e8e&clientId=ue490ccf8-ca1e-4&from=paste&id=u1843471e&originHeight=1632&originWidth=3288&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=264085&status=done&style=none&taskId=u1d70e63e-3cc7-4101-9c70-d3b3d166fbb&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **Ubind**
If you no need remote manage your device on AI platform you can detele the device from your AI platform's accout. You can unbind from the device or on the platform<br />

- Unbind the device from AI mode zoo, Click "Delete"<br />
<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742340053-dc3041b7-8ffd-4939-b0f5-ef2b1f871155.png#averageHue=%23fbfbfb&clientId=ue490ccf8-ca1e-4&from=paste&id=ub9dd8d7e&originHeight=858&originWidth=906&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=62391&status=done&style=none&taskId=uffcf3aa7-bdf8-48e3-b154-3f49595266b&title=)<br /> -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)

- Unbind the device by disable "Bind to SenseCraft AI platform"<br />
<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742341368-33e3a001-8e14-4d31-9352-40b693a7e4b8.png#averageHue=%23282e22&clientId=ue490ccf8-ca1e-4&from=paste&id=u3ba8e2d7&originHeight=670&originWidth=1180&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=51018&status=done&style=none&taskId=udf1d9bfe-7569-48cc-90e8-68bf845e6ea&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)


### **App Update**

SenseCraft AI App updates are categorized into automatic and manual updates, which you can set according to your needs.

**Automatic update**: check for updates every 5 minutes, when a new version is detected, the information will be automatically updated, no need to do it manually.

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742345432-a8ac7948-7b3f-4cff-a104-e0030e704997.png#averageHue=%2385aa32&clientId=ue490ccf8-ca1e-4&from=paste&id=u3b936a94&originHeight=622&originWidth=1482&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=42393&status=done&style=none&taskId=ua78958bd-6608-4efa-9a2d-8a8e17145a8&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

**Manual update**: manually check for updates, and click the Update button to update when a new version is detected

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742356478-55725076-83a7-43e2-bbac-5ef0e1f6b4ab.png#averageHue=%23000000&clientId=ue490ccf8-ca1e-4&from=paste&id=ua4782352&originHeight=1878&originWidth=3812&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=183467&status=done&style=none&taskId=u1d0b58d8-68d7-4f2e-a332-18eeb054ace&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

<!-- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34705746/1703742350269-5e501555-4309-4f5a-8fcc-23378826ed05.png#averageHue=%23101113&clientId=ue490ccf8-ca1e-4&from=paste&id=u12941b2a&originHeight=636&originWidth=1144&originalType=url&ratio=0.800000011920929&rotation=0&showTitle=false&size=46254&status=done&style=none&taskId=u4a2e0977-d124-4a0f-813f-b42b75a52f8&title=) -->
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

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