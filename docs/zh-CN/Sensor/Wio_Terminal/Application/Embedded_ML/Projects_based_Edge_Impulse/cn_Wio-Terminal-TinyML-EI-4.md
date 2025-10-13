---
description: 使用超声波传感器进行人员计数
title: 使用超声波传感器进行人员计数
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-EI-4
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Wio Terminal Edge Impulse 使用超声波传感器进行人员计数

在这个项目中，我们将使用 Wio Terminal、普通的超声波测距仪和特殊的深度学习技术来创建一个人员计数系统，让它真正发挥作用。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/image_zM8pM16fk9.jpeg"/></div>

我们还将利用微软 Azure IoT Central 服务将房间占用数据存储在云端，并在 PC 上进行可视化。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/iotedge.png"/></div>

更多详细信息和视频教程，请观看相应的视频！

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pt1maDNXznI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 理解数据

首先，让我们了解从超声波传感器获得的数据以及如何利用它来确定物体的方向。

Grove - 超声波测距仪是一个工作在 40KHz 的非接触式距离测量模块。当我们通过信号引脚提供超过 10uS 的脉冲触发信号时，Grove_Ultrasonic_Ranger 将发出 8 个 40kHz 周期的电平并检测回声。回声信号的脉冲宽度与测量距离成正比。公式如下：距离 = 回声信号高电平时间 * 声速 (340M/S)/2。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Ultrasonic_Working_Principle.png"/></div>

:::caution
不要热插拔 Grove-Ultrasonic-Ranger，否则会损坏传感器。测量区域必须不少于 0.5 平方米且表面光滑。
:::

在为 Arduino IDE 安装 Grove - Ultrasonic Ranger 库并将超声波测距仪连接到 Wio Terminal D1/D2 端口后，我们可以将这个简单的脚本上传到连接了 Grove 超声波测距仪的 Wio Terminal，然后走进和走出房间。

```cpp
#include "Ultrasonic.h"
#define INTERVAL_MS 50
Ultrasonic ultrasonic(0);
void setup() {
    Serial.begin(115200);
    }
void loop() {
    static unsigned long last_interval_ms = 0;
    float distance;
    if (millis() > last_interval_ms + INTERVAL_MS) {
        last_interval_ms = millis();
        distance = ultrasonic.MeasureInCentimeters();
        if (distance < 200.0) {
        Serial.println(distance);
        }
        else
        Serial.println(-1);
        //Serial.print('\t');
    }
}
```

我们可以立即看到，对于走进的情况，我们首先得到相对较高的值（对应物体的距离），然后这些值会减少。而对于走出的情况，我们得到完全相反的信号。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/full (Time 0_02_01;29).png"/></div>

理论上，我们可以自己手写一个算法来确定方向。不幸的是，现实生活中的情况很复杂——我们有走得快的人（曲线长度较短）和走得慢的人（曲线长度较长），我们有较瘦的人和不那么瘦的人等等。所以我们手写的算法需要考虑所有这些因素，这将不可避免地使其变得复杂和繁琐。我们有一个涉及推理信号处理和大量具有显著变化的噪声数据的任务……解决方案就是——深度学习。

## 训练数据获取

使用螺丝将 Wio terminal 和超声波传感器固定到木制或 3D 打印框架上，示例如下：

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/device.png"/></div>

为了将框架放在墙上，使用了 3M 魔术贴条。

<img width="{200}" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/3m.png" />

其他选择包括使用泡沫胶带、螺丝或钉子。

让我们在 Edge Impulse 仪表板中创建一个新项目并准备获取数据。对于数据收集，由于我们不需要非常高的采样频率，我们可以使用 edge-impulse-cli 中的数据转发器工具。将 ei_people_counter_data_collection.ino 脚本（与上面粘贴的脚本完全相同）上传到 Wio Terminal - 以下步骤假设您已经按照 Edge Impulse 入门指南安装了 Edge Impulse CLI。

在这个特定的脚本中，我们过滤掉所有超过 200 厘米的值，将它们设置为 -1。

