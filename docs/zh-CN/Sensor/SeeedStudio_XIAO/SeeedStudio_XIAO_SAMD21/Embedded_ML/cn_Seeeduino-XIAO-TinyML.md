---
description: Seeed Studio XIAO SAMD21 上的 TinyML
title: Seeed Studio XIAO SAMD21 上的 TinyML
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-TinyML
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# Seeed Studio XIAO 系列上的 TinyML

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>


得益于近期在模型优化方面的改进以及专门为在微控制器上运行机器学习模型推理而创建的框架的出现，现在可以为这些微型设备赋予更多智能。我们现在可以在微控制器上部署神经网络来进行音频场景识别（例如大象活动或玻璃破碎声）、热词检测（用特定短语激活设备）甚至简单的图像识别任务。带有嵌入式微控制器的设备可以为旧传感器赋予新的生命和意义，例如使用安装在机械装置上的加速度计进行异常检测和预测性维护——或者区分各种酒类，如[这个演示](https://wiki.seeedstudio.com/cn/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)所示！
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>


**TinyML 的可能性真的非常巨大。**

我们已经制作了一个[关于部署微型机器学习模型的完整系列](https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML/)到另一个 Seeed studio 产品——Wio Terminal，这是一个装在塑料外壳中的紧凑型开发板。但是可以做得更小，将类似的模型部署到 ARM Cortex M0+ 和基于它构建的小型 [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 开发板上——该开发板只有拇指大小（21×17.8mm），功耗仅为 1.33 mAh（这意味着它可以在 150 mA 电池上工作约 112 小时，如果进入深度睡眠模式会更长），成本仅为 4.3 美元。

本项目涵盖了在 Seeed Studio XIAO SAMD21 和 Seeed Studio XIAO RP2040 开发板上训练和部署模型。如需更多信息，请查看相应的视频！

<iframe width={560} height={315} src="https://www.youtube.com/embed/04_7U8MzVKg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


## 数据采集和模型训练

软件工程师在椅子上对着发光的屏幕花费大量时间。一天下来，很难保持正确的姿势。如果有一种设备能够学习你特定的身体姿势，区分正确和错误的姿势，并在你过度弯腰或进入"Python 姿势"时警告你，那该多好……等等，确实有这样的设备！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png" /></div>


为机器学习模型提供数据的最佳传感器显然是加速度计。原始的 Seeed Studio XIAO SAMD21 和 Seeed Studio XIAO RP2040 由于体积很小，没有配备加速度计传感器，而较新的 Seeed Studio XIAO nRF52840 Sense 则内置了加速度计。

如果你使用原始的 Seeed Studio XIAO SAMD21 和 Seeed Studio XIAO RP2040，可以将 [Grove LIS3DH 加速度计](https://wiki.seeedstudio.com/cn/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/)模块连接到 [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)并开始收集数据。为每种姿势收集 3 个数据样本，每个样本 60 秒，设备贴在背部的 T 恤上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" /></div>


对于每个样本，保持相同的姿势，但包括一些手臂、头部和躯干的运动来模拟正常活动。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png" /></div>

选择 5 秒时间窗口，窗口移位为 1 秒，并使用 Flatten 处理块，因为我们处理的是变化很慢的数据。一个非常简单的全连接网络提供了良好的准确性。在文章底部的参考部分，你可以找到 Edge Impulse 项目公开版本的链接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png" /></div>

可以通过收集更多数据并确保在设备在衣服上的位置有一些变化时仍能识别正确和不正确的姿势来进行一些改进。由于该设备被认为是个人使用设备，它不需要泛化到不同人的姿势，可以很容易地重新训练。你可以在实时分类选项卡中检查它在训练后检测你姿势的效果如何。

## 模型部署

当你对准确性满意后，将生成的模型作为 Arduino 库下载并复制到你的 Arduino sketches/libraries 文件夹中。你可以在文章底部的参考部分找到示例代码。示例代码收集 5 秒样本，执行推理，如果检测到不正确的姿势之一，就会打开蜂鸣器。

```cpp
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
#endif
    
  if (result.classification[1].value > ALARM_THRESHOLD || result.classification[2].value > ALARM_THRESHOLD)
  {     
  tone(BUZZER_PIN, 523, 250);
  delay(250);
  noTone(BUZZER_PIN);
  delay(250);  
  tone(BUZZER_PIN, 523, 250);
  delay(250);  
  noTone(BUZZER_PIN);    
  }

}
```

由于这是相对缓慢变化的数据，我们不需要快速响应时间，正常的顺序推理管道非常适合这个应用。

更进一步的做法是使用最新的 Seeed Studio XIAO nRF52840 并将设备连接到用户的智能手机，这将允许更好的警报、统计等功能。

祝您玩得开心，记住保持良好的姿势！

## 参考资料

- [Edge Impulse 公共项目](https://studio.edgeimpulse.com/public/20025/latest)

- [项目 Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection)