---
description: 创建一个包含丰富内容的文档页面。
title: Wiki 模板 - 中文版本
keywords:
  - 模板
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/name_your_website
last_update:
  date: 03/03/2024
  author: 黎孟度
createdAt: '2024-03-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/name_your_website/
---

> 产品图：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png" style={{width:1000, height:'auto'}}/></div>


> 购买链接附上：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/purchase" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

> 此处完成产品的介绍

> 包括产品的简单介绍、优势、应用场景等。

> 产品的组成可以通过列表来展示。

| 项目                  |数值      |备注      |
| :---------:           |:--------- |:---------:|
| CPU                   |           |           |
| Flash Memory          |           | KB        |
| Memory                |           |           |
| SRAM                  |           | KB        |
| 模组存储              |           |           |
| 载板存储              |           |           |
| Wifi                  |           |           |
| 显示屏                |           |           |
| Bluetooth             |           |           |

### Features 部分用无序列表列出。

- 
- 
- 

## 硬件概览

在开始之前，了解产品的一些基本参数非常重要。下表提供了产品名称的特性信息。

| 特性                                  | 数值    | 单位  |
| :-------:                              | :-----: | :---: |
| 工作电压                              |         | mW    |
| 功耗                                  |         | mA    |
| 输出电压/电流                         |         | mV/mA |
| 测量范围                              |         |       |
| 视场角                                |         |       |
| 速率(这里可以是传感器返回数据的默认频率) |         |       |
| 数字 I/O 引脚                         | 列出引脚 | -     |
| 模拟 I/O 引脚                         | 列出引脚 | -     |
| I2C 接口                              | 列出引脚 | -     |
| I2C 地址(如果是 IIC 通信的话)         |         |       |
| SPI 接口                              | 列出引脚 | -     |
| UART 接口                             | 列出引脚 | -     |
| 供电与下载接口                        | Type-C  | -     |
| 尺寸                                  |         | mm    |

> 在下方可以放上引脚图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" style={{width:1000, height:'auto'}}/></div>


## 入门指南

> 如果是产品类，可以直接从下面开始：

### 设备安装

> 如果设备需要安装部件或者组装后才可使用，请在这里填写步骤。

### 环境准备

> 如果产品对系统环境有要求，需要介绍支持系统下的环境配置，例如驱动的安装和安装包的提供等的内容。

##### 安装 -Windows

##### 安装 -MacOS

### 启动

> 如果设备有烧录固件的方法，请在这里提供步骤。

### 重置

> 如果设备有重置的方法，请在这里提供步骤。

:::note

    > 使用设备的注意事项也可以在这里提。

:::

## Arduino 库概览

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

> 请大概介绍产品使用的库，比如是基于什么编写的，是否可以直接通过 Arduino IDE 下载？除了这种方法以外请附上 GitHub 的下载链接。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://files.seeedstudio.com/purchase" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 函数

在开始编写示例程序之前，我们先来看一下该库中可用的函数。

- `函数名称` —— 功能、作用、可选参数、输入输出
- 
- 
- 

### 默认变量
> 请介绍出现的全局变量

### 安装

- **方法一**

既然你已经下载好了 zip 格式的库文件，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 zip 文件，如果库安装正确，你会在提示窗口中看到 **Library added to your libraries**。这意味着库已经成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

- **方法二**

从 Arduino IDE 1.5 及更高版本（1.6.x）开始加入了库管理器。它位于“Sketch”菜单下的“Include Library”中的“Manage Libraries...”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Library.png" style={{width:800, height:'auto'}}/></div>

打开库管理器后，你会看到一个庞大的库列表，可以一键安装。要为你的产品找到对应的库，可以搜索产品名称或诸如“k type”或“digitizer”之类的关键字，你需要的库就会显示出来。点击目标库，会出现“Install”按钮。点击该按钮，库就会自动安装。安装完成后，关闭库管理器即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/library_manager.png" style={{width:1000, height:'auto'}}/></div>



### 升级库包

> 介绍未来的升级方式和操作步骤。


## Arduino / XIAO 示例

现在我们已经安装好了库并了解了基本函数，接下来运行一些针对产品名称的示例，看看它的表现。

> 将重复且相同的步骤放前面。

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

**步骤 2.** 选择你的开发板型号并将其添加到 Arduino IDE 中。

- 如果你想在后续示例中使用 **Seeed Studio XIAO SAMD21**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)** 完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO RP2040**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO nRF52840**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO ESP32-C3**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO ESP32S3**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

