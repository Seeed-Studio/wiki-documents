---
description: This article provides a detailed setup guide for configuring the Watcher device in three different processing deployment flows,including Cloud Efficient Processing Flow, Hybrid Smart Processing Flow, and Local Secure Processing Flow. It offers an overview of the Watcher software service framework, illustrating the interactions between the user, SenseCraft Mate app, and Watcher device.
title: Watcher Software Service Introduction
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /watcher_software_service_framework
sidebar_position: 2
last_update:
  date: 10/09/2024
  author: Evelyn Chen
---


## Framework Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.png" style={{width:800, height:'auto'}}/></div>

This is the software service framework for the Watcher, illustrating the interactions and task flow between the user, the SenseCraft Mate app, and the Watcher device. We offer multiple configuration options that allow users to customize their service deployment based on their data security and service quality requirements.

The framework integrates cloud AI services and local AI deployments, combined with data services, device communication services, task orchestration, image analysis services, alert channel agents, and model training services.
you can choose to deploy your LLM in the cloud or on-premises infrastructure.the original Data and result can also be chosen to be storage or transmit in cloud or on-premise device.
Cloud compared to on-premise storage solutions as well as the need for higher-performance storage within GPU-enabled virtual machines.

These components form three deployment options for users to choose from:

1. **Cloud Efficient Processing Flow**
2. **Hybrid Smart Processing Flow**
3. **Local Secure Processing Flow**

The following sections provide a detailed explanation of the framework and guide you through configuring each of the three deployment options.

**Data Service**

Watcher offers flexible data services, allowing you to connect to the SenseCraft data platform to upload alert data, device status, and preview images. The SenseCraft platform provides an MQTT broker address and token through an HTTP request. Alternatively, you can choose to upload data to third-party platforms via Bluetooth configuration on the app, bypassing the SenseCraft platform entirely.

**Device Communication Service**

For device communication, Watcher supports remote task flows and firmware OTA updates through MQTT. You can use the SenseCraft Mate app to create tasks and send them to the device through the SenseCraft platform. The app also checks for lastest firmware version, and when available, it will notify you. After confirming, the platform will send the update to the device.

**Task Orchestration Service**

Watcher’s task orchestration service allows for direct voice interactions, where your dialogue is sent to the service via HTTP, processed, and the task flow is returned to the device. The SenseCraft Mate app can also retrieve task flows and send them remotely to the device.

**Vision Analysis Service**

In terms of vision analysis, Watcher offers a unified image analysis service. You can choose between SenseCraft, OpenAI or third-party AI agent through the Bluetooth configuration and input the relevant API keys. When the device sends an image, it will utilize the selected service, either the local llava or a third-party service like OpenAI.

**Alert Notification Service**

For alert notifications, Watcher allows multiple options, including app push notifications from the SenseCraft cloud, UART connections to other hardware, and HTTP connections to local servers or third-party platforms. Alerts can also be sent to platforms like Discord using standard data formats. Additionally, Watcher can forward these notifications to other platforms such as Home Assistant, IFTTT, or Webhooks, using compatible formats. For more details, refer to the HTTP Proxy Application.

You have the flexibility to choose from multiple deployment options and easily configure your personalized Watcher assistant. Whether your priority is data security or processing efficiency, we offer three adaptable solutions: Cloud Efficient Processing Flow, Hybrid Smart Processing Flow, and Local Secure Processing Flow. Tailor your Watcher assistant to provide you with the best smart service experience!

## Cloud Efficient Processing Flow

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/20.png" style={{width:500, height:'auto'}}/></div>

This diagram provides an overview of the Cloud Efficient Processing Flow, illustrating interactions between the user, cloud services, and local applications. In this setup, all services are executed through the SenseCraft cloud to offer a streamlined and efficient workflow. After you get started and complete device binding, you can select the appropriate cloud or local services based on your needs.

The following sections explain each part of the Cloud Efficient Processing Flow and provide guidance on configuring it:

