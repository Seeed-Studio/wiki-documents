---
description: XIAO nRF52840(Sense)-FAQ
title: What are the considerations when using XIAO nRF52840 (Sense) for battery charging?
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /battery_charging_considerations
last_update:
  date: 6/28/2023
  author: cheng.tang
---

<!-- ### Q3: What are the considerations when using XIAO nRF52840 (Sense) for battery charging? -->

When P0.14 (D14) turns off the ADC function at a high level of 3.3V, P0.31 will be at the input voltage limit of 3.6V. There is a risk of burning out the P0.31 pin.

Currently for this issue, we recommend that users do not turn off the ADC function of P0.14 (D14) or set P0.14 (D14) to high during battery charging.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>