- 如果你想在后续示例中使用 **Seeeduino V4.3**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/Seeeduino_v4.2/)** 完成添加。

### Demo 1 建议是使用的模块名字或者是项目名

> 示例 1 的功能和应用场景介绍。

#### 所需材料

> 此处是运行本示例需要的材料和购买链接

<div class="table-center">
	<table align="center">
		<tr>
			<th>名称</th>
			<th>名称</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

```cpp
//文件名

代码段

```

> 此代码可以进行怎么样的修改以完成怎么样的操作。（介绍可延伸性）介绍 demo 中是否有一些难以理解函数的用法，可在此加以说明。

> 贴图，效果展示。

例

将串口监视器的波特率设置为 9600 后，应该会显示传感器与其指向物体之间的距离，单位为毫米和英尺。输出应类似于下图所示。

### Demo 2 建议是使用的模块名字或者是项目名

> 示例 2 的功能和应用场景介绍。

#### 所需材料

> 此处是运行本示例需要的材料和购买链接

<div class="table-center">
	<table align="center">
		<tr>
			<th>名称</th>
			<th>名称</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


```cpp
//文件名

代码段

```

> 此代码可以进行怎么样的修改以完成怎么样的操作。（介绍可延伸性）介绍 demo 中是否有一些难以理解函数的用法，可在此加以说明。

> 贴图，效果展示。

例

将串口监视器的波特率设置为 9600 后，应该会显示传感器与其指向物体之间的距离，单位为毫米和英尺。输出应类似于下图所示。

## Python 包概览

:::tip

