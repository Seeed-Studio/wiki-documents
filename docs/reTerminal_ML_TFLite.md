---
name: reTerminal
category: reTerminal
bzurl: 
wikiurl: 
sku: 
---

# Getting Started with TensorFlow Lite on reTerminal

<p align="center">
  <img alt="Light" src="https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-lite-logo-social.png" width="45%">
&nbsp; &nbsp; 
  <img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%">
</p>

TensorFlow Lite is a set of tools that enables on-device machine learning by helping developers run their models on mobile, embedded, and IoT devices. 
The key features of TensorFlow Lite are optimized for on-device machine learning, with a focus on latency, privacy, connectivity, size, and power consumption. The framework is built to provide support for multiple platforms, including Android and iOS devices, embedded Linux, and microcontrollers. It also has built-in support for a variety of languages, such as Java, Swift, Objective-C, C++, and Python, and it has high performance with hardware acceleration and model optimization. It provides end-to-end examples for common machine learning tasks, such as image classification, object detection, pose estimation, question answering, and text classification, on multiple platforms.

## TensorFlow Lite Runtime Package Installation

The tflite_runtime package is a smaller, simplified Python package that includes the bare minimum code required to run inference with TensorFlow Lite. This package is ideal when all you want to do is execute .tflite models and avoid wasting disk space with the large TensorFlow library. 

For best performance it is recommended to use 64bit OS and corresponding TFLite package, with optimized XNNPACK
delegate enabled. These can be compiled from source by yourself or installed with pre-built binaries provided by Seeed studio. Alternatively, you can install latest stable version with pip

#### Latest stable version (official builds)

```
pip3 install --index-url https://google-coral.github.io/py-repo/ tflite_runtime

```

#### Performance optimized package for 64-bit OS with XNNPACK enabled

Official pre-built wheels for Python 3.7 64bit OS with XNNPACK optimizations were not available at the moment of writing of this article, so we compiled and shared them ourselves.

```
wget www.files.seeedstudio.com/ml/TFLite/tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
pip3 install tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
```

After installation is complete, try importing tflite package:
```
pi@raspberrypi:~ $ python3
Python 3.7.3 (default, Jul 25 2020, 13:03:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tflite_runtime
>>> tflite_runtime.__version__
'2.6.0'
```


## Examples

It is possible to use TFLite Converter to convert any Tensorflow model into .tflite format, provided it only consists of operations supported by TFLite Runtime. The following is list of demos currently tested on reTerminal, that will be expanded and completed in future:

<table style="undefined;table-layout: fixed; width: 743px">
<colgroup>
<col style="width: 146px">
<col style="width: 198px">
<col style="width: 399px">
</colgroup>
<thead>
  <tr>
    <th>Model</th>
    <th>Result</th>
    <th>Comments</th>    
  </tr>
</thead>
<tbody>
  <tr>
    <td>Object Detection</td>
    <td> <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/000402.jpg" alt="pir" width="600" height="auto"></p></td>
    <td>Demo: Vehicle Detection <br />  
    Colab Notebook
    Example scripts<br /> <br />   
    alpha 0.25 224x224 66.7 FPS (15 ms.)<br />
    alpha 0.5 224x224 40 FPS (25 ms.)<br />
    alpha 0.75 320x320 14.9 FPS (67 ms.)<br />
    alpha 1.0 320x320 10.4 FPS (96 ms.)<br />
    </td>
  </tr>
  <tr>
    <td>Image Classification</td>
    <td><p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/belt.png" alt="pir" width="600" height="auto"></p> </td>
     <td>Demo: Industrial Conveyor Rip Identification<br />
    Colab Notebook Example scripts<br /> 
      <br />  
     </td>   
  </tr>
  <tr>
    <td>Semantic segmentation</td>
    <td><p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/CHNCXR_0331_1.png" alt="pir" width="600" height="auto"></p></td>
    <td>Demo: Lung segmentation <br />  
    Colab Notebook
    Example scripts<br /> <br />  
    </td>
  <tr>
    <td>Face age/gender recognition</td>
    <td><p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/output.gif" alt="pir" width="600" height="auto"></p></td>
    <td>Demo: Multi-stage inference: MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet <br /> 
    Colab Notebook
    Example scripts<br /> <br />     
    ~16-20 FPS 
    </td>  
  </tr>
</tbody>
</table>

## Further optimization

The FPS and inference results in the Example table are given for INT8 quantized models inference in Tensorflow Lite, unless stated otherwise. <br />
Since reTerminal is Raspberry Pi 4 based, it has no additional hardware accelerators for neural network inference, thus only standard optimization methods for CPU inference can be applied. Below is the brief overview of CPU inference optimization methods:

1) **Designing smaller networks**. If the goal is simple enough (image classification of < 100 classes or object detection of < 10 classes or similar), a smaller network can achieve acceptable accuracy and run very fast. For example, MobileNet v1 alpha 0.25 YOLOv2 network trained to detect only one class of objects (human faces) achieves 62.5 FPS without any further optimization.

Vanilla Tensorflow Lite FP32 inference:
MobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 62.5 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB  7 FPS

2) **Quantization**. Quantization is process of reducing precision for NN network weights, usually from FP32 to INT8. It reduces the size by 4x and latency by ~60-80% using default Tensorflow Lite kernels. Accuracy loss can be minimized by using QAT - quantization-aware training, which is the process of fine-tuning network with quantization nodes inserted.

Vanilla Tensorflow Lite INT8 inference:
MobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 77 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB  11.5 FPS

3) Using **optimized kernels**. Inference speed can be improved by utilizing frameworks that have CNN kernels optimized for specific CPU instructions set, e.g. NEON SIMD instructions for ARM. Examples of such networks include ARM NN and XNNPACK.

XNNPACK delegate Tensorflow Lite FP32 inference:
MobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 83 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB  7.2 FPS

Main proble mwith optimized kernels is the uneven support of different architectures/NN operators in different frameworks. For example both ARM NN and XNNPACK currently do not have optimized kernels for INT8 or they are restricted to a very small set of NN operators. The support for INT8 optimized kernels in XNNPACK is work in progress currently
https://github.com/google/XNNPACK/issues/999#issuecomment-870791779

Another promising lead is optimized kernels for dynamically quantized models, see the conversation with developer here:
https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116

The developer claims 3-4x latency improvement, but currently it is only limited to very specific set of models. A PR to allow more convenient usage is in development.

4) **Pruning and sparse inference**. Pruning is a process of fine-tuning trained neural network to find weights, that do not contribute to correct predictions. This allows for reducing both size and latency of the models - the accuracy reduction depends on sparsity settings. Experimentally it is possible to achieve up to 80% sparsity with negligible impact on accuracy. See details here
https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html
and a guide to pruning with tensorflow here
https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference

Unfortunately in current form, only very limited set of models support pruning and sparse inference with XNNPACK. 

## F.A.Q.

#### Q1: My company's policy doesn't allow us to use 3rd party binaries. 

You can use official TFLite interpreter package or alternatively compile it from source  by following instructions [here](https://github.com/PINTO0309/TensorflowLite-bin#2-tensorflow-v230-version-or-later).

## Resources

- **[Web Page]** [TensorFlow Lite Official Webpage](https://www.tensorflow.org/lite)

- **[Web Page]** [TensorFlow Lite Official Documentation](https://www.tensorflow.org/lite/guide)