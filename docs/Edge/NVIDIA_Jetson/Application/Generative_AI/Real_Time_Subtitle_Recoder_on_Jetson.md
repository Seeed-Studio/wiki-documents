---
description: Real Time Subtitle Recoder on Nvidia Jetson
title: Real Time Subtitle Recoder
keywords:
  - Edge
  - reComputer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Real Time Subtitle Recoder on Nvidia Jetson
last_update:
  date: 02/23/2024
  author: Jiahao

no_comments: false # for Disqus

---

# Speech Subtitle Generation on Nvidia Jetson

## Introduction

Nowadays, we have many meetings every day, but some of the meeting content is not intended to be published. Sending meeting content to the cloud for recording and returning subtitles can pose a significant threat to meeting privacy. And the most important thing is you will lose your meeting content if the internet is delayed.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif" /></div>

And here we introduce you [Speech Subtitle Generation on Jetson](https://github.com/yuyoujiang/Real-time-Subtitle-Recorder-on-Jetson), which can offer real-time speech-to-subtitle services while avoiding information leakage on the internet. Meeting content can be transcribed and displayed on screens using an AI model in subtitle form, which can protect meeting privacy and reduce meeting recorder workload.

## Hardware Setup

- [reComputer](https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products) (Or other devices based on Jetson)

<p style={{textAlign: 'center'}}>
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" alt="left" width={800} height="auto" />
 </p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

- [reSpeaker](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products) (Or other USB interface microphones)

<p style={{textAlign: 'center'}}>
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png"
alt="auto" width={800} height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

- hardware connection

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## Prepare the runtime environment

#### Step1. Install Riva ASR Server

Please refer to [this wiki](https://wiki.seeedstudio.com/Local_Voice_Chatbot/#install-riva-server) for installing Riva ASR Server.

In your terminal(Ctrl+Alt+T), input ```sudo docker ps``` and you will see something like following, that means you have finished the first step.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/riva.png" alt="pir" width={1000} height="auto"/></p>

#### Step2. Install flask

Open the terminal (`Ctrl+Alt+T`) and using the following command to install flask:

```shell
pip3 install flask
python3 -c 'import flask; print(flask.__version__)
```

If you get something like following that means you have finished this step.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flask.png" alt="pir" width={1000} height="auto"/></p>

#### Step3. upgrade pip setuptools wheel

```shell
# riva client
git clone --depth=1 --recursive https://github.com/nvidia-riva/python-clients
cd python-clients
sudo pip3 install --upgrade pip setuptools wheel
pip3 install --no-cache-dir --verbose -r requirements.txt
python3 setup.py --verbose bdist_wheel
pip3 install --no-cache-dir --verbose dist/nvidia_riva_client*.whl
python3 -c 'import riva.client; print(riva.client.__version__)'
```

In your terminal(Ctrl+Alt+T), input ```pip --version``` you will see somthing like following, it means you finished upgrade pip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pip.png" alt="pir" width={1000} height="auto"/></p>

In your terminal(Ctrl+Alt+T), input ```python3 -c 'import setuptools; print(setuptools.__version__)``` if you get something like following that means you have upgrade setuptools.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/setuptools.png" alt="pir" width={1000} height="auto"/></p>

In your terminal(Ctrl+Alt+T), input ```wheel version``` you will see somthing like following, it means you finished upgrade wheel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/wheel.png" alt="pir" width={1000} height="auto"/></p>

#### Step4. install pyaudio

```shell
# pyaudio
sudo apt-get install -y --no-install-recommends python3-pyaudio
python3 -c 'import pyaudio; print(pyaudio.__version__)'
```

If your terminal get something like following, you finished the last step,congratulations!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pyaudio.png" alt="pir" width={1000} height="auto"/></p>

## Let's run it

```shell
git clone https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson.git
cd Real-time-Subtitle-Recorder-on-Jetson
python3 recorder.py
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XypO6BlXkCY?si=CczjuOXxak1xAelO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Project Outlook

In this project, we use the [Riva ASR Server](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/riva/resources/riva_quickstart)to capture data from the microphone input in real-time and display it on a webpage. In the future we will add more applications like translating one language into another,  having faster response speed.
