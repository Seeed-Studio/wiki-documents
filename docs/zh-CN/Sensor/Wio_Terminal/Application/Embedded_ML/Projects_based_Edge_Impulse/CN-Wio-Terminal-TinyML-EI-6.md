---
description:  用于预测性维护的异常检测
title:  用于预测性维护的异常检测
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-EI-6
last_update:
  date: 3/06/2024
  author: 金菊
---

# Wio Terminal Edge Impulse 用于预测性维护的异常检测

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

在这个项目中，我们将使用Wio Terminal内置的加速度计数据，在设备上执行异常检测，然后将数据发送到Blynk Edgent Cloud。

异常。或者更具体地说，用于预测性维护的异常检测。我们将使用Wio Terminal内置的加速度计数据，在设备上执行神经网络模型推断和异常检测，然后将数据发送到全面支持Wio Terminal的新版Blynk IoT平台，该平台具有丰富的新功能。

完整的教程和视频演示，请查看附带的视频：

<iframe width="560" height="315" src="https://www.youtube.com/embed/gXs-h3eeT1U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

那是 WHAT, 现在是 HOW 部分，让我们从一个可能更为熟悉的例子开始。

## 异常检测和预测性维护简介

如果您训练一个简单的图像识别模型来识别5个不同类别的动物（老虎、大象、熊、蛇和长颈鹿），然后给它一张人的照片，它将尽力进行预测，并可能说这是一头大象。这时普通人会笑，因为他们对这个特定模型和计算机视觉的内部工作并不了解太多。

当然，模型没有做错任何事情-它处理了图片，计算了存在的特征，然后根据这些特征输出了分类结果。尽管如此，如果我们将类别的特征绘制并进行聚类，我们会发现理想情况下，人的图像特征远离任何类别的聚类，因此表示为“异常值”。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/knowing_all_about_outliers_in_machine_learning_sample_points_in_green_are_near_to_each_other.png"/></div>

当然，这可能只是动物中的一张非常奇怪的图像，但在大多数情况下，更有可能是一个模型没有被训练识别的物体。

对于计算机视觉和语音识别任务，我们经常有一个“背景”类来解决这个问题，它基本上代表着不是我们感兴趣的类别的任何东西。在某些情况下，我们确实希望我们的模型能够将所有数据解释为“正常”和“异常”。这里的“异常”具体特征并不重要-它们可以截然不同，重要的是，如果检测到“异常”类别，需要采取一些措施。我刚才描述的就是使用机器学习进行预测性维护的前提。我们通过传感器监测设备的状态，无论是空调、水泵还是其他机械设备，并根据已知“正常”运行的特征，试图在事情变得严重之前，检测到一些微妙的问题


## 收集数据和训练模型

在这个项目中，我在我们办公室外面的庭院里安装了Wio Terminal，并将其安装在一个水泵上，水泵旁边有一些植物和鱼。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_04_2007-1536x864.png"/></div>

然后，我收集了两个类别的样本-空闲和正常运行，并根据光谱特征处理模块的输出训练了一个简单的模型来识别这两个类别。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-1.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-2.png"/></div>

关于处理和学习模块的确切参数，您可以查看我分享的项目的公共版本。我做出的唯一重大调整是将滤波器从低频调整为高频，这使得不同类别的特征更加突出。当然，区分空闲和正常泵操作显然非常容易。更具挑战性的任务是故障检测。为了模拟故障，我会将水泵从水箱中取出-这基本上导致声音和振动水平降低。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

观察故障样本时，我们可以在accX RMS、accY RMS和accZ RMS轴上的特征探索器中看到它介于空闲和正常操作样本之间。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-3-1536x906.png"/></div>

我们可以利用这一点，训练一个新的（第二个）网络，围绕我们以前见过的数据创建聚类，并将传入的数据与这些聚类进行比较。如果与聚类的距离过大，则将样本标记为异常。

经过反复尝试，我发现非常低的聚类数和距离阈值为0.5对于异常检测效果最好，但这非常依赖于您的数据，并且具有很强的案例特定性。增加准确性的一件事是用胶水牢固地固定Wio Terminal在水泵上-对于实际设备，您可以使用螺丝。在牢固固定之前，Wio Terminal会随机晃动，这会给正常操作样本引入太多噪音。

## 部署和测试

在训练和使用实时分类模式测试模型之后，就可以将其部署回设备了。我们编译并下载Arduino库，将其提取到Arduino库文件夹中，然后修改nano33_ble_sense_accelerometer示例以适应Wio Terminal上的加速度计。为了进行简单的测试，我们使用LCD屏幕，如果检测到异常，屏幕会亮起红色。

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
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal

