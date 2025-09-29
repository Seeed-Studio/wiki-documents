---
description: 本wiki演示了如何在reCamera上使用C++实现YOLO实时目标检测。
title: 基于C++的reCamera实时YOLO目标检测
keywords:
  - Http
  - reCamera
  - Object detecton
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /cn/real_time_yolo_object_detection_using_recamera_based_on_cpp
last_update:
  date: 06/26/2025
  author: Liangyuxin

no_comments: false # for Disqus
---

# 基于C++的reCamera实时YOLO目标检测

本文档演示了如何在reCamera终端上基于交叉编译，使用C++实现实时拍照、YOLO目标检测和HTTP结果访问。这种方法避免了在reCamera上使用Node-RED时遇到的过热问题。您可以参考本文档修改C++代码以实现定制化的计算机视觉应用。

## 环境准备

### 预编译

首先，您需要参考"使用C/C++开发"文档在您的linux上配置交叉编译环境。
**注意**：每次启动后需要重新配置路径：

```
export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

然后，下载 **[Realtime_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Realtime_detection_http.zip)** 项目，并编译它。

```
cd Realtime_detection_http/
mkdir build && cd build
cmake ..
make
```

构建目录中绿色可执行文件 **Realtime_detection_http** 的存在表明编译成功：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/1.png" /></div>

然后打开 reCamera 终端，并将可执行文件复制到 reCamera 终端目录。​

```
 sudo scp Realtime_detection_http recamera@192.168.42.1:/home/recamera/
```

### reCamera 准备工作

1.从 **[设备端模型](https://wiki.seeedstudio.com/cn/recamera_on_device_models/)** 下载已部署的 **YOLOv11** 模型，然后将模型的 **.cvimodel** 文件复制到您的 reCamera 终端：**/home/recamera/**。
2.在执行代码之前，请访问 reCamera [工作区](http://192.168.42.1/#/workspace) 来终止进程（参考 **[使用 c/c++ 开发](https://wiki.seeedstudio.com/cn/recamera_develop_with_c_cpp)**）以防止内存消耗。
3.然后导航到 **/etc/init.d/**，将 **S93sscma-supervisor** 和 **S91sscma-node** 文件夹复制到 **/home/recamera/** 或其他位置进行备份，并删除原始的 **S93sscma-supervisor** 和 **S91sscma-node** 文件夹以防止内存消耗和程序占用。​

```
cd /etc/init.d/
sudo scp S93sscma-supervisor /home/recamera/
sudo scp S91sscma-node /home/recamera/
sudo rm -r S93sscma-supervisor
sudo rm -r S91sscma-node
```

## Run the program

在 reCamera 终端上以管理员身份在 **/home/recamera/** 下运行程序：

```
sudo ./Realtime_detection_http
```

## 结果

终端显示以下内容，表明程序正常运行：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/2.png" /></div>

您可以通过网页浏览器或 Postman 访问 http://192.168.42.1/modeldetector。reCamera 将立即拍摄一张照片并返回 YOLOv11 检测到的对象。​
浏览器：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/3.png" /></div>

Postman：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/4.png" /></div>

返回的信息包括以下数据：​​

- **Code**：1（运行中）
- **Msg**：错误消息
- **Initialize_camera_duration**：相机初始化持续时间，仅在首次访问时显示。​
- **Initialize_model_duration**：模型初始化持续时间，仅在首次访问时显示。​
- **Data**：
  - ​**Score**：检测置信度分数（0-1）
  - **Target**：检测到的对象名称
  - **Box**：[x1, y1, x2, y2]​：检测框坐标（以像素表示 [左、上、右、下] 边缘）
  - ​**Center**：[x, y]​：检测框的归一化中心位置（相对于图像宽度/高度的比例）
  - ​**Size**：[w, h]​：检测框的归一化宽度和高度（相对于图像尺寸的比例）
  - **Release_duration**：清除相机缓存所用时间（毫秒）
  - ​**Capture_duration**：图像获取持续时间（毫秒）
  - ​**Image_preprocessing_duration**：推理前图像准备持续时间（毫秒）
  - **Detection_duration**：模型检测持续时间（毫秒）（包括预处理、推理、后处理）
- ​**Duration**：程序总执行时间（毫秒）
- **Timestamp**：Unix 时间戳

终端将显示：​

- 相机初始化参数​：
  - 分辨率：**1920×1080**
  - 帧率：**5 fps**
  - 捕获通道：**通道 2**
- 捕获的图像大小（例如 **Jpeg size: 216149 (pixels)**）
- ​不同步骤期间的内存使用量（MB）：
  - 捕获前（**Memory usage**）
  - 释放中（**Memory usage_during_**）
  - 捕获后（**Memory usage_after**）
  - 图像预处理后（**Memory usage_before_model**）
  - 模型检测后（**Memory usage_after_model**）
- 模型检测持续时间（毫秒）
  - 预处理（例如 **pre: 9ms**）
  - 推理（例如 **infer: 40ms**）
  - 后处理（例如 **post:395ms**）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/5.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/6.png" /></div>

在 reCamera 终端上，检测到的图像可以自动保存：​
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/7.jpg" /></div>

您可以使用设备持续访问以获得实时检测结果，用于智能安防和监控等应用。

您可以在 **registerModelDetector()**（**Realtime_detection_http/src/http.cpp**）和 **model_detector()**（**Realtime_detection_http/src/model_detector.cpp**）中修改返回消息的格式。
您也可以在 **registerModelDetector()** 中调用 **initialize_model(const std::string& model_path)** 时使用您自己部署的模型，并在 **initialize_camera()**（**Realtime_detection_http/src/model_detector.cpp**）中修改相机初始化设置：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/8.png" /></div>

检测完成后，您可以按 Ctrl+C 终止操作。​程序将停止相机。​

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/9.png" /></div>

更多详细信息，请参考我们的 [GitHub 仓库](https://github.com/Seeed-Studio/OSHW-reCamera-Series)。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

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
