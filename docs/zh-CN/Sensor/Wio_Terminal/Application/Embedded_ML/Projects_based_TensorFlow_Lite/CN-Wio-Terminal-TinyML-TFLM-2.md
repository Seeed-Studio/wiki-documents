---
description:  BME280智能气象站
title:  BME280智能气象站
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-TFLM-2
last_update:
  date: 3/06/2024
  author: 金菊
---

# Wio Terminal Tensorflow Lite Micro智能气象站与BME280

在这个项目中，我们将使用Wio Terminal和Tensorflow Lite for Microcontrollers创建一个智能气象站，能够根据BME280环境传感器的本地数据预测未来24小时的天气和降水情况。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/image_R7SKj3UKX6.jpeg" /></div>

要了解更多详细信息和可视化效果，请观看相应的视频！

<iframe width="560" height="315" src="https://www.youtube.com/embed/qbpVltzvL6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

您将学习如何应用模型优化技术，不仅可以运行中等规模的卷积神经网络，还可以同时运行这个时尚的GUI和WiFi连接，持续运行数天甚至数月！

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/result.gif" /></div>

这是最终的结果，在屏幕上显示了当前的温度、湿度和大气压力值，以及城市名称、预测的天气类型和预测的降水几率 - 在屏幕底部有一个日志输出字段，您可以轻松地重新设计用于显示极端天气信息或其他相关信息。虽然它看起来很好，也很有用，但您还可以自己添加很多东西 - 例如在屏幕上输出上述新闻/推文，或使用深度睡眠模式来节省能源并使其电池供电等等.
在这个项目中，我们将处理时间序列数据，就像之前多次处理的那样 - 这次不同的是，天气预测的时间跨度要大得多。我们将每小时进行一次测量，并对24小时的数据进行预测。此外，由于我们将预测未来24小时的平均天气类型，我们还将使用相同的模型预测未来24小时的降水几率。为了做到这一点，我们将利用 Keras Functional API 和多输出模型。

在多输出模型中，将有一个"主干"，对两个输出都通用，然后"分支"到两个不同的输出。使用多输出模型与两个独立的模型相比的主要好处是用于预测天气类型和降水几率的数据和学习特征高度相关。

如果您在Windows上进行此项目，则首先需要下载Arduino IDE的夜间版本，因为当前稳定版本1.18.3无法编译具有许多库依赖项的代码（问题在于编译期间的链接器命令超过了Windows上的最大长度）。
其次，您需要确保在Arduino IDE中安装了1.8.2版本的Seeed SAMD板定义。
最后，由于我们使用了卷积神经网络并使用Keras API构建它，它包含了当前稳定版本的 Tensorflow Micro 不支持的操作。在GitHub上浏览 Tensorflow 问题时，我发现有一个拉取请求将这个操作（EXPAND_DIMS）添加到可用操作列表中，但在制作这个视频时它还没有合并到主分支。您可以克隆 Tensorflow存储库，切换到PR分支，并通过在Linux机器上执行 ./tensorflow/lite/micro/tools/ci_build/test_arduino.sh 来编译Arduino库 - 生成的库可以在  tensorflow/lite/micro/tools/make/gen/arduino_x86_64/prj/tensorflow_lite.zip 中找到。或者，您可以从此项目的GitHub存储库中下载已编译的库，并将其放置在 Arduino sketches 库文件夹中 - 只需确保您一次只有一个 Tensorflow Lite 库！

## 了解数据

一切都从数据开始。对于本教程，我们将使用Kaggle上提供的一个现成的天气数据集，Historical Hourly Weather Data 2012-2017。Seeed EDU总部位于中国南部的深圳市 - 该数据集中没有这个城市，因此我们选择了一个纬度和气候相似的城市 – Miami.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/Capture1-1030x717.jpeg" /></div>

你需要选择一个至少与你所在地气候相似的城市——不用说，使用来自迈阿密的数据训练的模型，然后在芝加哥的冬天部署，不会产生正确的预测结果。

## 构建机器学习模型

对于模型训练和数据处理步骤，让我们打开课程材料中的Jupyter Notebook。在Google Colab上上传该笔记本是最简单的方法，因为它已经安装了所有所需的软件包。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/colab.png" /></div>

或者，您可以在本地执行该笔记本 - 首先在之前创建的ML虚拟环境中安装所有所需的依赖项，然后在虚拟环境中运行

```
pip install -r requirements.txt
```

在之前创建的ML虚拟环境中激活该环境。然后在同一环境中运行 jupyter notebook 命令，它将在默认浏览器中打开notebook服务器。 Jupyter Notebooks 是探索和展示数据的好工具，因为它们允许在同一环境中同时拥有文本和可执行代码。笔记本的一般工作流程在笔记本的文本部分中有解释。

