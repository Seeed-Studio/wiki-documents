---
description: pixy-cmucam5
title: pixy-cmucam5
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg
slug: /cn/pixy-cmucam5
last_update:
  date: 09/05/2023
  author: Matthew
---

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/1.jpg)

Pixy 是一个开源视觉传感器，可直接连接到 Arduino 板上。您可以教它找东西，安装在其它产品上使后者变成一个有“眼睛”的智能机器，比如智能门锁、智能手机、温度控制计等一切需要用到“眼睛”系统的东西。它强大的处理器上搭载着图像传感器，可以配合 PC 跟踪、分析许多有颜色的数据。

这个小东西是由 Charmed 实验室联合卡内基梅隆大学推出的Pixy 强大的处理器上搭载着图像传感器，会选择性的处理有用的信息，因为它采用以颜色为中心的办法——使该产品只是将特定颜色的物体的视觉数据发送给相互配合的微型控制器，而不是输出所有视觉数据以进行图像处理。所以您的 Arduino 板或其它微控制器很容易跟它交流，并滕出许多 CPU 来搞别的事情。

Pixy 是一款快速图像识别传感器，您可以“教”它去寻找物体，直接连接到 Arduino 或其他控制器即可使用。

Pixy 的出现解决了两个问题 :
- 图像传感器输出大量数据，每秒有几十兆字节。
- 大部分处理器不能处理这种数据或者处理效果非常不好，这样图像传感器就需要一个功能强劲的专用处理器才行。

此文从 [Pixy ( CMUCAM5 ) 入门学习](http://blog.csdn.net/shiyu16/article/details/76652645) 搬运，感谢 [CSDN](https://www.csdn.net/)

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a230r.1.14.51.325b525f1kmUzv&id=45771132745&ns=1&abbucket=4#detail)

## 产品特性

- Pixy 采用基于色度的颜色滤波算法 (hue-based color filtering algorithm) 来检测物体。计算图像传感器每个RGB像素的色度和饱和度将其作为主要的滤波参数。
- Pixy 可记忆多达 7 种不同的色彩饱和度。如果您需要更多色彩饱和度可用色码。
- Pixy 一次可以找到上百个物体。
- Pixy 处理一幅 640×640 图片仅需 1/50 秒。
- 每 20ms 即可更新一次检测物体的位置。
- 您可以教 Pixy 去感知您感兴趣的信息，把它彻底变成您独有的 Pixy。

## 规格参数

|      项目      |                 参数                 |
|:--------------:|:------------------------------------:|
|     处理器     | NXP LPC4330，204MHz 主频，双核处理器 |
|   图像传感器   |   Omnivision OV9715，1/4"，1280×800  |
|    镜头视野    |          水平 75°，垂直 47°          |
|    镜头类型    |     标准 M12 (可支持几种不同类型)    |
|      功耗      |             典型值 140mA             |
|    电源输入    |  USB 输入 (5V) 或不固定输入 (6V-10V) |
|       RAM      |              264K bytes              |
|      Flash     |               1M bytes               |
| 可用的输入输出 | UART 串口，SPI，I2C，USB，模拟，数字 |
|      尺寸      |        2.1'' × 1.75'' × 1.4''        |

## 使用方法

### 教 Pixy 识别一个物体

教 Pixy 识别一个物体是非常简单的。但让我们先说一下什么要的物体会更好的被 Pixy
所识别。Pixy 使用的是基于色调过滤算法 (hue-based color filtering algorithm) 来识别物体。因为 Pixy 使用色调 (hue)，物体应有明显的色调，下面的物体就很好，因为他们都有比较好、易辨识的色调。

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/2.png)

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/3.jpg)

下面有几个不好识别的物体，因为他们没有色调 (黑，白或灰) 或因为色调不明显。

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/4.JPG)

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/5.JPG)

