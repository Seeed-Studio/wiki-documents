---
description: 在Seeed Studio XIAO SAMD21上的TinyML
title: 使用 XIAO SAMD21 学习嵌入式机器学习
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-TinyML
last_update:
  date: 10/29/2023
  author: 金 菊
---

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>


由于模型优化的最新改进和专门用于在微控制器上运行机器学习模型推断的框架的出现，我们现在可以为这些微小设备赋予更多智能。我们现在可以在微控制器上部署神经网络，用于音频场景识别（例如象的活动或玻璃破碎声），热词检测（用于激活设备的特定短语）甚至简单的图像识别任务。嵌入式微控制器设备可以用于赋予旧传感器新的生命和意义，例如使用安装在机械装置上的加速度计进行异常检测和预测性维护，或者用于区分不同种类的酒类，如 [此演示](https://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)中所示! 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>


**TinyML的可能性确实是巨大的。**

我们已经针对另一款Seeed Studio产品Wio Terminal制作了 [一整个系列关于部署微型机器学习模型的视频](https://wiki.seeedstudio.com/Wio-Terminal-TinyML/) , 但是，我们也可以进一步缩小规模，将类似的模型部署到ARM Cortex M0+和小型的 [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 开发板上。该开发板非常小巧（20×17.5mm），仅消耗1.33mAh的电量（这意味着它可以在150mAh的电池上工作约112小时，如果处于深度休眠状态，使用时间会更长），而且价格仅为4.3美元。

该项目涵盖了将模型训练和部署到Seeed Studio XIAO SAMD21和Seeed Studio XIAO RP2040开发板的内容。如需更多信息，请查看相应的视频！

<iframe width={560} height={315} src="https://www.youtube.com/embed/04_7U8MzVKg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


## 数据采集和模型训练

软件工程师花费大量时间坐在发光的屏幕前。而到了一天晚些时候，保持正确的姿势变得困难。如果有一种设备可以学习您特定的身体姿势，以识别正确和错误的姿势，并在您过于驼背或进入“Python姿势”时发出警告，那该多好啊...等一下，这是有可能的！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png" /></div>


用于提供机器学习模型所需数据的最佳传感器显然是加速度计。原始的Seeed Studio XIAO SAMD21和Seeed Studio XIAO RP2040非常小巧，没有配备加速度计传感器，而较新的Seeed Studio XIAO nRF52840 Sense则具备内置的加速度计。 

如果您使用原始的Seeed Studio XIAO SAMD21和Seeed Studio XIAO RP2040，您可以将 [Grove LIS3DH加速度计模块](https://wiki.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/) 连接到 [Seeed Studio XIAO扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 上，开始收集数据。对于每个姿势，收集3个数据样本，每个样本持续60秒，将设备固定在您的背部的T恤上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" /></div>


对于每个样本，请保持相同的姿势，但包括一些手臂、头部和躯干的运动，以模拟正常活动。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png" /></div>

选择5秒的时间窗口，窗口移动间隔为1秒，并使用Flatten处理块，因为我们处理的是非常缓慢的数据。一个非常简单的全连接网络提供了良好的准确性。在文章底部的参考部分，您可以找到指向Edge Impulse项目公共版本的链接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png" /></div>

通过收集更多数据并确保可以识别正确和错误的姿势，可以进行一些改进，包括在衣物上调整设备位置以引入一些变化。由于该设备被设计为个人使用设备，因此不需要适应不同人的姿势，并且可以轻松重新进行训练。您可以在实时分类选项卡中检查训练后它对您的姿势的检测效果。

## 模型部署

在您对准确性感到满意后，将生成的模型下载为Arduino库，并将其复制到Arduino sketches/libraries文件夹中。您可以在文章底部的参考部分找到示例代码。示例代码收集5秒的样本，执行推断，并在检测到不正确的姿势时打开蜂鸣器。

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

由于数据变化相对较慢且不需要快速响应时间，正常的顺序推断流水线非常适合这个应用。

更进一步的是使用最新的Seeed Studio XIAO nRF52840，并将设备连接到用户的智能手机上，这将允许更好的警报、统计等功能。

祝您愉快的调试过程，并记住保持良好的姿势！

## 参考资料

- [Edge Impulse公共项目](https://studio.edgeimpulse.com/public/20025/latest)

- [项目的Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection)