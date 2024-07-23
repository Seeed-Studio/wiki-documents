---
description:  音频场景识别
title: 音频场景识别
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-EI-3
last_update:
  date: 3/05/2024
  author: 金菊
---

# Wio Terminal Edge Impulse音频场景识别与内置麦克风

在这个项目中，我们将学习如何使用Wio Terminal和Edge Impulse训练和部署音频场景分类器。
有关更多详细信息和视频教程，请观看相应的视频！

<iframe width="560" height="315" src="https://www.youtube.com/embed/2BISspenUng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 计算机中的声音处理

音频场景分类是一个任务，机器学习模型需要为音频片段预测一个类别，例如“哭泣的婴儿”，“咳嗽声”，“狗叫声”等。

声音是作为声波通过气体、液体或固体等传输介质传播的振动。
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/G2lY2zl.gif"/></div>
声音的来源推动周围的介质分子，它们推动旁边的分子，依此类推。当它们达到其他物体时，它也会轻微振动 - 我们在麦克风中使用了这个原理。麦克风膜片被介质分子向内推，然后回到原来的位置。
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/mic-working.gif"/></div>
这在电路中产生交流电流，其中电压与声音幅度成比例 - 声音越大，它推动膜片的程度就越大，从而产生更高的电压。然后我们用模数转换器读取这个电压，并以相等的间隔记录 - 我们在一秒钟内对声音进行测量的次数称为采样率，例如8000 Hz的采样率是每秒进行8000次测量。采样率对声音的质量明显很重要 - 如果我们采样得太慢，可能会错过重要的部分。用于数字录音的数字也很重要 - 使用的数字范围越大，我们可以从原始声音中保留的“细微差别”就越多。这就是所谓的音频位深度 - 你可能听说过8位音频和16位音频这样的术语。好吧，它正好是字面上所说的 - 对于8位音频，使用无符号的8位整数，其范围为0到255。对于16位音频，使用带符号的16位整数，范围为-32768到32767。好了，最后我们得到一串数字，较大的数字对应声音的响亮部分，我们可以像这样可视化它 - 这是以8000 Hz频率和8位深度（0-255）记录的1秒枪声的声音。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/Capture1.PNG"/></div>

然而，我们不能对这种原始声音表示做太多处理 - 是的，我们可以剪切和粘贴部分或使其更柔和或更响亮，但是对于分析声音来说，它太原始了。在这里，傅里叶变换、梅尔刻度、频谱图和倒谱系数派上用场。对于这个项目，我们将傅里叶变换定义为一种数学变换，它允许我们将信号分解为各个频率和频率幅度。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/1 xTYCtcx_7otHVu-uToI9dA.png"/></div>

或者，如果你愿意使用一个比喻 - 给定一个冰沙，它输出配方。

