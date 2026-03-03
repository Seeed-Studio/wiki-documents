---
sidebar_position: 2
description: How to use a model for Grove Vision AI V2
title: Using a model for Grove Vision AI V2
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2
aliases:
  - /sensecraft_ai_pretrained_models_for_grove_visionai_v2
last_update:
  date: 12/02/2024
  author: Citric
---

# Using a model for Grove Vision AI V2

SenseCraft AI is a powerful platform that offers a wide range of AI models compatible with various devices, including the Grove Vision AI V2. The Grove Vision AI V2 is a comprehensive AI vision module that combines a camera, processor, and AI capabilities, making it easy to integrate computer vision applications into your projects. In this tutorial, we will guide you through the process of using a SenseCraft AI model on the Grove Vision AI V2 and previewing the model's output. We will also explore some key concepts and settings to help you understand and optimize the model's performance.

## Prerequisites

Before getting started, ensure that you have the following:

- **Grove Vision AI V2**: Make sure you have the Grove Vision AI V2 module ready and properly connected to your development board or computer.

- **OV5647-62 FOV Camera Module for Raspberry Pi 3B+4B**: Used for image input.

- **USB-C cable**: You'll need a USB cable to connect the Grove Vision AI V2 module to your computer for programming and power supply.

- **Access to the SenseCraft AI model repository webpage**: Ensure you have a stable internet connection and can access the SenseCraft AI website.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Step 1. Filtering models for Grove Vision AI V2

Open your web browser and navigate to the SenseCraft AI model repository.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>One-Click Direct 🖱️</font></span></strong>
    </a>
</div><br />

The model repository page displays a wide range of AI models available for different devices and applications.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

On the left sidebar of the webpage, locate the **Supported Devices** section. From the list of devices, click on **Grove - Vision AI V2** to filter the models compatible with your specific device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

This step ensures that you only see the models that can be deployed and run on the Grove Vision AI V2 module.

## Step 2. Choose a Model

For the purpose of this tutorial, we will use the **Person Detection** model as an example. However, feel free to explore and experiment with other models based on your interests and requirements.

Click on the **Person Detection** model to open its dedicated page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

On the model page, you will find detailed information about the model, including its description, Model Precision, and Model Format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

On the model's page, click the **Deploy Model** button located at the top of the page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

This action will initiate the deployment process for the selected model, preparing it to be downloaded and run on your Grove Vision AI V2 module.

## Step 3. Connect Your Device

After deploying the model, click on the **Connect Device** button that appears below the deployment page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

A new page will open, at this point, please connect your Grove Vision AI V2 to your computer via USB-C cable.

On the device connection page, you will see a summary of the model information, including its name and model id. Review the details carefully to ensure that the correct model is selected for your Grove Vision AI V2. If the information is accurate, click the **Confirm** button to proceed with the model deployment.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

After confirming the model information, a window will pop up asking you to select the serial port for your Grove Vision AI V2 module. The serial port is the communication channel between your computer and the Grove Vision AI V2 module. Choose the correct port number corresponding to your Grove Vision AI V2. If you are unsure, you can refer to your operating system's device manager or the module's documentation to identify the correct port.

Click the **Connect** button to establish the connection between your computer and the Grove Vision AI V2 module.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## Step 4. Model Upload

Once the connection is established, the selected model will start downloading to your Grove Vision AI V2 module. The model upload process may take approximately 3-5 minutes, depending on the size of the model and the speed of your internet connection. During this step, the necessary model files and dependencies are transferred to the Grove Vision AI V2 module, preparing it for running the AI model locally.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## Step 5. Model Preview

After the model upload is successful, the preview feature will automatically start. The preview window will display a real-time video feed from your Grove Vision AI V2's camera, along with the model's detection results overlaid on the video. In the case of the Person Detection model, you will see bounding boxes drawn around the detected persons in the video stream. Each bounding box represents a person that the model has identified. The preview feature allows you to see the model's output in real-time, providing immediate visual feedback on its performance.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## Fine-tuning the Model (Optional)

1. If you want to optimize the model's performance or adapt it to your specific use case, you can fine-tune the model's settings using the options available below the preview section.

2. Two important parameters that you can adjust are the "Confidence Threshold" and the "Intersection over Union (IoU) Threshold".

   - **Confidence Threshold**: This value determines the minimum confidence level required for the model to consider a detection as valid. A higher confidence threshold will result in fewer detections but with higher certainty, while a lower threshold will allow more detections but may include some false positives.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU Threshold**: IoU is a metric that measures the overlap between the predicted bounding box and the ground truth bounding box. It is used to determine the accuracy of the object detection. The IoU threshold sets the minimum IoU value required for a detection to be considered a true positive. Adjusting this threshold can help in fine-tuning the model's precision and recall.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. Experiment with different values for the Confidence Threshold and IoU Threshold to find the optimal balance between detecting persons accurately and minimizing false positives. The best settings may vary depending on your specific application and the characteristics of the images or video feed.

## Conclusion

Congratulations! You have successfully deployed a SenseCraft AI Person Detection model on your Grove Vision AI V2 module, previewed its output, and learned how to fine-tune the model's performance.

By following the steps outlined in this tutorial, you can easily explore and experiment with various AI models available in the SenseCraft AI repository on your Grove Vision AI V2 module. The SenseCraft AI platform provides a user-friendly interface and a wide range of models to choose from, making it accessible for both beginners and experienced developers.

Remember to refer to the documentation and resources provided by SenseCraft AI and the Grove Vision AI V2 module for more information on supported models, their capabilities, and any additional configuration options available.

Feel free to explore other models, experiment with different settings, and adapt them to your specific projects or applications. The combination of SenseCraft AI and the Grove Vision AI V2 module opens up a world of possibilities for computer vision applications.

Happy experimenting and creating with SenseCraft AI models on your Grove Vision AI V2!

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