把这条原则记在心里，挑选一个物体来教 Pixy。(通过电池或 USB 线给 Pixy 供电。当你给 Pixy 供电时，Pixy 会闪几下 LED。等待 LED 灭掉后再教 Pixy。) 用手按住 Pixy 顶部的按钮，等待大约 1 秒钟，LED 会变亮，先显示白色，然后是红色，然后是别的颜色，当显示红色时就松开按钮。当你松开按钮后，Pixy 会进入所谓的 “light pipe” 模式，LED 的颜色就是 Pixy 摄像头所看到的图像中间部分的颜色。

用 LED 的颜色来检查是否你的物体在 Pixy 视角的中心位置。当你感觉 LED 颜色和你的物体颜色很接近时，点击一下按键 (按下并释放按键，就像单击鼠标一样)。如果 Pixy 感觉你的物体色调足够好 (有足够的色彩饱和度 [enough color saturation]) 的话，LED 会闪烁，你现在已经操作完成。Pixy 现在已经“学会”了识别你的物体，并且会识别出具有相同颜色的物体。如果物体的色调没有那么好，LED 会熄灭 (不会闪) 并且 Pixy 并没有学到识别物体。如果 LED 没有闪，你可以换一个有更好色彩饱和度的物体。

### 多个标记 [Signatures]

Pixy 可以学习识别 7 个颜色标记。在上面部分，我们通过松开按键当 LED 变红色时，已经教了 Pixy 识别第一个颜色标记。如果我们继续按下按键，LED 会变为橙、黄等，来指示剩下的颜色标记。下面是颜色标记的顺序 :

- 1、红
- 2、橙
- 3、黄
- 4、绿
- 5、青
- 6、蓝
- 7、紫

颜色标记的编号是指你松开按键时的颜色。松开按键时 LED 颜色是黄色，那么你在教 Pixy 第三个标记。松开按键后 LED 变蓝色，你教的是第 6 个标记。这些颜色跟实际的物体色调没有任何关系。这些颜色只是用来识别标记编号。举例，标记 1 可能是黄色的物体，虽然标记 1 的提示颜色是红色，标记 2 可能是粉色物体，虽然它的提示颜色是橙色。

### 关于识别的其它说明

当你按下并松开按键的 LED 颜色和实际物体颜色匹配时，Pixy 会闪烁 LED，并且闪烁的亮度代表物体的色调的饱和程度。所以高亮度的闪烁是好的。试着教 Pixy 识别一个颜色鲜艳的物体—— Pixy 会通过闪烁 LED 来表示它是不是“高兴”。

如果你发现本打算教 Pixy 识别第 3 个颜色标记时，它却在学第 2 个。你可以按下按键直到 LED 关闭后再松开。这将是你取消 Pixy 学习模式的方法。你可以通过按住按键重新进入学习模式。

白平衡

某些类型的灯 (如白炽灯) 有略红的色调，而有些 (如荧光灯及常见的节能灯) 会有略蓝的色调。这样的光线会影响颜色标记。比如，如果你在白炽灯条件下教会颜色识别的物体，转移到荧光灯下，颜色标记可能不会被很好地识别。你可以重新标记或调节白平衡。

当你第一次上电时，Pixy 会花 5 秒钟的时间来监测需要用哪个合适的白平衡。然后它会关闭自动白平衡的功能。如果你想重新配置白平衡，按下按键直到 LED 变白后松开，这个过程会很快，做好松开的准备。Pixy 现在就是在自动白平衡摸索中。你可以拿一张白色的纸在 Pixy 前面，从而让 Pixy 可以进行白平衡调节，这将会花 2～3 秒钟的时间。然后你可以像点鼠标一样按下并松开按键。LED 会闪烁来表示白平衡调试成功，这样就完成了。

### 通过 PixyMon 来教 Pixy

你也可以通过 PixyMon 来教 Pixy。当你的物体很小或者你想更好的控制哪些像素被用到时会很有帮助。通过连接 USB 线并且运行 PixyMon。当 PixyMon 打开后，点击上面的 raw 按钮。

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/6.png)