**Step 1**. Initial Setup:
After completing the [setup](https://www.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade) and selecting SenseCraft AI Services, you can begin using the Watcher’s cloud services.

**Step 2**. User Interaction:
There are two ways to activate SenseCraft services, and allocate task to Watcher, detailed as follows (refer to section XXX):

* Option 1: Via the App: Users can enable SenseCraft AI services through the mobile application. Then sending task message in chat.
* Option 2: Via Voice Commands: Users can assign task through voice chat directly with the Watcher.

**Step 3**. Task Orchestration:
Once SenseCraft is activated, it functions as a Platform-as-a-Service (PaaS) to provide task orchestration services. This includes three core elements:

* STT (Speech-to-Text): Converts spoken commands into text.
* TTS (Text-to-Speech): Converts text-based responses into spoken output.
* AI Services: Responsible for understanding, processing, and orchestrating tasks. Based on the task’s content, the service selects the most suitable models from the SenseCraft model repository, including large language models (LLMs) and TinyML models.

In addition to manually selecting local TinyML models in the manual configuration, tasks can also be processed automatically based on your input prompt. After the task orchestration model interprets your prompt, it can call the appropriate TinyML model from the SenseCraft library. For example, if a user requests, "Notify me when you see a bird," the task orchestration service will select a bird recognition model from the TinyML library to optimize response speed.

In the *manual configuration*, you can choose between the **Vision LLM** (for higher accuracy) or the **TinyML model** (for faster processing).

**Step 4**. Task Dispatch after Orchestration
Once task orchestration is completed, the method for dispatching tasks will depend on the status of the SenseCraft Remote Control feature:

* If remote control is enabled: The system will utilize the PaaS data service and device communication service to send task results to the Watcher via MQTT broker.
* If remote control is disabled: Tasks will be dispatched to the Watcher via Bluetooth. If the device is out of Bluetooth range, you will need to enable remote control for task transmission.

**Step 5**. Vision Analysis Task Processing

After receiving the task from SenseCraft, the Watcher device will invoke the Visual Analysis Service. It will analyze the task using the AI model chosen by the user or determined by the task orchestration service.

**Step 6**. System Notifications
The Watcher can notify the user or a local system using various methods:

* App push notifications
* Serial port/UART output
* HTTP push notifications

Watcher can also send data to local servers, third-party applications, or alert services like Discord, Home Assistant, or IFTTT.
For more details, refer to section HTTP Proxy Application.

## Hybrid Smart Processing Flow

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/3.png" style={{width:800, height:'auto'}}/></div>

This diagram illustrates the Hybrid Smart Processing Flow, which involves user interactions, some cloud services, and local applications. The hybrid approach balances data security, user experience, and efficiency by combining cloud-based task orchestration with local visual models.

**Step 1**. Initial Setup
After [getting started and device binding](https://wiki.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade), users can select the appropriate local services based on their needs, enable the private Watcher service, and enter the Watcher server URL.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**Step 2**. User Interaction:
Users can send tasks via the SenseCraft app, which will initiate the task orchestration service within the platform.

**Step 3**. Task Orchestration:
Once a task is received, the SenseCraft platform, functioning as a PaaS (Platform-as-a-Service), will orchestrate the task using three core services:

* STT (Speech-to-Text service)
* TTS (Text-to-Speech service)
* AI services for understanding, processing, and task orchestration.

The task orchestration service interprets the task and selects the appropriate model from the SenseCraft model library or LLM (Large Language Model), depending on the task requirements.

In addition to manually selecting local TinyML models in the manual configuration, tasks can also be processed automatically based on your input prompt. After the task orchestration model interprets your prompt, it can call the appropriate TinyML model from the SenseCraft library. For example, if a user requests, "Notify me when you see a bird," the task orchestration service will select a bird recognition model from the TinyML library to optimize response speed.

In the *manual configuration*, you can choose between the **Vision LLM** (for higher accuracy) or the **TinyML model** (for faster processing).

**Step 4**. Task Dispatch after Orchestration
After task orchestration, the system will choose the method of dispatch depending on the status of the SenseCraft Remote Control:

* If remote control is enabled: The system will use PaaS data service and device communication service to send task results to Watcher via MQTT broker.
* If remote control is disabled: Tasks will be dispatched to Watcher via Bluetooth. If the device is out of Bluetooth range, remote control must be enabled for continued operation.

**Step 5**. Vision Analysis Task Processing
Once the Watcher receives the task, it will invoke the local visual analysis service deployed on a local server. The task will be analyzed using the AI model selected by the user or orchestrated by the SenseCraft task service.

**Step 6**. System Notifications
The Watcher can notify the user or a local system using various methods:

* App push notifications
* Serial port/UART output
* HTTP push notifications

Watcher can also send data to local servers, third-party applications, or alert services like Discord, Home Assistant, or IFTTT.
For more details, refer to section HTTP Proxy Application.

## Local Secure Processing Flow

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/4.png" style={{width:800, height:'auto'}}/></div>

This diagram outlines the “Local Secure Processing Flow”, which focuses on complete user interaction with locally deployed applications. To ensure data privacy, task orchestration and image analysis services are deployed entirely on the local server, offering full privacy protection. However, this method limits functionality, as SenseCraft cloud services are not available. Tasks can only be initiated via in-field voice commands, and users must configure notification services to view historical data.

**Step 1**. Initial Setup
After [getting started and device binding](https://wiki.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade), users can select the appropriate local services based on their needs, enable the private Watcher service, and enter the Watcher server URL.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**Step 2**. User Interaction:
Users can issue tasks by pressing the wheel button on the Watcher device and sending commands through voice chat.

**Step 3**. Task Orchestration:

The Watcher server hosted on the local server provides task orchestration services, similar to the SenseCraft task orchestration system. This local system consists of three core services:

* STT (Speech-to-Text service)
* TTS (Text-to-Speech service)
* AI services for understanding, processing, and orchestrating tasks.

After interpreting the task, the local task orchestration service dispatches tasks to the Watcher.

**Step 4**. Vision Analysis Task Processing
Once the Watcher receives the task, it will call the local visual analysis service deployed on the local server. The task will be analyzed using the AI model selected during task orchestration.

**Step 5**. System Notifications
Watcher can notify users or local systems using the following methods:

* Serial port/UART output
* HTTP push notifications

Additionally, Watcher can send data to local servers, third-party applications, or alert services such as Discord, Home Assistant, and IFTTT.
For more details, refer to section HTTP Proxy Application.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
