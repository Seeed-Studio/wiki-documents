---
description:  语音识别和语音-意图
title:  语音识别和语音-意图
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-TFLM-3
last_update:
  date: 3/06/2024
  author: 金菊
---

# Wio Terminal上的TensorFlow Lite Micro语音识别-语音-意图

A传统的使用语音进行设备控制/用户请求满足的方法是先将语音转录为文本，然后解析文本以得到适当格式的命令/查询。虽然这种方法在词汇量和/或应用场景方面提供了很大的灵活性，但是将语音识别模型和专用解析器结合在一起并不适合于资源受限的微控制器

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png" /></div>

    Source: Wio Terminal, Picovoice, Tensorflow Lite

在这个项目中，我们将采用一种更高效的方法，直接将用户的话语解析为可执行的输出，即意图/槽。我们将分享训练特定领域语音到意图模型并将其部署到内置麦克风的基于Cortex M4F的开发板Wio Terminal的技术。

有关更多细节和视觉效果，请观看相应的视频!

<iframe width="560" height="315" src="https://www.youtube.com/embed/CVq4cet5jgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

有不同类型的语音识别任务，我们可以大致将它们分为三组：

- 大词汇连续语音识别（LVCSR）
- 关键词检测
- 语音到意图

关键词检测在微控制器上效果很好，使用各种无代码开源工具（例如Edge Impulse）进行训练相对容易，但无法很好地处理较大的词汇量。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-7-768x570.png" /></div>

如果我们希望设备能根据语音输入执行有用的操作，我们需要结合LVCSR模型和基于文本的自然语言解析器。这种方法鲁棒性强，相对容易实现，因为公开可用的语音识别引擎很多，但是即使在单板计算机上运行也不适合，更不用说微控制器了。

还有第三种方式，直接将语音转换为基于特定领域词汇的解析意图。以智能洗衣机或智能灯为例，通过处理话语“正常循环低速”，语音到意图模型将输出解析的意图，例如：

```json
{ Intent: washClothes },
{ Slots: cycle: normal,
         spin: low,
         water: default }
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-9-768x621.png" /></div>

这就是我们需要的一切，我们可以用声音来控制智能洗衣机。

语音到意图在研究中得到很好的代表，但缺乏适用于微控制器的广泛开源实现。 适用于微控制器的实现。
生产就绪，而不是开源:

- Picovoice
- Fluent.ai

适用于生产的开源软件，不适合微控制器：

- Speechbrain.io

您可以使用我们准备的Jupyter Notebook或GitHub存储库中的训练脚本进行模型训练 (在文章末尾的 **Reference** 部分找到)。 Jupyter Notebook包含一个非常基本的参考模型实现，并对每个单元进行了解释。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-10.png" /></div>

在训练模型后，将其复制到Wio Terminal代码所在的文件夹中，并将模型的名称更改为 [line 106](https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/886746bb1878971d43e3e39584e0e2a492933491/inference_code/Wio_Terminal/wio_speech_to_intent_150_10/wio_speech_to_intent_150_10.ino#L106) 中的模型名称。让我们简要介绍代码的最重要部分。它可以大致分为三个部分：

- 音频获取
- MFCC计算
- 对MFCC特征进行推理

## 音频采集

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/DMAPIO.GIF" /></div>

为了使用Wio终端内置麦克风录制声音进行处理，我们使用Cortex M4F MCU的DMA ADC功能。DMA代表直接内存访问，它的功能就是字面意义上的——在MCU中的一个特定部分称为DMAC或直接内存访问控制，在事先设置好的情况下，将数据从一个位置（例如内部存储器、SPI、I2C、ADC或其他接口）传输到另一个位置。这样，传输可以在MCU的较少参与下进行，除了初始设置之外。我们在这里设置传输的源和目的地。

```cpp
descriptor.descaddr = (uint32_t)&descriptor_section[1]; // Set up a circular descriptor
descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg; // Take the result from the ADC0 RESULT register
descriptor.dstaddr = (uint32_t)adc_buf_0 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_0 array
descriptor.btcnt = ADC_BUF_LEN;  // Beat count
descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |   // Beat size is HWORD (16-bits)
                      DMAC_BTCTRL_DSTINC |      // Increment the destination address
                      DMAC_BTCTRL_VALID |       // Descriptor is valid
                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // Suspend DMAC channel 0 after block transfer
