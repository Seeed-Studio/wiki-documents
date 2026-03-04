---
description: You will gain a solid foundation in understanding the different types of tasks that Watcher can perform and how they are organized within the SenseCraft ecosystem.
title: Task Assignment Guideline
image: https://files.seeedstudio.com/wiki/watcher_getting_started/85_1.webp
slug: /getting_started_with_watcher_task
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
---


# SenseCAP Watcher Task Assignment Guideline

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/85.png" style={{width:1000, height:'auto'}}/></div>

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
</div><br />

Welcome to the tutorial on assigning tasks to Watcher. In this guide, we will walk you through the process of issuing commands to Watcher, enabling you to effectively utilize its capabilities for your monitoring needs.

Watcher is a powerful tool that relies on user-issued commands to perform various monitoring and analysis tasks. By sending precise instructions to Watcher, you can direct it to focus on specific targets, collect data, and provide valuable insights.

In the following sections, we will dive into the details of task categorization, model selection, and pricing information. Our goal is to equip you with the knowledge and skills necessary to efficiently assign tasks to Watcher and make the most of its functionalities. We will explore the different types of tasks available, guide you in selecting the appropriate models for your requirements, and provide clarity on the associated costs.

By the end of this tutorial, you will have a solid understanding of how to effectively communicate your monitoring needs to Watcher. You'll be able to confidently assign tasks, customize settings, and obtain the desired results.

Get ready to take control of Watcher and unlock its full potential. Let's embark on this journey of task assignment and discover how Watcher can help you achieve your monitoring objectives!

## SenseCAP Watcher Advanced Configuration

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher is the first physical LLM agent for intelligent places, capable of monitoring scenes,  triggering action, and interacting based on commands. This video will introduce how SenseCAP Watcher selects scene-trigger models based on task analysis: on-device model and LLM model. We will also show how to configure the RGB light and Display&Sound alert, and the notification push mode: APP, UART, HTTP.

## Concept of the Task

To get started with Watcher and for Watcher to be able to understand what you want it to do, you have to read this article about tasks and the do's and don'ts of placing tasks.

### Three main components of Tasks

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_1.png" style={{width:1000, height:'auto'}}/></div>

A Watcher task consists of three main components:

- **Object**: The specified object directly influences the local recognition task model invoked by Watcher. If the selected model is not available in SenseCraft AI, the cloud-based large model engine is directly called for recognition.

- **Doing Something (Optional)**: The presence or absence of an action description in the task instruction determines whether Watcher invokes the cloud-based large language model engine.

- **Action**: The action executed upon triggering the Watcher's task. Examples of actions include RGB light flashing, push notification, Watcher sound, SNS, and more.

These components work together to define the behavior of the Watcher when a specific task is triggered. By combining the object, optional action description, and the desired action, users can create custom tasks tailored to their monitoring needs.

:::caution
The task examples pictured are for ease of reading and understanding only, and the syntax and conditions do not necessarily need to be exactly as shown in the pictures, but make sure that the task instructions you provide contain the three components mentioned above.
:::

Next, we go through a few examples of tasks to understand some of the concepts and services invoked.

### Watcher Local AI Service

When a person is set as the object in a Watcher task, the device automatically selects the Local AI Service mode. In this mode, Watcher first checks if a pre-trained model for person detection is available in the SenseCraft AI library. If the model exists, Watcher downloads it and performs the detection locally on the device itself, without relying on any cloud-based services.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_2.png" style={{width:1000, height:'auto'}}/></div>

The image illustrates this process. When a person is specified as the object, Watcher calls the **local AI model** for person detection. The model analyzes the video feed captured by the device's camera and detects the presence of a person in **real-time**. If a person is identified, the Watcher triggers the specified action, which in this case is playing the sound "Hi, I'm Watcher" through the device's speaker.

By leveraging the Local AI Service, Watcher can perform person detection efficiently and independently, without the need for a constant connection to the cloud or the use of large language models (LLMs). This ensures fast response times and maintains user privacy, as all the processing happens locally on the device.

