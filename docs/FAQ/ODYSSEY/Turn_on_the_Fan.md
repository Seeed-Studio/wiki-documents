---
description: Fan is not turning on
title: Fan is not turning on
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /Turn_on_the_Fan
last_update:
  date: 2023.6.25   
  author: cheng.tang
---

ODYSSEY - X86J41x5 fan is controlled by Embedded controller (EC) which role as initialize the device before system is up. The temperature in BIOS is detected by EC and the temperature sensor place close to the intel CPU which do not have the sensor pin. In another word, the temperature is not the CPU's direct value, maybe 5 degrees centigrade error. What you saw the temperature value in system is feedback by CPU internal, temperature in BIOS screen feedback by EC, fan run or stop according the EC value.

- EC detect value (BIOS screen) and fan speed table like this:

**Disable fan state**: stop

**Normal fan state**: less than 40°C–stop，45-50°C–50%，50-60℃–60%，above 60℃–80%

**Positive fan state**: less than 40°C–stop，45-50°C–70%，50-60℃–80%，above 60℃–100%