memcpy(&descriptor_section[0], &descriptor, sizeof(descriptor));  // Copy the descriptor to the descriptor section
descriptor.descaddr = (uint32_t)&descriptor_section[0];           // Set up a circular descriptor
descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                 // Take the result from the ADC0 RESULT register
descriptor.dstaddr = (uint32_t)adc_buf_1 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_1 array
descriptor.btcnt = ADC_BUF_LEN;  // Beat count
descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |    // Beat size is HWORD (16-bits)
                      DMAC_BTCTRL_DSTINC |    // Increment the destination address
                      DMAC_BTCTRL_VALID |      // Descriptor is valid
                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // Suspend DMAC channel 0 after block transfer
memcpy(&descriptor_section[1], &descriptor, sizeof(descriptor));  // Copy the descriptor to the descriptor section
```

正如我们在DMA描述符中指定的参数DMAC_BTCTRL_BLOCKACT_SUSPEND一样，在完成一个块传输后，DMA通道应挂起。然后，我们继续设置一个由TC5定时器触发的ISR（中断服务程序）：

```cpp
 // Configure Timer/Counter 5
GCLK->PCHCTRL[TC5_GCLK_ID].reg = GCLK_PCHCTRL_CHEN | // Enable perhipheral channel for TC5
GCLK_PCHCTRL_GEN_GCLK1;    // Connect generic clock 0 at 48MHz
TC5->COUNT16.WAVE.reg = TC_WAVE_WAVEGEN_MFRQ;     // Set TC5 to Match Frequency(MFRQ) mode
TC5->COUNT16.CC[0].reg = 3000 - 1;                          // Set the trigger to 16 kHz: (4Mhz / 16000) - 1
while (TC5->COUNT16.SYNCBUSY.bit.CC0);                      // Wait for synchronization
// Start Timer/Counter 5
TC5->COUNT16.CTRLA.bit.ENABLE = 1;                          // Enable the TC5 timer
while (TC5->COUNT16.SYNCBUSY.bit.ENABLE);                   // Wait for synchronization
```

中断服务程序（ISR）将以等间隔的时间间隔调用特定函数，由TC5定时器控制。让我们看看这个函数。

```cpp
/**
 * Interrupt Service Routine (ISR) for DMAC 1
 */
void DMAC_1_Handler() {

  static uint8_t count = 0;

  // Check if DMAC channel 1 has been suspended (SUSP)
  if (DMAC->Channel[1].CHINTFLAG.bit.SUSP) {

     // Debug: make pin high before copying buffer
#ifdef DEBUG
    digitalWrite(debug_pin, HIGH);
#endif

    // Restart DMAC on channel 1 and clear SUSP interrupt flag
    DMAC->Channel[1].CHCTRLB.reg = DMAC_CHCTRLB_CMD_RESUME;
    DMAC->Channel[1].CHINTFLAG.bit.SUSP = 1;

    // See which buffer has filled up, and dump results into large buffer
    if (count) {
      audio_rec_callback(adc_buf_0, ADC_BUF_LEN);
    } else {
      audio_rec_callback(adc_buf_1, ADC_BUF_LEN);
    }

    // Flip to next buffer
    count = (count + 1) % 2;

    // Debug: make pin low after copying buffer
#ifdef DEBUG
    digitalWrite(debug_pin, LOW);
#endif
  }
}
```

ISR函数DMAC1_Handler()检查是否挂起了DMAC通道1，这发生在一块信息录制完成时。如果挂起了，它调用用户定义的函数audio_rec_callback()，在这个函数中，我们将填充的DMA ADC缓冲区的内容复制到一个（可能更大的）用于计算MFCC特征的缓冲区中。在此步骤中，我们还可以选择对声音进行一些后处理。

## MFCC 计算

MFCC特征提取以与TensorFlow MFCC Op代码匹配的方式借用自ARM在ARM微控制器上进行关键字搜索的存储库。您可以在 [此处](https://github.com/ARM-software/ML-KWS-for-MCU) 此处找到原始代码。

与MFCC特征计算相关的大部分工作都发生在MFCC类的mfcc_compute (const int16_t *audio_data, float* mfcc_out)方法中。该方法接收一个音频数据的指针，对于我们的情况，是320个声音数据点的指针，以及指向MFCC输出值数组中特定位置的指针。对于一个时间片，我们执行以下操作：

将数据归一化为-1到1之间的范围并进行填充（在我们的情况下，填充不会发生，因为音频数据的大小总是足够计算一个时间片的MFCC特征）：

```cpp
  //TensorFlow way of normalizing .wav data to (-1,1)
  for (i = 0; i < frame_len; i++) {
    frame[i] = (float)audio_data[i]/(1<<15); 
  }
  //Fill up remaining with zeros
  memset(&frame[frame_len], 0, sizeof(float) * (frame_len_padded-frame_len));
