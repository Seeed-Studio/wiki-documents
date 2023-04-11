---
description: Security Xray Scan Knife Detection
title: Security Xray Scan Knife Detection
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Security_Scan
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Knife Detection: An Object Detection Model deployed on Triton Inference Sever based on reComputer

<iframe width={560} height={315} src="https://www.youtube.com/embed/niS0TLzyn-s" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

Security check is a safety alarm for the consideration of passengers and the transportation sectors, keeping danger away, usually applying in the airports, railway stations, subway stations, etc. In the existing security inspection field, security inspection machines are deployed on the inbound passages of public transportation. In general, it requires multiple devices to work at the same time.

Nevertheless, the detection performance of prohibited items in X-ray images is still not ideal due to the overlapping of detected objects during the security inspection. For this matter, based on the de-occlusion module in the Triton Interface Sever, deploying a prohibited item detection algorithm in the Xray images can perform a better way.

Hence, credit to [Yanlu Wei, Renshuai Tao et al.](https://arxiv.org/abs/2004.08656), we provide this fundamental project that we are going to deploy a Deep Learning model on [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) that could detect prohibited items (knives) with the Raspberry Pi and the reComputer J1010 where we use one reComputer J1010 as our inference server and two Raspberry Pi to simulate security inspection machines as sending images. The [reComputer 1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html), [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html), [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) and [Nvidia Jetson AGX Xavier](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html) are all supported.

## Getting Started

[Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server) provides a cloud and edge inferencing solution, optimized for both CPUs and GPUs. Triton supports an HTTP/REST and GRPC protocol that allows remote clients to request inferencing for any model being managed by the server. Here we are going to use Triton (Triton Inference Server) as our local server which will be deployed detection model.

### Hardware

#### Hardware Required

In this project the required devices are shown as below:

- [Raspberry Pi 4B](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)*2
- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)
- HDMI-display screen, mouse and keyboard
- PC

#### Hardware Setup

Two Raspberry Pi and reComputer should be powered on and all of them should be under the **same internet**. In this project, we use two Raspberry pi to simulate security machine's work since the security inspection machines are used by multiple devices in most instances. Hence, both

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_23.png" /></div>

Just one Raspberry Pi could be also applied to this project. However, simultaneous knife detection on two devices demonstration could offer better dynamic batching capabilities of the Triton Inference Server. In the next instruction, we will introduce you how to set up the software on Raspberry Pi and reComputer J1010.

### Software

We here use [Xray images dataset](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view) as our **input data** which will be placed on the **Raspberry Pi**.  After that, reComputer will output the processed inference results to the Raspberry Pi. In the end, the Raspberry Pi will complete the final work and display on the screen, i.e., the last layer of inference model will be deployed on the Raspberry Pi.

#### Set up Raspberry Pi

We here will show you how to set up required softwares on Raspberry Pi, including

