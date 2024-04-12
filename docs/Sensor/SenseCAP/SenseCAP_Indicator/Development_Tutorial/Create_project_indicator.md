---
title: Create a Project(ESP-IDF) - SenseCAP Indicator
description: Step-by-step guide to developing a project for the SenseCAP Indicator using ESP-IDF or Squareline Studio.
keywords: 
- SenseCAP Indicator
- ESP-IDF
- Squareline
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_indicator_project
sidebar_position: 4
last_update:
  date: 04/12/2024
  author: Spencer
---

## Overview
The SenseCAP Indicator integrates dual-core MCUs ESP32-S3 and RP2040. This tutorial focuses on creating projects using the ESP32-S3 with ESP-IDF.

There are two simple project creation methods: GitHub Template and Squareline Studio.

## Project Creation Methods

### 1. GitHub Template
#### Step 1: Create a New Project
- Visit the [SenseCAP Indicator Template repository](https://github.com/Seeed-Solution/indicator-esp-idf-template) and click `Use this template` to start a new repository.

#### Step 2: Clone the Repository
```bash
git clone https://github.com/your-username/indicator-esp-idf-template.git
```

#### Step 3: Build the Project
Navigate to the project directory and build the project:
```bash
cd indicator-esp-idf-template
idf.py build
```

#### Step 4: Flash the Project
Connect the device via USB and flash the project using:
```bash
idf.py -p PORT flash
```

#### Step 5: Monitor the Project
Monitor the output with:
```bash
idf.py -p PORT monitor
```
*Note: Replace `PORT` with your device's port number.*

### 2. Squareline Studio
For beginners, Squareline Studio offers a user-friendly, low-code option for UI design.

There is a blog [Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe) that provides a detailed guide on using Squareline Studio to design the UI.

#### Step 1: Set Up
- Download and install Squareline Studio from [Squareline's website](https://studio.squareline.io/).
- Launch the software and start a new project.

![](https://hackster.imgix.net/uploads/attachments/1650386/image_4QrcVcHWtG.png?auto=compress%2Cformat&w=1280&h=960)

#### Step 2: Design the UI
- Use Squareline Studio to design the project’s UI.

#### Step 3: Generate and Build the Project
- Generate the UI code.
- Build the project using ESP-IDF.

For more on using Squareline Studio, refer to the guide on [Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe).

### Tips for Beginners
- If new to development, start with Squareline Studio to create a simple blink project.
- For more advanced customization, modify the [SDK example](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) directly.

## ODM Service

Seeed Studio offers a comprehensive one-stop ODM service to accommodate rapid customizations and scaling requirements for diverse needs. If you're looking to tailor your project with specialized features or need assistance in scaling up your operations efficiently, please reach out to us. For inquiries and more detailed information, contact us at iot@seeed.cc. We're here to help turn your unique ideas into reality.

## Tech Support

**Need help with your SenseCAP Indicator? We're here to assist you!**

If you encounter any issues or have any questions while following this tutorial, please feel free to reach out to our tech support. We are always here to help!

Visit our [Seeed Official Discord Channel](https://discord.com/invite/QqMgVwHT3X) to ask your questions or the [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) to share all you want!