/**
* @brief      Arduino setup function
*/
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    //while (!Serial) {delay(10);}
    
    Serial.println("Edge Impulse Inferencing Demo");
    
    tft.begin();
    tft.setRotation(3);
    
    lis.begin(Wire1);
 
    if (!lis.available()) {
    Serial.println("Failed to initialize IMU!");
    while (1);
    }
    else {
        ei_printf("IMU initialized\r\n");
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // Setting scale range to 2g, select from 2,4,8,16g
   

    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {
        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to 3 (the 3 sensor axes)\n");
        return;
    }
}

/**
* @brief      Printf function uses vsnprintf and output using Arduino Serial
*
* @param[in]  format     Variable argument list
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
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
void loop()
{

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // Turn the raw buffer in a signal which we can the classify
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Failed to create signal from buffer (%d)\n", err);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);

  if (result.anomaly > ANOMALY_THRESHOLD)
  {       
    tft.fillScreen(TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Anomaly detected", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
  }
    
#endif
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER
#error "Invalid model for current sensor"
#endif
```

当然，对于真正的应用程序，这种通知方式可能不太适用，因为没有人可以不断监视它。

## 利用新发布的Blynk物联网平台

为了使这个演示有用，我们将使用Blynk IoT平台。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/b641e2030c1c47fbc7161c98a7e5d998.jpg"/></div>

Blynk IoT平台包括Web仪表板用于监控设备、管理访问数据的人员、Wi-Fi管理器用于简化设置过程，以及新的设备模型创建方法等功能。

访问 blynk.cloud，注册一个帐户或创建一个新帐户。然后创建一个新的模板-模板是设备的数字模型，可以被具有类似功能的多个设备继承。模板的优势在于，无论设备规模如何，都可以立即更新设备数据模型。

选择Arduino Uno作为硬件，并选择Wi-Fi作为连接类型。然后按照以下截图中的方式填充 Datastream 和 Dashboard 选项卡，并保存更改。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-4-1536x551.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-5.png"/></div>

在这个项目中，我们不使用 Metadata 或 Events 选项卡。设备模板的主要组成部分的主要目的是：

- Metadata – 关于设备的其他数据，可以进行配置。
- Datastreams – 用于定义从设备流入和流出的数据的实体。总体而言，它与虚拟引脚非常相似（也可以使用虚拟引脚）。
- Events – 重要警报和通知的列表。
- Web Dashboard – Web应用程序中的一组小部件
- Mobile Dashboard – 移动应用程序中的一组小部件

在 My Devices 选项卡中创建一个新设备-选择您创建的模板，并给它一个唯一的名称。

现在，Web界面已准备好接收来自设备的数据。从 Seeed Wio Terminal 示例代码库下载示例代码-除了主要的代码文件外，它还包含了帮助文件，其中包含Wi-Fi管理器代码。在主要的代码文件中，我们将用于测试LCD屏幕的数据收集/数据处理/推断代码移动到了 run_inference() 函数中。具有最高置信度的类别的类ID（如果置信度高于设定的阈值）保存在 best_result 全局变量中，并与光线和声音传感器的数据一起定期发送到Blynk服务器。记得将 BLYNK_TEMPLATE_ID 和 BLYNK_DEVICE_NAME 更改为设备模板中的ID和名称。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-6.png"/></div>

将代码上传到Wio Terminal后，它将创建一个热点，您可以使用手机连接到该热点。连接后，您将自动重定向到一个简单的配置页面，在该页面中，您需要输入您的Wi-Fi凭据、API令牌（可以在 My Devices 选项卡中点击 Device ，然后转到  Device Info 中找到）然后点击 Connect 。然后，Wio Terminal将连接到Wi-Fi网络和Blynk云服务器，并开始发送数据。您可以在 My Devices 选项卡中点击 Device ，查看漂亮的图表和状态消息。您可以在视频的最后看到测试结果。

显然，相同的方法可以应用于检测其他机器操作的异常情况-我们可以几乎对所有具有运动部件的设备使用加速度计，因为这些部件会产生我们可以测量的振动。如果设备发出可听到的声音，我们还可以使用麦克风。使用多个传感器的组合可能效果更好。还有其他哪些应用中可以使用预测性维护？在评论中分享您的想法！希望这篇文章和视频对您有用！

## 参考资料

- [Edge Impulse 公共项目](https://studio.edgeimpulse.com/public/31205/latest)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_5_Anomaly_Detection)
