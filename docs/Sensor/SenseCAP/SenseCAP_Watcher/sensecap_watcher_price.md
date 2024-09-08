---
description: This article describes Watcher's charging plan on using SenseCraft AI.
title: Price and Benefits
image: https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler.png
slug: /watcher_price
sidebar_position: 2
last_update:
  date: 08/19/2024
  author: Citric
---

# SenseCraft AI for Watcher Plans and Benefits

At Watcher, we believe in providing developers with a clear and transparent pricing structure for integrating artificial intelligence into their projects. We understand that every developer has unique requirements, which is why we offer a range of pricing plans designed to cater to various needs and budgets. To help you make an informed decision, we've outlined the key aspects of our pricing model and the specific features included in each plan.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler.png" style={{width:1000, height:'auto'}}/></div>

**SenseCAP Watcher will be live on Kickstarter on September 12, proudly featuring the official 'Project We Love' badge! Subscribe now to stay informed～**

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.kickstarter.com/projects/seeed/sensecap-watcher-open-source-ai-assistant-for-smarter-spaces?ref=aulzfo">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now</font></span></strong>
    </a>
</div><br />

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

## Our Pricing Plans

### Free Tier

:::tip
When you receive SenseCAP Watcher and sign up for the SenseCraft APP, you will get a one month free trial of SenseCraft Pro. During this month, you can use all the services mentioned in the Subscription.
:::

Perfect for developers who want to explore and experiment with AI capabilities, test out basic functionalities, and get a feel for the Watcher service before committing to a paid plan. With the Free Tier, you get:

- **3 months data retention**
- **Unlimited task analysis**
- **Minimum interval of image analysis - 15 mins**
- **200 requests/month for chat with LLM (Large Language Model)**
- **Unlimited Model Training and Export**

### On-Premise

Designed for developers who prefer to have full control over their AI deployment, maintain data privacy, and integrate AI capabilities into their own infrastructure without usage limitations. The On-Premise plan offers:

- **Unlimited data retention**
- **Unlimited task analysis**
- **Unlimited image analysis**
- **Unlimited LLM usage**
- **Unlimited Model Training and Export**

### Monthly Subscription to SenseCraft Pro

:::tip
When you receive SenseCAP Watcher and sign up for the SenseCraft APP, you will get a one month free trial of SenseCraft Pro. During this month, you can use all the services mentioned in the Subscription.
:::

Ideal for developers who have ongoing AI integration needs, require a steady stream of API calls, and prefer the flexibility of a monthly subscription. At just **$6.90** per month ($82.8 billed yearly), you get:

- **3 months data retention**
- **Unlimited task analysis**
- **Minimum interval of image analysis - 30s, up to 20,000 requests/month**
- **1000 requests/month for chat with LLM**
- **Unlimited Model Training and Export**

### Semi-Annual Subscription to SenseCraft Pro

:::tip
When you receive SenseCAP Watcher and sign up for the SenseCraft APP, you will get a one month free trial of SenseCraft Pro. During this month, you can use all the services mentioned in the Subscription.
:::

Perfect for developers who have consistent AI usage requirements over an extended period, want to secure a larger API call allowance, and enjoy the benefits of a longer-term commitment. At **$6.65** per month ($79.8 billed yearly), you receive:

- **3 months data retention**
- **Unlimited task analysis**
- **Minimum interval of image analysis - 30s, up to 20,000 requests/month**
- **1000 requests/month for chat with LLM**
- **Unlimited Model Training and Export**

### Annual Subscription to SenseCraft Pro

:::tip
When you receive SenseCAP Watcher and sign up for the SenseCraft APP, you will get a one month free trial of SenseCraft Pro. During this month, you can use all the services mentioned in the Subscription.
:::

Best suited for developers with intensive AI integration needs, large-scale projects, and those seeking the best value for their API usage over a year-long period. At just **$5.57** per month ($69 billed yearly), you get:

- **3 months data retention**
- **Unlimited task analysis**
- **Minimum interval of image analysis - 30s, up to 20,000 requests/month**
- **1000 requests/month for chat with LLM**
- **Unlimited Model Training and Export**


At Watcher, we believe in empowering developers with the flexibility and scalability they need to succeed with AI integration. Our pricing plans are designed to accommodate a wide range of needs, from casual experimentation to large-scale deployment. Choose the plan that best aligns with your AI usage intensity and project requirements, and let Watcher help you unlock the full potential of SenseCraft AI. Get started today and experience the power of AI on your own terms!

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

