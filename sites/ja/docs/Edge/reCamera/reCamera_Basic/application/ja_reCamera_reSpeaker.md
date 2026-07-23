---
description: reSpeaker XVF3800 を使用して、音源定位のために reCamera Gimbal を制御する
title: reCamera Gimbal の音源定位
keywords:
  - reCamera Gimbal
  - reSpeaker
  - sound source localization
image: https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker.gif
slug: /sound_source_localization_of_recamera_gimbal_bak
sku: 108990119,114993700
sidebar_position: 11
last_update:
  date: 04/17/2026
  author: Xinrui Wu
createdAt: '2026-04-17'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/sound_source_localization_of_recamera_gimbal_bak/
---


# reCamera Gimbal の音源定位

## はじめに

今回は少し遊び心を加えて、オーディオとビジュアルのエッジ AI を組み合わせた実験をしてみました！🤖

このデモでは、Seeed Studio reSpeaker USB Mic Array を RISC-V 搭載の reCamera Gimbal に接続しました。Sound Source Localization（DOA：到来方向推定）を活用することで、ジンバルのブラシレスモーターが自動的に回転し、リアルタイムで話者の方向を向くようになります。マルチモーダルなエッジデバイス同士がシームレスに連携できることを体験できる、とても楽しいデモです。  

このデモを完成させたあとの動作イメージは次のとおりです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker.gif" /></div>

## ハードウェアの準備

reCamera Gimbal 1 台  
reSpeaker XVF3800 1 台  
コンピュータ 1 台  

<table align="center">
  <tr>
    <th style={{textAlign:'center'}}>reCamera Gimbal</th>
    <th style={{textAlign:'center'}}>reSpeaker XVF3800</th>
  </tr>
  <tr>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
      </div>
    </td>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.jpg" style={{width:300, height:'auto'}}/>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-With-Case-XIAO-ESP32S3-p-6628.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>

## 1. SenseCraft を開いてアプリケーションをデプロイする

### 1.1 reCamera Gimbal の設定

まず、reCamera Gimbal の電源は接続せずに、Type-C を直接コンピュータに接続し、192.168.42.1 にアクセスします。表示された画面の左下にある "Login to SenseCraft" をクリックしてログインし、その後 WiFi を接続します。接続する WiFi がコンピュータと同じであることを確認してください。そのうえで reCamera Gimbal の IP アドレスを確認し、その IP アドレスをコピーしてアクセスし、正常にアクセスできるか確認します。その後 Type-C ケーブルを抜き、12V 電源を接続します。reCamera Gimbal の自動キャリブレーションが完了したら、先ほどの IP アドレスをブラウザで再度開き、reCamera Gimbal の画面に入り、Node-RED が正常に起動していることを確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_1.png" /></div>

### 1.2 アプリケーションのデプロイ

[SenseCraft](https://sensecraft.seeed.cc/ai/application) にアクセスし、"Applications" をクリックして "Sound source localization Camera" という名前のアプリケーションを探します。アプリケーション画面に入ったら "Deploy this Application" をクリックし、"Option 1: Deploy via USB" を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_2.png" /></div>

デプロイ後に表示されるワークフローは、次のようになっているはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_3.png" /></div>

## 2. ソースコードの取得と Python 作業環境の構成

[GitHub プロジェクト](https://github.com/xr686/reCamera-Gimbal-reSpeaker-Tracker.git) にアクセスし、パッケージをダウンロードして解凍します。

USB 経由で reSpeaker と通信するために、コンピュータに依存パッケージをインストールします。

\# 提供された requirements ファイルから必要な Python パッケージをインストール

```bash
pip install -r Sound-Tracking/requirements.txt
```

\# Conda を使用して libusb をインストール（バックエンドドライバサポートに必須）

```bash
conda install -c conda-forge libusb
```

WiFi 接続後、reSpeaker.py のコード内にある "192.168.31.198" を、あなたの reCamera Gimbal の実際の IP アドレスに置き換えてください。

## 3. テスト

コンピュータ上で Python スクリプトを実行し、次の処理を行います。

```bash
python Sound-Tracking/reSpeaker.py
```

マイクに向かって話すと、Python ターミナルに `SPEECH_DETECTED:1` が継続的に表示されると同時に、reCamera があなたの声の方向の角度へすばやく回転するはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_4.png" /></div>

## もっと遊び方を広げよう！

このデモはあくまでスタート地点です。ぜひ皆さんに、この仕組みをベースに二次開発を行い、よりハードコアな遊び方を拡張していただきたいと考えています。例えば：

-**トリガー連動**：Node-RED や Python スクリプトを変更して、reCamera Gimbal が音源方向へ向いた直後に **録画を開始** したり、**写真を撮影** したりするようにできます。

-**インテリジェントセキュリティ**：Home Assistant と組み合わせることで、室内で異常な物音が発生したときに、自動で追跡・録画を行うことができます。

-**視覚と聴覚の二重確認**：YOLO11n の物体検出と聴覚トラッキングを組み合わせます（例：音を検知 → その方向を向く → 視覚認識で「人」かどうかを確認）。

皆さんのアイデアを楽しみにしています！🎉

## 操作手順と注意事項

1. **デプロイの確認**：Node-RED に前述のノードをインポートしたあと、右上の **Deploy** をクリックして反映させてください。

2. **テスト手順**：まず Node-RED を起動し、バックグラウンドで動作していることを確認してから、PC 上で次のコマンドを実行して Python スクリプトを起動します。

reCamera Gimbal が WiFi に接続したあとの実際の IP アドレスで、reSpeaker.py コード内の "192.168.31.198" を必ず置き換えてください。

   ```
   python Sound-Tracking/reSpeaker.py
   ```

マイクに向かって話すと、Python ターミナルに次のような出力が継続的に表示されるはずです。

   ```
   SPEECH_DETECTED: 1
   ```

同時に、reCamera は音の発生源の物理的な角度へすばやく回転します。

3. **物理的な向きのキャリブレーション**：reSpeaker マイクアレイの「0 度」方向は、reCamera のデフォルトの「0 度」（正面）と完全には一致しない場合があります。パン・チルトが回転後に常に一定の角度だけずれている場合（例：常に 90 度ずれている）、Node-RED で新しく追加した `Calculate & Throttle` 関数ノードをダブルクリックし、該当コードのコメントアウトを解除して、オフセット計算 `targetYaw = (targetYaw +90)% 360;` を変更してください。

4. **アンチシェイク設計**：Python コードは 0.1 秒ごとにデータを更新して送信するため、これらの高頻度な信号をすべてモータコントローラ（CAN バス）に送ると、デバイスのバスがオーバーロードしてフリーズしやすくなります。そのため、Node-RED の関数ノード内にアンチシェイクロジックを実装しています（角度変化が `>5°`、または時間間隔が `>1 second` のときのみ、ジンバル制御がトリガーされます）。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルがあります。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
