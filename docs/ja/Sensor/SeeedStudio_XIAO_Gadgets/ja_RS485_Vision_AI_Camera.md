---
description: RS485 Vision AIカメラの使用方法
title: RS485 Vision AIカメラ
keywords:
- RS485 Vision
- カメラ
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /ja/getting_started_with_rs485_vision_ai_cam
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>


## 対応ソフトウェア概要

- [**SenseCraft AIを使用したノーコードでの開始**](#jump1)
   - [SenseCraft AIとは？](#jump2)
   - [SenseCraft AIモデルアシスタントの使い方](#jump3)
- [**Seeed Studio XIAOボードを接続してArduinoでプログラム**](#jump4)
   - [Arduinoライブラリの紹介](#jump5)
   - [Seeed Studio XIAOの使い方](#jump6)


## ハードウェア概要

### 概要

Seeed Studio RS485 Vision AIカメラは、ESP32-C3 MCU（Seeed Studio XIAO）とHimax WiseEye2 HX6538プロセッサを組み合わせたインテリジェントデバイスで、デュアルコアArm Cortex-M55と統合されたEthos-U55ニューラルプロセッサを搭載しています。この高度なカメラは、480×480解像度で10FPSの高性能AI認識を提供し、推論結果の送信に柔軟なオプションを使用して低消費電力を維持します。標準のModbus RS485インターフェースを備え、産業システムとシームレスに統合し、LoRaWANおよび4G接続をSenseCAP DTUや他の標準RS485 DTUデバイスを通じてサポートします。IP66規格のエンクロージャーで保護され、過酷な環境条件にも耐え、屋内外のアプリケーションに最適です。このカメラは、人数カウント、物体検出、分類などのさまざまなコンピュータビジョンタスクに優れています。300以上の事前トレーニング済みモデルからモデルを展開するか、ノーコードのSenseCraft AIプラットフォームでカスタムモデルをトレーニングできます。また、TensorFlowおよびPyTorchフレームワークのAIモデルをサポートします。プライバシーの懸念に対応するため、推論結果のみを送信する設計となっており、必要に応じてWi-Fiキーフレーム送信もオプションで利用可能です。


### 機器準備

<div class="table-center">
<table align="center">
    <tr>
        <th>RS485 Vision AIカメラ</th>
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

- 強力なビジュアルAI処理能力: WiseEye2 HX6538プロセッサを搭載し、デュアルコアArm Cortex-M55と統合されたArm Ethos-U55ニューラルネットワークユニットにより、480×480解像度で10FPSのローカル推論が可能。

- 高いデータセキュリティのためのエッジコンピューティング: ローカル画像推論を行い、最終結果のみを送信。データ送信が制限され、高いデータプライバシーが求められるアプリケーションに適しています。

- 多機能AIモデル: 人間検出、人数カウント、メーター読み取りの3つの組み込みモデルを搭載。SenseCraft AIで数回クリックするだけで、公開AIモデルの展開やカスタマイズAIモデルのトレーニングが簡単に行えます。TensorFlowおよびPyTorchフレームワークをサポート。

- 多様な伝送プロトコル: 標準RS485プロトコルを介して推論結果を送信可能。SenseCAP S2100/4GセンサーハブDTUを接続して、LoRaWANまたは4Gを介して結果を取得可能。また、Wi-Fiを介したキーフレーム送信もサポート。

- 防塵・防水性能: IP66規格の保護により、屋内外環境での長期安定運用を実現。

- SenseCraftアプリによるモデル管理: 数回のタップで事前インストールされたAIモデルを構成および切り替え可能。特定のユースケースに合わせてモデル信頼性しきい値を簡単に調整可能。



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
            レンズサイズ: <strong>“1/4"</strong><br />
            焦点距離: <strong>3.4 mm (調整可能)</strong><br />
            解像度: <strong>2592 × 1944 ピクセル</strong><br />
            ピクセルサイズ: <strong>1.4 µm × 1.4 µm</strong><br />
            最大フレームレート: <strong>1080p @ 30 fps, 720p @ 60 fps</strong><br />
            視野角 (FOV): <strong>62°</strong>
        </td>
    </tr>
    <tr>
	    <th>モデル実行と推論</th>
        <th>480 * 480  >10 fps</th>	
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            チップ:<strong>TP8485E, 半二重トランシーバー
            RS485 Modbus-RTUプロトコル</strong><br />
            端子接続: <strong>信号線用3ピン端子および電源用3ピン端子</strong><br />
            伝送範囲:<strong>最大1200メートル（環境により異なる）</strong><br />
            伝送速度: <strong>最大250k bps</strong>
        </td>
    </tr>
    <tr>
        <th>互換性</th>
        <td align="center">
            Modbus RS485 DTU<br />
            SenseCAP センサーハブ4G DTU<br />
            SenseCAP S2100 LoRaWAN DTU
        </td>
    </tr>
	<tr>
	    <th>メモリ</th>
        <th>8GB MicroSDカード (Class 10)</th>
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
        <th>0 - 100 %RH (結露しないこと)</th>
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

以下の図に従って、A1102の異なるワイヤーカラーが異なるピン機能に対応しています。具体的なピン機能は以下の通りです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

データロガーに接続するために対応する機能を見つけてください。

:::tip
5Vに接続する場合、12Vに接続する必要はありません。12Vと5Vのいずれか一方の電源を選択してください。同時に使用しないように注意してください！
:::

## ソフトウェア概要

### 工場出荷時のAIモデルのデプロイ

#### ソフトウェアワークフロー

**ステップ 1:** アプリにログインした後、以下のボックス内の「ユーザー」をクリックし、Bluetooth接続デバイスの設定を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**ステップ 2:** デバイス「RS485 Vision AI Camera」を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**ステップ 3:** RS485 Vision AI Cameraの電源を入れた後、スキャンを行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**ステップ 4:** 「AIモデル」をクリックして、工場出荷時に設定されたAIモデルを表示し、必要なタイプをデプロイします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**ステップ 5:** 「DataLogger」をバインドする必要がある場合は、対応するSN番号を入力してください。「信頼度」を設定しない場合は、「プレビュー」をクリックして、画像センサーで画像を収集できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**ステップ 6:** 画像を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

SenseCraft APPでRS485 Vision AI V2デバイスを正常に使用できました！🎉

### SenseCraft AIを使用したカスタムAIモデル

モデルをカスタマイズしたい場合は、SenseCraft AIを使用して、お気に入りの機械学習モデルをRS485 Vision AI Cameraデバイスにデプロイし、機能やアプリケーションを個別化する方法を説明します。

#### ハードウェアワークフロー

以下の指示に従って、Vision AI V2のType-Cポートをコンピュータに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### ソフトウェアワークフロー

**ステップ 1:** まず、[SenseCraftAI](https://sensecraft.seeed.cc/ai/#/home)をクリックし、SenseCraft AIウェブサイトの上部メニューバーで**「Pretrained Models」**を見つけてクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**ステップ 2:** サポートされているデバイスセクションで**「SenseCAP A1102」**を見つけます。ここで、適応モデルに対応するデバイスモデルを見つける必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3:** ここでは、ページ31の**「Face Detection」**モデルを例として選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**ステップ 4:** モデル内に入ったら、**「Deploy Model」**オプションを見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**ステップ 5:** デバイスを接続し、対応するオプション**「SenseCAP A1102」**を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**ステップ 6:** デバイスを接続した後、A1102デバイスを接続し、対応するシリアルポートを見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**ステップ 7:** 最後に、モデルが書き込まれ、対応する結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`Confidence:`  
- 信頼度は、モデルが予測に割り当てる確実性または確率のレベルを指します。

`IoU:`  
- IoUは、予測されたバウンディングボックスと真実のバウンディングボックスを比較して精度を評価するために使用されます。

これで、必要なモデルをRS485 Vision AI Cameraデバイスに正常にデプロイしました。次の操作ステップに進みましょう！

### XIAOでデータを読み取る

XIAOを介して書き込まれたモデルからデータを読み取るには、この[wiki](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_software_support/)をご覧ください。Vision AI V2データをXIAOを介して読み取る方法が詳しく説明されています。

### RS485でのデータ送信

#### 接続図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip 
5Vに接続する場合、12Vに接続する必要はありません。12Vと5Vのいずれか一方の電源を選択してください。同時に使用しないように注意してください！
:::

上記の図に従って正常に接続した後、この[wiki](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_rs485/)リンクをクリックして、コードを使用してデバイスを駆動する方法の詳細な説明をご覧ください。

## リソース

- 📄 **[PDF]** [Seeed Studio RS485 Vision AI Camera 回路図](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>