---
name: Coral-Mini-PCIe-Accelerator-x86
category: Platform
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 114992124
tags:
---

# Coral-Mini-PCIe-Accelerator- x86




![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)


Coral-Mini-PCIe-Accelerator-x86 is an M.2 module that brings the Edge TPU coprocessor to existing systems and products.

The Edge TPU is a small ASIC designed by Google that provides high performance ML inferencing with low power requirements: it's capable of performing 4 trillion operations (tera-operations) per second (TOPS), using 0.5 watts for each TOPS (2 TOPS per watt). For example, it can execute state-of-the-art mobile vision models such as MobileNet v2 at almost 400 FPS, in a power efficient manner. This on-device processing reduces latency, increases data privacy, and removes the need for constant high-bandwidth connectivity.

The M.2 Accelerator is a dual-key M.2 card (either A+E or B+M keys), designed to fit any compatible M.2 slot. This form-factor enables easy integration into ARM and x86 platforms so you can add local ML acceleration to products such as embedded platforms, mini-PCs, and industrial gateways.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)

## Features
* Performs high-speed ML inferencing
* Works with Debian Linux
* Supports TensorFlow Lite
* Supports [AutoML Vision Edge](https://cloud.google.com/vision/automl/docs/edge-quickstart)

## Specification

|Physical specifications  | Value  |
|------|--------------|
|Dimensions|	B+M key: 22.00 x 80.00 x 2.35 mm  |
|Weight| B+M key: 5.8 g|
|Host interface|
|Hardware interface| M.2 B+M key (M.2-2280-B-M-S3)| 
|Serial interface| PCIe Gen2 x1|
|Operating voltage|  |
|DC supply| 	3.3V +/- 10 %|
|Environmental reliability| |
|Temperature| -40 ~ 85°C(storage)     -20 ~ 70° C (operating)
|Relative humidity| 	0 ~ 100% (non-condensing)|
|Mechanical reliability| |
|Op-shock| 100 G, 11ms (persistent)1000 G, 0.5 ms (stress)1000 G, 1.0 ms (stress) |
|Op-vibe (random)| 0.5 Grms, 5 - 500 Hz (persistent)3 Grms, 5 - 800 Hz (stress)| 
|Op-vibe (sinusoidal)|0.5 Grms, 5 - 500 Hz (persistent)3 Grms, 5 - 800 Hz (stress)|


##  Hardware Overview
![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/hardware.jpg)




## Getting Started
### play with ODYSSEY - X86J4105

**Materials required**


| Coral-Mini-PCIe-Accelerator-x86 | ODYSSEY - X86J4105 |
|--------------|-------------|
|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/PC.png)|
|[Get ONE Now](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)|[Get ONE Now](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html)|


#### Hardware Connection

To get started with Coral-Mini-PCIe-Accelerator-x86, all you need to do is connect the card to your system, and then install our PCIe driver, Edge TPU runtime, and the TensorFlow Lite runtime. Here tell you  through the setup and shows you how to run an example model.

The setup and operation is the same for both form-factors.

- **Step 1.** Connecting Coral-Mini-PCIe-Accelerator-x86 to the ODYSSEY - X86J4105.
- **Step 2.** Connecting the Power to the ODYSSEY - X86J4105.
- **Step 3.** Connecting the Power and display to the ODYSSEY - X86J4105.
- **Step 4.**  Connecting the Keyboard and mouse to the ODYSSEY - X86J4105.
- **Step 5.** If you have a network cable, please connect it to you ODYSSEY - X86J4105.



## Software

To get started, you need a Linux computer with the following specs:

* System architecture of either x86-64, ARMv7 (32-bit), or ARMv8 (64-bit) 

   Please refer to how to [create a bootable USB drive and install Linux OS(Ubuntu Desktop 18.04)](https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-OS/) onto the ODYSSEY - X86J4105.

* An available Coral-Mini-PCIe-Accelerator-x86

* Debian 6.0 Linux distribution or higher, or any derivative thereof (such as Ubuntu 10.0+)

* Python 3.5 or higher

When you have finished create a bootable USB drive and install Linux OS ,you can go next step .

## 1.Install the PCIe driver

