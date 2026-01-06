---
description: reComputer Jetson プラットフォームで Orbbec Gemini2 を使用する方法を説明します。
title: Orbbec Gemini2 3D カメラ
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
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.webp 
slug: /ja/orbbec_gemini2
last_update:
  date: 2025-08-22
  author: Zibo
---

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.png" />
</div>

<div style={{ textAlign: "justify" }}>
コンパクトな Gemini 2 3D カメラは Active Stereo IR 技術をベースとし、高品質な深度処理、IMU、および単一ケーブル USB 3.0 電源 + 接続のための Orbbec の最新カスタム ASIC を搭載しています。広い FOV と広い深度センシング範囲により、Gemini 2 は多くのアプリケーション、特にロボティクスに適応できます。Orbbec SDK で簡単にセットアップ・操作でき、真っ暗闇から半屋外まで、様々な照明条件で極めて正確で信頼性の高いデータを提供します。
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 特徴

- **Active Stereo IR** 深度出力にアクティブステレオ IR 技術を採用し、様々な照明条件で正確で信頼性の高いデータ出力を実現
- **広いセンシング範囲** 0.15m から 10m まで高品質な深度データ出力を提供
- **広い FOV** 水平 91 度、垂直 66 度の広い視野データを提供
- **マルチカメラ同期** 深度画像と RGB 画像の両方でマルチカメラ同期をサポート
- **USB 接続** 電源と接続に単一の USB 3.0 Type-C ケーブルを使用

## 仕様

<div className="table-center">
  <table style={{ height: "700px" }}>
    <tbody>
      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "400px" }}>
          <strong>パラメータ</strong>
        </td>
        <td style={{ height: "46px", width: "491px" }}>
          <strong>詳細</strong>
        </td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>電圧</td>
        <td style={{ height: "46px", width: "491px" }}>5V (USB Type-C)</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>深度技術</td>
        <td style={{ height: "46px", width: "491px" }}>Active Stereo IR</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>動作温度</td>
        <td style={{ height: "46px", width: "491px" }}>0°C ~ 40°C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>機械的寸法</td>
        <td style={{ height: "46px", width: "491px" }}>90mm x 25mm x 30mm</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>通信インターフェース</td>
        <td style={{ height: "46px", width: "491px" }}>USB 3.0 Type-C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>カメラドライバ</td>
        <td style={{ height: "46px", width: "491px" }}>UVC</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>深度範囲</td>
        <td style={{ height: "46px", width: "491px" }}>0.15m ~ 10m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>理想的範囲</td>
        <td style={{ height: "46px", width: "491px" }}>0.2m ~ 5m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>深度解像度</td>
        <td style={{ height: "46px", width: "491px" }}>最大 1280x800 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>RGB 解像度</td>
        <td style={{ height: "46px", width: "491px" }}>最大 1920x1080 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>水平 FOV</td>
        <td style={{ height: "46px", width: "491px" }}>91°</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>垂直 FOV</td>
        <td style={{ height: "46px", width: "491px" }}>66°</td>
      </tr>
    </tbody>
  </table>
</div>

## ハードウェア概要

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-1.png" />
</div>

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-2.png" />
</div>

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-3.png" />
</div>


## Gemini シリーズクイックスタートガイド
- Orbbec カメラの接続
 ① 三脚ヘッドを三脚に組み立て、下記ステップ 1 に示すように、組み立てた三脚にカメラを固定します。

  ② 下記ステップ 2 に示すように、USB-C to USB-A ケーブルを使用してカメラの Type-C ポートに接続します。

  ③ 下記ステップ 3 に示すように、同じ USB-C to USB-A ケーブルを使用して USB-A コネクタをホストに接続します。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Orbbec Viewer の取得

お使いのシステムとバージョンに対応する [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) を選択してダウンロードしてください。

- Orbbec Viewer の起動

1. Orbbec Viewer を起動した後、以下の画像に示すように、ツールが 3D カメラを認識していることを確認してください。
【備考】カメラが認識されない場合は、カメラとホストが正しく接続されていることを確認してください。USB ケーブルを一度抜いて再接続してみてください。それでも認識されない場合は、USB ケーブルの交換や、ホストコンピュータの電源供給が必要な仕様を満たしているかを確認してください。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. ツール上部の 'Depth' ボタンを切り替えて、深度ストリームを開始・プレビューします。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. ツール上部の 'Color' ボタンを切り替えて、カラーストリームを開始・プレビューします。カラーストリームと深度ストリームが並んで表示されます。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. ツール上部の 'IR Left' と 'IR Right' ボタンを切り替えて、IR ストリームを開始・プレビューします。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. ツール上部の 'IMU' ボタンを切り替えて、IMU ストリームを開始・プレビューします。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. 各ウィンドウの上部にあるボタンを切り替えて、メタデータ情報を表示します。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. ツール上部の 'PointCloud' ボタンを切り替えて、3D ポイントクラウドを開始・プレビューします。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. 左側の 'Image View' メニュー下の 'Display' ボタンを切り替えて、D2C（深度からカラーへの登録）ストリームを開始・プレビューします。3D ポイントクラウドと D2C ストリームが並んで表示されます。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>



## reComputer での開始

**ステップ 1.** ARM64 アーキテクチャ用の Orbbec SDK をダウンロード・インストールします：

```bash
# Download Orbbec SDK
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.11/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip

# Unzip the SDK
unzip OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip
```

**ステップ 2.** サンプルをビルドしてテストします：

```bash
# Install udev rules
cd OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64/shared/
sudo chmod +x ./install_udev_rules.sh
sudo ./install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
# Build examples and setup
cd ..
./build_examples.sh
./setup.sh
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/test_sdk.png" />
</div>

## アプリケーション例

<div style={{ textAlign: "justify" }}>
Orbbec Gemini2 は、ロボティクス、3D ビジョン、オブジェクト追跡、産業オートメーションに最適なコンパクトで高性能な深度カメラです。
NVIDIA Jetson プラットフォームなどの組み込み AI やエッジコンピューティングアプリケーションに完璧に適合します。
</div>

:::info
Gemini2 を使用して私たちが開発したケースチュートリアルがいくつかあります：

[距離測定](https://wiki.seeedstudio.com/ja/yolov11_with_depth_camera/)

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/distance.png" />
</div>

[ドローンでのオブジェクト追跡](https://wiki.seeedstudio.com/ja/object_tracking_with_reComputer_jetson_and_pX4/)

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/px4.png" />
</div>

:::

## リソース

- [Orbbec SDK v2 API ガイド](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/source/3_Application_Guide/Application_Guide.html)
- [データシート](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/ja/orbbec_depth_camera_on_ros/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
