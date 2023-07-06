---
description: Seeed Studio Round Display for XIAO-FAQ
title: If I want to connect Seeed Studio XIAO ESP32S3 Sense to this extension screen, will there be a conflict with two TF card slots?
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /two_TF_card
last_update:
  date: 6/30/2023
  author: cheng.tang
---
A: This does not create a conflict. The different SD card slots are controlled via chip select, if you want to use the microSD card slot on Sense, the chip select pin should be **21**, if you want to use the microSD card slot on Round Display, the chip select pin should be **D2**.

We have [examples](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera) of using both hardware and microSD cards in the S3 Sense camera tutorial.