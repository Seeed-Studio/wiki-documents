---
description:  Getting started with Google MediaPipe
title:  Getting started with Google MediaPipe
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_ML_MediaPipe
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


# Getting Started with MediaPipe on reTerminal

<p align="center">
  <img alt="Light" src="https://google.github.io/mediapipe/images/mediapipe_small.png" width="45%"/>
&nbsp; &nbsp;
<img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%"/>
</p>

 MediaPipe is a an open-source framework from Google for building multimodal (eg. video, audio, any time series data), cross platform (i.e Android, iOS, web, edge devices) applied ML pipelines. It is performance optimized with end-to-end ondevice inference in mind. Mediapipe is currently under active development and includes multiple demos, that can be run out-of-the box after installing Mediapipe on reTerminal.

## ML solutions in MediaPipe

The following is list of solutions currently tested on reTerminal:

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
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
      <td>Face Detection</td>
      <td> <p style={{textAlign: 'center'}}><img src="https://google.github.io/mediapipe/images/mobile/face_detection_android_gpu_small.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>Model complexity: 0  &nbsp;  71.4 FPS 14 ms. per inference <br />
        Model complexity: 1  &nbsp;  21.2 FPS 47 ms. per inference
      </td>
    </tr>
    <tr>
      <td>Face Mesh</td>
      <td><p style={{textAlign: 'center'}}><img src="https://google.github.io/mediapipe/images/mobile/face_mesh_android_gpu_small.gif" alt="pir" width={600} height="auto" /></p> </td>
      <td>20 FPS, 50 ms. per inference with tracking &nbsp; <br />  
        16.1 FPS 60 ms. without tracking</td>
    </tr>
    <tr>
      <td>Pose</td>
      <td><p style={{textAlign: 'center'}}><img src="https://google.github.io/mediapipe/images/mobile/pose_tracking_android_gpu_small.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>Model complexity: 1  &nbsp;  11.8 FPS 85 ms. per inference <br />
        Model complexity: 2  &nbsp;  6.1 FPS 163 ms. per inference <br />
        Model complexity: 3  &nbsp;  -- FPS -- ms. per inference
      </td>
    </tr>
    <tr>
      <td>Hand landmarks</td>
      <td><p style={{textAlign: 'center'}}><img src="https://google.github.io/mediapipe/images/mobile/hand_tracking_3d_android_gpu.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>Model complexity: 0  &nbsp;  8.9 FPS 112 ms. per inference <br />
        Model complexity: 1  &nbsp;  4.4 FPS 226 ms. per inference <br />
      </td>
    </tr>
  </tbody>
</table>

## Installation

Currently Python bindings are tested with both 32bit and 64bit Raspberry Pi OS images for reTerminal. For best performance it is recommended to use 64bit version.

#### Python bindings for 32bit version

```
sudo apt install ffmpeg python3-opencv
pip3 install mediapipe-rpi4
```

#### Python bindings for 64bit version

Pre-built wheels for Python 3.7 64bit OS were not available at the moment of writing of this article, so we compiled and shared them ourselves.

```
sudo apt install ffmpeg python3-opencv
wget https://files.seeedstudio.com/ml/mediapipe/mediapipe-0.8-cp37-cp37m-linux_aarch64.whl
pip3 install mediapipe-0.8-cp37-cp37m-linux_aarch64.whl
```

After installation is complete, try importing mediapipe package:

```
pi@raspberrypi:~/reterminal $ python3
Python 3.7.3 (default, Jan 22 2021, 20:04:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import mediapipe
>>> mediapipe.__path__
['/home/pi/.local/lib/python3.7/site-packages/mediapipe']
>>> 
```

## Links to samples

You can find Sample applications in Seeed Python Machine Learning repository, inside [examples/mediapipe folder.](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/mediapipe)

## F.A.Q

#### Q1: My company's policy doesn't allow us to use 3rd party binaries. How to compile MediaPipe from source?

You can compile MediaPipe for 32bit OS by following instructions [here](https://github.com/superuser789/MediaPipe-on-RaspberryPi#building-mediapipe-on-raspberry-pi-os-for-raspberry-pi-3--4) and for 64-bit version by following instruction [here](https://github.com/jiuqiant/mediapipe_python_aarch64).

## Resources

- **[Web Page]** [MediaPipe Official Webpage](https://mediapipe.dev/)

- **[Web Page]** [MediaPipe Official Documentation](https://google.github.io/mediapipe/)
