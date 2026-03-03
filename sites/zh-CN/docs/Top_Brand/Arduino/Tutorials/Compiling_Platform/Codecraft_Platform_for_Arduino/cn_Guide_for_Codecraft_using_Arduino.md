---
description: 使用 Arduino 的 Codecraft 指南
title: 使用 Arduino 的 Codecraft 指南
keywords:
- Arduino
- Tutorials
- Codecraft_Platform_for_Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Guide_for_Codecraft_using_Arduino
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

# 使用 Arduino 的 Codecraft 指南

Codecraft 是一款基于 Scratch3.0 的编程软件，支持图形化和文本编程语言。它是一个用于 STEM 教育的多功能软件工具。通过 Codecraft，孩子们能够设计引人入胜的故事、游戏和动画，并使用 CH Maker Ed 和 Seeedstudio 提供的各种电子套件来创建交互式智能应用。此外，当您准备好时，您可以随时将代码块转换为 Arduino、Python 或 JavaScript，以了解更多关于最流行编程语言的知识。

Codecraft 有两种模式：舞台模式和设备模式。在舞台模式中，用户可以通过使用代码块来控制一个称为"精灵"的对象。此外，这种模式可以用来帮助学生学习形状、算术以及数学的其他领域。

在设备模式中，用户可以连接 Grove Zero 或 Arduino，通过简单地拖拽代码块到 IDE 中来构建他们的酷炫项目。

## Codecraft

### 设备模式中的代码块

以下是 Codecraft 中使用的主要代码块类型。

**堆叠块**

![stack blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p1.png)

堆叠块是执行主要命令的代码块。它们的形状是顶部有一个凹槽，底部有一个凸起——这样代码块就可以放置在它们的上方和下方。

**布尔块**

![boolean blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p2.png)

布尔块是条件块——它们要么为真，要么为假。例如，问计算机："2+2=4 吗？"，它会告诉你"是"或"否"。布尔块是六边形的。

**报告块**

![reporter blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p3.png)

报告块是数值块。报告块可以保存数字和字符串。这就像问朋友，例如，"2+2 等于多少？"，他们会回答"4"。但这不仅仅是方程式，它还可以报告一个变量，例如，"你多大了？"。他们可能回答："15"。它的形状是圆边的。

**C 块**

![c blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p4.png)

C 块是形状像"C"的代码块。也被称为"包装块"，这些代码块循环执行 C 内的代码块或检查条件是否为真。有五种 C 块，它们可以在控制类别中找到。C 块可以在底部有凸起，或者是封闭的。

**输出布尔块**

![output boolean blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p5.png)

输出布尔块是六边形的代码块，用于检查条件是"真"还是"假"，并在满足条件时执行操作。这些代码块可以放置在布尔块和 C 块内部。

### 兼容的 Grove

