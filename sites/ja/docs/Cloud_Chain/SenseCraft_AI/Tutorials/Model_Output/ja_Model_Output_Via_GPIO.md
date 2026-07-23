---
sidebar_position: 8
description: この記事では、モデルの認識結果をGPIO経由で送信する方法について説明します。
title: GPIO 経由でのモデル出力
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao
aliases:
  - /sensecraft_ai_output_gpio_xiao
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-12-05'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao/
---

# XIAO ESP32S3 Sense 向け SenseCraft AI におけるモデル出力と GPIO の設定

この Wiki では、SenseCraft AI プラットフォームを使用して XIAO ESP32S3 Sense ボードのモデル出力と GPIO 設定を行う手順をステップバイステップで説明します。これらの手順に従うことで、学習済みモデルが検出した特定のイベント条件に基づいて GPIO レベルの変化をトリガーする方法を学ぶことができます。

## 前提条件

始める前に、以下を用意してください。

1. XIAO ESP32S3 Sense ボード
2. USB-C データケーブル
3. OLED 付き XIAO 用拡張ボードベース
4. Grove LED

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
      <th>OLED 付き XIAO 用拡張ボードベース</th>
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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ 1. XIAO ESP32S3 Sense ワークスペースへアクセスしデバイスを接続する

**[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`XIAO ESP32S3 Sense`** の順に進んで XIAO ESP32S3 Sense ワークスペースにアクセスするか、[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/32)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/xiao_esp32s3_sense_workspace.png" style={{width:1000, height:'auto'}}/></div>

USB-C ケーブルを使用して、XIAO ESP32S3 Sense ボードをコンピュータに接続します。接続が完了したら、ワークスペースページ左上にある **Connect** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ 2. XIAO ESP32S3 Sense にモデルがロードされていることを確認する

先に進む前に、XIAO ESP32S3 Sense ボードに学習済みモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、SenseCraft AI のドキュメントを参照して、デバイスにモデルを学習・デプロイする方法を確認してください。

- [XIAO ESP32S3 Sense 用モデルの使用](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

自分で学習させたモデルを使用したい場合は、次の 2 つの Wiki を参照してください。

- [トレーニングの種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [トレーニングの種類 - 物体検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ 3. GPIO 出力を設定する

ワークスペースページの左サイドバーで **Output** オプションをクリックします。利用可能な出力オプションの中から **GPIO** を選択して、GPIO 設定画面にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

ページ右側で、**Trigger action when event conditions are met** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

ダイアログボックスが表示され、GPIO レベルを変更するためのトリガー条件として機能する各種パラメータの入力を求められます。これらのパラメータには次のものが含まれます。

- **Object**: モデルが検出したときに GPIO レベルを変更する対象オブジェクトを指定します。たとえば、顔が検出されたときに GPIO を変化させたい場合は「face」とします。

- **Condition**: トリガーが発生するために満たす必要がある条件を選択します。「Greater than」「Less than」「Equal to」などのオプションがあります。たとえば「Greater than」を選択すると、検出されたオブジェクトの信頼度が指定値より大きい場合に GPIO が変化します。

- **Confidence**: オブジェクト検出が GPIO 変更をトリガーするために必要な最小信頼度を設定します。この値は 1 から 100 の範囲で、100 が最も高い信頼度です。

- **GPIO**: 制御したい XIAO ESP32S3 Sense 上の特定の GPIO ピンを選択します。利用可能なオプションには GPIO1(DO)、GPIO2(D1) などがあります。

- **Default Status**: 選択した GPIO ピンのデフォルト状態を選択します。「Low Level」と「High Level」のオプションがあります。

- **Active Status**: トリガー条件が満たされたときに GPIO ピンが変化すべき状態を指定します。「Low Level」と「High Level」のオプションがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

希望するトリガー条件を設定したら、**Confirm** ボタンをクリックして設定を保存します。最後に **Send** ボタンをクリックして、GPIO トリガーコマンドを XIAO ESP32S3 Sense ボードに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

これで XIAO ボードがコマンドを実行し、Grove OLED 付き XIAO 用拡張ボードベースを介して接続された Grove LED 上でその効果を確認できます。

:::caution
GPIO 出力機能は、SenseCraft AI プラットフォームと XIAO ESP32S3 Sense ボード間の Web ベースの接続に依存していることに注意してください。接続が失われたり中断されたりすると、モデル検出に基づく GPIO レベル変更機能は動作を停止します。作業中は安定した接続を維持するようにしてください。
:::

## まとめ

このステップバイステップガイドに従うことで、SenseCraft AI プラットフォーム上で XIAO ESP32S3 Sense ボードのモデル出力と GPIO 設定を行う方法を学びました。これにより、学習済みモデルが検出した特定のイベント条件に基づいて GPIO レベルの変化をトリガーできるようになりました。この機能により、XIAO ESP32S3 Sense と SenseCraft AI を使用して、インタラクティブなプロジェクトやアプリケーションを幅広く作成することが可能になります。シームレスな動作のために、Web プラットフォームとデバイス間の接続を安定して保つことを忘れないでください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択できる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
