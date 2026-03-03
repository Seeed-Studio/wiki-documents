---
description: 预编译 Arduino 库的使用方法
title: 预编译 Arduino 库的使用方法
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Software-Static-Library
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

<!-- # Arduino Tutorials - How to Use Static (Pre-compiled) Libraries in Arduino -->

为了提高 Arduino 大型项目的编译时间，您可以使用 Arduino IDE（>=1.8.6）中引入的较新功能之一，即为您的 Arduino 项目使用**静态（预编译）库**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/Banner.png"/></div>

**为什么使用预编译库？**

- 预编译库允许在不暴露源代码的情况下共享库的功能。

- 预编译库的唯一限制是它们只对已编译的开发板或 MCU 有效。

## 入门指南

让我们以一个 Arduino 库为例，将其转换为预编译库。这里我将使用 [**Seeed_Arduino_LIS3DHTR**](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR) 作为 Arduino 库，使用 [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 作为开发板选项。

**步骤1. Arduino 库配置**

导航到库的根路径，打开 `library.properties` 文件，添加以下内容并保存文件。

```properties
dot_a_linkage=true
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/dot.png"/></div>

**步骤2. Arduino IDE 设置**

打开 Arduino IDE，导航到**设置**。确保勾选"**在以下过程中显示详细输出：编译和上传**"。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/Arduino-IDE.png"/></div>

**步骤3. 获取临时构建位置和开发板框架标志**

选择 **Wio Terminal** 作为开发板。编译任何包含**您的库的 #include 指令**的项目。这可以只是一个最基本的项目。在我的例子中，是 `#include<LIS3DHTR.h>`。

编译完成后，检查编译日志窗口并找到临时构建文件夹的位置。这应该在输出的最后一个命令中打印出来。例如，在我的例子中，命令是：

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-size -A /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343/pre-compile.ino.elf
```

因此**临时构建路径**是：

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/buildpath.png"/></div>

复制此路径，稍后将使用。还有一点需要注意的是，要找到 **`-mcpu=`** 标志以获取为所选开发板编译的开发板框架标志。在我的例子中，Wio Terminal 标记为：

```sh
-mcpu=cortex-m4
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/mcu.png"/></div>

**步骤4. 将 `.a` 文件复制到库文件夹**

导航到临时构建路径文件夹，然后导航到 `libraries` -> `Seeed_Arduino_LIS3DHTR`，您应该看到一个 `Seeed_Arduino_LIS3DHTR.a` 文件。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/a.png"/></div>

将 `Seeed_Arduino_LIS3DHTR.a` 文件从 &#123;临时构建文件夹&#125;/libraries/&#123;库名称&#125; 文件夹复制到您的库文件夹的 **Arduino/libraries/&#123;库名称&#125;/src/&#123;开发板框架标志&#125;** 子文件夹中。在我的例子中，它被放置在 **`src/cortex-m4`** 下。

重命名 `.a` 文件，在名称开头添加"lib"。在我的例子中，它变成了 `libSeeed_Arduino_LIS3DHTR.a`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/library.png"/></div>

**步骤5. 添加预编译标志**

现在，我们可以导航回 `library.properties`，删除 `dot_a_linkage=true` 并添加以下标志：

```properties
precompiled=true
ldflags=-lSeeed_Arduino_LIS3DHTR
```

其中 `ldflags` 是 `-l+{库名称}`。

:::note
    注意，您不需要在标志中指定文件名的"lib"部分。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/pre-compiled.png"/></div>

现在，您可以从库文件夹的 `src` 中删除 **`.cpp`** 文件，Arduino IDE 将使用预编译库！

### 遇到问题？

由于某些原因，一些开发板可能需要将 `.a` 文件进一步放在 `src` 文件内部。例如，Wio Terminal 就是这种情况。如果您遇到同样的问题，请继续阅读。

通过查看编译日志信息，您会看到 IDE 正在寻找的路径：

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/path.png"/></div>

```
/Users/ansonhe/Documents/Arduino/libraries/Seeed_Arduino_LIS3DHTR/src/cortex-m4/fpv4-sp-d16-hard" does not exist
```

所以只需要将 `libSeeed_Arduino_LIS3DHTR.a` 文件放在 `cortex-m4` 下的 `fpv4-sp-d16-hard` 内。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/finalpath.png"/></div>

现在，Arduino 将选择预编译库路径！

这里还将提供一个使用静态库的示例[**在这里**](https://github.com/Seeed-Studio/Seeed_Arduino_MG126)。请也将此作为参考。

## 资源

- [共享（动态）库与静态库——性能差异](https://medium.com/@nickteixeira/shared-dynamic-libraries-vs-static-libraries-differences-in-performance-2716f5b3c826#:~:text=Advantages%3A,is%20already%20present%20in%20memory)

## 常见问题

- 需要注意的是，这个预编译库功能仅支持 Arduino IDE >= **`1.8.6`**，所以请更新到最新版本的 Arduino IDE 以避免此错误。

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