---
description:  使用Wio Terminal手势识别
title:  使用Wio Terminal手势识别
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Gesture-Recognition
last_update:
  date: 3/06/2024
  author: 金菊
---

# 使用 Wio Terminal 进行机器学习 - 手势识别

在本教程中，我们使用Wio Terminal来建立一个简单的手势识别机器学习演示，通过 **TensorFlow Lite** 实现。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF.gif"/></div>

这个示例是基于Arduino团队和TensorFlow Lite团队的官方演示进行修改的。如果您想获取更多信息和参考资料，请访问 [Get started with machine learning on Arduino](https://blog.arduino.cc/2019/10/15/get-started-with-machine-learning-on-arduino/)。为了使演示与Wio Terminal兼容，进行了一些修改。

*参考资料:* [如何在 Arduino上开始机器学习](https://medium.com/tensorflow/how-to-get-started-with-machine-learning-on-arduino-7daf95b4157)

## 零件清单

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [Wio Terminal 电池底座](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## 功能

- 在 Wio Terminal上进行机器学习

- 手势识别

- TensorFlow Lite

## 所需的Arduino库

- 安装内置加速度计库 `Seeed_Arduino_LIS3DHTR`, 请访问 [Wio Terminal IMU](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/) 获取更多信息。

- 安装 **Arduino TensorFlow Lite** 库, 请访问 [Wio Terminal TensorFlow Lite](https://wiki.seeedstudio.com/Wio-Terminal-TensonFlow/) 获取更多信息。

## 从Wio Terminal训练IMU数据

与其他机器学习项目一样，我们将获取一些传感器数据，用于后续模型的训练。首先，我们将运行一个简单的Arduino程序，从Wio Terminal流式传输传感器数据。

复制以下代码，并将其上传到Wio Terminal:

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

const float accelerationThreshold = 2; // threshold of significant in G's
const int numSamples = 119;

int samplesRead = numSamples;

void setup() {
  Serial.begin(9600);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g

  Serial.println("Acceleration in G's");
  Serial.println("X\tY\tZ");
}

void loop() {
  float x, y, z;
  
  while (samplesRead == numSamples) {
    x=lis.getAccelerationX();
    y=lis.getAccelerationY();
    z=lis.getAccelerationZ();


     float aSum = fabs(x) + fabs(y) + fabs(z);

      // check if it's above the threshold
      if (aSum >= accelerationThreshold) {
        // reset the sample read count
        samplesRead = 0;
        break;
      }
  }

  while (samplesRead < numSamples) {
    x=lis.getAccelerationX();
    y=lis.getAccelerationY();
    z=lis.getAccelerationZ();

    samplesRead++;

    Serial.print(x, 3);
    Serial.print(',');
    Serial.print(y, 3);
    Serial.print(',');
    Serial.print(z, 3);
    Serial.println();

    if (samplesRead == numSamples) {
      Serial.println();
    }
  }
}
```

或者从 [**这里**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/IMU.zip) 下载代码，并将其上传到Wio Terminal。如果您打开串行监视器，您应该能够看到IMU数据。

## 捕获手势训练数据
 
**将IMU 数据 捕获为 CSV格式** ，用于 TensorFlow ：

- 打开串行监视器，并拿起Wio Terminal。

- 进行一次拳击手势，确保您已触发捕获。

- 重复相同的动作至少10次，训练数据越多越好。

- 重复相同的动作至少10次，训练数据越多越好。

将串行监视器中的数据复制粘贴到一个名为 **`punch.csv`** 的新文本文件中。

- 清除并重置Wio Terminal，然后按照上述步骤进行手指弯曲手势，保存为 **`flex.csv`**。

**注:** 如果您使用的是Linux或Mac，您可以直接将Wio Terminal的传感器数据输出到一个.csv文件中，使用以下命令：

```sh
 cat /dev/cu.usbmodem[nnnnn] > punch.csv
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMU-data.png"/></div>

## 检查 `.csv` 文件

打开 `punch.csv` 和 `flex.csv` 文件并确保csv文件的第一行是 **aX,aY,aZ** 如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMU-csv.png"/></div>

## 在TensorFlow中训练数据

在这里，我们将使用由Arduino团队创建的 **Google Colab project** 。Colab提供了一个Jupyter笔记本，允许我们在Web浏览器中运行TensorFlow训练。Colab将设置环境，训练模型，并将模型转换为TensorFlow Lite模型，并将模型编码为Arduino头文件。

点击 [**这里**](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb) 访问 **Google Colab project**.

## 在 Google Colab 项目中进行修改

在Google Colab项目中需要进行一些修改，以适应Wio Terminal：

- 在 **Setup the Python Environment** 中不需要进行任何更改。

- 在 **Upload Data** 中不需要进行任何更改。

- 在 **Graph Data** 中, 将所有陀螺仪数据部分注释掉，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step1.png"/></div>

- 在 Parse and prepare the data 中, 将所有陀螺仪数据部分注释掉，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step2.png"/></div>

- 在 **Randomize and split the input and output pairs for training** 中不需要进行任何更改。

- 在 **Build & Train the Model** 中不需要进行任何更改。

- 在 **Graph the loss** 中不需要进行任何更改。

- 在 **Graph the loss again, skipping a bit of the start** 中不需要进行任何更改。

- 在 **Graph the mean absolute error** 中不需要进行任何更改。

- 在 **Run with Test Data** 中不需要进行任何更改。

- 在 **Convert the Trained Model to Tensor Flow Lite** 中不需要进行任何更改。

- 在 **Encode the Model in an Arduino Header File** 中不需要进行任何更改。

从左侧面板下载 **`model.h`** 文件。

## 将代码上传至 Wio Terminal

- 下载完模型的头文件后，打开 [IMU_Classifier.ino](https://files.seeedstudio.com/wiki/Wio-Terminal/res/IMU_Classifier.zip) 或者将以下代码复制到 Arduino IDE 中。

```cpp
/*
  IMU Classifier
  This example uses the on-board IMU to start reading acceleration and gyroscope
  data from on-board IMU, once enough samples are read, it then uses a
  TensorFlow Lite (Micro) model to try to classify the movement as a known gesture.
  Note: The direct use of C/C++ pointers, namespaces, and dynamic memory is generally
        discouraged in Arduino examples, and in the future the TensorFlowLite library
        might change to make the sketch simpler.
  The circuit:
  - Arduino Nano 33 BLE or Arduino Nano 33 BLE Sense board.
  Created by Don Coleman, Sandeep Mistry
  Modified by Dominic Pajak, Sandeep Mistry
  This example code is in the public domain.

  Modified to adapt for Wio Terminal - Anson (Seeed Studio)
*/

#undef min
#undef max
#include <TensorFlowLite.h>
#include <tensorflow/lite/experimental/micro/kernels/all_ops_resolver.h>
#include <tensorflow/lite/experimental/micro/micro_error_reporter.h>
#include <tensorflow/lite/experimental/micro/micro_interpreter.h>
#include <tensorflow/lite/schema/schema_generated.h>
#include <tensorflow/lite/version.h>

#include "model.h"
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;


const float accelerationThreshold = 2; // threshold of significant in G's
const int numSamples = 119;

int samplesRead = numSamples;

// global variables used for TensorFlow Lite (Micro)
tflite::MicroErrorReporter tflErrorReporter;

// pull in all the TFLM ops, you can remove this line and
// only pull in the TFLM ops you need, if would like to reduce
// the compiled size of the sketch.
tflite::ops::micro::AllOpsResolver tflOpsResolver;

const tflite::Model* tflModel = nullptr;
tflite::MicroInterpreter* tflInterpreter = nullptr;
TfLiteTensor* tflInputTensor = nullptr;
TfLiteTensor* tflOutputTensor = nullptr;

// Create a static memory buffer for TFLM, the size may need to
// be adjusted based on the model you are using
constexpr int tensorArenaSize = 8 * 1024;
byte tensorArena[tensorArenaSize];

// array to map gesture index to a name
const char* GESTURES[] = {
  "punch",
  "flex"
};


#define NUM_GESTURES (sizeof(GESTURES) / sizeof(GESTURES[0]))

void setup() {
  Serial.begin(9600);
//  while (!Serial);

  lis.begin(Wire1);
  
  // initialize the IMU
  if (!lis) {
    Serial.println("Failed to initialize IMU!");
    while (1);
  }


  // get the TFL representation of the model byte array
  tflModel = tflite::GetModel(model);
  if (tflModel->version() != TFLITE_SCHEMA_VERSION) {
    Serial.println("Model schema mismatch!");
    while (1);
  }

  // Create an interpreter to run the model
  tflInterpreter = new tflite::MicroInterpreter(tflModel, tflOpsResolver, tensorArena, tensorArenaSize, &tflErrorReporter);

  // Allocate memory for the model's input and output tensors
  tflInterpreter->AllocateTensors();

  // Get pointers for the model's input and output tensors
  tflInputTensor = tflInterpreter->input(0);
  tflOutputTensor = tflInterpreter->output(0);
}

void loop() {
  float x, y, z;

  // wait for significant motion
  while (samplesRead == numSamples) {
    x=lis.getAccelerationX();
    y=lis.getAccelerationY();
    z=lis.getAccelerationZ();

    float aSum = fabs(x) + fabs(y) + fabs(z);

      // check if it's above the threshold
      if (aSum >= accelerationThreshold) {
        // reset the sample read count
        samplesRead = 0;
        break;
      }
  }

  // check if the all the required samples have been read since
  // the last time the significant motion was detected
  while (samplesRead < numSamples) {
    // check if new acceleration AND gyroscope data is available
      // read the acceleration and gyroscope data
      x=lis.getAccelerationX();
      y=lis.getAccelerationY();
      z=lis.getAccelerationZ();



      // normalize the IMU data between 0 to 1 and store in the model's
      // input tensor
      tflInputTensor->data.f[samplesRead * 6 + 0] = (x + 4.0) / 8.0;
      tflInputTensor->data.f[samplesRead * 6 + 1] = (y + 4.0) / 8.0;
      tflInputTensor->data.f[samplesRead * 6 + 2] = (z + 4.0) / 8.0;

      samplesRead++;

      if (samplesRead == numSamples) {
        // Run inferencing
        TfLiteStatus invokeStatus = tflInterpreter->Invoke();
        if (invokeStatus != kTfLiteOk) {
          Serial.println("Invoke failed!");
          while (1);
          return;
        }

        // Loop through the output tensor values from the model
        for (int i = 0; i < NUM_GESTURES; i++) {
          Serial.print(GESTURES[i]);
          Serial.print(": ");
          Serial.println(tflOutputTensor->data.f[i], 6);
        }
        Serial.println();
      }
  }
}
```

- 将训练好的 `model.h` 头文件放置在与 IMU_Classifier.ino 文件相同的文件夹中，然后将代码上传到 Wio Terminal。

- 现在，打开串口监视器并执行手势！您应该会看到打印出每个手势的置信度（0 表示低置信度，1 表示高置信度）。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step3.png"/></div>

## 示例模型文件

为了参考，我附上了训练好的 [model.h](https://files.seeedstudio.com/wiki/Wio-Terminal/res/model.h) 文件供下载。您可以将其与 IMU_Classifier.ino 一起使用进行测试。

## 深层开发

关于深层开发，可以通过 IMU 在 Wio Terminal 上训练更多手势，并触发不同的输出！尝试在微控制器上使用 TensorFlow Lite 进行机器学习！
