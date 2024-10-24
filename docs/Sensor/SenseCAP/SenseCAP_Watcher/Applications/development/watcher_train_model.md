---
description: Deploy AI model from SenseCraft on Watcher
title: Training Model for Watcher
image: "https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png"
slug: /training_model_for_watcher
sidebar_position: 2
last_update:
  date: 10/9/2024
  author: Jason
---

# Training Model for Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

This WiKi article will teach you how to use our SenseCraft to train your own AI model and deploy it on our Watcher. It will be a very interesting process. If you still don't know what SenseCraft is, please click [here](https://sensecraft.seeed.cc/). This is a platform that allows us to deploy various open-source AI models on Seeed Studio devices.

## SenseCraft Website Setup AI Model

### Step 1 . Open [SenseCraft](https://sensecraft.seeed.cc/) Website

Click on "Products" in the top menu bar to see the dropdown options, and then select "SenseCraft AI"Click.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>


### Step 2 . Setup training type

:::tip
**_We recommend using Grove Vision AI (V2) to collect training data from the camera here , Because Watcher uses the same chip as Grove Vision AI V2 (Arm Cortex-M55), so Grove Vision AI V2 was chosen to train Watcher's model , the best device to use for taking photos is the one deployed to, which will directly affect the final accuracy._**
:::

For convenience, a computer camera is used here to capture data . 


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### Step 3 . Collect data

**Training steps**

- Add Category
- Modify your Category tags
- click "Hold to Record" In the category you have chosen
- chose Grove Vision AI(V2)
- Start Traning

In Collect Classification Data you can add the category you want , in here , I added car and doll as my category and modified the tags.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>


:::tip
The more data obtained and the clearer the pixels, the better the training results will be.
:::

After Training , you need to click "Click here"tags Under Start Training.

### Step 4 . Select Model

you can see your Model file after training completion

- click your Mode file
- click "Save to SenseCraft"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### Step 5 . Descriptive model

Please provide your **Model Name**, **Model Excerpt**, **Model Introduction**, **Model Deployment Preparation**. If you make the model public, this information will be very helpful to everyone. This is just a test, so it is written hastily.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>


:::tip
Select SenseCAP Watcher and Grove-Vision AI V2 in Supported Devices.
:::

### Step 6 . Set model parameters

You can choose the AI Framework you want based on your model.

Confidence Threshold
- Confidence refers to the level of certainty or probability assigned by a model to its predictions.

- Confidence is the degree of certainty or probability that a model has of its predicted results. It is usually expressed as a percentage, ranging from 0% to 100%.

IOU Threshold
- IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes.

- IoU is an important indicator for evaluating the performance of object detection models. It measures the degree of overlap between the predicted bounding box and the actual bounding box.

- 0% indicates no overlap.
- 100% indicates complete overlap.

After setting everything up, click Confirm.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

Return to Pretrained Models and click on My Own Models to see the model you have trained.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>





## SenseCraft APP Setup Watcher

### Step 1 . Choose your Watcher
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### Step 2 . Find Manually Set Up Task and enter
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### Step 3 . Check 'Use TinyML Model'
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### Step 4 . Find the model you deployed

Enter the name or scroll down to find your deployed AI model and check it

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### Step 5 . Set up threshold and condition

Confidence is the degree of confidence a model has in its predicted results, typically expressed as a value between 0 and 1, or a percentage between 0% and 100%.
For example, a confidence level of 80% in the model output indicates an 80% probability that it believes the prediction is correct.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### Step 6 . Set up Task Name

Set the task name so that you can directly send it to the viewer to execute your model

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>


### Step 7 . Wait Watcher Deploy Model

Once you have selected the AI model and set the corresponding parameters, you can wait for the viewer to download it

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>


:::tip
During this period, the download may fail due to other external issues. You only need to reselect and set the parameters, and continue downloading.
:::

## Watcher AI Model Display

### Result demonstration

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

This is the simple display effect of my AI model on Watcher , Looking forward to everyone's AI models shining brightly on Watcher!

## Tech Support & Product Discussion
Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
