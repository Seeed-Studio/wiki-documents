---
description: Train Water Meter Digits Recognition Model with SenseCAP A1101
title: Train Water Meter Digits Recognition Model with SenseCAP A1101
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101
last_update:
  date: 5/10/2023
  author: Lee
---

# Train Water Meter Digits Recognition Model with SenseCAP A1101

## Overview

In this wiki, we will teach you how to train your own meter model for your specific application and then deploy it easily to the SenseCAP A1101. Let's get started!
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/0.jpg"/></div>


## Hardware preparation

- SenseCAP A1101 - LoRaWAN Vision AI Sensor
- USB Type-C cable
- Windows/ Linux/ Mac with internet access

## Software preparation

We will be using the following software technologies in this wiki

- [Roboflow](https://roboflow.com) - for annotating
- [EdgeLab](https://seeed-studio.github.io/EdgeLab/) - for training
- [TensorFlow Lite](https://www.tensorflow.org/lite) - for inferencing

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/11.png"/></div>


Now let's setup the software. The software setup for Windows, Linux and Intel Mac will be same whereas for M1/M2 Mac will be different.

:::tip
**What is EdgeLab?**Seeed Studio EdgeLab is an open-source project focused on embedded AI. We have optimized excellent algorithms from OpenMMLab for real-world scenarios and made implementation more user-friendly, achieving faster and more accurate inference on embedded devices.
:::

### Windows, Linux, Intel Mac

- **Step 1.** Make sure Python is already installed on the computer. If not, visit [this page](https://www.python.org/downloads/) to download and install latest version of Python

- **Step 2.** Install the following dependency

```sh
pip3 install libusb1
```

### M1/ M2 Mac

- **Step 1.** Install Homebrew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **Step 2.** Install conda

```sh
brew install conda
```

- **Step 3.** Download libusb

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **Step 4.** Install libusb

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::cautionwarning
You need to make sure your BootLoader version is greater than 2.0.0 before you can change the firmware to do the following. If you are not sure, please check the BootLoader version by following the steps mentioned in [this section](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#check-bootloader-version), and if the version is less than 2.0.0, please update the BootLoader by following the steps mentioned in [this section](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#update-bootloader)
:::



## 1. Collect Image Data

- **Step 1.** Connect SenseCAP A1101 to PC by using USB Type-C cable

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Step 2.** Double click the boot button to enter **boot mode**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

After this you will see a new storage drive shown on your file explorer as **SENSECAP**


<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Step 3.** Drag and drop [this .uf2 file](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2) to **SENSECAP** drive

As soon as the uf2 finishes copying into the drive, the drive will disappear. This means the uf2 has been successfully uploaded to the module.

- **Step 4.** Copy and paste [this Python script](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py) inside a newly-created file named **capture_images_script.py** on your PC

- **Step 5.** Execute the Python script to start capturing images

```sh
python3 capture_images_script.py
```

By default, it will capture an image every 300ms. If you want to change this, you can run the script in this format

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

For example, to capture an image every second

```sh
python3 capture_images_script.py --interval 1000
```

After the above script is executed, SenseCAP A1101 will start to capture images from the in-built cameras continuosly and save all of them inside a folder named **save_img**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/1.png"/></div>

Also, it will open a preview window while it is recording.

After you have enough images captured, click on the terminal window and press the following key combinations to stop the capturing process

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### Change device firmware after image collection

After you have finished recording images for the dataset, you need to make sure to change the firmware inside the SenseCAP A1101 back to original, so that you can again load object detection models for detection. Let's go through the steps now.

- **Step 1.** Enter **Boot mode** on SenseCAP A1101 as explained before

- **Step 2.** Drag and drop [this .uf2 file](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2) to **SENSECAP** drive according to your device

As soon as the uf2 finishes copying into the drive, the drive will disappear. This means the uf2 has been successfully uploaded to the module.

## 2. Generate Dataset with RoboFlow

[Roboflow](https://roboflow.com) is an annotation tool based online. Here we can directly import the video footage that we have recorded into Roboflow and it will be exported into a series of images. This tool is very convenient because it will let us help distribute the dataset into "training, validation and testing". Also this tool will allow us to add further processing to these images after labelling them. Furthermore, it can easily export the labelled dataset into **COCO format** which is what we exactly need!


- **Step 1.** Click [here](https://app.roboflow.com/login) to sign up for a Roboflow account

- **Step 2.** Click **Create New Project** to start our project

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **Step 3.** Fill in **Project Name**, keep the **License (CC BY 4.0)** and **Project type (Object Detection (Bounding Box))**  as default. Under **What will your model predict?** column, fill in an annotation group name. 
<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/2.png"/></div>

- **Step 4.** Drag and drop the images that you have captured using SenseCAP A1101

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/3.png"/></div>

- **Step 5.** After the images are processed, click **Finish Uploading**. Wait patiently until the images are uploaded.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **Step 6.** After the images are uploaded, click **Assign Images**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **Step 7.** Select an image, draw a rectangular box around digits, choose the label as **digits** and press **ENTER**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4.png"/></div>

- **Step 8.** Repeat the same for the remaining images
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/5.png"/></div>

- **Step 9.** Continue to annotate all the images in the dataset

- **Step 10.** Once labelling is done, click **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **Step 11.** Next we will split the images between "Train, Valid and Test". If there are more datasets, it can be 80/20. if datasets are less, it can be 85/15. Please note the 'Train' should not be less than 80.

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/12.png"/></div>

- **Step 12.** Click **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **Step 13.** Now you can add **Preprocessing** and **Augmentation** if you prefer. Here we will **change** the **Resize** option to **192x192**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/6.png"/></div>

Here we change the image size to 192x192 because we will use that size for training and the training will be faster. Otherwise, it will have to convert all images to 192x192 during the training process which consumes more CPU resources and makes the training process slower.

- **Step 14.** Next, proceed with the remaining defaults and click **Generate**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/7.png"/></div>

- **Step 15.** Click **Export**, select **Format** as **COCO**, select **show download code** and click **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/8.png"/></div>

This will generate a code snippet that we will use later inside Google Colab training. So please keep this window open in the background.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Train using EdgeLab on Google Colab


After we have chosen a public dataset, we need to train the dataset. Here we use a Google Colaboratory environment to perform training on the cloud. Furthermore, we use Roboflow api within Colab to easily download our dataset.

Click [here](https://colab.research.google.com/github/Seeed-Studio/EdgeLab/blob/main/notebooks/Google-Colab-YOLOv5-A1101-Example.ipynb) to open an already prepared Google Colab workspace, go through the steps mentioned in the workspace and run the code cells one by one.

**Note:** On Google Colab, in the code cell under **Step 4**, you can directly copy the code snippet from Roboflow as mentioned above

It will walkthrough the following:

- Setup an environment for training
- Download a dataset
- Perform the training
- Download the trained model

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/9.png"/></div>



## 3. Deploy the trained model and perform inference

Now we will move the **model-1.uf2** that we obtained at the end of the training into SenseCAP A1101.

- **Step 1.** Install the latest version of [Google Chrome](https://www.google.com/chrome) or [Microsoft Edge browser](https://www.microsoft.com/en-us/edge?r=1) and open it

- **Step 2.** Connect SenseCAP A1101 into your PC via a USB Type-C cable

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Step 3.** Double-click the boot button on SenseCAP A1101 to enter mass storage mode

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

After this, you will see a new storage drive shown on your file explorer as **SENSECAP**  
 

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Step 4.** Drag and drop the **model-1.uf2** file to **SENSECAP** drive

As soon as the uf2 finishes copying into the drive, the drive will disappear. This means the uf2 has been successfully uploaded to the module.

**Note:** If you have 4 model files ready, you can drag and drop each model one-by-one. Drop first model, wait until it finishes copying, enter boot mode again, drop second model and so on. If you have only loaded one model (with index 1) into SenseCAP A1101, it will load that model.

- **Step 5.** [Click here](https://vision-ai-demo.seeed.cn/) to open a preview window of the camera stream

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **Step 6.** Click **Connect** button. Then you will see a pop up on the browser. Select **SenseCAP Vision AI - Paired** and click **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **Step 7.** View real-time inference results using the preview window!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/10.png"/></div>

As you can see above, the numbers are being detected with bounding boxes around them. 



## Resources

- **[Web Page]** [EdgeLab Documentation](https://seeed-studio.github.io/EdgeLab/)

- **[Web Page]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[Web Page]** [Roboflow Documentation](https://docs.roboflow.com)

- **[Web Page]** [TensorFlow Lite Documentation](https://www.tensorflow.org/lite/guide)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI Sensor Specification](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI Sensor User Guide](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [SenseCAP S210X LoRaWAN Sensor Catalogue](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [FAQ for SenseCAP A1101 LoRaWAN Vision AI Sensor](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## Tech Support & Product Discussion

 <br />

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