现在拿着要教 Pixy 的物体在它前面，然后选择菜单 Action=》Set signature 1。

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/7.JPG)

现在选择哪一个区域是你想要的。

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/8.JPG)

如果成功，你应该可以在下面的命令区看到 “Success!”，并且还有一个数字是 0～100 之间来指示色调饱和度。色调饱和度高会有更高的数字。你现在可以监测颜色标记的效果了，通过点击厨师图标或选择 Action➜Cooked Video。Cooked Video (处理过的图像) 会显示哪些像素与颜色标记一致，并且如何组成识别的物体 :

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/9.JPG)

你可以通过这种方式教 Pixy 识别物体，最多可以有 7 种颜色标记。需要注意的是 Pixy 总是将标记记忆在 flash 里，所以当你下一次上电时，这些标记都是直接可用的。

## 软件部分

Pixy使用保存在ROM里的bootloader来上传最新的固件到Flash里。这使得Pixy不会“变砖”，也就是说你总可以从不成功的固件上传或不完美固件版本的升级中恢复你的Pixy。

### 第一次上传固件
请仔细按照本文操作。(如果你做错了某件事情或顺序颠倒，也不会有大问题，只是有可能会让你困惑。) OK，开始前做如下准备 :
- Pixy 上没有任何接线，没有电源，没有 USB，没有 IO，没有舵机等；
- 你的计算机没有运行 PixyMon (但是 PixyMon 已经在你的计算机上安装了)；
- 你自己的固件已经准备好了 (.hex文件)；

首先，将 USB 线插在计算机上 :

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/10.JPG)

然后按下 Pixy 顶部白色的按钮，并且在保持按下按键的同时插上 USB 线。要同时完成，这可能是最麻烦的一个环节了。

Pixy 上的 LED 会变的非常亮 (白色) 并且保持，这说明你已经进入了固件上传模式。因为这是第一次上传固件，计算机会提示你安装驱动，Pixy 在固件上传模式下使用单独的驱动，所以计算机之前并没有安装过相应的驱动。这个过程只针对 Windows 用户，如果你用的是 Mac，请直接跳过驱动安装部分。

Windows Vista、7或8 用户，会看到这样的下弹窗 :

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/11.png)

只需要等待驱动安装完成即可，期间你不想要做任何操作，仅仅是等待。

Windows XP 用户，会看到添加新硬件的对话框 :

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/12.JPG)

点击，**No,not this time** 然后点击 **下一步**。然后点击 **自动安装驱动**，然后点击 **下一步**

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/13.JPG)

驱动将会安装完成，等待完成后继续。  

### 打开PixyMon

首先打开 PixyMon，当 PixyMon 运行后，Pixy 上的 LED 会关闭，你会看到如下信息 **Pixy programming state detected** 在 PixyMon 的命令窗口区。如果你没有看到上面信息，有可能是驱动还在安装，再多等一段时间。

选择菜单 **File➜Program**，选取文件对话框将会弹出，浏览到你的新固件位置 (.hex文件) 然后选择相应文件，然后点击 OK。Pixy 会开始接受新固件，然后将其写入到 flash 中。这是非常快的，一般只需要 2～3 秒钟。当完成后，你会看到 **done!** 信息，你需要拔掉 USB 线然后重新插上来运行新固件。

下一次上传固件时，你的驱动已经安装，所以你只需要通过按键然后插上 USB 线进入固件上传模式。并且 PixyMon 可以已经在运行，这并不影响。

## 硬件部分

Pixy 被设计为可以与微控制器进行通讯，并且 Pixy 可以直接与 Arduino 进行通讯。它会以 1Mbits/s 的速度发送块信息给 Arduino，这意味着 Pixy 每秒可以发送超过 6000 个识别的物体或每帧 135 个被识别的物体 (Pixy 每秒可以处理 50 帧画面)。
OK，想让 Pixy 与 Arduino 进行通讯，使用 Pixy 自带的数据线连接 Pixy 到 Arduino。

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/14.JPG)

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/15.JPG)