Before you install our driver, you first need to check whether you have a pre-built Apex driver installed. Some versions of the driver have a bug that prevents updates and will result in failure when calling upon the Edge TPU. So first follow these steps:

   1.Check your Linux kernel version with this command:

   `uname -r `

   If it prints 4.18 or lower, you should be okay and can skip to begin installing our PCIe driver.

   2.If your kernel version is 4.19 or higher, now check if you have a pre-build Apex driver installed:
 
   `lsmod | grep apex`
    
   If it prints nothing, then you're okay and continue to install our PCIe driver.

   If it does print an Apex module name, stop here and follow the [workaround to disable Apex and Gasket](https://coral.ai/docs/m2/get-started/#workaround-to-disable-apex-and-gasket). 

Install our PCIe driver as follows:

1. Make sure the host system where you'll connect the module is shut down.

2. Connect the Coral PCIe/M.2 module according to your host system recommendations.

3. Boot the system and make sure it has an internet connection. Then add our Debian package repository to your system and install our PCIe driver with these commands:

```
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt update

sudo apt-get install gasket-dkms
```

4.  If the user account you'll be using does not have root permissions, you might need to add the following udev rule, and then verify that the "apex" group exists and that your user is added to it:

```
   sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

   sudo groupadd apex

   sudo adduser $USER apex
```

5.   Reboot the system.

6.   Verify that the accelerator module is detected:

    `lspci -x | grep 089a`

   You should see something like this:

    `03:00.0 System peripheral: Device 1ac1:089a`

   The 03 number and System peripheral name might be different, because those are host-system specific, but as long as you see a device listed with 089a then you're okay to proceed.

7. Verify that the PCIe driver is loaded:

   `ls /dev/apex_0`

   You should simply see the name repeated back:

   `/dev/apex_0`



## 2. Install the Edge TPU runtime

The Edge TPU runtime is required to communicate with the Edge TPU. You can install it on your host computer from a command line as follows:

`sudo apt-get install libedgetpu1-std`

Notes
> Unlike the [USB Accelerator](https://coral.ai/products/accelerator/), the Mini PCIe and M.2 Accelerator do not use different runtime packages for "reduced" and "maximum" clock frequencies. Instead, these devices operate at the maximum frequency by default and perform  [power throttling based on thermal limits](https://coral.ai/docs/m2/get-started/#operating-frequency-and-thermal-settings).



## 3. Install the TensorFlow Lite library

There are several ways you can install TensorFlow's APIs, but to get started with Python, the easiest option is to install the tflite_runtime package. This package provides the bare minimum code required to run an inference with Python (primarily, the [Interpreter](https://www.tensorflow.org/api_docs/python/tf/lite/Interpreter) API), thus saving you a lot of disk space.

To install it, follow the [TensorFlow Lite Python quickstart](https://www.tensorflow.org/lite/guide/python), and then return to this page after you run the pip3 install command.

## 4. Run a model using the TensorFlow Lite API

Now you're ready to run an inference on the Edge TPU. Follow these steps to perform image classification with our example code and model:

   1. Download the example code from GitHub:
   
```
   mkdir coral && cd coral

   git clone https://github.com/google-coral/tflite.git
```

   2. Download the bird classifier model, labels file, and a bird photo:

```
cd tflite/python/examples/classification

bash install_requirements.sh
```
   3. Run the image classifier with the bird photo (shown in figure 1):

```
python3 classify_image.py \
--model models/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \
--labels models/inat_bird_labels.txt \
--input images/parrot.jpg
```

![](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/parrot.jpg)


You should see results like this:

```
INFO: Initialized TensorFlow Lite runtime.
----INFERENCE TIME----
Note: The first inference on Edge TPU is slow because it includes loading the model into Edge TPU memory.
11.8ms
3.0ms
2.8ms
2.9ms
2.9ms
-------RESULTS--------
Ara macao (Scarlet Macaw): 0.76562
```
Congrats! You just performed an inference on the Edge TPU using TensorFlow Lite.

To demonstrate varying inference speeds, the example repeats the same inference five times. It prints the time to perform each inference and the top classification (the label ID/name and the confidence score, from 0 to 1.0). Your inference speeds might differ based on your host system.

The classify_image.py example above uses the TensorFlow Lite Python API. To learn more about how it works, take a look at [the classify_image.py source code](https://github.com/google-coral/tflite/blob/master/python/examples/classification/classify_image.py) and read about how to [run inference with TensorFlow Lite](https://www.tensorflow.org/lite/guide/inference#load_and_run_a_model_in_python).

As an alternative to using the TensorFlow Lite API (used above), you can use the [Edge TPU Python API](https://coral.ai/docs/edgetpu/api-intro/), which provides high-level APIs to perform inference with image classification and object detection models with just a few lines of code. For an example, try our other version of [classify_image.py using the Edge TPU API](https://coral.ai/examples/classify-image/).

You can also [run inference using C++ and TensorFlow Lite](https://coral.ai/docs/edgetpu/tflite-cpp/).

## Next steps

To run some other types of neural networks, check out [example projects](https://coral.ai/examples/), including examples that perform real-time object detection, pose estimation, keyphrase detection, on-device transfer learning, and more.

If you want to create your own model, try these tutorials:

* [Retrain an image classification model using post-training quantization](https://colab.sandbox.google.com/github/google-coral/tutorials/blob/master/retrain_classification_ptq_tf1.ipynb) (runs in Google Colab)

* [Retrain an image classification model using quantization-aware training](https://coral.ai/docs/edgetpu/retrain-classification/) (runs in Docker)

* [Retrain an object detection model using quantization-aware training](https://coral.ai/docs/edgetpu/retrain-detection/) (runs in Docker)

Or to create your own model that's compatible with the Edge TPU, read [TensorFlow Models on the Edge TPU](https://coral.ai/docs/edgetpu/models-intro/).

Resources
--------

- [Datasheet](https://github.com/SeeedDocument/Bazaar_Document/raw/master/Coral-M2-datasheet.pdf)
- [Coral Ai user manual](https://coral.ai/docs/mini-pcie/datasheet/#)


## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>