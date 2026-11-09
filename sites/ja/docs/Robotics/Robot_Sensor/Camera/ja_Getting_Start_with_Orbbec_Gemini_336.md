---
description: "Orbbec Gemini 336 3D カメラの始め方：セットアップ、SDK インストール、ロボットビジョン用途向けの深度・カラー配信。"
title: Orbbec Gemini336 3D カメラ
keywords:
  - Jetson
  - reComputer Robotics
  - コンピュータビジョン
  - 自動運転
  - 産業用ロボット
  - Orbbec
  - AI カメラ
  - ステレオカメラ
  - 深度カメラ
  - Visual SLAM
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp
slug: /orbbec_gemini336
last_update:
  date: 2025-08-22
  author: Zibo
createdAt: '2025-12-01'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/ja/orbbec_gemini336/
---

<div align="center">
    <img alt="Orbbec Gemini 336 3D camera, product photo" width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>


Gemini 336 は Gemini 330 シリーズに新たに加わったモデルです。Gemini 335 の優れた深度性能を基盤に、可視光をフィルタリングすることでアクティブ赤外線イメージングを強化しています。屋内の反射面、HDR シーンにおける暗部、屋外の強い光環境において深度画像品質を最適化しており、安定した高品質の深度データをユーザーに提供します。


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-336-3D-Camera-3D-p-6662.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 特長

- **アクティブステレオ IR** アクティブステレオ IR 技術を用いて深度を出力し、さまざまな照明条件下で正確かつ信頼性の高いデータ出力を実現します
- **広い検知範囲** 0.1m から 20m までの範囲で高品質な深度データを出力します
- **広い FOV** 水平 90 度、垂直 65 度の広い視野角データを提供します
- **マルチカメラ同期** 深度画像および RGB 画像の両方でマルチカメラ同期をサポートします
- **USB 接続** 電源供給と接続に単一の USB 3.0 Type-C ケーブルを使用します

## 仕様

### Gemini 336 仕様表（英語）

| カテゴリ       | 仕様                   | 詳細                                                                 |
|----------------|-----------------------|-------------------------------------------------------------------------|
| 基本パラメータ | 動作環境              | 全シーン：屋内 & 屋外                                            |
|                | 最大動作距離 [1]      | 0.10 - 20m+                                                             |
|                | 推奨距離              | 0.26 - 3m                                                               |
|                | IMU                   | 対応                                                               |
|                | UVC カメラ            | 対応                                                               |
|                | SDK                   | Orbbec SDK                                                              |
| 深度パラメータ | 深度技術              | ステレオビジョン                                                           |
|                | ベースライン          | 50 mm                                                                    |
|                | 空間相対精度 [2]      | ≤1.5% (1280 × 800 @ 2m & 90% × 90% ROI)                         |
|                | 視野角 (FoV)          | 90° × 65° @ 2m (1280 × 800)                                             |
|                | 解像度@フレームレート | 最大：1280 × 800 @ 30fps                                               |
|                | シャッター方式        | グローバルシャッター                                                          |
| カラーパラメータ | 視野角 (FoV)          | 86° × 55°                                                                |
|                | 解像度@フレームレート | 最大：1920 × 1080 @ 30fps                                              |
|                | 画像フォーマット      | YUYV & MJPEG                                                            |
|                | シャッター方式        | ローリングシャッター                                                         |
| 電気的パラメータ | 電源推奨              | DC 5V & ≥1.5A                                                     |
|                | 平均消費電力          | ＜3 W                                                                 |
|                | フィルターカバー      | あり、IR パス                                                           |
| 物理パラメータ | 動作温度              | -10 - 45℃                                                             |
|                | IP 等級               | IP5X                                                                    |
|                | 寸法                  | 90 mm × 25 mm × 30.7 mm                                                 |
|                | 重量                  | 99g                                                                     |
|                | データ & 電源ポート   | USB 3.0 & USB 2.0 Type-C                                                |
|                | マルチデバイス同期ポート | 8 ピンインターフェース                                                       |
|                | 取り付け方法          | 底面マウント：1 × 1/4 - 20unc ねじ穴 背面マウント：2 × M3 ねじ穴 |


## ハードウェア概要
<div align="center">
    <img alt="Gemini 336 front view labelled with the two IR modules, LRM, LDM, RGB module and IR-pass filter" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew.png" />
</div>

<div align="center">
    <img alt="Front view of the Gemini 336 showing the two IR lenses and the RGB module" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview1.png" />
</div>

<div align="center">
    <img alt="Rear view of the Gemini 336 with the heatsink fins" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview2.png" />
</div>

