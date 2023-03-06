---
description: ReSpeaker Core V2 & Wio Link
title: ReSpeaker Core V2 & Wio Link
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Core_V2_&_Wio_Link
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

Here is the tutorial about how to use the ReSpeaker Core V2 to control [Wio Link](https://wiki.seeedstudio.com/Wio_Link/) through [IFTTT](https://ifttt.com/).

## 1. Setup ReSpeaker Core v2.0

Follow ReSpeaker Core v2.0 [Out of Box Demo](https://wiki.seeedstudio.com/ReSpeaker_Core_v2.0/#out-of-box-demo) to setup the respeaker core and login into alexa with username password. 

## 2. Setup Wio Link through Wio APP

Follow [Wio Link Get Starting](https://wiki.seeedstudio.com/Wio_Link/#get-started) to connect a LED on the D0 port and setup Wio APP.

## 3. Setup IFTTT

- Step 1. Sign up a [IFTTT account](https://ifttt.com/join).
- Step 2. Select **My Applets**
- Step 3. Select **New Applet**
- Step 4. Click  **+this**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/this.png)

- Step 5. Select **amazon alexa** and login in the same amazon account as ReSpeaker Core v2.0. 

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/alexa.png)

- Step 6. Select  **Say a specific phrase**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/say_a_specific_phase.png)

- Step 7. Enter lower-case characters keyword **on** and then click **Create Trigger**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/key_word.png)

- Step 8. Click **+that**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/that.png)

- Step 9. Choose **Seeed Wio** as action service.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/wio.png)

- Step 10. Select **on, off or trigger Grove**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/choose_action.png)

- Step 11. Select correct online Grove module and **on** as **do**.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/on.png)

- Step 12. Follow Step 3 ~ Step 11 to add the **off** function. 

## 4. Have Fun with the Alexa

Let say "Alexa trigger on" and we can see the Grove-LED is on and LED is off when we say "Alexa trigger off". We also can use the other functions on Wio Link, such as LED string and so on. 

:::note
    We can also can use the google assitant to work with Wio Link.
:::

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
