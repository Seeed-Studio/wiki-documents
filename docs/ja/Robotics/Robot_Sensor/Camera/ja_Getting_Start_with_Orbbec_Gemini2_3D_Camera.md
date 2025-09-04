---
description: reComputer Jetsonプラットフォームでの Orbbec Gemini 335Lg の使用方法を説明します。
title: Orbbec Gemini2 3Dカメラの使用開始
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
コンパクトなGemini 2 3Dカメラは、Active Stereo IR技術をベースとし、高品質な深度処理、IMU、および単一ケーブルUSB 3.0電源+接続のためのOrbbecの最新カスタムASICを搭載しています。広いFOVと広い深度センシング範囲により、Gemini 2は多くのアプリケーション、特にロボティクスに適応できます。Orbbec SDKで簡単にセットアップ・操作でき、真っ暗闇から半屋外まで、様々な照明条件で極めて正確で信頼性の高いデータを提供します。
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>


## 特徴
- **Active Stereo IR** 深度出力にアクティブステレオIR技術を採用し、様々な照明条件で正確で信頼性の高いデータ出力を実現
- **広いセンシング範囲** 0.15mから10mまでの高品質な深度データ出力を提供
- **広いFOV** 水平91度、垂直66度の広い視野データを提供
- **マルチカメラ同期** 深度画像とRGB画像の両方でマルチカメラ同期をサポート
- **USB接続** 電源と接続に単一のUSB 3.0 Type-Cケーブルを使用

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
        <td style={{ height: "46px", width: "132px" }}>カメラドライバー</td>
        <td style={{ height: "46px", width: "491px" }}>UVC</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>深度範囲</td>
        <td style={{ height: "46px", width: "491px" }}>0.15m ~ 10m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>理想的な範囲</td>
        <td style={{ height: "46px", width: "491px" }}>0.2m ~ 5m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>深度解像度</td>
        <td style={{ height: "46px", width: "491px" }}>最大 1280x800 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>RGB解像度</td>
        <td style={{ height: "46px", width: "491px" }}>最大 1920x1080 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>水平FOV</td>
        <td style={{ height: "46px", width: "491px" }}>91°</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>垂直FOV</td>
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

## reComputerでの使用開始

**ステップ 1.** ARM64アーキテクチャ用のOrbbec SDKをダウンロードしてインストールします：

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
Orbbec Gemini2は、ロボティクス、3Dビジョン、オブジェクトトラッキング、産業オートメーションに最適なコンパクトで高性能な深度カメラです。
NVIDIA Jetsonプラットフォームなどの組み込みAIやエッジコンピューティングアプリケーションに完璧に適合します。
</div>

:::info
Gemini2を使用して私たちが開発したケースチュートリアルがいくつかあります：

[距離測定](https://wiki.seeedstudio.com/ja/yolov11_with_depth_camera/)

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/distance.png" />
</div>


[ドローンでのオブジェクトトラッキング](https://wiki.seeedstudio.com/ja/object_tracking_with_reComputer_jetson_and_pX4/)

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/px4.png" />
</div>

:::

## リソース

- [Orbbec SDK v2 APIガイド](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/source/3_Application_Guide/Application_Guide.html)
- [データシート](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