```cpp
if (distance < 200.0) {
 Serial.println(distance);
}
else {
    Serial.println(-1);
}
```

对于您的应用程序，您可能需要根据设置将此值设置得更低或更高。然后开始行走。
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/walkinout.gif"/></div>

对于这个项目，我们为每个类别记录了 1 分 30 秒的数据，每次记录 5000 毫秒的样本，然后裁剪它们以获得 1500 毫秒的样本 - 请记住，数据集中的多样性非常重要，因此请确保您有您（或其他人）快走、慢走、跑步等的样本。

<div>
<img width="{180}" align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/in.png" />

<img width ={570} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/out.png"/>

<img width="{175}" align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/none.png" />
</div>

对于 none 类别，除了设备前面没有人的样本外，包含一个人只是站在设备附近和在设备旁边走动的样本是一个好主意，以避免任何移动被错误地分类为进入或出去。

<br />

## 构建机器学习模型

完成数据收集后，创建您的脉冲 - 将窗口长度设置为 1500 毫秒，窗口大小增加设置为 500 毫秒。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture.PNG"/></div>

1500 毫秒足以覆盖人在门口进出时所需的时间持续时间，除非移动极其缓慢。对于处理块，这次我们只有两个块可以实验 - 原始数据或频谱分析。Flatten 块将从数据中删除所有时域信息，使其在确定方向方面完全无用，所以我们不会使用它。
频谱分析块对数据样本应用快速傅里叶变换，将信号从时域转换为频域。虽然 FFT 可以用于其他类型的信号，如声音或加速度计数据，但在我们的情况下，信号的频率实际上也不太重要，因为我们无法根据频率判断人是进入还是离开房间。如果您查看频谱分析块后的数据可视化，很明显很难分离进入和出去的数据样本。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture1.PNG"/></div>

将处理块更改为频谱图并不能真正缓解问题，结果准确性仍然相当低 - 我们能达到的最高准确率是 79.6%，进入和出去类别之间存在很多混淆。再次获胜的是原始数据（带缩放）+ 1D 卷积网络。通过稍微调整网络架构获得了最佳结果，达到 92% 的准确率，为此您需要切换到"专家"模式并将 MaxPool1D 步长更改为 1，池大小更改为 4。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture2.PNG"/></div>

92% 的准确率有多好，可以做什么来改进它？
92% 作为概念验证或原型相当不错，但作为生产模型则很糟糕。对于生产，情况可能有所不同 - 如果您的应用程序是关键的并且以某种方式用于自动控制和决策制定，您真的不希望低于 98-99% 的准确率，即使这样也可能很低，想想像用于支付或身份验证的人脸识别系统。有什么方法可以提高这个系统的准确性吗？
• 超声波传感器是便宜且无处不在的传感器，但它相对较慢且不太精确。

<img width="{200}" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Grove-TF-Mini-LiDAR.JPG" />

我们可以通过使用 Grove TF Mini LiDAR 模块获得更好的数据。

• 获取更多数据，并可能将传感器放置得更低，在正常人体腰部水平，以确保它能够检测到身高低于正常水平的人和儿童。
• 两个比一个好 - 在稍微不同的位置有两个传感器进行测量不会增加太多数据（我们在每个样本中只有 31 个数据点），但可能会提高准确性。为了探索更有趣的想法，如果 Wio Terminal 位置合适，可以使用内置光传感器。

## 部署到 Wio Terminal

一旦模型训练完成，我们就可以使用设备数据进行实时分类——在这里我们发现窗口大小增加 500 毫秒实际上效果不太好，会产生更多误报，所以在下一步部署到设备时，最好将值增加到 750 毫秒。要将模型部署到 Wio Terminal，请转到部署选项卡，选择 Arduino 库，下载它，解压存档并将其放入您的 Arduino 库文件夹中。

这次我们将使用连续推理示例来确保不会遗漏任何重要数据。
如果您还记得，在第一个项目中，对于推理，我们会收集样本中的所有数据点，执行推理，然后返回采样——这意味着当将数据馈送到神经网络时，我们会暂停数据收集并丢失一些数据。