## 部署到Wio Terminal

您在上一步训练的模型已经转换为字节数组，其中包含模型结构和权重，现在可以与C++代码一起加载到Wio Terminal中。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/arduino1.png" /></div>

Tensorflow Lite for Microcontrollers包括模型解释器，它被设计为轻巧且快速。解释器使用静态图形顺序和自定义（不太动态的）内存分配器，以确保最小的加载、初始化和执行延迟。输入缓冲区中的数据被馈送到模型图中，推理完成后，结果被放置在输出缓冲区中。
为了减小模型的大小并降低推理时间，我们执行了两个重要的优化：
• 进行完全整数量化，将模型权重、输入和输出从浮点32数（每个数占用32位内存）更改为整数8数（每个数仅占用8位），从而将大小减小了4倍。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/inference.png" /></div>

• 使用 micro_mutable_op_resolver 并指定神经网络中需要运行的操作，以编译仅包含运行模型所需操作的代码，而不是使用 all_ops_resolver ，后者包括当前 Tensorflow Lite for Microcontrollers 解释器支持的所有操作。

模型训练完成后，创建一个空白的 sketch 并保存。然后将训练的模型复制到 sketch 文件夹中并重新打开 sketch 。将模型和模型长度的变量名更改为较短的名称。然后使用 wio_terminal_tfmicro_weather_prediction_static.ino 中的代码进行测试，您可以在课程材料中找到该代码。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/arduino2.png" /></div>

让我们回顾一下C++代码中的主要步骤：
我们包括Tensorflow库的头文件和包含模型flatbuffer的文件

```cpp
#include <TensorFlowLite.h>
//#include "tensorflow/lite/micro/micro_mutable_op_resolver.h"
#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_error_reporter.h"
#include "tensorflow/lite/micro/system_setup.h"
#include "tensorflow/lite/micro/micro_interpreter.h"
#include "tensorflow/lite/schema/schema_generated.h"
#include "model_Conv1D.h"
```

请注意，我已经将micro_mutable_op_resolver.h注释掉，启用了all_ops_resolver.h - all_ops_resolver.h头文件编译了当前Tensorflow Micro中的所有操作，非常适合测试，但一旦完成测试，最好切换到micro_mutable_op_resolver.h以节省设备内存 - 这会有很大的区别。
请注意，我已经将micro_mutable_op_resolver.h注释掉，启用了all_ops_resolver.h - all_ops_resolver.h头文件编译了当前Tensorflow Micro中的所有操作，非常适合测试，但一旦完成测试，最好切换到micro_mutable_op_resolver.h以节省设备内存 - 这会有很大的区别。

```cpp
// Globals, used for compatibility with Arduino-style sketches.
namespace {
tflite::ErrorReporter* error_reporter = nullptr;
const tflite::Model* model = nullptr;
tflite::MicroInterpreter* interpreter = nullptr;
TfLiteTensor* input = nullptr;
TfLiteTensor* output_type = nullptr;
TfLiteTensor* output_precip = nullptr;
constexpr int kTensorArenaSize = 1024*25;
uint8_t tensor_arena[kTensorArenaSize];
}  // namespace
```

