---
description: Deci Platform
title: Deci Platform
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /DeciAI-Getting-Started
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

<!-- ---
name: DeciAI Getting Started
category: Software
bzurl: 
wikiurl: 
sku: 
--- -->

# Getting Started with Deci on NVIDIA® Jetson Devices

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

Deci platform enables you to manage, optimize, deploy and serve models in your production environment with ease. You can continue using popular DL frameworks, such as TensorFlow, PyTorch, Keras and ONNX. All you need is Deci web-based platform or Deci Python client in order to run it from your code.

Deci provides:

- Performance Acceleration – Accelerate model inference performance by 2x – 10x on any hardware, without compromising accuracy, by using Deci’s Automated Neural Architecture Construction (AutoNAC) technology.
- Scaling on Any Hardware – Cut up to 80% of cloud computation costs and BOM to enable inference at scale, regardless of whether it’s from a private or public cloud, from your own server or from any computer, edge or mobile device.
- Inference Benchmarking – Benchmark your models across any target hardware environment and batch size to find your model’s optimal Throughput, Latency, Memory Usage and Cloud Costs.
- Model Packaging – Quickly and Easily Deploy to Production – Seamlessly deploy trained models from the Deci Lab to any production environment, including all environmental library dependencies in a single encapsulated container.
- Model Serving – Deci’s proprietary deep-learning run-time inference engine can be deployed on your own machine (on any hardware – on-prem / edge / cloud). Deci provides the following options for deploying your Deci Optimized Model as a siloed efficient run-time server:

  - Deci’s Runtime Inference Container (RTiC), which is containerized machine learning runtime engine.
  - Deci’s INFERY (from the word inference) that enables you to run a model from a Python package.

## Hardware supported

Deci is supported by the following Jetson-related hardware:

- Kits by Seeed:

  - reComputer J1010 built with Jetson Nano
  - reComputer J1020 built with Jetson Nano
  - reComputer J2011 built with Jetson Xavier NX 8GB
  - reComputer J2012 built with Jetson Xavier NX 16GB

- Carrier Boards by Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

- Official Development Kits by NVIDIA:

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- Official SoMs by NVIDIA:
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

If you own any of the above hardware, you can proceed to working with deci on your hardware.

## Hardware prerequisites

Prepare the following hardware:

- Any of the above Jetson Devices running JetPack 4.6
- Monitor, keyboard, mouse (optional)

## Sign Up for Deci Account