请参考 [CodeCraft Grove 兼容列表](https://wiki.seeedstudio.com/cn/Codecraft_Grove_Compatible_List/) 来确认您的 Grove 是否受支持。

### 基础教程

**步骤 1. 添加 Arduino 支持**

Codecraft 可以支持 Grove Zero 和 Arduino Uno/Mega，所以在使用 Codecraft 与 Arduino 之前，您需要为其添加 Arduino 支持。

请进入 [Codecraft](https://ide.chmakered.com/)，点击左侧边栏中的"添加设备"，然后选择"Arduino Uno/Mega"。

![add device](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/add_device.png)

**步骤 2. 安装 Codecraft Assistant**

Codecraft Assistant 可以帮助您将 Codecraft 中的代码上传到 Arduino，请参考 [CH MAKER Ed-Documents](https://ide.tinkergen.com/download/en/#:~:text=Mac%20v2.6.4.25-,Codecraft%20Assistant,-Codecraft%20Assistant%20is) 下载并安装它。

**步骤 3. Arduino 主程序**

通常，Arduino 的主程序包括两个子程序，我们称它们为 `setup` 和 `loop`。`setup` 中的代码在 Arduino 上电时运行一次，而 `loop` 中的代码会重复运行。

主程序块包含在左侧的开始选项卡中，您可以用鼠标将其拖拽到工作区域。

![main procedure](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/main_procedure.png)

**步骤 4. 闪烁 LED**

我们通常从闪烁 LED 开始学习 Arduino，Arduino 板上有一个内置 LED，它连接到 Arduino 的 D13 引脚。

LED 块可以在 Grove 数字选项卡中找到，将其拖拽到 `loop` 程序中，它们会自动组合。

将 LED 引脚从 D2 更改为 D13，这样它就可以控制 D13 引脚上的 LED，然后在其下方拖拽另一个 LED 块，并将 ON 改为 OFF。主程序可能看起来像这样：

![blink led](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/blink_led.png)

为了看到 LED 闪烁，我们应该在 LED 开和关之间添加一个间隔。延时块可以在控制选项卡中找到，它用于产生延时。在两个 LED 块之间拖拽两个延时块，并将间隔设置为 1000ms（1000ms = 1s）。

![blink demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/blink_demo.png)

现在程序完成了。

**步骤 5. 上传到 Arduino**

我们可以将完成的程序上传到 Arduino 使其生效，所以请将您的 Arduino 连接到您的 PC。您可以在设备管理器中找到 Arduino 的串口号，记住它以备将来使用。

现在点击 Codecraft 右下角的上传，选择 Arduino 的串口号。确认后等待一会儿，您将看到 Arduino 中的 LED 闪烁。

![upload](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/upload.png)

## Grove Arduino 入门套件

以下 10 个课程将帮助您更熟悉如何使用 Codecrft。这些课程中的 Grove 模块都可以在 Grove - Arduino 入门套件中找到。

### 课程 1. 使用 Grove - LCD RGB 背光显示屏

![Grove - LCD RGB 背光显示屏](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_lcd.jpg)

Grove - LCD RGB 背光显示屏支持文本显示，使用用户定义的字符。它使您能够使用简单而简洁的 Grove 接口设置背光颜色。它使用 I2C 作为与 Arduino 的通信方法。因此，数据交换和背光控制所需的引脚数量从约 10 个缩减到 2 个，为其他具有挑战性的任务留下了更多的 I/O 能力。

![lcd color block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_color_block.png)

"LCD RGB setColor" 块可用于通过 R、G 和 B 值设置 LCD 的背光颜色。它可以在 Grove I2C 选项卡中找到。

![lcd print block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_print_block.png)

"LCD RGB print" 块可用于在指定位置向 LCD 打印字符串，它可以在 Grove I2C 选项卡中找到。

**目标**

将 LCD 的背光颜色更改为您喜欢的颜色，并在其上打印 "hello, world!" 和系统运行时间。

**硬件**

**步骤 1.** 使用 Grove 线缆将 Grove - LCD 背光显示屏连接到 Seeeduino 的 I2C 端口。如果您使用的是 Arduino，请使用底板扩展板。

**步骤 2.** 通过 USB 线缆将 Seeedino/Arduino 连接到您的 PC。

**软件**

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

**步骤 2.** 将 "LCD RGB setColor" 块和 "LCD RGB print" 块拖到设置子程序中，让它们自动组合。

![lcd_setup](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_setup.png)

更改 setColor 块中的 R、G 和 B 值，然后让 print 块在第一行第一列打印 "hello, world!"。

**步骤 3.** 将另一个 "LCD RGB print" 块拖到循环子程序中，将其行和列更改为 2 和 1。然后将 "System running time" 块拖到其中，该块可以在输入选项卡中找到。

"System running time" 块返回从 Seeeduino/Arduino 上电到现在的时间（以毫秒为单位），如果您想以秒为单位获取该时间，可以将其除以 1000。除法块可以在运算符选项卡中找到。

![lcd_demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_demo.png)

:::tip
当代码上传完成后，您可以看到 LCD 的背光颜色变为您设置的颜色，并在其上显示 "hello, world!" 和系统运行时间。
:::

### 课程 2. 使用 Grove - 继电器

![Grove - 继电器](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_relay.jpg)

继电器是放大 Arduino 控制能力的有用工具！通过 Grove 接口馈送控制信号，继电器打开或关闭连接到螺丝端子的外部电路。外部电路的电压可以高达 220V！所以拿起这个继电器，开始一些真正具有挑战性的项目吧！

![relay block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_block.png)

继电器块可用于控制继电器打开或关闭，它可以在 Grove 数字选项卡中找到。

**目标**

使用 Grove - 按钮控制 Grove - 继电器，当按钮被按下时，打开继电器。否则，关闭继电器。

**硬件**

![relay demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_demo.jpg)

**步骤 1.** 使用两根 Grove 线缆将 Grove - 按钮连接到端口 D3，将 Grove - 继电器连接到底板扩展板的端口 D8。

**步骤 2.** 将底板扩展板插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的 PC。

**软件**

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

**步骤 2.** 创建一个变量来存储按钮的状态。转到变量选项卡，点击 "Make a Variable" 按钮，并命名我们将创建的变量，如 buttonState。

![create variable](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/create_variable.png)

点击确定，现在 buttonState 块出现在变量选项卡中。

**步骤 3.** 将 "set buttonState to 0" 块拖到循环子程序中，并将按钮块拖到其中。

![button variable](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_buttonState.png)

**步骤 4.** 我们需要在按钮被按下时打开继电器，否则关闭它。所以我们需要控制选项卡中的 "if...then...else" 块和运算符选项卡中的等于块，将它们拖到循环子程序中，并让它们与 buttonState 变量组合。

![relay if](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_if.png)

**步骤 5.** 最后将继电器块拖到其中，上传到 Arduino，全部完成。

![relay demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_demo.png)

:::tip
当代码上传完成后，如果您按下按钮，继电器将被打开。否则，继电器将被关闭。
:::

### 课程 3. 使用 Grove - 声音传感器

![Grove - 声音传感器](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_sound.jpg)

声音传感器模块是一个简单的麦克风。基于 LM358 放大器和驻极体麦克风，它可用于检测环境中的声音级别。

![sound block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_block.png)

声音块可用于感测环境中声音的大小，它可以在 Grove 模拟选项卡中找到。

**目标**

监测环境中的声音级别。如果太吵，闪烁 LED 作为警报。

**硬件**

![sound demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_demo.jpg)

**步骤 1.** 使用两根 Grove 线缆将 Grove - 声音传感器连接到 Base Shield 的 A0 端口，将 Grove - 红色 LED 连接到 D7 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的 PC。

**软件**

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖拽到工作区域。

**步骤 2.** 请参考"Grove - 继电器"部分创建一个变量来存储声音大小，然后使用控制选项卡中的"if...then"块来判断声音大小是否超过阈值。

![sound loop](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_loop.png)

**步骤 3.** 如果声音大小超过阈值，让 LED 闪烁。

![sound demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_demo.png)

:::tip
当代码上传完成后，如果环境中的声音太大，LED 将会闪烁。
:::

### 课程 4. 使用 Grove - 触摸传感器

![Grove - Touch Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_touch.jpg)

Grove - 触摸传感器使您能够用接触检测表面来替代按钮上的压力。它可以检测手指靠近时电容的变化。因此，无论您的手指直接触摸触摸板还是只是靠近它，Grove - 触摸传感器都会输出高电平。

![touch block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/touch_block.png)

触摸块可用于读取触摸状态，可在 Grove 数字选项卡中找到。

**目标**

使用 Grove - 触摸传感器控制 Grove - 红色 LED。当传感器被触摸时，打开 LED，否则关闭 LED。

**硬件**

**步骤 1.** 使用两根 Grove 线缆将 Grove - 触摸传感器连接到 Base Shield 的 D3 端口，将 Grove - 红色 LED 连接到 D7 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的 PC。

**软件**

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖拽到工作区域。

**步骤 2.** 该程序更像"Grove - 继电器"部分中的程序，我们可以在不使用变量的情况下构建它。

![touch demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/touch_demo.png)

:::tip
当代码上传完成后，如果传感器被触摸，LED 将被打开。否则 LED 将被关闭。
:::

### 课程 5. 使用 Grove - 旋转角度传感器

![Grove - Rotary Angle Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_rotary.jpg)

Grove 电位器产生 0 到 VCC（3.3 或 5 VDC）之间的模拟输出。角度范围为 300 度，值呈线性变化。电阻值为 10k 欧姆，非常适合 Arduino 使用。这也可能被称为"旋转角度传感器"。

![rotary block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_block.png)

旋转块可用于读取旋转状态，可在 Grove 模拟选项卡中找到。

**目标**

在串口中显示 Grove - 旋转角度传感器的旋转值。

**硬件**

![rotary demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_demo.jpg)

**步骤 1.** 使用一根 Grove 线缆将 Grove - 旋转角度传感器连接到 Base Shield 的 A0 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的 PC。

**软件**

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖拽到工作区域。

**步骤 2.** 在使用串口之前，我们应该设置其波特率，将"串口波特率"块从串口选项卡拖拽到设置子程序中，并选择 9600 bps。

![rotary setup](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_setup.png)

**步骤 3.** "串口换行打印"块可用于在串口中显示新行，我们可以将其与旋转块结合使用。

![rotary demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_demo.png)

**步骤 4.** 程序上传后，点击 Codecraft 左侧的连接按钮，选择您的 Arduino 端口，然后连接。

![connect serial](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/connect_serial.png)

![serial monitor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/serial_monitor.png)

:::tip
旋转旋转角度传感器，您可以在监视器中看到数据变化。
:::

### 课程 6. 使用 Grove - LED

![Grove - LED](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_led.jpg)

Grove - LED 专为 Arduino/Seeeduino 初学者设计，用于监控来自数字端口的控制。它可以轻松安装到您的盒子或桌子表面，用作电源或信号的指示灯。

![led block digital](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_block_digital.png)

![led block analog](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_block_analog.png)

LED 块可用作数字输出或模拟输出，当用作模拟输出时，您可以控制其亮度。

**目标**

制作一个呼吸 LED。

**硬件**

![led demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_demo.jpg)

**步骤 1.** 使用一根 Grove 线缆将 Grove - 红色 LED 连接到 Base Shield 的 D3 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的 PC。

**软件**

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖拽到工作区域。

**步骤 2.** 使用 Grove 模拟选项卡中的 LED 块制作呼吸 LED 非常简单。

除此之外，我们还需要在控制选项卡中使用"count with...from...to...step"块来计算LED的亮度。拖拽它与循环子程序结合。

![led count](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_count.png)

**步骤 3.** 确保让变量 i 从 0（最暗）到 255（最亮），然后添加"LED"块和"Delay ms"块，并将LED的亮度设置为变量 i。

![led loop](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_loop.png)

**步骤 4.** 上面的程序让LED从最暗到最亮，现在我们可以添加程序让它从最亮到最暗。

![led demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_demo.png)

:::tip
当代码上传完成后，你将看到LED呼吸灯效果。
:::

### 课程 8. 使用 Grove - 光传感器

![Grove - Light Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_light.jpg)

光传感器，也称为光敏电阻（LDR）。通常，当环境光强度增加时，光传感器的电阻会减小。

![light block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_block.png)

光传感器块可用于通过模拟输入检测环境中的光强度，可在"Grove Analog"选项卡中找到。

**目标**

构建一个类似智能家居的程序，当光强度低于预设阈值时，打开LED。

**硬件**

![light demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_demo.jpg)

**步骤 1.** 使用两根 Grove 线缆将 Grove - 红色LED连接到端口D7，将 Grove - 光传感器连接到Base Shield的端口A0。

**步骤 2.** 将Base Shield插入你的Seeeduino/Arduino。

**步骤 3.** 通过USB线缆将Seeeduino/Arduino连接到你的PC。

**软件**

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并拖拽一个主程序到工作区域。

**步骤 2.** 我们在 Grove - 触摸传感器部分已经使用过"if"块，所以构建这个程序并不困难。

![lighe demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_demo.png)

:::tip
当代码上传完成后，遮挡光传感器的光线，LED将被点亮。
:::

### 课程 9. 使用 Grove - 按钮

![Grove - Button](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_button.jpg)

这个新版本的按钮 Grove 模块包含一个独立的按钮，配置了下拉电阻——可直接与我们的微控制器作为数字输入使用。按钮信号通过SIG线传输，此 Grove 模块不使用NC。

![button block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_block.png)

按钮块可用于通过数字输入检测瞬时按钮的状态，可在 Grove Digital 选项卡中找到。

**目标**

使用 Grove - 按钮控制 Grove - 红色LED。当按钮被按下时，打开LED，否则关闭LED。

**硬件**

![button demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_demo.jpg)

**步骤 1.** 使用两根 Grove 线缆将 Grove - 按钮连接到端口D3，将 Grove - 红色LED连接到Base Shield的端口D7。

**步骤 2.** 将Base Shield插入你的Seeeduino/Arduino。

**步骤 3.** 通过USB线缆将Seeeduino/Arduino连接到你的PC。

**软件**

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并拖拽一个主程序到工作区域。

**步骤 2.** 我们在 Grove - 继电器部分已经使用过按钮，现在让我们将继电器改为LED，并使用按钮来控制它。

![button demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_demo.png)

:::tip
当代码上传完成后，如果按钮被按下，LED将点亮。否则LED将关闭。
:::

### 课程 10. 使用 Grove - 舵机

![Grove - Servo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_servo.png)

这是一个可以精确控制位置的执行器。

![servo block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_block.png)

舵机块可用于通过指定旋转量和每次旋转之间的延迟来控制舵机，可在 Grove Analog 选项卡中找到。

**目标**

使用 Grove - 旋转角度传感器控制 Grove - 舵机。

**硬件**

![servo demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_demo.jpg)

**步骤 1.** 将 Grove - 舵机连接到Base Shield，并使用 Grove 线缆将 Grove - 旋转角度传感器连接到Base Shield的端口A0。

**步骤 2.** 将Base Shield插入你的Seeeduino/Arduino。

**步骤 3.** 通过USB线缆将Seeeduino/Arduino连接到你的PC。

**软件**

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并拖拽一个主程序到工作区域。

**步骤 2.** 我们可以使用旋转角度传感器来控制舵机，但由于"Rotation"块的值是0到1023，所以我们需要除以一个数字，让它在0到180之间。

![servo demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_demo.png)

:::tip
当代码上传完成后，旋转旋转角度传感器，舵机的角度将会改变。
:::

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>