<div align="center">
    <img alt="Front dimension drawing of the Gemini 336 with the lens spacing and diameter tolerances" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview3.png" />
</div>
<div align="center">
    <img alt="Rear dimension drawing with the 45 mm hole spacing and the M3 mounting points, max insertion depth 3 mm" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview4.png" />
</div>
<div align="center">
    <img alt="Side drawing with the field-of-view angles OP 104 degrees / ME 107 degrees and OP 109.6 degrees" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview5.png" />
</div>
<div align="center">
    <img alt="Side drawing with the OP 94 degrees / ME 101 degrees angles and the 1/4-20UNC mounting point, max insertion depth 5 mm" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview6.png" />
</div>
<div align="center">
    <img alt="Side drawing with the USB Type-C mounting point and the two M2 mounting points, height 15.00 plus or minus 0.15 mm" width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew7.png" />
</div>

<div align="center">
    <img alt="Side drawing with the 30.70 plus or minus 0.30 mm width and 25.00 plus or minus 0.30 mm height" width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew9.png" />
</div>

## Gemini 330 シリーズ クイックスタートガイド
- Orbbec カメラを接続する
 ① 三脚ヘッドを三脚に組み立て、その後、下図のステップ 1 のようにカメラを組み立てた三脚に固定します。

  ② 下図のステップ 2 のように、USB-C - USB-A ケーブルを使用してカメラの Type-C ポートに接続します。

  ③ 下図のステップ 3 のように、同じ USB-C - USB-A ケーブルで USB-A コネクタをホストに接続します。

<div align="center">
    <img alt="Gemini camera mounted on the tripod head with the USB-C to USB-A cable attached" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Orbbec Viewer を入手

お使いのシステムとバージョンに応じて、対応する [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) を選択してダウンロードします。

- Orbbec Viewer を起動

1. Orbbec Viewer を起動したら、次の画像のようにツールが 3D カメラを認識していることを確認してください。 
【備考】カメラが認識されない場合は、カメラとホストが正しく接続されているか確認してください。USB ケーブルを一度抜き差ししてみてください。それでも認識されない場合は、USB ケーブルの交換や、ホストコンピュータの電源供給が必要な仕様を満たしているかを確認してください。

<div align="center">
    <img alt="Orbbec Viewer before a camera is connected, showing the empty preview and the &quot;No device found&quot; message" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. ツール上部の「Depth」ボタンを切り替えて、深度ストリームを開始しプレビューします。

<div align="center">
    <img alt="Depth stream toggled on in Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. ツール上部の「Color」ボタンを切り替えて、カラーストリームを開始しプレビューします。カラーストリームと深度ストリームは左右に並んで表示されます。

<div align="center">
    <img alt="Colour and depth streams shown side by side in Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. ツール上部の「IR Left」と「IR Right」ボタンを切り替えて、IR ストリームを開始しプレビューします。

<div align="center">
    <img alt="Left and right IR streams previewed in Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. ツール上部の「IMU」ボタンを切り替えて、IMU ストリームを開始しプレビューします。

<div align="center">
    <img alt="IMU stream previewed in Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. 各ウィンドウ上部のボタンを切り替えて、メタデータ情報を表示します。

<div align="center">
    <img alt="Orbbec Viewer ウィンドウでメタデータオーバーレイが有効になっている様子" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. ツール上部の ‘PointCloud‘ ボタンを切り替えて、3Dポイントクラウドを開始してプレビューします。

<div align="center">
    <img alt="Orbbec Viewer での 3D ポイントクラウドプレビュー" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. 左側の ‘Image View’ メニュー内の ‘Display’ ボタンを切り替えて、D2C（depth to color registration）ストリームを開始してプレビューします。3DポイントクラウドとD2Cストリームが左右に並んで表示されます。

<div align="center">
    <img alt="ポイントクラウドと D2C レジストレーション済みストリームが左右に並んで表示されている様子" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>


## リソース

- [Orbbec 公式ガイド](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/About%20Orbbec%20Gemini%20330%20Series)
- [データシート](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/Gemini%20330%20Series%20Datasheet%20(Overall))
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/ja/orbbec_depth_camera_on_ros/)

## 関連リソース

- [Orbbec Gemini 2 3D カメラ](/ja/orbbec_gemini2/)
- [ORB-SLAM3 と Orbbec Gemini2](/ja/orb_slam3_orbbec_gemini2/)
- [reComputer 上の PyCuVSLAM](/ja/pycuvslam_recomputer_robotics/)
- [ROS 上の Orbbec 深度カメラ](/ja/orbbec_depth_camera_on_ros/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
