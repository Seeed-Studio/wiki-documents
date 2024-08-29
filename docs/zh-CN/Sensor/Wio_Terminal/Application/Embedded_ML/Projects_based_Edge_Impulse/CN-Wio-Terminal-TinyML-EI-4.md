---
description:   人数统计与超声波传感器
title:   人数统计与超声波传感器
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-EI-4
last_update:
  date: 3/05/2024
  author: 金菊
---

# Wio Terminal Edge Impulse人数统计与超声波传感器

在这个项目中，我们将使用Wio Terminal、一个普通的超声波测距仪和特殊的深度学习技术来创建一个人数统计系统

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/image_zM8pM16fk9.jpeg"/></div>

并利用Microsoft Azure IoT Central服务将房间占用数据存储在云端并在PC上可视化。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/iotedge.png"/></div>

有关更多详细信息和视频教程，请观看相应的视频！

<iframe width="560" height="315" src="https://www.youtube.com/embed/pt1maDNXznI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 理解数据

首先，让我们了解一下从超声波传感器中可以获取到的数据以及如何利用它来确定物体的方向。

Grove-超声波测距仪是一种非接触式距离测量模块，工作频率为40kHz。当我们通过信号引脚提供超过10微秒的脉冲触发信号时，Grove-超声波测距仪将发出8个40kHz的周期信号，并检测回波。回波信号的脉冲宽度与测量距离成正比。计算公式如下：距离 = 回波信号高电平时间 * 声速(340米/秒) / 2。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Ultrasonic_Working_Principle.png"/></div>

:::注意事项
请勿热插拔Grove-超声波测距仪，否则会损坏传感器。测量区域的面积必须不小于0.5平方米且平滑。
:::

在为Arduino IDE安装Grove-超声波测距仪库并将超声波测距仪连接到Wio Terminal的D1/D2端口后，我们可以将这个简单的脚本上传到连接了Grove超声波测距仪的Wio Terminal上，然后在房间里走进走出。

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

我们立即可以看到，对于走进来，我们首先得到相对较高的值（对应于与物体的距离），然后逐渐减小。而对于走出去，则得到完全相反的信号。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/full (Time 0_02_01;29).png"/></div>

从理论上讲，我们可以手动编写一个算法来确定方向。不幸的是，现实生活中的情况很复杂 - 我们有快走的人（曲线长度较短）和慢走的人（曲线长度较长），我们有较瘦的人和不那么瘦的人等等。因此，我们手写的算法需要考虑所有这些因素，这将不可避免地使其变得复杂和混乱。我们面临的任务涉及推理信号处理和大量有噪声的数据，有着显著的变化...... 解决方案是 - 深度学习。

## 训练数据采集

将 Wio Terminal 和超声波传感器用螺丝固定在木质或3D打印的框架上，如下所示：

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/device.png"/></div>

将框架放在墙上，使用3M魔术贴条固定。

<img width="{200}" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/3m.png" />

其他选项包括使用海绵胶带、螺丝或钉子。

在Edge Impulse仪表板中创建一个新项目，并准备获取数据。为了收集数据，由于我们不需要非常高的采样频率，我们可以使用来自edge-impulse-cli的数据转发工具。将ei_people_counter_data_collection.ino脚本（与上面粘贴的脚本完全相同）上传到Wio Terminal-以下步骤假设您已经按照"开始Edge Impulse"中的描述安装了Edge Impulse CLI。
在这个特定的脚本中，我们过滤掉所有大于200厘米的值，并将它们设为-1。

```cpp
if (distance < 200.0) {
 Serial.println(distance);
}
else {
    Serial.println(-1);
}
```

对于您的应用程序，您可能需要根据设置将此值设置得更低或更高。然后开始走动。
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/walkinout.gif"/></div>

在这个项目中，我们为每个类别录制了1分30秒的数据，每次录制5000毫秒的样本，然后裁剪它们以获取1500毫秒的样本-请记住，数据集中的多样性非常重要，因此确保有您（或其他人）以不同速度行走、快速行走、慢速行走等的样本。

<div>
<img width="{180}" align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/in.png" />

<img width ={570} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/out.png"/>

<img width="{175}" align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/none.png" />
</div>

在这个项目中，我们为每个类别录制了1分30秒的数据，每次录制5000毫秒的样本，然后裁剪它们以获取1500毫秒的样本-请记住，数据集中的多样性非常重要，因此确保有您（或其他人）以不同速度行走、快速行走、慢速行走等的样本。

<br />

## 构建机器学习模型

