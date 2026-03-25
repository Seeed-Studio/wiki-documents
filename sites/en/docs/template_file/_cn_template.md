---
description: Create a doc page with rich content.
title: Wiki Template - CN version
keywords:
  - Template
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

> 此处完成产品的介绍

> 包括产品的简单介绍、优势、应用场景等。

> 产品的组成可以通过列表来展示。

| Item                  |Value      |Remarks    |
| :---------:           |:--------- |:---------:|
| CPU                   |           |           |
| Flash Memory          |           | KB        |
| Memory                |           |           |
| SRAM                  |           | KB        |
| Module Storage        |           |           |
| Carrier Board Storage |           |           |
| Wifi                  |           |           |
| Display               |           |           |
| Bluetooth             |           |           |

### Features部分用无序列表列出。

- 
- 
- 

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of 产品名称.

| Characteristic                         | Value   | Unit  |
| :-------:                              | :-----: | :---: |
| Operating Voltage                      |         | mW    |
| Power Consumption                      |         | mA    |
| Output Voltage/Current                 |         | mV/mA |
| Measurement Range                      |         |       |
| Field of View                          |         |       |
| Rate(这里可以是传感器返回数据的默认频率)  |         |       |
| Digital I/O Pins                       | 列出引脚 | -     |
| Analog I/O Pins                        | 列出引脚 | -     |
| I2C interface                          | 列出引脚 | -     |
| I2C Address(如果是IIC通信的话)          |         |       |
| SPI interface                          | 列出引脚 | -     |
| UART interface                         | 列出引脚 | -     |
| Power supply and downloading interface | Type-C  | -     |
| Dimensions                             |         | mm    |

> 在下方可以放上引脚图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" style={{width:1000, height:'auto'}}/></div>


## Getting Started

> 如果是产品类，可以直接从下面开始：

### Equipment Installation

> 如果设备需要安装部件或者组装后才可使用，请在这里填写步骤。

### Environmental Preparation

> 如果产品对系统环境有要求，需要介绍支持系统下的环境配置，例如驱动的安装和安装包的提供等的内容。

##### install -Windows

##### install -MacOS

### Boot

> 如果设备有烧录固件的方法，请在这里提供步骤。

### Reset

> 如果设备有重置的方法，请在这里提供步骤。

:::note

    > 使用设备的注意事项也可以在这里提。

:::

## Arduino Library Overview

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

> 请大概介绍产品使用的库，比如是基于什么编写的，是否可以直接通过Arduino IDE下载？除了这种方法以外请附上GitHub的下载链接。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://files.seeedstudio.com/purchase" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Function

Before we get started developing a sketch, let's look at the available functions of the library.

- `函数名称` —— 功能、作用、可选参数、输入输出
- 
- 
- 

### Default Variables
> 请介绍出现的全局变量

### Installation

- **Method One**

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

- **Method Two**

The library manager was added starting with Arduino IDE versions 1.5 and greater (1.6.x). It is found in the 'Sketch' menu under 'Include Library', 'Manage Libraries...'

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Library.png" style={{width:800, height:'auto'}}/></div>

When you open the Library Manager you will find a large list of librar	ies ready for one-click install. To find a library for your product, search for the product name or a keyword such as 'k type' or 'digitizer', and the library you want should show up. Click on the desired library, and the 'Install' button will appear. Click that button, and the library should install automatically. When installation finishes, close the Library Manager.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/library_manager.png" style={{width:1000, height:'auto'}}/></div>



### Upgrading the Package

> 介绍未来的升级方式和操作步骤。


## Arduino / XIAO Example

Now that we have our library installed and we understand the basic functions, let's run some examples for our 产品名称 to see how it behaves.

> 将重复且相同的步骤放前面。

**Step 1.** Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

**Step 2.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32-C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

- If you want to use **Seeeduino V4.3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino_v4.2/)** to finish adding.

### Demo 1 建议是使用的模块名字或者是项目名

> 示例1的功能和应用场景介绍。

#### Materials Required

> 此处是运行本示例需要的材料和购买链接

<div class="table-center">
	<table align="center">
		<tr>
			<th>Name</th>
			<th>Name</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

```cpp
//文件名

代码段

```

> 此代码可以进行怎么样的修改以完成怎么样的操作。（介绍可延伸性）介绍demo中是否有一些难以理解函数的用法，可在此加以说明。

> 贴图，效果展示。

例

Opening your serial monitor to a baud rate of 9600 should show the distance between the sensor and the object it's pointed at in both millimeters and feet. The output should look something like the below image.

### Demo 2 建议是使用的模块名字或者是项目名

> 示例2的功能和应用场景介绍。

#### Materials Required

