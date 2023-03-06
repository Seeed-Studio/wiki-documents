---
description: Speech Recognition
title: Speech Recognition
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-TFLite-Mic
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Speech Recognition on Seeed Studio XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" alt="pir" width={1000} height="auto" /></p>


This wiki will demonstrate how you can use TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense and perform speech recognition using the on-board microphone.

> When it comes to embedded AI applications, we highly recommend using the "Seeed nrf52 mbed-enabled Boards Library".

## Software setup

Make sure to first follow ["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/XIAO_BLE/) wiki for the initial hardware and software setup.

Now let's move on to the rest of the software setup.

- **Step 1**. Download [tflite-micro-arduino-examples library](https://github.com/lakshanthad/tflite-micro-arduino-examples) as a zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png" alt="pir" width={1000} height="auto" /></p>


- **Step 2**. Open Arduino IDE, navigate to `Sketch > Include Library > Add .ZIP Library...` and open the downloaded zip file 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


## Train data and generate TensorFlow Lite model

Now we will use a Google Colab notebook to perform the data training and generate a TensorFlow Lite model.

- **Step 1.** Open [this Python notebook](https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg" alt="pir" width={1000} height="auto" /></p>


By default, it will load [this dataset](https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz) which can recognize the words: **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**

- **Step 2.** Under **Configure Defaults** column, change the **WANTED_WORDS** parameter according to the words that you want the model to recognize. You can choose from: **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png" alt="pir" width={600} height="auto" /></p>


**Note:** In this example, the words **yes,no,up,down** are chosen

- **Step 3.** Navigate to `Runtime > Run all` to run all the code cells

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png" alt="pir" width={450} height="auto" /></p>


- **Step 4.** Click **Run anyway** for the error message that pops up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


**Note:** This process will take about 2 hours to complete

- **Step 5.** Once all the code cells are executed, navigate to the **files** tab on the left corner and you will find a new **model.cc** file generated under the **models** folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png" alt="pir" width={300} height="auto" /></p>


**Note:** If you cannot see the above **model.cc** file, refresh the page.

- **Step 6.** Right click on the file and click **Download** to download the file to your PC

## Inference 

Now we will use the downloaded TensorFlow Lite model file **(model.cc)** to recognize different words using the microphone on the Seeed Studio XIAO nRF52840 Sense.

- **Step 1.** Navigate to the library path of **tflite-micro-arduino-examples** Library (normally under **Documents > Arduino > libraries > tflite-micro-arduino-examples**), visit **examples > micro_speech** and open **micro_features_model.cpp**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png" alt="pir" width={550} height="auto" /></p>


- **Step 2.** Replace the values under **const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {** with the new values from the **model.cc** file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png" alt="pir" width={550} height="auto" /></p>


- **Step 3.** Change **g_model_len** according to the value from **model.cc**. Here we got **26720**

```cpp
const int g_model_len = 26720;
```

- **Step 4.** Open **micro_features_micro_model_settings.cpp** inside **micro_speech** folder and add all the words that we defined in the training process. Here we used **yes,no,up,down**

```cpp
#include "micro_features_micro_model_settings.h"

const char* kCategoryLabels[kCategoryCount] = {
    "silence",
    "unknown",
    "yes",
    "no",
    "up",
    "down",
};
```

- **Step 5.** Open **micro_features_micro_model_settings.h** inside **micro_speech** folder and change **constexpr int kCategoryCount** according to the number of categories defined. Here we have 6 categories

```cpp
constexpr int kCategoryCount = 6;
```

- **Step 6.** Open **micro_speech.ino** inside **micro_speech** folder and upload the codes to the Seeed Studio XIAO nRF52840 Sense

- **Step 7.** Open **serial monitor window** and say out loud the words that we defined before. You will see the serial monitor output the correct words spoken after recognition.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png" alt="pir" width={300} height="auto" /></p>


## Tech support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>