当您完成数据收集后，创建您的impulse - 将窗口长度设置为1500毫秒，窗口大小增加为500毫秒。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture.PNG"/></div>

1500毫秒足以覆盖人行走进门或走出门所需的时间，除非移动非常缓慢。对于处理块，这一次我们只有两个块可以进行实验 - 原始数据或谱分析。Flatten块将从数据中删除所有时域信息，使其在确定方向方面完全无用，因此我们不会使用它。
谱分析块对数据样本应用快速傅里叶变换，将信号从时域转换为频域。虽然FFT可以用于其他类型的信号，比如声音或加速度计数据，但在我们的情况下，信号的频率实际上也并不重要，因为我们不能根据频率判断人是进入还是离开房间。如果您查看谱分析块后的数据可视化，可以清楚地看到很难区分进入和离开的数据样本。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture1.PNG"/></div>

将处理块更改为频谱图并不能真正解决问题，最终的准确性仍然相当低-我们能够获得的最高准确性为79.6%，在进入和离开类别之间存在很多混淆。而获胜者，再次是原始数据（带缩放）+ 1D卷积网络。通过微调网络架构，可以获得92%的准确性，为此，您需要切换到“专家”模式，并将MaxPool1D的步幅设置为1，池大小设置为4。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture2.PNG"/></div>

92%的准确性如何？有什么方法可以提高它？
92%对于概念验证或原型来说是相当不错的，但对于生产模型来说是可怕的。对于生产，情况可能会有所不同-如果您的应用程序是关键的，并且以某种方式用于自动化控制和决策，那么您确实不希望准确性低于98-99%，甚至可能还低，想想用于付款或身份验证的人脸识别系统。有没有办法提高该系统的准确性？
• 超声波传感器是一种廉价且普遍存在的传感器，但它相对较慢且不太精确。

<img width="{200}" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Grove-TF-Mini-LiDAR.JPG" />

 我们可以通过使用Grove TF Mini LiDAR模块获得更好的数据。

• 获取更多数据，并可能将传感器放置在较低的位置，即正常的人体腰部位置，以确保它可以检测到低于正常身高的人和儿童
• 两个比一个好-在稍微不同的位置上使用两个传感器进行测量不会增加太多数据（每个样本只有31个数据点），但可能会提高准确性。为了探索更多有趣的想法，如果Wio Terminal适当放置，还可以使用内置光传感器。

## 部署到Wio Terminal

模型训练完成后，我们可以使用设备上的数据进行实时分类-在这里我们发现，窗口大小增加为500毫秒实际上效果不太好，会产生更多的误报，因此在部署到设备时，最好将该值增加到750毫秒。要将模型部署到Wio Terminal，请转到部署选项卡，选择Arduino库，下载并提取存档，然后将其放入Arduino库文件夹中。

这次我们将使用连续推理的示例，以确保不会错过任何重要数据。
如果您还记得，在第一个项目中，对于推理，我们会收集样本中的所有数据点，执行推理，然后返回进行采样-这意味着在将数据馈送到神经网络时，我们会暂停数据收集，并丢失一些数据。

<img width="{200}" align="right" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/10df57c-RunImpulse.png" />

