---
description: Getting Started
title: Getting Started
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-TFLite-Getting-Started
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Getting Started with TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg" alt="pir" width={1000} height="auto" /></p>


This wiki will demonstrate how you can use TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense and detect gestures such as punching and flexing using the on-board accelerometer. Here the data training will be done on the device itself.

> For embedded AI applications, we highly recommond using the "Seeed nrf52 mbed-enabled Boards Library".

## Software setup

Make sure to first follow ["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/XIAO-BLE-Sense-Getting-Started) wiki for the initial hardware and software setup.

Now let's move on to the rest of the software setup.

- **Step 1**. Download [Seeed_Arduino_LSM6DS3 library](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) as a zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **Step 2**. Download [tflite-micro-arduino-examples library](https://github.com/lakshanthad/tflite-micro-arduino-examples) as a zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png" alt="pir" width={1000} height="auto" /></p>


- **Step 3**. Open Arduino IDE, navigate to `Sketch > Include Library > Add .ZIP Library...` and open both the downloaded zip files one after the other

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **Step 4.** Navigate to `File > Examples > Seeeed Arduino LSM6DS3 > IMU_Capture` to open **IMU_Capture.ino**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png" alt="pir" width={500} height="auto" /></p>


- **Step 5.** Upload the codes and open the **Serial Monitor**

**Note:** Once you upload the codes, it will not be executed automatically until you click **Serial Monitor** on the upper right corner of the Arduino window.

## Train data

### Punch action

While the serial monitor is open, start training data for the punch action.

- **Step 1.** Grab the Seeed Studio XIAO nRF52840 Sense on your palm and start punching forward and you will see some data printed out on serial monitor 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" alt="pir" width={1000} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png" alt="pir" width={1000} height="auto" /></p>


- **Step 2.** Repeat the punching action for about 10 times and you will see new data generated after each punch

- **Step 3.** Copy and paste the complete serial monitor output to a text file and save the text file as **punch.csv**

**Note:** Please copy the first line as well which contains **aX,aY,aZ,gX,gY,gZ**

### Flex action

- **Step 1.** Reconnect USB cable to Seeed Studio XIAO nRF52840 Sense, open serial monitor, grab the Seeed Studio XIAO nRF52840 Sense on your palm and start flexing inwards and you will see some data printed out on serial monitor 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif" alt="pir" width={1000} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png" alt="pir" width={1000} height="auto" /></p>


- **Step 2.** Repeat the flexing action for about 10 times and you will see new data generated after each flex

- **Step 3.** Copy and paste the complete serial monitor output to a text file and save the text file as **flex.csv**

**Note:** Please copy the first line as well which contains **aX,aY,aZ,gX,gY,gZ**

## Generate TensorFlow Lite model file 

Now we will generate a TensorFlow Lite model file **(model.h)**, by using the **punch.csv** and **flex.csv** files that we created before.

- **Step 1.** Open [this Python notebook](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb) which will help generate the model.h file that we need

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png" alt="pir" width={7500} height="auto" /></p>


- **Step 2.** Navigate to files tab on the left navigation panel, drag and drop **punch.csv** and **flex.csv** files inside

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png" alt="pir" width={350} height="auto" /></p>


- **Step 3.** Inside **Setup Python Environment** section, change the code from **pip install tensorflow==2.0.0-rc1** to **pip install tensorflow** 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png" alt="pir" width={550} height="auto" /></p>


- **Step 4.** Navigate to `Runtime > Run all` to run all the code cells

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png" alt="pir" width={450} height="auto" /></p>


- **Step 5.** Click **Run anyway** for the error message that pops up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


- **Step 6.** Once all the code cells are executed, you will find a new **model.h** file generated under the **files** tab that saw before

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png" alt="pir" width={350} height="auto" /></p>


**Note:** If you cannot see the above **model.h** file, refresh the page.

- **Step 7.** Right click on the file and click **Download** to download the file to your PC

## Inference 

Now we will use the downloaded TensorFlow Lite model file **(model.h)** to recognize the punch and flex actions from Seeed Studio XIAO nRF52840 Sense.

- **Step 1.** Navigate to the library path of **Seeed_Arduino_LSM6DS3** Library (normally under **Documents > Arduino > libraries > Seeed_Arduino_LSM6DS3**), and visit **examples > IMU_Classifier**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png" alt="pir" width={650} height="auto" /></p>


- **Step 2.** Replace the **model.h** file with the one that we downloaded before

- **Step 3.** Double click **IMU_Classifier.ino** and upload the codes to the Seeed Studio XIAO nRF52840 Sense.

### Punch action

Open **serial monitor** and perform a punching action. You will see that it will give a result close to **1** next to **punch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png" alt="pir" width={300} height="auto" /></p>


### Flex action

Perform a flexing action. You will see that it will give a result close to **1** next to **flex**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png" alt="pir" width={300} height="auto" /></p>


## Resources

- **[Webpage]** [TensorFlow Lite Documentation](https://www.tensorflow.org/lite/guide)

## Tech support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>