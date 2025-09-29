---
description: 开始使用 EcoEye–嵌入式视觉摄像头
title: 开始使用 EcoEye–嵌入式视觉摄像头
keywords:
- EcoEye–Embedded_Vision_Camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Get_Started_with_EcoEye_Embedded_Vision_Camera
last_update:
  date: 11/24/2023
  author: Yvonne
---

# EcoEye–嵌入式视觉摄像头简介

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/1-101991121-EcoEye-%E2%80%93-Embedded-Vision-Camera-first.jpg"/></div>

EcoEye 是一款具有板载机器视觉功能的摄像头，采用便携且防水的外壳设计，适用于远程部署。基于 openMV H7 Plus Cam，它易于设置并适用于多种应用场景。其内部电源管理和控制系统支持长期运行，并允许集成太阳能板、众多传感器以及其他外部设备。该摄像头经过全面的现场测试，测试结果已发表在科学文章中。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/EcoEye-Embedded-Vision-Camera-p-5843.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## 入门指南

在开始本指南之前，为了简化操作，请先熟悉 [用户指南](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf) 中描述的 EcoEye 的硬件和软件。

### 准备硬件

打开 EcoEye 摄像头，并在指定的电池仓中插入 3 节充满电且容量相同的 18650 锂离子电池，同时注意极性标记。在 openMV 板上安装一张格式化的 micro-SD 卡，至少具有 8GB 的存储容量。

### 准备软件

下载并安装 [openMV IDE](https://openmv.io/pages/download) 到您的电脑。打开软件，并使用 USB-A 到 USB-C 数据线连接电脑与 EcoEye 摄像头的外部接口。按下推按钮一次，前侧的 LED 应闪烁绿色几次，然后闪烁白色半秒。此时，电脑应识别设备卡并打开一个窗口显示 SD 卡上的内容。您现在可以复制所有脚本文件，文件可从 [这里](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip) 下载。同时，IDE 界面左下角的插头符号旁应出现一个 USB 图标。点击此按钮以建立与摄像头的连接。如果提示更新固件，请点击“是”并按照步骤完成更新。

打开 ecomain.py 代码并通过点击左下角的绿色播放按钮运行它。有时会出现 OSError 错误，只需忽略并再次尝试即可。摄像头现在处于连续模式运行，不保存任何图像，但会在 IDE 帧缓冲区中显示图像。通过将 MODE 参数更改为 2 并再次运行脚本，摄像头将保存所有捕获的图像。

为了使摄像头无需连接电脑和 IDE 即可运行，必须将调整参数后的 ecomain.py 脚本重命名为 main.py，并仍然保存在 SD 卡的根目录中。这也可以通过在 openMV IDE 的标签中导航到 Tools > Save open script to OpenMV Cam (as main.py) 来完成，同时仍与摄像头连接。

在没有连接 IDE 的情况下开始部署时，用户必须按下推按钮一次以启动系统，当前侧 LED 显示蓝色时再次按下按钮以确认运行开始。同样地，要停止部署并关闭系统，用户必须先按下推按钮一次，然后在浅蓝色 LED 亮起时再次按下按钮（可能需要几秒钟）。长按推按钮将强制关闭系统，但除非必要，不建议使用此方法。

### 创建您的第一个目标检测应用

在本分步指南中，我们将使用 EcoEye 摄像头收集数据，通过手动标识数据集中的目标使用 Edge Impulse 训练模型，最后在摄像头上运行创建的模型并观察结果。

#### 数据收集

将摄像头放置在一个平坦的单色表面前，例如墙壁、白板，或者直接面向桌面。将其连接到 IDE 并运行 MODE 0 以查看捕获的图像。如果需要，重新调整摄像头位置，确保背景前没有其他物体出现。在帧缓冲区中查看实时图像时，通过旋转镜头仔细调整焦距。一旦找到完美焦距，停止脚本并收集 2 到 3 种不同类型的目标，您希望对其进行分类。

现在，将 MODE 参数更改为 2 并再次运行脚本。帧缓冲区中显示的图像也会保存到 SD 卡中。在脚本运行期间，将目标以不同位置、不同地点和不同组合放置在摄像头前。收集大约 100 张优质图像后，停止脚本并重置 openMV 摄像头（在 Tools > Reset 中）以查看所有保存图像的文件夹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture2.png" alt="pir" width={800} height="auto" /></p>

#### 训练模型


在为模型选择了约 100 张图像后，登录您的 [Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fprofile%2Fprojects&err=Your%20session%20expired%2C%20please%20log%20in%20again) 账户并创建一个新项目。在左侧菜单中选择“数据采集”，将选定的图像上传为数据集。接下来，必须手动为训练和测试数据集中的每张图像进行标注。点击图像旁边的三个点并选择“编辑标签”即可完成标注。确保为每种对象始终使用相同的名称，可以通过过滤按钮进行检查。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture3.png" alt="pir" width={800} height="auto" /></p>

接下来，导航到左侧菜单中的“创建脉冲”。添加一个处理块类型为“图像”和一个学习块类型为“对象检测（图像）”，然后保存脉冲。之后，左侧菜单中的“脉冲设计”下应该会出现灰色的“图像”和“对象检测标签”。在新的“图像”标签中，保持所有设置不变，只需点击“保存参数”和“生成特征”按钮即可。完成此过程后，可以在“对象检测”标签中训练模型，暂时保持默认参数。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture4.png" alt="pir" width={800} height="auto" /></p>

要测试新模型的性能，请转到左侧菜单中的“模型测试”标签并点击“全部分类”。这将运行对象检测模型，测试数据集是最初标注但未用于训练的数据，因此对模型来说是未见过的。一旦完成，结果将显示模型的准确性以及错误分类的对象。如果最终得分不令人满意，可以改进图像数据集或调整训练参数。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture5.png" alt="pir" width={800} height="auto" /></p>

要将模型导出到 ecoEye 相机，请导航到左侧菜单中的“部署”标签。搜索并选择“openMV Library”，然后点击“构建”。从自动下载的 zip 文件中提取文件，并将 labels.txt 和 trained.tflite 文件复制到 SD 卡中。

#### 运行模型

现在我们可以使用训练好的模型运行相机进行自动对象分类。在 ecomain.py 文件中，将参数更改为 MODE = 1, sensor_windowing = True, classify_mode = “objects” 和 indicators = True。运行脚本时，请注意在蓝色 LED 亮起或串行终端打印出“等待第二次按钮按下...”时按下按钮。帧缓冲区现在应该显示捕获的图像，并在模型检测到其训练对象时在对象周围显示边界框。这些图像也会保存到 SD 卡中，检测结果及边界框的坐标会保存到一个 csv 文件中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture6.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture8.png" alt="pir" width={800} height="auto" /></p>

此应用程序也可以在不连接 IDE 的情况下运行，只需将 ecomain.py 重命名为 main.py，断开连接线，并通过两次按按钮的方式启动脚本即可。

## 资源

- **[PDF]** [EcoEye – 嵌入式视觉摄像头数据手册](https://files.seeedstudio.com/products/101991121/EcoEye%20-%20Embedded%20Vision%20Camera%20datasheet.pdf)
- **[PDF]** [EcoEye – 嵌入式视觉摄像头用户手册](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf)

- **[CODE]** [EcoEye – 嵌入式视觉摄像头脚本](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip)



## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>