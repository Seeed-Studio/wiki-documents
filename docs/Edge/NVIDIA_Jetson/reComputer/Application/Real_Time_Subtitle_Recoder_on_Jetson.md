---
description: Real_Time_Subtitle_Recoder_on_Jetson
title: Real_Time_Subtitle_Recoder_on_Jetson
keywords:
  - Edge
  - reComputer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Real_Time_Subtitle_Recoder_on_Jetson
last_update:
  date: 02/23/2024
  author: Jiahao

no_comments: false # for Disqus

---

# Real_Time_Subtitle_Recoder_on_Jetson

## Introduction
Nowadays, we have many meetings every day, but some of the meeting content is not intended to be published. Sending meeting content to the cloud for recording and returning subtitles can pose a significant threat to meeting privacy. And the most important thing is you will lose your meeting content if the internet is delayed. 

And here we introduce you Real_time_Subtitle_Recoder_on_Jetson, which can offer real-time speech-to-subtitle services while avoiding information leakage on the internet. Meeting content can be transcribed and displayed on screens using an AL model in subtitle form, which can protect meeting privacy and reduce meeting recorder workload.

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto" /></p>

## Materials Requirement

### Hardware Setup

- [reComputer ](https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products) (Or other devices based on Jetson)

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110110193_recomputer_industrial_j3011_orin_nano_8gb-first.jpg" alt="pir" width={300} height="auto" /></p>

-  [reSpeaker](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products) (Or other USB interface microphones)
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/2/02_7.png" alt="pir" width={300} height="auto" /></p>

- Monitor, mouse, and keyboard
- PC with Linux distribution operating system

### Software Setup

- Pre-installed Jetpack 5.1.x (above)
- Python3.6 with Pypi(python3-pip) and Virtual Environments
- NVIDIA Container Toolkit

## Prepare the runtime environment

Before we start the project, we need to prepare the environment as followed steps:
```shell
# flask
pip3 install flask
# riva client
git clone --depth=1 --recursive https://github.com/nvidia-riva/python-clients
cd python-clients
sudo pip3 install --upgrade pip setuptools wheel
pip3 install --no-cache-dir --verbose -r requirements.txt
python3 setup.py --verbose bdist_wheel
pip3 install --no-cache-dir --verbose dist/nvidia_riva_client*.whl
python3 -c 'import riva.client; print(riva.client.__version__)'
# pyaudio
sudo apt-get install -y --no-install-recommends python3-pyaudio
```
## Let's run it

```shell
git clone ...
cd ...
python3 recorder.py
```
