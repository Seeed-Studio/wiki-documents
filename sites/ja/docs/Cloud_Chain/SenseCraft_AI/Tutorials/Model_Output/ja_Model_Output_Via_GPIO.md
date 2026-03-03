---
sidebar_position: 8
description: この記事では、モデルの認識結果をGPIO経由で送信する方法について説明します。
title: GPIO経由でのモデル出力
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao
aliases:
  - /ja/sensecraft_ai_output_gpio_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# XIAO ESP32S3 Sense用SenseCraft AIでのモデル出力とGPIOの設定

このwiki記事では、SenseCraft AIプラットフォームを使用してXIAO ESP32S3 Senseボード用のモデル出力とGPIO設定を構成する方法について、ステップバイステップのガイドを提供します。これらの手順に従うことで、訓練されたモデルによって検出された特定のイベント条件に基づいてGPIOレベルの変化をトリガーする方法を学習できます。

## 前提条件

開始する前に、以下のものが揃っていることを確認してください：

1. XIAO ESP32S3 Senseボード
2. USB-Cデータケーブル
3. OLED付きXIAO用拡張ボードベース
4. Grove LED

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
      <th>OLED付きXIAO用拡張ボードベース</th>
      <th>Grove LED</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>

</div>

## ステップ1. SenseCraft AI Vision Workspaceにアクセスし、XIAO ESP32S3 Senseを接続する

Webブラウザを開き、SenseCraft AI Vision Workspaceページに移動します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリック直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

利用可能なデバイスからXIAO ESP32S3 Senseボードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

USB-Cケーブルを使用して、XIAO ESP32S3 Senseボードをコンピュータに接続します。接続したら、SenseCraft AI Vision Workspaceページの左上にある**Connect**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ2. XIAO ESP32S3 Senseにモデルがロードされていることを確認する

続行する前に、XIAO ESP32S3 Senseボードに訓練済みモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、デバイスにモデルを訓練してデプロイする方法について、SenseCraft AIドキュメントを参照してください。

- [XIAO ESP32S3 Sense用モデルの使用](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

独自の訓練済みモデルを使用したい場合は、以下の2つのWikiを参照してください。

- [訓練の種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [訓練の種類 - 物体検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ3. GPIO出力を設定する

Vision Workspaceページの左サイドバーで、**Output**オプションをクリックします。利用可能な出力オプションから**GPIO**を選択して、GPIO設定にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

ページの右側で、**Trigger action when event conditions are met**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

ダイアログボックスが表示され、GPIOレベルの変更をトリガーする条件として機能する様々なパラメータの入力を求められます。これらのパラメータには以下が含まれます：

- **Object**: モデルが検出すべきオブジェクトを指定して、GPIOレベルの変更をトリガーします。例えば、顔が検出されたときにGPIOを変更したい場合は「face」と入力します。

- **Condition**: トリガーが発生するために満たすべき条件を選択します。オプションには「Greater than」、「Less than」、「Equal to」などがあります。例えば、「Greater than」を選択すると、検出されたオブジェクトの信頼度レベルが指定値より大きいときにGPIOが変更されます。

- **Confidence**: オブジェクト検出がGPIOの変更をトリガーするために必要な最小信頼度レベルを設定します。この値は1から100の範囲で、100が最高の信頼度です。

- **GPIO**: 制御したいXIAO ESP32S3 Sense上の特定のGPIOピンを選択します。利用可能なオプションにはGPIO1(DO)、GPIO2(D1)などがあります。

- **Default Status**: 選択したGPIOピンのデフォルト状態を選択します。オプションには「Low Level」と「High Level」があります。

- **Active Status**: トリガー条件が満たされたときにGPIOピンが変更すべき状態を指定します。オプションには「Low Level」と「High Level」があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

希望するトリガー条件を設定した後、**Confirm**ボタンをクリックして設定を保存します。最後に、**Send**ボタンをクリックしてGPIOトリガーコマンドをXIAO ESP32S3 Senseボードに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

XIAOボードがコマンドを実行し、Grove OLED付きXIAO用拡張ボードベースを介して接続されたGrove LEDへの効果を観察できます。

:::caution
GPIO出力機能は、SenseCraft AIプラットフォームとXIAO ESP32S3 Senseボード間のWebベース接続に依存していることに注意してください。接続が失われたり中断されたりすると、モデル検出に基づくGPIOレベル変更機能は動作を停止します。プロセス全体を通じて安定した接続を確保してください。
:::

## 結論

このステップバイステップガイドに従うことで、XIAO ESP32S3 Sense ボード用の SenseCraft AI プラットフォームでモデル出力と GPIO 設定を構成する方法を学習しました。これで、訓練されたモデルによって検出された特定のイベント条件に基づいて GPIO レベルの変更をトリガーできるようになりました。この機能により、XIAO ESP32S3 Sense と SenseCraft AI を使用してインタラクティブなプロジェクトやアプリケーションを作成するための幅広い可能性が開かれます。シームレスな動作のために、Web プラットフォームとデバイス間の安定した接続を維持することを忘れないでください。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
