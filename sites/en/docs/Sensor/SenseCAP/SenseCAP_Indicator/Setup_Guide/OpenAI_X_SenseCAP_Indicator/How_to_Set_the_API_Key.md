---
description: How To Set The API Key
title: How To Set The API Key
keywords:
- Get Started with SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key
sidebar_position: 4
last_update:
  date: 5/31/2023
  author: Thomas
---

# **How to Set the API Key**

:::caution Geo-blocking
**Note**: OpenAI API services may not be available in certain countries such as China, Iran, and Russia. Please refer to [the list of supported countries and territories](https://platform.openai.com/docs/supported-countries) for more information.

Ensure that your network environment allows for connectivity to the OpenAI API.
:::

### Get a API key

- **Step 1:** Log in https://platform.openai.com/signup
  If you don't have an account already, you'll need to sign up for one.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/login.png"/></div>

- **Step 2:** Visit your [OpenAI key page](https://platform.openai.com/account/api-keys) or click the menu item "View API keys"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/key1.png"/></div>

- **Step 3:** Create a new key by clicking the "Create new secret key" button. See the image for reference.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/newkey.png"/></div>

> **Rate limits:**
> OpenAI enforces rate limits on the requests you can make to the API. These are applied over requests-per-minute, tokens-per-minute, or in the case of image models, images-per-minute.
>
> Learn more in the [rate limits](https://platform.openai.com/docs/guides/rate-limits/overview) documentation, or reference the [default rate limits](https://platform.openai.com/docs/guides/rate-limits/what-are-the-rate-limits-for-our-api) for your models.

### Set a key

- **Step 4:** Connect to the Indicator via **serial port** (Here, Using the serial monitor tool provided by Arduino IDE).

Select the board and port.

- **Board**: Seeed INDICATOR RP2040
- **Port**: usbserial port

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/chooseboard.png"/></div>

- **Step 5:** Open the port monitor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/monitor.png"/></div>

- **Step 6:** Send the following command to the device to set the APIKey:

```sh
openai_api -k {sk-your apikey}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setkey.png"/></div>

You will see the log shows: "`openai_api_key read successful`", then you are all set. Enjoy your AI journey now!

# **Tech Support**
**Need help with your SenseCAP Indicator? We're here to assist you!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

