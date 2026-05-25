---
description: RS485 Vision AI Camera の使用を開始する
title: RS485 Vision AI Camera
keywords:
  - RS485 Vision
  - Camera
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /getting_started_with_rs485_vision_ai_cam
sku: 110992084
sidebar_position: 4
last_update:
  date: 12/26/2024
  author: Jason
createdAt: '2025-01-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/getting_started_with_rs485_vision_ai_cam/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>

## 対応ソフトウェア概要

- [**コード不要で始める SenseCraft AI**](#jump1)
  - [SenseCraft AI とは？](#jump2)
  - [SenseCraft AI Model Assistant の使い方](#jump3)
- [**Seeed Studio XIAO ボードと接続して Arduino で開発**](#jump4)
  - [Arduino ライブラリの紹介](#jump5)
  - [Seeed Studio XIAO のはじめ方](#jump6)

## ハードウェア概要

### はじめに

Seeed Studio RS485 Vision AI Camera は、ESP32-C3 MCU（Seeed Studio XIAO）と Himax WiseEye2 HX6538 プロセッサを組み合わせたインテリジェントデバイスで、デュアルコア Arm Cortex-M55 と統合型 Ethos-U55 ニューラルプロセッサを搭載しています。この高性能カメラは、480×480 解像度・10 FPS での高精度な AI 認識を実現しつつ、推論結果の送信方法を柔軟に選択できるため、低消費電力を維持できます。標準的な Modbus RS485 インターフェースを備え、産業用システムとのシームレスな統合が可能で、SenseCAP DTU やその他の標準 RS485 DTU デバイスを介した LoRaWAN および 4G 接続にも対応します。IP66 等級の筐体により、過酷な環境条件にも耐え、屋内外を問わず長期運用に適しています。人数カウント、物体検出、分類など、さまざまなコンピュータビジョンタスクで優れた性能を発揮します。ユーザーは 300 以上の事前学習済みモデルから選択してデプロイできるほか、ノーコードの SenseCraft AI プラットフォーム上でカスタムモデルを学習させることも可能で、TensorFlow および PyTorch フレームワークの AI モデルにも対応しています。プライバシー面では、推論結果のみを送信する設計により懸念を軽減し、必要に応じて Wi-Fi によるキーフレーム送信も選択できます。

### 機材の準備

<div class="table-center">
<table align="center">
    <tr>
        <th>RS485 Vision AI Camera </th>
    </tr>
    <tr>
    <td><div align="center"><img width ={550} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/shop.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Vision-AI-Camera-p-6346.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### 特長

- 強力なビジュアル AI 処理能力：WiseEye2 HX6538 プロセッサ（デュアルコア Arm Cortex-M55 と統合 Arm Ethos-U55 ニューラルネットワークユニット搭載）により、ローカル推論を最大 480×480・10FPS で実行可能。

- 高いデータセキュリティを実現するエッジコンピューティング：画像をローカルで推論し、最終結果のみを送信。データ伝送量を抑えつつ高いデータプライバシーが求められる用途に最適。  

- 多機能 AI モデル：人検出、人数カウント、メーター読み取りの 3 つのビルトインモデルを搭載。公開 AI モデルのデプロイや、SenseCraft AI 上で数クリックでカスタム AI モデルを学習・展開することも容易。TensorFlow および PyTorch フレームワークをサポート。

- マルチ伝送プロトコル：標準 RS485 プロトコルで推論結果を送信可能。SenseCAP S2100 / 4G Sensor Hub DTU と接続することで、LoRaWAN または 4G 経由で結果を取得可能。さらに Wi-Fi によるキーフレーム送信にも対応。

- 防塵・防水性能：IP66 等級の保護により、屋内外環境での長期安定運用を実現。

- SenseCraft アプリによるモデル管理：数回のタップでプリインストールされた AI モデルの設定や切り替えが可能。モデルの信頼度しきい値を簡単に調整し、用途に合わせて性能を最適化できます。

### 仕様

<table align="center">
 <tr>
     <th>製品型番</th>
        <th>S-VA-01B</th>
 </tr>
 <tr>
     <th>電流入力</th>
        <th>1A</th>
 </tr>
 <tr>
     <th>電圧入力</th>
        <th>5V/12V</th>
 </tr>
 <tr>
     <th>マイクロコントローラ</th>
        <td align="center">Vision AI: <strong>Himax-6538</strong> <br></br> Network: <strong>XIAO ESP32C3</strong> <br></br></td>
 </tr>
    <tr>
        <th>カメラ</th>
        <td align="center">
            レンズサイズ: <strong>“1/4"</strong><br />
            焦点距離: <strong>3.4 mm（調整可能）</strong><br />
            解像度: <strong>2592 × 1944 pixels</strong><br />
            画素サイズ: <strong>1.4 µm × 1.4 µm</strong><br />
            最大フレームレート: <strong>1080p @ 30 fps, 720p @ 60 fps</strong><br />
            視野角 (FOV): <strong>62°</strong>
        </td>
    </tr>
    <tr>
     <th>モデル実行および推論</th>
        <th>480 * 480  >10 fps</th>
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            チップ:<strong>TP8485E、半二重トランシーバ
            RS485 Modbus-RTU プロトコル</strong><br />
            端子接続: <strong>端子接続: 信号線用 3 ピン端子および電源用 3 ピン端子</strong><br />
            伝送距離:<strong>伝送距離: 最大 1200 m（環境により異なる）</strong><br />
            伝送速度: <strong>伝送速度: 最大 250k bps</strong>
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
        <th>8GB MicroSD カード（Class 10）</th>
 </tr>
 <tr>
     <th>IP 等級</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>動作温度</th>
        <th>0 - 70 °C</th>
 </tr>
 <tr>
     <th>動作湿度</th>
        <th>0 - 100 %RH（結露なきこと）</th>
 </tr>
 <tr>
     <th>本体サイズ</th>
        <th>180mm*75mm*70mm</th>
 </tr>
 <tr>
     <th>本体重量</th>
        <th>439g</th>
 </tr>
 <tr>
     <th>ケーブル長</th>
        <th>2 meters</th>
 </tr>
</table>

### ピン配置図

下図のように、A1102 のワイヤーカラーごとに対応するピン機能が異なります。具体的なピン機能は次のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

データロガーに対応する機能を見つけて接続してください。

:::tip
5V を接続する場合は 12V を接続する必要はありません。12V と 5V はどちらか一方の電源を選択し、同時に使用しないようにしてください！
:::

## ソフトウェア概要

### 工場出荷時 AI モデルのデプロイ

#### ソフトウェアワークフロー

**Step 1 :** アプリにログインしたら、下のボックス内の「User」をクリックし、Bluetooth 接続デバイスの設定を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**Step 2 :** デバイス「RS485 Vision AI Camera」を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**Step 3 :** RS485 Vision AI Camera の電源を入れた後にスキャンします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**Step 4 :** 「AI Model」をクリックして、工場出荷時に設定されている AI モデルを確認し、使用したいタイプをデプロイします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**Step 5 :** 「DataLogger」をバインドする必要がある場合は、対応する SN 番号を入力してください。「confidence」を設定しない場合は、「Preview」をクリックすると、イメージセンサーに移動して画像を取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**Step 6 :** 画像を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

SenseCraft APP 上で RS485 Vision AI V2 デバイスを正常に使用できました。おめでとうございます！🎉

### SenseCraft AI によるカスタム AI モデル

モデルをカスタマイズしたい場合は、SenseCraft AI を使って、お好みの機械学習モデルを RS485 Vision AI Camera デバイス上にデプロイし、機能やアプリケーションをパーソナライズする手順を説明します。

#### ハードウェアワークフロー

以下の手順に従って、Type-C ポートを Vision AI V2 とコンピュータに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### ソフトウェアワークフロー

**Step 1 .** [SenseCraft AI](https://sensecraft.seeed.cc/ai) を開き、**`Models`** > **`Model Library`** に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**Step 2 .** Supported Devices セクションで **“SenseCAP A1102”** を探します。ここでは、適合するモデルに対応したデバイスモデルを見つける必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**Step 3 .** ここでは例として、31 ページにある **“Face Detection”** モデルをデモとして選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**Step 4 .** モデル画面に入ったら、**“Deploy Model”** オプションを見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**Step 5 .** Connect Device を見つけ、対応するオプション **“SenseCAP A1102”** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**ステップ 6.** 画面が表示されたら、A1102 デバイスを接続し、対応するシリアルポートを見つけて接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**ステップ 7.** 最後に、書き込まれたモデルと、それに対応する結果が表示されていることを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`Confidence:`
    - Confidence は、モデルが予測に対してどの程度確信しているか、あるいはどのくらいの確率を割り当てているかを示します。

`IoU:`
    - IoU は、予測されたバウンディングボックスと真値のバウンディングボックスを比較して、その精度を評価するために使用されます。

この時点で、必要なモデルを RS485 Vision AI Camera デバイス上に正常にデプロイできました。次に、操作の次のステップに進みましょう！

### XIAO でデータを読み取る

XIAO を介してバーンイン済みモデルからデータを読み取るには、この [wiki](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_software_support/) にアクセスしてください。XIAO を使用して Vision AI V2 のデータを読み取る方法が詳しく説明されています。

### RS485 でのデータ送信

#### 接続回路図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip
5V を給電する場合は 12V を接続する必要はありません。12V と 5V はどちらか一方の電圧を選んで給電し、同時に使用しないように注意してください！
:::

上の図に従って正常に接続できたら、この [wiki](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_rs485/) リンクをクリックして、コードを使用して駆動する方法についての、より詳細な説明を確認してください。

## リソース

- 📄 **[PDF]** [Seeed Studio RS485 Vision AI Camera 回路図](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
