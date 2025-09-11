---
description: This article describes Watcher's charging plan on using SenseCraft AI.
title: Price and Benefits
image: https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler_1.webp
slug: /watcher_price
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
---

# SenseCraft AI for Watcher Plans and Benefits

At Watcher, we believe in providing developers with a clear and transparent pricing structure for integrating artificial intelligence into their projects. We understand that every developer has unique requirements, which is why we offer a range of pricing plans designed to cater to various needs and budgets. To help you make an informed decision, we've outlined the key aspects of our pricing model and the specific features included in each plan.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler.png" style={{width:1000, height:'auto'}}/></div>

## Our Pricing Plans

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
      <th>On-Premise</th>
   <th>SenseCraft Standard</th>
      <th>SenseCraft Pro</th>
  </tr>
  <tr>
   <th>Data Retention</th>
   <td align="center">Save by user</td>
   <td align="center">3 Months</td>
   <td align="center">3 Months</td>
  </tr>
  <tr>
   <th>Data API</th>
   <td align="center">Local HTTP API</td>
   <td align="center">MQTT/HTTP API</td>
   <td align="center">MQTT/HTTP API</td>
  </tr>
  <tr>
   <th>Task Analysis</th>
   <td align="center">Unlimited</td>
   <td align="center">Unlimited</td>
   <td align="center">Unlimited</td>
  </tr>
  <tr>
   <th>Image Analysis</th>
   <td align="center">Unlimited</td>
   <td align="center">15 Minutes/Request</td>
   <td align="center">20000 Requests</td>
  </tr>
  <tr>
   <th>Chat with LLM</th>
   <td align="center">Unlimited</td>
   <td align="center">200 Requests/Month</td>
   <td align="center">1000 Requests</td>
  </tr>
  <tr>
   <th>TinyML Model and Model Training</th>
   <td align="center">Unlimited</td>
   <td align="center">Unlimited</td>
   <td align="center">Unlimited</td>
  </tr>
    <tr>
   <th>Price</th>
   <td align="center">Free</td>
   <td align="center">Free</td>
   <td align="center">One free trial & 6.9 USD Plan</td>
  </tr>
 </table>
</div>

:::caution

1. SenseCraft Pro's paid plans are tied to the EUI of each device. This means that if you have five devices that all want to use SenseCraft Pro, you will need to pay for them separately.

2. SenseCraft Pro's billing service is based on the number of Requests. When you purchase the service, you will get the number of Requests provided by the service, in which there is no expiry date.

3. SenseCraft Pro will automatically activate the trial service when your device is tethered to the SenseCraft APP.

4. SenseCraft Pro activates the trial and accounts for all the Requests in the form at once, and then automatically switches to SenseCraft Standard when you're done using it.

:::

At Watcher, we believe in empowering developers with the flexibility and scalability they need to succeed with AI integration. Our pricing plans are designed to accommodate a wide range of needs, from casual experimentation to large-scale deployment. Choose the plan that best aligns with your AI usage intensity and project requirements, and let Watcher help you unlock the full potential of SenseCraft AI. Get started today and experience the power of AI on your own terms!

## Understanding Our Pricing Model

### Data Storage

All plans come with a generous **3-month** data storage, which includes the storage of alarm images, timestamps, and alarm counts.

### Task Analysis

Task Analysis refers to Watcher's ability to understand and interpret user-assigned tasks, breaking them down into smaller, actionable components. This includes determining whether a task can be executed using small models, identifying the specific models to be used, recognizing the behaviors to be detected, and defining the actions to be taken. As the foundation of Watcher's functionality, we strive to keep Task Analysis free of charge across all plans.

### Image Analysis

Image Analysis involves the advanced examination of images captured by Watcher, enabling the identification of objects, activities, and contexts within the images. This feature requires the use of large models and is subject to usage fees. A request is counted when your task requires the use of a large model for image analysis.

- If you're using the **[Pure Cloud-based LLM Service](https://wiki.seeedstudio.com/getting_started_with_watcher_task/#pure-cloud-based-llm-service)**, requests are counted based on your set **Capture Frequency**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

- For the **[Local AI + Cloud-based LLM Service](https://wiki.seeedstudio.com/getting_started_with_watcher_task/#local-ai--cloud-based-llm-service)**, a request is counted when the large model is invoked for image recognition after the small model triggers a detection. Please note that the minimum interval between requests will not be shorter than your configured **Capture Frequency**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

Image analysis is also one of the very important capabilities of Watcher. So when you don't have a subscription to SenseCraft Pro, we also guarantee at least a 15-minute image analysis service for you to use.

### Chat with Large Language Model

Engaging in conversational interactions with our powerful Large Language Model is a premium feature that incurs usage fees. When SenseCraft determines that your conversation with Watcher is a back-and-forth exchange and Watcher generates a response, it is counted as a single request.

Once this count runs out, it is not possible to chat with Watcher.

### Model Repository, Training, and Upload

Access to our extensive [Model Repository](https://sensecraft.seeed.cc/ai/#/model?redirect=%2Fdevice), as well as the ability to train and upload your own models, is provided free of charge across all plans.

## How to subscribe?

If you need to subscribe to SenseCraft Pro, then you need to do it inside the SenseCraft APP. The first step should be to [bind your SenseCAP Watcher](https://wiki.seeedstudio.com/getting_started_with_watcher/#step-3-device-binding) on the APP. Currently, SenseCraft Pro subscription is only available for SenseCAP Watcher users.

Go to SenseCAP Watcher's chat screen, click on the Settings gear button in the top right corner, and then near the bottom, there will be an option for **Subscription**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription.png" style={{width:250, height:'auto'}}/></div>

Here you can see the number of Requests left for your current subscription service. And you can complete your subscription here. Currently we offer three different prices for subscription services, please choose different plans according to your actual usage.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page1.png" style={{width:250, height:'auto'}}/></div>

Once you have confirmed the plan you want, please agree to the service agreement to proceed to the payment screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page2.png" style={{width:250, height:'auto'}}/></div>

Currently SenseCraft APP supports payment using Paypal. Once the payment is successful, you will see your purchased Requests updated on the Subscription's page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page3.png" style={{width:250, height:'auto'}}/></div>

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