关于傅里叶变换有很多互联网上的资料，例如 [来自 betterexplained.com 的文章](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/) 和 [ 3Blue1Gray 的视频](https://youtu.be/spUNpyF58BY)  - 查看它们以了解更多关于FFT的信息。

这是应用傅里叶变换后我们的声音的样子 - 较高的柱状图对应较大的振幅频率。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/Capture2.PNG"/></div>

太棒了！现在我们可以用音频信号做更有趣的事情了 - 例如消除最不重要的频率以压缩音频文件，去除噪声或声音，等等。但是对于音频和语音识别来说，这仍然不够好 - 通过进行傅里叶变换，我们失去了所有的时间域信息，这对于非周期性信号（例如人类语音）不利。然而，我们是聪明的人，只需在信号样本上多次进行傅里叶变换，实质上将其切片，然后将多次傅里叶变换的数据拼接在一起，形成频谱图。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/1 tIBRdtG3EfjmSIlraWVIxw.png"/></div>

在这里，x轴表示时间，y轴表示频率，频率的幅度通过颜色来表示，较亮的颜色对应较大的振幅。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/Capture3.PNG"/></div>

非常好！现在我们可以进行声音识别吗？是的！不是！可能！
普通的频谱图包含了太多的信息，如果我们只关心人耳能听到的声音。研究表明，人类对频率的感知并不是线性的。我们在低频率上检测差异比在高频率上更好。例如，我们可以轻松区分500和1000 Hz之间的差异，但是我们几乎无法区分10000和10500 Hz之间的差异，尽管两对之间的距离相同。
1937年，斯蒂文斯、沃尔克曼和纽曼提出了一个基于音高的单位，使得音高上的等距离听起来对听众来说听起来同样远。这被称为梅尔刻度。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/1 erUKb2-Z-Wi_u8JWel6cDQ.gif"/></div>

梅尔频谱图是将频率转换为梅尔刻度的频谱图。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/Capture4.PNG"/></div>

对于识别语音还涉及到更多的步骤 - 例如上面提到的倒谱系数，我们将在以后的项目中讨论它们。现在是时候开始实际实施了。

## 获取训练数据

音频信号需要以非常高的采样率进行采样，8000 Hz或者理想情况下是16000 Hz。Edge Impulse Data Forwarder工具处理这种采样率太慢，所以我们需要使用专门的数据收集固件来获取此项目的数据。下载一个具有麦克风支持的新版本Wio Terminal Edge Impulse固件，并将其烧录到你的设备上，如 [Getting started with Edge Impulse](#) 所述。然后在Edge Impulse平台上创建一个新项目，启动边缘推导服务。

```
edge-impulse-daemon
```

如果你之前使用过edge-impulse-daemon，请在上述命令中添加--clean以清除项目数据。

然后使用你的凭据登录，并选择你刚创建的项目。转到数据采集选项卡，你就可以开始获取数据样本了。

我们将有三个类别的数据:

• background

• coughing

•  crying

为每个类别记录10个样本，每个样本持续时间为5000毫秒。你可以录制从计算机扬声器播放的声音（除了背景类别），但如果你有机会录制真实的声音，那将更好。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough.png"/></div>

对于背景类别，录制一些不应被分类为咳嗽或哭泣的声音，例如人们交谈、无声音、空调/风扇等等。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_p.png"/></div>

30个样本太少了，所以我们还将上传更多的数据。只需从互联网上下载声音，将其重新采样为16000 Hz，并以.wav格式保存，使用这个转换脚本。

```python
import librosa 
import sys
import soundfile as sf
input_filename = sys.argv[1]
output_filename = sys.argv[2]
   
data, samplerate = librosa.load(input_filename, sr=16000)
print(data.shape, samplerate)
sf.write(output_filename, data, samplerate, subtype='PCM_16')
```

将代码复制并粘贴到一个文本文档中（使用Notepad++、IDLE IDE或其他适合的IDE。不要使用Windows默认的记事本）
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/path.png"/></div>

将文档保存为 ```converter.py``` ，然后从Anaconda环境中运行。

```
python converter.py name-of-the-downloaded-file class_name.number.wav
```

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/command.png"/></div>

你可以在这个项目的Github存储库中找到已经转换为正确格式的示例声音文件。
然后将所有声音样本拆分，只留下“有趣”的部分 - 对于每个类别都要这样做，除了背景。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/data.png"/></div>

完成数据收集后，现在是选择处理块和定义神经网络模型的时候了。

## 构建机器学习模型

在处理块中，我们看到三个熟悉的选项 - Raw（原始数据）、Spectral Analysis（信号的傅里叶变换）、Spectrogram（频谱图）和MFE（梅尔频率能量），它们对应于我们之前描述的音频处理的四个阶段！
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/data_process.jpeg"/></div>

如果您喜欢尝试实验，您可以尝试将它们全部应用于您的数据，除了"Raw"，因为对于我们相对较小的神经网络来说，它的数据量太大了。在这个任务中，我们只选择最适合的选项，即MFE或Mel-Frequency Energy banks。在计算完特征之后，转到NN分类器选项卡，并选择适合的模型架构。我们有两个选择，分别是使用1D Conv和2D Conv。两者都可以，但如果可能，我们应该始终选择较小的模型，因为我们希望将其部署到嵌入式设备上。在编写本课程材料时，我们进行了4个不同的实验，包括使用MFE和MFCC特征的1D Conv/2D Conv。它们的结果在以下表格中。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/table.PNG"/></div>

最佳模型是使用MFE处理块的1D Conv网络。通过调整MFE参数（即将步长增加到0.02并将低频率降低到0），我们在验证数据集上实现了89.4%的准确率。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/accuracy.png"/></div>

您可以在[此处](https://studio.edgeimpulse.com/public/25382/latest)找到训练好的模型并自行测试。尽管它在区分哭声和背景声音方面表现良好，但咳嗽声音的检测准确率稍低，可能需要获取更多样本。

## 部署到Wio Terminal

在我们拥有模型并对其在训练中的准确性感到满意后，我们可以在"实时分类"选项卡中对其进行新数据的测试，然后将其部署到Wio Terminal。我们将其下载为Arduino库，放置在Arduino库文件夹中，并打开Examples -> 您的项目名称 -> nano_33_ble_sense_microphone_continuous。该演示基于Arduino Nano 33 BLE，并使用了PDM库。对于Wio Terminal，我们将依靠DMA（直接内存访问控制器）从ADC（模数转换器）获取样本，并将其保存到推断缓冲区，而不涉及MCU。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/dma.jpeg"/></div>

这将使我们能够同时收集声音样本并进行推断。为了更改从PDM库到DMA的音频数据收集方式，我们需要进行一些更改。如果在解释过程中感到有些困惑，请查看完整的示例代码，您可以在课程材料中找到。
从代码中删除PDM库。

```cpp
#include <PDM.h>
```

在最后的包含语句之后，添加DMA描述符结构和其他设置常量。

```cpp
// Settings
#define DEBUG 1                 // Enable pin pulse during ISR  
enum {ADC_BUF_LEN = 4096};    // Size of one of the DMA double buffers
static const int debug_pin = 1; // Toggles each DAC ISR (if DEBUG is set to 1)

// DMAC descriptor structure
typedef struct {
  uint16_t btctrl;
  uint16_t btcnt;
  uint32_t srcaddr;
  uint32_t dstaddr;
  uint32_t descaddr;
} dmacdescriptor;
```

然后，在设置函数之前，创建用于缓冲区数组的变量、用于在ISR回调和主代码之间传递值的易失性变量，以及高通Butterworth滤波器，我们将应用于信号以消除麦克风信号中的大部分直流分量。

```cpp
// Globals - DMA and ADC
volatile uint8_t recording = 0;
volatile boolean results0Ready = false;
volatile boolean results1Ready = false;
uint16_t adc_buf_0[ADC_BUF_LEN];    // ADC results array 0
uint16_t adc_buf_1[ADC_BUF_LEN];    // ADC results array 1
volatile dmacdescriptor wrb[DMAC_CH_NUM] __attribute__ ((aligned (16)));          // Write-back DMAC descriptors
dmacdescriptor descriptor_section[DMAC_CH_NUM] __attribute__ ((aligned (16)));    // DMAC channel descriptors
dmacdescriptor descriptor __attribute__ ((aligned (16)));                         // Place holder descriptor

//High pass butterworth filter order=1 alpha1=0.0125 
class  FilterBuHp1
{
  public:
    FilterBuHp1()
    {
      v[0]=0.0;
    }
  private:
    float v[2];
  public:
    float step(float x) //class II 
    {
      v[0] = v[1];
      v[1] = (9.621952458291035404e-1f * x)
         + (0.92439049165820696974f * v[0]);
      return 
         (v[1] - v[0]);
    }
};

FilterBuHp1 filter;
```

在此之后，添加三个代码块-第一个是回调函数，由ISR（中断服务例程）在每次填充其中一个缓冲区时调用。在该函数内部，我们从录音缓冲区中读取元素（刚刚填充的缓冲区），对其进行处理并放入推理缓冲区。

```cpp
/*******************************************************************************
 * Interrupt Service Routines (ISRs)
 */

/**
 * @brief      Copy sample data in selected buf and signal ready when buffer is full
 *
 * @param[in]  *buf  Pointer to source buffer
 * @param[in]  buf_len  Number of samples to copy from buffer
 */
static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {

  static uint32_t idx = 0;

  // Copy samples from DMA buffer to inference buffer
  if (recording) {
    for (uint32_t i = 0; i < buf_len; i++) {
  
      // Convert 12-bit unsigned ADC value to 16-bit PCM (signed) audio value
      inference.buffers[inference.buf_select][inference.buf_count++] = filter.step(((int16_t)buf[i] - 1024) * 16);
      // Swap double buffer if necessary
      if (inference.buf_count >= inference.n_samples) {
        inference.buf_select ^= 1;
        inference.buf_count = 0;
        inference.buf_ready = 1;
      }
    }
  }
}
```

下一个代码块包含ISR本身-它由定时器在一定时间间隔内执行，函数内部我们检查DMAC通道1是否已暂停-如果已暂停，意味着麦克风数据的一个缓冲区已满，我们需要从中复制数据，切换到另一个缓冲区并重新启动DMAC ADC。

```cpp
/**
 * Interrupt Service Routine (ISR) for DMAC 1
 */
void DMAC_1_Handler() {

  static uint8_t count = 0;

  // Check if DMAC channel 1 has been suspended (SUSP)
  if (DMAC->Channel[1].CHINTFLAG.bit.SUSP) {

     // Debug: make pin high before copying buffer
#if DEBUG
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
#if DEBUG
    digitalWrite(debug_pin, LOW);
#endif
  }
}
```

下一个代码块包含ADC DMAC和控制ISR（中断服务例程）的定时器的配置数据。

```cpp
// Configure DMA to sample from ADC at regular interval
void config_dma_adc() {
  
  // Configure DMA to sample from ADC at a regular interval (triggered by timer/counter)
  DMAC->BASEADDR.reg = (uint32_t)descriptor_section;                          // Specify the location of the descriptors
  DMAC->WRBADDR.reg = (uint32_t)wrb;                                          // Specify the location of the write back descriptors
  DMAC->CTRL.reg = DMAC_CTRL_DMAENABLE | DMAC_CTRL_LVLEN(0xf);                // Enable the DMAC peripheral
  DMAC->Channel[1].CHCTRLA.reg = DMAC_CHCTRLA_TRIGSRC(TC5_DMAC_ID_OVF) |      // Set DMAC to trigger on TC5 timer overflow
                                 DMAC_CHCTRLA_TRIGACT_BURST;                  // DMAC burst transfer
                                 
  descriptor.descaddr = (uint32_t)&descriptor_section[1];                     // Set up a circular descriptor
  descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                           // Take the result from the ADC0 RESULT register
  descriptor.dstaddr = (uint32_t)adc_buf_0 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_0 array
  descriptor.btcnt = ADC_BUF_LEN;                                             // Beat count
  descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |                            // Beat size is HWORD (16-bits)
                      DMAC_BTCTRL_DSTINC |                                    // Increment the destination address
                      DMAC_BTCTRL_VALID |                                     // Descriptor is valid
                      DMAC_BTCTRL_BLOCKACT_SUSPEND;                           // Suspend DMAC channel 0 after block transfer
  memcpy(&descriptor_section[0], &descriptor, sizeof(descriptor));            // Copy the descriptor to the descriptor section
  
  descriptor.descaddr = (uint32_t)&descriptor_section[0];                     // Set up a circular descriptor
  descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                           // Take the result from the ADC0 RESULT register
  descriptor.dstaddr = (uint32_t)adc_buf_1 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_1 array
  descriptor.btcnt = ADC_BUF_LEN;                                             // Beat count
  descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |                            // Beat size is HWORD (16-bits)
                      DMAC_BTCTRL_DSTINC |                                    // Increment the destination address
                      DMAC_BTCTRL_VALID |                                     // Descriptor is valid
                      DMAC_BTCTRL_BLOCKACT_SUSPEND;                           // Suspend DMAC channel 0 after block transfer
  memcpy(&descriptor_section[1], &descriptor, sizeof(descriptor));            // Copy the descriptor to the descriptor section

  // Configure NVIC
  NVIC_SetPriority(DMAC_1_IRQn, 0);    // Set the Nested Vector Interrupt Controller (NVIC) priority for DMAC1 to 0 (highest)
  NVIC_EnableIRQ(DMAC_1_IRQn);         // Connect DMAC1 to Nested Vector Interrupt Controller (NVIC)

  // Activate the suspend (SUSP) interrupt on DMAC channel 1
  DMAC->Channel[1].CHINTENSET.reg = DMAC_CHINTENSET_SUSP;

  // Configure ADC
  ADC1->INPUTCTRL.bit.MUXPOS = ADC_INPUTCTRL_MUXPOS_AIN12_Val; // Set the analog input to ADC0/AIN2 (PB08 - A4 on Metro M4)
  while(ADC1->SYNCBUSY.bit.INPUTCTRL);                // Wait for synchronization
  ADC1->SAMPCTRL.bit.SAMPLEN = 0x00;                  // Set max Sampling Time Length to half divided ADC clock pulse (2.66us)
  while(ADC1->SYNCBUSY.bit.SAMPCTRL);                 // Wait for synchronization 
  ADC1->CTRLA.reg = ADC_CTRLA_PRESCALER_DIV128;       // Divide Clock ADC GCLK by 128 (48MHz/128 = 375kHz)
  ADC1->CTRLB.reg = ADC_CTRLB_RESSEL_12BIT |          // Set ADC resolution to 12 bits
                    ADC_CTRLB_FREERUN;                // Set ADC to free run mode       
  while(ADC1->SYNCBUSY.bit.CTRLB);                    // Wait for synchronization
  ADC1->CTRLA.bit.ENABLE = 1;                         // Enable the ADC
  while(ADC1->SYNCBUSY.bit.ENABLE);                   // Wait for synchronization
  ADC1->SWTRIG.bit.START = 1;                         // Initiate a software trigger to start an ADC conversion
  while(ADC1->SYNCBUSY.bit.SWTRIG);                   // Wait for synchronization

  // Enable DMA channel 1
  DMAC->Channel[1].CHCTRLA.bit.ENABLE = 1;

  // Configure Timer/Counter 5
  GCLK->PCHCTRL[TC5_GCLK_ID].reg = GCLK_PCHCTRL_CHEN |        // Enable perhipheral channel for TC5
                                   GCLK_PCHCTRL_GEN_GCLK1;    // Connect generic clock 0 at 48MHz
   
  TC5->COUNT16.WAVE.reg = TC_WAVE_WAVEGEN_MFRQ;               // Set TC5 to Match Frequency (MFRQ) mode
  TC5->COUNT16.CC[0].reg = 3000 - 1;                          // Set the trigger to 16 kHz: (4Mhz / 16000) - 1
  while (TC5->COUNT16.SYNCBUSY.bit.CC0);                      // Wait for synchronization

  // Start Timer/Counter 5
  TC5->COUNT16.CTRLA.bit.ENABLE = 1;                          // Enable the TC5 timer
  while (TC5->COUNT16.SYNCBUSY.bit.ENABLE);                   // Wait for synchronization
}
```

在setup函数的顶部添加调试条件：

```cpp
  // Configure pin to toggle on DMA interrupt
#if DEBUG
  pinMode(debug_pin, OUTPUT);
#endif
```

然后在setup函数中，在run_classifier_init();之后添加以下代码，创建推理缓冲区，配置DMA并通过将易失性全局变量recording设置为1来开始录制。

```cpp
  // Create double buffer for inference
  inference.buffers[0] = (int16_t *)malloc(EI_CLASSIFIER_SLICE_SIZE * sizeof(int16_t));
  
  if (inference.buffers[0] == NULL) {
    ei_printf("ERROR: Failed to create inference buffer 0");
    return;
  }
  inference.buffers[1] = (int16_t *)malloc(EI_CLASSIFIER_SLICE_SIZE * 
      sizeof(int16_t));
  if (inference.buffers[1] == NULL) {
    ei_printf("ERROR: Failed to create inference buffer 1");
    free(inference.buffers[0]);
    return;
  }

  // Set inference parameters
  inference.buf_select = 0;
  inference.buf_count = 0;
  inference.n_samples = EI_CLASSIFIER_SLICE_SIZE;
  inference.buf_ready = 0;

  // Configure DMA to sample from ADC at 16kHz (start sampling immediately)
  config_dma_adc();

  // Start recording to inference buffers
  recording = 1;
}
```

从 ```microphone_inference_end(void)``` 函数中删除 ```PDM.end();``` 和 ```free(sampleBuffer);``` ，以及```microphone_inference_start(uint32_t n_samples)```和 ```pdm_data_ready_inference_callback(void)``` 函数，因为我们不使用它们。 
编译和上传代码后，打开串行监视器，您将看到打印出的每个类别的概率。播放一些声音或在Wio Terminal上咳嗽，以检查准确性！

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_r.png"/></div>

## Blynk 集成

由于WioTerminal可以连接到互联网，我们可以将这个简单的演示变成一个真正的物联网应用程序，使用 [Blynk](https://blynk.io)。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/b641e2030c1c47fbc7161c98a7e5d998.jpg"/></div>

Blynk是一个平台，允许您快速构建用于控制和监控硬件项目的iOS和Android设备的界面。在这种情况下，我们将使用Blynk来向我们的智能手机推送通知，如果Wio Terminal检测到任何我们应该担心的声音。
要开始使用Blynk，请下载该应用程序，注册一个新帐户并创建一个新项目。向其中添加推送通知元素并按播放按钮。

<div> <img width="{200}" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/app1.png" />
</div>

<img width="{200}" align="right" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/app2.png" />

<p> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> </p>

然后确保您已经按照 [此处指南](https://wiki.seeedstudio.com/Wio-Terminal-Blynk/)设置了Wio Terminal WiFi库和固件。按照该教程中所述下载Blynk库。

然后通过编译和上传简单的按钮示例来测试您的设置-确保更改WiFi SSID、密码和您在应用程序中获取的Blynk API令牌。

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/app3.png"/></div>

```cpp
#define BLYNK_PRINT Serial
#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>
char auth[] = "token";
char ssid[] = "ssid";
char pass[] = "password";
void checkPin()
{
  int isButtonPressed = !digitalRead(WIO_KEY_A);
  if (isButtonPressed) {
    Serial.println("Button is pressed.");
    Blynk.notify("Yaaay... button is pressed!");
  }
}
void setup()
{
  Serial.begin(115200);
  Blynk.begin(auth, ssid, pass);
  pinMode(WIO_KEY_A, INPUT_PULLUP);
}
void loop()
{
  Blynk.run();
  checkPin();
}
```

如果代码编译成功并且测试成功（按下Wio Terminal上的左上按钮会在您的手机上弹出推送通知），那么您可以继续下一阶段。

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/button.png"/></div>

我们将把所有的神经网络推理代码移动到一个单独的函数中，并在loop()函数中的Blynk.run()后调用它。与之前所做的类似，我们检查神经网络预测的概率，如果它们超过某个类别的阈值，我们调用Blynk.notify()函数，该函数会向您的移动设备推送通知。
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_a.png"/></div>

在此项目的Github存储库中找到了完整的NN推理+ Blynk通知的代码。

## 参考资料

- [Edge Impulse 公共项目](https://studio.edgeimpulse.com/public/25382/latest)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_2_Audio_Scene_Recognition)

- [使用 Wio Terminal进行声音录制的原始项目](https://github.com/ShawnHymel/ei-keyword-spotting/blob/master/embedded-demos/arduino/wio-terminal/wio-terminal.ino)