**Step 1.**  Install the Raspbian Buster system and basic configuration from the [official website](https://www.raspberrypi.com/documentation/computers/getting-started.html#using-network-installation). In this project, we use RASPBERRY PI OS(64 bit) as our operated system.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_1.png" /></div>

**Step 2.** Configure the Raspberry Pi SSH port (optional).

Before deploying the environment, we can open the Raspberry Pi SSH port and call it remotely using the [SSH interface](https://wiki.seeedstudio.com/remote_connect/) on the PC.

> Notice: make sure the PC and Raspberry Pi are under the same LAN.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png" /></div>

**Step 3.** Configure the Python environment.

We need to deploy the required environments for the inference model as **Python, PyTorch, Tritonclient, and TorchVision**. and image display as **OpenCV** on the Raspberry Pi. We provide the instructions below:

**Python**

We can execute `python –V` and ensure the Python version is 3.9.2. We need to install PyTorch, Torchclient and TorchVision that the versions we need are corresponding to the Python version 3.9.2. You can refer to [here](https://www.python.org/downloads/) to download and install.

**PyTorch**

If the Python version is correct. We can now install Pytorch.

>Notice: Before we install Pytorch, we have to check out Raspbian version.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_10.png" /></div>

Execute the command below to install Pytorch:

```python
# get a fresh start
sudo apt-get update
sudo apt-get upgrade

# install the dependencies
sudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev

# above 58.3.0 you get version issues
sudo -H pip3 install setuptools==58.3.0
sudo -H pip3 install Cython

# install gdown to download from Google drive
sudo -H pip3 install gdown

# Buster OS
# download the wheel
gdown https://drive.google.com/uc?id=1gAxP9q94pMeHQ1XOvLHqjEcmgyxjlY_R
# install PyTorch 1.11.0
sudo -H pip3 install torch-1.11.0a0+gitbc2c6ed-cp39-cp39-linux_aarch64.whl
# clean up
rm torch-1.11.0a0+gitbc2c6ed-cp39-cp39m-linux_aarch64.whl
```

After a successful installation, we can check PyTorch with the following commands **after initiating** `python`:

```python
import torch as tr
print(tr.__version__)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_11.png" /></div>

>Notice: PyTorch wheels for Raspberry Pi 4 can be find in <https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS>

**Tritonclient**

We can execute `pip3 install tritonclient[all]` to download Tritonclient.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_9.png" /></div>

**TorchVision**

After Pytorch was installed, we can move to the Torchvision installation. Here are the commands:

```python
# download the wheel
gdown https://drive.google.com/uc?id=1oDsJEHoVNEXe53S9f1zEzx9UZCFWbExh
# install torchvision 0.12.0
sudo -H pip3 install torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
# clean up
rm torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_12.png" /></div>

**OpenCV**

We can directly execute `pip3 install opencv-python` to install OpenCV:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_13.png" /></div>

### Set up reComputer J1010

In this project, we will deploy Triton Inference Server to the reComputer J1010. In order to enhance the interactivity and deployment convenience of the trained model, we will convert the model into **ONXX format**.

**Step 1.** [Install](https://wiki.seeedstudio.com/install_NVIDIA_software_to_Jetson-10-1-A0/) Jetpack 4.6.1 into reComputer J1010.

**Step 2.** Create a new folder “opi/1” in “home/server/docs/examples/model_repository ”. and then download trained and converted [model.onnx](https://drive.google.com/file/d/1RcHK_gthCXHsJLeDOUQ6c3r0RlAUgRfV/view?usp=sharing) and put it into the “1” folder.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_15.jpg" /></div>

>If you need another general server, you can execute the following steps.

Open a new Terminal and execute

```python
git clone https://github.com/triton-inference-server/server
cd ~/server/docs/examples
sh fetch_models.sh
```

**Step 3.** Install the release of Triton for JetPack 4.6.1 and is provided in the attached tar file: [tritonserver2.21.0-jetpack5.0.tgz](https://github.com/triton-inference-server/server/releases/download/v2.19.0/tritonserver2.19.0-jetpack4.6.1.tgz).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_16.png" /></div>

The tar file here contains the Triton server executable and shared libraries including the C++ and Python client libraries and examples. For more information about how to install and use Triton on JetPack you can refer to [here](https://github.com/triton-inference-server/server/blob/r22.04/docs/jetson.md).

**Step 4.** Execute the following command:

```python

mkdir ~/TritonServer && tar -xzvf tritonserver2.19.0-jetpack4.6.1.tgz -C ~/TritonServer
cd ~/TritonServer/bin
./tritonserver --model-repository=/home/seeed/server/docs/examples/model_repository --backend-directory=/home/seeed/TritonServer/backends --strict-model-config=false --min-supported-compute-capability=5.3
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_17.png" /></div>

Now, we have set up all the preparations.

## Operating the Program

Since all the required environments are deployed, we can run our project according to following steps.

**Step 1.** Download model and related files.

1. Clone module from GitHub.

Open a new Terminal and execute:.

```python
git clone https://github.com/LemonCANDY42/Seeed_SMG_AIOT.git
cd Seeed_SMG_AIOT/
git clone https://github.com/LemonCANDY42/OPIXray.git
```

2. Create a new folder “weights” to store the trained weight of this algorithm “DOAM.pth”. Download the [weight file](https://files.seeedstudio.com/wiki/SecurityCheck/DOAM.pth.zip) and execute:

- `cd OPIXray/DOAM`
- `mkdir weights`

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_19.png" /></div>

3. Create a new “Dataset” folder to store the [Xray images dataset](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view?usp=sharing).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_20.png" /></div>

**Step 2.** Running inference model.

Execute `python OPIXray_grpc_image_client.py -u 192.168.8.230:8001 -m opi Dataset`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_21.png" /></div>

The result will be shown as the figure below:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg" /></div>

## Troubleshooting

> When you luanch Triton server, you may meet following errors:

>1. if error with libb64.so.0d, execute:
`sudo apt-get install libb64-0d`

>2. if error with error with libre2.so.2, execute:
`sudo apt-get install libre2-dev`

>3. if error: creating server: Internal - failed to load all models, execute:
`--exit-on-error=false`

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
