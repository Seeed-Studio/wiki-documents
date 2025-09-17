---
description: A603 JetsonキャリアボードでIMX477カメラを使用する
title: A603 JetsonキャリアボードでIMX477カメラを使用する
keywords:
- reComputer
- IMX477 Camera
- A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board
last_update:
  date: 05/22/2024
  author: Youjiang
---

## Jetpack 5.1.2

IMX477カメラを使用する必要がある場合は、[このドライバーパッケージ](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERJdh3pvdYZOqJWugsnMJKEBMkGXtU8ngY03kJeLDWSkLw?e=TuLWmL)をダウンロードし、[このチュートリアル](https://wiki.seeedstudio.com/reComputer_A603_Flash_System/)に従ってJetpackシステムを再フラッシュしてください。

:::caution
[ **JP5.1.2** ](https://developer.nvidia.com/embedded/jetson-linux-r3541)用のBSPを使用する必要があることにご注意ください。
:::

## Jetpack 6.0

IMX477カメラを使用する必要がある場合は、[このドライバーパッケージ](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ETIsoZ25I69KsSiA6TweK4UBVfo7gBrvPyKX9pJ68J8oIA?e=a9uumE)をダウンロードし、[このチュートリアル](https://wiki.seeedstudio.com/reComputer_A603_Flash_System/)に従ってJetpackシステムを再フラッシュしてください。

:::caution
[ **JP6.0** ](https://developer.nvidia.com/embedded/jetson-linux-r363)用のBSPを使用する必要があることにご注意ください。
:::

システムのフラッシュが完了したら、CSIカメラを接続し、以下のコマンドを使用してカメラを起動してください：

```bash
nvgstcapture-1.0 --sensor-id=0
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera.png" /></div>


## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>