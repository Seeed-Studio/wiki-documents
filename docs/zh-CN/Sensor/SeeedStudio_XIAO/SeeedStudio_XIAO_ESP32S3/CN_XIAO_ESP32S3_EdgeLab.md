---
description: SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3.
title: SenseCraft 模型助手部署
keywords:
- esp32s3
- xiao
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_edgelab
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# 将 SenseCraft 模型助手部署在 XIAO ESP32S3 (Sense)

## 介绍
[SenseCraft模型助手](https://edgelab.readthedocs.io/en/latest/)是一个专注于嵌入式人工智能的开源项目。我们针对现实世界场景优化了OpenMMLab的优秀算法，并使实现更加用户友好，在嵌入式设备上实现更快、更准确的推理。

##所需硬件
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio Round Display for XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Type-C Cable

## 所需软件
- ESP-IDF v4.4
- SenseCraft Model Assistant v0.1.0
- 示例代码： [SenseCraft模型助手示例-esp32](https://github.com/Seeed-Studio/edgelab-example-esp32)

##如何安装
###安装ESP-IDF
###安装ESP IDF

请按照
[ESP-IDF入门指南](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)
以设置工具链和ESP-IDF本身。

接下来的步骤假设此安装成功并且
[设置IDF环境变量](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables)。
* the `IDF_PATH` environment variable is set
* the `idf.py` and Xtensa-esp32 tools (e.g., `xtensa-esp32-elf-gcc`) are in `$PATH`

### 获取子模块

cd到项目的根目录，然后运行以下命令获取子模块：

```
git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32
git submodule init
git submodule update
```

##如何使用

###构建示例

转到示例目录(`examples/<example_name>`) 并构建示例。

设置IDF_TARGET（(对于ESP32-S3目标，需要IDF版本 `release/v4.4`)

```
idf.py set-target esp32s3
```

配置示例

```
idf.py menuconfig
```

- 在中选择摄像头模块 `Component config` -> `SenseCraft Model Assistant Configuration` -> `Camera Configuration` -> `Select Camera Pinout`
![img](https://raw.githubusercontent.com/Seeed-Studio/edgelab-example-esp32/main/docs/_static/esp32/images/esp32s3-xiao-camera.png)
- 在中选择LCD模块`Component config` -> `SenseCraft Model Assistant Configuration` -> `LCD Configuration` -> `Select LCD Pinout`
![img](https://raw.githubusercontent.com/Seeed-Studio/edgelab-example-esp32/main/docs/_static/esp32/images/esp32s3-xiao-lcd.png)


若要生成此，请运行：

```
idf.py build
```


### 加载并运行示例

T要闪存（'/dev/ttyUSB0'替换为设备串行端口）：
```
idf.py --port /dev/ttyUSB0 flash
```

监控串行输出：
```
idf.py --port /dev/ttyUSB0 monitor
```


## 技术支持和产品讨论

.

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