<img width="{200}" align="right" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/10df57c-RunImpulse.png" />

这并不是最优的，我们可以使用 DMA（直接内存访问）、线程或多进程来解决这个问题。
<div align="center">
<img width ={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/DMA.gif"/></div>

Wio Terminal MCU（Cortex M4F 核心）只有一个核心，所以多进程不是一个选项——所以在这种情况下我们将使用 FreeRTOS 和线程。将要发生的是在推理过程中，FreeRTOS 会短暂暂停推理，收集数据样本，然后返回推理。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/TaskExecution.png"/></div>

这样实际推理会花费稍长时间，但对于这个特定用例，差异是可以忽略的。我们每 500 毫秒执行一次推理，所以时间窗口的每个 500 毫秒片段将被推理 3 次。然后我们取在 3 次推理中具有最高置信度的结果——例如我们对"out"标签有 2 次最高置信度，对"none"标签有 1 次，因此结果应该被分类为"out"。为了简化测试，我们将添加当有人进入房间时打开 Wio Terminal 屏幕，当有人离开时关闭屏幕的代码行。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test1.gif"/></div>

打开 Examples -> 您的项目名称 -> nano_ble33_sense_accelerometer_continuous 草图，并将 setup 函数上方的所有内容（包括 run_inference_background 函数声明）替换为以下代码块：

```cpp
/* Includes ---------------------------------------------------------------- */
#include <people_counter_raw_inference.h>
#include <Seeed_Arduino_FreeRTOS.h>
#include "Ultrasonic.h"
#include "TFT_eSPI.h"

#define ERROR_LED_LIGHTUP_STATE HIGH

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal
static uint32_t run_inference_every_ms = 500;

static float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = {0};
static float inference_buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE];
float distance;
uint8_t axis_num = 1;

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;
Ultrasonic ultrasonic(0);
TFT_eSPI tft;
```

在 setup 函数中，初始化 LCD 屏幕

```cpp
    tft.begin();
    tft.setRotation(3);
```

并删除所有与加速度计相关的行。然后在 ```inference_thread.start(mbed::callback(&run_inference_background));``` 的位置粘贴以下代码块——我们需要替换这行的原因是因为在 Arduino BLE33 Sense 和 Wio Terminal 中线程初始化的方式不同。

```cpp
    vSetErrorLed(LED_BUILTIN, ERROR_LED_LIGHTUP_STATE);
    
    // Create the threads that will be managed by the rtos
    // Sets the stack size and priority of each task
    // Also initializes a handler pointer to each task, which are important to communicate with and retrieve info from tasks

    xTaskCreate(run_inference_background,"Inference", 512, NULL, tskIDLE_PRIORITY + 1, &Handle_aTask);
    xTaskCreate(read_data, "Data collection", 256, NULL, tskIDLE_PRIORITY + 2, &Handle_bTask);

    // Start the RTOS, this function will never return and will schedule the tasks.

    vTaskStartScheduler();
```

run_inference_continuous 函数基本没有变化，这里只需要更改两个地方：
• ```void run_inference_background()``` 改为 ```static void run_inference_background(void*pvParameters)```
• ```ei_classifier_smooth_init(&smooth, 10 /* no. of readings */, 7 /* min. readings the same */, 0.8 /* min. confidence */, 0.3 /* max anomaly */);``` 改为
    ```ei_classifier_smooth_init(&smooth, 3 /* no. of readings */, 2 /* min. readings the same */, 0.6 /* min. confidence */, 0.3 /* max anomaly */);```
上面的行控制我们应用于模型输出的平均（或平滑）参数。您可以尝试不同的值，看看什么值在真阳性/假阳性率方面能够获得最佳性能。
虽然在原始代码中，数据收集发生在 loop 函数中，但对于 Wio Terminal FreeRTOS 移植版本，最好在线程中实现数据收集并保持 loop 函数为空。删除原始代码中的 loop 函数并用以下代码块替换

```cpp
/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
static void read_data(void* pvParameters)
{
    while (1) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        // roll the buffer -axis_num points so we can overwrite the last one
        numpy::roll(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, -axis_num);
        
        distance = ultrasonic.MeasureInCentimeters();
        if (distance > 200.0) { distance = -1;}
        
        buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE - 1] = distance;

        // and wait for next tick
        uint64_t time_to_wait = next_tick - micros();
        delay((int)floor((float)time_to_wait / 1000.0f));
        delayMicroseconds(time_to_wait % 1000);
    }
}

void loop()
{
  //nothing, all the work is done in two threads
}
```

在这里我们等待直到获取数据的时间到了，然后使用超声波传感器进行距离测量并将其复制到推理缓冲区。请记住，由于这是一个线程，在这里使用延迟不会影响整个系统，只是暂时"停止"线程 - 直到下次读取的时间到了。FreeRTOS 可以在数据收集线程不活跃时在其他线程中执行任务。

## Azure IoT Central 集成

好的，模型可以工作，但仅凭它本身并不适合在现实世界中实际应用。让我们添加两个元素来使其成为一个完整的应用程序 - 一个简单的 GUI 和数据上传到云端并显示漂亮的图表。我们将使用 [LVGL 库](https://wiki.seeedstudio.com/cn/Wio-Terminal-LVGL/) 来创建图形用户界面，使用 Microsoft Azure IoT Central 服务来发送数据和可视化。生成的代码有 693 行长，并在 RTOS 中运行 3 个并发线程。以下是使其与 IoT Central 配合工作所需步骤的快速回顾。

在此项目的 Github 仓库中找到项目，名称为 WioTerminal_Azure_Central.ino，并在 Arduino IDE 中打开它。上传代码后，通过按下 Wio Terminal 顶部的三个按钮并重置设备来进入配置模式。

设备屏幕上将显示"In configuration mode"。使用串行监视器连接到设备（波特率 115200，回车符），并设置 WiFi SSID、密码和 Azure IoT Central 凭据（格式为 ```set_az_iotc your_ID_scope your_primary_key your_device_ID```），您可以按照以下步骤获取这些信息：

• 访问 [https://apps.azureiotcentral.com/](https://apps.azureiotcentral.com/)
• 如果您还没有 Microsoft 账户，请注册一个。
• 转到 Build -> Custom app。输入应用名称和唯一 URL（可以与应用名称相似）。选择免费计划。
• 创建应用后，转到 Device Templates。创建一个 IoT 设备类型的新模板。选择自定义模型，如下面截图所示添加三个功能和两个接口（按 Views -> Visualizing the device）。完成后确保一切正确，然后发布模板。
• 通过转到 Devices 并按 New 从模板创建新设备，记住选择您刚刚创建并发布的模板！
• 从 Administration -> Device connection 获取 ID scope，从 Administration -> Device connection -> SAS-IoT-Devices 获取 Primary key，从 Devices 选项卡获取 device ID，您在第 5 步创建设备的地方。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure1.jpeg"/></div>

配置成功后，重启 Wio Terminal，它将开始连接到 Azure IoT Central，您可以在串行终端上观看详细的进度反馈。然后您将能够看到 a) 仪表板上的设备状态已更改为 Provisioned b) Device -> Raw data 中来自加速度计传感器的遥测数据。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure2.jpeg"/></div>

然后我们添加负责 Edge Impulse 模型推理、线程处理的部分，并修改发送遥测功能以发送进入人数、离开人数和房间内总人数的值。我们还添加了由三个按钮和一个文本字段组成的简单 GUI，显示信息更新 - 您可以通过从项目 Github 仓库打开 WioTerminal_EI_People_Counting_Azure_Central_LVGL.ino 来查看生成的代码。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test2.gif"/></div>

最困难的部分实际上是确保每个单独线程中的所有内容都正常工作，并且不会影响其他线程。为了在不过度复杂化代码的情况下适应这一点，做出了一些牺牲，例如将 LVGL 任务更新功能放在接口更新之后，而不是让它定期运行。

## 参考

- [Edge Impulse 公共项目](https://studio.edgeimpulse.com/public/18808/latest)

- [项目 Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_3_People_Counting)