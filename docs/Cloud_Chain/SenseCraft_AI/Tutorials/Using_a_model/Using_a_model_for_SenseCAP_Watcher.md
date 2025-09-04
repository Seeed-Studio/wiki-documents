---
sidebar_position: 3
description: How to use a model for SenseCAP Watcher
title: Using a model for SenseCAP Watcher
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-watcher
aliases:
  - /sensecraft_ai_pretrained_models_for_watcher
last_update:
  date: 12/03/2024
  author: Citric
---

SenseCAP Watcher is a powerful monitoring device that can be configured to recognize specific objects and trigger alarms based on user-defined tasks. To enhance Watcher's object recognition capabilities, users can leverage custom models from the SenseCraft AI model repository. This wiki article will guide you through the process of using these custom models in your Watcher monitoring tasks.

## Prerequisites

Before you begin using custom models from the SenseCraft AI model repository, ensure that you have the following:

- **SenseCAP Watcher**: You should have a SenseCAP Watcher device set up and ready to use. If you haven't already, follow the instructions in the [SenseCAP Watcher Quick Start Guide](https://wiki.seeedstudio.com/getting_started_with_watcher/) to set up your device.

- **SenseCraft APP**: Install the SenseCraft APP on your mobile device. The app is available for both iOS and Android platforms and can be downloaded from the respective app stores.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div>

<br />

- **SenseCraft Account**: To access the SenseCraft AI model repository and use custom models, you need to have a SenseCraft AI account. If you don't have an account, sign up for one through the SenseCraft APP or the official SenseCraft AI website.

- **Network Connectivity**: Ensure that your SenseCAP Watcher device and mobile device running the SenseCraft APP are connected to the internet. A stable network connection is required to access the SenseCraft AI model repository and download custom models.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher's Video</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github Repository</font></span></strong>
    </a>
</div>

## Step 1. Issuing a Monitoring Task to Watcher via the SenseCraft APP

To begin, open the SenseCraft APP and navigate to the Watcher device you want to configure. The app provides an intuitive interface for creating and managing monitoring tasks. For this example, let's create a task that says, *If a keyboard is recognized, play the sound 'Keyboard is awesome'*.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/31.png" style={{width:250, height:'auto'}}/></div>

When creating a task, it's essential to be clear and specific about the object you want Watcher to recognize and the action you want it to take when the object is detected. This helps ensure that Watcher understands and executes the task accurately.

If you don't know enough about how Watcher places an appropriate task, read the [Task Assignment Guideline](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

## Step 2. Enabling the Use of a Custom TinyML Model

After issuing the task through the APP, click on the task card to enter the **Detail Configs** page. This page allows you to fine-tune various aspects of your monitoring task, including the selection of a custom TinyML model.

In the **Scenario** section at the top of the page, you'll find the **Use TinyML Model** option. By checking this option, you enable Watcher to use a custom model from the SenseCraft AI model repository for object recognition. Click on the model name field to search or directly select the desired model, such as a **keyboard detection** model.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.png" style={{width:1000, height:'auto'}}/></div>

The SenseCraft AI model repository hosts a wide range of pre-trained models that can be used for various object recognition tasks. These models have been optimized for use with Watcher, ensuring high accuracy and performance.

:::note

1. After selecting a model, the Watcher's alarm words may be cleared and need to be re-entered before the Run Task button can be clicked.

2. After selecting the model, please reasonably configure the Confidence Threshold below the model. the default value is 0. If you directly send it to the task with 0 as the threshold, it may lead to anything being recognized as a wrong object, please adjust this value according to the actual situation to achieve the best detection effect.

:::

In addition to the pre-trained models available in the SenseCraft AI model repository, you can also use your own custom-trained models. If you have a specific object or scenario that isn't covered by the existing models, you can train your own model and share it with the SenseCraft AI community.

:::tip
Watcher can search and use private models under the same SenseCraft account. If you choose not to make your models public, you can also use your private models as long as Watcher is bound to your account.
:::

## Step 3. Confirming the Task and Starting Monitoring

After selecting the custom model and confirming other task configuration details, click the "Run Task" button to start the monitoring task. This action deploys the task to your Watcher device and begins the monitoring process.

Upon receiving the task, Watcher will automatically download the selected model from the SenseCraft AI model repository and use it as the basis for triggering alarm actions. This seamless integration ensures that Watcher has the most up-to-date and relevant model for accurate object recognition.

With the custom model in place, Watcher will continuously monitor its environment for the presence of the specified object. In this example, when Watcher recognizes a keyboard using the selected model, it will trigger the specified alarm action—playing the sound "Keyboard is awesome".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/33.png" style={{width:600, height:'auto'}}/></div>

The combination of custom models and user-defined tasks allows Watcher to adapt to a wide range of monitoring scenarios. By leveraging the power of the SenseCraft AI model repository and the flexibility of the SenseCraft APP, users can tailor Watcher's capabilities to their specific needs, ensuring reliable and accurate object recognition and alarm triggering.

## Conclusion

Using custom models from the SenseCraft AI model repository empowers SenseCAP Watcher users to enhance the device's object recognition capabilities and expand its monitoring and alarm application scenarios. The SenseCraft APP provides an intuitive interface for searching, selecting, and applying these custom models to Watcher monitoring tasks. By following the steps outlined in this wiki article, users can easily configure Watcher to recognize specific objects and trigger alarms based on their unique requirements. Whether using pre-trained models or custom-trained models shared with the SenseCraft AI community, Watcher offers a powerful and adaptable solution for various monitoring needs.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
