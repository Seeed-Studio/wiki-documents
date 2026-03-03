---
description: XIAO nRF52840(Sense)-FAQ
title: XIAO nRF52840 (Sense)をバッテリー充電に使用する際の注意事項は何ですか？
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/battery_charging_considerations
last_update:
  date: 6/28/2023
  author: cheng.tang
---

<!-- ### Q3: What are the considerations when using XIAO nRF52840 (Sense) for battery charging? -->

P0.14 (D14)が3.3Vの高レベルでADC機能をオフにすると、P0.31は3.6Vの入力電圧制限に達します。P0.31ピンを焼損するリスクがあります。

現在この問題に対して、バッテリー充電中はP0.14 (D14)のADC機能をオフにしない、またはP0.14 (D14)を高レベルに設定しないことをユーザーに推奨しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>