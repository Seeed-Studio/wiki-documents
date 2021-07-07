---
name: reTerminal
category: reTerminal
bzurl: 
wikiurl: 
sku: 
---

# Getting Started with MediaPipe on reTerminal

<p align="center">
  <img alt="Light" src="https://google.github.io/mediapipe/images/mediapipe_small.png" width="45%">
&nbsp; &nbsp; 
  <img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%">
</p>

 MediaPipe is a an open-source framework from Google for building multimodal (eg. video, audio, any time series data), cross platform (i.e Android, iOS, web, edge devices) applied ML pipelines. It is performance optimized with end-to-end ondevice inference in mind. Mediapipe is currently under active development and includes multiple demos, that can be run out-of-the box after installing Mediapipe on reTerminal.

## ML solutions in MediaPipe 

The following is list of solutions currently tested on reTerminal:

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
    <td>Face Detection</td>
    <td> <p style="text-align:center;"><img src="https://google.github.io/mediapipe/images/mobile/face_detection_android_gpu_small.gif" alt="pir" width="600" height="auto"></p></td>
    <td>80 FPS</td>
  </tr>
  <tr>
    <td>Face Mesh</td>
    <td><p style="text-align:center;"><img src="https://google.github.io/mediapipe/images/mobile/face_mesh_android_gpu_small.gif" alt="pir" width="600" height="auto"></p> </td>
     <td>80 FPS</td>   
  </tr>
  <tr>
    <td>Pose</td>
    <td><p style="text-align:center;"><img src="https://google.github.io/mediapipe/images/mobile/pose_tracking_android_gpu_small.gif" alt="pir" width="600" height="auto"></p></td>
    <td>15 FPS</td>
  </tr>
</tbody>
</table>

## Installation

Currently Python bindings are tested with both 32bit and 64bit Raspberry Pi OS images for reTerminal. For best performance it is recommended to use 64bit version.

####Python bindings for 32bit version

```
sudo apt install ffmpeg python3-opencv
pip3 install mediapipe-rpi4
```

####Python bindings for 64bit version

Pre-built wheels for Python 3.7 64bit OS were not available at the moment of writing of this article, so we compiled and shared them ourselves.

```
sudo apt install ffmpeg python3-opencv
wget 
pip3 install 
```

After installation is complete, try importing mediapipe package:
```
````


## Links to Samples

## F.A.Q.

#### Q1: My company's policy doesn't allow us to use 3rd party binaries. How to compile MediaPipe from source?

You can compile MediaPipe for 32bit OS by following instructions [here](https://github.com/superuser789/MediaPipe-on-RaspberryPi#building-mediapipe-on-raspberry-pi-os-for-raspberry-pi-3--4) and for 64-bit version by following instruction [here](https://github.com/jiuqiant/mediapipe_python_aarch64).

## Resources

- **[Web Page]** [MediaPipe Official Webpage](https://mediapipe.dev/)

- **[Web Page]** [MediaPipe Official Documentation](https://google.github.io/mediapipe/)