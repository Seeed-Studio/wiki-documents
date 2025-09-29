---
description: RS485 Vision AI カメラの使用開始
title: RS485 Vision AI カメラ
keywords:
- RS485 Vision
- Camera
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /ja/getting_started_with_rs485_vision_ai_cam
sidebar_position: 4
last_update:
  date: 12/26/2024
  author: Jason
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>

## サポートされているソフトウェアの概要

- [**SenseCraft AI でのノーコード入門**](#jump1)
  - [SenseCraft AI とは？](#jump2)
  - [SenseCraft AI Model Assistant の使用開始](#jump3)
- [**Seeed Studio XIAO ボードと接続した Arduino でのプログラミング**](#jump4)
  - [Arduino ライブラリの紹介](#jump5)
  - [Seeed Studio XIAO の使用開始](#jump6)

## ハードウェアの概要

### 紹介

Seeed Studio RS485 Vision AI カメラは、ESP32-C3 MCU（Seeed Studio XIAO）と Himax WiseEye2 HX6538 プロセッサを組み合わせたインテリジェントデバイスで、デュアルコア Arm Cortex-M55 と統合された Ethos-U55 ニューラルプロセッサを搭載しています。この先進的なカメラは、480×480 解像度、10 FPS で高性能な AI 認識を提供し、推論結果を送信するための柔軟なオプションを通じて低消費電力を維持します。標準的な Modbus RS485 インターフェースにより、産業システムとシームレスに統合され、SenseCAP DTU やその他の標準 RS485 DTU デバイスを通じて LoRaWAN と 4G 接続の両方をサポートします。IP66 定格のエンクロージャで保護されており、過酷な環境条件に耐え、屋内外の両方のアプリケーションに最適です。このカメラは、人数カウント、物体検出、分類など、さまざまなコンピュータビジョンタスクに優れています。ユーザーは 300 以上の事前訓練済みモデルからモデルを展開するか、ノーコード SenseCraft AI プラットフォームでカスタムモデルを訓練でき、TensorFlow と PyTorch フレームワークの AI モデルがサポートされています。プライバシーの懸念は、推論結果のみを送信する設計により対処されており、必要に応じてオプションの Wi-Fi キーフレーム送信が利用できます。

### 機器の準備

<div class="table-center">
<table align="center">
    <tr>
        <th>RS485 Vision AI カメラ </th>
    </tr>
    <tr>
    <td><div align="center"><img width ={550} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/shop.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Vision-AI-Camera-p-6346.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### 特徴

- 強力なビジュアルAI処理能力：デュアルコアArm Cortex-M55と統合されたArm Ethos-U55ニューラルネットワークユニットを搭載したWiseEye2 HX6538プロセッサーにより、最大480*480 10FPSのローカル推論が可能。

- 高データセキュリティのためのエッジコンピューティング：ローカル画像推論により最終結果のみを送信し、限定的なデータ伝送と高いデータプライバシーが要求されるアプリケーションに適している。

- 多機能AIモデル：人物検出、人数カウント、メーター読み取りの3つの内蔵モデルを搭載し、SenseCraft AIで数クリックでパブリックAIモデルのデプロイやカスタマイズAIモデルの訓練も簡単に行える。TensorFlowとPyTorchフレームワークをサポート。

- 多重伝送プロトコル：標準RS485プロトコル経由での推論結果の送信をサポート；SenseCAP S2100/ 4G Sensor Hub DTUと接続してLoRaWANまたは4G経由で結果を取得可能。Wi-Fi経由でのキーフレーム送信もサポート。

- 防塵・防水性能：IP66等級の保護により、屋内外環境での安定した長期展開を保証。

- SenseCraft Appによるモデル管理：数回のタップで事前インストールされたAIモデルの設定と切り替えが可能。特定の用途に合わせてモデル信頼度閾値を簡単に調整し、性能を最適化。

### 仕様

<table align="center">
 <tr>
     <th>製品モデル</th>
        <th>S-VA-01B</th>
 </tr>
 <tr>
     <th>入力電流</th>
        <th>1A</th>
 </tr>
 <tr>
     <th>入力電圧</th>
        <th>5V/12V</th>
 </tr>
 <tr>
     <th>マイクロコントローラー</th>
        <td align="center">Vision AI: <strong>Himax-6538</strong> <br></br> ネットワーク: <strong>XIAO ESP32C3</strong> <br></br></td>
 </tr>
    <tr>
        <th>カメラ</th>
        <td align="center">
            レンズサイズ: <strong>"1/4"</strong><br />
            焦点距離: <strong>3.4 mm（調整可能）</strong><br />
            解像度: <strong>2592 × 1944 ピクセル</strong><br />
            ピクセルサイズ: <strong>1.4 µm × 1.4 µm</strong><br />
            最大フレームレート: <strong>1080p @ 30 fps、720p @ 60 fps</strong><br />
            FOV: <strong>62°</strong>
        </td>
    </tr>
    <tr>
     <th>モデル実行と推論</th>
        <th>480 * 480  >10 fps</th>
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            チップ:<strong>TP8485E、半二重トランシーバー
            RS485 Modbus-RTUプロトコル</strong><br />
            端子接続: <strong>端子接続: 信号線用3ピン端子と電源用3ピン端子</strong><br />
            伝送範囲:<strong>伝送範囲: 最大1200メートル（環境により変動）</strong><br />
            伝送速度: <strong>伝送速度: 250k bps（最大）</strong>
        </td>
    </tr>
    <tr>
        <th>互換性</th>
        <td align="center">
            Modbus RS485 DTU<br />
            SenseCAP Sensor Hub 4G DTU<br />
            SenseCAP S2100 LoRaWAN DTU
        </td>
    </tr>
 <tr>
     <th>メモリ</th>
        <th>8GB MicroSDカード（クラス10）</th>
 </tr>
 <tr>
     <th>IP等級</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>動作温度</th>
        <th>0 - 70 °C</th>
 </tr>
 <tr>
     <th>動作湿度</th>
        <th>0 - 100 %RH（結露なし）</th>
 </tr>
 <tr>
     <th>デバイスサイズ</th>
        <th>180mm*75mm*70mm</th>
 </tr>
 <tr>
     <th>デバイス重量</th>
        <th>439g</th>
 </tr>
 <tr>
     <th>ケーブル長</th>
        <th>2メートル</th>
 </tr>
</table>

### ピンアウト図

下の図に従って、A1102の異なるワイヤー色は異なるピン機能に対応しています。具体的なピン機能は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

データロガーに対応する機能を見つけて接続してください

:::tip
5vにアクセスする場合、12vにアクセスする必要はありません。12vと5vのうち一つの電圧供給を選択し、一緒に使用しないことを忘れないでください！
:::

## ソフトウェア概要

### 工場出荷時AIモデルの展開

#### ソフトウェアワークフロー

**ステップ 1 :** アプリにログインした後、下のボックスの「ユーザー」をクリックし、Bluetooth接続デバイスの設定を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**ステップ 2 :** デバイス「RS485 Vision AI Camera」をチェックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**ステップ 3 :** RS485 Vision AI Cameraの電源を入れた後にスキャンします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**ステップ 4 :** 「AIモデル」をクリックして工場設定のAIモデルを表示し、必要なタイプを展開します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**ステップ 5 :** 「DataLogger」をバインドする必要がある場合は、対応するSN番号を入力してください。必要な「信頼度」を設定しない場合は、「プレビュー」をクリックすると、画像センサーに移動して画像を収集できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**ステップ 6 :** 画像を表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

SenseCraft APPでRS485 Vision AI V2デバイスを正常に使用できました！🎉

### SenseCraft AIによるカスタムAIモデル

モデルをカスタマイズしたい場合は、SenseCraft AIを使用して、お気に入りの機械学習モデルをRS485 Vision AI Cameraデバイスに展開し、機能とアプリケーションをパーソナライズする方法をご案内します。

#### ハードウェアワークフロー

以下の指示に従って、Type-CポートをVision AI V2に接続してコンピューターに接続します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### ソフトウェアワークフロー

**ステップ 1 .** まず、[SenseCraftAI](https://sensecraft.seeed.cc/ai/#/home)をクリックし、SenseCraft AIウェブサイトの上部のメニューバーで**「Pretrained Models」**を見つけてクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**ステップ 2 .** Supported Devicesセクションで**「SenseCAP A1102」**を見つけます。ここで、適応されたモデルに対応するデバイスモデルを見つける必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3 .** ここでは、31ページの**「Face Detection」**のモデルをデモ例として選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**ステップ 4 .** モデル内に入ったら、**「Deploy Model」**オプションを見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**ステップ 5 .** Connect Deviceと対応するオプション**「SenseCAP A1102」**を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**ステップ 6 .** 内部に入ったら、A1102デバイスを接続し、対応するシリアルポートを見つけて接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**ステップ 7 .** 最後に、モデルが書き込まれ、対応する結果が表示されることを確認できます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`Confidence:`
    - Confidenceは、モデルがその予測に割り当てる確実性または確率のレベルを指します。

`IoU:`
    - IoUは、真実のバウンディングボックスと比較して予測されたバウンディングボックスの精度を評価するために使用されます。

この時点で、RS485 Vision AI Cameraデバイスに必要なモデルを正常に展開しました。次に、次のステップの操作に進みます！

### XIAOによるデータ読み取り

XIAOを介して書き込みモデルからデータを読み取るには、この[wiki](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_software_support/)にアクセスしてください。XIAOを介してVision AI V2データを読み取る方法について詳しく説明されています。

### データ送信 RS485

#### 接続回路図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip
5vにアクセスする場合、12vにアクセスする必要はありません。12vと5vのうち一つの電圧供給を選択し、一緒に使用しないことを忘れないでください！
:::

上の図に従って正常に接続したら、この[wiki](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_rs485/)リンクをクリックして、コードを使用してドライブする方法についてより詳細な説明を確認してください

## Resources

- 📄 **[PDF]** [Seeed Studio RS485 Vision AI Camera Schematic](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)

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
