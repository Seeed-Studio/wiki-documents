---
description: What is TinyML
title: What is TinyML
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-TinyML
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# What is TinyML?

ML as you might have guessed stands for Machine Learning and in most of cases (not always though) nowadays refers to Deep Learning. Tiny in TinyML means that the ML models are optimized to run on very low-power and small footprint devices, such as various MCUs. It is a subset of ML on the Edge or Embedded Machine Learning.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/81nihP0ASSL.jpg" /></div>

Embedded devices come in all sorts of shapes and sizes, starting from “embedded supercomputer” Nvidia Jetson Xavier AGX to the tiniest of microcontrollers, for example ESP32 or Cortex M0.

<img width={200} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1-750x750.jpg" />

<img width={350} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/xavier-module-dev-kit-3qrtr-1945px.png" />

Why embedded ML on microcontrollers is put in a special category and even given its own cool name?

Because it comes with it’s own set of advantages and limitations. The attraction of TinyML is in fact that MCUs are ubiquitous, small, consume small amounts of energy and comparatively cheap.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>

Take ARM Cortex M0+ and the little [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) board which is built around it – the board is as small as a thumb(20×17.5mm), consumes only 1.33 mAh of power (which means it can work ~112 hours on a 150 mA battery, much more if put in deep sleep) and cost as little as 4.3 USD.

Thanks to recent improvements in model optimization and emergence of frameworks specifically created for running machine learning model inference on microcontrollers, it has became possible to give more intelligence to these tiny devices. We now can deploy neural networks on microcontrollers for audio scene recognition (for example elephant activity or sound of breaking glass), hot-word detection(to activate device with a specific phrase) or even for simple image recognition tasks. The devices with embedded microcontrollers can be used to give new life and meaning to old sensors, such as using an accelerometer installed on a mechanism for anomaly detection and predictive maintenance – or to distinguish various kinds of liqueurs as in [this demo](https://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)!
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>
The possibilities of TinyML are truly huge.
<br />

What about limitations? The main limiting factor is RAM/FLASH size of MCUs – no matter how you well optimize, you wouldn’t be able to fit [that YOLO9999](https://arxiv.org/abs/1612.08242) into a tiny microcontroller.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/yolo9000-pr023-1-638.jpg" /></div>

Same goes for automatic speech recognition – while simple hot word (or voice command detection) is possible, open domain speech recognition is out of reach of MCUs. For now.

Seeed EDU team has came up with a definitive step-by-step course on how to get started with TinyML using Wio Terminal.

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5efXgSvwk9UCtJ6JKTyWAccSVfTXSlA3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can download the course in PDF format and course materials by clicking on the links below. Additionally, you can find stand-alone projects published previously on Seeed studio blog and Hackster.io site - both projects in the course and standalone projects make use Arduino IDE for programming the devices and a mix of Edge Impulse and Tensorflow Lite for Microcontrollers for model training and inference.

:::note
Main difference between course and standalone projects is that course mainly aims at being used by STEM teachers as foundation for development of their own teaching materials or as ready-to-use lesson material, while standalone projects are for makers and hackers to explore and improve on them.
:::

[Edge Impulse](https://www.edgeimpulse.com) is a user-friendly development platform for machine learning on edge devices, providing beginner friendly (yet powerful) web interface and toolkit for whole TinyMl pipeline, from data collection all the way to model deployment.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/index.png" /></div>

[Tensorflow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers/get_started) on the other hand, while having steeer learning curve, allows you to implement your own model training and inference pipeline.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/tensorflow-lite-logo-social.png" /></div>

## TinyML with Wio Terminal course

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1.png" /></div>

##### Download PDF

[PDF of the TinyML with Wio Terminal course](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/TinyML_with_Wio_Terminal_Course_v1-3.pdf)

##### Download course materials

[Seeed_Arduino_WioTerminal_TinyML_Course-1.0.zip](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course/archive/refs/tags/1.0.zip)

##### Github repository with course materials

[Github of the TinyML with Wio Terminal course](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course)

## No-code Programming to Get Started with TinyML

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" /></div>

Designed to introduce beginners to the basics of Embedded Machine Learning with Wio Terminal  and Codecraft graphical programming.

##### Download PDF

[PDF of No-code Programming to Get Started with TinyML course](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
