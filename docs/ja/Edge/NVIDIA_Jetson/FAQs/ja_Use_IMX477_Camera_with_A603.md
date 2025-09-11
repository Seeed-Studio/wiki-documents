---
description: IMX477カメラをA603 Jetsonキャリアボードで使用する
title: IMX477カメラをA603 Jetsonキャリアボードで使用する
keywords:
- reComputer
- IMX477カメラ
- A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Jetpack 5.1.2

IMX477カメラを使用する場合は、[このドライバーパッケージ](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERJdh3pvdYZOqJWugsnMJKEBMkGXtU8ngY03kJeLDWSkLw?e=TuLWmL)をダウンロードし、[このチュートリアル](https://wiki.seeedstudio.com/ja/reComputer_A603_Flash_System/)に従ってJetpackシステムを再フラッシュしてください。

:::caution
[ **JP5.1.2** ](https://developer.nvidia.com/embedded/jetson-linux-r3541)用のBSPを使用する必要があることに注意してください。
:::

## Jetpack 6.0

IMX477カメラを使用する場合は、[このドライバーパッケージ](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ETIsoZ25I69KsSiA6TweK4UBVfo7gBrvPyKX9pJ68J8oIA?e=a9uumE)をダウンロードし、[このチュートリアル](https://wiki.seeedstudio.com/ja/reComputer_A603_Flash_System/)に従ってJetpackシステムを再フラッシュしてください。

:::caution
[ **JP6.0** ](https://developer.nvidia.com/embedded/jetson-linux-r363)用のBSPを使用する必要があることに注意してください。
:::

システムのフラッシュが完了したら、CSIカメラを接続し、以下のコマンドを使用してカメラを起動してください：

```bash
nvgstcapture-1.0 --sensor-id=0
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera.png" /></div>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>