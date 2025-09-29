---
description: Grove Vision AI V2 の使い方を始めましょう。
title: 外部カメラ対応
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/Grove-vision-ai-v2-camera-supported
last_update:
  date: 05/15/2025
  author: Citric
---


# 外部カメラ対応 概要

Grove Vision AI V2 は標準的な CSI インターフェースを備えており、Raspberry Pi カメラと互換性があります。接続する際は、ピン列の方向に注意し、逆向きに差し込まないようにしてください。

## 強く推奨

Grove Vision AI V2 の可能性を最大限に引き出すために、別途 CSI カメラを用意することをお勧めします。特に [**OV5647-62 FOV Camera Module for Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html) を推奨します。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110127-ov5647-69.1-fov-camera-module-for-raspberry-pi-3b_4b-font.jpg" style={{width:300, height:'auto'}}/></div>

## さらなるサポート

現在、OV5642 シリーズのカメラ用ドライバが用意されているため、Grove Vision AI V2 は Raspberry Pi OV5647 カメラ全シリーズをサポートしています。例えば、[OV5647-67](https://www.seeedstudio.com/OV5647-75-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5483.html) や [OV5647-160](https://www.seeedstudio.com/OV5647-160-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5485.html) などが以下に示されています：

<div style={{textAlign:'center'}}> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110129-ov5647-75-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110130-ov5647-160-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> </div>

## その他の CSI カメラ

その他の CSI カメラも理論上サポートされていますが、一部のカメラにはドライバが用意されていない、またはカラープロセッシングユニットが内蔵されていない場合があるため、色が緑一色になったり、フルカラーが失われる可能性があります。これにより認識精度に影響が出る場合があります。

- [Raspberry Pi Camera Module V1](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html)
- [Raspberry Pi Camera Module V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
- [IMX390 2.12MP 118°(H) FOV 4-lane MIPI CSI Camera](https://www.seeedstudio.com/IMX390-2-12MP-118-H-FOV-4-lane-MIPI-CSI-Camera-p-5708.html)
- [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

<!-- 'Before', it's d type Device, but will make it work in the future -->
Grove Vision AI V2 は、2024年2月21日以降に購入したユーザー向けに Raspberry Pi カメラをサポートしています。ただし、この日付以前に購入したユーザーは、現在のところ画像入力に対応したこれらの特定のカメラモデルを使用することができません。チームは、早期購入者にもこの機能を拡張するための解決策に積極的に取り組んでいます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/cameraList.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[PDF]** [データシート](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>