接下来，下载 Arduino 库，打开 Arduino IDE 并且通过菜单 **Sketch->Import Library** 导入 Pixy 库文件，然后浏览到 Pixy 库文件解压的地方。

然后，通过菜单 **File➜Examples➜Pixy** 载入 “hello_world” 示例。上传代码到 Arduino 并且打开串口监视器。可以看到一些类似于下面的数据信息 :

```
Detected 1: block 0: sig: 1 x: 159 y: 109 width: 61 height:
61Detected 1: block 0: sig: 1 x: 173 y: 114 width: 60 height:
61Detected 1: block 0: sig: 1 x: 146 y: 111 width: 70 height: 65…
```

注意，这个示例中，如果 Pixy 运行了默认的固件，需要有一个物体被识别才会打印这些信息。

### Arduino API

在 Arduino 中使用 Pixy 是非常简单的，只需要包含 SPI 和 Pixy 的头文件 :

```
#include <SPI.h>
#include <pixy.h>
```

并且在 setup() 和 loop() 函数外面创建一个全局的 Pixy 实例变量 :

```
Pixy,pixy;
```

API包含一个函数 : getBlocks()，这个函数将返回 Pixy 所识别的物体数量。然后你就可以通过 pixy.blocks[] 的数组得到每个识别到的物体的数据 (每个数组成员对应一个被识别的物体)。每个成员 (i) 包含下列元素：
- pixy.blocks[i].signature : 被识别物体的标记编号；
- pixy.blocks[i].x : 被识别物体中心位置在 x 方向的坐标；
- pixy.blocks[i].y : 被识别物体中心位置在 y 方向的坐标；
- pixy.blocks[i].width : 被识别物体的宽度 (1～320)；
- pixy.blocks[i].height : 被识别物体的高度 (1～200)；
- pixy.blocks[i].print() : 一个成员函数用来打印被识别物体的信息到串口上；

所以 Pixy 与 Arduino 通讯很简单。

### 其它微控制器或设备

Pixy 支持多种方式输出被识别物体的数据。它支持 SPI，I2C，UART 或模拟/数字 I/O 口 (通过 10Pin 接口)。Pixy 还支持 USB2.0。你可以通过 PixyMon 的对话框来配置 Pixy 使用哪种方式。“Data out port” 参数决定了输出方式 (UART/SPI/Arduino SPI/I2C)。

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/16.png)

如果你将鼠标指针移动到 “Data out port” 文字上，会有提示信息显示各个类型的接口对应的文字：
- SPI : 这是默认的输出端口，使用了三根线 (IO 口的 1、3、4 引脚) 用于与 Arduino 通讯；
- I2C : 两线接口 (IO 口的 5 和 9 引脚)，可以支持一个主机与 127 个从机的通讯 (多达 127 个 Pixy)；
- UART : 这是普通的串口 (IO 口 1 和 4 引脚)。Pixy 通过 1 引脚 (输入) 接受数据，4 引脚 (输出) 发送数据；
- 模拟/数字 X : 这种方式将在 3 引脚输出 0～3.3V 的模拟电压，表示检测到物体的最大 X 值；
- 模拟/数字 Y : 这种方式将在 3 引脚输出 0～3.3V 的模拟电压，表示检测到物体的最大 Y 值；

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/17.JPG)

在牛角座的上边相应序号为左上角 1 引脚：

![](https://files.seeedstudio.com/wiki/pixy-cmucam5/img/18.png)

## 资源下载

* **[库文件]** [library](https://files.seeedstudio.com/wiki/pixy-cmucam5/res/library.zip)
* **[固件]** [pixy firmware update](https://files.seeedstudio.com/wiki/pixy-cmucam5/res/pixy%20firmware%20update.rar)
* **[Pixymon]** [pixymon_windows-2.0.9](https://files.seeedstudio.com/wiki/pixy-cmucam5/res/pixymon_windows-2.0.9.exe.zip)
