---
description: Deploy YOLOv8 on NVIDIA Jetson using TensorRT and DeepStream SDK
title: Deploy YOLOv8 on NVIDIA Jetson using TensorRT and DeepStream SDK
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /YOLOv8-DeepStream-TRT-Jetson
last_update:
  date: 03/22/2023
  author: Lakshantha
---

# Deploy YOLOv8 on NVIDIA Jetson using TensorRT and DeepStream SDK

This guide explains how to deploy a trained AI model into NVIDIA Jetson Platform and perform inference using TensorRT and DeepStream SDK. Here we use TensorRT to maximize the inference performance on the Jetson platform.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/car.gif" style={{width:1000, height:'auto'}}/></div>

## Prerequisites

- Ubuntu Host PC (native or VM using VMware Workstation Player)
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) or any other NVIDIA Jetson device running JetPack 4.6 or higher

## DeepStream Version Corresponsing to JetPack Version

For YOLOv8 to work together with DeepStream, we are using this [DeepStram-YOLO](https://github.com/marcoslucianops/DeepStream-Yolo) repository and it supports different versions of DeepStream. So make sure to use the correct version of JetPack according to the correct version of DeepStream.

<table>
  <thead>
    <tr>
      <th>DeepStream Version</th>
      <th>JetPack Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6.2</td>
      <td>5.1</td>
    </tr>
    <tr>
      <td>6.1.1</td>
      <td>5.0.2</td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>5.0.1 DP</td>
    </tr>
    <tr>
      <td rowSpan={3}>6.0.1</td>
      <td>4.6.3</td>
    </tr>
    <tr>
      <td>4.6.2</td>
    </tr>
    <tr>
      <td>4.6.1</td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>4.6</td>
    </tr>
  </tbody>
</table>

To verify this wiki, we have installed **DeepStream SDK 6.1.1** on a **JetPack 5.0.2** system running on [Jetson AGX Orin 32GB H01 Kit](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html). At the time of writing this wiki, DeepStream-YOLO only supports DeepStream SDK 6.1.1 which means you need to flash JetPack 5.0.2 on the device. However, Orin NX ([reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)) only supports JetPack 5.1 and above and if you want to test this on Orin NX, you need to emulate Orin NX on the Jetson AGX Orin Dev Kit or AGX Orin 32GB H01 Kit with JetPack 5.0.2. Refer to [this detailed guide](https://jetsonhacks.com/2022/09/27/one-jetson-orin-to-be-them-all) about emulation to learn more. 

## Flash JetPack to Jetson

Now you need to make sure that the Jetson device is flashed with a [JetPack](https://developer.nvidia.com/embedded/jetpack) system including SDK components such as CUDA, TensorRT, cuDNN and more. You can either use NVIDIA SDK Manager or command-line to flash JetPack to the device.

For Seeed Jetson-powered devices flashing guides, please refer to the below links:
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## Install DeepStream

There are multiple ways of installing DeepStream to the Jetson device. You can follow [this guide](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_Quickstart.html) to learn more. However, we recommend you to install DeepStream via the SDK Manager because it can guarantee for a successful and easy installation.

## Install Necessary Packages

- **Step 1.** Access the terminal of Jetson device, install pip and upgrade it

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **Step 2.** Clone the following repo

```sh
git clone https://github.com/ultralytics/ultralytics.git
```

- **Step 3.** Open requirements.txt

```sh
cd ultralytics
vi requirements.txt
```

- **Step 4.** Edit the following lines. Here you need to press `i` first to enter editing mode. Press `ESC`, then type `:wq` to save and quit

```sh
# torch>=1.7.0
# torchvision>=0.8.1
```

**Note:** torch and torchvision are excluded for now because they will be installed later.

- **Step 5.** Install the necessary packages

```sh
pip3 install -r requirements.txt
```

If the installer complains about outdated **python-dateutil** package, upgrade it by

```sh
pip3 install python-dateutil --upgrade
```

## Install PyTorch and Torchvision

We cannot install PyTorch and Torchvision from pip because they are not compatible to run on Jetson platform which is based on **ARM aarch64 architecture**. Therefore we need to manually install pre-built PyTorch pip wheel and compile/ install Torchvision from source.

Visit [this page](https://forums.developer.nvidia.com/t/pytorch-for-jetson) to access all the PyTorch and Torchvision links.

Here are some of the versions supported by JetPack 5.0 and above.

**PyTorch v1.11.0**

Supported by JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0) with Python 3.8

**file_name:** torch-1.11.0-cp38-cp38-linux_aarch64.whl
**URL:** https://nvidia.box.com/shared/static/ssf2v7pf5i245fk4i0q926hy4imzs2ph.whl

**PyTorch v1.12.0**

Supported by JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0) with Python 3.8

**file_name:** torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl

- **Step 1.** Install torch according to your JetPack version in the following format

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

For example, here we are running **JP5.0.2** and therefore we choose **PyTorch v1.12.0**

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl -O torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
pip3 install torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
```

- **Step 2.** Install torchvision depending on the version of PyTorch that you have installed. For example, we chose PyTorch v1.12.0, which means, we need to choose Torchvision v0.13.0

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.13.0 https://github.com/pytorch/vision torchvision
cd torchvision
python3 setup.py install --user
```

Here is a list of the corresponding torchvision version that you need to install according to the PyTorch version:

- PyTorch v1.11 - torchvision v0.12.0
- PyTorch v1.12 - torchvision v0.13.0

If you want a more detailed list, please check [this link](https://github.com/pytorch/vision/blob/main/README.rst).

## DeepStream Configuration for YOLOv8

- **Step 1.** Clone the following repo

```sh
cd ~
git clone https://github.com/marcoslucianops/DeepStream-Yolo
```

- **Step 2.** Copy **gen_wts_yoloV8.py** from **DeepStream-Yolo/utils** into **ultralytics** directory

```sh
cp DeepStream-Yolo/utils/gen_wts_yoloV8.py ultralytics
```

- **Step 3.** Inside the ultralytics repo, download **pt file** from [YOLOv8 releases](https://github.com/ultralytics/assets/releases/) (example for YOLOv8s)

```sh
wget https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt
```

**NOTE:** You can use your custom model, but it is important to keep the YOLO model reference **(yolov8_)** in your **cfg** and **weights/wts** filenames to generate the engine correctly.

- **Step 4.** Generate the cfg, wts and labels.txt (if available) files (example for YOLOv8s)

```sh
python3 gen_wts_yoloV8.py -w yolov8s.pt
```

**Note:** To change the inference size (defaut: 640)

```sh
-s SIZE
--size SIZE
-s HEIGHT WIDTH
--size HEIGHT WIDTH

Example for 1280:

-s 1280
or
-s 1280 1280
```

- **Step 5.** Copy the generated **cfg**, **wts** and **labels.txt** (if generated) files into the **DeepStream-Yolo** folder

```sh
cp yolov5s.cfg ~/DeepStream-Yolo
cp yolov5s.wts ~/DeepStream-Yolo
cp labels.txt ~/DeepStream-Yolo
```

- **Step 6.** Open the **DeepStream-Yolo** folder and compile the library

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.1.1 / 6.1
CUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.0.1 / 6.0
```

- **Step 7.** Edit the **config_infer_primary_yoloV5.txt** file according to your model (example for YOLOv8s with 80 classes)

```sh
[property]
...
custom-network-config=yolov8s.cfg
model-file=yolov8s.wts
...
num-detected-classes=80
...
```

- **Step 8.** Edit the **deepstream_app_config.txt** file

```sh
...
[primary-gie]
...
config-file=config_infer_primary_yoloV8.txt
```

- **Step 9.** Change the video source in **deepstream_app_config.txt** file. Here a default video file is loaded as you can see below

```sh
...
[source0]
...
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
```

## Run the Inference

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-1.gif" style={{width:1000, height:'auto'}}/></div>

The above result is running on Jetson AGX Orin 32GB H01 Kit with FP32 and YOLOv8s 640x640. We can see that the FPS is around 60 and that is not the true FPS because when we set **type=2** under **[sink0]** in **deepstream_app_config.txt** file, the FPS is limited to the fps of the monitor and the monitor we used for this testing is a 60Hz monitor. However, if you change this value to **type=1**, you will be able to obtain the maximum FPS, but there will be no live detection output.

For the same video source and the same model as used above, after changing **type=2** under **[sink0]**, the below result can be obtained.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-no-screen.gif" style={{width:1000, height:'auto'}}/></div>

As you can see, we can get an fps of about 139 which relates to the real fps value.

## INT8 Calibration 

If you want to use INT8 precision for inference, you need to follow the steps below

- **Step 1.** Install OpenCV

```sh
sudo apt-get install libopencv-dev
```

- **Step 2.** Compile/recompile the **nvdsinfer_custom_impl_Yolo** library with OpenCV support

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.1.1 / 6.1
CUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.0.1 / 6.0
```

- **Step 3.** For COCO dataset, download the [val2017](https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing), extract, and move to **DeepStream-Yolo** folder

- **Step 4.** Make a new directory for calibration images

```sh
mkdir calibration
```

- **Step 5.** Run the following to select 1000 random images from COCO dataset to run calibration

```sh
for jpg in $(ls -1 val2017/*.jpg | sort -R | head -1000); do \
    cp ${jpg} calibration/; \
done
```

**Note:** NVIDIA recommends at least 500 images to get a good accuracy. On this example, 1000 images are chosen to get better accuracy (more images = more accuracy). Higher INT8_CALIB_BATCH_SIZE values will result in more accuracy and faster calibration speed. Set it according to you GPU memory. You can set it from head -1000. For example, for 2000 images, head -2000. This process can take a long time.

- **Step 6.** Create the **calibration.txt** file with all selected images

```sh
realpath calibration/*jpg > calibration.txt
```

- **Step 7.** Set environment variables

```sh
export INT8_CALIB_IMG_PATH=calibration.txt
export INT8_CALIB_BATCH_SIZE=1
```

- **Step 8.** Update the **config_infer_primary_yoloV8.txt** file

From 

```sh
...
model-engine-file=model_b1_gpu0_fp32.engine
#int8-calib-file=calib.table
...
network-mode=0
...
```

To 

```sh
...
model-engine-file=model_b1_gpu0_int8.engine
int8-calib-file=calib.table
...
network-mode=1
...
```

- **Step 9.** Before running the inference, set **type=2** under **[sink0]** in **deepstream_app_config.txt** file as mentioned before to obtain the max fps performance.

- **Step 10.** Run the inference

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/2.png" style={{width:1000, height:'auto'}}/></div>

Here we get an FPS value of about 350!

## trtexec Tool

Included in the samples directory is a command-line wrapper tool called [trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec). trtexec is a tool to use TensorRT without having to develop your own application. The trtexec tool has three main purposes:

- Benchmarking networks on random or user-provided input data.
- Generating serialized engines from models.
- Generating a serialized timing cache from the builder.

Here we can use trtexec tool to quickly benchmark the models with different parameter. But first of all, you need to have an onnx model and we can genrate this onnx model by using ultralytics yolov8.

- **Step 1.** Build ONNX using:

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **Step 1.** Build engine file using trtexec as follows:

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

For example:

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

This will output performance results as follows along with a generated **.engine** file. By default it will convert ONNX to an TensorRT optimized file in **FP32** precision and you can see the output as follows

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/3.png" style={{width:1000, height:'auto'}}/></div>

Here we can take the mean latency as 7.2ms which translates to 139FPS. This is the same performance we got in the previous DeepStream demo.

However, if you want **INT8** precision which offers better performance, you can execute the above command as follows

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine 
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/4.jpg" style={{width:1000, height:'auto'}}/></div>

Here we can take the mean latency as 2.9ms which translates to 350FPS. This is the same performance we got in the previous DeepStream demo.

## Benchmark Results

These are some of the performance benchmark results based on our testing on the [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

<table style={{tableLayout: 'fixed', width: 812}}>
  <colgroup>
    <col style={{width: '195.085714px'}} />
    <col style={{width: '168.085714px'}} />
    <col style={{width: '195.085714px'}} />
    <col style={{width: '183.085714px'}} />
    <col style={{width: '71.085714px'}} />
  </colgroup>
  <thead>
    <tr>
      <th>Model Name	</th>
      <th>Precision</th>
      <th>Inference Size	</th>
      <th>Inference Time (ms)	</th>
      <th>FPS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>YOLOv8n</td>
      <td>with PyTorch</td>
      <td rowSpan={4}>640x640	</td>
      <td>18</td>
      <td>56</td>
    </tr>
    <tr>
      <td>FP32</td>
      <td>8.7</td>
      <td>115</td>
    </tr>
    <tr>
      <td>FP16	</td>
      <td>4.9</td>
      <td>204</td>
    </tr>
    <tr>
      <td>INT8</td>
      <td>3.9</td>
      <td>256</td>
    </tr>
    <tr>
      <td rowSpan={4}>YOLOv8s	</td>
      <td>with PyTorch</td>
      <td rowSpan={4}>640x640	</td>
      <td>19</td>
      <td>53</td>
    </tr>
    <tr>
      <td>FP32</td>
      <td>14.9</td>
      <td>67</td>
    </tr>
    <tr>
      <td>FP16	</td>
      <td>7.8</td>
      <td>128</td>
    </tr>
    <tr>
      <td>INT8</td>
      <td>5.1</td>
      <td>196</td>
    </tr>
    <tr>
      <td rowSpan={4}>YOLOv8m	</td>
      <td>with PyTorch</td>
      <td rowSpan={4}>640x640	</td>
      <td>38</td>
      <td>26</td>
    </tr>
    <tr>
      <td>FP32</td>
      <td>32.5</td>
      <td>31</td>
    </tr>
    <tr>
      <td>FP16	</td>
      <td>15.8</td>
      <td>63</td>
    </tr>
    <tr>
      <td>INT8</td>
      <td>10.8</td>
      <td>93</td>
    </tr>
    <tr>
      <td rowSpan={4}>YOLOv8l	</td>
      <td>with PyTorch</td>
      <td rowSpan={4}>640x640	</td>
      <td>62</td>
      <td>16</td>
    </tr>
    <tr>
      <td>FP32</td>
      <td>49</td>
      <td>20</td>
    </tr>
    <tr>
      <td>FP16	</td>
      <td>24</td>
      <td>42</td>
    </tr>
    <tr>
      <td>INT8</td>
      <td>14.4</td>
      <td>69</td>
    </tr>
    <tr>
      <td rowSpan={4}>YOLOv8x	</td>
      <td>with PyTorch</td>
      <td rowSpan={4}>640x640	</td>
      <td>99</td>
      <td>10</td>
    </tr>
    <tr>
      <td>FP32</td>
      <td>79.5</td>
      <td>13</td>
    </tr>
    <tr>
      <td>FP16	</td>
      <td>37.9</td>
      <td>26</td>
    </tr>
    <tr>
      <td>INT8</td>
      <td>21.9</td>
      <td>46</td>
    </tr>
  </tbody>
</table>

## Resources

- [YOLOv8 documentation](https://docs.ultralytics.com)
- [TensorRT documentation](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)
- [DeepStream SDK documentation](https://docs.nvidia.com/metropolis/deepstream/dev-guide)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>