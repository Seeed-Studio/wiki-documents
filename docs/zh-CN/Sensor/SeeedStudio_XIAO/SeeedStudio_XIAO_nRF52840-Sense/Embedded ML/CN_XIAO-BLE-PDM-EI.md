---
description: Speech Recognition based on Edge Impulse
title: 基于 Edge Impulse 的语音识别
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-PDM-EI
last_update:
  date: 10/12/2023
  author: 赵桂莹
---

# 基于 Edge Impulse 的语音识别

## 项目前的知识

XIAO nRF52840并不是Edge Impulse官方支持的，它也不是用于收集数据的设备，但我将演示如何使用它来使用设备麦克风进行推断。

## 开始

要学习本教程，您需要以下硬件

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 硬件准备

我们不需要任何硬件准备。XIAO nRF52840 已经具备了我们这个项目所需要的一切。我们只需要PDM麦克风。

#### 这是XIAO nRF52840 Sense的硬件引脚

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png" alt="XIAO nrf82840 hardware" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}></p>

## 软件准备

要做到这一点，我们只需要做三件事:

1. Google Speech commands dataset(check below)
2. [Edge Impulse Account](https://edgeimpulse.com/)
3. [Arduino IDE](https://www.arduino.cc/)

### Dataset

- 我将使用Google Speech commands dataset。不是所有的数据集，只是其中的一些。
- 现在，请下载数据集并解压。完整的数据集为2.3GB。
- 这个 <a href="https://www.tensorflow.org/lite/microcontrollers" target="_blank">Google Speech commands dataset</a> 由谷歌在其微控制器TensorFlow Lite的微语音示例中使用。
- <a href="https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb" target="_blank"> 你可以在这里找到代码。</a>

我们可以从上面的第一个链接下载数据集，它将被提取为:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png" alt="Dataset extracted" alt="Speech commands dataset" width={600} height="auto" /></p>


## 开始

现在让我们开始使用Edge Impulse基于数据集创建ML模型。

### 步骤1 - 打开边缘脉冲

- Edge Impulse是一个机器学习(ML)开发平台，使开发人员能够创建和部署自定义ML模型到边缘设备，如微控制器和智能手机。 
- 它提供了各种工具和资源来帮助构建和优化特定任务的ML模型，如关键字检测、异常检测和分类。 

让我们创建一个新项目。给它起个名字。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png" alt="Edge Impulse New project" width={600} height="auto" /></p>


After creating a new project, go to the data acquisition page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png" alt="Edge Impulse Data Aquisition" width="{600}" height="auto" /></p>

### 步骤2 - 添加数据 

因为我们要使用Google Speech commands dataset，所以选择“Add existing data”。 
接下来，选择“上传数据”

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png" alt="Edge Impulse upload data" width={600} height="auto" /></p>

接下来，我们要选择数据 - 让我们从speech数据集中选择一个文件夹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

数据集有很多单词可以用来训练。让我们选择3个文件夹(我们的标签)来训练和背景噪声。我们得到4个标签。 
按下“浏览”按钮。 
第一个是“go”。选择文件夹-你可以看到所有的。wav文件-然后按“上传”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png" alt="Files to upload" width={600} height="auto" /></p>

接下来，让我们保留类别的默认选项。用边脉冲分割数据。 
对于标签，你自己写标签。完成所有这些之后，点击“Upload data”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

在右侧，你将看到正在上传的文件。这可能需要一段时间，因为他们很多。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png" alt="Files upload progress" width={600} height="auto" /></p>

过一段时间，它完成并显示一个上传文件的提示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png" alt="Files upload resume" width={600} height="auto" /></p>

在这之后，屏幕显示如下图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

要上传更多数据，请按右边文件列表上方的小上传按钮。 
重复3次- 2个标签和背景噪声。 
我将选择happy、bird和标签为“noise”的“background noise”文件夹。 
最后，这就是我们所有的标签

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

接下来，让我们创建网络来学习我们的单词。单击“脉冲设计”以创建脉冲

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### 步骤3 - 选择训练方法 

因为每个剪辑是1s和16Khz，让我们保持窗口大小和频率相同。现在，让我们添加一个processing block（处理块）。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Edge Impulse在这方面也有很大帮助。点击“Add a processing block”，选择音频(MFCC)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

接下来，点击“Add learning block”并选择分类。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

到目前为止，我们的最后一列 - 输出特征 - 有4个标签(bird, go, happy, noise).。 
点击“Save Impulse”保存我们到目前为止的工作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### 步骤4 - 生成特征 

现在，让我们来看看MFCC参数。如果你愿意，你可以改变这些值。 
现在，让我们保持默认值。点击“保存参数”。 
保存参数后，我们会得到一个新的窗口来“生成特征”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

点击后，Edge Impulse将开始生成特征。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png" alt="Generate features" width={600} height="auto" /></p>

过了一段时间，我们得到了生成的特征，并可以将它们可视化

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png" alt="Feature explorer" width={600} height="auto" /></p>

现在我们用选定的参数来训练我们的网络。点击"Classifier"（分类器）。

### 步骤5 - 分类器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png" alt="Classifier" width={600} height="auto" /></p>

在这里，我们可以调整我们的网络设置，比如训练周期，如果我们想要数据增强等等。 
Edge Impulse为关键词识别提供了一个简单而有效的神经网络架构。该体系结构由以下各层组成。
  - <b>输入层：</b> 输入层将MFCC特征作为输入。
  - <b>隐藏层：</b> 隐藏层学习从MFCC特征中提取更高级别的特征。Edge Impulse支持各种隐藏层类型，如卷积层和递归层。
  - <b>输出层：</b> 输出层预测音频输入包含关键字的概率。

我们可以修改默认参数，但默认参数就足够了。点击"Start Training"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png" alt="Network architecture" width={600} height="auto" /></p>

开始训练后，在屏幕的右侧，我们可以看到训练的进度。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png" alt="Training progress" width={600} height="auto" /></p>

我们可以将目标设备更改为nRF52840——就像我们的XIAO nRF52840一样，这样我们就可以看到性能计算和优化。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png" alt="Target device" width={600} height="auto" /></p>

训练完成后，我们得到混淆矩阵和数据资源管理器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png" alt="Confusion Matrix" width={600} height="auto" /></p>

现在网络准备好了，让我们尝试一些样本并进行一些实时分类。 
如果你去现场分类，我们可以选择一个样本和分类结果。这里，以鸟为例，我们在结果中得到了bird。太好了。这个模型是有效的。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png" alt="Live classification" width={600} height="auto" /></p>

现在，让我们进行模型测试。 
让我们使用分割样本来测试模型。点击“Classify all”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png" alt="Test data" width={600} height="auto" /></p>

我们得到了将近90%的准确率。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png" alt="Accuracy" width={600} height="auto" /></p>


### 步骤6 - 部署并获取Arduino库 

现在，让我们进入部署以获取微控制器的文件。 

### 部署选项 

我们选择Arduino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png" alt="Accuracy" width={600} height="auto" /></p>

接下来，让我们保持选择量化(int8)并单击“构建”以下载要与Arduino IDE一起使用的文件 
我们可以做一些优化。如果你意识到精度很低，请关闭EON编译器，然后再试一次。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png" alt="Accuracy" width={600} height="auto" /></p>

一段时间后，文件将自动下载。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png" alt="Arduino Files download" width={600} height="auto" /></p>

### 步骤7 - 将库添加到Arduino IDE 

在Arduino IDE中，让我们添加新下载的文件。 
到Sketch >包含库>添加。zip库

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png" alt="Arduino IDE Add library" width={600} height="auto" /></p>

选择下载的文件。过一会儿，输出窗口会显示一条消息，说明库已经安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png" alt="Library installed" width={600} height="auto" /></p>

### 步骤8 - 语音控制XIAO nRF52840上的RGB灯 

让我们打开一个例子 
参见示例Examples> <your_files_names> > nano_ble33_sense > nano_ble33_sense_microphone

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png" alt="Library installed" width={600} height="auto" /></p>

为什么是Arduino BLE 33 Sense ?他们使用相同的库-PDM(脉冲密度调制)-来控制麦克风。Arduino Nano BLE 33 Sense具有MP34DT05和XIAO nRF52840 Sense具有MSM261D3526H1CPM。 
打开sketch，让我们编译它，看看是否有任何错误。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png" alt="Sketch open" width={600} height="auto" /></p>

一段时间后，sketch被编译，没有错误报告。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png" alt="Sketch open" width={600} height="auto" /></p>

现在，连接XIAO nRF52840 Sense(如果您还没有这样做)并将代码上传。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png" alt="Sketch open" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png" alt="Compile result" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png" alt="Upload" width={600} height="auto" /></p>

现在，打开串行端口(Ctrl+Shitf+M)并检查推理结果(此时已经开始记录，进行推理和预测)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png" alt="Serial Monitor" width={600} height="auto" /></p>

试着说出所选的一个词。我说过了

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png" alt="Serial Monitor" width={600} height="auto" /></p>

如果它正确地检测到单词，则更有可能得到最接近1.0的结果，而其他的值更接近0.0 
现在，让我们享受一点乐趣并稍微修改一下代码。 
XIAO nRF52840 Sense内置LED，有3种颜色: 

- 红色指示灯
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif" alt="Red LED" width={600} height="auto" /></p>

- 绿色指示灯
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif" alt="Green LED" width={600} height="auto" /></p>

- 蓝色指示灯
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif" alt="Blue LED" width={600} height="auto" /></p>

由于我们有3个单词，让我们为每个单词分配一个颜色并点亮每个单词的颜色。 
- 红色代表bird
- 绿色代表Go
- 蓝色代表happy

因为这将更容易，我已经检查了板引脚定义，以下引脚签名为LED颜色:
- 红色 - Pin 11
- 绿色 - Pin 13
- 蓝色 - Pin 12

 首先，我们需要定义一个阈值。我们知道预测结果从0.0到1.0。越接近1.0，这个词的分类就越确定。这个值稍后可以调整。我把它设为0.7。 

先定义一些变量。我在包含的库之后定义了这些库:

```C
/* threshold for predictions */
float threshold = 0.7;

/** 
  LABELS INDEX:
  0 - bird
  1 - go
  2 - happy
  3 - noise
*/
// LED pin (defines color) to light up
/**
 PIN 11 - RED
 PIN 12 - BLUE
 PIN 13 - GREEN
*/
int LED = 0;
int oldLED;
```

<i>在 oldLED</i> 将定义前面的LED亮起，以便我们可以在没有预测或预测发生变化时关闭它。

<i>int LED</i> 是我们将要打开的电流LED。

接下来，在loop( )函数中，在for循环指令内部，我们循环使用CLASSIFIER_LABEL_COUNT(大约在第129行左右——上面的行已经有了):
```C
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
```

我们使用if指令来检查分类值。如果超过了定义的阈值，我们使用switch指令检查记录了哪个单词。 

完整的for循环加上新增的代码如下所示:

```C
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
        //lets light up some LEDS

        if (result.classification[ix].value > threshold) {
          //now let's see what label were in
          switch (ix) {
            case 0: LED = 11; break;
            case 1: LED = 13; break;
            case 2: LED = 12; break;
            default: LED = 0;
          }
          //in Sense, LOW will light up the LED
          if (LED != 0) {
            digitalWrite (oldLED, HIGH); //if we enter a word right next to previous - we turn off the previous LED
            digitalWrite (LED, LOW);            
            oldLED = LED;
          }
          else //turn off LED
            digitalWrite (oldLED, HIGH);
        }
    }
```
更改后，只需将代码上传到微控制器，并尝试说出训练的单词，并看到LED根据单词打开。 

这就是它，虽然不直接支持，但我们现在可以使用XIAO nRF52840来运行一些使用边缘脉冲的ML模型


## ✨ 项目贡献者

- 这个项目由Seeed工作室支持 [项目贡献者](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- 感谢 [赵桂莹的努力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) 你的工作将被 [展出](https://wiki.seeedstudio.com/Honorary-Contributors/).

## 技术支持和产品讨论 

感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
