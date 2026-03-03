---
description: XIAO nRF52840(Sense)-常见问题解答
title: 使用 XIAO nRF52840 (Sense) 进行电池充电时需要注意哪些事项？
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/battery_charging_considerations
last_update:
  date: 6/28/2023
  author: cheng.tang
---

<!-- ### Q3: 使用 XIAO nRF52840 (Sense) 进行电池充电时需要注意哪些事项？ -->

当 P0.14 (D14) 在高电平 3.3V 时关闭 ADC 功能时，P0.31 的输入电压限制为 3.6V。这存在烧毁 P0.31 引脚的风险。

针对该问题，目前我们建议用户在电池充电期间不要关闭 P0.14 (D14) 的 ADC 功能，也不要将 P0.14 (D14) 设置为高电平。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>