```

使用ARM数学库函数计算 RFTT or [实数快速傅里叶变换](https://www.keil.com/pack/doc/CMSIS/DSP/html/group__RealFFT.html) ：

```cpp
  //Compute FFT
  arm_rfft_fast_f32(rfft, frame, buffer, 0);
```

将值转换为功率谱：

```cpp
  //frame is stored as [real0, realN/2-1, real1, im1, real2, im2, ...]
  int32_t half_dim = frame_len_padded/2;
  float first_energy = buffer[0] * buffer[0],
        last_energy =  buffer[1] * buffer[1];  // handle this special case
  for (i = 1; i < half_dim; i++) {
    float real = buffer[i*2], im = buffer[i*2 + 1];
    buffer[i] = real*real + im*im;
  }
  buffer[0] = first_energy;
  buffer[half_dim] = last_energy;  
```

然后将梅尔滤波器应用于保存在上一步缓冲区中的数据的平方根。梅尔滤波器是在实例化MFCC类时创建的，在create_mel_fbank()方法中。用户事先指定了滤波器的数量、最小和最大频率，并且保持这些设置在训练脚本和推断代码之间一致非常重要，否则会导致显著的准确性下降。

```cpp
  float sqrt_data;
  //Apply mel filterbanks
  for (bin = 0; bin < NUM_FBANK_BINS; bin++) {
    j = 0;
    float mel_energy = 0;
    int32_t first_index = fbank_filter_first[bin];
    int32_t last_index = fbank_filter_last[bin];
    for (i = first_index; i <= last_index; i++) {
      arm_sqrt_f32(buffer[i],&sqrt_data);
      mel_energy += (sqrt_data) * mel_fbank[bin][j++];
    }
    mel_energies[bin] = mel_energy;

    //avoid log of zero
    if (mel_energy == 0.0)
      mel_energies[bin] = FLT_MIN;
  }
```

最后，我们对梅尔能量数组进行 [离散余弦变换](https://en.wikipedia.org/wiki/Discrete_cosine_transform) ，并将其写入MFCC特征输出数组。在原始脚本中，这一步还进行了量化，但我选择使用Tensorflow Lite for Microcontrollers示例中的量化过程。

## 对MFCC特征进行推断

一旦一个样本（3秒内的所有音频）的所有音频都经过处理并转换为MFCC特征，我们将整个MFCC特征数组从FLOAT32转换为INT8值，并将其输入神经网络。 TensorFlow Lite for Microcontrollers 的初始化和推断过程已在我之前的文章中进行了描述，因此我在这里不再重复。

在编译代码之前，请确保已安装所有必要的库，并且Seeed SAMD板定义的版本至少为1.8.2版本——这对于TensorFlow Lite库的编译非常重要。编译和上传代码——如果将DEBUG参数设置为false，代码将立即开始运行，并且您只需在Wio终端顶部按下C按钮，然后从数据集中说出一个句子。结果将同时显示在屏幕上，并在连接到计算机的情况下输出到串行监视器。

虽然本课程基于Wio Terminal，因为它非常适合探索嵌入式机器学习，但也可以在其他设备上实现。最简单的方法是将代码移植到其他Cortex M4F MCU，例如Nano33 BLE Sense——这只需要调整以适应不同的麦克风即可。移植到其他ARM MCU应该也相当简单。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-13-768x626.png" /></div>

如果要移植到其他体系结构，如ESP32或K210或其他体系结构，需要重新实现MFCC计算，因为它们使用CMSIS-DSP中的ARM特定函数。

该项目中的基本神经网络架构可以进行多种改进。这些改进包括：

- 模型预训练
- seq2seq, LSTM, 注意力机制
- 可训练滤波器
- AutoML, 合成数据

请观看与此主题相关的TinyML讲座，以了解更多信息并找到论文链接！

<iframe width="560" height="315" src="https://www.youtube.com/embed/YmJrr1D191k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

我们鼓励您fork代码存储库，尝试在自己的数据集上进行训练，或者尝试实现更高级的架构或模型训练技术。如果您这样做，请不要犹豫在这里向我提问或在Github上提交PR！

## 参考资料

- [Jupyter notebook](https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/main/jupyter_notebooks/prepare_data.ipynb)

- [Project Github](https://github.com/AIWintermuteAI/Speech-to-Intent-Micro)