然后在设置函数中，还有更多的样板代码，比如实例化错误报告器、操作解析器、解释器，映射模型，分配张量，并在分配后检查张量形状。这是代码可能在运行时抛出错误的地方，如果某些模型操作不受当前版本的 Tensorflow Micro 库支持。如果有不受支持的操作，您可以更改模型架构，或者通过从 Tensorflow Lite 进行移植来为运算符添加支持。

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {delay(10);}
  
  // Set up logging. Google style is to avoid globals or statics because of
  // lifetime uncertainty, but since this has a trivial destructor it's okay.
  // NOLINTNEXTLINE(runtime-global-variables)
  static tflite::MicroErrorReporter micro_error_reporter;
  error_reporter = &micro_error_reporter;
  // Map the model into a usable data structure. This doesn't involve any
  // copying or parsing, it's a very lightweight operation.
  model = tflite::GetModel(Conv1D_tflite);
  if (model->version() != TFLITE_SCHEMA_VERSION) {
    TF_LITE_REPORT_ERROR(error_reporter,
                         "Model provided is schema version %d not equal "
                         "to supported version %d.",
                         model->version(), TFLITE_SCHEMA_VERSION);
    return;
  }
  // This pulls in all the operation implementations we need.
  // NOLINTNEXTLINE(runtime-global-variables)
  //static tflite::MicroMutableOpResolver<1> resolver;
  static tflite::AllOpsResolver resolver;
  // Build an interpreter to run the model with.
  static tflite::MicroInterpreter static_interpreter(model, resolver, tensor_arena, kTensorArenaSize, error_reporter);
  interpreter = &static_interpreter;
  // Allocate memory from the tensor_arena for the model's tensors.
  TfLiteStatus allocate_status = interpreter->AllocateTensors();
  if (allocate_status != kTfLiteOk) {
    TF_LITE_REPORT_ERROR(error_reporter, "AllocateTensors() failed");
    return;
  }
  // Obtain pointers to the model's input and output tensors.
  input = interpreter->input(0);
  output_type = interpreter->output(1);
  output_precip = interpreter->output(0);
  
  Serial.println(input->dims->size);
  Serial.println(input->dims->data[1]);
  Serial.println(input->dims->data[2]);
  Serial.println(input->type);
  Serial.println(output_type->dims->size);
  Serial.println(output_type->dims->data[1]);
  Serial.println(output_type->type);
  Serial.println(output_precip->dims->size);
  Serial.println(output_precip->dims->data[1]);
  Serial.println(output_precip->type);
}
```

最后，在循环函数中，我们定义了一个用于量化的 INT8 值的占位符和一个包含浮点值的数组，您可以从 Colab 笔记本中复制粘贴以比较设备上的模型推断与 Colab 中的量化 Tensorflow Lite 模型的推断。

```cpp
void loop() {
  int8_t x_quantized[72];
  float x[72] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0};
```

我们在for循环中将浮点值量化为 INT8 ，并逐个放入输入张量中：

```cpp
for (byte i = 0; i < 72; i = i + 1) {
        input->data.int8[i] = x[i] / input->params.scale + input->params.zero_point;
  }
```

然后，使用 Tensorflow Micro 解释器进行推断，如果没有报告错误，将值放入输出张量中。

```cpp
// Run inference, and report any error
  TfLiteStatus invoke_status = interpreter->Invoke();
  
  if (invoke_status != kTfLiteOk) {
    TF_LITE_REPORT_ERROR(error_reporter, "Invoke failed");
    return;
  }
```

与输入类似，模型的输出也是量化的，因此我们需要执行反向操作，将其从INT8转换为浮点数。

```cpp
// Obtain the quantized output from model's output tensor
  float y_type[4];
  // Dequantize the output from integer to floating-point
  int8_t y_precip_q = output_precip->data.int8[0];
  Serial.println(y_precip_q);
  float y_precip = (y_precip_q - output_precip->params.zero_point) * output_precip->params.scale;  
  Serial.print("Precip: ");
  Serial.print(y_precip);
  Serial.print("\t");
  Serial.print("Type: ");
  for (byte i = 0; i < 4; i = i + 1) {
    y_type[i] = (output_type->data.int8[i] - output_type->params.zero_point) * output_type->params.scale;
    Serial.print(y_type[i]);
    Serial.print(" ");
  }
  Serial.print("\n");
}
```

检查并比较相同数据点的值，对于在 Colab 笔记本中的量化 Tensorflow Lite 模型和在 Wio Terminal 上运行的 Tensorflow Micro 模型，它们应该是相同的。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/array.png" /></div>

## LVGL 界面和 WiFi

现在，下一步是将其从演示变成实际有用的项目。打开课程材料中的  wio_terminal_tfmicro_weather_prediction_static.ino 代码，并查看其内容。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/IMG_9575.JPG" /></div>

代码分为主要的 sketch、get_historical_data 和 GUI 部分。由于我们的模型需要过去24小时的数据，我们需要等待24小时才能进行第一次推断，这是很长的时间。为了解决这个问题，我们从 openweathermap.com API 获取过去24小时的天气数据，并可以在设备启动后立即进行第一次推断，然后用来自连接到 Wio Terminal I2C Grove 插口的 BME280 传感器的温度、湿度和压力值替换循环缓冲区中的值。对于GUI，我们使用了LVGL，一个小巧而多功能的图形库。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/lvgl.jpeg" /></div>

编译并上传代码，在上传之前确保更改 sketch 中的WiFi凭据、您的位置和 openweathermap.com API 密钥。上传后，设备将连接到互联网，获取您所在位置过去24小时的数据，并进行第一次推断。然后，它将等待1小时，然后获取连接到 Wio Terminal 的 BME280 传感器的值——如果没有连接传感器，程序将不会初始化。

## 参考资料

- [Colab notebook](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_TinyML_4_Weather_Prediction/weather_prediction_final.ipynb)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_4_Weather_Prediction)
