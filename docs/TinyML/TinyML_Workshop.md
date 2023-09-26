---
description: TinyML Workshop Course.
title: TinyML Workshop Course
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /tinyml_workshop_course
last_update:
  date: 08/09/2023
  author: MengDu
---

:::info
This page has been updated. Please check [the new version](https://wiki.seeedstudio.com/tinyml_workshop_course_new/) for better experience.
:::

# TinyML Workshop Course

Welcome to the course on using SenseCraft Model Assistant and Edge Impulse for TinyML on the XIAO ESP32S3 Sense! This course is a culmination of Seeed Studio's offline workshops, and it aims to provide you with a comprehensive understanding of how to utilize SenseCraft Model Assistant and Edge Impulse platforms effectively. We will explore the functionalities of SenseCraft Model Assistant, learn about Edge Impulse's capabilities, and focus on implementing TinyML on the XIAO ESP32S3 development board.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/3.jpg" style={{width:1000, height:'auto'}}/></div>

Throughout this course, we will delve into the usage of SenseCraft Model Assistant(Beta) as a powerful online development environment. It will guide you through data management, preprocessing, feature engineering, model design, training, evaluation, and optimization. We will emphasize its graphical interface, which simplifies tasks such as data collection, preprocessing, and feature engineering, as well as selecting appropriate model architectures and training parameters.

<div class="button_tech_support_container">
<a href="https://sensecraftma.seeed.cc/" class="button_edgelab"></a> 
</div>

Next, we will shift our focus to the Edge Impulse platform. Designed specifically for embedded devices, Edge Impulse offers an end-to-end solution for developing and deploying TinyML models. We will learn how to export models trained in SenseCraft Model Assistant to Edge Impulse and deploy them on the XIAO ESP32S3. Additionally, we will explore Edge Impulse's features, including real-time data collection, model quantization and optimization, and the ability to perform real-time inference on the device.

<div class="button_tech_support_container">
<a href="https://edgeimpulse.com/" class="button_edgeimpulse"></a> 
</div>

By participating in this course, you will gain the following skills and knowledge:

- Familiarity with the fundamental features and workflow of SenseCraft Model Assistant.
- Proficiency in essential steps such as data preprocessing, model training, and evaluation.
- Understanding of TinyML concepts and their application scenarios.
- Ability to deploy models to the XIAO ESP32S3 using the Edge Impulse platform.

Whether you are a beginner or an experienced developer with some machine learning background, this course will provide you with invaluable practical experience and skills to apply TinyML in IoT projects. Let's embark on this exciting learning journey together!

# Familiarize the tools that we are using. 

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "#1-SenseCraft Model Assistant" class="getting_started_label2">SenseCraft Model Assistant</a>
          <br/>Use pre-made tinyML models and experiment quickly.
      </div>
  </div>
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "#2-edge-impulse" class="getting_started_label2">Edge Impulse</a>
          <br/>Create ML model and generate arduino libraries. 
      </div>
  </div>
</div>


## 1. SenseCraft Model Assistant

### 1.1 Power-on Ready Embedded AI

We flash the SenseCraft Model Assistant program in advance for all XIAO ESP32S3 Sense participating in the Workshop, and pre-set the model for face recognition. Simply connect the XIAO ESP32S3 Sense to your PC via a data cable to instantly display face recognition.

#### Step 1. Install XIAO ESP32S3 Sense expansion board

First, we need to properly connect the XIAO ESP32S3 Sense expansion board to the XIAO. Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>


#### Step 2. Connecting the XIAO to your PC

Connect the XIAO to your PC using a data cable with data transfer function.

#### Step 3. Go to the SenseCraft Model Assistant page and connect the XIAO

Click the button below to go to the SenseCraft Model Assistant homepage.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace">
	<strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft Model Assistant</font></span></strong></a>
</div><br />

Once we are on the homepage of SenseCraft Model Assistant, we first need to select the interface type for the connection as **Serial** and then click the **Connect** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/5.png" style={{width:700, height:'auto'}}/></div>

The browser will then pop up a window. We need to select the correct port for XIAO here. For **Windows**, this port usually starts with **COM**, and in case of **MacOS**, this port usually starts with **/dev/tty**. And it will have the words **USB JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/6.png" style={{width:700, height:'auto'}}/></div>

Clicking the **Connect** button will only result in an automatic refresh of the **Refresh** in the Configuration section below, where the XIAO firmware is being loaded and configuration information is being read.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/7.png" style={{width:500, height:'auto'}}/></div>

Once the **Refresh** button is back to blue, we can select the model and display the effect. The current model name for face recognition is **User-Defined 1**. After selecting it, click the **Save** button in the lower left corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/8.png" style={{width:500, height:'auto'}}/></div>

Finally, we come to the Monitor section, click once on **Stop** in the upper right corner, and then click **Invoke**, if everything runs smoothly, you can see the real-time screen effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/9.png" style={{width:1000, height:'auto'}}/></div> 


### 1.2 Select & Replace Custom Models

:::tip
In addition to the face models prepared in advance, we are also supporting more models for XIAO ESP32S3, so stay tuned!
:::

#### Download Models

- [yolov5 Face Detection](https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.tflite)

  Preview:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.png" style={{width:600, height:'auto'}}/></div>

- [yolov5 Digital Meter Water](https://files.seeedstudio.com/wiki/tinyml-topic/Digital_Meter_Seg7.tflite)

  Preview:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/digital_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

- [yolov5 Meter Water](https://files.seeedstudio.com/wiki/tinyml-topic/Meter_Water.tflite)

  Preview:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/water_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

#### Models Usage

If you want to use a custom model, follow the instructions below.

**Step 1. Download all necessary files**

Please download all the files below in order and select the model you want to use from above and download it. In general, to run a model you need to have at least **four** of the above files ready.

<div class="table-center">
	<table align="center">
		<tr>
			<td>bootloader.bin</td>
			<td><a href="https://files.seeedstudio.com/wiki/tinyml-topic/res/bootloader.bin" target="_blank"><b>Download</b></a></td>
		</tr>
		<tr>
			<td>partition-table.bin</td>
			<td><a href="https://files.seeedstudio.com/wiki/tinyml-topic/res/partition-table.bin" target="_blank"><b>Download</b></a></td>
		</tr>
    <tr>
      <td>edgelab.bin</td>
      <td><a href="https://files.seeedstudio.com/wiki/tinyml-topic/res/edgelab.bin" target="_blank"><b>Download</b></a></td>
    </tr>
	</table>
</div>

**Step 2. Erase Flash to XIAO**

Please click the button below to come to SenseCraft Model Assistant's Flash Tools page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace">
	<strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft Model Assistant Flash</font></span></strong></a>
</div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/14.png" style={{width:1000, height:'auto'}}/></div>

At this point, please connect the XIAO ESP32S3 Sense directly to your computer. Then click the **Connect** button and SenseCraft Model Assistant will automatically search and connect your XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/15.png" style={{width:1000, height:'auto'}}/></div>

Then we erase the firmware first.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/21.png" style={{width:1000, height:'auto'}}/></div>

**Step 3. Flash all files to XIAO**

Then, please see **Burn firmwave** toolbar. Let's start by clicking on the three firmwares we just downloaded and uploading them to the corresponding area in turn.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/16.png" style={{width:1000, height:'auto'}}/></div>

Then, click the **Burn** button in the upper right corner to flash the desired firmware to the XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/17.png" style={{width:1000, height:'auto'}}/></div>

Once the firmware is flashed, the **Burn** button will return to blue, at which point we can upload the model file for XIAO to execute TinyML. Select your downloaded `.tflite` model file and click the **Upload** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/18.png" style={{width:1000, height:'auto'}}/></div>

Once the model is uploaded, we go back to the **[Dashboard](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace)** and SenseCraft Model Assistant automatically connects to XIAO and loads your model. We can directly click the **Invoke** button to observe the effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/10.gif" style={{width:800, height:'auto'}}/></div> 

:::tip
If you also want to experience this water meter that generates readings automatically, you can download the zip package by clicking **[here](https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip)**, unzip it and then double click to open the html file in the root directory.
:::

**Step 4**. Replace model

:::tip
Uploading the firmware is a one-time operation, so if you want to change the model, the next time you just need to change the model file directly, without re-uploading the firmware.
:::

We click **Deploy** from the dashboard and SenseCraft Model Assistant automatically connects to XIAO. Then we just need to directly select the model file you want to replace, no need to re-upload the firmware again.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/19.png" style={{width:1000, height:'auto'}}/></div> 

Once the model has been replaced, you can return to the dashboard to continue observing the results.


## 2. Edge Impulse

Edge Impulse is the leading development platform for machine learning on edge devices, free for developers, and trusted by enterprises worldwide.

* With Edge Impulse, software developers, engineers, and domain experts can solve real problems using machine learning on edge devices without a Ph.D. or advanced embedded engineering skills. From getting started to MLOps in production, Edge Impulse provides maximum efficiency and speed on a wide range of hardware from MCUs to CPUs.  

<div style={{textAlign:'center'}}><img src="https://workshop.makergram.com/assets/images/EI_homepage-012378fc3425daa13ba327cd01dda3bd.png" style={{width:1000, height:'auto'}}/></div> 

With EdgeImpulse we can 
* Collect dataset from the device direclty 
* Collect dataset from other source like .zip file, via api or other third party cloud ingestion 
* Create test and train data and put them in different lables  
* Train our model 
* Able to Select approriate ML algoirthms - EI provide recommended ML algorithms based on our dataset
* Deploy it on our harware 
* TinyML project collabration with version controlling 
* and much more that helps you to build tinyML applications. 


### 2.1 Quick hands-on experience

Before going through the full process of learning Edge Impulse, we provide the full program firmware and you can see the results by flashing this firmware directly to XIAO ESP32S3 Sense.

**Step 1. Download all necessary files**

Download the three files below.

<div class="table-center">
	<table align="center">
		<tr>
			<td>bootloader.bin</td>
			<td><a href="https://files.seeedstudio.com/wiki/tinyml-topic/res/speech_demo/bootloader.bin" target="_blank"><b>Download</b></a></td>
		</tr>
		<tr>
			<td>partition-table.bin</td>
			<td><a href="https://files.seeedstudio.com/wiki/tinyml-topic/res/speech_demo/partition-table.bin" target="_blank"><b>Download</b></a></td>
		</tr>
    <tr>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
      <td><a href="https://files.seeedstudio.com/wiki/tinyml-topic/res/speech_demo/XIAO_ESP32S3_Speech_Recognition.bin" target="_blank"><b>Download</b></a></td>
    </tr>
	</table>
</div>

**Step 2. Erase Flash to XIAO**

Please click the button below to come to SenseCraft Model Assistant's Flash Tools page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace">
	<strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft Model Assistant Flash</font></span></strong></a>
</div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/14.png" style={{width:1000, height:'auto'}}/></div>

At this point, please connect the XIAO ESP32S3 Sense directly to your computer. Then click the **Connect** button and SenseCraft Model Assistant will automatically search and connect your XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/15.png" style={{width:1000, height:'auto'}}/></div>

Then we erase the firmware first.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/21.png" style={{width:1000, height:'auto'}}/></div>

**Step 3. Flash all files to XIAO**

Then, please see **Burn firmwave** toolbar. Let's start by clicking on the three firmwares we just downloaded and uploading them to the corresponding area in turn.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/20.png" style={{width:1000, height:'auto'}}/></div>

Then, click the **Burn** button in the upper right corner to flash the desired firmware to the XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/22.png" style={{width:1000, height:'auto'}}/></div>

**Step 4**. Reboot to watch the effect

Once all the files have been uploaded successfully, you can press the reset button to allow the program to start executing. The effect of this sample program is that when the microphone of the XIAO ESP32S3 Sense detects the Hello command that you utter, the built-in LED orange light will illuminate. When the Stop command you say is monitored, the orange light goes off.


### 2.2 Available Edge Impulse libraries

We're also moving forward in parallel with making some Edge Impulse exported Arduino libraries that have been verified and edited to work directly with XIAO ESP32S3 Sense.

- [Speech keyword recognition (Hello & Stop) Arduino Library](https://files.seeedstudio.com/wiki/tinyml-topic/res/speech_demo/xiao-esp32s3-speech_inferencing.zip)
- [Fruit identification (apples, bananas, grapes) Arduino Library](https://files.seeedstudio.com/wiki/tinyml-topic/res/xiao-esp32s3-fruits-classify_inferencing.zip)


### 2.3 Edge Impulse KWS application in XIAO ESP32S3 Sense

This tutorial will guide you through implementing a Keyword Spotting (KWS) system using TinyML on the XIAO ESP32S3 Sense microcontroller board, with the help of Edge Impulse for data collection and model training. KWS is essential for voice recognition systems, and with the power of TinyML, it's achievable on smaller, low-power devices. Let's build our own KWS system using Edge Impulse and XIAO ESP32S3 Sense!

#### 2.3.1 Getting Started

Before starting this project, please follow the preparation steps below to prepare the software and hardware needed for this project.

##### Hardware

To carry out this project successfully, you need to prepare the following hardware.

- XIAO ESP32S3 Sense
- microSD card (No larger than 32GB)
- microSD card reader
- USB-C data cable

Insert the microSD card into the microSD card slot. Please note the direction of insertion, the side with the gold finger should face inward.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

##### Software

If this is your first time using XIAO ESP32S3 Sense, then before you start, we suggest you read the following two Wiki's to learn how to use it.

- [Getting Started with Seeed Studio XIAO ESP32S3 (Sense)](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)
- [Usage of Seeed Studio XIAO ESP32S3 microphone](https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/)

#### 2.3.2 Capturing (offline) Audio Data

##### Step 1. Save recorded sound samples as .wav audio files to a microSD card.

Let's use the onboard SD Card reader to save.wav audio files, we need to habilitate the XIAO PSRAM first.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:600, height:'auto'}}/></div>

Then compile and upload the following program to XIAO ESP32S3.

:::tip
This code records audio using the I2S interface of the Seeed XIAO ESP32S3 Sense board, saves the recording as a.wav file on an SD card, and allows for control of the recording process through commands sent from the serial monitor. The name of the audio file is customizable (it should be the class labels to be used with the training), and multiple recordings can be made, each saved in a new file. The code also includes functionality to increase the volume of the recordings.
:::

```cpp
/* 
 * WAV Recorder for Seeed XIAO ESP32S3 Sense 
 * 
 * NOTE: To execute this code, we will need to use the PSRAM 
 * function of the ESP-32 chip, so please turn it on before uploading.
 * Tools>PSRAM: "OPI PSRAM"
 * 
 * Adapted by M.Rovai @May23 from original Seeed code
*/

#include <I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// make changes as needed
#define RECORD_TIME   10  // seconds, The maximum value is 240
#define WAV_FILE_NAME "data"

// do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

int fileNumber = 1;
String baseFileName;
bool isRecording = false;

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  Serial.printf("Enter with the label name\n");
  //record_wav();
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    command.trim();
    if (command == "rec") {
      isRecording = true;
    } else {
      baseFileName = command;
      fileNumber = 1; // reset file number each time a new base file name is set
      Serial.printf("Send rec for starting recording label \n");
    }
  }
  if (isRecording && baseFileName != "") {
    String fileName = "/" + baseFileName + "." + String(fileNumber) + ".wav";
    fileNumber++;
    record_wav(fileName);
    delay(1000); // delay to avoid recording multiple files at once
    isRecording = false;
  }
}

void record_wav(String fileName)
{
  uint32_t sample_size = 0;
  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;
  uint8_t *rec_buffer = NULL;
  Serial.printf("Start recording ...\n");
   
  File file = SD.open(fileName.c_str(), FILE_WRITE);
  // Write the header to the WAV file
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // PSRAM malloc for recording
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("malloc failed!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // Start recording
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("Record Failed!\n");
  } else {
    Serial.printf("Record %d bytes\n", sample_size);
  }

  // Increase volume
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // Write data to the WAV file
  Serial.printf("Writing to the file ...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("Write file Failed!\n");

  free(rec_buffer);
  file.close();
  Serial.printf("Recording complete: \n");
  Serial.printf("Send rec for a new sample or enter a new label\n\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

Now, upload the code to the XIAO and get samples from the keywords (hello and stop). You can also capture noise and other words. The Serial monitor will prompt you to receive the label to be recorded.

Send the label (for example, **hello**). The program will wait for another command: **rec**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/2.png" style={{width:600, height:'auto'}}/></div>

And the program will start recording new samples every time a command **rec** is sent. The files will be saved as hello.1.wav, hello.2.wav, hello.3.wav, etc. until a new label (for example, **stop**) is sent. In this case, you should send the command **rec** for each new sample, which will be saved as stop.1.wav, stop.2.wav, stop.3.wav, etc.

Ultimately, we will get the saved files on the SD card.

:::note
We recommend that you have enough sounds for each label sample. You can repeat your keywords several times during each ten-second recording session, and we will segment the samples in subsequent steps. But there needs to be some spacing between keywords.
:::

#### 2.3.3 Training data acquisition

##### Step 2. Uploading collected sound data

When the raw dataset is defined and collected, we should initiate a new project at [Edge Impulse](https://edgeimpulse.com/). Once the project is created, select the **Upload Existing Data** tool in the **Data Acquisition** section. Choose the files to be uploaded.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/3.png" style={{width:1000, height:'auto'}}/></div>

And upload them to the Studio (You can automatically split data in train/test). Repete to all classes and all raw data.

All data on dataset have a 1s length, but the samples recorded in the previous section have 10s and must be split into 1s samples to be compatible. Click on three dots after the sample name and select **Split sample**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/5.png" style={{width:600, height:'auto'}}/></div>

Once inside de tool, split the data into 1-second records. If necessary, add or remove segments.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/4.png" style={{width:1000, height:'auto'}}/></div>

This procedure should be repeated for all samples.

##### Step 3. Creating Impulse (Pre-Process / Model definition)

An impulse takes raw data, uses signal processing to extract features, and then uses a learning block to classify new data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/6.png" style={{width:1000, height:'auto'}}/></div>

First, we will take the data points with a 1-second window, augmenting the data, sliding that window each 500ms. Note that the option **zero-pad data** is set. This is important to fill with zeros samples smaller than 1 second (in some cases, I reduced the 1000 ms window on the **split tool** to avoid noises and spikes).

Each 1-second audio sample should be pre-processed and converted to an image (for example, 13 x 49 x 1). We will use MFCC, which extracts features from audio signals using Mel Frequency Cepstral Coefficients, which are great for the human voice.

Next, we select **KERAS** for classification that builds our model from scratch by doing Image Classification using Convolution Neural Network.

##### Step 4. Pre-Processing (MFCC)

The next step is to create the images to be trained in the next phase. We can keep the default parameter values or take advantage of the DSP **Autotuneparameters option**, which we will do.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/7.png" style={{width:1000, height:'auto'}}/></div>


#### 2.3.4 Building a mechine learning model

##### Step 5. Model Design and Training

We will use a Convolution Neural Network (CNN) model. The basic architecture is defined with two blocks of Conv1D + MaxPooling (with 8 and 16 neurons, respectively) and a 0.25 Dropout. And on the last layer, after Flattening four neurons, one for each class.

As hyper-parameters, we will have a Learning Rate of 0.005 and a model that will be trained by 100 epochs. We will also include data augmentation, as some noise. The result seems OK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/8.png" style={{width:600, height:'auto'}}/></div>


#### 2.3.5 Deploying to XIAO ESP32S3 Sense

##### Step 6. Deploying to XIAO ESP32S3 Sense

Edge Impulse will package all the needed libraries, preprocessing functions, and trained models, downloading them to your computer. You should select the option Arduino Library and at the bottom, select Quantized (Int8) and press the button Build.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/9.png" style={{width:600, height:'auto'}}/></div>

Even though Edge Impulse has not released its SDK for ESP32S3 using the ESP NN accelerator, thanks to Dmitry Maslov, we can have its assembly optimizations restored and fixed for ESP32-S3. This solution is not official yet, and EI will include it in EI SDK once they fix conflicts with other boards.

:::caution
For now, this only works with the non-EON version. So, you should also keep the the option **Enable EON Compiler** not selected.
:::

When the Build button is selected, a Zip file will be created and downloaded to your computer.

Before we use the downloaded library, we need to enable the **ESP NN** Accelerator. For that, you can download a preliminary version from the [project GitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip), unzip it, and replace the ESP NN folder with it under:`src/edge-impulse-sdk/porting/espressif/ESP-NN`, in your Arduino library folder.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div>

On your Arduino IDE, go to the Sketch tab and select the option Add .ZIP Library, and Choose the .zip file downloaded by the Edge Impulse.

You can find the complete code on the [project's GitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/xiao_esp32s3_microphone_led). Upload the sketch to your board and test some real inferences.

:::tip
The library imported in the code needs to be updated with the name of your library. The logic for lighting up also needs to be modified based on the order of the labels you actually trained on.
:::

```cpp
/* Edge Impulse Arduino examples
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// If your target is limited in memory remove this macro to save 10K RAM
#define EIDSP_QUANTIZE_FILTERBANK   0

/*
 ** NOTE: If you run into TFLite arena allocation issue.
 **
 ** This may be due to may dynamic memory fragmentation.
 ** Try defining "-DEI_CLASSIFIER_ALLOCATION_STATIC" in boards.local.txt (create
 ** if it doesn't exist) and copy this file to
 ** `<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`.
 **
 ** See
 ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
 ** to find where Arduino installs cores on your machine.
 **
 ** If the problem persists then there's not enough memory for this model and application.
 */

/* Includes ---------------------------------------------------------------- */
#include <XIAO-ESP32S3-KWS_inferencing.h>

#include <I2S.h>
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16

#define LED_BUILT_IN 21 

/** Audio buffers, pointers and selectors */
typedef struct {
    int16_t *buffer;
    uint8_t buf_ready;
    uint32_t buf_count;
    uint32_t n_samples;
} inference_t;

static inference_t inference;
static const uint32_t sample_buffer_size = 2048;
static signed short sampleBuffer[sample_buffer_size];
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal
static bool record_status = true;

/**
 * @brief      Arduino setup function
 */
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    // comment out the below line to cancel the wait for USB connection (needed for native USB)
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");

    pinMode(LED_BUILT_IN, OUTPUT); // Set the pin as output
    digitalWrite(LED_BUILT_IN, HIGH); //Turn off
    
    I2S.setAllPins(-1, 42, 41, -1, -1);
    if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
      Serial.println("Failed to initialize I2S!");
    while (1) ;
  }
    
    // summary of inferencing settings (from model_metadata.h)
    ei_printf("Inferencing settings:\n");
    ei_printf("\tInterval: ");
    ei_printf_float((float)EI_CLASSIFIER_INTERVAL_MS);
    ei_printf(" ms.\n");
    ei_printf("\tFrame size: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
    ei_printf("\tSample length: %d ms.\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);
    ei_printf("\tNo. of classes: %d\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));

    ei_printf("\nStarting continious inference in 2 seconds...\n");
    ei_sleep(2000);

    if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
        ei_printf("ERR: Could not allocate audio buffer (size %d), this could be due to the window length of your model\r\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
        return;
    }

    ei_printf("Recording...\n");
}

/**
 * @brief      Arduino main function. Runs the inferencing loop.
 */
void loop()
{
    bool m = microphone_inference_record();
    if (!m) {
        ei_printf("ERR: Failed to record audio...\n");
        return;
    }

    signal_t signal;
    signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
    signal.get_data = &microphone_audio_signal_get_data;
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
    if (r != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", r);
        return;
    }

    int pred_index = 0;     // Initialize pred_index
    float pred_value = 0;   // Initialize pred_value

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: ", result.classification[ix].label);
        ei_printf_float(result.classification[ix].value);
        ei_printf("\n");

        if (result.classification[ix].value > pred_value){
           pred_index = ix;
           pred_value = result.classification[ix].value;
      }
    }
    // Display inference result
    if (pred_index == 3){
      digitalWrite(LED_BUILT_IN, LOW); //Turn on
    }
    else{
      digitalWrite(LED_BUILT_IN, HIGH); //Turn off
    }

    
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: ");
    ei_printf_float(result.anomaly);
    ei_printf("\n");
#endif
}

static void audio_inference_callback(uint32_t n_bytes)
{
    for(int i = 0; i < n_bytes>>1; i++) {
        inference.buffer[inference.buf_count++] = sampleBuffer[i];

        if(inference.buf_count >= inference.n_samples) {
          inference.buf_count = 0;
          inference.buf_ready = 1;
        }
    }
}

static void capture_samples(void* arg) {

  const int32_t i2s_bytes_to_read = (uint32_t)arg;
  size_t bytes_read = i2s_bytes_to_read;

  while (record_status) {

    /* read data at once from i2s - Modified for XIAO ESP2S3 Sense and I2S.h library */
    // i2s_read((i2s_port_t)1, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);

    if (bytes_read <= 0) {
      ei_printf("Error in I2S read : %d", bytes_read);
    }
    else {
        if (bytes_read < i2s_bytes_to_read) {
        ei_printf("Partial I2S read");
        }

        // scale the data (otherwise the sound is too quiet)
        for (int x = 0; x < i2s_bytes_to_read/2; x++) {
            sampleBuffer[x] = (int16_t)(sampleBuffer[x]) * 8;
        }

        if (record_status) {
            audio_inference_callback(i2s_bytes_to_read);
        }
        else {
            break;
        }
    }
  }
  vTaskDelete(NULL);
}

/**
 * @brief      Init inferencing struct and setup/start PDM
 *
 * @param[in]  n_samples  The n samples
 *
 * @return     { description_of_the_return_value }
 */
static bool microphone_inference_start(uint32_t n_samples)
{
    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));

    if(inference.buffer == NULL) {
        return false;
    }

    inference.buf_count  = 0;
    inference.n_samples  = n_samples;
    inference.buf_ready  = 0;

//    if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {
//        ei_printf("Failed to start I2S!");
//    }

    ei_sleep(100);

    record_status = true;

    xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void*)sample_buffer_size, 10, NULL);

    return true;
}

/**
 * @brief      Wait on new data
 *
 * @return     True when finished
 */
static bool microphone_inference_record(void)
{
    bool ret = true;

    while (inference.buf_ready == 0) {
        delay(10);
    }

    inference.buf_ready = 0;
    return ret;
}

/**
 * Get raw audio signal data
 */
static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr)
{
    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);

    return 0;
}