> 此处是运行本示例需要的材料和购买链接

<div class="table-center">
	<table align="center">
		<tr>
			<th>Name</th>
			<th>Name</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


```cpp
//文件名

代码段

```

> 此代码可以进行怎么样的修改以完成怎么样的操作。（介绍可延伸性）介绍demo中是否有一些难以理解函数的用法，可在此加以说明。

> 贴图，效果展示。

例

Opening your serial monitor to a baud rate of 9600 should show the distance between the sensor and the object it's pointed at in both millimeters and feet. The output should look something like the below image.

## Python Package Overview

:::tip

If this is your first time using Raspberry Pi, we highly recommend you to refer to [Getting Started with Raspberry Pi](https://tinkergen-helper.yuque.com/tinkergen_helper/slgacm/tn0wlt).

:::

> 请在正文开始注明兼容性，测试使用的树莓派型号、系统版本等信息。还有使用的Python信息。

> 然后加一些简单的介绍作为开场。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="超链接" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Function

Before we get started developing a sketch, let's look at the available functions of the library.

- `函数名称` —— 功能、作用、可选参数、输入输出
- 
- 
- 

### Installation

#### Online one-click installation

One-click installation, quick start, what ever you call, with the single command below, we can install/update all dependencies and latest grove.py.

:::caution

If you are using Raspberry Pi with Raspberrypi OS >= Bullseye, you cannot use this command line.

:::

```sh
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::info

if everything goes well, you will see the following notice.

```sh
Successfully installed grove.py-0.5
#######################################################
Lastest Grove.py from github install complete   !!!!!
#######################################################
```

:::

#### Step by step installation

Besides the one-click installation, you can also install all the dependencies and latest grove.py step by step.

:::caution

If you are using Raspberry Pi with Raspberrypi OS >= Bullseye, you have to use this command line only with Python3.

:::

```sh
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python3
sudo pip3 install .
```

### Dependencies

> 介绍导入的库和依赖包信息。

### Default Variables

> 请介绍出现的全局变量。

### Class

> 请介绍设置的python代码类。

### Upgrading the Package

> 介绍未来的升级方式和操作步骤。

## Raspberry Pi Example

Now that we have our library installed and we understand the basic functions, let's run some examples for our 产品名称 to see how it behaves.

> 将重复且相同的步骤放前面。

**Step 1.** 


**Step 2.** 

**Step 3.** 

### Demo 1 建议是使用的模块名字或者是项目名

> 示例1的功能和应用场景介绍。

#### Materials Required

> 此处是运行本示例需要的材料和购买链接

<div class="table-center">
	<table align="center">
		<tr>
			<th>Name</th>
			<th>Name</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

```cpp
//文件名

代码段

```

> 此代码可以进行怎么样的修改以完成怎么样的操作。（介绍可延伸性）介绍demo中是否有一些难以理解函数的用法，可在此加以说明。

> 贴图，效果展示。

### Demo 2 建议是使用的模块名字或者是项目名

> 示例2的功能和应用场景介绍。

#### Materials Required

> 此处是运行本示例需要的材料和购买链接

<div class="table-center">
	<table align="center">
		<tr>
			<th>Name</th>
			<th>Name</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>



```cpp
//文件名

代码段

```

> 此代码可以进行怎么样的修改以完成怎么样的操作。（介绍可延伸性）介绍demo中是否有一些难以理解函数的用法，可在此加以说明。

> 贴图，效果展示。
例


## Troubleshooting

> 我们在收到研发的内容之后，可以记录下自己在执行demo中遇到的问题，然后记录在此，帮助用户少踩坑。

## Resources

- **[文件类型]** [文件名称](链接)
- **[文件类型]** [文件名称](链接)
- **[文件类型]** [文件名称](链接)

<!-- ## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p> -->

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


## 附录

### HTML表格

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th colspan="4">Button Header</th>
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

### HTML表格超链接

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

### HTML表格文字超链接

<a href="购买链接" target="_blank"><b>GET ONE NOW</b></a>


### 锚点

<span id="jump1">Placeholders</span>

[**Getting Started -- Special notes on command line -- Placeholders**](#jump1)

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

上面这段话应该放在需要高亮Wiki的最前面。

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.


<span style={{backgroundColor: 'red'}}>Foo</span>

## Tabs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
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

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::


:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::


:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::


:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::


:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

## 插入视频

<div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>








## 可缩略文本

<details>

<summary>Click here to preview the full code</summary>

</details>


## 在线原理图预览

<div className="altium-ecad-viewer" data-project-src="RAR格式的压缩包URL" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Learn More

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_ESP32C3_WiFi_Usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div>

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
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      		<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
		</tr>
	</table>
</div>








