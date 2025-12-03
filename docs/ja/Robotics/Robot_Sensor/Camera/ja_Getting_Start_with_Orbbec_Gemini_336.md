---
description: Orbbec Gemini 336の使用方法を説明します。
title: Orbbec Gemini336 3Dカメラ
keywords:
- Jetson
- reComputer Robotics
- Computer Vision
- Autonomous Driving
- Industrial Robot
- Orbbec
- AI Camera
- Stereo Camera
- Depth Camera
- Visual SLAM
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp
slug: /ja/orbbec_gemini336
last_update:
  date: 2025-08-22
  author: Zibo
---

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>


Gemini 336は、Gemini 330シリーズの新しい製品です。Gemini 335の優れた深度性能をベースに、可視光をフィルタリングしてアクティブ赤外線イメージングを強化しています。屋内の反射エリア、高ダイナミックレンジ（HDR）シナリオの暗い領域、屋外の強い光条件での深度イメージング品質に特化して最適化されており、ユーザーに安定した高品質の深度データを提供します。


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 特徴

- **アクティブステレオIR** 深度出力にアクティブステレオIR技術を採用し、様々な照明条件下で正確で信頼性の高いデータ出力を実現
- **広い検知範囲** 0.1mから20mまでの高品質な深度データ出力を提供
- **広いFOV** 水平90度、垂直65度の広い視野データを提供
- **マルチカメラ同期** 深度画像とRGB画像の両方でマルチカメラ同期をサポート
- **USB接続** 電源と接続に単一のUSB 3.0 Type-Cケーブルを使用

## 仕様

### Gemini 336仕様表（英語）

| Category       | Specification         | Details                                                                 |
|----------------|-----------------------|-------------------------------------------------------------------------|
| Basic Parameters | Operating Environment | Full scene: Indoor & Outdoor                                            |
|                | Max Working Range [1] | 0.10 - 20m+                                                             |
|                | Recommended Range     | 0.26 - 3m                                                               |
|                | IMU                   | Supported                                                               |
|                | UVC Camera            | Supported                                                               |
|                | SDK                   | Orbbec SDK                                                              |
| Depth Parameters | Depth Technology      | Stereo Vision                                                           |
|                | Baseline              | 50 mm                                                                    |
|                | Spatial Relative Accuracy [2] | ≤1.5% (1280 × 800 @ 2m & 90% × 90% ROI)                         |
|                | Field of View (FoV)   | 90° × 65° @ 2m (1280 × 800)                                             |
|                | Resolution@Frame Rate | Up to: 1280 × 800 @ 30fps                                               |
|                | Shutter Type          | Global Shutter                                                          |
| Color Parameters | Field of View (FoV)   | 86° × 55°                                                                |
|                | Resolution@Frame Rate | Up to: 1920 × 1080 @ 30fps                                              |
|                | Image Format          | YUYV & MJPEG                                                            |
|                | Shutter Type          | Rolling Shutter                                                         |
| Electrical Parameters | Power Supply Recommendation | DC 5V & ≥1.5A                                                     |
|                | Average Power Consumption | ＜3 W                                                                 |
|                | Filter Cover          | Yes, IR Pass                                                           |
| Physical Parameters | Operating Temperature | -10 - 45℃                                                             |
|                | IP Rating             | IP5X                                                                    |
|                | Dimensions            | 90 mm × 25 mm × 30.7 mm                                                 |
|                | Weight                | 99g                                                                     |
|                | Data & Power Port     | USB 3.0 & USB 2.0 Type-C                                                |
|                | Multi-device Sync Port | 8-pin Interface                                                       |
|                | Mounting Method       | Bottom Mount: 1 × 1/4 - 20unc Threaded Hole Back Mount: 2 × M3 Threaded Holes |


## ハードウェア概要
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview1.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview2.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview3.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview4.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview5.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview6.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew7.png" />
</div>

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew9.png" />
</div>

## Gemini 330シリーズクイックスタートガイド
- Orbbecカメラの接続
 ① 三脚ヘッドを三脚に組み立て、下記のステップ1に示すように、組み立てた三脚にカメラを固定します。

  ② 下記のステップ2に示すように、USB-CからUSB-Aケーブルを使用してカメラのType-Cポートに接続します。

  ③ 下記のステップ3に示すように、同じUSB-CからUSB-Aケーブルを使用してUSB-Aコネクタをホストに接続します。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Orbbec Viewerの取得

お使いのシステムとバージョンに対応する[Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/)を選択してダウンロードしてください。

- Orbbec Viewerの起動

1. Orbbec Viewerを起動した後、以下の画像に示すように、ツールが3Dカメラを認識していることを確認してください。
【備考】カメラが認識されない場合は、カメラとホストが正しく接続されていることを確認してください。USBケーブルを一度抜いて再接続してみてください。それでも認識されない場合は、USBケーブルの交換やホストコンピュータの電源供給が必要な仕様を満たしているかを確認してください。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. ツール上部の'Depth'ボタンを切り替えて、深度ストリームを開始してプレビューします。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. ツール上部の'Color'ボタンを切り替えて、カラーストリームを開始してプレビューします。カラーストリームと深度ストリームが並んで表示されます。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. ツール上部の'IR Left'と'IR Right'ボタンを切り替えて、IRストリームを開始してプレビューします。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. ツール上部の'IMU'ボタンを切り替えて、IMUストリームを開始してプレビューします。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. 各ウィンドウの上部にあるボタンを切り替えて、メタデータ情報を表示します。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. ツール上部の'PointCloud'ボタンを切り替えて、3Dポイントクラウドを開始してプレビューします。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. 左側の'Image View'メニューの下にある'Display'ボタンを切り替えて、D2C（深度からカラーへの位置合わせ）ストリームを開始してプレビューします。3DポイントクラウドとD2Cストリームが並んで表示されます。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>


## リソース

- [Orbbec公式ガイド](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/About%20Orbbec%20Gemini%20330%20Series)
- [データシート](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/Gemini%20330%20Series%20Datasheet%20(Overall))
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/ja/orbbec_depth_camera_on_ros/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
