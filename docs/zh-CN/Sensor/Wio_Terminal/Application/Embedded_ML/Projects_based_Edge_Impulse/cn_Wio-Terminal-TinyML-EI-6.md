---
description: 用于预测性维护的异常检测
title: 用于预测性维护的异常检测
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-EI-6
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Wio Terminal Edge Impulse 用于预测性维护的异常检测

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

在这个项目中，我们将使用来自 Wio Terminal 内置加速度计的数据，在设备上执行异常检测，然后将数据发送到 Blynk Edgent 云端。

异常检测。或者具体来说是用于预测性维护的异常检测。我们将使用来自 Wio Terminal 内置加速度计的数据，在设备上执行神经网络模型推理和异常检测，然后将数据发送到具有大量新功能的新版本 Blynk IoT 平台，该平台完全支持 Wio Terminal。

有关完整教程和视频演示，请查看配套视频：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gXs-h3eeT1U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

这就是"是什么"，现在让我们从一个可能更熟悉的例子开始"如何做"的部分。

## 异常检测和预测性维护简述

如果你训练一个简单的图像识别模型来识别比如说 5 种不同类别的动物（老虎、大象、熊、蛇和长颈鹿），然后给它一张人的图像，它会尽其所能地进行预测，可能会说这是一头大象。这会引起普通人的笑声，他们对这个特定模型的内部工作原理和计算机视觉一般不太了解。

当然，模型没有做错任何事情——它处理了图像，计算了存在的特征，然后基于这些特征输出分类结果。虽然如果我们绘制类别的特征并将它们聚类，我们会看到理想情况下人类图像特征远离任何类别聚类，因此代表一个"异常值"。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/knowing_all_about_outliers_in_machine_learning_sample_points_in_green_are_near_to_each_other.png"/></div>

当然，这可能只是其中一种动物的非常奇怪的图像，但在大多数情况下，它更可能是模型没有被训练识别的对象。

对于计算机视觉和语音识别任务，我们经常有"背景"类来处理这个问题，它基本上代表任何不是感兴趣类别的东西。在某些情况下，我们真的只是希望我们的模型能够将所有数据解释为"正常"和"异常"。"异常"的确切特征是什么并不重要——它们可能截然不同，重要的是，如果检测到"异常"类别，需要实施一些措施。我现在描述的是使用机器学习进行预测性维护背后的前提。我们用传感器监控设备的状态，无论是空调、水泵还是其他机械，基于已知"正常"操作的配置文件，试图检测何时出现轻微错误，在出现严重错误之前。

## 收集数据和训练模型

对于这个项目，我在我们办公室外面露台的水泵上安装了 Wio Terminal，那里有一些植物和鱼。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_04_2007-1536x864.png"/></div>

然后我收集了两类样本——空闲和正常运行，并训练了一个简单的模型，基于频谱特征处理块输出来识别这两种状态。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-1.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-2.png"/></div>

关于处理和学习块的确切参数，您可以查看我分享的项目公开版本。我做的唯一重要调整是将滤波器从低通改为高通，这使得不同类别的特征更加突出。区分空闲和正常水泵运行当然被证明是非常容易的。更具挑战性的任务是故障检测。为了模拟故障，我会将水泵从水箱中取出——这基本上导致声音和振动水平下降。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

查看故障样本，在特征浏览器的 accX RMS、accY RMS 和 accZ RMS 轴上，我们看到它处于空闲和正常运行样本之间。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-3-1536x906.png"/></div>

我们可以利用这一点，通过训练一个新的（第二个）网络，该网络围绕我们之前见过的数据创建聚类，并将传入数据与这些聚类进行比较。如果与聚类的距离太大，样本就会被标记为异常。

经过反复试验，我发现非常低的聚类数量和 0.5 的距离阈值对异常检测效果最好，但这非常具体于案例，取决于您的数据。有助于提高准确性的一件事是用胶水将 Wio Terminal 牢固地固定在水泵上——对于实际设备，您可以使用螺丝。在牢固固定之前，Wio Terminal 会随机摆动，这给正常运行样本引入了太多噪声。

## 部署和测试

在使用实时分类模式训练和测试模型后，是时候将其部署回设备了。我们编译并下载 Arduino 库，将其解压到 Arduino 库文件夹，然后修改 nano33_ble_sense_accelerometer 草图以匹配 Wio Terminal 中的加速度计。对于简单测试，我们使用 LCD 屏幕，如果检测到异常就显示红色。

