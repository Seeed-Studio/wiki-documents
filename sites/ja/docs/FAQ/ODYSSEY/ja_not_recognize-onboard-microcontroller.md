---
description: ODYSSEY-FAQ
title: Arduino IDEがODYSSEY - X86J4105/ X86J4125のオンボードマイクロコントローラーを認識しない
#keywords:
slug: /ja/not_recognize-onboard-microcontroller
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 6/26/2023
  author: Seraphina
---
 

Arduino IDEがODYSSEY - X86J4105/ X86J4125のオンボードマイクロコントローラーを認識しない場合は、4ピンヘッダー（SAMD21の28ピンの左側）の**RSTピン**と**GNDピン**の間にジャンパーワイヤーを追加して、AMSAMDG21をリセットしてください。

<!-- put picture -->

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/oydsseyx86J4105_pinout1.png)