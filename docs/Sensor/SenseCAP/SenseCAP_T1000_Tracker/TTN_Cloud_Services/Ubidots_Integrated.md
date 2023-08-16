---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated
title: Ubidots Integrated
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Ubidots
last_update:
  date: 8/16/2023
  author: Jessie
---


[Ubidots](https://ubidots.com/?_gl=1%2a89g1t2%2a_ga%2aMzUzMzM3MDY5LjE2NjE5MzcyMTI.%2a_ga_VEME7QQ5EZ%2aMTY2MzY0Mzc4NS44LjEuMTY2MzY0NTI3MC4wLjAuMA..) is a low-code IoT application development platform that enabled rapidly assembling and launching IoT applications without having to write code or hire a software development team. Nowadays, over 40,000+ applications already connect the dots with Ubidots. 

To meet the growing need for building IoT applications, we’ve been cooperating with Ubidots and supporting the community to add [SenseCAP T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig) easily to Ubidots through The Things Network.  


<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/09/%E5%8D%9A%E5%AE%A2%E6%8F%92%E5%9B%BE.jpg" alt="pir" width={800} height="auto" /></p>

Before starting the setup, please check [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) to connect your SenseCAP T1000 Tracker to TTS first.


## Configure Ubidots

To get started, create an account with [Ubidots](https://stem.ubidots.com/accounts/signin/). 

Log in to your Ubidots account and find the Devices tab in the upper part of your dashboard. In its drop-down list, choose Plugins.



### Ubidots Plugins

Click on the '+' or on the 'Create Data Plugin' button to create a new plugin.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/plugins.png" alt="pir" width={800} height="auto" /></p>


When you are presented with available plugins, select The Things Stack plugin.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/addtts.png" alt="pir" width={800} height="auto" /></p>


Next, you need to select a Ubidots token. You can use the Default token, also can create a new token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/default_token.png" alt="pir" width={800} height="auto" /></p>


To create a new token, first click on your avatar in the upper right corner and select 'API Credentials'. Then select 'More' below the Default token and add a new token within the API Credentials page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_toekn.png" alt="pir" width={800} height="auto" /></p>



Select '>' to continue and then hit the checkmark to finish.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/name-description.png" alt="pir" width={800} height="auto" /></p>







## Configure The Things Stack

When you have prepared the setup on Ubidots, then you need to create a Webhook integration on The Things Stack by using the Ubidots Webhook template.


On The Things Stack, navigate to 'Integrations' → 'Webhooks' and choose the Ubidots Webhook template.
Name your integration by filling in the Webhook ID.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-ubidots.png" alt="pir" width={800} height="auto" /></p>



Paste the Plugin ID and Ubidots token values from Ubidots.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ubi_web.png" alt="pir" width={800} height="auto" /></p>


:::info
To find the plugin ID, click on your newly created plugin and navigate to the Decoder tab on the left. The plugin ID is available as part of the HTTPs Endpoint URL (as highlighted on the image below).
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ids.png" alt="pir" width={800} height="auto" /></p>



## Monitor Your Data

After you have completed the integration, navigate to 'Devices' menu. You will see your end device appearing in the end devices list as soon as it sends an uplink message.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check_data_ubi.png" alt="pir" width={800} height="auto" /></p>
