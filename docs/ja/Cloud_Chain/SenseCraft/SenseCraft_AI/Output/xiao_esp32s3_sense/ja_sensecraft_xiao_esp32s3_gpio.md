---
description: この記事では、モデルの認識結果をGPIO経由で送信する方法について説明します。
title: GPIO出力を介して
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /ja/sensecraft_ai_output_gpio_xiao
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCraft AIでのXIAO ESP32S3 Senseのモデル出力とGPIO設定

このWiki記事では、SenseCraft AIプラットフォームを使用してXIAO ESP32S3 Senseボードのモデル出力とGPIO設定を構成する方法をステップバイステップで説明します。この手順に従うことで、トレーニング済みモデルが検出した特定のイベント条件に基づいてGPIOレベルの変化をトリガーする方法を学ぶことができます。

## 前提条件

開始する前に、以下のものを用意してください：

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ1. SenseCraft AI Vision Workspaceにアクセスし、XIAO ESP32S3 Senseを接続する

ウェブブラウザを開き、SenseCraft AI Vision Workspaceページにアクセスしてください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックでアクセス 🖱️</font></span></strong>
    </a>
</div><br />

利用可能なデバイスからXIAO ESP32S3 Senseボードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

USB-Cケーブルを使用して、XIAO ESP32S3 Senseボードをコンピュータに接続します。接続後、SenseCraft AI Vision Workspaceページの左上にある**Connect**ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ 2. XIAO ESP32S3 Sense にモデルがロードされていることを確認する

次に進む前に、XIAO ESP32S3 Sense ボードにトレーニング済みのモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、SenseCraft AI のドキュメントを参照して、デバイスにモデルをトレーニングおよびデプロイする方法を確認してください。

- [XIAO ESP32S3 Sense 用のモデルの使用](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

独自のトレーニング済みモデルを使用したい場合は、以下の 2 つの Wiki を参照してください。

- [トレーニングの種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [トレーニングの種類 - オブジェクト検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ 3. GPIO 出力を設定する

Vision Workspace ページの左サイドバーで、**Output** オプションをクリックします。利用可能な出力オプションから **GPIO** を選択して、GPIO 設定画面にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

ページ右側で、**イベント条件が満たされた場合にアクションをトリガーする** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

ダイアログボックスが表示され、GPIO レベルを変更するトリガー条件として使用するさまざまなパラメータを入力するよう求められます。これらのパラメータには以下が含まれます：

   - **Object**: モデルが検出するべきオブジェクトを指定します。例えば、「顔」を指定すると、顔が検出されたときに GPIO レベルが変更されます。

   - **Condition**: トリガーが発生するために満たすべき条件を選択します。「より大きい」「より小さい」「等しい」などのオプションがあります。例えば、「より大きい」を選択すると、検出されたオブジェクトの信頼度が指定した値より大きい場合に GPIO が変更されます。

   - **Confidence**: オブジェクト検出が GPIO 変更をトリガーするために必要な最小信頼度を設定します。この値は 1 から 100 の範囲で、100 が最高の信頼度です。

   - **GPIO**: 制御したい XIAO ESP32S3 Sense の特定の GPIO ピンを選択します。利用可能なオプションには GPIO1(DO)、GPIO2(D1) などがあります。

   - **Default Status**: 選択した GPIO ピンのデフォルト状態を選択します。「Low Level」または「High Level」のオプションがあります。

   - **Active Status**: トリガー条件が満たされた場合に GPIO ピンが変更される状態を指定します。「Low Level」または「High Level」のオプションがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

希望するトリガー条件を設定した後、**Confirm** ボタンをクリックして設定を保存します。最後に **Send** ボタンをクリックして、GPIO トリガーコマンドを XIAO ESP32S3 Sense ボードに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

XIAO ボードはコマンドを実行し、Grove OLED を備えた Expansion Board Base for XIAO を介して接続された Grove LED の効果を観察することができます。

:::caution
GPIO 出力機能は、SenseCraft AI プラットフォームと XIAO ESP32S3 Sense ボード間のウェブベースの接続に依存しています。接続が失われたり中断されたりすると、モデル検出に基づく GPIO レベル変更機能は動作しなくなります。プロセス全体を通じて安定した接続を確保してください。
:::

## 結論

このステップバイステップガイドに従うことで、SenseCraft AIプラットフォーム上でXIAO ESP32S3 Senseボードのモデル出力とGPIO設定を構成する方法を学びました。これにより、トレーニング済みモデルが検出した特定のイベント条件に基づいてGPIOレベルの変更をトリガーすることが可能になります。この機能を活用することで、XIAO ESP32S3 SenseとSenseCraft AIを使用したインタラクティブなプロジェクトやアプリケーションを幅広く作成する可能性が広がります。ウェブプラットフォームとデバイス間の安定した接続を維持し、シームレスな操作を確保することを忘れないでください。

## 技術サポートと製品に関するディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>