/**
 * @brief      Stop PDM and release buffers
 */
static void microphone_inference_end(void)
{
    free(sampleBuffer);
    ei_free(inference.buffer);
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "Invalid model for current sensor."
#endif
```

The idea is that the LED will be ON whenever the keyword **HELLO** is detected. In the same way, instead of turn-on a LED, this could be a "trigger" for an external device, as we saw in the introduction.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/11.png" style={{width:700, height:'auto'}}/></div>

#### Special Thanks

Special thanks to **[MJRoBot (Marcelo Rovai)](https://mjrobot.org/)** for the tutorial content on XIAO ESP32S3 Sense access to Edge Impulse. The original article is very detailed and contains a lot of knowledge about machine learning.

If you would like to read the original content of this article, you can go straight to the original article by scrolling down.

- [TinyML Made Easy: KeyWord Spotting (KWS)](https://www.hackster.io/mjrobot/tinyml-made-easy-keyword-spotting-kws-5fa6e7#toc-capturing--offline--audio-data-with-the-xiao-esp32s3-sense-5)

MJRoBot also has very many interesting projects about the XIAO ESP32S3.

- [Exploring Machine Learning with the new XIAO ESP32S3](https://www.hackster.io/mjrobot/exploring-machine-learning-with-the-new-xiao-esp32s3-6463e5)
- [TinyML Made Easy: Image Classification](https://www.hackster.io/mjrobot/tinyml-made-easy-image-classification-cb42ae)

## Troubleshooting

### Q1: I get an error after clicking the connect button?

A: If you are encountering an error message after connecting, such as the error shown below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/23.png" style={{width:600, height:'auto'}}/></div>

There are three possibilities for this to occur.
1. XIAO's port is occupied by another program. At this time, please check if you have turned on the Arduino's serial port monitor or other serial port software, please turn them off. If you are never able to rule out what is occupying the port, try re-plugging the XIAO or restarting the computer.
2. It could be that your data cable is abnormal. Please replace the data cable with a good quality one to transfer data.
3. It may be that the browser is not supported. Edge or Google Chrome is recommended.

### Q2: Invoke doesn't show an image after uploading a model?

A: It is possible that the XIAO was not reset successfully, you can try to press the reset button on the XIAO or re-plug the connected XIAO.

### Q3: After erasing the firmware, uploading the model directly has no effect?

A: The Erase Firmware function will erase the APP firmware from the XIAO, so if you want to change the model, you don't need to click the Erase Firmware button. If you click on erase firmware, then you need to upload the firmware all over again before you can upload the model file again. Generally the erase firmware action is only required if you switch from SenseCraft Model Assistant to Edge Impulse or vice versa.

## Resources

- **[GITHUB]** [SenseCraft Model Assistant Models](https://github.com/Seeed-Studio/edgelab-model-zoo/tree/main/detection)
- **[GITHUB]** [Project Github](https://github.com/Mjrovai/XIAO-ESP32S3-Sense)
- **[EDGE-IMPULSE]** [edge impulse KWS demo](https://studio.edgeimpulse.com/public/256022/latest)
- **[EDGE-IMPULSE]** [edge impulse Fruits classify demo](https://studio.edgeimpulse.com/public/269519/latest)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


