如果这是你第一次使用 Raspberry Pi，我们强烈建议你参考 [Getting Started with Raspberry Pi](https://tinkergen-helper.yuque.com/tinkergen_helper/slgacm/tn0wlt)。

:::

> 请在正文开始注明兼容性，测试使用的树莓派型号、系统版本等信息。还有使用的 Python 信息。

> 然后加一些简单的介绍作为开场。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="超链接" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 函数

在开始编写示例程序之前，我们先来看一下该库中可用的函数。

- `函数名称` —— 功能、作用、可选参数、输入输出
- 
- 
- 

### 安装

#### 在线一键安装

一键安装、快速开始，无论你怎么称呼，只需使用下面这一条命令，我们就可以安装/更新所有依赖以及最新的 grove.py。

:::caution

如果你使用的是 Raspberry Pi 且系统为 Raspberrypi OS >= Bullseye，则不能使用此命令行。

:::

```sh
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::info

如果一切顺利，你将会看到如下提示。

```sh
Successfully installed grove.py-0.5
#######################################################
Lastest Grove.py from github install complete   !!!!!
#######################################################
```

:::

#### 分步安装

除了使用一键安装，你也可以一步一步地安装所有依赖以及最新的 grove.py。

:::caution

如果你使用的是 Raspberry Pi 且系统为 Raspberrypi OS >= Bullseye，则必须只在 Python3 下使用此命令行。

:::

```sh
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python3
sudo pip3 install .
```

### 依赖

> 介绍导入的库和依赖包信息。

### 默认变量

> 请介绍出现的全局变量。

### 类

> 请介绍设置的 python 代码类。

### 升级软件包

> 介绍未来的升级方式和操作步骤。

## Raspberry Pi 示例

现在我们已经安装好了库并了解了基本函数，接下来就为我们的 产品名称 运行一些示例，看看它的表现。

> 将重复且相同的步骤放前面。

**Step 1.** 


**Step 2.** 

**Step 3.** 

### Demo 1 建议是使用的模块名字或者是项目名

> 示例 1 的功能和应用场景介绍。

#### 所需材料

> 此处是运行本示例需要的材料和购买链接

<div class="table-center">
	<table align="center">
		<tr>
			<th>名称</th>
			<th>名称</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

```cpp
//文件名

代码段

```

> 此代码可以进行怎么样的修改以完成怎么样的操作。（介绍可延伸性）介绍 demo 中是否有一些难以理解函数的用法，可在此加以说明。

> 贴图，效果展示。

### Demo 2 建议是使用的模块名字或者是项目名

> 示例 2 的功能和应用场景介绍。

#### 所需材料

> 此处是运行本示例需要的材料和购买链接

<div class="table-center">
	<table align="center">
		<tr>
			<th>名称</th>
			<th>名称</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>



```cpp
//文件名

代码段

```

> 此代码可以进行怎么样的修改以完成怎么样的操作。（介绍可延伸性）介绍 demo 中是否有一些难以理解函数的用法，可在此加以说明。

> 贴图，效果展示。
例


## 故障排除

> 我们在收到研发的内容之后，可以记录下自己在执行 demo 中遇到的问题，然后记录在此，帮助用户少踩坑。

## 资源

- **[文件类型]** [文件名称](链接)
- **[文件类型]** [文件名称](链接)
- **[文件类型]** [文件名称](链接)

<!-- ## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p> -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


## 附录

### HTML 表格

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th colspan="4">按钮排针</th>
		</tr>
		<tr>
			<td rowspan="6"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/4_3.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center">1</td>
			<td align="center">PWR BTN</td>
			<td align="center">7</td>
			<td align="center">AUTO ON</td>
		</tr>
		<tr>
			<td align="center">2</td>
			<td align="center">GND</td>
			<td align="center">8</td>
			<td align="center">DIS</td>
		</tr>
		<tr>
			<td align="center">3</td>
			<td align="center">FC REC</td>
			<td align="center">9</td>
			<td align="center">UART TXD</td>
		</tr>
		<tr>
			<td align="center">4</td>
			<td align="center">GND</td>
			<td align="center">10</td>
			<td align="center">UART RXD</td>
		</tr>
		<tr>
			<td align="center">5</td>
			<td align="center">SYS RET</td>
			<td align="center">11</td>
			<td align="center">LED +</td>
		</tr>
		<tr>
			<td align="center">6</td>
			<td align="center">GND</td>
			<td align="center">12</td>
			<td align="center">LED -</td>
		</tr>
	</table>
</div>

### 注释

<!--这是注释-->

### HTML 表格超链接

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

### HTML 表格文字超链接

<a href="购买链接" target="_blank"><b>立即获取</b></a>


### 锚点

<span id="jump1">占位符</span>

[**入门指南 -- 命令行特别说明 -- 占位符**](#jump1)

### 文字颜色高亮

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

上面这段话应该放在需要高亮 Wiki 的最前面。

<Highlight color="#25c2a0">Docusaurus 绿色</Highlight> 和 <Highlight color="#1877F2">Facebook 蓝色</Highlight> 是我最喜欢的颜色。


<span style={{backgroundColor: 'red'}}>Foo</span>

## 选项卡

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    这是一个苹果 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    这是一个橙子 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    这是一个香蕉 🍌
  </TabItem>
</Tabs>

### 分栏窗口

<Tabs>
<TabItem value="Windows" label="Windows">

</TabItem>

<TabItem value="MacOS" label="MacOS">

</TabItem>

<TabItem value="Linux" label="Linux">

</TabItem>

</Tabs>

## 警告与提示

:::note

一些带有 _Markdown_ `syntax` 的**内容**。查看 [这个 `api`](#)。

:::


:::tip

一些带有 _Markdown_ `syntax` 的**内容**。查看 [这个 `api`](#)。

:::


:::info

一些带有 _Markdown_ `syntax` 的**内容**。查看 [这个 `api`](#)。

:::


:::caution

一些带有 _Markdown_ `syntax` 的**内容**。查看 [这个 `api`](#)。

:::


:::danger

一些带有 _Markdown_ `syntax` 的**内容**。查看 [这个 `api`](#)。

:::

## 插入视频

<div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>








## 可缩略文本

<details>

<summary>点击此处预览完整代码</summary>

</details>


## 在线原理图预览

<div className="altium-ecad-viewer" data-project-src="RAR 格式的压缩包 URL" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 了解更多

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_WiFi_Usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

## 无框线表格

<tr class="form_without_frame">
	<td class="form_without_frame"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" style={{width:250, height:'auto'}}/></div></td>
	<td class="form_without_frame"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" style={{width:250, height:'auto'}}/></div></td>
	<td class="form_without_frame"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" style={{width:250, height:'auto'}}/></div></td>
</tr>

## 无底色表格

<div class="table-center">
	<table align="center">
    	<tr class="table-trnobg">
			<th class="table-trnobg"></th>
      		<th class="table-trnobg"></th>
      		<th class="table-trnobg"></th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="" style={{width:300, height:'auto'}}/></div></td>
      		<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}></font></td>
			<td class="table-trnobg"><font size={"1"}></font></td>
			<td class="table-trnobg"><font size={"1"}></font></td>
    	</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      		<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>