- **Step 1.** Visit [this page](https://console.deci.ai/sign-up) to sign up for a Deci account

- **Step 2.** Enter the required details and finish the sign up process

You will now be presented with Deci Lab platform

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/2.png" alt="pir" width={1000} height="auto" /></p>

## Deci Lab model zoo with pre-optimized models

By default, Deci Lab includes **ResNet50 Baseline** model which is already loaded into the interface with a couple of optimizations for different hardware. That's not all. Deci offers a massive collection of base models with the correponding optimized versions of the models for different hardware in Deci Model Zoo. Click **Model Zoo** and **List** to view all the available models.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/3.png" alt="pir" width={1000} height="auto" /></p>

As an example, we will search for **YOLOX** in the search bar to view all the YOLOX models.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/4.png" alt="pir" width={1000} height="auto" /></p>

As you can see, there are base models such as **YOLOX_Nano**, **YOLOX_Small** and optimized models such as **YOLOX_Nano Jetson Nano Optimized**, **YOLOX_Nano Jetson Xavier Optimized**

## Optimize your own model

As explained above, you can use pre-optimized models directly without needing to manually optimize them. However, if you want to use your own model, you can upload your model to Deci Lab and optimize it according to your target hardware

**Step 1:** On Deci Lab, click **+ New Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/5.png" alt="pir" width={1000} height="auto" /></p>

**Step 2:** Choose an appropriate task according to your model. Here we have chosen **Object Detection**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/6.png" alt="pir" width={500} height="auto" /></p>

**Step 3:** Enter a name for the model and click **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/7.png" alt="pir" width={500} height="auto" /></p>

**Step 4:** Choose a model framework (ONNX in this case), upload a model according to the chosen framework and click **Next**. Here we have uploaded [yolov6n.onnx model](https://github.com/meituan/YOLOv6/releases/tag/0.1.0).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/8.png" alt="pir" width={500} height="auto" /></p>

**Step 5:** Select **Primary hardware**, **Inference batch size**, **Quantization level** and click **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/9.png" alt="pir" width={500} height="auto" /></p>

**Step 6:** Add performance goals and constraints. This will be mainly useful if you use **AutoNAC** which is a feature included in **premium version**. AutoNAC can dramatically increase model inference performance while decreasing model size and much more. If you are not using AutoNAC, you need to fill a value for **Throughput** and here we have set it as 40 (it can be a random value). Finally click **start** to begin the optimization process.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/10.png" alt="pir" width={500} height="auto" /></p>

Now the optimization process will show it's progress as follows and will be done after a few minutes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/11.png" alt="pir" width={1000} height="auto" /></p>

## Compare model performance

We can either use the Deci Lab platform to compare the model performance between the base models and the optimized models, or else deploy the model onto the target hardware and run benchmarks. Eventhough it is easier to visualize everything on Deci Lab, it is recommended to deploy the model and run benchmark on the target device to make sure the performance metrics are accurate for the specific hardware.

### Visualize on Deci Lab

Here we will use the **YOLOX_Nano** base model and **YOLOX_Nano Jetson Xavier NX Optimized** models to compare.

**Step 1:** Navigate to Model Zoo and click **clone** next to **YOLOX_Nano** base model and **YOLOX_Nano Jetson Xavier NX Optimized** models

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/12.png" alt="pir" width={1000} height="auto" /></p>

**Step 2:** On Deci Lab, click on the **YOLOX_Nano** model under **MODEL_VERSIONS** to go to **model insights** section.

**Step 3:** Select **Jetson Xavier** as **Target Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/13.png" alt="pir" width={1000} height="auto" /></p>

Now you will see all the performance metrics for the **YOLOX_Nano** model, if it is to be deployed into a Jetson Xavier NX device.

**Step 4:** Go back to homepage of Deci Lab, click on the **YOLOX_Nano Jetson Xavier NX Optimized** model under **MODEL_VERSIONS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/14.png" alt="pir" width={1000} height="auto" /></p>

Now you will see all the performance metrics for the **YOLOX_Nano Jetson Xavier NX Optimized** model, if it is to be deployed into a Jetson Xavier NX device.

#### Performance comparison

We can compare the results we obtained previously for the Jetson Xavier target hardware using the table below

|                      | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimized |
|----------------------|------------|---------------------------------------|
| Accuracy             | 25.8       | 25.8                                  |
| Throughput           | 62.8fps    | 175.8fps                              |
| Latency              | 15.9361ms  | 5.6897ms                              |
| GPU memory footprint | 1.05MB     | 1.01MB                                |
| Model size           | 3.66MB     | 9.74MB                                |

As you you can see the main performance increase is the throughput where the optimized model is nearly **2.7 times faster** than the base model.

### Deploy on Jetson device and benchmark

We will now deploy the above two models onto a Jetson Xavier NX device and perform benchmark to make sure we get accurate performance results.

#### Install INFERY

- **Step 1.** Open a terminal window on the Jetson device and update the packages list

```sh
sudo apt update 
```

- **Step 2.** Install pip package manager

```sh
sudo apt install python3-pip
```

- **Step 3.** Update pip to the latest version

```sh
python3 -m pip install -U pip
```

- **Step 4.** Install INFERY for Jetson

```sh
sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl
```

#### Load the model

- **Step 1.** On Deci Lab, hover your mouse over the model name and click **Deploy** from the pop-up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/15.png" alt="pir" width={1000} height="auto" /></p>

- **Step 2.** Click **Download model** to download the model to the PC and then copy this model file to home directory of the Jetson device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/16.png" alt="pir" width={500} height="auto" /></p>

- **Step 3.** Open a terminal window on the Jetson device and execute

```sh
lakshanthad@nano:~$ python3
Python 3.6.9 (default, Dec  8 2021, 21:08:43)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import infery, numpy as np
```

- **Step 4.** Copy the 2nd command under **LOAD MODEL** on the Deci lab **Deploy Model** window onto the terminal window of Jetson device (Make sure Jetson is selected for target hardware)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/17.png" alt="pir" width={500} height="auto" /></p>

```
ex: model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')
```

**Note:** Make sure to adjust the **model_path** parameter according to where you copied the model before. If you copied the model file to home directory, you can keep the path as it is.

You will see the following output, if the model is loaded successfully

```sh
infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU
infery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.
```

#### Measure performance of a model

To measure a model’s performance using INFERY, run the **model.benchmark** command from your application

```sh
model.benchmark(batch_size=1)
```

The following will be the output for the **YOLOX_Nano** model

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "13.63 ms",
    "batch_inf_time_variance": "1.12 ms",
    "memory": "3537.89 mb",
    "pre_inference_memory_used": "3532.94 mb",
    "post_inference_memory_used": "3537.89 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "73.36 fps",
    "sample_inf_time": "13.63 ms",
    "include_io": true,
    "framework_type": "onnx",
    "framework_version": "1.8.0",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:23:57__07-06-2022",
    "ctime": 1657112037,
    "h_to_d_mean": null,
    "d_to_h_mean": null,
    "h_to_d_variance": null,
    "d_to_h_variance": null
}>
```

where:

- 'batch_size' – Specifies batch size that was used for benchmark.
- 'batch_inf_time' – Specifies the latency for the entire batch.
- 'sample_inf_time' – Specifies the latency for a single sample within the batch. equivalent to batch_inf_time divided by the batch_size.
- 'memory' – Specifies the memory footprint that the model utilizes while inferencing.
- 'throughput' – Specifies the number of requests that are processed (forward passes) per second.
- 'batch_inf_time_variance' – Specifies the variance of the batch inference times during benchmark. If the variance is high, we recommend increasing the number passed to 'repetitions' to make the benchmarks more reliable.

Repeat the same steps for **YOLOX_Nano Jetson Xavier NX Optimized model**, perform the benchmark and you wil see the results as follows:

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "5.28 ms",
    "batch_inf_time_variance": "0.05 ms",
    "memory": "2555.62 mb",
    "pre_inference_memory_used": "2559.38 mb",
    "post_inference_memory_used": "2555.62 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "189.25 fps",
    "sample_inf_time": "5.28 ms",
    "include_io": true,
    "framework_type": "trt",
    "framework_version": "8.0.1.6",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:30:05__07-06-2022",
    "ctime": 1657112405,
    "h_to_d_mean": "0.43 ms",
    "d_to_h_mean": "0.20 ms",
    "h_to_d_variance": "0.00 ms",
    "d_to_h_variance": "0.00 ms"
}>
```

#### Performance comparison

We can mainly compare the throughput for these results

|            | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimized |
|------------|------------|---------------------------------------|
| Throughput | 73.36fps   | 189.25fps                             |

It can be seen that the optimized model is nearly **2.57 times faster** than the base model.

## Resources

- **[Web Page]** [Deci AI Documentation](https://docs.deci.ai/docs)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