However, if the required object model is not available in the SenseCraft AI library, Watcher will switch to using cloud-based LLM services to perform the detection. This fallback mechanism ensures that the device can still carry out its tasks even if a specific model is not present locally. See [Pure LLM mode](#pure-llm-mode).

Then, if you place a task that is judged to be using Local AI Services, then on the SenseCraft APP, the Task Configuration page will display roughly as shown below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local-app.png" style={{width:1000, height:'auto'}}/></div>

### Watcher Cloud-based LLM Service

#### Pure Cloud-based LLM Service

If you set "candle" as the object in a Watcher task, but there are no pre-trained models for candle detection available in the SenseCraft AI library, the device will **automatically switch to using the cloud-based Large Language Model (LLM) service for detection**.

:::danger
Fees may apply for using some of SenseCraft AI's services, please refer to the documentation below for details:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_3.png" style={{width:1000, height:'auto'}}/></div>

As shown in the image, when the Watcher detects a candle using the LLM service, it executes the specified action, which in this case is sending a push notification to the connected mobile app. **This ensures that the user is promptly alerted about the presence of candle, even though the device couldn't perform the detection locally**.

By leveraging the power of cloud-based LLM services, Watcher can still accurately identify objects and trigger appropriate actions, even when a specific model is not available in the SenseCraft AI library. This fallback mechanism enhances the device's versatility and ensures that it can adapt to a wide range of detection scenarios.

However, it's important to note that using the cloud-based LLM service may result in slightly slower response times compared to local detection, as the data needs to be processed remotely. Additionally, this mode requires an active internet connection for the device to communicate with the cloud services.

:::note
Users only need to have a basic understanding of these three task modes without delving into the complete process and intricate details. The introduction of these modes is to ensure that users are not confused or worried when encountering different user interfaces during task configuration. Each mode has its unique app configuration page, which may vary depending on the selected mode. Users should follow the instructions based on their specific requirements to set up their Watcher tasks effectively.
:::

If you place a task that is judged to be using pure LLM, then on the SenseCraft APP, the Task Configuration page will display roughly as shown below.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

In addition to the task configuration and execution features, the Pure Cloud-based LLM Service also enables users to engage in pure text-based conversations with the Language Learning Model (LLM).

This functionality allows you to interact with the LLM directly, without the need for a Watcher device or any image-based input. You can simply type your messages or queries in the chat interface, and the LLM will respond accordingly. See [Type the task](#type-the-task) for details.

#### Local AI + Cloud-based LLM Service

The third mode of operation for the Watcher device is a combination of the Local AI service and the cloud-based LLM service. **This mode comes into play when the Watcher's local AI service recognizes the specified object, but requires further analysis from the LLM cloud service to determine the object's behavior or state**.

:::danger
Fees may apply for using some of SenseCraft AI's services, please refer to the documentation below for details:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_4.png" style={{width:1000, height:'auto'}}/></div>

In the example shown in the image, the object is set to "cat" and the action is "flashing light". When the Watcher detects a cat using its local AI model for pet detection, it then calls upon the LLM cloud service to analyze the cat's behavior and determine whether it is "eating".

If the LLM cloud service confirms that the cat is indeed eating, the Watcher executes the specified action, which in this case is flashing the RGB light on the device. This combination of local and cloud-based services allows for more sophisticated detection and analysis, enabling the Watcher to not only identify objects but also understand their actions or states.

By leveraging both the Local AI service and the LLM cloud service, the Watcher can handle complex scenarios that require multiple levels of analysis. The local AI model first detects the presence of the specified object, while the LLM cloud service provides additional context and understanding of the object's behavior.

If you place a task that is judged to be using local + LLM, then on the SenseCraft APP, the Task Configuration page will display roughly as shown below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

### Summaries

Here's a comparison table of the three modes based on efficiency, cost, and choose:

<div class="table-center">
	<table align="center">
		<tr>
            <th rowspan="2"> </th>
			<th>Full local service</th>
			<th colspan="2">Reliance on cloud services</th>
		</tr>
        <tr>
            <th>Local AI Service</th>
			<th>Cloud-based LLM Service</th>
			<th>Local AI + Cloud-based LLM Service</th>
		</tr>
		<tr>
            <th>Efficiency</th>
			<td align="center">Alarm time: <strong>2s</strong><br />Minimum time interval for triggering alarm: <strong>5s</strong></td>
			<td align="center">Alarm time: <strong>10s</strong><br />Minimum time interval for triggering alarm: <strong>30s</strong></td>
			<td align="center">Alarm time: <strong>10s</strong><br />Minimum time interval for triggering alarm: <strong>30s</strong></td>
		</tr>
		<tr>
            <th>Cost</th>
			<td align="center">❎</td>
			<td align="center">☑️</td>
			<td align="center">☑️</td>
		</tr>
		<tr>
            <th>How to Choose</th>
            <td><strong>Advantage</strong>: relies entirely on Watcher's local AI service, with no additional expense, and has faster recognition and response times. If there is a targeted model, then theoretically there will also be a higher recognition accuracy.<br /><strong>Cons</strong>: If you don't have a model, you can't use the service. It is also not possible to use the local service only if behavioural analysis of objects is required.</td>
            <td><strong>Advantages</strong>: Can recognize a wide range of objects, even if there are no pre-trained models available in the SenseCraft AI library. Suitable for tasks that require behavioral analysis of objects.<br /><strong>Cons</strong>: Requires an active internet connection. May incur additional costs for using cloud-based services, especially after the free public testing phase ends. Slightly slower response times compared to the Local AI Service mode.</td>
            <td><strong>Advantages</strong>: Compared to the Cloud-based LLM Service mode, this mode uses the Local AI Service to filter out non-specific objects before calling the Cloud-based LLM Service. For objects that are not always present but have models available, this mode can greatly reduce the cost of calling the Cloud-based LLM Service by only performing behavioral analysis on images containing the identified objects.<br /><strong>Cons</strong>: May still incur additional costs for using the cloud-based LLM service in combination with the local AI service, although the costs would be lower than using the Cloud-based LLM Service mode exclusively. Requires an active internet connection for the cloud-based behavior analysis. Slightly slower overall response times compared to the Local AI Service mode.</td>
		</tr>
	</table>
</div>

1. The meaning of "Alarm Time" varies depending on the mode:

    - **Local AI Service mode**:
        "Alarm Time" refers to the duration the Watcher's RGB lights or Speaker remain active after an alarm is triggered.

    - **Cloud-based LLM Service mode**:
        "Alarm Time" indicates not only the duration of the RGB lights and Speaker activation but also the length of time the displayed camera screen is paused. This pause accounts for the time required to transfer the image to the cloud server for analysis.

2. The "Minimum time interval for triggering alarm" setting is independent of the "Alarm Time" and does not represent a sequential relationship. This setting specifies the minimum time that must elapse between two consecutive alarm triggers. When configuring a task, users **are not allowed to** set an alarm time shorter than this minimum interval. This limitation ensures that the system has sufficient time to process and respond to each alarm event before another can be triggered. This limitation ensures the system has sufficient processing time and prevents excessive or continuous alarm triggers, promoting stable and reliable operation.

:::danger
Fees may apply for using some of SenseCraft AI's services, please refer to the documentation below for details:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/watcher_price/)**
:::


## Place tasks via the SenseCraft APP

After understanding the classification and basic concepts of tasks, let's take a closer look at how to issue commands to Watcher in the SenseCraft APP in full detail. Let's assume that you've completed the Watcher matching process and have made it to the Watcher chat page. If you don't know how to bind a device yet, please refer to [Device Binding and OTA Upgrade](https://wiki.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/workflow.png" style={{width:1000, height:'auto'}}/></div>

### Type the task

Each Watcher device has its own dedicated chat window within the SenseCraft APP. To issue commands to a specific Watcher, navigate to its chat window and use the input field to enter your desired command. You can type the command manually or use your keyboard's voice input functionality for added convenience.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/21.png" style={{width:250, height:'auto'}}/></div>

When composing a command, it's crucial to provide clear and detailed instructions to ensure that the Watcher understands and executes the task accurately. Your command should include the following information:

- The specific object or objects you want the Watcher to recognize.

- Any additional actions or behaviors associated with the object(s), if applicable.

- The desired action or response you expect from the Watcher upon successful recognition.

By providing comprehensive instructions, you enable the Watcher to effectively comprehend and carry out the assigned task. Remember to be as specific and descriptive as possible to achieve the best results.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/22.png" style={{width:250, height:'auto'}}/></div>

In addition to the task configuration and execution features, the Pure Cloud-based LLM Service also enables users to engage in pure text-based conversations with the Language Learning Model (LLM).

The Pure Cloud-based LLM Service's text-based chatting feature opens up new possibilities for users to interact with the LLM directly. It provides a convenient way to access the LLM's knowledge and capabilities without the need for a physical Watcher device.

Whether you have questions, need assistance with a particular topic, or just want to explore the capabilities of the LLM, the text-based chatting feature offers a seamless and intuitive way to communicate with the AI model.

Feel free to leverage this feature whenever you require information, guidance, or simply want to engage in an informative conversation with the LLM.

:::danger
Fees may apply for using some of SenseCraft AI's services, please refer to the documentation below for details:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/watcher_price/)**
:::

### Identify or configure tasks for disassembly

After completing your task command input, follow these steps to confirm and execute the command:

1. Click the **Send** button located in the bottom-right corner of the chat window to submit your command.

2. The backend system will process and break down your task command into its constituent parts.

3. A small card will be returned to you, displaying the Watcher's interpretation of your task. The card primarily showcases the following information:

   - **When**: The conditions or triggers that will initiate the task execution.
   - **Do**: The actions or responses the Watcher will perform upon successful object recognition.
   - **Capture Frequency**: The time interval at which the task will be triggered and executed.

4. Review the information on the card to ensure that the Watcher has correctly understood your task instructions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div>

5. If you are satisfied with the Watcher's interpretation, click the **Run** button on the card to deploy the task to the Watcher and begin execution.

6. (Optional) For a more detailed review of the task breakdown, click the **Detail Config** button on the card. This will provide you with additional information about the task configuration.

    If you discover any misinterpretations or wish to make changes to the task configuration, use the "Detail Config" option to manually modify the settings according to your requirements. As described in the [Concept of the Tash chapter](#concept-of-the-task), the Detail Config page varies from mode to mode. You just need to select or modify the configuration items according to the actual situation.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/24.png" style={{width:800, height:'auto'}}/></div>

    In the "Detail Config" section, you can find various settings that allow you to fine-tune your task configuration. Here's an overview of the available settings:

    1. **Use Local Model**:
    - This setting appears when the task requires the use of local AI services.
    - The system automatically selects the appropriate model from the SenseCraft AI library based on your provided task.
    - You have the option to disable the use of local AI services, which will result in the direct utilization of cloud-based services for image analysis.
    - You can also manually modify the model selection and choose from the publicly available models in the SenseCraft AI library.
    - Note that if the task is entirely local, you are not allowed to disable the "Use Local Model" option.<br /><br />

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/25.png" style={{width:250, height:'auto'}}/></div>

    2. **Scenario**:
    - This section displays the triggering conditions for the Action.
    - You can adjust the number of classes and modify the triggering statements according to your requirements.
    - If a more complex scenario is involved, it can be flexibly adjusted by adding a condition.<br /><br />

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/26.png" style={{width:600, height:'auto'}}/></div>

    3. **Action**:
    - Here, you can configure the behavior of the Watcher after an alarm is triggered.
    - Specify the actions you want the Watcher to perform, such as turning on RGB lights, playing sounds through the Speaker, or sending notifications.<br /><br />

    4. **Capture Frequency**:
   - This setting determines the time interval at which the task will be executed.
   - Adjust the frequency based on your desired monitoring intervals and the specific requirements of your task.<br /><br />

    :::caution
    In the "Detail Config" section, a default value for **Capture Frequency** will be automatically set. For Watcher Cloud-based LLM Service, the "Capture Frequency" **cannot be set below 60 seconds**. If you are using Watcher Local AI Services, the "Capture Frequency" setting will not be available, as the device will provide real-time alerts.
    :::

    5. **Working Time Frame**:
    - This setting allows you to define the time range during which the task will be active.
    - Specify the start and end times for the task's operation, ensuring that monitoring occurs only within the designated time frame.
    - Please note that for this setting to function correctly, the Watcher's internal clock must be synchronized with your mobile device's system time. Inconsistencies between the two can lead to issues with the task flow.<br />

    By exploring and configuring these settings in the "Detail Config" section, you can customize your task to meet your specific needs. Take the time to review and adjust each setting carefully to ensure optimal performance and alignment with your monitoring objectives.

7. Once you have verified that everything is set up correctly and matches your expectations, click the **Run** button to initiate the task execution.

By following these steps, you can ensure that the Watcher has accurately understood your task command and that the execution aligns with your intended objectives. The confirmation process allows for a final review and the opportunity to make any necessary adjustments before deploying the task to the Watcher.

### Run task

After you have carefully reviewed and configured the task settings in the "Detail Config" section, you are ready to deploy the task to your Watcher device. To initiate the task execution, follow these steps:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/27.png" style={{width:800, height:'auto'}}/></div>

1. Click the "Run" button located on the task configuration card.

2. Upon clicking "Run," the configured task will be transmitted to the Watcher via the network.

3. The task deployment process may take some time, as it involves two main stages:

   - Task Reception: The Watcher needs to receive and process the task configuration data sent from the SenseCraft APP.

   - Model Download (if applicable): If the task requires the use of local AI services, the Watcher may need to download the necessary AI models to perform the task locally.

4. During the task deployment process, you can monitor the progress through the SenseCraft APP:

   - The status of the task card will change to indicate the current stage of deployment.

   - Keep an eye on the status updates to track the progress of the task reception and model download (if applicable).

5. Once the task deployment is complete, you will observe a change in the Watcher's behavior:

   - The Watcher will automatically display a monitoring expression or indicate that it is ready to start the task.

   - This change in the Watcher's demeanor signifies that the task execution has begun.

### View current tasks and check alarms

The SenseCraft APP provides a convenient way to monitor the progress and status of your running tasks, as well as review any triggered alarms and associated key frames.

- In this section, you will find information about the currently running task on your Watcher device.

- The current task will be represented by a small card, displaying the task name and the associated Watcher device.

- The card will indicate whether the task is currently in progress or not, providing a quick overview of the task's status.

When a task triggers an alarm based on the configured conditions, the SenseCraft APP will notify you through push notifications or in-app alerts.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/28.png" style={{width:250, height:'auto'}}/></div>

In the "Detect History" section, you will find a list of all the alarms triggered by your running tasks. Each alarm will be represented by a card or a list item, displaying information such as the task name, Watcher device, timestamp, and a brief description of the triggered condition. Tap on an alarm card to view more detailed information about the alarm, including the associated key frame images.

Key frame images are captured by the Watcher device at the moment the alarm was triggered, providing visual evidence of the detected scenario. You can review the key frame images to analyze the situation and take appropriate actions if necessary. The app may also provide options to acknowledge or dismiss the alarms, depending on your preferences and the severity of the situation.

### End of task

When you need to stop a currently running task on your Watcher device, you have two convenient options available:

Option 1: Ending the Task through the SenseCraft APP
1. Open the SenseCraft APP on your mobile device and navigate to the "Current Tasks" section.
2. Locate the task card representing the currently running task on your Watcher device and tap the "END" button.
3. The app will send a request to the Watcher device to stop the task, and the task card will update to reflect the task's terminated status.

Option 2: Ending the Task directly on the Watcher Device
1. Lightly tap the screen of the Watcher device or press the scroll wheel button to display the menu or options.
2. Select the "End Task" option, and the Watcher device will promptly terminate the task and return to its idle state.
3. The task card in the SenseCraft APP will automatically update to reflect the task's terminated status.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/29.png" style={{width:250, height:'auto'}}/></div><br />

Both methods provide a simple and intuitive way to stop the task execution when needed. Choose the method that is most convenient for you based on your current situation and proximity to the Watcher device.

## Sending Task by Speaking

The Watcher offers a convenient and intuitive way to send tasks using voice commands, thanks to its "Push to Talk" feature. This functionality is accessible from any screen or interface on the device, making it easy to interact with the Watcher without navigating through menus. Here's a step-by-step guide on how to use this feature:

1. Activate Push to Talk:

   - Locate the Wheel Button on the top-right corner of the Watcher.
   - Press and hold the Wheel Button to enter the voice input interface.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. Speak Your Command or Message:

   - While holding the Wheel Button, clearly speak your task or message to the Watcher.
   - You can assign tasks, such as "Tell me if the baby is crying" or "If the dog is stealing food, say stop copper".
   - Alternatively, you can engage in conversation by asking questions or making statements, like "Tell me a joke".

3. Release the Wheel Button:

   - Once you have finished speaking, release the Wheel Button.
   - The Watcher will process your voice input and determine whether it is a task assignment or a conversation.

4. Task Assignment:

   - If the Watcher recognizes your voice input as a task assignment, it will automatically break down your task into relevant components.
   - The Watcher will display cards on its screen, showing the **Object** (what to monitor), **Behavior** (what action to look for), **Notification** (how to alert you), **Time Range** (when to monitor), and **Frequency** (how often to monitor).
   - Review the displayed information to ensure it accurately represents your intended task.
   - If the details are correct, confirm the task, and the Watcher will begin executing it according to the specified parameters.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

Tips for Optimal Usage:

- Speak clearly and at a moderate pace to ensure accurate voice recognition.
- When speaking, please get as close to Watcher as possible, about **3 ~ 10cm** distance speaking recognition accuracy is best.
- Minimize background noise to improve the Watcher's ability to understand your voice commands.
- Be specific and concise when assigning tasks to help the Watcher accurately interpret your intentions.
- If the Watcher misinterprets your task or conversation, simply press and hold the Wheel Button again to provide clarification or corrections.

By leveraging the Push to Talk feature, you can effortlessly send tasks and engage in conversations with the Watcher, making your interaction with the device more natural and efficient.

:::note
If you encounter an error of **0x7002**, it means that the current Watcher's network status is not good and the audio service call failed, please change the network or location and retry again.
:::

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