```cpp
#define ANOMALY_THRESHOLD 0.5

/* Includes ---------------------------------------------------------------- */
#include <wio_anomaly_detection_inference.h>
#include"LIS3DHTR.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;
LIS3DHTR<TwoWire> lis;

/* Constant defines -------------------------------------------------------- */
#define CONVERT_G_TO_MS2    9.80665f

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // 将此设置为 true 以查看例如从原始信号生成的特征

/**
* @brief      Arduino 设置函数
*/
void setup()
{
    // 将您的设置代码放在这里，只运行一次：
    Serial.begin(115200);
    //while (!Serial) {delay(10);}
    
    Serial.println("Edge Impulse 推理演示");
    
    tft.begin();
    tft.setRotation(3);
    
    lis.begin(Wire1);
 
    if (!lis.available()) {
    Serial.println("初始化 IMU 失败！");
    while (1);
    }
    else {
        ei_printf("IMU 已初始化\r\n");
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // 将输出数据速率设置为 25Hz，最高可设置为 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // 将量程范围设置为 2g，可从 2,4,8,16g 中选择
   

    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {
        ei_printf("错误：EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME 应该等于 3（3 个传感器轴）\n");
        return;
    }
}

/**
* @brief      Printf 函数使用 vsnprintf 并通过 Arduino Serial 输出
*
* @param[in]  format     可变参数列表
*/
void ei_printf(const char *format, ...) {
   static char print_buf[1024] = { 0 };

   va_list args;
   va_start(args, format);
   int r = vsnprintf(print_buf, sizeof(print_buf), format, args);
   va_end(args);

   if (r > 0) {
       Serial.write(print_buf);
   }
}

/**
* @brief      获取数据并运行推理
*
* @param[in]  debug  如果为 true 则获取调试信息
*/
void loop()
{

    ei_printf("采样中...\n");

    // 在这里为我们将从 IMU 读取的值分配一个缓冲区
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // 确定下一个时钟周期（然后稍后休眠）
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // 将原始缓冲区转换为我们可以分类的信号
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("从缓冲区创建信号失败 (%d)\n", err);
        return;
    }

    // 运行分类器
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("错误：运行分类器失败 (%d)\n", err);
        return;
    }

    // 打印预测结果
    ei_printf("预测结果 ");
    ei_printf("(DSP: %d ms., 分类: %d ms., 异常: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    异常分数: %.3f\n", result.anomaly);

  if (result.anomaly > ANOMALY_THRESHOLD)
  {       
    tft.fillScreen(TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("检测到异常", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
  }
    
#endif
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER
#error "当前传感器的模型无效"
#endif
```

当然，对于实际应用来说，这种通知方式不太可能有效，因为没有人会持续监控它。

## 利用 Blynk IoT 平台的新版本

为了让这个演示更有用，我们将使用 Blynk IoT 平台。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/b641e2030c1c47fbc7161c98a7e5d998.jpg"/></div>

Blynk IoT 平台包含以下功能：用于监控设备的网页仪表板、管理数据访问权限、用于简化设置流程的 Wi-Fi 管理器、设备模型创建的新方法等等。

访问 blynk.cloud，注册账户或创建新账户。然后创建一个新模板——模板是设备的数字模型，可以被具有相似功能的多个设备继承。模板的强大之处在于无论设备群的规模如何，都能即时更新设备数据模型。

选择 Arduino Uno 作为硬件，Wi-Fi 作为连接类型。然后按照以下截图填充数据流和仪表板选项卡，并保存更改。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-4-1536x551.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-5.png"/></div>

在这个项目中我们不使用元数据或事件选项卡。设备模板主要组件的主要用途：

- 元数据 – 您可以配置的关于设备的附加数据。
- 数据流 – 定义从设备流入和流出数据的实体。总的来说，它与虚拟引脚非常相似（也可以使用虚拟引脚）。
- 事件 – 重要警报和通知的列表。
- 网页仪表板 – 网页应用中的一组小部件
- 移动仪表板 – 移动应用中的一组小部件

在"我的设备"选项卡中创建新设备——选择您创建的模板并给它一个唯一的名称。

现在网页界面已准备好接收来自我们设备的数据。从 Seeed Wio Terminal 示例代码库下载示例代码——除了主代码文件外，它还包含辅助文件，其中包含 Wi-Fi 管理器代码。在主代码文件中，我们用于 LCD 屏幕测试的数据收集/数据处理/推理代码被移动到 run_inference() 函数中。具有最高置信度的类别 ID（如果置信度高于设定阈值）保存在 best_result 全局变量中，并与光线和声音传感器数据一起定期发送到 Blynk 服务器。记住将 BLYNK_TEMPLATE_ID 和 BLYNK_DEVICE_NAME 更改为您设备模板中的对应值。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-6.png"/></div>

将代码上传到 Wio Terminal 后，它会创建一个热点，您可以用手机连接。连接后，您将自动重定向到一个简单的配置页面，您需要输入 WiFi 凭据、API 令牌（您可以在"我的设备"选项卡中点击您的设备，然后转到设备信息找到它），然后点击连接。然后 Wio Terminal 将连接到 WiFi 网络和 Blynk 云服务器并开始发送数据。您可以在"我的设备"选项卡中按设备，查看漂亮的图表和状态消息。您可以在视频末尾看到测试结果。

显然，同样的方法可以应用于检测其他机械操作中的异常——我们可以将加速度计用于几乎所有具有运动部件的设备，因为这些会产生我们可以测量的振动。如果设备发出可听见的声音，我们也可以使用麦克风。传感器的组合甚至可能效果更好。还有其他可以使用预测性维护的好应用吗？在评论中写下您的想法！希望这篇文章和视频对您有用！

## 参考资料

- [Edge Impulse 公共项目](https://studio.edgeimpulse.com/public/31205/latest)

- [项目 Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_5_Anomaly_Detection)