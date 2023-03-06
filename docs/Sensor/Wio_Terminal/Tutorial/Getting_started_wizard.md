---
description:  Getting started wizard
title:  Getting started wizard
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_started_wizard
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Build an ML Model in 5 Minutes and Deploy in the Wio Terminal Powered by Edge Impulse

## **Introduction**

Edge Impulse has launched a new **Getting Started Wizard** which is very friendly to Machine Learning beginners. It uses the few-shot keyword spotting model that lets you record a short sentence, automatically improving your dataset to give you an open-source model in less than 5 minutes. The model can be applied in the Wio Terminal. In this wiki, we will show you how to use the "wizard" and then deploy the model from the wizard into the Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"/></div>

## **Getting started with Edge Impulse**

Now we are going to introduce you to how to launch the Getting Started Wizard and then show you the instruction.

### **Hardware**

**Hardware Required**

In this demo you will need the devices listed as below:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- PC
- Microphone to the PC
- Type-C cable

**Hardware Connect**

It is connected to a computer through the Type-C cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.png"/></div>

### **Software**

**Hardware Required**

- [Arduino IDE](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)

The project is based on the Arduino platform which means Arduino IDE and various Arduino libraries are required. If this is your first time using the Wio terminal, we recommend a guide to quickly [Get Started with Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

### Edge Impulse Training Started

First, you need to have your own Edge Impulse account and then create a project.

- **Step 1**. Open the [Edge Impulse website](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), and then register an account.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots1.png"/></div>

- **Step 2**. Create a new project.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png"/></div>

- **Step 3**. Click the **"Launch getting started wizard"** button at the bottom of the "Dashboard" page and start the wizard.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.jpg"/></div>

- **Step 4**. Follow the instruction by clicking the button.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI03.jpg"/></div>

- **Step 5**. Enter a word or a short sentence.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI04a.jpg"/></div>

- **Step 6**. Record yourself saying words for 38 seconds through the computer microphone.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI06.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI07.jpg"/></div>

Make sure you record clearly and collect enough data, otherwise you will be asked to collect more.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI08.jpg"/></div>

Once you collect enough, the block will show up.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI09.jpg"/></div>

- **Step 7**. Click "Next" and Edge Impulse will help you mix other words along with background noise in your dataset.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI10.jpg"/></div>

And then the model can learn to distinguish between your words and other sounds.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI12.jpg"/></div>

- **Step 8**. Follow the instruction and create "the impulse".

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI13.jpg"/></div>

It can extract the features that can be used for machine learning.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI14.jpg"/></div>

It is functioning automatically, and click "Next" when it completed

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI15.jpg"/></div>

- **Step 9**. Follow the instruction and train a neural network for your model.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI16.jpg"/></div>

Proceed until the model has been trained.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI17.jpg"/></div>

You can use the microphone again and check your results.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI18.jpg"/></div>

Congratulations on your new words classification model! Now we can deploy the model on our Wio Terminal.

### Deploy the Machine Learning Model in the Wio Terminal

Here we are going to deploy our model in the Wio Terminal.

- **Step 10**. Select and click the "Deployment" column on the left. Then choose "Arduino Library", to the bottom select "build" to create the library needed in your Arduino. It will automatically download a zip file that includes the third-party library.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Alots/Alots19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI21.jpg"/></div>

The name of the wanted library is about the name of the project which means whatever the name you have written to the project on **step 2** will be shown here. It can help you find the correct file that you need.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI22.jpg"/></div>

- **Step 11**. Download the audio recognition code [here](https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/example.ino) and open it with Arduino IDE. Meanwhile, it is required to add the downloaded .zip file so you can apply the third-party library.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI23.jpg"/></div>

Change the name of the third-party library to your own and the words you say in the first place.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI24.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI25.jpg"/></div>

Finally, you can say the words and observe whether the Wio Terminal displays them.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI26.jpg"/></div>
