---
description: ODYSSEY-FAQ
title: Arduino IDE doesn't recognize the onboard microcontroller on ODYSSEY - X86J4105/ X86J4125
slug: /not_recognize-onboard-microcontroller
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 6/26/2023
  author: Seraphina
createdAt: '2023-06-26'
updatedAt: '2023-07-06'
url: https://wiki.seeedstudio.com/not_recognize-onboard-microcontroller/
---
 

If your Arduino IDE doesn't recognize the onboard microcontroller on ODYSSEY - X86J4105/ X86J4125, please add a jumper wire between **RST Pin** and **GND Pin** on the 4-Pin header (to the left of SAMD21's 28 pins) to reset the AMSAMDG21.

<!-- put picture -->

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/oydsseyx86J4105_pinout1.png)
