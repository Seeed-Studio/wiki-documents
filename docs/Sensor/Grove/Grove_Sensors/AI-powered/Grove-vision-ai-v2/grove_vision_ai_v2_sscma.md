---
description: Guidance on how to go from owned datasets, labelling, training and deployment to Grove Vision AI V2.
title: Deploying Models from Datasets to Grove Vision AI V2
keywords:
- SSCMA
- Vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_sscma
last_update:
  date: 03/12/2024
  author: Citric
---


# Deploying Models from Datasets to Grove Vision AI V2

Welcome to this comprehensive tutorial where we'll embark on a journey to turn your dataset into a fully functional model for deployment on the Grove Vision AI V2. In this guide, we'll navigate through the initial steps of labeling our dataset with Roboflow's intuitive tools, progressing to model training within the collaborative environment of Google Colab.

We'll then move on to deploying our trained model using the SenseCraft Model Assistant, a process that bridges the gap between training and real-world application. By the end of this tutorial, not only will you have a custom model running on Grove Vision AI V2, but you'll also be equipped with the knowledge to interpret and utilize the results of your model's predictions.

From dataset to model landing, we will have the following main steps.

1. [Labelled Datasets](#labelled-datasets) —— This chapter focuses on how to obtain datasets that can be trained into models. There are two main ways to do this. The first is to use the labelled datasets provided by the Roboflow community, and the other is to use your own scenario-specific images as datasets, but you need to manually go through the labelling yourself.

2. [Training Dataset Exported Model](#training-dataset-exported-model) —— This chapter focuses on how to train to get a model that can be deployed to Grove Vision AI V2 based on the dataset obtained in the first step, by using the Google Colab platform.

3. [Upload models via SenseCraft Model Assistant](#upload-models-via-sensecraft-model-assistant) —— This section describes how to use the exported model file to upload the model to Grove Vision AI V2 using the SenseCraft Model Assistant.

4. [Common protocols and applications of the model](#common-protocols-and-applications-of-the-model) —— Finally, we will introduce SenseCraft AI's unified data communication format so that you can utilise the maximum potential of your devices and models to make applications that fit your scenarios.

So let's dive in and begin the exciting process of bringing your data to life.

## Materials Required

Before you start, you may need to prepare the following equipment.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

This is the recommended device model and is all the hardware that will be used in this tutorial. Of course, if you don't have an OV5647 camera on hand, and don't have an XIAO, you can use any other CSI Raspberry Pi camera, and any UART-enabled Arduino-enabled development board will do.


## Labelled Datasets

In the contents of this section, we allow users to freely choose the datasets they have. This includes community's or their own photos of the scene. This tutorial will introduce the two dominant scenarios. The first one is to use ready-made labelled datasets provided by the [Roboflow](https://roboflow.com/about) community. The other is to use high-resolution images that you have taken and labelled the dataset. Please read the different tutorials below according to your needs.

### Step 1: Create a free Roboflow account

Roboflow provides everything you need to label, train, and deploy computer vision solutions. To get started, create a [free Roboflow account](https://app.roboflow.com/?ref=blog.roboflow.com).

After reviewing and accepting the terms of service, you will be asked to choose between one of two plans: the Public Plan and the Starter Plan.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/1.png" style={{width:800, height:'auto'}}/></div>


Then, you will be asked to invite collaborators to your workspace. These collaborators can help you annotate images or manage the vision projects in your workspace. Once you have invited people to your workspace (if you want to), you will be able to create a project.


### Choose how you get your dataset


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Labelled datasets using Roboflow" label="Labelled datasets using Roboflow">

Choosing a suitable dataset from Roboflow for direct use involves determining the dataset that best fits the requirements of your project, considering aspects such as the dataset size, quality, relevance, and licensing.

### Explore Roboflow Universe

Roboflow Universe is a platform where you can find various datasets. Visit the Roboflow Universe website and explore the datasets available.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/2.png" style={{width:1000, height:'auto'}}/></div>

Roboflow provides filters and a search function to help you find datasets. You can filter datasets by domain, number of classes, annotation types, and more. Utilize these filters to narrow down the datasets that fit your criteria.

### Evaluate Individual Datasets

Once you have a shortlist, evaluate each dataset individually. Look for:

**Annotation Quality**: Check if the annotations are accurate and consistent.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/3.png" style={{width:1000, height:'auto'}}/></div>

**Dataset Size**: Ensure the dataset is large enough for your model to learn effectively but not too large to handle.

**Class Balance**: The dataset should ideally have a balanced number of examples for each class.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/4.png" style={{width:1000, height:'auto'}}/></div>

**License**: Review the dataset's license to ensure you can use it as intended.


Step 5: Check for Preprocessing and Augmentation
Determine if the dataset has been preprocessed or augmented in a way that is beneficial for your use case. Roboflow often provides datasets with pre-applied transformations that can save you time.

### Read Dataset Documentation

Review any documentation or metadata that comes with the dataset to better understand its contents and any preprocessing steps that have already been applied.

### Download a Sample

Roboflow usually allows you to download a sample of the dataset. Test the sample to see if it integrates well with your workflow and if it's suitable for your model.

### Test with Your Model

If possible, run a preliminary test by training your model with the dataset to observe performance. This can help you gauge whether the dataset will be effective for your purposes.

### Make a Decision

If the dataset meets your requirements and performs well in preliminary tests, it's likely a good fit for your project. If not, you may need to continue your search or consider augmenting the dataset with additional data.

### Download and Use

After deciding on a dataset, follow Roboflow's process to download the full dataset. Make sure to comply with any license agreements.



</TabItem>

<TabItem value="Use your own images as a dataset" label="Use your own images as a dataset">

</TabItem>
</Tabs>




## Training Dataset Exported Model






## Upload models via SenseCraft Model Assistant





## Common protocols and applications of the model





## Troubleshooting


## Resources



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