这并不是最优的解决方案，我们可以使用DMA（直接内存访问）、线程或多进程来解决这个问题。
<div align="center">
<img width ={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/DMA.gif"/></div>

Wio Terminal MCU（Cortex M4F内核）只有一个核心，所以多进程不是一个选项-因此，在这种情况下，我们将使用FreeRTOS和线程。将发生的情况是，在推理过程中，FreeRTOS会暂停推理片刻，收集数据样本，然后返回进行推理。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/TaskExecution.png"/></div>

这样，实际的推理时间会稍长一些，但对于这个特定的用例来说，差异是可以忽略的。我们每500毫秒进行一次推理，因此对于时间窗口的每个500毫秒切片，将进行3次推理。然后，我们选择在3次推理中具有最高置信度的结果 - 例如，我们对“out”标签的置信度最高两次，对“none”标签的置信度最高一次，因此结果应该被分类为“out”。为了简化测试，当有人进入房间时，我们将添加打开Wio Terminal屏幕的代码，并在有人离开时关闭。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test1.gif"/></div>

打开Examples -> name of your project-> nano_ble33_sense_accelerometer_continuous sketch，并用以下代码块替换所有内容（包括run_inference_background函数声明）setup函数上方的代码块：

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

在设置函数中，初始化LCD屏幕

```cpp
    tft.begin();
    tft.setRotation(3);
```

并删除与加速度计相关的所有行。然后，将以下代码块粘贴到 ```inference_thread.start(mbed::callback(&run_inference_background));``` 的位置 - 之所以需要替换这行代码是因为在Arduino BLE33 Sense和Wio Terminal中，线程初始化方式不同。

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

run_inference_continuous函数基本保持不变，唯一需要更改的是
• ```void run_inference_background()``` 更改为  ```static void run_inference_background(void*pvParameters)```
• ```ei_classifier_smooth_init(&smooth, 10 /* no. of readings */, 7 /* min. readings the same */, 0.8 /* min. confidence */, 0.3 /* max anomaly */);``` 更改为
    ```ei_classifier_smooth_init(&smooth, 3 /* no. of readings */, 2 /* min. readings the same */, 0.6 /* min. confidence */, 0.3 /* max anomaly */);```
上述代码行控制着模型输出的平均（或平滑）参数。您可以尝试不同的值，以找到在真正的正面/误报率方面表现最佳的值。
原始代码中，数据收集发生在循环函数中，但对于Wio Terminal的FreeRTOS端口，最好在一个线程中实现数据收集，并使循环函数保持为空。删除原始代码中的循环函数，并用以下代码块替换它。

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

这里我们等待直到到达获取数据的时间点，然后使用超声波传感器进行距离测量，并将其复制到推断缓冲区中。请记住，由于这是一个线程，在这里延迟不会影响整个系统，它只会临时“停止”线程 - 直到下次获取读数为止。在数据收集线程处于非活动状态时，FreeRTOS可以在其他线程中执行任务。

## Azure IoT Central 集成

好的，模型可以正常工作，但仅仅自己并不适用于实际应用。让我们添加两个元素，使其成为一个完整的应用程序 - 一个简单的GUI和数据上传到云端，并显示漂亮的图表。我们将使用 [LVGL 库](https://wiki.seeedstudio.com/Wio-Terminal-LVGL/) 创建图形用户界面，并使用Microsoft Azure IoT Central服务发送数据和可视化。结果的Sketch代码长达693行，并在RTOS中运行3个并发线程。以下是使其与IoT中心配合工作的步骤快速概述。
在GitHub存储库中找到此项目的项目，名称为WioTerminal_Azure_Central.ino，并在Arduino IDE中打开它。上传Sketch后，通过按下Wio Terminal顶部的三个按钮并重置设备，进入配置模式。

设备屏幕上将显示“进入配置模式”。使用串行监视器（波特率为115200，回车符）连接到设备，并设置WiFi SSID、密码和Azure IoT Central凭据(如下格式 ```set_az_iotc your_ID_scope your_primary_key your_device_ID```)，可以通过以下步骤获取这些凭据： 
• 访问 <https://apps.azureiotcentral.com/>
• 如果您还没有Microsoft帐户，请注册一个。
• 转到 Build -> Custom app.输入应用程序名称和唯一URL（可以与应用程序名称类似）。选择免费计划。
• 创建应用程序后，转到设备模板。选择IoT设备类型的自定义模型，在下图所示的方式下添加三个功能和两个接口（单击视图->可视化设备）。完成后，确保一切正确无误，并发布模板。
• 通过转到设备并按“new”创建一个新设备，记住选择刚刚创建和发布的模板！
• 从  Administration -> Device connection 中获取ID范围，从 Administration  -> Device connection -> SAS-IoT-Devices 中获取主密钥，并从Devices选项卡中获取设备ID，在步骤5中创建设备的位置。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure1.jpeg"/></div>

配置成功后，重新启动Wio Terminal，它将开始连接到Azure IoT Central，您可以在串行终端上查看详细的进度反馈信息。然后，您将能够看到以下内容：(a)仪表板上的设备状态已更改为已配置；(b)来自加速度计传感器的遥测数据在Device -> Raw data中。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure2.jpeg"/></div>

然后，我们添加了负责Edge Impulse模型推断和线程的部分，并修改了发送遥测数据的函数，以发送进入的人数、离开的人数和房间内的总人数的值。我们还添加了一个简单的GUI，包括三个按钮和一个文本字段，用于显示信息更新 - 您可以通过打开项目GitHub存储库中的WioTerminal_EI_People_Counting_Azure_Central_LVGL.ino来查看最终的Sketch代码。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test2.gif"/></div>

最困难的部分实际上是确保每个单独的线程正常工作且不影响其他线程。为了在不过度复杂化代码的情况下实现这一点，我们做出了一些妥协，例如将LVGL任务更新函数放在界面更新之后，并且不让它定期运行。

## 参考资料

- [Edge Impulse 公共项目](https://studio.edgeimpulse.com/public/18808/latest)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_3_People_Counting)
